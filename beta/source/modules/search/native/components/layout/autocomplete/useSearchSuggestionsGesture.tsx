// Module ID: 16439
// Function ID: 16440
// Name: useSearchSuggestionsGesture
// Dependencies: [19, 4566, 11821, 6073, 2]
// Exports: useSearchSuggestionsContext, useSearchSuggestionsGesture

// Module 16439 (useSearchSuggestionsGesture)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11821 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let context = react.createContext(null);
function measureRelativeTo(pageX, pageX2) {
  size = { x: pageX.pageX - pageX2.pageX, y: pageX.pageY - pageX2.pageY, width: pageX.width, height: pageX.height };
  return size;
}
measureRelativeTo.__closure = {};
measureRelativeTo.__workletHash = 15107587770349;
measureRelativeTo.__initData = { code: "function measureRelativeTo_useSearchSuggestionsGestureTsx1(view,container){return{x:view.pageX-container.pageX,y:view.pageY-container.pageY,width:view.width,height:view.height};}" };
function containsPoint(arg0, arg1, arg2) {
  return arg0.x < arg1 && arg1 < arg0.x + arg0.width && arg0.y < arg2 && arg2 < arg0.y + arg0.height;
}
containsPoint.__closure = {};
containsPoint.__workletHash = 11759746841411;
containsPoint.__initData = { code: "function containsPoint_useSearchSuggestionsGestureTsx2(rect,x,y){return rect.x<x&&x<rect.x+rect.width&&rect.y<y&&y<rect.y+rect.height;}" };
let closure_7 = { code: "function useSearchSuggestionsGestureTsx3(e,manager){const{suggestionsMounted,measure,suggestionsRef,detectorRef,measureRelativeTo,containsPoint,dismissed}=this.__closure;manager.fail();const touch=e.allTouches[0];if(touch==null)return;if(!suggestionsMounted.get())return;const suggestions=measure(suggestionsRef);if(suggestions==null)return;const detector=measure(detectorRef);if(detector==null)return;const card=measureRelativeTo(suggestions,detector);if(containsPoint(card,touch.x,touch.y))return;dismissed.set(true);}" };
const Provider = context.Provider;
let size = size_mod;
let result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/useSearchSuggestionsGesture.tsx");

export const SearchSuggestionsProvider = Provider;
export const useSearchSuggestionsContext = function useSearchSuggestionsContext() {
  context = react.useContext(context);
  if (null == context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("useSearchSuggestionsContext must be used within a SearchSuggestionsProvider");
    throw error;
  } else {
    return context;
  }
};
export const useSearchSuggestionsGesture = function useSearchSuggestionsGesture(channelDetailsSearchContext) {
  let sharedValue1;
  _require = channelDetailsSearchContext;
  let obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue(false);
  const obj2 = require("ReanimatedRexport");
  sharedValue1 = obj2.useSharedValue(false);
  const obj3 = require("ReanimatedRexport");
  const animatedRef = obj3.useAnimatedRef();
  const obj4 = require("ReanimatedRexport");
  const animatedRef1 = obj4.useAnimatedRef();
  const items = [sharedValue];
  const callback = animatedRef.useCallback((arg0, arg1) => {
    if (arg0 !== arg1) {
      const result = sharedValue.set(false);
    }
  }, items);
  const items1 = [sharedValue, channelDetailsSearchContext, callback];
  const effect = animatedRef.useEffect(() => {
    const obj = SearchPlatformUtilsDefault;
    return obj.subscribeTextInputValue(channelDetailsSearchContext, callback);
  }, items1);
  const items2 = [sharedValue, animatedRef, sharedValue1, animatedRef1];
  const memo = animatedRef.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const fn = function e(arg0, fail) {
      let x;
      let y;
      fail.fail();
      const first = arg0.allTouches[0];
      if (null != first) {
        if (closure_1_2.get()) {
          const obj = channelDetailsSearchContext(sharedValue1[1]);
          const measureResult = obj.measure(animatedRef1);
          const tmp3 = channelDetailsSearchContext;
          const tmp4 = sharedValue1;
          if (null != measureResult) {
            const tmp3Result = tmp3(tmp4[1]);
            const measureResult1 = tmp3Result.measure(animatedRef);
            if (null != measureResult1) {
              if (typeof callback === "function") {
                const diff = measureResult.pageX - measureResult1.pageX;
                const diff1 = measureResult.pageY - measureResult1.pageY;
                ({ x, y } = first);
                if (typeof memo === "function") {
                  const tmp12 = diff < x && x < diff + tmp9 && diff1 < y && y < diff1 + tmp10;
                  if (!tmp12) {
                    const result = sharedValue.set(true);
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
        }
      }
    };
    const ManualResult = Gesture.Manual();
    const manualActivationResult = ManualResult.manualActivation(true);
    let obj = { suggestionsMounted: sharedValue1, measure: ReanimatedRexport.measure, suggestionsRef: animatedRef1, detectorRef: animatedRef, measureRelativeTo, containsPoint, dismissed: sharedValue };
    fn.__closure = obj;
    fn.__workletHash = 12139911159035;
    fn.__initData = __initData;
    return manualActivationResult.onTouchesDown(fn);
  }, items2);
  const items3 = [sharedValue];
  const callback1 = animatedRef.useCallback(() => {
    const result = sharedValue.set(true);
  }, items3);
  const items4 = [animatedRef1, sharedValue1, sharedValue, callback1];
  const memo1 = animatedRef.useMemo(() => ({ suggestionsRef: animatedRef1, suggestionsMounted: sharedValue1, dismissed: sharedValue, setDismissed: callback1 }), items4);
  const items5 = [memo, animatedRef, memo1];
  return animatedRef.useMemo(() => ({ gesture: memo, detectorRef: animatedRef, suggestionsContext: memo1 }), items5);
};
