// Module ID: 16544
// Function ID: 16545
// Name: useSearchSegmentedControlState
// Dependencies: [19, 4566, 9083, 2]
// Exports: useSearchSegmentedControlState

// Module 16544 (useSearchSegmentedControlState)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3 = { code: "function useSearchSegmentedControlStateTsx1(){const{visibleTabsStateful}=this.__closure;return visibleTabsStateful;}" };
let closure_4 = { code: "function useSearchSegmentedControlStateTsx2(){const{visibleTabs,activeIndex}=this.__closure;return visibleTabs.get()[activeIndex.get()];}" };
let closure_5 = { code: "function useSearchSegmentedControlStateTsx3(){const{visibleTabs}=this.__closure;return visibleTabs.get();}" };
let closure_6 = { code: "function useSearchSegmentedControlStateTsx4(visibleTabs){const{lastSelectedTab,runOnJS,setActiveIndex}=this.__closure;if(visibleTabs.length===0)return;const lastSelectedTabIndex=visibleTabs.indexOf(lastSelectedTab.get());const targetIndex=Math.max(0,lastSelectedTabIndex);const maxIndex=Math.max(0,visibleTabs.length-1);const nextActiveIndex=Math.min(targetIndex,maxIndex);runOnJS(setActiveIndex)(nextActiveIndex,false);}" };
let closure_7 = { code: "function useSearchSegmentedControlStateTsx5(){const{selectedTab}=this.__closure;return selectedTab.get();}" };
const __initData = { code: "function useSearchSegmentedControlStateTsx6(selectedTab){const{lastSelectedTab,runOnJS,onSelectedTabChange}=this.__closure;if(selectedTab==null)return;lastSelectedTab.set(selectedTab);runOnJS(onSelectedTabChange)(selectedTab);}" };
let result = size.fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchSegmentedControlState.tsx");

export const useSearchSegmentedControlState = function useSearchSegmentedControlState(visibleTabs) {
  let items;
  let width;
  visibleTabs = visibleTabs.visibleTabs;
  const onSelectedTabChange = visibleTabs.onSelectedTabChange;
  let derivedValue;
  let segmentedControlState;
  let activeIndex;
  let setActiveIndex;
  let derivedValue1;
  ({ items, width } = visibleTabs);
  let obj = visibleTabs(onSelectedTabChange[1]);
  const sharedValue = obj.useSharedValue(visibleTabs[0]);
  const obj2 = visibleTabs(onSelectedTabChange[1]);
  class T {
    constructor() {
      return visibleTabs;
    }
  }
  T.__closure = { visibleTabsStateful: visibleTabs };
  T.__workletHash = 17125959946782;
  T.__initData = derivedValue;
  derivedValue = obj2.useDerivedValue(T);
  const obj3 = visibleTabs(onSelectedTabChange[2]);
  segmentedControlState = obj3.useSegmentedControlState({ items, defaultIndex: 0, pageWidth: width });
  activeIndex = segmentedControlState.activeIndex;
  setActiveIndex = segmentedControlState.setActiveIndex;
  const fn = function x() {
    const value = derivedValue.get();
    return value[activeIndex.get(activeIndex)];
  };
  fn.__closure = { visibleTabs: derivedValue, activeIndex };
  fn.__workletHash = 6189329624535;
  fn.__initData = segmentedControlState;
  const obj4 = visibleTabs(onSelectedTabChange[1]);
  derivedValue1 = obj4.useDerivedValue(fn);
  const fn2 = function f() {
    return derivedValue.get();
  };
  fn2.__closure = { visibleTabs: derivedValue };
  fn2.__workletHash = 9222891018885;
  fn2.__initData = activeIndex;
  const fn3 = function v(arr) {
    if (0 !== arr.length) {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.max(0, arr.indexOf(sharedValue.get()));
      const _Math3 = Math;
      const bound1 = Math.min(bound, Math.max(0, arr.length - 1));
      const obj = ReanimatedRexport;
      obj.runOnJS(setActiveIndex)(bound1, false);
    }
  };
  const obj5 = visibleTabs(onSelectedTabChange[1]);
  fn3.__closure = { lastSelectedTab: sharedValue, runOnJS: visibleTabs(onSelectedTabChange[1]).runOnJS, setActiveIndex };
  fn3.__workletHash = 13456384876758;
  fn3.__initData = setActiveIndex;
  ({ lastSelectedTab: sharedValue, runOnJS: visibleTabs(onSelectedTabChange[1]).runOnJS, setActiveIndex });
  const animatedReaction = obj5.useAnimatedReaction(fn2, fn3);
  const obj7 = visibleTabs(onSelectedTabChange[1]);
  class C {
    constructor() {
      return derivedValue1.get();
    }
  }
  C.__closure = { selectedTab: derivedValue1 };
  C.__workletHash = 2491149576387;
  C.__initData = derivedValue1;
  class I {
    constructor(arg0) {
      if (null != arg0) {
        const result = sharedValue.set(arg0);
        const obj = ReanimatedRexport;
        obj.runOnJS(onSelectedTabChange)(arg0);
      }
    }
  }
  I.__closure = { lastSelectedTab: sharedValue, runOnJS: visibleTabs(onSelectedTabChange[1]).runOnJS, onSelectedTabChange };
  I.__workletHash = 8452224388929;
  I.__initData = __initData;
  ({ lastSelectedTab: sharedValue, runOnJS: visibleTabs(onSelectedTabChange[1]).runOnJS, onSelectedTabChange });
  const animatedReaction1 = obj7.useAnimatedReaction(C, I);
  const items1 = [segmentedControlState, derivedValue1];
  return sharedValue.useMemo(() => ({ segmentedControlState, selectedTab: derivedValue1 }), items1);
};
