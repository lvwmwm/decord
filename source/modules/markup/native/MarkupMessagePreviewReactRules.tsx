// Module ID: 10288
// Function ID: 79476
// Name: defaultReactFn
// Dependencies: [31, 10289, 33, 4125, 10001, 10290, 5511, 4563, 4565, 10295, 5085, 478, 10296, 10297, 1273, 3994, 9691, 4612, 10298, 2]
// Exports: default

// Module 10288 (defaultReactFn)
import "result";
import { MUTED_OPACITY_CONTENT } from "hairlineWidth";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
function defaultReactFn(content, output, state) {
  if ("string" === typeof content.content) {
    content = content.content;
  } else {
    content = require(10001) /* smartOutput */.smartOutput(content, output, state);
    const obj = require(10001) /* smartOutput */;
  }
  return content;
}
function createMessagePreviewReactRules(iconColor) {
  let customEmojiSize;
  let importDefault;
  iconColor = iconColor.iconColor;
  ({ iconSize: importDefault, customEmojiSize } = iconColor);
  if (customEmojiSize === undefined) {
    customEmojiSize = 15;
  }
  obj = { [closure_0(closure_2[7]).AST_KEY.TEXT]: obj };
  obj = { react: defaultReactFn };
  obj = {};
  const merged = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.STRIKETHROUGH]);
  obj["react"] = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.STRIKETHROUGH] = obj;
  let obj1 = {};
  const merged1 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.UNDERLINE]);
  obj1["react"] = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.UNDERLINE] = obj1;
  let obj2 = {};
  const merged2 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.ITALICS]);
  obj2["react"] = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.ITALICS] = obj2;
  let obj3 = {};
  const merged3 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.STRONG]);
  obj3["react"] = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.STRONG] = obj3;
  let obj4 = {};
  const merged4 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.LINK]);
  obj4["react"] = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.LINK] = obj4;
  const obj5 = {};
  const merged5 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.URL]);
  obj5["react"] = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.URL] = obj5;
  const obj6 = {};
  const merged6 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.AUTOLINK]);
  obj6["react"] = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.AUTOLINK] = obj6;
  const obj7 = {};
  const merged7 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.LINE_BREAK]);
  obj7["react"] = function react() {
    return "\n";
  };
  obj[iconColor(customEmojiSize[7]).AST_KEY.LINE_BREAK] = obj7;
  obj[iconColor(customEmojiSize[7]).AST_KEY.HIGHLIGHT] = {
    react(node, output, key) {
      const obj = {};
      const tmp = outer1_1(customEmojiSize[9]);
      obj.children = iconColor(customEmojiSize[4]).smartOutput(node, output, key);
      return outer1_4(tmp, obj, key.key);
    }
  };
  const obj8 = {};
  const merged8 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.BLOCK_QUOTE]);
  obj8["react"] = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.BLOCK_QUOTE] = obj8;
  const obj9 = {};
  const merged9 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.PARAGRAPH]);
  obj9["order"] = 600;
  obj9["react"] = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.PARAGRAPH] = obj9;
  obj[iconColor(customEmojiSize[7]).AST_KEY.EMOJI] = {
    react(surrogate) {
      return surrogate.surrogate || surrogate.content;
    }
  };
  obj[iconColor(customEmojiSize[7]).AST_KEY.CUSTOM_EMOJI] = {
    react(src, arg1, muted) {
      if (src.src) {
        let obj = iconColor(customEmojiSize[5]);
        const sizeStyle = obj.makeSizeStyle(customEmojiSize);
        obj = {};
        const items = [sizeStyle, , , ];
        obj = { resizeMode: "contain" };
        items[1] = obj;
        let obj3 = iconColor(customEmojiSize[11]);
        let isAndroidResult = obj3.isAndroid();
        if (isAndroidResult) {
          const obj1 = {};
          const obj2 = { translateY: 3 };
          const items1 = [obj2];
          obj1.transform = items1;
          isAndroidResult = obj1;
        }
        items[2] = isAndroidResult;
        muted = muted.muted;
        if (muted) {
          obj3 = { opacity: outer1_3 };
          muted = obj3;
        }
        items[3] = muted;
        obj.style = items;
        const obj4 = { uri: src.src };
        obj.source = obj4;
        return outer1_4(outer1_1(customEmojiSize[10]), obj, muted.key);
      } else {
        return src.alt;
      }
    }
  };
  obj[iconColor(customEmojiSize[7]).AST_KEY.SPOILER] = {
    react(node, output, muted) {
      const obj = { disableReveal: true, muted: muted.muted };
      const tmp = outer1_1(customEmojiSize[12]);
      obj.children = iconColor(customEmojiSize[4]).smartOutput(node, output, muted);
      return outer1_4(tmp, obj, muted.key);
    }
  };
  obj[iconColor(customEmojiSize[7]).AST_KEY.STATIC_ROUTE_LINK] = {
    react(channelId, output, state) {
      let smartOutputResult = null;
      if (obj.isStaticRouteIconType(channelId.channelId)) {
        smartOutputResult = iconColor(customEmojiSize[4]).smartOutput(channelId, output, state);
        const obj2 = iconColor(customEmojiSize[4]);
      }
      return smartOutputResult;
    }
  };
  const obj10 = {};
  const merged10 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.INLINE_CODE]);
  obj10["react"] = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.INLINE_CODE] = obj10;
  const obj11 = {};
  const merged11 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.CODE_BLOCK]);
  obj11["parse"] = function parse(arg0, arg1, arg2) {
    const parsed = outer1_1(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.CODE_BLOCK].parse(arg0, arg1, arg2);
    if ("ansi" === str.toLowerCase()) {
      const content = parsed.content;
      parsed.content = content.replaceAll(outer1_6, "");
    }
    return parsed;
  };
  obj11["react"] = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.CODE_BLOCK] = obj11;
  const obj12 = {};
  const merged12 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.MENTION]);
  obj12["react"] = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.MENTION] = obj12;
  const obj13 = {};
  const merged13 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.CHANNEL_MENTION]);
  obj13["react"] = iconColor(customEmojiSize[13]).inlineChannelMentionReact;
  obj[iconColor(customEmojiSize[7]).AST_KEY.CHANNEL_MENTION] = obj13;
  const obj14 = {};
  const merged14 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.ATTACHMENT_LINK]);
  obj14["react"] = function react(node, output, key) {
    let obj = {};
    let str = "\u{1F4CE} ";
    if (!obj2.isFabric()) {
      obj = { color: iconColor, size: closure_1 };
      str = outer1_4(iconColor(customEmojiSize[16]).AttachmentIcon, obj);
    }
    const items = [str, ];
    obj2 = iconColor(customEmojiSize[15]);
    const tmp = outer1_5;
    items[1] = iconColor(customEmojiSize[4]).smartOutput(node, output, key);
    obj.children = items;
    return tmp(iconColor(customEmojiSize[14]).LegacyText, obj, key.key);
  };
  obj[iconColor(customEmojiSize[7]).AST_KEY.ATTACHMENT_LINK] = obj14;
  const obj15 = {};
  const merged15 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.SOUNDBOARD]);
  obj15["react"] = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.SOUNDBOARD] = obj15;
  obj[iconColor(customEmojiSize[7]).AST_KEY.GUILD] = { react: defaultReactFn };
  const obj16 = {};
  let obj19 = iconColor(customEmojiSize[13]);
  let obj20 = iconColor(customEmojiSize[15]);
  let str = "\u{1F4AC}";
  if (!obj20.isFabric()) {
    const obj17 = { source: importDefault(customEmojiSize[17]), size: iconColor.channelIconSize, themedColor: iconColor };
    str = callback(iconColor(customEmojiSize[14]).ThemedIcon, obj17);
  }
  obj16.react = obj19.createInlineChannelReact(str);
  obj[iconColor(customEmojiSize[7]).AST_KEY.CHANNEL] = obj16;
  const obj18 = {};
  const merged16 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.COMMAND_MENTION]);
  obj18["react"] = function react(node, output, key) {
    const obj = {};
    const items = ["/", iconColor(customEmojiSize[4]).smartOutput(node, output, key)];
    obj.children = items;
    return outer1_5(iconColor(customEmojiSize[14]).LegacyText, obj, key.key);
  };
  obj[iconColor(customEmojiSize[7]).AST_KEY.COMMAND_MENTION] = obj18;
  obj19 = {};
  const merged17 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.TIMESTAMP]);
  obj19["react"] = function react(node, arg1, key) {
    return outer1_4(outer1_1(customEmojiSize[18]), { node, style: null }, key.key);
  };
  obj[iconColor(customEmojiSize[7]).AST_KEY.TIMESTAMP] = obj19;
  obj20 = {};
  const merged18 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.LIST]);
  obj20["react"] = function react(arg0, output, state) {
    const first = arg0.items[0];
    let first1 = first;
    if (Array.isArray(first)) {
      first1 = first[0];
    }
    let smartOutputResult = null;
    if (null != first1) {
      smartOutputResult = iconColor(customEmojiSize[4]).smartOutput(first1, output, state);
      const obj = iconColor(customEmojiSize[4]);
    }
    return smartOutputResult;
  };
  obj[iconColor(customEmojiSize[7]).AST_KEY.LIST] = obj20;
  obj[iconColor(customEmojiSize[7]).AST_KEY.HEADING] = { react: defaultReactFn };
  obj[iconColor(customEmojiSize[7]).AST_KEY.SUBTEXT] = { react: defaultReactFn };
  return obj;
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
const regExp = new RegExp(require("_createForOfIteratorHelperLoose").ANSI_CONTROL_SEQUENCE_RE, "g");
const result = require("jsxProd").fileFinishedImporting("modules/markup/native/MarkupMessagePreviewReactRules.tsx");

export default function createChannelListMessagePreviewReactRules(layout, iconColor) {
  let obj = require(10290) /* getLayoutStyles */;
  const layoutStyles = obj.getLayoutStyles(layout);
  let bound = arg2;
  if (null != arg3) {
    const _Math = Math;
    bound = Math.min(arg2, arg3);
  }
  obj = { iconColor, iconSize: layoutStyles.messagePreview.messageTypeIconSizeNew, channelIconSize: layoutStyles.messagePreview.messageTypeIconSize };
  const tmp5 = require(5511) /* ICON_SIZE */.ICON_SIZE[layoutStyles.messagePreview.messageTypeIconSizeNew];
  let num = 0;
  if (null != tmp5) {
    num = tmp5;
  }
  obj.customEmojiSize = num * bound;
  return createMessagePreviewReactRules(obj);
};
export { createMessagePreviewReactRules };
