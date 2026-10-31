// Module ID: 13721
// Function ID: 13722
// Name: CustomTypingIndicatorAnnounceActionSheet
// Dependencies: [19, 17, 1072, 4860, 21, 5014, 575, 7326, 7351, 7563, 5272, 7292, 5595, 13722, 1391, 13723, 13724, 13725, 13726, 13727, 13728, 13729, 1187, 1113, 5624, 3870, 5634, 2]
// Exports: default

// Module 13721 (CustomTypingIndicatorAnnounceActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import openUserSettings from "openUserSettings" /* 7563 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles(() => {
  const obj = { content: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 }, examples: { width: "100%", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 }, newBadge: { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, paddingVertical: 0 }, title: { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 }, body: { textAlign: "center", marginBottom: nativeDefault.space.PX_24 }, actions: { gap: nativeDefault.space.PX_12, width: "100%" }, row: { alignSelf: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderWidth: 1, borderRadius: nativeDefault.radii.md }, outerRow: { padding: nativeDefault.space.PX_8, opacity: 0.75 }, innerRow: { padding: nativeDefault.space.PX_10 }, outerStack: { width: "auto", maxWidth: "80%", overflow: "hidden" }, innerStack: { width: "auto", maxWidth: "100%", overflow: "hidden" } };
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
  let obj10;
  let obj12;
  let obj3;
  let obj4;
  let obj8;
  let tmp3Result;
  let tmp3Result3;
  let tmp3Result4;
  markAsDismissed = markAsDismissed.markAsDismissed;
  let analyticsLocations1 = markAsDismissed.analyticsLocations;
  let analyticsLocations;
  let obj = react;
  const ref = react.useRef(null);
  const tmp2 = closure_9();
  const tmp5 = ref(analyticsLocations[7]);
  if (analyticsLocations1 == null) {
    analyticsLocations1 = [];
  }
  analyticsLocations = tmp5(analyticsLocations1, tmp3(tmp4[8]).CUSTOM_TYPING_INDICATOR_ANNOUNCEMENT_SHEET).analyticsLocations;
  const items = [markAsDismissed, analyticsLocations];
  const items1 = [markAsDismissed];
  const callback = obj.useCallback(() => {
    let obj3;
    const obj2 = { screen: UserSettingsSections.TYPING_INDICATOR, params: obj3 };
    obj3 = { analyticsLocations };
    const obj = openUserSettings;
    obj.openUserSettings(obj2, () => {
      markAsDismissed(constants.TAKE_ACTION);
    });
  }, items);
  const items2 = [markAsDismissed];
  const callback1 = obj.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const callback2 = obj.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items2);
  let obj2 = { ref, onDismiss: callback2, startExpanded: true, handleDisabled: true, children: closure_7(SafeAreaPaddingView, obj3) };
  BottomSheet = markAsDismissed(tmp4[10]).BottomSheet;
  obj3 = { bottom: true, children: closure_8(View, obj4) };
  obj4 = { style: tmp2.content, children: items3 };
  SafeAreaPaddingView = markAsDismissed(tmp4[11]).SafeAreaPaddingView;
  items3 = [, , , , , ];
  const obj5 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    }
  };
  items3[0] = closure_7(markAsDismissed(analyticsLocations[12]).ActionSheetHeaderBar, obj5);
  const obj6 = { style: tmp2.examples, children: items6 };
  const obj7 = { style: items4, children: closure_7(tmp3Result, obj8) };
  items4 = [, ];
  ({ row: arr6[0], outerRow: arr6[1] } = tmp2);
  obj8 = { name: "Cap", suggestion: markAsDismissed(analyticsLocations[14]).TypingSuggestion.UNSPECIFIED, emojiSize: 24, spacing: 8, textVariant: "text-md/medium", textColor: "text-subtle", lineClamp: 1, emojiSource: items5, style: tmp2.outerStack };
  tmp3Result = ref(analyticsLocations[13]);
  items5 = [ref(analyticsLocations[15]), ref(analyticsLocations[16]), ref(analyticsLocations[15])];
  items6 = [closure_7(View, obj7), , ];
  const obj9 = { style: items7, children: closure_7(tmp3Result3, obj10) };
  items7 = [, ];
  ({ row: arr9[0], innerRow: arr9[1] } = tmp2);
  obj10 = { name: "Rose", suggestion: markAsDismissed(analyticsLocations[14]).TypingSuggestion.YAPPING, emojiSize: 28, spacing: 10, textVariant: "text-lg/medium", textColor: "text-default", lineClamp: 1, style: tmp2.innerStack, emojiSource: items8 };
  tmp3Result3 = ref(analyticsLocations[13]);
  items8 = [ref(analyticsLocations[17]), ref(analyticsLocations[18]), ref(analyticsLocations[17])];
  items6[1] = closure_7(View, obj9);
  const obj11 = { style: items9, children: closure_7(tmp3Result4, obj12) };
  items9 = [, ];
  ({ row: arr11[0], outerRow: arr11[1] } = tmp2);
  obj12 = { name: "Loky", suggestion: markAsDismissed(analyticsLocations[14]).TypingSuggestion.OVERSHARING, emojiSize: 24, spacing: 8, textVariant: "text-md/medium", textColor: "text-subtle", lineClamp: 1, style: tmp2.outerStack, emojiSource: items10 };
  tmp3Result4 = ref(analyticsLocations[13]);
  items10 = [ref(analyticsLocations[19]), ref(analyticsLocations[20]), ref(analyticsLocations[21])];
  items6[2] = closure_7(View, obj11);
  items3[1] = closure_8(View, obj6);
  const obj13 = { text: intl.string(markAsDismissed(analyticsLocations[23]).t.y2b7CA), color: markAsDismissed(analyticsLocations[22]).BadgeColors.EXPRESSIVE, style: tmp2.newBadge };
  const TextBadge = markAsDismissed(tmp4[22]).TextBadge;
  intl = markAsDismissed(tmp4[23]).intl;
  items3[2] = closure_7(TextBadge, obj13);
  const obj14 = { variant: "heading-lg/medium", style: tmp2.title, color: "text-default", children: intl2.string(ref(analyticsLocations[25]).uGxDiu) };
  const Text = markAsDismissed(tmp4[24]).Text;
  intl2 = markAsDismissed(tmp4[23]).intl;
  items3[3] = closure_7(Text, obj14);
  const obj15 = { variant: "text-md/normal", style: tmp2.body, color: "text-muted", children: intl3.string(ref(analyticsLocations[25]).yezU3E) };
  const Text2 = markAsDismissed(tmp4[24]).Text;
  intl3 = markAsDismissed(tmp4[23]).intl;
  items3[4] = closure_7(Text2, obj15);
  const obj16 = { style: tmp2.actions, children: items11 };
  const obj17 = { text: intl4.string(ref(analyticsLocations[25]).TswY68), variant: "primary", size: "lg", onPress: callback };
  const Button = markAsDismissed(tmp4[26]).Button;
  intl4 = markAsDismissed(tmp4[23]).intl;
  items11 = [closure_7(Button, obj17), ];
  const obj18 = { text: intl5.string(markAsDismissed(analyticsLocations[23]).t.TulDPl), variant: "secondary", size: "lg", onPress: callback1 };
  const Button2 = markAsDismissed(tmp4[26]).Button;
  intl5 = markAsDismissed(tmp4[23]).intl;
  items11[1] = closure_7(Button2, obj18);
  items3[5] = closure_8(View, obj16);
  return closure_7(BottomSheet, obj2);
};
