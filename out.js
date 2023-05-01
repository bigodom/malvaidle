"use strict";
(() => {
  // src/enemy.ts
  var enemy = {
    hp: 10,
    damage: 1,
    level: 1
  };

  // src/itemList.ts
  var itemList = {
    1: { id: 1, quantity: 0, name: "potion", description: "recupera 10 de vida", price: 10, type: "consumable" },
    2: { id: 2, quantity: 0, name: "wood sword", description: "uma espada de madeira", price: 10, type: "weapon" },
    3: { id: 3, quantity: 0, name: "iron sword", description: "uma espada de ferro", price: 20, type: "weapon" },
    4: { id: 4, quantity: 0, name: "steel sword", description: "uma espada de a\xE7o", price: 30, type: "weapon" },
    5: { id: 5, quantity: 0, name: "wood shield", description: "um escudo de madeira", price: 10, type: "shield" },
    6: { id: 6, quantity: 0, name: "iron shield", description: "um escudo de ferro", price: 20, type: "shield" },
    7: { id: 7, quantity: 0, name: "steel shield", description: "um escudo de a\xE7o", price: 30, type: "shield" },
    8: { id: 8, quantity: 0, name: "wood armor", description: "uma armadura de madeira", price: 10, type: "armor" },
    9: { id: 9, quantity: 0, name: "iron armor", description: "uma armadura de ferro", price: 20, type: "armor" },
    10: { id: 10, quantity: 0, name: "steel armor", description: "uma armadura de a\xE7o", price: 30, type: "armor" },
    11: { id: 11, quantity: 0, name: "wood helmet", description: "um capacete de madeira", price: 10, type: "helmet" },
    12: { id: 12, quantity: 0, name: "iron helmet", description: "um capacete de ferro", price: 20, type: "helmet" },
    13: { id: 13, quantity: 0, name: "steel helmet", description: "um capacete de a\xE7o", price: 30, type: "helmet" },
    14: { id: 14, quantity: 0, name: "wood boots", description: "botas de madeira", price: 10, type: "boots" },
    15: { id: 15, quantity: 0, name: "iron boots", description: "botas de ferro", price: 20, type: "boots" },
    16: { id: 16, quantity: 0, name: "steel boots", description: "botas de a\xE7o", price: 30, type: "boots" },
    17: { id: 17, quantity: 0, name: "wood gloves", description: "luvas de madeira", price: 10, type: "gloves" },
    18: { id: 18, quantity: 0, name: "iron gloves", description: "luvas de ferro", price: 20, type: "gloves" },
    19: { id: 19, quantity: 0, name: "steel gloves", description: "luvas de a\xE7o", price: 30, type: "gloves" },
    20: { id: 20, quantity: 0, name: "wood ring", description: "um anel de madeira", price: 10, type: "ring" },
    21: { id: 21, quantity: 0, name: "iron ring", description: "um anel de ferro", price: 20, type: "ring" },
    22: { id: 22, quantity: 0, name: "steel ring", description: "um anel de a\xE7o", price: 30, type: "ring" },
    23: { id: 23, quantity: 0, name: "wood necklace", description: "um colar de madeira", price: 10, type: "necklace" },
    24: { id: 24, quantity: 0, name: "iron necklace", description: "um colar de ferro", price: 20, type: "necklace" },
    25: { id: 25, quantity: 0, name: "steel necklace", description: "um colar de a\xE7o", price: 30, type: "necklace" },
    26: { id: 26, quantity: 0, name: "wood earring", description: "um brinco de madeira", price: 10, type: "earring" },
    27: { id: 27, quantity: 0, name: "iron earring", description: "um brinco de ferro", price: 20, type: "earring" },
    28: { id: 28, quantity: 0, name: "steel earring", description: "um brinco de a\xE7o", price: 30, type: "earring" },
    29: { id: 29, quantity: 0, name: "wood belt", description: "um cinto de madeira", price: 10, type: "belt" },
    30: { id: 30, quantity: 0, name: "iron belt", description: "um cinto de ferro", price: 20, type: "belt" },
    31: { id: 31, quantity: 0, name: "steel belt", description: "um cinto de a\xE7o", price: 30, type: "belt" },
    32: { id: 32, quantity: 0, name: "wood pants", description: "uma cal\xE7a de madeira", price: 10, type: "pants" },
    33: { id: 33, quantity: 0, name: "iron pants", description: "uma cal\xE7a de ferro", price: 20, type: "pants" },
    34: { id: 34, quantity: 0, name: "steel pants", description: "uma cal\xE7a de a\xE7o", price: 30, type: "pants" }
  };

  // src/inventory.ts
  var inventory = [];
  function addItem(id) {
    const itemToAdd = itemList[id];
    console.log(itemToAdd);
    if (itemToAdd) {
      inventory.push(itemToAdd);
    }
  }

  // src/player.ts
  var player = {
    maxHp: 5,
    hp: 5,
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
  var playerXpToLevelUp = document.getElementById("playerXpToLevelUp");
  var playerInventory = document.getElementById("playerInventory");
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
    if (playerXpToLevelUp) {
      playerXpToLevelUp.innerHTML = "xp para o pr\xF3ximo n\xEDvel: " + (player.level * 10).toString();
    }
    if (playerInventory) {
      if (inventory.length == 0) {
        playerInventory.innerHTML = "invent\xE1rio: vazio";
      } else {
        playerInventory.innerHTML = "invent\xE1rio: " + inventory.map((item) => item.name).join(", ");
      }
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
    console.log("upgrade comprado");
    addItem(1);
    console.log(inventory.length.toString());
    atualizar();
  }
  huntButton == null ? void 0 : huntButton.addEventListener("click", () => {
    huntBattle(player, enemy);
    huntButton.setAttribute("disabled", "true");
    setTimeout(() => {
      huntButton.removeAttribute("disabled");
    }, 1 * 1e3);
  });
  buyUpgradeButton == null ? void 0 : buyUpgradeButton.addEventListener("click", () => {
    buyUpgrade();
  });
  bossHuntButton == null ? void 0 : bossHuntButton.addEventListener("click", () => {
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
