import { useContext } from 'react'
import { Container } from "./styles";
import { TarefaContext } from '../../contexts/tarefaContext';

interface PropsListTarefas {
  abrirModal: () => void;
}

export function ListTarefas(props: PropsListTarefas) {

  const { tarefas, funEditarTarefa } = useContext(TarefaContext)
  const contenxt = useContext(TarefaContext);
  const quadro1Tarefas = tarefas.filter(
    (tarefa) => tarefa.quadro === "Quadro 1"
  );
  const quadro2Tarefas = tarefas.filter(
    (tarefa) => tarefa.quadro === "Quadro 2"
  );
  const quadro3Tarefas = tarefas.filter(
    (tarefa) => tarefa.quadro === "Quadro 3"
  );

  return (
    <Container>
      <>
        <ul>
          <h3>Quadro 1</h3>
          {quadro1Tarefas.map((tarefa) => (
            <li key={tarefa.id}>
              <div>
                <h4>{tarefa.titulo}</h4>
                <p>{tarefa.descricao}</p>
                <div className='d-flex'>
                  <button
                    className='btn btn-info'
                    type='button'
                    onClick={() => {
                      funEditarTarefa({ editar: true, tarefa: tarefa })
                      props.abrirModal();
                    }}
                  >
                    <i className="bi bi-brush"></i>
                  </button>
                  <button
                    className='btn btn-danger ms-1'
                    onClick={() =>
                      contenxt.deleteTarefa(tarefa.id)
                    }
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </>
      <>
        <ul>
          <h3>Quadro 2</h3>
          {quadro2Tarefas.map((tarefa) => (
            <li key={tarefa.id}>
              <div>
                <h4>{tarefa.titulo}</h4>
                <p>{tarefa.descricao}</p>
                <div className='d-flex'>
                  <button
                    className='btn btn-info'
                    type='button'
                    onClick={() => {
                      funEditarTarefa({ editar: true, tarefa: tarefa })
                      props.abrirModal();
                    }}
                  >
                    <i className="bi bi-brush"></i>
                  </button>
                  <button
                    className='btn btn-danger ms-1'
                    onClick={() =>
                      contenxt.deleteTarefa(tarefa.id)
                    }
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </>
      <>
        <ul>
          <h3>Quadro 3</h3>
          {quadro3Tarefas.map((tarefa) => (
            <li key={tarefa.id}>
              <div>
                <h4>{tarefa.titulo}</h4>
                <p>{tarefa.descricao}</p>
                <div className='d-flex'>
                  <button
                    className='btn btn-info'
                    type='button'
                    onClick={() => {
                      funEditarTarefa({ editar: true, tarefa: tarefa })
                      props.abrirModal();
                    }}
                  >
                    <i className="bi bi-brush"></i>
                  </button>
                  <button
                    className='btn btn-danger ms-1'
                    onClick={() =>
                      contenxt.deleteTarefa(tarefa.id)
                    }
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </>
    </Container>

  )
}
