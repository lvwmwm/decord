// Module ID: 19928
// Function ID: 19929
// Name: GuildRoleSubscriptionTierTemplateSelectedActionSheet
// Dependencies: [19, 17, 4855, 21, 5009, 575, 1626, 5267, 5270, 5619, 1114, 1188, 5629, 2]
// Exports: default

// Module 19928 (GuildRoleSubscriptionTierTemplateSelectedActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
let closure_7 = createStyles.createStyles(obj);
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
  BottomSheet = markAsDismissed(5267).BottomSheet;
  obj3 = { contentContainerStyle: { paddingBottom: bottom }, children: items };
  BottomSheetScrollView = markAsDismissed(5270).BottomSheetScrollView;
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(markAsDismissed(1114).t.Y0PTc0) };
  const Text = markAsDismissed(5619).Text;
  intl = markAsDismissed(1114).intl;
  items = [closure_5(Text, obj4), closure_5(markAsDismissed(1188).Spacer, { size: 12 }), , , ];
  const obj5 = { variant: "text-sm/normal", color: "text-default", children: intl2.string(markAsDismissed(1114).t["YSI/1/"]) };
  const Text2 = markAsDismissed(5619).Text;
  intl2 = markAsDismissed(1114).intl;
  items[2] = closure_5(Text2, obj5);
  items[3] = closure_5(markAsDismissed(1188).Spacer, { size: 48 });
  const obj6 = {
    text: intl3.string(markAsDismissed(1114).t.MhldXX),
    onPress() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    grow: true
  };
  const Button = markAsDismissed(5629).Button;
  intl3 = markAsDismissed(1114).intl;
  items[4] = closure_5(Button, obj6);
  return closure_5(BottomSheet, obj);
};
