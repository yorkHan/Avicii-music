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
        },
        bindEvents(){
            this.view.$el.click(()=>{
                this.view.$el.find('.cover').toggleClass('active')
                this.view.$el.find('.icon').toggleClass('active')
                let audio=$("#myAudio")[0]
                if(audio.paused)                     {                 
                    audio.play();//audio.play();// 这个就是播放  
                }else{
                 audio.pause();// 这个就是暂停
                }
            })
        }
    }
    controller.init(view,model)
}