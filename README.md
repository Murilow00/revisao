## 🕹️ Jogo simples de Combate em JavaScript
# 📌 Descrição Geral
Este projeto simula um sistema de combate entre dois Pokémons: Charmander e Pikachu.
Utilizando conceitos básicos de lógica de programação, o jogo implementa:

Subtração de valores (vida)

Estruturas condicionais (if, else)

Laço de repetição (while)

Variáveis e manipulação de números aleatórios

Tudo isso utilizando a linguagem JavaScript.
## 💻 Linguagem Utilizada
JavaScript (JS) é uma das linguagens de programação mais populares do mundo, amplamente utilizada no desenvolvimento de páginas web interativas. Neste projeto, o JS é usado de forma simples para simular um combate dinâmico.
## 🧠 Lógica do Código
```js

// Definimos as variáveis iniciais
let vidaCharmander = 80;
let vidaPikachu = 80;
let rodada = 1;

// Laço de repetição do combate
while(vidaCharmander > 0 && vidaPikachu > 0 && rodada < 500){
    // Dano aleatório de ambos os pokémons
    let pikaDano = Math.floor(Math.random() * 25 + 10);
    let charDano = Math.floor(Math.random() * 22 + 8);
    
    // Subtração de vida
    vidaCharmander -= pikaDano;
    vidaPikachu -= charDano;

    // Exibição das ações no console
    console.log("Rodada:", rodada);
    console.log(`☣️ Pikachu deu ${pikaDano} de dano e está com ${vidaPikachu} de energia`);
    console.log(`🔥 Charmander deu ${charDano} de dano e está com ${vidaCharmander} de energia`);
    console.log('--------------------------------------------------------------------------------------------');
    
    rodada++;
}

// Resultado final
if (vidaCharmander <= 0 && vidaPikachu <= 0) {
    console.log('⚔️ DEU EMPATE, AMBOS RETORNAM PARA SEU TREINADOR');
} else if (vidaCharmander > vidaPikachu && vidaCharmander > 0) {
    console.log('🔥 CHARMANDER VENCEU E VIRA LÍDER DO GINÁSIO');
} else {
    console.log('⚡ PIKACHU VENCEU E MANTÉM A LIDERANÇA');
}
```
## 🎯 Possíveis Resultados
O jogo pode terminar com três resultados possíveis, dependendo dos danos acumulados:

Empate – Ambos os Pokémons ficam com 0 ou menos de vida na mesma rodada.

Vitória do Charmander – Charmander termina com mais vida do que Pikachu.

Vitória do Pikachu – Pikachu termina com mais vida do que Charmander.

## 🎲 Observações
O dano de cada Pokémon é aleatório a cada rodada.

O jogo pode durar até 499 rodadas, ou terminar antes se um dos Pokémons tiver sua vida reduzida a 0.

Ideal para fins de aprendizado e prática de lógica com JavaScript.