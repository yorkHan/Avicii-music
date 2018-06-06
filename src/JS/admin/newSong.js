{
    let view={}
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
                console.log(this.model.data)
            })
        }
    }
    controller.init(view,model)
}