// Module ID: 4749
// Function ID: 4750
// Name: MarkupReactRules
// Dependencies: [109, 19, 17, 4750, 2045, 2103, 2067, 1078, 2052, 1089, 21, 4753, 558, 568, 4754, 4758, 580, 4769, 4912, 4617, 4961, 8453, 5110, 1119, 7436, 4457, 5799, 1181, 1370, 8646, 4455, 11736, 11704, 8359, 504, 4608, 8224, 4725, 11707, 1984, 11, 2023, 5802, 11685, 14112, 11466, 5209, 12220, 14113, 14115, 4700, 5211, 1368, 5241, 14117, 12222, 2]
// Exports: default, plainMentionRenderer, plainSpoilerRenderer

// Module 4749 (MarkupReactRules)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import URLUtilsDefault from "URLUtils" /* 1370 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import UserSettings from "UserSettings" /* 2023 */;
import LinkingDefault from "Linking" /* 4455 */;
import ToastUtils from "ToastUtils" /* 4457 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import Text_Text from "Text/Text" /* 4754 */;
import transitionToChannel from "transitionToChannel" /* 4769 */;
import LinkUtils from "LinkUtils" /* 4912 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5110 */;
import FastImageDefault from "FastImage" /* 5802 */;
import ClipboardUtils from "ClipboardUtils" /* 7436 */;
import MarkupRulesUtils from "MarkupRulesUtils" /* 8359 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8453 */;
import MarkupReactCommandRuleDefault from "MarkupReactCommandRule" /* 11466 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 11704 */;
import SpoilerDefault from "Spoiler" /* 12220 */;
import TimestampDefault from "Timestamp" /* 12222 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4750 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildRoleStore from "GuildRoleStore" /* 2103 */;
import GuildStore from "GuildStore" /* 2067 */;

