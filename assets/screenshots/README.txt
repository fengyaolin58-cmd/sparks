Drop real screenshots here (e.g. shot-01.png, shot-02.png, ...).

Then in index.html, replace each placeholder tile like this:

    <div class="gallery-tile"><span>Screenshot 1</span></div>

with:

    <div class="gallery-tile"><img src="assets/screenshots/shot-01.png" alt="Sparks screenshot"></div>

(and remove the .gallery-tile's centered placeholder text styling in
css/style.css if you want images to fill the tile edge-to-edge — add
`object-fit: cover; width: 100%; height: 100%;` to a new rule for
`.gallery-tile img`.)
