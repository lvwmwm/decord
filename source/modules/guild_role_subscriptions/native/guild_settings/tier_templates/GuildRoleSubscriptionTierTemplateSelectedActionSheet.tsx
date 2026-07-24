// Module ID: 16519
// Function ID: 128672
// Name: GuildRoleSubscriptionTierTemplateSelectedActionSheet
// Dependencies: [31, 27, 1345, 33, 4130, 689, 1557, 5187, 5189, 4126, 1212, 1273, 4544, 2]
// Exports: default

// Module 16519 (GuildRoleSubscriptionTierTemplateSelectedActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.button = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
const result = require("ContentDismissActionType").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateSelectedActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplateSelectedActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {
    backdropOpacity: 0.8,
    onDismiss() {
      return markAsDismissed(outer1_4.UNKNOWN);
    }
  };
  obj = { style: tmp.container };
  obj = { contentContainerStyle: { paddingBottom: importDefault(1557)().bottom } };
  const obj1 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary" };
  const intl = markAsDismissed(1212).intl;
  obj1.children = intl.string(markAsDismissed(1212).t.Y0PTc0);
  const items = [callback(markAsDismissed(4126).Text, obj1), callback(markAsDismissed(1273).Spacer, { size: 12 }), , , ];
  const obj2 = { variant: "text-sm/normal", color: "text-default" };
  const intl2 = markAsDismissed(1212).intl;
  obj2.children = intl2.string(markAsDismissed(1212).t["YSI/1/"]);
  items[2] = callback(markAsDismissed(4126).Text, obj2);
  items[3] = callback(markAsDismissed(1273).Spacer, { size: 48 });
  const obj3 = {};
  const intl3 = markAsDismissed(1212).intl;
  obj3.text = intl3.string(markAsDismissed(1212).t.MhldXX);
  obj3.pillStyle = tmp.button;
  obj3.onPress = function onPress() {
    return markAsDismissed(outer1_4.UNKNOWN);
  };
  obj3.grow = true;
  items[4] = callback(markAsDismissed(4544).BaseTextButton, obj3);
  obj.children = items;
  obj.children = callback2(markAsDismissed(5189).BottomSheetScrollView, obj);
  obj.children = callback(View, obj);
  return callback(markAsDismissed(5187).BottomSheet, obj);
};
