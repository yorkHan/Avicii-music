{
    let view={
        el:"body",
        init(){
             this.$el=$(this.el)
        },
    }
    let model={
        data:{

        }
    }
    let controller={
        init(view,model){
            this.view=view
            this.view.init()
            this.model=model  
            this.bindEvents()  
            this.musicPause()
            this.musicEnd()
        },
        bindEvents(){
            this.view.$el.click(()=>{
                this.view.$el.find('.cover').toggleClass('active')
                this.view.$el.find('.icon').toggleClass('active')
            })
        },
        musicPause(){
            this.view.$el.click(()=>{
            let audio=$("#myAudio")[0]
            if(audio.paused)                     {                 
                audio.play();//audio.play();// 这个就是播放  
            }else{
             audio.pause();// 这个就是暂停
            }
        })
        },
        musicEnd(){
            let audio=$("#myAudio")[0]
            audio.onended = ()=>{
                this.view.$el.find('.cover').addClass('active')
                this.view.$el.find('.icon').addClass('active')
            };
        }
    }
    controller.init(view,model)
}