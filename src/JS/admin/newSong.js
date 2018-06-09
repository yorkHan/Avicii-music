{
    let view={
        el:'#song-info',
        template:`
        <form>
        歌曲<input type="text" name="song" value={{song}}>
        歌手<input type="text" name="singer" value={{singer}}>
        外链<input type="text" name="url" value={{url}}>
        <input type="button" value="提交">
        </form>`,
        render(){
            this.view.template.replace()
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