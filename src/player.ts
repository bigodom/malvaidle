export interface Player {
    maxHp: number
    hp: number
    damage: number
    level: number
    coins: number
    xp:number
}

export const player: Player = {
    maxHp: 10,
    hp: 10,
    damage: 1,
    level: 1,
    coins: 0,
    xp: 0
}