'use strict'



var gProjects;

createProjects();

function createProject(id, name, title,  desc, category, url, publishedAt, labels) {
    return {
        id: id,
        name: name,
        title: title,
        category: category,
        desc: desc,
        url: url,
        publishedAt: publishedAt,
        labels: labels
    };
}

function createProjects() {

    var inPicProj = createProject(1, 'in-picture',
        'Where can be taken this picture ?',
        'A game, quest about worlds sites.',
        'game',
        'http://????',
        Date.now(),
        ['java script', 'css', 'html']);

    var touchNumsProj = createProject(2, 'touch-nums',
        'You\'re bored - pick a number...',
        'A game with nums pad.',
        'game',
        'http://????',
        Date.now(),
        ['java script', 'css', 'html', 'matrixes']);

    var bookShopProj = createProject(3, 'book-shop',
        'Read books, count books, sell books',
        'A web application for book store management.',
        'application',
        'http://????',
        Date.now(),
        ['java script', 'css', 'html', 'mvc']);

        gProjects = [];

        gProjects.push(inPicProj);
        gProjects.push(touchNumsProj);
        gProjects.push(bookShopProj);
        gProjects.push(inPicProj);
        gProjects.push(touchNumsProj);
        gProjects.push(bookShopProj);

        return gProjects;

}

function getProjectById(id){
    return gProjects.find(prj=>prj.id==id);
}