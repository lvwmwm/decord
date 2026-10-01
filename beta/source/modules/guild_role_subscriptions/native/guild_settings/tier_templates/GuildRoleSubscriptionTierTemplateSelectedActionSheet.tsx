// Module ID: 17605
// Function ID: 17606
// Name: GuildRoleSubscriptionTierTemplateSelectedActionSheet
// Dependencies: [19, 17, 2042, 21, 4836, 576, 1613, 6571, 6045, 4832, 1115, 1177, 5282, 2]
// Exports: default

// Module 17605 (GuildRoleSubscriptionTierTemplateSelectedActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, button: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.xs };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateSelectedActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplateSelectedActionSheet(markAsDismissed) {
  let BottomSheetScrollView;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj2;
  let obj3;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_7();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = {
    backdropOpacity: 0.8,
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    children: closure_5(View, obj2)
  };
  obj2 = { style: tmp.container, children: closure_6(BottomSheetScrollView, obj3) };
  BottomSheet = markAsDismissed(6571).BottomSheet;
  obj3 = { contentContainerStyle: { paddingBottom: bottom }, children: items };
  BottomSheetScrollView = markAsDismissed(6045).BottomSheetScrollView;
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(markAsDismissed(1115).t.Y0PTc0) };
  const Text = markAsDismissed(4832).Text;
  intl = markAsDismissed(1115).intl;
  items = [closure_5(Text, obj4), closure_5(markAsDismissed(1177).Spacer, { size: 12 }), , , ];
  const obj5 = { variant: "text-sm/normal", color: "text-default", children: intl2.string(markAsDismissed(1115).t["YSI/1/"]) };
  const Text2 = markAsDismissed(4832).Text;
  intl2 = markAsDismissed(1115).intl;
  items[2] = closure_5(Text2, obj5);
  items[3] = closure_5(markAsDismissed(1177).Spacer, { size: 48 });
  const obj6 = {
    text: intl3.string(markAsDismissed(1115).t.MhldXX),
    pillStyle: tmp.button,
    onPress() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    grow: true
  };
  const BaseTextButton = markAsDismissed(5282).BaseTextButton;
  intl3 = markAsDismissed(1115).intl;
  items[4] = closure_5(BaseTextButton, obj6);
  return closure_5(BottomSheet, obj);
};
