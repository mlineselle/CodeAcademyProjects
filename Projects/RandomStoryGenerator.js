const beginning = ["A long time ago,","In a galaxy far far away,","Upon a shining hill,","Inside the guts of a space worm,","A few seconda ago, ","While Jeremy was singing in the shower,", "Looking into the eyes of a butterfly,", "While eating fried rice,"];
const middleSetting = ["there lived a small man,", "sat a large monkey,", "in a rocket ship of mac and cheese,", "around a massive campfire,", "within the eyes of a singing catepillar,", "on a tall mountain in the clouds,"];
const character = ["Jeremy", "John", "Zorbog", "Corban", "King Julian", "Jesus Christ", "Joshua Lewis", "Remy", "Mort"];
const middleAction = ["ate a large cactus flower", "shot several small ants", "mowed the lawn of the president", "pet the most loving dog", "pooped out a gleaming crown jewel", "destroyed an evil alien lifeform"];
const end = ["then died in a spectacularly brutal way.", "the end.", "suddenly swimming into the sea, never to be seen again.", "then ran into a wormhole and dissapeared.", "then decided to turn into the most evil man ever.", "becoming the most beautiful chicken ever."]

function randomIndex(array) {
    const length = array.length;
    return Math.floor(Math.random() * length);
};

function storyGenerator(){
    const beginningIndex = randomIndex(beginning);
    const middleSettingIndex = randomIndex(middleSetting);
    const characterIndex = randomIndex(character);
    const middleActionIndex = randomIndex(middleAction);
    const endIndex = randomIndex(end);
    return beginning[beginningIndex] + " " + middleSetting[middleSettingIndex] + " " + character[characterIndex] + " " + middleAction[middleActionIndex] + " " + end[endIndex];
}

console.log(storyGenerator());