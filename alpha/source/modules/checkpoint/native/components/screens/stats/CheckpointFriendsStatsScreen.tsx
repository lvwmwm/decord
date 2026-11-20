// Module ID: 12651
// Function ID: 12652
// Name: CheckpointFriendsStatsScreen
// Dependencies: [32, 19, 17, 4795, 12370, 5850, 12393, 21, 575, 4794, 12607, 504, 12652, 12653, 12387, 4850, 6219, 12654, 1653, 1494, 12656, 12388, 1112, 3341, 12421, 12657, 3309, 12658, 2]
// Exports: default

// Module 12651 (CheckpointFriendsStatsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CheckpointConstants from "CheckpointConstants" /* 5850 */;
import useIsCheckpointWide from "useIsCheckpointWide" /* 12607 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4795 */;
import CheckpointStore from "CheckpointStore" /* 12370 */;
import CheckpointTransitionConstants from "CheckpointTransitionConstants" /* 12393 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4794 */;
import size_mod from "module_2" /* 2 */;

let enter, exit;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const CHECKPOINT_NAV_HEIGHT = CheckpointConstants.CHECKPOINT_NAV_HEIGHT;
({ CHECKPOINT_FRIENDS_CONTENT_FADE_OUT: metroImportAll, CHECKPOINT_SIDEKICK_CONTENT_FADE_IN: c9, CHECKPOINT_FRIENDS_CONTENT_FADE_IN: c10 } = CheckpointTransitionConstants);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
const PX_32 = nativeDefault.space.PX_32;
let createStyles = createStyles_mod;
let obj = { container: obj2, animation: rect, transition: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center" }, sidekick: obj3, sidekickDetails: obj4, wideContainer: obj5, wideScenePane: { width: "50%", alignSelf: "stretch", alignItems: "center", justifyContent: "center", paddingRight: PX_32 }, wideCopy: { width: "50%", paddingLeft: PX_32, paddingVertical: CHECKPOINT_NAV_HEIGHT }, wideTransition: { position: "absolute", top: 0, left: PX_32, right: 0, bottom: 0, justifyContent: "center" } };
obj2 = { width: "100%", flexGrow: 1, justifyContent: "flex-end", paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
rect = { position: "absolute", left: -nativeDefault.space.PX_24, right: -nativeDefault.space.PX_24 };
obj3 = { gap: nativeDefault.space.PX_32 };
obj4 = { gap: nativeDefault.space.PX_24 };
obj5 = { flexDirection: "row", alignItems: "center", alignSelf: "center", width: "100%", maxWidth: useIsCheckpointWide.CHECKPOINT_WIDE_MAX_WIDTH };
let closure_15 = createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointFriendsStatsScreen.tsx");

export default function CheckpointFriendsStatsScreen(arg0) {
  let animationState;
  let c8;
  let closure_3;
  let closure_9;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let isTransitioning;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items7;
  let items9;
  let obj12;
  let obj17;
  let obj20;
  let obj21;
  let obj4;
  let onNextStep;
  let onPreviousStep;
  let route;
  let showsSidekickPair;
  let size1;
  let tmp12;
  let tmp13;
  let tmp21;
  let tmp22;
  let tmp23Result10;
  let tmp23Result14;
  let tmp28;
  let tmp2Result23;
  let tmp2Result24;
  let tmp36Result;
  let tmp36Result7;
  let tmp54;
  let user1;
  let user2;
  let user3;
  ({ route, onNextStep, onPreviousStep } = arg0);
  showsSidekickPair = undefined;
  let width;
  let height;
  _slicedToArray = undefined;
  let sidekickMessageInputKeyboardOffset;
  let animatedRef;
  let current;
  let ref;
  exit = undefined;
  enter = undefined;
  let tmp = closure_15();
  let obj = showsSidekickPair(height[11]);
  const items = [ref];
  let stateFromStores = obj.useStateFromStores(items, () => {
    const stats = ref.stats;
    let users;
    if (stats != null) {
      users = stats.users;
    }
    return users;
  });
  const tmp4 = ref;
  if (stateFromStores == null) {
    stateFromStores = [];
  }
  const items1 = [tmp4];
  const tmp2Result = showsSidekickPair(height[11]);
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => {
    const stats = ref.stats;
    let sidekick;
    if (stats != null) {
      sidekick = stats.sidekick;
    }
    return sidekick;
  });
  const items2 = [current];
  const tmp2Result13 = showsSidekickPair(height[11]);
  const stateFromStores2 = tmp2Result13.useStateFromStores(items2, () => current.useReducedMotion);
  const tmp2Result14 = showsSidekickPair(height[12]);
  const friendsAnimationState = tmp2Result14.useFriendsAnimationState(route, stateFromStores2);
  ({ animationState, isTransitioning, showsSidekickPair } = friendsAnimationState);
  const tmp2Result15 = showsSidekickPair(height[13]);
  const sidekickLeave = tmp2Result15.useSidekickLeave(route, stateFromStores2, onNextStep, onPreviousStep);
  const tmp2Result16 = showsSidekickPair(height[14]);
  size = tmp2Result16.useCheckpointScreenFrame();
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
  [tmp12, tmp13] = stateFromStores;
  _slicedToArray(stateFromStores, 2);
  const tmp2Result17 = showsSidekickPair(height[15]);
  let str = tmp2Result17.useName(tmp12);
  if (str == null) {
    str = "";
  }
  const tmp2Result18 = showsSidekickPair(height[15]);
  let str2 = tmp2Result18.useName(tmp13);
  if (str2 == null) {
    str2 = "";
  }
  let user;
  const useName = tmp2(tmp3[15]).useName;
  showsSidekickPair(height[15]);
  if (stateFromStores1 != null) {
    user = stateFromStores1.user;
  }
  let str3 = useName(user);
  if (str3 == null) {
    str3 = "";
  }
  let tmp16 = route === tmp2(tmp3[16]).CheckpointRoute.SIDEKICK || route === tmp2(tmp3[16]).CheckpointRoute.SIDEKICK_LEAVE;
  _slicedToArray = tmp16;
  const tmp2Result20 = showsSidekickPair(height[17]);
  sidekickMessageInputKeyboardOffset = tmp2Result20.useSidekickMessageInputKeyboardOffset();
  const tmp2Result21 = showsSidekickPair(height[18]);
  animatedRef = tmp2Result21.useAnimatedRef();
  const items4 = [tmp16, sidekickMessageInputKeyboardOffset, animatedRef];
  const memo1 = obj7.useMemo(() => {
    let tmp;
    if (closure_3) {
      tmp = { containerRef: animatedRef, bottomOffset: sidekickMessageInputKeyboardOffset };
      const obj = { containerRef: animatedRef, bottomOffset: sidekickMessageInputKeyboardOffset };
    }
    return tmp;
  }, items4);
  [tmp21, tmp22] = sidekickMessageInputKeyboardOffset.useState({ messageSent: false, isSending: false });
  _slicedToArray(sidekickMessageInputKeyboardOffset.useState({ messageSent: false, isSending: false }), 2);
  const tmp24 = width(height[10])();
  current = tmp24;
  const tmp2Result22 = showsSidekickPair(height[14]);
  const checkpointScreenContentHeight = tmp2Result22.useCheckpointScreenContentHeight(true);
  const width2 = width(tmp3[19])({ ignoreKeyboard: true }).width;
  ref = obj7.useRef(null);
  [tmp28, c8] = sidekickMessageInputKeyboardOffset.useState(null);
  _slicedToArray(sidekickMessageInputKeyboardOffset.useState(null), 2);
  enter = obj7.useRef(tmp24);
  const items5 = [tmp24];
  const layoutEffect = obj7.useLayoutEffect(() => {
    closure_9.current = current;
  }, items5);
  const items6 = [tmp24];
  const callback = obj7.useCallback(() => {
    current = ref.current;
    if (current != null) {
      current.measureInWindow((x, y, width, height) => {
        if (ref.current === current) {
          const obj = { isWide: tmp, frame: size };
          size = { x, y, width, height };
          closure_1_8(obj);
        }
      });
    }
  }, items6);
  let isWide;
  if (tmp28 != null) {
    isWide = tmp28.isWide;
  }
  let frame = null;
  if (isWide === tmp24) {
    frame = tmp28.frame;
  }
  let num = 0;
  if (null != frame) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.max(0, Math.min(frame.width - PX_32, checkpointScreenContentHeight));
  }
  const obj2 = { isStepHeading: true, variant: "heading-lg/medium", children: intl.string(width(height[23])["6RSp5q"]) };
  const tmp23Result = width(height[21]);
  intl = tmp2(tmp3[22]).intl;
  const tmp38 = closure_11(tmp23Result, obj2);
  const tmp23Result9 = width(height[24]);
  const obj3 = { visible: route === showsSidekickPair(height[16]).CheckpointRoute.SQUAD && !isTransitioning, enter: enter2, exit, mountAfterDelay: true, children: closure_11(tmp23Result10, obj4) };
  obj4 = { title: intl2.string(width(height[26]).OzY5Ns), titleAccessibilityLabel: tmp2Result23.getSquadTitleAccessibilityLabel(items7), description: intl3.string(width(height[23]).EqdLDd) };
  tmp23Result10 = width(height[25]);
  intl2 = tmp2(tmp3[22]).intl;
  items7 = [str3, str, str2];
  tmp2Result23 = showsSidekickPair(height[25]);
  intl3 = tmp2(tmp3[22]).intl;
  const items8 = [closure_11(tmp23Result9, obj3), ];
  let tmp39Result = null != stateFromStores1;
  const tmp40 = closure_13;
  const tmp43 = exit;
  if (tmp39Result) {
    const tmp23Result11 = width(height[24]);
    if (tmp16) {
      tmp16 = !isTransitioning;
    }
    const obj5 = { visible: tmp16, enter, exit: tmp43, mountAfterDelay: true, style: tmp.sidekick, children: items10 };
    const obj6 = { style: tmp.sidekickDetails, children: items9 };
    const obj8 = { title: intl4.string(width(height[26])["+uwOHt"]), titleAccessibilityLabel: tmp2Result24.getSidekickTitleAccessibilityLabel(str3), description: intl5.string(width(height[23])["/ctmGw"]) };
    const tmp23Result12 = width(height[25]);
    intl4 = tmp2(tmp3[22]).intl;
    tmp2Result24 = showsSidekickPair(height[25]);
    intl5 = tmp2(tmp3[22]).intl;
    items9 = [closure_11(tmp23Result12, obj8), ];
    const obj9 = { sidekick: stateFromStores1 };
    items9[1] = closure_11(width(height[27]), obj9);
    items10 = [closure_12(animatedRef, obj6), ];
    const obj10 = { user: stateFromStores1.user, username: str3, containerRef: animatedRef, state: tmp21, setState: tmp22 };
    items10[1] = closure_11(width(height[17]), obj10);
    tmp39Result = tmp39(tmp23Result11, obj5);
  }
  items8[1] = tmp39Result;
  const tmp39Result2 = closure_12(tmp40, { children: items8 });
  const tmp23Result13 = width(height[14]);
  if (tmp24) {
    const obj11 = { centered: true, keyboardInput: memo1, children: closure_12(animatedRef, obj12, "wide") };
    obj12 = { style: items11, children: items12 };
    items11 = [tmp.wideContainer, ];
    const obj13 = { minHeight: checkpointScreenContentHeight };
    items11[1] = obj13;
    const obj14 = { ref, style: tmp.wideScenePane, onLayout: callback, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp36Result };
    tmp36Result = null != frame && num > 0;
    if (tmp36Result) {
      const obj15 = { style: size1, children: closure_11(tmp23Result14, obj17) };
      size1 = { width: num, height: num };
      obj17 = { animationState, sidekickUser: user1, firstUser: tmp12, secondUser: tmp13, twoFriends: stateFromStores.length < 2, isReducedMotion: stateFromStores2, artboardFrame: { centerX: frame.x + (frame.width - PX_32) / 2, centerY: frame.y + frame.height / 2, size: num } };
      user1 = undefined;
      tmp23Result14 = width(height[20]);
      if (stateFromStores1 != null) {
        user1 = stateFromStores1.user;
      }
      tmp36Result = tmp36(tmp63, obj15);
    }
    items12 = [closure_11(animatedRef, obj14), ];
    const obj18 = { style: tmp.wideCopy, children: items13 };
    items13 = [tmp39Result2, ];
    let tmp36Result5 = route === tmp2(tmp3[16]).CheckpointRoute.SQUAD_TRANSITION;
    if (tmp36Result5) {
      const obj19 = { style: tmp.wideTransition, children: tmp38 };
      tmp36Result5 = tmp36(tmp63, obj19);
    }
    items13[1] = tmp36Result5;
    items12[1] = closure_12(animatedRef, obj18);
    obj20 = obj11;
  } else {
    obj20 = { keyboardInput: memo1, children: closure_12(animatedRef, obj21, "narrow") };
    let tmp53;
    obj21 = { style: tmp.container, children: items15 };
    if (!tmp24 && width < width2) {
      tmp53 = ref;
    }
    const obj22 = { ref: tmp53, style: items14, onLayout: tmp54, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp36Result7 };
    items14 = [tmp.animation, memo];
    tmp54 = undefined;
    if (!tmp24 && width < width2) {
      tmp54 = callback;
    }
    if (!tmp24 && width < width2) {
      let tmp36Result6 = null != frame;
      if (tmp36Result6) {
        const _Math3 = Math;
        const obj24 = { animationState, sidekickUser: user2, firstUser: tmp12, secondUser: tmp13, twoFriends: stateFromStores.length < 2, isReducedMotion: stateFromStores2, artboardFrame: { centerX: frame.x + frame.width / 2, centerY: frame.y + frame.height / 2, size: Math.min(frame.width, frame.height) } };
        user2 = undefined;
        const tmp23Result15 = width(height[20]);
        if (stateFromStores1 != null) {
          user2 = stateFromStores1.user;
        }
        tmp36Result6 = tmp36(tmp23Result15, obj24);
      }
      tmp36Result7 = tmp36Result6;
    } else {
      const obj25 = { animationState, sidekickUser: user3, firstUser: tmp12, secondUser: tmp13, twoFriends: stateFromStores.length < 2, isReducedMotion: stateFromStores2, artboardFrame: "disabled" };
      user3 = undefined;
      const tmp23Result16 = width(height[20]);
      if (stateFromStores1 != null) {
        user3 = stateFromStores1.user;
      }
      tmp36Result7 = tmp36(tmp23Result16, obj25);
    }
    items15 = [closure_11(animatedRef, obj22), , ];
    let tmp36Result8 = route === tmp2(tmp3[16]).CheckpointRoute.SQUAD_TRANSITION;
    if (tmp36Result8) {
      const obj26 = { style: tmp.transition, children: tmp38 };
      tmp36Result8 = tmp36(tmp52, obj26);
    }
    items15[1] = tmp36Result8;
    items15[2] = tmp39Result2;
  }
  return closure_11(tmp23Result13, obj20);
};
