"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[932],{46060:function(e,t,n){n.d(t,{c:function(){return d}});var r=n(49360),i=n(92346),a=n(43836);function d(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:a.Z(e.nodes(),function(t){var n=e.node(t),i=e.parent(t),a={v:t};return r.Z(n)||(a.value=n),r.Z(i)||(a.parent=i),a}),edges:a.Z(e.edges(),function(t){var n=e.edge(t),i={v:t.v,w:t.w};return r.Z(t.name)||(i.name=t.name),r.Z(n)||(i.value=n),i})};return r.Z(e.graph())||(t.value=i.Z(e.graph())),t}n(54585)},92346:function(e,t,n){var r=n(45401);t.Z=function(e){return(0,r.Z)(e,4)}},60932:function(e,t,n){n.r(t),n.d(t,{render:function(){return C}});var r=n(6425);n(48526);var i=n(3485);n(98462),n(68250);var a=n(3855),d=n(88749),c=n(46060),o=n(45625),s=new Map,l=new Map,g=new Map,f=(0,a.eW)(()=>{l.clear(),g.clear(),s.clear()},"clear"),h=(0,a.eW)((e,t)=>{let n=l.get(t)||[];return a.cM.trace("In isDescendant",t," ",e," = ",n.includes(e)),n.includes(e)},"isDescendant"),u=(0,a.eW)((e,t)=>{let n=l.get(t)||[];return a.cM.info("Descendants of ",t," is ",n),a.cM.info("Edge is ",e),e.v!==t&&e.w!==t&&(n?n.includes(e.v)||h(e.v,t)||h(e.w,t)||n.includes(e.w):(a.cM.debug("Tilt, ",t,",not in descendants"),!1))},"edgeInCluster"),p=(0,a.eW)((e,t,n,r)=>{a.cM.warn("Copying children of ",e,"root",r,"data",t.node(e),r);let i=t.children(e)||[];e!==r&&i.push(e),a.cM.warn("Copying (nodes) clusterId",e,"nodes",i),i.forEach(i=>{if(t.children(i).length>0)p(i,t,n,r);else{let d=t.node(i);a.cM.info("cp ",i," to ",r," with parent ",e),n.setNode(i,d),r!==t.parent(i)&&(a.cM.warn("Setting parent",i,t.parent(i)),n.setParent(i,t.parent(i))),e!==r&&i!==e?(a.cM.debug("Setting parent",i,e),n.setParent(i,e)):(a.cM.info("In copy ",e,"root",r,"data",t.node(e),r),a.cM.debug("Not Setting parent for node=",i,"cluster!==rootId",e!==r,"node!==clusterId",i!==e));let c=t.edges(i);a.cM.debug("Copying Edges",c),c.forEach(i=>{a.cM.info("Edge",i);let d=t.edge(i.v,i.w,i.name);a.cM.info("Edge data",d,r);try{u(i,r)?(a.cM.info("Copying as ",i.v,i.w,d,i.name),n.setEdge(i.v,i.w,d,i.name),a.cM.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):a.cM.info("Skipping copy of edge ",i.v,"-->",i.w," rootId: ",r," clusterId:",e)}catch(e){a.cM.error(e)}})}a.cM.debug("Removing node",i),t.removeNode(i)})},"copy"),w=(0,a.eW)((e,t)=>{let n=t.children(e),r=[...n];for(let i of n)g.set(i,e),r=[...r,...w(i,t)];return r},"extractDescendants"),M=(0,a.eW)((e,t,n)=>{let r=e.edges().filter(e=>e.v===t||e.w===t),i=e.edges().filter(e=>e.v===n||e.w===n),a=r.map(e=>({v:e.v===t?n:e.v,w:e.w===t?t:e.w})),d=i.map(e=>({v:e.v,w:e.w})),c=a.filter(e=>d.some(t=>e.v===t.v&&e.w===t.w));return c},"findCommonEdges"),v=(0,a.eW)((e,t,n)=>{let r;let i=t.children(e);if(a.cM.trace("Searching children of id ",e,i),i.length<1)return e;for(let e of i){let i=v(e,t,n),a=M(t,n,i);if(i){if(!(a.length>0))return i;r=i}}return r},"findNonClusterChild"),y=(0,a.eW)(e=>s.has(e)&&s.get(e).externalConnections&&s.has(e)?s.get(e).id:e,"getAnchorId"),X=(0,a.eW)((e,t)=>{if(!e||t>10){a.cM.debug("Opting out, no graph ");return}for(let t of(a.cM.debug("Opting in, graph "),e.nodes().forEach(function(t){let n=e.children(t);n.length>0&&(a.cM.warn("Cluster identified",t," Replacement id in edges: ",v(t,e,t)),l.set(t,w(t,e)),s.set(t,{id:v(t,e,t),clusterData:e.node(t)}))}),e.nodes().forEach(function(t){let n=e.children(t),r=e.edges();n.length>0?(a.cM.debug("Cluster identified",t,l),r.forEach(e=>{let n=h(e.v,t),r=h(e.w,t);n^r&&(a.cM.warn("Edge: ",e," leaves cluster ",t),a.cM.warn("Descendants of XXX ",t,": ",l.get(t)),s.get(t).externalConnections=!0)})):a.cM.debug("Not a cluster ",t,l)}),s.keys())){let n=s.get(t).id,r=e.parent(n);r!==t&&s.has(r)&&!s.get(r).externalConnections&&(s.get(t).id=r)}e.edges().forEach(function(t){let n=e.edge(t);a.cM.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),a.cM.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(e.edge(t)));let r=t.v,i=t.w;if(a.cM.warn("Fix XXX",s,"ids:",t.v,t.w,"Translating: ",s.get(t.v)," --- ",s.get(t.w)),s.get(t.v)||s.get(t.w)){if(a.cM.warn("Fixing and trying - removing XXX",t.v,t.w,t.name),r=y(t.v),i=y(t.w),e.removeEdge(t.v,t.w,t.name),r!==t.v){let i=e.parent(r);s.get(i).externalConnections=!0,n.fromCluster=t.v}if(i!==t.w){let r=e.parent(i);s.get(r).externalConnections=!0,n.toCluster=t.w}a.cM.warn("Fix Replacing with XXX",r,i,t.name),e.setEdge(r,i,n,t.name)}}),a.cM.warn("Adjusted Graph",c.c(e)),m(e,0),a.cM.trace(s)},"adjustClustersAndEdges"),m=(0,a.eW)((e,t)=>{if(a.cM.warn("extractor - ",t,c.c(e),e.children("D")),t>10){a.cM.error("Bailing out");return}let n=e.nodes(),r=!1;for(let t of n){let n=e.children(t);r=r||n.length>0}if(!r){a.cM.debug("Done, no node has children",e.nodes());return}for(let r of(a.cM.debug("Nodes = ",n,t),n))if(a.cM.debug("Extracting node",r,s,s.has(r)&&!s.get(r).externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",t),s.has(r)){if(!s.get(r).externalConnections&&e.children(r)&&e.children(r).length>0){a.cM.warn("Cluster without external connections, without a parent and with children",r,t);let n=e.graph(),i="TB"===n.rankdir?"LR":"TB";s.get(r)?.clusterData?.dir&&(i=s.get(r).clusterData.dir,a.cM.warn("Fixing dir",s.get(r).clusterData.dir,i));let d=new o.k({multigraph:!0,compound:!0}).setGraph({rankdir:i,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});a.cM.warn("Old graph before copy",c.c(e)),p(r,e,d,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:s.get(r).clusterData,label:s.get(r).label,graph:d}),a.cM.warn("New graph after copy node: (",r,")",c.c(d)),a.cM.debug("Old graph after copy",c.c(e))}else a.cM.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!s.get(r).externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),t),a.cM.debug(s)}else a.cM.debug("Not a cluster",r,t);for(let r of(n=e.nodes(),a.cM.warn("New list of nodes",n),n)){let n=e.node(r);a.cM.warn(" Now next level",r,n),n?.clusterNode&&m(n.graph,t+1)}},"extractor"),E=(0,a.eW)((e,t)=>{if(0===t.length)return[];let n=Object.assign([],t);return t.forEach(t=>{let r=e.children(t),i=E(e,r);n=[...n,...i]}),n},"sorter"),N=(0,a.eW)(e=>E(e,e.children()),"sortNodesByHierarchy"),b=(0,a.eW)(async(e,t,n,o,l,g)=>{a.cM.warn("Graph in recursive render:XAX",c.c(t),l);let f=t.graph().rankdir;a.cM.trace("Dir in recursive render - dir:",f);let h=e.insert("g").attr("class","root");t.nodes()?a.cM.info("Recursive render XXX",t.nodes()):a.cM.info("No nodes found for",t),t.edges().length>0&&a.cM.info("Recursive edges",t.edge(t.edges()[0]));let u=h.insert("g").attr("class","clusters"),p=h.insert("g").attr("class","edgePaths"),w=h.insert("g").attr("class","edgeLabels"),M=h.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(e){let i=t.node(e);if(void 0!==l){let n=JSON.parse(JSON.stringify(l.clusterData));a.cM.trace("Setting data for parent cluster XXX\n Node.id = ",e,"\n data=",n.height,"\nParent cluster",l.height),t.setNode(l.id,n),t.parent(e)||(a.cM.trace("Setting parent",e,l.id),t.setParent(e,l.id,n))}if(a.cM.info("(Insert) Node XXX"+e+": "+JSON.stringify(t.node(e))),i?.clusterNode){a.cM.info("Cluster identified XBX",e,i.width,t.node(e));let{ranksep:d,nodesep:c}=t.graph();i.graph.setGraph({...i.graph.graph(),ranksep:d+25,nodesep:c});let s=await b(M,i.graph,n,o,t.node(e),g),l=s.elem;(0,r.jr)(i,l),i.diff=s.diff||0,a.cM.info("New compound node after recursive render XAX",e,"width",i.width,"height",i.height),(0,r.Yn)(l,i)}else t.children(e).length>0?(a.cM.trace("Cluster - the non recursive path XBX",e,i.id,i,i.width,"Graph:",t),a.cM.trace(v(i.id,t)),s.set(i.id,{id:v(i.id,t),node:i})):(a.cM.trace("Node - the non recursive path XAX",e,M,t.node(e),f),await (0,r.Lf)(M,t.node(e),{config:g,dir:f}))}));let y=(0,a.eW)(async()=>{let e=t.edges().map(async function(e){let n=t.edge(e.v,e.w,e.name);a.cM.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),a.cM.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(t.edge(e))),a.cM.info("Fix",s,"ids:",e.v,e.w,"Translating: ",s.get(e.v),s.get(e.w)),await (0,r.I_)(w,n)});await Promise.all(e)},"processEdges");await y(),a.cM.info("Graph before layout:",JSON.stringify(c.c(t))),a.cM.info("############################################# XXX"),a.cM.info("###                Layout                 ### XXX"),a.cM.info("############################################# XXX"),(0,d.bK)(t),a.cM.info("Graph after layout:",JSON.stringify(c.c(t)));let X=0,{subGraphTitleTotalMargin:m}=(0,i.L)(g);return await Promise.all(N(t).map(async function(e){let n=t.node(e);if(a.cM.info("Position XBX => "+e+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n?.clusterNode)n.y+=m,a.cM.info("A tainted cluster node XBX1",e,n.id,n.width,n.height,n.x,n.y,t.parent(e)),s.get(n.id).node=n,(0,r.aH)(n);else if(t.children(e).length>0){a.cM.info("A pure cluster node XBX1",e,n.id,n.x,n.y,n.width,n.height,t.parent(e)),n.height+=m,t.node(n.parentId);let i=n?.padding/2||0,d=n?.labelBBox?.height||0,c=d-i||0;a.cM.debug("OffsetY",c,"labelHeight",d,"halfPadding",i),await (0,r.us)(u,n),s.get(n.id).node=n}else{let e=t.node(n.parentId);n.y+=m/2,a.cM.info("A regular node XBX1 - using the padding",n.id,"parent",n.parentId,n.width,n.height,n.x,n.y,"offsetY",n.offsetY,"parent",e,e?.offsetY,n),(0,r.aH)(n)}})),t.edges().forEach(function(e){let i=t.edge(e);a.cM.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(i),i),i.points.forEach(e=>e.y+=m/2);let d=t.node(e.v);var c=t.node(e.w);let l=(0,r.QP)(p,i,s,n,d,c,o);(0,r.Jj)(i,l)}),t.nodes().forEach(function(e){let n=t.node(e);a.cM.info(e,n.type,n.diff),n.isGroup&&(X=n.diff)}),a.cM.warn("Returning from recursive render XAX",h,X),{elem:h,diff:X}},"recursiveRender"),C=(0,a.eW)(async(e,t)=>{let n=new o.k({multigraph:!0,compound:!0}).setGraph({rankdir:e.direction,nodesep:e.config?.nodeSpacing||e.config?.flowchart?.nodeSpacing||e.nodeSpacing,ranksep:e.config?.rankSpacing||e.config?.flowchart?.rankSpacing||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),i=t.select("g");(0,r.DQ)(i,e.markers,e.type,e.diagramId),(0,r.eT)(),(0,r.gU)(),(0,r.ZH)(),f(),e.nodes.forEach(e=>{n.setNode(e.id,{...e}),e.parentId&&n.setParent(e.id,e.parentId)}),a.cM.debug("Edges:",e.edges),e.edges.forEach(e=>{if(e.start===e.end){let t=e.start,r=t+"---"+t+"---1",i=t+"---"+t+"---2",a=n.node(t);n.setNode(r,{domId:r,id:r,parentId:a.parentId,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),n.setParent(r,a.parentId),n.setNode(i,{domId:i,id:i,parentId:a.parentId,labelStyle:"",padding:0,shape:"labelRect",label:"",style:"",width:10,height:10}),n.setParent(i,a.parentId);let d=structuredClone(e),c=structuredClone(e),o=structuredClone(e);d.label="",d.arrowTypeEnd="none",d.id=t+"-cyclic-special-1",c.arrowTypeEnd="none",c.id=t+"-cyclic-special-mid",o.label="",a.isGroup&&(d.fromCluster=t,o.toCluster=t),o.id=t+"-cyclic-special-2",n.setEdge(t,r,d,t+"-cyclic-special-0"),n.setEdge(r,i,c,t+"-cyclic-special-1"),n.setEdge(i,t,o,t+"-cyc<lic-special-2")}else n.setEdge(e.start,e.end,{...e},e.id)}),a.cM.warn("Graph at first:",JSON.stringify(c.c(n))),X(n),a.cM.warn("Graph after XAX:",JSON.stringify(c.c(n)));let d=(0,a.nV)();await b(i,n,e.type,e.diagramId,void 0,d)},"render")}}]);