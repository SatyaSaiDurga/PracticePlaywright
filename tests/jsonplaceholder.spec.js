const { test, expect } = require('@playwright/test');

test('Fetch posts from JSONPlaceholder API and verify data', async ({ request }) => {
  // Make a GET request to fetch posts
  const response = await request.get('https://jsonplaceholder.typicode.com/posts');
  
  // Ensure that the response is successful
  expect(response.status()).toBe(200);
  
  // Parse the JSON response
  const posts = await response.json();
  
  // Check that the first post has the correct title and body
  const firstPost = posts[0];
  expect(firstPost).toHaveProperty('id');
  expect(firstPost).toHaveProperty('title');
  expect(firstPost).toHaveProperty('body');

  // Verify the title and body of the first post
  expect(firstPost.title).toBeDefined();
  expect(firstPost.body).toBeDefined();

  // Additional check: Verify that the title of the first post is correct
  expect(firstPost.title).toContain('sunt aut facere repellat provident occaecati excepturi optio reprehenderit'); // Example title
});

test('Fetch a single post by ID and verify title', async ({ request }) => {
  // Fetch post with ID 1
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  
  // Ensure response is successful
  expect(response.status()).toBe(200);
  
  // Parse the response body
  const post = await response.json();
  
  // Check that the post has an ID and title
  expect(post).toHaveProperty('id', 1);
  expect(post).toHaveProperty('title');
  
  // Verify that the title of the post is correct
  expect(post.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
});
