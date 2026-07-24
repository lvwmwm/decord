// Module ID: 13833
// Function ID: 105989
// Name: ConnectGuardianBottomSheet
// Dependencies: [31, 27, 6769, 6770, 33, 4130, 689, 624, 4098, 13834, 5187, 4126, 1212, 2198, 13835, 4543, 2]
// Exports: default

// Module 13833 (ConnectGuardianBottomSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CONNECT_GUARDIAN_BOTTOM_SHEET_KEY as closure_6 } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_24, gap: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.info = { alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.centered = { textAlign: "center" };
_createForOfIteratorHelperLoose.cardContainer = { alignItems: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/parent_tools/native/ConnectGuardianBottomSheet.tsx");

export default function ConnectGuardianBottomSheet(onRefresh) {
  let body;
  let expiresAt;
  let linkCode;
  let title;
  ({ linkCode, expiresAt, title, body } = onRefresh);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getLinkCode());
  let obj1 = require(624) /* defaultAreStatesEqual */;
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_5.getLinkCodeExpiresAt());
  if (null != stateFromStores) {
    linkCode = stateFromStores;
  }
  if (null != stateFromStores1) {
    expiresAt = stateFromStores1;
  }
  const callback = React.useCallback(() => {
    outer1_1(outer1_2[8]).hideActionSheet(outer1_6);
  }, []);
  importDefault(13834)(callback);
  obj = { startExpanded: true };
  obj = { style: tmp.container };
  obj1 = { style: tmp.info };
  const obj2 = { style: tmp.centered, accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary" };
  if (null == title) {
    const intl = require(1212) /* getSystemLocale */.intl;
    title = intl.string(importDefault(2198).aCUVfL);
  }
  obj2.children = title;
  const items2 = [callback(require(4126) /* Text */.Text, obj2), ];
  const obj3 = { style: tmp.centered, variant: "text-md/medium", color: "text-default" };
  if (null == body) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj4 = { link: "https://support.discord.com/hc/articles/14155060633623" };
    body = intl2.format(importDefault(2198)["2O6ltn"], obj4);
  }
  obj3.children = body;
  items2[1] = callback(require(4126) /* Text */.Text, obj3);
  obj1.children = items2;
  const items3 = [closure_8(View, obj1), , ];
  const obj6 = { linkCode, expiresAt, onRefresh: onRefresh.onRefresh };
  items3[1] = callback(View, { style: tmp.cardContainer, children: callback(require(13835) /* ConnectGuardianCard */.ConnectGuardianCard, obj6) });
  const obj7 = { variant: "secondary", size: "md" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj7.text = intl3.string(importDefault(2198).Hsm5IF);
  obj7.onPress = callback;
  items3[2] = callback(require(4543) /* Button */.Button, obj7);
  obj.children = items3;
  obj.children = closure_8(View, obj);
  return callback(require(5187) /* Background */.BottomSheet, obj);
};
