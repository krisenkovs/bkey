const CoinKey = require('coinkey');

const generate = () => {
    const rand = 9223372036854775807 + Math.random() * (18446744073709551615 + 1 - 9223372036854775807);
    const start = Math.floor(rand);

    for (let i = 0; i < 1000; i++) {
        const privateKey = `0000000000000000000000000000000000000000000000000000000000000000${BigInt(start + i).toString(
            16,
        )}`.slice(-64);

        const key = CoinKey(Buffer.from(privateKey, 'hex'));

        if (key.publicAddress === '16jY7qLJnxb7CHZyqBP8qca9d51gAjyXQN') {
            console.log(privateKey, i, start)
        }
    }
};

setInterval(generate, 1000);

