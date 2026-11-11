// Module ID: 15398
// Function ID: 15399
// Name: OrbBadgeCollectedModal
// Dependencies: [19, 17, 5244, 21, 5243, 575, 7427, 6785, 10370, 9977, 504, 5957, 9663, 9664, 9694, 7351, 10355, 5866, 1113, 5873, 9333, 10366, 7424, 2]
// Exports: default

// Module 15398 (OrbBadgeCollectedModal)
import nativeDefault from "native" /* 575 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import NavigatorHeader from "NavigatorHeader" /* 7427 */;
import BalanceWidgetPill from "BalanceWidgetPill" /* 9977 */;
import _mod10370 from "module_10370" /* 10370 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function OrbBadgeCollectedRootScreen(modalKey) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj4;
  let obj6;
  let obj7;
  let obj9;
  let tmp12;
  let tmp13;
  let tmp9Result;
  let useReducedMotion;
  modalKey = modalKey.modalKey;
  const onPressViewBadge = modalKey.onPressViewBadge;
  const tmp = closure_8();
  let obj = modalKey(504);
  const items = [AccessibilityStore];
  const items1 = [onPressViewBadge];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items2 = [modalKey];
  const callback = react.useCallback(() => {
    onPressViewBadge();
  }, items1);
  const obj2 = { style: tmp.root, children: items3 };
  const callback1 = react.useCallback(() => {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(modalKey);
  }, items2);
  if (stateFromStores) {
    const obj3 = { source: obj4, style: tmp.background };
    obj4 = { uri: onPressViewBadge(9663) };
    const tmp15 = onPressViewBadge(5957);
    tmp9Result = tmp9(tmp15, obj3);
    tmp12 = onPressViewBadge;
    tmp13 = tmp9;
  } else {
    const obj5 = { source: obj6, poster: onPressViewBadge(9663), style: tmp.background, resizeMode: "contain", muted: true, pauseWhileAppInactive: true, paused: false };
    obj6 = { uri: onPressViewBadge(9694) };
    const VideoComponent = tmp2(9664).VideoComponent;
    tmp9Result = tmp9(VideoComponent, obj5);
    tmp12 = onPressViewBadge;
    tmp13 = tmp9;
  }
  items3 = [tmp9Result, ];
  const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: closure_7(closure_4, obj7) };
  obj7 = { style: tmp.body, children: items4 };
  const SafeAreaPaddingView = tmp2(7351).SafeAreaPaddingView;
  const obj8 = { source: obj9, style: tmp.orbBadge };
  obj9 = { uri: tmp12(10355) };
  const tmp12Result = tmp12(5957);
  items4 = [tmp13(tmp12Result, obj8), ];
  const obj10 = { style: tmp.bottomContainer, children: items6 };
  const obj11 = { style: tmp.textContainer, children: items5 };
  const obj12 = { variant: "heading-xl/semibold", color: "text-overlay-light", style: tmp.text, children: intl.string(modalKey(1113).t.Bal8Cv) };
  const Text = tmp2(5866).Text;
  intl = tmp2(1113).intl;
  items5 = [tmp13(Text, obj12), ];
  const obj13 = { variant: "body-sm/medium", color: "text-overlay-light", style: tmp.text, children: intl2.string(modalKey(1113).t.B25MUf) };
  const Text2 = tmp2(5866).Text;
  intl2 = tmp2(1113).intl;
  items5[1] = tmp13(Text2, obj13);
  items6 = [closure_7(closure_4, obj11), ];
  const obj14 = { style: tmp.buttonsContainer, children: items7 };
  const obj15 = { onPress: callback, variant: "primary", size: "lg", text: intl3.string(modalKey(1113).t.uYLGci) };
  const Button = tmp2(5873).Button;
  intl3 = tmp2(1113).intl;
  items7 = [tmp13(Button, obj15), ];
  const obj16 = { onPress: callback1, variant: "secondary", size: "lg", text: intl4.string(modalKey(1113).t["6gF4aS"]) };
  const Button2 = tmp2(5873).Button;
  intl4 = tmp2(1113).intl;
  items7[1] = tmp13(Button2, obj16);
  items6[1] = closure_7(closure_4, obj14);
  items4[1] = closure_7(closure_4, obj10);
  items3[1] = tmp13(SafeAreaPaddingView, rect);
  return closure_7(closure_4, obj2);
}
({ View: closure_4, StyleSheet } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: { flex: 1 }, background: obj2, orbBadge: { width: 172, height: 172, alignSelf: "center" }, main: { flex: 1 }, body: obj3, bottomContainer: obj4, textContainer: obj5, text: { textAlign: "center" }, buttonsContainer: obj6 };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { paddingTop: "50%", padding: nativeDefault.space.PX_16, flex: 1, justifyContent: "space-between", gap: nativeDefault.space.PX_32 };
obj4 = { alignSelf: "flex-end", alignItems: "stretch", gap: nativeDefault.space.PX_32, width: "100%" };
obj5 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj6 = { alignItems: "stretch", gap: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
const constants = { ROOT: "ROOT" };
let result = size.fileFinishedImporting("modules/collectibles/native/OrbBadgeCollectedModal.tsx");

export default function OrbBadgeCollectedModal(arg0) {
  let modalKey;
  let obj2;
  let onPressViewBadge;
  let orbBalancePriorToPurchase;
  ({ modalKey, onPressViewBadge, orbBalancePriorToPurchase } = arg0);
  const effect = react.useEffect(() => {
    const pinUserProfileBadgesOnClient = modalKey(orbBalancePriorToPurchase[20]).pinUserProfileBadgesOnClient;
    modalKey(orbBalancePriorToPurchase[20]);
    const items = [];
    const obj = modalKey(orbBalancePriorToPurchase[21]);
    items[0] = obj.createOrbProfileBadge();
    const result = pinUserProfileBadgesOnClient(items, 600);
  }, []);
  let obj = { screens: { [closure_9.ROOT]: obj2 }, initialRouteName: constants.ROOT };
  obj2 = {
    render() {
      const obj = { modalKey, onPressViewBadge };
      return metroRequire(OrbBadgeCollectedRootScreen, obj);
    },
    ignoreKeyboard: true,
    fullscreen: true,
    headerLeft() {
      let closure_0 = modalKey;
      let obj = NavigatorHeader;
      return metroRequire(obj.getHeaderCloseButton(() => {
        const obj = onPressViewBadge(orbBalancePriorToPurchase[7]);
        return obj.popWithKey(closure_0);
      }), { tintColor: "white" });
    },
    headerRight() {
      const obj = _mod10370;
      const obj2 = { initialRenderedBalance: orbBalancePriorToPurchase, balance: obj.useFetchVirtualCurrencyBalance().balance };
      return metroRequire(BalanceWidgetPill.BalanceWidgetPill, obj2);
    },
    title: ""
  };
  return closure_6(modalKey(orbBalancePriorToPurchase[22]).Navigator, obj);
};
