// Module ID: 15184
// Function ID: 114585
// Name: inBoundingBox
// Dependencies: []
// Exports: useSearchSuggestionsGesture

// Module 15184 (inBoundingBox)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = { code: "function inBoundingBox_useSearchSuggestionsGestureTsx1(e,coordinates,safeAreaTop){const touch=e.allTouches[0];if(touch==null)return false;return coordinates.left<touch.absoluteX&&touch.absoluteX<coordinates.right&&coordinates.top<touch.absoluteY+safeAreaTop&&touch.absoluteY+safeAreaTop<coordinates.bottom;}" };
let closure_5 = () => {
  function inBoundingBox(arg0, left) {
    const first = arg0.allTouches[0];
    let tmp2 = null != first;
    if (tmp2) {
      tmp2 = left.left < first.absoluteX && first.absoluteX < left.right && left.top < first.absoluteY + arg2 && first.absoluteY + arg2 < left.bottom;
      const tmp3 = left.left < first.absoluteX && first.absoluteX < left.right && left.top < first.absoluteY + arg2 && first.absoluteY + arg2 < left.bottom;
    }
    return tmp2;
  }
  inBoundingBox.__closure = {};
  inBoundingBox.__workletHash = 14606221606756;
  inBoundingBox.__initData = closure_4;
  return inBoundingBox;
}();
let closure_6 = { code: "function useSearchSuggestionsGestureTsx2(e,manager){const{coordinates,inBoundingBox,safeAreaTop,dismissed}=this.__closure;manager.fail();const _coordinates=coordinates.get();if(_coordinates==null||inBoundingBox(e,_coordinates,safeAreaTop))return;dismissed.set(true);}" };
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/search/native/components/layout/autocomplete/useSearchSuggestionsGesture.tsx");

export const useSearchSuggestionsGesture = function useSearchSuggestionsGesture(channelDetailsSearchContext) {
  const arg1 = channelDetailsSearchContext;
  const sharedValue = arg1(dependencyMap[1]).useSharedValue(false);
  const importDefault = sharedValue;
  const obj = arg1(dependencyMap[1]);
  const sharedValue1 = arg1(dependencyMap[1]).useSharedValue(null);
  const dependencyMap = sharedValue1;
  const items = [sharedValue];
  const callback = React.useCallback((arg0, arg1) => {
    if (arg0 !== arg1) {
      const result = sharedValue.set(false);
    }
  }, items);
  const React = callback;
  const items1 = [sharedValue, channelDetailsSearchContext, callback];
  const effect = React.useEffect(() => sharedValue(sharedValue1[2]).subscribeTextInputValue(arg0, callback), items1);
  const obj2 = arg1(dependencyMap[1]);
  let num = 0;
  if (obj3.isAndroid()) {
    num = importDefault(dependencyMap[3])().top;
  }
  let closure_4 = num;
  const items2 = [sharedValue1, num, sharedValue];
  const memo = React.useMemo(() => {
    const Gesture = arg0(sharedValue1[5]).Gesture;
    const ManualResult = Gesture.Manual();
    const fn = function e(arg0, fail) {
      fail.fail();
      const value = closure_2.get();
      let tmp3 = null == value;
      if (!tmp3) {
        tmp3 = callback(arg0, value, closure_4);
      }
      if (!tmp3) {
        const result = closure_1.set(true);
      }
    };
    fn.__closure = { coordinates: sharedValue1, inBoundingBox: memo, safeAreaTop: num, dismissed: sharedValue };
    fn.__workletHash = 2369649298113;
    fn.__initData = callback1;
    return Gesture.Manual().manualActivation(true).onTouchesDown(fn);
  }, items2);
  let closure_5 = memo;
  const items3 = [sharedValue1];
  const callback1 = React.useCallback((arg0) => {
    const result = sharedValue1.set(arg0);
  }, items3);
  let closure_6 = callback1;
  const items4 = [sharedValue];
  const callback2 = React.useCallback(() => {
    const result = sharedValue.set(true);
  }, items4);
  const items5 = [sharedValue, callback2, memo, callback1];
  return React.useMemo(() => ({ gesture: memo, dismissed: sharedValue, onLayoutMeasure: callback1, setDismissed: callback2 }), items5);
};
