const getStoreData = ()=>{
    const StoreData = localStorage.getItem('jobs')
    if(StoreData){
        return JSON.parse(StoreData)
    }
    else{
        return []
    }
}

const addStoreList = (id)=>{
    const storeList = getStoreData()
    if(storeList.includes(id)){
        alert("data already added")
    }else{
        storeList.push(id)
        const storelist = JSON.stringify(storeList)
        localStorage.setItem('jobs',storelist)
    }
}
export {addStoreList,getStoreData}