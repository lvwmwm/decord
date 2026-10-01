// Module ID: 16791
// Function ID: 16792
// Name: useLaunchPadState
// Dependencies: [19, 11002, 16792, 4566, 11515, 10895, 10896, 2]
// Exports: default

// Module 16791 (useLaunchPadState)
import react from "react" /* 19 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11002 */;
import LaunchPadPullTabCache_mod from "LaunchPadPullTabCache" /* 16792 */;
import size from "module_2" /* 2 */;

let LaunchPadPullTabCache;
let closure_4;
let hasOwnProperty;
({ LAUNCH_PAD_PULL_TAB_MAX_POSITION: closure_4, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET: hasOwnProperty } = LaunchPadConstants);
let closure_6 = { active: false, initialLaunchPadPosition: 0, initialPullTabPosition: 0, initialTouchX: 0, initialTouchY: 0, positionOffsetX: 0, positionOffsetY: 0, startTime: -1, requiresPop: false, startShown: false };
let __closure = { position: LaunchPadPullTabCache.getLaunchPadPullTabPositionCached(), scale: 1, offset: 0, minimized: false };
LaunchPadPullTabCache = LaunchPadPullTabCache_mod;
let closure_8 = { code: "function setLaunchPadShown_useLaunchPadStateNativeTsx1(shown){const{launchPadShown}=this.__closure;launchPadShown.set(shown);}" };
let closure_9 = { code: "function setLaunchPadPosition_useLaunchPadStateNativeTsx2(value){const{launchPadSharedState}=this.__closure;launchPadSharedState.set(Math.max(Math.min(value,1),0));}" };
let closure_10 = { code: "function setLaunchPadPullTabBoundedPosition_useLaunchPadStateNativeTsx3(positionY){const{getWindowDimensionsWorklet,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_MAX_POSITION,getSafeAreaInsetsWorklet,LAUNCH_PAD_PULL_TAB_SCALE_OFFSET,updateSharedValueIfChanged,runOnJS,persistLaunchPadPullTabPosition}=this.__closure;const positionYMax=getWindowDimensionsWorklet().height-launchPadPullTabState.get().offset-LAUNCH_PAD_PULL_TAB_MAX_POSITION;const positionYMin=getSafeAreaInsetsWorklet().top+LAUNCH_PAD_PULL_TAB_SCALE_OFFSET;const position=Math.max(Math.min(positionY,positionYMax),positionYMin);updateSharedValueIfChanged(launchPadPullTabState,{position:position});runOnJS(persistLaunchPadPullTabPosition)(position);}" };
let closure_11 = { code: "function setLaunchPadPullTabTranslation_useLaunchPadStateNativeTsx4(translationY){const{gestureState,setLaunchPadPullTabBoundedPosition}=this.__closure;const positionY=gestureState.get().initialPullTabPosition+translationY;setLaunchPadPullTabBoundedPosition(positionY);}" };
let closure_12 = { code: "function setLaunchPadPullTabPosition_useLaunchPadStateNativeTsx5(position,offset){const{updateSharedValueIfChanged,launchPadPullTabState}=this.__closure;updateSharedValueIfChanged(launchPadPullTabState,{position:position,offset:offset});}" };
let closure_13 = { code: "function setLaunchPadPullTabScale_useLaunchPadStateNativeTsx6(scale){const{updateSharedValueIfChanged,launchPadPullTabState}=this.__closure;updateSharedValueIfChanged(launchPadPullTabState,{scale:scale});}" };
let closure_14 = { code: "function setLaunchPadPullTabMinimized_useLaunchPadStateNativeTsx7(minimized){const{updateSharedValueIfChanged,launchPadPullTabState}=this.__closure;updateSharedValueIfChanged(launchPadPullTabState,{minimized:minimized});}" };
let closure_15 = { code: "function onWindowHeightChange_useLaunchPadStateNativeTsx8(){const{launchPadPullTabState,setLaunchPadPullTabBoundedPosition}=this.__closure;const positionY=launchPadPullTabState.get().position;setLaunchPadPullTabBoundedPosition(positionY);}" };
let result = size.fileFinishedImporting("modules/launchpad/native/useLaunchPadState.native.tsx");

