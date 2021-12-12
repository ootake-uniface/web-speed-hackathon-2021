import comments from '../seeds/comments.json';
import images from '../seeds/images.json';
import movies from '../seeds/movies.json';
import posts from '../seeds/posts.json';
import postsImagesRelation from '../seeds/postsImagesRelation.json';
import profileImages from '../seeds/profileImages.json';
import sounds from '../seeds/sounds.json';
import users from '../seeds/users.json';

import { Comment, Image, Movie, Post, PostsImagesRelation, ProfileImage, Sound, User } from './models';

async function insertSeeds() {
  await Promise.all([
    ProfileImage.bulkCreate(profileImages, { logging: false }),
    Image.bulkCreate(images, { logging: false }),
    Movie.bulkCreate(movies, { logging: false }),
    Sound.bulkCreate(sounds, { logging: false }),
    User.bulkCreate(users, { logging: false }),
    Post.bulkCreate(posts, { logging: false }),
    PostsImagesRelation.bulkCreate(postsImagesRelation, { logging: false }),
    Comment.bulkCreate(comments, { logging: false }),
  ]);
}

export { insertSeeds };
