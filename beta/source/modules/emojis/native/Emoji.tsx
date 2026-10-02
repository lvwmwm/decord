// Module ID: 6552
// Function ID: 6553
// Name: Emoji
// Dependencies: [19, 17, 1194, 21, 558, 576, 1370, 4490, 1189, 5896, 4687, 6553, 6554, 2]

// Module 6552 (Emoji)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4490 */;
import shared from "shared" /* 4687 */;
import FastImageDefault from "FastImage" /* 5896 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1194 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let adjustsFontSizeToFit;
  let fastImageStyle;
  let forceTextEmoji;
  let name;
  let obj5;
  let onError;
  let src;
  let style;
  let textEmojiStyle;
  let tmp11Result;
  const obj = react2;
  const cResult = obj.c(14);
  ({ src, name, style, textEmojiStyle, fastImageStyle, forceTextEmoji, adjustsFontSizeToFit, onError } = arg0);
  if (cResult[0] === name) {
    let tmp4;
    let tmp8;
    if (cResult[1] === src) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === adjustsFontSizeToFit) {
      if (cResult[4] === tmp4) {
        if (cResult[5] === fastImageStyle) {
          if (cResult[6] === forceTextEmoji) {
            if (cResult[7] === name) {
              if (cResult[8] === onError) {
                if (cResult[9] === textEmojiStyle) {
                  tmp8 = cResult[10];
                }
                if (cResult[11] === style) {
                  let tmp17;
                  if (cResult[12] === tmp8) {
                    tmp17 = cResult[13];
                  }
                  return tmp17;
                }
                const tmp20 = <View style={style}>{tmp8}</View>;
                cResult[11] = style;
                cResult[12] = tmp8;
                cResult[13] = tmp20;
                tmp17 = tmp20;
              }
            }
          }
        }
      }
    }
    if (!forceTextEmoji) {
      if (null != tmp4) {
        let tmp10Result;
        if ("" !== tmp4) {
          const obj4 = { resizeMode: "contain", style: fastImageStyle, placeholder: tmp11Result, source: obj5, onError };
          const tmp12 = FastImageDefault;
          const tmp10 = jsx;
          const tmpResult = shared;
          if (tmpResult.isThemeDark(ThemeStore.theme)) {
            tmp11Result = tmp11(6553);
          } else {
            tmp11Result = tmp11(6554);
          }
          obj5 = { uri: tmp4 };
          tmp10Result = tmp10(tmp12, obj4);
        }
        cResult[3] = adjustsFontSizeToFit;
        cResult[4] = tmp4;
        cResult[5] = fastImageStyle;
        cResult[6] = forceTextEmoji;
        cResult[7] = name;
        cResult[8] = onError;
        cResult[9] = textEmojiStyle;
        cResult[10] = tmp10Result;
        tmp8 = tmp10Result;
      }
    }
    tmp10Result = jsx(tmp(1189).LegacyText, { style: textEmojiStyle, allowFontScaling: false, adjustsFontSizeToFit, children: name });
  }
  let uRL = src;
  const tmpResult2 = PlatformUtils;
  if (tmpResult2.isAndroid()) {
    uRL = src;
    if (null == src) {
      const obj3 = EmojiUtilsDefault;
      uRL = obj3.getURL(name);
    }
  }
  cResult[0] = name;
  cResult[1] = src;
  cResult[2] = uRL;
  tmp4 = uRL;
}) : ((arg0) => {
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
          tmp9Result = tmp9(6553);
        } else {
          tmp9Result = tmp9(6554);
        }
        obj5 = { uri: uRL };
        tmp6Result = tmp6(tmp10, obj4);
      }
      obj3.children = tmp6Result;
      return <tmp7 {...obj3} />;
    }
  }
  tmp6Result = tmp6(tmp(1189).LegacyText, { style: textEmojiStyle, allowFontScaling: false, adjustsFontSizeToFit, children: name });
});
const result = size.fileFinishedImporting("modules/emojis/native/Emoji.tsx");

export default tmp3;
