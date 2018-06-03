var APP_ID = 'ui33GTIjFT34PRJFnWclwkEA-gzGzoHsz';
var APP_KEY = '9m7c8cn981rksCAOzVBaA3Gk';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var Music = AV.Object.extend('music');
var music = new Music();
music.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})