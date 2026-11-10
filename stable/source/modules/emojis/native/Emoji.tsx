// Module ID: 7300
// Function ID: 7301
// Name: Emoji
// Dependencies: [19, 17, 1192, 21, 1375, 4964, 1187, 5717, 5021, 7301, 7302, 2]
// Exports: default

// Module 7300 (Emoji)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4964 */;
import shared from "shared" /* 5021 */;
import FastImageDefault from "FastImage" /* 5717 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/emojis/native/Emoji.tsx");

export default function Emoji(arg0) {
  let adjustsFontSizeToFit;
  let fastImageStyle;
  let forceTextEmoji;
  let name;
  let obj5;
  let onError;
  let src;
  let style;
  let textEmojiStyle;
  let tmp9Result;
  ({ src, name } = arg0);
  ({ style, textEmojiStyle, fastImageStyle, forceTextEmoji, adjustsFontSizeToFit, onError } = arg0);
  let uRL = src;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    uRL = src;
    if (null == src) {
      const obj2 = EmojiUtilsDefault;
      uRL = obj2.getURL(name);
    }
  }
  const obj3 = { style, children: null };
  if (!forceTextEmoji) {
    if (null != uRL) {
      let tmp6Result;
      if ("" !== uRL) {
        const obj4 = { resizeMode: "contain", style: fastImageStyle, placeholder: tmp9Result, source: obj5, onError };
        const tmp10 = FastImageDefault;
        const tmpResult = shared;
        if (tmpResult.isThemeDark(ThemeStore.theme)) {
          tmp9Result = tmp9(7301);
        } else {
          tmp9Result = tmp9(7302);
        }
        obj5 = { uri: uRL };
        tmp6Result = tmp6(tmp10, obj4);
      }
      obj3.children = tmp6Result;
      return <tmp7 {...obj3} />;
    }
  }
  tmp6Result = tmp6(tmp(1187).LegacyText, { style: textEmojiStyle, allowFontScaling: false, adjustsFontSizeToFit, children: name });
};
