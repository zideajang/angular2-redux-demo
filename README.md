# angular2-redux-demo
this is demo to demostrate how angluar2 work with redux

redux 概念
三个基本原则
1. 单一不可变状态树结构
2. 数据流
3. 使用纯函数来改变状态

LSPA(大型的单页应用)

view-->data
<navbar><messageTab><

unpredicatable(新挑战)

Flux<architeture>/redux<libary>
======================================
Benefits（我们得意于将 redux 引入项目中）
unpredicatable app state（）
decoupled architeture（解耦）
Testabibility(可测试)
Great tool（好用工具作为支持）
======================================
when to use redux(redux 应用场景)
independent copies of the same data in multiple places
multiple views that need to work with the same data and be in sync
data can be updated by multiple users
data can be updated by multiple actors
======================================
Redux solves all my problem!
======================================
building block
The Store (javascript 对象反映 application 状态)
The Actions（javascript 对象，类型一定用 type 定义）类似事件
The Reducer 
