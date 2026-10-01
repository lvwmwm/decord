// Module ID: 9728
// Function ID: 9729
// Name: MediaPostMultipleThumbnailActionSheet
// Dependencies: [19, 17, 2042, 21, 4836, 576, 1613, 6571, 6045, 4832, 1115, 1177, 5281, 2]
// Exports: default

// Module 9728 (MediaPostMultipleThumbnailActionSheet)
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
let obj4;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, topContainer: obj3, setAsThumbnailContainer: obj4, contentContainer: { alignItems: "center", flex: 1 }, title: { marginTop: 24 }, description: { textAlign: "center" } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, width: "100%", paddingVertical: 40, paddingHorizontal: 12, backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING, borderRadius: nativeDefault.radii.sm };
obj4 = { flex: 1, flexDirection: "row", padding: 12, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm, alignItems: "center", justifyContent: "space-between" };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/media_channel/native/MediaPostMultipleThumbnailActionSheet.tsx");

export default function MediaPostThumbnailActionSheet(markAsDismissed) {
  let BottomSheetScrollView;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  let obj2;
  let obj3;
  let obj5;
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
  obj3 = { contentContainerStyle: items, children: items2 };
  items = [tmp.contentContainer, { paddingBottom: bottom }];
  const obj4 = { style: tmp.topContainer, children: closure_6(View, obj5) };
  obj5 = { style: tmp.setAsThumbnailContainer, children: items1 };
  BottomSheetScrollView = markAsDismissed(6045).BottomSheetScrollView;
  const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl.string(markAsDismissed(1115).t.ews2pj) };
  const Text = markAsDismissed(4832).Text;
  intl = markAsDismissed(1115).intl;
  items1 = [closure_5(Text, obj6), closure_5(markAsDismissed(1177).Checkbox, { selected: true })];
  items2 = [closure_5(View, obj4), , , , , ];
  const obj7 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.title, children: intl2.string(markAsDismissed(1115).t.WJisip) };
  const Text2 = markAsDismissed(4832).Text;
  intl2 = markAsDismissed(1115).intl;
  items2[1] = closure_5(Text2, obj7);
  items2[2] = closure_5(markAsDismissed(1177).Spacer, { size: 12 });
  const obj8 = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: intl3.string(markAsDismissed(1115).t.X6ZH6d) };
  const Text3 = markAsDismissed(4832).Text;
  intl3 = markAsDismissed(1115).intl;
  items2[3] = closure_5(Text3, obj8);
  items2[4] = closure_5(markAsDismissed(1177).Spacer, { size: 48 });
  const obj9 = {
    text: intl4.string(markAsDismissed(1115).t["NX+WJN"]),
    grow: true,
    onPress() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    }
  };
  const Button = markAsDismissed(5281).Button;
  intl4 = markAsDismissed(1115).intl;
  items2[5] = closure_5(Button, obj9);
  return closure_5(BottomSheet, obj);
};
