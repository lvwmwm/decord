// Module ID: 1793
// Function ID: 19873
// Name: useScrollState
// Dependencies: []
// Exports: default

// Module 1793 (useScrollState)
const _module = require(dependencyMap[0]);
({ useCallback: closure_2, useEffect: closure_3 } = _module);
let closure_4 = ["doneText", "button", "icon", "showArrows", "onNextCallback"];
let closure_5 = { code: "function pnpm_useScrollStateTs1(event){const{offset,layout,size}=this.__closure;offset.value=event.contentOffset.y;layout.value=event.layoutMeasurement;size.value=event.contentSize;}" };

export default function useScrollState(arg0) {
  let obj = require(dependencyMap[1]);
  const sharedValue = obj.useSharedValue(0);
  const require = sharedValue;
  const sharedValue1 = require(dependencyMap[1]).useSharedValue({ "Null": -536870861, "Null": -299892737 });
  const dependencyMap = sharedValue1;
  const obj2 = require(dependencyMap[1]);
  const sharedValue2 = require(dependencyMap[1]).useSharedValue({ "Null": -536870861, "Null": -299892737 });
  const obj3 = require(dependencyMap[1]);
  const callback = require(dependencyMap[2]).useEventHandlerRegistration(arg0);
  const obj4 = require(dependencyMap[2]);
  /* worklet (recovered source) */ function pnpm_useScrollStateTs1(event){const{offset,layout,size}=this.__closure;offset.value=event.contentOffset.y;layout.value=event.layoutMeasurement;size.value=event.contentSize;}
  pnpm_useScrollStateTs1.__closure = { offset: sharedValue, layout: sharedValue1, size: sharedValue2 };
  pnpm_useScrollStateTs1.__workletHash = 10534434800111;
  pnpm_useScrollStateTs1.__initData = closure_5;
  closure_4 = require(dependencyMap[1]).useEvent(pnpm_useScrollStateTs1, closure_4);
  callback(() => {
    let closure_0 = callback(closure_4);
    return () => {
      callback();
    };
  }, []);
  const items = [sharedValue1];
  const items1 = [sharedValue2];
  const obj5 = require(dependencyMap[1]);
  obj = {
    offset: sharedValue,
    layout: sharedValue1,
    size: sharedValue2,
    onLayout: sharedValue2((nativeEvent) => {
      sharedValue1.value = { width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height };
    }, items),
    onContentSizeChange: sharedValue2((width, height) => {
      sharedValue2.value = { width, height };
    }, items1)
  };
  return obj;
};
