// Module ID: 15689
// Function ID: 120935
// Name: useLaunchPadState
// Dependencies: [31, 10480, 15690, 3991, 14757, 10423, 10051, 2]
// Exports: default

// Module 15689 (useLaunchPadState)
import result from "result";
import LAUNCH_PAD_SPRING_CONFIG from "LAUNCH_PAD_SPRING_CONFIG";
import getLaunchPadPullTabPositionCached from "getLaunchPadPullTabPositionCached";

let closure_4;
let closure_5;
const require = arg1;
({ LAUNCH_PAD_PULL_TAB_MAX_POSITION: closure_4, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET: closure_5 } = LAUNCH_PAD_SPRING_CONFIG);
let closure_6 = { active: false, initialLaunchPadPosition: 0, initialPullTabPosition: 0, initialTouchX: 0, initialTouchY: 0, positionOffsetX: 0, positionOffsetY: 0, startTime: -1, requiresPop: false, startShown: false };
let obj = { position: null, scale: 1, offset: 0, minimized: false };
obj.position = getLaunchPadPullTabPositionCached.getLaunchPadPullTabPositionCached();
let closure_8 = { code: "function setLaunchPadShown_useLaunchPadStateNativeTsx1(shown){const{launchPadShown}=this.__closure;launchPadShown.set(shown);}" };
let closure_9 = { code: "function setLaunchPadPosition_useLaunchPadStateNativeTsx2(value){const{launchPadSharedState}=this.__closure;launchPadSharedState.set(Math.max(Math.min(value,1),0));}" };
let closure_10 = { code: "function setLaunchPadPullTabBoundedPosition_useLaunchPadStateNativeTsx3(positionY){const{getWindowDimensionsWorklet,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_MAX_POSITION,getSafeAreaInsetsWorklet,LAUNCH_PAD_PULL_TAB_SCALE_OFFSET,updateSharedValueIfChanged,runOnJS,persistLaunchPadPullTabPosition}=this.__closure;const positionYMax=getWindowDimensionsWorklet().height-launchPadPullTabState.get().offset-LAUNCH_PAD_PULL_TAB_MAX_POSITION;const positionYMin=getSafeAreaInsetsWorklet().top+LAUNCH_PAD_PULL_TAB_SCALE_OFFSET;const position=Math.max(Math.min(positionY,positionYMax),positionYMin);updateSharedValueIfChanged(launchPadPullTabState,{position:position});runOnJS(persistLaunchPadPullTabPosition)(position);}" };
let closure_11 = { code: "function setLaunchPadPullTabTranslation_useLaunchPadStateNativeTsx4(translationY){const{gestureState,setLaunchPadPullTabBoundedPosition}=this.__closure;const positionY=gestureState.get().initialPullTabPosition+translationY;setLaunchPadPullTabBoundedPosition(positionY);}" };
let closure_12 = { code: "function setLaunchPadPullTabPosition_useLaunchPadStateNativeTsx5(position,offset){const{updateSharedValueIfChanged,launchPadPullTabState}=this.__closure;updateSharedValueIfChanged(launchPadPullTabState,{position:position,offset:offset});}" };
let closure_13 = { code: "function setLaunchPadPullTabScale_useLaunchPadStateNativeTsx6(scale){const{updateSharedValueIfChanged,launchPadPullTabState}=this.__closure;updateSharedValueIfChanged(launchPadPullTabState,{scale:scale});}" };
let closure_14 = { code: "function setLaunchPadPullTabMinimized_useLaunchPadStateNativeTsx7(minimized){const{updateSharedValueIfChanged,launchPadPullTabState}=this.__closure;updateSharedValueIfChanged(launchPadPullTabState,{minimized:minimized});}" };
let closure_15 = { code: "function onWindowHeightChange_useLaunchPadStateNativeTsx8(){const{launchPadPullTabState,setLaunchPadPullTabBoundedPosition}=this.__closure;const positionY=launchPadPullTabState.get().position;setLaunchPadPullTabBoundedPosition(positionY);}" };
let result = require("getLaunchPadPullTabPositionCached").fileFinishedImporting("modules/launchpad/native/useLaunchPadState.native.tsx");

