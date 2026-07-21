// Module ID: 11885
// Function ID: 92001
// Name: getClampedMaxLines
// Dependencies: []

// Module 11885 (getClampedMaxLines)
function getClampedMaxLines() {
  return Math.ceil(2 * fontScale.getFontScale());
}
function EmojiImage(id) {
  let animated;
  let size;
  ({ size, animated } = id);
  if (animated === undefined) {
    animated = false;
  }
  const AnimateEmoji = arg1(dependencyMap[8]).AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  let obj = { style: items };
  const items = [{ height: size, width: size }, id.style];
  obj = {};
  const tmp2 = closure_8;
  const tmp3 = importDefault(dependencyMap[9]);
  obj = { id: id.emojiId };
  const obj3 = importDefault(dependencyMap[10]);
  obj.animated = Boolean(animated) && setting;
  obj.size = EMOJI_URL_BASE_SIZE;
  obj.uri = obj3.getEmojiURL(obj);
  obj.source = obj;
  obj.resizeMode = "contain";
  return tmp2(tmp3, obj);
}
function TextStatusContent(arg0) {
  let emoji;
  let isPlaceholderText;
  let lineClamp;
  let lineHeight;
  let onTextLayout;
  let text;
  let textVariant;
  ({ emoji, lineHeight, isPlaceholderText } = arg0);
  ({ text, textVariant, lineClamp, onTextLayout } = arg0);
  if (isPlaceholderText === undefined) {
    isPlaceholderText = false;
  }
  let obj = { paddingVertical: lineHeight / 10 };
  if (!isPlaceholderText) {
    const merged = Object.assign(isPlaceholderText);
    obj = { variant: textVariant, color: "text-default", lineClamp, onTextLayout };
    obj.style = obj;
    let id;
    if (null != emoji) {
      id = emoji.id;
    }
    if (null != id) {
      obj = {};
      let obj1 = {};
      const obj2 = { emojiId: emoji.id, size: 0.9 * lineHeight, animated: emoji.animated };
      const obj3 = { marginBottom: 0.1 * -lineHeight };
      obj2.style = obj3;
      obj1.children = callback3(EmojiImage, obj2);
      const items = [callback3(closure_6, obj1), ];
      const obj4 = {};
      const obj5 = { width: 0.5 * lineHeight };
      obj4.style = obj5;
      items[1] = callback3(closure_6, obj4);
      obj.children = items;
      let tmp14 = callback4(closure_9, obj);
    } else {
      let name;
      if (null != emoji) {
        name = emoji.name;
      }
      tmp14 = null;
      if (null != name) {
        const obj6 = {};
        const items1 = [emoji.name, ];
        const obj7 = {};
        const obj8 = { width: 0.4 * lineHeight };
        obj7.style = obj8;
        items1[1] = callback3(closure_6, obj7);
        obj6.children = items1;
        tmp14 = callback4(closure_9, obj6);
      }
    }
    const items2 = [tmp14, text];
    obj.children = items2;
    return callback4(arg1(dependencyMap[12]).Text, obj);
  } else {
    obj1 = arg1(dependencyMap[11]);
    const obj9 = {};
    if (obj1.isAndroid()) {
      obj9.fontFamily = "ggsans-NormalItalic, NotoSans-NormalItalic";
      let tmp3 = obj9;
    } else {
      obj9.fontStyle = "italic";
      tmp3 = obj9;
    }
  }
}
function EmojiOnlyStatusContent(arg0) {
  let emoji;
  let size;
  ({ emoji, size } = arg0);
  const AnimateEmoji = arg1(dependencyMap[8]).AnimateEmoji;
  let id;
  const setting = AnimateEmoji.useSetting();
  if (null != emoji) {
    id = emoji.id;
  }
  let emojiURL;
  if (null != id) {
    let obj = importDefault(dependencyMap[10]);
    obj = { id: emoji.id };
    let animated;
    if (null != emoji) {
      animated = emoji.animated;
    }
    obj.animated = Boolean(animated) && setting;
    obj.size = EMOJI_URL_BASE_SIZE;
    emojiURL = obj.getEmojiURL(obj);
    const tmp9 = Boolean(animated) && setting;
  }
  obj = { style: callback6().container };
  const obj1 = { textEmojiStyle: { fontSize: size }, fastImageStyle: { width: size, height: size }, src: emojiURL };
  let name;
  const tmp = callback6();
  const tmp11 = closure_8;
  const tmp12 = closure_6;
  const tmp13 = closure_8;
  if (null != emoji) {
    name = emoji.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  obj1.name = str;
  obj.children = tmp13(importDefault(dependencyMap[13]), obj1);
  return tmp11(tmp12, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ PixelRatio: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const EMOJI_URL_BASE_SIZE = arg1(dependencyMap[4]).EMOJI_URL_BASE_SIZE;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let closure_11 = arg1(dependencyMap[6]).createStyles((arg0) => {
  let obj = { container: { position: "relative" } };
  obj = {};
  const colors = importDefault(dependencyMap[7]).colors;
  obj.backgroundColor = arg0 ? colors.CUSTOM_STATUS_BUBBLE_BG : colors.BACKGROUND_SURFACE_HIGH;
  const colors2 = importDefault(dependencyMap[7]).colors;
  obj.borderColor = arg0 ? colors2.BORDER_MUTED : colors2.BORDER_SUBTLE;
  obj.borderWidth = 1;
  obj.bubble = obj;
  obj = { cix: 24, np: 24, channel_id: null, borderRadius: importDefault(dependencyMap[7]).radii.lg };
  const merged = Object.assign(importDefault(dependencyMap[7]).shadows.SHADOW_LOW);
  obj["top"] = -14;
  obj.statusBubble = obj;
  obj.statusBubbleMeasureable = { "Bool(false)": "<string:3082955202>", "Bool(false)": "<string:103629460>", "Bool(false)": "<string:3630497793>", "Bool(false)": "<string:961609729>" };
  const obj1 = { flexDirection: "NewUserIcon", flexWrap: "png", gap: true, isEnabled: "/assets/design/components/Icon/native/redesign/generated/images", borderRadius: importDefault(dependencyMap[7]).radii.round };
  const merged1 = Object.assign(importDefault(dependencyMap[7]).shadows.SHADOW_LOW);
  obj.smallCircle = obj1;
  const obj2 = { includeFrecency: true, lastUsedCommandId: true, lastUsedTimeMs: true, alignItems: true, flexDirection: true, borderRadius: importDefault(dependencyMap[7]).radii.round };
  const merged2 = Object.assign(importDefault(dependencyMap[7]).shadows.SHADOW_LOW);
  obj.largeCircle = obj2;
  const obj3 = { gap: true, isEnabled: true, isRoadblocksEnabled: true, position: true, top: true, right: true, borderTopLeftRadius: importDefault(dependencyMap[7]).radii.round, borderTopRightRadius: importDefault(dependencyMap[7]).radii.round };
  obj.largeCircleInner = obj3;
  obj.addStatusIconSpacer = { width: 6 };
  obj.statusBubbleLeftAligned = { alignItems: "flex-start" };
  return obj;
});
let closure_12 = {};
let closure_13 = { [arg1(dependencyMap[3]).UserProfileThemeTypes.PREVIEW]: {} };
const obj2 = arg1(dependencyMap[6]);
let closure_14 = arg1(dependencyMap[6]).createStyles(() => ({ container: { alignItems: "center" } }));
const obj3 = arg1(dependencyMap[6]);
const forwardRefResult = importAllResult.forwardRef((showFullStatus) => {
  let customStatusActivity;
  let editEnabled;
  let emojiOnlyStyle;
  let placeholderText;
  let previewEmoji;
  let previewText;
  let statusBubblePaddingHorizontal;
  let statusBubblePaddingVertical;
  let style;
  let themeType;
  function handlePressAddOrEditStatus() {
    trackUserProfileAction({ action: "PRESS_EDIT_CUSTOM_STATUS" });
    let obj = onPressTruncatedStatus(closure_2[17]);
    obj.hideActionSheet();
    obj = {};
    const items = [onPressTruncatedStatus(closure_2[19]).USER_PROFILE_CUSTOM_STATUS_BUBBLE];
    obj.analyticsLocations = items;
    obj.prompt = closure_2;
    const result = callback(closure_2[18]).openEditCustomStatusModal(obj);
  }
  function renderStatusContent() {
    if (tmp13) {
      let obj = { text: tmp12, isPlaceholderText: tmp11, emoji: previewEmoji, textVariant };
      let tmp14;
      if (!closure_0) {
        tmp14 = scaledTextLineHeight();
      }
      obj.lineClamp = tmp14;
      obj.lineHeight = scaledTextLineHeight;
      let tmp7Result = tmp11(closure_17, obj);
      const tmp13 = closure_0;
      const tmp7 = tmp11;
      const tmp8 = closure_17;
    } else if (tmp10) {
      obj = { emoji: previewEmoji, size: emojiOnlyEmojiSize };
      tmp7Result = tmp10(closure_18, obj);
    }
    return tmp7Result;
  }
  ({ customStatusActivity, themeType, editEnabled } = showFullStatus);
  let tmp = undefined !== editEnabled;
  if (tmp) {
    tmp = editEnabled;
  }
  showFullStatus = showFullStatus.showFullStatus;
  const callback = undefined !== showFullStatus && showFullStatus;
  const onPressTruncatedStatus = showFullStatus.onPressTruncatedStatus;
  const importDefault = onPressTruncatedStatus;
  ({ previewEmoji, previewText, placeholderText, prompt: closure_2 } = showFullStatus);
  ({ style, emojiOnlyStyle } = showFullStatus);
  const tmp2 = callback5(showFullStatus.hasCustomProfileTheme);
  const callback2 = tmp2;
  let tmp3;
  if (null != themeType) {
    tmp3 = closure_13[themeType];
  }
  if (null == tmp3) {
    tmp3 = closure_12;
  }
  const textVariant = tmp3.textVariant;
  const emojiOnlyEmojiSize = tmp3.emojiOnlyEmojiSize;
  ({ statusBubblePaddingHorizontal, statusBubblePaddingVertical } = tmp3);
  let obj = callback(dependencyMap[14]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = callback(dependencyMap[15]);
  if (undefined === previewText) {
    let state;
    if (null != customStatusActivity) {
      state = customStatusActivity.state;
    }
    previewText = state;
  }
  const gameMentionsAsPlainText = obj1.useGameMentionsAsPlainText(previewText);
  let tmp7 = null != gameMentionsAsPlainText;
  if (tmp7) {
    tmp7 = "" !== gameMentionsAsPlainText;
  }
  if (undefined === previewEmoji) {
    let emoji;
    if (null != customStatusActivity) {
      emoji = customStatusActivity.emoji;
    }
    previewEmoji = emoji;
  }
  const EMOJI_URL_BASE_SIZE = previewEmoji;
  let tmp10 = tmp9;
  if (null != previewEmoji) {
    tmp10 = !tmp7;
  }
  let tmp11 = !tmp7;
  if (!tmp7) {
    tmp11 = !tmp9;
  }
  if (tmp11) {
    tmp11 = undefined !== placeholderText;
  }
  if (tmp11) {
    tmp11 = "" !== placeholderText;
  }
  let tmp12 = gameMentionsAsPlainText;
  if (tmp11) {
    tmp12 = placeholderText;
  }
  let tmp13 = null != tmp12;
  if (tmp13) {
    tmp13 = "" !== tmp12;
  }
  const callback5 = tmp13;
  if (!tmp7) {
    tmp7 = tmp9;
  }
  if (!tmp7) {
    tmp7 = !tmp && tmp11;
    const tmp14 = !tmp && tmp11;
  }
  let tmp15 = !tmp7;
  if (!tmp7) {
    tmp15 = tmp;
  }
  const tmp16 = callback2(textVariant.useState(false), 2);
  closure_12 = tmp16[1];
  obj = {};
  let num = 0;
  if (tmp13) {
    num = tmp3.textMinWidth;
  }
  obj.minWidth = num;
  let num2 = 0;
  if (tmp10) {
    num2 = emojiOnlyEmojiSize + 2 * statusBubblePaddingVertical;
  }
  obj.minHeight = num2;
  if (tmp13) {
    let num3 = statusBubblePaddingVertical;
  } else {
    num3 = 0;
  }
  obj.paddingVertical = num3;
  obj.paddingHorizontal = statusBubblePaddingHorizontal;
  closure_13 = obj;
  obj = { top: statusBubblePaddingVertical, bottom: statusBubblePaddingVertical, left: statusBubblePaddingHorizontal, right: statusBubblePaddingHorizontal };
  const ref = textVariant.useRef(null);
  let closure_14 = ref;
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ref.current);
  let obj4 = callback(dependencyMap[16]);
  const scaledTextLineHeight = obj4.useScaledTextLineHeight(textVariant);
  const getClampedMaxLines = scaledTextLineHeight;
  if (!tmp7) {
    if (!tmp15) {
      return null;
    }
  }
  obj1 = {};
  let name;
  if (null != previewEmoji) {
    name = previewEmoji.name;
  }
  const items = [name, tmp12];
  const found = items.filter((arg0) => null != arg0);
  obj1.text = found.join(" ");
  const obj2 = {};
  const items1 = [style, ];
  let tmp23;
  if (tmp10) {
    tmp23 = emojiOnlyStyle;
  }
  items1[1] = tmp23;
  obj2.style = items1;
  const items2 = [, ];
  ({ bubble: arr3[0], smallCircle: arr3[1] } = tmp2);
  const items3 = [tmp10(trackUserProfileAction, { style: items2 }), , , ];
  const items4 = [, ];
  ({ bubble: arr5[0], largeCircle: arr5[1] } = tmp2);
  items3[1] = tmp10(trackUserProfileAction, { style: items4 });
  items3[2] = () => {
    if (null != onPressTruncatedStatus) {
      if (!closure_0) {
        if (tmp13) {
          let obj = {};
          const items = [tmp10.bubble, tmp10.statusBubble, obj, tmp10.statusBubbleMeasureable];
          obj.style = items;
          obj = {
            text: tmp12,
            isPlaceholderText: tmp11,
            emoji: previewEmoji,
            textVariant,
            onTextLayout(nativeEvent) {
                    callback(nativeEvent.nativeEvent.lines.length > callback2());
                  },
            lineHeight: scaledTextLineHeight
          };
          obj.children = tmp12(closure_17, obj);
          return tmp12(trackUserProfileAction, obj);
        }
      }
    }
  }();
  const obj3 = {};
  const items5 = [, , , ];
  ({ bubble: arr6[0], statusBubble: arr6[1] } = tmp2);
  items5[2] = obj;
  let statusBubbleLeftAligned = !tmp10;
  if (!tmp10) {
    statusBubbleLeftAligned = tmp2.statusBubbleLeftAligned;
  }
  items5[3] = statusBubbleLeftAligned;
  obj3.style = items5;
  obj3.ref = ref;
  const items6 = [, ];
  ({ bubble: arr7[0], largeCircleInner: arr7[1] } = tmp2);
  const items7 = [tmp10(trackUserProfileAction, { style: items6 }), ];
  if (tmp15) {
    if (tmp11) {
      let stringResult = placeholderText;
    } else {
      const intl3 = callback(dependencyMap[20]).intl;
      stringResult = intl3.string(callback(dependencyMap[20]).t.Vq4UmS);
    }
    obj4 = { accessibilityRole: "button" };
    const intl4 = callback(dependencyMap[20]).intl;
    obj4.accessibilityLabel = intl4.string(callback(dependencyMap[20]).t.zrpF/b);
    let formatToPlainStringResult;
    if (tmp11) {
      const intl5 = callback(dependencyMap[20]).intl;
      const obj5 = { prompt: placeholderText };
      formatToPlainStringResult = intl5.formatToPlainString(callback(dependencyMap[20]).t.ioWOMP, obj5);
    }
    obj4.accessibilityHint = formatToPlainStringResult;
    obj4.onPress = handlePressAddOrEditStatus;
    obj4.hitSlop = obj;
    const obj6 = {};
    let str10 = "text-md/medium";
    if (tmp11) {
      str10 = "text-md/normal";
    }
    obj6.variant = str10;
    obj6.color = "control-secondary-text-default";
    obj6.lineClamp = getClampedMaxLines();
    const obj7 = { paddingVertical: scaledTextLineHeight / 10 };
    if (!tmp11) {
      const merged = Object.assign(tmp11);
      obj6.style = obj7;
      const obj8 = {};
      const obj9 = { color: importDefault(dependencyMap[7]).colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs" };
      let tmp59;
      if (obj21.isAndroid()) {
        const obj10 = { marginBottom: 0.1 * -scaledTextLineHeight };
        tmp59 = obj10;
      }
      obj9.style = tmp59;
      obj8.children = tmp10(callback(dependencyMap[22]).CirclePlusIcon, obj9);
      const items8 = [tmp10(trackUserProfileAction, obj8), , ];
      const obj11 = { style: tmp2.addStatusIconSpacer };
      items8[1] = tmp10(trackUserProfileAction, obj11);
      items8[2] = stringResult;
      obj6.children = items8;
      obj4.children = tmp43(callback(dependencyMap[12]).Text, obj6);
      let tmp26Result = tmp37(callback(dependencyMap[21]).PressableOpacity, obj4);
      const obj21 = callback(dependencyMap[11]);
      const tmp55 = trackUserProfileAction;
    } else {
      const obj12 = {};
      if (obj17.isAndroid()) {
        obj12.fontFamily = "ggsans-NormalItalic, NotoSans-NormalItalic";
        let tmp49 = obj12;
      } else {
        obj12.fontStyle = "italic";
        tmp49 = obj12;
      }
      const obj17 = callback(dependencyMap[11]);
    }
    const tmp37 = tmp10;
    const tmp43 = tmp12;
  } else if (tmp) {
    const obj13 = { accessibilityRole: "button" };
    const intl2 = callback(dependencyMap[20]).intl;
    obj13.accessibilityLabel = intl2.string(callback(dependencyMap[20]).t.QdHxos);
    obj13.accessibilityValue = obj1;
    obj13.onPress = handlePressAddOrEditStatus;
    obj13.hitSlop = obj;
    obj13.children = renderStatusContent();
    tmp26Result = tmp10(callback(dependencyMap[21]).PressableOpacity, obj13);
  } else {
    if (null != onPressTruncatedStatus) {
      if (tmp16[0]) {
        if (!tmp11) {
          const obj14 = { accessibilityRole: "button" };
          const intl = callback(dependencyMap[20]).intl;
          const obj15 = {};
          let name1;
          if (null != previewEmoji) {
            name1 = previewEmoji.name;
          }
          let str6 = "";
          let str7 = "";
          if (null != name1) {
            str7 = name1;
          }
          obj15.emoji = str7;
          if (null != tmp12) {
            str6 = tmp12;
          }
          obj15.status = str6;
          obj14.accessibilityLabel = intl.formatToPlainString(callback(dependencyMap[20]).t.UpF5Qa, obj15);
          obj14.onPress = onPressTruncatedStatus;
          obj14.hitSlop = obj;
          obj14.children = renderStatusContent();
          tmp26Result = tmp10(callback(dependencyMap[21]).PressableOpacity, obj14);
          const tmp26 = tmp10;
        }
      }
    }
    tmp26Result = renderStatusContent();
  }
  items7[1] = tmp26Result;
  obj3.children = items7;
  items3[3] = tmp12(trackUserProfileAction, obj3);
  obj2.children = items3;
  return tmp12(trackUserProfileAction, obj2);
});
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/user_profile/native/UserProfileCustomStatusBubble.tsx");

export default forwardRefResult;
