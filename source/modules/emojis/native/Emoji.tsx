// Module ID: 5148
// Function ID: 44905
// Name: Emoji
// Dependencies: []
// Exports: default

// Module 5148 (Emoji)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/emojis/native/Emoji.tsx");

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
  let obj = arg1(dependencyMap[4]);
  let uRL = src;
  if (obj.isAndroid()) {
    uRL = src;
    if (null == src) {
      let obj1 = importDefault(dependencyMap[5]);
      uRL = obj1.getURL(name);
    }
  }
  obj = { style };
  if (!forceTextEmoji) {
    if (null != uRL) {
      if ("" !== uRL) {
        obj = { resizeMode: "contain", style: fastImageStyle };
        const tmp10 = jsx;
        const tmp13 = importDefault(dependencyMap[7]);
        if (obj6.isThemeDark(theme.theme)) {
          let tmp16Result = tmp16(tmp17[9]);
        } else {
          tmp16Result = tmp16(tmp17[10]);
        }
        obj.placeholder = tmp16Result;
        obj1 = { uri: uRL };
        obj.source = obj1;
        let tmp10Result = tmp10(tmp13, obj);
        const obj6 = arg1(dependencyMap[8]);
      }
      obj.children = tmp10Result;
      return tmp5(tmp6, obj);
    }
  }
  tmp10Result = jsx(arg1(dependencyMap[6]).LegacyText, { style: textEmojiStyle, allowFontScaling: false, adjustsFontSizeToFit, children: name });
};
