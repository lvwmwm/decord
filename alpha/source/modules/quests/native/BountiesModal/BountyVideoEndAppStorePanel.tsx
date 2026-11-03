// Module ID: 17118
// Function ID: 17119
// Name: BountyVideoEndAppStorePanel
// Dependencies: [19, 17, 1192, 5396, 21, 5141, 575, 14798, 5716, 1652, 7986, 5825, 14794, 5426, 1705, 5377, 5380, 5718, 504, 5207, 2]
// Exports: default

// Module 17118 (BountyVideoEndAppStorePanel)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _mod1705 from "module_1705" /* 1705 */;
import native from "native" /* 5207 */;
import timing_timing from "timing/timing" /* 5377 */;
import timingPresets from "timingPresets" /* 5380 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5396 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5426 */;
import openURLDefault from "openURL" /* 5825 */;
import AnalyticsActions from "AnalyticsActions" /* 7986 */;
import AppStoreOverlayContent from "AppStoreOverlayContent" /* 14794 */;
import AppStoreOverlayBody from "AppStoreOverlayBody" /* 14798 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let num, tmp2;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
function BountyVideoEndAppStorePanelInner(metadata) {
  let View;
  let items8;
  let items9;
  let obj4;
  let obj7;
  let obj8;
  let onCarouselScroll;
  let onOverlaySurfaceClick;
  let tmp10;
  let tmp11;
  let tmp7;
  let tmp8;
  let tmp9;
  metadata = metadata.metadata;
  const sheetHeight = metadata.sheetHeight;
  const revealProgress = metadata.revealProgress;
  const onDismiss = metadata.onDismiss;
  const onInstallPress = metadata.onInstallPress;
  let sharedValue;
  ({ onOverlaySurfaceClick, onCarouselScroll } = metadata);
  const tmp = closure_9();
  let closure_5 = tmp;
  let obj = onDismiss;
  const ref = onDismiss.useRef(false);
  let items = [onDismiss];
  const onPress = onDismiss.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      onDismiss();
    }
  }, items);
  let tmp3 = metadata;
  const tmp4 = revealProgress;
  let obj2 = metadata(revealProgress[8]);
  const unmountEffect = obj2.useUnmountEffect(onPress);
  const tmp6 = metadata(revealProgress[9]);
  let items1 = [closure_10, , , , ];
  const useAnimatedStyle = tmp6.useAnimatedStyle;
  items1[1] = metadata(revealProgress[9]).interpolate;
  items1[2] = revealProgress;
  items1[3] = sheetHeight;
  items1[4] = metadata(revealProgress[9]).Extrapolation;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp7, tmp8, tmp9, tmp10, tmp11] = items1;
  class BountyVideoEndAppStorePanelTsx1 {
    constructor() {
      let items;
      let items1;
      const obj = { transform: items1 };
      const obj2 = { translateY: _undefined(_undefined2.get(), [0, 1], items, _undefined3.CLAMP) };
      items = [c2, 0];
      items1 = [obj2];
      return obj;
    }
  }
  let items2 = [tmp8, tmp9, tmp10, tmp11];
  BountyVideoEndAppStorePanelTsx1.__closure = items2;
  BountyVideoEndAppStorePanelTsx1.__workletHash = 12486357955860;
  BountyVideoEndAppStorePanelTsx1.__initData = tmp7;
  let items3 = [metadata.storeUrl, onInstallPress];
  const animatedStyle = useAnimatedStyle(BountyVideoEndAppStorePanelTsx1);
  const callback1 = obj.useCallback(() => {
    onInstallPress(AnalyticsActions.AppStoreOverlaySurfaces.MAIN_CTA);
    openURLDefault(metadata.storeUrl);
  }, items3);
  let items4 = [, , , ];
  ({ appId: arr5[0], platform: arr5[1], storeUrl: arr5[2] } = metadata);
  items4[3] = onInstallPress;
  const callback2 = obj.useCallback(() => {
    onInstallPress(AnalyticsActions.AppStoreOverlaySurfaces.RATING_STAT);
    const obj = AppStoreOverlayContent;
    obj.openAppStoreReviews(metadata.storeUrl, metadata.platform, metadata.appId);
  }, items4);
  const tmp3Result = tmp3(tmp4[9]);
  sharedValue = tmp3Result.useSharedValue(1);
  let items5 = [sharedValue, onPress, revealProgress, sheetHeight];
  const items6 = [tmp.panel, sheetHeight];
  const memo = obj.useMemo(() => {
    let tmp10;
    let tmp11;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp19;
    let tmp20;
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp9;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const items = [closure_11, sharedValue, ];
    items[2] = revealProgress;
    let c0;
    let c1;
    [tmp5, tmp6, tmp7] = items;
    const activeOffsetYResult = PanResult.activeOffsetY(8);
    const failOffsetXResult = activeOffsetYResult.failOffsetX([-24, 24]);
    class BountyVideoEndAppStorePanelTsx2 {
      constructor() {
        result = closure_0.set(closure_1.get());
        return;
      }
    }
    const items1 = [tmp6, tmp7];
    BountyVideoEndAppStorePanelTsx2.__closure = items1;
    BountyVideoEndAppStorePanelTsx2.__workletHash = 15884130525060;
    BountyVideoEndAppStorePanelTsx2.__initData = tmp5;
    const items2 = [closure_12, tmp4, sharedValue, sheetHeight];
    c0 = undefined;
    c1 = undefined;
    let c2;
    [tmp8, tmp9, tmp10, tmp11] = items2;
    const onBeginResult = failOffsetXResult.onBegin(BountyVideoEndAppStorePanelTsx2);
    class BountyVideoEndAppStorePanelTsx3 {
      constructor(arg0) {
        result = closure_0.set(Math.max(0, Math.min(1, closure_1.get() - arg0.translationY / closure_2)));
        return;
      }
    }
    const items3 = [tmp9, tmp10, tmp11];
    BountyVideoEndAppStorePanelTsx3.__closure = items3;
    BountyVideoEndAppStorePanelTsx3.__workletHash = 14538440343336;
    BountyVideoEndAppStorePanelTsx3.__initData = tmp8;
    const items4 = [closure_13, tmp4, 0.5, 800, , , , ];
    const onEnd = onBeginResult.onUpdate(BountyVideoEndAppStorePanelTsx3).onEnd;
    onBeginResult.onUpdate(BountyVideoEndAppStorePanelTsx3);
    items4[4] = _mod1705.scheduleOnRN;
    items4[5] = callback;
    items4[6] = timing_timing.withTiming;
    items4[7] = timingPresets.timingStandard;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    let c3;
    let c4;
    let c5;
    let c6;
    [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items4;
    class BountyVideoEndAppStorePanelTsx4 {
      constructor(arg0) {
        obj = closure_0;
        if (closure_0.get() >= closure_1) {
          tmp = arg0;
          tmp2 = closure_2;
          if (arg0.velocityY <= closure_2) {
            tmp3 = closure_5;
            tmp4 = closure_6;
            num = 1;
            result = obj.set(closure_5(1, closure_6));
          }
          return;
        }
        tmp6 = closure_3(closure_4);
        return;
      }
    }
    const items5 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
    BountyVideoEndAppStorePanelTsx4.__closure = items5;
    BountyVideoEndAppStorePanelTsx4.__workletHash = 469106011655;
    BountyVideoEndAppStorePanelTsx4.__initData = tmp13;
    return onEnd(BountyVideoEndAppStorePanelTsx4);
  }, items5);
  const items7 = [sheetHeight, tmp.root];
  const memo1 = obj.useMemo(() => {
    const items = [closure_5.panel, ];
    const obj = { height: sheetHeight };
    items[1] = obj;
    return items;
  }, items6);
  const obj3 = {
    style: obj.useMemo(() => {
      const items = [closure_5.root, ];
      const obj = { height: sheetHeight };
      items[1] = obj;
      return items;
    }, items7),
    children: sharedValue(View, obj4)
  };
  obj4 = { style: items8, children: items9 };
  items8 = [memo1, animatedStyle];
  const obj5 = { style: tmp.scrollBody, contentContainerStyle: tmp.scrollContent, nestedScrollEnabled: true, showsVerticalScrollIndicator: false, keyboardShouldPersistTaps: "handled", children: onPress(tmp3(tmp4[7]).AppStoreOverlayBody, { metadata, onOpenReviews: callback2, onMediaGetGamePress: callback1, onCarouselScroll, onOverlaySurfaceClick }) };
  View = sheetHeight(tmp4[9]).View;
  items9 = [onPress(onInstallPress, obj5), , ];
  const obj6 = { gesture: memo, children: onPress(closure_5, obj7) };
  obj7 = { style: tmp.headerGestureTarget, children: onPress(tmp3(tmp4[17]).ActionSheetHeaderBar, obj8) };
  const GestureDetector = tmp3(tmp4[13]).GestureDetector;
  obj8 = { variant: "overlay", style: tmp.headerBar, onPress };
  items9[1] = onPress(GestureDetector, obj6);
  items9[2] = onPress(tmp3(tmp4[7]).AppStoreOverlayFooter, { onInstallPress: callback1 });
  return onPress(closure_5, obj3);
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
let closure_10 = { code: "(function BountyVideoEndAppStorePanelTsx1(){let[interpolate,revealProgress,sheetHeight,Extrapolation]=this.__closure;return{transform:[{translateY:interpolate(revealProgress.get(),[0,1],[sheetHeight,0],Extrapolation.CLAMP)}]};})" };
let closure_11 = { code: "(function BountyVideoEndAppStorePanelTsx2(){let[dragStartProgress,revealProgress]=this.__closure;dragStartProgress.set(revealProgress.get());})" };
let closure_12 = { code: "(function BountyVideoEndAppStorePanelTsx3(event){let[revealProgress,dragStartProgress,sheetHeight]=this.__closure;revealProgress.set(Math.max(0,Math.min(1,dragStartProgress.get()-event.translationY/sheetHeight)));})" };
let closure_13 = { code: "(function BountyVideoEndAppStorePanelTsx4(event){let[revealProgress,DISMISS_PROGRESS_THRESHOLD,DISMISS_VELOCITY_THRESHOLD,scheduleOnRN,handleDismiss,withTiming,timingStandard]=this.__closure;if(revealProgress.get()<DISMISS_PROGRESS_THRESHOLD||event.velocityY>DISMISS_VELOCITY_THRESHOLD){scheduleOnRN(handleDismiss);return;}revealProgress.set(withTiming(1,timingStandard));})" };
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
