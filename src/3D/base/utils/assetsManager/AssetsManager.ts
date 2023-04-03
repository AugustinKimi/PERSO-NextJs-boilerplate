import { IAsset } from "@/3D/types/types";
import { LoadingManager, Texture, TextureLoader, WebGLRenderer } from "three"
import { VideoTextureLoader } from "./VideoTextureLoader"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { TTFLoader } from "three/examples/jsm/loaders/TTFLoader.js"
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js"
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader"
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js"

export enum EFileType {
    GLTF = "gltf",
    IMAGE = "image",
    HDR = "hdr",
    VIDEO = "video",
    TTF = "ttf",
    KTX2 = "ktx2",
    DRACO = "draco",
  }

  
  export enum EAssetManagerEvents {
    LOADED = "loaded",
    START = "start",
  }
  
  export const LoaderType = {
    [EFileType.GLTF]: GLTFLoader,
    [EFileType.DRACO]: DRACOLoader,
    [EFileType.VIDEO]: VideoTextureLoader,
    [EFileType.IMAGE]: TextureLoader,
    [EFileType.HDR]: RGBELoader,
    [EFileType.KTX2]: KTX2Loader,
    [EFileType.TTF]: TTFLoader,
  }


class AssetsManager{
    public assets : IAsset[]
    private assetsToLoad : number
    private assetsLoaded : number

    private delayedAssetsToLoad : number
    private delayedAssetsLoaded : number


    constructor(assets : IAsset[], delayedAssets : IAsset[]){
        this.assets = assets
        this.assetsToLoad = assets.length
        this.assetsLoaded = 0
        this.delayedAssetsToLoad = delayedAssets.length
        this.delayedAssetsLoaded = 0
    }

    loadAssets(){
        this.assets.forEach((asset: IAsset, index) => {
            this.loadAsset(asset)
        })
    }

    loadAsset(asset : IAsset){
        const assetType = this.findAssetsType(asset)
        switch(assetType){

        }
    }

    findAssetsType (asset : IAsset) : string {
        if(asset.fileType) return asset.fileType
        const fileExtension = asset.filePath.split(".").pop()
        switch (fileExtension) {
          case "gltf":
            return EFileType.GLTF
          case "glb":
            return EFileType.GLTF
          case "drc":
            return EFileType.DRACO
          case "png":
            return EFileType.IMAGE
          case "jpg":
            return EFileType.IMAGE
          case "jpeg":
            return EFileType.IMAGE
          case "gif":
            return EFileType.IMAGE
          case "dds":
            return EFileType.IMAGE
          case "webp":
            return EFileType.IMAGE
          case "hdr":
            return EFileType.HDR
          case "ktx2":
            return EFileType.KTX2
          case "webm":
            return EFileType.VIDEO
          case "mp4":
            return EFileType.VIDEO
          case "ttf":
            return EFileType.TTF
          default:
            console.error(`AssetManager - Unknown file type: ${fileExtension}`)
        }
    }
    

}