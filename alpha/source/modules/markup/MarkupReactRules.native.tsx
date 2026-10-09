// Module ID: 5079
// Function ID: 5080
// Name: MarkupReactRules
// Dependencies: [109, 19, 17, 5080, 2064, 2118, 1085, 2071, 1096, 21, 5086, 558, 576, 5087, 5091, 587, 5102, 5419, 4938, 5941, 8287, 5298, 1126, 6879, 4767, 6165, 1200, 1384, 8474, 4765, 9589, 9644, 8109, 504, 4928, 7961, 5055, 10710, 2000, 11, 2041, 6163, 10680, 13984, 13986, 5040, 10663, 13988, 10584, 5397, 11720, 5399, 1382, 8142, 13989, 11722, 2]
// Exports: default, plainMentionRenderer, plainSpoilerRenderer

// Module 5079 (MarkupReactRules)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 1096 */;
import intl4 from "intl" /* 1126 */;
import URLUtilsDefault from "URLUtils" /* 1384 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import UserSettings from "UserSettings" /* 2041 */;
import ChannelConstants from "ChannelConstants" /* 2071 */;
import LinkingDefault from "Linking" /* 4765 */;
import ToastUtils from "ToastUtils" /* 4767 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import HighlightJsAnsiLanguage from "HighlightJsAnsiLanguage" /* 5086 */;
import transitionToChannel from "transitionToChannel" /* 5102 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5298 */;
import LinkUtils from "LinkUtils" /* 5419 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import FastImageDefault from "FastImage" /* 6163 */;
import ClipboardUtils from "ClipboardUtils" /* 6879 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8287 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 9644 */;
import MarkupReactCommandRuleDefault from "MarkupReactCommandRule" /* 10584 */;
import openStaticChannelRouteDefault from "openStaticChannelRoute" /* 10663 */;
import SpoilerDefault from "Spoiler" /* 11720 */;
import TimestampDefault from "Timestamp" /* 11722 */;
import MarkupReactGameMentionRule from "MarkupReactGameMentionRule" /* 13989 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildRoleStore from "GuildRoleStore" /* 2118 */;
import Fragment_mod from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles_mod from "createStyles" /* 5091 */;
import size_mod from "module_2" /* 2 */;

let importDefault;

