// Module ID: 12681
// Function ID: 12682
// Name: CheckpointFriendsStatsScreen
// Dependencies: [32, 19, 17, 4793, 12400, 12423, 21, 4792, 575, 504, 12682, 12683, 12417, 4848, 6217, 12684, 1655, 12686, 12418, 1113, 3339, 12451, 12687, 3307, 12688, 2]
// Exports: default

// Module 12681 (CheckpointFriendsStatsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4793 */;
import CheckpointStore from "CheckpointStore" /* 12400 */;
import CheckpointTransitionConstants from "CheckpointTransitionConstants" /* 12423 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4792 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let rect;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ CHECKPOINT_FRIENDS_CONTENT_FADE_OUT: metroImportAll, CHECKPOINT_SIDEKICK_CONTENT_FADE_IN: c9, CHECKPOINT_FRIENDS_CONTENT_FADE_IN: c10 } = CheckpointTransitionConstants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, animation: rect, transition: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center" }, sidekick: obj3, sidekickDetails: obj4 };
obj2 = { width: "100%", flexGrow: 1, justifyContent: "flex-end", paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
rect = { position: "absolute", left: -nativeDefault.space.PX_24, right: -nativeDefault.space.PX_24 };
obj3 = { gap: nativeDefault.space.PX_32 };
obj4 = { gap: nativeDefault.space.PX_24 };
let closure_13 = createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointFriendsStatsScreen.tsx");

export default function CheckpointFriendsStatsScreen(arg0) {
  let closure_3;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let isTransitioning;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj10;
  let obj3;
  let obj5;
  let obj8;
  let onNextStep;
  let onPreviousStep;
  let route;
  let showsSidekickPair;
  let tmp11;
  let tmp12;
  let tmp20Result;
  let tmp20Result6;
  let tmp24;
  let tmp2Result21;
  let tmp2Result22;
  let useReducedMotion;
  let user1;
  ({ route, onNextStep, onPreviousStep } = arg0);
  showsSidekickPair = undefined;
  let width;
  let height;
  _slicedToArray = undefined;
  let sidekickMessageInputKeyboardOffset;
  let animatedRef;
  let tmp = closure_13();
  let obj = showsSidekickPair(height[9]);
  const items = [CheckpointStore];
  let stateFromStores = obj.useStateFromStores(items, () => {
    const stats = CheckpointStore.stats;
    let users;
    if (stats != null) {
      users = stats.users;
    }
    return users;
  });
  const tmp4 = CheckpointStore;
  if (stateFromStores == null) {
    stateFromStores = [];
  }
  const items1 = [tmp4];
  const tmp2Result = showsSidekickPair(height[9]);
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => {
    const stats = CheckpointStore.stats;
    let sidekick;
    if (stats != null) {
      sidekick = stats.sidekick;
    }
    return sidekick;
  });
  const items2 = [AccessibilityStore];
  const tmp2Result12 = showsSidekickPair(height[9]);
  const stateFromStores2 = tmp2Result12.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  const tmp2Result13 = showsSidekickPair(height[10]);
  const friendsAnimationState = tmp2Result13.useFriendsAnimationState(route, stateFromStores2);
  ({ isTransitioning, showsSidekickPair } = friendsAnimationState);
  const animationState = friendsAnimationState.animationState;
  const tmp2Result14 = showsSidekickPair(height[11]);
  const sidekickLeave = tmp2Result14.useSidekickLeave(route, stateFromStores2, onNextStep, onPreviousStep);
  const tmp2Result15 = showsSidekickPair(height[12]);
  size = tmp2Result15.useCheckpointScreenFrame();
  width = size.width;
  height = size.height;
  const items3 = [showsSidekickPair, height, width];
  const memo = sidekickMessageInputKeyboardOffset.useMemo(() => {
    let num = 0;
    const result = -height / 2;
    const tmp = height;
    if (showsSidekickPair) {
      num = nativeDefault.space.PX_48;
    }
    return { top: result - num, height: width + tmp };
  }, items3);
  [tmp11, tmp12] = stateFromStores;
  _slicedToArray(stateFromStores, 2);
  const tmp2Result16 = showsSidekickPair(height[13]);
  let str = tmp2Result16.useName(tmp11);
  const obj7 = sidekickMessageInputKeyboardOffset;
  if (str == null) {
    str = "";
  }
  const tmp2Result17 = showsSidekickPair(height[13]);
  let str2 = tmp2Result17.useName(tmp12);
  if (str2 == null) {
    str2 = "";
  }
  let user;
  const useName = tmp2(tmp3[13]).useName;
  showsSidekickPair(height[13]);
  if (stateFromStores1 != null) {
    user = stateFromStores1.user;
  }
  let str3 = useName(user);
  if (str3 == null) {
    str3 = "";
  }
  let tmp15 = route === tmp2(tmp3[14]).CheckpointRoute.SIDEKICK || route === tmp2(tmp3[14]).CheckpointRoute.SIDEKICK_LEAVE;
  _slicedToArray = tmp15;
  const tmp2Result19 = showsSidekickPair(height[15]);
  sidekickMessageInputKeyboardOffset = tmp2Result19.useSidekickMessageInputKeyboardOffset();
  const tmp2Result20 = showsSidekickPair(height[16]);
  animatedRef = tmp2Result20.useAnimatedRef();
  const items4 = [tmp15, sidekickMessageInputKeyboardOffset, animatedRef];
  const memo1 = obj7.useMemo(() => {
    let tmp;
    if (closure_3) {
      tmp = { containerRef: animatedRef, bottomOffset: sidekickMessageInputKeyboardOffset };
      const obj = { containerRef: animatedRef, bottomOffset: sidekickMessageInputKeyboardOffset };
    }
    return tmp;
  }, items4);
  const obj2 = { keyboardInput: memo1, children: closure_12(animatedRef, obj3) };
  obj3 = { style: tmp.container, children: items6 };
  const obj4 = { style: items5, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_11(tmp24, obj5) };
  items5 = [tmp.animation, memo];
  obj5 = { animationState, sidekickUser: user1, firstUser: tmp11, secondUser: tmp12, twoFriends: stateFromStores.length < 2, isReducedMotion: stateFromStores2 };
  user1 = undefined;
  const tmp21 = width(height[12]);
  tmp24 = width(height[17]);
  if (stateFromStores1 != null) {
    user1 = stateFromStores1.user;
  }
  items6 = [closure_11(animatedRef, obj4), , , ];
  let tmp19Result = route === tmp2(tmp3[14]).CheckpointRoute.SQUAD_TRANSITION;
  if (tmp19Result) {
    const obj6 = { style: tmp.transition, children: closure_11(tmp20Result, obj8) };
    obj8 = { isStepHeading: true, variant: "heading-lg/medium", children: intl.string(width(height[20])["6RSp5q"]) };
    tmp20Result = width(height[18]);
    intl = tmp2(tmp3[19]).intl;
    tmp19Result = tmp19(tmp23, obj6);
  }
  items6[1] = tmp19Result;
  const tmp20Result5 = width(height[21]);
  const obj9 = { visible: route === showsSidekickPair(height[14]).CheckpointRoute.SQUAD && !isTransitioning, enter: enter2, exit, mountAfterDelay: true, children: closure_11(tmp20Result6, obj10) };
  obj10 = { title: intl2.string(width(height[23]).OzY5Ns), titleAccessibilityLabel: tmp2Result21.getSquadTitleAccessibilityLabel(items7), description: intl3.string(width(height[20]).EqdLDd) };
  tmp20Result6 = width(height[22]);
  intl2 = tmp2(tmp3[19]).intl;
  items7 = [str3, str, str2];
  tmp2Result21 = showsSidekickPair(height[22]);
  intl3 = tmp2(tmp3[19]).intl;
  items6[2] = closure_11(tmp20Result5, obj9);
  let tmp22Result = null != stateFromStores1;
  const tmp30 = exit;
  if (tmp22Result) {
    const tmp20Result7 = width(height[21]);
    if (tmp15) {
      tmp15 = !isTransitioning;
    }
    const obj11 = { visible: tmp15, enter, exit: tmp30, mountAfterDelay: true, style: tmp.sidekick, children: items9 };
    const obj12 = { style: tmp.sidekickDetails, children: items8 };
    const obj13 = { title: intl4.string(width(height[23])["+uwOHt"]), titleAccessibilityLabel: tmp2Result22.getSidekickTitleAccessibilityLabel(str3), description: intl5.string(width(height[20])["/ctmGw"]) };
    const tmp20Result8 = width(height[22]);
    intl4 = tmp2(tmp3[19]).intl;
    tmp2Result22 = showsSidekickPair(height[22]);
    intl5 = tmp2(tmp3[19]).intl;
    items8 = [closure_11(tmp20Result8, obj13), ];
    const obj14 = { sidekick: stateFromStores1 };
    items8[1] = closure_11(width(height[24]), obj14);
    items9 = [closure_12(animatedRef, obj12), ];
    const obj15 = { user: stateFromStores1.user, username: str3, containerRef: animatedRef };
    items9[1] = closure_11(width(height[15]), obj15);
    tmp22Result = tmp22(tmp20Result7, obj11);
  }
  items6[3] = tmp22Result;
  return closure_11(tmp21, obj2);
};
