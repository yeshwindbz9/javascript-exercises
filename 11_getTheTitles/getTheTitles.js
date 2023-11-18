const getTheTitles = function(books) {
    let titles = [];
    for(let entry of books) titles.push(entry.title);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
