// Module ID: 16451
// Function ID: 128225
// Name: GuildRoleSubscriptionBenefitModalHeader
// Dependencies: [57, 31, 27, 653, 33, 4130, 689, 5052, 14116, 5121, 8474, 4126, 1212, 1273, 2]
// Exports: default

// Module 16451 (GuildRoleSubscriptionBenefitModalHeader)
import _slicedToArray from "_slicedToArray";
import "result";
import { View } from "get ActivityIndicator";
import { Fonts } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";
import importDefaultResult2 from "createTextStyle";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, flexDirection: "row", justifyContent: "space-between", paddingBottom: 8, paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.headerContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerButtonContainer = { flexDirection: "row", alignSelf: "center", minWidth: 60 };
_createForOfIteratorHelperLoose.headerButtonStart = { alignItems: "flex-start" };
_createForOfIteratorHelperLoose.headerButtonEnd = { alignItems: "flex-end" };
const merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE, 16));
_createForOfIteratorHelperLoose.headerButton = {};
let obj1 = {};
let obj2 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, 16));
_createForOfIteratorHelperLoose.disabledButton = obj2;
_createForOfIteratorHelperLoose.titleContainer = { flex: 1, flexDirection: "column" };
let obj3 = {};
const merged2 = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj3["textAlign"] = "center";
_createForOfIteratorHelperLoose.title = obj3;
_createForOfIteratorHelperLoose.subtitle = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitModalHeader.tsx");

export default function GuildRoleSubscriptionBenefitModalHeader(canSave) {
  let listingId;
  let onClose;
  let onSave;
  let title;
  canSave = canSave.canSave;
  ({ title, onSave, onClose, listingId } = canSave);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = importAll(14116);
  obj = { top: true, style: tmp.headerContainer };
  obj = { style: items, accessibilityRole: "button", onPress: onClose };
  items = [, ];
  ({ headerButtonContainer: arr[0], headerButtonStart: arr[1] } = tmp);
  const obj1 = { style: tmp.headerButton, variant: "text-md/medium", color: "interactive-text-active" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  obj.children = callback2(require(4126) /* Text */.Text, obj1);
  const items1 = [callback2(importDefault(8474), obj), , ];
  const obj2 = { style: tmp.titleContainer };
  const items2 = [callback2(require(1273) /* Button */.LegacyText, { style: tmp.title, accessibilityRole: "header", children: title }), ];
  const obj4 = { style: tmp.subtitle, variant: "text-xs/medium", color: "text-default", children: callback(obj.useName(listingId), 1)[0] };
  items2[1] = callback2(require(4126) /* Text */.Text, obj4);
  obj2.children = items2;
  items1[1] = callback3(View, obj2);
  const obj5 = { style: items3, accessibilityRole: "button", disabled: !canSave, onPress: onSave };
  items3 = [, ];
  ({ headerButtonContainer: arr4[0], headerButtonEnd: arr4[1] } = tmp);
  const obj3 = { style: tmp.title, accessibilityRole: "header", children: title };
  const tmp2 = callback3;
  const tmp4 = importDefault(8474);
  const obj6 = {};
  const items4 = [tmp.headerButton, ];
  let disabledButton = !canSave;
  if (disabledButton) {
    disabledButton = tmp.disabledButton;
  }
  items4[1] = disabledButton;
  obj6.style = items4;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj6.children = intl2.string(require(1212) /* getSystemLocale */.t["R3BPH+"]);
  obj5.children = callback2(require(1273) /* Button */.LegacyText, obj6);
  items1[2] = callback2(importDefault(8474), obj5);
  obj.children = items1;
  return tmp2(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
};
