{
    let view={
        el:"body",
        init(){
             this.$el=$(this.el)
        },
        template:`
        <div class="bg" style="background-image:url({{song.cover}});"></div>
    <header>
        <div class="navBar">
            <div class="logo">
                <img src="./images/symbol.svg" alt="">
            </div>
            <span>AVICII</span>
        </div>
    </header>
    <section class="play">
        <div class="pointer" style="background-image:url(./images/pointer.png)"></div>
        <div class="cover-container">
            <div class="dist-light" style="background-image:url(./images/dist-light.png)">
            </div>
            <div class="dist" style="background-image:url(./images/dist.png)">
            </div>
            <div class="cover active" style="background-image:url({{song.cover}})">
            </div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofang"></use>
            </svg>
        </div>
        <audio id="myAudio" src="{{song.link}}"></audio>
    </section>
    <section class="title">
    <h1>{{song.name}}</h2>
    <h2>{{song.singer}}</h4>
    </section>
    `,
    render(data){
        let {song}=data;
        let temp
        for(let key in song){
            temp=$(this.template
                .replace('{{song.name}}',song.name)
                .replace('{{song.singer}}',song.singer)
                .replace('{{song.link}}',song.link)
                .replace('{{song.cover}}',song.cover)
                .replace('{{song.cover}}',song.cover)
            )
        }
        this.$el.prepend(temp)
    }
    }
    let model={
        data:{
            song:{
                name:'Ten More Days',
                singer:'Avicii / Zak Abel',
                cover:'http://p9hnwekpi.bkt.clouddn.com/image/cover/stories.jpg',
                link:'http://p9hnwekpi.bkt.clouddn.com/musicAvicii,Zak%20Abel%20-%20Ten%20More%20Days.mp3',    
            }
        }
    }
    let controller={
        init(view,model){
            this.view=view
            this.view.init()
            this.model=model  
            this.view.render(this.model.data)
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
                this.view.$el.find('.icon').removeClass('active')
            };
        }
    }
    controller.init(view,model)
}