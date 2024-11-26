# Demo Link
https://next-blog-site-git-main-realmastergods-projects.vercel.app/

# Login credentials
1. ADMIN: username = admin, password = secret
2. NORMAL USER: username = test, password = secret (or you may create a new user if you want or login through github :) )

# Instruction to set up locally
- Clone this repo.
- Create a .env.local file in root directory.
- Create the following env variables (To get GITHUB_ID and GITHUB_SECRET please create an OAuth App using your github if you dont have it already.)
  ```bash
  MONGODB_URI = mongodb+srv://username:password@cluster0.nornfun.mongodb.net/yourdbname?retryWrites=true&w=majority&appName=Cluster0
  AUTH_SECRET = putAnythingYouLike
  AUTH_URL = http://localhost:3000/api/auth
  GITHUB_ID = yourGithubID
  GITHUB_SECRET = yourGithubSecret
  ```
- Go to app/blog/page.jsx. There you'll see a getData function, just change the url in the fetch function to http://localhost:3000/api/blog
- You are now good to go. just run the following command in the terminal (make sure you are in the directory folder where you cloned this project) and open localhost:3000 in browser (make sure no other application is running on localhost:3000).
  ```bash
  npm install && npm run dev
  ```
  
