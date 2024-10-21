function showDetails(storyId) {
    switch(storyId) {
        case 1:
            alert("Adventure in the Wild: Full Story Details here...");
            // Alternatively, redirect to a dedicated story page
            // window.location.href = 'story1-details.html';
            break;
        case 2:
            alert("Mystery of the Forgotten City: Full Story Details here...");
            break;
        case 3:
            alert("Space Odyssey 3000: Full Story Details here...");
            break;
        default:
            alert("Story details not found.");
    }
}
