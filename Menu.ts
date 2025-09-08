import readlinesync = require("readline-sync");

function main() {

    let opcao: number;

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                    DOCE ENCANTO                     ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Itens cadastrados                    ");
        console.log("            3 - Buscar produto por Nome              ");
        console.log("            4 - Atualizar Dados do Produto           ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log("\nDoce Encanto - Um universo de doces!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Produto \n\n");

                break;
            case 2:
                console.log("\n\nItens cadastrados\n\n");

                break;
            case 3:
                console.log("\n\nBuscar produto por Nome\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar Dados do Produto\n\n");

                break;
            case 5:
                console.log("\n\nApagar Produto\n\n");

                break;

        }
    }

}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Desenvolvido por: Mariana Santana ");
    console.log("github.com/marimp3");
    console.log("Email:marimoon1996@outlook.com");
    console.log("");
    console.log("*****************************************************");
}

main();
