// Module ID: 11898
// Function ID: 92068
// Name: getClampedMaxLines
// Dependencies: [57, 31, 27, 5512, 1852, 33, 4130, 689, 3803, 5085, 1392, 477, 4126, 5151, 8266, 9067, 9889, 4098, 11899, 5484, 1212, 4660, 11254, 2]

// Module 11898 (getClampedMaxLines)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { EMOJI_URL_BASE_SIZE } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
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
  const AnimateEmoji = require(3803) /* explicitContentFromProto */.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  let obj = { style: items };
  items = [{ height: size, width: size }, id.style];
  obj = {};
  const tmp2 = closure_8;
  const tmp3 = importDefault(5085);
  obj = { id: id.emojiId };
  const obj3 = importDefault(1392);
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
      obj1.children = callback2(EmojiImage, obj2);
      const items = [callback2(closure_6, obj1), ];
      const obj4 = {};
      const obj5 = { width: 0.5 * lineHeight };
      obj4.style = obj5;
      items[1] = callback2(closure_6, obj4);
      obj.children = items;
      let tmp14 = callback3(closure_9, obj);
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
        items1[1] = callback2(closure_6, obj7);
        obj6.children = items1;
        tmp14 = callback3(closure_9, obj6);
      }
    }
    const items2 = [tmp14, text];
    obj.children = items2;
    return callback3(require(4126) /* Text */.Text, obj);
  } else {
    obj1 = require(477) /* set */;
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
  const AnimateEmoji = require(3803) /* explicitContentFromProto */.AnimateEmoji;
  let id;
  const setting = AnimateEmoji.useSetting();
  if (null != emoji) {
    id = emoji.id;
  }
  let emojiURL;
  if (null != id) {
    let obj = importDefault(1392);
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
  obj = { style: callback5().container };
  const obj1 = { textEmojiStyle: { fontSize: size }, fastImageStyle: { width: size, height: size }, src: emojiURL };
  let name;
  const tmp = callback5();
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
  obj.children = tmp13(importDefault(5151), obj1);
  return tmp11(tmp12, obj);
}
({ PixelRatio: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = { container: { position: "relative" } };
  obj = {};
  const colors = importDefault(689).colors;
  obj.backgroundColor = arg0 ? colors.CUSTOM_STATUS_BUBBLE_BG : colors.BACKGROUND_SURFACE_HIGH;
  const colors2 = importDefault(689).colors;
  obj.borderColor = arg0 ? colors2.BORDER_MUTED : colors2.BORDER_SUBTLE;
  obj.borderWidth = 1;
  obj.bubble = obj;
  obj = { alignSelf: "flex-start", alignItems: "center", justifyContent: "center", borderRadius: importDefault(689).radii.lg };
  const merged = Object.assign(importDefault(689).shadows.SHADOW_LOW);
  obj["top"] = -14;
  obj.statusBubble = obj;
  obj.statusBubbleMeasureable = { position: "absolute", top: 0, left: 0, opacity: 0 };
  const obj1 = { position: "absolute", top: -30, width: 12, height: 12, borderRadius: importDefault(689).radii.round };
  const merged1 = Object.assign(importDefault(689).shadows.SHADOW_LOW);
  obj.smallCircle = obj1;
  const obj2 = { position: "absolute", top: -8, left: 12, width: 20, height: 20, borderRadius: importDefault(689).radii.round };
  const merged2 = Object.assign(importDefault(689).shadows.SHADOW_LOW);
  obj.largeCircle = obj2;
  const obj3 = { position: "absolute", top: -7.5, left: 13, width: 16, height: 16, borderWidth: 0, borderTopLeftRadius: importDefault(689).radii.round, borderTopRightRadius: importDefault(689).radii.round };
  obj.largeCircleInner = obj3;
  obj.addStatusIconSpacer = { width: 6 };
  obj.statusBubbleLeftAligned = { alignItems: "flex-start" };
  return obj;
});
let closure_12 = { textVariant: "text-md/normal", emojiOnlyEmojiSize: 32, textMinWidth: 42, statusBubblePaddingHorizontal: 12, statusBubblePaddingVertical: 7 };
let closure_13 = { [arg1(5512).UserProfileThemeTypes.PREVIEW]: { textVariant: "text-sm/normal", emojiOnlyEmojiSize: 26, textMinWidth: 53, statusBubblePaddingHorizontal: 10, statusBubblePaddingVertical: 6 } };
let closure_14 = _createForOfIteratorHelperLoose.createStyles(() => ({ container: { alignItems: "center" } }));
const forwardRefResult = importAllResult.forwardRef((showFullStatus) => {
  let customStatusActivity;
  let dependencyMap;
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
    let obj = onPressTruncatedStatus(outer1_2[17]);
    obj.hideActionSheet();
    obj = {};
    const items = [onPressTruncatedStatus(outer1_2[19]).USER_PROFILE_CUSTOM_STATUS_BUBBLE];
    obj.analyticsLocations = items;
    obj.prompt = closure_2;
    const result = callback(outer1_2[18]).openEditCustomStatusModal(obj);
  }
  function renderStatusContent() {
    if (closure_11) {
      let obj = { text: closure_10, isPlaceholderText: closure_9, emoji: previewEmoji, textVariant };
      let tmp14;
      if (!closure_0) {
        tmp14 = scaledTextLineHeight();
      }
      obj.lineClamp = tmp14;
      obj.lineHeight = scaledTextLineHeight;
      let tmp7Result = closure_9(outer1_17, obj);
      const tmp7 = closure_9;
      const tmp8 = outer1_17;
    } else if (tmp10) {
      obj = { emoji: previewEmoji, size: emojiOnlyEmojiSize };
      tmp7Result = tmp10(outer1_18, obj);
    }
    return tmp7Result;
  }
  ({ customStatusActivity, themeType, editEnabled } = showFullStatus);
  let tmp = undefined !== editEnabled;
  if (tmp) {
    tmp = editEnabled;
  }
  showFullStatus = showFullStatus.showFullStatus;
  const _require = undefined !== showFullStatus && showFullStatus;
  const onPressTruncatedStatus = showFullStatus.onPressTruncatedStatus;
  ({ previewEmoji, previewText, placeholderText, prompt: dependencyMap } = showFullStatus);
  ({ style, emojiOnlyStyle } = showFullStatus);
  const tmp2 = callback4(showFullStatus.hasCustomProfileTheme);
  const callback = tmp2;
  let tmp3;
  if (null != themeType) {
    tmp3 = obj[themeType];
  }
  if (null == tmp3) {
    tmp3 = closure_12;
  }
  const textVariant = tmp3.textVariant;
  const emojiOnlyEmojiSize = tmp3.emojiOnlyEmojiSize;
  ({ statusBubblePaddingHorizontal, statusBubblePaddingVertical } = tmp3);
  obj = _require(8266);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = _require(9067);
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
  let tmp10 = tmp9;
  if (null != previewEmoji) {
    tmp10 = !tmp7;
  }
  const callback2 = tmp10;
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
  let closure_9 = tmp11;
  let tmp12 = gameMentionsAsPlainText;
  if (tmp11) {
    tmp12 = placeholderText;
  }
  let closure_10 = tmp12;
  let tmp13 = null != tmp12;
  if (tmp13) {
    tmp13 = "" !== tmp12;
  }
  callback4 = tmp13;
  if (!tmp7) {
    tmp7 = tmp9;
  }
  if (!tmp7) {
    tmp7 = !tmp && tmp11;
    let tmp14 = !tmp && tmp11;
  }
  let tmp15 = !tmp7;
  if (!tmp7) {
    tmp15 = tmp;
  }
  const tmp16 = callback(textVariant.useState(false), 2);
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
  obj = { top: statusBubblePaddingVertical, bottom: statusBubblePaddingVertical, left: statusBubblePaddingHorizontal, right: statusBubblePaddingHorizontal };
  const ref = textVariant.useRef(null);
  const imperativeHandle = textVariant.useImperativeHandle(arg1, () => ref.current);
  let obj4 = _require(9889);
  const scaledTextLineHeight = obj4.useScaledTextLineHeight(textVariant);
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
  let items = [name, tmp12];
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
  const items3 = [callback2(trackUserProfileAction, { style: items2 }), , , ];
  const items4 = [, ];
  ({ bubble: arr5[0], largeCircle: arr5[1] } = tmp2);
  items3[1] = callback2(trackUserProfileAction, { style: items4 });
  items3[2] = (() => {
    if (null != onPressTruncatedStatus) {
      if (!closure_0) {
        if (closure_11) {
          let obj = {};
          const items = [tmp10.bubble, tmp10.statusBubble, obj, tmp10.statusBubbleMeasureable];
          obj.style = items;
          obj = {
            text: closure_10,
            isPlaceholderText: closure_9,
            emoji: previewEmoji,
            textVariant,
            onTextLayout(nativeEvent) {
                    outer1_12(nativeEvent.nativeEvent.lines.length > scaledTextLineHeight());
                  },
            lineHeight: scaledTextLineHeight
          };
          obj.children = closure_10(outer1_17, obj);
          return closure_10(trackUserProfileAction, obj);
        }
      }
    }
  })();
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
  const items7 = [callback2(trackUserProfileAction, { style: items6 }), ];
  if (tmp15) {
    if (tmp11) {
      let stringResult = placeholderText;
    } else {
      const intl3 = _require(1212).intl;
      stringResult = intl3.string(_require(1212).t.Vq4UmS);
    }
    obj4 = { accessibilityRole: "button" };
    const intl4 = _require(1212).intl;
    obj4.accessibilityLabel = intl4.string(_require(1212).t["zrpF/b"]);
    let formatToPlainStringResult;
    if (tmp11) {
      const intl5 = _require(1212).intl;
      const obj5 = { prompt: placeholderText };
      formatToPlainStringResult = intl5.formatToPlainString(_require(1212).t.ioWOMP, obj5);
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
    obj6.lineClamp = scaledTextLineHeight();
    const obj7 = { paddingVertical: scaledTextLineHeight / 10 };
    if (!tmp11) {
      const merged = Object.assign(tmp11);
      obj6.style = obj7;
      const obj8 = {};
      const obj9 = { color: onPressTruncatedStatus(689).colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs" };
      let tmp59;
      if (obj21.isAndroid()) {
        const obj10 = { marginBottom: 0.1 * -scaledTextLineHeight };
        tmp59 = obj10;
      }
      obj9.style = tmp59;
      obj8.children = callback2(_require(11254).CirclePlusIcon, obj9);
      const items8 = [callback2(trackUserProfileAction, obj8), , ];
      const obj11 = { style: tmp2.addStatusIconSpacer };
      items8[1] = callback2(trackUserProfileAction, obj11);
      items8[2] = stringResult;
      obj6.children = items8;
      obj4.children = tmp43(_require(4126).Text, obj6);
      let tmp26Result = tmp37(_require(4660).PressableOpacity, obj4);
      obj21 = _require(477);
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
      obj17 = _require(477);
    }
    tmp37 = callback2;
    tmp43 = closure_10;
  } else if (tmp) {
    const obj13 = { accessibilityRole: "button" };
    const intl2 = _require(1212).intl;
    obj13.accessibilityLabel = intl2.string(_require(1212).t.QdHxos);
    obj13.accessibilityValue = obj1;
    obj13.onPress = handlePressAddOrEditStatus;
    obj13.hitSlop = obj;
    obj13.children = renderStatusContent();
    tmp26Result = callback2(_require(4660).PressableOpacity, obj13);
  } else {
    if (null != onPressTruncatedStatus) {
      if (tmp16[0]) {
        if (!tmp11) {
          const obj14 = { accessibilityRole: "button" };
          const intl = _require(1212).intl;
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
          obj14.accessibilityLabel = intl.formatToPlainString(_require(1212).t.UpF5Qa, obj15);
          obj14.onPress = onPressTruncatedStatus;
          obj14.hitSlop = obj;
          obj14.children = renderStatusContent();
          tmp26Result = callback2(_require(4660).PressableOpacity, obj14);
          const tmp26 = callback2;
        }
      }
    }
    tmp26Result = renderStatusContent();
  }
  items7[1] = tmp26Result;
  obj3.children = items7;
  items3[3] = closure_10(trackUserProfileAction, obj3);
  obj2.children = items3;
  return closure_10(trackUserProfileAction, obj2);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileCustomStatusBubble.tsx");

export default forwardRefResult;