require = fn;
function MarkupMention(styles) {
  ({ roleStyle, state, node } = styles);
  styles = styles.styles;
  roleId = undefined;
  closure_3 = undefined;
  ({ userId, roleId } = node);
  const guildId = node.guildId;
  let tmp2 = null != guildId;
  if (tmp2) {
    tmp2 = null != roleId;
  }
  closure_3 = tmp2;
  const tmp = closure_22();
  const items = [GuildRoleStore];
  const items1 = [guildId, roleId, tmp2];
  const stateFromStores = node(guildId[34]).useStateFromStores(items, () => {
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
  let tmp9 = tmp2;
  if (tmp2) {
    tmp9 = null != colorString;
  }
  if (tmp9) {
    tmp9 = "username" === roleStyle;
  }
  if (tmp9) {
    let obj2 = { color: colorString, backgroundColor: null };
    const mention = styles.mention;
    let backgroundColor;
    if (mention != null) {
      backgroundColor = mention.backgroundColor;
    }
    if (backgroundColor == null) {
      backgroundColor = tmp3(tmp4[35]).hexWithOpacity(colorString, 0.1);
      const tmp3Result = tmp3(tmp4[35]);
    }
    obj2.backgroundColor = backgroundColor;
    tmp8 = obj2;
  }
  let obj = node(guildId[34]);
  const processColorStringsArray = node(guildId[36]).useProcessColorStringsArray(colorStrings);
  const tmp3Result4 = node(guildId[36]);
  let str2 = "button";
  const isRoleStyleAndRoleColorsEligibleForERC = node(guildId[36]).useIsRoleStyleAndRoleColorsEligibleForERC(guildId, userId, roleStyle, processColorStringsArray);
  if (state.noStyleAndInteraction) {
    str2 = "text";
  }
  let fn;
  if (!state.noStyleAndInteraction) {
    fn = () => {
      if (null != node.roleId) {
        if (null != tmp.guildId) {
          const obj5 = ActionSheetActionCreatorsDefault;
          const obj3 = { guildId: null, roleId: null, channelId: null };
          ({ guildId: obj6.guildId, roleId: obj6.roleId, channelId: obj6.channelId } = tmp);
          obj5.openLazy(asyncRequireImpl(11707, dependencyMap.paths), "RoleMembersActionSheet", obj3, "stack");
        }
      }
      if ("@everyone" === node.roleName) {
        if (null != tmp.guildId) {
          const obj2 = ActionSheetActionCreatorsDefault;
          const tmp12 = asyncRequireImpl(11707, dependencyMap.paths);
          const obj8 = { guildId: tmp.guildId, roleId: SnowflakeUtilsDefault.castGuildIdAsEveryoneGuildRoleId(tmp.guildId), channelId: tmp.channelId };
          obj2.openLazy(tmp12, "RoleMembersActionSheet", obj8, "stack");
        }
      }
      ({ userId, channelId } = node);
      if (null != userId) {
        const obj = { userId, channelId };
        showUserProfileActionSheetDefault(obj);
      } else {
        const obj11 = { title: null, body: null, confirmText: null };
        const intl = util.intl;
        obj11.title = intl.string(util.t.r0DLNm);
        const intl2 = util.intl;
        obj11.body = intl2.string(util.t.Fqqbhg);
        const intl3 = util.intl;
        obj11.confirmText = intl3.string(util.t.BddRzS);
        AlertActionCreatorsDefault.show(obj11);
      }
    };
  }
  let obj3 = { accessibilityRole: str2, style: tmp8, color: null, gradientColors: null, onPress: null, children: null };
  let textColor;
  if (state != null) {
    textColor = state.textColor;
  }
  obj3.color = textColor;
  let tmp16;
  if (tmp2) {
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp16 = processColorStringsArray;
    }
  }
  obj3.gradientColors = tmp16;
  obj3.onPress = fn;
  if (tmp2) {
    tmp2 = "dot" === roleStyle;
  }
  if (tmp2) {
    let obj4 = { guildId, color: colorString, colors: colorStrings, size: "small" };
    tmp2 = closure_17(tmp3(tmp4[27]).RoleDot, obj4);
  }
  const items2 = [tmp2, ];
  const tmp13 = closure_18;
  const tmp14 = closure_21;
  const tmp3Result5 = node(guildId[36]);
  items2[1] = node(guildId[33]).smartOutput(node, styles.output, state);
  obj3.children = items2;
  return tmp13(tmp14, obj3, state.key);
}
let closure_3 = ["children", "color", "variant"];
get_ActivityIndicator = fn(17);
({ PixelRatio: metroRequire, Pressable: closure_7, View: closure_8, Text: closure_9 } = get_ActivityIndicator);
const Constants = fn(1078);
({ EMOJI_CHAT_SIZE, GuildFeatures: closure_14 } = Constants);
const ChannelConstants = fn(2052);
({ StaticChannelRoute: closure_15, StaticChannelId: closure_16 } = ChannelConstants);
const Fonts = fn(1089).Fonts;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const regExp = new RegExp(fn(4753).ANSI_CONTROL_SEQUENCE_RE, "g");
let style = { emoji: { width: EMOJI_CHAT_SIZE, height: EMOJI_CHAT_SIZE, resizeMode: "contain" }, guildIcon: { paddingEnd: 2, paddingBottom: 1 }, list: { paddingTop: 16 }, listItem: { paddingTop: 4 }, bullet: { fontFamily: Fonts.CODE_BOLD }, strong: { fontFamily: Fonts.PRIMARY_BOLD } };
let ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(10);
  if (cResult[0] !== arg0) {
    ({ children, color, variant } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = tmp10;
    cResult[3] = color;
    cResult[4] = variant;
    let tmp7 = variant;
    let tmp6 = color;
    let tmp5 = tmp10;
    let tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  let str = "text-default";
  if (undefined !== tmp6) {
    str = tmp6;
  }
  let str2 = "text-sm/medium";
  if (undefined !== tmp7) {
    str2 = tmp7;
  }
  if (cResult[5] === tmp4) {
    if (cResult[6] === str) {
      if (cResult[7] === tmp5) {
        if (cResult[8] === str2) {
          let tmp11 = cResult[9];
        }
        return tmp11;
      }
    }
  }
  const obj2 = { variant: str2, color: str };
  const merged = Object.assign(tmp5);
  obj2.children = tmp4;
  const tmp13 = constants(Text_Text.Text, obj2);
  cResult[5] = tmp4;
  cResult[6] = str;
  cResult[7] = tmp5;
  cResult[8] = str2;
  cResult[9] = tmp13;
  tmp11 = tmp13;
}) : ((color) => {
  let str = color.color;
  if (str === undefined) {
    str = "text-default";
  }
  let str2 = color.variant;
  if (str2 === undefined) {
    str2 = "text-sm/medium";
  }
  const merged = Object.assign(color, Object.assign({ children: 0, color: 0, variant: 0 }));
  const obj = { variant: str2, color: str };
  const merged1 = Object.assign(merged);
  obj.children = color.children;
  return constants(Text_Text.Text, obj);
});
let closure_21 = tmp7;
const createStyles = fn(4758);
let obj4 = { link: { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.colors.TEXT_LINK }, channelMention: null, channelMentionText: null, mention: null, inlineCode: null, codeBlock: null, blockQuote: null };
let obj5 = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.colors.TEXT_LINK };
obj4.channelMention = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: 3, paddingHorizontal: 2, alignItems: "center" };
let obj6 = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: 3, paddingHorizontal: 2, alignItems: "center" };
obj4.channelMentionText = { color: nativeDefault.colors.MENTION_FOREGROUND };
let obj7 = { color: nativeDefault.colors.MENTION_FOREGROUND };
obj4.mention = { color: nativeDefault.unsafe_rawColors.BRAND_500, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let obj8 = { color: nativeDefault.unsafe_rawColors.BRAND_500, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj4.inlineCode = { fontFamily: Fonts.CODE_BOLD, color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_CODE };
const obj9 = { fontFamily: Fonts.CODE_BOLD, color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_CODE };
obj4.codeBlock = { fontFamily: Fonts.CODE_BOLD, color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_CODE };
const obj10 = { fontFamily: Fonts.CODE_BOLD, color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_CODE };
obj4.blockQuote = { borderLeftWidth: 4, borderLeftColor: nativeDefault.colors.SPINE_DEFAULT, paddingLeft: 8 };
let closure_22 = createStyles.createStyles(obj4);
let c23 = "  ";
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((output) => {
  const cResult = node(568).c(18);
  ({ state, node } = output);
  output = output.output;
  let obj = node(568);
  if (cResult[0] !== node.target) {
    const fn = function n() {
      const target = node.target;
      if (typeof target !== "string") {
        return null;
      } else {
        const url = URLUtilsDefault.safeParseWithQuery(target);
        let formatResult = null;
        if (null != url) {
          formatResult = null;
          if (null != url.protocol) {
            formatResult = null;
            if (null != url.hostname) {
              formatResult = URLUtilsDefault.format(url);
              const tmp3Result = URLUtilsDefault;
            }
          }
        }
        return formatResult;
      }
    };
    cResult[0] = node.target;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  closure_1 = tmp5;
  let str = state.linkVariant;
  if (str == null) {
    str = "text-sm/medium";
  }
  let link = output.styles.link;
  if (!link) {
    link = tmp4.link;
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === node) {
      let tmp6 = cResult[4];
    }
    if (cResult[5] !== tmp5) {
      const fn3 = function p(stopPropagation) {
        const tmp = closure_1();
        if (null != tmp) {
          stopPropagation.stopPropagation();
          const obj = { urlString: tmp };
          showLongPressURLActionSheetDefault(obj);
        }
      };
      cResult[5] = tmp5;
      cResult[6] = fn3;
      let tmp7 = fn3;
    } else {
      tmp7 = cResult[6];
    }
    if (cResult[7] === node) {
      if (cResult[8] === output) {
        if (cResult[9] === state) {
          let tmp8 = cResult[10];
        }
        if (cResult[11] === str) {
          if (cResult[12] === state.key) {
            if (cResult[13] === link) {
              if (cResult[14] === tmp6) {
                if (cResult[15] === tmp7) {
                  if (cResult[16] === tmp8) {
                    let tmp13 = cResult[17];
                  }
                  return tmp13;
                }
              }
            }
          }
        }
        let obj2 = { variant: str, accessibilityRole: "link", style: link, onPress: tmp6, onLongPress: tmp7, children: tmp8 };
        const tmp15 = closure_17(tmp(4754).Text, obj2, state.key);
        cResult[11] = str;
        cResult[12] = state.key;
        cResult[13] = link;
        cResult[14] = tmp6;
        cResult[15] = tmp7;
        cResult[16] = tmp8;
        cResult[17] = tmp15;
        tmp13 = tmp15;
      }
    }
    const obj3 = {};
    const merged = Object.assign(state);
    obj3.inLink = true;
    const smartOutputResult = tmp(8359).smartOutput(node, output, obj3);
    cResult[7] = node;
    cResult[8] = output;
    cResult[9] = state;
    cResult[10] = smartOutputResult;
    tmp8 = smartOutputResult;
    const tmpResult = tmp(8359);
  }
  const fn2 = function h(stopPropagation) {
    const tmp = closure_1();
    closure_0 = tmp;
    if (null != tmp) {
      stopPropagation.stopPropagation();
      const obj2 = {
        href: tmp,
        onConfirm() {
            return LinkingDefault.openURL(closure_0);
          },
        trusted() {
            return node(11736).isLinkTrusted(closure_0);
          }
      };
      node(8646).handleClick(obj2);
      const obj = node(8646);
    }
  };
  cResult[2] = tmp5;
  cResult[3] = node;
  cResult[4] = fn2;
  tmp6 = fn2;
}) : ((arg0) => {
  ({ state, node } = arg0);
  ({ output, styles } = arg0);
  let str = state.linkVariant;
  if (str == null) {
    str = "text-sm/medium";
  }
  let obj = { variant: str, accessibilityRole: "link", style: null, onPress: null, onLongPress: null, children: null };
  let link = styles.link;
  if (!link) {
    link = tmp.link;
  }
  obj.style = link;
  obj.onPress = function onPress(stopPropagation) {
    const target = node.target;
    let tmp = null;
    if (typeof target === "string") {
      const url = URLUtilsDefault.safeParseWithQuery(target);
      let formatResult = null;
      if (null != url) {
        formatResult = null;
        if (null != url.protocol) {
          formatResult = null;
          if (null != url.hostname) {
            formatResult = tmp9(1370).format(url);
            const tmp9Result = tmp9(1370);
          }
        }
      }
      tmp = formatResult;
      tmp9 = importDefault;
    }
    node = tmp;
    if (null != tmp) {
      stopPropagation.stopPropagation();
      const obj = {
        href: tmp,
        onConfirm() {
            return LinkingDefault.openURL(formatResult);
          },
        trusted() {
            return node(11736).isLinkTrusted(formatResult);
          }
      };
      node(8646).handleClick(obj);
      const obj2 = node(8646);
    }
  };
  obj.onLongPress = function onLongPress(stopPropagation) {
    const target = node.target;
    let tmp = null;
    if (typeof target === "string") {
      const url = URLUtilsDefault.safeParseWithQuery(target);
      let formatResult = null;
      if (null != url) {
        formatResult = null;
        if (null != url.protocol) {
          formatResult = null;
          if (null != url.hostname) {
            formatResult = URLUtilsDefault.format(url);
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
  };
  tmp = closure_22();
  const tmp2 = closure_17;
  let obj2 = {};
  const merged = Object.assign(state);
  obj2.inLink = true;
  obj.children = node(8359).smartOutput(node, output, obj2);
  return tmp2(node(4754).Text, obj, state.key);
});
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((styles) => {
  const cResult = c.c(9);
  ({ state, node, output } = styles);
  let blockQuote = styles.styles.blockQuote;
  if (!blockQuote) {
    blockQuote = closure_22().blockQuote;
  }
  if (state != null) {
    const textColor = state.textColor;
  }
  if (cResult[0] === node) {
    if (cResult[1] === output) {
      if (cResult[2] === state) {
        let tmp4 = cResult[3];
      }
      if (cResult[4] === state.key) {
        if (cResult[5] === blockQuote) {
          if (cResult[6] === textColor) {
            if (cResult[7] === tmp4) {
              let tmp6 = cResult[8];
            }
            return tmp6;
          }
        }
      }
      const obj2 = { style: blockQuote, color: textColor, children: tmp4 };
      const tmp9 = constants(closure_21, obj2, state.key);
      cResult[4] = state.key;
      cResult[5] = blockQuote;
      cResult[6] = textColor;
      cResult[7] = tmp4;
      cResult[8] = tmp9;
      tmp6 = tmp9;
    }
  }
  const smartOutputResult = MarkupRulesUtils.smartOutput(node, output, state);
  cResult[0] = node;
  cResult[1] = output;
  cResult[2] = state;
  cResult[3] = smartOutputResult;
  tmp4 = smartOutputResult;
}) : ((state) => {
  state = state.state;
  ({ styles, node, output } = state);
  let blockQuote = styles.blockQuote;
  if (!blockQuote) {
    blockQuote = closure_22().blockQuote;
  }
  const obj = { style: blockQuote, color: null, children: null };
  let textColor;
  if (state != null) {
    textColor = state.textColor;
  }
  obj.color = textColor;
  obj.children = MarkupRulesUtils.smartOutput(node, output, state);
  return constants(closure_21, obj, state.key);
});
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? ((output) => {
  const cResult = node(568).c(17);
  ({ state, node } = output);
  output = output.output;
  const noStyleAndInteraction = state.noStyleAndInteraction;
  let tmp7 = !noStyleAndInteraction;
  let obj = node(568);
  const tmp3 = node;
  if (!noStyleAndInteraction) {
    tmp7 = !state.inLink;
  }
  let str = "text";
  if (tmp7) {
    str = "button";
  }
  const tmp8 = output.styles.inlineCode || closure_22().inlineCode;
  if (cResult[0] === state.inLink) {
    if (cResult[1] === tmp8) {
      let tmp9 = cResult[2];
    }
    if (state != null) {
      const textColor = state.textColor;
    }
    if (cResult[3] === node) {
      if (cResult[4] === tmp7) {
        let tmp12 = cResult[5];
      }
      if (cResult[6] === node) {
        if (cResult[7] === output) {
          if (cResult[8] === state) {
            let tmp13 = cResult[9];
          }
          if (cResult[10] === str) {
            if (cResult[11] === state.key) {
              if (cResult[12] === tmp9) {
                if (cResult[13] === textColor) {
                  if (cResult[14] === tmp12) {
                    if (cResult[15] === tmp13) {
                      let tmp15 = cResult[16];
                    }
                    return tmp15;
                  }
                }
              }
            }
          }
          let obj2 = { accessibilityRole: str, style: tmp9, color: textColor, onPress: tmp12, children: tmp13 };
          const tmp18 = closure_17(closure_21, obj2, state.key);
          cResult[10] = str;
          cResult[11] = state.key;
          cResult[12] = tmp9;
          cResult[13] = textColor;
          cResult[14] = tmp12;
          cResult[15] = tmp13;
          cResult[16] = tmp18;
          tmp15 = tmp18;
        }
      }
      const smartOutputResult = tmp3(8359).smartOutput(node, output, state);
      cResult[6] = node;
      cResult[7] = output;
      cResult[8] = state;
      cResult[9] = smartOutputResult;
      tmp13 = smartOutputResult;
      const tmp3Result = tmp3(8359);
    }
    let fn;
    if (tmp7) {
      fn = () => {
        const content = node.content;
        if (typeof content === "string") {
          ClipboardUtils.copy(content);
          const result = ToastUtils.presentCopiedToClipboard();
        }
      };
    }
    cResult[3] = node;
    cResult[4] = tmp7;
    cResult[5] = fn;
    tmp12 = fn;
  }
  const obj3 = {};
  const merged = Object.assign(tmp8);
  if (state.inLink) {
    delete tmp[tmp2];
  }
  cResult[0] = state.inLink;
  cResult[1] = tmp8;
  cResult[2] = obj3;
  tmp9 = obj3;
}) : ((arg0) => {
  ({ state, node } = arg0);
  ({ styles, output } = arg0);
  const noStyleAndInteraction = state.noStyleAndInteraction;
  let tmp4 = !noStyleAndInteraction;
  if (!noStyleAndInteraction) {
    tmp4 = !state.inLink;
  }
  let str = "text";
  if (tmp4) {
    str = "button";
  }
  const tmp3 = closure_22();
  style = {};
  const merged = Object.assign(styles.inlineCode || closure_22().inlineCode);
  if (state.inLink) {
    delete tmp2[tmp];
  }
  let obj2 = { accessibilityRole: str, style, color: null, onPress: null, children: null };
  let textColor;
  if (state != null) {
    textColor = state.textColor;
  }
  obj2.color = textColor;
  let fn;
  if (tmp4) {
    fn = () => {
      const content = node.content;
      if (typeof content === "string") {
        ClipboardUtils.copy(content);
        const result = ToastUtils.presentCopiedToClipboard();
      }
    };
  }
  obj2.onPress = fn;
  const tmp5 = styles.inlineCode || closure_22().inlineCode;
  const tmp7 = closure_17;
  const tmp8 = closure_21;
  obj2.children = node(8359).smartOutput(node, output, state);
  return tmp7(tmp8, obj2, state.key);
});
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? ((styles) => {
  const cResult = c.c(9);
  ({ state, node, output } = styles);
  let codeBlock = styles.styles.codeBlock;
  if (!codeBlock) {
    codeBlock = closure_22().codeBlock;
  }
  if (state != null) {
    const textColor = state.textColor;
  }
  if (cResult[0] === node) {
    if (cResult[1] === output) {
      if (cResult[2] === state) {
        let tmp4 = cResult[3];
      }
      if (cResult[4] === state.key) {
        if (cResult[5] === codeBlock) {
          if (cResult[6] === textColor) {
            if (cResult[7] === tmp4) {
              let tmp6 = cResult[8];
            }
            return tmp6;
          }
        }
      }
      const obj2 = { style: codeBlock, color: textColor, children: null };
      const items = [tmp4, "\n"];
      obj2.children = items;
      const tmp9 = collapsedCategories(closure_21, obj2, state.key);
      cResult[4] = state.key;
      cResult[5] = codeBlock;
      cResult[6] = textColor;
      cResult[7] = tmp4;
      cResult[8] = tmp9;
      tmp6 = tmp9;
    }
  }
  const smartOutputResult = MarkupRulesUtils.smartOutput(node, output, state);
  cResult[0] = node;
  cResult[1] = output;
  cResult[2] = state;
  cResult[3] = smartOutputResult;
  tmp4 = smartOutputResult;
}) : ((state) => {
  state = state.state;
  ({ styles, node, output } = state);
  let codeBlock = styles.codeBlock;
  if (!codeBlock) {
    codeBlock = closure_22().codeBlock;
  }
  const obj = { style: codeBlock, color: null, children: null };
  let textColor;
  if (state != null) {
    textColor = state.textColor;
  }
  obj.color = textColor;
  const items = [MarkupRulesUtils.smartOutput(node, output, state), "\n"];
  obj.children = items;
  return collapsedCategories(closure_21, obj, state.key);
});
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const obj = c;
  const cResult = obj.c(18);
  ({ state, node, styles } = arg0);
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function o() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  let tmp9 = !stateFromStores;
  if (!stateFromStores) {
    tmp9 = setting;
  }
  if (node.src) {
    let emoji = styles.emoji;
    if (!emoji) {
      emoji = obj.emoji;
    }
    if (cResult[6] !== state.customEmojiOffsetY) {
      let tmp18 = null;
      if (null != state.customEmojiOffsetY) {
        const obj2 = { transform: null };
        const obj3 = { translateY: state.customEmojiOffsetY };
        const items1 = [obj3];
        obj2.transform = items1;
        tmp18 = obj2;
      }
      cResult[6] = state.customEmojiOffsetY;
      cResult[7] = tmp18;
      let tmp17 = tmp18;
    } else {
      tmp17 = cResult[7];
    }
    if (cResult[8] === emoji) {
      if (cResult[9] === tmp17) {
        let tmp19 = cResult[10];
      }
      if (cResult[11] !== node.src) {
        const obj4 = { uri: node.src };
        cResult[11] = node.src;
        cResult[12] = obj4;
        let tmp20 = obj4;
      } else {
        tmp20 = cResult[12];
      }
      if (cResult[13] === tmp9) {
        if (cResult[14] === state.key) {
          if (cResult[15] === tmp19) {
            if (cResult[16] === tmp20) {
              let tmp21 = cResult[17];
            }
            return tmp21;
          }
        }
      }
      const obj5 = { style: tmp19, source: tmp20, enableAnimation: tmp9 };
      const tmp24 = constants(FastImageDefault, obj5, state.key);
      cResult[13] = tmp9;
      cResult[14] = state.key;
      cResult[15] = tmp19;
      cResult[16] = tmp20;
      cResult[17] = tmp24;
      tmp21 = tmp24;
    }
    const items2 = [emoji, tmp17];
    cResult[8] = emoji;
    cResult[9] = tmp17;
    cResult[10] = items2;
    tmp19 = items2;
  } else {
    let textColor;
    if (state != null) {
      textColor = state.textColor;
    }
    if (cResult[2] === state.key) {
      if (cResult[3] === textColor) {
        if (cResult[4] === node.alt) {
          let tmp12 = cResult[5];
        }
        return tmp12;
      }
    }
    const obj6 = { color: textColor, children: node.alt };
    const tmp15 = constants(closure_21, obj6, state.key);
    cResult[2] = state.key;
    cResult[3] = textColor;
    cResult[4] = node.alt;
    cResult[5] = tmp15;
    tmp12 = tmp15;
  }
}) : ((styles) => {
  ({ state, node } = styles);
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  const obj = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (node.src) {
    let emoji = styles.styles.emoji;
    if (!emoji) {
      emoji = obj.emoji;
    }
    const items1 = [emoji, ];
    let tmp12 = null;
    if (null != state.customEmojiOffsetY) {
      const obj2 = { transform: null };
      const obj3 = { translateY: state.customEmojiOffsetY };
      const items2 = [obj3];
      obj2.transform = items2;
      tmp12 = obj2;
    }
    const obj4 = { style: null, source: null, enableAnimation: null };
    items1[1] = tmp12;
    obj4.style = items1;
    const obj5 = { uri: node.src };
    obj4.source = obj5;
    let tmp13 = !stateFromStores;
    if (!stateFromStores) {
      tmp13 = setting;
    }
    obj4.enableAnimation = tmp13;
    let tmp4Result = tmp4(FastImageDefault, obj4, state.key);
  } else {
    let textColor;
    if (state != null) {
      textColor = state.textColor;
    }
    const obj6 = { color: textColor, children: node.alt };
    tmp4Result = tmp4(closure_21, obj6, state.key);
  }
  return tmp4Result;
});
ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? ((state) => {
  const cResult = state(568).c(30);
  state = state.state;
  const node = state.node;
  ({ output, styles } = state);
  const tmp4 = closure_22();
  let str = "button";
  if (state.noStyleAndInteraction) {
    str = "text";
  }
  let str2 = state.variants.channelMentionText;
  if (str2 == null) {
    str2 = "text-xs/medium";
  }
  if (cResult[0] === node.inContent) {
    if (cResult[1] === output) {
      if (cResult[2] === state) {
        let tmp6 = cResult[3];
      }
      if (cResult[4] !== node.inContent) {
        if (null == node.inContent) {
          cResult[4] = node.inContent;
          cResult[5] = null;
          let tmp8 = null;
        } else {
          const obj2 = { themedColor: node(580).colors.MENTION_FOREGROUND, style: null, source: null, size: null };
          const fontScale = closure_6.getFontScale();
          if (fontScale < 1.25) {
            let size = { width: 8, height: 8 };
          } else {
            size = fontScale < 2 ? { width: 12, height: 12 } : { width: 16, height: 16 };
          }
          obj2.style = size;
          obj2.source = node(11685);
          obj2.size = tmp(1181).Icon.Sizes.CUSTOM;
          closure_17(tmp(1181).ThemedIcon, obj2);
        }
      } else {
        tmp8 = cResult[5];
      }
      if (cResult[6] === node) {
        if (cResult[7] === output) {
          if (cResult[8] === state) {
            let tmp15 = cResult[9];
          }
          if (cResult[10] === tmp4.channelMentionText) {
            if (cResult[11] === state.key) {
              if (cResult[12] === str2) {
                if (cResult[13] === tmp6) {
                  if (cResult[14] === tmp8) {
                    if (cResult[15] === tmp15) {
                      let tmp17 = cResult[16];
                    }
                    if (cResult[17] === str) {
                      if (cResult[18] === tmp4.channelMention) {
                        if (cResult[19] === node.channelId) {
                          if (cResult[20] === node.messageId) {
                            if (cResult[21] === state.disablePressableChannelMention) {
                              if (cResult[22] === state.key) {
                                if (cResult[23] === state.mentionPillOffsetY) {
                                  if (cResult[24] === state.noStyleAndInteraction) {
                                    if (cResult[25] === state.shouldCloseModal) {
                                      if (cResult[26] === state.shouldNavigateBack) {
                                        if (cResult[27] === styles) {
                                          if (cResult[28] === tmp17) {
                                            let tmp20 = cResult[29];
                                          }
                                          return tmp20;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    let tmp22Result = tmp17;
                    if (!state.disablePressableChannelMention) {
                      const obj3 = { accessibilityRole: str, style: null, pointerEvents: null, onPress: null, children: null };
                      let channelMention = styles.channel;
                      if (!channelMention) {
                        channelMention = tmp4.channelMention;
                      }
                      const items = [channelMention, ];
                      let tmp24 = null;
                      if (null != state.mentionPillOffsetY) {
                        let obj4 = { transform: null };
                        let obj5 = { translateY: state.mentionPillOffsetY };
                        const items1 = [obj5];
                        obj4.transform = items1;
                        tmp24 = obj4;
                      }
                      items[1] = tmp24;
                      obj3.style = items;
                      let str3 = "auto";
                      if (state.noStyleAndInteraction) {
                        str3 = "none";
                      }
                      obj3.pointerEvents = str3;
                      obj3.onPress = function onPress() {
                        if (!state.noStyleAndInteraction) {
                          ({ channelId, messageId } = node);
                          if (null != channelId) {
                            if (null != messageId) {
                              transitionToChannel.transitionToMessage(channelId, messageId);
                            } else {
                              const channel = ChannelStore.getChannel(channelId);
                              let isGuildVocalResult;
                              if (channel != null) {
                                isGuildVocalResult = channel.isGuildVocal();
                              }
                              if (isGuildVocalResult) {
                                if (obj.canViewChannel(channel)) {
                                  if (tmp3) {
                                    const rootNavigationRef = tmp6(4617).getRootNavigationRef();
                                    if (rootNavigationRef != null) {
                                      rootNavigationRef.goBack();
                                    }
                                    const tmp6Result = tmp6(4617);
                                  }
                                  if (tmp4) {
                                    ModalActionCreatorsDefault.pop();
                                  }
                                }
                                obj = LinkUtils;
                                tmp6 = require;
                              }
                              transitionToChannel.transitionToChannel(channelId);
                            }
                          }
                        }
                        return null;
                      };
                      obj3.children = tmp17;
                      tmp22Result = closure_17(closure_7, obj3, state.key);
                    }
                    cResult[17] = str;
                    cResult[18] = tmp4.channelMention;
                    cResult[19] = node.channelId;
                    cResult[20] = node.messageId;
                    cResult[21] = state.disablePressableChannelMention;
                    cResult[22] = state.key;
                    cResult[23] = state.mentionPillOffsetY;
                    cResult[24] = state.noStyleAndInteraction;
                    cResult[25] = state.shouldCloseModal;
                    cResult[26] = state.shouldNavigateBack;
                    cResult[27] = styles;
                    cResult[28] = tmp17;
                    cResult[29] = tmp22Result;
                    tmp20 = tmp22Result;
                  }
                }
              }
            }
          }
          const obj6 = { variant: str2, style: tmp5, children: null };
          const items2 = [tmp6, tmp8, tmp15];
          obj6.children = items2;
          const tmp19 = closure_18(tmp(4754).Text, obj6, state.key);
          cResult[10] = tmp4.channelMentionText;
          cResult[11] = state.key;
          cResult[12] = str2;
          cResult[13] = tmp6;
          cResult[14] = tmp8;
          cResult[15] = tmp15;
          cResult[16] = tmp19;
          tmp17 = tmp19;
        }
      }
      const smartOutputResult = tmp(8359).smartOutput(node, output, state);
      cResult[6] = node;
      cResult[7] = output;
      cResult[8] = state;
      cResult[9] = smartOutputResult;
      tmp15 = smartOutputResult;
      const tmpResult = tmp(8359);
    }
  }
  let outputResult = null;
  if (null != node.inContent) {
    outputResult = output(node.inContent, state);
  }
  cResult[0] = node.inContent;
  cResult[1] = output;
  cResult[2] = state;
  cResult[3] = outputResult;
  tmp6 = outputResult;
}) : ((state) => {
  state = state.state;
  const node = state.node;
  const output = state.output;
  ({ styles, variants } = state);
  const tmp = closure_22();
  let str = "button";
  if (state.noStyleAndInteraction) {
    str = "text";
  }
  let str2 = variants.channelMentionText;
  if (str2 == null) {
    str2 = "text-xs/medium";
  }
  let obj = { variant: str2, style: tmp.channelMentionText, children: null };
  let outputResult = null;
  if (null != node.inContent) {
    outputResult = output(node.inContent, state);
  }
  const items = [outputResult, , ];
  if (null == node.inContent) {
    items[1] = null;
    items[2] = tmp3(8359).smartOutput(node, output, state);
    obj.children = items;
    const tmp2Result = closure_18(state(4754).Text, obj, state.key);
    let tmp13Result = tmp2Result;
    if (!state.disablePressableChannelMention) {
      const obj2 = { accessibilityRole: str, style: null, pointerEvents: null, onPress: null, children: null };
      let channelMention = styles.channel;
      if (!channelMention) {
        channelMention = tmp.channelMention;
      }
      const items1 = [channelMention, ];
      let tmp15 = null;
      if (null != state.mentionPillOffsetY) {
        const obj3 = { transform: null };
        let obj4 = { translateY: state.mentionPillOffsetY };
        const items2 = [obj4];
        obj3.transform = items2;
        tmp15 = obj3;
      }
      items1[1] = tmp15;
      obj2.style = items1;
      let str3 = "auto";
      if (state.noStyleAndInteraction) {
        str3 = "none";
      }
      obj2.pointerEvents = str3;
      obj2.onPress = function onPress() {
        if (!state.noStyleAndInteraction) {
          ({ channelId, messageId } = node);
          if (null != channelId) {
            if (null != messageId) {
              transitionToChannel.transitionToMessage(channelId, messageId);
            } else {
              const channel = ChannelStore.getChannel(channelId);
              let isGuildVocalResult;
              if (channel != null) {
                isGuildVocalResult = channel.isGuildVocal();
              }
              if (isGuildVocalResult) {
                if (obj.canViewChannel(channel)) {
                  if (tmp3) {
                    const rootNavigationRef = tmp6(4617).getRootNavigationRef();
                    if (rootNavigationRef != null) {
                      rootNavigationRef.goBack();
                    }
                    const tmp6Result = tmp6(4617);
                  }
                  if (tmp4) {
                    ModalActionCreatorsDefault.pop();
                  }
                }
                obj = LinkUtils;
                tmp6 = require;
              }
              transitionToChannel.transitionToChannel(channelId);
            }
          }
        }
        return null;
      };
      obj2.children = tmp2Result;
      tmp13Result = closure_17(closure_7, obj2, state.key);
    }
    return tmp13Result;
  } else {
    let obj5 = { themedColor: node(580).colors.MENTION_FOREGROUND, style: null, source: null, size: null };
    const fontScale = closure_6.getFontScale();
    if (fontScale < 1.25) {
      let size = { width: 8, height: 8 };
    } else {
      size = fontScale < 2 ? { width: 12, height: 12 } : { width: 16, height: 16 };
    }
    obj5.style = size;
    obj5.source = node(11685);
    obj5.size = tmp3(1181).Icon.Sizes.CUSTOM;
    closure_17(tmp3(1181).ThemedIcon, obj5);
  }
});
ReactCompilerGating = fn(558);
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? ((state) => {
  const cResult = state(568).c(25);
  state = state.state;
  const node = state.node;
  const output = state.output;
  ({ styles, variants } = state);
  const tmp4 = closure_22();
  let str = "button";
  if (state.noStyleAndInteraction) {
    str = "text";
  }
  let str2 = variants.channelMentionText;
  if (str2 == null) {
    str2 = "text-xs/medium";
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { themedColor: node(580).colors.MENTION_FOREGROUND, source: node(14112), size: null };
    const fontScale = closure_6.getFontScale();
    if (fontScale < 1) {
      let SMALL = tmp(1181).Icon.Sizes.EXTRA_SMALL_10;
    } else if (fontScale < 1.25) {
      SMALL = tmp(1181).Icon.Sizes.EXTRA_SMALL;
    } else {
      SMALL = tmp(1181).Icon.Sizes.SMALL;
    }
    obj2.size = SMALL;
    obj2 = closure_17(tmp(1181).ThemedIcon, obj2);
    cResult[0] = obj2;
  } else {
    if (cResult[1] === node) {
      if (cResult[2] === output) {
        if (cResult[3] === state) {
          let tmp11 = cResult[4];
        }
        if (cResult[5] === tmp4.channelMentionText) {
          if (cResult[6] === state.key) {
            if (cResult[7] === str2) {
              if (cResult[8] === tmp11) {
                let tmp13 = cResult[9];
              }
              if (state.disablePressableChannelMention) {
                return tmp13;
              } else {
                if (cResult[10] !== state.mentionPillOffsetY) {
                  let tmp18 = null;
                  if (null != state.mentionPillOffsetY) {
                    const obj3 = { transform: null };
                    const obj4 = { translateY: state.mentionPillOffsetY };
                    const items = [obj4];
                    obj3.transform = items;
                    tmp18 = obj3;
                  }
                  cResult[10] = state.mentionPillOffsetY;
                  cResult[11] = tmp18;
                  let tmp17 = tmp18;
                } else {
                  tmp17 = cResult[11];
                }
                if (cResult[12] === (styles.channel || tmp4.channelMention)) {
                  if (cResult[13] === tmp17) {
                    let tmp19 = cResult[14];
                  }
                  let str3 = "auto";
                  if (state.noStyleAndInteraction) {
                    str3 = "none";
                  }
                  if (cResult[15] === node) {
                    if (cResult[16] === state.noStyleAndInteraction) {
                      let tmp20 = cResult[17];
                    }
                    if (cResult[18] === str) {
                      if (cResult[19] === state.key) {
                        if (cResult[20] === str3) {
                          if (cResult[21] === tmp20) {
                            if (cResult[22] === tmp19) {
                              if (cResult[23] === tmp13) {
                                let tmp21 = cResult[24];
                              }
                              return tmp21;
                            }
                          }
                        }
                      }
                    }
                    const obj5 = { accessibilityRole: str, style: tmp19, pointerEvents: str3, onPress: tmp20, children: tmp13 };
                    const tmp24 = closure_17(closure_7, obj5, state.key);
                    cResult[18] = str;
                    cResult[19] = state.key;
                    cResult[20] = str3;
                    cResult[21] = tmp20;
                    cResult[22] = tmp19;
                    cResult[23] = tmp13;
                    cResult[24] = tmp24;
                    tmp21 = tmp24;
                  }
                  const fn = function _(stopPropagation) {
                    if (!state.noStyleAndInteraction) {
                      stopPropagation.stopPropagation();
                      LinkingDefault.openURL(node.attachmentLink);
                    }
                  };
                  cResult[15] = node;
                  cResult[16] = state.noStyleAndInteraction;
                  cResult[17] = fn;
                  tmp20 = fn;
                }
                const items1 = [styles.channel || tmp4.channelMention, tmp17];
                cResult[12] = styles.channel || tmp4.channelMention;
                cResult[13] = tmp17;
                cResult[14] = items1;
                tmp19 = items1;
              }
            }
          }
        }
        const obj6 = { variant: str2, style: tmp4.channelMentionText, children: null };
        const items2 = [tmp5, tmp11];
        obj6.children = items2;
        const tmp15 = closure_18(tmp(4754).Text, obj6, state.key);
        cResult[5] = tmp4.channelMentionText;
        cResult[6] = state.key;
        cResult[7] = str2;
        cResult[8] = tmp11;
        cResult[9] = tmp15;
        tmp13 = tmp15;
      }
    }
    const smartOutputResult = tmp(8359).smartOutput(node, output, state);
    cResult[1] = node;
    cResult[2] = output;
    cResult[3] = state;
    cResult[4] = smartOutputResult;
    tmp11 = smartOutputResult;
    const tmpResult = tmp(8359);
  }
}) : ((state) => {
  state = state.state;
  const node = state.node;
  ({ output, styles, variants } = state);
  const tmp = closure_22();
  let str = "button";
  if (state.noStyleAndInteraction) {
    str = "text";
  }
  let str2 = variants.channelMentionText;
  if (str2 == null) {
    str2 = "text-xs/medium";
  }
  let obj = { variant: str2, style: tmp.channelMentionText, children: null };
  const obj2 = { themedColor: node(580).colors.MENTION_FOREGROUND, source: node(14112), size: null };
  const fontScale = closure_6.getFontScale();
  if (fontScale < 1) {
    let SMALL = tmp3(1181).Icon.Sizes.EXTRA_SMALL_10;
  } else if (fontScale < 1.25) {
    SMALL = tmp3(1181).Icon.Sizes.EXTRA_SMALL;
  } else {
    SMALL = tmp3(1181).Icon.Sizes.SMALL;
  }
  obj2.size = SMALL;
  const items = [closure_17(state(1181).ThemedIcon, obj2), state(8359).smartOutput(node, output, state)];
  obj.children = items;
  const tmp2Result = closure_18(state(4754).Text, obj, state.key);
  let tmp5Result = tmp2Result;
  if (!state.disablePressableChannelMention) {
    const obj3 = { accessibilityRole: str, style: null, pointerEvents: null, onPress: null, children: null };
    let channelMention = styles.channel;
    if (!channelMention) {
      channelMention = tmp.channelMention;
    }
    const items1 = [channelMention, ];
    let tmp10 = null;
    if (null != state.mentionPillOffsetY) {
      const obj4 = { transform: null };
      const obj5 = { translateY: state.mentionPillOffsetY };
      const items2 = [obj5];
      obj4.transform = items2;
      tmp10 = obj4;
    }
    items1[1] = tmp10;
    obj3.style = items1;
    let str3 = "auto";
    if (state.noStyleAndInteraction) {
      str3 = "none";
    }
    obj3.pointerEvents = str3;
    obj3.onPress = function onPress(stopPropagation) {
      if (!state.noStyleAndInteraction) {
        stopPropagation.stopPropagation();
        LinkingDefault.openURL(node.attachmentLink);
      }
    };
    obj3.children = tmp2Result;
    tmp5Result = tmp5(closure_7, obj3, state.key);
  }
  return tmp5Result;
});
ReactCompilerGating = fn(558);
let closure_32 = ReactCompilerGating.isReactCompilerEnabled() ? ((styles) => {
  const cResult = c.c(5);
  ({ state, node, output } = styles);
  const tmp3 = styles.styles.mention || closure_22().mention;
  if (cResult[0] === node) {
    if (cResult[1] === output) {
      if (cResult[2] === state) {
        if (cResult[3] === tmp3) {
          let tmp4 = cResult[4];
        }
        return tmp4;
      }
    }
  }
  const tmp5 = constants(MarkupReactCommandRuleDefault, { node, output, state, style: tmp3 }, state.key);
  cResult[0] = node;
  cResult[1] = output;
  cResult[2] = state;
  cResult[3] = tmp3;
  cResult[4] = tmp5;
  tmp4 = tmp5;
}) : ((state) => {
  state = state.state;
  ({ node, output, styles } = state);
  const obj = { node, output, state, style: null };
  let mention = styles.mention;
  const tmp = closure_22();
  const tmp2 = constants;
  if (!mention) {
    mention = tmp.mention;
  }
  obj.style = mention;
  return tmp2(MarkupReactCommandRuleDefault, obj, state.key);
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/markup/MarkupReactRules.native.tsx");

export default function createRules(styles) {
  if (styles === undefined) {
    styles = {};
  }
  if (arg1 === undefined) {
    let obj2 = {};
  }
  closure_129_0 = undefined;
  let obj3 = styles;
  if (styles === undefined) {
    obj3 = {};
  }
  closure_129_0 = obj3;
  closure_130_0 = undefined;
  closure_130_1 = undefined;
  if (styles === undefined) {
    styles = {};
  }
  let str = arg2;
  closure_130_0 = styles;
  if (arg2 === undefined) {
    str = "username";
  }
  const react = (node, output, noStyleAndInteraction) => {
    if (noStyleAndInteraction.noStyleAndInteraction) {
      let textColor;
      if (noStyleAndInteraction != null) {
        textColor = noStyleAndInteraction.textColor;
      }
      obj2 = { color: textColor, children: MarkupRulesUtils.smartOutput(node, output, noStyleAndInteraction) };
      let tmpResult = tmp(closure_21, obj2, noStyleAndInteraction.key);
    } else {
      styles = { state: noStyleAndInteraction, node, output, styles: null };
      styles.styles = styles;
      tmpResult = tmp(closure_24, styles, noStyleAndInteraction.key);
    }
    return tmpResult;
  };
  closure_130_1 = str;
  return {
    [closure_0(closure_2[46]).AST_KEY.TEXT]: {
      react(content, output, textColor) {
        if (typeof content.content === "string") {
          content = content.content;
        } else {
          textColor = undefined;
          if (textColor != null) {
            textColor = textColor.textColor;
          }
          const obj = { color: textColor, children: null };
          obj.children = obj(8359).smartOutput(content, output, textColor);
          content = closure_1_17(closure_1_21, obj, textColor.key);
          obj2 = obj(8359);
        }
        return content;
      }
    },
    [closure_0(closure_2[46]).AST_KEY.STRIKETHROUGH]: {
      react(node, output, textColor) {
        const obj = { style: { textDecorationLine: "line-through" }, color: null, variant: null, children: null };
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj.color = textColor;
        obj.variant = textColor.textVariant;
        obj.children = obj(8359).smartOutput(node, output, textColor);
        return closure_1_17(closure_1_21, obj, textColor.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.UNDERLINE]: {
      react(node, output, textColor) {
        const obj = { style: { textDecorationLine: "underline" }, color: null, variant: null, children: null };
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj.color = textColor;
        obj.variant = textColor.textVariant;
        obj.children = obj(8359).smartOutput(node, output, textColor);
        return closure_1_17(closure_1_21, obj, textColor.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.ITALICS]: {
      react(node, output, textColor) {
        const em = obj.em;
        let str;
        if (em != null) {
          str = em.fontStyle;
        }
        if (str == null) {
          str = "italic";
        }
        obj = { style: { fontStyle: str }, color: null, variant: null, children: null };
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj.color = textColor;
        obj.variant = textColor.textVariant;
        obj.children = MarkupRulesUtils.smartOutput(node, output, textColor);
        return constants(closure_21, obj, textColor.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.STRONG]: {
      react(node, output, textColor) {
        let strong = obj.strong;
        if (!strong) {
          strong = obj.strong;
        }
        obj = { style: strong, color: null, variant: null, children: null };
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj.color = textColor;
        obj.variant = textColor.textVariant;
        obj.children = MarkupRulesUtils.smartOutput(node, output, textColor);
        return constants(closure_21, obj, textColor.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.LINK]: { react },
    [closure_0(closure_2[46]).AST_KEY.URL]: { react },
    [closure_0(closure_2[46]).AST_KEY.AUTOLINK]: { react },
    [closure_0(closure_2[46]).AST_KEY.LINE_BREAK]: {
      react(arg0, arg1, textColor) {
        let color;
        if (textColor != null) {
          color = textColor.textColor;
        }
        return closure_1_17(closure_1_21, { color, children: "\n" }, textColor.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.HIGHLIGHT]: {
      react(node, output, textColor) {
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj = { color: textColor, children: obj(8359).smartOutput(node, output, textColor) };
        return closure_1_17(closure_1_21, obj, textColor.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.BLOCK_QUOTE]: {
      react(node, output, state) {
        styles = { styles, state, node, output };
        return constants(closure_26, styles, state.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.PARAGRAPH]: {
      order: 600,
      react(node, output, textColor) {
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj = { color: textColor, children: obj(8359).smartOutput(node, output, textColor) };
        return closure_1_17(closure_1_21, obj, textColor.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.EMOJI]: {
      react(surrogate, arg1, key) {
        let children = surrogate.surrogate;
        if (!children) {
          children = surrogate.content;
        }
        return closure_1_17(closure_1_9, { children }, key.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.CUSTOM_EMOJI]: {
      react(node, arg1, state) {
        styles = { state, node, styles };
        return constants(closure_29, styles, state.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.SPOILER]: {
      react(node, output, key) {
        obj = { spoilerStyle: obj.spoiler, spoilerRevealedStyle: obj.spoilerRevealed, children: null };
        const tmp = SpoilerDefault;
        obj.children = MarkupRulesUtils.smartOutput(node, output, key);
        return constants(tmp, obj, key.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.STATIC_ROUTE_LINK]: {
      react(channelId, output, textColor) {
        closure_0 = channelId;
        let obj = MarkupRulesUtils;
        if (obj.isStaticRouteIconType(channelId.channelId)) {
          let SignPostIcon = tmp(14113).SignPostIcon;
          channelId = channelId.channelId;
          if (constants.GUILD_HOME !== channelId) {
            if (tmp4.SERVER_GUIDE !== channelId) {
              if (tmp4.CHANNEL_BROWSER !== channelId) {
                if (tmp4.CUSTOMIZE_COMMUNITY !== channelId) {
                  if (tmp4.LINKED_ROLES === channelId) {
                    SignPostIcon = tmp(4700).LinkIcon;
                  }
                }
              }
              SignPostIcon = tmp(14115).ChannelListMagnifyingGlassIcon;
            }
            obj2 = { accessibilityRole: "button", style: obj.staticRouteLink, color: null, onPress: null, children: null };
            textColor = undefined;
            if (textColor != null) {
              textColor = textColor.textColor;
            }
            obj2.color = textColor;
            obj2.onPress = function onPress() {
              ({ guildId, channelId } = closure_0);
              guild = guild.getGuild(guildId);
              let hasItem = null != guildId && null != guild;
              if (hasItem) {
                const features = guild.features;
                hasItem = features.has(constants.COMMUNITY);
              }
              if (hasItem) {
                if (!tmp4) {
                  obj = obj(4769);
                  const result = obj.transitionToStaticChannelRoute(guildId, constants2.GUILD_HOME);
                }
                tmp4 = channelId !== constants3.GUILD_HOME && channelId !== constants3.SERVER_GUIDE;
              }
            };
            const obj3 = { style: obj.staticRouteLinkIcon, size: "sm" };
            const items = [closure_2_17(SignPostIcon, obj3), tmp(8359).smartOutput(channelId, output, textColor)];
            obj2.children = items;
            return collapsedCategories(closure_21, obj2, textColor.key);
          }
          SignPostIcon = tmp(14113).SignPostIcon;
        } else {
          return null;
        }
      }
    },
    [closure_0(closure_2[46]).AST_KEY.INLINE_CODE]: {
      react(node, output, state) {
        styles = { styles, state, node, output };
        return constants(closure_27, styles, state.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.CODE_BLOCK]: {
      parse(arg0, arg1, arg2) {
        obj = obj2(5211).RULES[obj(undefined, 5209).AST_KEY.CODE_BLOCK];
        const parsed = obj.parse(arg0, arg1, arg2);
        if ("ansi" === str.toLowerCase()) {
          const content = parsed.content;
          parsed.content = content.replaceAll(regExp, "");
        }
        return parsed;
      },
      react(node, output, state) {
        styles = { styles, state, node, output };
        return constants(closure_28, styles, state.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.MENTION]: {
      react: (node, output, state) => {
        styles = { roleStyle: obj2, state, node, output, styles };
        return constants(MarkupMention, styles, state.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.CHANNEL_MENTION]: {
      react(node, output, state) {
        styles = { styles, state, node, output, variants: obj2 };
        return constants(closure_30, styles, state.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.ATTACHMENT_LINK]: {
      react(node, output, state) {
        styles = { styles, state, node, output, variants: obj2 };
        return constants(closure_31, styles, state.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.SOUNDBOARD]: {
      react(node, output, key) {
        const obj = { variant: "text-md/bold", children: null };
        const items = ["<sound:", obj(8359).smartOutput(node, output, key), ">"];
        obj.children = items;
        return closure_1_18(obj(4754).Text, obj, key.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.GUILD]: {
      react(icon, output, textColor) {
        obj = obj(1368);
        let num = 2;
        if (!obj.isAndroid()) {
          let num3 = 0;
          if (closure_1_6.getFontScale() < 1.5) {
            num3 = 1;
          }
          num = num3;
        }
        if (null == icon.icon) {
          textColor = undefined;
          if (textColor != null) {
            textColor = textColor.textColor;
          }
          obj2 = { color: textColor, children: null };
          const obj3 = { style: style.guildIcon, children: null };
          const items = [closure_1_17(closure_1_8, obj3), ];
          let textColor1;
          if (textColor != null) {
            textColor1 = textColor.textColor;
          }
          const obj4 = { color: textColor1, children: tmp(8359).smartOutput(icon, output, textColor) };
          items[1] = closure_1_17(closure_1_21, obj4);
          obj2.children = items;
          return closure_1_18(closure_1_21, obj2, textColor.key);
        } else {
          const obj5 = { style: null, icon: null, size: null };
          const obj6 = { top: num };
          obj5.style = obj6;
          obj5.icon = icon.icon;
          const fontScale = closure_1_6.getFontScale();
          if (fontScale < 1) {
            let XXSMALL = tmp(5799).GuildIconSizes.XXXSMALL;
          } else if (fontScale < 1.25) {
            XXSMALL = tmp(5799).GuildIconSizes.XXSMALL_12;
          } else {
            XXSMALL = tmp(5799).GuildIconSizes.XXSMALL;
          }
          obj5.size = XXSMALL;
          closure_1_17(obj2(5799), obj5);
          const tmp6 = obj2(5799);
        }
      }
    },
    [closure_0(closure_2[46]).AST_KEY.CHANNEL]: {
      react(iconType, output, textColor) {
        let str = iconType.iconType;
        if (str == null) {
          str = "text";
        }
        let num = 2;
        if ("text" === str) {
          num = 0;
        }
        const obj = { themedColor: obj2(580).colors.MENTION_FOREGROUND, source: null, size: null, style: null };
        obj2 = obj(5241);
        obj.source = obj2.getChannelMentionIcon(str);
        const fontScale = closure_1_6.getFontScale();
        if (fontScale < 1) {
          let SMALL = tmp2(1181).Icon.Sizes.EXTRA_SMALL_10;
        } else if (fontScale < 1.25) {
          SMALL = tmp2(1181).Icon.Sizes.EXTRA_SMALL;
        } else {
          SMALL = tmp2(1181).Icon.Sizes.SMALL;
        }
        obj.size = SMALL;
        obj.style = { top: 1 };
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        const obj3 = { color: textColor, children: null };
        const tmp6 = closure_1_18;
        const tmp7 = closure_1_21;
        const tmpResult = closure_1_17(obj(1181).ThemedIcon, obj);
        const items = [closure_1_17(closure_1_8, { style: { paddingEnd: num }, children: closure_1_17(obj(1181).ThemedIcon, obj) }), ];
        const obj4 = { style: { paddingEnd: num }, children: closure_1_17(obj(1181).ThemedIcon, obj) };
        items[1] = obj(8359).smartOutput(iconType, output, textColor);
        obj3.children = items;
        return tmp6(tmp7, obj3, textColor.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.COMMAND_MENTION]: {
      react(node, output, state) {
        styles = { styles, state, node, output };
        return constants(closure_32, styles, state.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.GAME_MENTION]: {
      react(node, arg1, state) {
        return closure_1_17(obj2(14117), { node, state }, state.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.TIMESTAMP]: {
      react(node, arg1, key) {
        obj = { node, style: obj.timestamp };
        return constants(TimestampDefault, obj, key.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.LIST]: {
      react(start, arg1, level) {
        closure_1 = arg1;
        dependencyMap = level;
        const start2 = start;
        closure_5 = null != start.start ? start.start : level.start;
        if (level.formatInline) {
          let textColor;
          if (level != null) {
            textColor = level.textColor;
          }
          obj2 = { color: textColor, children: null };
          let items = start.items;
          obj2.children = items.map((item, index) => {
            let str = "\u2022 ";
            if (true === start.ordered) {
              str = "\u2022 ";
              if (null != closure_5) {
                const _HermesInternal = HermesInternal;
                str = "" + closure_5 + index + ". ";
              }
            }
            const children = [str, , ];
            const obj = {};
            const merged = Object.assign(level);
            obj.key = "" + level.key + "-" + index;
            children[1] = closure_1(item, obj);
            let str4 = " ";
            if (index !== start.items.length - 1) {
              str4 = closure_2_23;
            }
            children[2] = str4;
            return closure_2_18(React.Fragment, { children }, "list-" + level.key + "-item-" + index);
          });
          let _HermesInternal2 = HermesInternal;
          return closure_17(closure_21, obj2, "list-" + level.key);
        } else {
          let items1 = start.items;
          let mapped = items1.map((arr, index) => {
            start = arr;
            if (0 !== num) {
              obj2 = {};
              const merged = Object.assign(level);
              const _HermesInternal2 = HermesInternal;
              let str5 = "";
              obj2.key = "" + level.key + "-" + index;
              obj2.level = tmp + 1;
              let sum = closure_5;
              if (null != closure_5) {
                sum = closure_5 + 1;
              }
              obj2.start = sum;
              const obj3 = { style: list.listItem, variant: "text-sm/medium", children: null };
              const obj4 = { style: list.bullet, color: null, children: null };
              let textColor;
              if (level != null) {
                textColor = tmp8.textColor;
              }
              obj4.color = textColor;
              let repeatResult = str5;
              if (tmp > 0) {
                repeatResult = closure_1_23.repeat(tmp);
              }
              const items = [repeatResult, "\u26AC "];
              obj4.children = items;
              const _HermesInternal3 = HermesInternal;
              const items1 = [closure_1_18(closure_1_21, obj4, "list-" + level.key + "-item-" + index + "-bullet"), , ];
              const _Array = Array;
              if (Array.isArray(arr)) {
                let mapped = arr.map((type, index) => {
                  let str = tmp;
                  const sum = index + 1;
                  if ("list" === type.type) {
                    str = "\n";
                  }
                  let str2 = sum === closure_0.length;
                  const children = [str, obj2(type, obj2), ];
                  if (str2) {
                    str2 = !tmp;
                  }
                  if (str2) {
                    str2 = "\n";
                  }
                  children[2] = str2;
                  return closure_3_18(React.Fragment, { children }, index);
                });
              } else {
                mapped = obj2(arr, obj2);
              }
              items1[1] = mapped;
              if (start2.items.length !== index + 1) {
                str5 = closure_1_23;
              }
              items1[2] = str5;
              obj3.children = items1;
              const _HermesInternal4 = HermesInternal;
              return closure_1_18(start(level[14]).Text, obj3, "list-" + level.key + "-item-" + index);
            } else {
              let str = start2.ordered;
              if (typeof str === "boolean") {
                if (start2.ordered) {
                  str = closure_5;
                }
                const _HermesInternal = HermesInternal;
                const sum1 = str + index;
                str = "";
                let str2 = "" + sum1 + ". ";
              }
              str2 = "\u25CF ";
              if (obj.isAndroid()) {
                str2 = "\u2022 ";
              }
              obj = start(level[52]);
            }
          });
          let obj = { style: list.list, variant: "text-sm/medium", children: mapped };
          let _HermesInternal = HermesInternal;
          return closure_17(start(4754).Text, obj, "list-" + level.key);
        }
      }
    },
    [closure_0(closure_2[46]).AST_KEY.HEADING]: {
      react(level, output, formatInline) {
        if (formatInline.formatInline) {
          let textColor;
          if (formatInline != null) {
            textColor = formatInline.textColor;
          }
          obj2 = { variant: "text-sm/semibold", color: textColor, children: null };
          const obj3 = {};
          const merged = Object.assign(formatInline);
          obj3.textVariant = "text-sm/semibold";
          const items = [obj(8359).smartOutput(level, output, obj3), " "];
          obj2.children = items;
          return closure_1_18(closure_1_21, obj2, formatInline.key);
        } else {
          let str = "heading-xl/bold";
          if (1 !== level.level) {
            let str2 = "heading-md/bold";
            if (2 === level.level) {
              str2 = "heading-lg/bold";
            }
            str = str2;
          }
          obj = { variant: str, color: null, children: null };
          let str3 = "text-strong";
          if (formatInline.forceWhite) {
            str3 = "text-overlay-light";
          }
          obj.color = str3;
          const obj4 = {};
          const merged1 = Object.assign(formatInline);
          obj4.textVariant = str;
          const items1 = [obj(8359).smartOutput(level, output, obj4), "\n"];
          obj.children = items1;
          return closure_1_18(obj(4754).Text, obj, formatInline.key);
        }
      }
    },
    [closure_0(closure_2[46]).AST_KEY.SUBTEXT]: {
      react(node, output, key) {
        const obj = { variant: "text-sm/normal", color: "text-muted", children: null };
        const items = [obj(8359).smartOutput(node, output, key), "\n"];
        obj.children = items;
        return closure_1_18(obj(4754).Text, obj, key.key);
      }
    },
    [closure_0(closure_2[46]).AST_KEY.SILENT_PREFIX]: {
      react(content, output, textColor) {
        if (typeof content.content === "string") {
          content = content.content;
        } else {
          textColor = undefined;
          if (textColor != null) {
            textColor = textColor.textColor;
          }
          const obj = { color: textColor, children: null };
          obj.children = obj(8359).smartOutput(content, output, textColor);
          content = closure_1_17(closure_1_21, obj, textColor.key);
          obj2 = obj(8359);
        }
        return content;
      }
    }
  };
};
export const MarkupText = tmp7;
export const plainMentionRenderer = function plainMentionRenderer(content, output, state) {
  if (typeof content.content === "string") {
    content = content.content;
  } else {
    content = MarkupRulesUtils.smartOutput(content, output, state);
  }
  return content;
};
export const plainSpoilerRenderer = function plainSpoilerRenderer(content) {
  let str = "\u2588\u2588\u2588";
  if (typeof content.content === "string") {
    str = content.content.replace(/[^\n]/g, "\u2588");
  }
  return str;
};
export const createFetchingGameMentionRule = fn(14117).createFetchingGameMentionRule;
