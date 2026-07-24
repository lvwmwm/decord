// Module ID: 16199
// Function ID: 125553
// Name: ConnectGuardianShareScreen
// Dependencies: [31, 27, 6769, 33, 4130, 689, 1212, 2198, 3830, 4337, 11088, 624, 13834, 7613, 7614, 4541, 4126, 13835, 5584, 5087, 11100, 2]
// Exports: default

// Module 16199 (ConnectGuardianShareScreen)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function ConnectGuardianShareScreen() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = getLinkCode(1212);
  const syncMessages = obj.useSyncMessages(getLinkCode(2198).messagesLoader);
  const callback = React.useCallback(() => {
    const intl = getLinkCode(outer1_2[6]).intl;
    getLinkCode(outer1_2[8]).presentFailedToast(intl.string(getLinkCode(outer1_2[6]).t.R0RpRX));
    let arr = outer1_1(outer1_2[9]);
    arr = arr.pop();
  }, []);
  let obj1 = getLinkCode(11088);
  getLinkCode = obj1.useFamilyCenterActions({ onError: callback }).getLinkCode;
  let obj2 = getLinkCode(624);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj2.useStateFromStores(items, () => outer1_5.getLinkCode());
  let obj3 = getLinkCode(624);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => outer1_5.getLinkCodeExpiresAt());
  const effect = React.useEffect(() => {
    getLinkCode();
  }, []);
  importDefault(13834)(importDefault(4337).pop);
  obj = {};
  obj = {};
  obj1 = { spacing: importDefault(689).space.PX_40 };
  obj2 = { spacing: importDefault(689).space.PX_8 };
  obj3 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header" };
  let intl = getLinkCode(1212).intl;
  obj3.children = intl.string(importDefault(2198).ITlV6p);
  const items2 = [callback(getLinkCode(4126).Text, obj3), ];
  const obj4 = { style: tmp.body, variant: "text-sm/medium", color: "text-muted" };
  const intl2 = getLinkCode(1212).intl;
  obj4.children = intl2.format(importDefault(2198).F4GT2S, { link: "https://support.discord.com/hc/articles/14155060633623" });
  items2[1] = callback(getLinkCode(4126).Text, obj4);
  obj2.children = items2;
  const items3 = [callback2(getLinkCode(4541).Stack, obj2), ];
  const obj5 = { spacing: importDefault(689).space.PX_24, style: tmp.cardSection };
  const obj6 = { style: tmp.qrLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary" };
  const intl3 = getLinkCode(1212).intl;
  obj6.children = intl3.string(importDefault(2198).pojgfk);
  const items4 = [callback(getLinkCode(4126).Text, obj6), ];
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      const obj7 = { shareActions: "full", linkCode: stateFromStores, expiresAt: stateFromStores1, onRefresh: getLinkCode };
      let tmp13 = callback(getLinkCode(13835).ConnectGuardianCard, obj7);
    }
    items4[1] = tmp13;
    obj5.children = items4;
    items3[1] = tmp12(getLinkCode(4541).Stack, obj5);
    obj1.children = items3;
    obj.children = tmp11(getLinkCode(4541).Stack, obj1);
    obj.children = tmp10(getLinkCode(7614).ModalContent, obj);
    return tmp9(getLinkCode(7613).ModalScreen, obj);
  }
  tmp10 = callback;
  tmp11 = callback2;
  tmp12 = callback2;
  const tmp7 = importDefault(13834);
  tmp9 = callback;
  tmp13 = callback(View, { style: tmp.loading, children: callback(getLinkCode(5584).ActivityIndicator, {}) });
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { title: { textAlign: "center" }, body: { textAlign: "center" }, qrLabel: { textAlign: "center" }, cardSection: { alignItems: "center" } };
_createForOfIteratorHelperLoose = { alignItems: "center", justifyContent: "center", paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.loading = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/parent_tools/native/ConnectGuardianShareModal.tsx");

export default function ConnectGuardianShareModal() {
  const memo = React.useMemo(() => (function getScreens() {
    let obj = {};
    obj = {
      headerShown: true,
      headerLeft: outer2_0(outer2_2[19]).getHeaderBackButton(outer2_1(outer2_2[9]).pop),
      headerTitle() {
        return null;
      },
      render() {
        return outer3_6(outer3_9, {});
      }
    };
    obj.CONNECT_GUARDIAN_SHARE = obj;
    return obj;
  })(), []);
  let obj = { initialRouteName: "CONNECT_GUARDIAN_SHARE", screens: memo };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.headerBackTitle = intl.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
  return callback(require(11100) /* Modal */.Modal, obj);
};
