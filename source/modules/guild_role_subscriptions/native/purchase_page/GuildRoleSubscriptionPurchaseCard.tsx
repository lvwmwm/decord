// Module ID: 15320
// Function ID: 116832
// Name: GuildRoleSubscriptionPurchaseCard
// Dependencies: [57, 31, 27, 33, 4130, 689, 1557, 14166, 15315, 5187, 4126, 1273, 15321, 5189, 1212, 14176, 2]
// Exports: default

// Module 15320 (GuildRoleSubscriptionPurchaseCard)
import _slicedToArray from "_slicedToArray";
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { padding: 16, paddingBottom: 24 };
let obj1 = { padding: 16, paddingTop: 24, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.content = obj1;
_createForOfIteratorHelperLoose.headerText = { flexDirection: "row", alignItems: "center" };
let obj2 = { width: 3, height: 3, borderRadius: 1.5, backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, marginHorizontal: 8 };
_createForOfIteratorHelperLoose.headerDot = obj2;
let obj3 = { borderBottomWidth: 1, marginLeft: -16, marginRight: -16, borderColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_HOVER };
_createForOfIteratorHelperLoose.seperator = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchaseCard.tsx");

export default function GuildRoleSubscriptionPurchaseCard(guildId) {
  const listingId = guildId.listingId;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = importAll(14166);
  let obj1 = importAll(14166);
  let obj2 = require(15315) /* TruncatedText */;
  const formattedSubscriptionPlan = obj2.useFormattedSubscriptionPlan(listingId);
  obj = { scrollable: true, startExpanded: true };
  obj = { style: tmp.container };
  obj1 = { style: tmp.header };
  obj2 = { style: tmp.headerText };
  const obj3 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: callback(obj1.useName(listingId), 1)[0] };
  const items = [callback2(require(4126) /* Text */.Text, obj3), callback2(View, { style: tmp.headerDot }), ];
  const obj5 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: formattedSubscriptionPlan };
  items[2] = callback2(require(4126) /* Text */.Text, obj5);
  obj2.children = items;
  const items1 = [callback3(View, obj2), callback2(require(1273) /* Button */.Spacer, { size: 16 }), , , ];
  const obj6 = { variant: "text-sm/normal", color: "text-default", lineClamp: 2, children: callback(obj.useDescription(listingId), 1)[0] };
  items1[2] = callback2(require(15315) /* TruncatedText */.TruncatedText, obj6);
  items1[3] = callback2(require(1273) /* Button */.Spacer, { size: 24 });
  items1[4] = callback2(importDefault(15321), { listingId });
  obj1.children = items1;
  const items2 = [callback3(View, obj1), callback2(View, { style: tmp.seperator }), ];
  const obj8 = { scrollsToTop: false, style: tmp.content, contentContainerStyle: obj9 };
  const obj10 = { variant: "text-sm/bold", color: "text-default", style: { textTransform: "uppercase" } };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj10.children = intl.string(require(1212) /* getSystemLocale */.t.UdEvUi);
  const items3 = [callback2(require(4126) /* Text */.Text, obj10), callback2(require(1273) /* Button */.Spacer, { size: 24 }), callback2(require(14176) /* SectionTitle */.Content, { listingId, guildId: guildId.guildId })];
  obj8.children = items3;
  items2[2] = callback3(require(5189) /* BottomSheetModal */.BottomSheetScrollView, obj8);
  obj.children = items2;
  obj.children = callback3(View, obj);
  return callback2(require(5187) /* Background */.BottomSheet, obj);
};
