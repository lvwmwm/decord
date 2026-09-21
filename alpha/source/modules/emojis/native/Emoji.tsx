// Module ID: 7375
// Function ID: 7376
// Name: Emoji
// Dependencies: [19, 17, 1182, 21, 1364, 4413, 1177, 5804, 4607, 7376, 7377, 2]
// Exports: default

// Module 7375 (Emoji)
import EmojiUtilsDefault from "EmojiUtils" /* 4413 */;
import FastImageDefault from "FastImage" /* 5804 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1182 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/native/Emoji.tsx");

export default function Emoji(arg0) {
  ({ src, name } = arg0);
  ({ style, textEmojiStyle, fastImageStyle, forceTextEmoji, adjustsFontSizeToFit, onError } = arg0);
  let uRL = src;
  if (obj.isAndroid()) {
    uRL = src;
    if (null == src) {
      uRL = EmojiUtilsDefault.getURL(name);
    }
  }
  const obj3 = { style, children: null };
  if (!forceTextEmoji) {
    if (null != uRL) {
      if ("" !== uRL) {
        const obj4 = { resizeMode: "contain", style: fastImageStyle, placeholder: null, source: null, onError: null };
        const tmp10 = FastImageDefault;
        if (tmpResult.isThemeDark(ThemeStore.theme)) {
          let tmp9Result = tmp9(7376);
        } else {
          tmp9Result = tmp9(7377);
        }
        obj4.placeholder = tmp9Result;
        const obj5 = { uri: uRL };
        obj4.source = obj5;
        obj4.onError = onError;
        let tmp6Result = tmp6(tmp10, obj4);
        tmpResult = tmp(4607);
      }
      obj3.children = tmp6Result;
      return tmp6(tmp7, obj3);
    }
  }
  tmp6Result = tmp6(tmp(1177).LegacyText, { style: textEmojiStyle, allowFontScaling: false, adjustsFontSizeToFit, children: name });
};
