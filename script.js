// ==========================================================================
// ARQUIVO JAVASCRIPT PRINCIPAL
// Funções simples com responsabilidade única e comentários em português.
// ==========================================================================

// Seleção dos elementos necessários
const botaoTema = document.querySelector("#botao-tema");

// Função simples para aplicar o tema salvo
function aplicarTemaSalvo() {
    const temaSalvo = localStorage.getItem("tema-preferido");

    if (temaSalvo === "escuro") {
        document.body.classList.add("modo-escuro");
        if (botaoTema) {
            botaoTema.textContent = "Modo Claro";
        }
    } else {
        document.body.classList.remove("modo-escuro");
        if (botaoTema) {
            botaoTema.textContent = "Modo Escuro";
        }
    }
}

// Função simples para alternar entre modo claro e escuro e salvar a preferência
function alternarTema() {
    document.body.classList.toggle("modo-escuro");

    const modoAtivo = document.body.classList.contains("modo-escuro");
    if (modoAtivo) {
        botaoTema.textContent = "Modo Claro";
        localStorage.setItem("tema-preferido", "escuro");
    } else {
        botaoTema.textContent = "Modo Escuro";
        localStorage.setItem("tema-preferido", "claro");
    }
}

// Aplica o tema salvo assim que a página é carregada
aplicarTemaSalvo();

// Ouvinte de evento de clique no botão de tema
if (botaoTema) {
    botaoTema.addEventListener("click", alternarTema);
}

// Seleção dos elementos do formulário de contato
const formularioContato = document.querySelector("#formulario-contato");
const mensagemFeedback = document.querySelector("#mensagem-feedback");
const campoTelefone = document.querySelector("#telefone");

// Função executada quando o usuário tenta enviar o formulário
function enviarMensagemContato(evento) {
    // Evita o recarregamento padrão da página ao enviar
    evento.preventDefault();

    // Pega o valor digitado no telefone e remove espaços extras
    const telefoneValor = campoTelefone ? campoTelefone.value.trim() : "";

    // Verifica se o campo telefone ficou vazio
    if (telefoneValor === "") {
        // Exibe o texto de alerta para preenchimento
        mensagemFeedback.textContent = "O campo telefone é obrigatório ser preenchido.";
        // Remove estilo visual de sucesso, se houver
        mensagemFeedback.classList.remove("sucesso");
        // Adiciona estilo visual de erro (ex: texto vermelho)
        mensagemFeedback.classList.add("erro");
        // Coloca o cursor direto no campo telefone para facilitar
        campoTelefone.focus();
        // Interrompe a função aqui para não prosseguir
        return;
    }

    // Define o texto informando que o envio deu certo
    mensagemFeedback.textContent = "Mensagem enviada com sucesso! Em breve entrarei em contato.";
    // Remove o estilo de erro anterior
    mensagemFeedback.classList.remove("erro");
    // Adiciona o estilo visual de sucesso (ex: texto verde)
    mensagemFeedback.classList.add("sucesso");

    // Limpa todos os campos digitados no formulário
    formularioContato.reset();
}

// Verifica se o formulário realmente existe na página antes de escutar o evento
if (formularioContato) {
    // Dispara a função enviarMensagemContato assim que o formulário for enviado
    formularioContato.addEventListener("submit", enviarMensagemContato);
}

// ==========================================================================
// FUNÇÕES DE DATA, HORÁRIO E SAUDAÇÃO
// ==========================================================================

// Seleção dos elementos do cabeçalho
const textoSaudacao = document.querySelector("#texto-saudacao");
const textoRelogio = document.querySelector("#texto-relogio");

// Função simples para retornar a saudação de acordo com a hora
function obterSaudacao(hora) {
    if (hora >= 5 && hora < 12) {
        return "Bom dia!";
    } else if (hora >= 12 && hora < 18) {
        return "Boa tarde!";
    } else {
        return "Boa noite!";
    }
}

// Função simples para formatar e atualizar data, hora e saudação
function atualizarDataHoraESaudacao() {
    const agora = new Date();

    // Obtém hora e minutos com dois dígitos
    const hora = agora.getHours();
    const minutos = String(agora.getMinutes()).padStart(2, "0");
    const segundos = String(agora.getSeconds()).padStart(2, "0");

    // Formata a data (dia/mês/ano)
    const dia = String(agora.getDate()).padStart(2, "0");
    const mes = String(agora.getMonth() + 1).padStart(2, "0");
    const ano = agora.getFullYear();

    // Atualiza os textos na tela
    if (textoSaudacao) {
        textoSaudacao.textContent = `${obterSaudacao(hora)}`;
    }

    if (textoRelogio) {
        textoRelogio.textContent = `${dia}/${mes}/${ano} - ${hora}:${minutos}:${segundos}`;
    }
}

// Inicia imediatamente e atualiza a cada 1 segundo (1000ms)
atualizarDataHoraESaudacao();
setInterval(atualizarDataHoraESaudacao, 1000);
