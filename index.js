// Write your code here!
// Step 1: Display posts on the page
function displayPosts(posts) {
  const postList = document.getElementById('post-list');

  posts.forEach(post => {
    const li = document.createElement('li');

    const h1 = document.createElement('h1');
    h1.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);

    postList.appendChild(li);
  });
}

// Step 2: Fetch posts using async/await, then display them
async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// Step 3: Call it
fetchPosts();
