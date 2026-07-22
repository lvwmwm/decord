// Module ID: 10247
// Function ID: 79217
// Name: defaultReactFn
// Dependencies: []
// Exports: default

// Module 10247 (defaultReactFn)
function defaultReactFn(content, output, state) {
  if ("string" === typeof content.content) {
    content = content.content;
  } else {
    content = output(dependencyMap[4]).smartOutput(content, output, state);
    const obj = output(dependencyMap[4]);
  }
  return content;
}
function createMessagePreviewReactRules(iconColor) {
  let customEmojiSize;
  iconColor = iconColor.iconColor;
  const arg1 = iconColor;
  ({ iconSize: closure_1, customEmojiSize } = iconColor);
  if (customEmojiSize === undefined) {
    customEmojiSize = 15;
  }
  const dependencyMap = customEmojiSize;
  let obj = { [closure_0(closure_2[7]).AST_KEY.TEXT]: obj };
  obj = { react: defaultReactFn };
  obj = {};
  const merged = Object.assign(importDefault(dependencyMap[8]).RULES[closure_0(undefined, closure_2[7]).AST_KEY.STRIKETHROUGH]);
  obj["react"] = defaultReactFn;
  obj[arg1(dependencyMap[7]).AST_KEY.STRIKETHROUGH] = obj;
  const obj1 = {};
  const merged1 = Object.assign(importDefault(dependencyMap[8]).RULES[closure_0(undefined, closure_2[7]).AST_KEY.UNDERLINE]);
  obj1["react"] = defaultReactFn;
  obj[arg1(dependencyMap[7]).AST_KEY.UNDERLINE] = obj1;
  const obj2 = {};
  const merged2 = Object.assign(importDefault(dependencyMap[8]).RULES[closure_0(undefined, closure_2[7]).AST_KEY.ITALICS]);
  obj2["react"] = defaultReactFn;
  obj[arg1(dependencyMap[7]).AST_KEY.ITALICS] = obj2;
  const obj3 = {};
  const merged3 = Object.assign(importDefault(dependencyMap[8]).RULES[closure_0(undefined, closure_2[7]).AST_KEY.STRONG]);
  obj3["react"] = defaultReactFn;
  obj[arg1(dependencyMap[7]).AST_KEY.STRONG] = obj3;
  const obj4 = {};
  const merged4 = Object.assign(importDefault(dependencyMap[8]).RULES[closure_0(undefined, closure_2[7]).AST_KEY.LINK]);
  obj4["react"] = defaultReactFn;
  obj[arg1(dependencyMap[7]).AST_KEY.LINK] = obj4;
  const obj5 = {};
  const merged5 = Object.assign(importDefault(dependencyMap[8]).RULES[closure_0(undefined, closure_2[7]).AST_KEY.URL]);
  obj5["react"] = defaultReactFn;
  obj[arg1(dependencyMap[7]).AST_KEY.URL] = obj5;
  const obj6 = {};
  const merged6 = Object.assign(importDefault(dependencyMap[8]).RULES[closure_0(undefined, closure_2[7]).AST_KEY.AUTOLINK]);
  obj6["react"] = defaultReactFn;
  obj[arg1(dependencyMap[7]).AST_KEY.AUTOLINK] = obj6;
  const obj7 = {};
  const merged7 = Object.assign(importDefault(dependencyMap[8]).RULES[closure_0(undefined, closure_2[7]).AST_KEY.LINE_BREAK]);
  obj7["react"] = function react() {
    return "\n";
  };
  obj[arg1(dependencyMap[7]).AST_KEY.LINE_BREAK] = obj7;
  obj[arg1(dependencyMap[7]).AST_KEY.HIGHLIGHT] = {
    react(node, output, key) {
      const obj = {};
      const tmp = callback(customEmojiSize[9]);
      obj.children = iconColor(customEmojiSize[4]).smartOutput(node, output, key);
      return callback2(tmp, obj, key.key);
    }
  };
  const obj8 = {};
  const merged8 = Object.assign(importDefault(dependencyMap[8]).RULES[closure_0(undefined, closure_2[7]).AST_KEY.BLOCK_QUOTE]);
  obj8["react"] = defaultReactFn;
  obj[arg1(dependencyMap[7]).AST_KEY.BLOCK_QUOTE] = obj8;
  const obj9 = {};
  const merged9 = Object.assign(importDefault(dependencyMap[8]).RULES[closure_0(undefined, closure_2[7]).AST_KEY.PARAGRAPH]);
  obj9["order"] = 600;
  obj9["react"] = defaultReactFn;
  obj[arg1(dependencyMap[7]).AST_KEY.PARAGRAPH] = obj9;
  obj[arg1(dependencyMap[7]).AST_KEY.EMOJI] = {
    react(surrogate) {
      return surrogate.surrogate || surrogate.content;
    }
  };
  obj[arg1(dependencyMap[7]).AST_KEY.CUSTOM_EMOJI] = {
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
          obj3 = { opacity: closure_3 };
          muted = obj3;
        }
        items[3] = muted;
        obj.style = items;
        const obj4 = { uri: src.src };
        obj.source = obj4;
        return closure_4(callback(customEmojiSize[10]), obj, muted.key);
      } else {
        return src.alt;
      }
    }
  };
  obj[arg1(dependencyMap[7]).AST_KEY.SPOILER] = {
    react(node, output, muted) {
      const obj = { disableReveal: true, muted: muted.muted };
      const tmp = callback(customEmojiSize[12]);
      obj.children = iconColor(customEmojiSize[4]).smartOutput(node, output, muted);
      return callback2(tmp, obj, muted.key);
    }
  };
  obj[arg1(dependencyMap[7]).AST_KEY.STATIC_ROUTE_LINK] = {
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
  const merged10 = Object.assign(importDefault(dependencyMap[8]).RULES[closure_0(undefined, closure_2[7]).AST_KEY.INLINE_CODE]);
  obj10["react"] = defaultReactFn;
  obj[arg1(dependencyMap[7]).AST_KEY.INLINE_CODE] = obj10;
  const obj11 = {};
  const merged11 = Object.assign(importDefault(dependencyMap[8]).RULES[closure_0(undefined, closure_2[7]).AST_KEY.CODE_BLOCK]);
  obj11["parse"] = function parse(arg0, arg1, arg2) {
    const parsed = callback(customEmojiSize[8]).RULES[closure_0(undefined, closure_2[7]).AST_KEY.CODE_BLOCK].parse(arg0, arg1, arg2);
    if ("ansi" === str.toLowerCase()) {
      const content = parsed.content;
      parsed.content = content.replaceAll(closure_6, "");
    }
    return parsed;
  };
  obj11["react"] = defaultReactFn;
  obj[arg1(dependencyMap[7]).AST_KEY.CODE_BLOCK] = obj11;
  const obj12 = {};
  const merged12 = Object.assign(importDefault(dependencyMap[8]).RULES[closure_0(undefined, closure_2[7]).AST_KEY.MENTION]);
  obj12["react"] = defaultReactFn;
  obj[arg1(dependencyMap[7]).AST_KEY.MENTION] = obj12;
  const obj13 = {};
  const merged13 = Object.assign(importDefault(dependencyMap[8]).RULES[closure_0(undefined, closure_2[7]).AST_KEY.CHANNEL_MENTION]);
  obj13["react"] = arg1(dependencyMap[13]).inlineChannelMentionReact;
  obj[arg1(dependencyMap[7]).AST_KEY.CHANNEL_MENTION] = obj13;
  const obj14 = {};
  const merged14 = Object.assign(importDefault(dependencyMap[8]).RULES[closure_0(undefined, closure_2[7]).AST_KEY.ATTACHMENT_LINK]);
  obj14["react"] = function react(node, output, key) {
    let obj = {};
    let str = "\u{1F4CE} ";
    if (!obj2.isFabric()) {
      obj = { color: iconColor, size: closure_1 };
      str = callback2(iconColor(customEmojiSize[16]).AttachmentIcon, obj);
    }
    const items = [str, ];
    const obj2 = iconColor(customEmojiSize[15]);
    const tmp = closure_5;
    items[1] = iconColor(customEmojiSize[4]).smartOutput(node, output, key);
    obj.children = items;
    return tmp(iconColor(customEmojiSize[14]).LegacyText, obj, key.key);
  };
  obj[arg1(dependencyMap[7]).AST_KEY.ATTACHMENT_LINK] = obj14;
  const obj15 = {};
  const merged15 = Object.assign(importDefault(dependencyMap[8]).RULES[closure_0(undefined, closure_2[7]).AST_KEY.SOUNDBOARD]);
  obj15["react"] = defaultReactFn;
  obj[arg1(dependencyMap[7]).AST_KEY.SOUNDBOARD] = obj15;
  obj[arg1(dependencyMap[7]).AST_KEY.GUILD] = { react: defaultReactFn };
  const obj16 = {};
  let obj19 = arg1(dependencyMap[13]);
  let obj20 = arg1(dependencyMap[15]);
  let str = "\u{1F4AC}";
  if (!obj20.isFabric()) {
    const obj17 = { source: importDefault(dependencyMap[17]), size: iconColor.channelIconSize, themedColor: iconColor };
    str = callback(arg1(dependencyMap[14]).ThemedIcon, obj17);
  }
  obj16.react = obj19.createInlineChannelReact(str);
  obj[arg1(dependencyMap[7]).AST_KEY.CHANNEL] = obj16;
  const obj18 = {};
  const merged16 = Object.assign(importDefault(dependencyMap[8]).RULES[closure_0(undefined, closure_2[7]).AST_KEY.COMMAND_MENTION]);
  obj18["react"] = function react(node, output, key) {
    const obj = {};
    const items = [, iconColor(customEmojiSize[4]).smartOutput(node, output, key)];
    obj.children = items;
    return callback3(iconColor(customEmojiSize[14]).LegacyText, obj, key.key);
  };
  obj[arg1(dependencyMap[7]).AST_KEY.COMMAND_MENTION] = obj18;
  obj19 = {};
  const merged17 = Object.assign(importDefault(dependencyMap[8]).RULES[closure_0(undefined, closure_2[7]).AST_KEY.TIMESTAMP]);
  obj19["react"] = function react(node, arg1, key) {
    return callback2(callback(customEmojiSize[18]), { node, style: null }, key.key);
  };
  obj[arg1(dependencyMap[7]).AST_KEY.TIMESTAMP] = obj19;
  obj20 = {};
  const merged18 = Object.assign(importDefault(dependencyMap[8]).RULES[closure_0(undefined, closure_2[7]).AST_KEY.LIST]);
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
  obj[arg1(dependencyMap[7]).AST_KEY.LIST] = obj20;
  obj[arg1(dependencyMap[7]).AST_KEY.HEADING] = { react: defaultReactFn };
  obj[arg1(dependencyMap[7]).AST_KEY.SUBTEXT] = { react: defaultReactFn };
  return obj;
}
importAll(dependencyMap[0]);
const MUTED_OPACITY_CONTENT = arg1(dependencyMap[1]).MUTED_OPACITY_CONTENT;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const regExp = new RegExp(arg1(dependencyMap[3]).ANSI_CONTROL_SEQUENCE_RE, "g");
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/markup/native/MarkupMessagePreviewReactRules.tsx");

export default function createChannelListMessagePreviewReactRules(layout, iconColor) {
  let obj = iconColor(dependencyMap[5]);
  const layoutStyles = obj.getLayoutStyles(layout);
  let bound = arg2;
  if (null != arg3) {
    const _Math = Math;
    bound = Math.min(arg2, arg3);
  }
  obj = { iconColor, iconSize: layoutStyles.messagePreview.messageTypeIconSizeNew, channelIconSize: layoutStyles.messagePreview.messageTypeIconSize };
  const tmp5 = iconColor(dependencyMap[6]).ICON_SIZE[layoutStyles.messagePreview.messageTypeIconSizeNew];
  let num = 0;
  if (null != tmp5) {
    num = tmp5;
  }
  obj.customEmojiSize = num * bound;
  return createMessagePreviewReactRules(obj);
};
export { createMessagePreviewReactRules };
