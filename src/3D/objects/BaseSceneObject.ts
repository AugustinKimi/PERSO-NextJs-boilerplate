import { Object3D } from "three"



class BaseSceneObject extends Object3D{
    private isInteractive : boolean

    constructor(isInteractive : boolean){
        super()
        this.isInteractive = isInteractive
    }

    getIsInteractive(){
        return this.isInteractive
    }

    setIsInteractive(isInteractive : boolean){
        this.isInteractive = isInteractive
    }

    



}

export default BaseSceneObject