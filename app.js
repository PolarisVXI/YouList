// Video Class: Represents a Video
class Video{
    constructor(videoname, author, url){
        this.videoname = videoname;
        this.author = author;
        this.url = url;
    }
}

// UI Class: Handle UI Tasks
class UI{
    // Make static methods so we don't have to instantiate.
    static displayVideos(){
        const StoredVideos = [
            {
                videoname: 'JavaScript BookList App | No Frameworks',
                author: 'Traversy Media (Brad Traversy)',
                url: 'https://www.youtube.com/watch?v=JaMCxVWtW58&list=PLrqXgW42OyYKr8r5DN5C-7xqtn47F4eLw&index=7'
            }
        ];

        // Looping through array
        const videos = StoredVideos;

        // Calling method
        videos.forEach((video)=>UI.addVideoToList(video));
    }

    static addVideoToList(video){
        const list = document.querySelector('#video-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${video.videoname}</td>
        <td>${video.author}</td>
        <td>${video.url}</td>
        <td><a href="#" class="btn btn-danger btn-sm
        delete">X</a></td>
        `;

        list.appendChild(row);
    }
}
// Store Class: Handles Storage

// Event: Display Videos
document.addEventListener('DOMContentLoaded', UI.displayVideos);

// Event: Add Video
document.querySelector('#video-form').addEventListener('submit', (e)=>{
    // Prevent actual submit
    e.preventDefault();

    // Get form values
const videoname = document.querySelector('#videoname').nodeValue;
const author = document.querySelector('#author').nodeValue;
const url = document.querySelector('#url').nodeValue;

// Instantiate video
const video = new Video(videoname, author, url);

// Add Video to UI
UI.addVideoToList(video);
});
// Event: Remove Book
