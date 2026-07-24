// Module ID: 9364
// Function ID: 73071
// Name: EmojiPickerActionSheet
// Dependencies: [57, 31, 27, 1849, 9365, 653, 1852, 33, 4130, 689, 7005, 3991, 9366, 5160, 1557, 477, 5462, 5482, 9373, 4098, 9362, 9374, 4126, 1212, 5772, 9376, 3776, 9352, 1934, 4099, 4100, 9378, 5187, 4001, 9379, 9420, 9442, 2]
// Exports: default

// Module 9364 (EmojiPickerActionSheet)
import _slicedToArray from "_slicedToArray";
import PortalKeyboardFooterIOS from "PortalKeyboardFooterIOS";
import { View } from "items";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { EmojiPickerSource } from "IMAGE_SIZE";
import { EXPRESSION_FOOTER_HEIGHT } from "ME";
import { EmojiIntention } from "set";
import jsxProd from "Portal";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = { header: { flexDirection: "column" } };
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "row", marginBottom: -require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.searchContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.content = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
_createForOfIteratorHelperLoose.background = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
let obj3 = { flexDirection: "column", alignItems: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.headerText = obj3;
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
_createForOfIteratorHelperLoose.headerSpacer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
const obj4 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.burstReaction = { borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj5 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerActionSheet.tsx");

export default function EmojiPickerActionSheet(onClose) {
  let analyticsObject;
  let c5;
  let channel;
  let guildId;
  let messageId;
  let onPressEmoji;
  let tmp3;
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
  let React;
  c5 = undefined;
  let c6;
  let bottom2;
  let handleTextChange;
  let closure_9;
  let callback;
  let memo1;
  ({ analyticsObject, messageId } = onClose);
  let tmp = _createForOfIteratorHelperLoose();
  React = tmp;
  [tmp3, c5] = source(React.useState(onClose(pickerIntention[10]).ReactionTypes.NORMAL), 2);
  const tmp4 = tmp3 === onClose(pickerIntention[10]).ReactionTypes.BURST;
  c6 = tmp4;
  const ref = React.useRef(null);
  let obj = onClose(pickerIntention[11]);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = onClose(pickerIntention[12]);
  const emojiCategories = obj1.useEmojiCategories(pickerIntention, channel, guildId);
  let bottom = onPressEmoji(pickerIntention[13])().insets.bottom;
  bottom2 = onPressEmoji(pickerIntention[14])().bottom;
  let obj2 = onClose(pickerIntention[15]);
  if (obj2.isAndroid()) {
    bottom = bottom2;
  }
  const sum = bottom + handleTextChange;
  const sum1 = sum + onPressEmoji(pickerIntention[9]).space.PX_16;
  const tmp2 = source(React.useState(onClose(pickerIntention[10]).ReactionTypes.NORMAL), 2);
  const tmp11 = onPressEmoji(pickerIntention[18])(channel, sharedValue, pickerIntention);
  handleTextChange = tmp11.handleTextChange;
  let items = [onClose];
  let items1 = [onPressEmoji, tmp4, pickerIntention, source];
  callback = React.useCallback(() => {
    if (null != onClose) {
      onClose();
    }
  }, items);
  let items2 = [tmp4, bottom2];
  const callback1 = React.useCallback((emoji) => {
    if (null != onPressEmoji) {
      onPressEmoji(emoji, c6);
    }
    onPressEmoji(pickerIntention[19]).hideActionSheet(onClose(pickerIntention[20]).EMOJI_PICKER_ACTION_SHEET_KEY);
    let tmp5 = pickerIntention !== closure_9.REACTION;
    if (!tmp5) {
      tmp5 = source === bottom2.NOTIFICATION;
    }
    if (!tmp5) {
      tmp5 = c6;
    }
    if (!tmp5) {
      const result = onClose(pickerIntention[21]).maybeShowDoubleTapReminderToast(emoji);
      const obj2 = onClose(pickerIntention[21]);
    }
  }, items1);
  const memo = React.useMemo(() => {
    const obj = {};
    let num = 0;
    if (c6) {
      num = 2;
    }
    obj.marginLeft = num;
    let num2 = 0;
    if (c6) {
      num2 = 2;
    }
    obj.marginRight = num2;
    let num3 = 2;
    let num4 = 2;
    if (c6) {
      num4 = 0;
    }
    obj.paddingLeft = num4;
    if (c6) {
      num3 = 0;
    }
    obj.paddingRight = num3;
    obj.paddingBottom = bottom2;
    return obj;
  }, items2);
  closure_9 = React.useRef(null);
  callback = React.useRef(flag);
  const callback2 = React.useCallback(() => {
    if (ref.current) {
      const current = closure_9.current;
      if (null != current) {
        current.focus();
      }
      ref.current = false;
    }
  }, []);
  const items3 = [pickerIntention, tmp];
  const callback3 = React.useCallback(() => {
    const current = closure_9.current;
    if (null != current) {
      current.setText("");
    }
  }, []);
  memo1 = React.useMemo(() => {
    let tmp = null;
    if (pickerIntention === closure_9.DEFAULT_REACT_EMOJI) {
      let obj = { style: _undefined.headerText };
      obj = { variant: "heading-lg/bold", color: "mobile-text-heading-primary" };
      const intl = onClose(pickerIntention[23]).intl;
      obj.children = intl.string(onClose(pickerIntention[23]).t.wHTk2C);
      const items = [ref(onClose(pickerIntention[22]).Text, obj), ];
      obj = { variant: "text-sm/medium", color: "text-muted" };
      const intl2 = onClose(pickerIntention[23]).intl;
      obj.children = intl2.string(onClose(pickerIntention[23]).t.VrWSNn);
      items[1] = ref(onClose(pickerIntention[22]).Text, obj);
      obj.children = items;
      tmp = memo1(c5, obj);
    }
    return tmp;
  }, items3);
  const items4 = [tmp, handleTextChange, tmp4, pickerIntention, memo1, source];
  const memo2 = React.useMemo(() => {
    let obj = { style: _undefined.header };
    const items = [memo1, ];
    obj = {};
    const items1 = [_undefined.searchContainer, ];
    let headerSpacer = null;
    if (null === memo1) {
      headerSpacer = _undefined.headerSpacer;
    }
    items1[1] = headerSpacer;
    obj.style = items1;
    obj = { ref: closure_9, size: "md", isRound: true, onChange: handleTextChange, placeholder: onClose(pickerIntention[12]).getSearchPlaceholder(pickerIntention, c6) };
    const items2 = [ref(onClose(pickerIntention[24]).SearchField, obj), ];
    let tmp5 = pickerIntention === closure_9.REACTION;
    if (tmp5) {
      tmp5 = source !== bottom2.NOTIFICATION;
    }
    if (tmp5) {
      const obj1 = {
        onPress() {
            if (obj.isPremium(currentUser.getCurrentUser())) {
              const result = onClose(pickerIntention[29]).triggerHapticFeedback(onPressEmoji(pickerIntention[30]).IMPACT_LIGHT);
              const ReactionTypes = onClose(pickerIntention[10]).ReactionTypes;
              outer1_5(outer1_6 ? ReactionTypes.NORMAL : ReactionTypes.BURST);
            } else {
              return onPressEmoji(pickerIntention[19]).openLazy(onClose(pickerIntention[28])(pickerIntention[27], pickerIntention.paths), "SuperReactionUpsellActionSheet");
            }
            obj = onClose(pickerIntention[26]);
          },
        isActive: c6
      };
      tmp5 = ref(onPressEmoji(pickerIntention[25]), obj1);
    }
    items2[1] = tmp5;
    obj.children = items2;
    items[1] = memo1(c5, obj);
    obj.children = items;
    return memo1(c5, obj);
  }, items4);
  if (tmp4) {
    const items5 = [tmp.burstReaction.borderColor, onPressEmoji(pickerIntention[9]).unsafe_rawColors.TRANSPARENT];
    let items6 = items5;
  } else {
    items6 = [onPressEmoji(pickerIntention[9]).unsafe_rawColors.TRANSPARENT, onPressEmoji(pickerIntention[9]).unsafe_rawColors.TRANSPARENT];
  }
  let obj3 = onClose(pickerIntention[11]);
  const sharedValue1 = obj3.useSharedValue(-1);
  const ref1 = React.useRef(null);
  obj = { value: onPressEmoji(pickerIntention[16])(onPressEmoji(pickerIntention[17]).EMOJI_PICKER).analyticsLocations };
  const tmp10 = onPressEmoji(pickerIntention[16]);
  const tmp25 = memo1;
  let isIOSResult = onClose(pickerIntention[15]).isIOS();
  if (isIOSResult) {
    obj = { portalHostName: "EmojiPickerActionSheet", animatedSheetIndex: sharedValue1, followSystemKeyboard: true };
    isIOSResult = callback(onPressEmoji(pickerIntention[31]), obj);
  }
  const items7 = [isIOSResult, ];
  obj1 = { backgroundStyles: tmp.background, ref: ref1, scrollable: true, header: memo2 };
  const obj6 = onClose(pickerIntention[15]);
  const tmp30 = memo1;
  let tmp31;
  if (obj9.isAndroid()) {
    obj2 = { name: "EmojiPickerActionSheet" };
    tmp31 = callback(onClose(pickerIntention[33]).PortalHost, obj2);
  }
  obj1.footer = tmp31;
  obj1.startExpanded = flag2;
  obj1.onDismiss = callback;
  obj1.animatedIndex = sharedValue1;
  obj1.onExpand = callback2;
  obj1.borderGradient = items6;
  const items8 = [tmp.content, { marginBottom: sum }];
  obj1.contentStyles = items8;
  obj3 = { bottomSheetIndex: sharedValue1, onPressEmoji: callback1 };
  obj9 = onClose(pickerIntention[15]);
  obj3.onLongPressEmoji = onClose(pickerIntention[35]).openEmojiActionSheet;
  obj3.emojiPickerListRef = ref;
  obj3.categories = emojiCategories;
  obj3.categoryIndexActive = sharedValue;
  obj3.emojis = tmp11.searchResults;
  obj3.emojiPickerIntention = pickerIntention;
  obj3.channel = channel;
  obj3.guildId = guildId;
  obj3.searchQueryRef = tmp11.searchQueryRef;
  obj3.insetBottom = sum1;
  obj3.analyticsObject = analyticsObject;
  obj3.messageId = messageId;
  const items9 = [callback(onPressEmoji(pickerIntention[34]), obj3), callback(onPressEmoji(pickerIntention[36]), { bottomSheetRef: ref1, bottomSheetIndex: sharedValue1, style: memo, categories: emojiCategories, categoryIndexActive: sharedValue, emojiPickerListRef: ref, portalHostName: "EmojiPickerActionSheet", isSearching: null != tmp11.searchResults, onClearSearch: callback3 })];
  obj1.children = items9;
  items7[1] = tmp30(onClose(pickerIntention[32]).BottomSheet, obj1);
  obj.children = items7;
  return tmp25(onClose(pickerIntention[16]).AnalyticsLocationProvider, obj);
};
