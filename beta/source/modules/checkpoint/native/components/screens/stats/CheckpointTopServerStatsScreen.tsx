// Module ID: 12993
// Function ID: 12994
// Name: CheckpointTopServerStatsScreen
// Dependencies: [17, 12954, 6015, 21, 4971, 587, 558, 576, 504, 12957, 1128, 3088, 12974, 12992, 6883, 5234, 12991, 9646, 12972, 12982, 12985, 2]

// Module 12993 (CheckpointTopServerStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3088 from "module_3088" /* 3088 */;
import Text_Text from "Text/Text" /* 5234 */;
import GuildIcon from "GuildIcon" /* 6883 */;
import ServerIcon from "ServerIcon" /* 9646 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 12957 */;
import CheckpointTextDefault from "CheckpointText" /* 12972 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 12974 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 12982 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 12985 */;
import CheckpointGuildStatsDefault from "CheckpointGuildStats" /* 12991 */;
import CheckpointRankTagDefault from "CheckpointRankTag" /* 12992 */;
import CheckpointStore from "CheckpointStore" /* 12954 */;
import CheckpointConstants from "CheckpointConstants" /* 6015 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let stats;

let CHECKPOINT_GUILD_CARD_BACKGROUND;
let CHECKPOINT_WHITE;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ CHECKPOINT_GUILD_CARD_BACKGROUND, CHECKPOINT_WHITE } = CheckpointConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, spotlightContainer: { flexGrow: 1, justifyContent: "center", alignItems: "center" }, spotlight: { alignItems: "flex-start" }, card: obj3, guildIcon: size, guildDetails: obj4, guildName: { color: CHECKPOINT_WHITE }, copy: { flexShrink: 1 }, title: obj5, titleText: { flexShrink: 1 }, number: obj6 };
obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_12, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY, backgroundColor: CHECKPOINT_GUILD_CARD_BACKGROUND };
size = { width: 192, height: 192, borderRadius: nativeDefault.radii.none };
obj4 = { width: 192, gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12 };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj6 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointTopServerStatsScreen() {
  let formatToPlainStringResult;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let num5;
  let obj10;
  let str;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = react;
  const cResult = obj.c(61);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function s() {
      stats = stats.stats;
      let first;
      if (stats != null) {
        const guilds = stats.guilds;
        if (guilds != null) {
          first = guilds.guilds[0];
        }
      }
      return first;
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
  if (cResult[2] === tmp4.card) {
    if (cResult[3] === tmp4.container) {
      if (cResult[4] === tmp4.copy) {
        if (cResult[5] === tmp4.guildDetails) {
          if (cResult[6] === tmp4.guildIcon) {
            if (cResult[7] === tmp4.guildName) {
              if (cResult[8] === tmp4.number) {
                if (cResult[9] === tmp4.spotlight) {
                  if (cResult[10] === tmp4.spotlightContainer) {
                    if (cResult[11] === tmp4.title) {
                      if (cResult[12] === tmp4.titleText) {
                        if (cResult[13] === stateFromStores) {
                          tmp9 = cResult[14];
                          tmp10 = cResult[15];
                          tmp11 = cResult[16];
                          tmp12 = cResult[17];
                          str = cResult[18];
                          tmp13 = cResult[19];
                          tmp14 = cResult[20];
                          tmp15 = cResult[21];
                          tmp16 = cResult[22];
                          tmp17 = cResult[23];
                          tmp18 = cResult[24];
                          tmp19 = cResult[25];
                        }
                        if (cResult[42] === tmp9) {
                          if (cResult[43] === str) {
                            if (cResult[44] === tmp13) {
                              let tmp52;
                              if (cResult[45] === tmp14) {
                                tmp52 = cResult[46];
                              }
                              if (cResult[47] === tmp10) {
                                if (cResult[48] === tmp52) {
                                  if (cResult[49] === tmp15) {
                                    if (cResult[50] === tmp16) {
                                      let tmp55;
                                      if (cResult[51] === tmp17) {
                                        tmp55 = cResult[52];
                                      }
                                      if (cResult[53] === tmp11) {
                                        if (cResult[54] === tmp55) {
                                          if (cResult[55] === tmp18) {
                                            let tmp58;
                                            if (cResult[56] === tmp19) {
                                              tmp58 = cResult[57];
                                            }
                                            if (cResult[58] === tmp12) {
                                              let tmp61;
                                              if (cResult[59] === tmp58) {
                                                tmp61 = cResult[60];
                                              }
                                              return tmp61;
                                            }
                                            const obj2 = { children: tmp58 };
                                            const tmp63 = metroRequire(tmp12, obj2);
                                            cResult[58] = tmp12;
                                            cResult[59] = tmp58;
                                            cResult[60] = tmp63;
                                            tmp61 = tmp63;
                                          }
                                        }
                                      }
                                      const obj3 = { style: tmp18, children: items1 };
                                      items1 = [tmp19, tmp55];
                                      const tmp60 = metroImportDefault(tmp11, obj3);
                                      cResult[53] = tmp11;
                                      cResult[54] = tmp55;
                                      cResult[55] = tmp18;
                                      cResult[56] = tmp19;
                                      cResult[57] = tmp60;
                                      tmp58 = tmp60;
                                    }
                                  }
                                }
                              }
                              const obj4 = { style: tmp15, children: items2 };
                              items2 = [tmp16, tmp17, tmp52];
                              const tmp57 = metroImportDefault(tmp10, obj4);
                              cResult[47] = tmp10;
                              cResult[48] = tmp52;
                              cResult[49] = tmp15;
                              cResult[50] = tmp16;
                              cResult[51] = tmp17;
                              cResult[52] = tmp57;
                              tmp55 = tmp57;
                            }
                          }
                        }
                        const obj5 = { variant: str, accessibilityLabel: tmp13, children: tmp14 };
                        const tmp54 = metroRequire(tmp9, obj5);
                        cResult[42] = tmp9;
                        cResult[43] = str;
                        cResult[44] = tmp13;
                        cResult[45] = tmp14;
                        cResult[46] = tmp54;
                        tmp52 = tmp54;
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
  let num3;
  const _Math = Math;
  if (stateFromStores != null) {
    num3 = stateFromStores.numDaysInteracted;
  }
  if (num3 == null) {
    num3 = 0;
  }
  const roundResult = round(num3);
  let prop;
  const getCheckpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent;
  CheckpointStatsUtils;
  if (stateFromStores != null) {
    prop = stateFromStores.numDaysInteractedPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop);
  const intl = tmp(1128).intl;
  const stringResult = intl.string(_modDef3088["M+a+t1"]);
  if (null != checkpointTopPercent) {
    const intl2 = tmp(1128).intl;
    const obj6 = {
      numDays: roundResult,
      percent: checkpointTopPercent,
      percentHook(arg0) {
          return arg0;
        }
    };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3088.sIDTV1, obj6);
  }
  const tmp24Result = CheckpointScreenDefault;
  const container = tmp4.container;
  if (cResult[26] === tmp4.card) {
    if (cResult[27] === tmp4.guildDetails) {
      if (cResult[28] === tmp4.guildIcon) {
        if (cResult[29] === tmp4.guildName) {
          if (cResult[30] === tmp4.spotlight) {
            let tmp28;
            if (cResult[31] === stateFromStores) {
              tmp28 = cResult[32];
            }
            if (cResult[33] === tmp4.spotlightContainer) {
              let tmp34;
              let tmp37;
              let tmp41;
              if (cResult[34] === tmp28) {
                tmp34 = cResult[35];
              }
              const copy = tmp4.copy;
              const _Symbol = Symbol;
              if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                const obj7 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
                const tmp40 = metroRequire(ServerIcon.ServerIcon, obj7);
                cResult[36] = tmp40;
                tmp37 = tmp40;
              } else {
                tmp37 = cResult[36];
              }
              if (cResult[37] !== tmp4.titleText) {
                const obj8 = { variant: "heading-md/extrabold", style: tmp4.titleText, children: stringResult.toLocaleUpperCase() };
                const tmp24Result5 = CheckpointTextDefault;
                const tmp44 = metroRequire(tmp24Result5, obj8);
                cResult[37] = tmp4.titleText;
                cResult[38] = tmp44;
                tmp41 = tmp44;
              } else {
                tmp41 = cResult[38];
              }
              if (cResult[39] === tmp4.title) {
                let tmp45;
                let formatResult;
                if (cResult[40] === tmp41) {
                  tmp45 = cResult[41];
                }
                const _HermesInternal = HermesInternal;
                const obj9 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult, style: tmp4.number, children: metroRequire(CheckpointCountUpStatNumberDefault, obj10) };
                obj10 = { end: roundResult };
                const tmp49 = metroRequire(View, obj9);
                const tmp24Result6 = CheckpointTextDefault;
                if (null != checkpointTopPercent) {
                  const intl4 = tmp(1128).intl;
                  const obj11 = {
                    numDays: roundResult,
                    percent: checkpointTopPercent,
                    percentHook(children, arg1) {
                                      const obj = { children };
                                      return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
                                    }
                  };
                  formatResult = intl4.format(tmp24(3088).sIDTV1, obj11);
                } else {
                  const intl3 = tmp(1128).intl;
                  const obj12 = { numDays: roundResult };
                  formatResult = intl3.format(tmp24(3088).nLCUQ4, obj12);
                }
                cResult[2] = tmp4.card;
                cResult[3] = tmp4.container;
                cResult[4] = tmp4.copy;
                cResult[5] = tmp4.guildDetails;
                cResult[6] = tmp4.guildIcon;
                cResult[7] = tmp4.guildName;
                cResult[8] = tmp4.number;
                cResult[9] = tmp4.spotlight;
                cResult[10] = tmp4.spotlightContainer;
                cResult[11] = tmp4.title;
                cResult[12] = tmp4.titleText;
                cResult[13] = stateFromStores;
                cResult[14] = tmp24Result6;
                cResult[15] = View;
                cResult[16] = View;
                cResult[17] = tmp24Result;
                cResult[18] = "heading-lg/medium";
                cResult[19] = formatToPlainStringResult;
                cResult[20] = formatResult;
                cResult[21] = copy;
                cResult[22] = tmp45;
                cResult[23] = tmp49;
                cResult[24] = container;
                cResult[25] = tmp34;
                tmp14 = formatResult;
                tmp19 = tmp34;
                tmp18 = container;
                tmp17 = tmp49;
                tmp16 = tmp45;
                tmp15 = copy;
                tmp13 = formatToPlainStringResult;
                str = "heading-lg/medium";
                tmp12 = tmp24Result;
                tmp11 = tmp27;
                tmp10 = tmp27;
                tmp9 = tmp24Result6;
              }
              const obj13 = { style: tmp4.title, children: items3 };
              items3 = [tmp37, tmp41];
              const tmp47 = metroImportDefault(View, obj13);
              cResult[39] = tmp4.title;
              cResult[40] = tmp41;
              cResult[41] = tmp47;
              tmp45 = tmp47;
            }
            const obj14 = { style: tmp4.spotlightContainer, children: tmp28 };
            const tmp36 = metroRequire(View, obj14);
            cResult[33] = tmp4.spotlightContainer;
            cResult[34] = tmp28;
            cResult[35] = tmp36;
            tmp34 = tmp36;
          }
        }
      }
    }
  }
  let tmp30Result = null != stateFromStores;
  if (tmp30Result) {
    const obj15 = { style: tmp4.spotlight, children: items4 };
    items4 = [metroRequire(CheckpointRankTagDefault, { rank: 1 }), ];
    const obj16 = { style: tmp4.card, children: items5 };
    const obj17 = { guild: stateFromStores.guild, size: GuildIcon.GuildIconSizes.XXLARGE, style: tmp4.guildIcon };
    const tmp24Result7 = GuildIconDefault;
    items5 = [metroRequire(tmp24Result7, obj17), ];
    const obj18 = { style: tmp4.guildDetails, children: items6 };
    const obj19 = { variant: "heading-lg/medium", style: tmp4.guildName, lineClamp: 1, ellipsizeMode: "tail", children: stateFromStores.guild.name };
    items6 = [metroRequire(Text_Text.Text, obj19), ];
    let num4 = stateFromStores.numVoiceMinutes;
    const tmp24Result8 = CheckpointGuildStatsDefault;
    const tmp31 = metroRequire;
    if (num4 == null) {
      num4 = 0;
    }
    const obj20 = { numVoiceMinutes: num4, numMessagesSent: num5 };
    num5 = stateFromStores.numMessagesSent;
    if (num5 == null) {
      num5 = 0;
    }
    items6[1] = tmp31(tmp24Result8, obj20);
    items5[1] = metroImportDefault(View, obj18);
    items4[1] = metroImportDefault(View, obj16);
    tmp30Result = tmp30(tmp27, obj15);
  }
  cResult[26] = tmp4.card;
  cResult[27] = tmp4.guildDetails;
  cResult[28] = tmp4.guildIcon;
  cResult[29] = tmp4.guildName;
  cResult[30] = tmp4.spotlight;
  cResult[31] = stateFromStores;
  cResult[32] = tmp30Result;
  tmp28 = tmp30Result;
}) : (function CheckpointTopServerStatsScreen() {
  let formatResult;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let num3;
  let tmp13Result;
  const tmp = closure_8();
  let obj = get_initialized;
  const items = [CheckpointStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    stats = stats.stats;
    let first;
    if (stats != null) {
      const guilds = stats.guilds;
      if (guilds != null) {
        first = guilds.guilds[0];
      }
    }
    return first;
  });
  let num;
  const _Math = Math;
  if (stateFromStores != null) {
    num = stateFromStores.numDaysInteracted;
  }
  if (num == null) {
    num = 0;
  }
  const roundResult = round(num);
  let prop;
  const getCheckpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent;
  CheckpointStatsUtils;
  if (stateFromStores != null) {
    prop = stateFromStores.numDaysInteractedPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop);
  const intl = tmp2(1128).intl;
  const stringResult = intl.string(_modDef3088["M+a+t1"]);
  let formatToPlainStringResult;
  if (null != checkpointTopPercent) {
    const intl2 = tmp2(1128).intl;
    const obj2 = {
      numDays: roundResult,
      percent: checkpointTopPercent,
      percentHook(arg0) {
          return arg0;
        }
    };
    formatToPlainStringResult = intl2.formatToPlainString(tmp9(3088).sIDTV1, obj2);
  }
  const obj4 = { style: tmp.spotlightContainer, children: tmp13Result };
  tmp13Result = null != stateFromStores;
  const obj3 = { style: tmp.container, children: items4 };
  const tmp9Result = CheckpointScreenDefault;
  if (tmp13Result) {
    const obj5 = { style: tmp.spotlight, children: items1 };
    items1 = [metroRequire(CheckpointRankTagDefault, { rank: 1 }), ];
    const obj6 = { style: tmp.card, children: items2 };
    const obj7 = { guild: stateFromStores.guild, size: GuildIcon.GuildIconSizes.XXLARGE, style: tmp.guildIcon };
    const tmp9Result5 = GuildIconDefault;
    items2 = [metroRequire(tmp9Result5, obj7), ];
    const obj8 = { style: tmp.guildDetails, children: items3 };
    const obj9 = { variant: "heading-lg/medium", style: tmp.guildName, lineClamp: 1, ellipsizeMode: "tail", children: stateFromStores.guild.name };
    items3 = [metroRequire(Text_Text.Text, obj9), ];
    let num2 = stateFromStores.numVoiceMinutes;
    const tmp9Result6 = CheckpointGuildStatsDefault;
    if (num2 == null) {
      num2 = 0;
    }
    const obj10 = { numVoiceMinutes: num2, numMessagesSent: num3 };
    num3 = stateFromStores.numMessagesSent;
    if (num3 == null) {
      num3 = 0;
    }
    items3[1] = metroRequire(tmp9Result6, obj10);
    items2[1] = metroImportDefault(View, obj8);
    items1[1] = metroImportDefault(View, obj6);
    tmp13Result = tmp13(tmp14, obj5);
  }
  items4 = [metroRequire(View, obj4), ];
  const obj12 = { style: tmp.title, children: items5 };
  items5 = [, ];
  const obj11 = { style: tmp.copy, children: items6 };
  const obj13 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  items5[0] = metroRequire(ServerIcon.ServerIcon, obj13);
  const obj14 = { variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp9Result7 = CheckpointTextDefault;
  items5[1] = metroRequire(tmp9Result7, obj14);
  items6 = [metroImportDefault(View, obj12), , ];
  const obj15 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult, style: tmp.number, children: metroRequire(CheckpointCountUpStatNumberDefault, { end: roundResult }) };
  items6[1] = metroRequire(View, obj15);
  const obj16 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: formatResult };
  const tmp9Result8 = CheckpointTextDefault;
  if (null != checkpointTopPercent) {
    const intl4 = tmp2(1128).intl;
    const obj17 = {
      numDays: roundResult,
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
        }
    };
    formatResult = intl4.format(tmp9(3088).sIDTV1, obj17);
  } else {
    const intl3 = tmp2(1128).intl;
    const obj18 = { numDays: roundResult };
    formatResult = intl3.format(tmp9(3088).nLCUQ4, obj18);
  }
  const obj19 = { children: metroImportDefault(View, obj3) };
  items6[2] = metroRequire(tmp9Result8, obj16);
  items4[1] = metroImportDefault(View, obj11);
  return metroRequire(tmp9Result, obj19);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointTopServerStatsScreen.tsx");

export default tmp5;
