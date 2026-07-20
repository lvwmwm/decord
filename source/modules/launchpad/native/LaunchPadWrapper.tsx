// Module ID: 15510
// Function ID: 118369
// Name: LaunchPadWrapper
// Dependencies: []
// Exports: default

// Module 15510 (LaunchPadWrapper)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, Pressable: closure_6, TouchableOpacity: closure_7, StyleSheet: closure_8 } = arg1(dependencyMap[2]));
const LaunchPadTypes = arg1(dependencyMap[3]).LaunchPadTypes;
const tmp2 = arg1(dependencyMap[2]);
({ AnalyticEvents: closure_10, ComponentActions: closure_11 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { <string:1140607356>: 30271555, <string:1751293292>: 22092032, paddingTop: importDefault(dependencyMap[7]).space.PX_8 };
obj.modalWrapper = obj;
const tmp4 = arg1(dependencyMap[5]);
obj.a11yDismiss = { height: importDefault(dependencyMap[7]).space.PX_8 };
let closure_14 = obj.createStyles(obj);
const obj1 = { height: importDefault(dependencyMap[7]).space.PX_8 };
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/launchpad/native/LaunchPadWrapper.tsx");

export default function LaunchPadWrapper(launchPadType) {
  let gestureState;
  let launchPadCoverStyles;
  let launchPadSharedState;
  let launchPadShown;
  let launchPadStyles;
  let updaters;
  launchPadType = launchPadType.launchPadType;
  const arg1 = launchPadType;
  ({ gestureState, launchPadShown, launchPadSharedState, updaters } = launchPadType);
  const importDefault = updaters;
  const tmp = callback3();
  let obj = arg1(dependencyMap[10]);
  const isModalOpen = obj.useIsModalOpen();
  const dependencyMap = isModalOpen;
  ({ launchPadCoverStyles, launchPadStyles } = importDefault(dependencyMap[11])({ launchPadSharedState, launchPadShown, gestureState }));
  const tmp4 = importDefault(dependencyMap[12])(launchPadShown);
  let callback = tmp4;
  const ref = React.useRef(!tmp4);
  const React = ref;
  let closure_5 = callback(React.useState({}), 2)[1];
  const items = [tmp4];
  const effect = React.useEffect(() => {
    if (tmp4) {
      ref.current = false;
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_4.current = true;
        callback({});
      }, 1000);
      return () => clearTimeout(closure_0);
    }
  }, items);
  const items1 = [updaters];
  callback = React.useCallback(() => updaters.setLaunchPadPosition(0), items1);
  const items2 = [tmp4];
  const effect1 = React.useEffect(() => {
    if (tmp4) {
      updaters(isModalOpen[13]).track(constants2.LAUNCHPAD_OPENED);
      const obj = updaters(isModalOpen[13]);
    }
  }, items2);
  const items3 = [launchPadType, tmp4, isModalOpen];
  const effect2 = React.useEffect(() => {
    if (launchPadType === constants.PULL_TAB) {
      if (!isModalOpen) {
        const result = launchPadType(isModalOpen[14]).setLaunchPadPullTabExclusionRect();
        if (tmp4) {
          const result1 = launchPadType(isModalOpen[15]).triggerHapticFeedback(launchPadType(isModalOpen[15]).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj2 = launchPadType(isModalOpen[15]);
        }
        const obj = launchPadType(isModalOpen[14]);
      }
    }
    const result2 = launchPadType(isModalOpen[14]).clearLaunchPadPullTabExclusionRect();
  }, items3);
  const items4 = [launchPadShown];
  const effect3 = React.useEffect(() => () => callback(closure_2[14]).clearLaunchPadPullTabExclusionRect(), items4);
  importDefault(dependencyMap[16])(() => {
    if (tmp4) {
      callback();
    }
    return tmp4;
  });
  function useLaunchPadComponentDispatchListeners(updaters) {
    const launchPadType = updaters;
    const items = [updaters];
    const effect = ref.useEffect(() => {
      function showLaunchPad(arg0) {
        uiStore.setLaunchPadShown(true);
        uiStore.setLaunchPadPosition(1);
      }
      function hideLaunchPad() {
        uiStore.setLaunchPadShown(false);
        uiStore.setLaunchPadPosition(0);
      }
      const updaters = showLaunchPad(hideLaunchPad[8]).addRouteChangeListener(hideLaunchPad);
      const ComponentDispatch = updaters(hideLaunchPad[9]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.LAUNCH_PAD_SHOW, showLaunchPad);
      const ComponentDispatch2 = updaters(hideLaunchPad[9]).ComponentDispatch;
      const subscription1 = ComponentDispatch2.subscribe(constants.LAUNCH_PAD_HIDE, hideLaunchPad);
      return () => {
        uiStore();
        const ComponentDispatch = uiStore(hideLaunchPad[9]).ComponentDispatch;
        ComponentDispatch.unsubscribe(constants.LAUNCH_PAD_SHOW, showLaunchPad);
        const ComponentDispatch2 = uiStore(hideLaunchPad[9]).ComponentDispatch;
        ComponentDispatch2.unsubscribe(constants.LAUNCH_PAD_HIDE, hideLaunchPad);
      };
    }, items);
  }(updaters);
  obj = { style: closure_8.absoluteFill, pointerEvents: "box-none" };
  const tmp3 = importDefault(dependencyMap[11])({ launchPadSharedState, launchPadShown, gestureState });
  const items5 = [callback2(importDefault(dependencyMap[18]).View, { style: launchPadCoverStyles, pointerEvents: "none" }), , ];
  let tmp16 = null;
  if (launchPadType === LaunchPadTypes.PULL_TAB) {
    tmp16 = null;
    if (!isModalOpen) {
      obj = { gestureState, launchPadSharedState, launchPadPullTabState: launchPadType.launchPadPullTabState, updaters };
      tmp16 = callback2(importDefault(dependencyMap[19]), obj);
    }
  }
  items5[1] = tmp16;
  const obj1 = { style: launchPadStyles, pointerEvents: "none" };
  const obj2 = { nativeID: "launch-pad", style: tmp.modalWrapper, onAccessibilityEscape: callback, accessibilityViewIsModal: tmp4 };
  const obj3 = {};
  let str2 = "no";
  if (tmp4) {
    str2 = "yes";
  }
  obj3.importantForAccessibility = str2;
  obj3.accessibilityRole = "button";
  const intl = arg1(dependencyMap[21]).intl;
  obj3.accessibilityLabel = intl.string(arg1(dependencyMap[21]).t.WAI6xu);
  obj3.onPress = callback;
  obj3.style = tmp.a11yDismiss;
  const items6 = [callback2(callback, obj3), , ];
  const obj4 = { overflow: true, borderRadius: true, onPress: callback, style: closure_8.absoluteFillObject };
  items6[1] = callback2(closure_7, obj4);
  const obj5 = {};
  let tmp25 = !tmp4;
  if (tmp25) {
    tmp25 = tmp13;
  }
  obj5.freeze = tmp25;
  obj5.children = callback2(importDefault(dependencyMap[23]), { visible: tmp4, sharedState: launchPadSharedState });
  items6[2] = callback2(arg1(dependencyMap[22]).Freeze, obj5);
  obj2.children = items6;
  obj1.children = closure_13(arg1(dependencyMap[20]).AccessibilityView, obj2);
  items5[2] = callback2(importDefault(dependencyMap[18]).View, obj1);
  obj.children = items5;
  return closure_13(closure_5, obj);
};
