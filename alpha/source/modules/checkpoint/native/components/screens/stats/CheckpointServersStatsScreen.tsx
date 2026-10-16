// Module ID: 12692
// Function ID: 12693
// Name: CheckpointServersStatsScreen
// Dependencies: [17, 12660, 5500, 21, 5154, 587, 558, 576, 504, 9481, 1128, 3123, 12682, 3091, 12684, 12693, 5150, 11415, 8425, 6383, 2]

// Module 12692 (CheckpointServersStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3091 from "module_3091" /* 3091 */;
import _modDef3123 from "module_3123" /* 3123 */;
import Text_Text from "Text/Text" /* 5150 */;
import GuildIcon from "GuildIcon" /* 6383 */;
import ChatIcon from "ChatIcon" /* 8425 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11415 */;
import CheckpointTextDefault from "CheckpointText" /* 12682 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 12684 */;
import CheckpointRankTagDefault from "CheckpointRankTag" /* 12693 */;
import CheckpointStore from "CheckpointStore" /* 12660 */;
import CheckpointConstants from "CheckpointConstants" /* 5500 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5154 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let stats;

let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let tmp;
const intl4 = tmp(1128);
const ServerIcon = tmp(9481);
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const CHECKPOINT_WHITE = CheckpointConstants.CHECKPOINT_WHITE;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, heading: obj4, title: obj5, titleText: { flexShrink: 1 }, guilds: obj6, guildCard: obj7, guildContent: obj8, guildRankRow: { flexDirection: "row" }, guildDetails: obj9, guildName: { color: CHECKPOINT_WHITE }, guildStats: obj10, guildStat: obj11, guildStatText: { fontSize: 16, lineHeight: 20 }, topGuildIcon: size, guildIcon: size1 };
obj2 = { width: "100%", flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_12 };
obj4 = { gap: nativeDefault.space.PX_8 };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj6 = { gap: nativeDefault.space.PX_24 };
obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY, backgroundColor: "#04363ABF" };
obj8 = { flex: 1, alignSelf: "stretch", gap: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_12 };
obj9 = { gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12 };
obj10 = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_16 };
obj11 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
size = { width: 96, height: 96, borderRadius: nativeDefault.radii.none };
size1 = { width: 72, height: 72, borderRadius: nativeDefault.radii.none };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointServersStatsScreen() {
  let container;
  let first;
  let header;
  let heading;
  let intl3;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj8;
  let stringResult1;
  let title;
  let tmp12;
  let tmp9;
  let tmp = require;
  let tmp2 = dependencyMap;
  let obj = react;
  const cResult = obj.c(25);
  const tmp4 = closure_8();
  const items = [CheckpointStore];
  const obj2 = get_initialized;
  let stateFromStores = obj2.useStateFromStores(items, () => {
    stats = stats.stats;
    let tmp;
    if (stats != null) {
      const guilds = stats.guilds;
      if (guilds != null) {
        tmp = guilds.guilds;
      }
    }
    return tmp;
  });
  if (stateFromStores == null) {
    stateFromStores = [];
  }
  ({ container, header, heading, title } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
    const tmp8 = metroRequire(ServerIcon.ServerIcon, obj3);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  const titleText = tmp4.titleText;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(_modDef3123.Mb5E6r);
    const toLocaleUpperCaseResult = stringResult.toLocaleUpperCase();
    cResult[1] = toLocaleUpperCaseResult;
    tmp9 = toLocaleUpperCaseResult;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== tmp4.titleText) {
    const obj4 = { variant: "heading-md/extrabold", style: titleText, children: tmp9 };
    const tmp15 = metroRequire(CheckpointTextDefault, obj4);
    cResult[2] = tmp4.titleText;
    cResult[3] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === tmp4.title) {
    let tmp16;
    let tmp18;
    if (cResult[5] === tmp12) {
      tmp16 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { variant: "display-lg", children: stringResult1.toLocaleUpperCase() };
      const tmp21 = CheckpointTextDefault;
      const intl2 = intl4.intl;
      stringResult1 = intl2.string(_modDef3091.F0fkrh);
      const tmp22 = metroRequire(tmp21, obj5);
      cResult[7] = tmp22;
      tmp18 = tmp22;
    } else {
      tmp18 = cResult[7];
    }
    if (cResult[8] === tmp4.heading) {
      let tmp23;
      let tmp27;
      if (cResult[9] === tmp16) {
        tmp23 = cResult[10];
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { variant: "heading-lg/medium", children: intl3.string(_modDef3123.IN1DaS) };
        const tmp30 = CheckpointTextDefault;
        intl3 = intl4.intl;
        const tmp31 = metroRequire(tmp30, obj6);
        cResult[11] = tmp31;
        tmp27 = tmp31;
      } else {
        tmp27 = cResult[11];
      }
      if (cResult[12] === tmp4.header) {
        let tmp32;
        let tmp36;
        if (cResult[13] === tmp23) {
          tmp32 = cResult[14];
        }
        let guilds = tmp4.guilds;
        if (cResult[15] !== stateFromStores) {
          let tmp37;
          const _Symbol3 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function k(arg0, index) {
              let guild;
              let numMessagesSent;
              let numVoiceMinutes;
              ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
              const obj = { guild, index, numMessagesSent, numVoiceMinutes };
              const tmp = closure_1_6;
              const tmp2 = closure_1_9;
              if (numMessagesSent == null) {
                numMessagesSent = 0;
              }
              if (numVoiceMinutes == null) {
                numVoiceMinutes = 0;
              }
              return tmp(tmp2, obj, guild.id);
            };
            cResult[17] = fn;
            tmp37 = fn;
          } else {
            tmp37 = cResult[17];
          }
          const mapped = stateFromStores.map(tmp37);
          cResult[15] = stateFromStores;
          cResult[16] = mapped;
          tmp36 = mapped;
        } else {
          tmp36 = cResult[16];
        }
        if (cResult[18] === tmp4.guilds) {
          let tmp39;
          if (cResult[19] === tmp36) {
            tmp39 = cResult[20];
          }
          if (cResult[21] === tmp4.container) {
            if (cResult[22] === tmp32) {
              let tmp43;
              if (cResult[23] === tmp39) {
                tmp43 = cResult[24];
              }
              return tmp43;
            }
          }
          const obj7 = { children: metroImportDefault(View, obj8) };
          obj8 = { style: container, children: items1 };
          items1 = [tmp32, tmp39];
          const tmp46 = CheckpointScreenDefault;
          const tmp49 = metroRequire(tmp46, obj7);
          cResult[21] = tmp4.container;
          cResult[22] = tmp32;
          cResult[23] = tmp39;
          cResult[24] = tmp49;
          tmp43 = tmp49;
        }
        const obj9 = { style: guilds, children: tmp36 };
        const tmp42 = metroRequire(View, obj9);
        cResult[18] = tmp4.guilds;
        cResult[19] = tmp36;
        cResult[20] = tmp42;
        tmp39 = tmp42;
      }
      const obj10 = { style: header, children: items2 };
      items2 = [tmp23, tmp27];
      const tmp35 = metroImportDefault(View, obj10);
      cResult[12] = tmp4.header;
      cResult[13] = tmp23;
      cResult[14] = tmp35;
      tmp32 = tmp35;
    }
    const obj11 = { style: heading, children: items3 };
    items3 = [tmp16, tmp18];
    const tmp26 = metroImportDefault(View, obj11);
    cResult[8] = tmp4.heading;
    cResult[9] = tmp16;
    cResult[10] = tmp26;
    tmp23 = tmp26;
  }
  const obj12 = { style: title, children: items4 };
  items4 = [first, tmp12];
  const tmp17 = metroImportDefault(View, obj12);
  cResult[4] = tmp4.title;
  cResult[5] = tmp12;
  cResult[6] = tmp17;
  tmp16 = tmp17;
}) : (function CheckpointServersStatsScreen() {
  let intl3;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj3;
  let stringResult;
  let stringResult1;
  let tmp = closure_8();
  let tmp2 = require;
  let obj = get_initialized;
  const items = [CheckpointStore];
  let stateFromStores = obj.useStateFromStores(items, () => {
    stats = stats.stats;
    let tmp;
    if (stats != null) {
      const guilds = stats.guilds;
      if (guilds != null) {
        tmp = guilds.guilds;
      }
    }
    return tmp;
  });
  if (stateFromStores == null) {
    stateFromStores = [];
  }
  const obj2 = { children: metroImportDefault(View, obj3) };
  const obj6 = { style: tmp.title, children: items1 };
  items1 = [, ];
  obj3 = { style: tmp.container, children: items4 };
  const obj4 = { style: tmp.header, children: items3 };
  const obj5 = { style: tmp.heading, children: items2 };
  const obj7 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  const tmp4 = CheckpointScreenDefault;
  items1[0] = metroRequire(ServerIcon.ServerIcon, obj7);
  const obj8 = { variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp5 = CheckpointTextDefault;
  const intl = intl4.intl;
  stringResult = intl.string(_modDef3123.Mb5E6r);
  items1[1] = metroRequire(tmp5, obj8);
  items2 = [metroImportDefault(View, obj6), ];
  const obj9 = { variant: "display-lg", children: stringResult1.toLocaleUpperCase() };
  const tmp6 = CheckpointTextDefault;
  const intl2 = intl4.intl;
  stringResult1 = intl2.string(_modDef3091.F0fkrh);
  items2[1] = metroRequire(tmp6, obj9);
  items3 = [metroImportDefault(View, obj5), ];
  const obj10 = { variant: "heading-lg/medium", children: intl3.string(_modDef3123.IN1DaS) };
  const tmp7 = CheckpointTextDefault;
  intl3 = intl4.intl;
  items3[1] = metroRequire(tmp7, obj10);
  items4 = [metroImportDefault(View, obj4), ];
  const obj11 = {
    style: tmp.guilds,
    children: stateFromStores.map((item, index) => {
      let guild;
      let numMessagesSent;
      let numVoiceMinutes;
      ({ guild, numMessagesSent, numVoiceMinutes } = item);
      const obj = { guild, index, numMessagesSent, numVoiceMinutes };
      const tmp = closure_1_6;
      const tmp2 = closure_1_9;
      if (numMessagesSent == null) {
        numMessagesSent = 0;
      }
      if (numVoiceMinutes == null) {
        numVoiceMinutes = 0;
      }
      return tmp(tmp2, obj, guild.id);
    })
  };
  items4[1] = metroRequire(View, obj11);
  return metroRequire(tmp4, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildCard(arg0) {
  let guild;
  let guildCard;
  let guildContent;
  let index;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let numMessagesSent;
  let numVoiceMinutes;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp16;
  let tmp21;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = react;
  const cResult = obj.c(50);
  ({ guild, index, numVoiceMinutes, numMessagesSent } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === guild.name) {
    if (cResult[1] === index) {
      if (cResult[2] === 0 === index) {
        if (cResult[3] === numMessagesSent) {
          if (cResult[4] === numVoiceMinutes) {
            if (cResult[5] === tmp4.guildCard) {
              if (cResult[6] === tmp4.guildContent) {
                if (cResult[7] === tmp4.guildDetails) {
                  if (cResult[8] === tmp4.guildName) {
                    if (cResult[9] === tmp4.guildRankRow) {
                      if (cResult[10] === tmp4.guildStat) {
                        if (cResult[11] === tmp4.guildStatText) {
                          if (cResult[12] === tmp4.guildStats) {
                            tmp6 = cResult[13];
                            tmp7 = cResult[14];
                            tmp8 = cResult[15];
                            tmp9 = cResult[16];
                            tmp10 = cResult[17];
                            tmp11 = cResult[18];
                            tmp12 = cResult[19];
                            tmp13 = cResult[20];
                            tmp14 = cResult[21];
                          }
                          if (cResult[32] === tmp6) {
                            if (cResult[33] === tmp9) {
                              if (cResult[34] === tmp10) {
                                let tmp33;
                                if (cResult[35] === tmp11) {
                                  tmp33 = cResult[36];
                                }
                                if (cResult[37] === tmp7) {
                                  if (cResult[38] === tmp12) {
                                    if (cResult[39] === tmp13) {
                                      let tmp36;
                                      if (cResult[40] === tmp33) {
                                        tmp36 = cResult[41];
                                      }
                                      const tmp39 = 0 === index ? tmp4.topGuildIcon : tmp4.guildIcon;
                                      if (cResult[42] === guild) {
                                        let tmp40;
                                        if (cResult[43] === tmp39) {
                                          tmp40 = cResult[44];
                                        }
                                        if (cResult[45] === tmp8) {
                                          if (cResult[46] === tmp40) {
                                            if (cResult[47] === tmp14) {
                                              let tmp45;
                                              if (cResult[48] === tmp36) {
                                                tmp45 = cResult[49];
                                              }
                                              return tmp45;
                                            }
                                          }
                                        }
                                        const obj2 = { style: tmp14, children: items };
                                        items = [tmp36, tmp40];
                                        const tmp47 = metroImportDefault(tmp8, obj2);
                                        cResult[45] = tmp8;
                                        cResult[46] = tmp40;
                                        cResult[47] = tmp14;
                                        cResult[48] = tmp36;
                                        cResult[49] = tmp47;
                                        tmp45 = tmp47;
                                      }
                                      const obj3 = { guild, size: GuildIcon.GuildIconSizes.XXLARGE, style: tmp39 };
                                      const tmp43 = GuildIconDefault;
                                      const tmp44 = metroRequire(tmp43, obj3);
                                      cResult[42] = guild;
                                      cResult[43] = tmp39;
                                      cResult[44] = tmp44;
                                      tmp40 = tmp44;
                                    }
                                  }
                                }
                                const obj4 = { style: tmp12, children: items1 };
                                items1 = [tmp13, tmp33];
                                const tmp38 = metroImportDefault(tmp7, obj4);
                                cResult[37] = tmp7;
                                cResult[38] = tmp12;
                                cResult[39] = tmp13;
                                cResult[40] = tmp33;
                                cResult[41] = tmp38;
                                tmp36 = tmp38;
                              }
                            }
                          }
                          const obj5 = { style: tmp9, children: items2 };
                          items2 = [tmp10, tmp11];
                          const tmp35 = metroImportDefault(tmp6, obj5);
                          cResult[32] = tmp6;
                          cResult[33] = tmp9;
                          cResult[34] = tmp10;
                          cResult[35] = tmp11;
                          cResult[36] = tmp35;
                          tmp33 = tmp35;
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
  }
  const rounded = Math.round(numVoiceMinutes);
  if (cResult[22] !== numMessagesSent) {
    const _Math = Math;
    const rounded1 = Math.round(numMessagesSent);
    cResult[22] = numMessagesSent;
    cResult[23] = rounded1;
    tmp16 = rounded1;
  } else {
    tmp16 = cResult[23];
  }
  const intl = tmp(1128).intl;
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3091.UZbUtl, { numMinutes: rounded });
  const intl2 = tmp(1128).intl;
  ({ guildCard, guildContent } = tmp4);
  const sum = index + 1;
  const stringResult = intl2.string(_modDef3091.wWKySP);
  if (cResult[24] !== sum) {
    const obj6 = { rank: sum, chamferCorner: "bottom-right" };
    const tmp23 = metroRequire(CheckpointRankTagDefault, obj6);
    cResult[24] = sum;
    cResult[25] = tmp23;
    tmp21 = tmp23;
  } else {
    tmp21 = cResult[25];
  }
  if (cResult[26] === tmp4.guildRankRow) {
    let tmp24;
    if (cResult[27] === tmp21) {
      tmp24 = cResult[28];
    }
    const guildDetails = tmp4.guildDetails;
    if (cResult[29] === guild.name) {
      let tmp26;
      if (cResult[30] === tmp4.guildName) {
        tmp26 = cResult[31];
      }
      let tmp29 = tmp5;
      if (tmp29) {
        const obj7 = { style: tmp4.guildStats, children: items4 };
        const _HermesInternal = HermesInternal;
        const obj8 = { accessible: true, accessibilityLabel: "" + rounded + " " + formatToPlainStringResult.toLocaleLowerCase(), style: tmp4.guildStat, children: items3 };
        const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
        items3 = [metroRequire(MicrophoneIcon.MicrophoneIcon, obj9), ];
        const obj10 = { variant: "experimental/mono-md/bold", style: tmp4.guildStatText, children: rounded };
        items3[1] = metroRequire(CheckpointTextDefault, obj10);
        items4 = [metroImportDefault(View, obj8), ];
        const _HermesInternal2 = HermesInternal;
        const obj11 = { accessible: true, accessibilityLabel: "" + tmp16 + " " + stringResult.toLocaleLowerCase(), style: tmp4.guildStat, children: items5 };
        const obj12 = { size: "xs", color: CHECKPOINT_PRIMARY };
        items5 = [metroRequire(ChatIcon.ChatIcon, obj12), ];
        const obj13 = { variant: "experimental/mono-md/bold", style: tmp4.guildStatText, children: tmp16 };
        items5[1] = metroRequire(CheckpointTextDefault, obj13);
        items4[1] = metroImportDefault(View, obj11);
        tmp29 = metroImportDefault(tmp19, obj7);
      }
      cResult[0] = guild.name;
      cResult[1] = index;
      cResult[2] = 0 === index;
      cResult[3] = numMessagesSent;
      cResult[4] = numVoiceMinutes;
      cResult[5] = tmp4.guildCard;
      cResult[6] = tmp4.guildContent;
      cResult[7] = tmp4.guildDetails;
      cResult[8] = tmp4.guildName;
      cResult[9] = tmp4.guildRankRow;
      cResult[10] = tmp4.guildStat;
      cResult[11] = tmp4.guildStatText;
      cResult[12] = tmp4.guildStats;
      cResult[13] = View;
      cResult[14] = View;
      cResult[15] = View;
      cResult[16] = guildDetails;
      cResult[17] = tmp26;
      cResult[18] = tmp29;
      cResult[19] = guildContent;
      cResult[20] = tmp24;
      cResult[21] = guildCard;
      tmp11 = tmp29;
      tmp14 = guildCard;
      tmp13 = tmp24;
      tmp12 = guildContent;
      tmp10 = tmp26;
      tmp9 = guildDetails;
      tmp8 = tmp19;
      tmp7 = tmp19;
      tmp6 = tmp19;
    }
    const obj14 = { variant: "heading-lg/medium", style: tmp4.guildName, lineClamp: 1, ellipsizeMode: "tail", children: guild.name };
    const tmp28 = metroRequire(Text_Text.Text, obj14);
    cResult[29] = guild.name;
    cResult[30] = tmp4.guildName;
    cResult[31] = tmp28;
    tmp26 = tmp28;
  }
  const obj15 = { style: tmp4.guildRankRow, children: tmp21 };
  const tmp25 = metroRequire(View, obj15);
  cResult[26] = tmp4.guildRankRow;
  cResult[27] = tmp21;
  cResult[28] = tmp25;
  tmp24 = tmp25;
}) : (function GuildCard(arg0) {
  let guild;
  let index;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let numMessagesSent;
  let numVoiceMinutes;
  let obj4;
  ({ guild, index } = arg0);
  ({ numVoiceMinutes, numMessagesSent } = arg0);
  const tmp = closure_8();
  const rounded = Math.round(numVoiceMinutes);
  const rounded1 = Math.round(numMessagesSent);
  const intl = intl4.intl;
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3091.UZbUtl, { numMinutes: rounded });
  const intl2 = intl4.intl;
  const obj = { style: tmp.guildCard, children: items5 };
  const obj2 = { style: tmp.guildContent, children: items };
  const obj3 = { style: tmp.guildRankRow, children: metroRequire(CheckpointRankTagDefault, obj4) };
  obj4 = { rank: index + 1, chamferCorner: "bottom-right" };
  const stringResult = intl2.string(_modDef3091.wWKySP);
  items = [metroRequire(View, obj3), ];
  const obj5 = { style: tmp.guildDetails, children: items1 };
  items1 = [, ];
  const obj6 = { variant: "heading-lg/medium", style: tmp.guildName, lineClamp: 1, ellipsizeMode: "tail", children: guild.name };
  items1[0] = metroRequire(Text_Text.Text, obj6);
  let tmp8Result = tmp2;
  if (tmp8Result) {
    const obj7 = { style: tmp.guildStats, children: items3 };
    const _HermesInternal = HermesInternal;
    const obj8 = { accessible: true, accessibilityLabel: "" + rounded + " " + formatToPlainStringResult.toLocaleLowerCase(), style: tmp.guildStat, children: items2 };
    const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
    items2 = [metroRequire(MicrophoneIcon.MicrophoneIcon, obj9), ];
    const obj10 = { variant: "experimental/mono-md/bold", style: tmp.guildStatText, children: rounded };
    items2[1] = metroRequire(CheckpointTextDefault, obj10);
    items3 = [metroImportDefault(View, obj8), ];
    const _HermesInternal2 = HermesInternal;
    const obj11 = { accessible: true, accessibilityLabel: "" + rounded1 + " " + stringResult.toLocaleLowerCase(), style: tmp.guildStat, children: items4 };
    const obj12 = { size: "xs", color: CHECKPOINT_PRIMARY };
    items4 = [metroRequire(ChatIcon.ChatIcon, obj12), ];
    const obj13 = { variant: "experimental/mono-md/bold", style: tmp.guildStatText, children: rounded1 };
    items4[1] = metroRequire(CheckpointTextDefault, obj13);
    items3[1] = metroImportDefault(View, obj11);
    tmp8Result = tmp8(tmp9, obj7);
  }
  items1[1] = tmp8Result;
  items[1] = metroImportDefault(View, obj5);
  items5 = [metroImportDefault(View, obj2), ];
  const obj14 = { guild, size: GuildIcon.GuildIconSizes.XXLARGE, style: 0 === index ? tmp.topGuildIcon : tmp.guildIcon };
  const tmp7Result = GuildIconDefault;
  items5[1] = metroRequire(tmp7Result, obj14);
  return metroImportDefault(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointServersStatsScreen.tsx");

export default tmp5;
