// Module ID: 6383
// Function ID: 6384
// Dependencies: [6358, 6366, 6363, 6365, 6338]
// Exports: updateHandlers

// Module 6383
import handlerIDToTag from "handlerIDToTag" /* 6338 */;
import ALLOWED_PROPS from "ALLOWED_PROPS" /* 6358 */;
import react_nativeDefault from "react-native" /* 6363 */;
import selectProperties from "selectProperties" /* 6365 */;

const require = globalThis.__r;
let _require;


export const updateHandlers = function updateHandlers(attachedGestures, prepare, arg2) {
  let num;
  _require = attachedGestures;
  let closure_1 = arg2;
  prepare.prepare();
  for (let num = 0; num < arg2.length; num = num + 1) {
    let tmp2 = attachedGestures.attachedGestures[num];
    let tmp3 = _require;
    let tmp4 = attachedGestures;
    let obj = require("ALLOWED_PROPS");
    let result = obj.checkGestureCallbacksForWorklets(tmp2);
    let tmp6 = num;
    if (arg2[num].handlerTag !== tmp2.handlerTag) {
      ({ handlerTag: arg2[num].handlerTag, handlerTag: arg2[num].handlers.handlerTag } = tmp2);
    }
  }
  attachedGestures = attachedGestures.attachedGestures;
  let obj2 = require("ghQueueMicrotask");
  obj2.ghQueueMicrotask(() => {
    let arr2;
    if (attachedGestures.isMounted) {
      let arr = attachedGestures;
      if (attachedGestures === tmp.attachedGestures) {
        let tmp23 = arr.length !== closure_1.length;
        let num = 0;
        let tmp24 = tmp23;
        if (0 < closure_1.length) {
          do {
            let tmp3 = attachedGestures[num];
            arr2 = closure_1;
            let tmp4 = tmp3.handlers.gestureId !== closure_1[num].handlers.gestureId;
            let flag = tmp23;
            let tmp2 = attachedGestures;
            if (tmp4) {
              let tmp6 = arr2[num].shouldUseReanimated || tmp3.shouldUseReanimated;
              tmp4 = tmp6;
            }
            if (tmp4) {
              flag = true;
            }
            tmp3.config = arr2[num].config;
            tmp3.handlers = arr2[num].handlers;
            let tmp9 = react_nativeDefault;
            let setGestureHandlerConfig = tmp9.setGestureHandlerConfig;
            let handlerTag = tmp3.handlerTag;
            let obj = selectProperties;
            let result = setGestureHandlerConfig(handlerTag, obj.filterConfig(tmp3.config, ALLOWED_PROPS.ALLOWED_PROPS));
            let tmp16 = react_nativeDefault;
            let configureRelations = tmp16.configureRelations;
            let handlerTag2 = tmp3.handlerTag;
            let obj2 = ALLOWED_PROPS;
            let configureRelationsResult = configureRelations(handlerTag2, obj2.extractGestureRelations(tmp3));
            let obj3 = handlerIDToTag;
            let registerHandlerResult = obj3.registerHandler(tmp3.handlerTag, tmp3, tmp3.config.testId);
            num = num + 1;
            tmp23 = flag;
            tmp24 = flag;
            arr = tmp2;
          } while (num < arr2.length);
        }
        if (attachedGestures.animatedHandlers) {
          if (tmp24) {
            const found = arr.filter((shouldUseReanimated) => shouldUseReanimated.shouldUseReanimated);
            tmp25.animatedHandlers.value = found.map((handlers) => handlers.handlers);
          }
        }
        const obj4 = selectProperties;
        const result1 = obj4.scheduleFlushOperations();
      }
    }
  });
};
