// Module ID: 4119
// Function ID: 34134
// Name: MarkupText
// Dependencies: []
// Exports: default, plainMentionRenderer, plainSpoilerRenderer

// Module 4119 (MarkupText)
let EMOJI_CHAT_SIZE;
class MarkupText {
  constructor(arg0) {
    str = global.color;
    if (str === undefined) {
      str = "text-default";
    }
    str2 = global.variant;
    if (str2 === undefined) {
      str2 = "text-sm/medium";
    }
    obj = { "Bool(true)": false, "Bool(true)": false, "Bool(true)": false };
    setPrototypeOfResult = Object.setPrototypeOf(null);
    merged = Object.assign(global, obj);
    obj = {};
    obj.variant = str2;
    obj.color = str;
    merged1 = Object.assign(merged);
    obj["children"] = global.children;
    return jsx(arg1(dependencyMap[12]).Text, obj);
  }
}
function getIconSize() {
  const fontScale = store.getFontScale();
  if (fontScale < 1) {
    let SMALL = arg1(dependencyMap[25]).Icon.Sizes.EXTRA_SMALL_10;
  } else if (fontScale < 1.25) {
    SMALL = arg1(dependencyMap[25]).Icon.Sizes.EXTRA_SMALL;
  } else {
    SMALL = arg1(dependencyMap[25]).Icon.Sizes.SMALL;
  }
  return SMALL;
}
function MarkupLink(arg0) {
  let node;
  let output;
  let state;
  let styles;
  ({ state, node } = arg0);
  const arg1 = node;
  function getValidatedUrl(arg0) {
    const target = node.target;
    if ("string" !== typeof target) {
      return null;
    } else {
      const url = getValidatedUrl(closure_2[26]).safeParseWithQuery(target);
      let formatResult = null;
      if (null != url) {
        formatResult = null;
        if (null != url.protocol) {
          formatResult = null;
          if (null != url.hostname) {
            formatResult = getValidatedUrl(closure_2[26]).format(url);
            const obj2 = getValidatedUrl(closure_2[26]);
          }
        }
      }
      return formatResult;
    }
  }
  ({ output, styles } = arg0);
  const linkVariant = state.linkVariant;
  let str = "text-sm/medium";
  if (null != linkVariant) {
    str = linkVariant;
  }
  let obj = { variant: str, accessibilityRole: "link" };
  let link = styles.link;
  if (!link) {
    link = tmp.link;
  }
  obj.style = link;
  obj.onPress = function onPress(stopPropagation) {
    const tmp = getValidatedUrl();
    const node = tmp;
    if (null != tmp) {
      stopPropagation.stopPropagation();
      let obj = node(closure_2[27]);
      obj = {
        href: tmp,
        onConfirm() {
            return callback(closure_2[28]).openURL(tmp);
          },
        trusted() {
            return tmp(closure_2[29]).isLinkTrusted(tmp);
          }
      };
      obj.handleClick(obj);
    }
  };
  obj.onLongPress = function onLongPress(stopPropagation) {
    const tmp = getValidatedUrl();
    if (null != tmp) {
      stopPropagation.stopPropagation();
      const obj = { urlString: tmp };
      getValidatedUrl(closure_2[30])(obj);
    }
  };
  const tmp = callback2();
  const tmp2 = closure_16;
  obj = {};
  const merged = Object.assign(state);
  obj["inLink"] = true;
  obj.children = arg1(dependencyMap[31]).smartOutput(node, output, obj);
  return tmp2(arg1(dependencyMap[12]).Text, obj, state.key);
}
function MarkupMention(styles) {
  let node;
  let roleStyle;
  let state;
  ({ roleStyle, state, node } = styles);
  const arg1 = node;
  styles = styles.styles;
  const userId = node.userId;
  const importDefault = userId;
  const roleId = node.roleId;
  const dependencyMap = roleId;
  const guildId = node.guildId;
  let closure_3 = guildId;
  let obj = arg1(dependencyMap[32]);
  const items = [closure_10, closure_11];
  const items1 = [guildId, roleId, userId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null != guildId) {
      if (null != roleId) {
        let role = role.getRole(guildId, roleId);
      }
      return role;
    }
    role = null;
    if (null != guildId) {
      role = null;
      if (null != userId) {
        role = member.getMember(guildId, userId);
      }
    }
  }, items1);
  let colorString;
  if (null != stateFromStores) {
    colorString = stateFromStores.colorString;
  }
  let tmp4 = null;
  if (null != colorString) {
    tmp4 = colorString;
  }
  let colorStrings;
  if (null != stateFromStores) {
    colorStrings = stateFromStores.colorStrings;
  }
  let tmp6 = null;
  if (null != colorStrings) {
    tmp6 = colorStrings;
  }
  let tmp7 = styles.mention || callback2().mention;
  let tmp8 = null != tmp4;
  if (tmp8) {
    tmp8 = "username" === roleStyle;
  }
  if (tmp8) {
    obj = { color: tmp4 };
    const mention = styles.mention;
    let backgroundColor;
    if (null != mention) {
      backgroundColor = mention.backgroundColor;
    }
    if (null == backgroundColor) {
      backgroundColor = arg1(dependencyMap[33]).hexWithOpacity(tmp4, 0.1);
      const obj3 = arg1(dependencyMap[33]);
    }
    obj.backgroundColor = backgroundColor;
    tmp7 = obj;
  }
  const tmp = callback2();
  const processColorStringsArray = arg1(dependencyMap[34]).useProcessColorStringsArray(tmp6);
  const obj4 = arg1(dependencyMap[34]);
  let str2 = "button";
  const isRoleStyleAndRoleColorsEligibleForERC = arg1(dependencyMap[34]).useIsRoleStyleAndRoleColorsEligibleForERC(guildId, userId, roleStyle, processColorStringsArray);
  if (state.noStyleAndInteraction) {
    str2 = "text";
  }
  let fn;
  if (!state.noStyleAndInteraction) {
    fn = () => {
      let channelId;
      let userId;
      if (null != node.roleId) {
        if (null != node.guildId) {
          const obj5 = userId(roleId[35]);
          let obj = {};
          ({ guildId: obj6.guildId, roleId: obj6.roleId, channelId: obj6.channelId } = node);
          obj5.openLazy(node(roleId[37])(roleId[36], roleId.paths), "RoleMembersActionSheet", obj, "stack");
        }
      }
      if ("@everyone" === node.roleName) {
        if (null != node.guildId) {
          let obj1 = userId(roleId[35]);
          const tmp11 = node(roleId[37])(roleId[36], roleId.paths);
          obj = { guildId: node.guildId, roleId: userId(roleId[38]).castGuildIdAsEveryoneGuildRoleId(node.guildId), channelId: node.channelId };
          obj1.openLazy(tmp11, "RoleMembersActionSheet", obj, "stack");
          const obj4 = userId(roleId[38]);
        }
      }
      ({ userId, channelId } = node);
      if (null != userId) {
        obj = { userId };
        let tmp6;
        if (null != channelId) {
          tmp6 = channelId;
        }
        obj.channelId = tmp6;
        userId(roleId[19])(obj);
        const tmp5 = userId(roleId[19]);
      } else {
        obj1 = {};
        const intl = node(roleId[21]).intl;
        obj1.title = intl.string(node(roleId[21]).t.r0DLNm);
        const intl2 = node(roleId[21]).intl;
        obj1.body = intl2.string(node(roleId[21]).t.Fqqbhg);
        const intl3 = node(roleId[21]).intl;
        obj1.confirmText = intl3.string(node(roleId[21]).t.BddRzS);
        userId(roleId[20]).show(obj1);
        const obj7 = userId(roleId[20]);
      }
    };
  }
  obj = { accessibilityRole: str2, style: tmp7 };
  let textColor;
  if (null != state) {
    textColor = state.textColor;
  }
  obj.color = textColor;
  let tmp17;
  if (isRoleStyleAndRoleColorsEligibleForERC) {
    tmp17 = processColorStringsArray;
  }
  obj.gradientColors = tmp17;
  obj.onPress = fn;
  let tmp19Result = "dot" === roleStyle;
  if (tmp19Result) {
    const obj1 = {};
    let tmp22;
    if (null != guildId) {
      tmp22 = guildId;
    }
    obj1.guildId = tmp22;
    obj1.color = tmp4;
    obj1.colors = tmp6;
    obj1.size = "small";
    tmp19Result = closure_16(arg1(dependencyMap[25]).RoleDot, obj1);
    const tmp19 = closure_16;
  }
  const items2 = [tmp19Result, ];
  const obj5 = arg1(dependencyMap[34]);
  const tmp14 = closure_17;
  const tmp15 = MarkupText;
  items2[1] = arg1(dependencyMap[31]).smartOutput(node, styles.output, state);
  obj.children = items2;
  return tmp14(tmp15, obj, state.key);
}
function MarkupBlockQuote(state) {
  let node;
  let output;
  let styles;
  state = state.state;
  ({ styles, node, output } = state);
  const obj = {};
  let blockQuote = styles.blockQuote;
  if (!blockQuote) {
    blockQuote = callback2().blockQuote;
  }
  obj.style = blockQuote;
  let textColor;
  if (null != state) {
    textColor = state.textColor;
  }
  obj.color = textColor;
  obj.children = arg1(dependencyMap[31]).smartOutput(node, output, state);
  return closure_16(MarkupText, obj, state.key);
}
function MarkupInlineCode(arg0) {
  let node;
  let output;
  let state;
  let styles;
  ({ state, node } = arg0);
  const arg1 = node;
  ({ styles, output } = arg0);
  let tmp2 = !state.noStyleAndInteraction;
  if (tmp2) {
    tmp2 = !state.inLink;
  }
  let str = "text";
  if (tmp2) {
    str = "button";
  }
  let obj = {};
  const tmp = callback2();
  const merged = Object.assign(styles.inlineCode || callback2().inlineCode);
  if (state.inLink) {
    delete r6.color;
  }
  obj = { accessibilityRole: str };
  obj.style = obj;
  let textColor;
  if (null != state) {
    textColor = state.textColor;
  }
  obj.color = textColor;
  let fn;
  if (tmp2) {
    fn = () => {
      const content = node.content;
      if ("string" === typeof content) {
        node(closure_2[22]).copy(content);
        const obj = node(closure_2[22]);
        const result = node(closure_2[23]).presentCopiedToClipboard();
        const obj2 = node(closure_2[23]);
      }
    };
  }
  obj.onPress = fn;
  const tmp3 = styles.inlineCode || callback2().inlineCode;
  const tmp5 = closure_16;
  const tmp6 = MarkupText;
  obj.children = arg1(dependencyMap[31]).smartOutput(node, output, state);
  return tmp5(tmp6, obj, state.key);
}
function MarkupCodeBlock(state) {
  let node;
  let output;
  let styles;
  state = state.state;
  ({ styles, node, output } = state);
  const obj = {};
  let codeBlock = styles.codeBlock;
  if (!codeBlock) {
    codeBlock = callback2().codeBlock;
  }
  obj.style = codeBlock;
  let textColor;
  if (null != state) {
    textColor = state.textColor;
  }
  obj.color = textColor;
  const items = [arg1(dependencyMap[31]).smartOutput(node, output, state), "\n"];
  obj.children = items;
  return closure_17(MarkupText, obj, state.key);
}
function MarkupCustomEmoji(styles) {
  let node;
  let state;
  ({ state, node } = styles);
  const AnimateEmoji = arg1(dependencyMap[39]).AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  arg1(dependencyMap[32]);
  [][0] = closure_8;
  if (node.src) {
    let obj = {};
    let emoji = styles.styles.emoji;
    if (!emoji) {
      emoji = emoji.emoji;
    }
    const items = [emoji, ];
    let tmp13 = null;
    if (null != state.customEmojiOffsetY) {
      obj = {};
      const obj1 = { translateY: state.customEmojiOffsetY };
      const items1 = [obj1];
      obj.transform = items1;
      tmp13 = obj;
    }
    items[1] = tmp13;
    obj.style = items;
    const obj2 = { uri: node.src };
    obj.source = obj2;
    obj.enableAnimation = !tmp3 && setting;
    let tmp4Result = tmp4(importDefault(dependencyMap[40]), obj, state.key);
    const tmp11 = importDefault(dependencyMap[40]);
  } else {
    obj = {};
    let textColor;
    if (null != state) {
      textColor = state.textColor;
    }
    obj.color = textColor;
    obj.children = node.alt;
    tmp4Result = tmp4(MarkupText, obj, state.key);
    const tmp5 = MarkupText;
  }
  return tmp4Result;
}
function MarkupChannelMention(state) {
  let styles;
  let variants;
  state = state.state;
  const arg1 = state;
  const node = state.node;
  const importDefault = node;
  const output = state.output;
  ({ styles, variants } = state);
  const tmp = callback2();
  let str = "button";
  if (state.noStyleAndInteraction) {
    str = "text";
  }
  let obj = {};
  const channelMentionText = variants.channelMentionText;
  let str2 = "text-xs/medium";
  if (null != channelMentionText) {
    str2 = channelMentionText;
  }
  obj.variant = str2;
  obj.style = tmp.channelMentionText;
  let outputResult = null;
  if (null != node.inContent) {
    outputResult = output(node.inContent, state);
  }
  const items = [outputResult, , ];
  if (null == node.inContent) {
    items[1] = null;
    let obj3 = arg1(dependencyMap[31]);
    items[2] = obj3.smartOutput(node, output, state);
    obj.children = items;
    const tmp2Result = closure_17(arg1(dependencyMap[12]).Text, obj, state.key);
    let tmp18Result = tmp2Result;
    if (!state.disablePressableChannelMention) {
      obj = { accessibilityRole: str };
      let channelMention = styles.channel;
      if (!channelMention) {
        channelMention = tmp.channelMention;
      }
      const items1 = [channelMention, ];
      let tmp20 = null;
      if (null != state.mentionPillOffsetY) {
        obj = {};
        const obj1 = { translateY: state.mentionPillOffsetY };
        const items2 = [obj1];
        obj.transform = items2;
        tmp20 = obj;
      }
      items1[1] = tmp20;
      obj.style = items1;
      let str3 = "auto";
      if (state.noStyleAndInteraction) {
        str3 = "none";
      }
      obj.pointerEvents = str3;
      obj.onPress = function onPress() {
        let channelId;
        let messageId;
        if (!state.noStyleAndInteraction) {
          ({ channelId, messageId } = node);
          if (null != channelId) {
            if (null != messageId) {
              state(closure_2[15]).transitionToMessage(channelId, messageId);
              const obj5 = state(closure_2[15]);
            } else {
              const channel = channel.getChannel(channelId);
              if (null != channel) {
                if (channel.isGuildVocal()) {
                  if (obj.canViewChannel(channel)) {
                    if (tmp4) {
                      const rootNavigationRef = state(closure_2[17]).getRootNavigationRef();
                      if (null != rootNavigationRef) {
                        rootNavigationRef.goBack();
                      }
                      const obj2 = state(closure_2[17]);
                    }
                    if (tmp5) {
                      let arr = node(closure_2[18]);
                      arr = arr.pop();
                    }
                  }
                  const obj = state(closure_2[16]);
                }
              }
              state(closure_2[15]).transitionToChannel(channelId);
              const obj4 = state(closure_2[15]);
            }
          }
        }
        return null;
      };
      obj.children = tmp2Result;
      tmp18Result = closure_16(closure_5, obj, state.key);
      const tmp18 = closure_16;
      const tmp19 = closure_5;
    }
    return tmp18Result;
  } else {
    const obj2 = { themedColor: importDefault(dependencyMap[14]).colors.MENTION_FOREGROUND };
    const fontScale = store.getFontScale();
    if (fontScale < 1.25) {
      obj3 = {};
    } else {
      obj3 = fontScale < 2 ? { "Null": "<string:2552889346>", "Null": "<string:2938503170>" } : {};
    }
    obj2.style = obj3;
    obj2.source = importDefault(dependencyMap[41]);
    obj2.size = arg1(dependencyMap[25]).Icon.Sizes.CUSTOM;
    closure_16(arg1(dependencyMap[25]).ThemedIcon, obj2);
    const tmp4 = closure_16;
  }
}
function MarkupAttachmentLink(state) {
  let output;
  let styles;
  let variants;
  state = state.state;
  const arg1 = state;
  const node = state.node;
  const importDefault = node;
  ({ output, styles, variants } = state);
  const tmp = callback2();
  let str = "button";
  if (state.noStyleAndInteraction) {
    str = "text";
  }
  let obj = {};
  const channelMentionText = variants.channelMentionText;
  let str2 = "text-xs/medium";
  if (null != channelMentionText) {
    str2 = channelMentionText;
  }
  obj.variant = str2;
  obj.style = tmp.channelMentionText;
  obj = { themedColor: importDefault(dependencyMap[14]).colors.MENTION_FOREGROUND, source: importDefault(dependencyMap[42]), size: getIconSize() };
  const items = [callback(arg1(dependencyMap[25]).ThemedIcon, obj), ];
  let obj2 = arg1(dependencyMap[31]);
  items[1] = obj2.smartOutput(node, output, state);
  obj.children = items;
  const tmp2Result = closure_17(arg1(dependencyMap[12]).Text, obj, state.key);
  let tmp5Result = tmp2Result;
  if (!state.disablePressableChannelMention) {
    obj = { accessibilityRole: str };
    let channelMention = styles.channel;
    if (!channelMention) {
      channelMention = tmp.channelMention;
    }
    const items1 = [channelMention, ];
    let tmp7 = null;
    if (null != state.mentionPillOffsetY) {
      const obj1 = {};
      obj2 = { translateY: state.mentionPillOffsetY };
      const items2 = [obj2];
      obj1.transform = items2;
      tmp7 = obj1;
    }
    items1[1] = tmp7;
    obj.style = items1;
    let str3 = "auto";
    if (state.noStyleAndInteraction) {
      str3 = "none";
    }
    obj.pointerEvents = str3;
    obj.onPress = function onPress(stopPropagation) {
      if (!state.noStyleAndInteraction) {
        stopPropagation.stopPropagation();
        node(closure_2[28]).openURL(node.attachmentLink);
        const obj = node(closure_2[28]);
      }
    };
    obj.children = tmp2Result;
    tmp5Result = callback(closure_5, obj, state.key);
    const tmp5 = callback;
    const tmp6 = closure_5;
  }
  return tmp5Result;
}
function MarkupCommandMention(state) {
  let node;
  let output;
  let styles;
  state = state.state;
  ({ node, output, styles } = state);
  const obj = { node, output, state };
  let mention = styles.mention;
  const tmp = callback2();
  const tmp2 = closure_16;
  if (!mention) {
    mention = tmp.mention;
  }
  obj.style = mention;
  return tmp2(importDefault(dependencyMap[43]), obj, state.key);
}
let closure_3 = importAll(dependencyMap[0]);
({ PixelRatio: closure_4, Pressable: closure_5, View: closure_6, Text: closure_7 } = arg1(dependencyMap[1]));
let closure_8 = importDefault(dependencyMap[2]);
let closure_9 = importDefault(dependencyMap[3]);
let closure_10 = importDefault(dependencyMap[4]);
let closure_11 = importDefault(dependencyMap[5]);
let closure_12 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[1]);
({ EMOJI_CHAT_SIZE, GuildFeatures: closure_13 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
({ StaticChannelRoute: closure_14, StaticChannelId: closure_15 } = arg1(dependencyMap[8]));
const Fonts = arg1(dependencyMap[9]).Fonts;
const tmp4 = arg1(dependencyMap[8]);
({ jsx: closure_16, jsxs: closure_17 } = arg1(dependencyMap[10]));
const regExp = new RegExp(arg1(dependencyMap[11]).ANSI_CONTROL_SEQUENCE_RE, "g");
let obj = { fontFamily: Fonts.CODE_BOLD };
obj = { fontFamily: Fonts.PRIMARY_BOLD };
let closure_19 = { emoji: { width: EMOJI_CHAT_SIZE, height: EMOJI_CHAT_SIZE, resizeMode: "contain" }, guildIcon: { <string:3747734852>: "\u{1F4A0}", <string:1102771281>: 6 }, list: { paddingTop: 16 }, listItem: { paddingTop: 4 }, bullet: obj, strong: obj };
let obj2 = arg1(dependencyMap[13]);
obj = {};
const tmp5 = arg1(dependencyMap[10]);
obj.link = { fontFamily: Fonts.PRIMARY_BOLD, color: importDefault(dependencyMap[14]).colors.TEXT_LINK };
obj2 = { backgroundColor: importDefault(dependencyMap[14]).colors.MENTION_BACKGROUND };
obj.channelMention = obj2;
const obj1 = { fontFamily: Fonts.PRIMARY_BOLD, color: importDefault(dependencyMap[14]).colors.TEXT_LINK };
obj.channelMentionText = { color: importDefault(dependencyMap[14]).colors.MENTION_FOREGROUND };
const obj3 = { color: importDefault(dependencyMap[14]).colors.MENTION_FOREGROUND };
obj.mention = { color: importDefault(dependencyMap[14]).unsafe_rawColors.BRAND_500, backgroundColor: importDefault(dependencyMap[14]).colors.BORDER_SUBTLE };
const obj4 = { color: importDefault(dependencyMap[14]).unsafe_rawColors.BRAND_500, backgroundColor: importDefault(dependencyMap[14]).colors.BORDER_SUBTLE };
obj.inlineCode = { fontFamily: Fonts.CODE_BOLD, color: importDefault(dependencyMap[14]).colors.TEXT_DEFAULT, backgroundColor: importDefault(dependencyMap[14]).colors.BACKGROUND_CODE };
const obj5 = { fontFamily: Fonts.CODE_BOLD, color: importDefault(dependencyMap[14]).colors.TEXT_DEFAULT, backgroundColor: importDefault(dependencyMap[14]).colors.BACKGROUND_CODE };
obj.codeBlock = { fontFamily: Fonts.CODE_BOLD, color: importDefault(dependencyMap[14]).colors.TEXT_DEFAULT, backgroundColor: importDefault(dependencyMap[14]).colors.BACKGROUND_CODE };
const obj7 = { enabledOOP: null, enabledLegacy: null, overlayMethod: null, borderLeftColor: importDefault(dependencyMap[14]).colors.SPINE_DEFAULT };
obj.blockQuote = obj7;
let closure_20 = obj2.createStyles(obj);
const obj6 = { fontFamily: Fonts.CODE_BOLD, color: importDefault(dependencyMap[14]).colors.TEXT_DEFAULT, backgroundColor: importDefault(dependencyMap[14]).colors.BACKGROUND_CODE };
const result = arg1(dependencyMap[54]).fileFinishedImporting("modules/markup/MarkupReactRules.native.tsx");

export default function createRules() {
  let obj = arg0;
  obj = arg1;
  if (arg0 === undefined) {
    obj = {};
  }
  const arg1 = obj;
  if (obj === undefined) {
    obj = {};
  }
  const importDefault = obj;
  const tmp = (arg0) => {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    return (node, output, noStyleAndInteraction) => {
      if (noStyleAndInteraction.noStyleAndInteraction) {
        let obj = {};
        let textColor;
        if (null != noStyleAndInteraction) {
          textColor = noStyleAndInteraction.textColor;
        }
        obj.color = textColor;
        obj.children = obj(closure_2[31]).smartOutput(node, output, noStyleAndInteraction);
        let tmpResult = tmp(closure_21, obj, noStyleAndInteraction.key);
        const obj3 = obj(closure_2[31]);
        const tmp5 = closure_21;
      } else {
        obj = { state: noStyleAndInteraction, node, output };
        obj.styles = obj;
        tmpResult = tmp(closure_23, obj, noStyleAndInteraction.key);
      }
      return tmpResult;
    };
  }(obj);
  obj = {};
  obj[arg1(dependencyMap[44]).AST_KEY.TEXT] = {
    react(content, output, textColor) {
      if ("string" === typeof content.content) {
        content = content.content;
      } else {
        const obj = {};
        textColor = undefined;
        if (null != textColor) {
          textColor = textColor.textColor;
        }
        obj.color = textColor;
        obj.children = obj(closure_2[31]).smartOutput(content, output, textColor);
        content = closure_16(closure_21, obj, textColor.key);
        const obj2 = obj(closure_2[31]);
        const tmp = closure_16;
        const tmp2 = closure_21;
      }
      return content;
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.STRIKETHROUGH] = {
    react(node, output, textColor) {
      const obj = { style: { textDecorationLine: "line-through" } };
      textColor = undefined;
      if (null != textColor) {
        textColor = textColor.textColor;
      }
      obj.color = textColor;
      obj.variant = textColor.textVariant;
      obj.children = obj(closure_2[31]).smartOutput(node, output, textColor);
      return closure_16(closure_21, obj, textColor.key);
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.UNDERLINE] = {
    react(node, output, textColor) {
      const obj = { style: { textDecorationLine: "underline" } };
      textColor = undefined;
      if (null != textColor) {
        textColor = textColor.textColor;
      }
      obj.color = textColor;
      obj.variant = textColor.textVariant;
      obj.children = obj(closure_2[31]).smartOutput(node, output, textColor);
      return closure_16(closure_21, obj, textColor.key);
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.ITALICS] = {
    react(node, output, textColor) {
      let obj = {};
      obj = {};
      const em = obj.em;
      let fontStyle;
      if (null != em) {
        fontStyle = em.fontStyle;
      }
      let str = "italic";
      if (null != fontStyle) {
        str = fontStyle;
      }
      obj.fontStyle = str;
      obj.style = obj;
      textColor = undefined;
      if (null != textColor) {
        textColor = textColor.textColor;
      }
      obj.color = textColor;
      obj.variant = textColor.textVariant;
      obj.children = obj(closure_2[31]).smartOutput(node, output, textColor);
      return closure_16(closure_21, obj, textColor.key);
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.STRONG] = {
    react(node, output, textColor) {
      const obj = {};
      let strong = obj.strong;
      if (!strong) {
        strong = closure_19.strong;
      }
      obj.style = strong;
      textColor = undefined;
      if (null != textColor) {
        textColor = textColor.textColor;
      }
      obj.color = textColor;
      obj.variant = textColor.textVariant;
      obj.children = obj(closure_2[31]).smartOutput(node, output, textColor);
      return closure_16(closure_21, obj, textColor.key);
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.LINK] = { react: tmp };
  obj[arg1(dependencyMap[44]).AST_KEY.URL] = { react: tmp };
  obj[arg1(dependencyMap[44]).AST_KEY.AUTOLINK] = { react: tmp };
  obj[arg1(dependencyMap[44]).AST_KEY.LINE_BREAK] = {
    react(arg0, arg1, textColor) {
      const obj = {};
      textColor = undefined;
      if (null != textColor) {
        textColor = textColor.textColor;
      }
      obj.color = textColor;
      obj.children = "\n";
      return closure_16(closure_21, obj, textColor.key);
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.HIGHLIGHT] = {
    react(node, output, textColor) {
      const obj = {};
      textColor = undefined;
      if (null != textColor) {
        textColor = textColor.textColor;
      }
      obj.color = textColor;
      obj.children = obj(closure_2[31]).smartOutput(node, output, textColor);
      return closure_16(closure_21, obj, textColor.key);
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.BLOCK_QUOTE] = {
    react(node, output, key) {
      const obj = { styles: obj, state: key, node, output };
      return callback(closure_25, obj, key.key);
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.PARAGRAPH] = {
    order: 600,
    react(node, output, textColor) {
      const obj = {};
      textColor = undefined;
      if (null != textColor) {
        textColor = textColor.textColor;
      }
      obj.color = textColor;
      obj.children = obj(closure_2[31]).smartOutput(node, output, textColor);
      return closure_16(closure_21, obj, textColor.key);
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.EMOJI] = {
    react(surrogate, arg1, key) {
      const obj = {};
      let content = surrogate.surrogate;
      if (!content) {
        content = surrogate.content;
      }
      obj.children = content;
      return closure_16(closure_7, obj, key.key);
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.CUSTOM_EMOJI] = {
    react(node, arg1, key) {
      const obj = { state: key, node, styles: obj };
      return callback(closure_28, obj, key.key);
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.SPOILER] = {
    react(node, output, key) {
      const obj = { spoilerStyle: obj.spoiler, spoilerRevealedStyle: obj.spoilerRevealed };
      const tmp = obj(closure_2[45]);
      obj.children = obj(closure_2[31]).smartOutput(node, output, key);
      return callback(tmp, obj, key.key);
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.STATIC_ROUTE_LINK] = {
    react(channelId, output, textColor) {
      let obj = channelId;
      obj = obj(closure_2[31]);
      if (obj.isStaticRouteIconType(channelId.channelId)) {
        let SignPostIcon = obj(closure_2[46]).SignPostIcon;
        channelId = channelId.channelId;
        if (constants.GUILD_HOME !== channelId) {
          if (constants.SERVER_GUIDE !== channelId) {
            if (constants.CHANNEL_BROWSER !== channelId) {
              if (constants.CUSTOMIZE_COMMUNITY !== channelId) {
                if (constants.LINKED_ROLES === channelId) {
                  SignPostIcon = obj(closure_2[48]).LinkIcon;
                }
              }
            }
            SignPostIcon = obj(closure_2[47]).ChannelListMagnifyingGlassIcon;
          }
          obj = { accessibilityRole: "button" };
          obj.style = obj.staticRouteLink;
          textColor = undefined;
          if (null != textColor) {
            textColor = textColor.textColor;
          }
          obj.color = textColor;
          obj.onPress = function onPress() {
            let channelId;
            let guildId;
            ({ guildId, channelId } = arg0);
            const guild = guild.getGuild(guildId);
            let hasItem = null != guildId && null != guild;
            if (hasItem) {
              const features = guild.features;
              hasItem = features.has(constants.COMMUNITY);
            }
            if (hasItem) {
              let tmp5 = channelId !== constants3.GUILD_HOME;
              if (tmp5) {
                tmp5 = channelId !== constants3.SERVER_GUIDE;
              }
              if (!tmp5) {
                const result = arg0(closure_2[15]).transitionToStaticChannelRoute(guildId, constants2.GUILD_HOME);
                const obj = arg0(closure_2[15]);
              }
            }
          };
          obj = {};
          obj.style = obj.staticRouteLinkIcon;
          obj.size = "sm";
          const items = [callback(SignPostIcon, obj), obj(closure_2[31]).smartOutput(channelId, output, textColor)];
          obj.children = items;
          return closure_17(closure_21, obj, textColor.key);
        }
        SignPostIcon = obj(closure_2[46]).SignPostIcon;
      } else {
        return null;
      }
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.INLINE_CODE] = {
    react(node, output, key) {
      const obj = { styles: obj, state: key, node, output };
      return callback(closure_26, obj, key.key);
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.CODE_BLOCK] = {
    parse(arg0, arg1, arg2) {
      const obj = obj(closure_2[49]).RULES[closure_0(undefined, closure_2[44]).AST_KEY.CODE_BLOCK];
      const parsed = obj.parse(arg0, arg1, arg2);
      if ("ansi" === str.toLowerCase()) {
        const content = parsed.content;
        parsed.content = content.replaceAll(closure_18, "");
      }
      return parsed;
    },
    react(node, output, key) {
      const obj = { styles: obj, state: key, node, output };
      return callback(closure_27, obj, key.key);
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.MENTION] = {
    react: (arg0, arg1) => {
      let obj = arg0;
      let str = arg1;
      if (arg0 === undefined) {
        obj = {};
      }
      if (str === undefined) {
        str = "username";
      }
      obj = str;
      return (node, output, key) => {
        const obj = { roleStyle: str, state: key, node, output, styles: obj };
        return callback(closure_24, obj, key.key);
      };
    }(obj, arg2)
  };
  obj[arg1(dependencyMap[44]).AST_KEY.CHANNEL_MENTION] = {
    react(node, output, key) {
      const obj = { styles: obj, state: key, node, output, variants: obj };
      return callback(closure_29, obj, key.key);
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.ATTACHMENT_LINK] = {
    react(node, output, key) {
      const obj = { styles: obj, state: key, node, output, variants: obj };
      return callback(closure_30, obj, key.key);
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.SOUNDBOARD] = {
    react(node, output, key) {
      const obj = { variant: "text-md/bold" };
      const items = ["<string:2065563649>", obj(closure_2[31]).smartOutput(node, output, key), ">"];
      obj.children = items;
      return callback2(obj(closure_2[12]).Text, obj, key.key);
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.GUILD] = {
    react(icon, output, textColor) {
      let obj = obj(closure_2[50]);
      let num = 2;
      if (!obj.isAndroid()) {
        let num3 = 0;
        if (store.getFontScale() < 1.5) {
          num3 = 1;
        }
        num = num3;
      }
      if (null == icon.icon) {
        obj = {};
        textColor = undefined;
        if (null != textColor) {
          textColor = textColor.textColor;
        }
        obj.color = textColor;
        obj = { style: closure_19.guildIcon, children: null };
        const items = [callback(closure_6, obj), ];
        const obj1 = {};
        let textColor1;
        if (null != textColor) {
          textColor1 = textColor.textColor;
        }
        obj1.color = textColor1;
        obj1.children = obj(closure_2[31]).smartOutput(icon, output, textColor);
        items[1] = callback(closure_21, obj1);
        obj.children = items;
        return closure_17(closure_21, obj, textColor.key);
      } else {
        const obj2 = {};
        const obj3 = { top: num };
        obj2.style = obj3;
        obj2.icon = icon.icon;
        const fontScale = store.getFontScale();
        if (fontScale < 1) {
          let XXSMALL = obj(closure_2[24]).GuildIconSizes.XXXSMALL;
        } else if (fontScale < 1.25) {
          XXSMALL = obj(closure_2[24]).GuildIconSizes.XXSMALL_12;
        } else {
          XXSMALL = obj(closure_2[24]).GuildIconSizes.XXSMALL;
        }
        obj2.size = XXSMALL;
        callback(obj(closure_2[24]), obj2);
        const tmp2 = callback;
        const tmp5 = obj(closure_2[24]);
      }
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.CHANNEL] = {
    react(iconType, output, textColor) {
      iconType = iconType.iconType;
      let str = "text";
      if (null != iconType) {
        str = iconType;
      }
      let num = 2;
      if ("text" === str) {
        num = 0;
      }
      let obj = {};
      obj.themedColor = obj(closure_2[14]).colors.MENTION_FOREGROUND;
      obj.source = obj(closure_2[51]).getChannelMentionIcon(str);
      obj.size = callback3();
      obj.style = { top: 1 };
      obj = {};
      textColor = undefined;
      const obj2 = obj(closure_2[51]);
      if (null != textColor) {
        textColor = textColor.textColor;
      }
      obj.color = textColor;
      obj = { paddingEnd: num };
      const items = [callback(closure_6, { style: obj, children: callback(obj(closure_2[25]).ThemedIcon, obj) }), ];
      const tmp = callback(obj(closure_2[25]).ThemedIcon, obj);
      const tmp2 = closure_17;
      const tmp3 = closure_21;
      items[1] = obj(closure_2[31]).smartOutput(iconType, output, textColor);
      obj.children = items;
      return tmp2(tmp3, obj, textColor.key);
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.COMMAND_MENTION] = {
    react(node, output, key) {
      const obj = { styles: obj, state: key, node, output };
      return callback(closure_31, obj, key.key);
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.GAME_MENTION] = {
    react(node, arg1, key) {
      const obj = { node, state: key };
      return callback(obj(closure_2[52]), obj, key.key);
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.TIMESTAMP] = {
    react(node, arg1, key) {
      const obj = { node, style: obj.timestamp };
      return callback(obj(closure_2[53]), obj, key.key);
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.LIST] = {
    react(start, arg1, level) {
      let obj = start;
      obj = arg1;
      let num = 0;
      if (null != level.level) {
        num = level.level;
      }
      let closure_5 = null != start.start ? start.start : level.start;
      if (level.formatInline) {
        obj = {};
        let textColor;
        if (null != level) {
          textColor = level.textColor;
        }
        obj.color = textColor;
        const items = start.items;
        obj.children = items.map((self) => {
          let obj = {};
          let str = "\u2022 ";
          if (true === self.ordered) {
            str = "\u2022 ";
            if (null != closure_5) {
              const _HermesInternal = HermesInternal;
              str = "" + closure_5 + arg1 + ". ";
            }
          }
          const items = [str, , ];
          obj = {};
          const merged = Object.assign(arg2);
          obj["key"] = "" + arg2.key + "-" + arg1;
          items[1] = arg1(self, obj);
          let str4 = " ";
          if (arg1 !== self.items.length - 1) {
            str4 = "  ";
          }
          items[2] = str4;
          obj.children = items;
          return closure_17(self.Fragment, obj, "list-" + arg2.key + "-item-" + arg1);
        });
        const _HermesInternal2 = HermesInternal;
        return callback(closure_21, obj, "list-" + level.key);
      } else {
        const items1 = start.items;
        const mapped = items1.map((arr, arg1, self) => {
          if (0 !== num) {
            let obj = {};
            const merged = Object.assign(self);
            const _HermesInternal2 = HermesInternal;
            let str4 = "";
            obj["key"] = "" + self.key + "-" + arg1;
            obj["level"] = num + 1;
            if (null != closure_5) {
              let sum = closure_5 + 1;
            } else {
              sum = closure_5;
            }
            obj["start"] = sum;
            arg1 = obj;
            obj = { style: closure_19.listItem, variant: "text-sm/medium" };
            const obj1 = { style: closure_19.bullet };
            let textColor;
            if (null != self) {
              textColor = self.textColor;
            }
            obj1.color = textColor;
            let repeatResult = str4;
            if (num > 0) {
              const repeat = "  ".repeat;
              repeatResult = "  ".repeat(num);
            }
            const items = [repeatResult, "\u26AC "];
            obj1.children = items;
            const _HermesInternal3 = HermesInternal;
            const items1 = [closure_17(closure_21, obj1, "list-" + self.key + "-item-" + arg1 + "-bullet"), , ];
            const _Array = Array;
            if (Array.isArray(arr)) {
              let mapped = arr.map((type) => {
                let str = arg1 + 1 === type.length;
                const obj = {};
                let str2 = tmp;
                if ("list" === type.type) {
                  str2 = "\n";
                }
                const items = [str2, obj(type, obj), ];
                if (str) {
                  str = !tmp;
                }
                if (str) {
                  str = "\n";
                }
                items[2] = str;
                obj.children = items;
                return closure_17(React.Fragment, obj, arg1);
              });
            } else {
              mapped = arg1(arr, obj);
            }
            items1[1] = mapped;
            if (arr.items.length !== arg1 + 1) {
              str4 = "  ";
            }
            items1[2] = str4;
            obj.children = items1;
            const _HermesInternal4 = HermesInternal;
            return closure_17(arr(self[12]).Text, obj, "list-" + self.key + "-item-" + arg1);
          } else {
            if ("boolean" === typeof arr.ordered) {
              const _HermesInternal = HermesInternal;
              let str = "" + closure_5 + arg1 + ". ";
            }
            obj = arr(self[50]);
            str = "\u25CF ";
            if (obj.isAndroid()) {
              str = "\u2022 ";
            }
          }
        });
        obj = { style: closure_19.list, variant: "text-sm/medium", children: mapped };
        const _HermesInternal = HermesInternal;
        return callback(obj(level[12]).Text, obj, "list-" + level.key);
      }
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.HEADING] = {
    react(level, output, formatInline) {
      if (formatInline.formatInline) {
        let obj = { variant: "text-sm/semibold" };
        let textColor;
        if (null != formatInline) {
          textColor = formatInline.textColor;
        }
        obj.color = textColor;
        const items = [obj(closure_2[31]).smartOutput(level, output, formatInline), " "];
        obj.children = items;
        return closure_17(closure_21, obj, formatInline.key);
      } else {
        let str = "heading-xl/bold";
        if (1 !== level.level) {
          let str2 = "heading-md/bold";
          if (2 === level.level) {
            str2 = "heading-lg/bold";
          }
          str = str2;
        }
        obj = { variant: str };
        let str3 = "text-strong";
        if (formatInline.forceWhite) {
          str3 = "text-overlay-light";
        }
        obj.color = str3;
        const items1 = [obj(closure_2[31]).smartOutput(level, output, formatInline), "\n"];
        obj.children = items1;
        return closure_17(obj(closure_2[12]).Text, obj, formatInline.key);
      }
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.SUBTEXT] = {
    react(node, output, key) {
      const obj = {};
      const items = [obj(closure_2[31]).smartOutput(node, output, key), "\n"];
      obj.children = items;
      return callback2(obj(closure_2[12]).Text, obj, key.key);
    }
  };
  obj[arg1(dependencyMap[44]).AST_KEY.SILENT_PREFIX] = {
    react(content, output, textColor) {
      if ("string" === typeof content.content) {
        content = content.content;
      } else {
        const obj = {};
        textColor = undefined;
        if (null != textColor) {
          textColor = textColor.textColor;
        }
        obj.color = textColor;
        obj.children = obj(closure_2[31]).smartOutput(content, output, textColor);
        content = closure_16(closure_21, obj, textColor.key);
        const obj2 = obj(closure_2[31]);
        const tmp = closure_16;
        const tmp2 = closure_21;
      }
      return content;
    }
  };
  return obj;
};
export { MarkupText };
export const plainMentionRenderer = function plainMentionRenderer(content, output, state) {
  if ("string" === typeof content.content) {
    content = content.content;
  } else {
    content = output(dependencyMap[31]).smartOutput(content, output, state);
    const obj = output(dependencyMap[31]);
  }
  return content;
};
export const plainSpoilerRenderer = function plainSpoilerRenderer(content) {
  let str = "\u2588\u2588\u2588";
  if ("string" === typeof content.content) {
    str = content.content.replace(/[^\n]/g, "\u2588");
    const str2 = content.content;
  }
  return str;
};
