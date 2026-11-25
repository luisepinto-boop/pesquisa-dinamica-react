import { useState } from "react";
import "./App.css";

// Tipo Pessoa
type Pessoa = {
  id: number;
  nome: string;
};

// Dados das pessoas
const pessoas: Pessoa[] = [
  { id: 1, nome: "Amanda" },
  { id: 2, nome: "Amarildo" },
  { id: 3, nome: "Ana" },
  { id: 4, nome: "André" },
  { id: 5, nome: "Bruno" },
  { id: 6, nome: "Carlos" },
  { id: 7, nome: "Marcelo" },
  { id: 8, nome: "Maria" },
  { id: 9, nome: "Mariana" },
  { id: 10, nome: "Pedro" },
  { id: 11, nome: "Paulo" },
  { id: 12, nome: "Rafael" },
  { id: 13, nome: "Roberto" },
  { id: 14, nome: "Sabrina" },
  { id: 15, nome: "Thiago" },
];

function App() {

  // Estado da pesquisa
  const [pesquisa, setPesquisa] = useState<string>("");

  // Filtragem dos nomes
  const pessoasFiltradas: Pessoa[] = pessoas.filter(
    (pessoa) =>
      pessoa.nome
        .toLowerCase()
        .startsWith(pesquisa.trim().toLowerCase())
  );

  return (
    <div className="container">

      <div className="card">

        <h1>Pesquisa Dinâmica</h1>

        <p className="subtitulo">
          Pesquise pessoas pelo início do nome.
        </p>

        {/* Campo de pesquisa */}
        <input
          type="text"
          placeholder="Digite um nome..."
          value={pesquisa}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPesquisa(e.target.value)
          }
        />

        {/* Informações */}
        <div className="informacoes">

          <span>
            Total encontrado: {pessoasFiltradas.length}
          </span>

          <button onClick={() => setPesquisa("")}>
            Limpar pesquisa
          </button>

        </div>

        {/* Lista de pessoas */}
        <ul className="lista">

          {pessoasFiltradas.length > 0 ? (

            pessoasFiltradas.map((pessoa) => (

              <li key={pessoa.id}>

                <span className="avatar">
                  {pessoa.nome.charAt(0).toUpperCase()}
                </span>

                <span>{pessoa.nome}</span>

              </li>

            ))

          ) : (

            <li className="sem-resultado">
              Nenhuma pessoa encontrada.
            </li>

          )}

        </ul>

      </div>

    </div>
  );
}

export default App;