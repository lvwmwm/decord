// Module ID: 5421
// Function ID: 5422
// Name: Emoji
// Dependencies: [19, 17, 1302, 21, 500, 4006, 1297, 5329, 1363, 5422, 5423, 2]
// Exports: default

// Module 5421 (Emoji)
import "noop";
import { View } from "get ActivityIndicator";
import handleThemeChange from "handleThemeChange";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("handleThemeChange").fileFinishedImporting("modules/emojis/native/Emoji.tsx");

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
  let obj = require(500) /* set */;
  let uRL = src;
  if (obj.isAndroid()) {
    uRL = src;
    if (null == src) {
      let obj1 = importDefault(4006);
      uRL = obj1.getURL(name);
    }
  }
  obj = { style, children: null };
  if (!forceTextEmoji) {
    if (null != uRL) {
      if ("" !== uRL) {
        obj = { resizeMode: "contain", style: null, placeholder: null, source: null };
        obj[1] = fastImageStyle;
        const tmp10 = importDefault(5329);
        if (tmpResult.isThemeDark(theme.theme)) {
          let tmp9Result = tmp9(5422);
        } else {
          tmp9Result = tmp9(5423);
        }
        obj[2] = tmp9Result;
        obj1 = { uri: null };
        obj1[0] = uRL;
        obj[3] = obj1;
        let tmp6Result = tmp6(tmp10, obj);
        tmpResult = tmp(1363);
      }
      obj[1] = tmp6Result;
      return tmp6(tmp7, obj);
    }
  }
  tmp6Result = tmp6(tmp(1297).LegacyText, { style: textEmojiStyle, allowFontScaling: false, adjustsFontSizeToFit, children: name });
};
