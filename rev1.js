//definimos as variaveis iniciais
    let vidaCharmander = 80;
    let vidaPikachu = 80;
    let rodada = 1

//parte da repetição

while(vidaCharmander > 0 && vidaPikachu >0 && rodada<500){
    //dano de ambos os pokemons
    let pikaDano = Math.floor(Math.random()*25+10);
    let charDano = Math.floor(Math.random()*22+8);
    vidaCharmander-= pikaDano
    vidaPikachu-= charDano
    console.log("rodada:", rodada)
    console.log(`☣️ pikachu deu ${pikaDano} e esta com ${vidaPikachu} de energia`)
    console.log(`🔥 charmander deu ${charDano} e esta com ${vidaCharmander} de energia`)
    console.log('--------------------------------------------------------------------------------------------')
    rodada++
}//parte onde os resultados são apresentados
if(vidaCharmander<=0 && vidaPikachu<=0){
    console.log('DEU EMPATE, AMBOS RETORNAM PARA SEU TREINADOR')
}else if(vidaCharmander>vidaPikachu && vidaCharmander>0){
    console.log('CHARMANDER VENCEU E VIRA LIDER DO GINASIO ')
}else
    console.log('PIKACHU VENCEU E MANTEM A LIDERANÇA')