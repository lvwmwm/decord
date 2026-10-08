// Module ID: 10489
// Function ID: 10490
// Name: UserProfileCustomStatusBubble
// Dependencies: [32, 109, 19, 17, 6891, 1392, 1096, 21, 5090, 587, 558, 576, 7550, 2040, 1414, 6164, 1381, 5086, 6809, 4778, 8290, 10224, 10490, 5054, 10492, 6865, 1126, 6189, 11220, 2]

// Module 10489 (UserProfileCustomStatusBubble)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import EmojiConstants from "EmojiConstants" /* 1392 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import UserSettings from "UserSettings" /* 2040 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Text_Text from "Text/Text" /* 5086 */;
import FastImageDefault from "FastImage" /* 6164 */;
import EmojiDefault from "Emoji" /* 6809 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6865 */;
import Constants2 from "Constants" /* 6891 */;
import inlineStyles from "inlineStyles" /* 7550 */;
import CustomStatusUtils from "CustomStatusUtils" /* 10492 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;
let _require, importDefault;

let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
let closure_3 = ["ref"];
let react = react_mod;
({ PixelRatio: metroImportDefault, View: metroImportAll } = react_native);
const UserProfileThemeTypes = Constants2.UserProfileThemeTypes;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
let Fonts = Constants.Fonts;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let closure_14 = createStyles.createStyles((arg0) => {
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
  colors2 = tmp4(587).colors;
  obj3 = { alignSelf: "flex-start", alignItems: "center", justifyContent: "center", borderRadius: tmp4(587).radii.lg, top: -14 };
  const merged = Object.assign(tmp4(587).shadows.SHADOW_LOW);
  size = { position: "absolute", top: -30, width: 12, height: 12, borderRadius: tmp4(587).radii.round };
  const merged1 = Object.assign(tmp4(587).shadows.SHADOW_LOW);
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function StatusBubbleConnector(arg0) {
  let backgroundColor;
  let borderColor;
  let items;
  let style;
  let tmp4;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(8);
  ({ backgroundColor, borderColor, style } = arg0);
  if (cResult[0] !== backgroundColor) {
    const obj2 = { d: "M0 10 A10 10 0 0 1 20 10 L20 11 L0 11 Z", fill: backgroundColor };
    const tmp6 = unpackModuleId(inlineStyles.Path, obj2);
    cResult[0] = backgroundColor;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== borderColor) {
    const obj3 = { d: "M0.5 10 A9.5 9.5 0 0 1 19.5 10", fill: "none", stroke: borderColor, strokeWidth: 1 };
    const tmp9 = unpackModuleId(inlineStyles.Path, obj3);
    cResult[2] = borderColor;
    cResult[3] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === style) {
    if (cResult[5] === tmp4) {
      let tmp10;
      if (cResult[6] === tmp7) {
        tmp10 = cResult[7];
      }
      return tmp10;
    }
  }
  size = { pointerEvents: "none", style, width: 20, height: 11, viewBox: "0 0 20 11", children: items };
  items = [tmp4, tmp7];
  const tmp11 = closure_12(inlineStylesDefault, size);
  cResult[4] = style;
  cResult[5] = tmp4;
  cResult[6] = tmp7;
  cResult[7] = tmp11;
  tmp10 = tmp11;
}) : (function StatusBubbleConnector(arg0) {
  let backgroundColor;
  let borderColor;
  let items;
  let style;
  ({ backgroundColor, borderColor, style } = arg0);
  size = { pointerEvents: "none", style, width: 20, height: 11, viewBox: "0 0 20 11", children: items };
  items = [, ];
  const tmp = inlineStylesDefault;
  items[0] = unpackModuleId(inlineStyles.Path, { d: "M0 10 A10 10 0 0 1 20 10 L20 11 L0 11 Z", fill: backgroundColor });
  items[1] = unpackModuleId(inlineStyles.Path, { d: "M0.5 10 A9.5 9.5 0 0 1 19.5 10", fill: "none", stroke: borderColor, strokeWidth: 1 });
  return closure_12(tmp, size);
});
let closure_16 = { textVariant: "text-md/normal", emojiOnlyEmojiSize: 32, textMinWidth: 42, statusBubblePaddingHorizontal: 12, statusBubblePaddingVertical: 7 };
let closure_17 = { [UserProfileThemeTypes.PREVIEW]: { textVariant: "text-sm/normal", emojiOnlyEmojiSize: 26, textMinWidth: 53, statusBubblePaddingHorizontal: 10, statusBubblePaddingVertical: 6 } };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiImage(arg0) {
  let animated;
  let emojiId;
  let style;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(14);
  ({ emojiId, size, animated, style } = arg0);
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  if (cResult[0] !== size) {
    const size1 = { height: size, width: size };
    cResult[0] = size;
    cResult[1] = size1;
    tmp6 = size1;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === style) {
    let tmp7;
    if (cResult[3] === tmp6) {
      tmp7 = cResult[4];
    }
    if (cResult[5] === setting) {
      if (cResult[6] === (undefined !== animated && animated)) {
        let tmp8;
        let tmp15;
        if (cResult[7] === emojiId) {
          tmp8 = cResult[8];
        }
        if (cResult[9] !== tmp8) {
          const obj2 = { uri: tmp8 };
          cResult[9] = tmp8;
          cResult[10] = obj2;
          tmp15 = obj2;
        } else {
          tmp15 = cResult[10];
        }
        if (cResult[11] === tmp7) {
          let tmp16;
          if (cResult[12] === tmp15) {
            tmp16 = cResult[13];
          }
          return tmp16;
        }
        const obj3 = { style: tmp7, source: tmp15, resizeMode: "contain" };
        const tmp19 = unpackModuleId(FastImageDefault, obj3);
        cResult[11] = tmp7;
        cResult[12] = tmp15;
        cResult[13] = tmp19;
        tmp16 = tmp19;
      }
    }
    const _Boolean = Boolean;
    const obj4 = { id: emojiId, animated: Boolean(undefined !== animated && animated) && setting, size: EMOJI_URL_BASE_SIZE };
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    Boolean(undefined !== animated && animated) && setting;
    const emojiURL = getEmojiURL(obj4);
    cResult[5] = setting;
    cResult[6] = undefined !== animated && animated;
    cResult[7] = emojiId;
    cResult[8] = emojiURL;
    tmp8 = emojiURL;
  }
  const items = [tmp6, style];
  cResult[2] = style;
  cResult[3] = tmp6;
  cResult[4] = items;
  tmp7 = items;
}) : (function EmojiImage(emojiId) {
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
  return unpackModuleId(tmp3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function TextStatusContent(isPlaceholderText) {
  let emoji;
  let items;
  let lineClamp;
  let lineHeight;
  let onTextLayout;
  let text;
  let textVariant;
  let tmp6;
  const tmp = emoji;
  let obj = emoji(576);
  const cResult = obj.c(17);
  ({ text, emoji } = isPlaceholderText);
  ({ textVariant, lineClamp, onTextLayout, lineHeight } = isPlaceholderText);
  isPlaceholderText = isPlaceholderText.isPlaceholderText;
  let tmp4 = undefined !== isPlaceholderText && isPlaceholderText;
  const result = lineHeight / 10;
  if (cResult[0] !== tmp4) {
    let tmp7 = tmp4;
    if (tmp7) {
      let obj3;
      const tmpResult = tmp(1381);
      if (tmpResult.isAndroid()) {
        let obj2 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
        obj3 = obj2;
      } else {
        obj3 = { fontStyle: "italic" };
      }
      tmp7 = obj3;
    }
    cResult[0] = tmp4;
    cResult[1] = tmp7;
    tmp6 = tmp7;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === result) {
    let tmp9;
    if (cResult[3] === tmp6) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === emoji) {
      let tmp11;
      let tmp12;
      if (cResult[6] === lineHeight) {
        tmp11 = cResult[7];
      }
      if (cResult[8] !== tmp11) {
        const tmp11Result = tmp11();
        cResult[8] = tmp11;
        cResult[9] = tmp11Result;
        tmp12 = tmp11Result;
      } else {
        tmp12 = cResult[9];
      }
      if (cResult[10] === lineClamp) {
        if (cResult[11] === onTextLayout) {
          if (cResult[12] === tmp12) {
            if (cResult[13] === text) {
              if (cResult[14] === tmp9) {
                let tmp14;
                if (cResult[15] === textVariant) {
                  tmp14 = cResult[16];
                }
                return tmp14;
              }
            }
          }
        }
      }
      let obj4 = { variant: textVariant, color: "text-default", lineClamp, onTextLayout, style: tmp9, children: items };
      items = [tmp12, text];
      const tmp16 = closure_12(tmp(5086).Text, obj4);
      cResult[10] = lineClamp;
      cResult[11] = onTextLayout;
      cResult[12] = tmp12;
      cResult[13] = text;
      cResult[14] = tmp9;
      cResult[15] = textVariant;
      cResult[16] = tmp16;
      tmp14 = tmp16;
    }
    function renderInlineEmojiWithSpacer() {
      let items;
      let items1;
      let obj4;
      let obj5;
      let obj7;
      let obj9;
      let tmp4;
      let id;
      if (emoji != null) {
        id = tmp.id;
      }
      if (null != id) {
        const obj2 = { children: items };
        const obj3 = { children: unpackModuleId(closure_18, obj4) };
        obj4 = { emojiId: emoji.id, size: 0.9 * lineHeight, animated: emoji.animated, style: obj5 };
        obj5 = { marginBottom: 0.1 * -lineHeight };
        items = [unpackModuleId(metroImportAll, obj3), ];
        const obj6 = { style: obj7 };
        obj7 = { width: 0.5 * lineHeight };
        items[1] = unpackModuleId(metroImportAll, obj6);
        tmp4 = closure_12(map1, obj2);
      } else {
        let name;
        if (emoji != null) {
          name = tmp.name;
        }
        tmp4 = null;
        if (null != name) {
          const obj = { children: items1 };
          items1 = [emoji.name, ];
          const obj8 = { style: obj9 };
          obj9 = { width: 0.4 * lineHeight };
          items1[1] = unpackModuleId(metroImportAll, obj8);
          tmp4 = closure_12(map1, obj);
        }
      }
      return tmp4;
    }
    cResult[5] = emoji;
    cResult[6] = lineHeight;
    cResult[7] = renderInlineEmojiWithSpacer;
    tmp11 = renderInlineEmojiWithSpacer;
  }
  let obj5 = { paddingVertical: result };
  const merged = Object.assign(tmp6);
  cResult[2] = result;
  cResult[3] = tmp6;
  cResult[4] = obj5;
  tmp9 = obj5;
}) : (function TextStatusContent(arg0) {
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
  let tmp5Result;
  ({ emoji, lineHeight, isPlaceholderText } = arg0);
  ({ text, textVariant, lineClamp, onTextLayout } = arg0);
  if (isPlaceholderText === undefined) {
    isPlaceholderText = false;
  }
  const obj = { paddingVertical: lineHeight / 10 };
  if (isPlaceholderText) {
    let obj4;
    const obj2 = PlatformUtils;
    if (obj2.isAndroid()) {
      obj4 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
      const obj3 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
    } else {
      obj4 = { fontStyle: "italic" };
    }
    isPlaceholderText = obj4;
  }
  const merged = Object.assign(isPlaceholderText);
  let id;
  const obj5 = { variant: textVariant, color: "text-default", lineClamp, onTextLayout, style: obj, children: items2 };
  const Text = Text_Text.Text;
  if (emoji != null) {
    id = emoji.id;
  }
  if (null != id) {
    const obj6 = { children: items };
    const obj7 = { children: unpackModuleId(closure_18, obj8) };
    obj8 = { emojiId: emoji.id, size: 0.9 * lineHeight, animated: emoji.animated, style: obj9 };
    obj9 = { marginBottom: 0.1 * -lineHeight };
    items = [unpackModuleId(metroImportAll, obj7), ];
    const obj10 = { style: obj11 };
    obj11 = { width: 0.5 * lineHeight };
    items[1] = unpackModuleId(metroImportAll, obj10);
    tmp5Result = tmp5(map1, obj6);
  } else {
    let name;
    if (emoji != null) {
      name = emoji.name;
    }
    tmp5Result = null;
    if (null != name) {
      const obj12 = { children: items1 };
      items1 = [emoji.name, ];
      const obj13 = { style: obj14 };
      obj14 = { width: 0.4 * lineHeight };
      items1[1] = unpackModuleId(metroImportAll, obj13);
      tmp5Result = tmp5(map1, obj12);
    }
  }
  items2 = [tmp5Result, text];
  return closure_12(Text, obj5);
});
createStyles = createStyles_mod;
let closure_20 = createStyles.createStyles(() => ({ container: { alignItems: "center" } }));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiOnlyStatusContent(arg0) {
  let _Boolean;
  let animated;
  let emoji;
  const obj = react2;
  const cResult = obj.c(14);
  ({ emoji, size } = arg0);
  const tmp3 = closure_20();
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  if (cResult[0] === setting) {
    let tmp5;
    let tmp15;
    let tmp14;
    if (cResult[1] === emoji) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== size) {
      const obj2 = { fontSize: size };
      const size1 = { width: size, height: size };
      cResult[3] = size;
      cResult[4] = obj2;
      cResult[5] = size1;
      tmp15 = size1;
      tmp14 = obj2;
    } else {
      tmp14 = cResult[4];
      tmp15 = cResult[5];
    }
    let str;
    if (emoji != null) {
      str = emoji.name;
    }
    if (str == null) {
      str = "";
    }
    if (cResult[6] === tmp5) {
      if (cResult[7] === tmp14) {
        if (cResult[8] === tmp15) {
          let tmp17;
          if (cResult[9] === str) {
            tmp17 = cResult[10];
          }
          if (cResult[11] === tmp3.container) {
            let tmp21;
            if (cResult[12] === tmp17) {
              tmp21 = cResult[13];
            }
            return tmp21;
          }
          const obj3 = { style: tmp3.container, children: tmp17 };
          const tmp24 = unpackModuleId(metroImportAll, obj3);
          cResult[11] = tmp3.container;
          cResult[12] = tmp17;
          cResult[13] = tmp24;
          tmp21 = tmp24;
        }
      }
    }
    const obj4 = { textEmojiStyle: tmp14, fastImageStyle: tmp15, src: tmp5, name: str };
    const tmp20 = unpackModuleId(EmojiDefault, obj4);
    cResult[6] = tmp5;
    cResult[7] = tmp14;
    cResult[8] = tmp15;
    cResult[9] = str;
    cResult[10] = tmp20;
    tmp17 = tmp20;
  }
  let id;
  if (emoji != null) {
    id = emoji.id;
  }
  let emojiURL;
  if (null != id) {
    const obj5 = { id: emoji.id, animated: _Boolean(animated) && setting, size: EMOJI_URL_BASE_SIZE };
    animated = undefined;
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    _Boolean = Boolean;
    AvatarUtilsDefault;
    if (emoji != null) {
      animated = emoji.animated;
    }
    _Boolean(animated) && setting;
    emojiURL = getEmojiURL(obj5);
  }
  cResult[0] = setting;
  cResult[1] = emoji;
  cResult[2] = emojiURL;
  tmp5 = emojiURL;
}) : (function EmojiOnlyStatusContent(arg0) {
  let _Boolean;
  let animated;
  let emoji;
  let obj3;
  let str;
  let tmp14;
  ({ emoji, size } = arg0);
  const tmp = closure_20();
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
  const obj2 = { style: tmp.container, children: unpackModuleId(tmp14, obj3) };
  obj3 = { textEmojiStyle: { fontSize: size }, fastImageStyle: { width: size, height: size }, src: emojiURL, name: str };
  str = undefined;
  const tmp13 = metroImportAll;
  tmp14 = EmojiDefault;
  if (emoji != null) {
    str = emoji.name;
  }
  if (str == null) {
    str = "";
  }
  return unpackModuleId(tmp13, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileCustomStatusBubble(ref) {
  let BACKGROUND_SURFACE_HIGH;
  let Text;
  let _prompt;
  let closure_1;
  let closure_10;
  let closure_6;
  let customStatusActivity;
  let editEnabled;
  let emojiOnlyEmojiSize;
  let emojiOnlyStyle;
  let first1;
  let formatToPlainStringResult;
  let hasCustomProfileTheme;
  let intl2;
  let intl4;
  let items2;
  let items3;
  let items5;
  let items6;
  let items7;
  let num2;
  let num3;
  let obj11;
  let obj12;
  let obj7;
  let onPressTruncatedStatus;
  let placeholderText;
  let previewEmoji;
  let previewText;
  let require;
  let showFullStatus;
  let statusBubblePaddingHorizontal;
  let statusBubblePaddingVertical;
  let style;
  let textMinWidth;
  let textVariant;
  let themeType;
  let tmp10;
  let tmp11;
  let tmp36;
  let tmp61;
  let tmp = require;
  let obj = require("react");
  const cResult = obj.c(10);
  ref = ref.ref;
  const tmp4 = previewEmoji(ref, emojiOnlyEmojiSize);
  ({ customStatusActivity, themeType, hasCustomProfileTheme, editEnabled, showFullStatus, onPressTruncatedStatus, previewEmoji, previewText, placeholderText, prompt: require } = tmp4);
  let tmp5 = undefined !== editEnabled;
  ({ style, emojiOnlyStyle } = tmp4);
  if (tmp5) {
    tmp5 = editEnabled;
  }
  importDefault = tmp6;
  const tmp7 = closure_14(hasCustomProfileTheme);
  let tmp9 = importDefault;
  const useToken = tmp(tmp2[19]).useToken;
  tmp(textVariant[19]);
  const colors = require("native").colors;
  if (hasCustomProfileTheme) {
    BACKGROUND_SURFACE_HIGH = colors.CUSTOM_STATUS_BUBBLE_BG;
    tmp10 = tmp9;
    tmp11 = tmp9;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp10 = tmp9;
    tmp11 = tmp9;
  }
  const token = useToken(BACKGROUND_SURFACE_HIGH);
  const useToken2 = tmp(tmp2[19]).useToken;
  tmp(textVariant[19]);
  const colors2 = tmp11(tmp2[9]).colors;
  const token2 = useToken2(hasCustomProfileTheme ? colors2.BORDER_MUTED : colors2.BORDER_SUBTLE);
  let tmp15;
  if (null != themeType) {
    tmp15 = closure_17[themeType];
  }
  if (tmp15 == null) {
    tmp15 = closure_16;
  }
  textVariant = tmp15.textVariant;
  emojiOnlyEmojiSize = tmp15.emojiOnlyEmojiSize;
  ({ statusBubblePaddingHorizontal, statusBubblePaddingVertical, textMinWidth } = tmp15);
  const tmpResult8 = tmp(textVariant[20]);
  const trackUserProfileAction = tmpResult8.useUserProfileAnalyticsContext().trackUserProfileAction;
  const useGameMentionsAsPlainText = tmp(tmp2[21]).useGameMentionsAsPlainText;
  tmp(textVariant[21]);
  if (undefined === previewText) {
    let state;
    if (customStatusActivity != null) {
      state = customStatusActivity.state;
    }
    previewText = state;
  }
  const gameMentionsAsPlainText = useGameMentionsAsPlainText(previewText);
  let tmp20 = null != gameMentionsAsPlainText && "" !== gameMentionsAsPlainText;
  if (undefined === previewEmoji) {
    let emoji;
    if (customStatusActivity != null) {
      emoji = customStatusActivity.emoji;
    }
    previewEmoji = emoji;
  }
  react = tmp23;
  let tmp24 = !tmp20 && !tmp22 && undefined !== placeholderText && "" !== placeholderText;
  const isPlaceholderText = tmp24;
  let str4 = gameMentionsAsPlainText;
  if (tmp24) {
    str4 = placeholderText;
  }
  let closure_9 = tmp25;
  if (!tmp20) {
    tmp20 = tmp22;
  }
  if (!tmp20) {
    tmp20 = !tmp5 && tmp24;
  }
  const tmp28 = trackUserProfileAction(react.useState(false), 2);
  Fonts = tmp28[1];
  let num = 0;
  const first = tmp28[0];
  if (null != str4 && "" !== str4) {
    num = textMinWidth;
  }
  let obj2 = { minWidth: num, minHeight: num2, paddingVertical: num3, paddingHorizontal: statusBubblePaddingHorizontal };
  num2 = 0;
  if (null != previewEmoji && !tmp20) {
    num2 = emojiOnlyEmojiSize + 2 * statusBubblePaddingVertical;
  }
  if (null != str4 && "" !== str4) {
    num3 = statusBubblePaddingVertical;
  } else {
    num3 = 0;
  }
  const rect = { top: statusBubblePaddingVertical, bottom: statusBubblePaddingVertical, left: statusBubblePaddingHorizontal, right: statusBubblePaddingHorizontal };
  const ref1 = obj3.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      return ref1.current;
    };
    cResult[0] = fn;
    first1 = fn;
  } else {
    first1 = cResult[0];
  }
  const imperativeHandle = obj3.useImperativeHandle(ref, first1);
  const tmpResult10 = tmp(textVariant[22]);
  const scaledTextLineHeight = tmpResult10.useScaledTextLineHeight(textVariant);
  if (!tmp20) {
    if (!(!tmp20 && tmp5)) {
      return null;
    }
  }
  let name;
  if (previewEmoji != null) {
    name = previewEmoji.name;
  }
  let items = [name, str4];
  const found = items.filter((item) => null != item);
  const joined = found.join(" ");
  if (cResult[1] !== joined) {
    const obj4 = { text: joined };
    cResult[1] = joined;
    cResult[2] = obj4;
    tmp36 = obj4;
  } else {
    tmp36 = cResult[2];
  }
  if (cResult[3] === tmp7.bubble) {
    let tmp37;
    if (cResult[4] === tmp7.smallCircle) {
      tmp37 = cResult[5];
    }
    if (cResult[6] === token) {
      if (cResult[7] === token2) {
        let tmp39;
        let tmp50Result;
        if (cResult[8] === tmp7.largeCircle) {
          tmp39 = cResult[9];
        }
        const items1 = [style, ];
        let tmp45;
        if (null != previewEmoji && !tmp20) {
          tmp45 = emojiOnlyStyle;
        }
        const obj5 = { style: items1, children: items2 };
        items1[1] = tmp45;
        items2 = [tmp37, , ];
        let tmp46;
        if (null != onPressTruncatedStatus) {
          if (!(undefined !== showFullStatus && showFullStatus)) {
            if (null != str4 && "" !== str4) {
              const obj6 = { style: items3, children: ref1(closure_19, obj7) };
              items3 = [, , , ];
              ({ bubble: arr5[0], statusBubble: arr5[1] } = tmp7);
              items3[2] = obj2;
              items3[3] = tmp7.statusBubbleMeasureable;
              obj7 = {
                text: str4,
                isPlaceholderText: tmp24,
                emoji: previewEmoji,
                textVariant,
                onTextLayout(nativeEvent) {
                              closure_10(nativeEvent.nativeEvent.lines.length > Math.ceil(2 * metroImportDefault.getFontScale()));
                            },
                lineHeight: scaledTextLineHeight
              };
              tmp46 = ref1(tmp44, obj6);
            }
          }
        }
        items2[1] = tmp46;
        const items4 = [, , , ];
        ({ bubble: arr6[0], statusBubble: arr6[1] } = tmp7);
        items4[2] = obj2;
        function handlePressAddOrEditStatus() {
          let items;
          trackUserProfileAction({ action: "PRESS_EDIT_CUSTOM_STATUS" });
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = { analyticsLocations: items, prompt: require };
          const openEditCustomStatusModal = CustomStatusUtils.openEditCustomStatusModal;
          items = [];
          CustomStatusUtils;
          items[0] = AnalyticsLocationDefault.USER_PROFILE_CUSTOM_STATUS_BUBBLE;
          const result = openEditCustomStatusModal(obj2);
        }
        const obj8 = { style: items4, ref: ref1, children: items5 };
        const tmp49 = !(null != previewEmoji && !tmp20) && tmp7.statusBubbleLeftAligned;
        items4[3] = tmp49;
        items5 = [tmp39, ];
        if (!tmp20 && tmp5) {
          let stringResult = placeholderText;
          if (!tmp24) {
            const intl3 = tmp(tmp2[26]).intl;
            stringResult = intl3.string(tmp(tmp2[26]).t.Vq4UmS);
          }
          const obj9 = { accessibilityRole: "button", accessibilityLabel: intl4.string(tmp(textVariant[26]).t["zrpF/b"]), accessibilityHint: formatToPlainStringResult, onPress: handlePressAddOrEditStatus, hitSlop: rect, children: scaledTextLineHeight(Text, obj11) };
          const PressableOpacity3 = tmp(tmp2[27]).PressableOpacity;
          intl4 = tmp(tmp2[26]).intl;
          formatToPlainStringResult = undefined;
          if (tmp24) {
            const intl5 = tmp(tmp2[26]).intl;
            const obj10 = { prompt: placeholderText };
            formatToPlainStringResult = intl5.formatToPlainString(tmp(tmp2[26]).t.ioWOMP, obj10);
          }
          let str7 = "text-md/medium";
          Text = tmp(tmp2[17]).Text;
          if (tmp24) {
            str7 = "text-md/normal";
          }
          let _Math = Math;
          obj11 = { variant: str7, color: "control-secondary-text-default", lineClamp: Math.ceil(2 * isPlaceholderText.getFontScale()), style: obj12, children: items6 };
          obj12 = { paddingVertical: scaledTextLineHeight / 10 };
          if (tmp24) {
            let obj14;
            const tmpResult11 = tmp(textVariant[16]);
            if (tmpResult11.isAndroid()) {
              obj14 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
              const obj13 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
            } else {
              obj14 = { fontStyle: "italic" };
            }
            tmp24 = obj14;
          }
          const merged = Object.assign(tmp24);
          const obj15 = { color: tmp10(textVariant[9]).colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs", style: tmp61 };
          const CirclePlusIcon = tmp(tmp2[28]).CirclePlusIcon;
          tmp61 = undefined;
          const tmpResult12 = tmp(textVariant[16]);
          if (tmpResult12.isAndroid()) {
            tmp61 = { marginBottom: 0.1 * -scaledTextLineHeight };
            const obj16 = { marginBottom: 0.1 * -scaledTextLineHeight };
          }
          const obj17 = { children: ref1(CirclePlusIcon, obj15) };
          items6 = [ref1(str4, obj17), , ];
          const obj18 = { style: tmp7.addStatusIconSpacer };
          items6[1] = ref1(str4, obj18);
          items6[2] = stringResult;
          tmp50Result = tmp54(PressableOpacity3, obj9);
        } else {
          function renderStatusContent() {
            let rounded;
            let tmp8Result;
            const tmp = closure_9;
            if (tmp) {
              const obj2 = { text: str4, isPlaceholderText, emoji: previewEmoji, textVariant, lineClamp: rounded, lineHeight: scaledTextLineHeight };
              rounded = undefined;
              const tmp8 = unpackModuleId;
              const tmp9 = closure_19;
              if (!closure_1) {
                const _Math = Math;
                rounded = Math.ceil(2 * metroImportDefault.getFontScale());
              }
              tmp8Result = tmp8(tmp9, obj2);
            } else if (closure_6) {
              const obj = { emoji: previewEmoji, size: emojiOnlyEmojiSize };
              tmp8Result = unpackModuleId(closure_21, obj);
            }
            return tmp8Result;
          }
          if (tmp5) {
            const obj19 = { accessibilityRole: "button", accessibilityLabel: intl2.string(tmp(textVariant[26]).t.QdHxos), accessibilityValue: tmp36, onPress: handlePressAddOrEditStatus, hitSlop: rect, children: renderStatusContent() };
            const PressableOpacity2 = tmp(tmp2[27]).PressableOpacity;
            intl2 = tmp(tmp2[26]).intl;
            tmp50Result = ref1(PressableOpacity2, obj19);
          } else {
            if (null != onPressTruncatedStatus) {
              if (first) {
                if (!tmp24) {
                  const PressableOpacity = tmp(tmp2[27]).PressableOpacity;
                  const intl = tmp(tmp2[26]).intl;
                  const formatToPlainString = intl.formatToPlainString;
                  let str6;
                  const UpF5Qa = tmp(tmp2[26]).t.UpF5Qa;
                  const tmp50 = ref1;
                  if (previewEmoji != null) {
                    str6 = previewEmoji.name;
                  }
                  if (str6 == null) {
                    str6 = "";
                  }
                  const obj20 = { emoji: str6, status: str4 };
                  if (str4 == null) {
                    str4 = "";
                  }
                  const obj21 = { accessibilityRole: "button", accessibilityLabel: formatToPlainString(UpF5Qa, obj20), onPress: onPressTruncatedStatus, hitSlop: rect, children: renderStatusContent() };
                  tmp50Result = tmp50(PressableOpacity, obj21);
                }
              }
            }
            tmp50Result = renderStatusContent();
          }
        }
        items5[1] = tmp50Result;
        items2[2] = scaledTextLineHeight(str4, obj8);
        return scaledTextLineHeight(str4, obj5);
      }
    }
    const obj22 = { style: tmp7.largeCircle, backgroundColor: token, borderColor: token2 };
    const tmp42 = ref1(closure_15, obj22);
    cResult[6] = token;
    cResult[7] = token2;
    cResult[8] = tmp7.largeCircle;
    cResult[9] = tmp42;
    tmp39 = tmp42;
  }
  const obj23 = { style: items7 };
  items7 = [, ];
  ({ bubble: arr2[0], smallCircle: arr2[1] } = tmp7);
  const tmp38 = ref1(str4, obj23);
  cResult[3] = tmp7.bubble;
  cResult[4] = tmp7.smallCircle;
  cResult[5] = tmp38;
  tmp37 = tmp38;
}) : (function UserProfileCustomStatusBubble(ref) {
  let BACKGROUND_SURFACE_HIGH;
  let Text;
  let _prompt;
  let c1;
  let closure_0;
  let closure_10;
  let closure_6;
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
  let tmp49;
  let tmp9;
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  importDefault = undefined;
  let textVariant;
  let emojiOnlyEmojiSize;
  let trackUserProfileAction;
  previewEmoji = undefined;
  react = undefined;
  let isPlaceholderText;
  let str4;
  let closure_9;
  Fonts = undefined;
  let ref1;
  let scaledTextLineHeight;
  ({ customStatusActivity, themeType, hasCustomProfileTheme, editEnabled } = merged);
  const showFullStatus = merged.showFullStatus;
  const tmp3 = undefined !== showFullStatus && showFullStatus;
  _require = tmp3;
  ({ onPressTruncatedStatus, previewEmoji, previewText, placeholderText, prompt: c1 } = merged);
  ({ style, emojiOnlyStyle } = merged);
  const tmp4 = closure_14(hasCustomProfileTheme);
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
  const useToken2 = tmp5(tmp6[19]).useToken;
  require("useToken");
  const colors2 = tmp10(tmp6[9]).colors;
  let tmp14;
  const token2 = useToken2(hasCustomProfileTheme ? colors2.BORDER_MUTED : colors2.BORDER_SUBTLE);
  if (null != themeType) {
    tmp14 = closure_17[themeType];
  }
  if (tmp14 == null) {
    tmp14 = closure_16;
  }
  textVariant = tmp14.textVariant;
  emojiOnlyEmojiSize = tmp14.emojiOnlyEmojiSize;
  ({ statusBubblePaddingHorizontal, statusBubblePaddingVertical, textMinWidth } = tmp14);
  const tmp5Result6 = require("UserProfileAnalyticsContext");
  trackUserProfileAction = tmp5Result6.useUserProfileAnalyticsContext().trackUserProfileAction;
  const useGameMentionsAsPlainText = tmp5(tmp6[21]).useGameMentionsAsPlainText;
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
  react = tmp22;
  let tmp23 = !tmp19 && !tmp21 && undefined !== placeholderText && "" !== placeholderText;
  isPlaceholderText = tmp23;
  str4 = gameMentionsAsPlainText;
  if (tmp23) {
    str4 = placeholderText;
  }
  closure_9 = tmp24;
  if (!tmp19) {
    tmp19 = tmp21;
  }
  if (!tmp19) {
    tmp19 = !tmp2 && tmp23;
  }
  let obj2 = react;
  const tmp27 = trackUserProfileAction(react.useState(false), 2);
  Fonts = tmp27[1];
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
  items3 = [ref1(str4, obj5), , ];
  let tmp36Result;
  if (null != onPressTruncatedStatus) {
    if (!tmp3) {
      if (null != str4 && "" !== str4) {
        const obj6 = { style: items4, children: ref1(closure_19, obj7) };
        items4 = [, , , ];
        ({ bubble: arr5[0], statusBubble: arr5[1] } = tmp4);
        items4[2] = obj;
        items4[3] = tmp4.statusBubbleMeasureable;
        obj7 = {
          text: str4,
          isPlaceholderText: tmp23,
          emoji: previewEmoji,
          textVariant,
          onTextLayout(nativeEvent) {
                  closure_10(nativeEvent.nativeEvent.lines.length > Math.ceil(2 * metroImportDefault.getFontScale()));
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
  items6[0] = ref1(closure_15, obj9);
  if (!tmp19 && (undefined !== editEnabled && editEnabled)) {
    let stringResult = placeholderText;
    if (!tmp23) {
      const intl3 = tmp5(tmp6[26]).intl;
      stringResult = intl3.string(tmp5(tmp6[26]).t.Vq4UmS);
    }
    const obj10 = { accessibilityRole: "button", accessibilityLabel: intl4.string(require("intl").t["zrpF/b"]), accessibilityHint: formatToPlainStringResult, onPress: handlePressAddOrEditStatus, hitSlop: rect, children: scaledTextLineHeight(Text, obj12) };
    const PressableOpacity3 = tmp5(tmp6[27]).PressableOpacity;
    intl4 = tmp5(tmp6[26]).intl;
    formatToPlainStringResult = undefined;
    if (tmp23) {
      const intl5 = tmp5(tmp6[26]).intl;
      const obj11 = { prompt: placeholderText };
      formatToPlainStringResult = intl5.formatToPlainString(tmp5(tmp6[26]).t.ioWOMP, obj11);
    }
    let str7 = "text-md/medium";
    Text = tmp5(tmp6[17]).Text;
    if (tmp23) {
      str7 = "text-md/normal";
    }
    let _Math = Math;
    obj12 = { variant: str7, color: "control-secondary-text-default", lineClamp: Math.ceil(2 * isPlaceholderText.getFontScale()), style: obj13, children: items7 };
    obj13 = { paddingVertical: scaledTextLineHeight / 10 };
    if (tmp23) {
      let obj15;
      const tmp5Result9 = require("PlatformUtils");
      if (tmp5Result9.isAndroid()) {
        obj15 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
        const obj14 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
      } else {
        obj15 = { fontStyle: "italic" };
      }
      tmp23 = obj15;
    }
    const merged1 = Object.assign(tmp23);
    const obj16 = { color: tmp9(textVariant[9]).colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs", style: tmp49 };
    const CirclePlusIcon = tmp5(tmp6[28]).CirclePlusIcon;
    tmp49 = undefined;
    const tmp5Result10 = require("PlatformUtils");
    if (tmp5Result10.isAndroid()) {
      tmp49 = { marginBottom: 0.1 * -scaledTextLineHeight };
      const obj17 = { marginBottom: 0.1 * -scaledTextLineHeight };
    }
    const obj18 = { children: ref1(CirclePlusIcon, obj16) };
    items7 = [ref1(str4, obj18), , ];
    const obj19 = { style: tmp4.addStatusIconSpacer };
    items7[1] = ref1(str4, obj19);
    items7[2] = stringResult;
    tmp36Result2 = tmp36(PressableOpacity3, obj10);
  } else {
    function renderStatusContent() {
      let rounded;
      let tmp8Result;
      const tmp = closure_9;
      if (tmp) {
        const obj2 = { text: str4, isPlaceholderText, emoji: previewEmoji, textVariant, lineClamp: rounded, lineHeight: scaledTextLineHeight };
        rounded = undefined;
        const tmp8 = unpackModuleId;
        const tmp9 = closure_19;
        if (!closure_0) {
          const _Math = Math;
          rounded = Math.ceil(2 * metroImportDefault.getFontScale());
        }
        tmp8Result = tmp8(tmp9, obj2);
      } else if (closure_6) {
        const obj = { emoji: previewEmoji, size: emojiOnlyEmojiSize };
        tmp8Result = unpackModuleId(closure_21, obj);
      }
      return tmp8Result;
    }
    if (undefined !== editEnabled && editEnabled) {
      const obj20 = { accessibilityRole: "button", accessibilityLabel: intl2.string(require("intl").t.QdHxos), accessibilityValue: obj3, onPress: handlePressAddOrEditStatus, hitSlop: rect, children: renderStatusContent() };
      const PressableOpacity2 = tmp5(tmp6[27]).PressableOpacity;
      intl2 = tmp5(tmp6[26]).intl;
      tmp36Result2 = tmp36(PressableOpacity2, obj20);
    } else {
      if (null != onPressTruncatedStatus) {
        if (first) {
          if (!tmp23) {
            const PressableOpacity = tmp5(tmp6[27]).PressableOpacity;
            const intl = tmp5(tmp6[26]).intl;
            const formatToPlainString = intl.formatToPlainString;
            let str6;
            const UpF5Qa = tmp5(tmp6[26]).t.UpF5Qa;
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
  items3[2] = scaledTextLineHeight(str4, obj8);
  return scaledTextLineHeight(str4, obj4);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileCustomStatusBubble.tsx");

export default tmp4;
