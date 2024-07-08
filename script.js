function clearFormInputs() {
    var inputs = document.querySelectorAll('input[type="text"], input[type="date"], input[type="checkbox"]');
    inputs.forEach(input => {
        input.value = ''; // Limpa o valor de cada campo selecionado
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form'); 
    form.addEventListener('submit', function(event) { 
        event.preventDefault();

        var inputs = document.querySelectorAll('input[type="text"]');
        inputs.forEach(input => {
            input.value = input.value.toUpperCase();
        });

        var formData = new FormData(form); 
        fetch(form.action, { 
            method: 'POST',
            body: formData,
        })
       .then(response => {
            if (!response.ok) { 
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
       .then(data => {
            console.log('Dados enviados com sucesso:', data);
            alert('Formulário enviado com sucesso!');
            clearFormInputs(); 
            location.reload(); 
        })
       .catch(error => {
            console.error('Erro ao enviar o formulário:', error);
            alert('Usuário inserido na liste de viagem com sucesso.');
            clearFormInputs(); 
        });
    });
});
// script.js
document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById('toggleSidebar');
    var sidebar = document.querySelector('.sidebar');

    toggleButton.addEventListener('click', function() {
        if (sidebar.classList.contains('collapsed')) {
            sidebar.classList.remove('collapsed');
            sidebar.classList.add('expanded');
            toggleButton.textContent = 'Fechar';
        } else {
            sidebar.classList.remove('expanded');
            sidebar.classList.add('collapsed');
            toggleButton.textContent = 'Menu';
        }
    });
});
// script.js
document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.querySelector('.sidebar');

    // Função para expandir o sidebar
    function expandSidebar() {
        sidebar.classList.remove('collapsed');
        sidebar.classList.add('expanded');
    }

    // Função para recolher o sidebar
    function collapseSidebar() {
        sidebar.classList.remove('expanded');
        sidebar.classList.add('collapsed');
    }

    // Evento de mouseover para expandir o sidebar
    sidebar.addEventListener('mouseover', expandSidebar);

    // Evento de mouseout para recolher o sidebar
    sidebar.addEventListener('mouseout', collapseSidebar);
});

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona a imagem e o sidebar
    var image = document.querySelector('.top-header img');
    var sidebar = document.querySelector('.sidebar');

    // Função para expandir o sidebar
    function expandSidebar() {
        sidebar.classList.remove('collapsed');
        sidebar.classList.add('expanded');
    }

    // Função para colapsar o sidebar
    function collapseSidebar() {
        sidebar.classList.remove('expanded');
        sidebar.classList.add('collapsed');
    }

    // Adiciona o evento de hover à imagem
    image.addEventListener('mouseover', expandSidebar);
    image.addEventListener('mouseout', collapseSidebar);
});
function sairDoSistema() {
    // Redireciona para a página inicial
    window.location.href = "index.html";
}


 // Mascara do CPF 000.000.000-00
document.getElementById('cpf').addEventListener('input', function(e) {
    var value = e.target.value;
    var cpfPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
                          .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
                          .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
                          .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona traço após o nono dígito
                          .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona traço após o nono dígito
                          .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona traço após o nono dígito
                         // .replace(/(-\d{2})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
    e.target.value = cpfPattern;
  });

  document.addEventListener("DOMContentLoaded", function() {
    var selectElement = document.querySelector('.form-cons select');
    if (selectElement) {
        // Converte todas as opções para letras maiúsculas
        Array.from(selectElement.options).forEach(function(option) {
            option.textContent = option.textContent.toUpperCase();
        });
    }
});
    
