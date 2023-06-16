import { Input } from '@chakra-ui/react';
import React, { useState, useTransition } from 'react';

const UseStateHook = () => {

    let userName = "João"

    const [name, setName] = useState("Eros");


    const changeName = () => {
        userName = "João Teste";
        setName(name => name + " Ferreira");
    }

    const [numero, setNumero] = useState(0)

    const handleButtonClick = (desc) => {

        if(desc) {
            setNumero(numero => numero - 1);
        }else{
            setNumero(numero => numero + 1);
        }

    }

   
    const [nome, setNome] = useState("Josefa") 

    const handleSubmit = (text) => {
        console.log(text)

    }


  return (
    <div>
        {/* Aula 01 */}
        <h1>{userName}</h1>
        <h1>{name}</h1>
        <button onClick={changeName}>Mudar Nomes!</button>
        <h1>{numero}</h1>
        <button style={{ marginRight:"1rem" }} onClick={() => handleButtonClick(false)}> + </button>
        <button onClick={() => handleButtonClick(true)}> - </button>


        {/* Aula 02 */}
        <h1>AULA 02</h1>
        <h1>Digite seu nome!</h1>
        <Input size={"sm"} width={"20%"} borderColor={"red"} onChange={(event) => handleSubmit(event.target.value) || setNome(event.target.value)} />
        <h1>{nome}</h1>



    </div>
  );
};

export default UseStateHook;