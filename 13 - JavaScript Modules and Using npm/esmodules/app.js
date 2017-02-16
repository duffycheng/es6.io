import {uniq} from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
// import apiKey from './src/config';
import {apiKey, url, sayHi} from './src/config'; // name export import 
import User, {createURL, gravatar} from './src/user';

const user = new User('user', 'userg@gmail.com','123.com');

console.log(user);

const profile = createURL(user.name);

console.log(profile);

const image = gravatar(user.email);

console.log(image);


// const ages = [1,1,4,5,52,12,4];

// console.log(uniq(ages));
// console.log(apiKey, url);

// sayHi('look');