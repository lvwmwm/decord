// Module ID: 5151
// Function ID: 44929
// Name: Emoji
// Dependencies: [31, 27, 1278, 33, 477, 3775, 1273, 5085, 3976, 5152, 5153, 2]
// Exports: default

// Module 5151 (Emoji)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/emojis/native/Emoji.tsx");

export default function Emoji(arg0) {
  let adjustsFontSizeToFit;
  let fastImageStyle;
  let forceTextEmoji;
  let name;
  let src;
  let style;
  let textEmojiStyle;
  ({ src, name } = arg0);
  ({ style, textEmojiStyle, fastImageStyle, forceTextEmoji, adjustsFontSizeToFit } = arg0);
  let obj = require(477) /* set */;
  let uRL = src;
  if (obj.isAndroid()) {
    uRL = src;
    if (null == src) {
      let obj1 = importDefault(3775);
      uRL = obj1.getURL(name);
    }
  }
  obj = { style };
  if (!forceTextEmoji) {
    if (null != uRL) {
      if ("" !== uRL) {
        obj = { resizeMode: "contain", style: fastImageStyle };
        const tmp10 = jsx;
        const tmp13 = importDefault(5085);
        if (obj6.isThemeDark(theme.theme)) {
          let tmp16Result = tmp16(5152);
        } else {
          tmp16Result = tmp16(5153);
        }
        obj.placeholder = tmp16Result;
        obj1 = { uri: uRL };
        obj.source = obj1;
        let tmp10Result = tmp10(tmp13, obj);
        obj6 = require(3976) /* AccessibilityAnnouncer */;
      }
      obj.children = tmp10Result;
      return tmp5(tmp6, obj);
    }
  }
  tmp10Result = jsx(require(1273) /* Button */.LegacyText, { style: textEmojiStyle, allowFontScaling: false, adjustsFontSizeToFit, children: name });
};
