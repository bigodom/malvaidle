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
    hp: 10,
    damage: 1,
    level: 1,
    coins: 0,
    xp: 0
  };

  // src/index.ts
  var attackEnemyButton = document.getElementById("attackEnemy");
  var buyUpgradeButton = document.getElementById("buyUpgrade");
  var playerLevel = document.getElementById("playerLevel");
  var playerCoins = document.getElementById("playerCoins");
  var playerLife = document.getElementById("playerLife");
  var playerDamage = document.getElementById("playerDamage");
  var playerXp = document.getElementById("playerXp");
  function atualizar() {
    if (playerLife) {
      playerLife.innerHTML = "vida: " + player.hp.toString();
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
  }
  atualizar();
  function levelUp(player2, xp) {
    player2.xp += xp;
    if (player2.xp >= player2.level * 10) {
      player2.xp -= player2.level * 10;
      player2.level += 1;
      player2.hp = 10 * player2.level;
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
  function buyUpgrade() {
    console.log("upgrade");
  }
  attackEnemyButton?.addEventListener("click", () => {
    huntBattle(player, enemy);
  });
  buyUpgradeButton?.addEventListener("click", () => {
    buyUpgrade();
  });
})();
