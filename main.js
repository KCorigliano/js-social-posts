const postArray = [
    {
        autor: 'Kevin Corigliano',
        profilePic: 'https://unsplash.it/300/300?image=15',
        idN: 0,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: 'https://unsplash.it/600/300?image=171',
        date: '01/11/2022',
        likesN: 1354,
    },
    {
        autor: 'Gastani Frinzi',
        profilePic: 'https://unsplash.it/300/300?image=15',
        idN: 1,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: 'https://unsplash.it/600/300?image=171',
        date: '01/11/2022',
        likesN: 1354,
    },
    {
        autor: 'Nathan Drake',
        profilePic: 'https://unsplash.it/300/300?image=15',
        idN: 2,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: 'https://unsplash.it/600/300?image=171',
        date: '01/11/2022',
        likesN: 1354,
    },
    {
        autor: 'Ezio Auditore',
        profilePic: 'https://unsplash.it/300/300?image=15',
        idN: 3,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: 'https://unsplash.it/600/300?image=171',
        date: '01/11/2022',
        likesN: 1354,
    },
    {
        autor: 'John Shepard',
        profilePic: 'https://unsplash.it/300/300?image=15',
        idN: 4,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: 'https://unsplash.it/600/300?image=171',
        date: '01/11/2022',
        likesN: 1354,
    },
];

const containerHTML = document.querySelector('.posts-list');


for (let i=0; i<postArray.length; i++){
    containerHTML.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${postArray[i].profilePic}" alt="${postArray[i].autor}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${postArray[i].autor}</div>
                        <div class="post-meta__time">${postArray[i].date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${postArray[i].text}</div>
            <div class="post__image">
                <img src="${postArray[i].img}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${postArray[i].idN}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${postArray[i].likesN}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`
}

const likedPost = [];

for (let i=0; i<postArray.length; i++){
    let likeButton = document.querySelector(`${postArray[i].idN}`);

    likeButton.addEventListener('click', function(){
        postArray[i].likesN++;
        this.style.color="blue";
        likedPost.push(postArray[i].id);
    })

}