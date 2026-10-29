// Module ID: 12045
// Function ID: 12046
// Name: MarkupMessagePreviewReactRules
// Dependencies: [19, 12046, 21, 8529, 12047, 7082, 6020, 6022, 12052, 5707, 1382, 12053, 12054, 1199, 12055, 2]
// Exports: default

// Module 12045 (MarkupMessagePreviewReactRules)
import utils_PlatformUtils from "utils/PlatformUtils" /* 1382 */;
import FastImageDefault from "FastImage" /* 5707 */;
import MarkupRulesDefault from "MarkupRules" /* 6022 */;
import MarkupRulesUtils from "MarkupRulesUtils" /* 8529 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 12046 */;
import ChannelListLayout from "ChannelListLayout" /* 12047 */;
import HighlightTextDefault from "HighlightText" /* 12052 */;
import SpoilerDefault from "Spoiler" /* 12053 */;
import TimestampDefault from "Timestamp" /* 12055 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const IconSize = tmp(7082);
function defaultReactFn(content, output, state) {
  if (typeof content.content === "string") {
    content = content.content;
  } else {
    const obj = MarkupRulesUtils;
    content = obj.smartOutput(content, output, state);
  }
  return content;
}
function createMessagePreviewReactRules(customEmojiSize) {
  let obj2;
  let obj20;
  let num = customEmojiSize.customEmojiSize;
  if (num === undefined) {
    num = 15;
  }
  let obj = { [closure_0(closure_2[6]).AST_KEY.TEXT]: obj2 };
  obj2 = { react: defaultReactFn };
  let obj3 = { react: defaultReactFn };
  const STRIKETHROUGH = num(6020).AST_KEY.STRIKETHROUGH;
  const merged = Object.assign(MarkupRulesDefault.RULES[num(undefined, 6020).AST_KEY.STRIKETHROUGH]);
  obj[STRIKETHROUGH] = obj3;
  let obj4 = { react: defaultReactFn };
  const UNDERLINE = num(6020).AST_KEY.UNDERLINE;
  const merged1 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 6020).AST_KEY.UNDERLINE]);
  obj[UNDERLINE] = obj4;
  let obj5 = { react: defaultReactFn };
  const ITALICS = num(6020).AST_KEY.ITALICS;
  const merged2 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 6020).AST_KEY.ITALICS]);
  obj[ITALICS] = obj5;
  let obj6 = { react: defaultReactFn };
  const STRONG = num(6020).AST_KEY.STRONG;
  const merged3 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 6020).AST_KEY.STRONG]);
  obj[STRONG] = obj6;
  const obj7 = { react: defaultReactFn };
  const LINK = num(6020).AST_KEY.LINK;
  const merged4 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 6020).AST_KEY.LINK]);
  obj[LINK] = obj7;
  const obj8 = { react: defaultReactFn };
  const _URL = num(6020).AST_KEY.URL;
  const merged5 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 6020).AST_KEY.URL]);
  obj[_URL] = obj8;
  const obj9 = { react: defaultReactFn };
  const AUTOLINK = num(6020).AST_KEY.AUTOLINK;
  const merged6 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 6020).AST_KEY.AUTOLINK]);
  obj[AUTOLINK] = obj9;
  const obj10 = {
    react() {
      return "\n";
    }
  };
  const LINE_BREAK = num(6020).AST_KEY.LINE_BREAK;
  const merged7 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 6020).AST_KEY.LINE_BREAK]);
  obj[LINE_BREAK] = obj10;
  obj[num(6020).AST_KEY.HIGHLIGHT] = {
    react(node, output, key) {
      let obj2;
      const obj = { children: obj2.smartOutput(node, output, key) };
      const tmp = HighlightTextDefault;
      obj2 = num(dependencyMap[3]);
      return closure_1_4(tmp, obj, key.key);
    }
  };
  const obj11 = { react: defaultReactFn };
  const BLOCK_QUOTE = num(6020).AST_KEY.BLOCK_QUOTE;
  const merged8 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 6020).AST_KEY.BLOCK_QUOTE]);
  obj[BLOCK_QUOTE] = obj11;
  const obj12 = { order: 600, react: defaultReactFn };
  const PARAGRAPH = num(6020).AST_KEY.PARAGRAPH;
  const merged9 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 6020).AST_KEY.PARAGRAPH]);
  obj[PARAGRAPH] = obj12;
  obj[num(6020).AST_KEY.EMOJI] = {
    react(surrogate) {
      return surrogate.surrogate || surrogate.content;
    }
  };
  obj[num(6020).AST_KEY.CUSTOM_EMOJI] = {
    react(src, arg1, muted) {
      let items1;
      let obj4;
      if (typeof src.src === "string") {
        if ("" !== src.src) {
          const obj5 = ChannelListLayout;
          const sizeStyle = obj5.makeSizeStyle(num);
          const items = [sizeStyle, { resizeMode: "contain" }, , ];
          const tmp10 = FastImageDefault;
          const obj6 = utils_PlatformUtils;
          let isAndroidResult = obj6.isAndroid();
          const tmp8 = React3;
          if (isAndroidResult) {
            const obj = { transform: items1 };
            items1 = [{ translateY: 3 }];
            isAndroidResult = obj;
          }
          items[2] = isAndroidResult;
          muted = muted.muted;
          let muted2 = typeof muted === "boolean";
          if (typeof muted === "boolean") {
            muted2 = muted.muted;
          }
          if (muted2) {
            muted2 = { opacity: MUTED_OPACITY_CONTENT };
            const obj2 = { opacity: MUTED_OPACITY_CONTENT };
          }
          const obj3 = { style: items, source: obj4 };
          items[3] = muted2;
          obj4 = { uri: src.src };
          return tmp8(tmp10, obj3, muted.key);
        }
      }
      return src.alt;
    }
  };
  obj[num(6020).AST_KEY.SPOILER] = {
    react(node, output, muted) {
      let obj2;
      const obj = { disableReveal: true, muted: muted.muted, children: obj2.smartOutput(node, output, muted) };
      const tmp = SpoilerDefault;
      obj2 = num(dependencyMap[3]);
      return closure_1_4(tmp, obj, muted.key);
    }
  };
  obj[num(6020).AST_KEY.STATIC_ROUTE_LINK] = {
    react(channelId, output, state) {
      let smartOutputResult = null;
      const obj = num(dependencyMap[3]);
      const tmp = num;
      const tmp2 = dependencyMap;
      if (obj.isStaticRouteIconType(channelId.channelId)) {
        const tmpResult = tmp(tmp2[3]);
        smartOutputResult = tmpResult.smartOutput(channelId, output, state);
      }
      return smartOutputResult;
    }
  };
  const obj13 = { react: defaultReactFn };
  const INLINE_CODE = num(6020).AST_KEY.INLINE_CODE;
  const merged10 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 6020).AST_KEY.INLINE_CODE]);
  obj[INLINE_CODE] = obj13;
  const obj14 = {
    parse(arg0, arg1, arg2) {
      const obj = MarkupRulesDefault.RULES[num(undefined, dependencyMap[6]).AST_KEY.CODE_BLOCK];
      const parsed = obj.parse(arg0, arg1, arg2);
      const str = parsed.lang;
      const tmp = dependencyMap;
      const tmp2 = num;
      if ("ansi" === str.toLowerCase()) {
        const content = parsed.content;
        parsed.content = content.replaceAll(tmp2(tmp[3]).ANSI_CONTROL_SEQUENCE_RE_GLOBAL, "");
      }
      return parsed;
    },
    react: defaultReactFn
  };
  const CODE_BLOCK = num(6020).AST_KEY.CODE_BLOCK;
  const merged11 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 6020).AST_KEY.CODE_BLOCK]);
  obj[CODE_BLOCK] = obj14;
  const obj15 = { react: defaultReactFn };
  const MENTION = num(6020).AST_KEY.MENTION;
  const merged12 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 6020).AST_KEY.MENTION]);
  obj[MENTION] = obj15;
  const obj16 = { react: num(12054).inlineChannelMentionReact };
  const CHANNEL_MENTION = num(6020).AST_KEY.CHANNEL_MENTION;
  const merged13 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 6020).AST_KEY.CHANNEL_MENTION]);
  obj[CHANNEL_MENTION] = obj16;
  const obj17 = {
    react(node, output, key) {
      let items;
      const obj = { children: items };
      const LegacyText = num(dependencyMap[13]).LegacyText;
      items = ["\u{1F4CE} "];
      const obj2 = num(dependencyMap[3]);
      items[1] = obj2.smartOutput(node, output, key);
      return closure_1_5(LegacyText, obj, key.key);
    }
  };
  const ATTACHMENT_LINK = num(6020).AST_KEY.ATTACHMENT_LINK;
  const merged14 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 6020).AST_KEY.ATTACHMENT_LINK]);
  obj[ATTACHMENT_LINK] = obj17;
  const obj18 = { react: defaultReactFn };
  const SOUNDBOARD = num(6020).AST_KEY.SOUNDBOARD;
  const merged15 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 6020).AST_KEY.SOUNDBOARD]);
  obj[SOUNDBOARD] = obj18;
  obj[num(6020).AST_KEY.GUILD] = { react: defaultReactFn };
  const obj19 = { react: obj20.createInlineChannelReact("\u{1F4AC}") };
  const CHANNEL = num(6020).AST_KEY.CHANNEL;
  obj[CHANNEL] = obj19;
  obj20 = num(12054);
  const obj21 = {
    react(node, output, key) {
      let items;
      const obj = { children: items };
      const LegacyText = num(dependencyMap[13]).LegacyText;
      items = ["/"];
      const obj2 = num(dependencyMap[3]);
      items[1] = obj2.smartOutput(node, output, key);
      return closure_1_5(LegacyText, obj, key.key);
    }
  };
  const COMMAND_MENTION = num(6020).AST_KEY.COMMAND_MENTION;
  const merged16 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 6020).AST_KEY.COMMAND_MENTION]);
  obj[COMMAND_MENTION] = obj21;
  const obj22 = {
    react(node, arg1, key) {
      const obj = { node, style: null };
      return closure_1_4(TimestampDefault, obj, key.key);
    }
  };
  const TIMESTAMP = num(6020).AST_KEY.TIMESTAMP;
  const merged17 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 6020).AST_KEY.TIMESTAMP]);
  obj[TIMESTAMP] = obj22;
  const obj23 = {
    react(arg0, output, state) {
      const first = arg0.items[0];
      let first1 = first;
      if (Array.isArray(first)) {
        first1 = first[0];
      }
      let smartOutputResult = null;
      if (null != first1) {
        const obj = num(dependencyMap[3]);
        smartOutputResult = obj.smartOutput(first1, output, state);
      }
      return smartOutputResult;
    }
  };
  const LIST = num(6020).AST_KEY.LIST;
  const merged18 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 6020).AST_KEY.LIST]);
  obj[LIST] = obj23;
  obj[num(6020).AST_KEY.HEADING] = { react: defaultReactFn };
  obj[num(6020).AST_KEY.SUBTEXT] = { react: defaultReactFn };
  return obj;
}
const MUTED_OPACITY_CONTENT = RedesignChannelListConstants.MUTED_OPACITY_CONTENT;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/markup/native/MarkupMessagePreviewReactRules.tsx");

export default function createChannelListMessagePreviewReactRules(layout, arg1, arg2, arg3) {
  let bound = arg2;
  const obj = ChannelListLayout;
  const layoutStyles = obj.getLayoutStyles(layout);
  if (null != arg3) {
    const _Math = Math;
    bound = Math.min(arg2, arg3);
  }
  let num = IconSize.ICON_SIZE[layoutStyles.messagePreview.messageTypeIconSizeNew];
  const tmp6 = createMessagePreviewReactRules;
  if (num == null) {
    num = 0;
  }
  const obj2 = { customEmojiSize: num * bound };
  return tmp6(obj2);
};
export { createMessagePreviewReactRules };
