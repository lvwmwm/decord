// Module ID: 15092
// Function ID: 15093
// Name: HubEmailConnectionContent
// Dependencies: [5, 32, 19, 17, 5155, 15080, 1072, 21, 5306, 575, 5320, 1502, 5913, 5552, 15093, 2121, 15094, 6757, 1113, 5929, 15088, 15095, 7617, 1187, 5936, 2]
// Exports: default

// Module 15092 (HubEmailConnectionContent)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl8 from "intl" /* 1113 */;
import useNavigation from "useNavigation" /* 1502 */;
import react2 from "react" /* 5320 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import HubConstants from "HubConstants" /* 15080 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c7, closure_4, dependencyMap;

let c10;
let c9;
let closure_12;
let map1;
let metroImportDefault;
let metroRequire;
let tmp;
const native = tmp(1187);
const Text_Text = tmp(5929);
const components_Button_Button = tmp(5936);
const HubEmailConnectionModal = tmp(15088);
const InkQuillSpotIllustration = tmp(15095);
let react = react_mod;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ HubEmailConnectionSteps: c9, INVITE_ROUTING_HUB_GUILD_ID: c10 } = HubConstants);
const MarketingURLs = Constants.MarketingURLs;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let closure_14 = createStyles.createStyles((arg0) => {
  let str;
  const obj = { container: { paddingHorizontal: 16 }, header: { marginTop: 16, marginBottom: 16, alignSelf: "center" }, scrollViewContainer: { flexGrow: 2 }, title: { textAlign: "center", marginBottom: 8 }, description: { alignItems: "center", marginBottom: 24 }, descriptionText: { textAlign: "center" }, learnMore: { alignSelf: "center", textDecorationLine: str }, input: { marginBottom: 32 }, textInput: { borderRadius: nativeDefault.radii.lg }, placeholder: { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT }, growSpacing: { flexGrow: 2, minHeight: nativeDefault.space.PX_24 }, buttonContainer: { paddingHorizontal: nativeDefault.space.PX_16 } };
  str = "none";
  const tmp = arg0;
  if (tmp) {
    str = "underline";
  }
  ({ borderRadius: nativeDefault.radii.lg });
  ({ color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT });
  ({ flexGrow: 2, minHeight: nativeDefault.space.PX_24 });
  ({ paddingHorizontal: nativeDefault.space.PX_16 });
  return obj;
});
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionContent.tsx");

export default function HubEmailConnectionContent(arg0) {
  let Button;
  let _undefined;
  let anyErrorMessage;
  let c6;
  let closure_2;
  let closure_5;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let invite;
  let items1;
  let items2;
  let items3;
  let mapped;
  let obj14;
  let obj18;
  let obj2;
  ({ onClose: require, invite } = arg0);
  let value;
  react = undefined;
  c6 = undefined;
  let obj4;
  function handleLearnMore() {
    obj = invite(closure_2[13]);
    obj.openLazy(require("asyncRequire")(closure_2[14], closure_2.paths), "HubEmailConnectionDescriptionActionsheet");
  }
  let obj = function _signup() {
    obj = _asyncToGenerator(async function(arg0, value) {
      let getChannel;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c5;
        try {
          let guildId;
          let guildId2;
          let guilds_info;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_3 = tmp;
              guildId = undefined;
              guildId2 = undefined;
              guilds_info = undefined;
              _undefined(null);
              closure_2_5(true);
              c5 = 2;
              let id;
              if (invite != null) {
                const guild = tmp94.guild;
                if (guild != null) {
                  id = guild.id;
                }
              }
              guildId = id;
              if (id == null) {
                let id1;
                getChannel = getChannel.getChannel;
                if (invite != null) {
                  const channel = tmp94.channel;
                  if (channel != null) {
                    id1 = channel.id;
                  }
                }
                const channel1 = getChannel(id1);
                guildId = undefined;
                if (channel1 != null) {
                  guildId = channel1.getGuildId();
                }
              }
              if (guildId == null) {
                guildId = undefined;
              }
              const tmp73 = guildId;
              if (guildId === closure_1_10) {
                guildId = undefined;
              }
              const obj10 = guildId(guilds_info[16]);
              guilds_info = obj10.sendVerificationEmail(_slicedToArray, true, tmp73);
              c6 = 3;
              c7 = 1;
              const obj5 = { value: guilds_info, done: false };
              return obj5;
            }
          } else if (1 === c6) {
            c5 = 0;
            guilds_info = closure_131_5(false);
            throw closure_4;
          } else {
            if (2 === c6) {
              c5 = 1;
              closure_3 = closure_4;
              guilds_info = closure_131_6;
              const self = this;
              const self2 = this;
              const aPIError = new guildId(guilds_info[17]).APIError(closure_3);
              closure_131_6(aPIError);
            } else {
              if (3 === c6) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 0;
                  closure_131_5(false);
                  c7 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  guildId2 = value;
                  guilds_info = guildId2.guilds_info;
                  if (guildId2.has_matching_guild) {
                    if (null != guildId) {
                      const obj7 = { email: closure_131_4, onClose: closure_131_0, guildId };
                      closure_131_3.push(constants.VERIFY_PIN, obj7);
                    }
                  }
                  if (0 === guilds_info.length) {
                    const obj8 = { email: closure_131_4, onClose: closure_131_0 };
                    closure_131_3.push(constants.SUBMIT_SCHOOL, obj8);
                  } else if (1 === guilds_info.length) {
                    obj4 = guildId(guilds_info[16]);
                    guilds_info = obj4.sendVerificationEmail(closure_131_4, true, guilds_info[0].id);
                    c6 = 4;
                    c7 = 1;
                    const obj9 = { value: guilds_info, done: false };
                    return obj9;
                  } else {
                    const obj11 = { email: closure_131_4, onClose: closure_131_0, guildsInfo: guilds_info };
                    closure_131_3.push(constants.SELECT_SCHOOL, obj11);
                  }
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                closure_131_5(false);
                c7 = 3;
                const obj12 = { value, done: true };
                return obj12;
              } else {
                obj = { email: closure_131_4, onClose: closure_131_0, guildId: guilds_info[0].id };
                closure_131_3.push(constants.VERIFY_PIN, obj);
              }
              c5 = 1;
            }
            c5 = 0;
            closure_131_5(false);
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp78) {
          closure_4 = tmp78;
          if (0 === c5) {
            c7 = 3;
            throw tmp78;
          } else if (1 === tmp80) {
            c6 = 1;
          } else {
            c6 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = require;
  const tmp3 = closure_14(react.useContext(react2.AccessibilityPreferencesContext).alwaysShowLinkDecorations);
  dependencyMap = tmp3;
  obj = useNavigation;
  let closure_3 = obj.useNavigation();
  const tmp4 = value(react.useState(""), 2);
  value = tmp4[0];
  const tmp6 = tmp4[1];
  const tmp7 = value(react.useState(false), 2);
  react = tmp7[1];
  const first1 = tmp7[0];
  [obj2, c6] = value(react.useState(null), 2);
  const tmp9 = value(react.useState(null), 2);
  const insets = invite(5913)().insets;
  const ref = react.useRef(null);
  let intl = intl8.intl;
  const stringResult = intl.string(intl8.t.H1jCHH);
  let guild;
  if (invite != null) {
    guild = invite.guild;
  }
  let formatToPlainStringResult = stringResult;
  if (null != guild) {
    formatToPlainStringResult = stringResult;
    if (invite.guild.id !== obj4) {
      let prop;
      if (invite != null) {
        prop = invite.approximate_member_count;
      }
      formatToPlainStringResult = stringResult;
      if (null != prop) {
        const name = invite.guild.name;
        const intl2 = intl8.intl;
        let obj3 = { guildName: name, count: invite.approximate_member_count };
        formatToPlainStringResult = intl2.formatToPlainString(intl8.t["4T4+p1"], obj3);
      }
    }
  }
  obj4 = { usesLearnMoreHook: false };
  const intl3 = intl8.intl;
  let obj5 = {
    learnMoreHook(children, arg1) {
      let intl;
      obj4.usesLearnMoreHook = true;
      obj = { variant: "body-sm/medium", color: "text-link", style: closure_2.learnMore, accessible: true, accessibilityRole: "button", accessibilityLabel: intl.string(intl8.t.vRWrrr), onPress: handleLearnMore, children };
      const Text = Text_Text.Text;
      intl = intl8.intl;
      return authStore2(Text, obj, arg1);
    },
    onClick: handleLearnMore
  };
  const formatResult = intl3.format(intl8.t["6kzaqs"], obj5);
  let arr = formatResult;
  if (!Array.isArray(formatResult)) {
    const items = [formatResult];
    arr = items;
  }
  let obj6 = { ref, contentContainerStyle: items1, children: items3 };
  items1 = [tmp3.scrollViewContainer, ];
  let obj7 = { paddingBottom: insets.bottom + tmp10(575).space.PX_16 };
  const HubEmailConnectionScreen = HubEmailConnectionModal.HubEmailConnectionScreen;
  items1[1] = obj7;
  let obj8 = { style: tmp3.container, children: items2 };
  let obj9 = { style: tmp3.header, children: closure_12(InkQuillSpotIllustration.InkQuillSpotIllustration, { scale: 0.75 }) };
  items2 = [closure_12(c6, obj9), , , ];
  let obj10 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp3.title, accessibilityRole: "header", children: formatToPlainStringResult };
  items2[1] = closure_12(Text_Text.Text, obj10);
  let obj11 = { style: tmp3.description, children: mapped };
  const tmp19 = ref;
  if (obj4.usesLearnMoreHook) {
    mapped = arr.map((item, index) => {
      let tmp = item;
      if (typeof item === "string") {
        obj = { style: closure_2.descriptionText, variant: "body-sm/medium", color: "text-default", children: item.trimEnd() };
        const Text = Text_Text.Text;
        tmp = authStore2(Text, obj, index);
      }
      return tmp;
    });
  } else {
    let obj12 = { style: tmp3.descriptionText, variant: "body-sm/medium", color: "text-default", children: formatResult };
    mapped = tmp17(Text_Text.Text, obj12);
  }
  items2[2] = closure_12(c6, obj11);
  const obj13 = {
    label: intl4.string(intl8.t["K/7rLI"]),
    placeholder: intl5.string(intl8.t.ImAOh5),
    placeholderTextColor: tmp3.placeholder.color,
    value,
    textContentType: "emailAddress",
    autoCapitalize: "none",
    keyboardType: "email-address",
    hint: intl6.format(intl8.t.RPT0vj, obj14),
    textStyle: tmp3.textInput,
    onChangeText: tmp6,
    style: tmp3.input,
    clearButtonVisibility: native.ClearButtonVisibility.WITH_CONTENT,
    error: anyErrorMessage,
    onFocus() {
      const timerId = setTimeout(() => {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd();
        }
      }, 100);
    },
    onBlur() {
      const timerId = setTimeout(() => {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd();
        }
      }, 100);
    }
  };
  const tmp10Result = invite(7617);
  intl4 = intl8.intl;
  intl5 = intl8.intl;
  intl6 = intl8.intl;
  anyErrorMessage = undefined;
  obj14 = { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY };
  if (obj2 != null) {
    anyErrorMessage = obj2.getAnyErrorMessage();
  }
  const obj15 = { children: closure_13(tmp19, obj6) };
  items2[3] = closure_12(tmp10Result, obj13);
  items3 = [tmp18(tmp20, obj8), , ];
  const obj16 = { style: tmp3.growSpacing };
  items3[1] = closure_12(c6, obj16);
  const obj17 = { style: tmp3.buttonContainer, children: closure_12(Button, obj18) };
  obj18 = {
    size: "lg",
    text: intl7.string(intl8.t["8vmKO0"]),
    onPress: function signup() {
      return obj(...arguments);
    },
    loading: first1
  };
  Button = components_Button_Button.Button;
  intl7 = intl8.intl;
  items3[2] = closure_12(c6, obj17);
  return closure_12(HubEmailConnectionScreen, obj15);
};
