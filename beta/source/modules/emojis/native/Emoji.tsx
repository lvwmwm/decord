// Module ID: 7377
// Function ID: 7378
// Name: Emoji
// Dependencies: [19, 17, 1186, 21, 558, 568, 1368, 4417, 1181, 5802, 4610, 7378, 7379, 2]

// Module 7377 (Emoji)
import c from "c" /* 568 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4417 */;
import FastImageDefault from "FastImage" /* 5802 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1186 */;

const native = LegacyText(1181);
const shared = LegacyText(4610);
require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/native/Emoji.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let LegacyText = require;
  const cResult = c.c(14);
  ({ src, name, style, textEmojiStyle, fastImageStyle, forceTextEmoji, adjustsFontSizeToFit, onError } = arg0);
  if (cResult[0] === name) {
    if (cResult[1] === src) {
      let tmp2 = cResult[2];
    }
    if (cResult[3] === adjustsFontSizeToFit) {
      if (cResult[4] === tmp2) {
        if (cResult[5] === fastImageStyle) {
          if (cResult[6] === forceTextEmoji) {
            if (cResult[7] === name) {
              if (cResult[8] === onError) {
                if (cResult[9] === textEmojiStyle) {
                  if (cResult[11] === style) {
                    if (cResult[12] === tmp6) {
                      let tmp16 = cResult[13];
                    }
                    return tmp16;
                  }
                  const obj3 = { style, children: cResult[10] };
                  const tmp19 = <View style={style}>{cResult[10]}</View>;
                  cResult[11] = style;
                  cResult[12] = cResult[10];
                  cResult[13] = tmp19;
                  tmp16 = tmp19;
                }
              }
            }
          }
        }
      }
    }
    if (!forceTextEmoji) {
      if (null != tmp2) {
        if ("" !== tmp2) {
          const obj5 = { resizeMode: "contain", style: fastImageStyle, placeholder: null, source: null, onError: null };
          const tmp10 = FastImageDefault;
          const tmp8 = jsx;
          if (LegacyTextResult.isThemeDark(ThemeStore.theme)) {
            let tmp9Result = tmp9(7378);
          } else {
            tmp9Result = tmp9(7379);
          }
          obj5.placeholder = tmp9Result;
          const obj6 = { uri: tmp2 };
          obj5.source = obj6;
          obj5.onError = onError;
          let tmp8Result = tmp8(tmp10, obj5);
          LegacyTextResult = shared;
        }
        cResult[3] = adjustsFontSizeToFit;
        cResult[4] = tmp2;
        cResult[5] = fastImageStyle;
        cResult[6] = forceTextEmoji;
        cResult[7] = name;
        cResult[8] = onError;
        cResult[9] = textEmojiStyle;
        cResult[10] = tmp8Result;
      }
    }
    LegacyText = native.LegacyText;
    const obj = { style: textEmojiStyle, allowFontScaling: false, adjustsFontSizeToFit, children: name };
    tmp8Result = <LegacyText style={textEmojiStyle} allowFontScaling={false} adjustsFontSizeToFit={adjustsFontSizeToFit}>{name}</LegacyText>;
  }
  let uRL = src;
  if (LegacyTextResult1.isAndroid()) {
    uRL = src;
    if (null == src) {
      uRL = EmojiUtilsDefault.getURL(name);
    }
  }
  cResult[0] = name;
  cResult[1] = src;
  cResult[2] = uRL;
  tmp2 = uRL;
}) : ((arg0) => {
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
          let tmp9Result = tmp9(7378);
        } else {
          tmp9Result = tmp9(7379);
        }
        obj4.placeholder = tmp9Result;
        const obj5 = { uri: uRL };
        obj4.source = obj5;
        obj4.onError = onError;
        let tmp6Result = tmp6(tmp10, obj4);
        tmpResult = tmp(4610);
      }
      obj3.children = tmp6Result;
      return tmp6(tmp7, obj3);
    }
  }
  tmp6Result = tmp6(tmp(1181).LegacyText, { style: textEmojiStyle, allowFontScaling: false, adjustsFontSizeToFit, children: name });
});