let c9;
let closure_14;
let closure_15;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let tmp;
const get_initialized = tmp(504);
const Text_Text = tmp(5087);
const MarkupRulesUtils = tmp(8109);
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
  closure_3 = undefined;
  const output = styles.output;
  ({ userId, roleId } = node);
  const guildId = node.guildId;
  let tmp2 = null != guildId;
  const tmp = closure_19();
  if (tmp2) {
    tmp2 = null != roleId;
  }
  closure_3 = tmp2;
  let tmp4 = guildId;
  let obj = node(guildId[33]);
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
      const tmp3Result = node(tmp4[34]);
      backgroundColor = tmp3Result.hexWithOpacity(colorString, 0.1);
    }
    mention = obj2;
  }
  const tmp3Result4 = node(tmp4[35]);
  const processColorStringsArray = tmp3Result4.useProcessColorStringsArray(colorStrings);
  let str2 = "button";
  const tmp3Result5 = node(tmp4[35]);
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
          obj4.openLazy(asyncRequire(10710, dependencyMap.paths), "RoleMembersActionSheet", obj2, "stack");
        }
      }
      if ("@everyone" === node.roleName) {
        if (null != node.guildId) {
          const openLazy = ActionSheetActionCreatorsDefault.openLazy;
          const tmp13 = asyncRequire(10710, dependencyMap.paths);
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
  let tmp13 = closure_18;
  const tmp12 = closure_15;
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
    tmp2 = closure_14(tmp3(tmp4[26]).RoleDot, obj4);
  }
  items2 = [tmp2, ];
  const tmp3Result6 = node(tmp4[32]);
  items2[1] = tmp3Result6.smartOutput(node, output, state);
  return tmp12(tmp13, obj3, state.key);
}
let closure_3 = ["children", "color", "variant"];
let react = react_mod;
({ PixelRatio: metroRequire, Pressable: metroImportDefault, View: metroImportAll, Text: c9 } = react_native);
const EMOJI_CHAT_SIZE = Constants.EMOJI_CHAT_SIZE;
const StaticChannelId = ChannelConstants.StaticChannelId;
const Fonts = Constants2.Fonts;
let Fragment = Fragment_mod;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
const regExp = new RegExp(HighlightJsAnsiLanguage.ANSI_CONTROL_SEQUENCE_RE, "g");
let style = { emoji: { width: EMOJI_CHAT_SIZE, height: EMOJI_CHAT_SIZE, resizeMode: "contain" }, guildIcon: { paddingEnd: 2, paddingBottom: 1 }, staticRouteLinkIcon: { paddingEnd: 2, top: 1 }, list: { paddingTop: 16 }, listItem: { paddingTop: 4 }, bullet: { fontFamily: Fonts.CODE_BOLD }, strong: { fontFamily: Fonts.PRIMARY_BOLD } };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function MarkupText(arg0) {
  let children;
  let color;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let variant;
  const obj = react2;
  const cResult = obj.c(10);
  if (cResult[0] !== arg0) {
    ({ children, color, variant } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = tmp10;
    cResult[3] = color;
    cResult[4] = variant;
    tmp7 = variant;
    tmp6 = color;
    tmp5 = tmp10;
    tmp4 = children;
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
        let tmp11;
        if (cResult[8] === str2) {
          tmp11 = cResult[9];
        }
        return tmp11;
      }
    }
  }
  const obj2 = { variant: str2, color: str, children: tmp4 };
  const Text = Text_Text.Text;
  const merged = Object.assign(tmp5);
  const tmp13 = authStore3(Text, obj2);
  cResult[5] = tmp4;
  cResult[6] = str;
  cResult[7] = tmp5;
  cResult[8] = str2;
  cResult[9] = tmp13;
  tmp11 = tmp13;
}) : (function MarkupText(color) {
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
  return authStore3(Text, obj);
});
let closure_18 = tmp5;
let createStyles = createStyles_mod;
let obj2 = { link: obj3, channelMention: obj4, channelMentionText: obj5, mention: obj6, inlineCode: obj7, codeBlock: obj8, blockQuote: obj9 };
obj3 = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.colors.TEXT_LINK };
createStyles = createStyles.createStyles;
obj4 = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: 3, paddingHorizontal: 2, alignItems: "center" };
obj5 = { color: nativeDefault.colors.MENTION_FOREGROUND };
obj6 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND };
obj7 = { fontFamily: Fonts.CODE_BOLD, color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_CODE };
obj8 = { fontFamily: Fonts.CODE_BOLD, color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_CODE };
obj9 = { borderLeftWidth: 4, borderLeftColor: nativeDefault.colors.SPINE_DEFAULT, paddingLeft: 8 };
let closure_19 = createStyles(obj2);
let c20 = "  ";
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function MarkupLink(output) {
  let closure_1;
  let node;
  let state;
  let tmp5;
  let tmp = node;
  let obj = node(576);
  const cResult = obj.c(18);
  ({ state, node } = output);
  output = output.output;
  const styles = output.styles;
  const tmp4 = closure_19();
  if (cResult[0] !== node.target) {
    function getValidatedUrl() {
      const target = node.target;
      if (typeof target !== "string") {
        return null;
      } else {
        const obj2 = URLUtilsDefault;
        const url = obj2.safeParseWithQuery(target);
        let formatResult = null;
        const tmp3 = importDefault;
        if (null != url) {
          formatResult = null;
          if (null != url.protocol) {
            formatResult = null;
            if (null != url.hostname) {
              const tmp3Result = tmp3(1384);
              formatResult = tmp3Result.format(url);
            }
          }
        }
        return formatResult;
      }
    }
    cResult[0] = node.target;
    cResult[1] = getValidatedUrl;
    tmp5 = getValidatedUrl;
  } else {
    tmp5 = cResult[1];
  }
  importDefault = tmp5;
  let str = state.linkVariant;
  if (str == null) {
    str = "text-sm/medium";
  }
  let link = styles.link;
  if (link == null) {
    link = tmp4.link;
  }
  if (cResult[2] === tmp5) {
    if (cResult[5] !== tmp5) {
      class I {
        constructor(stopPropagation) {
          const tmp = closure_1();
          if (null != tmp) {
            stopPropagation.stopPropagation();
            const obj = { urlString: tmp };
            showLongPressURLActionSheetDefault(obj);
          }
        }
      }
      cResult[5] = tmp5;
      cResult[6] = I;
    } else {
      class I {
        constructor(stopPropagation) {
          const tmp = closure_1();
          if (null != tmp) {
            stopPropagation.stopPropagation();
            const obj = { urlString: tmp };
            showLongPressURLActionSheetDefault(obj);
          }
        }
      }
    }
    if (cResult[7] === node) {
      class I {
        constructor(stopPropagation) {
          const tmp = closure_1();
          if (null != tmp) {
            stopPropagation.stopPropagation();
            const obj = { urlString: tmp };
            showLongPressURLActionSheetDefault(obj);
          }
        }
      }
    }
    let obj2 = { inLink: true };
    const smartOutput = tmp(8109).smartOutput;
    tmp(8109);
    const merged = Object.assign(state);
    cResult[7] = node;
    cResult[8] = output;
    cResult[9] = state;
    cResult[10] = smartOutput(node, output, obj2);
    const smartOutputResult = smartOutput(node, output, obj2);
  }
  const fn = function h(stopPropagation) {
    const tmp = closure_1();
    let closure_0 = tmp;
    if (null != tmp) {
      stopPropagation.stopPropagation();
      let obj = node(dependencyMap[28]);
      const obj2 = {
        href: tmp,
        onConfirm() {
            const obj = LinkingDefault;
            return obj.openURL(closure_0);
          },
        trusted() {
            const obj = node(dependencyMap[30]);
            return obj.isLinkTrusted(closure_0);
          }
      };
      obj.handleClick(obj2);
    }
  };
  cResult[2] = tmp5;
  cResult[3] = node;
  cResult[4] = fn;
}) : (function MarkupLink(arg0) {
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
  let tmp = closure_19();
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
              const tmp9Result = tmp9(dependencyMap[27]);
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
              const obj = node(dependencyMap[30]);
              return obj.isLinkTrusted(node);
            }
        };
        const obj2 = node(dependencyMap[28]);
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
  const Text = node(5087).Text;
  const tmp2 = closure_14;
  if (link == null) {
    link = tmp.link;
  }
  obj2 = { inLink: true };
  smartOutput = tmp3(8109).smartOutput;
  node(8109);
  const merged = Object.assign(state);
  return tmp2(Text, obj, state.key);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function MarkupBlockQuote(styles) {
  let node;
  let output;
  let state;
  let textColor;
  const obj = react2;
  const cResult = obj.c(9);
  ({ state, node, output } = styles);
  let blockQuote = styles.styles.blockQuote;
  const key = state.key;
  if (blockQuote == null) {
    blockQuote = closure_19().blockQuote;
  }
  if (state != null) {
    textColor = state.textColor;
  }
  if (cResult[0] === node) {
    if (cResult[1] === output) {
      let tmp4;
      if (cResult[2] === state) {
        tmp4 = cResult[3];
      }
      if (cResult[4] === state.key) {
        if (cResult[5] === blockQuote) {
          if (cResult[6] === textColor) {
            let tmp6;
            if (cResult[7] === tmp4) {
              tmp6 = cResult[8];
            }
            return tmp6;
          }
        }
      }
      const obj2 = { style: blockQuote, color: textColor, children: tmp4 };
      const tmp9 = authStore3(closure_18, obj2, key);
      cResult[4] = state.key;
      cResult[5] = blockQuote;
      cResult[6] = textColor;
      cResult[7] = tmp4;
      cResult[8] = tmp9;
      tmp6 = tmp9;
    }
  }
  const tmpResult = MarkupRulesUtils;
  const smartOutputResult = tmpResult.smartOutput(node, output, state);
  cResult[0] = node;
  cResult[1] = output;
  cResult[2] = state;
  cResult[3] = smartOutputResult;
  tmp4 = smartOutputResult;
}) : (function MarkupBlockQuote(state) {
  let node;
  let obj2;
  let output;
  let styles;
  let textColor;
  state = state.state;
  ({ styles, node, output } = state);
  let blockQuote = styles.blockQuote;
  const tmp = authStore3;
  const tmp2 = closure_18;
  if (blockQuote == null) {
    blockQuote = closure_19().blockQuote;
  }
  const obj = { style: blockQuote, color: textColor, children: obj2.smartOutput(node, output, state) };
  textColor = undefined;
  if (state != null) {
    textColor = state.textColor;
  }
  obj2 = MarkupRulesUtils;
  return tmp(tmp2, obj, state.key);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function MarkupInlineCode(output) {
  let node;
  let state;
  let obj = node(576);
  const cResult = obj.c(17);
  const tmp = node;
  ({ state, node } = output);
  output = output.output;
  const styles = output.styles;
  const noStyleAndInteraction = state.noStyleAndInteraction;
  let tmp5 = !noStyleAndInteraction;
  const tmp4 = closure_19();
  if (!noStyleAndInteraction) {
    tmp5 = !state.inLink;
  }
  let str = "text";
  if (tmp5) {
    str = "button";
  }
  let inlineCode = styles.inlineCode;
  if (inlineCode == null) {
    inlineCode = tmp4.inlineCode;
  }
  if (cResult[0] === state.inLink) {
    let tmp6;
    let textColor;
    if (cResult[1] === inlineCode) {
      tmp6 = cResult[2];
    }
    const key = state.key;
    if (state != null) {
      textColor = state.textColor;
    }
    if (cResult[3] === node) {
      let tmp8;
      if (cResult[4] === tmp5) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === node) {
        if (cResult[7] === output) {
          let tmp9;
          if (cResult[8] === state) {
            tmp9 = cResult[9];
          }
          if (cResult[10] === str) {
            if (cResult[11] === state.key) {
              if (cResult[12] === tmp6) {
                if (cResult[13] === textColor) {
                  if (cResult[14] === tmp8) {
                    let tmp11;
                    if (cResult[15] === tmp9) {
                      tmp11 = cResult[16];
                    }
                    return tmp11;
                  }
                }
              }
            }
          }
          const obj3 = { accessibilityRole: str, style: tmp6, color: textColor, onPress: tmp8, children: tmp9 };
          const tmp14 = closure_14(closure_18, obj3, key);
          cResult[10] = str;
          cResult[11] = state.key;
          cResult[12] = tmp6;
          cResult[13] = textColor;
          cResult[14] = tmp8;
          cResult[15] = tmp9;
          cResult[16] = tmp14;
          tmp11 = tmp14;
        }
      }
      const tmpResult = tmp(8109);
      const smartOutputResult = tmpResult.smartOutput(node, output, state);
      cResult[6] = node;
      cResult[7] = output;
      cResult[8] = state;
      cResult[9] = smartOutputResult;
      tmp9 = smartOutputResult;
    }
    let fn;
    if (tmp5) {
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
    cResult[3] = node;
    cResult[4] = tmp5;
    cResult[5] = fn;
    tmp8 = fn;
  }
  const obj4 = {};
  const merged = Object.assign(inlineCode);
  if (state.inLink) {
    delete obj2["color"];
  }
  cResult[0] = state.inLink;
  cResult[1] = inlineCode;
  cResult[2] = obj4;
  tmp6 = obj4;
}) : (function MarkupInlineCode(arg0) {
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
  const tmp = closure_19();
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
  const tmp4 = closure_14;
  const tmp5 = closure_18;
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
  obj3 = node(8109);
  return tmp4(tmp5, obj2, state.key);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function MarkupCodeBlock(styles) {
  let items;
  let node;
  let output;
  let state;
  let textColor;
  const obj = react2;
  const cResult = obj.c(9);
  ({ state, node, output } = styles);
  let codeBlock = styles.styles.codeBlock;
  const key = state.key;
  if (codeBlock == null) {
    codeBlock = closure_19().codeBlock;
  }
  if (state != null) {
    textColor = state.textColor;
  }
  if (cResult[0] === node) {
    if (cResult[1] === output) {
      let tmp4;
      if (cResult[2] === state) {
        tmp4 = cResult[3];
      }
      if (cResult[4] === state.key) {
        if (cResult[5] === codeBlock) {
          if (cResult[6] === textColor) {
            let tmp6;
            if (cResult[7] === tmp4) {
              tmp6 = cResult[8];
            }
            return tmp6;
          }
        }
      }
      const obj2 = { style: codeBlock, color: textColor, children: items };
      items = [tmp4, "\n"];
      const tmp9 = authStore4(closure_18, obj2, key);
      cResult[4] = state.key;
      cResult[5] = codeBlock;
      cResult[6] = textColor;
      cResult[7] = tmp4;
      cResult[8] = tmp9;
      tmp6 = tmp9;
    }
  }
  const tmpResult = MarkupRulesUtils;
  const smartOutputResult = tmpResult.smartOutput(node, output, state);
  cResult[0] = node;
  cResult[1] = output;
  cResult[2] = state;
  cResult[3] = smartOutputResult;
  tmp4 = smartOutputResult;
}) : (function MarkupCodeBlock(state) {
  let items;
  let node;
  let output;
  let styles;
  let textColor;
  state = state.state;
  ({ styles, node, output } = state);
  let codeBlock = styles.codeBlock;
  const tmp = authStore4;
  const tmp2 = closure_18;
  if (codeBlock == null) {
    codeBlock = closure_19().codeBlock;
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function MarkupCustomEmoji(arg0) {
  let items1;
  let node;
  let state;
  let styles;
  let tmp5;
  let tmp6;
  let useReducedMotion;
  const obj = react2;
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (typeof node.src === "string") {
    if ("" !== node.src) {
      let tmp11;
      let emoji = styles.emoji;
      if (emoji == null) {
        emoji = obj.emoji;
      }
      if (cResult[6] !== state.customEmojiOffsetY) {
        let tmp12 = null;
        if (typeof state.customEmojiOffsetY === "number") {
          const obj2 = { transform: items1 };
          items1 = [{ translateY: state.customEmojiOffsetY }];
          tmp12 = obj2;
          const obj3 = { translateY: state.customEmojiOffsetY };
        }
        cResult[6] = state.customEmojiOffsetY;
        cResult[7] = tmp12;
        tmp11 = tmp12;
      } else {
        tmp11 = cResult[7];
      }
      if (cResult[8] === emoji) {
        let tmp13;
        let tmp14;
        if (cResult[9] === tmp11) {
          tmp13 = cResult[10];
        }
        if (cResult[11] !== node.src) {
          const obj4 = { uri: node.src };
          cResult[11] = node.src;
          cResult[12] = obj4;
          tmp14 = obj4;
        } else {
          tmp14 = cResult[12];
        }
        if (cResult[13] === (!stateFromStores && setting)) {
          if (cResult[14] === state.key) {
            if (cResult[15] === tmp13) {
              let tmp15;
              if (cResult[16] === tmp14) {
                tmp15 = cResult[17];
              }
              return tmp15;
            }
          }
        }
        const obj5 = { style: tmp13, source: tmp14, enableAnimation: !stateFromStores && setting };
        const tmp18 = authStore3(FastImageDefault, obj5, state.key);
        cResult[13] = !stateFromStores && setting;
        cResult[14] = state.key;
        cResult[15] = tmp13;
        cResult[16] = tmp14;
        cResult[17] = tmp18;
        tmp15 = tmp18;
      }
      const items2 = [emoji, tmp11];
      cResult[8] = emoji;
      cResult[9] = tmp11;
      cResult[10] = items2;
      tmp13 = items2;
    }
  }
  let textColor;
  if (state != null) {
    textColor = state.textColor;
  }
  if (cResult[2] === node.alt) {
    if (cResult[3] === state.key) {
      let tmp20;
      if (cResult[4] === textColor) {
        tmp20 = cResult[5];
      }
      return tmp20;
    }
  }
  const obj6 = { color: textColor, children: node.alt };
  const tmp21 = authStore3(closure_18, obj6, state.key);
  cResult[2] = node.alt;
  cResult[3] = state.key;
  cResult[4] = textColor;
  cResult[5] = tmp21;
  tmp20 = tmp21;
}) : (function MarkupCustomEmoji(styles) {
  let items2;
  let node;
  let obj5;
  let state;
  let useReducedMotion;
  ({ state, node } = styles);
  styles = styles.styles;
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  const obj = get_initialized;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (typeof node.src === "string") {
    let tmp7Result;
    if ("" !== node.src) {
      let emoji = styles.emoji;
      const tmp10 = authStore3;
      const tmp12 = FastImageDefault;
      if (emoji == null) {
        emoji = obj.emoji;
      }
      const items1 = [emoji, ];
      let tmp5 = null;
      if (typeof state.customEmojiOffsetY === "number") {
        const obj2 = { transform: items2 };
        items2 = [{ translateY: state.customEmojiOffsetY }];
        tmp5 = obj2;
        const obj3 = { translateY: state.customEmojiOffsetY };
      }
      const obj4 = { style: items1, source: obj5, enableAnimation: !stateFromStores && setting };
      items1[1] = tmp5;
      obj5 = { uri: node.src };
      tmp7Result = tmp10(tmp12, obj4, state.key);
    }
    return tmp7Result;
  }
  let textColor;
  const tmp7 = authStore3;
  const tmp8 = closure_18;
  if (state != null) {
    textColor = state.textColor;
  }
  const obj6 = { color: textColor, children: node.alt };
  tmp7Result = tmp7(tmp8, obj6, state.key);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function MarkupChannelMention(state) {
  let items;
  let items1;
  let items2;
  let output;
  let str3;
  let styles;
  let tmp11;
  let obj = state(576);
  const cResult = obj.c(30);
  state = state.state;
  const node = state.node;
  ({ output, styles } = state);
  const variants = state.variants;
  const tmp4 = closure_19();
  let str = "button";
  if (state.noStyleAndInteraction) {
    str = "text";
  }
  let str2 = variants.channelMentionText;
  const key = state.key;
  if (str2 == null) {
    str2 = "text-xs/medium";
  }
  if (cResult[0] === node.inContent) {
    if (cResult[1] === output) {
      let tmp6;
      let tmp8;
      if (cResult[2] === state) {
        tmp6 = cResult[3];
      }
      if (cResult[4] !== node.inContent) {
        let tmp10Result = null;
        if (null != node.inContent) {
          const obj2 = { themedColor: node(587).colors.MENTION_FOREGROUND, style: size, source: tmp11(10680), size: state(1200).Icon.Sizes.CUSTOM };
          const ThemedIcon = tmp(1200).ThemedIcon;
          const fontScale = closure_6.getFontScale();
          const tmp10 = closure_14;
          tmp11 = node;
          if (fontScale < 1.25) {
            size = { width: 8, height: 8 };
          } else {
            size = fontScale < 2 ? { width: 12, height: 12 } : { width: 16, height: 16 };
          }
          tmp10Result = tmp10(ThemedIcon, obj2);
        }
        cResult[4] = node.inContent;
        cResult[5] = tmp10Result;
        tmp8 = tmp10Result;
      } else {
        tmp8 = cResult[5];
      }
      if (cResult[6] === node) {
        if (cResult[7] === output) {
          let tmp14;
          if (cResult[8] === state) {
            tmp14 = cResult[9];
          }
          if (cResult[10] === tmp4.channelMentionText) {
            if (cResult[11] === state.key) {
              if (cResult[12] === str2) {
                if (cResult[13] === tmp6) {
                  if (cResult[14] === tmp8) {
                    let tmp16;
                    if (cResult[15] === tmp14) {
                      tmp16 = cResult[16];
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
                                          let tmp19;
                                          if (cResult[28] === tmp16) {
                                            tmp19 = cResult[29];
                                          }
                                          return tmp19;
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
                    let tmp21Result = tmp16;
                    if (!state.disablePressableChannelMention) {
                      let channelMention = styles.channel;
                      const obj3 = {
                        accessibilityRole: str,
                        style: items,
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
                                                      const tmp6 = require;
                                                      if (obj.canViewChannel(channel)) {
                                                        if (tmp3) {
                                                          const tmp6Result = tmp6(4938);
                                                          const rootNavigationRef = tmp6Result.getRootNavigationRef();
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
                        children: tmp16
                      };
                      const tmp21 = closure_14;
                      const tmp22 = closure_7;
                      if (channelMention == null) {
                        channelMention = tmp4.channelMention;
                      }
                      items = [channelMention, ];
                      let tmp23 = null;
                      if (null != state.mentionPillOffsetY) {
                        let obj4 = { transform: items1 };
                        let obj5 = { translateY: state.mentionPillOffsetY };
                        items1 = [obj5];
                        tmp23 = obj4;
                      }
                      items[1] = tmp23;
                      str3 = "auto";
                      if (state.noStyleAndInteraction) {
                        str3 = "none";
                      }
                      tmp21Result = tmp21(tmp22, obj3, state.key);
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
                    cResult[28] = tmp16;
                    cResult[29] = tmp21Result;
                    tmp19 = tmp21Result;
                  }
                }
              }
            }
          }
          const obj6 = { variant: str2, style: tmp5, children: items2 };
          items2 = [tmp6, tmp8, tmp14];
          const tmp18 = closure_15(state(5087).Text, obj6, key);
          cResult[10] = tmp4.channelMentionText;
          cResult[11] = state.key;
          cResult[12] = str2;
          cResult[13] = tmp6;
          cResult[14] = tmp8;
          cResult[15] = tmp14;
          cResult[16] = tmp18;
          tmp16 = tmp18;
        }
      }
      const tmpResult = state(8109);
      const smartOutputResult = tmpResult.smartOutput(node, output, state);
      cResult[6] = node;
      cResult[7] = output;
      cResult[8] = state;
      cResult[9] = smartOutputResult;
      tmp14 = smartOutputResult;
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
}) : (function MarkupChannelMention(state) {
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
  const tmp = closure_19();
  let str = "button";
  if (state.noStyleAndInteraction) {
    str = "text";
  }
  const tmp3 = state;
  const tmp4 = dependencyMap;
  let str2 = variants.channelMentionText;
  const Text = state(5087).Text;
  const tmp2 = closure_15;
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
    const obj2 = { themedColor: node(587).colors.MENTION_FOREGROUND, style: size, source: tmp8(10680), size: tmp3(1200).Icon.Sizes.CUSTOM };
    const ThemedIcon = tmp3(1200).ThemedIcon;
    const fontScale = closure_6.getFontScale();
    const tmp7 = closure_14;
    tmp8 = node;
    if (fontScale < 1.25) {
      size = { width: 8, height: 8 };
    } else {
      size = fontScale < 2 ? { width: 12, height: 12 } : { width: 16, height: 16 };
    }
    tmp7Result = tmp7(ThemedIcon, obj2);
  }
  items[1] = tmp7Result;
  const tmp3Result = tmp3(8109);
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
                  const tmp6 = require;
                  if (obj.canViewChannel(channel)) {
                    if (tmp3) {
                      const tmp6Result = tmp6(4938);
                      const rootNavigationRef = tmp6Result.getRootNavigationRef();
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
    const tmp13 = closure_14;
    const tmp14 = closure_7;
    if (channelMention == null) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function MarkupStaticRouteLink(state) {
  let items;
  let obj3;
  let styles;
  let variants;
  let tmp = state;
  let obj = state(576);
  const cResult = obj.c(34);
  state = state.state;
  const node = state.node;
  const output = state.output;
  ({ styles, variants } = state);
  const tmp4 = closure_19();
  let SignPostIcon = state(13984).SignPostIcon;
  const channelId = node.channelId;
  if (StaticChannelId.GUILD_HOME !== channelId) {
    let first;
    let tmp11;
    if (StaticChannelId.SERVER_GUIDE !== channelId) {
      if (StaticChannelId.CHANNEL_BROWSER !== channelId) {
        if (StaticChannelId.CUSTOMIZE_COMMUNITY !== channelId) {
          if (StaticChannelId.LINKED_ROLES === channelId) {
            SignPostIcon = tmp(5040).LinkIcon;
          }
        }
      }
      SignPostIcon = tmp(13986).ChannelListMagnifyingGlassIcon;
    }
    let str = "button";
    if (state.noStyleAndInteraction) {
      str = "text";
    }
    let str2 = variants.channelMentionText;
    const key = state.key;
    if (str2 == null) {
      str2 = "text-xs/medium";
    }
    const _Symbol = Symbol;
    const channelMentionText = tmp4.channelMentionText;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const fontScale = closure_6.getFontScale();
      let str4 = "xxs";
      if (fontScale >= 1) {
        let str5 = "sm";
        if (fontScale < 1.25) {
          str5 = "xs";
        }
        str4 = str5;
      }
      cResult[0] = str4;
      first = str4;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== SignPostIcon) {
      const obj2 = { style: obj.staticRouteLinkIcon, children: closure_14(SignPostIcon, obj3) };
      obj3 = { color: node(587).colors.MENTION_FOREGROUND, size: first };
      const tmp16 = closure_14(closure_8, obj2);
      cResult[1] = SignPostIcon;
      cResult[2] = tmp16;
      tmp11 = tmp16;
    } else {
      tmp11 = cResult[2];
    }
    if (cResult[3] === node) {
      if (cResult[4] === output) {
        let tmp17;
        if (cResult[5] === state) {
          tmp17 = cResult[6];
        }
        if (cResult[7] === tmp4.channelMentionText) {
          if (cResult[8] === state.key) {
            if (cResult[9] === str2) {
              if (cResult[10] === tmp11) {
                let tmp19;
                if (cResult[11] === tmp17) {
                  tmp19 = cResult[12];
                }
                if (state.disablePressableChannelMention) {
                  return tmp19;
                } else {
                  let tmp23;
                  let channelMention = styles.channel;
                  if (channelMention == null) {
                    channelMention = tmp4.channelMention;
                  }
                  if (cResult[13] !== state.mentionPillOffsetY) {
                    let tmp24 = null;
                    if (null != state.mentionPillOffsetY) {
                      const obj4 = { transform: items };
                      items = [{ translateY: state.mentionPillOffsetY }];
                      tmp24 = obj4;
                      const obj5 = { translateY: state.mentionPillOffsetY };
                    }
                    cResult[13] = state.mentionPillOffsetY;
                    cResult[14] = tmp24;
                    tmp23 = tmp24;
                  } else {
                    tmp23 = cResult[14];
                  }
                  if (cResult[15] === channelMention) {
                    let tmp25;
                    if (cResult[16] === tmp23) {
                      tmp25 = cResult[17];
                    }
                    if (null == node.guildId) {
                      if (cResult[18] === tmp25) {
                        if (cResult[19] === state.key) {
                          let tmp30;
                          if (cResult[20] === tmp19) {
                            tmp30 = cResult[21];
                          }
                          return tmp30;
                        }
                      }
                      const obj6 = { style: tmp25, children: tmp19 };
                      const tmp33 = closure_14(closure_8, obj6, state.key);
                      cResult[18] = tmp25;
                      cResult[19] = state.key;
                      cResult[20] = tmp19;
                      cResult[21] = tmp33;
                      tmp30 = tmp33;
                    } else {
                      let str6 = "auto";
                      if (state.noStyleAndInteraction) {
                        str6 = "none";
                      }
                      if (cResult[22] === node.channelId) {
                        if (cResult[23] === node.guildId) {
                          if (cResult[24] === node.itemId) {
                            let tmp26;
                            if (cResult[25] === state.noStyleAndInteraction) {
                              tmp26 = cResult[26];
                            }
                            if (cResult[27] === str) {
                              if (cResult[28] === tmp25) {
                                if (cResult[29] === state.key) {
                                  if (cResult[30] === str6) {
                                    if (cResult[31] === tmp26) {
                                      let tmp27;
                                      if (cResult[32] === tmp19) {
                                        tmp27 = cResult[33];
                                      }
                                      return tmp27;
                                    }
                                  }
                                }
                              }
                            }
                            class D {
                              constructor() {
                                tmp = null;
                                if (!state.noStyleAndInteraction) {
                                  tmp2 = closure_1;
                                  tmp3 = closure_2;
                                  obj = { guildId: null, staticRoute: null, itemId: null };
                                  tmp4 = node;
                                  ({ guildId: obj.guildId, channelId: obj.staticRoute, itemId: obj.itemId } = node);
                                  tmp = closure_1(closure_2[46])(obj);
                                }
                                return tmp;
                              }
                            }
                            const obj7 = { accessibilityRole: str, style: tmp25, pointerEvents: str6, onPress: tmp26, children: tmp19 };
                            const tmp29 = closure_14(closure_7, obj7, state.key);
                            cResult[27] = str;
                            cResult[28] = tmp25;
                            cResult[29] = state.key;
                            cResult[30] = str6;
                            cResult[31] = tmp26;
                            cResult[32] = tmp19;
                            cResult[33] = tmp29;
                            tmp27 = tmp29;
                          }
                        }
                      }
                      class D {
                        constructor() {
                          tmp = null;
                          if (!state.noStyleAndInteraction) {
                            tmp2 = closure_1;
                            tmp3 = closure_2;
                            obj = { guildId: null, staticRoute: null, itemId: null };
                            tmp4 = node;
                            ({ guildId: obj.guildId, channelId: obj.staticRoute, itemId: obj.itemId } = node);
                            tmp = closure_1(closure_2[46])(obj);
                          }
                          return tmp;
                        }
                      }
                      cResult[22] = node.channelId;
                      cResult[23] = node.guildId;
                      cResult[24] = node.itemId;
                      cResult[25] = state.noStyleAndInteraction;
                      cResult[26] = D;
                      tmp26 = D;
                    }
                  }
                  const items1 = [channelMention, tmp23];
                  cResult[15] = channelMention;
                  cResult[16] = tmp23;
                  cResult[17] = items1;
                  tmp25 = items1;
                }
              }
            }
          }
        }
        tmp21[0] = str2;
        tmp21[1] = channelMentionText;
        const items2 = [tmp11, tmp17];
        tmp21[2] = items2;
        const tmp22 = closure_15(tmp(5087).Text, tmp21, key);
        cResult[7] = tmp4.channelMentionText;
        cResult[8] = state.key;
        cResult[9] = str2;
        cResult[10] = tmp11;
        cResult[11] = tmp17;
        cResult[12] = tmp22;
        tmp19 = tmp22;
      }
    }
    const tmpResult = tmp(8109);
    const smartOutputResult = tmpResult.smartOutput(node, output, state);
    cResult[3] = node;
    cResult[4] = output;
    cResult[5] = state;
    cResult[6] = smartOutputResult;
    tmp17 = smartOutputResult;
  }
  SignPostIcon = tmp(13984).SignPostIcon;
}) : (function MarkupStaticRouteLink(state) {
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
  let tmp = closure_19();
  let SignPostIcon = state(13984).SignPostIcon;
  const channelId = node.channelId;
  if (StaticChannelId.GUILD_HOME !== channelId) {
    if (StaticChannelId.SERVER_GUIDE !== channelId) {
      if (StaticChannelId.CHANNEL_BROWSER !== channelId) {
        if (StaticChannelId.CUSTOMIZE_COMMUNITY !== channelId) {
          if (StaticChannelId.LINKED_ROLES === channelId) {
            SignPostIcon = tmp2(5040).LinkIcon;
          }
        }
      }
      SignPostIcon = tmp2(13986).ChannelListMagnifyingGlassIcon;
    }
    let str = "button";
    if (state.noStyleAndInteraction) {
      str = "text";
    }
    let str2 = variants.channelMentionText;
    const Text = tmp2(5087).Text;
    const tmp5 = closure_15;
    if (str2 == null) {
      str2 = "text-xs/medium";
    }
    let obj = { variant: str2, style: tmp.channelMentionText, children: items };
    const obj2 = { style: obj.staticRouteLinkIcon, children: closure_14(SignPostIcon, obj3) };
    obj3 = { color: node(587).colors.MENTION_FOREGROUND, size: str3 };
    const fontScale = closure_6.getFontScale();
    str3 = "xxs";
    if (fontScale >= 1) {
      let str4 = "sm";
      if (fontScale < 1.25) {
        str4 = "xs";
      }
      str3 = str4;
    }
    items = [closure_14(closure_8, obj2), ];
    const tmp2Result = state(8109);
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
        const tmp15 = closure_7;
        if (state.noStyleAndInteraction) {
          str5 = "none";
        }
        tmp7Result = tmp7(tmp15, obj7, state.key);
      }
      return tmp7Result;
    }
  }
  SignPostIcon = tmp2(13984).SignPostIcon;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function MarkupAttachmentLink(state) {
  let SMALL;
  let first;
  let items;
  let items2;
  let styles;
  let variants;
  let obj = state(576);
  const cResult = obj.c(25);
  state = state.state;
  const node = state.node;
  const output = state.output;
  ({ styles, variants } = state);
  const tmp4 = closure_19();
  let str = "button";
  if (state.noStyleAndInteraction) {
    str = "text";
  }
  let str2 = variants.channelMentionText;
  const key = state.key;
  if (str2 == null) {
    str2 = "text-xs/medium";
  }
  const channelMentionText = tmp4.channelMentionText;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { themedColor: node(587).colors.MENTION_FOREGROUND, source: node(13988), size: SMALL };
    const ThemedIcon = tmp(1200).ThemedIcon;
    const fontScale = closure_6.getFontScale();
    const tmp6 = closure_14;
    if (fontScale < 1) {
      SMALL = tmp(1200).Icon.Sizes.EXTRA_SMALL_10;
    } else if (fontScale < 1.25) {
      SMALL = tmp(1200).Icon.Sizes.EXTRA_SMALL;
    } else {
      SMALL = tmp(1200).Icon.Sizes.SMALL;
    }
    const tmp6Result = tmp6(ThemedIcon, obj2);
    cResult[0] = tmp6Result;
    first = tmp6Result;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === node) {
    if (cResult[2] === output) {
      let tmp11;
      if (cResult[3] === state) {
        tmp11 = cResult[4];
      }
      if (cResult[5] === tmp4.channelMentionText) {
        if (cResult[6] === state.key) {
          if (cResult[7] === str2) {
            let tmp13;
            if (cResult[8] === tmp11) {
              tmp13 = cResult[9];
            }
            if (state.disablePressableChannelMention) {
              return tmp13;
            } else {
              let tmp16;
              let channelMention = styles.channel;
              if (channelMention == null) {
                channelMention = tmp4.channelMention;
              }
              if (cResult[10] !== state.mentionPillOffsetY) {
                let tmp17 = null;
                if (null != state.mentionPillOffsetY) {
                  const obj3 = { transform: items };
                  items = [{ translateY: state.mentionPillOffsetY }];
                  tmp17 = obj3;
                  const obj4 = { translateY: state.mentionPillOffsetY };
                }
                cResult[10] = state.mentionPillOffsetY;
                cResult[11] = tmp17;
                tmp16 = tmp17;
              } else {
                tmp16 = cResult[11];
              }
              if (cResult[12] === channelMention) {
                let tmp18;
                if (cResult[13] === tmp16) {
                  tmp18 = cResult[14];
                }
                let str3 = "auto";
                if (state.noStyleAndInteraction) {
                  str3 = "none";
                }
                if (cResult[15] === node) {
                  let tmp19;
                  if (cResult[16] === state.noStyleAndInteraction) {
                    tmp19 = cResult[17];
                  }
                  if (cResult[18] === str) {
                    if (cResult[19] === state.key) {
                      if (cResult[20] === str3) {
                        if (cResult[21] === tmp19) {
                          if (cResult[22] === tmp18) {
                            let tmp20;
                            if (cResult[23] === tmp13) {
                              tmp20 = cResult[24];
                            }
                            return tmp20;
                          }
                        }
                      }
                    }
                  }
                  const obj5 = { accessibilityRole: str, style: tmp18, pointerEvents: str3, onPress: tmp19, children: tmp13 };
                  const tmp23 = closure_14(closure_7, obj5, state.key);
                  cResult[18] = str;
                  cResult[19] = state.key;
                  cResult[20] = str3;
                  cResult[21] = tmp19;
                  cResult[22] = tmp18;
                  cResult[23] = tmp13;
                  cResult[24] = tmp23;
                  tmp20 = tmp23;
                }
                const fn = function _(stopPropagation) {
                  if (!state.noStyleAndInteraction) {
                    stopPropagation.stopPropagation();
                    const obj = LinkingDefault;
                    obj.openURL(node.attachmentLink);
                  }
                };
                cResult[15] = node;
                cResult[16] = state.noStyleAndInteraction;
                cResult[17] = fn;
                tmp19 = fn;
              }
              const items1 = [channelMention, tmp16];
              cResult[12] = channelMention;
              cResult[13] = tmp16;
              cResult[14] = items1;
              tmp18 = items1;
            }
          }
        }
      }
      const obj6 = { variant: str2, style: channelMentionText, children: items2 };
      items2 = [first, tmp11];
      const tmp15 = closure_15(state(5087).Text, obj6, key);
      cResult[5] = tmp4.channelMentionText;
      cResult[6] = state.key;
      cResult[7] = str2;
      cResult[8] = tmp11;
      cResult[9] = tmp15;
      tmp13 = tmp15;
    }
  }
  const tmpResult = state(8109);
  const smartOutputResult = tmpResult.smartOutput(node, output, state);
  cResult[1] = node;
  cResult[2] = output;
  cResult[3] = state;
  cResult[4] = smartOutputResult;
  tmp11 = smartOutputResult;
}) : (function MarkupAttachmentLink(state) {
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
  const tmp = closure_19();
  let str = "button";
  if (state.noStyleAndInteraction) {
    str = "text";
  }
  let str2 = variants.channelMentionText;
  const Text = state(5087).Text;
  const tmp2 = closure_15;
  if (str2 == null) {
    str2 = "text-xs/medium";
  }
  let obj = { variant: str2, style: tmp.channelMentionText, children: items };
  const obj2 = { themedColor: node(587).colors.MENTION_FOREGROUND, source: node(13988), size: SMALL };
  const ThemedIcon = tmp3(1200).ThemedIcon;
  const fontScale = closure_6.getFontScale();
  if (fontScale < 1) {
    SMALL = tmp3(1200).Icon.Sizes.EXTRA_SMALL_10;
  } else if (fontScale < 1.25) {
    SMALL = tmp3(1200).Icon.Sizes.EXTRA_SMALL;
  } else {
    SMALL = tmp3(1200).Icon.Sizes.SMALL;
  }
  items = [tmp5(ThemedIcon, obj2), ];
  const tmp3Result = state(8109);
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
    const tmp9 = closure_7;
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? (function MarkupCommandMention(styles) {
  let node;
  let output;
  let state;
  const obj = react2;
  const cResult = obj.c(5);
  ({ state, node, output } = styles);
  let mention = styles.styles.mention;
  if (mention == null) {
    mention = closure_19().mention;
  }
  if (cResult[0] === node) {
    if (cResult[1] === output) {
      if (cResult[2] === state) {
        let tmp3;
        if (cResult[3] === mention) {
          tmp3 = cResult[4];
        }
        return tmp3;
      }
    }
  }
  const tmp4 = authStore3(MarkupReactCommandRuleDefault, { node, output, state, style: mention }, state.key);
  cResult[0] = node;
  cResult[1] = output;
  cResult[2] = state;
  cResult[3] = mention;
  cResult[4] = tmp4;
  tmp3 = tmp4;
}) : (function MarkupCommandMention(state) {
  let mention;
  let node;
  let output;
  let styles;
  state = state.state;
  ({ node, output, styles } = state);
  const obj = { node, output, state, style: mention };
  mention = styles.mention;
  const tmp = closure_19();
  const tmp2 = authStore3;
  const tmp3 = MarkupReactCommandRuleDefault;
  if (mention == null) {
    mention = tmp.mention;
  }
  return tmp2(tmp3, obj, state.key);
});
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
      const tmp5 = closure_2_18;
      if (noStyleAndInteraction != null) {
        textColor = noStyleAndInteraction.textColor;
      }
      obj2 = { color: textColor, children: obj3.smartOutput(node, output, noStyleAndInteraction) };
      obj3 = obj(dependencyMap[32]);
      tmpResult = tmp(tmp5, obj2, noStyleAndInteraction.key);
    } else {
      obj = { state: noStyleAndInteraction, node, output, styles: obj3 };
      tmpResult = tmp(closure_2_21, obj, noStyleAndInteraction.key);
    }
    return tmpResult;
  };
  let obj4 = {
    react(content, output, textColor) {
      if (typeof content.content === "string") {
        content = content.content;
      } else {
        textColor = undefined;
        const tmp6 = closure_1_14;
        const tmp7 = closure_1_18;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        const obj = { color: textColor, children: obj2.smartOutput(content, output, textColor) };
        obj2 = obj(dependencyMap[32]);
        content = tmp6(tmp7, obj, textColor.key);
      }
      return content;
    }
  };
  let obj5 = {
    react(node, output, textColor) {
      const obj = { style: { textDecorationLine: "line-through" }, color: textColor, variant: textColor.textVariant, children: obj2.smartOutput(node, output, textColor) };
      textColor = undefined;
      const tmp = closure_1_14;
      const tmp2 = closure_1_18;
      if (textColor != null) {
        textColor = textColor.textColor;
      }
      obj2 = obj(dependencyMap[32]);
      return tmp(tmp2, obj, textColor.key);
    }
  };
  let obj6 = {
    react(node, output, textColor) {
      const obj = { style: { textDecorationLine: "underline" }, color: textColor, variant: textColor.textVariant, children: obj2.smartOutput(node, output, textColor) };
      textColor = undefined;
      const tmp = closure_1_14;
      const tmp2 = closure_1_18;
      if (textColor != null) {
        textColor = textColor.textColor;
      }
      obj2 = obj(dependencyMap[32]);
      return tmp(tmp2, obj, textColor.key);
    }
  };
  const obj10 = {
    react(node, output, textColor) {
      textColor = undefined;
      const tmp = closure_1_14;
      const tmp2 = closure_1_18;
      if (textColor != null) {
        textColor = textColor.textColor;
      }
      const obj = { color: textColor, children: obj2.smartOutput(node, output, textColor) };
      obj2 = obj(dependencyMap[32]);
      return tmp(tmp2, obj, textColor.key);
    }
  };
  const obj11 = {
    react(node, output, state) {
      styles = { styles, state, node, output };
      return authStore3(closure_23, styles, state.key);
    }
  };
  const obj12 = {
    order: 600,
    react(node, output, textColor) {
      textColor = undefined;
      const tmp = closure_1_14;
      const tmp2 = closure_1_18;
      if (textColor != null) {
        textColor = textColor.textColor;
      }
      const obj = { color: textColor, children: obj2.smartOutput(node, output, textColor) };
      obj2 = obj(dependencyMap[32]);
      return tmp(tmp2, obj, textColor.key);
    }
  };
  const obj13 = {
    react(surrogate, arg1, key) {
      let children = surrogate.surrogate;
      const tmp = closure_1_14;
      const tmp2 = closure_1_9;
      if (!children) {
        children = surrogate.content;
      }
      return tmp(tmp2, { children }, key.key);
    }
  };
  const obj14 = {
    react(node, arg1, state) {
      styles = { state, node, styles };
      return authStore3(closure_26, styles, state.key);
    }
  };
  const obj15 = {
    react(node, output, key) {
      let obj;
      obj = { spoilerStyle: obj.spoiler, spoilerRevealedStyle: obj.spoilerRevealed, children: obj2.smartOutput(node, output, key) };
      const tmp = SpoilerDefault;
      obj2 = MarkupRulesUtils;
      return authStore3(tmp, obj, key.key);
    }
  };
  const obj16 = {
    react(channelId, output, state) {
      styles = MarkupRulesUtils;
      let tmp = null;
      if (styles.isStaticRouteIconType(channelId.channelId)) {
        obj2 = { styles, variants: obj2, state, node: channelId, output };
        tmp = authStore3(closure_28, obj2, state.key);
      }
      return tmp;
    }
  };
  const obj17 = {
    react(node, output, state) {
      styles = { styles, state, node, output };
      return authStore3(closure_24, styles, state.key);
    }
  };
  const obj18 = {
    parse(arg0, arg1, arg2) {
      let obj;
      obj = obj2(dependencyMap[51]).RULES[obj(undefined, dependencyMap[49]).AST_KEY.CODE_BLOCK];
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
      return authStore3(closure_25, styles, state.key);
    }
  };
  const obj19 = {
    react: (node, output, state) => {
      styles = { roleStyle: str, state, node, output, styles };
      return closure_2_14(MarkupMention, styles, state.key);
    }
  };
  const obj20 = {
    react(node, output, state) {
      styles = { styles, state, node, output, variants: obj2 };
      return authStore3(closure_27, styles, state.key);
    }
  };
  const obj21 = {
    react(node, output, state) {
      styles = { styles, state, node, output, variants: obj2 };
      return authStore3(closure_29, styles, state.key);
    }
  };
  const obj22 = {
    react(node, output, key) {
      let items;
      const obj = { variant: "text-md/bold", children: items };
      const Text = obj(dependencyMap[13]).Text;
      items = ["<sound:"];
      obj2 = obj(dependencyMap[32]);
      items[1] = obj2.smartOutput(node, output, key);
      items[2] = ">";
      return closure_1_15(Text, obj, key.key);
    }
  };
  const obj23 = {
    react(icon, output, textColor) {
      let XXSMALL;
      let items;
      let obj;
      let obj3;
      let tmpResult;
      obj = obj(dependencyMap[52]);
      let num = 2;
      if (!obj.isAndroid()) {
        let num3 = 0;
        if (closure_1_6.getFontScale() < 1.5) {
          num3 = 1;
        }
        num = num3;
      }
      let tmp5Result = null;
      if (null != icon.icon) {
        obj2 = { style: obj3, icon: icon.icon, size: XXSMALL };
        obj3 = { top: num };
        const tmp7 = obj2(dependencyMap[25]);
        const fontScale = closure_1_6.getFontScale();
        const tmp5 = closure_1_14;
        if (fontScale < 1) {
          XXSMALL = tmp(tmp2[25]).GuildIconSizes.XXXSMALL;
        } else if (fontScale < 1.25) {
          XXSMALL = tmp(tmp2[25]).GuildIconSizes.XXSMALL_12;
        } else {
          XXSMALL = tmp(tmp2[25]).GuildIconSizes.XXSMALL;
        }
        tmp5Result = tmp5(tmp7, obj2);
      }
      textColor = undefined;
      const tmp10 = closure_1_15;
      if (textColor != null) {
        textColor = textColor.textColor;
      }
      const obj4 = { color: textColor, children: items };
      items = [, ];
      const obj5 = { style: style.guildIcon, children: tmp5Result };
      items[0] = closure_1_14(closure_1_8, obj5);
      let textColor1;
      const tmp13 = closure_1_14;
      if (textColor != null) {
        textColor1 = textColor.textColor;
      }
      const obj6 = { color: textColor1, children: tmpResult.smartOutput(icon, output, textColor) };
      tmpResult = obj(dependencyMap[32]);
      items[1] = tmp13(closure_1_18, obj6);
      return tmp10(closure_1_18, obj4, textColor.key);
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
      const obj = { themedColor: obj2(dependencyMap[15]).colors.MENTION_FOREGROUND, source: obj2.getChannelMentionIcon(str), size: SMALL, style: { top: 1 } };
      const ThemedIcon = obj(dependencyMap[26]).ThemedIcon;
      obj2 = obj(dependencyMap[53]);
      const fontScale = closure_1_6.getFontScale();
      if (fontScale < 1) {
        SMALL = tmp2(tmp3[26]).Icon.Sizes.EXTRA_SMALL_10;
      } else if (fontScale < 1.25) {
        SMALL = tmp2(tmp3[26]).Icon.Sizes.EXTRA_SMALL;
      } else {
        SMALL = tmp2(tmp3[26]).Icon.Sizes.SMALL;
      }
      textColor = undefined;
      const tmp6 = closure_1_15;
      const tmp7 = closure_1_18;
      const tmpResult = closure_1_14(ThemedIcon, obj);
      if (textColor != null) {
        textColor = textColor.textColor;
      }
      const obj3 = { color: textColor, children: items };
      items = [, ];
      const obj4 = { style: { paddingEnd: num }, children: tmpResult };
      items[0] = closure_1_14(closure_1_8, obj4);
      const tmp2Result = obj(dependencyMap[32]);
      items[1] = tmp2Result.smartOutput(iconType, output, textColor);
      return tmp6(tmp7, obj3, textColor.key);
    }
  };
  const obj25 = {
    react(node, output, state) {
      styles = { styles, state, node, output };
      return authStore3(closure_30, styles, state.key);
    }
  };
  const obj26 = {
    react(node, arg1, state) {
      const obj = { node, state };
      return closure_1_14(obj2(dependencyMap[54]), obj, state.key);
    }
  };
  const obj27 = {
    react(node, arg1, key) {
      let obj;
      obj = { node, style: obj.timestamp };
      return authStore3(TimestampDefault, obj, key.key);
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
        const tmp7 = closure_14;
        const tmp8 = closure_18;
        if (level != null) {
          textColor = level.textColor;
        }
        obj2 = {
          color: textColor,
          children: items.map((item, index) => {
              let str = "\u2022 ";
              const Fragment = React.Fragment;
              const tmp = closure_2_15;
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
                str4 = closure_2_20;
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
        let tmp2 = closure_14;
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
            const obj = start(level[52]);
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
          const Text = start(level[13]).Text;
          const tmp10 = closure_1_18;
          if (level != null) {
            textColor = tmp6.textColor;
          }
          let repeatResult = str5;
          if (tmp > 0) {
            repeatResult = closure_1_20.repeat(tmp);
          }
          items = [repeatResult, str];
          items1 = [closure_1_15(tmp10, obj4, "list-" + level.key + "-item-" + index + "-bullet"), , ];
          if (Array.isArray(arr)) {
            mapped = arr.map((type, index) => {
              let str = tmp;
              const sum = index + 1;
              const Fragment = React.Fragment;
              const tmp3 = closure_3_15;
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
            str5 = closure_1_20;
          }
          items1[2] = str5;
          return closure_1_15(Text, obj3, "list-" + level.key + "-item-" + index);
        });
        let obj = { style: list.list, variant: "text-sm/medium", children: mapped };
        let tmp5 = list;
        const tmp6 = globalThis;
        let _HermesInternal = HermesInternal;
        let str = "list-";
        return closure_14(start(level[13]).Text, obj, "list-" + level.key);
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
        const tmp8 = closure_1_15;
        const tmp9 = closure_1_18;
        if (formatInline != null) {
          textColor = formatInline.textColor;
        }
        obj2 = { variant: "text-sm/semibold", color: textColor, children: items };
        const obj3 = { textVariant: "text-sm/semibold" };
        const smartOutput2 = obj(dependencyMap[32]).smartOutput;
        obj(dependencyMap[32]);
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
        const Text = obj(dependencyMap[13]).Text;
        const tmp = closure_1_15;
        if (formatInline.forceWhite) {
          str3 = "text-overlay-light";
        }
        const obj4 = { textVariant: str };
        const smartOutput = tmp2(tmp3[32]).smartOutput;
        obj(dependencyMap[32]);
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
      const Text = obj(dependencyMap[13]).Text;
      items = [, ];
      obj2 = obj(dependencyMap[32]);
      items[0] = obj2.smartOutput(node, output, key);
      items[1] = "\n";
      return closure_1_15(Text, obj, key.key);
    }
  };
  const obj31 = {
    react(content, output, textColor) {
      if (typeof content.content === "string") {
        content = content.content;
      } else {
        textColor = undefined;
        const tmp6 = closure_1_14;
        const tmp7 = closure_1_18;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        const obj = { color: textColor, children: obj2.smartOutput(content, output, textColor) };
        obj2 = obj(dependencyMap[32]);
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
      const tmp = authStore3;
      const tmp2 = closure_18;
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
      const tmp = authStore3;
      const tmp2 = closure_18;
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
      const tmp = closure_1_14;
      const tmp2 = closure_1_18;
      if (textColor != null) {
        color = textColor.textColor;
      }
      return tmp(tmp2, { color, children: "\n" }, textColor.key);
    }
  };
  return { [closure_0(closure_2[49]).AST_KEY.TEXT]: obj4, [closure_0(closure_2[49]).AST_KEY.STRIKETHROUGH]: obj5, [closure_0(closure_2[49]).AST_KEY.UNDERLINE]: obj6, [closure_0(closure_2[49]).AST_KEY.ITALICS]: obj7, [closure_0(closure_2[49]).AST_KEY.STRONG]: obj8, [closure_0(closure_2[49]).AST_KEY.LINK]: { react }, [closure_0(closure_2[49]).AST_KEY.URL]: { react }, [closure_0(closure_2[49]).AST_KEY.AUTOLINK]: { react }, [closure_0(closure_2[49]).AST_KEY.LINE_BREAK]: obj9, [closure_0(closure_2[49]).AST_KEY.HIGHLIGHT]: obj10, [closure_0(closure_2[49]).AST_KEY.BLOCK_QUOTE]: obj11, [closure_0(closure_2[49]).AST_KEY.PARAGRAPH]: obj12, [closure_0(closure_2[49]).AST_KEY.EMOJI]: obj13, [closure_0(closure_2[49]).AST_KEY.CUSTOM_EMOJI]: obj14, [closure_0(closure_2[49]).AST_KEY.SPOILER]: obj15, [closure_0(closure_2[49]).AST_KEY.STATIC_ROUTE_LINK]: obj16, [closure_0(closure_2[49]).AST_KEY.INLINE_CODE]: obj17, [closure_0(closure_2[49]).AST_KEY.CODE_BLOCK]: obj18, [closure_0(closure_2[49]).AST_KEY.MENTION]: obj19, [closure_0(closure_2[49]).AST_KEY.CHANNEL_MENTION]: obj20, [closure_0(closure_2[49]).AST_KEY.ATTACHMENT_LINK]: obj21, [closure_0(closure_2[49]).AST_KEY.SOUNDBOARD]: obj22, [closure_0(closure_2[49]).AST_KEY.GUILD]: obj23, [closure_0(closure_2[49]).AST_KEY.CHANNEL]: obj24, [closure_0(closure_2[49]).AST_KEY.COMMAND_MENTION]: obj25, [closure_0(closure_2[49]).AST_KEY.GAME_MENTION]: obj26, [closure_0(closure_2[49]).AST_KEY.TIMESTAMP]: obj27, [closure_0(closure_2[49]).AST_KEY.LIST]: obj28, [closure_0(closure_2[49]).AST_KEY.HEADING]: obj29, [closure_0(closure_2[49]).AST_KEY.SUBTEXT]: obj30, [closure_0(closure_2[49]).AST_KEY.SILENT_PREFIX]: obj31 };
};
export const MarkupText = tmp5;
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