export default function useLaunchPadState() {
  let obj = sharedValue(sharedValue2[3]);
  sharedValue = obj.useSharedValue(closure_6);
  const sharedValue1 = sharedValue(sharedValue2[3]).useSharedValue(obj);
  let obj2 = sharedValue(sharedValue2[3]);
  sharedValue2 = sharedValue(sharedValue2[3]).useSharedValue(0);
  const obj3 = sharedValue(sharedValue2[3]);
  const sharedValue3 = sharedValue(sharedValue2[3]).useSharedValue(false);
  const items = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  obj = {
    launchPadSharedState: sharedValue2,
    launchPadPullTabState: sharedValue1,
    launchPadShown: sharedValue3,
    gestureState: sharedValue,
    updaters: sharedValue3.useMemo(() => {
      const tmp = (() => {
        function setLaunchPadShown(arg0) {
          const result = outer2_3.set(arg0);
        }
        setLaunchPadShown.__closure = { launchPadShown: outer1_3 };
        setLaunchPadShown.__workletHash = 12645438005571;
        setLaunchPadShown.__initData = outer2_8;
        return setLaunchPadShown;
      })();
      let closure_0 = (() => {
        function setLaunchPadPullTabBoundedPosition(arg0) {
          const diff = sharedValue(sharedValue2[4]).getWindowDimensionsWorklet().height - outer2_1.get().offset - outer3_4;
          const obj = sharedValue(sharedValue2[4]);
          const sum = sharedValue(sharedValue2[5]).getSafeAreaInsetsWorklet().top + outer3_5;
          const bound = Math.max(Math.min(arg0, diff), sum);
          sharedValue1(sharedValue2[6])(outer2_1, { position: bound });
          const obj2 = sharedValue(sharedValue2[5]);
          sharedValue(sharedValue2[3]).runOnJS(sharedValue(sharedValue2[2]).persistLaunchPadPullTabPosition)(bound);
        }
        setLaunchPadPullTabBoundedPosition.__closure = { getWindowDimensionsWorklet: sharedValue(sharedValue2[4]).getWindowDimensionsWorklet, launchPadPullTabState: outer1_1, LAUNCH_PAD_PULL_TAB_MAX_POSITION: outer2_4, getSafeAreaInsetsWorklet: sharedValue(sharedValue2[5]).getSafeAreaInsetsWorklet, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET: outer2_5, updateSharedValueIfChanged: sharedValue1(sharedValue2[6]), runOnJS: sharedValue(sharedValue2[3]).runOnJS, persistLaunchPadPullTabPosition: sharedValue(sharedValue2[2]).persistLaunchPadPullTabPosition };
        setLaunchPadPullTabBoundedPosition.__workletHash = 1905227275114;
        setLaunchPadPullTabBoundedPosition.__initData = outer2_10;
        return setLaunchPadPullTabBoundedPosition;
      })();
      const tmp2 = (() => {
        function setLaunchPadPosition(arg0) {
          const result = outer2_2.set(Math.max(Math.min(arg0, 1), 0));
        }
        setLaunchPadPosition.__closure = { launchPadSharedState: outer1_2 };
        setLaunchPadPosition.__workletHash = 6880435508235;
        setLaunchPadPosition.__initData = outer2_9;
        return setLaunchPadPosition;
      })();
      return {
        setLaunchPadShown: tmp,
        setLaunchPadPosition: (() => {
          function setLaunchPadPosition(arg0) {
            const result = outer2_2.set(Math.max(Math.min(arg0, 1), 0));
          }
          setLaunchPadPosition.__closure = { launchPadSharedState: outer1_2 };
          setLaunchPadPosition.__workletHash = 6880435508235;
          setLaunchPadPosition.__initData = outer2_9;
          return setLaunchPadPosition;
        })(),
        setLaunchPadPullTabTranslation: (() => {
          function setLaunchPadPullTabTranslation(translationY) {
            outer1_0(closure_0.get().initialPullTabPosition + translationY);
          }
          setLaunchPadPullTabTranslation.__closure = { gestureState: closure_0, setLaunchPadPullTabBoundedPosition: closure_0 };
          setLaunchPadPullTabTranslation.__workletHash = 11096032645208;
          setLaunchPadPullTabTranslation.__initData = outer2_11;
          return setLaunchPadPullTabTranslation;
        })(),
        setLaunchPadPullTabPosition: (() => {
          function setLaunchPadPullTabPosition(diff2, offset) {
            sharedValue1(sharedValue2[6])(outer2_1, { position: diff2, offset });
          }
          setLaunchPadPullTabPosition.__closure = { updateSharedValueIfChanged: sharedValue1(sharedValue2[6]), launchPadPullTabState: outer1_1 };
          setLaunchPadPullTabPosition.__workletHash = 14398804359967;
          setLaunchPadPullTabPosition.__initData = outer2_12;
          return setLaunchPadPullTabPosition;
        })(),
        setLaunchPadPullTabScale: (() => {
          function setLaunchPadPullTabScale(outer1_9) {
            sharedValue1(sharedValue2[6])(outer2_1, { scale: outer1_9 });
          }
          setLaunchPadPullTabScale.__closure = { updateSharedValueIfChanged: sharedValue1(sharedValue2[6]), launchPadPullTabState: outer1_1 };
          setLaunchPadPullTabScale.__workletHash = 4772968963371;
          setLaunchPadPullTabScale.__initData = outer2_13;
          return setLaunchPadPullTabScale;
        })(),
        setLaunchPadPullTabMinimized: (() => {
          function setLaunchPadPullTabMinimized(minimized) {
            sharedValue1(sharedValue2[6])(outer2_1, { minimized });
          }
          setLaunchPadPullTabMinimized.__closure = { updateSharedValueIfChanged: sharedValue1(sharedValue2[6]), launchPadPullTabState: outer1_1 };
          setLaunchPadPullTabMinimized.__workletHash = 2379539261994;
          setLaunchPadPullTabMinimized.__initData = outer2_14;
          return setLaunchPadPullTabMinimized;
        })(),
        onWindowHeightChange: (() => {
          function onWindowHeightChange() {
            outer1_0(outer2_1.get().position);
          }
          onWindowHeightChange.__closure = { launchPadPullTabState: outer1_1, setLaunchPadPullTabBoundedPosition: closure_0 };
          onWindowHeightChange.__workletHash = 17230667749428;
          onWindowHeightChange.__initData = outer2_15;
          return onWindowHeightChange;
        })()
      };
    }, items)
  };
  return obj;
};
