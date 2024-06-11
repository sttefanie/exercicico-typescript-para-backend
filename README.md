# Setup do Ambiente

## Instalação de Dependências
Após realizar o download do projeto, instale as dependências necessárias executando o comando:
```bash
npm install

```


Ferramentas
Insomnia
O Insomnia é a ferramenta escolhida para testar APIs e interagir com serviços web durante este curso. Ele permite desenvolver, projetar, testar e documentar APIs de maneira eficiente.

Acesse a página oficial do Insomnia para baixar e instalar a versão compatível com o seu sistema operacional.
Para automatizar a criação das requisições, disponibilizamos um arquivo JSON com a coleção Adopet. Importe-o no Insomnia clicando em File > Import e selecione o arquivo.

Diagrama de Entidade-Relacionamento (DER)
O Diagrama de Entidade-Relacionamento (DER) é uma representação gráfica da estrutura e dos relacionamentos de um banco de dados.

Acesse aqui o DER do projeto Adopet.
Para criar seu próprio DER, você pode usar ferramentas como Lucidchart ou Draw.io.

Visual Studio Code (VSC)
O Visual Studio Code é o editor utilizado para escrever códigos durante este curso.

Acesse a página inicial do VSC para baixar e instalar a IDE.
Extensão ESLint
Para configurar o ESLint no VSC e corrigir erros de digitação automaticamente:

Pressione Ctrl + Shift + P para abrir a paleta de comandos do VSC.
Digite settings e selecione a opção Preferences: Open User Settings.
No arquivo settings.json, adicione a seguinte configuração:


```
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```
Assim, sempre que salvar um arquivo, as configurações do ESLint corrigirão os erros automaticamente.
Se estiver usando Windows, adicione também:

```
"files.eol": "\n"
```


Isso configura o fim de linha como \n (LF), que é a configuração padrão do ESLint.

Configuração do Git
Para evitar problemas de fim de linha ao usar Git, execute o seguinte comando no terminal:

```
git config --global core.autocrlf false
```


Executando o ESLint
Caso tenha problemas de fim de linha ou outros problemas de ESLint, execute:

```
npm run lint
```



Isso corrigirá automaticamente os erros.


