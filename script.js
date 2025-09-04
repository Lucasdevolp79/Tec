// JS simples para menu e validação do formulário
// ALTERAÇÃO: Implementação própria de interação
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  const form = document.getElementById('contato-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = document.getElementById('nome');
      const email = document.getElementById('email');
      const assunto = document.getElementById('assunto');
      const mensagem = document.getElementById('mensagem');

      let ok = true;

      // Limpa mensagens
      ['erro-nome','erro-email','erro-assunto','erro-mensagem'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = '';
      });

      // Regras básicas
      if (!nome.value.trim()) {
        ok = false; document.getElementById('erro-nome').textContent = 'Informe seu nome.';
      }
      if (!email.value.includes('@')) {
        ok = false; document.getElementById('erro-email').textContent = 'E-mail inválido.';
      }
      if (!assunto.value) {
        ok = false; document.getElementById('erro-assunto').textContent = 'Selecione um assunto.';
      }
      if (mensagem.value.trim().length < 10) {
        ok = false; document.getElementById('erro-mensagem').textContent = 'Escreva ao menos 10 caracteres.';
      }

      const okBox = document.getElementById('form-ok');
      if (ok) {
        okBox.textContent = 'Mensagem enviada! (Exemplo: sem backend)';
        form.reset();
      } else {
        okBox.textContent = '';
      }
    });
  }
});
