// Module ID: 11451
// Function ID: 11452
// Name: CustomTypingIndicatorAnnounceActionSheet
// Dependencies: [19, 17, 1074, 2042, 21, 4836, 576, 6800, 6571, 6544, 6575, 11452, 1380, 11454, 11455, 11456, 11457, 11458, 11459, 11460, 1177, 1115, 4832, 3717, 5281, 2]
// Exports: default

// Module 11451 (CustomTypingIndicatorAnnounceActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import openUserSettings from "openUserSettings" /* 6800 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles(() => {
  const obj = { content: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 }, examples: { width: "100%", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 }, betaBadge: { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, paddingVertical: 0 }, title: { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 }, body: { textAlign: "center", marginBottom: nativeDefault.space.PX_24 }, actions: { gap: nativeDefault.space.PX_12, width: "100%" }, row: { alignSelf: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderWidth: 1, borderRadius: nativeDefault.radii.md }, outerRow: { padding: nativeDefault.space.PX_8, opacity: 0.75 }, innerRow: { padding: nativeDefault.space.PX_10 }, outerStack: { width: "auto", maxWidth: "80%", overflow: "hidden" }, innerStack: { width: "auto", maxWidth: "100%", overflow: "hidden" } };
  ({ alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 });
  ({ width: "100%", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 });
  ({ marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, paddingVertical: 0 });
  ({ textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 });
  ({ textAlign: "center", marginBottom: nativeDefault.space.PX_24 });
  ({ gap: nativeDefault.space.PX_12, width: "100%" });
  ({ alignSelf: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderWidth: 1, borderRadius: nativeDefault.radii.md });
  ({ padding: nativeDefault.space.PX_8, opacity: 0.75 });
  ({ padding: nativeDefault.space.PX_10 });
  return obj;
});
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnnounceActionSheet.tsx");

export default function CustomTypingIndicatorAnnounceActionSheet(markAsDismissed) {
  let SafeAreaPaddingView;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items10;
  let items11;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj11;
  let obj2;
  let obj3;
  let obj7;
  let obj9;
  let tmp6;
  let tmp7;
  let tmp8;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const ref = react.useRef(null);
  const tmp2 = closure_9();
  const items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = react.useCallback(() => {
    const obj = openUserSettings;
    const obj2 = { screen: UserSettingsSections.TYPING_INDICATOR, params: { source: "announcement_sheet" } };
    obj.openUserSettings(obj2, () => {
      markAsDismissed(constants.TAKE_ACTION);
    });
  }, items);
  const items2 = [markAsDismissed];
  const callback1 = react.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const callback2 = react.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items2);
  let obj = { ref, onDismiss: callback2, startExpanded: true, handleDisabled: true, children: closure_7(SafeAreaPaddingView, obj2) };
  BottomSheet = markAsDismissed(6571).BottomSheet;
  obj2 = { bottom: true, children: closure_8(View, obj3) };
  obj3 = { style: tmp2.content, children: items3 };
  SafeAreaPaddingView = markAsDismissed(6544).SafeAreaPaddingView;
  items3 = [, , , , , ];
  const obj4 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    }
  };
  items3[0] = closure_7(markAsDismissed(6575).ActionSheetHeaderBar, obj4);
  const obj5 = { style: tmp2.examples, children: items6 };
  const obj6 = { style: items4, children: closure_7(tmp6, obj7) };
  items4 = [, ];
  ({ row: arr5[0], outerRow: arr5[1] } = tmp2);
  obj7 = { name: "Cap", suggestion: markAsDismissed(1380).TypingSuggestion.UNSPECIFIED, emojiSize: 24, spacing: 8, textVariant: "text-md/medium", textColor: "text-subtle", lineClamp: 1, emojiSource: items5, style: tmp2.outerStack };
  tmp6 = ref(11452);
  items5 = [ref(11454), ref(11455), ref(11454)];
  items6 = [closure_7(View, obj6), , ];
  const obj8 = { style: items7, children: closure_7(tmp7, obj9) };
  items7 = [, ];
  ({ row: arr8[0], innerRow: arr8[1] } = tmp2);
  obj9 = { name: "Rose", suggestion: markAsDismissed(1380).TypingSuggestion.YAPPING, emojiSize: 28, spacing: 10, textVariant: "text-lg/medium", textColor: "text-default", lineClamp: 1, style: tmp2.innerStack, emojiSource: items8 };
  tmp7 = ref(11452);
  items8 = [ref(11456), ref(11457), ref(11456)];
  items6[1] = closure_7(View, obj8);
  const obj10 = { style: items9, children: closure_7(tmp8, obj11) };
  items9 = [, ];
  ({ row: arr10[0], outerRow: arr10[1] } = tmp2);
  obj11 = { name: "Loky", suggestion: markAsDismissed(1380).TypingSuggestion.OVERSHARING, emojiSize: 24, spacing: 8, textVariant: "text-md/medium", textColor: "text-subtle", lineClamp: 1, style: tmp2.outerStack, emojiSource: items10 };
  tmp8 = ref(11452);
  items10 = [ref(11458), ref(11459), ref(11460)];
  items6[2] = closure_7(View, obj10);
  items3[1] = closure_8(View, obj5);
  const obj12 = { text: intl.string(markAsDismissed(1115).t.oW0eUd), color: markAsDismissed(1177).BadgeColors.EXPRESSIVE, style: tmp2.betaBadge };
  const TextBadge = markAsDismissed(1177).TextBadge;
  intl = markAsDismissed(1115).intl;
  items3[2] = closure_7(TextBadge, obj12);
  const obj13 = { variant: "heading-lg/medium", style: tmp2.title, color: "text-default", children: intl2.string(ref(3717).uGxDiu) };
  const Text = markAsDismissed(4832).Text;
  intl2 = markAsDismissed(1115).intl;
  items3[3] = closure_7(Text, obj13);
  const obj14 = { variant: "text-md/normal", style: tmp2.body, color: "text-muted", children: intl3.string(ref(3717).yezU3E) };
  const Text2 = markAsDismissed(4832).Text;
  intl3 = markAsDismissed(1115).intl;
  items3[4] = closure_7(Text2, obj14);
  const obj15 = { style: tmp2.actions, children: items11 };
  const obj16 = { text: intl4.string(ref(3717).TswY68), variant: "primary", size: "lg", onPress: callback };
  const Button = markAsDismissed(5281).Button;
  intl4 = markAsDismissed(1115).intl;
  items11 = [closure_7(Button, obj16), ];
  const obj17 = { text: intl5.string(markAsDismissed(1115).t.TulDPl), variant: "secondary", size: "lg", onPress: callback1 };
  const Button2 = markAsDismissed(5281).Button;
  intl5 = markAsDismissed(1115).intl;
  items11[1] = closure_7(Button2, obj17);
  items3[5] = closure_8(View, obj15);
  return closure_7(BottomSheet, obj);
};
