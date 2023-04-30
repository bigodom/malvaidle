"use strict";
(() => {
  // src/enemy.ts
  var enemy = {
    hp: 10,
    damage: 1,
    level: 1
  };

  // src/player.ts
  var player = {
    maxHp: 10,
    hp: 10,
    damage: 1,
    level: 1,
    coins: 0,
    xp: 0
  };

  // src/index.ts
  var huntButton = document.getElementById("attackEnemy");
  var buyUpgradeButton = document.getElementById("buyUpgrade");
  var bossHuntButton = document.getElementById("bossHunt");
  var playerLevel = document.getElementById("playerLevel");
  var playerCoins = document.getElementById("playerCoins");
  var playerLife = document.getElementById("playerLife");
  var playerMaxLife = document.getElementById("playerMaxLife");
  var playerDamage = document.getElementById("playerDamage");
  var playerXp = document.getElementById("playerXp");
  function atualizar() {
    if (playerMaxLife) {
      playerMaxLife.innerHTML = "vida m\xE1xima: " + player.maxHp.toString();
    }
    if (playerLife) {
      playerLife.innerHTML = "vida atual: " + player.hp.toString();
    }
    if (playerDamage) {
      playerDamage.innerHTML = "dano: " + player.damage.toString();
    }
    if (playerLevel) {
      playerLevel.innerHTML = "n\xEDvel: " + player.level.toString();
    }
    if (playerCoins) {
      playerCoins.innerHTML = "coins: " + player.coins.toString();
    }
    if (playerXp) {
      playerXp.innerHTML = "xp: " + player.xp.toString();
    }
    updateLife();
  }
  atualizar();
  function levelUp(player2, xp) {
    player2.xp += xp;
    if (player2.xp >= player2.level * 10) {
      player2.xp -= player2.level * 10;
      player2.level += 1;
      player2.maxHp = 10 * player2.level;
      player2.hp = player2.maxHp;
    }
  }
  function isPlayerDead(player2, xp) {
    if (player2.hp <= enemy.damage) {
      player2.hp = 0;
      console.log("o jogador morreu");
    } else {
      console.log("o player sofreu " + enemy.damage + " dano");
      player2.hp = player2.hp - enemy.damage;
    }
  }
  function huntBattle(player2, enemy2) {
    isPlayerDead(player2, enemy2.level);
    levelUp(player2, enemy2.level * 2);
    atualizar();
    console.log(player2.xp);
    console.log(player2.hp);
  }
  function bossHunt(player2, enemy2) {
    isPlayerDead(player2, enemy2.level);
    levelUp(player2, enemy2.level * 2);
    atualizar();
    console.log(player2.xp);
    console.log(player2.hp);
  }
  function buyUpgrade() {
    console.log("upgrade");
  }
  huntButton?.addEventListener("click", () => {
    huntBattle(player, enemy);
    attackEnemyButton.setAttribute("disabled", "true");
    setTimeout(() => {
      attackEnemyButton.removeAttribute("disabled");
      console.log("delay");
    }, 1 * 1e3);
  });
  buyUpgradeButton?.addEventListener("click", () => {
    buyUpgrade();
  });
  bossHuntButton?.addEventListener("click", () => {
    bossHunt(player, enemy);
    bossHuntButton.setAttribute("disabled", "true");
    setTimeout(
      () => {
        bossHuntButton.removeAttribute("disabled");
        console.log("delay");
      },
      1 * 6e4
    );
  });
  function updateLife() {
    const lifeBar = document.getElementById("life-bar-progress");
    const percentage = player.hp / player.maxHp * 100;
    lifeBar.style.width = `${percentage}%`;
  }
})();
