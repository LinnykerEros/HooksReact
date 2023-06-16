import { Box, Input, Grid, GridItem, Button } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';



const Login = () => {
  
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = () => {
        console.log("email", email);
        console.log("password", password);

        // try{

        //     const token = api.post("/token", {
        //         params: { 
        //             email: email, 
        //             password: password
        //         }
        //     })

        //     if(token){
        //        descript.token(token)
        //        setUser(token)
        //     }

        // }catch(error){
        //     console.log(error)
        // }


    }

  return (
    <div>
        <Grid gap={'1rem'} mt={"20rem"}>
            <GridItem>
                    <Box> 
                      <Input onChange={(event) => setEmail(event.target.value)} type={"email"} width={"30%"} borderColor={"black"} placeholder='Email' size={"md"}/>
                    </Box>
            </GridItem>

            <GridItem>
                    <Box>
                        <Input onChange={(event) => setPassword(event.target.value)} type={"password"} width={"30%"} borderColor={"black"} placeholder='Senha' size={"md"}/>
                    </Box>
            </GridItem>

            <GridItem>
                    <Box>
                        <Button onClick={handleSubmit} colorScheme={"green"} width={"20%"}>
                            Entrar
                        </Button>
                    </Box>
            </GridItem>


        
         

        </Grid>
      
    </div>
  );
};

export default Login;