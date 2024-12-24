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
    { icon: '🏠', description: 'Gingerbread House' },
    { icon: '🛷', description: 'Sleigh' },
    { icon: '🎶', description: 'Carol Singing' },
    { icon: '🕯️', description: 'Candle' },
    { icon: '🎀', description: 'Ribbon' },
    { icon: '🧝', description: 'Elf' },
    { icon: '🍫', description: 'Hot Cocoa' },
    { icon: '🎍', description: 'Holiday Wreath' },
    { icon: '🥮', description: 'Fruit Cake' },
    { icon: '🎭', description: 'Christmas Play' },
    { icon: '📝', description: 'Wish List' },
    { icon: '👨‍👩‍👧‍👦', description: 'Family Gathering' },
    { icon: '🎹', description: 'Christmas Music' },
    { icon: '🌟', description: 'North Star' },
    { icon: '🎪', description: 'Christmas Market' },
    { icon: '🧣', description: 'Winter Scarf' },
    { icon: '🕊️', description: 'Peace Dove' },
    { icon: '📮', description: 'Letters to Santa' },
    { icon: '🍎', description: 'Candy Apple' },
    { icon: '🎵', description: 'Jingle Bells' },
    { icon: '🏰', description: 'North Pole' },
    { icon: '❤️', description: 'Holiday Spirit' },
    { icon: '🎨', description: 'Holiday Crafts' },
    { icon: '🌲', description: 'Pine Tree' }
];

function createBingoBall(icon: string, description: string, isFree: boolean = false): bingoItem {
    return { icon, description, isFree }
}

export default bingoItems.map(item => createBingoBall(item.icon, item.description, item.isFree))