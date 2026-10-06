// Module ID: 12413
// Function ID: 12414
// Name: HubEmailConnectionContent
// Dependencies: [5, 32, 19, 17, 2051, 12400, 1085, 21, 4896, 587, 1490, 6478, 12414, 5319, 1126, 12409, 12415, 4892, 4860, 12417, 1987, 6104, 1188, 5601, 2]
// Exports: default

// Module 12413 (HubEmailConnectionContent)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl8 from "intl" /* 1126 */;
import useNavigation from "useNavigation" /* 1490 */;
import Text_Text from "Text/Text" /* 4892 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import HubConstants from "HubConstants" /* 12400 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c6, c7, closure_4, dependencyMap;

let c10;
let c9;
let closure_12;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ HubEmailConnectionSteps: c9, INVITE_ROUTING_HUB_GUILD_ID: c10 } = HubConstants);
const MarketingURLs = Constants.MarketingURLs;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { paddingHorizontal: 16 }, header: { marginTop: 16, marginBottom: 16, alignSelf: "center" }, scrollViewContainer: { flexGrow: 2 }, title: { textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", marginBottom: 24 }, input: { marginBottom: 32 }, textInput: obj2, growSpacing: obj3, buttonContainer: obj4 };
obj2 = { borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_14 = createStyles(obj);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionContent.tsx");

export default function HubEmailConnectionContent(arg0) {
  let Button;
  let _undefined;
  let anyErrorMessage;
  let c5;
  let first1;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let invite;
  let items;
  let items1;
  let items2;
  let obj10;
  let obj12;
  let obj16;
  let obj2;
  let paths;
  let tmp6;
  let value;
  ({ onClose: require, invite } = arg0);
  dependencyMap = undefined;
  value = undefined;
  _slicedToArray = undefined;
  react = undefined;
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
          return { value: "IconComponent", done: null };
        }
      } else {
        let c5;
        try {
          let closure_3;
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
              closure_2_4(true);
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
              const obj10 = guildId(guilds_info[12]);
              guilds_info = obj10.sendVerificationEmail(_asyncToGenerator, true, tmp73);
              c6 = 3;
              c7 = 1;
              const obj5 = { value: guilds_info, done: false };
              return obj5;
            }
          } else if (1 === c6) {
            c5 = 0;
            guilds_info = closure_131_4(false);
            throw closure_4;
          } else {
            if (2 === c6) {
              c5 = 1;
              closure_3 = closure_4;
              guilds_info = closure_131_5;
              const self = this;
              const self2 = this;
              const aPIError = new guildId(guilds_info[13]).APIError(closure_3);
              closure_131_5(aPIError);
            } else {
              if (3 === c6) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 0;
                  closure_131_4(false);
                  c7 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  guildId2 = value;
                  guilds_info = guildId2.guilds_info;
                  if (guildId2.has_matching_guild) {
                    if (null != guildId) {
                      const obj7 = { email: closure_131_3, onClose: closure_131_0, guildId };
                      closure_131_2.push(constants.VERIFY_PIN, obj7);
                    }
                  }
                  if (0 === guilds_info.length) {
                    const obj8 = { email: closure_131_3, onClose: closure_131_0 };
                    closure_131_2.push(constants.SUBMIT_SCHOOL, obj8);
                  } else if (1 === guilds_info.length) {
                    const obj4 = guildId(guilds_info[12]);
                    guilds_info = obj4.sendVerificationEmail(closure_131_3, true, guilds_info[0].id);
                    c6 = 4;
                    c7 = 1;
                    const obj9 = { value: guilds_info, done: false };
                    return obj9;
                  } else {
                    const obj11 = { email: closure_131_3, onClose: closure_131_0, guildsInfo: guilds_info };
                    closure_131_2.push(constants.SELECT_SCHOOL, obj11);
                  }
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                closure_131_4(false);
                c7 = 3;
                const obj12 = { value, done: true };
                return obj12;
              } else {
                obj = { email: closure_131_3, onClose: closure_131_0, guildId: guilds_info[0].id };
                closure_131_2.push(constants.VERIFY_PIN, obj);
              }
              c5 = 1;
            }
            c5 = 0;
            closure_131_4(false);
            c7 = 3;
            return { value: "IconComponent", done: null };
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
  const tmp = closure_14();
  const tmp3 = dependencyMap;
  obj = useNavigation;
  dependencyMap = obj.useNavigation();
  [value, tmp6] = react.useState("");
  [first1, _slicedToArray] = react.useState(false);
  [obj2, c5] = _slicedToArray(react.useState(null), 2);
  const tmp9 = _slicedToArray(react.useState(null), 2);
  const insets = invite(6478)().insets;
  const ref = react.useRef(null);
  const intl = intl8.intl;
  const stringResult = intl.string(intl8.t.H1jCHH);
  let guild;
  if (invite != null) {
    guild = invite.guild;
  }
  let formatToPlainStringResult = stringResult;
  if (null != guild) {
    formatToPlainStringResult = stringResult;
    if (invite.guild.id !== closure_10) {
      let prop;
      if (invite != null) {
        prop = invite.approximate_member_count;
      }
      formatToPlainStringResult = stringResult;
      if (null != prop) {
        const name = invite.guild.name;
        const intl2 = tmp2(1126).intl;
        let obj3 = { guildName: name, count: invite.approximate_member_count };
        formatToPlainStringResult = intl2.formatToPlainString(tmp2(1126).t["4T4+p1"], obj3);
      }
    }
  }
  let obj4 = { ref, contentContainerStyle: items, children: items2 };
  items = [tmp.scrollViewContainer, ];
  let obj5 = { paddingBottom: insets.bottom + tmp10(587).space.PX_16 };
  const HubEmailConnectionScreen = tmp2(12409).HubEmailConnectionScreen;
  items[1] = obj5;
  let obj6 = { style: tmp.container, children: items1 };
  let obj7 = { style: tmp.header, children: closure_12(tmp2(12415).InkQuillSpotIllustration, { scale: 0.75 }) };
  items1 = [closure_12(ref, obj7), , , ];
  let obj8 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, accessibilityRole: "header", children: formatToPlainStringResult };
  items1[1] = closure_12(Text_Text.Text, obj8);
  let obj9 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl3.format(tmp2(1126).t["6kzaqs"], obj10) };
  const Text = tmp2(4892).Text;
  intl3 = tmp2(1126).intl;
  obj10 = {
    onClick() {
      obj = invite(paths[18]);
      obj.openLazy(require("asyncRequire")(paths[19], paths.paths), "HubEmailConnectionDescriptionActionsheet");
    }
  };
  items1[2] = closure_12(Text, obj9);
  let obj11 = {
    label: intl4.string(tmp2(1126).t["K/7rLI"]),
    placeholder: intl5.string(tmp2(1126).t.ImAOh5),
    value,
    textContentType: "emailAddress",
    autoCapitalize: "none",
    keyboardType: "email-address",
    hint: intl6.format(tmp2(1126).t.RPT0vj, obj12),
    textStyle: tmp.textInput,
    onChangeText: tmp6,
    style: tmp.input,
    clearButtonVisibility: tmp2(1188).ClearButtonVisibility.WITH_CONTENT,
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
  const tmp10Result = invite(6104);
  intl4 = tmp2(1126).intl;
  intl5 = tmp2(1126).intl;
  intl6 = tmp2(1126).intl;
  obj12 = { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY };
  anyErrorMessage = undefined;
  const tmp18 = obj;
  if (obj2 != null) {
    anyErrorMessage = obj2.getAnyErrorMessage();
  }
  const obj13 = { children: closure_13(tmp18, obj4) };
  items1[3] = closure_12(tmp10Result, obj11);
  items2 = [tmp17(tmp19, obj6), , ];
  const obj14 = { style: tmp.growSpacing };
  items2[1] = closure_12(ref, obj14);
  const obj15 = { style: tmp.buttonContainer, children: closure_12(Button, obj16) };
  obj16 = {
    size: "lg",
    text: intl7.string(intl8.t["8vmKO0"]),
    onPress: function signup() {
      return obj(...arguments);
    },
    loading: first1
  };
  Button = tmp2(5601).Button;
  intl7 = tmp2(1126).intl;
  items2[2] = closure_12(ref, obj15);
  return closure_12(HubEmailConnectionScreen, obj13);
};
