// Module ID: 11729
// Function ID: 91046
// Name: ContactSyncInviteFriends
// Dependencies: [31, 27, 1849, 653, 33, 4130, 689, 566, 5085, 11730, 4126, 1212, 4543, 675, 3969, 8332, 2]
// Exports: default

// Module 11729 (ContactSyncInviteFriends)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ AnalyticEvents: closure_5, AnalyticsSections: closure_6 } = ME);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 }, art: { marginBottom: 16 }, title: { marginBottom: 8, textAlign: "center" }, subtitle: { lineHeight: 18, textAlign: "center" } };
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.button = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncInviteFriends.tsx");

export default function ContactSyncInviteFriends() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  _require = obj.useStateFromStores(items, () => outer1_4.getCurrentUser());
  obj = {};
  obj = { style: tmp.container };
  const obj1 = { style: tmp.art, source: importDefault(11730) };
  const items1 = [callback(importDefault(5085), obj1), , ];
  const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  let intl = _require(1212).intl;
  obj2.children = intl.string(_require(1212).t.ZxBpLf);
  items1[1] = callback(_require(4126).Text, obj2);
  const obj3 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default" };
  const intl2 = _require(1212).intl;
  obj3.children = intl2.string(_require(1212).t["fXtCJ+"]);
  items1[2] = callback(_require(4126).Text, obj3);
  obj.children = items1;
  const items2 = [callback2(View, obj), ];
  let obj4 = { style: tmp.button };
  const obj5 = { variant: "primary", size: "lg" };
  const intl3 = _require(1212).intl;
  obj5.text = intl3.string(_require(1212).t["6Qgrev"]);
  obj5.onPress = function onPress() {
    let obj = outer1_1(outer1_2[13]);
    obj = { friend_add_type: "Invite", source_page: outer1_6.CONTACT_SYNC_MODAL };
    obj.track(outer1_5.FRIEND_ADD_VIEWED, obj);
    const intl = callback(outer1_2[11]).intl;
    obj = { url: "https://discord.com/" };
    let str = "";
    if (null != callback) {
      str = outer1_1(outer1_2[14]).getUserTag(callback);
      const obj4 = outer1_1(outer1_2[14]);
    }
    obj.username = str;
    const formatToPlainStringResult = intl.formatToPlainString(callback(outer1_2[11]).t["6E9a1J"], obj);
    callback(outer1_2[15]).showShareActionSheet({ message: formatToPlainStringResult }, outer1_6.CONTACT_SYNC_MODAL);
  };
  obj4.children = callback(_require(4543).Button, obj5);
  items2[1] = callback(View, obj4);
  obj.children = items2;
  return callback2(closure_9, obj);
};
