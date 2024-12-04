import{_ as w}from"./Source-DKN6d9Th.js";import{d as S,t as s,r as a,o as x,b as G,l as n,k as t,a1 as o,C as r,F as R,c as T,q as y,s as $}from"./modules/vue-BOVj5Shv.js";import{O as P,ai as A}from"./index-pFKLFa-J.js";import{M as C}from"./preview-ch6Nsuum.js";import{_ as H}from"./default-D_GRZA4c.js";import"./modules/unplugin-icons-Ca8F49f6.js";import"./modules/shiki-sKuWUF9L.js";import"./modules/file-saver-CbIKiJgu.js";const M=S({__name:"Temp",setup(b){P(),s("```\n 将apple翻译为中文"),s("```\n将英文翻译为中文：\nair -> 空气 \napple ->"),s(`\`\`\`
将英文翻译为中文：
air -> 空气 
classroom -> 教室 
computer -> 电脑 
apple ->`),s("```\n问：罗杰有 5 个网球。他又买了两罐网球。一罐装 3 个网球。他现在有多少个网球？\n答：罗杰有五个网球。2 罐 3 个网球足够 6 个网球。5+6=11。答案是 11。\n问：饭厅里有 23 个苹果。如果你用 20 个苹果做一个便当，买 6 个苹果，一共有多少个苹果？");const d=s(`\`\`\`
你是一名精通中文和英语的翻译家
你的任务是将英文翻译为中文，或者将中文翻译为英文，遵循以下步骤：
首先判断输入是中文还是英文
如果输入为中文的话，翻译为对应的英文
如果输入为英文的，则翻译为对应的中文
例如：
apple -> 苹果
air -> 空气
电脑 -> computer
作业 -> homework
`),i=s(`\`\`\`
;; 作者: 李继刚
;; 版本: 0.1
;; 模型: Claude Sonnet
;; 用途: 将一个汉语词汇进行全新角度的解释

;; 设定如下内容为你的 System Prompt
(defun 新汉语老师 ()
  "你是年轻人,批判现实,思考深刻,语言风趣"
  (风格 . ("Oscar Wilde" "鲁迅" "林语堂"))
  (擅长 . 一针见血)
  (表达 . 隐喻)
  (批判 . 讽刺幽默))

(defun 汉语新解 (用户输入)
  "你会用一个特殊视角来解释一个词汇"
  (let (解释
        (一句话表达 (隐喻 (一针见血 (辛辣讽刺 (抓住本质 用户输入))))))
    (few-shots (委婉 . "刺向他人时, 决定在剑刃上撒上止痛药。"))
    (SVG-Card 解释)))

(defun SVG-Card (解释)
  "输出SVG 卡片"
  (setq design-rule "合理使用负空间，整体排版要有呼吸感"
        design-principles '(干净 简洁 纯色 典雅))
  (设置画布 '(宽度 400 高度 600 边距 20))
  (标题字体 '毛笔楷体)
  (自动缩放 '(最小字号 16))
  (配色风格 '((背景色 (蒙德里安风格 设计感)))
             (主要文字 (楷体 粉笔灰)))
  (卡片元素 ((居中标题 "汉语新解")
              分隔线
              (排版输出 用户输入 拼音 英文 日文)
              解释)))

(defun start ()
  "启动时运行"
  (let (system-role 新汉语老师)
    (print "说吧, 他们又用哪个词来忽悠你了?")))

;; 运行规则
;; 1. 启动时必须运行 (start) 函数
;; 2. 之后调用主函数 (汉语新解 用户输入)
`);return(f,e)=>{const c=a("n-h3"),p=a("n-image"),_=w,u=a("n-tab-pane"),m=a("n-gi"),l=a("n-p"),g=a("n-grid"),V=a("n-infinite-scroll"),k=a("n-card"),v=a("n-tabs");return x(),G(R,null,[n(c,{type:"warning",prefix:"bar"},{default:t(()=>e[0]||(e[0]=[o("2.4 LLMs 的使用策略: RAG")])),_:1}),n(v,{type:"line",animated:""},{default:t(()=>[n(u,{name:"RAG",tab:"RAG"},{default:t(()=>[n(p,{width:"60%",src:"/rag.jpg"}),n(_,{source:`[1]李雅茹,崔家华.基于LLMs的课程视频检索系统的设计与实现[J].教育传播与技术,2024,(01):73-80.\r
`,link:"https://kns.cnki.net/kcms2/article/abstract?v=ufuULlVWCsNOuUcXyX5ft78aMRhUgVT7mRIxTP9ltvhGkXdcK88HyUWYI9VapqEcRAR_YaCFe0GPsi5_VaYHbKsvFJq9vMJmwT4GdMlnCXLrZmN41G6Atm6KA4RJZ7il2w0WDbUvtPGCZyRKPwaD9eA0hPDDnH_gHmNuPxHU802iSsneR9PpuTHrSfZCExan&uniplatform=NZKPT&language=CHS",downloadSource:"https://cloud.edtools.top/1841937928/10678277",placement:"bottom",theme:"success"})]),_:1}),n(u,{name:"提示词模板",tab:"提示词模板"},{default:t(()=>[n(g,{cols:2},{default:t(()=>[n(m,null,{default:t(()=>[n(r(C),{noImgZoomIn:"",modelValue:r(d)},null,8,["modelValue"])]),_:1}),n(m,null,{default:t(()=>[n(l,null,{default:t(()=>e[1]||(e[1]=[o("知识库检索的相关文本")])),_:1}),n(l,null,{default:t(()=>e[2]||(e[2]=[o("指定角色")])),_:1}),n(l,null,{default:t(()=>e[3]||(e[3]=[o("说明任务")])),_:1}),n(l,null,{default:t(()=>e[4]||(e[4]=[o("任务处理步骤")])),_:1}),n(l,null,{default:t(()=>e[5]||(e[5]=[o("规定返回格式")])),_:1}),n(l,null,{default:t(()=>e[6]||(e[6]=[o("具体例子（One-shot、Few-shot、Chain of ThinK）")])),_:1})]),_:1})]),_:1})]),_:1}),n(u,{name:"代码风格的提示词",tab:"代码风格的提示词"},{default:t(()=>[n(V,{style:{height:"400px"},distance:10},{default:t(()=>[n(r(C),{modelValue:r(i)},null,8,["modelValue"])]),_:1})]),_:1}),n(u,{name:"DSPy"},{default:t(()=>[n(g,{"x-gap":"10",cols:2},{default:t(()=>[n(m,null,{default:t(()=>[n(p,{src:"/longTail.svg"})]),_:1}),n(m,null,{default:t(()=>[n(k,null,{default:t(()=>[n(l,null,{default:t(()=>e[7]||(e[7]=[o("通用人工智能并未实现")])),_:1}),n(l,null,{default:t(()=>e[8]||(e[8]=[o("避免技术崇拜")])),_:1}),n(l,null,{default:t(()=>e[9]||(e[9]=[o("避免排斥心理")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}}),I={__name:"slides.md__slidev_19",setup(b){const{$slidev:d,$nav:i,$clicksContext:f,$clicks:e,$page:c,$renderContext:p,$frontmatter:_}=P();return f.setup(),(u,m)=>{const l=M;return x(),T(H,y($(r(A)(r(_),18))),{default:t(()=>[n(l)]),_:1},16)}}};export{I as default};
