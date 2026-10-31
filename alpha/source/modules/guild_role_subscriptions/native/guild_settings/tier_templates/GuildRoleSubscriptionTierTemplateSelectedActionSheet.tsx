// Module ID: 19986
// Function ID: 19987
// Name: GuildRoleSubscriptionTierTemplateSelectedActionSheet
// Dependencies: [19, 17, 4860, 21, 5014, 575, 5272, 6027, 5624, 1113, 5634, 2]
// Exports: default

// Module 19986 (GuildRoleSubscriptionTierTemplateSelectedActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { content: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_24, paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateSelectedActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplateSelectedActionSheet(markAsDismissed) {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj2;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const obj = {
    backdropOpacity: 0.8,
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    children: closure_6(View, obj2)
  };
  obj2 = { style: closure_7().content, children: items1 };
  BottomSheet = markAsDismissed(5272).BottomSheet;
  const obj3 = { spacing: nativeDefault.space.PX_8, children: items };
  const Stack = markAsDismissed(6027).Stack;
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(markAsDismissed(1113).t.Y0PTc0) };
  const Text = markAsDismissed(5624).Text;
  intl = markAsDismissed(1113).intl;
  items = [closure_5(Text, obj4), ];
  const obj5 = { variant: "text-sm/normal", color: "text-default", children: intl2.string(markAsDismissed(1113).t["YSI/1/"]) };
  const Text2 = markAsDismissed(5624).Text;
  intl2 = markAsDismissed(1113).intl;
  items[1] = closure_5(Text2, obj5);
  items1 = [closure_6(Stack, obj3), ];
  const obj6 = {
    text: intl3.string(markAsDismissed(1113).t.MhldXX),
    onPress() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    grow: true
  };
  const Button = markAsDismissed(5634).Button;
  intl3 = markAsDismissed(1113).intl;
  items1[1] = closure_5(Button, obj6);
  return closure_5(BottomSheet, obj);
};
