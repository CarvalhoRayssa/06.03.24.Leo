import React from 'react';

function App(){
    const[nome, setNome] = React.useState('')
    const[sobrenome, setSobrenome] = React.useState('')
    const[email, setEmail] = React.useState('')
    const[senha, setSenha] = React.useState('')

    const handleSubmit = (event) => {
        event.preventDefault() //impede o comportamento padrão de recarregar a página ao clicar no botão.

        alert(`Nome: ${nome}, Sobrenome: ${sobrenome}, Email: ${email}, Senha: ${senha}`)
        //alert manda mensagem de 'erro'
    };
    return(
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>

        <label htmlFor="nome">Nome:</label>
        <input type="text" name="nome" id="nome"
        onChange={(e) => setNome(e.target.value)} />
        <br/>

        <label htmlFor="sobrenome">Sobrenome:</label>
        <input type="text" name="sobrenome" id="sobrenome"
        onChange={(e) => setSobrenome(e.target.value)} />
        <br/>

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email"
        onChange={(e) => setEmail(e.target.value)} />
        <br/>

        <label htmlFor="senha">Senha:</label>
        <input type="password" name="senha" id="senha"
        onChange={(e) => setEmail(e.target.value)} />
        <br/>

        <button type="submit">Enviar</button>
      </form>
    );
}

export default App;