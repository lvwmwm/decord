// Module ID: 14001
// Function ID: 14002
// Name: CustomTypingIndicatorAnnounceActionSheet
// Dependencies: [32, 19, 17, 1072, 5016, 21, 1398, 1113, 4028, 13998, 5170, 575, 7420, 7445, 5000, 5003, 7668, 5420, 7388, 5755, 14002, 14003, 14004, 14005, 14006, 14007, 14008, 14009, 1187, 5783, 5790, 2]
// Exports: default

// Module 14001 (CustomTypingIndicatorAnnounceActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import user from "user" /* 1398 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 5000 */;
import dismissible_content from "dismissible_content" /* 5003 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5016 */;
import openUserSettings from "openUserSettings" /* 7668 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let c9;
let items;
let items1;
let metroImportAll;
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { launch: items, new_presets: items1 };
items = [user.TypingSuggestion.UNSPECIFIED, user.TypingSuggestion.YAPPING, user.TypingSuggestion.OVERSHARING];
items1 = [user.TypingSuggestion.CHIRPING, user.TypingSuggestion.KEYSMASHING, user.TypingSuggestion.PURRING];
let closure_11 = createStyles.createStyles(() => {
  obj = { content: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 }, examples: { width: "100%", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 }, newBadge: { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, paddingVertical: 0 }, title: { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 }, body: { textAlign: "center", marginBottom: nativeDefault.space.PX_24 }, actions: { gap: nativeDefault.space.PX_12, width: "100%" }, row: { alignSelf: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderWidth: 1, borderRadius: nativeDefault.radii.md }, outerRow: { padding: nativeDefault.space.PX_8, opacity: 0.75 }, innerRow: { padding: nativeDefault.space.PX_10 }, outerStack: { width: "auto", maxWidth: "80%", overflow: "hidden" }, innerStack: { width: "auto", maxWidth: "100%", overflow: "hidden" } };
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
  let ByhEOe;
  let SafeAreaPaddingView;
  let analyticsLocations;
  let formatToPlainString;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items10;
  let items11;
  let items12;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj11;
  let obj13;
  let obj15;
  let obj22;
  let obj4;
  let obj6;
  let obj7;
  let string;
  let tmp10;
  let tmp12;
  let tmp3Result;
  let tmp3Result3;
  let tmp3Result4;
  let tmp8;
  let tmp9;
  let variant;
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ analyticsLocations, variant } = markAsDismissed);
  if (variant === undefined) {
    variant = "launch";
  }
  let flag = markAsDismissed.dismissNewPresetsSheet;
  if (flag === undefined) {
    flag = false;
  }
  let analyticsLocations2;
  let callback;
  obj = callback;
  const ref = callback.useRef(null);
  let tmp2 = closure_11();
  const tmp5 = flag(ref[12]);
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  analyticsLocations2 = tmp5(analyticsLocations, tmp3(tmp4[13]).CUSTOM_TYPING_INDICATOR_ANNOUNCEMENT_SHEET).analyticsLocations;
  const items = [markAsDismissed, flag];
  callback = obj.useCallback((arg0) => {
    markAsDismissed(arg0);
    const tmp2 = flag;
    if (tmp2) {
      obj = UserSettingsProtoActionCreators;
      obj.addDismissedContent(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_ACTION_SHEET);
    }
  }, items);
  [tmp8, tmp9, tmp10] = analyticsLocations2(obj[variant], 3);
  analyticsLocations2(obj[variant], 3);
  if ("launch" === variant) {
    let obj2 = { badge: intl.string(markAsDismissed(tmp4[7]).t.y2b7CA), title: intl2.string(tmp3(tmp4[8]).uGxDiu), body: intl3.string(tmp3(tmp4[8]).yezU3E) };
    intl = markAsDismissed(tmp4[7]).intl;
    intl2 = markAsDismissed(tmp4[7]).intl;
    intl3 = markAsDismissed(tmp4[7]).intl;
    tmp12 = obj2;
  } else if ("new_presets" === variant) {
    let obj3 = { badge: intl6.string(markAsDismissed(tmp4[7]).t.oW0eUd), title: intl7.string(tmp3(tmp4[8]).LGMA0i), body: formatToPlainString(ByhEOe, obj4) };
    intl6 = markAsDismissed(tmp4[7]).intl;
    intl7 = markAsDismissed(tmp4[7]).intl;
    const intl8 = markAsDismissed(tmp4[7]).intl;
    formatToPlainString = intl8.formatToPlainString;
    obj4 = { preset: string(obj22.getCustomTypingIndicatorSuggestionMessage(markAsDismissed(ref[6]).TypingSuggestion.KEYSMASHING)) };
    ByhEOe = tmp3(tmp4[8]).ByhEOe;
    const intl9 = markAsDismissed(tmp4[7]).intl;
    string = intl9.string;
    tmp12 = obj3;
    obj22 = markAsDismissed(ref[9]);
  }
  const items1 = [callback, analyticsLocations2];
  const items2 = [callback];
  const callback1 = obj.useCallback(() => {
    let obj3;
    const obj2 = { screen: UserSettingsSections.TYPING_INDICATOR, params: obj3 };
    obj3 = { analyticsLocations: analyticsLocations2 };
    obj = openUserSettings;
    obj.openUserSettings(obj2, () => {
      callback(constants.TAKE_ACTION);
    });
  }, items1);
  const items3 = [callback];
  const callback2 = obj.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items2);
  const callback3 = obj.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items3);
  const obj5 = { ref, onDismiss: callback3, startExpanded: true, handleDisabled: true, children: closure_8(SafeAreaPaddingView, obj6) };
  const BottomSheet = markAsDismissed(tmp4[17]).BottomSheet;
  obj6 = { bottom: true, children: closure_9(View, obj7) };
  obj7 = { style: tmp2.content, children: items4 };
  SafeAreaPaddingView = markAsDismissed(tmp4[18]).SafeAreaPaddingView;
  items4 = [, , , , , ];
  const obj8 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
      callback(ContentDismissActionType.USER_DISMISS);
    }
  };
  items4[0] = closure_8(markAsDismissed(ref[19]).ActionSheetHeaderBar, obj8);
  const obj9 = { style: tmp2.examples, children: items7 };
  const obj10 = { style: items5, children: closure_8(tmp3Result, obj11) };
  items5 = [, ];
  ({ row: arr6[0], outerRow: arr6[1] } = tmp2);
  obj11 = { name: "Cap", suggestion: tmp8, emojiSize: 24, spacing: 8, textVariant: "body-md/medium", textColor: "text-subtle", lineClamp: 1, emojiSource: items6, style: tmp2.outerStack };
  items6 = [, , ];
  tmp3Result = flag(ref[20]);
  items6[0] = flag(ref[21]);
  items6[1] = flag(ref[22]);
  items6[2] = flag(ref[21]);
  items7 = [closure_8(View, obj10), , ];
  const obj12 = { style: items8, children: closure_8(tmp3Result3, obj13) };
  items8 = [, ];
  ({ row: arr9[0], innerRow: arr9[1] } = tmp2);
  obj13 = { name: "Rose", suggestion: tmp9, emojiSize: 28, spacing: 10, textVariant: "body-lg/medium", textColor: "text-default", lineClamp: 1, style: tmp2.innerStack, emojiSource: items9 };
  items9 = [, , ];
  tmp3Result3 = flag(ref[20]);
  items9[0] = flag(ref[23]);
  items9[1] = flag(ref[24]);
  items9[2] = flag(ref[23]);
  items7[1] = closure_8(View, obj12);
  const obj14 = { style: items10, children: closure_8(tmp3Result4, obj15) };
  items10 = [, ];
  ({ row: arr11[0], outerRow: arr11[1] } = tmp2);
  obj15 = { name: "Loky", suggestion: tmp10, emojiSize: 24, spacing: 8, textVariant: "body-md/medium", textColor: "text-subtle", lineClamp: 1, style: tmp2.outerStack, emojiSource: items11 };
  items11 = [, , ];
  tmp3Result4 = flag(ref[20]);
  items11[0] = flag(ref[25]);
  items11[1] = flag(ref[26]);
  items11[2] = flag(ref[27]);
  items7[2] = closure_8(View, obj14);
  items4[1] = closure_9(View, obj9);
  const obj16 = { text: tmp12.badge, color: markAsDismissed(ref[28]).BadgeColors.EXPRESSIVE, style: tmp2.newBadge };
  const TextBadge = markAsDismissed(tmp4[28]).TextBadge;
  items4[2] = closure_8(TextBadge, obj16);
  const obj17 = { variant: "heading-lg/medium", style: tmp2.title, color: "text-default", children: tmp12.title };
  items4[3] = closure_8(markAsDismissed(ref[29]).Text, obj17);
  const obj18 = { variant: "body-md/normal", style: tmp2.body, color: "text-muted", children: tmp12.body };
  items4[4] = closure_8(markAsDismissed(ref[29]).Text, obj18);
  const obj19 = { style: tmp2.actions, children: items12 };
  const obj20 = { text: intl4.string(flag(ref[8]).TswY68), variant: "primary", size: "lg", onPress: callback1 };
  const Button = markAsDismissed(tmp4[30]).Button;
  intl4 = markAsDismissed(tmp4[7]).intl;
  items12 = [closure_8(Button, obj20), ];
  const obj21 = { text: intl5.string(markAsDismissed(ref[7]).t.TulDPl), variant: "secondary", size: "lg", onPress: callback2 };
  const Button2 = markAsDismissed(tmp4[30]).Button;
  intl5 = markAsDismissed(tmp4[7]).intl;
  items12[1] = closure_8(Button2, obj21);
  items4[5] = closure_9(View, obj19);
  return closure_8(BottomSheet, obj5);
};
