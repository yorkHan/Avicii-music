{
  let view={

  }
  let model={

  }
  let controller={
    init(view,model){
      this.view=view
      this.model=model
      this.updata()
    },
    bindEvents(){

    },
    updata(){
      var APP_ID = 'ui33GTIjFT34PRJFnWclwkEA-gzGzoHsz';
      var APP_KEY = '9m7c8cn981rksCAOzVBaA3Gk';
      
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
      
      var Music = AV.Object.extend('music');
      var music = new Music();
      window.eventHub.on('new',(song)=>{
        music.save({
          words: song.data,
          url:song.url
        }).then(function(object) {
          alert('LeanCloud Rocks!');
        })
      })
    }
  }
  controller.init(view,model)
}