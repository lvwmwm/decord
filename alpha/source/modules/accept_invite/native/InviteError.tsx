// Module ID: 12436
// Function ID: 12437
// Name: InviteError
// Dependencies: [19, 17, 1085, 21, 5091, 587, 558, 576, 4930, 4992, 12437, 12438, 12439, 1126, 5376, 6163, 5087, 1415, 1200, 12440, 6165, 2127, 2]

// Module 12436 (InviteError)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import shared from "shared" /* 4930 */;
import useThemeDefault from "useTheme" /* 4992 */;
import Text_Text from "Text/Text" /* 5087 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import FastImageDefault from "FastImage" /* 6163 */;
import GuildIcon from "GuildIcon" /* 6165 */;
import InviteErrorUtils from "InviteErrorUtils" /* 12439 */;
import AssetRegistryDefault from "AssetRegistry" /* 12440 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let importDefault;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
const View = react_native.View;
({ AbortCodes: closure_4, HelpdeskArticles: hasOwnProperty, InviteStates: metroRequire } = Constants);
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { expiredImage: { marginTop: 32, marginBottom: 32 }, expiredTitle: { marginBottom: 8, backgroundColor: "transparent", textAlign: "center" }, expiredBody: { backgroundColor: "transparent", marginBottom: 24 }, disabledView: { justifyContent: "center", alignItems: "center" }, disabledPauseIcon: size, guildIcon: obj2, disabledTitle: { marginTop: 16, marginBottom: 8, textAlign: "center" }, disabledBody: { textAlign: "center", marginBottom: 16 } };
size = { position: "absolute", alignSelf: "center", tintColor: nativeDefault.colors.WHITE, width: 42, height: 42 };
createStyles = createStyles.createStyles;
obj2 = { borderRadius: nativeDefault.radii.lg, opacity: 0.2, zIndex: -999 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function InviteErrorBase(inviteError) {
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
  const tmp4 = closure_10();
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
  const tmpResult = onPressClose(4930);
  const tmp6Result = importDefault(tmpResult.isThemeDark(useThemeDefault()) ? 12437 : 12438);
  let code;
  if (inviteError != null) {
    code = inviteError.code;
  }
  if (cResult[2] !== code) {
    const tmpResult2 = onPressClose(12439);
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
        return metroImportDefault(Button, obj);
      }
      cResult[7] = tmp5;
      cResult[8] = renderButton;
      tmp16 = renderButton;
    } else {
      tmp16 = cResult[8];
    }
    if (cResult[9] === tmp6Result) {
      let tmp17;
      let tmp22;
      if (cResult[10] === tmp4.expiredImage) {
        tmp17 = cResult[11];
      }
      let title;
      const tmp20 = cResult[12];
      if (tmp9 != null) {
        title = tmp9.title;
      }
      if (tmp20 !== title) {
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
        tmp22 = title1;
      } else {
        tmp22 = cResult[13];
      }
      if (cResult[14] === tmp4.expiredTitle) {
        let tmp25;
        if (cResult[15] === tmp22) {
          tmp25 = cResult[16];
        }
        if (cResult[17] === tmp13) {
          let tmp28;
          let tmp31;
          if (cResult[18] === tmp4.expiredBody) {
            tmp28 = cResult[19];
          }
          if (cResult[20] !== tmp16) {
            const tmp16Result = tmp16();
            cResult[20] = tmp16;
            cResult[21] = tmp16Result;
            tmp31 = tmp16Result;
          } else {
            tmp31 = cResult[21];
          }
          if (cResult[22] === tmp31) {
            if (cResult[23] === tmp17) {
              if (cResult[24] === tmp25) {
                let tmp33;
                if (cResult[25] === tmp28) {
                  tmp33 = cResult[26];
                }
                return tmp33;
              }
            }
          }
          const obj2 = { children: items };
          items = [tmp17, tmp25, tmp28, tmp31];
          const tmp36 = closure_9(closure_8, obj2);
          cResult[22] = tmp31;
          cResult[23] = tmp17;
          cResult[24] = tmp25;
          cResult[25] = tmp28;
          cResult[26] = tmp36;
          tmp33 = tmp36;
        }
        const obj3 = { style: tmp4.expiredBody, variant: "text-sm/medium", color: "text-default", children: tmp13 };
        const tmp30 = closure_7(onPressClose(5087).Text, obj3);
        cResult[17] = tmp13;
        cResult[18] = tmp4.expiredBody;
        cResult[19] = tmp30;
        tmp28 = tmp30;
      }
      const obj4 = { style: tmp4.expiredTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp22 };
      const tmp27 = closure_7(onPressClose(5087).Text, obj4);
      cResult[14] = tmp4.expiredTitle;
      cResult[15] = tmp22;
      cResult[16] = tmp27;
      tmp25 = tmp27;
    }
    const obj5 = { style: tmp4.expiredImage, source: tmp6Result };
    const tmp19 = closure_7(FastImageDefault, obj5);
    cResult[9] = tmp6Result;
    cResult[10] = tmp4.expiredImage;
    cResult[11] = tmp19;
    tmp17 = tmp19;
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
  const tmp = closure_10();
  const obj = shared;
  let code;
  const tmp4Result = importDefault(obj.isThemeDark(useThemeDefault()) ? 12437 : 12438);
  const getDescriptiveInviteError = InviteErrorUtils.getDescriptiveInviteError;
  InviteErrorUtils;
  if (inviteError != null) {
    code = inviteError.code;
  }
  const descriptiveInviteError = getDescriptiveInviteError(code);
  if (invite.state === metroRequire.BANNED) {
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
  items[0] = metroImportDefault(FastImageDefault, obj2);
  const obj3 = { style: tmp.expiredTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  title = undefined;
  const Text = tmp2(5087).Text;
  const tmp10 = React4;
  const tmp11 = metroImportAll;
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
  items[1] = metroImportDefault(Text, obj3);
  const obj5 = { style: tmp.expiredBody, variant: "text-sm/medium", color: "text-default", children: stringResult };
  items[2] = metroImportDefault(Text_Text.Text, obj5);
  const obj6 = { variant: "primary", size: "lg", text: intl4.string(intl5.t.wcqOoF), onPress: handlePressClose };
  const Button = tmp2(5376).Button;
  intl4 = tmp2(1126).intl;
  items[3] = metroImportDefault(Button, obj6);
  return tmp10(tmp11, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function InviteDisabledError(onPressClose) {
  let items;
  let items1;
  let obj9;
  let onPress;
  let tmp5;
  let obj = onPressClose(576);
  const cResult = obj.c(30);
  onPressClose = onPressClose.onPressClose;
  const invite = onPressClose.invite;
  const tmp4 = closure_10();
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
          return metroImportDefault(Button, obj);
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
        const tmp13 = closure_7(Icon, obj4);
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
              const tmp28 = closure_7(onPressClose(5087).Text, obj5);
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
              const tmp41 = closure_9(closure_8, obj7);
              cResult[25] = tmp33;
              cResult[26] = tmp36;
              cResult[27] = tmp19;
              cResult[28] = tmp26;
              cResult[29] = tmp41;
              tmp38 = tmp41;
            }
            const obj8 = { style: disabledBody, variant: "text-md/normal", color: "text-default", children: tmp29 };
            const tmp35 = closure_7(onPressClose(5087).Text, obj8);
            cResult[20] = tmp4.disabledBody;
            cResult[21] = tmp29;
            cResult[22] = tmp35;
            tmp33 = tmp35;
          }
        }
        const obj10 = { style: tmp4.disabledView, children: items1 };
        items1 = [tmp10, tmp14];
        const tmp22 = closure_9(View, obj10);
        cResult[12] = tmp4.disabledView;
        cResult[13] = tmp10;
        cResult[14] = tmp14;
        cResult[15] = tmp22;
        tmp19 = tmp22;
      }
      const obj11 = { style: tmp4.guildIcon, icon: tmp6, size: onPressClose(6165).GuildIconSizes.XLARGE };
      const tmp17 = GuildIconDefault;
      const tmp18 = closure_7(tmp17, obj11);
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
  const tmp = closure_10();
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
    items = [metroImportDefault(Icon, obj6), ];
    const obj7 = { style: tmp.guildIcon, icon: guildIconURL, size: GuildIcon.GuildIconSizes.XLARGE };
    const tmp10 = GuildIconDefault;
    items[1] = metroImportDefault(tmp10, obj7);
    items1 = [React4(View, obj5), , , ];
    const obj8 = { style: tmp.disabledTitle, variant: "heading-xl/semibold", color: "text-feedback-critical", children: intl.string(intl5.t.jlLX2Z) };
    const Text = Text_Text.Text;
    intl = intl5.intl;
    items1[1] = metroImportDefault(Text, obj8);
    const obj9 = { style: tmp.disabledBody, variant: "text-md/normal", color: "text-default", children: format(RXSeLl, obj11) };
    const Text2 = Text_Text.Text;
    const intl2 = intl5.intl;
    format = intl2.format;
    obj11 = { articleLink: obj10.getArticleURL(hasOwnProperty.INVITE_DISABLED) };
    RXSeLl = intl5.t.RXSeLl;
    obj10 = HelpdeskUtilsDefault;
    items1[2] = metroImportDefault(Text2, obj9);
    const obj20 = { variant: "primary", size: "lg", text: intl3.string(intl5.t["yD/zkn"]), onPress: handlePressClose };
    const Button = components_Button_Button.Button;
    intl3 = intl5.intl;
    items1[3] = metroImportDefault(Button, obj20);
    return React4(metroImportAll, obj4);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function InviteError(inviteError) {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(6);
  inviteError = inviteError.inviteError;
  if (null == inviteError) {
    let tmp16;
    if (cResult[0] !== inviteError) {
      const obj2 = {};
      const merged = Object.assign(inviteError);
      const tmp22 = metroImportDefault(closure_11, obj2);
      cResult[0] = inviteError;
      cResult[1] = tmp22;
      tmp16 = tmp22;
    } else {
      tmp16 = cResult[1];
    }
    tmp2 = tmp16;
  } else if (inviteError.code === constants.INVITES_DISABLED) {
    let tmp9;
    if (cResult[2] !== inviteError) {
      const obj3 = {};
      const merged1 = Object.assign(inviteError);
      const tmp15 = metroImportDefault(closure_12, obj3);
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
    const tmp8 = metroImportDefault(closure_11, obj4);
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
    tmp7 = metroImportDefault(closure_11, obj2);
  } else if (inviteError.code === constants.INVITES_DISABLED) {
    const obj3 = {};
    const merged1 = Object.assign(inviteError);
    tmp7 = metroImportDefault(closure_12, obj3);
  } else {
    const obj = {};
    const merged2 = Object.assign(inviteError);
    tmp7 = metroImportDefault(closure_11, obj);
  }
  return tmp7;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/accept_invite/native/InviteError.tsx");

export default tmp6;
