

/* 🚨NÃO ALTERAR A CLASSE 🚨 */

class Senai {
  constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
    this.codigo = codigo;
    this.cidade = cidade;
    this.anoConstrucao = anoConstrucao;
    this.qtdeCursos = qtdeCursos;

    this.idade = new Date().getFullYear() - anoConstrucao;
    this.statusFuncionamento = false;
  }

  abrirEscola() {
    this.statusFuncionamento = true;
  }

  fecharEscola() {
    this.statusFuncionamento = false;
  }
}

/* 🚨NÃO ALTERAR A CLASSE 🚨 */



/* SUGESTÃO DE LÓGICA PARA O DESENVOLVIMENTO */



/* ===== OBTER ELEMENTOS ===== */

const codigoA = document.querySelector('.unidadeA__codigo')
const cidadeA = document.querySelector('.unidadeA__cidade')
const anoA = document.querySelector('.unidadeA__ano')
const cursosA = document.querySelector('.unidadeA__cursos')



const codigoB = document.querySelector('.unidadeB__codigo')
const cidadeB = document.querySelector('.unidadeB__cidade')
const anoB = document.querySelector('.unidadeB__ano')
const cursosB = document.querySelector('.unidadeB__cursos')


const mensagemA = document.querySelector('.unidadeA__mensagem')
const mensagemB = document.querySelector('.unidadeB__mensagem')



const instanciarA = document.querySelector('.unidadeA__instanciar')
const instanciarB = document.querySelector('.unidadeB__instanciar')

const abrirA = document.querySelector('.unidadeA__abrir')
const abrirB = document.querySelector('.unidadeB__abrir')

const fecharA = document.querySelector('.unidadeA__fechar')
const fecharB = document.querySelector('.unidadeB__fechar')













/* ===== FUNÇÃO DE VALIDAÇÃO ===== */

function Validar(){
   if (isNaN(codigoA) | isNaN(cidadeA) | isNaN(anoA) | isNaN(cursosA) | isNaN(codigoB) | isNaN(cidadeB) | isNaN(anoB) | isNaN(cursosB) )
    mensagemA.textContent = 'Preencha todos os campos para criar a escola'
    mensagemB.textContent = 'Preencha todos os campos para criar a escola'
}

  






/* ===== INSTANCIAR ESCOLA A ===== */


const UnidadeA = new Senai(codigoA, cidadeA, anoA, cursosA)
const UnidadeB = new Senai(codigoB, cidadeB, anoB, cursosB)



/* ===== INSTANCIAR ESCOLA B ===== */


/* ===== ABRIR ESCOLA ===== */


/* ===== FECHAR ESCOLA ===== */


/* ===== RELATÓRIO DE COMPARAÇÃO ===== */


/* ===== NOVA CONSULTA ===== */