export default function useLaunchPadState() {
  let LAUNCH_PAD_PULL_TAB_MAX_POSITION;
  let LAUNCH_PAD_PULL_TAB_SCALE_OFFSET;
  let __initData7;
  let __initData8;
  let sharedValue;
  let sharedValue2;
  let obj = sharedValue(sharedValue2[3]);
  sharedValue = obj.useSharedValue(closure_6);
  let obj2 = sharedValue(sharedValue2[3]);
  const sharedValue1 = obj2.useSharedValue(obj);
  let obj3 = sharedValue(sharedValue2[3]);
  sharedValue2 = obj3.useSharedValue(0);
  let obj4 = sharedValue(sharedValue2[3]);
  const sharedValue3 = obj4.useSharedValue(false);
  const items = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  let obj5 = {
    launchPadSharedState: sharedValue2,
    launchPadPullTabState: sharedValue1,
    launchPadShown: sharedValue3,
    gestureState: sharedValue,
    updaters: sharedValue3.useMemo(() => {
      let onWindowHeightChange;
      let setLaunchPadPullTabMinimized;
      let setLaunchPadPullTabPosition;
      let setLaunchPadPullTabScale;
      let setLaunchPadPullTabTranslation;
      function setLaunchPadShown(arg0) {
        const result = sharedValue3.set(arg0);
      }
      __closure = { launchPadShown: sharedValue3 };
      setLaunchPadShown.__closure = __closure;
      setLaunchPadShown.__workletHash = 12645438005571;
      setLaunchPadShown.__initData = __initData;
      function setLaunchPadPosition(arg0) {
        const result = sharedValue2.set(Math.max(Math.min(arg0, 1), 0));
      }
      let obj2 = { launchPadSharedState: sharedValue2 };
      setLaunchPadPosition.__closure = obj2;
      setLaunchPadPosition.__workletHash = 6880435508235;
      setLaunchPadPosition.__initData = __initData2;
      function setLaunchPadPullTabBoundedPosition(position) {
        const obj = sharedValue(sharedValue2[4]);
        const diff = obj.getWindowDimensionsWorklet().height - closure_1_1.get().offset - LAUNCH_PAD_PULL_TAB_MAX_POSITION;
        const obj2 = sharedValue(sharedValue2[5]);
        const sum = obj2.getSafeAreaInsetsWorklet().top + LAUNCH_PAD_PULL_TAB_SCALE_OFFSET;
        const bound = Math.max(Math.min(position, diff), sum);
        sharedValue1(sharedValue2[6])(closure_1_1, { position: bound });
        const obj3 = sharedValue(sharedValue2[3]);
        obj3.runOnJS(sharedValue(sharedValue2[2]).persistLaunchPadPullTabPosition)(bound);
      }
      let obj3 = { getWindowDimensionsWorklet: sharedValue(sharedValue2[4]).getWindowDimensionsWorklet, launchPadPullTabState: sharedValue1, LAUNCH_PAD_PULL_TAB_MAX_POSITION, getSafeAreaInsetsWorklet: sharedValue(sharedValue2[5]).getSafeAreaInsetsWorklet, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET, updateSharedValueIfChanged: sharedValue1(sharedValue2[6]), runOnJS: sharedValue(sharedValue2[3]).runOnJS, persistLaunchPadPullTabPosition: sharedValue(sharedValue2[2]).persistLaunchPadPullTabPosition };
      setLaunchPadPullTabBoundedPosition.__closure = obj3;
      setLaunchPadPullTabBoundedPosition.__workletHash = 1905227275114;
      setLaunchPadPullTabBoundedPosition.__initData = __initData3;
      const obj4 = { setLaunchPadShown, setLaunchPadPosition, setLaunchPadPullTabTranslation, setLaunchPadPullTabPosition, setLaunchPadPullTabScale, setLaunchPadPullTabMinimized, onWindowHeightChange };
      setLaunchPadPullTabTranslation = function setLaunchPadPullTabTranslation(translationY) {
        setLaunchPadPullTabBoundedPosition(sharedValue.get().initialPullTabPosition + translationY);
      };
      const obj5 = { gestureState: setLaunchPadPullTabBoundedPosition, setLaunchPadPullTabBoundedPosition };
      setLaunchPadPullTabTranslation.__closure = obj5;
      setLaunchPadPullTabTranslation.__workletHash = 11096032645208;
      setLaunchPadPullTabTranslation.__initData = __initData4;
      setLaunchPadPullTabPosition = function setLaunchPadPullTabPosition(sum, offset) {
        const obj = { position: sum, offset };
        sharedValue1(sharedValue2[6])(closure_1_1, obj);
      };
      setLaunchPadPullTabPosition.__closure = { updateSharedValueIfChanged: sharedValue1(sharedValue2[6]), launchPadPullTabState: sharedValue1 };
      setLaunchPadPullTabPosition.__workletHash = 14398804359967;
      setLaunchPadPullTabPosition.__initData = __initData5;
      setLaunchPadPullTabScale = function setLaunchPadPullTabScale(scale) {
        const obj = { scale };
        sharedValue1(sharedValue2[6])(closure_1_1, obj);
      };
      ({ updateSharedValueIfChanged: sharedValue1(sharedValue2[6]), launchPadPullTabState: sharedValue1 });
      setLaunchPadPullTabScale.__closure = { updateSharedValueIfChanged: sharedValue1(sharedValue2[6]), launchPadPullTabState: sharedValue1 };
      setLaunchPadPullTabScale.__workletHash = 4772968963371;
      setLaunchPadPullTabScale.__initData = __initData6;
      setLaunchPadPullTabMinimized = function setLaunchPadPullTabMinimized(minimized) {
        const obj = { minimized };
        sharedValue1(sharedValue2[6])(closure_1_1, obj);
      };
      ({ updateSharedValueIfChanged: sharedValue1(sharedValue2[6]), launchPadPullTabState: sharedValue1 });
      setLaunchPadPullTabMinimized.__closure = { updateSharedValueIfChanged: sharedValue1(sharedValue2[6]), launchPadPullTabState: sharedValue1 };
      setLaunchPadPullTabMinimized.__workletHash = 2379539261994;
      setLaunchPadPullTabMinimized.__initData = __initData7;
      onWindowHeightChange = function onWindowHeightChange() {
        setLaunchPadPullTabBoundedPosition(sharedValue1.get().position);
      };
      onWindowHeightChange.__closure = { launchPadPullTabState: sharedValue1, setLaunchPadPullTabBoundedPosition };
      onWindowHeightChange.__workletHash = 17230667749428;
      onWindowHeightChange.__initData = __initData8;
      ({ updateSharedValueIfChanged: sharedValue1(sharedValue2[6]), launchPadPullTabState: sharedValue1 });
      return obj4;
    }, items)
  };
  return obj5;
};
