# Aplicação com autenticação utilizando passport
Nesta aplicação será implementada autenticação no acesso usando passport.

# Utilizando arquitetura MVC
Tentarei utilizar arquitetura MVC neste projeto, e estou aberto a novas ideias para a arquitetura do projeto.
Para dividir Model, Controller e View no front teremos uma pasta **api** para a lógica de comunicação com o servidor, **view** para mostrar as páginas ao cliente e **components** para fazer os componentes que irão compor as views, e no back, teremos **database**, para configuração do sequelize e as tabelas, **routes** para as rotas solicitadas pelo cliente, e **utils** para definição de alguns algoritmos e implementações extras ao destacados.

# Créditos
Modelo fullStack :https://github.com/crsandeep/simple-react-full-stack;

# Segurança do arquivo .env

Utilize o gitignore para não publicar seus .env, e utilize o seguinte comando para encriptar seu arquivo:

```shell
npx secure-env .env -s teste
```

Se arquivo .env, será encriptado utilizando o algoritmo aes256.


Para criar seu arquivo .env novamente, execute:
```json
let secureEnv = require('secure-env');
global.env = secureEnv({secret:'mySecretPassword'});
```

# Banco de Dados
Irei criar um banco de dados relacional com mysql em um abiente docker com o seguinte comando:
```shell
docker run --name myDB -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:latest
```

Utilizarei como ORM o sequelize, podemos criar uma estrutura do projeto com:
```shell
# node_modules/.bin/sequelize init
```

ou 

```shell
# npx sequelize-cli init
```

em config, configure o local do BD.
# Usando dotenv-safe
Ferramenta para não expor dados secretos da aplicação no repositório aberto.

# Conexão com o BD
Utilizo o sequelize como ORM e comunicador com o BD.

# Desenvolvedor
Kleyton Leite