let url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL';



function convertValue() {
    let input = document.getElementById("content_value").value;

    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            let moeda = data.USDBRL.high;
           
            let result = `${(input / moeda).toFixed(2)} doláres`;
            if(input == ""){
                verificando();
            }else{
            document.getElementById("resp").innerHTML = result;
            }
        }) 

}
function verificando() {
    alert("Preencha o campo para prosseguir")
}