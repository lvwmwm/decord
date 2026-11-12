// Module ID: 14470
// Function ID: 14471
// Name: CustomTypingIndicatorAnnounceActionSheet
// Dependencies: [32, 19, 17, 1072, 5504, 5089, 21, 1398, 1113, 4081, 14467, 5243, 575, 7852, 7871, 5073, 5076, 8537, 5503, 7351, 8143, 5838, 14471, 14472, 14473, 14474, 14475, 14476, 14477, 14478, 1187, 5866, 5873, 2]
// Exports: default

// Module 14470 (CustomTypingIndicatorAnnounceActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import user from "user" /* 1398 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 5073 */;
import dismissible_content from "dismissible_content" /* 5076 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5089 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5504 */;
import openUserSettings from "openUserSettings" /* 8537 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let items;
let items1;
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
let closure_7 = ActionSheetConstants.ACTION_SHEET_BORDER_RADIUS;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { launch: items, new_presets: items1 };
items = [user.TypingSuggestion.UNSPECIFIED, user.TypingSuggestion.YAPPING, user.TypingSuggestion.OVERSHARING];
items1 = [user.TypingSuggestion.CHIRPING, user.TypingSuggestion.KEYSMASHING, user.TypingSuggestion.PURRING];
let closure_12 = createStyles.createStyles(() => {
  let obj2;
  obj = { gradient: obj2, content: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 }, examples: { width: "100%", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 }, newBadge: { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, paddingVertical: 0 }, title: { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 }, body: { textAlign: "center", marginBottom: nativeDefault.space.PX_24 }, actions: { gap: nativeDefault.space.PX_12, width: "100%" }, row: { alignSelf: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderWidth: 1, borderRadius: nativeDefault.radii.md }, outerRow: { padding: nativeDefault.space.PX_8, opacity: 0.75 }, innerRow: { padding: nativeDefault.space.PX_10 }, outerStack: { width: "auto", maxWidth: "80%", overflow: "hidden" }, innerStack: { width: "auto", maxWidth: "100%", overflow: "hidden" } };
  obj2 = { borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, overflow: "hidden" };
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
  let items13;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj12;
  let obj14;
  let obj16;
  let obj23;
  let obj4;
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
  let tmp2 = closure_12();
  const tmp5 = flag(ref[13]);
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  analyticsLocations2 = tmp5(analyticsLocations, tmp3(tmp4[14]).CUSTOM_TYPING_INDICATOR_ANNOUNCEMENT_SHEET).analyticsLocations;
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
    let obj2 = { badge: intl.string(markAsDismissed(tmp4[8]).t.y2b7CA), title: intl2.string(tmp3(tmp4[9]).uGxDiu), body: intl3.string(tmp3(tmp4[9]).yezU3E) };
    intl = markAsDismissed(tmp4[8]).intl;
    intl2 = markAsDismissed(tmp4[8]).intl;
    intl3 = markAsDismissed(tmp4[8]).intl;
    tmp12 = obj2;
  } else if ("new_presets" === variant) {
    let obj3 = { badge: intl6.string(markAsDismissed(tmp4[8]).t.oW0eUd), title: intl7.string(tmp3(tmp4[9]).LGMA0i), body: formatToPlainString(ByhEOe, obj4) };
    intl6 = markAsDismissed(tmp4[8]).intl;
    intl7 = markAsDismissed(tmp4[8]).intl;
    const intl8 = markAsDismissed(tmp4[8]).intl;
    formatToPlainString = intl8.formatToPlainString;
    obj4 = { preset: string(obj23.getCustomTypingIndicatorSuggestionMessage(markAsDismissed(ref[7]).TypingSuggestion.KEYSMASHING)) };
    ByhEOe = tmp3(tmp4[9]).ByhEOe;
    const intl9 = markAsDismissed(tmp4[8]).intl;
    string = intl9.string;
    tmp12 = obj3;
    obj23 = markAsDismissed(ref[10]);
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
  const obj5 = { ref, onDismiss: callback3, startExpanded: true, handleDisabled: true, children: closure_10(SafeAreaPaddingView, obj7) };
  const BottomSheet = markAsDismissed(tmp4[18]).BottomSheet;
  let tmp16Result = "new_presets" === variant;
  SafeAreaPaddingView = markAsDismissed(tmp4[19]).SafeAreaPaddingView;
  if (tmp16Result) {
    const obj6 = { color: "nitro-pink", offsetBottom: 0.3, backgroundColor: flag(ref[12]).colors.MOBILE_ACTIONSHEET_BACKGROUND, style: tmp2.gradient };
    const ExpressiveGradient = tmp17(tmp4[20]).ExpressiveGradient;
    tmp16Result = tmp16(ExpressiveGradient, obj6);
  }
  obj7 = { bottom: true, children: items4 };
  items4 = [tmp16Result, ];
  const obj8 = { style: tmp2.content, children: items5 };
  items5 = [, , , , , ];
  const obj9 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
      callback(ContentDismissActionType.USER_DISMISS);
    }
  };
  items5[0] = closure_9(markAsDismissed(ref[21]).ActionSheetHeaderBar, obj9);
  const obj10 = { style: tmp2.examples, children: items8 };
  const obj11 = { style: items6, children: closure_9(tmp3Result, obj12) };
  items6 = [, ];
  ({ row: arr7[0], outerRow: arr7[1] } = tmp2);
  obj12 = { name: "Cap", suggestion: tmp8, emojiSize: 24, spacing: 8, textVariant: "body-md/medium", textColor: "text-subtle", lineClamp: 1, emojiSource: items7, style: tmp2.outerStack };
  items7 = [, , ];
  tmp3Result = flag(ref[22]);
  items7[0] = flag(ref[23]);
  items7[1] = flag(ref[24]);
  items7[2] = flag(ref[23]);
  items8 = [closure_9(View, obj11), , ];
  const obj13 = { style: items9, children: closure_9(tmp3Result3, obj14) };
  items9 = [, ];
  ({ row: arr10[0], innerRow: arr10[1] } = tmp2);
  obj14 = { name: "Rose", suggestion: tmp9, emojiSize: 28, spacing: 10, textVariant: "body-lg/medium", textColor: "text-default", lineClamp: 1, style: tmp2.innerStack, emojiSource: items10 };
  items10 = [, , ];
  tmp3Result3 = flag(ref[22]);
  items10[0] = flag(ref[25]);
  items10[1] = flag(ref[26]);
  items10[2] = flag(ref[25]);
  items8[1] = closure_9(View, obj13);
  const obj15 = { style: items11, children: closure_9(tmp3Result4, obj16) };
  items11 = [, ];
  ({ row: arr12[0], outerRow: arr12[1] } = tmp2);
  obj16 = { name: "Loky", suggestion: tmp10, emojiSize: 24, spacing: 8, textVariant: "body-md/medium", textColor: "text-subtle", lineClamp: 1, style: tmp2.outerStack, emojiSource: items12 };
  items12 = [, , ];
  tmp3Result4 = flag(ref[22]);
  items12[0] = flag(ref[27]);
  items12[1] = flag(ref[28]);
  items12[2] = flag(ref[29]);
  items8[2] = closure_9(View, obj15);
  items5[1] = closure_10(View, obj10);
  const obj17 = { text: tmp12.badge, color: markAsDismissed(ref[30]).BadgeColors.EXPRESSIVE, style: tmp2.newBadge };
  const TextBadge = tmp17(tmp4[30]).TextBadge;
  items5[2] = closure_9(TextBadge, obj17);
  const obj18 = { variant: "heading-lg/medium", style: tmp2.title, color: "text-default", children: tmp12.title };
  items5[3] = closure_9(markAsDismissed(ref[31]).Text, obj18);
  const obj19 = { variant: "body-md/normal", style: tmp2.body, color: "text-muted", children: tmp12.body };
  items5[4] = closure_9(markAsDismissed(ref[31]).Text, obj19);
  const obj20 = { style: tmp2.actions, children: items13 };
  const obj21 = { text: intl4.string(flag(ref[9]).TswY68), variant: "primary", size: "lg", onPress: callback1 };
  const Button = tmp17(tmp4[32]).Button;
  intl4 = tmp17(tmp4[8]).intl;
  items13 = [closure_9(Button, obj21), ];
  const obj22 = { text: intl5.string(markAsDismissed(ref[8]).t.TulDPl), variant: "secondary", size: "lg", onPress: callback2 };
  const Button2 = tmp17(tmp4[32]).Button;
  intl5 = tmp17(tmp4[8]).intl;
  items13[1] = closure_9(Button2, obj22);
  items5[5] = closure_10(View, obj20);
  items4[1] = closure_10(View, obj8);
  return closure_9(BottomSheet, obj5);
};
