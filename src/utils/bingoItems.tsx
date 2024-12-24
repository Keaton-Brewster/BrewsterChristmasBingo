export declare interface bingoItem {
    icon: string,
    description: string,
    isFree?: boolean
}

const bingoItems: Array<bingoItem> = [
    { icon: '🎅', description: 'Santa Claus' },
    { icon: '🎄', description: 'Christmas Tree' },
    { icon: '🎁', description: 'Gift' },
    { icon: '⭐', description: 'Star' },
    { icon: '🦌', description: 'Reindeer' },
    { icon: '❄️', description: 'Snowflake' },
    { icon: '⛄', description: 'Snowman' },
    { icon: '🔔', description: 'Bell' },
    { icon: '🧦', description: 'Stocking' },
    { icon: '🍪', description: 'Cookie' },
    { icon: '🥛', description: 'Milk' },
    { icon: '🏠', description: 'House' },
    { icon: '🛷', description: 'Sleigh' },
    { icon: '🎶', description: 'Music Notes' },
    { icon: '🕯️', description: 'Candle' },
    { icon: '🎀', description: 'Ribbon' },
    { icon: '🧝', description: 'Elf' },
    { icon: '🍫', description: 'Chocolate' },
    { icon: '🦃', description: 'Turkey' },
    { icon: '🥮', description: 'Fruit Cake' },
    { icon: '🎭', description: 'Christmas Play' },
    { icon: '📝', description: 'Wish List' },
    { icon: '👨‍👩‍👧‍👦', description: 'Family' }
];

function createBingoBall(icon: string, description: string, isFree: boolean = false): bingoItem {
    return { icon, description, isFree }
}

export default bingoItems.map(item => createBingoBall(item.icon, item.description, item.isFree))