import{e as g}from"./emoji.51829739.js";import{X as m,K as k,t as f,c as h}from"../app.82ebc0cb.js";import b from"./operate.5b0b4531.js";import{h as w,al as j,r as x,D as R,i as T,A as z,B as S,G as y}from"./framework.e3ee66d5.js";import"./theme.4d137094.js";const K=w({__name:"tools",setup(B){const a=j({user:{id:1,username:"jack",avatar:"https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100",likeIds:[1,2,3]},emoji:g,comments:[],total:10}),n=x(),c=t=>{setTimeout(()=>{var e;(e=n.value)==null||e.remove(t)},200)},i=h((t,e,o)=>{switch(t){case"删除":alert(`删除成功: ${e.id}`),o();break;case"举报":alert(`举报成功: ${e.id}`);break}}),u=(t,e,o)=>{i(t,e,o)};let s=100;const l=({content:t,parentId:e,files:o,finish:r})=>{console.log("提交评论: "+t,e,o);let d=o==null?void 0:o.map(_=>k(_)).join("||");s+=1;const v={id:String(s),parentId:e,uid:a.user.id,address:"来自江苏",content:t,likes:0,createTime:m().subtract(5,"seconds").toString(),contentImg:d,user:{username:a.user.username,avatar:a.user.avatar,level:6,homeLink:`/${s}`},reply:null};setTimeout(()=>{r(v),f({message:"评论成功!",type:"info"})},200)},p=(t,e)=>{console.log("点赞: "+t),setTimeout(()=>{e()},200)};return a.comments=[{id:"1",parentId:null,uid:"1",address:"来自上海",content:"缘生缘灭，缘起缘落，我在看别人的故事，别人何尝不是在看我的故事?别人在演绎人生，我又何尝不是在这场戏里?谁的眼神沧桑了谁?我的眼神，只是沧桑了自己[喝酒]",likes:2,contentImg:"https://gitee.com/undraw/undraw-ui/raw/master/public/docs/normal.webp",createTime:m().subtract(10,"minute").toString(),user:{username:"落🤍尘",avatar:"https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100",level:6,homeLink:"/1"}}],(t,e)=>{const o=R("u-comment");return T(),z(o,{config:a,onSubmit:l,onLike:p,onOperate:u,ref_key:"commentRef",ref:n,"relative-time":""},{operate:S(r=>[y(b,{comment:r,onRemove:c},null,8,["comment"])]),_:1},8,["config"])}}});export{K as default};
