// Module ID: 19060
// Function ID: 19061
// Name: useSearchSegmentedControlState
// Dependencies: [19, 1652, 9125, 1705, 2]
// Exports: useSearchSegmentedControlState

// Module 19060 (useSearchSegmentedControlState)
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import SegmentedControlState from "SegmentedControlState" /* 9125 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3 = { code: "(function useSearchSegmentedControlStateTsx1(){let[visibleTabsStateful]=this.__closure;return visibleTabsStateful;})" };
let closure_4 = { code: "(function useSearchSegmentedControlStateTsx2(){let[visibleTabs,activeIndex]=this.__closure;return visibleTabs.get()[activeIndex.get()];})" };
let closure_5 = { code: "(function useSearchSegmentedControlStateTsx3(){let[visibleTabs]=this.__closure;return visibleTabs.get();})" };
let closure_6 = { code: "(function useSearchSegmentedControlStateTsx4(visibleTabs){let[lastSelectedTab,scheduleOnRN,setActiveIndex]=this.__closure;if(visibleTabs.length===0)return;const lastSelectedTabIndex=visibleTabs.indexOf(lastSelectedTab.get());const targetIndex=Math.max(0,lastSelectedTabIndex);const maxIndex=Math.max(0,visibleTabs.length-1);const nextActiveIndex=Math.min(targetIndex,maxIndex);scheduleOnRN(setActiveIndex,nextActiveIndex,false);})" };
let closure_7 = { code: "(function useSearchSegmentedControlStateTsx5(){let[selectedTab]=this.__closure;return selectedTab.get();})" };
let closure_8 = { code: "(function useSearchSegmentedControlStateTsx6(selectedTab){let[lastSelectedTab,scheduleOnRN,onSelectedTabChange]=this.__closure;if(selectedTab==null)return;lastSelectedTab.set(selectedTab);scheduleOnRN(onSelectedTabChange,selectedTab);})" };
let result = size.fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchSegmentedControlState.tsx");

export function useSearchSegmentedControlState(visibleTabs) {
  let activeIndex;
  let items;
  let onSelectedTabChange;
  let setActiveIndex;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let width;
  visibleTabs = visibleTabs.visibleTabs;
  ({ items, onSelectedTabChange, width } = visibleTabs);
  const obj = _mod1652;
  const sharedValue = obj.useSharedValue(visibleTabs[0]);
  const items1 = [closure_3, visibleTabs];
  [tmp4, tmp5] = items1;
  function useSearchSegmentedControlStateTsx1() {
    return c0;
  }
  const items2 = [tmp5];
  useSearchSegmentedControlStateTsx1.__closure = items2;
  useSearchSegmentedControlStateTsx1.__workletHash = 15809985377575;
  useSearchSegmentedControlStateTsx1.__initData = tmp4;
  const obj2 = _mod1652;
  const derivedValue = obj2.useDerivedValue(useSearchSegmentedControlStateTsx1);
  const tmpResult = SegmentedControlState;
  const segmentedControlState = tmpResult.useSegmentedControlState({ items, defaultIndex: 0, pageWidth: width });
  ({ activeIndex, setActiveIndex } = segmentedControlState);
  const items3 = [closure_4, derivedValue, activeIndex];
  [tmp8, tmp9, tmp10] = items3;
  function useSearchSegmentedControlStateTsx2() {
    const value = _undefined.get();
    return value[_undefined2.get(_undefined2)];
  }
  const items4 = [tmp9, tmp10];
  useSearchSegmentedControlStateTsx2.__closure = items4;
  useSearchSegmentedControlStateTsx2.__workletHash = 486888790446;
  useSearchSegmentedControlStateTsx2.__initData = tmp8;
  const tmpResult4 = _mod1652;
  const derivedValue1 = tmpResult4.useDerivedValue(useSearchSegmentedControlStateTsx2);
  const items5 = [closure_5, derivedValue];
  [tmp13, tmp14] = items5;
  function useSearchSegmentedControlStateTsx3() {
    return _undefined.get();
  }
  const items6 = [tmp14];
  useSearchSegmentedControlStateTsx3.__closure = items6;
  useSearchSegmentedControlStateTsx3.__workletHash = 2804619280412;
  useSearchSegmentedControlStateTsx3.__initData = tmp13;
  const items7 = [closure_6, sharedValue, , ];
  const useAnimatedReaction = tmp(1652).useAnimatedReaction;
  _mod1652;
  items7[2] = _mod1705.scheduleOnRN;
  items7[3] = setActiveIndex;
  [tmp15, tmp16, tmp17, tmp18] = items7;
  function useSearchSegmentedControlStateTsx4(arr) {
    if (0 !== arr.length) {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.max(0, arr.indexOf(_undefined.get()));
      const _Math3 = Math;
      _undefined2(c2, Math.min(bound, Math.max(0, arr.length - 1)), false);
    }
  }
  const items8 = [tmp16, tmp17, tmp18];
  useSearchSegmentedControlStateTsx4.__closure = items8;
  useSearchSegmentedControlStateTsx4.__workletHash = 7505903029346;
  useSearchSegmentedControlStateTsx4.__initData = tmp15;
  const animatedReaction = useAnimatedReaction(useSearchSegmentedControlStateTsx3, useSearchSegmentedControlStateTsx4);
  const items9 = [closure_7, derivedValue1];
  [tmp21, tmp22] = items9;
  function useSearchSegmentedControlStateTsx5() {
    return _undefined.get();
  }
  const items10 = [tmp22];
  useSearchSegmentedControlStateTsx5.__closure = items10;
  useSearchSegmentedControlStateTsx5.__workletHash = 4304064409818;
  useSearchSegmentedControlStateTsx5.__initData = tmp21;
  const items11 = [closure_8, sharedValue, , ];
  const useAnimatedReaction2 = tmp(1652).useAnimatedReaction;
  _mod1652;
  items11[2] = _mod1705.scheduleOnRN;
  items11[3] = onSelectedTabChange;
  let c0;
  let c1;
  let c2;
  [tmp23, tmp24, tmp25, tmp26] = items11;
  function useSearchSegmentedControlStateTsx6(arg0) {
    if (null != arg0) {
      const result = _undefined.set(arg0);
      _undefined2(c2, arg0);
    }
  }
  const items12 = [tmp24, tmp25, tmp26];
  useSearchSegmentedControlStateTsx6.__closure = items12;
  useSearchSegmentedControlStateTsx6.__workletHash = 3261294603829;
  useSearchSegmentedControlStateTsx6.__initData = tmp23;
  const animatedReaction2 = useAnimatedReaction2(useSearchSegmentedControlStateTsx5, useSearchSegmentedControlStateTsx6);
  const items13 = [segmentedControlState, derivedValue1];
  return react.useMemo(() => ({ segmentedControlState, selectedTab: derivedValue1 }), items13);
}
