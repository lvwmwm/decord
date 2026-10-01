// Module ID: 4824
// Function ID: 4825
// Name: MarkupReactRules
// Dependencies: [19, 17, 4825, 2045, 2102, 2067, 1074, 2052, 1085, 21, 4831, 4832, 4836, 576, 4847, 4990, 4693, 5039, 7624, 5203, 1115, 6610, 4527, 5896, 1177, 1366, 7818, 4525, 11109, 11079, 7542, 504, 4683, 7403, 4800, 11082, 1981, 11, 2021, 5899, 11060, 13385, 10782, 5302, 9586, 13386, 13388, 4775, 5304, 1364, 5335, 13390, 9588, 2]
// Exports: default, plainMentionRenderer, plainSpoilerRenderer

// Module 4824 (MarkupReactRules)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import Constants2 from "Constants" /* 1085 */;
import intl4 from "intl" /* 1115 */;
import URLUtilsDefault from "URLUtils" /* 1366 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import UserSettings from "UserSettings" /* 2021 */;
import LinkingDefault from "Linking" /* 4525 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import HighlightJsAnsiLanguage from "HighlightJsAnsiLanguage" /* 4831 */;
import Text_Text from "Text/Text" /* 4832 */;
import transitionToChannel from "transitionToChannel" /* 4847 */;
import LinkUtils from "LinkUtils" /* 4990 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import FastImageDefault from "FastImage" /* 5899 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import MarkupRulesUtils from "MarkupRulesUtils" /* 7542 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import SpoilerDefault from "Spoiler" /* 9586 */;
import TimestampDefault from "Timestamp" /* 9588 */;
import MarkupReactCommandRuleDefault from "MarkupReactCommandRule" /* 10782 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 11079 */;
import MarkupReactGameMentionRule from "MarkupReactGameMentionRule" /* 13390 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import GuildStore from "GuildStore" /* 2067 */;
import Constants from "Constants" /* 1074 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let guild;

let EMOJI_CHAT_SIZE;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
class MarkupText {
  constructor(color) {
    let str = color.color;
    const children = color.children;
    if (str === undefined) {
      str = "text-default";
    }
    let str2 = color.variant;
    if (str2 === undefined) {
      str2 = "text-sm/medium";
    }
    const merged = Object.assign(color, Object.assign({ children: 0, color: 0, variant: 0 }));
    const obj = { variant: str2, color: str, children };
    const Text = Text_Text.Text;
    const merged1 = Object.assign(merged);
    return closure_15(Text, obj);
  }
}
function MarkupLink(arg0) {
  let link;
  let node;
  let obj2;
  let output;
  let smartOutput;
  let state;
  let styles;
  ({ state, node } = arg0);
  ({ output, styles } = arg0);
  let str = state.linkVariant;
  let tmp = closure_20();
  if (str == null) {
    str = "text-sm/medium";
  }
  let obj = {
    variant: str,
    accessibilityRole: "link",
    style: link,
    onPress(stopPropagation) {
      const target = node.target;
      let tmp = null;
      if (typeof target === "string") {
        const obj4 = URLUtilsDefault;
        const url = obj4.safeParseWithQuery(target);
        let formatResult = null;
        const tmp9 = importDefault;
        if (null != url) {
          formatResult = null;
          if (null != url.protocol) {
            formatResult = null;
            if (null != url.hostname) {
              const tmp9Result = tmp9(dependencyMap[25]);
              formatResult = tmp9Result.format(url);
            }
          }
        }
        tmp = formatResult;
      }
      node = tmp;
      if (null != tmp) {
        stopPropagation.stopPropagation();
        let obj = {
          href: tmp,
          onConfirm() {
              const obj = LinkingDefault;
              return obj.openURL(node);
            },
          trusted() {
              const obj = node(dependencyMap[28]);
              return obj.isLinkTrusted(node);
            }
        };
        const obj2 = node(dependencyMap[26]);
        obj2.handleClick(obj);
      }
    },
    onLongPress(stopPropagation) {
      const target = node.target;
      let tmp = null;
      if (typeof target === "string") {
        const obj3 = URLUtilsDefault;
        const url = obj3.safeParseWithQuery(target);
        let formatResult = null;
        if (null != url) {
          formatResult = null;
          if (null != url.protocol) {
            formatResult = null;
            if (null != url.hostname) {
              const obj = URLUtilsDefault;
              formatResult = obj.format(url);
            }
          }
        }
        tmp = formatResult;
      }
      if (null != tmp) {
        stopPropagation.stopPropagation();
        const obj2 = { urlString: tmp };
        showLongPressURLActionSheetDefault(obj2);
      }
    },
    children: smartOutput(node, output, obj2)
  };
  link = styles.link;
  const Text = node(4832).Text;
  const tmp2 = closure_15;
  if (!link) {
    link = tmp.link;
  }
  obj2 = { inLink: true };
  smartOutput = tmp3(7542).smartOutput;
  node(7542);
  const merged = Object.assign(state);
  return tmp2(Text, obj, state.key);
}
function MarkupMention(styles) {
  let backgroundColor;
  let items2;
  let node;
  let roleId;
  let roleStyle;
  let state;
  let textColor;
  let tmp16;
  let userId;
  ({ roleStyle, state, node } = styles);
  styles = styles.styles;
  roleId = undefined;
  let closure_3;
  const output = styles.output;
  ({ userId, roleId } = node);
  const guildId = node.guildId;
  let tmp2 = null != guildId;
  const tmp = closure_20();
  if (tmp2) {
    tmp2 = null != roleId;
  }
  closure_3 = tmp2;
  let tmp4 = guildId;
  let obj = node(guildId[31]);
  const items = [GuildRoleStore];
  const items1 = [guildId, roleId, tmp2];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let role = null;
    if (closure_3) {
      role = GuildRoleStore.getRole(guildId, roleId);
    }
    return role;
  }, items1);
  let colorString;
  if (stateFromStores != null) {
    colorString = stateFromStores.colorString;
  }
  if (colorString == null) {
    colorString = null;
  }
  let colorStrings;
  if (stateFromStores != null) {
    colorStrings = stateFromStores.colorStrings;
  }
  if (colorStrings == null) {
    colorStrings = null;
  }
  let tmp8 = styles.mention || tmp.mention;
  let tmp9 = tmp2 && null != colorString;
  if (tmp9) {
    tmp9 = "username" === roleStyle;
  }
  if (tmp9) {
    let obj2 = { color: colorString, backgroundColor };
    const mention = styles.mention;
    backgroundColor = undefined;
    if (mention != null) {
      backgroundColor = mention.backgroundColor;
    }
    if (backgroundColor == null) {
      const tmp3Result = node(tmp4[32]);
      backgroundColor = tmp3Result.hexWithOpacity(colorString, 0.1);
    }
    tmp8 = obj2;
  }
  const tmp3Result4 = node(tmp4[33]);
  const processColorStringsArray = tmp3Result4.useProcessColorStringsArray(colorStrings);
  let str2 = "button";
  const tmp3Result5 = node(tmp4[33]);
  const isRoleStyleAndRoleColorsEligibleForERC = tmp3Result5.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, userId, roleStyle, processColorStringsArray);
  if (state.noStyleAndInteraction) {
    str2 = "text";
  }
  let fn;
  if (!state.noStyleAndInteraction) {
    fn = () => {
      let channelId;
      let intl;
      let intl2;
      let intl3;
      let obj3;
      let userId;
      if (null != node.roleId) {
        if (null != node.guildId) {
          const obj2 = { guildId: null, roleId: null, channelId: null };
          ({ guildId: obj5.guildId, roleId: obj5.roleId, channelId: obj5.channelId } = node);
          const obj4 = ActionSheetActionCreatorsDefault;
          obj4.openLazy(asyncRequire(11082, dependencyMap.paths), "RoleMembersActionSheet", obj2, "stack");
        }
      }
      if ("@everyone" === node.roleName) {
        if (null != node.guildId) {
          const openLazy = ActionSheetActionCreatorsDefault.openLazy;
          const tmp13 = asyncRequire(11082, dependencyMap.paths);
          const obj6 = { guildId: node.guildId, roleId: obj3.castGuildIdAsEveryoneGuildRoleId(node.guildId), channelId: node.channelId };
          obj3 = SnowflakeUtilsDefault;
          openLazy(tmp13, "RoleMembersActionSheet", obj6, "stack");
        }
      }
      ({ userId, channelId } = node);
      if (null != userId) {
        const obj = { userId, channelId };
        const tmp4 = showUserProfileActionSheetDefault;
        tmp4(obj);
      } else {
        const obj9 = { title: intl.string(intl4.t.r0DLNm), body: intl2.string(intl4.t.Fqqbhg), confirmText: intl3.string(intl4.t.BddRzS) };
        const show = AlertActionCreatorsDefault.show;
        AlertActionCreatorsDefault;
        intl = intl4.intl;
        intl2 = intl4.intl;
        intl3 = intl4.intl;
        show(obj9);
      }
    };
  }
  let obj3 = { accessibilityRole: str2, style: tmp8, color: textColor, gradientColors: tmp16, onPress: fn, children: items2 };
  textColor = undefined;
  let tmp13 = closure_16;
  const tmp14 = MarkupText;
  if (state != null) {
    textColor = state.textColor;
  }
  tmp16 = undefined;
  if (tmp2) {
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp16 = processColorStringsArray;
    }
  }
  if (tmp2) {
    tmp2 = "dot" === roleStyle;
  }
  if (tmp2) {
    let obj4 = { guildId, color: colorString, colors: colorStrings, size: "small" };
    tmp2 = closure_15(tmp3(tmp4[24]).RoleDot, obj4);
  }
  items2 = [tmp2, ];
  const tmp3Result6 = node(tmp4[30]);
  items2[1] = tmp3Result6.smartOutput(node, output, state);
  return tmp13(tmp14, obj3, state.key);
}
function MarkupBlockQuote(state) {
  let node;
  let obj2;
  let output;
  let styles;
  let textColor;
  state = state.state;
  ({ styles, node, output } = state);
  let blockQuote = styles.blockQuote;
  const tmp = closure_15;
  const tmp2 = MarkupText;
  if (!blockQuote) {
    blockQuote = closure_20().blockQuote;
  }
  const obj = { style: blockQuote, color: textColor, children: obj2.smartOutput(node, output, state) };
  textColor = undefined;
  if (state != null) {
    textColor = state.textColor;
  }
  obj2 = MarkupRulesUtils;
  return tmp(tmp2, obj, state.key);
}
function MarkupInlineCode(arg0) {
  let fn;
  let node;
  let obj3;
  let output;
  let state;
  let styles;
  let textColor;
  ({ state, node } = arg0);
  ({ styles, output } = arg0);
  const noStyleAndInteraction = state.noStyleAndInteraction;
  let tmp2 = !noStyleAndInteraction;
  const tmp = closure_20();
  if (!noStyleAndInteraction) {
    tmp2 = !state.inLink;
  }
  let str = "text";
  if (tmp2) {
    str = "button";
  }
  style = {};
  const tmp3 = styles.inlineCode || tmp.inlineCode;
  const merged = Object.assign(tmp3);
  if (state.inLink) {
    delete style["color"];
  }
  let obj2 = { accessibilityRole: str, style, color: textColor, onPress: fn, children: obj3.smartOutput(node, output, state) };
  textColor = undefined;
  const tmp5 = closure_15;
  const tmp6 = MarkupText;
  if (state != null) {
    textColor = state.textColor;
  }
  fn = undefined;
  if (tmp2) {
    fn = () => {
      const content = node.content;
      if (typeof content === "string") {
        const obj = ClipboardUtils;
        obj.copy(content);
        const obj2 = ToastUtils;
        const result = obj2.presentCopiedToClipboard();
      }
    };
  }
  obj3 = node(7542);
  return tmp5(tmp6, obj2, state.key);
}
function MarkupCodeBlock(state) {
  let items;
  let node;
  let output;
  let styles;
  let textColor;
  state = state.state;
  ({ styles, node, output } = state);
  let codeBlock = styles.codeBlock;
  const tmp = authStore3;
  const tmp2 = MarkupText;
  if (!codeBlock) {
    codeBlock = closure_20().codeBlock;
  }
  const obj = { style: codeBlock, color: textColor, children: items };
  textColor = undefined;
  if (state != null) {
    textColor = state.textColor;
  }
  items = [, ];
  const obj2 = MarkupRulesUtils;
  items[0] = obj2.smartOutput(node, output, state);
  items[1] = "\n";
  return tmp(tmp2, obj, state.key);
}
function MarkupCustomEmoji(styles) {
  let items2;
  let node;
  let obj5;
  let state;
  let tmp4Result;
  let useReducedMotion;
  ({ state, node } = styles);
  styles = styles.styles;
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  const obj = get_initialized;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (node.src) {
    let emoji = styles.emoji;
    const tmp10 = FastImageDefault;
    if (!emoji) {
      emoji = obj.emoji;
    }
    const items1 = [emoji, ];
    let tmp12 = null;
    if (null != state.customEmojiOffsetY) {
      const obj2 = { transform: items2 };
      items2 = [{ translateY: state.customEmojiOffsetY }];
      tmp12 = obj2;
      const obj3 = { translateY: state.customEmojiOffsetY };
    }
    const obj4 = { style: items1, source: obj5, enableAnimation: !stateFromStores && setting };
    items1[1] = tmp12;
    obj5 = { uri: node.src };
    tmp4Result = tmp4(tmp10, obj4, state.key);
  } else {
    let textColor;
    const tmp5 = MarkupText;
    if (state != null) {
      textColor = state.textColor;
    }
    const obj6 = { color: textColor, children: node.alt };
    tmp4Result = tmp4(tmp5, obj6, state.key);
  }
  return tmp4Result;
}
function MarkupChannelMention(state) {
  let items;
  let items1;
  let items2;
  let str3;
  let styles;
  let tmp8;
  let variants;
  state = state.state;
  const node = state.node;
  const output = state.output;
  ({ styles, variants } = state);
  const tmp = closure_20();
  let str = "button";
  if (state.noStyleAndInteraction) {
    str = "text";
  }
  const tmp3 = state;
  const tmp4 = dependencyMap;
  let str2 = variants.channelMentionText;
  const Text = state(4832).Text;
  const tmp2 = closure_16;
  if (str2 == null) {
    str2 = "text-xs/medium";
  }
  let obj = { variant: str2, style: tmp.channelMentionText, children: items };
  let outputResult = null;
  if (null != node.inContent) {
    outputResult = output(node.inContent, state);
  }
  items = [outputResult, , ];
  let tmp7Result = null;
  if (null != node.inContent) {
    let obj2 = { themedColor: node(576).colors.MENTION_FOREGROUND, style: size, source: tmp8(11060), size: tmp3(1177).Icon.Sizes.CUSTOM };
    const ThemedIcon = tmp3(1177).ThemedIcon;
    const fontScale = closure_4.getFontScale();
    const tmp7 = closure_15;
    tmp8 = node;
    if (fontScale < 1.25) {
      size = { width: 8, height: 8 };
    } else {
      size = fontScale < 2 ? { width: 12, height: 12 } : { width: 16, height: 16 };
    }
    tmp7Result = tmp7(ThemedIcon, obj2);
  }
  items[1] = tmp7Result;
  const tmp3Result = tmp3(7542);
  items[2] = tmp3Result.smartOutput(node, output, state);
  const tmp2Result = tmp2(Text, obj, state.key);
  let tmp13Result = tmp2Result;
  if (!state.disablePressableChannelMention) {
    let channelMention = styles.channel;
    const obj3 = {
      accessibilityRole: str,
      style: items1,
      pointerEvents: str3,
      onPress() {
          let channelId;
          let messageId;
          if (!state.noStyleAndInteraction) {
            ({ channelId, messageId } = node);
            if (null != channelId) {
              if (null != messageId) {
                const obj5 = transitionToChannel;
                obj5.transitionToMessage(channelId, messageId);
              } else {
                const channel = ChannelStore.getChannel(channelId);
                let isGuildVocalResult;
                if (channel != null) {
                  isGuildVocalResult = channel.isGuildVocal();
                }
                if (isGuildVocalResult) {
                  const obj = LinkUtils;
                  if (obj.canViewChannel(channel)) {
                    if (tmp3) {
                      const obj2 = RootNavigationRef;
                      const rootNavigationRef = obj2.getRootNavigationRef();
                      if (rootNavigationRef != null) {
                        rootNavigationRef.goBack();
                      }
                    }
                    if (tmp4) {
                      const arr = ModalActionCreatorsDefault;
                      arr.pop();
                    }
                  }
                }
                const obj4 = transitionToChannel;
                obj4.transitionToChannel(channelId);
              }
            }
          }
          return null;
        },
      children: tmp2Result
    };
    const tmp13 = closure_15;
    const tmp14 = closure_5;
    if (!channelMention) {
      channelMention = tmp.channelMention;
    }
    items1 = [channelMention, ];
    let tmp15 = null;
    if (null != state.mentionPillOffsetY) {
      let obj4 = { transform: items2 };
      let obj5 = { translateY: state.mentionPillOffsetY };
      items2 = [obj5];
      tmp15 = obj4;
    }
    items1[1] = tmp15;
    str3 = "auto";
    if (state.noStyleAndInteraction) {
      str3 = "none";
    }
    tmp13Result = tmp13(tmp14, obj3, state.key);
  }
  return tmp13Result;
}
function MarkupAttachmentLink(state) {
  let SMALL;
  let items;
  let items1;
  let items2;
  let output;
  let str3;
  let styles;
  let variants;
  state = state.state;
  const node = state.node;
  ({ output, styles, variants } = state);
  const tmp = closure_20();
  let str = "button";
  if (state.noStyleAndInteraction) {
    str = "text";
  }
  let str2 = variants.channelMentionText;
  const Text = state(4832).Text;
  const tmp2 = closure_16;
  if (str2 == null) {
    str2 = "text-xs/medium";
  }
  let obj = { variant: str2, style: tmp.channelMentionText, children: items };
  const obj2 = { themedColor: node(576).colors.MENTION_FOREGROUND, source: node(13385), size: SMALL };
  const ThemedIcon = tmp3(1177).ThemedIcon;
  const fontScale = closure_4.getFontScale();
  if (fontScale < 1) {
    SMALL = tmp3(1177).Icon.Sizes.EXTRA_SMALL_10;
  } else if (fontScale < 1.25) {
    SMALL = tmp3(1177).Icon.Sizes.EXTRA_SMALL;
  } else {
    SMALL = tmp3(1177).Icon.Sizes.SMALL;
  }
  items = [tmp5(ThemedIcon, obj2), ];
  const tmp3Result = state(7542);
  items[1] = tmp3Result.smartOutput(node, output, state);
  const tmp2Result = tmp2(Text, obj, state.key);
  let tmp5Result = tmp2Result;
  if (!state.disablePressableChannelMention) {
    let channelMention = styles.channel;
    const obj3 = {
      accessibilityRole: str,
      style: items1,
      pointerEvents: str3,
      onPress(stopPropagation) {
          if (!state.noStyleAndInteraction) {
            stopPropagation.stopPropagation();
            const obj = LinkingDefault;
            obj.openURL(node.attachmentLink);
          }
        },
      children: tmp2Result
    };
    const tmp9 = closure_5;
    if (!channelMention) {
      channelMention = tmp.channelMention;
    }
    items1 = [channelMention, ];
    let tmp10 = null;
    if (null != state.mentionPillOffsetY) {
      const obj4 = { transform: items2 };
      items2 = [{ translateY: state.mentionPillOffsetY }];
      tmp10 = obj4;
      const obj5 = { translateY: state.mentionPillOffsetY };
    }
    items1[1] = tmp10;
    str3 = "auto";
    if (state.noStyleAndInteraction) {
      str3 = "none";
    }
    tmp5Result = tmp5(tmp9, obj3, state.key);
  }
  return tmp5Result;
}
function MarkupCommandMention(state) {
  let mention;
  let node;
  let output;
  let styles;
  state = state.state;
  ({ node, output, styles } = state);
  const obj = { node, output, state, style: mention };
  mention = styles.mention;
  const tmp = closure_20();
  const tmp2 = closure_15;
  const tmp3 = MarkupReactCommandRuleDefault;
  if (!mention) {
    mention = tmp.mention;
  }
  return tmp2(tmp3, obj, state.key);
}
let react = react_mod;
({ PixelRatio: closure_4, Pressable: hasOwnProperty, View: metroRequire, Text: metroImportDefault } = react_native);
({ EMOJI_CHAT_SIZE, GuildFeatures: closure_12 } = Constants);
({ StaticChannelRoute: map1, StaticChannelId: closure_14 } = ChannelConstants);
const Fonts = Constants2.Fonts;
let Fragment = Fragment_mod;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
const regExp = new RegExp(HighlightJsAnsiLanguage.ANSI_CONTROL_SEQUENCE_RE, "g");
let style = { emoji: { width: EMOJI_CHAT_SIZE, height: EMOJI_CHAT_SIZE, resizeMode: "contain" }, guildIcon: { paddingEnd: 2, paddingBottom: 1 }, list: { paddingTop: 16 }, listItem: { paddingTop: 4 }, bullet: { fontFamily: Fonts.CODE_BOLD }, strong: { fontFamily: Fonts.PRIMARY_BOLD } };
let createStyles = createStyles_mod;
let obj2 = { link: obj3, channelMention: obj4, channelMentionText: obj5, mention: obj6, inlineCode: obj7, codeBlock: obj8, blockQuote: obj9 };
obj3 = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.colors.TEXT_LINK };
createStyles = createStyles.createStyles;
obj4 = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: 3, paddingHorizontal: 2, alignItems: "center" };
obj5 = { color: nativeDefault.colors.MENTION_FOREGROUND };
obj6 = { color: nativeDefault.unsafe_rawColors.BRAND_500, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj7 = { fontFamily: Fonts.CODE_BOLD, color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_CODE };
obj8 = { fontFamily: Fonts.CODE_BOLD, color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_CODE };
obj9 = { borderLeftWidth: 4, borderLeftColor: nativeDefault.colors.SPINE_DEFAULT, paddingLeft: 8 };
let closure_20 = createStyles(obj2);
let c21 = "  ";
let size = size_mod;
let result = size.fileFinishedImporting("modules/markup/MarkupReactRules.native.tsx");

export default function createRules(styles) {
  let list;
  if (styles === undefined) {
    styles = {};
  }
  let obj2 = arg1;
  if (arg1 === undefined) {
    obj2 = {};
  }
  let tmp = styles !== undefined;
  let obj3 = styles;
  if (!tmp) {
    obj3 = {};
  }
  styles = undefined;
  let str;
  if (!tmp) {
    styles = {};
  }
  str = arg2;
  if (arg2 === undefined) {
    str = "username";
  }
  react = (node, output, noStyleAndInteraction) => {
    let obj;
    let tmpResult;
    if (noStyleAndInteraction.noStyleAndInteraction) {
      let textColor;
      const tmp5 = MarkupText;
      if (noStyleAndInteraction != null) {
        textColor = noStyleAndInteraction.textColor;
      }
      obj2 = { color: textColor, children: obj3.smartOutput(node, output, noStyleAndInteraction) };
      obj3 = obj(dependencyMap[30]);
      tmpResult = tmp(tmp5, obj2, noStyleAndInteraction.key);
    } else {
      obj = { state: noStyleAndInteraction, node, output, styles: obj3 };
      tmpResult = tmp(MarkupLink, obj, noStyleAndInteraction.key);
    }
    return tmpResult;
  };
  let obj4 = {
    react(content, output, textColor) {
      if (typeof content.content === "string") {
        content = content.content;
      } else {
        textColor = undefined;
        const tmp6 = closure_1_15;
        const tmp7 = MarkupText;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        const obj = { color: textColor, children: obj2.smartOutput(content, output, textColor) };
        obj2 = obj(dependencyMap[30]);
        content = tmp6(tmp7, obj, textColor.key);
      }
      return content;
    }
  };
  let obj5 = {
    react(node, output, textColor) {
      const obj = { style: { textDecorationLine: "line-through" }, color: textColor, variant: textColor.textVariant, children: obj2.smartOutput(node, output, textColor) };
      textColor = undefined;
      const tmp = closure_1_15;
      const tmp2 = MarkupText;
      if (textColor != null) {
        textColor = textColor.textColor;
      }
      obj2 = obj(dependencyMap[30]);
      return tmp(tmp2, obj, textColor.key);
    }
  };
  let obj6 = {
    react(node, output, textColor) {
      const obj = { style: { textDecorationLine: "underline" }, color: textColor, variant: textColor.textVariant, children: obj2.smartOutput(node, output, textColor) };
      textColor = undefined;
      const tmp = closure_1_15;
      const tmp2 = MarkupText;
      if (textColor != null) {
        textColor = textColor.textColor;
      }
      obj2 = obj(dependencyMap[30]);
      return tmp(tmp2, obj, textColor.key);
    }
  };
  const obj10 = {
    react(node, output, textColor) {
      textColor = undefined;
      const tmp = closure_1_15;
      const tmp2 = MarkupText;
      if (textColor != null) {
        textColor = textColor.textColor;
      }
      const obj = { color: textColor, children: obj2.smartOutput(node, output, textColor) };
      obj2 = obj(dependencyMap[30]);
      return tmp(tmp2, obj, textColor.key);
    }
  };
  const obj11 = {
    react(node, output, state) {
      styles = { styles, state, node, output };
      return closure_15(MarkupBlockQuote, styles, state.key);
    }
  };
  const obj12 = {
    order: 600,
    react(node, output, textColor) {
      textColor = undefined;
      const tmp = closure_1_15;
      const tmp2 = MarkupText;
      if (textColor != null) {
        textColor = textColor.textColor;
      }
      const obj = { color: textColor, children: obj2.smartOutput(node, output, textColor) };
      obj2 = obj(dependencyMap[30]);
      return tmp(tmp2, obj, textColor.key);
    }
  };
  const obj13 = {
    react(surrogate, arg1, key) {
      let children = surrogate.surrogate;
      const tmp = closure_1_15;
      const tmp2 = closure_1_7;
      if (!children) {
        children = surrogate.content;
      }
      return tmp(tmp2, { children }, key.key);
    }
  };
  const obj14 = {
    react(node, arg1, state) {
      styles = { state, node, styles };
      return closure_15(MarkupCustomEmoji, styles, state.key);
    }
  };
  const obj15 = {
    react(node, output, key) {
      let obj;
      obj = { spoilerStyle: obj.spoiler, spoilerRevealedStyle: obj.spoilerRevealed, children: obj2.smartOutput(node, output, key) };
      const tmp = SpoilerDefault;
      obj2 = MarkupRulesUtils;
      return closure_15(tmp, obj, key.key);
    }
  };
  const obj16 = {
    react(channelId, output, textColor) {
      let constants2;
      let constants3;
      let items;
      let closure_0 = channelId;
      let obj = MarkupRulesUtils;
      if (obj.isStaticRouteIconType(channelId.channelId)) {
        let SignPostIcon = tmp(13386).SignPostIcon;
        channelId = channelId.channelId;
        let tmp4 = constants;
        if (constants.GUILD_HOME !== channelId) {
          if (tmp4.SERVER_GUIDE !== channelId) {
            if (tmp4.CHANNEL_BROWSER !== channelId) {
              if (tmp4.CUSTOMIZE_COMMUNITY !== channelId) {
                if (tmp4.LINKED_ROLES === channelId) {
                  SignPostIcon = tmp(4775).LinkIcon;
                }
              }
            }
            SignPostIcon = tmp(13388).ChannelListMagnifyingGlassIcon;
          }
          obj2 = {
            accessibilityRole: "button",
            style: obj.staticRouteLink,
            color: textColor,
            onPress() {
                  let channelId;
                  let guildId;
                  ({ guildId, channelId } = closure_0);
                  guild = guild.getGuild(guildId);
                  let hasItem = null != guildId && null != guild;
                  if (hasItem) {
                    const features = guild.features;
                    hasItem = features.has(constants.COMMUNITY);
                  }
                  if (hasItem) {
                    const tmp4 = channelId !== constants3.GUILD_HOME && channelId !== constants3.SERVER_GUIDE;
                    if (!tmp4) {
                      const obj = styles(closure_2_2[14]);
                      const result = obj.transitionToStaticChannelRoute(guildId, constants2.GUILD_HOME);
                    }
                  }
                },
            children: items
          };
          textColor = undefined;
          const tmp6 = authStore3;
          const tmp7 = MarkupText;
          const tmp8 = obj;
          if (textColor != null) {
            textColor = textColor.textColor;
          }
          const obj3 = { style: tmp8.staticRouteLinkIcon, size: "sm" };
          items = [closure_15(SignPostIcon, obj3), ];
          const tmpResult = MarkupRulesUtils;
          items[1] = tmpResult.smartOutput(channelId, output, textColor);
          return tmp6(tmp7, obj2, textColor.key);
        }
        SignPostIcon = tmp(13386).SignPostIcon;
      } else {
        return null;
      }
    }
  };
  const obj17 = {
    react(node, output, state) {
      styles = { styles, state, node, output };
      return closure_15(MarkupInlineCode, styles, state.key);
    }
  };
  const obj18 = {
    parse(arg0, arg1, arg2) {
      let obj;
      obj = obj2(dependencyMap[48]).RULES[obj(undefined, dependencyMap[43]).AST_KEY.CODE_BLOCK];
      const parsed = obj.parse(arg0, arg1, arg2);
      const str = parsed.lang;
      if ("ansi" === str.toLowerCase()) {
        const content = parsed.content;
        parsed.content = content.replaceAll(regExp, "");
      }
      return parsed;
    },
    react(node, output, state) {
      styles = { styles, state, node, output };
      return closure_15(MarkupCodeBlock, styles, state.key);
    }
  };
  const obj19 = {
    react: (node, output, state) => {
      styles = { roleStyle: str, state, node, output, styles };
      return closure_2_15(MarkupMention, styles, state.key);
    }
  };
  const obj20 = {
    react(node, output, state) {
      styles = { styles, state, node, output, variants: obj2 };
      return closure_15(MarkupChannelMention, styles, state.key);
    }
  };
  const obj21 = {
    react(node, output, state) {
      styles = { styles, state, node, output, variants: obj2 };
      return closure_15(MarkupAttachmentLink, styles, state.key);
    }
  };
  const obj22 = {
    react(node, output, key) {
      let items;
      const obj = { variant: "text-md/bold", children: items };
      const Text = obj(dependencyMap[11]).Text;
      items = ["<sound:"];
      obj2 = obj(dependencyMap[30]);
      items[1] = obj2.smartOutput(node, output, key);
      items[2] = ">";
      return closure_1_16(Text, obj, key.key);
    }
  };
  const obj23 = {
    react(icon, output, textColor) {
      let XXSMALL;
      let items;
      let obj;
      let obj3;
      let tmpResult;
      obj = obj(dependencyMap[49]);
      let num = 2;
      if (!obj.isAndroid()) {
        let num3 = 0;
        if (closure_1_4.getFontScale() < 1.5) {
          num3 = 1;
        }
        num = num3;
      }
      let tmp5Result = null;
      if (null != icon.icon) {
        obj2 = { style: obj3, icon: icon.icon, size: XXSMALL };
        obj3 = { top: num };
        const tmp7 = obj2(dependencyMap[23]);
        const fontScale = closure_1_4.getFontScale();
        const tmp5 = closure_1_15;
        if (fontScale < 1) {
          XXSMALL = tmp(tmp2[23]).GuildIconSizes.XXXSMALL;
        } else if (fontScale < 1.25) {
          XXSMALL = tmp(tmp2[23]).GuildIconSizes.XXSMALL_12;
        } else {
          XXSMALL = tmp(tmp2[23]).GuildIconSizes.XXSMALL;
        }
        tmp5Result = tmp5(tmp7, obj2);
      }
      textColor = undefined;
      const tmp10 = closure_1_16;
      if (textColor != null) {
        textColor = textColor.textColor;
      }
      const obj4 = { color: textColor, children: items };
      items = [, ];
      const obj5 = { style: style.guildIcon, children: tmp5Result };
      items[0] = closure_1_15(closure_1_6, obj5);
      let textColor1;
      const tmp13 = closure_1_15;
      if (textColor != null) {
        textColor1 = textColor.textColor;
      }
      const obj6 = { color: textColor1, children: tmpResult.smartOutput(icon, output, textColor) };
      tmpResult = obj(dependencyMap[30]);
      items[1] = tmp13(MarkupText, obj6);
      return tmp10(MarkupText, obj4, textColor.key);
    }
  };
  const obj24 = {
    react(iconType, output, textColor) {
      let SMALL;
      let items;
      let str = iconType.iconType;
      if (str == null) {
        str = "text";
      }
      let num = 2;
      if ("text" === str) {
        num = 0;
      }
      const obj = { themedColor: obj2(dependencyMap[13]).colors.MENTION_FOREGROUND, source: obj2.getChannelMentionIcon(str), size: SMALL, style: { top: 1 } };
      const ThemedIcon = obj(dependencyMap[24]).ThemedIcon;
      obj2 = obj(dependencyMap[50]);
      const fontScale = closure_1_4.getFontScale();
      if (fontScale < 1) {
        SMALL = tmp2(tmp3[24]).Icon.Sizes.EXTRA_SMALL_10;
      } else if (fontScale < 1.25) {
        SMALL = tmp2(tmp3[24]).Icon.Sizes.EXTRA_SMALL;
      } else {
        SMALL = tmp2(tmp3[24]).Icon.Sizes.SMALL;
      }
      textColor = undefined;
      const tmp6 = closure_1_16;
      const tmp7 = MarkupText;
      const tmpResult = closure_1_15(ThemedIcon, obj);
      if (textColor != null) {
        textColor = textColor.textColor;
      }
      const obj3 = { color: textColor, children: items };
      items = [, ];
      const obj4 = { style: { paddingEnd: num }, children: tmpResult };
      items[0] = closure_1_15(closure_1_6, obj4);
      const tmp2Result = obj(dependencyMap[30]);
      items[1] = tmp2Result.smartOutput(iconType, output, textColor);
      return tmp6(tmp7, obj3, textColor.key);
    }
  };
  const obj25 = {
    react(node, output, state) {
      styles = { styles, state, node, output };
      return closure_15(MarkupCommandMention, styles, state.key);
    }
  };
  const obj26 = {
    react(node, arg1, state) {
      const obj = { node, state };
      return closure_1_15(obj2(dependencyMap[51]), obj, state.key);
    }
  };
  const obj27 = {
    react(node, arg1, key) {
      let obj;
      obj = { node, style: obj.timestamp };
      return closure_15(TimestampDefault, obj, key.key);
    }
  };
  const obj28 = {
    react(start, arg1, level) {
      let items;
      let closure_1 = arg1;
      const start2 = start;
      let num = 0;
      if (null != level.level) {
        num = level.level;
      }
      let closure_5 = null != start.start ? start.start : level.start;
      if (level.formatInline) {
        let textColor;
        const tmp7 = closure_15;
        const tmp8 = closure_19;
        if (level != null) {
          textColor = level.textColor;
        }
        obj2 = {
          color: textColor,
          children: items.map((item, index) => {
              let str = "\u2022 ";
              const Fragment = React.Fragment;
              const tmp = closure_2_16;
              const tmp2 = start;
              if (true === start.ordered) {
                str = "\u2022 ";
                if (null != closure_5) {
                  const _HermesInternal = HermesInternal;
                  str = "" + closure_5 + index + ". ";
                }
              }
              const children = [str, , ];
              const obj = { key: "" + level.key + "-" + index };
              const merged = Object.assign(level);
              children[1] = closure_1(item, obj);
              let str4 = " ";
              const tmp5 = level;
              if (index !== tmp2.items.length - 1) {
                str4 = closure_2_21;
              }
              children[2] = str4;
              return tmp(Fragment, { children }, "list-" + tmp5.key + "-item-" + index);
            })
        };
        items = start.items;
        let tmp10 = globalThis;
        const _HermesInternal2 = HermesInternal;
        let str2 = "list-";
        return tmp7(tmp8, obj2, "list-" + level.key);
      } else {
        let items1 = start.items;
        let tmp2 = closure_15;
        let tmp3 = start;
        let mapped = items1.map((arr, index) => {
          let items;
          let items1;
          let length;
          let mapped;
          let sum;
          let textColor;
          start = arr;
          const tmp = num;
          let str = "\u26AC ";
          if (0 === num) {
            let str2;
            if (typeof start2.ordered === "boolean") {
              if (start2.ordered) {
                if (null != closure_5) {
                  const _HermesInternal = HermesInternal;
                  str2 = "" + closure_5 + index + ". ";
                }
                str = str2;
              }
            }
            let tmp3 = start;
            str2 = "\u25CF ";
            const obj = start(level[49]);
            if (obj.isAndroid()) {
              str2 = "\u2022 ";
            }
          }
          obj2 = { key: "" + level.key + "-" + index, level: tmp + 1, start: sum };
          const merged = Object.assign(level);
          let str5 = "";
          sum = closure_5;
          if (null != closure_5) {
            sum = closure_5 + 1;
          }
          const obj4 = { style: list.bullet, color: textColor, children: items };
          textColor = undefined;
          const obj3 = { style: list.listItem, variant: "text-sm/medium", children: items1 };
          const Text = start(level[11]).Text;
          const tmp10 = closure_1_19;
          if (level != null) {
            textColor = tmp6.textColor;
          }
          let repeatResult = str5;
          if (tmp > 0) {
            repeatResult = closure_1_21.repeat(tmp);
          }
          items = [repeatResult, str];
          items1 = [closure_1_16(tmp10, obj4, "list-" + level.key + "-item-" + index + "-bullet"), , ];
          if (Array.isArray(arr)) {
            mapped = arr.map((type, index) => {
              let str = tmp;
              const sum = index + 1;
              const Fragment = React.Fragment;
              const tmp3 = closure_3_16;
              if ("list" === type.type) {
                str = "\n";
              }
              let str2 = sum === length;
              const children = [str, obj2(type, obj2), ];
              if (str2) {
                str2 = !tmp;
              }
              if (str2) {
                str2 = "\n";
              }
              children[2] = str2;
              return tmp3(Fragment, { children }, index);
            });
          } else {
            mapped = obj2(arr, obj2);
          }
          items1[1] = mapped;
          if (start2.items.length !== index + 1) {
            str5 = closure_1_21;
          }
          items1[2] = str5;
          return closure_1_16(Text, obj3, "list-" + level.key + "-item-" + index);
        });
        let obj = { style: list.list, variant: "text-sm/medium", children: mapped };
        let tmp5 = list;
        const tmp6 = globalThis;
        let _HermesInternal = HermesInternal;
        let str = "list-";
        return closure_15(start(level[11]).Text, obj, "list-" + level.key);
      }
    }
  };
  const obj29 = {
    react(level, output, formatInline) {
      let items;
      let items1;
      let obj;
      let str3;
      if (formatInline.formatInline) {
        let textColor;
        const tmp8 = closure_1_16;
        const tmp9 = MarkupText;
        if (formatInline != null) {
          textColor = formatInline.textColor;
        }
        obj2 = { variant: "text-sm/semibold", color: textColor, children: items };
        const obj3 = { textVariant: "text-sm/semibold" };
        const smartOutput2 = obj(dependencyMap[30]).smartOutput;
        obj(dependencyMap[30]);
        const merged = Object.assign(formatInline);
        items = [smartOutput2(level, output, obj3), " "];
        return tmp8(tmp9, obj2, formatInline.key);
      } else {
        let str = "heading-xl/bold";
        if (1 !== level.level) {
          let str2 = "heading-md/bold";
          if (2 === level.level) {
            str2 = "heading-lg/bold";
          }
          str = str2;
        }
        obj = { variant: str, color: str3, children: items1 };
        str3 = "text-strong";
        const Text = obj(dependencyMap[11]).Text;
        const tmp = closure_1_16;
        if (formatInline.forceWhite) {
          str3 = "text-overlay-light";
        }
        const obj4 = { textVariant: str };
        const smartOutput = tmp2(tmp3[30]).smartOutput;
        obj(dependencyMap[30]);
        const merged1 = Object.assign(formatInline);
        items1 = [smartOutput(level, output, obj4), "\n"];
        return tmp(Text, obj, formatInline.key);
      }
    }
  };
  const obj30 = {
    react(node, output, key) {
      let items;
      const obj = { variant: "text-sm/normal", color: "text-muted", children: items };
      const Text = obj(dependencyMap[11]).Text;
      items = [, ];
      obj2 = obj(dependencyMap[30]);
      items[0] = obj2.smartOutput(node, output, key);
      items[1] = "\n";
      return closure_1_16(Text, obj, key.key);
    }
  };
  const obj31 = {
    react(content, output, textColor) {
      if (typeof content.content === "string") {
        content = content.content;
      } else {
        textColor = undefined;
        const tmp6 = closure_1_15;
        const tmp7 = MarkupText;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        const obj = { color: textColor, children: obj2.smartOutput(content, output, textColor) };
        obj2 = obj(dependencyMap[30]);
        content = tmp6(tmp7, obj, textColor.key);
      }
      return content;
    }
  };
  const obj7 = {
    react(node, output, textColor) {
      let obj;
      const em = obj.em;
      let str;
      const tmp = closure_15;
      const tmp2 = MarkupText;
      if (em != null) {
        str = em.fontStyle;
      }
      if (str == null) {
        str = "italic";
      }
      obj = { style: { fontStyle: str }, color: textColor, variant: textColor.textVariant, children: obj2.smartOutput(node, output, textColor) };
      textColor = undefined;
      if (textColor != null) {
        textColor = textColor.textColor;
      }
      obj2 = MarkupRulesUtils;
      return tmp(tmp2, obj, textColor.key);
    }
  };
  const obj8 = {
    react(node, output, textColor) {
      let obj;
      let strong = obj.strong;
      const tmp = closure_15;
      const tmp2 = MarkupText;
      if (!strong) {
        strong = obj.strong;
      }
      obj = { style: strong, color: textColor, variant: textColor.textVariant, children: obj2.smartOutput(node, output, textColor) };
      textColor = undefined;
      if (textColor != null) {
        textColor = textColor.textColor;
      }
      obj2 = MarkupRulesUtils;
      return tmp(tmp2, obj, textColor.key);
    }
  };
  const obj9 = {
    react(arg0, arg1, textColor) {
      let color;
      const tmp = closure_1_15;
      const tmp2 = MarkupText;
      if (textColor != null) {
        color = textColor.textColor;
      }
      return tmp(tmp2, { color, children: "\n" }, textColor.key);
    }
  };
  return { [closure_0(closure_2[43]).AST_KEY.TEXT]: obj4, [closure_0(closure_2[43]).AST_KEY.STRIKETHROUGH]: obj5, [closure_0(closure_2[43]).AST_KEY.UNDERLINE]: obj6, [closure_0(closure_2[43]).AST_KEY.ITALICS]: obj7, [closure_0(closure_2[43]).AST_KEY.STRONG]: obj8, [closure_0(closure_2[43]).AST_KEY.LINK]: { react }, [closure_0(closure_2[43]).AST_KEY.URL]: { react }, [closure_0(closure_2[43]).AST_KEY.AUTOLINK]: { react }, [closure_0(closure_2[43]).AST_KEY.LINE_BREAK]: obj9, [closure_0(closure_2[43]).AST_KEY.HIGHLIGHT]: obj10, [closure_0(closure_2[43]).AST_KEY.BLOCK_QUOTE]: obj11, [closure_0(closure_2[43]).AST_KEY.PARAGRAPH]: obj12, [closure_0(closure_2[43]).AST_KEY.EMOJI]: obj13, [closure_0(closure_2[43]).AST_KEY.CUSTOM_EMOJI]: obj14, [closure_0(closure_2[43]).AST_KEY.SPOILER]: obj15, [closure_0(closure_2[43]).AST_KEY.STATIC_ROUTE_LINK]: obj16, [closure_0(closure_2[43]).AST_KEY.INLINE_CODE]: obj17, [closure_0(closure_2[43]).AST_KEY.CODE_BLOCK]: obj18, [closure_0(closure_2[43]).AST_KEY.MENTION]: obj19, [closure_0(closure_2[43]).AST_KEY.CHANNEL_MENTION]: obj20, [closure_0(closure_2[43]).AST_KEY.ATTACHMENT_LINK]: obj21, [closure_0(closure_2[43]).AST_KEY.SOUNDBOARD]: obj22, [closure_0(closure_2[43]).AST_KEY.GUILD]: obj23, [closure_0(closure_2[43]).AST_KEY.CHANNEL]: obj24, [closure_0(closure_2[43]).AST_KEY.COMMAND_MENTION]: obj25, [closure_0(closure_2[43]).AST_KEY.GAME_MENTION]: obj26, [closure_0(closure_2[43]).AST_KEY.TIMESTAMP]: obj27, [closure_0(closure_2[43]).AST_KEY.LIST]: obj28, [closure_0(closure_2[43]).AST_KEY.HEADING]: obj29, [closure_0(closure_2[43]).AST_KEY.SUBTEXT]: obj30, [closure_0(closure_2[43]).AST_KEY.SILENT_PREFIX]: obj31 };
};
export { MarkupText };
export const plainMentionRenderer = function plainMentionRenderer(content, output, state) {
  if (typeof content.content === "string") {
    content = content.content;
  } else {
    const obj = MarkupRulesUtils;
    content = obj.smartOutput(content, output, state);
  }
  return content;
};
export const plainSpoilerRenderer = function plainSpoilerRenderer(content) {
  let str = "\u2588\u2588\u2588";
  if (typeof content.content === "string") {
    const str2 = content.content;
    str = str2.replace(/[^\n]/g, "\u2588");
  }
  return str;
};
export const createFetchingGameMentionRule = MarkupReactGameMentionRule.createFetchingGameMentionRule;
