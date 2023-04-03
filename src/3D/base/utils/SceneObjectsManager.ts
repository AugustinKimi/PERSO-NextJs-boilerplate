import { Object3D } from "three"



class SceneObjectManager {
    private isInit : boolean
    private sceneObjects : Object3D[]
    private interactiveObjects : Object3D[]


    addObjects(object : Object3D, isInteractive : boolean){
        this.sceneObjects.push(object)
        if(isInteractive){
            this.interactiveObjects.push(object)
        }
    }

    removeObject(object : Object3D){
        this.sceneObjects.splice(this.sceneObjects.indexOf(object), 1)
        this.interactiveObjects.splice(this.interactiveObjects.indexOf(object), 1)
    }

}

export default new SceneObjectManager