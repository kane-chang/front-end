var topics = ["HTML", "CSS", "Git", "JavaScript"];

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function selectTopic(number) {
    var topic = topics[number]
    if (topic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (topic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (topic === 'Git') {
        console.log("Let's study Git!");
    } else if (topic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}


console.log('These are the topics we learned through Prework:')
listTopics()
console.log("Here's a random topic to study today:")
selectTopic(getRandomInt(0, 4))
