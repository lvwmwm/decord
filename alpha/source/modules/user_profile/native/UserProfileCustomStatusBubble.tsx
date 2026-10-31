// Module ID: 11395
// Function ID: 11396
// Name: UserProfileCustomStatusBubble
// Dependencies: [32, 19, 17, 7377, 1386, 1083, 21, 1375, 5014, 575, 8031, 4839, 5717, 1409, 5624, 7300, 5596, 8761, 10749, 11047, 5258, 11396, 7351, 1113, 6980, 11488, 2]
// Exports: default

// Module 11395 (UserProfileCustomStatusBubble)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import EmojiConstants from "EmojiConstants" /* 1386 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import UserSettings from "UserSettings" /* 4839 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import EmojiDefault from "Emoji" /* 7300 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import Constants2 from "Constants" /* 7377 */;
import inlineStyles from "inlineStyles" /* 8031 */;
import CustomStatusUtils from "CustomStatusUtils" /* 11396 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;
let _require, importDefault;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
function StatusBubbleConnector(arg0) {
  let backgroundColor;
  let borderColor;
  let items;
  let style;
  ({ backgroundColor, borderColor, style } = arg0);
  size = { pointerEvents: "none", style, width: 20, height: 11, viewBox: "0 0 20 11", children: items };
  items = [, ];
  const tmp = inlineStylesDefault;
  items[0] = React4(inlineStyles.Path, { d: "M0 10 A10 10 0 0 1 20 10 L20 11 L0 11 Z", fill: backgroundColor });
  items[1] = React4(inlineStyles.Path, { d: "M0.5 10 A9.5 9.5 0 0 1 19.5 10", fill: "none", stroke: borderColor, strokeWidth: 1 });
  return authStore(tmp, size);
}
function EmojiImage(emojiId) {
  let animated;
  let getEmojiURL;
  let items;
  let obj2;
  let tmp5;
  ({ size, animated } = emojiId);
  emojiId = emojiId.emojiId;
  if (animated === undefined) {
    animated = false;
  }
  const style = emojiId.style;
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  const obj = { style: items, source: { uri: getEmojiURL(obj2) }, resizeMode: "contain" };
  items = [{ height: size, width: size }, style];
  obj2 = { id: emojiId, animated: tmp5, size: EMOJI_URL_BASE_SIZE };
  const tmp3 = FastImageDefault;
  getEmojiURL = AvatarUtilsDefault.getEmojiURL;
  AvatarUtilsDefault;
  tmp5 = Boolean(animated) && setting;
  ({ uri: getEmojiURL(obj2) });
  return React4(tmp3, obj);
}
function TextStatusContent(arg0) {
  let emoji;
  let isPlaceholderText;
  let items;
  let items1;
  let items2;
  let lineClamp;
  let lineHeight;
  let obj11;
  let obj14;
  let obj8;
  let obj9;
  let onTextLayout;
  let text;
  let textVariant;
  let tmp6Result;
  ({ emoji, lineHeight, isPlaceholderText } = arg0);
  ({ text, textVariant, lineClamp, onTextLayout } = arg0);
  if (isPlaceholderText === undefined) {
    isPlaceholderText = false;
  }
  let tmp = isPlaceholderText;
  const obj = { paddingVertical: lineHeight / 10 };
  if (tmp) {
    let obj4;
    const obj2 = PlatformUtils;
    if (obj2.isAndroid()) {
      obj4 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
      const obj3 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
    } else {
      obj4 = { fontStyle: "italic" };
    }
    tmp = obj4;
  }
  const merged = Object.assign(tmp);
  let id;
  const obj5 = { variant: textVariant, color: "text-default", lineClamp, onTextLayout, style: obj, children: items2 };
  const Text = Text_Text.Text;
  if (emoji != null) {
    id = emoji.id;
  }
  if (null != id) {
    const obj6 = { children: items };
    const obj7 = { children: React4(EmojiImage, obj8) };
    obj8 = { emojiId: emoji.id, size: 0.9 * lineHeight, animated: emoji.animated, style: obj9 };
    obj9 = { marginBottom: 0.1 * -lineHeight };
    items = [React4(metroRequire, obj7), ];
    const obj10 = { style: obj11 };
    obj11 = { width: 0.5 * lineHeight };
    items[1] = React4(metroRequire, obj10);
    tmp6Result = tmp6(unpackModuleId, obj6);
  } else {
    let name;
    if (emoji != null) {
      name = emoji.name;
    }
    tmp6Result = null;
    if (null != name) {
      const obj12 = { children: items1 };
      items1 = [emoji.name, ];
      const obj13 = { style: obj14 };
      obj14 = { width: 0.4 * lineHeight };
      items1[1] = React4(metroRequire, obj13);
      tmp6Result = tmp6(unpackModuleId, obj12);
    }
  }
  items2 = [tmp6Result, text, ];
  let tmp17 = null;
  if (isPlaceholderText) {
    tmp17 = str;
  }
  items2[2] = tmp17;
  return authStore(Text, obj5);
}
function EmojiOnlyStatusContent(arg0) {
  let _Boolean;
  let animated;
  let emoji;
  let obj3;
  let tmp14;
  ({ emoji, size } = arg0);
  const tmp = closure_19();
  const AnimateEmoji = UserSettings.AnimateEmoji;
  let id;
  const setting = AnimateEmoji.useSetting();
  if (emoji != null) {
    id = emoji.id;
  }
  let emojiURL;
  if (null != id) {
    const obj = { id: emoji.id, animated: _Boolean(animated) && setting, size: EMOJI_URL_BASE_SIZE };
    animated = undefined;
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    _Boolean = Boolean;
    AvatarUtilsDefault;
    if (emoji != null) {
      animated = emoji.animated;
    }
    _Boolean(animated) && setting;
    emojiURL = getEmojiURL(obj);
  }
  const obj2 = { style: tmp.container, children: React4(tmp14, obj3) };
  obj3 = { textEmojiStyle: { fontSize: size }, fastImageStyle: { width: size, height: size }, src: emojiURL, name: str };
  str = undefined;
  const tmp13 = metroRequire;
  tmp14 = EmojiDefault;
  if (emoji != null) {
    str = emoji.name;
  }
  if (str == null) {
    str = "";
  }
  return React4(tmp13, obj2);
}
({ PixelRatio: hasOwnProperty, View: metroRequire } = react_native);
const UserProfileThemeTypes = Constants2.UserProfileThemeTypes;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const Fonts = Constants.Fonts;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let str = "";
if (PlatformUtils.isAndroid()) {
  str = "\u00A0";
}
let createStyles = createStyles_mod;
let closure_13 = createStyles.createStyles((arg0) => {
  let BACKGROUND_SURFACE_HIGH;
  let colors2;
  let obj2;
  let obj3;
  let tmp4;
  const obj = { container: { position: "relative" }, bubble: obj2, statusBubble: obj3, statusBubbleMeasureable: { position: "absolute", top: 0, left: 0, opacity: 0 }, smallCircle: size, largeCircle: { position: "absolute", top: -10, left: 12, width: 20, height: 11 }, addStatusIconSpacer: { width: 6 }, statusBubbleLeftAligned: { alignItems: "flex-start" } };
  const colors = nativeDefault.colors;
  if (arg0) {
    BACKGROUND_SURFACE_HIGH = colors.CUSTOM_STATUS_BUBBLE_BG;
    tmp4 = tmp;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp4 = tmp;
  }
  obj2 = { backgroundColor: BACKGROUND_SURFACE_HIGH, borderColor: arg0 ? colors2.BORDER_MUTED : colors2.BORDER_SUBTLE, borderWidth: 1 };
  colors2 = tmp4(575).colors;
  obj3 = { alignSelf: "flex-start", alignItems: "center", justifyContent: "center", borderRadius: tmp4(575).radii.lg, top: -14 };
  const merged = Object.assign(tmp4(575).shadows.SHADOW_LOW);
  size = { position: "absolute", top: -30, width: 12, height: 12, borderRadius: tmp4(575).radii.round };
  const merged1 = Object.assign(tmp4(575).shadows.SHADOW_LOW);
  return obj;
});
let closure_15 = { textVariant: "text-md/normal", emojiOnlyEmojiSize: 32, textMinWidth: 42, statusBubblePaddingHorizontal: 12, statusBubblePaddingVertical: 7 };
let closure_16 = { [UserProfileThemeTypes.PREVIEW]: { textVariant: "text-sm/normal", emojiOnlyEmojiSize: 26, textMinWidth: 53, statusBubblePaddingHorizontal: 10, statusBubblePaddingVertical: 6 } };
createStyles = createStyles_mod;
let closure_19 = createStyles.createStyles(() => ({ container: { alignItems: "center" } }));
let size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileCustomStatusBubble.tsx");

export default function UserProfileCustomStatusBubble(ref) {
  let BACKGROUND_SURFACE_HIGH;
  let Text;
  let _prompt;
  let c1;
  let closure_0;
  let customStatusActivity;
  let editEnabled;
  let emojiOnlyStyle;
  let formatToPlainStringResult;
  let found;
  let hasCustomProfileTheme;
  let intl2;
  let intl4;
  let items2;
  let items3;
  let items4;
  let items6;
  let items7;
  let num2;
  let num3;
  let obj12;
  let obj13;
  let obj7;
  let onPressTruncatedStatus;
  let placeholderText;
  let previewEmoji;
  let previewText;
  let statusBubblePaddingHorizontal;
  let statusBubblePaddingVertical;
  let style;
  let textMinWidth;
  let themeType;
  let tmp10;
  let tmp36Result2;
  let tmp50;
  let tmp9;
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  importDefault = undefined;
  let textVariant;
  let emojiOnlyEmojiSize;
  let trackUserProfileAction;
  previewEmoji = undefined;
  let closure_6;
  let isPlaceholderText;
  let str4;
  let closure_9;
  let closure_10;
  let ref1;
  let scaledTextLineHeight;
  ({ customStatusActivity, themeType, hasCustomProfileTheme, editEnabled } = merged);
  const showFullStatus = merged.showFullStatus;
  const tmp3 = undefined !== showFullStatus && showFullStatus;
  _require = tmp3;
  ({ onPressTruncatedStatus, previewEmoji, previewText, placeholderText, prompt: c1 } = merged);
  ({ style, emojiOnlyStyle } = merged);
  const tmp4 = closure_13(hasCustomProfileTheme);
  let tmp8 = importDefault;
  const useToken = require("useToken").useToken;
  const tmp7 = require("useToken");
  const colors = require("native").colors;
  if (hasCustomProfileTheme) {
    BACKGROUND_SURFACE_HIGH = colors.CUSTOM_STATUS_BUBBLE_BG;
    tmp9 = tmp8;
    tmp10 = tmp8;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp9 = tmp8;
    tmp10 = tmp8;
  }
  const token = useToken(BACKGROUND_SURFACE_HIGH);
  const useToken2 = tmp5(tmp6[16]).useToken;
  require("useToken");
  const colors2 = tmp10(tmp6[9]).colors;
  let tmp14;
  const token2 = useToken2(hasCustomProfileTheme ? colors2.BORDER_MUTED : colors2.BORDER_SUBTLE);
  if (null != themeType) {
    tmp14 = closure_16[themeType];
  }
  if (tmp14 == null) {
    tmp14 = closure_15;
  }
  textVariant = tmp14.textVariant;
  emojiOnlyEmojiSize = tmp14.emojiOnlyEmojiSize;
  ({ statusBubblePaddingHorizontal, statusBubblePaddingVertical, textMinWidth } = tmp14);
  const tmp5Result6 = require("UserProfileAnalyticsContext");
  trackUserProfileAction = tmp5Result6.useUserProfileAnalyticsContext().trackUserProfileAction;
  const useGameMentionsAsPlainText = tmp5(tmp6[18]).useGameMentionsAsPlainText;
  require("useGameMentionsAsPlainText");
  if (undefined === previewText) {
    let state;
    if (customStatusActivity != null) {
      state = customStatusActivity.state;
    }
    previewText = state;
  }
  const gameMentionsAsPlainText = useGameMentionsAsPlainText(previewText);
  let tmp19 = null != gameMentionsAsPlainText && "" !== gameMentionsAsPlainText;
  if (undefined === previewEmoji) {
    let emoji;
    if (customStatusActivity != null) {
      emoji = customStatusActivity.emoji;
    }
    previewEmoji = emoji;
  }
  closure_6 = tmp22;
  isPlaceholderText = tmp23;
  str4 = gameMentionsAsPlainText;
  if (!tmp19 && !tmp21 && undefined !== placeholderText && "" !== placeholderText) {
    str4 = placeholderText;
  }
  closure_9 = tmp24;
  if (!tmp19) {
    tmp19 = tmp21;
  }
  if (!tmp19) {
    tmp19 = !tmp2 && tmp23;
  }
  let obj2 = trackUserProfileAction;
  const tmp27 = emojiOnlyEmojiSize(trackUserProfileAction.useState(false), 2);
  closure_10 = tmp27[1];
  let num = 0;
  const first = tmp27[0];
  if (null != str4 && "" !== str4) {
    num = textMinWidth;
  }
  let obj = { minWidth: num, minHeight: num2, paddingVertical: num3, paddingHorizontal: statusBubblePaddingHorizontal };
  num2 = 0;
  if (null != previewEmoji && !tmp19) {
    num2 = emojiOnlyEmojiSize + 2 * statusBubblePaddingVertical;
  }
  if (null != str4 && "" !== str4) {
    num3 = statusBubblePaddingVertical;
  } else {
    num3 = 0;
  }
  const rect = { top: statusBubblePaddingVertical, bottom: statusBubblePaddingVertical, left: statusBubblePaddingHorizontal, right: statusBubblePaddingHorizontal };
  ref1 = obj2.useRef(null);
  const imperativeHandle = obj2.useImperativeHandle(ref, () => ref1.current);
  const tmp5Result8 = require("useScaledTextLineHeight");
  scaledTextLineHeight = tmp5Result8.useScaledTextLineHeight(textVariant);
  if (!tmp19) {
    if (!(!tmp19 && (undefined !== editEnabled && editEnabled))) {
      return null;
    }
  }
  let name;
  if (previewEmoji != null) {
    name = previewEmoji.name;
  }
  let items = [name, str4];
  const obj3 = { text: found.join(" ") };
  found = items.filter((item) => null != item);
  const items1 = [style, ];
  let tmp35;
  if (null != previewEmoji && !tmp19) {
    tmp35 = emojiOnlyStyle;
  }
  const obj4 = { style: items1, children: items3 };
  items1[1] = tmp35;
  const obj5 = { style: items2 };
  items2 = [, ];
  ({ bubble: arr3[0], smallCircle: arr3[1] } = tmp4);
  items3 = [closure_9(closure_6, obj5), , ];
  let tmp36Result;
  if (null != onPressTruncatedStatus) {
    if (!tmp3) {
      if (null != str4 && "" !== str4) {
        const obj6 = { style: items4, children: closure_9(TextStatusContent, obj7) };
        items4 = [, , , ];
        ({ bubble: arr5[0], statusBubble: arr5[1] } = tmp4);
        items4[2] = obj;
        items4[3] = tmp4.statusBubbleMeasureable;
        obj7 = {
          text: str4,
          isPlaceholderText: !tmp19 && !tmp21 && undefined !== placeholderText && "" !== placeholderText,
          emoji: previewEmoji,
          textVariant,
          onTextLayout(nativeEvent) {
                  closure_10(nativeEvent.nativeEvent.lines.length > Math.ceil(2 * hasOwnProperty.getFontScale()));
                },
          lineHeight: scaledTextLineHeight
        };
        tmp36Result = tmp36(tmp34, obj6);
      }
    }
  }
  items3[1] = tmp36Result;
  const items5 = [, , , ];
  ({ bubble: arr6[0], statusBubble: arr6[1] } = tmp4);
  items5[2] = obj;
  function handlePressAddOrEditStatus() {
    let items;
    trackUserProfileAction({ action: "PRESS_EDIT_CUSTOM_STATUS" });
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = { analyticsLocations: items, prompt: _prompt };
    const openEditCustomStatusModal = CustomStatusUtils.openEditCustomStatusModal;
    items = [];
    CustomStatusUtils;
    items[0] = AnalyticsLocationDefault.USER_PROFILE_CUSTOM_STATUS_BUBBLE;
    const result = openEditCustomStatusModal(obj2);
  }
  const obj8 = { style: items5, ref: ref1, children: items6 };
  const tmp39 = !(null != previewEmoji && !tmp19) && tmp4.statusBubbleLeftAligned;
  items5[3] = tmp39;
  items6 = [, ];
  const obj9 = { style: tmp4.largeCircle, backgroundColor: token, borderColor: token2 };
  items6[0] = closure_9(StatusBubbleConnector, obj9);
  if (!tmp19 && (undefined !== editEnabled && editEnabled)) {
    let stringResult = placeholderText;
    if (!(!tmp19 && !tmp21 && undefined !== placeholderText && "" !== placeholderText)) {
      const intl3 = tmp5(tmp6[23]).intl;
      stringResult = intl3.string(tmp5(tmp6[23]).t.Vq4UmS);
    }
    const obj10 = { accessibilityRole: "button", accessibilityLabel: intl4.string(require("intl").t["zrpF/b"]), accessibilityHint: formatToPlainStringResult, onPress: handlePressAddOrEditStatus, hitSlop: rect, children: closure_10(Text, obj12) };
    const PressableOpacity3 = tmp5(tmp6[24]).PressableOpacity;
    intl4 = tmp5(tmp6[23]).intl;
    formatToPlainStringResult = undefined;
    if (!tmp19 && !tmp21 && undefined !== placeholderText && "" !== placeholderText) {
      const intl5 = tmp5(tmp6[23]).intl;
      const obj11 = { prompt: placeholderText };
      formatToPlainStringResult = intl5.formatToPlainString(tmp5(tmp6[23]).t.ioWOMP, obj11);
    }
    let str7 = "text-md/medium";
    Text = tmp5(tmp6[14]).Text;
    if (!tmp19 && !tmp21 && undefined !== placeholderText && "" !== placeholderText) {
      str7 = "text-md/normal";
    }
    let _Math = Math;
    obj12 = { variant: str7, color: "control-secondary-text-default", lineClamp: Math.ceil(2 * previewEmoji.getFontScale()), style: obj13, children: items7 };
    let tmp45 = tmp23;
    obj13 = { paddingVertical: scaledTextLineHeight / 10 };
    if (tmp45) {
      let obj15;
      const tmp5Result9 = require("PlatformUtils");
      if (tmp5Result9.isAndroid()) {
        obj15 = { fontFamily: str4.PRIMARY_NORMAL_ITALIC };
        const obj14 = { fontFamily: str4.PRIMARY_NORMAL_ITALIC };
      } else {
        obj15 = { fontStyle: "italic" };
      }
      tmp45 = obj15;
    }
    const merged1 = Object.assign(tmp45);
    const obj16 = { color: tmp9(textVariant[9]).colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs", style: tmp50 };
    const CirclePlusIcon = tmp5(tmp6[25]).CirclePlusIcon;
    tmp50 = undefined;
    const tmp5Result10 = require("PlatformUtils");
    if (tmp5Result10.isAndroid()) {
      tmp50 = { marginBottom: 0.1 * -scaledTextLineHeight };
      const obj17 = { marginBottom: 0.1 * -scaledTextLineHeight };
    }
    const obj18 = { children: closure_9(CirclePlusIcon, obj16) };
    items7 = [closure_9(closure_6, obj18), , , ];
    const obj19 = { style: tmp4.addStatusIconSpacer };
    items7[1] = closure_9(closure_6, obj19);
    items7[2] = stringResult;
    let tmp51 = null;
    if (!tmp19 && !tmp21 && undefined !== placeholderText && "" !== placeholderText) {
      tmp51 = scaledTextLineHeight;
    }
    items7[3] = tmp51;
    tmp36Result2 = tmp36(PressableOpacity3, obj10);
  } else {
    function renderStatusContent() {
      let rounded;
      let tmp8Result;
      const tmp = c9;
      if (tmp) {
        const obj2 = { text: str4, isPlaceholderText, emoji: previewEmoji, textVariant, lineClamp: rounded, lineHeight: scaledTextLineHeight };
        rounded = undefined;
        const tmp8 = React4;
        const tmp9 = TextStatusContent;
        if (!closure_0) {
          const _Math = Math;
          rounded = Math.ceil(2 * hasOwnProperty.getFontScale());
        }
        tmp8Result = tmp8(tmp9, obj2);
      } else if (closure_6) {
        const obj = { emoji: previewEmoji, size: emojiOnlyEmojiSize };
        tmp8Result = React4(EmojiOnlyStatusContent, obj);
      }
      return tmp8Result;
    }
    if (undefined !== editEnabled && editEnabled) {
      const obj20 = { accessibilityRole: "button", accessibilityLabel: intl2.string(require("intl").t.QdHxos), accessibilityValue: obj3, onPress: handlePressAddOrEditStatus, hitSlop: rect, children: renderStatusContent() };
      const PressableOpacity2 = tmp5(tmp6[24]).PressableOpacity;
      intl2 = tmp5(tmp6[23]).intl;
      tmp36Result2 = tmp36(PressableOpacity2, obj20);
    } else {
      if (null != onPressTruncatedStatus) {
        if (first) {
          if (!(!tmp19 && !tmp21 && undefined !== placeholderText && "" !== placeholderText)) {
            const PressableOpacity = tmp5(tmp6[24]).PressableOpacity;
            const intl = tmp5(tmp6[23]).intl;
            const formatToPlainString = intl.formatToPlainString;
            let str6;
            const UpF5Qa = tmp5(tmp6[23]).t.UpF5Qa;
            if (previewEmoji != null) {
              str6 = previewEmoji.name;
            }
            if (str6 == null) {
              str6 = "";
            }
            const obj21 = { emoji: str6, status: str4 };
            if (str4 == null) {
              str4 = "";
            }
            const obj22 = { accessibilityRole: "button", accessibilityLabel: formatToPlainString(UpF5Qa, obj21), onPress: onPressTruncatedStatus, hitSlop: rect, children: renderStatusContent() };
            tmp36Result2 = tmp36(PressableOpacity, obj22);
          }
        }
      }
      tmp36Result2 = renderStatusContent();
    }
  }
  items6[1] = tmp36Result2;
  items3[2] = closure_10(closure_6, obj8);
  return closure_10(closure_6, obj4);
};
