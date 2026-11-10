// Module ID: 19071
// Function ID: 19072
// Name: useSearchSuggestionsGesture
// Dependencies: [19, 1652, 14146, 5422, 2]
// Exports: useSearchSuggestionsContext, useSearchSuggestionsGesture

// Module 19071 (useSearchSuggestionsGesture)
import _mod1652 from "module_1652" /* 1652 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5422 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 14146 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp3;
let tmp4;
let context = react.createContext(null);
let items = [{ code: "(function measureRelativeTo_useSearchSuggestionsGestureTsx1(view,container){return{x:view.pageX-container.pageX,y:view.pageY-container.pageY,width:view.width,height:view.height};})" }];
[tmp3] = items;
function measureRelativeTo(pageX, pageX2) {
  size = { x: pageX.pageX - pageX2.pageX, y: pageX.pageY - pageX2.pageY, width: pageX.width, height: pageX.height };
  return size;
}
measureRelativeTo.__workletHash = 8310337569996;
measureRelativeTo.__initData = tmp3;
let items1 = [{ code: "(function containsPoint_useSearchSuggestionsGestureTsx2(rect,x,y){return rect.x<x&&x<rect.x+rect.width&&rect.y<y&&y<rect.y+rect.height;})" }];
[tmp4] = items1;
function containsPoint(arg0, arg1, arg2) {
  return arg0.x < arg1 && arg1 < arg0.x + arg0.width && arg0.y < arg2 && arg2 < arg0.y + arg0.height;
}
containsPoint.__workletHash = 16282531248450;
containsPoint.__initData = tmp4;
let closure_7 = { code: "(function useSearchSuggestionsGestureTsx3(e,manager){let[suggestionsMounted,measure,suggestionsRef,detectorRef,measureRelativeTo,containsPoint,dismissed]=this.__closure;manager.fail();const touch=e.allTouches[0];if(touch==null)return;if(!suggestionsMounted.get())return;const suggestions=measure(suggestionsRef);if(suggestions==null)return;const detector=measure(detectorRef);if(detector==null)return;const card=measureRelativeTo(suggestions,detector);if(containsPoint(card,touch.x,touch.y))return;dismissed.set(true);})" };
const Provider = context.Provider;
let size = size_mod;
let result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/useSearchSuggestionsGesture.tsx");

export const SearchSuggestionsProvider = Provider;
export function useSearchSuggestionsContext() {
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
}
export function useSearchSuggestionsGesture(channelDetailsSearchContext) {
  let sharedValue1;
  _require = channelDetailsSearchContext;
  let obj = require("module_1652");
  const sharedValue = obj.useSharedValue(false);
  const obj2 = require("module_1652");
  sharedValue1 = obj2.useSharedValue(false);
  const obj3 = require("module_1652");
  const animatedRef = obj3.useAnimatedRef();
  const obj4 = require("module_1652");
  const animatedRef1 = obj4.useAnimatedRef();
  let items = [sharedValue];
  const callback = animatedRef.useCallback((arg0, arg1) => {
    if (arg0 !== arg1) {
      const result = sharedValue.set(false);
    }
  }, items);
  let items1 = [sharedValue, channelDetailsSearchContext, callback];
  const effect = animatedRef.useEffect(() => {
    const obj = SearchPlatformUtilsDefault;
    return obj.subscribeTextInputValue(channelDetailsSearchContext, callback);
  }, items1);
  const items2 = [sharedValue, animatedRef, sharedValue1, animatedRef1];
  const memo = animatedRef.useMemo(() => {
    let tmp2;
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp9;
    const Gesture = LegacyBaseButton.Gesture;
    const ManualResult = Gesture.Manual();
    const items = [closure_7, sharedValue1, , , , , , ];
    const onTouchesDown = ManualResult.manualActivation(true).onTouchesDown;
    ManualResult.manualActivation(true);
    items[2] = _mod1652.measure;
    items[3] = animatedRef1;
    items[4] = animatedRef;
    items[5] = measureRelativeTo;
    items[6] = containsPoint;
    items[7] = sharedValue;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
    function useSearchSuggestionsGestureTsx3(arg0, fail) {
      fail.fail();
      const point = arg0.allTouches[0];
      if (null != point) {
        if (_undefined.get()) {
          const tmp5 = _undefined2(c2);
          const tmp3 = _undefined2;
          if (null != tmp5) {
            const tmp3Result = tmp3(c3);
            if (null != tmp3Result) {
              if (!_undefined4(_undefined3(tmp5, tmp3Result), point.x, point.y)) {
                const result = _undefined5.set(true);
              }
            }
          }
        }
      }
    }
    const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9];
    useSearchSuggestionsGestureTsx3.__closure = items1;
    useSearchSuggestionsGestureTsx3.__workletHash = 17579046119458;
    useSearchSuggestionsGestureTsx3.__initData = tmp2;
    return onTouchesDown(useSearchSuggestionsGestureTsx3);
  }, items2);
  const items3 = [sharedValue];
  const callback1 = animatedRef.useCallback(() => {
    const result = sharedValue.set(true);
  }, items3);
  const items4 = [animatedRef1, sharedValue1, sharedValue, callback1];
  const memo1 = animatedRef.useMemo(() => ({ suggestionsRef: animatedRef1, suggestionsMounted: sharedValue1, dismissed: sharedValue, setDismissed: callback1 }), items4);
  const items5 = [memo, animatedRef, memo1];
  return animatedRef.useMemo(() => ({ gesture: memo, detectorRef: animatedRef, suggestionsContext: memo1 }), items5);
}
