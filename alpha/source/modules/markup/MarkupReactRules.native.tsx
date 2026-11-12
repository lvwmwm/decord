// Module ID: 5995
// Function ID: 5996
// Name: MarkupReactRules
// Dependencies: [19, 17, 5244, 5092, 5149, 1072, 5099, 1083, 21, 575, 5996, 5866, 5243, 6000, 5893, 5430, 6785, 8410, 6205, 1113, 7877, 5951, 7654, 1187, 1378, 7587, 5949, 12488, 12409, 9288, 504, 5240, 9122, 5489, 12429, 2118, 11, 5068, 5957, 12478, 12387, 16154, 16156, 5966, 12370, 16158, 12479, 6279, 1377, 6281, 7968, 10988, 10993, 2]
// Exports: default, plainMentionRenderer, plainSpoilerRenderer

// Module 5995 (MarkupReactRules)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import Constants2 from "Constants" /* 1083 */;
import intl4 from "intl" /* 1113 */;
import URLUtilsDefault from "URLUtils" /* 1378 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ChannelConstants from "ChannelConstants" /* 5099 */;
import RootNavigationRef from "RootNavigationRef" /* 5430 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import LinkUtils from "LinkUtils" /* 5893 */;
import LinkingDefault from "Linking" /* 5949 */;
import ToastUtils from "ToastUtils" /* 5951 */;
import FastImageDefault from "FastImage" /* 5957 */;
import Spoiler from "Spoiler" /* 5996 */;
import transitionToChannel from "transitionToChannel" /* 6000 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6205 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import ClipboardUtils from "ClipboardUtils" /* 7877 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8410 */;
import MarkupRulesUtils from "MarkupRulesUtils" /* 9288 */;
import MarkupReactGameMentionRule from "MarkupReactGameMentionRule" /* 10988 */;
import TimestampDefault from "Timestamp" /* 10993 */;
import openStaticChannelRouteDefault from "openStaticChannelRoute" /* 12370 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 12409 */;
import showEmojiActionSheetDefault from "showEmojiActionSheet" /* 12478 */;
import MarkupReactCommandRuleDefault from "MarkupReactCommandRule" /* 12479 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import GuildRoleStore from "GuildRoleStore" /* 5149 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

const SpoilerDefault = Spoiler;

let closure_12;
let closure_4;
let hasOwnProperty;
let items;
let map1;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj2;
let obj4;
let obj6;
let obj7;
let obj8;
let obj9;
let tmp3;
const Text_Text = tmp3(5866);
class MarkupText {
  constructor(color) {
    let items;
    let str = color.color;
    const children = color.children;
    if (str === undefined) {
      str = "text-default";
    }
    let str2 = color.variant;
    if (str2 === undefined) {
      str2 = "body-sm/medium";
    }
    let tmp = null;
    const merged = Object.assign(color, Object.assign({ children: 0, color: 0, variant: 0 }));
    if (react.useContext(Spoiler.SpoilerHiddenContext)) {
      const obj = { style: items, onPress: "match", onLongPress: "ti", accessibilityRole: "__esModule" };
      items = [merged.style, obj.spoilerHiddenText];
      tmp = obj;
    }
    const obj2 = { variant: str2, color: str, children };
    const Text = Text_Text.Text;
    const merged1 = Object.assign(merged);
    const merged2 = Object.assign(tmp);
    return authStore2(Text, obj2);
  }
}
function MarkupLink(arg0) {
  let node;
  let obj2;
  let output;
  let smartOutput;
  let state;
  let styles;
  ({ state, node } = arg0);
  ({ output, styles } = arg0);
  let str = state.linkVariant;
  let tmp = closure_16();
  if (str == null) {
    str = "body-sm/medium";
  }
  let link = styles.link;
  if (link == null) {
    link = tmp.link;
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
              const tmp9Result = tmp9(dependencyMap[24]);
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
              const obj = node(dependencyMap[27]);
              return obj.isLinkTrusted(node);
            }
        };
        const obj2 = node(dependencyMap[25]);
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
  obj2 = { inLink: true };
  smartOutput = node(9288).smartOutput;
  node(9288);
  const merged = Object.assign(state);
  return closure_12(MarkupText, obj, state.key);
}
function MarkupMention(styles) {
  let backgroundColor;
  let items2;
  let node;
  let roleId;
  let roleStyle;
  let state;
  let textColor;
  let tmp15;
  let userId;
  ({ roleStyle, state, node } = styles);
  styles = styles.styles;
  roleId = undefined;
  let closure_3;
  const output = styles.output;
  ({ userId, roleId } = node);
  const guildId = node.guildId;
  let tmp2 = null != guildId;
  const tmp = closure_16();
  if (tmp2) {
    tmp2 = null != roleId;
  }
  closure_3 = tmp2;
  let tmp4 = guildId;
  let obj = node(guildId[30]);
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
  let mention = styles.mention;
  if (mention == null) {
    mention = tmp.mention;
  }
  let tmp8 = tmp2 && null != colorString;
  if (tmp8) {
    tmp8 = "username" === roleStyle;
  }
  if (tmp8) {
    let obj2 = { color: colorString, backgroundColor };
    const mention2 = styles.mention;
    backgroundColor = undefined;
    if (mention2 != null) {
      backgroundColor = mention2.backgroundColor;
    }
    if (backgroundColor == null) {
      const tmp3Result = node(tmp4[31]);
      backgroundColor = tmp3Result.hexWithOpacity(colorString, 0.1);
    }
    mention = obj2;
  }
  const tmp3Result4 = node(tmp4[32]);
  const processColorStringsArray = tmp3Result4.useProcessColorStringsArray(colorStrings);
  let str2 = "button";
  const tmp3Result5 = node(tmp4[32]);
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
          obj4.openLazy(asyncRequire(12429, dependencyMap.paths), "RoleMembersActionSheet", obj2, "stack");
        }
      }
      if ("@everyone" === node.roleName) {
        if (null != node.guildId) {
          const openLazy = ActionSheetActionCreatorsDefault.openLazy;
          const tmp13 = asyncRequire(12429, dependencyMap.paths);
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
  let obj3 = { accessibilityRole: str2, style: mention, color: textColor, gradientColors: tmp15, onPress: fn, children: items2 };
  textColor = undefined;
  let tmp13 = MarkupText;
  const tmp12 = closure_13;
  if (state != null) {
    textColor = state.textColor;
  }
  tmp15 = undefined;
  if (tmp2) {
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp15 = processColorStringsArray;
    }
  }
  if (tmp2) {
    tmp2 = "dot" === roleStyle;
  }
  if (tmp2) {
    let obj4 = { guildId, color: colorString, colors: colorStrings, size: "small" };
    tmp2 = closure_12(tmp3(tmp4[23]).RoleDot, obj4);
  }
  items2 = [tmp2, ];
  const tmp3Result6 = node(tmp4[29]);
  items2[1] = tmp3Result6.smartOutput(node, output, state);
  return tmp12(tmp13, obj3, state.key);
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
  const tmp = authStore2;
  const tmp2 = MarkupText;
  if (blockQuote == null) {
    blockQuote = closure_16().blockQuote;
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
  const tmp = closure_16();
  if (!noStyleAndInteraction) {
    tmp2 = !state.inLink;
  }
  let str = "text";
  if (tmp2) {
    str = "button";
  }
  let inlineCode = styles.inlineCode;
  if (inlineCode == null) {
    inlineCode = tmp.inlineCode;
  }
  style = {};
  const merged = Object.assign(inlineCode);
  if (state.inLink) {
    delete style["color"];
  }
  let obj2 = { accessibilityRole: str, style, color: textColor, onPress: fn, children: obj3.smartOutput(node, output, state) };
  textColor = undefined;
  const tmp4 = closure_12;
  const tmp5 = MarkupText;
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
  obj3 = node(9288);
  return tmp4(tmp5, obj2, state.key);
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
  const tmp = map1;
  const tmp2 = MarkupText;
  if (codeBlock == null) {
    codeBlock = closure_16().codeBlock;
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
  let useReducedMotion;
  ({ state, node } = styles);
  styles = styles.styles;
  const AnimateEmoji = node(5068).AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  let obj = node(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp = node;
  if (typeof node.src === "string") {
    if ("" !== node.src) {
      let emoji = styles.emoji;
      const tmp15 = FastImageDefault;
      if (emoji == null) {
        emoji = obj.emoji;
      }
      const items1 = [emoji, , ];
      let tmp6 = null;
      if (typeof state.customEmojiSize === "number") {
        size = { width: null, height: null };
        ({ customEmojiSize: obj6.width, customEmojiSize: obj6.height } = state);
        tmp6 = size;
      }
      items1[1] = tmp6;
      let tmp7 = null;
      if (typeof state.customEmojiOffsetY === "number") {
        const obj2 = { transform: items2 };
        items2 = [{ translateY: state.customEmojiOffsetY }];
        tmp7 = obj2;
        const obj3 = { translateY: state.customEmojiOffsetY };
      }
      const obj4 = { style: items1, source: obj5, enableAnimation: !stateFromStores && setting };
      items1[2] = tmp7;
      obj5 = { uri: node.src };
      const tmp13Result = closure_12(tmp15, obj4, state.key);
      let tmp13Result2 = tmp13Result;
      if (state.enableEmojiInteraction) {
        tmp13Result2 = tmp13Result;
        if (!state.noStyleAndInteraction) {
          tmp13Result2 = tmp13Result;
          if (!state.inLink) {
            let str = state.textVariant;
            const Text = tmp(5866).Text;
            if (str == null) {
              str = "text-sm/medium";
            }
            const obj7 = {
              variant: str,
              color: "none",
              accessibilityRole: "button",
              accessibilityLabel: node.alt,
              onPress(stopPropagation) {
                          stopPropagation.stopPropagation();
                          const obj = { id: node.id, alt: node.alt, src: node.src };
                          showEmojiActionSheetDefault(obj);
                        },
              children: tmp13Result
            };
            tmp13Result2 = tmp13(Text, obj7);
          }
        }
      }
      return tmp13Result2;
    }
  }
  let textColor;
  const tmp10 = closure_12;
  const tmp11 = MarkupText;
  if (state != null) {
    textColor = state.textColor;
  }
  const obj8 = { color: textColor, children: node.alt };
  return tmp10(tmp11, obj8, state.key);
}
function MarkupChannelMention(state) {
  let items;
  let items1;
  let items2;
  let str3;
  let styles;
  let tmp9;
  let variants;
  state = state.state;
  const node = state.node;
  const output = state.output;
  ({ styles, variants } = state);
  const tmp = closure_16();
  let str = "button";
  if (state.noStyleAndInteraction) {
    str = "text";
  }
  let obj = { textColor: "mention-foreground" };
  const merged = Object.assign(state);
  const tmp4 = state;
  const tmp3 = closure_13;
  let str2 = variants.channelMentionText;
  const Text = state(5866).Text;
  if (str2 == null) {
    str2 = "body-xs/medium";
  }
  let obj2 = { variant: str2, style: tmp.channelMentionText, children: items };
  let outputResult = null;
  if (null != node.inContent) {
    outputResult = output(node.inContent, obj);
  }
  items = [outputResult, , ];
  let tmp8Result = null;
  if (null != node.inContent) {
    const obj3 = { themedColor: node(575).colors.MENTION_FOREGROUND, style: size, source: tmp9(12387), size: tmp4(1187).Icon.Sizes.CUSTOM };
    const ThemedIcon = tmp4(1187).ThemedIcon;
    const fontScale = closure_4.getFontScale();
    const tmp8 = closure_12;
    tmp9 = node;
    if (fontScale < 1.25) {
      size = { width: 8, height: 8 };
    } else {
      size = fontScale < 2 ? { width: 12, height: 12 } : { width: 16, height: 16 };
    }
    tmp8Result = tmp8(ThemedIcon, obj3);
  }
  items[1] = tmp8Result;
  const tmp4Result = tmp4(9288);
  items[2] = tmp4Result.smartOutput(node, output, obj);
  const tmp3Result = tmp3(Text, obj2, state.key);
  let tmp14Result = tmp3Result;
  if (!state.disablePressableChannelMention) {
    let obj4 = {
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
      children: tmp3Result
    };
    let channelMention = styles.channel;
    const tmp14 = closure_12;
    const tmp15 = closure_5;
    if (channelMention == null) {
      channelMention = tmp.channelMention;
    }
    items1 = [channelMention, ];
    let tmp16 = null;
    if (null != state.mentionPillOffsetY) {
      let obj5 = { transform: items2 };
      items2 = [{ translateY: state.mentionPillOffsetY }];
      tmp16 = obj5;
      const obj6 = { translateY: state.mentionPillOffsetY };
    }
    items1[1] = tmp16;
    str3 = "auto";
    if (state.noStyleAndInteraction) {
      str3 = "none";
    }
    tmp14Result = tmp14(tmp15, obj4, state.key);
  }
  return tmp14Result;
}
function MarkupStaticRouteLink(state) {
  let items;
  let items2;
  let obj3;
  let output;
  let str3;
  let str5;
  let styles;
  let variants;
  state = state.state;
  const node = state.node;
  ({ output, styles, variants } = state);
  let tmp = closure_16();
  let SignPostIcon = state(16154).SignPostIcon;
  const channelId = node.channelId;
  if (StaticChannelId.GUILD_HOME !== channelId) {
    if (StaticChannelId.SERVER_GUIDE !== channelId) {
      if (StaticChannelId.CHANNEL_BROWSER !== channelId) {
        if (StaticChannelId.CUSTOMIZE_COMMUNITY !== channelId) {
          if (StaticChannelId.LINKED_ROLES === channelId) {
            SignPostIcon = tmp2(5966).LinkIcon;
          }
        }
      }
      SignPostIcon = tmp2(16156).ChannelListMagnifyingGlassIcon;
    }
    let str = "button";
    if (state.noStyleAndInteraction) {
      str = "text";
    }
    let str2 = variants.channelMentionText;
    const Text = tmp2(5866).Text;
    const tmp5 = closure_13;
    if (str2 == null) {
      str2 = "body-xs/medium";
    }
    let obj = { variant: str2, style: tmp.channelMentionText, children: items };
    const obj2 = { style: obj.staticRouteLinkIcon, children: closure_12(SignPostIcon, obj3) };
    obj3 = { color: node(575).colors.MENTION_FOREGROUND, size: str3 };
    const fontScale = closure_4.getFontScale();
    str3 = "xxs";
    if (fontScale >= 1) {
      let str4 = "sm";
      if (fontScale < 1.25) {
        str4 = "xs";
      }
      str3 = str4;
    }
    items = [closure_12(closure_6, obj2), ];
    const tmp2Result = state(9288);
    items[1] = tmp2Result.smartOutput(node, output, state);
    const tmp5Result = tmp5(Text, obj, state.key);
    if (state.disablePressableChannelMention) {
      return tmp5Result;
    } else {
      let tmp7Result;
      let channelMention = styles.channel;
      if (channelMention == null) {
        channelMention = tmp.channelMention;
      }
      const items1 = [channelMention, ];
      let tmp14 = null;
      if (null != state.mentionPillOffsetY) {
        const obj4 = { transform: items2 };
        items2 = [{ translateY: state.mentionPillOffsetY }];
        tmp14 = obj4;
        const obj5 = { translateY: state.mentionPillOffsetY };
      }
      items1[1] = tmp14;
      if (null == node.guildId) {
        const obj6 = { style: items1, children: tmp5Result };
        tmp7Result = tmp7(tmp8, obj6, state.key);
      } else {
        const obj7 = {
          accessibilityRole: str,
          style: items1,
          pointerEvents: str5,
          onPress() {
                  let tmp = null;
                  if (!state.noStyleAndInteraction) {
                    const obj = { guildId: null, staticRoute: null, itemId: null };
                    ({ guildId: obj.guildId, channelId: obj.staticRoute, itemId: obj.itemId } = node);
                    tmp = openStaticChannelRouteDefault(obj);
                  }
                  return tmp;
                },
          children: tmp5Result
        };
        str5 = "auto";
        const tmp15 = closure_5;
        if (state.noStyleAndInteraction) {
          str5 = "none";
        }
        tmp7Result = tmp7(tmp15, obj7, state.key);
      }
      return tmp7Result;
    }
  }
  SignPostIcon = tmp2(16154).SignPostIcon;
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
  const tmp = closure_16();
  let str = "button";
  if (state.noStyleAndInteraction) {
    str = "text";
  }
  let str2 = variants.channelMentionText;
  const Text = state(5866).Text;
  const tmp2 = closure_13;
  if (str2 == null) {
    str2 = "body-xs/medium";
  }
  let obj = { variant: str2, style: tmp.channelMentionText, children: items };
  const obj2 = { themedColor: node(575).colors.MENTION_FOREGROUND, source: node(16158), size: SMALL };
  const ThemedIcon = tmp3(1187).ThemedIcon;
  const fontScale = closure_4.getFontScale();
  if (fontScale < 1) {
    SMALL = tmp3(1187).Icon.Sizes.EXTRA_SMALL_10;
  } else if (fontScale < 1.25) {
    SMALL = tmp3(1187).Icon.Sizes.EXTRA_SMALL;
  } else {
    SMALL = tmp3(1187).Icon.Sizes.SMALL;
  }
  items = [tmp5(ThemedIcon, obj2), ];
  const tmp3Result = state(9288);
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
    if (channelMention == null) {
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
  const tmp = closure_16();
  const tmp2 = authStore2;
  const tmp3 = MarkupReactCommandRuleDefault;
  if (mention == null) {
    mention = tmp.mention;
  }
  return tmp2(tmp3, obj, state.key);
}
let react = react_mod;
({ PixelRatio: closure_4, Pressable: hasOwnProperty, View: metroRequire, Text: metroImportDefault } = react_native);
const EMOJI_CHAT_SIZE = Constants.EMOJI_CHAT_SIZE;
const StaticChannelId = ChannelConstants.StaticChannelId;
const Fonts = Constants2.Fonts;
let Fragment = Fragment_mod;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let style = { unicodeEmoji: obj2, emoji: { width: EMOJI_CHAT_SIZE, height: EMOJI_CHAT_SIZE, resizeMode: "contain" }, guildIcon: { paddingEnd: 2, paddingBottom: 1 }, staticRouteLinkIcon: { paddingEnd: 2, top: 1 }, list: { paddingTop: 16 }, listItem: { paddingTop: 4 }, bullet: { fontFamily: Fonts.CODE_BOLD }, strong: { fontFamily: Fonts.PRIMARY_BOLD }, spoilerHiddenText: obj4 };
obj2 = { transform: items };
let obj3 = { translateY: nativeDefault.space.PX_4 };
items = [obj3];
obj4 = { color: Spoiler.SPOILER_HIDDEN_TEXT_COLOR, backgroundColor: "a" };
let createStyles = createStyles_mod;
let obj5 = { link: obj6, channelMention: obj7, channelMentionText: obj8, mention: obj9, inlineCode: obj10, codeBlock: obj11, blockQuote: obj12 };
obj6 = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.colors.TEXT_LINK };
createStyles = createStyles.createStyles;
obj7 = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: 3, paddingHorizontal: 2, alignItems: "center" };
obj8 = { color: nativeDefault.colors.MENTION_FOREGROUND };
obj9 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND };
obj10 = { fontFamily: Fonts.CODE_BOLD, color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_CODE };
obj11 = { fontFamily: Fonts.CODE_BOLD, color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_CODE };
obj12 = { borderLeftWidth: 4, borderLeftColor: nativeDefault.colors.SPINE_DEFAULT, paddingLeft: 8 };
let closure_16 = createStyles(obj5);
let c17 = "  ";
let size = size_mod;
let result = size.fileFinishedImporting("modules/markup/MarkupReactRules.native.tsx");

export default function createRules(styles) {
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
      obj3 = obj(dependencyMap[29]);
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
        const tmp6 = closure_1_12;
        const tmp7 = MarkupText;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        const obj = { color: textColor, children: obj2.smartOutput(content, output, textColor) };
        obj2 = obj(dependencyMap[29]);
        content = tmp6(tmp7, obj, textColor.key);
      }
      return content;
    }
  };
  let obj5 = {
    react(node, output, textColor) {
      const obj = { style: { textDecorationLine: "line-through" }, color: textColor, variant: textColor.textVariant, children: obj2.smartOutput(node, output, textColor) };
      textColor = undefined;
      const tmp = closure_1_12;
      const tmp2 = MarkupText;
      if (textColor != null) {
        textColor = textColor.textColor;
      }
      obj2 = obj(dependencyMap[29]);
      return tmp(tmp2, obj, textColor.key);
    }
  };
  let obj6 = {
    react(node, output, textColor) {
      const obj = { style: { textDecorationLine: "underline" }, color: textColor, variant: textColor.textVariant, children: obj2.smartOutput(node, output, textColor) };
      textColor = undefined;
      const tmp = closure_1_12;
      const tmp2 = MarkupText;
      if (textColor != null) {
        textColor = textColor.textColor;
      }
      obj2 = obj(dependencyMap[29]);
      return tmp(tmp2, obj, textColor.key);
    }
  };
  const obj10 = {
    react(node, output, textColor) {
      textColor = undefined;
      const tmp = closure_1_12;
      const tmp2 = MarkupText;
      if (textColor != null) {
        textColor = textColor.textColor;
      }
      const obj = { color: textColor, children: obj2.smartOutput(node, output, textColor) };
      obj2 = obj(dependencyMap[29]);
      return tmp(tmp2, obj, textColor.key);
    }
  };
  const obj11 = {
    react(node, output, state) {
      styles = { styles, state, node, output };
      return authStore2(MarkupBlockQuote, styles, state.key);
    }
  };
  const obj12 = {
    order: 600,
    react(node, output, textColor) {
      textColor = undefined;
      const tmp = closure_1_12;
      const tmp2 = MarkupText;
      if (textColor != null) {
        textColor = textColor.textColor;
      }
      const obj = { color: textColor, children: obj2.smartOutput(node, output, textColor) };
      obj2 = obj(dependencyMap[29]);
      return tmp(tmp2, obj, textColor.key);
    }
  };
  const obj13 = {
    react(surrogate, arg1, enableEmojiInteraction) {
      const children = surrogate.surrogate || surrogate.content;
      if (enableEmojiInteraction.enableEmojiInteraction) {
        if (!enableEmojiInteraction.noStyleAndInteraction) {
          if (!enableEmojiInteraction.inLink) {
            let str = enableEmojiInteraction.textVariant;
            const Text = surrogate(closure_2[11]).Text;
            const tmp3 = surrogate;
            const tmp4 = closure_2;
            if (str == null) {
              str = "text-sm/medium";
            }
            let obj = {
              variant: str,
              color: "none",
              accessibilityRole: "button",
              accessibilityLabel: surrogate.content,
              onPress(stopPropagation) {
                      stopPropagation.stopPropagation();
                      const obj = { surrogate: children, content: surrogate.content };
                      obj2(dependencyMap[39])(obj);
                    },
              children
            };
            const tmp2Result = closure_12(Text, obj, enableEmojiInteraction.key);
            let tmp2Result2 = tmp2Result;
            const tmp3Result = tmp3(tmp4[48]);
            if (tmp3Result.isAndroid()) {
              obj2 = { style: closure_14.unicodeEmoji, children: tmp2Result };
              tmp2Result2 = tmp2(closure_6, obj2, enableEmojiInteraction.key);
            }
            return tmp2Result2;
          }
        }
      }
      return closure_12(closure_7, { children }, enableEmojiInteraction.key);
    }
  };
  const obj14 = {
    react(node, arg1, state) {
      styles = { state, node, styles };
      return authStore2(MarkupCustomEmoji, styles, state.key);
    }
  };
  const obj15 = {
    react(id, output, key) {
      let obj;
      obj = { id: id.id, spoilerStyle: obj.spoiler, spoilerRevealedStyle: obj.spoilerRevealed, children: obj2.smartOutput(id, output, key) };
      const tmp = SpoilerDefault;
      obj2 = MarkupRulesUtils;
      return authStore2(tmp, obj, key.key);
    }
  };
  const obj16 = {
    react(channelId, output, state) {
      styles = MarkupRulesUtils;
      let tmp = null;
      if (styles.isStaticRouteIconType(channelId.channelId)) {
        obj2 = { styles, variants: obj2, state, node: channelId, output };
        tmp = authStore2(MarkupStaticRouteLink, obj2, state.key);
      }
      return tmp;
    }
  };
  const obj17 = {
    react(node, output, state) {
      styles = { styles, state, node, output };
      return authStore2(MarkupInlineCode, styles, state.key);
    }
  };
  const obj18 = {
    parse(arg0, arg1, arg2) {
      let obj;
      const tmp2 = obj;
      obj = obj2(dependencyMap[49]).RULES[obj(undefined, dependencyMap[47]).AST_KEY.CODE_BLOCK];
      const parsed = obj.parse(arg0, arg1, arg2);
      const str = parsed.lang;
      const tmp = dependencyMap;
      if ("ansi" === str.toLowerCase()) {
        const content = parsed.content;
        parsed.content = content.replaceAll(tmp2(tmp[29]).ANSI_CONTROL_SEQUENCE_RE_GLOBAL, "");
      }
      return parsed;
    },
    react(node, output, state) {
      styles = { styles, state, node, output };
      return authStore2(MarkupCodeBlock, styles, state.key);
    }
  };
  const obj19 = {
    react: (node, output, state) => {
      styles = { roleStyle: str, state, node, output, styles };
      return closure_2_12(MarkupMention, styles, state.key);
    }
  };
  const obj20 = {
    react(node, output, state) {
      styles = { styles, state, node, output, variants: obj2 };
      return authStore2(MarkupChannelMention, styles, state.key);
    }
  };
  const obj21 = {
    react(node, output, state) {
      styles = { styles, state, node, output, variants: obj2 };
      return authStore2(MarkupAttachmentLink, styles, state.key);
    }
  };
  const obj22 = {
    react(node, output, key) {
      let items;
      const obj = { variant: "body-md/semibold", children: items };
      const Text = obj(dependencyMap[11]).Text;
      items = ["<sound:"];
      obj2 = obj(dependencyMap[29]);
      items[1] = obj2.smartOutput(node, output, key);
      items[2] = ">";
      return closure_1_13(Text, obj, key.key);
    }
  };
  const obj23 = {
    react(icon, output, textColor) {
      let XXSMALL;
      let items;
      let obj;
      let obj3;
      let tmpResult;
      obj = obj(dependencyMap[48]);
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
        const tmp7 = obj2(dependencyMap[22]);
        const fontScale = closure_1_4.getFontScale();
        const tmp5 = closure_1_12;
        if (fontScale < 1) {
          XXSMALL = tmp(tmp2[22]).GuildIconSizes.XXXSMALL;
        } else if (fontScale < 1.25) {
          XXSMALL = tmp(tmp2[22]).GuildIconSizes.XXSMALL_12;
        } else {
          XXSMALL = tmp(tmp2[22]).GuildIconSizes.XXSMALL;
        }
        tmp5Result = tmp5(tmp7, obj2);
      }
      textColor = undefined;
      const tmp10 = closure_1_13;
      if (textColor != null) {
        textColor = textColor.textColor;
      }
      const obj4 = { color: textColor, children: items };
      items = [, ];
      const obj5 = { style: style.guildIcon, children: tmp5Result };
      items[0] = closure_1_12(closure_1_6, obj5);
      let textColor1;
      const tmp13 = closure_1_12;
      if (textColor != null) {
        textColor1 = textColor.textColor;
      }
      const obj6 = { color: textColor1, children: tmpResult.smartOutput(icon, output, textColor) };
      tmpResult = obj(dependencyMap[29]);
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
      const obj = { themedColor: obj2(dependencyMap[9]).colors.MENTION_FOREGROUND, source: obj2.getChannelMentionIcon(str), size: SMALL, style: { top: 1 } };
      const ThemedIcon = obj(dependencyMap[23]).ThemedIcon;
      obj2 = obj(dependencyMap[50]);
      const fontScale = closure_1_4.getFontScale();
      if (fontScale < 1) {
        SMALL = tmp2(tmp3[23]).Icon.Sizes.EXTRA_SMALL_10;
      } else if (fontScale < 1.25) {
        SMALL = tmp2(tmp3[23]).Icon.Sizes.EXTRA_SMALL;
      } else {
        SMALL = tmp2(tmp3[23]).Icon.Sizes.SMALL;
      }
      textColor = undefined;
      const tmp6 = closure_1_13;
      const tmp7 = MarkupText;
      const tmpResult = closure_1_12(ThemedIcon, obj);
      if (textColor != null) {
        textColor = textColor.textColor;
      }
      const obj3 = { color: textColor, children: items };
      items = [, ];
      const obj4 = { style: { paddingEnd: num }, children: tmpResult };
      items[0] = closure_1_12(closure_1_6, obj4);
      const tmp2Result = obj(dependencyMap[29]);
      items[1] = tmp2Result.smartOutput(iconType, output, textColor);
      return tmp6(tmp7, obj3, textColor.key);
    }
  };
  const obj25 = {
    react(node, output, state) {
      styles = { styles, state, node, output };
      return authStore2(MarkupCommandMention, styles, state.key);
    }
  };
  const obj26 = {
    react(node, arg1, state) {
      const obj = { node, state };
      return closure_1_12(obj2(dependencyMap[51]), obj, state.key);
    }
  };
  const obj27 = {
    react(node, arg1, key) {
      let obj;
      obj = { node, style: obj.timestamp };
      return authStore2(TimestampDefault, obj, key.key);
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
        const tmp7 = closure_12;
        const tmp8 = closure_15;
        if (level != null) {
          textColor = level.textColor;
        }
        obj2 = {
          color: textColor,
          children: items.map((item, index) => {
              let str = "\u2022 ";
              const Fragment = React.Fragment;
              const tmp = closure_2_13;
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
                str4 = closure_2_17;
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
        let tmp2 = closure_12;
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
            const obj = start(level[48]);
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
          const obj4 = { style: closure_1_14.bullet, color: textColor, children: items };
          textColor = undefined;
          const obj3 = { style: closure_1_14.listItem, variant: "body-sm/medium", children: items1 };
          const Text = start(level[11]).Text;
          const tmp10 = closure_1_15;
          if (level != null) {
            textColor = tmp6.textColor;
          }
          let repeatResult = str5;
          if (tmp > 0) {
            repeatResult = closure_1_17.repeat(tmp);
          }
          items = [repeatResult, str];
          items1 = [closure_1_13(tmp10, obj4, "list-" + level.key + "-item-" + index + "-bullet"), , ];
          if (Array.isArray(arr)) {
            mapped = arr.map((type, index) => {
              let str = tmp;
              const sum = index + 1;
              const Fragment = React.Fragment;
              const tmp3 = closure_3_13;
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
            str5 = closure_1_17;
          }
          items1[2] = str5;
          return closure_1_13(Text, obj3, "list-" + level.key + "-item-" + index);
        });
        let obj = { style: closure_14.list, variant: "body-sm/medium", children: mapped };
        let tmp5 = closure_14;
        const tmp6 = globalThis;
        let _HermesInternal = HermesInternal;
        let str = "list-";
        return closure_12(start(level[11]).Text, obj, "list-" + level.key);
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
        const tmp8 = closure_1_13;
        const tmp9 = MarkupText;
        if (formatInline != null) {
          textColor = formatInline.textColor;
        }
        obj2 = { variant: "body-sm/semibold", color: textColor, children: items };
        const obj3 = { textVariant: "body-sm/semibold" };
        const smartOutput2 = obj(dependencyMap[29]).smartOutput;
        obj(dependencyMap[29]);
        const merged = Object.assign(formatInline);
        items = [smartOutput2(level, output, obj3), " "];
        return tmp8(tmp9, obj2, formatInline.key);
      } else {
        let str = "heading-xl/semibold";
        if (1 !== level.level) {
          let str2 = "heading-sm/semibold";
          if (2 === level.level) {
            str2 = "heading-lg/semibold";
          }
          str = str2;
        }
        obj = { variant: str, color: str3, children: items1 };
        str3 = "text-strong";
        const Text = obj(dependencyMap[11]).Text;
        const tmp = closure_1_13;
        if (formatInline.forceWhite) {
          str3 = "text-overlay-light";
        }
        const obj4 = { textVariant: str };
        const smartOutput = tmp2(tmp3[29]).smartOutput;
        obj(dependencyMap[29]);
        const merged1 = Object.assign(formatInline);
        items1 = [smartOutput(level, output, obj4), "\n"];
        return tmp(Text, obj, formatInline.key);
      }
    }
  };
  const obj30 = {
    react(node, output, key) {
      let items;
      const obj = { variant: "body-sm/normal", color: "text-muted", children: items };
      const Text = obj(dependencyMap[11]).Text;
      items = [, ];
      obj2 = obj(dependencyMap[29]);
      items[0] = obj2.smartOutput(node, output, key);
      items[1] = "\n";
      return closure_1_13(Text, obj, key.key);
    }
  };
  const obj31 = {
    react(content, output, textColor) {
      if (typeof content.content === "string") {
        content = content.content;
      } else {
        textColor = undefined;
        const tmp6 = closure_1_12;
        const tmp7 = MarkupText;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        const obj = { color: textColor, children: obj2.smartOutput(content, output, textColor) };
        obj2 = obj(dependencyMap[29]);
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
      const tmp = authStore2;
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
      const tmp = authStore2;
      const tmp2 = MarkupText;
      if (strong == null) {
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
      const tmp = closure_1_12;
      const tmp2 = MarkupText;
      if (textColor != null) {
        color = textColor.textColor;
      }
      return tmp(tmp2, { color, children: "\n" }, textColor.key);
    }
  };
  return { [closure_0(closure_2[47]).AST_KEY.TEXT]: obj4, [closure_0(closure_2[47]).AST_KEY.STRIKETHROUGH]: obj5, [closure_0(closure_2[47]).AST_KEY.UNDERLINE]: obj6, [closure_0(closure_2[47]).AST_KEY.ITALICS]: obj7, [closure_0(closure_2[47]).AST_KEY.STRONG]: obj8, [closure_0(closure_2[47]).AST_KEY.LINK]: { react }, [closure_0(closure_2[47]).AST_KEY.URL]: { react }, [closure_0(closure_2[47]).AST_KEY.AUTOLINK]: { react }, [closure_0(closure_2[47]).AST_KEY.LINE_BREAK]: obj9, [closure_0(closure_2[47]).AST_KEY.HIGHLIGHT]: obj10, [closure_0(closure_2[47]).AST_KEY.BLOCK_QUOTE]: obj11, [closure_0(closure_2[47]).AST_KEY.PARAGRAPH]: obj12, [closure_0(closure_2[47]).AST_KEY.EMOJI]: obj13, [closure_0(closure_2[47]).AST_KEY.CUSTOM_EMOJI]: obj14, [closure_0(closure_2[47]).AST_KEY.SPOILER]: obj15, [closure_0(closure_2[47]).AST_KEY.STATIC_ROUTE_LINK]: obj16, [closure_0(closure_2[47]).AST_KEY.INLINE_CODE]: obj17, [closure_0(closure_2[47]).AST_KEY.CODE_BLOCK]: obj18, [closure_0(closure_2[47]).AST_KEY.MENTION]: obj19, [closure_0(closure_2[47]).AST_KEY.CHANNEL_MENTION]: obj20, [closure_0(closure_2[47]).AST_KEY.ATTACHMENT_LINK]: obj21, [closure_0(closure_2[47]).AST_KEY.SOUNDBOARD]: obj22, [closure_0(closure_2[47]).AST_KEY.GUILD]: obj23, [closure_0(closure_2[47]).AST_KEY.CHANNEL]: obj24, [closure_0(closure_2[47]).AST_KEY.COMMAND_MENTION]: obj25, [closure_0(closure_2[47]).AST_KEY.GAME_MENTION]: obj26, [closure_0(closure_2[47]).AST_KEY.TIMESTAMP]: obj27, [closure_0(closure_2[47]).AST_KEY.LIST]: obj28, [closure_0(closure_2[47]).AST_KEY.HEADING]: obj29, [closure_0(closure_2[47]).AST_KEY.SUBTEXT]: obj30, [closure_0(closure_2[47]).AST_KEY.SILENT_PREFIX]: obj31 };
};
export { MarkupText };
export function plainMentionRenderer(content, output, state) {
  if (typeof content.content === "string") {
    content = content.content;
  } else {
    const obj = MarkupRulesUtils;
    content = obj.smartOutput(content, output, state);
  }
  return content;
}
export function plainSpoilerRenderer(content) {
  let str = "\u2588\u2588\u2588";
  if (typeof content.content === "string") {
    const str2 = content.content;
    str = str2.replace(/[^\n]/g, "\u2588");
  }
  return str;
}
export const createFetchingGameMentionRule = MarkupReactGameMentionRule.createFetchingGameMentionRule;
