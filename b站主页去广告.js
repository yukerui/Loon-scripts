/*
 * Copyright (c) 2020. write by yukerui
 * qq群：1034788765
 * github：https://github.com/yukerui/
 * blog: blog.930113.xyz
 */
let obj = JSON.parse($response.body)
log.data.items.forEach((element,index)=> {
        if (element.hasOwnProperty('ad_web_s') || element['card_type'] == 'cm_v2') {
            log.data.items.splice(index, 1)
        }
    }
)
// function myFuction(element,index){
//     if (element.hasOwnProperty('ad_web_s') || element['card_type'] == 'cm_v2'){
//         log.data.items.splice(index,1)
//     }
// }
console.log(log.data.items)
