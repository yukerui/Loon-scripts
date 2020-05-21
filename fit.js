/*
#qq群：1034788765
#github：https://github.com/yukerui/Loon-scripts
# fit会员课程查看
^https:\/\/bea\.sportq\.com\/SFitWeb\/sfit\/getUserBaseInfo
[mitm] hostname= bean.sportq.com
 */
let obj=JSON.parse($response.body)
if (obj.entRet.entUserBaseInfo['isVip']!=null){
    obj.entRet.entUserBaseInfo['isVip']=1;
}
$done({body: JSON.stringify(obj)});
