// Module ID: 15281
// Function ID: 116188
// Name: useSearchSegmentedControlState
// Dependencies: []
// Exports: useSearchSegmentedControlState

// Module 15281 (useSearchSegmentedControlState)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = { code: "function useSearchSegmentedControlStateTsx1(){const{visibleTabsStateful}=this.__closure;return visibleTabsStateful;}" };
let closure_4 = { code: "function useSearchSegmentedControlStateTsx2(){const{visibleTabs,activeIndex}=this.__closure;return visibleTabs.get()[activeIndex.get()];}" };
let closure_5 = { code: "function useSearchSegmentedControlStateTsx3(){const{visibleTabs}=this.__closure;return visibleTabs.get();}" };
let closure_6 = { code: "function useSearchSegmentedControlStateTsx4(visibleTabs){const{lastSelectedTab,runOnJS,setActiveIndex}=this.__closure;if(visibleTabs.length===0)return;const lastSelectedTabIndex=visibleTabs.indexOf(lastSelectedTab.get());const targetIndex=Math.max(0,lastSelectedTabIndex);const maxIndex=Math.max(0,visibleTabs.length-1);const nextActiveIndex=Math.min(targetIndex,maxIndex);runOnJS(setActiveIndex)(nextActiveIndex,false);}" };
let closure_7 = { code: "function useSearchSegmentedControlStateTsx5(){const{selectedTab}=this.__closure;return selectedTab.get();}" };
let closure_8 = { code: "function useSearchSegmentedControlStateTsx6(selectedTab){const{lastSelectedTab,runOnJS,onSelectedTabChange}=this.__closure;if(selectedTab==null)return;lastSelectedTab.set(selectedTab);runOnJS(onSelectedTabChange)(selectedTab);}" };
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchSegmentedControlState.tsx");

export const useSearchSegmentedControlState = function useSearchSegmentedControlState(visibleTabs) {
  let items;
  let width;
  visibleTabs = visibleTabs.visibleTabs;
  const arg1 = visibleTabs;
  const onSelectedTabChange = visibleTabs.onSelectedTabChange;
  const dependencyMap = onSelectedTabChange;
  ({ items, width } = visibleTabs);
  let obj = arg1(dependencyMap[1]);
  const sharedValue = obj.useSharedValue(visibleTabs[0]);
  const React = sharedValue;
  class T {
    constructor() {
      return visibleTabs;
    }
  }
  T.__closure = { visibleTabsStateful: visibleTabs };
  T.__workletHash = 17125959946782;
  T.__initData = closure_3;
  const derivedValue = arg1(dependencyMap[1]).useDerivedValue(T);
  closure_3 = derivedValue;
  const obj2 = arg1(dependencyMap[1]);
  const segmentedControlState = arg1(dependencyMap[2]).useSegmentedControlState({ items, defaultIndex: 0, pageWidth: width });
  let closure_4 = segmentedControlState;
  const activeIndex = segmentedControlState.activeIndex;
  let closure_5 = activeIndex;
  const setActiveIndex = segmentedControlState.setActiveIndex;
  let closure_6 = setActiveIndex;
  const obj3 = arg1(dependencyMap[2]);
  const fn = function x() {
    const value = derivedValue.get();
    return value[closure_5.get(closure_5)];
  };
  fn.__closure = { visibleTabs: derivedValue, activeIndex };
  fn.__workletHash = 6189329624535;
  fn.__initData = closure_4;
  const derivedValue1 = arg1(dependencyMap[1]).useDerivedValue(fn);
  let closure_7 = derivedValue1;
  const obj4 = arg1(dependencyMap[1]);
  const fn2 = function f() {
    return derivedValue.get();
  };
  fn2.__closure = { visibleTabs: derivedValue };
  fn2.__workletHash = 9222891018885;
  fn2.__initData = closure_5;
  const fn3 = function v(arr) {
    if (0 !== arr.length) {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.max(0, arr.indexOf(sharedValue.get()));
      const _Math3 = Math;
      const bound1 = Math.min(bound, Math.max(0, arr.length - 1));
      visibleTabs(onSelectedTabChange[1]).runOnJS(setActiveIndex)(bound1, false);
      const obj = visibleTabs(onSelectedTabChange[1]);
    }
  };
  obj = { lastSelectedTab: sharedValue, runOnJS: arg1(dependencyMap[1]).runOnJS, setActiveIndex };
  fn3.__closure = obj;
  fn3.__workletHash = 13456384876758;
  fn3.__initData = closure_6;
  const animatedReaction = arg1(dependencyMap[1]).useAnimatedReaction(fn2, fn3);
  const obj5 = arg1(dependencyMap[1]);
  class C {
    constructor() {
      return closure_7.get();
    }
  }
  C.__closure = { selectedTab: derivedValue1 };
  C.__workletHash = 2491149576387;
  C.__initData = closure_7;
  class I {
    constructor(arg0) {
      if (null != visibleTabs) {
        tmp = closure_2;
        result = closure_2.set(visibleTabs);
        tmp3 = visibleTabs;
        tmp4 = onSelectedTabChange;
        num = 1;
        obj = visibleTabs(onSelectedTabChange[1]);
        tmp5 = onSelectedTabChange;
        tmp6 = obj.runOnJS(onSelectedTabChange)(visibleTabs);
      }
      return;
    }
  }
  obj = { lastSelectedTab: sharedValue, runOnJS: arg1(dependencyMap[1]).runOnJS, onSelectedTabChange };
  I.__closure = obj;
  I.__workletHash = 8452224388929;
  I.__initData = closure_8;
  const animatedReaction1 = arg1(dependencyMap[1]).useAnimatedReaction(C, I);
  items = [segmentedControlState, derivedValue1];
  return React.useMemo(() => ({ segmentedControlState, selectedTab: derivedValue1 }), items);
};
