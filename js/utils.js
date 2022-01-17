import { ObjectId } from "mongodb";

function isDict(v) {
    return typeof v==='object' && v!==null && !(v instanceof Array) && !(v instanceof Date);
}

const tojsonserializzable_element = (data) => {
    if (data instanceof Date){
        return data.toISOString()
    }else if(data instanceof ObjectId){
        return data.toString()
    }else if(data instanceof Object){
        return tojsonlike(data)
    }else if(data instanceof Array){
        return tojsonlike(data)
    }else{
        return data
    }
}

export const tojsonlike = (data) => {
    
    if (isDict(data)){
        let res = {}
        for (const key of Object.keys(data)){
            res[key] = tojsonserializzable_element(data[key]);
        }
        return res
    }else if (data instanceof Array){
        return data.map( (o) => tojsonserializzable_element(o) )
    }else{
        return tojsonserializzable_element(data)
    }
}
