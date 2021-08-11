import React from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

function FormularioCadastro() {
  return (
    <form>
      <TextField id="nome" label="Nome" variant="outlined" margin="normal" fullWidth required/>
      <TextField id="sobrenome" label="Sobrenome" variant="outlined" margin="normal" fullWidth required/>
      <TextField id="cpf" label="CPF" variant="outlined" margin="normal" fullWidth required/>

      <label>Promoções</label>
      <input type="checkbox" />
      <label>Novidades</label>
      <input type="checkbox" />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
