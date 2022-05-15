// const numbers = [1, 2, 3, 4]; // [maça, laranja, banana]

// // let arr = [];
// // let sum = 0;

// // for (let i = 0; i < numbers.length; i++) {
//   // filtrando apenas os elementos que atendem a condição
//   // if (numbers[i] > 2) {
//   //   arr.push(numbers[i])
//   // }
  
//   // encontrando primeiro elemento da condição
//   // if (numbers[i] > 2) {
//   //   console.log(numbers[i]);
//   //   break;
//   // }
  
//   // modificando valores
//   // arr.push(numbers[i] + 10); 
  
//   // somando valores
//   // sum += numbers[i]; // sum = sum + numbers[i]
  
//   // checando se algum dos elementos corresponde a condição em boolean
//   // if (numbers[i] > 2) {
//   //   console.log(true);
//   //   break;
//   // }
  
//   // checando se todos os elementos correspondem a condição em boolean
//   // if (numbers[i] > 2) {
//   //   arr.push(numbers[i]);
//   // }
//   // if (i === (numbers.length - 1)) {
//   //   if(arr.length === numbers.length) {
//   //     console.log(true);
//   //   } else {
//   //     console.log(false);
//   //   }
//   // }
// // };

// // console.log(arr);
// //console.log(sum);

// // /* ---------------------------------------------------------------- */

// // essential methods in javascript

// console.log('filter = ', numbers.filter(el => el > 2)); 
// console.log('find = ', numbers.find(el => el > 2)); 
// console.log('map = ', numbers.map(el => el + 10));
// console.log('reduce = ', numbers.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   0
// ))

// // methods that return boolean value
// console.log('some = ', numbers.some(el => el > 2));
// console.log('every = ', numbers.every(el => el > 2));


//========================================= DESAFIOS ==========================================

const users = [
	{
		login: 'brunohs',
		email: 'brunohs@pbtech.net.br',
		age: 18
	},
	{
		login: 'thainabcc',
		email: 'thaina.biudes@gmail.com',
		age: 25
	},
	{
		login: 'annecl',
		email: 'annecl@pbtech.net.br',
		age: 34
	},
  {
   	login: 'willianfl',
	  email: 'willianfl@pbtech.net.br',
  	age: 30
	},
  {
   	login: 'lucasplc',
	  email: 'lucasplc@pbtech.net.br',
  	age: 20
	}
];

//========================================== DESAFIO 1 ===============================================
/*
  Criar uma função para somar a idade de todos os usuários na lista -> map & reduce ✅
  Criar uma função para validar se o login existe dentro do objeto -> find ✅
  Criar uma função para mostrar todos os emails no console.log -> map ✅
  Criar uma função para contar quantos usuários possuem e-mail da empresa pbtech.net.br -> filter ✅
*/

function somarIdade() {
  const idades = users.map(user => user.age);
  
  console.log(idades);
  
  const soma = idades.reduce((previous, current) => previous + current, 0);
  
  console.log(soma);
}

// somarIdade();

function validaLogin(param) {
  const login = users.find(el => el.login === param);
  
  if (login === undefined) {
    console.log('Não encontramos esse usuário');
  } else {
    console.log(`O usuário ${login.login} foi encontrado.`) // "O usuário" + login + "foi encotrado."
  }
}

// validaLogin('lucasplc');

function mostrarEmails() {
  const lista = users.map(el => el.email);
  
  console.log(`A lista de e-mail foi ${lista}`);
}

// mostrarEmails();


function contarEmails() {
  const emailsPbTech = users.filter(user => user.email.endsWith('@pbtech.net.br'));
  
  console.log(emailsPbTech);
  
  console.log(`A soma dos e-mails pertencentes ao pbtech.net.br foi de ${emailsPbTech.length}`)
}

//contarEmails();


// ======================================= DESAFIO 2 ==========================================

// function ValidateForm() {
//     /*
//         1. Referenciar elementos dos campos do formulário pelo ID
//         2. Verificar se a senha e o e-mail estão válidos 
//         3. Se tudo estiver ok, alertar o usuário que o formulário foi submetido

//         Plus: Alertar o usuário quando o e-mail ou senha estiverem vazios ou incorretos.
//     */
// }

function ValidateForm() {

  //Pega os valores digitados no formulário através do ID
  var emailForm = document.getElementById('email').value;
  var senha = document.getElementById('passwd').value;

 //verifica se todos os campos foram preenchidos
  if (emailForm === '' || senha === '') {                  
      alert("Todos os campos devem ser preenchidos!");
  }else{
      validaLogin(emailForm);
  }

  //Validando o e-mail e a senha
  function validaLogin(param) {
      const email = users.find(el => el.email === param);

      if (email === undefined || senha !== "127") {
          alert('O email ou senha estão incorretos. Por gentileza, digite novamente.');
      } else {
          alert(`Formulário enviado com sucesso!`)

      }
  }
}


