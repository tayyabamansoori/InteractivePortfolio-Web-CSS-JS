"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[11930],{549359:(e,t,n)=>{var a;n.r(t),n.d(t,{default:()=>l});let r={fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useFragmentWithoutSuspenseDONOTUSENoOpQuery",selections:a=[{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"__id",storageKey:null}]}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"useFragmentWithoutSuspenseDONOTUSENoOpQuery",selections:a},params:{cacheID:"9d9a0b4361770e7457fb22c606b3e5f1",id:null,metadata:{},name:"useFragmentWithoutSuspenseDONOTUSENoOpQuery",operationKind:"query",text:null}};r.hash="de96be885f09f9032378528575433b38";let l=r;!function(e){if("query"===e.params.operationKind){if(window.__pwsCacheRelayConcreteRequest)window.__pwsCacheRelayConcreteRequest(e);else{let t=[e.params.name,e.params.id].join(":");window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__=window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__||{},window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__[t]=e}}}(r.default||r)},381458:(e,t,n)=>{n.d(t,{zI:()=>g,ZP:()=>_,Gh:()=>f});var a=n(441143),r=n.n(a),l=n(244311),i=n(698681),o=n(226618);let u="undefined"!=typeof WeakSet,s="undefined"!=typeof WeakMap,c=function e(t,n){if(t===n||"object"!=typeof t||t instanceof Set||t instanceof Map||u&&t instanceof WeakSet||s&&t instanceof WeakMap||!t||"object"!=typeof n||n instanceof Set||n instanceof Map||u&&n instanceof WeakSet||s&&n instanceof WeakMap||!n)return n;let a=!1,r=Array.isArray(t)?t:null,l=Array.isArray(n)?n:null;if(r&&l)a=l.reduce((t,n,a)=>{let i=e(r[a],n);return i!==l[a]&&(l[a]=i),t&&i===r[a]},!0)&&r.length===l.length;else if(!r&&!l){let r=(0,o.G5)(n);if(r&&(0,o.I9)(t,r),t===n)a=!0;else{let r=Object.keys(t),l=Object.keys(n);a=l.reduce((a,r)=>{let l=e(t[r],n[r]);return l!==n[r]&&(n[r]=l),a&&l===t[r]},!0)&&r.length===l.length}}return a?t:n};var d=n(753694),p=n(953565);let f=Symbol("inlineFragmentSpread"),g="web_gql_ala_cache",y=({conditionContext:e,fragmentName:t,mutableOutput:n,parentType:a,selections:l,legacyData:u,paginationInfo:s,refetchInfo:c})=>{l.forEach(l=>{switch(l.kind){case"ScalarField":{let{alias:e,name:t}=l;n[e??t]=(0,i.mC)(t,a,u);break}case"LinkedField":{let{alias:o,name:d,concreteType:p,plural:f,selections:g}=l,m=o??d,_=(0,i.LJ)(u,a,l);if(null==_){n[m]=_;return}if(f){let a=(0,i.cG)({untypedInput:_,concreteType:p}),l=n[m];r()(!l||Array.isArray(l),"plural data must be an array"),n[m]=a?.filter(Boolean).map((n,a)=>{let r=l?.[a]??{};return y({conditionContext:e,fragmentName:t,mutableOutput:r,parentType:p,selections:g,legacyData:n,refetchInfo:c,paginationInfo:s}),r})}else{r()("object"==typeof _,`Value for ${d} must be an object${p?` with type ${p}`:""}, but a ${typeof _} is given`);let a=n[m]??{};n[m]=a,y({conditionContext:e,fragmentName:t,mutableOutput:a,parentType:p,selections:g,legacyData:_,refetchInfo:c,paginationInfo:s})}break}case"InlineFragment":{let{abstractKey:a,type:o,selections:d}=l;if(r()(null!=o&&null===a,"We only support using inline fragment to refine to concrete types for now. Contact @jackhsu or @robertbalicki"),null==u)break;let p=(0,i.uC)(u);null!=p&&(0,i.Z1)(o,p)&&y({conditionContext:e,fragmentName:t,mutableOutput:n,parentType:o,selections:d,legacyData:u,paginationInfo:s,refetchInfo:c});break}case"Condition":{let{condition:r,selections:i}=l,o=!0;"isAuth"===r?o=e.isAuth===l.passingValue:"isDesktop"===r&&(o=e.isDesktop===l.passingValue),o&&y({conditionContext:e,fragmentName:t,mutableOutput:n,parentType:a,selections:i,legacyData:u,paginationInfo:s,refetchInfo:c});break}case"FragmentSpread":(0,o.I9)(n,{data:u,refetchInfo:c,paginationInfo:s});break;case"ClientExtension":y({conditionContext:e,fragmentName:t,mutableOutput:n,parentType:a,selections:l.selections,legacyData:u,paginationInfo:s,refetchInfo:c});break;case"InlineDataFragmentSpread":{let t={},{selections:r,name:i}=l;y({conditionContext:e,fragmentName:i,mutableOutput:t,parentType:a,selections:r,legacyData:u,paginationInfo:s,refetchInfo:c}),n[f]||(n[f]={}),n[f][i]=t;break}case"Defer":case"Stream":case"ActorChange":case"FlightField":case"ModuleImport":case"RelayResolver":case"RequiredField":case"RelayLiveResolver":case"AliasedFragmentSpread":case"ClientEdgeToClientObject":case"ClientEdgeToServerObject":case"AliasedInlineFragmentSpread":throw Error(`The selection type '${l.kind}' is not supported yet. Contact @jackhsu or @robertbalicki`);default:throw Error(`Unexpected selection type '${l.kind}'`)}})},m=new Set;function _({conditionContext:e,fragment:t,legacyData:n,paginationInfo:a,refetchInfo:o,useStableReferences:u}){let s;let f=(0,l.getFragment)(t);try{s=function({conditionContext:e,fragment:t,legacyData:n,paginationInfo:a,refetchInfo:l}){if(null==t.abstractKey){let e=null!=n?(0,i.uC)(n):null;null!=e&&r()((0,i.Z1)(t.type,e),`fragment data type '${t.type}' does not match legacy data type '${e}'. See http://pinch.pinadmin.com/fragment-data-type-does-not-match-legacy-data-type.`)}let o={};return y({conditionContext:e,fragmentName:t.name,mutableOutput:o,parentType:t.type,selections:t.selections,legacyData:n,paginationInfo:a,refetchInfo:l}),o}({conditionContext:e,fragment:f,legacyData:n,paginationInfo:a,refetchInfo:o})}catch(t){throw m.has(f.name)||(m.add(f.name),(0,p.nP)("autoLegacyAdapter.erroredReadResults",{sampleRate:1,tags:{fragmentName:f.name,rootId:n.id,rootType:n.type,url:window.location.href,isAuth:e.isAuth}})),t}let g=n.id;return u&&g?function({cacheKey:e,data:t}){let n=(0,d.aL)(e),a=t;if(null!=n){let r=c(n.data,t);r!==n.data&&(0,d.ax)(e,{count:n.count,data:r}),a=r}else(0,d.ax)(e,{count:0,data:t});return(0,d.U5)(e),setTimeout(()=>(0,d.H8)(e),3e4),a}({cacheKey:(0,d._0)(f,n.id),data:s}):s}},698681:(e,t,n)=>{n.d(t,{Cs:()=>y,LJ:()=>P,Z1:()=>b,cG:()=>I,mC:()=>E,uC:()=>H});var a=n(441143),r=n.n(a);let l={vDASHHEVCSLCONTROL:"V_DASH_HEVC_SL_CONTROL",vHLSHEVC2SEC:"V_HLS_HEVC_2_SEC",vHLSHEVCSLCONTROL:"V_HLS_HEVC_SL_CONTROL",vHLSSINGLEFILECMAFEXP:"V_HLS_SINGLE_FILE_CMAF_EXP",vHLSSINGLEFILECONTROL:"V_HLS_SINGLE_FILE_CONTROL",vHLSSINGLEFILETSEXP:"V_HLS_SINGLE_FILE_TS_EXP",vHLSSLCONTROL:"V_HLS_SL_CONTROL",vHLSV3:"V_HLSV3",vHLSV3EXP:"V_HLSV3_EXP",vHLSV3MOBILE:"V_HLSV3_MOBILE",vHLSV3WEB:"V_HLSV3_WEB",vHLSV4:"V_HLSV4",vLOWBITRATEEXPHLSHEVCCONTROL:"V_LOW_BITRATE_EXP_HLS_HEVC_CONTROL",vLOWBITRATEEXPHLSHEVCLOB:"V_LOW_BITRATE_EXP_HLS_HEVC_LOB",vLOWBITRATEEXPHLSHEVCLQS:"V_LOW_BITRATE_EXP_HLS_HEVC_LQS"},i=/(\d\d0P)(\d\d0K)/,o=/QVBR(8|10)/,u=/(EXP\d?|ADSHQ|AVC|DASH|MANI|HIGHQUAL|HEVC|HLS|H265|H264|720P?|MP4|ENABLED|CONTROL|PROD|T\d|Q?VBR\d*|AUTOABR|MEDIACONVERT|QUALITY|REARRANGED|REMHIGHRES|VISIONULAR|480$|640$|V2$|\dSEC$|\d\d0P\d\d0K$)/g,s=/^v/,c=e=>l[e]??e.replace(u,"_$1").replace(i,"$1_$2").replace(o,"QVBR_$1").replace("ADSHQ","ADS_HQ").replace("HIGHQUAL","HIGH_QUAL").replace("REMHIGHRES","REM_HIGH_RES").replace(s,"V"),d=/[A-Z]/g,p=e=>e.replace(d,e=>`_${e.toLowerCase()}`),f=/^_/,g=e=>e.replace(f,""),y=e=>g(p(e)),m=["actionOptions","feedbackText","selectedItem","savedInfo","undoCallbackProps"],_=["boardId","localPinId","showFeedback","showFeedbackOverlay","sectionId","subTitle","viewType","viewParameter"],S=(e,t)=>{if(_.includes(e))return e;switch(e){case"entityId":return"id";case"__id":return r()(t.node_id,"node_id is missing. Please only select the __id field on objects which have an id field."),"node_id";default:return y(e)}},h=e=>"StoryPinPage"===e||"StoryPinImageBlock"===e,L=(e,t,n)=>{if(h(n)){if("images"===e)return"image";if("imagesAdjusted"===e)return"image_adjusted"}if("PinTagChipImagesPerSpec"===n&&"image"===e)return"images";if("VideoDetail"===t)return c(e);if(m.includes(e))return e;switch(e){case"reactionCountsData":return"reaction_counts";case"videoData":return"video";case"formattedCloseupDescription":return"formatted_description";default:return y(e)}},k=(e,t)=>{switch(e){case"reactionType":return"string"==typeof t?Number(t):t;case"campaignId":case"pinPromotionId":return"number"==typeof t?String(t):t;default:return t}},E=(e,t,n)=>"Video"===t&&"duration"===e?n?.duration!=null?n.duration:Object.values(n?.video_list||{}).find(e=>e?.duration!=null)?.duration:"__typename"===e?t:k(e,n?.[S(e,n)]),I=({untypedInput:e,concreteType:t})=>{if(!e)return null;switch(r()("object"==typeof e,"legacy data must be an object"),t){case"ReactionCountModel":return Object.entries(e).map(([e,t])=>({reaction_type:e,reaction_count:t}));case"PinThroughProperties":case"ThroughProperties":case"TrackingParamsMap":return Object.entries(e).map(([e,t])=>({key:e,data:t}));default:if(Array.isArray(e))return e;return Object.entries(e).map(([e,t])=>({key:e,value:t}))}},C=({args:e,name:t})=>{let n=e.find(e=>e.name===t);return n&&"string"==typeof n.value?n.value:null},P=(e,t,n)=>{let{args:a,name:l}=n;if("PinTagChipImagesPerSpec"===t&&"image"===l)return e?.images?.["750x"];let i=e?.[L(l,n.concreteType,t)];if(!i)return i;let o=C({args:a??[],name:"spec"});if(o){if(r()("object"==typeof i,"value must be an object"),h(t)){let{dominant_color:e,images:t}=i;if(!t)return t;r()("object"==typeof t,"images must be an object");let n=t["orig"===o?"originals":o];return n&&e?{...n,dominant_color:e}:n}return i[o]}return i},A={HeadingBlock:"StoryPinHeadingBlock",IngredientBlock:"StoryPinIngredientBlock",InstantContentURLNavigateAction:"InstantContentActionUrlNavigate",InstantContentHeaderBlock:"InstantContentHeader",InstantContentParagraphBlock:"InstantContentParagraph",InstantContentTextBlock:"InstantContentText",InstantContentHeadingBlock:"InstantContentHeading",InstantContentImageBlock:"InstantContentImage",InstantContentVideoBlock:"InstantContentVideo",InstantContentTableBlock:"InstantContentTable",InstantContentGroupBlock:"InstantContentGroup",InstantContentOrderedListBlock:"InstantContentOrderedList",InstantContentUnorderedListBlock:"InstantContentUnorderedList",InstantContentSectionBlock:"InstantContentSection",InstantContentSeparatorBlock:"InstantContentSeparator",InstantContentUserBlock:"InstantContentUser",InstantContentWebBlock:"InstantContentWeb",InstantContentPromotedWebBlock:"InstantContentPromotedWeb",LinkBlock:"StoryPinLinkBlock",ParagraphBlock:"StoryPinParagraphBlock",SupplyBlock:"StoryPinSupplyBlock",TextBlock:"StoryPinTextBlock",DescriptionString:"FormattedDescriptionParagraphComponent",DescriptionHeader:"FormattedDescriptionHeaderComponent",DescriptionPoints:"FormattedDescriptionPointsComponent",DescriptionStringBold:"FormattedDescriptionBoldComponent",DescriptionTable:"FormattedDescriptionTableComponent",DescriptionSpecs:"FormattedDescriptionSpecsComponent"},b=(e,t)=>(A[e]??e).toLowerCase()===t,O={0:"StoryPinParagraphBlock",1:"StoryPinHeadingBlock",2:"StoryPinImageBlock",3:"StoryPinVideoBlock",4:"StoryPinLinkBlock",5:"StoryPinIngredientBlock",6:"StoryPinSupplyBlock",7:"StoryPinListBlock",8:"StoryPinKeyValueBlock",9:"StoryPinTextBlock",11:"StoryPinMusicBlock",12:"StoryPinMentionStickerBlock",13:"StoryPinProductStickerBlock",14:"StoryPinStaticStickerBlock",15:"StoryPinAnimatedStickerBlock",16:"StoryPinCommentReplyBlock",17:"StoryPinVirtualTryOnMakeupStickerBlock",18:"StoryPinAdBlock",19:"StoryPinGenericInteractiveStickerBlock"},R=/_/g,H=e=>"string"==typeof e.type?e.type.replace(R,"").toLowerCase():"number"==typeof e.block_type?O[e.block_type].toLowerCase():void 0},91402:(e,t,n)=>{n.d(t,{g:()=>l,j:()=>i});var a=n(226618),r=n(953565);function l(e){if(Array.isArray(e)){let t=e[0];if(null==t)return{kind:"PluralLegacy",data:[],paginationInfo:null,refetchInfo:null};if(null!=t.__fragments)return{kind:"GraphQL",data:e};let n=(0,a.G5)(t);return null!=n?{kind:"PluralLegacy",data:e.map(e=>(0,a.Be)(e).data),paginationInfo:n.paginationInfo,refetchInfo:n.refetchInfo}:((0,r.nP)("autoLegacyAdapter.invalidPluralDataKey",{sampleRate:1}),{kind:"PluralLegacy",data:e.map(e=>(0,a.Be)(e).data),paginationInfo:null,refetchInfo:null})}let t=(0,a.G5)(e);if(null!=t){let{data:e,refetchInfo:n,paginationInfo:a}=t;return{kind:"SingularLegacy",data:e,refetchInfo:n,paginationInfo:a}}if(e.__fragments)return{kind:"GraphQL",data:e};if("graphqlRef"===e.type)return{kind:"GraphQL",data:e.data};if("deprecated"===e.type){let{data:t}=e;return Array.isArray(t)?{kind:"PluralLegacy",data:t,refetchInfo:null,paginationInfo:null}:{kind:"SingularLegacy",data:t,refetchInfo:null,paginationInfo:null}}throw Error("Invalid value")}function i(e){let t=(0,a.G5)(e);return null!=t?{type:"deprecated",data:t.data}:e.__fragments?{type:"graphqlRef",data:e}:e}},226618:(e,t,n)=>{n.d(t,{Be:()=>l,G5:()=>r,I9:()=>i});let a=Symbol("legacyData");function r(e){return e[a]}function l(e){return e[a]}function i(e,t){return e[a]=t,e}},333739:(e,t,n)=>{n.d(t,{qH:()=>A,tx:()=>b,Zm:()=>_,HF:()=>C,sr:()=>P,O7:()=>S,V4:()=>I});var a=n(545007),r=n(381458);function l(e){return null==e?"null or undefined":Array.isArray(e)?"Array":typeof e}function i(e,t,n){return"Manual"===t?{path:e,message:`Value found only in legacy adapter, where it had type ${l(n)}. (Or it was null in the auto-legacy adapter.)`,kind:"MissingInLegacy"}:{path:e,message:`Value found only in auto-legacy adapter, where it had type ${l(n)}. (Or it was null in the legacy adapter.)`,kind:"MissingInAutoLegacy"}}function o(e,t,n){let a=l(t),r=l(n);return{path:e,message:`Found item of type ${a} in the legacy adapter result, and an item of type ${r} in the auto-legacy result.`,kind:"Type"}}var u=n(226618),s=n(582008),c=n(340523),d=n(5859),p=n(554786),f=n(19447),g=n(953565);let y={},m=new Set;function _(e,t,{useGraphQLAdapter:n,useLegacyAdapter:a,renderStrategy__DO_NOT_USE:r}){if("deprecated"===t.type)return{data:a(t.data),childDataKey__DEPRECATED:t};let l=(0,s.h)(e,t.data,r??null);return{data:n(l),childDataKey__DEPRECATED:{type:"graphqlRef",data:l}}}let S=()=>{let{isAuthenticated:e}=(0,d.B)();return{isAuth:!!e,isDesktop:(0,p.HG)()}};function h(){return"undefined"!=typeof performance?performance.now():Date.now()}function L(e){let t=h();return[e(),h()-t]}let k=new Map;function E(e,t,n,a){let r=k.get(a);if(r){if(!r.has(t)){let[a,l]=L(e);return r.add(t),(0,g.LY)(t,l,{sampleRate:n.isParallel?1:.1,tags:n}),a}}else{let[r,l]=L(e);return k.set(a,new Set([t])),(0,g.LY)(t,l,{sampleRate:n.isParallel?1:.1,tags:n}),r}return e()}function I(e,t){let{checkExperiment:n}=(0,c.F)(),{isAuthenticated:a}=(0,d.B)(),{group:s,anyEnabled:p}=n(a?"web_graphql_auto_legacy_adapters_auth":"web_graphql_auto_legacy_adapters_unauth"),f=S();return s.includes("parallel")?n=>{let a=E(()=>(0,u.I9)(t(n),{data:n,refetchInfo:null,paginationInfo:null}),"autoLegacyAdapter.legacyTiming",{isParallel:!0,fragmentName:e.name},e.name);return"object"==typeof window&&function(e,t,n,a){let u;try{u=E(()=>(0,r.ZP)({conditionContext:t,fragment:e,legacyData:n,refetchInfo:null,paginationInfo:null}),"autoLegacyAdapter.autoLegacyTiming",{fragmentName:e.name,isParallel:!0},e.name)}catch{return}try{var s;let t=(s=u,function e(t,n,a){let r=[],u=Object.keys(n),s=Object.keys(a);for(let s of u){let u=n[s],c=a[s];r.push(...function t(n,a,r){return null!=a&&null==r?[i(n,"Manual",a)]:a===r||null==a&&null==r?[]:Array.isArray(a)?Array.isArray(r)?function(e,n,a){if(n.length!==a.length)return[{path:e,message:`legacyResult is an array of length ${n.length}; autoLegacyResult is an array of length ${a.length}`,kind:"Length"}];let r=[];for(let l=0;l<n.length;l+=1){let i=n[l],o=a[l];r.push(...t(`${e}[]`,i,o))}return r}(n,a,r):[o(n,a,r)]:"object"==typeof a?"object"==typeof r&&null!==r&&null!==a?e(n,a,r):[o(n,a,r)]:[typeof a!=typeof r?o(n,a,r):{path:n,message:`Found items of type ${l(a)}, but their values did not match.`,kind:"Value"}]}(`${t}.${s}`,u,c))}for(let e of s){let l=n[e],o=a[e];null!=o&&null==l&&r.push(i(`${t}.${e}`,"Auto",o))}return r}("",a,s));if(t.length>0){window.SHOULD_LOG_ADAPTER_DIFFERENCES&&console.warn({differences:t,fragment:e.name}),y[e.name]=y[e.name]??new Set;let n=y[e.name];for(let a of t)n.has(a.path)||(n.add(a.path),(0,g.nP)("autoLegacyAdapter.inconsistentReadResults",{sampleRate:1,tags:{fragmentName:e.name,path:a.path,kind:a.kind}}))}}catch(t){m.has(e.name)||(m.add(e.name),window.SHOULD_LOG_ADAPTER_DIFFERENCES&&console.warn(`comparing results threw for fragment ${e.name}`),(0,g.nP)("autoLegacyAdapter.erroredCompareResults",{sampleRate:1,tags:{fragmentName:e.name}}))}}(e,f,n,a),a}:p?t=>E(()=>(0,r.ZP)({conditionContext:f,fragment:e,legacyData:t,refetchInfo:null,paginationInfo:null}),"autoLegacyAdapter.autoLegacyTiming",{fragmentName:e.name,isParallel:!1},e.name):n=>E(()=>(0,u.I9)(t(n),{data:n,refetchInfo:null,paginationInfo:null}),"autoLegacyAdapter.legacyTiming",{fragmentName:e.name,isParallel:!1},e.name)}function C(e,t,n){let r;switch(n.type){case"article":r=e=>{let t=(0,a.v9)(({articles:t})=>t[e]);return t?n.useLegacyAdapter(t):null};break;case"story":r=e=>{let t=(0,a.v9)(({stories:t})=>t[e]);return t?n.useLegacyAdapter(t):null};break;default:r=e=>{let t=(0,f.S6)()(e);return t?n.useLegacyAdapter(t):null}}return _(e,t,{useGraphQLAdapter:n.useGraphQLAdapter,useLegacyAdapter:r,renderStrategy__DO_NOT_USE:n.renderStrategy__DO_NOT_USE??null})}function P(e,t,n){let a=I(e,n.useLegacyAdapter);return C(e,t,{...n,useGraphQLAdapter:e=>e,useLegacyAdapter:a})}let A=void 0,b={" $fragmentSpreads":A," $fragmentType":void 0}},753694:(e,t,n)=>{n.d(t,{H8:()=>u,aL:()=>s,_0:()=>d,vE:()=>p,U5:()=>o,ax:()=>c});var a=n(91402);let r=function(e){if(!e)return null;let t=(0,a.g)(e);switch(t.kind){case"SingularLegacy":return[t.data.id];case"PluralLegacy":return t.data.map(e=>e.id);default:return null}};var l=n(953565);let i=new Map;function o(e){let t=i.get(e);t&&i.set(e,{count:t.count+1,data:t.data})}function u(e){let t=i.get(e);if(!t){let t=e.split("/")[0];throw(0,l.nP)("autoLegacyAdapter.stableReferences.cacheItemMissing",{sampleRate:1,tags:{fragmentName:t}}),Error(`Item with key ${e} not found in cache`)}if(1===t.count){i.delete(e);return}i.set(e,{count:t.count-1,data:t.data})}function s(e){return i.get(e)}function c(e,t){i.set(e,t)}function d(e,t){return`${e.name}/${t}`}function p(e,t){let n=r(t);return n?n.filter(e=>null!=e).map(t=>d(e,t)):null}},207012:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(422578),r=n(244311),l=n(381458),i=n(91402),o=n(333739),u=n(753694),s=n(584797),c=n(340523);let d=function(e,t){let n=(0,o.O7)(),d=(0,c.F)(),p=t?(0,i.g)(t):null,f=(p?.kind==="SingularLegacy"||p?.kind==="PluralLegacy")&&d.checkExperiment(l.zI).anyEnabled;if((0,s.Z)({itemKeys:(0,u.vE)((0,r.getFragment)(e),t),useStableReferences:f}),null===t||null==p)return null;switch(p.kind){case"SingularLegacy":{let{data:t,refetchInfo:a,paginationInfo:r}=p;return(0,l.ZP)({conditionContext:n,fragment:e,legacyData:t,paginationInfo:r,refetchInfo:a,useStableReferences:f})}case"PluralLegacy":{let{data:t,refetchInfo:a,paginationInfo:r}=p;return t.map(t=>(0,l.ZP)({conditionContext:n,fragment:e,legacyData:t,paginationInfo:r,refetchInfo:a,useStableReferences:f}))}case"GraphQL":return(0,a.useFragment)(e,p.data);default:throw Error("Unexpected case")}}},582008:(e,t,n)=>{n.d(t,{P:()=>d,h:()=>p});var a,r=n(667294),l=n(422578),i=n(244311),o=n(91402),u=n(207012);function s(e,t,r){return r.lookup({kind:"SingularReaderSelector",dataID:t.__id,isWithinUnmatchedTypeRefinement:!1,node:(0,i.getFragment)(e),owner:{identifier:Math.random()+"",node:(0,i.getRequest)(void 0!==a?a:a=n(549359)),variables:t.__fragmentOwner.variables,cacheConfig:null},variables:t.__fragmentOwner.variables})}function c(e,t,n){switch(n??"SuspendOnMissingData"){case"SuspendOnMissingData":default:return(0,l.useFragment)(e,t);case"RenderWithMissingData":{let n=(0,l.useRelayEnvironment)();if(null==t)return null;return s(e,t,n).data}case"RenderWithMissingDataAndSubscribe":return function(e,t){let n=t?.__fragmentOwner.identifier,a=(0,l.useRelayEnvironment)(),[i,o]=(0,r.useState)(()=>({fragmentRefIdentifier:n,snapshot:null!=t?s(e,t,a):null}));return i.fragmentRefIdentifier!==n&&o({fragmentRefIdentifier:n,snapshot:null!=t?s(e,t,a):null}),(0,r.useEffect)(()=>{if(null!=i.snapshot){let e=a.subscribe(i.snapshot,e=>{o({fragmentRefIdentifier:n,snapshot:e})});return()=>e.dispose()}},[n]),i.snapshot?.data??null}(e,t)}}let d=function(e,t,n){if(null==t)return null;let a=(0,o.g)(t);return"GraphQL"===a.kind?c(e,a.data,n):(0,u.Z)(e,t)},p=c},584797:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(667294),r=n(753694);let l=function({itemKeys:e,useStableReferences:t}){return(0,a.useEffect)(()=>{if(e&&t)return e.forEach(e=>(0,r.U5)(e)),()=>{e.forEach(e=>(0,r.H8)(e))}},[e?.join(","),t])}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/11930-d19f2216d75f4d89.mjs.map