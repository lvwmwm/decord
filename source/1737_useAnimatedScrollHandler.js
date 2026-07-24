// Module ID: 1737
// Function ID: 19475
// Name: useAnimatedScrollHandler
// Dependencies: [1727, 1729]

// Module 1737 (useAnimatedScrollHandler)
let require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function pnpm_useAnimatedScrollHandlerTs1(event){const{scrollHandlers,context}=this.__closure;const{onScroll:onScroll,onBeginDrag:onBeginDrag,onEndDrag:onEndDrag,onMomentumBegin:onMomentumBegin,onMomentumEnd:onMomentumEnd}=scrollHandlers;if(onScroll&&event.eventName.endsWith('onScroll')){onScroll(event,context);}else if(onBeginDrag&&event.eventName.endsWith('onScrollBeginDrag')){onBeginDrag(event,context);}else if(onEndDrag&&event.eventName.endsWith('onScrollEndDrag')){onEndDrag(event,context);}else if(onMomentumBegin&&event.eventName.endsWith('onMomentumScrollBegin')){onMomentumBegin(event,context);}else if(onMomentumEnd&&event.eventName.endsWith('onMomentumScrollEnd')){onMomentumEnd(event,context);}}" };
arg5.useAnimatedScrollHandler = function useAnimatedScrollHandler(A, items) {
  let tmp = A;
  if ("function" === typeof A) {
    let obj = { onScroll: A };
    tmp = obj;
  }
  const require = tmp;
  const handler = require(context[0]).useHandler(tmp, items);
  context = handler.context;
  items = ["onScroll"];
  if (undefined !== tmp.onBeginDrag) {
    items.push("onScrollBeginDrag");
  }
  if (undefined !== tmp.onEndDrag) {
    items.push("onScrollEndDrag");
  }
  if (undefined !== tmp.onMomentumBegin) {
    items.push("onMomentumScrollBegin");
  }
  if (undefined !== tmp.onMomentumEnd) {
    items.push("onMomentumScrollEnd");
  }
  const obj2 = require(context[0]);
  /* worklet (recovered source) */ function pnpm_useAnimatedScrollHandlerTs1(event){const{scrollHandlers,context}=this.__closure;const{onScroll:onScroll,onBeginDrag:onBeginDrag,onEndDrag:onEndDrag,onMomentumBegin:onMomentumBegin,onMomentumEnd:onMomentumEnd}=scrollHandlers;if(onScroll&&event.eventName.endsWith('onScroll')){onScroll(event,context);}else if(onBeginDrag&&event.eventName.endsWith('onScrollBeginDrag')){onBeginDrag(event,context);}else if(onEndDrag&&event.eventName.endsWith('onScrollEndDrag')){onEndDrag(event,context);}else if(onMomentumBegin&&event.eventName.endsWith('onMomentumScrollBegin')){onMomentumBegin(event,context);}else if(onMomentumEnd&&event.eventName.endsWith('onMomentumScrollEnd')){onMomentumEnd(event,context);}}
  obj = { scrollHandlers: tmp, context };
  pnpm_useAnimatedScrollHandlerTs1.__closure = obj;
  pnpm_useAnimatedScrollHandlerTs1.__workletHash = 480432859268;
  pnpm_useAnimatedScrollHandlerTs1.__initData = closure_2;
  return require(context[1]).useEvent(pnpm_useAnimatedScrollHandlerTs1, items, handler.doDependenciesDiffer);
};
