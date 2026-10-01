// Module ID: 14589
// Function ID: 14590
// Name: BountyVideoEndAppStorePanel
// Dependencies: [19, 17, 1182, 6572, 21, 4836, 576, 10725, 5298, 4566, 7131, 4519, 10721, 6073, 4837, 4840, 6575, 504, 4540, 2]
// Exports: default

// Module 14589 (BountyVideoEndAppStorePanel)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import openURLDefault from "openURL" /* 4519 */;
import native from "native" /* 4540 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6572 */;
import AnalyticsActions from "AnalyticsActions" /* 7131 */;
import AppStoreOverlayContent from "AppStoreOverlayContent" /* 10721 */;
import AppStoreOverlayBody from "AppStoreOverlayBody" /* 10725 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let set;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
function BountyVideoEndAppStorePanelInner(metadata) {
  let View;
  let callback;
  let items6;
  let items7;
  let obj10;
  let obj6;
  let obj9;
  let onCarouselScroll;
  let onOverlaySurfaceClick;
  metadata = metadata.metadata;
  const sheetHeight = metadata.sheetHeight;
  const revealProgress = metadata.revealProgress;
  const onDismiss = metadata.onDismiss;
  const onInstallPress = metadata.onInstallPress;
  let sharedValue;
  ({ onOverlaySurfaceClick, onCarouselScroll } = metadata);
  let tmp = closure_9();
  let closure_5 = tmp;
  const ref = onDismiss.useRef(false);
  let items = [onDismiss];
  const onPress = onDismiss.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      onDismiss();
    }
  }, items);
  let obj = metadata(revealProgress[8]);
  const unmountEffect = obj.useUnmountEffect(onPress);
  let obj2 = metadata(revealProgress[9]);
  class A {
    constructor() {
      let interpolate;
      let items;
      let items1;
      let value;
      const obj = { transform: items1 };
      const obj2 = { translateY: interpolate(value, [0, 1], items, ReanimatedRexport.Extrapolation.CLAMP) };
      interpolate = ReanimatedRexport.interpolate;
      ReanimatedRexport;
      value = revealProgress.get();
      items = [sheetHeight, 0];
      items1 = [obj2];
      return obj;
    }
  }
  const obj3 = { interpolate: metadata(revealProgress[9]).interpolate, revealProgress, sheetHeight, Extrapolation: metadata(revealProgress[9]).Extrapolation };
  A.__closure = obj3;
  A.__workletHash = 2597568517005;
  A.__initData = __initData;
  let items1 = [metadata.storeUrl, onInstallPress];
  const animatedStyle = obj2.useAnimatedStyle(A);
  const callback1 = onDismiss.useCallback(() => {
    onInstallPress(AnalyticsActions.AppStoreOverlaySurfaces.MAIN_CTA);
    openURLDefault(metadata.storeUrl);
  }, items1);
  const items2 = [, , , ];
  ({ appId: arr3[0], platform: arr3[1], storeUrl: arr3[2] } = metadata);
  items2[3] = onInstallPress;
  const callback2 = onDismiss.useCallback(() => {
    onInstallPress(AnalyticsActions.AppStoreOverlaySurfaces.RATING_STAT);
    const obj = AppStoreOverlayContent;
    obj.openAppStoreReviews(metadata.storeUrl, metadata.platform, metadata.appId);
  }, items2);
  const obj4 = metadata(revealProgress[9]);
  sharedValue = obj4.useSharedValue(1);
  const items3 = [sharedValue, onPress, revealProgress, sheetHeight];
  const items4 = [tmp.panel, sheetHeight];
  const memo = onDismiss.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const fn = function n() {
      const result = sharedValue.set(revealProgress.get());
    };
    let obj = { dragStartProgress: sharedValue, revealProgress };
    fn.__closure = obj;
    fn.__workletHash = 5755610000059;
    fn.__initData = __initData3;
    const activeOffsetYResult = PanResult.activeOffsetY(8);
    const fn2 = function o(translationY) {
      const result = revealProgress.set(Math.max(0, Math.min(1, sharedValue.get() - translationY.translationY / sheetHeight)));
    };
    let obj2 = { revealProgress, dragStartProgress: sharedValue, sheetHeight };
    fn2.__closure = obj2;
    fn2.__workletHash = 15072230748689;
    fn2.__initData = __initData2;
    const failOffsetXResult = activeOffsetYResult.failOffsetX([-24, 24]);
    const fn3 = function t(velocityY) {
      const tmp = closure_1_2;
      if (closure_1_2.get() >= 0.5) {
        if (velocityY.velocityY <= 800) {
          set = tmp.set;
          const obj = metadata(revealProgress[14]);
          const result = set(obj.withTiming(1, metadata(revealProgress[15]).timingStandard));
        }
      }
      const obj2 = metadata(revealProgress[9]);
      obj2.runOnJS(callback)();
    };
    const onBeginResult = failOffsetXResult.onBegin(fn);
    const onUpdateResult = onBeginResult.onUpdate(fn2);
    fn3.__closure = { revealProgress, DISMISS_PROGRESS_THRESHOLD: 0.5, DISMISS_VELOCITY_THRESHOLD: 800, runOnJS: ReanimatedRexport.runOnJS, handleDismiss, withTiming: timing.withTiming, timingStandard: timingPresets.timingStandard };
    fn3.__workletHash = 11043554169049;
    fn3.__initData = __initData;
    ({ revealProgress, DISMISS_PROGRESS_THRESHOLD: 0.5, DISMISS_VELOCITY_THRESHOLD: 800, runOnJS: ReanimatedRexport.runOnJS, handleDismiss, withTiming: timing.withTiming, timingStandard: timingPresets.timingStandard });
    return onUpdateResult.onEnd(fn3);
  }, items3);
  const items5 = [sheetHeight, tmp.root];
  const memo1 = onDismiss.useMemo(() => {
    const items = [closure_5.panel, ];
    const obj = { height: sheetHeight };
    items[1] = obj;
    return items;
  }, items4);
  const obj5 = {
    style: onDismiss.useMemo(() => {
      const items = [closure_5.root, ];
      const obj = { height: sheetHeight };
      items[1] = obj;
      return items;
    }, items5),
    children: sharedValue(View, obj6)
  };
  obj6 = { style: items6, children: items7 };
  items6 = [memo1, animatedStyle];
  const obj7 = { style: tmp.scrollBody, contentContainerStyle: tmp.scrollContent, nestedScrollEnabled: true, showsVerticalScrollIndicator: false, keyboardShouldPersistTaps: "handled", children: onPress(metadata(revealProgress[7]).AppStoreOverlayBody, { metadata, onOpenReviews: callback2, onMediaGetGamePress: callback1, onCarouselScroll, onOverlaySurfaceClick }) };
  View = sheetHeight(revealProgress[9]).View;
  items7 = [onPress(onInstallPress, obj7), , ];
  const obj8 = { gesture: memo, children: onPress(closure_5, obj9) };
  obj9 = { style: tmp.headerGestureTarget, children: onPress(metadata(revealProgress[16]).ActionSheetHeaderBar, obj10) };
  const GestureDetector = metadata(revealProgress[13]).GestureDetector;
  obj10 = { variant: "overlay", style: tmp.headerBar, onPress };
  items7[1] = onPress(GestureDetector, obj8);
  items7[2] = onPress(metadata(revealProgress[7]).AppStoreOverlayFooter, { onInstallPress: callback1 });
  return onPress(closure_5, obj5);
}
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
const ACTION_SHEET_BORDER_RADIUS = ActionSheetConstants.ACTION_SHEET_BORDER_RADIUS;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: { position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 10 }, panel: obj2, headerBar: { zIndex: 1 }, headerGestureTarget: { position: "absolute", top: 0, left: 0, right: 0, height: 48, zIndex: 2 }, scrollBody: { flex: 1, minHeight: 0 }, scrollContent: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, borderTopLeftRadius: ACTION_SHEET_BORDER_RADIUS, borderTopRightRadius: ACTION_SHEET_BORDER_RADIUS, overflow: "hidden", flexDirection: "column" };
createStyles = createStyles.createStyles;
obj3 = { paddingBottom: AppStoreOverlayBody.APP_STORE_OVERLAY_FOOTER_GRADIENT_HEIGHT };
let closure_9 = createStyles(obj);
const __initData = { code: "function BountyVideoEndAppStorePanelTsx1(){const{interpolate,revealProgress,sheetHeight,Extrapolation}=this.__closure;return{transform:[{translateY:interpolate(revealProgress.get(),[0,1],[sheetHeight,0],Extrapolation.CLAMP)}]};}" };
let closure_11 = { code: "function BountyVideoEndAppStorePanelTsx2(event){const{revealProgress,DISMISS_PROGRESS_THRESHOLD,DISMISS_VELOCITY_THRESHOLD,runOnJS,handleDismiss,withTiming,timingStandard}=this.__closure;if(revealProgress.get()<DISMISS_PROGRESS_THRESHOLD||event.velocityY>DISMISS_VELOCITY_THRESHOLD){runOnJS(handleDismiss)();return;}revealProgress.set(withTiming(1,timingStandard));}" };
let closure_12 = { code: "function BountyVideoEndAppStorePanelTsx3(event){const{revealProgress,dragStartProgress,sheetHeight}=this.__closure;revealProgress.set(Math.max(0,Math.min(1,dragStartProgress.get()-event.translationY/sheetHeight)));}" };
let closure_13 = { code: "function BountyVideoEndAppStorePanelTsx4(){const{dragStartProgress,revealProgress}=this.__closure;dragStartProgress.set(revealProgress.get());}" };
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideoEndAppStorePanel.tsx");

export default function BountyVideoEndAppStorePanel(arg0) {
  let obj3;
  let theme;
  const items = [ThemeStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  const obj2 = { theme: stateFromStores, children: metroImportDefault(BountyVideoEndAppStorePanelInner, obj3) };
  obj3 = {};
  const ThemeContextProvider = native.ThemeContextProvider;
  const merged = Object.assign(arg0);
  return metroImportDefault(ThemeContextProvider, obj2);
};
