import{e as w}from"./emoji.51829739.js";import{X as x,e as I,K as j,t as y}from"../app.82ebc0cb.js";import{h as z,al as S,r as T,D as i,i as M,A as C,B as l,z as e,G as _,m as u,u as H,l as f,M as L,N as B,_ as N}from"./framework.e3ee66d5.js";import"./theme.4d137094.js";const m=r=>(L("data-v-3746b9b8"),r=r(),B(),r),R={class:"user-card"},V={class:"user-avatar"},D=m(()=>e("img",{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"},null,-1)),K={class:"user-content"},X={class:"user-info"},A={href:"",class:"username",target:"_blank"},G={class:"name",style:{"max-width":"10em"}},$={blank:"true",class:"rank"},q={class:"social-info"},E={href:"",class:"attention"},F=m(()=>e("span",null,"关注",-1)),J={href:"",class:"follower"},O=m(()=>e("span",null,"粉丝",-1)),P={href:"",class:"like"},Q=m(()=>e("span",null,"获赞",-1)),U={class:"card-btn"},W=z({__name:"user-card",setup(r){const n=S({user:{id:1,username:"jack",avatar:"https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100",likeIds:[1,2,3]},emoji:w,comments:[],total:10}),d=T(!1),g=(s,o)=>{console.log(d.value),d.value=!0,console.log("获取用户信息: "+s);let t;setTimeout(()=>{t={id:String(s),username:"落🤍尘"+s,avatar:"https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100",level:6,like:36011,attention:15,follower:6878},d.value=!1,o(t)},200)};let p=100;const b=({content:s,parentId:o,files:t,finish:v})=>{console.log("提交评论: "+s,o,t);let c=t==null?void 0:t.map(a=>j(a)).join("||");p+=1;const h={id:String(p),parentId:o,uid:n.user.id,address:"来自江苏",content:s,likes:0,createTime:"1分钟前",contentImg:c,user:{username:n.user.username,avatar:n.user.avatar,level:6,homeLink:`/${p}`},reply:null};setTimeout(()=>{v(h),y({message:"评论成功!",type:"info"})},200)},k=(s,o)=>{console.log("点赞: "+s),setTimeout(()=>{o()},200)};return n.comments=[{id:"1",parentId:null,uid:"1",address:"来自上海",content:"缘生缘灭，缘起缘落，我在看别人的故事，别人何尝不是在看我的故事?别人在演绎人生，我又何尝不是在这场戏里?谁的眼神沧桑了谁?我的眼神，只是沧桑了自己[喝酒]",likes:2,contentImg:"https://gitee.com/undraw/undraw-ui/raw/master/public/docs/normal.webp",createTime:x().subtract(10,"minute").toString(),user:{username:"落🤍尘",avatar:"https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100",level:6,homeLink:"/1"}}],(s,o)=>{const t=i("el-avatar"),v=i("u-icon"),c=i("el-button"),h=i("u-comment");return M(),C(h,{config:n,onSubmit:b,onLike:k,onShowInfo:g,"relative-time":""},{card:l(a=>[e("div",R,[e("div",V,[_(t,{style:{"margin-top":"5px"},size:40,fit:"cover",src:a.avatar},{default:l(()=>[D]),_:2},1032,["src"])]),e("div",K,[e("div",X,[e("a",A,[e("span",G,u(a.username),1),e("span",$,[_(v,{size:"24",innerHTML:H(I)(a.level)},null,8,["innerHTML"])])])]),e("div",q,[e("a",E,[e("span",null,u(a.attention),1),F]),e("a",J,[e("span",null,u(a.follower),1),O]),e("a",P,[e("span",null,u(a.like),1),Q])]),e("div",U,[_(c,{type:"primary"},{default:l(()=>[f("关注")]),_:1}),_(c,null,{default:l(()=>[f("发消息")]),_:1})])])])]),_:1},8,["config"])}}});const te=N(W,[["__scopeId","data-v-3746b9b8"]]);export{te as default};
