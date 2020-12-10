'use strict'

$(document).ready(initPage);

function initPage() {

    console.log('Hello from my gallery ....')
    var strHTMLs = gProjects.map(function(prj){
        return `<div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link prj-${prj.id}" href="#portfolioModal">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/${prj.name}.jpg" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>${prj.name}</h4>
                        <p class="text-muted">${prj.category}</p>
                    </div>
                </div>`;
    });

    $('.portfolio-content').html(strHTMLs.join(''));

    $('.portfolio-link').click(function(){
        var classes = $(this).attr("class").split(' ');
        var prjClass = classes.find(cl=>cl.includes('prj'));
        var prjId = prjClass.split('-')[1];
        var project = getProjectById(prjId);
        renderModal(project)
        $('#portfolioModal').modal()
    })

    $('submit-email-btn').click(onSubmitContactForm);
}

function renderModal(project) {

    var date = new Date(project.publishedAt);

    var strModalHTML = `<h2>${project.name}</h2>
    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.name}-full.jpg" alt="">
    <p>${project.desc}</p>
    <ul class="list-inline">
      <li>Date: November ${date.getFullYear()}</li>
      <li>Place: Coding Academy</li>
      <li>Category: ${project.category}</li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
        Close Project</button>`

    $('.modal-body').html(strModalHTML);

}

function onSubmitContactForm() {

    var subjectTxt = $('input[name=mail-subject]').val();
    var messageTxt = $('#message-body').val();
    

    console.log('subject', subject);
    console.log('message', messageTxt);

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=vetika@gmail.com&su=${subjectTxt}&body=${messageTxt}&bcc=vetikae@gmail.com`);

}