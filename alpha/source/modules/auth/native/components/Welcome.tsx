// Module ID: 16350
// Function ID: 16351
// Name: Welcome
// Dependencies: [19, 17, 16351, 5016, 7179, 12125, 1404, 5073, 8687, 1085, 7030, 7423, 21, 5092, 587, 558, 576, 12481, 1126, 38, 1200, 4962, 5088, 6156, 13501, 6626, 6662, 14061, 1503, 1631, 504, 7196, 1265, 510, 5396, 5930, 6169, 16352, 16347, 1504, 5379, 5958, 6258, 11492, 4827, 2]

// Module 16350 (Welcome)
import _modDef38 from "module_38" /* 38 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import Link from "Link" /* 1504 */;
import UserUtilsDefault from "UserUtils" /* 4962 */;
import Text_Text from "Text/Text" /* 5088 */;
import FastImageDefault from "FastImage" /* 6156 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6626 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6662 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 7030 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7196 */;
import Constants2 from "Constants" /* 7423 */;
import GuildInviteIconDefault from "GuildInviteIcon" /* 12481 */;
import AssetRegistryDefault from "AssetRegistry" /* 13501 */;
import AssetRegistry from "AssetRegistry" /* 14061 */;
import RegistrationStepsUtils from "RegistrationStepsUtils" /* 16347 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AgeGateStore from "AgeGateStore" /* 16351 */;
import ExperimentStore from "ExperimentStore" /* 5016 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7179 */;
import MultiAccountStore from "MultiAccountStore" /* 12125 */;
import UserRecord from "UserRecord" /* 1404 */;
import InviteStore from "InviteStore" /* 5073 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 8687 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, navigation;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_20;
let closure_21;
let closure_4;
let hasOwnProperty;
let map1;
let obj2;
let tmp;
const Storage2 = tmp(510);
let react = react_mod;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ AnalyticEvents: map1, StorageKeys: closure_14, AuthStates: closure_15, InviteStates: closure_16, ThemeTypes: closure_17 } = Constants);
const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
const InviteTypes = Constants2.InviteTypes;
({ jsx: closure_20, jsxs: closure_21 } = Fragment);
let createStyles = createStyles_mod;
let closure_22 = createStyles.createStyles((arg0) => {
  let num;
  const obj = { container: { height: "100%", flex: 1, padding: 16 }, logo: { flex: 0, width: 93, height: 70, tintColor: "white", alignSelf: "center", marginBottom: 24 }, scrollViewContainer: { flexShrink: 0, flexGrow: 1, justifyContent: "center" }, header: { textAlign: "center", marginBottom: 8, textTransform: "uppercase" }, subHeader: { fontSize: 18, textAlign: "center", alignSelf: "center", maxWidth: num, marginBottom: 24, marginHorizontal: 16 }, subHeaderWithInvite: { marginBottom: 16 }, centerpieceContainer: { flexGrow: 1, flexShrink: 1, justifyContent: "center" }, buttonContainer: { paddingHorizontal: 28, maxWidth: 480, alignSelf: "center", width: "100%" } };
  num = 300;
  const tmp = arg0;
  if (tmp) {
    num = 480;
  }
  return obj;
});
createStyles = createStyles_mod;
let obj = { container: obj2, text: { marginLeft: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16, flexDirection: "row", borderRadius: nativeDefault.radii.sm };
let closure_23 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function InviteCard(arg0) {
  let guild;
  let invite;
  let inviter;
  let items;
  let items1;
  let style;
  const obj = react2;
  const cResult = obj.c(32);
  ({ invite, style } = arg0);
  const tmp4 = closure_23();
  ({ guild, inviter } = invite);
  if (invite.state !== constants4.RESOLVED) {
    return null;
  } else {
    let name;
    let tmp15;
    let tmp11;
    if (null != guild) {
      let tmp34;
      let tmp39;
      if (cResult[0] !== guild) {
        const obj2 = { guild };
        const tmp37 = closure_20(GuildInviteIconDefault, obj2);
        cResult[0] = guild;
        cResult[1] = tmp37;
        tmp34 = tmp37;
      } else {
        tmp34 = cResult[1];
      }
      const _Symbol3 = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult = intl3.string(intl4.t["3rE1P8"]);
        cResult[2] = stringResult;
        tmp39 = stringResult;
      } else {
        tmp39 = cResult[2];
      }
      name = guild.name;
      tmp15 = tmp39;
      tmp11 = tmp34;
    } else if (null != tmp5) {
      let tmp21;
      let tmp26;
      let tmp30;
      let tmp32;
      _modDef38(null != inviter, "Null inviter");
      const tmp19 = importDefault;
      if (cResult[3] !== inviter) {
        const self3 = this;
        const self4 = this;
        const tmp24 = new UserRecord(inviter);
        cResult[3] = inviter;
        cResult[4] = tmp24;
        tmp21 = tmp24;
      } else {
        tmp21 = cResult[4];
      }
      if (cResult[5] !== tmp21) {
        const obj4 = { user: tmp21, guildId: "Array" };
        const tmp28 = closure_20(native.Avatar, obj4);
        cResult[5] = tmp21;
        cResult[6] = tmp28;
        tmp26 = tmp28;
      } else {
        tmp26 = cResult[6];
      }
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(intl4.t.OsdY8B);
        cResult[7] = stringResult1;
        tmp30 = stringResult1;
      } else {
        tmp30 = cResult[7];
      }
      if (cResult[8] !== inviter) {
        const tmp19Result = tmp19(4962);
        const formattedName = tmp19Result.getFormattedName(inviter);
        cResult[8] = inviter;
        cResult[9] = formattedName;
        tmp32 = formattedName;
      } else {
        tmp32 = cResult[9];
      }
      name = tmp32;
      tmp15 = tmp30;
      tmp11 = tmp26;
    } else if (null == inviter) {
      return null;
    } else {
      let tmp6;
      if (cResult[10] !== inviter) {
        const self = this;
        const self2 = this;
        const tmp9 = new UserRecord(inviter);
        cResult[10] = inviter;
        cResult[11] = tmp9;
        tmp6 = tmp9;
      } else {
        tmp6 = cResult[11];
      }
      if (cResult[12] !== tmp6) {
        const obj5 = { user: tmp6, guildId: "Array" };
        const tmp13 = closure_20(native.Avatar, obj5);
        cResult[12] = tmp6;
        cResult[13] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[13];
      }
      const _Symbol = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult2 = intl.string(intl4.t["+ITYkQ"]);
        cResult[14] = stringResult2;
        tmp15 = stringResult2;
      } else {
        tmp15 = cResult[14];
      }
      if (cResult[15] !== inviter) {
        const obj3 = UserUtilsDefault;
        const formattedName1 = obj3.getFormattedName(inviter, true);
        cResult[15] = inviter;
        cResult[16] = formattedName1;
        name = formattedName1;
      } else {
        name = cResult[16];
      }
    }
    if (cResult[17] === tmp4.container) {
      let tmp41;
      let tmp42;
      let tmp45;
      if (cResult[18] === style) {
        tmp41 = cResult[19];
      }
      if (cResult[20] !== tmp15) {
        const obj6 = { variant: "text-sm/medium", color: "text-subtle", children: tmp15 };
        const tmp44 = closure_20(Text_Text.Text, obj6);
        cResult[20] = tmp15;
        cResult[21] = tmp44;
        tmp42 = tmp44;
      } else {
        tmp42 = cResult[21];
      }
      if (cResult[22] !== name) {
        const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name };
        const tmp47 = closure_20(Text_Text.Text, obj7);
        cResult[22] = name;
        cResult[23] = tmp47;
        tmp45 = tmp47;
      } else {
        tmp45 = cResult[23];
      }
      if (cResult[24] === tmp4.text) {
        if (cResult[25] === tmp42) {
          let tmp48;
          if (cResult[26] === tmp45) {
            tmp48 = cResult[27];
          }
          if (cResult[28] === tmp11) {
            if (cResult[29] === tmp41) {
              let tmp52;
              if (cResult[30] === tmp48) {
                tmp52 = cResult[31];
              }
              return tmp52;
            }
          }
          const obj8 = { style: tmp41, children: items };
          items = [tmp11, tmp48];
          const tmp55 = closure_21(React3, obj8);
          cResult[28] = tmp11;
          cResult[29] = tmp41;
          cResult[30] = tmp48;
          cResult[31] = tmp55;
          tmp52 = tmp55;
        }
      }
      const obj9 = { style: tmp4.text, children: items1 };
      items1 = [tmp42, tmp45];
      const tmp51 = closure_21(React3, obj9);
      cResult[24] = tmp4.text;
      cResult[25] = tmp42;
      cResult[26] = tmp45;
      cResult[27] = tmp51;
      tmp48 = tmp51;
    }
    const items2 = [tmp4.container, style];
    cResult[17] = tmp4.container;
    cResult[18] = style;
    cResult[19] = items2;
    tmp41 = items2;
  }
}) : (function InviteCard(invite) {
  let guild;
  let inviter;
  let items;
  let items1;
  let items2;
  let tmp10;
  let tmp29;
  invite = invite.invite;
  const style = invite.style;
  const tmp = closure_23();
  ({ guild, inviter } = invite);
  if (invite.state !== constants4.RESOLVED) {
    return null;
  } else {
    let tmp12;
    let stringResult;
    let name;
    let tmp15;
    let tmp16;
    if (null != guild) {
      const obj3 = { guild };
      tmp12 = closure_20(GuildInviteIconDefault, obj3);
      const intl2 = intl4.intl;
      stringResult = intl2.string(intl4.t["3rE1P8"]);
      name = guild.name;
      tmp15 = require;
      tmp16 = closure_20;
    } else if (null != tmp2) {
      _modDef38(null != inviter, "Null inviter");
      const self = this;
      const self2 = this;
      const obj = { user: tmp10, guildId: "Array" };
      const Avatar = native.Avatar;
      tmp10 = new UserRecord(inviter);
      tmp12 = closure_20(Avatar, obj);
      const intl = intl4.intl;
      stringResult = intl.string(intl4.t.OsdY8B);
      const obj2 = UserUtilsDefault;
      name = obj2.getFormattedName(inviter);
      tmp15 = require;
      tmp16 = closure_20;
    } else if (null == inviter) {
      return null;
    } else {
      const self3 = this;
      const self4 = this;
      const obj4 = { user: tmp29, guildId: "Array" };
      const Avatar2 = native.Avatar;
      tmp29 = new UserRecord(inviter);
      const tmp31 = closure_20(Avatar2, obj4);
      const intl3 = intl4.intl;
      stringResult = intl3.string(intl4.t["+ITYkQ"]);
      const obj9 = UserUtilsDefault;
      name = obj9.getFormattedName(inviter, true);
      tmp12 = tmp31;
      tmp15 = require;
      tmp16 = closure_20;
    }
    const obj5 = { style: items, children: items1 };
    items = [tmp.container, style];
    items1 = [tmp12, ];
    const obj6 = { style: tmp.text, children: items2 };
    const obj7 = { variant: "text-sm/medium", color: "text-subtle", children: stringResult };
    items2 = [tmp16(tmp15(5088).Text, obj7), ];
    const obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name };
    items2[1] = tmp16(tmp15(5088).Text, obj8);
    items1[1] = closure_21(React3, obj6);
    return closure_21(React3, obj5);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildTemplateCard(arg0) {
  let guildTemplate;
  let intl;
  let items;
  let items1;
  let style;
  const obj = react2;
  const cResult = obj.c(13);
  ({ guildTemplate, style } = arg0);
  const tmp4 = closure_23();
  if (cResult[0] === tmp4.container) {
    let tmp5;
    let tmp7;
    let tmp12;
    let tmp15;
    if (cResult[1] === style) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { source: AssetRegistryDefault };
      const tmp10 = FastImageDefault;
      const tmp11 = closure_20(tmp10, obj2);
      cResult[3] = tmp11;
      tmp7 = tmp11;
    } else {
      tmp7 = cResult[3];
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: intl.string(intl4.t.QzUORX) };
      const Text = tmp(5088).Text;
      intl = tmp(1126).intl;
      const tmp14 = closure_20(Text, obj3);
      cResult[4] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[4];
    }
    if (cResult[5] !== guildTemplate.name) {
      const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guildTemplate.name };
      const tmp17 = closure_20(Text_Text.Text, obj4);
      cResult[5] = guildTemplate.name;
      cResult[6] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[6];
    }
    if (cResult[7] === tmp4.text) {
      let tmp18;
      if (cResult[8] === tmp15) {
        tmp18 = cResult[9];
      }
      if (cResult[10] === tmp5) {
        let tmp22;
        if (cResult[11] === tmp18) {
          tmp22 = cResult[12];
        }
        return tmp22;
      }
      const obj5 = { style: tmp5, children: items };
      items = [tmp7, tmp18];
      const tmp25 = closure_21(React3, obj5);
      cResult[10] = tmp5;
      cResult[11] = tmp18;
      cResult[12] = tmp25;
      tmp22 = tmp25;
    }
    const obj6 = { style: tmp4.text, children: items1 };
    items1 = [tmp12, tmp15];
    const tmp21 = closure_21(React3, obj6);
    cResult[7] = tmp4.text;
    cResult[8] = tmp15;
    cResult[9] = tmp21;
    tmp18 = tmp21;
  }
  const items2 = [tmp4.container, style];
  cResult[0] = tmp4.container;
  cResult[1] = style;
  cResult[2] = items2;
  tmp5 = items2;
}) : (function GuildTemplateCard(arg0) {
  let guildTemplate;
  let intl;
  let items;
  let items1;
  let items2;
  let style;
  ({ guildTemplate, style } = arg0);
  const tmp = closure_23();
  const obj = { style: items, children: items1 };
  items = [tmp.container, style];
  const obj2 = { source: AssetRegistryDefault };
  const tmp2 = FastImageDefault;
  items1 = [closure_20(tmp2, obj2), ];
  const obj3 = { style: tmp.text, children: items2 };
  const obj4 = { variant: "text-sm/medium", color: "text-subtle", children: intl.string(intl4.t.QzUORX) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items2 = [closure_20(Text, obj4), ];
  const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guildTemplate.name };
  items2[1] = closure_20(Text_Text.Text, obj5);
  items1[1] = closure_21(React3, obj3);
  return closure_21(React3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function Centerpiece(arg0) {
  let centerpieceContainer;
  let first;
  let guildTemplate;
  let inlineButtons;
  let invite;
  let items;
  let items1;
  let scrollViewContainer;
  let tmp13;
  const obj = react2;
  const cResult = obj.c(35);
  ({ invite, guildTemplate, inlineButtons } = arg0);
  const tmp5 = useIsWindowLargeDefault();
  const tmp6 = closure_22(tmp5);
  const obj2 = useTypeConsolidationTextTransform;
  const typeConsolidationTextTransform = obj2.useTypeConsolidationTextTransform("Welcome");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = AssetRegistry;
    cResult[0] = tmpResult;
    first = tmpResult;
  } else {
    first = cResult[0];
  }
  ({ centerpieceContainer, scrollViewContainer } = tmp6);
  if (cResult[1] !== tmp6.logo) {
    const obj3 = { style: tmp6.logo, source: first };
    const tmp15 = closure_20(FastImageDefault, obj3);
    cResult[1] = tmp6.logo;
    cResult[2] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[2];
  }
  if (cResult[3] === tmp6.header) {
    let tmp16;
    let tmp17;
    if (cResult[4] === typeConsolidationTextTransform) {
      tmp16 = cResult[5];
    }
    let num4 = 2;
    if (tmp5) {
      num4 = 1;
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(intl4.t["3S2xmm"]);
      cResult[6] = stringResult;
      tmp17 = stringResult;
    } else {
      tmp17 = cResult[6];
    }
    if (cResult[7] === tmp16) {
      let tmp19;
      let subHeaderWithInvite;
      if (cResult[8] === num4) {
        tmp19 = cResult[9];
      }
      if (null != invite) {
        subHeaderWithInvite = tmp6.subHeaderWithInvite;
      } else {
        subHeaderWithInvite = null;
      }
      if (cResult[10] === tmp6.subHeader) {
        let tmp23;
        let tmp24;
        let tmp26;
        if (cResult[11] === subHeaderWithInvite) {
          tmp23 = cResult[12];
        }
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(intl4.t.Gtcthl);
          cResult[13] = stringResult1;
          tmp24 = stringResult1;
        } else {
          tmp24 = cResult[13];
        }
        if (cResult[14] !== tmp23) {
          const obj4 = { variant: "text-md/medium", color: "text-overlay-light", style: tmp23, maxFontSizeMultiplier: 3, children: tmp24 };
          const tmp28 = closure_20(Text_Text.Text, obj4);
          cResult[14] = tmp23;
          cResult[15] = tmp28;
          tmp26 = tmp28;
        } else {
          tmp26 = cResult[15];
        }
        if (cResult[16] === invite) {
          let tmp29;
          if (cResult[17] === null != invite) {
            tmp29 = cResult[18];
          }
          if (cResult[19] === guildTemplate) {
            let tmp33;
            if (cResult[20] === (null != guildTemplate && guildTemplate.state === GuildTemplateStates.RESOLVED)) {
              tmp33 = cResult[21];
            }
            if (cResult[22] === tmp26) {
              if (cResult[23] === tmp29) {
                if (cResult[24] === tmp33) {
                  let tmp37;
                  if (cResult[25] === tmp19) {
                    tmp37 = cResult[26];
                  }
                  if (cResult[27] === inlineButtons) {
                    if (cResult[28] === tmp6.scrollViewContainer) {
                      if (cResult[29] === tmp37) {
                        let tmp41;
                        if (cResult[30] === tmp13) {
                          tmp41 = cResult[31];
                        }
                        if (cResult[32] === tmp6.centerpieceContainer) {
                          let tmp45;
                          if (cResult[33] === tmp41) {
                            tmp45 = cResult[34];
                          }
                          return tmp45;
                        }
                        const obj5 = { style: centerpieceContainer, children: tmp41 };
                        const tmp48 = closure_20(React3, obj5);
                        cResult[32] = tmp6.centerpieceContainer;
                        cResult[33] = tmp41;
                        cResult[34] = tmp48;
                        tmp45 = tmp48;
                      }
                    }
                  }
                  const obj6 = { alwaysBounceVertical: false, contentContainerStyle: scrollViewContainer, children: items };
                  items = [tmp13, tmp37, inlineButtons];
                  const tmp44 = closure_21(hasOwnProperty, obj6);
                  cResult[27] = inlineButtons;
                  cResult[28] = tmp6.scrollViewContainer;
                  cResult[29] = tmp37;
                  cResult[30] = tmp13;
                  cResult[31] = tmp44;
                  tmp41 = tmp44;
                }
              }
            }
            const obj7 = { children: items1 };
            items1 = [tmp19, tmp26, tmp29, tmp33];
            const tmp40 = closure_21(React3, obj7);
            cResult[22] = tmp26;
            cResult[23] = tmp29;
            cResult[24] = tmp33;
            cResult[25] = tmp19;
            cResult[26] = tmp40;
            tmp37 = tmp40;
          }
          let tmp34 = null;
          if (null != guildTemplate && guildTemplate.state === GuildTemplateStates.RESOLVED) {
            const obj8 = { guildTemplate };
            tmp34 = closure_20(closure_25, obj8);
          }
          cResult[19] = guildTemplate;
          cResult[20] = null != guildTemplate && guildTemplate.state === GuildTemplateStates.RESOLVED;
          cResult[21] = tmp34;
          tmp33 = tmp34;
        }
        let tmp30 = null;
        if (null != invite) {
          const obj9 = { invite };
          tmp30 = closure_20(closure_24, obj9);
        }
        cResult[16] = invite;
        cResult[17] = null != invite;
        cResult[18] = tmp30;
        tmp29 = tmp30;
      }
      const items2 = [tmp6.subHeader, subHeaderWithInvite];
      cResult[10] = tmp6.subHeader;
      cResult[11] = subHeaderWithInvite;
      cResult[12] = items2;
      tmp23 = items2;
    }
    const obj10 = { style: tmp16, lineClamp: num4, variant: "display-md", color: "text-overlay-light", maxFontSizeMultiplier: 1, children: tmp17 };
    const tmp21 = closure_20(Text_Text.Heading, obj10);
    cResult[7] = tmp16;
    cResult[8] = num4;
    cResult[9] = tmp21;
    tmp19 = tmp21;
  }
  const items3 = [tmp6.header, typeConsolidationTextTransform];
  cResult[3] = tmp6.header;
  cResult[4] = typeConsolidationTextTransform;
  cResult[5] = items3;
  tmp16 = items3;
}) : (function Centerpiece(inlineButtons) {
  let guildTemplate;
  let intl;
  let intl2;
  let invite;
  let items;
  let items1;
  let num;
  let obj3;
  let subHeaderWithInvite;
  let tmp14;
  ({ invite, guildTemplate } = inlineButtons);
  inlineButtons = inlineButtons.inlineButtons;
  const tmp3 = useIsWindowLargeDefault();
  const tmp4 = closure_22(tmp3);
  const obj = useTypeConsolidationTextTransform;
  const typeConsolidationTextTransform = obj.useTypeConsolidationTextTransform("Welcome");
  let tmp9 = null != guildTemplate;
  const tmp7 = AssetRegistry;
  if (tmp9) {
    tmp9 = guildTemplate.state === GuildTemplateStates.RESOLVED;
  }
  const obj2 = { style: tmp4.centerpieceContainer, children: closure_21(tmp14, obj3) };
  obj3 = { alwaysBounceVertical: false, contentContainerStyle: tmp4.scrollViewContainer, children: items };
  items = [, , ];
  const obj4 = { style: tmp4.logo, source: tmp7 };
  items[0] = closure_20(FastImageDefault, obj4);
  const obj5 = { style: items1, lineClamp: num, variant: "display-md", color: "text-overlay-light", maxFontSizeMultiplier: 1, children: intl.string(intl4.t["3S2xmm"]) };
  items1 = [tmp4.header, typeConsolidationTextTransform];
  num = 2;
  const Heading = tmp5(5088).Heading;
  tmp14 = hasOwnProperty;
  if (tmp3) {
    num = 1;
  }
  intl = tmp5(1126).intl;
  const items2 = [closure_20(Heading, obj5), , , ];
  const items3 = [tmp4.subHeader, ];
  const Text = tmp5(5088).Text;
  if (null != invite) {
    subHeaderWithInvite = tmp4.subHeaderWithInvite;
  } else {
    subHeaderWithInvite = null;
  }
  items3[1] = subHeaderWithInvite;
  const obj6 = { variant: "text-md/medium", color: "text-overlay-light", style: items3, maxFontSizeMultiplier: 3, children: intl2.string(intl4.t.Gtcthl) };
  intl2 = tmp5(1126).intl;
  items2[1] = closure_20(Text, obj6);
  let tmp11Result = null;
  if (null != invite) {
    const obj7 = { invite };
    tmp11Result = tmp11(closure_24, obj7);
  }
  items2[2] = tmp11Result;
  let tmp11Result2 = null;
  if (tmp9) {
    const obj8 = { guildTemplate };
    tmp11Result2 = tmp11(closure_25, obj8);
  }
  items2[3] = tmp11Result2;
  items[1] = closure_21(React3, { children: items2 });
  items[2] = inlineButtons;
  return closure_20(React3, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function Welcome() {
  let displayedInviteCode;
  let items8;
  let stateFromStores;
  let stateFromStores1;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp23;
  let tmp26;
  let tmp27;
  let tmp29;
  let tmp32;
  let tmp33;
  let tmp8;
  let tmp9;
  let underageAnonymous;
  let tmp = navigation;
  let obj = navigation(stateFromStores1[16]);
  const cResult = obj.c(51);
  const tmp5 = stateFromStores(stateFromStores1[25])();
  let tmp6 = closure_22(tmp5);
  let obj2 = navigation(stateFromStores1[28]);
  navigation = obj2.useNavigation();
  const rect = stateFromStores(stateFromStores1[29])();
  const bottom = rect.bottom;
  const top = rect.top;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DisplayedInviteStore];
    const fn = function o() {
      return displayedInviteCode.getDisplayedInviteCode();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmpResult = tmp(stateFromStores1[30]);
  stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [InviteStore];
    cResult[2] = items1;
    tmp12 = items1;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] !== stateFromStores) {
    class B {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
    cResult[3] = stateFromStores;
    cResult[4] = B;
    tmp14 = B;
  } else {
    class B {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
  }
  const tmpResult6 = tmp(stateFromStores1[30]);
  stateFromStores1 = tmpResult6.useStateFromStores(tmp12, tmp14);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
    const items2 = [GuildTemplateStore];
    class O {
      constructor() {
        return GuildTemplateStore.getGuildTemplate(GuildTemplateStore.getDisplayedGuildTemplateCode());
      }
    }
    cResult[5] = items2;
    cResult[6] = O;
    tmp17 = O;
    tmp16 = items2;
  } else {
    class B {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
    tmp17 = cResult[6];
  }
  const tmpResult7 = tmp(stateFromStores1[30]);
  const stateFromStores2 = tmpResult7.useStateFromStores(tmp16, tmp17);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
    const items3 = [AgeGateStore];
    class H {
      constructor() {
        return underageAnonymous.isUnderageAnonymous();
      }
    }
    cResult[7] = items3;
    cResult[8] = H;
    tmp20 = H;
    tmp19 = items3;
  } else {
    class B {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
    tmp20 = cResult[8];
  }
  const tmpResult8 = tmp(stateFromStores1[30]);
  const stateFromStores3 = tmpResult8.useStateFromStores(tmp19, tmp20);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
    const items4 = [MultiAccountStore];
    class H {
      constructor() {
        return underageAnonymous.isUnderageAnonymous();
      }
    }
    cResult[9] = items4;
    cResult[10] = tmp24;
    tmp23 = tmp24;
    tmp22 = items4;
  } else {
    class B {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
    tmp23 = cResult[10];
  }
  const tmpResult9 = tmp(stateFromStores1[30]);
  const stateFromStores4 = tmpResult9.useStateFromStores(tmp22, tmp23);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
    const items5 = [MultiAccountStore];
    class Q {
      constructor() {
        return MultiAccountStore.getCanUseMultiAccountMobile();
      }
    }
    cResult[11] = items5;
    cResult[12] = Q;
    tmp27 = Q;
    tmp26 = items5;
  } else {
    class B {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
    tmp27 = cResult[12];
  }
  const tmpResult10 = tmp(stateFromStores1[30]);
  const stateFromStores5 = tmpResult10.useStateFromStores(tmp26, tmp27);
  if (cResult[13] !== stateFromStores1) {
    class B {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
    cResult[13] = stateFromStores1;
    class Q {
      constructor() {
        return MultiAccountStore.getCanUseMultiAccountMobile();
      }
    }
    cResult[14] = tmp30;
    tmp29 = tmp30;
  } else {
    class B {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
  }
  stateFromStores(stateFromStores1[34])(tmp29);
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        const obj = stateFromStores(stateFromStores1[35]);
        const locationMetadata = obj.getLocationMetadata();
      }
    }
    const items6 = [];
    class Q {
      constructor() {
        return MultiAccountStore.getCanUseMultiAccountMobile();
      }
    }
    cResult[16] = items6;
    tmp33 = items6;
    tmp32 = X;
  } else {
    class X {
      constructor() {
        const obj = stateFromStores(stateFromStores1[35]);
        const locationMetadata = obj.getLocationMetadata();
      }
    }
    tmp33 = cResult[16];
  }
  const effect = stateFromStores3.useEffect(tmp32, tmp33);
  stateFromStores(stateFromStores1[36])(ExperimentStore.hasLoadedExperiments);
  const effect1 = stateFromStores3.useEffect(() => {

  });
  const obj9 = stateFromStores3;
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    class Z {
      constructor() {

      }
    }
    cResult[17] = Z;
    class Q {
      constructor() {
        return MultiAccountStore.getCanUseMultiAccountMobile();
      }
    }
  } else {
    class Z {
      constructor() {

      }
    }
  }
  const effect2 = obj9.useEffect(tmp37);
  if (stateFromStores5) {
    class Z {
      constructor() {

      }
    }
  }
  if (cResult[19] !== navigation) {
    class Z {
      constructor() {

      }
    }
    cResult[19] = navigation;
    class Q {
      constructor() {
        return MultiAccountStore.getCanUseMultiAccountMobile();
      }
    }
    cResult[20] = tmp40;
  } else {
    class Z {
      constructor() {

      }
    }
  }
  if (cResult[21] === stateFromStores3) {
    class Z {
      constructor() {

      }
    }
    const _Symbol = Symbol;
    const buttonContainer = tmp6.buttonContainer;
    class Q {
      constructor() {
        return MultiAccountStore.getCanUseMultiAccountMobile();
      }
    }
    if (tmp42 === Symbol.for("react.memo_cache_sentinel")) {
      class Z {
        constructor() {

        }
      }
      const stringResult = obj10.string(tmp(stateFromStores1[18]).t.pV8xeR);
      class Q {
        constructor() {
          return MultiAccountStore.getCanUseMultiAccountMobile();
        }
      }
      cResult[24] = stringResult;
    } else {
      class Z {
        constructor() {

        }
      }
    }
    if (cResult[25] !== tmp41) {
      class Z {
        constructor() {

        }
      }
      let obj3 = { size: "lg", variant: "primary-overlay", onPress: tmp41, text: null };
      class Q {
        constructor() {
          return MultiAccountStore.getCanUseMultiAccountMobile();
        }
      }
      cResult[25] = tmp41;
      cResult[26] = closure_20(tmp(stateFromStores1[40]).Button, obj3);
      const tmp46 = closure_20(tmp(stateFromStores1[40]).Button, obj3);
    } else {
      class Z {
        constructor() {

        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
      class Z {
        constructor() {

        }
      }
      const stringResult1 = obj12.string(tmp(stateFromStores1[18]).t.dKhVQN);
      class Q {
        constructor() {
          return MultiAccountStore.getCanUseMultiAccountMobile();
        }
      }
      cResult[27] = stringResult1;
    } else {
      class Z {
        constructor() {

        }
      }
    }
    if (cResult[28] !== tmp39) {
      class Z {
        constructor() {

        }
      }
      const obj4 = { size: "lg", variant: "secondary-overlay", onPress: tmp39, text: null };
      class Q {
        constructor() {
          return MultiAccountStore.getCanUseMultiAccountMobile();
        }
      }
      cResult[28] = tmp39;
      cResult[29] = closure_20(tmp(stateFromStores1[40]).Button, obj4);
      const tmp50 = closure_20(tmp(stateFromStores1[40]).Button, obj4);
    } else {
      class Z {
        constructor() {

        }
      }
    }
    if (cResult[30] === tmp45) {
      class Z {
        constructor() {

        }
      }
      if (cResult[33] === tmp6.buttonContainer) {
        class Z {
          constructor() {

          }
        }
        const sum = top + tmp(tmp2[42]).NAV_BAR_HEIGHT;
        if (cResult[36] === bottom) {
          class Z {
            constructor() {

            }
          }
          if (cResult[39] === tmp6.container) {
            class Z {
              constructor() {

              }
            }
            if (tmp5) {
              class Z {
                constructor() {

                }
              }
            }
            class Q {
              constructor() {
                return MultiAccountStore.getCanUseMultiAccountMobile();
              }
            }
            const obj5 = { invite: stateFromStores1, guildTemplate: stateFromStores2, inlineButtons: null };
            cResult[42] = stateFromStores2;
            cResult[43] = stateFromStores1;
            cResult[44] = null;
            cResult[45] = closure_20(closure_26, obj5);
            const tmp65 = closure_20(closure_26, obj5);
          }
          const items7 = [, ];
          class Q {
            constructor() {
              return MultiAccountStore.getCanUseMultiAccountMobile();
            }
          }
          items7[1] = tmp58;
          cResult[39] = tmp6.container;
          cResult[40] = tmp58;
          cResult[41] = items7;
        }
        class Q {
          constructor() {
            return MultiAccountStore.getCanUseMultiAccountMobile();
          }
        }
        tmp59[0] = sum;
        tmp59[1] = bottom;
        cResult[36] = bottom;
        cResult[37] = sum;
        cResult[38] = tmp59;
      }
      class Q {
        constructor() {
          return MultiAccountStore.getCanUseMultiAccountMobile();
        }
      }
      const obj6 = { style: buttonContainer, children: tmp51 };
      cResult[33] = tmp6.buttonContainer;
      cResult[34] = tmp51;
      cResult[35] = closure_20(closure_4, obj6);
      const tmp56 = closure_20(closure_4, obj6);
    }
    const obj7 = { children: items8 };
    items8 = [tmp45, tmp49];
    cResult[30] = tmp45;
    cResult[31] = tmp49;
    cResult[32] = closure_21(tmp(stateFromStores1[41]).ButtonGroup, obj7);
    const tmp53 = closure_21(tmp(stateFromStores1[41]).ButtonGroup, obj7);
  }
  function handlePressRegister() {
    const tmp = stateFromStores3;
    if (tmp) {
      navigation.navigate(constants2.AGE_GATE_UNDERAGE, { fromRegister: true });
    } else {
      const obj = RegistrationStepsUtils;
      const nextAuthState = obj.getNextAuthState(constants2.WELCOME);
      const dispatch = navigation.dispatch;
      const CommonActions = Link.CommonActions;
      dispatch(CommonActions.navigate(nextAuthState));
      const obj2 = AnalyticsUtilsDefault;
      obj2.track(map1.REGISTER_VIEWED);
    }
  }
  cResult[21] = stateFromStores3;
  cResult[22] = navigation;
  cResult[23] = handlePressRegister;
}) : (function Welcome() {
  let ButtonGroup;
  let bottom;
  let closure_1;
  let closure_3;
  let displayedInviteCode;
  let intl;
  let intl2;
  let items6;
  let items7;
  let items8;
  let obj13;
  let obj9;
  let stateFromStores;
  let tmp17;
  let tmp18;
  let tmp21;
  let top;
  let underageAnonymous;
  let tmp = importDefault;
  const tmp3 = require("useIsWindowLarge")();
  const tmp4 = closure_22(tmp3);
  const tmp5 = _require;
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  let tmp6 = require("useSafeAreaInsets")();
  ({ top, bottom } = tmp6);
  let obj2 = require("get initialized");
  const items = [DisplayedInviteStore];
  importDefault = obj2.useStateFromStores(items, () => displayedInviteCode.getDisplayedInviteCode());
  let obj3 = require("get initialized");
  const items1 = [InviteStore];
  stateFromStores = obj3.useStateFromStores(items1, () => {
    let invite = null;
    if (null != closure_1) {
      invite = InviteStore.getInvite(tmp);
    }
    return invite;
  });
  const items2 = [GuildTemplateStore];
  const obj4 = require("get initialized");
  const stateFromStores1 = obj4.useStateFromStores(items2, () => GuildTemplateStore.getGuildTemplate(GuildTemplateStore.getDisplayedGuildTemplateCode()));
  const items3 = [AgeGateStore];
  const obj5 = require("get initialized");
  react = obj5.useStateFromStores(items3, () => underageAnonymous.isUnderageAnonymous());
  const items4 = [MultiAccountStore];
  const obj6 = require("get initialized");
  const stateFromStores2 = obj6.useStateFromStores(items4, () => MultiAccountStore.getHasLoggedInAccounts());
  const items5 = [MultiAccountStore];
  const obj7 = require("get initialized");
  const stateFromStores3 = obj7.useStateFromStores(items5, () => MultiAccountStore.getCanUseMultiAccountMobile());
  require("useMountEffect")(() => {
    let Storage;
    let code;
    let id;
    let id1;
    const obj = TTIAnalyticsUtils;
    obj.trackAppUIViewed();
    const obj2 = TTIAnalyticsUtils;
    const result = obj2.trackAppLaunchCompleted();
    let tmp6 = null;
    if (null != stateFromStores) {
      tmp6 = null;
      if (null != stateFromStores.type) {
        tmp6 = InviteTypes[tmp5.type];
      }
    }
    const obj3 = { last_logout_ts: Storage.get(constants.LOGOUT_TIMESTAMP_KEY), invite_type: tmp6, guild_id: id, channel_id: id1, invite_code: code };
    const track = AnalyticsUtilsDefault.track;
    const APP_LANDING_VIEWED = map1.APP_LANDING_VIEWED;
    AnalyticsUtilsDefault;
    Storage = Storage2.Storage;
    id = undefined;
    if (stateFromStores != null) {
      const guild = tmp5.guild;
      if (guild != null) {
        id = guild.id;
      }
    }
    id1 = undefined;
    if (stateFromStores != null) {
      const channel = tmp5.channel;
      if (channel != null) {
        id1 = channel.id;
      }
    }
    code = undefined;
    if (stateFromStores != null) {
      code = tmp5.code;
    }
    track(APP_LANDING_VIEWED, obj3);
  });
  const effect = react.useEffect(() => {
    const obj = closure_1(stateFromStores[35]);
    const locationMetadata = obj.getLocationMetadata();
  }, []);
  require("useInitialValue")(ExperimentStore.hasLoadedExperiments);
  const effect1 = react.useEffect(() => {

  });
  const effect2 = react.useEffect(() => {

  });
  if (stateFromStores3) {
    if (stateFromStores2) {
      return closure_20(tmp(stateFromStores[37]), {});
    }
  }
  const obj8 = { style: tmp4.buttonContainer, children: closure_21(ButtonGroup, obj9) };
  obj9 = { children: items6 };
  ButtonGroup = tmp5(tmp2[41]).ButtonGroup;
  const obj10 = {
    size: "lg",
    variant: "primary-overlay",
    onPress: function handlePressRegister() {
      const tmp = closure_3;
      if (tmp) {
        navigation.navigate(constants2.AGE_GATE_UNDERAGE, { fromRegister: true });
      } else {
        const obj = RegistrationStepsUtils;
        const nextAuthState = obj.getNextAuthState(constants2.WELCOME);
        const dispatch = navigation.dispatch;
        const CommonActions = Link.CommonActions;
        dispatch(CommonActions.navigate(nextAuthState));
        const obj2 = AnalyticsUtilsDefault;
        obj2.track(map1.REGISTER_VIEWED);
      }
    },
    text: intl.string(tmp5(stateFromStores[18]).t.pV8xeR)
  };
  const Button = tmp5(tmp2[40]).Button;
  intl = tmp5(tmp2[18]).intl;
  items6 = [closure_20(Button, obj10), ];
  const obj11 = {
    size: "lg",
    variant: "secondary-overlay",
    onPress: function handlePressLogin() {
      navigation.navigate(constants2.LOGIN);
      const obj = AnalyticsUtilsDefault;
      obj.track(map1.LOGIN_VIEWED, { source: "welcome" });
    },
    text: intl2.string(tmp5(stateFromStores[18]).t.dKhVQN)
  };
  const Button2 = tmp5(tmp2[40]).Button;
  intl2 = tmp5(tmp2[18]).intl;
  items6[1] = closure_20(Button2, obj11);
  const tmp19 = closure_20(closure_4, obj8);
  const obj12 = { theme: constants5.DARK, children: tmp18(tmp17, obj13) };
  obj13 = { style: items7, children: items8 };
  items7 = [tmp4.container, ];
  const obj14 = { paddingTop: top + tmp5(stateFromStores[42]).NAV_BAR_HEIGHT, paddingBottom: bottom };
  const ThemeContextProvider = tmp5(tmp2[44]).ThemeContextProvider;
  items7[1] = obj14;
  const obj15 = { invite: stateFromStores, guildTemplate: stateFromStores1, inlineButtons: tmp21 };
  tmp21 = null;
  tmp17 = closure_4;
  tmp18 = closure_21;
  const tmp20 = closure_26;
  if (tmp3) {
    tmp21 = tmp19;
  }
  items8 = [closure_20(tmp20, obj15), !tmp3 && tmp19, closure_20(tmp5(tmp2[43]).TTIFirstContentfulPaint, { label: "welcome" })];
  return closure_20(ThemeContextProvider, obj12);
});
let result = size.fileFinishedImporting("modules/auth/native/components/Welcome.tsx");

export default tmp5;
