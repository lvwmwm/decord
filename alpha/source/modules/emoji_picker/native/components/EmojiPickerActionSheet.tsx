// Module ID: 9399
// Function ID: 9400
// Name: EmojiPickerActionSheet
// Dependencies: [32, 19, 17, 1390, 9400, 1085, 1393, 21, 5091, 587, 7882, 4811, 9401, 6663, 1631, 1382, 6848, 6872, 9408, 5055, 9397, 9409, 5087, 1126, 6737, 9411, 4728, 9358, 2000, 5056, 5057, 9425, 6836, 4953, 9426, 9510, 9532, 2]
// Exports: default

// Module 9399 (EmojiPickerActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import EmojiConstants from "EmojiConstants" /* 1393 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import Text_Text from "Text/Text" /* 5087 */;
import SearchField2 from "SearchField" /* 6737 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9397 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 9400 */;
import EmojiPickerUtils from "EmojiPickerUtils" /* 9401 */;
import BurstReactionToggleDefault from "BurstReactionToggle" /* 9411 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let tmp5;
let unpackModuleId;
const DoubleTapReminderToast = tmp5(9409);
let react = react_mod;
const View = react_native.View;
const EmojiPickerSource = EmojiPickerListConstants.EmojiPickerSource;
const EXPRESSION_FOOTER_HEIGHT = Constants.EXPRESSION_FOOTER_HEIGHT;
let EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const EmojiPickerActionSheet_str = "EmojiPickerActionSheet";
let createStyles = createStyles_mod;
let obj = { header: { flexDirection: "column" }, searchContainer: obj2, content: obj3, background: obj4, headerText: obj5, headerSpacer: obj6, burstReaction: obj7 };
obj2 = { display: "flex", flexDirection: "row", marginBottom: -nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
obj4 = { backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
obj5 = { flexDirection: "column", alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
obj6 = { marginTop: nativeDefault.space.PX_8 };
obj7 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_13 = createStyles(obj);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerActionSheet.tsx");

export default function EmojiPickerActionSheet(onClose) {
  let analyticsObject;
  let c5;
  let channel;
  let closure_4;
  let guildId;
  let items6;
  let items7;
  let items8;
  let items9;
  let messageId;
  let onPressEmoji;
  let str;
  let tmp28;
  let tmp5;
  onClose = onClose.onClose;
  ({ channel, guildId, onPressEmoji } = onClose);
  const pickerIntention = onClose.pickerIntention;
  let flag = onClose.autoFocus;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = onClose.startExpanded;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const source = onClose.source;
  const bypassPremiumEmojiEntitlement = onClose.bypassPremiumEmojiEntitlement;
  c5 = undefined;
  let handleTextChange;
  EmojiIntention = undefined;
  let ref2;
  let memo1;
  ({ analyticsObject, messageId } = onClose);
  let tmp = closure_13();
  react = tmp;
  let obj = react;
  let tmp2 = onClose;
  let tmp4 = source(react.useState(onClose(pickerIntention[10]).ReactionTypes.NORMAL), 2);
  [tmp5, c5] = tmp4;
  let tmp6 = tmp5 === onClose(pickerIntention[10]).ReactionTypes.BURST;
  let closure_6 = tmp6;
  const ref = react.useRef(null);
  let obj2 = onClose(pickerIntention[11]);
  const sharedValue = obj2.useSharedValue(0);
  let obj3 = onClose(pickerIntention[12]);
  const emojiCategories = obj3.useEmojiCategories(pickerIntention, channel, { guildId, bypassPremiumEmojiEntitlement });
  let bottom = onPressEmoji(pickerIntention[13])().insets.bottom;
  const bottom2 = onPressEmoji(pickerIntention[14])().bottom;
  let obj4 = onClose(pickerIntention[15]);
  if (obj4.isAndroid()) {
    bottom = bottom2;
  }
  const sum = bottom + handleTextChange;
  const sum1 = sum + tmp10(tmp3[9]).space.PX_16;
  const tmp10Result = onPressEmoji(pickerIntention[16]);
  const analyticsLocations = tmp10Result(tmp10(tmp3[17]).EMOJI_PICKER).analyticsLocations;
  const tmp14 = onPressEmoji(pickerIntention[18])(channel, sharedValue, pickerIntention, bypassPremiumEmojiEntitlement);
  handleTextChange = tmp14.handleTextChange;
  let items = [onClose];
  const searchQueryRef = tmp14.searchQueryRef;
  let items1 = [onPressEmoji, tmp6, pickerIntention, source];
  const callback = obj.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
  }, items);
  let items2 = [tmp6, bottom2];
  const callback1 = obj.useCallback((name) => {
    if (onPressEmoji != null) {
      tmp(name, closure_6);
    }
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(openEmojiPickerActionSheet.EMOJI_PICKER_ACTION_SHEET_KEY);
    let tmp7 = pickerIntention !== EmojiIntention.REACTION;
    if (!tmp7) {
      tmp7 = source === EmojiPickerSource.NOTIFICATION;
    }
    if (!tmp7) {
      tmp7 = closure_6;
    }
    if (!tmp7) {
      const tmp5Result = DoubleTapReminderToast;
      const result = tmp5Result.maybeShowDoubleTapReminderToast(name);
    }
  }, items1);
  const memo = obj.useMemo(() => {
    let num2;
    let num3;
    let num4;
    let num = 0;
    if (closure_6) {
      num = 2;
    }
    const obj = { marginLeft: num, marginRight: num2, paddingLeft: num4, paddingRight: num3, paddingBottom: bottom2 };
    num2 = 0;
    if (closure_6) {
      num2 = 2;
    }
    num3 = 2;
    num4 = 2;
    if (closure_6) {
      num4 = 0;
    }
    if (closure_6) {
      num3 = 0;
    }
    return obj;
  }, items2);
  EmojiIntention = obj.useRef(null);
  ref2 = obj.useRef(flag);
  const callback2 = obj.useCallback(() => {
    if (ref2.current) {
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
      tmp.current = false;
    }
  }, []);
  const items3 = [pickerIntention, tmp];
  const callback3 = obj.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.setText("");
    }
  }, []);
  memo1 = obj.useMemo(() => {
    let intl;
    let intl2;
    let items;
    let tmp = null;
    if (pickerIntention === EmojiIntention.DEFAULT_REACT_EMOJI) {
      const obj = { style: closure_4.headerText, children: items };
      const obj2 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: intl.string(intl3.t.wHTk2C) };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      items = [authStore(Text, obj2), ];
      const obj3 = { variant: "text-sm/medium", color: "text-muted", children: intl2.string(intl3.t.VrWSNn) };
      const Text2 = Text_Text.Text;
      intl2 = intl3.intl;
      items[1] = authStore(Text2, obj3);
      tmp = unpackModuleId(View, obj);
    }
    return tmp;
  }, items3);
  const items4 = [tmp, handleTextChange, tmp6, pickerIntention, memo1, source];
  const memo2 = obj.useMemo(() => {
    let items;
    let items2;
    let obj4;
    const tmp = unpackModuleId;
    const tmp2 = View;
    let obj = { style: closure_4.header, children: items };
    items = [memo1, ];
    const items1 = [closure_4.searchContainer, ];
    let headerSpacer = null;
    if (null === memo1) {
      headerSpacer = closure_4.headerSpacer;
    }
    let obj2 = { style: items1, children: items2 };
    items1[1] = headerSpacer;
    const obj3 = { ref, size: "md", round: true, onChange: handleTextChange, placeholder: obj4.getSearchPlaceholder(pickerIntention, currentUser) };
    const SearchField = SearchField2.SearchField;
    obj4 = EmojiPickerUtils;
    items2 = [authStore(SearchField, obj3), ];
    let tmp4Result = pickerIntention === EmojiIntention.REACTION && source !== EmojiPickerSource.NOTIFICATION;
    const tmp4 = authStore;
    const tmp6 = currentUser;
    if (tmp4Result) {
      const obj5 = {
        onPress() {
            const obj = onClose(pickerIntention[26]);
            if (obj.isPremium(currentUser.getCurrentUser())) {
              const tmpResult = onClose(pickerIntention[29]);
              const result = tmpResult.triggerHapticFeedback(onPressEmoji(tmp2[30]).IMPACT_LIGHT);
              const ReactionTypes = tmp(tmp2[10]).ReactionTypes;
              closure_1_5(closure_1_6 ? ReactionTypes.NORMAL : ReactionTypes.BURST);
            } else {
              const obj2 = onPressEmoji(pickerIntention[19]);
              return obj2.openLazy(onClose(pickerIntention[28])(pickerIntention[27], pickerIntention.paths), "SuperReactionUpsellActionSheet");
            }
          },
        isActive: tmp6
      };
      tmp4Result = tmp4(BurstReactionToggleDefault, obj5);
    }
    items2[1] = tmp4Result;
    items[1] = tmp(tmp2, obj2);
    return tmp(tmp2, obj);
  }, items4);
  if (tmp6) {
    const items5 = [tmp.burstReaction.borderColor, tmp10(tmp3[9]).unsafe_rawColors.TRANSPARENT];
    items6 = items5;
  } else {
    items6 = [tmp10(tmp3[9]).unsafe_rawColors.TRANSPARENT, tmp10(tmp3[9]).unsafe_rawColors.TRANSPARENT];
  }
  const tmp2Result = tmp2(pickerIntention[11]);
  const sharedValue1 = tmp2Result.useSharedValue(-1);
  const ref1 = obj.useRef(null);
  let obj5 = { value: analyticsLocations, children: items7 };
  const AnalyticsLocationProvider = tmp2(tmp3[16]).AnalyticsLocationProvider;
  const tmp2Result4 = tmp2(pickerIntention[15]);
  let isIOSResult = tmp2Result4.isIOS();
  if (isIOSResult) {
    const obj6 = { portalHostName: EmojiPickerActionSheet_str, animatedSheetIndex: sharedValue1, followSystemKeyboard: true };
    isIOSResult = ref2(tmp10(tmp3[31]), obj6);
  }
  items7 = [isIOSResult, ];
  const obj7 = { backgroundStyles: tmp.background, ref: ref1, scrollable: true, header: memo2, footer: tmp28, startExpanded: flag2, onDismiss: callback, animatedIndex: sharedValue1, onExpand: callback2, borderGradient: items6, contentStyles: items8, children: items9 };
  BottomSheet = tmp2(tmp3[32]).BottomSheet;
  tmp28 = undefined;
  const tmp2Result5 = tmp2(pickerIntention[15]);
  if (tmp2Result5.isAndroid()) {
    const obj8 = { name: EmojiPickerActionSheet_str };
    tmp28 = ref2(tmp2(tmp3[33]).PortalHost, obj8);
  }
  items8 = [tmp.content, { marginBottom: sum }];
  const obj9 = { bottomSheetIndex: sharedValue1, onPressEmoji: callback1, onLongPressEmoji: tmp2(pickerIntention[35]).openEmojiActionSheet, emojiPickerListRef: ref, categories: emojiCategories, categoryIndexActive: sharedValue, emojis: tmp14.searchResults, emojiPickerIntention: pickerIntention, channel, guildId, searchQueryRef, insetBottom: sum1, analyticsObject, messageId, bypassPremiumEmojiEntitlement };
  const tmp10Result3 = onPressEmoji(pickerIntention[34]);
  items9 = [ref2(tmp10Result3, obj9), ];
  const obj10 = { bottomSheetRef: ref1, bottomSheetIndex: sharedValue1, style: memo, categories: emojiCategories, categoryIndexActive: sharedValue, emojiPickerListRef: ref, portalHostName: EmojiPickerActionSheet_str, renderAhead: str, isSearching: null != tmp14.searchResults, onClearSearch: callback3 };
  str = undefined;
  const tmp10Result4 = onPressEmoji(pickerIntention[36]);
  const tmp2Result6 = tmp2(pickerIntention[15]);
  const tmp31 = ref2;
  if (tmp2Result6.isIOS()) {
    if (pickerIntention === EmojiIntention.STATUS) {
      str = "full";
    }
  }
  items9[1] = tmp31(tmp10Result4, obj10);
  items7[1] = memo1(BottomSheet, obj7);
  return memo1(AnalyticsLocationProvider, obj5);
};
