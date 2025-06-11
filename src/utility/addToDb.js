import { toast } from "react-toastify"

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList
    } else{
        return []
    }
}
const addtoStoredReadList = (id) =>{
    const storedList = getStoredReadList()
    if(storedList.includes(id)){
        console.log(id, 'Already exists in the read list')
    } else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('read-list', storedListStr)
        toast('This book is added to your Read list')
    }
}



const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList
    } else{
        return []
    }
}
const addtoStoredWishList = (id) =>{
    const storedList = getStoredWishList()
    if(storedList.includes(id)){
        console.log(id, 'Already exists in the read list')
    } else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('wish-list', storedListStr)
    }
}

export {addtoStoredReadList, addtoStoredWishList, getStoredReadList, getStoredWishList}