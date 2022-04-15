A porta 5000 esta sendo exposta via nginx. O nginx realiza o proxy para a aplicação node, disponibilizada na porta 3000 do container.
Por fim, a aplicação persiste um nome gerado randomicamente no banco mysql quando acessamos o endereço http://localhost:5000/ pelo browser.

Para verificar os dados no banco de dados mysql podemos rodar o seguinte comando

`mysql -uroot -p`

`use nodedb`

`select * from people;`
