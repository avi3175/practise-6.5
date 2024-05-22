var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlam"];

let bigName = "";

for (let i = 0; i < friends.length; i++) {
    if (friends[i].length > bigName.length) {
        bigName = friends[i];
    }
}

console.log(bigName);
