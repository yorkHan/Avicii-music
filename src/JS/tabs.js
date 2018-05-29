{
    let view={
        el:'#tabs',
        init(){
            this.$el=$(this.el)
        },
        template:`
        <li id="tab-1" class="active">首页</li>
        <li id="tab-2">排行榜</li>
        <li id="tab-3">搜索</li>
        `,
        render(){
            this.$el.append(this.template)
        }
    }
    let model={

    }
    let controller={
        init(view,model){
            this.view=view
            this.view.init()
            this.view.render()
            this.model=model
            this.bindEvents()
        },
        bindEvents(){
            console.log(2)
                let lis=$(this.view.el).find("li")
                console.log(lis)
                for(let i=0;i<lis.length;i++){
                    let li=lis[i]
                    li.addEventListener("click",(e)=>{
                        let tab=e.currentTarget
                        $(tab).addClass('active').siblings().removeClass('active')
                    })
                }
        }

    }
    controller.init(view,model)
}