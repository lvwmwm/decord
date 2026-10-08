// Module ID: 12499
// Function ID: 12500
// Name: InviteError
// Dependencies: [19, 17, 1085, 21, 5090, 587, 558, 576, 4929, 4991, 12500, 12501, 12502, 1126, 5375, 5086, 1414, 1200, 12503, 6161, 2127, 2]

// Module 12499 (InviteError)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import shared from "shared" /* 4929 */;
import useThemeDefault from "useTheme" /* 4991 */;
import Text_Text from "Text/Text" /* 5086 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import GuildIcon from "GuildIcon" /* 6161 */;
import InviteErrorUtils from "InviteErrorUtils" /* 12502 */;
import AssetRegistryDefault from "AssetRegistry" /* 12503 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let importDefault;

let c10;
let c3;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
({ Image: c3, View: closure_4 } = react_native);
({ AbortCodes: hasOwnProperty, HelpdeskArticles: metroRequire, InviteStates: metroImportDefault } = Constants);
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { expiredImage: { marginTop: 32, marginBottom: 32 }, expiredTitle: { marginBottom: 8, backgroundColor: "transparent", textAlign: "center" }, expiredBody: { backgroundColor: "transparent", marginBottom: 24 }, disabledView: { justifyContent: "center", alignItems: "center" }, disabledPauseIcon: size, guildIcon: obj2, disabledTitle: { marginTop: 16, marginBottom: 8, textAlign: "center" }, disabledBody: { textAlign: "center", marginBottom: 16 } };
size = { position: "absolute", alignSelf: "center", tintColor: nativeDefault.colors.WHITE, width: 42, height: 42 };
createStyles = createStyles.createStyles;
obj2 = { borderRadius: nativeDefault.radii.lg, opacity: 0.2, zIndex: -999 };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function InviteErrorBase(inviteError) {
  let invite;
  let items;
  let onPress;
  let onPressClose;
  let stringResult;
  let tmp5;
  let tmp9;
  let obj = onPressClose(576);
  const cResult = obj.c(27);
  ({ invite, onPressClose } = inviteError);
  inviteError = inviteError.inviteError;
  const tmp4 = closure_11();
  if (cResult[0] !== onPressClose) {
    function handlePressClose() {
      onPressClose();
    }
    cResult[0] = onPressClose;
    cResult[1] = handlePressClose;
    tmp5 = handlePressClose;
  } else {
    tmp5 = cResult[1];
  }
  importDefault = tmp5;
  const tmpResult = onPressClose(4929);
  const tmp6Result = importDefault(tmpResult.isThemeDark(useThemeDefault()) ? 12500 : 12501);
  let code;
  if (inviteError != null) {
    code = inviteError.code;
  }
  if (cResult[2] !== code) {
    const tmpResult2 = onPressClose(12502);
    const descriptiveInviteError = tmpResult2.getDescriptiveInviteError(code);
    cResult[2] = code;
    cResult[3] = descriptiveInviteError;
    tmp9 = descriptiveInviteError;
  } else {
    tmp9 = cResult[3];
  }
  let description;
  const tmp11 = cResult[4];
  if (tmp9 != null) {
    description = tmp9.description;
  }
  if (tmp11 === description) {
    let tmp13;
    let tmp16;
    if (cResult[5] === invite.state) {
      tmp13 = cResult[6];
    }
    if (cResult[7] !== tmp5) {
      function renderButton() {
        let intl;
        const obj = { variant: "primary", size: "lg", text: intl.string(intl5.t.wcqOoF), onPress };
        const Button = components_Button_Button.Button;
        intl = intl5.intl;
        return metroImportAll(Button, obj);
      }
      cResult[7] = tmp5;
      cResult[8] = renderButton;
      tmp16 = renderButton;
    } else {
      tmp16 = cResult[8];
    }
    if (cResult[9] === tmp6Result) {
      let tmp17;
      let tmp23;
      if (cResult[10] === tmp4.expiredImage) {
        tmp17 = cResult[11];
      }
      let title;
      const tmp21 = cResult[12];
      if (tmp9 != null) {
        title = tmp9.title;
      }
      if (tmp21 !== title) {
        let title1;
        if (tmp9 != null) {
          title1 = tmp9.title;
        }
        if (title1 == null) {
          const intl3 = tmp(1126).intl;
          title1 = intl3.string(tmp(1126).t.u9zxnX);
        }
        let title2;
        if (tmp9 != null) {
          title2 = tmp9.title;
        }
        cResult[12] = title2;
        cResult[13] = title1;
        tmp23 = title1;
      } else {
        tmp23 = cResult[13];
      }
      if (cResult[14] === tmp4.expiredTitle) {
        let tmp26;
        if (cResult[15] === tmp23) {
          tmp26 = cResult[16];
        }
        if (cResult[17] === tmp13) {
          let tmp29;
          let tmp32;
          if (cResult[18] === tmp4.expiredBody) {
            tmp29 = cResult[19];
          }
          if (cResult[20] !== tmp16) {
            const tmp16Result = tmp16();
            cResult[20] = tmp16;
            cResult[21] = tmp16Result;
            tmp32 = tmp16Result;
          } else {
            tmp32 = cResult[21];
          }
          if (cResult[22] === tmp32) {
            if (cResult[23] === tmp17) {
              if (cResult[24] === tmp26) {
                let tmp34;
                if (cResult[25] === tmp29) {
                  tmp34 = cResult[26];
                }
                return tmp34;
              }
            }
          }
          const obj2 = { children: items };
          items = [tmp17, tmp26, tmp29, tmp32];
          const tmp37 = closure_10(closure_9, obj2);
          cResult[22] = tmp32;
          cResult[23] = tmp17;
          cResult[24] = tmp26;
          cResult[25] = tmp29;
          cResult[26] = tmp37;
          tmp34 = tmp37;
        }
        const obj3 = { style: tmp4.expiredBody, variant: "text-sm/medium", color: "text-default", children: tmp13 };
        const tmp31 = closure_8(onPressClose(5086).Text, obj3);
        cResult[17] = tmp13;
        cResult[18] = tmp4.expiredBody;
        cResult[19] = tmp31;
        tmp29 = tmp31;
      }
      const obj4 = { style: tmp4.expiredTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp23 };
      const tmp28 = closure_8(onPressClose(5086).Text, obj4);
      cResult[14] = tmp4.expiredTitle;
      cResult[15] = tmp23;
      cResult[16] = tmp28;
      tmp26 = tmp28;
    }
    const obj5 = { style: tmp4.expiredImage, source: tmp6Result };
    const tmp20 = closure_8(closure_3, obj5);
    cResult[9] = tmp6Result;
    cResult[10] = tmp4.expiredImage;
    cResult[11] = tmp20;
    tmp17 = tmp20;
  }
  if (invite.state === constants3.BANNED) {
    const intl2 = tmp(1126).intl;
    stringResult = intl2.string(tmp(1126).t["GzD/aa"]);
  } else {
    stringResult = undefined;
    if (tmp9 != null) {
      stringResult = tmp9.description;
    }
    if (stringResult == null) {
      let intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t.FWkU6P);
    }
  }
  let description1;
  if (tmp9 != null) {
    description1 = tmp9.description;
  }
  cResult[4] = description1;
  cResult[5] = invite.state;
  cResult[6] = stringResult;
  tmp13 = stringResult;
}) : (function InviteErrorBase(invite) {
  let closure_129_0;
  let intl4;
  let inviteError;
  let stringResult;
  let title;
  ({ onPressClose: closure_129_0, inviteError } = invite);
  invite = invite.invite;
  const tmp = closure_11();
  const obj = shared;
  let code;
  const tmp4Result = importDefault(obj.isThemeDark(useThemeDefault()) ? 12500 : 12501);
  const getDescriptiveInviteError = InviteErrorUtils.getDescriptiveInviteError;
  InviteErrorUtils;
  if (inviteError != null) {
    code = inviteError.code;
  }
  const descriptiveInviteError = getDescriptiveInviteError(code);
  if (invite.state === metroImportDefault.BANNED) {
    const intl2 = tmp2(1126).intl;
    stringResult = intl2.string(tmp2(1126).t["GzD/aa"]);
  } else {
    stringResult = undefined;
    if (descriptiveInviteError != null) {
      stringResult = descriptiveInviteError.description;
    }
    if (stringResult == null) {
      const intl = tmp2(1126).intl;
      stringResult = intl.string(tmp2(1126).t.FWkU6P);
    }
  }
  const items = [, , , ];
  const obj2 = { style: tmp.expiredImage, source: tmp4Result };
  items[0] = metroImportAll(_false, obj2);
  const obj3 = { style: tmp.expiredTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  title = undefined;
  const Text = tmp2(5086).Text;
  const tmp10 = authStore;
  const tmp11 = React4;
  if (descriptiveInviteError != null) {
    title = descriptiveInviteError.title;
  }
  if (title == null) {
    const intl3 = tmp2(1126).intl;
    title = intl3.string(tmp2(1126).t.u9zxnX);
  }
  function handlePressClose() {
    closure_1_0();
  }
  const obj4 = { children: items };
  items[1] = metroImportAll(Text, obj3);
  const obj5 = { style: tmp.expiredBody, variant: "text-sm/medium", color: "text-default", children: stringResult };
  items[2] = metroImportAll(Text_Text.Text, obj5);
  const obj6 = { variant: "primary", size: "lg", text: intl4.string(intl5.t.wcqOoF), onPress: handlePressClose };
  const Button = tmp2(5375).Button;
  intl4 = tmp2(1126).intl;
  items[3] = metroImportAll(Button, obj6);
  return tmp10(tmp11, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function InviteDisabledError(onPressClose) {
  let items;
  let items1;
  let obj9;
  let onPress;
  let tmp5;
  let obj = onPressClose(576);
  const cResult = obj.c(30);
  onPressClose = onPressClose.onPressClose;
  const invite = onPressClose.invite;
  const tmp4 = closure_11();
  if (cResult[0] !== onPressClose) {
    function handlePressClose() {
      onPressClose();
    }
    cResult[0] = onPressClose;
    cResult[1] = handlePressClose;
    tmp5 = handlePressClose;
  } else {
    tmp5 = cResult[1];
  }
  importDefault = tmp5;
  const guild = invite.guild;
  if (null == guild) {
    return null;
  } else {
    if (cResult[2] === guild.icon) {
      let tmp6;
      let tmp9;
      let tmp10;
      if (cResult[3] === guild.id) {
        tmp6 = cResult[4];
      }
      if (cResult[5] !== tmp5) {
        function renderButton() {
          let intl;
          const obj = { variant: "primary", size: "lg", text: intl.string(intl5.t["yD/zkn"]), onPress };
          const Button = components_Button_Button.Button;
          intl = intl5.intl;
          return metroImportAll(Button, obj);
        }
        cResult[5] = tmp5;
        cResult[6] = renderButton;
        tmp9 = renderButton;
      } else {
        tmp9 = cResult[6];
      }
      if (cResult[7] !== tmp4.disabledPauseIcon) {
        const obj4 = { style: tmp4.disabledPauseIcon, source: AssetRegistryDefault };
        const Icon = tmp(1200).Icon;
        const tmp13 = closure_8(Icon, obj4);
        cResult[7] = tmp4.disabledPauseIcon;
        cResult[8] = tmp13;
        tmp10 = tmp13;
      } else {
        tmp10 = cResult[8];
      }
      if (cResult[9] === tmp6) {
        let tmp14;
        if (cResult[10] === tmp4.guildIcon) {
          tmp14 = cResult[11];
        }
        if (cResult[12] === tmp4.disabledView) {
          if (cResult[13] === tmp10) {
            let tmp19;
            let tmp24;
            let tmp26;
            let tmp29;
            if (cResult[14] === tmp14) {
              tmp19 = cResult[15];
            }
            const _Symbol = Symbol;
            const disabledTitle = tmp4.disabledTitle;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              let intl = tmp(1126).intl;
              const stringResult = intl.string(onPressClose(1126).t.jlLX2Z);
              cResult[16] = stringResult;
              tmp24 = stringResult;
            } else {
              tmp24 = cResult[16];
            }
            if (cResult[17] !== tmp4.disabledTitle) {
              const obj5 = { style: disabledTitle, variant: "heading-xl/semibold", color: "text-feedback-critical", children: tmp24 };
              const tmp28 = closure_8(onPressClose(5086).Text, obj5);
              cResult[17] = tmp4.disabledTitle;
              cResult[18] = tmp28;
              tmp26 = tmp28;
            } else {
              tmp26 = cResult[18];
            }
            const _Symbol2 = Symbol;
            const disabledBody = tmp4.disabledBody;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(1126).intl;
              const format = intl2.format;
              const obj6 = { articleLink: obj9.getArticleURL(constants2.INVITE_DISABLED) };
              const RXSeLl = tmp(1126).t.RXSeLl;
              obj9 = HelpdeskUtilsDefault;
              const formatResult = format(RXSeLl, obj6);
              cResult[19] = formatResult;
              tmp29 = formatResult;
            } else {
              tmp29 = cResult[19];
            }
            if (cResult[20] === tmp4.disabledBody) {
              let tmp33;
              let tmp36;
              if (cResult[21] === tmp29) {
                tmp33 = cResult[22];
              }
              if (cResult[23] !== tmp9) {
                const tmp9Result = tmp9();
                cResult[23] = tmp9;
                cResult[24] = tmp9Result;
                tmp36 = tmp9Result;
              } else {
                tmp36 = cResult[24];
              }
              if (cResult[25] === tmp33) {
                if (cResult[26] === tmp36) {
                  if (cResult[27] === tmp19) {
                    let tmp38;
                    if (cResult[28] === tmp26) {
                      tmp38 = cResult[29];
                    }
                    return tmp38;
                  }
                }
              }
              const obj7 = { children: items };
              items = [tmp19, tmp26, tmp33, tmp36];
              const tmp41 = closure_10(closure_9, obj7);
              cResult[25] = tmp33;
              cResult[26] = tmp36;
              cResult[27] = tmp19;
              cResult[28] = tmp26;
              cResult[29] = tmp41;
              tmp38 = tmp41;
            }
            const obj8 = { style: disabledBody, variant: "text-md/normal", color: "text-default", children: tmp29 };
            const tmp35 = closure_8(onPressClose(5086).Text, obj8);
            cResult[20] = tmp4.disabledBody;
            cResult[21] = tmp29;
            cResult[22] = tmp35;
            tmp33 = tmp35;
          }
        }
        const obj10 = { style: tmp4.disabledView, children: items1 };
        items1 = [tmp10, tmp14];
        const tmp22 = closure_10(closure_4, obj10);
        cResult[12] = tmp4.disabledView;
        cResult[13] = tmp10;
        cResult[14] = tmp14;
        cResult[15] = tmp22;
        tmp19 = tmp22;
      }
      const obj11 = { style: tmp4.guildIcon, icon: tmp6, size: onPressClose(6161).GuildIconSizes.XLARGE };
      const tmp17 = GuildIconDefault;
      const tmp18 = closure_8(tmp17, obj11);
      cResult[9] = tmp6;
      cResult[10] = tmp4.guildIcon;
      cResult[11] = tmp18;
      tmp14 = tmp18;
    }
    const obj19 = { id: null, icon: null, size: 64, canAnimate: false };
    ({ id: obj3.id, icon: obj3.icon } = guild);
    const obj2 = AvatarUtilsDefault;
    const guildIconURL = obj2.getGuildIconURL(obj19);
    cResult[2] = guild.icon;
    cResult[3] = guild.id;
    cResult[4] = guildIconURL;
    tmp6 = guildIconURL;
  }
}) : (function InviteDisabledError(onPressClose) {
  let RXSeLl;
  let format;
  let intl;
  let intl3;
  let items;
  let items1;
  let obj10;
  let obj11;
  onPressClose = onPressClose.onPressClose;
  const invite = onPressClose.invite;
  const tmp = closure_11();
  const guild = invite.guild;
  if (null == guild) {
    return null;
  } else {
    function handlePressClose() {
      onPressClose();
    }
    const obj3 = { id: null, icon: null, size: 64, canAnimate: false };
    ({ id: obj2.id, icon: obj2.icon } = guild);
    const obj4 = { children: items1 };
    const obj5 = { style: tmp.disabledView, children: items };
    const obj = AvatarUtilsDefault;
    const guildIconURL = obj.getGuildIconURL(obj3);
    const obj6 = { style: tmp.disabledPauseIcon, source: AssetRegistryDefault };
    const Icon = native.Icon;
    items = [metroImportAll(Icon, obj6), ];
    const obj7 = { style: tmp.guildIcon, icon: guildIconURL, size: GuildIcon.GuildIconSizes.XLARGE };
    const tmp10 = GuildIconDefault;
    items[1] = metroImportAll(tmp10, obj7);
    items1 = [authStore(React3, obj5), , , ];
    const obj8 = { style: tmp.disabledTitle, variant: "heading-xl/semibold", color: "text-feedback-critical", children: intl.string(intl5.t.jlLX2Z) };
    const Text = Text_Text.Text;
    intl = intl5.intl;
    items1[1] = metroImportAll(Text, obj8);
    const obj9 = { style: tmp.disabledBody, variant: "text-md/normal", color: "text-default", children: format(RXSeLl, obj11) };
    const Text2 = Text_Text.Text;
    const intl2 = intl5.intl;
    format = intl2.format;
    obj11 = { articleLink: obj10.getArticleURL(metroRequire.INVITE_DISABLED) };
    RXSeLl = intl5.t.RXSeLl;
    obj10 = HelpdeskUtilsDefault;
    items1[2] = metroImportAll(Text2, obj9);
    const obj20 = { variant: "primary", size: "lg", text: intl3.string(intl5.t["yD/zkn"]), onPress: handlePressClose };
    const Button = components_Button_Button.Button;
    intl3 = intl5.intl;
    items1[3] = metroImportAll(Button, obj20);
    return authStore(React4, obj4);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function InviteError(inviteError) {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(6);
  inviteError = inviteError.inviteError;
  if (null == inviteError) {
    let tmp16;
    if (cResult[0] !== inviteError) {
      const obj2 = {};
      const merged = Object.assign(inviteError);
      const tmp22 = metroImportAll(closure_12, obj2);
      cResult[0] = inviteError;
      cResult[1] = tmp22;
      tmp16 = tmp22;
    } else {
      tmp16 = cResult[1];
    }
    tmp2 = tmp16;
  } else if (inviteError.code === hasOwnProperty.INVITES_DISABLED) {
    let tmp9;
    if (cResult[2] !== inviteError) {
      const obj3 = {};
      const merged1 = Object.assign(inviteError);
      const tmp15 = metroImportAll(closure_13, obj3);
      cResult[2] = inviteError;
      cResult[3] = tmp15;
      tmp9 = tmp15;
    } else {
      tmp9 = cResult[3];
    }
    tmp2 = tmp9;
  } else if (cResult[4] !== inviteError) {
    const obj4 = {};
    const merged2 = Object.assign(inviteError);
    const tmp8 = metroImportAll(closure_12, obj4);
    cResult[4] = inviteError;
    cResult[5] = tmp8;
    tmp2 = tmp8;
  } else {
    tmp2 = cResult[5];
  }
  return tmp2;
}) : (function InviteError(inviteError) {
  let tmp7;
  inviteError = inviteError.inviteError;
  if (null == inviteError) {
    const obj2 = {};
    const merged = Object.assign(inviteError);
    tmp7 = metroImportAll(closure_12, obj2);
  } else if (inviteError.code === hasOwnProperty.INVITES_DISABLED) {
    const obj3 = {};
    const merged1 = Object.assign(inviteError);
    tmp7 = metroImportAll(closure_13, obj3);
  } else {
    const obj = {};
    const merged2 = Object.assign(inviteError);
    tmp7 = metroImportAll(closure_12, obj);
  }
  return tmp7;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/accept_invite/native/InviteError.tsx");

export default tmp7;
