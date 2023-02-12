import { Enemy, enemy } from "./enemy"
import { Player, player } from "./player"

const attackEnemyButton = document.getElementById('attackEnemy')
const buyUpgradeButton = document.getElementById('buyUpgrade')
const playerLevel = document.getElementById('playerLevel')
const playerCoins = document.getElementById('playerCoins')
const playerLife = document.getElementById('playerLife')
const playerDamage = document.getElementById('playerDamage')
const playerXp = document.getElementById('playerXp')

function atualizar() {
    if (playerLife) {
        playerLife.innerHTML = 'vida: ' + player.hp.toString()
    }
    if (playerDamage) {
        playerDamage.innerHTML = 'dano: ' + player.damage.toString()
    }
    if (playerLevel) {
        playerLevel.innerHTML = 'nível: ' + player.level.toString()
    }
    if (playerCoins) {
        playerCoins.innerHTML = 'coins: ' + player.coins.toString()
    }
    if (playerXp) {
        playerXp.innerHTML = 'xp: ' + player.xp.toString()
    }
}

atualizar()


function levelUp(player: Player, xp: number) {
    player.xp += xp
    if (player.xp >= player.level * 10) {
        player.xp -= (player.level * 10)
        player.level += 1;
        player.hp = 10 * player.level
    }

}

function isPlayerDead(player: Player, xp: number) {
    if (player.hp <= enemy.damage) {
        player.hp = 0
        console.log('o jogador morreu')
    } else {
        console.log('o player sofreu ' + enemy.damage + ' dano')
        player.hp = player.hp - enemy.damage
    }
}

function huntBattle(player: Player, enemy: Enemy) {
    isPlayerDead(player, enemy.level)
    levelUp(player, enemy.level * 2)


    atualizar()
    console.log(player.xp)
    console.log(player.hp)
}

function buyUpgrade() {
    
    console.log("upgrade")
}

//Ações ao clicar nos botões
attackEnemyButton?.addEventListener('click', () => {
    huntBattle(player, enemy)
});

buyUpgradeButton?.addEventListener('click', () => {
    buyUpgrade();
});





