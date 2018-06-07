{
    let view={
        el:'',
        template:`
        <form>
        歌曲<input type="text" name="song">
        歌手<input type="text" name="singer">
        外链<input type="text" name="url">
        <input type="button" value="提交">
        </form>`,
        render(){
        }
    }
    let model={
        data:{}
    }
    let controller={
        init(view,model){
            this.view=view
            this.model=model
            this.renderData()
        },
        renderData(){
            window.eventHub.on('new',(song)=>{
                Object.assign(this.model.data,song)
                this.view.render(this.model.data)
            })
        }
    }
    controller.init(view,model)
}