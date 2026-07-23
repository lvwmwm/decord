// Module ID: 11835
// Function ID: 91740
// Name: screens
// Dependencies: [31, 27, 4122, 33, 4130, 689, 5087, 4337, 8722, 9786, 566, 5085, 10931, 8302, 10932, 5121, 8716, 4126, 1212, 4543, 7847, 8719, 5519, 2]
// Exports: default

// Module 11835 (screens)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function screens(modalKey, onPressViewBadge, orbBalancePriorToPurchase) {
  let closure_0 = modalKey;
  let closure_1 = onPressViewBadge;
  let closure_2 = orbBalancePriorToPurchase;
  let obj = {
    render() {
      return outer1_6(outer1_11, { modalKey: closure_0, onPressViewBadge: closure_1 });
    },
    ignoreKeyboard: true,
    fullscreen: true,
    headerLeft() {
      return (function HeaderLeft(closure_0) {
        const callback = closure_0;
        return outer2_6(callback(table[6]).getHeaderCloseButton(() => callback(table[7]).popWithKey(closure_0)), { tintColor: "white" });
      })(closure_0);
    },
    headerRight() {
      let obj = modalKey(orbBalancePriorToPurchase[8]);
      obj = { initialRenderedBalance: orbBalancePriorToPurchase, balance: obj.useFetchVirtualCurrencyBalance().balance };
      return outer1_6(modalKey(orbBalancePriorToPurchase[9]).BalanceWidgetPill, obj);
    },
    title: ""
  };
  return { [closure_9.ROOT]: obj };
}
function OrbBadgeCollectedRootScreen(modalKey) {
  modalKey = modalKey.modalKey;
  const onPressViewBadge = modalKey.onPressViewBadge;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = modalKey(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [onPressViewBadge];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.useReducedMotion);
  const items2 = [modalKey];
  const callback = React.useCallback(() => {
    onPressViewBadge();
  }, items1);
  obj = { style: tmp.root };
  const callback1 = React.useCallback(() => {
    onPressViewBadge(outer1_2[7]).popWithKey(modalKey);
  }, items2);
  if (stateFromStores) {
    obj = {};
    const obj1 = { uri: onPressViewBadge(10931) };
    obj.source = obj1;
    obj.style = tmp.background;
    let tmp7Result = tmp7(onPressViewBadge(5085), obj);
    const tmp14 = onPressViewBadge(5085);
  } else {
    const obj2 = { source: null, poster: null, style: null, resizeMode: "contain", muted: true, pauseWhileAppInactive: true, paused: false };
    const obj3 = { uri: onPressViewBadge(10932) };
    obj2.source = obj3;
    obj2.poster = onPressViewBadge(10931);
    obj2.style = tmp.background;
    tmp7Result = tmp7(modalKey(8302).VideoComponent, obj2);
  }
  const items3 = [tmp7Result, ];
  const obj4 = { style: tmp.main, top: true, bottom: true, left: true, right: true };
  const obj5 = { style: tmp.body };
  const obj6 = {};
  const obj7 = { uri: onPressViewBadge(8716) };
  obj6.source = obj7;
  obj6.style = tmp.orbBadge;
  const items4 = [callback(onPressViewBadge(5085), obj6), ];
  const obj8 = { style: tmp.bottomContainer };
  const obj9 = { style: tmp.textContainer };
  const obj10 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp.text };
  const intl = modalKey(1212).intl;
  obj10.children = intl.string(modalKey(1212).t.Bal8Cv);
  const items5 = [callback(modalKey(4126).Text, obj10), ];
  const obj11 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.text };
  const intl2 = modalKey(1212).intl;
  obj11.children = intl2.string(modalKey(1212).t.B25MUf);
  items5[1] = callback(modalKey(4126).Text, obj11);
  obj9.children = items5;
  const items6 = [callback2(View, obj9), ];
  const obj12 = { style: tmp.buttonsContainer };
  const obj13 = { onPress: callback, variant: "primary", size: "lg" };
  const intl3 = modalKey(1212).intl;
  obj13.text = intl3.string(modalKey(1212).t.uYLGci);
  const items7 = [callback(modalKey(4543).Button, obj13), ];
  const obj14 = { onPress: callback1, variant: "secondary", size: "lg" };
  const intl4 = modalKey(1212).intl;
  obj14.text = intl4.string(modalKey(1212).t["6gF4aS"]);
  items7[1] = callback(modalKey(4543).Button, obj14);
  obj12.children = items7;
  items6[1] = callback2(View, obj12);
  obj8.children = items6;
  items4[1] = callback2(View, obj8);
  obj5.children = items4;
  obj4.children = callback2(View, obj5);
  items3[1] = callback(modalKey(5121).SafeAreaPaddingView, obj4);
  obj.children = items3;
  return callback2(View, obj);
}
const View = get_ActivityIndicator.View;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { root: { flex: 1 } };
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose.background = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.orbBadge = { width: 172, height: 172, alignSelf: "center" };
_createForOfIteratorHelperLoose.main = { flex: 1 };
let obj1 = { paddingTop: "50%", padding: require("_createForOfIteratorHelperLoose").space.PX_16, flex: 1, justifyContent: "space-between", gap: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.body = obj1;
let obj2 = { alignSelf: "flex-end", alignItems: "stretch", gap: require("_createForOfIteratorHelperLoose").space.PX_32, width: "100%" };
_createForOfIteratorHelperLoose.bottomContainer = obj2;
_createForOfIteratorHelperLoose.textContainer = { alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.text = { textAlign: "center" };
let obj3 = { alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.buttonsContainer = { alignItems: "stretch", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_9 = { ROOT: "ROOT" };
let obj4 = { alignItems: "stretch", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/OrbBadgeCollectedModal.tsx");

export default function OrbBadgeCollectedModal(arg0) {
  let modalKey;
  let onPressViewBadge;
  let orbBalancePriorToPurchase;
  ({ modalKey, onPressViewBadge, orbBalancePriorToPurchase } = arg0);
  const effect = React.useEffect(() => {
    const obj = outer1_0(outer1_2[20]);
    const items = [outer1_0(outer1_2[21]).createOrbProfileBadge()];
    const result = obj.pinUserProfileBadgesOnClient(items, 600);
  }, []);
  let obj = { screens: screens(modalKey, onPressViewBadge, orbBalancePriorToPurchase), initialRouteName: constants.ROOT };
  return callback(require(5519) /* NavigationStack */.Navigator, obj);
};
