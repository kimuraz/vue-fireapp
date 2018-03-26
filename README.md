# vue-fireapp

> Vue firebase app wrapper as a plugin prototype

## Usage

```javascript
...
import VueFireApp from 'vue-fireapp';
...

Vue.use(VueFireApp, {
  apiKey: 'XXXXXXXXX',
  authDomain: 'xxxxx.firebaseapp.com',
  databaseURL: 'https://xxxxx.firebaseio.com',
  projectId: 'xxxxxxx',
  storageBucket: 'xxxx.appspot.com',
  messagingSenderId: '00000000'
});
  
```


```javascript

this.$fireApp.database().ref('xxx');
this.$fireApp.storage().ref().child('xxx');

```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
