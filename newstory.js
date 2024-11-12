function showDetails(storyId) {
    switch(storyId) {
        case 1:
            alert("“Crossing Paths” explores the emotional journey of Ava as she navigates her feelings for Ethan Parker, her first love, after a chance encounter reignites memories of their past. The story unfolds through a series of heartfelt interactions that challenge Ava to confront her desires and fears.");
            
            break;
        case 2:
            alert("“Whispers in the Manor” follows Sarah as she investigates the chilling rumors surrounding the abandoned Eldridge Manor, where strange occurrences and disappearances have plagued the town for decades. The story intertwines themes of fear, curiosity, and the unknown, drawing players into a narrative filled with suspense and supernatural elements.");
            break;
        case 3:
            alert("“The Lost Colony” follows Alex as they embark on a mission to uncover the fate of the vanished settlers. As Alex navigates the alien landscape and interacts with the remnants of the lost colony, the story unfolds through a series of choices that shape the narrative and reveal the hidden truths of Terra Nova.");
            break;
        default:
            alert("Story details not found.");
    }
}
function startStory(storynumber){
    switch(storynumber){
        case 1:
            window.location.href = 'http://localhost:3000';
            break;

        case 2:
            window.location.href = 'secondstory.html';
            break;

        case 3:
            window.location.href = 'thirdstory.html';
            break;
        default:
            alert("Story Not Found.");
    }
}
