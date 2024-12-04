import{d as y,t as d,r as u,o as P,b as F,l as n,k as e,a1 as o,C as l,F as O,c as T,q as B,s as G}from"./modules/vue-BOVj5Shv.js";import{O as w,ai as M}from"./index-pFKLFa-J.js";import{M as m}from"./preview-ch6Nsuum.js";import{_ as Z}from"./default-D_GRZA4c.js";import"./modules/shiki-sKuWUF9L.js";import"./modules/file-saver-CbIKiJgu.js";const q=y({__name:"PagePrompt",setup($){w();const f=d("```\n 将apple翻译为中文"),i=d("```\n将英文翻译为中文：\nair -> 空气 \napple ->"),_=d(`\`\`\`
将英文翻译为中文：
air -> 空气 
classroom -> 教室 
computer -> 电脑 
apple ->`),c=d("```\n问：罗杰有 5 个网球。他又买了两罐网球。一罐装 3 个网球。他现在有多少个网球？\n答：罗杰有五个网球。2 罐 3 个网球足够 6 个网球。5+6=11。答案是 11。\n问：饭厅里有 23 个苹果。如果你用 20 个苹果做一个便当，买 6 个苹果，一共有多少个苹果？"),g=d(`\`\`\`
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
`),V=d(`\`\`\`
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
`);return(C,t)=>{const b=u("n-h3"),a=u("n-tab-pane"),r=u("n-gi"),s=u("n-p"),p=u("n-grid"),x=u("n-image"),k=u("n-infinite-scroll"),v=u("n-card"),S=u("n-tabs");return P(),F(O,null,[n(b,{type:"warning",prefix:"bar"},{default:e(()=>t[0]||(t[0]=[o("2.4 LLMs 的使用策略: 提示词工程")])),_:1}),n(S,{type:"line",animated:""},{default:e(()=>[n(a,{name:"Zero-shot",tab:"Zero-shot"},{default:e(()=>[n(l(m),{modelValue:l(f)},null,8,["modelValue"])]),_:1}),n(a,{name:"One-shot",tab:"One-shot"},{default:e(()=>[n(l(m),{modelValue:l(i)},null,8,["modelValue"])]),_:1}),n(a,{name:"Few-shot",tab:"Few-shot"},{default:e(()=>[n(l(m),{modelValue:l(_)},null,8,["modelValue"])]),_:1}),n(a,{name:"Cot",tab:"Cot"},{default:e(()=>[n(l(m),{modelValue:l(c)},null,8,["modelValue"])]),_:1}),n(a,{name:"提示词模板",tab:"提示词模板"},{default:e(()=>[n(p,{cols:2},{default:e(()=>[n(r,null,{default:e(()=>[n(l(m),{noImgZoomIn:"",modelValue:l(g)},null,8,["modelValue"])]),_:1}),n(r,null,{default:e(()=>[n(s,null,{default:e(()=>t[1]||(t[1]=[o("知识库检索的相关文本")])),_:1}),n(s,null,{default:e(()=>t[2]||(t[2]=[o("指定角色")])),_:1}),n(s,null,{default:e(()=>t[3]||(t[3]=[o("说明任务")])),_:1}),n(s,null,{default:e(()=>t[4]||(t[4]=[o("任务处理步骤")])),_:1}),n(s,null,{default:e(()=>t[5]||(t[5]=[o("规定返回格式")])),_:1}),n(s,null,{default:e(()=>t[6]||(t[6]=[o("具体例子（One-shot、Few-shot、Chain of ThinK）")])),_:1})]),_:1})]),_:1})]),_:1}),n(a,{name:"代码风格的提示词",tab:"代码风格的提示词"},{default:e(()=>[n(p,{"x-gap":"10",cols:4},{default:e(()=>[n(r,null,{default:e(()=>[n(x,{src:"/meeting.png"})]),_:1}),n(r,{span:"3"},{default:e(()=>[n(k,{style:{height:"400px"},distance:10},{default:e(()=>[n(l(m),{modelValue:l(V)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),n(a,{name:"DSPy"},{default:e(()=>[t[10]||(t[10]=o(" 模型自动寻找最佳 Prompt ")),n(p,{"x-gap":"10",cols:2},{default:e(()=>[n(r,null,{default:e(()=>[n(x,{src:"/longTail.svg"})]),_:1}),n(r,null,{default:e(()=>[n(v,null,{default:e(()=>[n(s,null,{default:e(()=>t[7]||(t[7]=[o("通用人工智能并未实现")])),_:1}),n(s,null,{default:e(()=>t[8]||(t[8]=[o("避免技术崇拜")])),_:1}),n(s,null,{default:e(()=>t[9]||(t[9]=[o("避免排斥心理")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}}),K={__name:"slides.md__slidev_18",setup($){const{$slidev:f,$nav:i,$clicksContext:_,$clicks:c,$page:g,$renderContext:V,$frontmatter:C}=w();return _.setup(),(t,b)=>{const a=q;return P(),T(Z,B(G(l(M)(l(C),17))),{default:e(()=>[n(a)]),_:1},16)}}};export{K as default};
