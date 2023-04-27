import { Enemy, enemy } from "./enemy"
import { Player, player } from "./player"

//buttons
const huntButton = document.getElementById('attackEnemy')
const buyUpgradeButton = document.getElementById('buyUpgrade')
const bossHuntButton = document.getElementById('bossHunt')

const playerLevel = document.getElementById('playerLevel')
const playerCoins = document.getElementById('playerCoins')
const playerLife = document.getElementById('playerLife')
const playerMaxLife = document.getElementById('playerMaxLife')
const playerDamage = document.getElementById('playerDamage')
const playerXp = document.getElementById('playerXp')

function atualizar() {
    if (playerMaxLife) {
        playerMaxLife.innerHTML = 'vida máxima: ' + player.maxHp.toString()
    }
    if (playerLife) {
        playerLife.innerHTML = 'vida atual: ' + player.hp.toString()
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
    updateLife()
}

atualizar()


function levelUp(player: Player, xp: number) {
    player.xp += xp
    if (player.xp >= player.level * 10) {
        player.xp -= (player.level * 10)
        player.level += 1;
        player.maxHp = 10 * player.level
        player.hp = player.maxHp
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

function bossHunt(player: Player, enemy: Enemy) {
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
huntButton?.addEventListener('click', () => {
    huntBattle(player, enemy)
    attackEnemyButton.setAttribute('disabled', 'true')
    setTimeout(() => {
        attackEnemyButton.removeAttribute('disabled')
        console.log('delay')
    }, 1*1000);
});

buyUpgradeButton?.addEventListener('click', () => {
    buyUpgrade();
});

bossHuntButton?.addEventListener('click', () => {
    bossHunt(player, enemy)
    bossHuntButton.setAttribute('disabled', 'true')
    setTimeout(() => {
        bossHuntButton.removeAttribute('disabled')
        console.log('delay')
    }
        , 1*60000);
});

function updateLife(): void {
    const lifeBar = document.getElementById('life-bar-progress') as HTMLElement
    const percentage = (player.hp/player.maxHp) * 100
    lifeBar.style.width = `${percentage}%`
}