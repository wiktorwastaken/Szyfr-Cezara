function caesar13(string) {
    const toBeHashed = [...string];
    const alphabet = [
        [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ],
        [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ]
    ];
    const hashed = [];

    if (typeof string !== 'string' || string === '') {
        return alert('Podany argument nie jest ciągiem znaków lub jest pusty!');
    }

    for (let i = 0; i < toBeHashed.length; i++) {
        if (alphabet[1].indexOf(toBeHashed[i].toUpperCase()) >= 0) {
            if (toBeHashed[i].toUpperCase() === toBeHashed[i]) {
                // Pisane z wielkiej litery
                // alphabet[1]
                let index = alphabet[1].indexOf(toBeHashed[i]);
                if (index > 12) {
                    hashed.push(alphabet[1][index % 13]);
                } else {
                    hashed.push(alphabet[1][index + 13]);
                }
            }
            else {
                // Pisane z małej litery
                // alphabet[0]
                let index = alphabet[0].indexOf(toBeHashed[i]);
                if (index > 12) {
                    hashed.push(alphabet[0][index % 13]);
                }
                hashed.push(alphabet[0][index + 13]);
            }
        }
        else {
            hashed.push(toBeHashed[i]);
        }
    }
    return alert(hashed.join(''));
}

export default caesar13;