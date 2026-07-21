// Module ID: 11824
// Function ID: 91665
// Name: screens
// Dependencies: []
// Exports: default

// Module 11824 (screens)
function screens(modalKey, onPressViewBadge, orbBalancePriorToPurchase) {
  onPressViewBadge = modalKey;
  const importDefault = onPressViewBadge;
  const dependencyMap = orbBalancePriorToPurchase;
  const obj = {
    "Bool(true)": true,
    "Bool(true)": true,
    "Bool(true)": true,
    "Bool(true)": true,
    "Bool(true)": true,
    "Bool(true)": true,
    render() {
      return callback(closure_11, { modalKey: arg0, onPressViewBadge: arg1 });
    },
    headerLeft() {
      return function HeaderLeft(arg0) {
        return callback(arg0(closure_2[6]).getHeaderCloseButton(() => callback(closure_2[7]).popWithKey(arg0)), { tintColor: "white" });
      }(arg0);
    },
    headerRight() {
      let obj = arg0(arg2[8]);
      obj = { initialRenderedBalance: arg2, balance: obj.useFetchVirtualCurrencyBalance().balance };
      return callback(arg0(arg2[9]).BalanceWidgetPill, obj);
    }
  };
  return { [closure_9.ROOT]: obj };
}
function OrbBadgeCollectedRootScreen(modalKey) {
  modalKey = modalKey.modalKey;
  const arg1 = modalKey;
  const onPressViewBadge = modalKey.onPressViewBadge;
  const importDefault = onPressViewBadge;
  const tmp = callback3();
  let obj = arg1(dependencyMap[10]);
  const items = [closure_5];
  const items1 = [onPressViewBadge];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items2 = [modalKey];
  const callback = React.useCallback(() => {
    onPressViewBadge();
  }, items1);
  obj = { style: tmp.root };
  const callback1 = React.useCallback(() => {
    onPressViewBadge(closure_2[7]).popWithKey(modalKey);
  }, items2);
  if (stateFromStores) {
    obj = {};
    const obj1 = { uri: importDefault(dependencyMap[12]) };
    obj.source = obj1;
    obj.style = tmp.background;
    let tmp7Result = tmp7(importDefault(dependencyMap[11]), obj);
    const tmp14 = importDefault(dependencyMap[11]);
  } else {
    const obj2 = { translateY: null, translateX: 12, scale: true, width: "/assets/design/components/Icon/native/redesign/generated/images", height: 24, position: 24, borderRadius: null };
    const obj3 = { uri: importDefault(dependencyMap[14]) };
    obj2.source = obj3;
    obj2.poster = importDefault(dependencyMap[12]);
    obj2.style = tmp.background;
    tmp7Result = tmp7(arg1(dependencyMap[13]).VideoComponent, obj2);
  }
  const items3 = [tmp7Result, ];
  const obj4 = { style: tmp.main };
  const obj5 = { style: tmp.body };
  const obj6 = {};
  const obj7 = { uri: importDefault(dependencyMap[16]) };
  obj6.source = obj7;
  obj6.style = tmp.orbBadge;
  const items4 = [callback(importDefault(dependencyMap[11]), obj6), ];
  const obj8 = { style: tmp.bottomContainer };
  const obj9 = { style: tmp.textContainer };
  const obj10 = { style: tmp.text };
  const intl = arg1(dependencyMap[18]).intl;
  obj10.children = intl.string(arg1(dependencyMap[18]).t.Bal8Cv);
  const items5 = [callback(arg1(dependencyMap[17]).Text, obj10), ];
  const obj11 = { style: tmp.text };
  const intl2 = arg1(dependencyMap[18]).intl;
  obj11.children = intl2.string(arg1(dependencyMap[18]).t.B25MUf);
  items5[1] = callback(arg1(dependencyMap[17]).Text, obj11);
  obj9.children = items5;
  const items6 = [callback2(View, obj9), ];
  const obj12 = { style: tmp.buttonsContainer };
  const obj13 = { <string:4217742945>: "RBTree", <string:1655330464>: "currentEmbeddedApplication", <string:1722587473>: "SyntaxError", onPress: callback };
  const intl3 = arg1(dependencyMap[18]).intl;
  obj13.text = intl3.string(arg1(dependencyMap[18]).t.uYLGci);
  const items7 = [callback(arg1(dependencyMap[19]).Button, obj13), ];
  const obj14 = { <string:4217742945>: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012882297944488626, <string:1655330464>: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007645008054038882, <string:1722587473>: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002136451970181684, onPress: callback1 };
  const intl4 = arg1(dependencyMap[18]).intl;
  obj14.text = intl4.string(arg1(dependencyMap[18]).t.6gF4aS);
  items7[1] = callback(arg1(dependencyMap[19]).Button, obj14);
  obj12.children = items7;
  items6[1] = callback2(View, obj12);
  obj8.children = items6;
  items4[1] = callback2(View, obj8);
  obj5.children = items4;
  obj4.children = callback2(View, obj5);
  items3[1] = callback(arg1(dependencyMap[15]).SafeAreaPaddingView, obj4);
  obj.children = items3;
  return callback2(View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { root: { flex: 1 } };
obj = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj.background = obj;
obj.orbBadge = {};
obj.main = { flex: 1 };
const obj1 = { disableControlsUpdate: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003137161066738148, <string:1459331288>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200587491873409, <string:2572247722>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006983507500986238, <string:2861389228>: 15177100720513510000000000000000000000000000000000000000000000000000000000000000000, padding: importDefault(dependencyMap[5]).space.PX_16, gap: importDefault(dependencyMap[5]).space.PX_32 };
obj.body = obj1;
const obj2 = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, gap: importDefault(dependencyMap[5]).space.PX_32 };
obj.bottomContainer = obj2;
const tmp3 = arg1(dependencyMap[3]);
obj.textContainer = { alignItems: "center", gap: importDefault(dependencyMap[5]).space.PX_8 };
obj.text = { textAlign: "center" };
const obj3 = { alignItems: "center", gap: importDefault(dependencyMap[5]).space.PX_8 };
obj.buttonsContainer = { alignItems: "stretch", gap: importDefault(dependencyMap[5]).space.PX_16 };
let closure_8 = obj.createStyles(obj);
let closure_9 = { ROOT: "ROOT" };
const obj4 = { alignItems: "stretch", gap: importDefault(dependencyMap[5]).space.PX_16 };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/collectibles/native/OrbBadgeCollectedModal.tsx");

export default function OrbBadgeCollectedModal(arg0) {
  let modalKey;
  let onPressViewBadge;
  let orbBalancePriorToPurchase;
  ({ modalKey, onPressViewBadge, orbBalancePriorToPurchase } = arg0);
  const effect = React.useEffect(() => {
    const obj = callback(closure_2[20]);
    const items = [callback(closure_2[21]).createOrbProfileBadge()];
    const result = obj.pinUserProfileBadgesOnClient(items, 600);
  }, []);
  const obj = { screens: screens(modalKey, onPressViewBadge, orbBalancePriorToPurchase), initialRouteName: constants.ROOT };
  return callback(arg1(dependencyMap[22]).Navigator, obj);
};
