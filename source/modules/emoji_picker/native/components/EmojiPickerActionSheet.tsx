// Module ID: 9321
// Function ID: 72821
// Name: EmojiPickerActionSheet
// Dependencies: [1849, 4988, 4991, 9326, 2, 653, 3963, 686, 507, 2, 4988, 1852, 624, 2, 31, 4992, 2, 57, 31, 4988, 682, 1331, 2, 31, 1345, 33, 4126, 689, 4124, 1212, 3944, 1334, 3801, 7650, 3829, 9332, 2, 31]
// Exports: default

// Module 9321 (EmojiPickerActionSheet)
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { View } from "_isNativeReflectConstruct";
import fetchTopEmojis from "fetchTopEmojis";
import { EmojiPickerSource } from "result2";
import { EXPRESSION_FOOTER_HEIGHT } from "ME";
import { EmojiIntention } from "isPseudoGuildId";
import dispatcher from "dispatcher";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import module_31 from "module_31";

({ jsx: closure_10, jsxs: closure_11 } = dispatcher);
_isNativeReflectConstruct = { header: { flexDirection: "column" } };
_isNativeReflectConstruct = { marginBottom: -require("result2").space.PX_16 };
_isNativeReflectConstruct.searchContainer = _isNativeReflectConstruct;
_isNativeReflectConstruct.content = { paddingHorizontal: require("result2").space.PX_8, backgroundColor: require("result2").colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
const obj1 = { paddingHorizontal: require("result2").space.PX_8, backgroundColor: require("result2").colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
_isNativeReflectConstruct.background = { backgroundColor: require("result2").colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
const obj3 = { <string:3814666730>: 8, <string:1280564396>: 18, marginBottom: require("result2").space.PX_16 };
_isNativeReflectConstruct.headerText = obj3;
const obj2 = { backgroundColor: require("result2").colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
_isNativeReflectConstruct.headerSpacer = { marginTop: require("result2").space.PX_8 };
const obj4 = { marginTop: require("result2").space.PX_8 };
_isNativeReflectConstruct.burstReaction = { borderColor: require("result2").colors.BACKGROUND_BRAND };
_isNativeReflectConstruct = _isNativeReflectConstruct.createStyles(_isNativeReflectConstruct);
const result = module_31.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerActionSheet.tsx");

export default function EmojiPickerActionSheet(onClose) {
  let analyticsObject;
  let channel;
  let guildId;
  let messageId;
  let onPressEmoji;
  let tmp3;
  onClose = onClose.onClose;
  const arg1 = onClose;
  ({ channel, guildId, onPressEmoji } = onClose);
  const importDefault = onPressEmoji;
  const pickerIntention = onClose.pickerIntention;
  const dependencyMap = pickerIntention;
  let flag = onClose.autoFocus;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = onClose.startExpanded;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const source = onClose.source;
  let callback = source;
  let React;
  let closure_5;
  let fetchTopEmojis;
  let EmojiPickerSource;
  let EXPRESSION_FOOTER_HEIGHT;
  let closure_9;
  let callback2;
  let memo1;
  ({ analyticsObject, messageId } = onClose);
  const tmp = _isNativeReflectConstruct();
  React = tmp;
  [tmp3, closure_5] = callback(React.useState(arg1(dependencyMap[10]).ReactionTypes.NORMAL), 2);
  const tmp4 = tmp3 === arg1(dependencyMap[10]).ReactionTypes.BURST;
  fetchTopEmojis = tmp4;
  const ref = React.useRef(null);
  let obj = arg1(dependencyMap[11]);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = arg1(dependencyMap[12]);
  const emojiCategories = obj1.useEmojiCategories(pickerIntention, channel, guildId);
  let bottom = importDefault(dependencyMap[13])().insets.bottom;
  const bottom2 = importDefault(dependencyMap[14])().bottom;
  EmojiPickerSource = bottom2;
  let obj2 = arg1(dependencyMap[15]);
  if (obj2.isAndroid()) {
    bottom = bottom2;
  }
  const sum = bottom + EXPRESSION_FOOTER_HEIGHT;
  const sum1 = sum + importDefault(dependencyMap[9]).space.PX_16;
  const tmp2 = callback(React.useState(arg1(dependencyMap[10]).ReactionTypes.NORMAL), 2);
  const tmp11 = importDefault(dependencyMap[18])(channel, sharedValue, pickerIntention);
  const handleTextChange = tmp11.handleTextChange;
  EXPRESSION_FOOTER_HEIGHT = handleTextChange;
  const items = [onClose];
  const items1 = [onPressEmoji, tmp4, pickerIntention, source];
  callback = React.useCallback(() => {
    if (null != onClose) {
      onClose();
    }
  }, items);
  const items2 = [tmp4, bottom2];
  const callback1 = React.useCallback((emoji) => {
    if (null != onPressEmoji) {
      onPressEmoji(emoji, tmp4);
    }
    onPressEmoji(pickerIntention[19]).hideActionSheet(onClose(pickerIntention[20]).EMOJI_PICKER_ACTION_SHEET_KEY);
    let tmp5 = pickerIntention !== closure_9.REACTION;
    if (!tmp5) {
      tmp5 = source === bottom2.NOTIFICATION;
    }
    if (!tmp5) {
      tmp5 = tmp4;
    }
    if (!tmp5) {
      const result = onClose(pickerIntention[21]).maybeShowDoubleTapReminderToast(emoji);
      const obj2 = onClose(pickerIntention[21]);
    }
  }, items1);
  const memo = React.useMemo(() => {
    const obj = {};
    let num = 0;
    if (tmp4) {
      num = 2;
    }
    obj.marginLeft = num;
    let num2 = 0;
    if (tmp4) {
      num2 = 2;
    }
    obj.marginRight = num2;
    let num3 = 2;
    let num4 = 2;
    if (tmp4) {
      num4 = 0;
    }
    obj.paddingLeft = num4;
    if (tmp4) {
      num3 = 0;
    }
    obj.paddingRight = num3;
    obj.paddingBottom = bottom2;
    return obj;
  }, items2);
  closure_9 = React.useRef(null);
  callback2 = React.useRef(flag);
  callback2 = React.useCallback(() => {
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
      let obj = { style: tmp.headerText };
      obj = { cachedAt: true, edpbxy: true };
      const intl = onClose(pickerIntention[23]).intl;
      obj.children = intl.string(onClose(pickerIntention[23]).t.wHTk2C);
      const items = [ref(onClose(pickerIntention[22]).Text, obj), ];
      obj = { cachedAt: "y", edpbxy: "isArray" };
      const intl2 = onClose(pickerIntention[23]).intl;
      obj.children = intl2.string(onClose(pickerIntention[23]).t.VrWSNn);
      items[1] = ref(onClose(pickerIntention[22]).Text, obj);
      obj.children = items;
      tmp = memo1(closure_5, obj);
    }
    return tmp;
  }, items3);
  const items4 = [tmp, handleTextChange, tmp4, pickerIntention, memo1, source];
  const memo2 = React.useMemo(() => {
    let obj = { style: tmp.header };
    const items = [memo1, ];
    obj = {};
    const items1 = [memo1.searchContainer, ];
    let headerSpacer = null;
    if (null === memo1) {
      headerSpacer = tmp.headerSpacer;
    }
    items1[1] = headerSpacer;
    obj.style = items1;
    obj = { 0: 40, 0: true, 0: "/assets/.cache/intl/bW9kdWxlcy9nb19saXZlL3dlYi9tb2RhbA==", ref: closure_9, onChange: handleTextChange, placeholder: onClose(pickerIntention[12]).getSearchPlaceholder(pickerIntention, tmp4) };
    const items2 = [ref(onClose(pickerIntention[24]).SearchField, obj), ];
    let tmp5 = pickerIntention === closure_9.REACTION;
    if (tmp5) {
      tmp5 = source !== bottom2.NOTIFICATION;
    }
    if (tmp5) {
      const obj1 = {
        onPress() {
            if (obj.isPremium(currentUser.getCurrentUser())) {
              const result = callback(paths[29]).triggerHapticFeedback(callback2(paths[30]).IMPACT_LIGHT);
              const ReactionTypes = callback(paths[10]).ReactionTypes;
              closure_5(currentUser ? ReactionTypes.NORMAL : ReactionTypes.BURST);
            } else {
              return callback2(paths[19]).openLazy(callback(paths[28])(paths[27], paths.paths), "SuperReactionUpsellActionSheet");
            }
            const obj = callback(paths[26]);
          },
        isActive: tmp4
      };
      tmp5 = ref(onPressEmoji(pickerIntention[25]), obj1);
    }
    items2[1] = tmp5;
    obj.children = items2;
    items[1] = memo1(closure_5, obj);
    obj.children = items;
    return memo1(closure_5, obj);
  }, items4);
  if (tmp4) {
    const items5 = [tmp.burstReaction.borderColor, importDefault(dependencyMap[9]).unsafe_rawColors.TRANSPARENT];
    let items6 = items5;
  } else {
    items6 = [importDefault(dependencyMap[9]).unsafe_rawColors.TRANSPARENT, importDefault(dependencyMap[9]).unsafe_rawColors.TRANSPARENT];
  }
  let obj3 = arg1(dependencyMap[11]);
  const sharedValue1 = obj3.useSharedValue(-1);
  const ref1 = React.useRef(null);
  obj = { value: importDefault(dependencyMap[16])(importDefault(dependencyMap[17]).EMOJI_PICKER).analyticsLocations };
  const tmp10 = importDefault(dependencyMap[16]);
  const tmp25 = memo1;
  let isIOSResult = arg1(dependencyMap[15]).isIOS();
  if (isIOSResult) {
    obj = { type: "<string:4143972934>", text: "<string:1358955199>", description: "<string:1091694070>", animatedSheetIndex: sharedValue1 };
    isIOSResult = callback2(importDefault(dependencyMap[31]), obj);
  }
  const items7 = [isIOSResult, ];
  obj1 = { backgroundStyles: tmp.background, ref: ref1, scrollable: true, header: memo2 };
  const obj6 = arg1(dependencyMap[15]);
  const tmp30 = memo1;
  let tmp31;
  if (obj9.isAndroid()) {
    obj2 = { name: "EmojiPickerActionSheet" };
    tmp31 = callback2(arg1(dependencyMap[33]).PortalHost, obj2);
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
  const obj9 = arg1(dependencyMap[15]);
  obj3.onLongPressEmoji = arg1(dependencyMap[35]).openEmojiActionSheet;
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
  const items9 = [callback2(importDefault(dependencyMap[34]), obj3), callback2(importDefault(dependencyMap[36]), { bottomSheetRef: ref1, bottomSheetIndex: sharedValue1, style: memo, categories: emojiCategories, categoryIndexActive: sharedValue, emojiPickerListRef: ref, portalHostName: "EmojiPickerActionSheet", isSearching: null != tmp11.searchResults, onClearSearch: callback3 })];
  obj1.children = items9;
  items7[1] = tmp30(arg1(dependencyMap[32]).BottomSheet, obj1);
  obj.children = items7;
  return tmp25(arg1(dependencyMap[16]).AnalyticsLocationProvider, obj);
};
