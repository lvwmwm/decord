// Module ID: 15525
// Function ID: 118440
// Name: useLaunchPadState
// Dependencies: []
// Exports: default

// Module 15525 (useLaunchPadState)
let closure_3 = importAll(dependencyMap[0]);
({ LAUNCH_PAD_PULL_TAB_MAX_POSITION: closure_4, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = {};
const obj = { "Bool(false)": "Array", "Bool(false)": "isArray", "Bool(false)": "construct", "Bool(false)": "Array" };
const tmp2 = arg1(dependencyMap[1]);
obj.position = arg1(dependencyMap[2]).getLaunchPadPullTabPositionCached();
let closure_8 = { code: "function setLaunchPadShown_useLaunchPadStateNativeTsx1(shown){const{launchPadShown}=this.__closure;launchPadShown.set(shown);}" };
let closure_9 = { code: "function setLaunchPadPosition_useLaunchPadStateNativeTsx2(value){const{launchPadSharedState}=this.__closure;launchPadSharedState.set(Math.max(Math.min(value,1),0));}" };
let closure_10 = { code: "function setLaunchPadPullTabBoundedPosition_useLaunchPadStateNativeTsx3(positionY){const{getWindowDimensionsWorklet,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_MAX_POSITION,getSafeAreaInsetsWorklet,LAUNCH_PAD_PULL_TAB_SCALE_OFFSET,updateSharedValueIfChanged,runOnJS,persistLaunchPadPullTabPosition}=this.__closure;const positionYMax=getWindowDimensionsWorklet().height-launchPadPullTabState.get().offset-LAUNCH_PAD_PULL_TAB_MAX_POSITION;const positionYMin=getSafeAreaInsetsWorklet().top+LAUNCH_PAD_PULL_TAB_SCALE_OFFSET;const position=Math.max(Math.min(positionY,positionYMax),positionYMin);updateSharedValueIfChanged(launchPadPullTabState,{position:position});runOnJS(persistLaunchPadPullTabPosition)(position);}" };
let closure_11 = { code: "function setLaunchPadPullTabTranslation_useLaunchPadStateNativeTsx4(translationY){const{gestureState,setLaunchPadPullTabBoundedPosition}=this.__closure;const positionY=gestureState.get().initialPullTabPosition+translationY;setLaunchPadPullTabBoundedPosition(positionY);}" };
let closure_12 = { code: "function setLaunchPadPullTabPosition_useLaunchPadStateNativeTsx5(position,offset){const{updateSharedValueIfChanged,launchPadPullTabState}=this.__closure;updateSharedValueIfChanged(launchPadPullTabState,{position:position,offset:offset});}" };
let closure_13 = { code: "function setLaunchPadPullTabScale_useLaunchPadStateNativeTsx6(scale){const{updateSharedValueIfChanged,launchPadPullTabState}=this.__closure;updateSharedValueIfChanged(launchPadPullTabState,{scale:scale});}" };
let closure_14 = { code: "function setLaunchPadPullTabMinimized_useLaunchPadStateNativeTsx7(minimized){const{updateSharedValueIfChanged,launchPadPullTabState}=this.__closure;updateSharedValueIfChanged(launchPadPullTabState,{minimized:minimized});}" };
let closure_15 = { code: "function onWindowHeightChange_useLaunchPadStateNativeTsx8(){const{launchPadPullTabState,setLaunchPadPullTabBoundedPosition}=this.__closure;const positionY=launchPadPullTabState.get().position;setLaunchPadPullTabBoundedPosition(positionY);}" };
const obj2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/launchpad/native/useLaunchPadState.native.tsx");

export default function useLaunchPadState() {
  let obj = arg1(dependencyMap[3]);
  const sharedValue = obj.useSharedValue(closure_6);
  const arg1 = sharedValue;
  const sharedValue1 = arg1(dependencyMap[3]).useSharedValue(obj);
  const importDefault = sharedValue1;
  const obj2 = arg1(dependencyMap[3]);
  const sharedValue2 = arg1(dependencyMap[3]).useSharedValue(0);
  const dependencyMap = sharedValue2;
  const obj3 = arg1(dependencyMap[3]);
  const sharedValue3 = arg1(dependencyMap[3]).useSharedValue(false);
  const React = sharedValue3;
  const items = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  obj = {
    launchPadSharedState: sharedValue2,
    launchPadPullTabState: sharedValue1,
    launchPadShown: sharedValue3,
    gestureState: sharedValue,
    updaters: React.useMemo(() => {
      const tmp = () => {
        function setLaunchPadShown(arg0) {
          const result = closure_3.set(arg0);
        }
        setLaunchPadShown.__closure = { launchPadShown: closure_3 };
        setLaunchPadShown.__workletHash = 12645438005571;
        setLaunchPadShown.__initData = closure_8;
        return setLaunchPadShown;
      }();
      let closure_0 = () => {
        function setLaunchPadPullTabBoundedPosition(arg0) {
          const diff = callback(closure_2[4]).getWindowDimensionsWorklet().height - lib.get().offset - closure_4;
          const obj = callback(closure_2[4]);
          const sum = callback(closure_2[5]).getSafeAreaInsetsWorklet().top + closure_5;
          const bound = Math.max(Math.min(arg0, diff), sum);
          lib(closure_2[6])(lib, { position: bound });
          const obj2 = callback(closure_2[5]);
          callback(closure_2[3]).runOnJS(callback(closure_2[2]).persistLaunchPadPullTabPosition)(bound);
        }
        setLaunchPadPullTabBoundedPosition.__closure = { getWindowDimensionsWorklet: callback(closure_2[4]).getWindowDimensionsWorklet, launchPadPullTabState: callback2, LAUNCH_PAD_PULL_TAB_MAX_POSITION: closure_4, getSafeAreaInsetsWorklet: callback(closure_2[5]).getSafeAreaInsetsWorklet, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET: closure_5, updateSharedValueIfChanged: callback2(closure_2[6]), runOnJS: callback(closure_2[3]).runOnJS, persistLaunchPadPullTabPosition: callback(closure_2[2]).persistLaunchPadPullTabPosition };
        setLaunchPadPullTabBoundedPosition.__workletHash = 1905227275114;
        setLaunchPadPullTabBoundedPosition.__initData = closure_10;
        return setLaunchPadPullTabBoundedPosition;
      }();
      const tmp2 = () => {
        function setLaunchPadPosition(arg0) {
          const result = closure_2.set(Math.max(Math.min(arg0, 1), 0));
        }
        setLaunchPadPosition.__closure = { launchPadSharedState: closure_2 };
        setLaunchPadPosition.__workletHash = 6880435508235;
        setLaunchPadPosition.__initData = closure_9;
        return setLaunchPadPosition;
      }();
      return {
        setLaunchPadShown: tmp,
        setLaunchPadPosition: () => {
          function setLaunchPadPosition(arg0) {
            const result = closure_2.set(Math.max(Math.min(arg0, 1), 0));
          }
          setLaunchPadPosition.__closure = { launchPadSharedState: closure_2 };
          setLaunchPadPosition.__workletHash = 6880435508235;
          setLaunchPadPosition.__initData = closure_9;
          return setLaunchPadPosition;
        }(),
        setLaunchPadPullTabTranslation: () => {
          function setLaunchPadPullTabTranslation(translationY) {
            lib(lib.get().initialPullTabPosition + translationY);
          }
          setLaunchPadPullTabTranslation.__closure = { gestureState: closure_0, setLaunchPadPullTabBoundedPosition: closure_0 };
          setLaunchPadPullTabTranslation.__workletHash = 11096032645208;
          setLaunchPadPullTabTranslation.__initData = closure_11;
          return setLaunchPadPullTabTranslation;
        }(),
        setLaunchPadPullTabPosition: () => {
          function setLaunchPadPullTabPosition(diff2, offset) {
            callback(closure_2[6])(callback, { position: diff2, offset });
          }
          setLaunchPadPullTabPosition.__closure = { updateSharedValueIfChanged: callback2(closure_2[6]), launchPadPullTabState: callback2 };
          setLaunchPadPullTabPosition.__workletHash = 14398804359967;
          setLaunchPadPullTabPosition.__initData = closure_12;
          return setLaunchPadPullTabPosition;
        }(),
        setLaunchPadPullTabScale: () => {
          function setLaunchPadPullTabScale(closure_9) {
            callback(closure_2[6])(callback, { scale: closure_9 });
          }
          setLaunchPadPullTabScale.__closure = { updateSharedValueIfChanged: callback2(closure_2[6]), launchPadPullTabState: callback2 };
          setLaunchPadPullTabScale.__workletHash = 4772968963371;
          setLaunchPadPullTabScale.__initData = closure_13;
          return setLaunchPadPullTabScale;
        }(),
        setLaunchPadPullTabMinimized: () => {
          function setLaunchPadPullTabMinimized(minimized) {
            callback(closure_2[6])(callback, { minimized });
          }
          setLaunchPadPullTabMinimized.__closure = { updateSharedValueIfChanged: callback2(closure_2[6]), launchPadPullTabState: callback2 };
          setLaunchPadPullTabMinimized.__workletHash = 2379539261994;
          setLaunchPadPullTabMinimized.__initData = closure_14;
          return setLaunchPadPullTabMinimized;
        }(),
        onWindowHeightChange: () => {
          function onWindowHeightChange() {
            callback(closure_1.get().position);
          }
          onWindowHeightChange.__closure = { launchPadPullTabState: closure_1, setLaunchPadPullTabBoundedPosition: closure_0 };
          onWindowHeightChange.__workletHash = 17230667749428;
          onWindowHeightChange.__initData = closure_15;
          return onWindowHeightChange;
        }()
      };
    }, items)
  };
  return obj;
};
