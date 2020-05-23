/*
 * Copyright (c) 2020. write by yukerui
 * qq群：1034788765
 * github：https://github.com/yukerui/
 * blog: blog.930113.xyz
 */
let obj=JSON.parse($response.body);
obj.data['isvip']=1;
obj.data['vip_endtime']=1652371200;
$done({body: JSON.stringify(obj)})
