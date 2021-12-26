# 🟠 Validar Fomulário com JavaScript puro

 Este projeto foi feito para resolver um problema de login, em que o atributo "requerid" do HTML5 não funcionava em navegadores mais antigos.<br><br>
 O Projeto foi feito com tamplete simples, apenas para exibir o projeto JavaScript que está sendo executado por debaixo dos panos.

## Imagem Inicial
<img src="https://github.com/IsaqueAmorim/ValidarForm/blob/main/screenshots/default.PNG"></img>

## **Requisitos**:
<br><br>
1) Fazer um Formulário.
2) O Campo Email não pode ser vazio.
3) O Campo Email deve conter um "@", se não conter não poderá ser enviado.
4) O campo Senha não pode ser vazio.
5) O campo Senha deve conter pelo menos 6 caracteres.
6) Se tudo estiver conforme o as regras exibir a mensagem sucesso.

## **Lógica Usada** 
<br><br>
>1) Se o campo de Email for igual a "vazio" execuar mesagem de erro, caso contrário executar verificação de caracteres.<br><br>
>2) Se entre os caracteres não conter o "@" executar mensagem de erro, caso contrario verficar se senha é igual a "vazio".<br><br>
>3) Se senha for igual a "vazio" executar mensagem de erro, caso contrario verificar se a senha possui no mínimo 6 caracteres.<br><br>
>4) Se a senha for meno que 6 caracteres executar mesagem de erro, caso contrario executar login com sucesso.<br><br>
<br><br>
## **❌ Email Vazio**:
<img src="https://github.com/IsaqueAmorim/ValidarForm/blob/main/screenshots/no%20email.PNG"></img>
## **❌ Email sem @:**
<img src="https://github.com/IsaqueAmorim/ValidarForm/blob/main/screenshots/invalid%20email.PNG"></img>
## **❌ Senha Vazia:**
<img src="https://github.com/IsaqueAmorim/ValidarForm/blob/main/screenshots/no%20password.PNG"></img>
## **❌ Senha sem o mínimo de caracteres:**
<img src="https://github.com/IsaqueAmorim/ValidarForm/blob/main/screenshots/invalid%20password.PNG"></img>
## **✅ Sucesso:**
<img src="https://github.com/IsaqueAmorim/ValidarForm/blob/main/screenshots/sucesso.PNG"></img>
