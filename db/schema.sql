DROP DATABASE IF EXISTS tech_blog;

CREATE DATABASE tech_blog;



-- make sure server is connecting to database first and that we can create data in insomnia, then work on routes, then the front end part




-- comment table: id, body, createdAt, updatedAt, postId, userId

-- posts table: id, title, body, createdAt, updatedAt, userId

-- user table: id, username, password(hashed pw)

-- session table: sid(auto generated), expires, data(auto generated, cookies?), createdAt, updatedAt (worry about this one last)