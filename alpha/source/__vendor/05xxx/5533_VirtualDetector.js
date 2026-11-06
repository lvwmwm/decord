// Module ID: 5533
// Function ID: 5534
// Name: VirtualDetector
// Dependencies: [32, 19, 17, 21, 5532, 5454, 5534, 5520, 5529, 5528, 5535]
// Exports: VirtualDetector

// Module 5533 (VirtualDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5520 from "module_5520" /* 5520 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

const require = globalThis.__r;
let _require, closure_6;

let Children;
let Platform;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ Children, useCallback: c3, useEffect: closure_4, useMemo: hasOwnProperty, useRef: metroRequire, useState: metroImportDefault } = react);
({ findNodeHandle: metroImportAll, Platform } = react_native);
const jsx = Fragment.jsx;

export function VirtualDetector(children) {
  let handlerTags;
  let register;
  _require = children;
  const tmp = _require;
  let obj = require("react");
  const interceptingDetectorContext = obj.useInterceptingDetectorContext();
  if (interceptingDetectorContext) {
    register = interceptingDetectorContext.register;
    const unregister = interceptingDetectorContext.unregister;
    const setMode = interceptingDetectorContext.setMode;
    const tmp9 = closure_6(null);
    let closure_4 = tmp9;
    let num2 = 2;
    const tmp12 = unregister(handlerTags(-1), 2);
    const first = tmp12[0];
    closure_6 = tmp12[1];
    const items = [children.children];
    const tmp15 = setMode((current) => {
      closure_4.current = current;
      if (current) {
        let num2 = metroImportAll(current);
        const tmp4 = closure_6;
        if (num2 == null) {
          num2 = -1;
        }
        tmp4(num2);
      } else {
        closure_6(-1);
      }
    }, items);
    const tmpResult = tmp(register[6]);
    const nativeGestureRole = tmpResult.useNativeGestureRole(tmp9, children.children);
    closure_6(false);
    closure_4(() => {

    });
    const items1 = [children.gesture];
    const tmp21 = first(() => {
      const gesture = children.gesture;
      const obj = _mod5520;
      if (obj.isComposedGesture(children.gesture)) {
        handlerTags = gesture.handlerTags;
      } else {
        handlerTags = [gesture.handlerTag];
      }
      return handlerTags;
    }, items1);
    handlerTags = tmp21;
    const tmpResult4 = tmp(register[8]);
    const detectorAttachmentGuard = tmpResult4.useDetectorAttachmentGuard(tmp21);
    const items2 = [first, children.gesture, tmp21, , , , , , ];
    ({ userSelect: arr3[3], touchAction: arr3[4], enableContextMenu: arr3[5] } = children);
    items2[6] = register;
    items2[7] = unregister;
    items2[8] = setMode;
    closure_4(function() {
      let obj;
      if (-1 !== first) {
        if (obj.gesture.config.dispatchesAnimatedEvents) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const obj2 = children(register[5]);
          const error = new Error(obj2.tagMessage("VirtualGestureDetector cannot handle Animated events with native driver when used inside InterceptingGestureDetector. Use Reanimated or Animated events without native driver instead."));
          throw error;
        } else {
          if (obj.gesture.config.shouldUseReanimatedDetector) {
            setMode(children(register[4]).InterceptingDetectorMode.REANIMATED);
          }
          obj = { viewTag: tmp, handlerTags, methods: obj.gesture.detectorCallbacks, viewRef: "a", userSelect: "ellen\u0151rz\u00E9s", touchAction: "poggy\u00E1sz \u00E1tvizsg\u00E1l\u00E1sa", enableContextMenu: "v\u00E1m" };
          ({ userSelect: obj.userSelect, touchAction: obj.touchAction, enableContextMenu: obj.enableContextMenu } = obj);
          register(obj);
          return () => {
            unregister(obj);
          };
        }
      }
    }, items2);
    const tmpResult5 = tmp(register[9]);
    const gestureRelationsUpdater = tmpResult5.useGestureRelationsUpdater(children.gesture);
    return jsx(tmp(register[10]).Wrap, { ref: tmp15, children: children.children });
  } else {
    let tmp4 = globalThis;
    let _Error = Error;
    let self = this;
    let self2 = this;
    const tmpResult6 = tmp(register[5]);
    let error = new Error(tmpResult6.tagMessage("VirtualGestureDetector must be a descendant of an InterceptingGestureDetector"));
    throw error;
  }
}
