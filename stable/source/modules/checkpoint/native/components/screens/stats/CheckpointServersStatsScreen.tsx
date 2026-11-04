// Module ID: 13021
// Function ID: 13022
// Name: CheckpointServersStatsScreen
// Dependencies: [19, 17, 12986, 6047, 21, 5003, 587, 558, 576, 504, 13009, 13015, 13016, 13022, 1128, 3056, 13004, 3088, 13006, 9678, 13023, 13024, 5266, 6915, 2]

// Module 13021 (CheckpointServersStatsScreen)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3056 from "module_3056" /* 3056 */;
import _modDef3088 from "module_3088" /* 3088 */;
import Text_Text from "Text/Text" /* 5266 */;
import GuildIcon from "GuildIcon" /* 6915 */;
import CheckpointTextDefault from "CheckpointText" /* 13004 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 13006 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 13009 */;
import _modDef13015 from "module_13015" /* 13015 */;
import _modDef13016 from "module_13016" /* 13016 */;
import CheckpointDisplayTextDefault from "CheckpointDisplayText" /* 13022 */;
import CheckpointGuildStatsDefault from "CheckpointGuildStats" /* 13023 */;
import CheckpointRankTagDefault from "CheckpointRankTag" /* 13024 */;
import react from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 12986 */;
import CheckpointConstants from "CheckpointConstants" /* 6047 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5003 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
let _require, stats;

let CHECKPOINT_GUILD_CARD_BACKGROUND;
let CHECKPOINT_WHITE;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
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
let size2;
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ CHECKPOINT_GUILD_CARD_BACKGROUND, CHECKPOINT_WHITE } = CheckpointConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, globalContainer: obj3, header: obj4, heading: obj5, globalHeading: obj6, globe: { width: 75, height: 56 }, title: obj7, titleText: { flexShrink: 1 }, guilds: obj8, globalGuilds: obj9, guildCard: obj10, guildContent: obj11, guildRankRow: { flexDirection: "row" }, guildDetails: obj12, guildName: { color: CHECKPOINT_WHITE }, topGuildIcon: size, guildIcon: size1, globalGuildIcon: size2 };
obj2 = { width: "100%", flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { justifyContent: "flex-start", gap: nativeDefault.space.PX_24 };
obj4 = { gap: nativeDefault.space.PX_12 };
obj5 = { gap: nativeDefault.space.PX_8 };
obj6 = { alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj8 = { gap: nativeDefault.space.PX_24 };
obj9 = { gap: nativeDefault.space.PX_16 };
obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY, backgroundColor: CHECKPOINT_GUILD_CARD_BACKGROUND };
obj11 = { flex: 1, alignSelf: "stretch", gap: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_12 };
obj12 = { gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12 };
size = { width: 96, height: 96, borderRadius: nativeDefault.radii.none };
size1 = { width: 72, height: 72, borderRadius: nativeDefault.radii.none };
size2 = { width: 64, height: 64, borderRadius: nativeDefault.radii.none };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointServersStatsScreen() {
  let container;
  let globalGuildIcon;
  let globalGuilds;
  let guilds;
  let header;
  let heading;
  let intl3;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj15;
  let obj6;
  let stringResult1;
  let stringResult2;
  let title;
  let tmp5;
  let tmp6;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(57);
  const tmp4 = closure_8();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp7 = CheckpointStore;
    const items = [CheckpointStore];
    const fn = function o() {
      let guildsByMembers;
      stats = stats.stats;
      let tmp2;
      const tmp = stats;
      if (stats != null) {
        const guilds = stats.guilds;
        if (guilds != null) {
          tmp2 = guilds.guilds;
        }
      }
      const globalStats = tmp.globalStats;
      const obj = { guilds: tmp2, globalGuilds: guildsByMembers };
      guildsByMembers = undefined;
      if (globalStats != null) {
        const guilds2 = globalStats.guilds;
        if (guilds2 != null) {
          guildsByMembers = guilds2.guildsByMembers;
        }
      }
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp5, tmp6);
  ({ guilds, globalGuilds } = stateFromStoresObject);
  if (null != guilds) {
    if (0 !== guilds.length) {
      let tmp9;
      let tmp13;
      const _Symbol6 = Symbol;
      ({ container, header, heading, title } = tmp4);
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
        const tmp12 = closure_6(tmp(9678).ServerIcon, obj2);
        cResult[26] = tmp12;
        tmp9 = tmp12;
      } else {
        tmp9 = cResult[26];
      }
      const _Symbol = Symbol;
      const titleText = tmp4.titleText;
      if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1128).intl;
        const stringResult = intl.string(_modDef3088.Mb5E6r);
        const toLocaleUpperCaseResult = stringResult.toLocaleUpperCase();
        cResult[27] = toLocaleUpperCaseResult;
        tmp13 = toLocaleUpperCaseResult;
      } else {
        tmp13 = cResult[27];
      }
      if (cResult[28] === tmp4.titleText) {
        let tmp16;
        if (cResult[29] === tmp13) {
          tmp16 = cResult[30];
        }
        if (cResult[31] === tmp4.title) {
          let tmp20;
          let tmp23;
          if (cResult[32] === tmp16) {
            tmp20 = cResult[33];
          }
          const _Symbol2 = Symbol;
          if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { children: stringResult1.toLocaleUpperCase() };
            const tmp26 = CheckpointDisplayTextDefault;
            const intl2 = tmp(1128).intl;
            stringResult1 = intl2.string(_modDef3056.F0fkrh);
            const tmp27 = closure_6(tmp26, obj3);
            cResult[34] = tmp27;
            tmp23 = tmp27;
          } else {
            tmp23 = cResult[34];
          }
          if (cResult[35] === tmp4.heading) {
            if (cResult[36] === tmp20) {
              let tmp28;
              let tmp32;
              if (cResult[37] === tmp23) {
                tmp28 = cResult[38];
              }
              const _Symbol3 = Symbol;
              if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                const obj4 = { variant: "heading-lg/medium", children: intl3.string(_modDef3088.IN1DaS) };
                const tmp35 = CheckpointTextDefault;
                intl3 = tmp(1128).intl;
                const tmp36 = closure_6(tmp35, obj4);
                cResult[39] = tmp36;
                tmp32 = tmp36;
              } else {
                tmp32 = cResult[39];
              }
              if (cResult[40] === tmp4.header) {
                let tmp37;
                let tmp42;
                if (cResult[41] === tmp28) {
                  tmp37 = cResult[42];
                }
                if (cResult[43] === guilds) {
                  if (cResult[44] === tmp4.guildIcon) {
                    if (cResult[45] === tmp4.topGuildIcon) {
                      tmp42 = cResult[46];
                    }
                    if (cResult[50] === tmp4.guilds) {
                      let tmp45;
                      if (cResult[51] === tmp42) {
                        tmp45 = cResult[52];
                      }
                      if (cResult[53] === tmp4.container) {
                        if (cResult[54] === tmp37) {
                          let tmp48;
                          if (cResult[55] === tmp45) {
                            tmp48 = cResult[56];
                          }
                          return tmp48;
                        }
                      }
                      class B {
                        constructor(arg0, arg1) {
                          let guild;
                          let numMessagesSent;
                          let numVoiceMinutes;
                          ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
                          let tmp = 0 === arg1;
                          const obj = { guild, rank: arg1 + 1, iconStyle: tmp ? globalGuildIcon.topGuildIcon : globalGuildIcon.guildIcon, children: tmp };
                          const tmp3 = closure_9;
                          if (tmp) {
                            const tmp7 = CheckpointGuildStatsDefault;
                            if (numMessagesSent == null) {
                              numMessagesSent = 0;
                            }
                            const obj2 = { numMessagesSent, numVoiceMinutes };
                            if (numVoiceMinutes == null) {
                              numVoiceMinutes = 0;
                            }
                            tmp = tmp2(tmp7, obj2);
                          }
                          return metroRequire(tmp3, obj, guild.id);
                        }
                      }
                      const obj5 = { children: closure_7(View, obj6) };
                      obj6 = { style: container, children: items1 };
                      items1 = [tmp37, tmp45];
                      const tmp50 = CheckpointScreenDefault;
                      const tmp53 = closure_6(tmp50, obj5);
                      cResult[53] = tmp4.container;
                      cResult[54] = tmp37;
                      cResult[55] = tmp45;
                      cResult[56] = tmp53;
                      tmp48 = tmp53;
                    }
                    class B {
                      constructor(arg0, arg1) {
                        let guild;
                        let numMessagesSent;
                        let numVoiceMinutes;
                        ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
                        let tmp = 0 === arg1;
                        const obj = { guild, rank: arg1 + 1, iconStyle: tmp ? globalGuildIcon.topGuildIcon : globalGuildIcon.guildIcon, children: tmp };
                        const tmp3 = closure_9;
                        if (tmp) {
                          const tmp7 = CheckpointGuildStatsDefault;
                          if (numMessagesSent == null) {
                            numMessagesSent = 0;
                          }
                          const obj2 = { numMessagesSent, numVoiceMinutes };
                          if (numVoiceMinutes == null) {
                            numVoiceMinutes = 0;
                          }
                          tmp = tmp2(tmp7, obj2);
                        }
                        return metroRequire(tmp3, obj, guild.id);
                      }
                    }
                    const obj7 = { style: tmp41, children: tmp42 };
                    const tmp47 = closure_6(View, obj7);
                    cResult[50] = tmp4.guilds;
                    cResult[51] = tmp42;
                    cResult[52] = tmp47;
                    tmp45 = tmp47;
                  }
                }
                if (cResult[47] === tmp4.guildIcon) {
                  let tmp43;
                  if (cResult[48] === tmp4.topGuildIcon) {
                    tmp43 = cResult[49];
                  }
                  const mapped = guilds.map(tmp43);
                  class B {
                    constructor(arg0, arg1) {
                      let guild;
                      let numMessagesSent;
                      let numVoiceMinutes;
                      ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
                      let tmp = 0 === arg1;
                      const obj = { guild, rank: arg1 + 1, iconStyle: tmp ? globalGuildIcon.topGuildIcon : globalGuildIcon.guildIcon, children: tmp };
                      const tmp3 = closure_9;
                      if (tmp) {
                        const tmp7 = CheckpointGuildStatsDefault;
                        if (numMessagesSent == null) {
                          numMessagesSent = 0;
                        }
                        const obj2 = { numMessagesSent, numVoiceMinutes };
                        if (numVoiceMinutes == null) {
                          numVoiceMinutes = 0;
                        }
                        tmp = tmp2(tmp7, obj2);
                      }
                      return metroRequire(tmp3, obj, guild.id);
                    }
                  }
                  cResult[44] = tmp4.guildIcon;
                  cResult[45] = tmp4.topGuildIcon;
                  cResult[46] = mapped;
                  tmp42 = mapped;
                }
                class B {
                  constructor(arg0, arg1) {
                    let guild;
                    let numMessagesSent;
                    let numVoiceMinutes;
                    ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
                    let tmp = 0 === arg1;
                    const obj = { guild, rank: arg1 + 1, iconStyle: tmp ? globalGuildIcon.topGuildIcon : globalGuildIcon.guildIcon, children: tmp };
                    const tmp3 = closure_9;
                    if (tmp) {
                      const tmp7 = CheckpointGuildStatsDefault;
                      if (numMessagesSent == null) {
                        numMessagesSent = 0;
                      }
                      const obj2 = { numMessagesSent, numVoiceMinutes };
                      if (numVoiceMinutes == null) {
                        numVoiceMinutes = 0;
                      }
                      tmp = tmp2(tmp7, obj2);
                    }
                    return metroRequire(tmp3, obj, guild.id);
                  }
                }
                cResult[47] = tmp4.guildIcon;
                cResult[48] = tmp4.topGuildIcon;
                cResult[49] = B;
                tmp43 = B;
              }
              const obj8 = { style: header, children: items2 };
              items2 = [tmp28, tmp32];
              const tmp40 = closure_7(View, obj8);
              cResult[40] = tmp4.header;
              cResult[41] = tmp28;
              cResult[42] = tmp40;
              tmp37 = tmp40;
            }
          }
          const obj9 = { style: heading, children: items3 };
          items3 = [tmp20, tmp23];
          const tmp31 = closure_7(View, obj9);
          cResult[35] = tmp4.heading;
          cResult[36] = tmp20;
          cResult[37] = tmp23;
          cResult[38] = tmp31;
          tmp28 = tmp31;
        }
        const obj10 = { style: title, children: items4 };
        items4 = [tmp9, tmp16];
        const tmp22 = closure_7(View, obj10);
        cResult[31] = tmp4.title;
        cResult[32] = tmp16;
        cResult[33] = tmp22;
        tmp20 = tmp22;
      }
      const obj11 = { variant: "heading-md/extrabold", style: titleText, children: tmp13 };
      const tmp19 = closure_6(CheckpointTextDefault, obj11);
      cResult[28] = tmp4.titleText;
      cResult[29] = tmp13;
      cResult[30] = tmp19;
      tmp16 = tmp19;
    }
  }
  if (cResult[2] === tmp4.container) {
    let tmp54;
    let tmp55;
    let tmp61;
    if (cResult[3] === tmp4.globalContainer) {
      tmp54 = cResult[4];
    }
    if (cResult[5] !== tmp4.globe) {
      const obj12 = { animatedUri: _modDef13015, staticUri: _modDef13016, style: tmp4.globe };
      class B {
        constructor(arg0, arg1) {
          let guild;
          let numMessagesSent;
          let numVoiceMinutes;
          ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
          let tmp = 0 === arg1;
          const obj = { guild, rank: arg1 + 1, iconStyle: tmp ? globalGuildIcon.topGuildIcon : globalGuildIcon.guildIcon, children: tmp };
          const tmp3 = closure_9;
          if (tmp) {
            const tmp7 = CheckpointGuildStatsDefault;
            if (numMessagesSent == null) {
              numMessagesSent = 0;
            }
            const obj2 = { numMessagesSent, numVoiceMinutes };
            if (numVoiceMinutes == null) {
              numVoiceMinutes = 0;
            }
            tmp = tmp2(tmp7, obj2);
          }
          return metroRequire(tmp3, obj, guild.id);
        }
      }
      const tmp59 = closure_6(tmp58, obj12);
      cResult[5] = tmp4.globe;
      cResult[6] = tmp59;
      tmp55 = tmp59;
    } else {
      tmp55 = cResult[6];
    }
    const _Symbol4 = Symbol;
    class B {
      constructor(arg0, arg1) {
        let guild;
        let numMessagesSent;
        let numVoiceMinutes;
        ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
        let tmp = 0 === arg1;
        const obj = { guild, rank: arg1 + 1, iconStyle: tmp ? globalGuildIcon.topGuildIcon : globalGuildIcon.guildIcon, children: tmp };
        const tmp3 = closure_9;
        if (tmp) {
          const tmp7 = CheckpointGuildStatsDefault;
          if (numMessagesSent == null) {
            numMessagesSent = 0;
          }
          const obj2 = { numMessagesSent, numVoiceMinutes };
          if (numVoiceMinutes == null) {
            numVoiceMinutes = 0;
          }
          tmp = tmp2(tmp7, obj2);
        }
        return metroRequire(tmp3, obj, guild.id);
      }
    }
    if (tmp60 === Symbol.for("react.memo_cache_sentinel")) {
      const obj13 = { children: stringResult2.toLocaleUpperCase() };
      class B {
        constructor(arg0, arg1) {
          let guild;
          let numMessagesSent;
          let numVoiceMinutes;
          ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
          let tmp = 0 === arg1;
          const obj = { guild, rank: arg1 + 1, iconStyle: tmp ? globalGuildIcon.topGuildIcon : globalGuildIcon.guildIcon, children: tmp };
          const tmp3 = closure_9;
          if (tmp) {
            const tmp7 = CheckpointGuildStatsDefault;
            if (numMessagesSent == null) {
              numMessagesSent = 0;
            }
            const obj2 = { numMessagesSent, numVoiceMinutes };
            if (numVoiceMinutes == null) {
              numVoiceMinutes = 0;
            }
            tmp = tmp2(tmp7, obj2);
          }
          return metroRequire(tmp3, obj, guild.id);
        }
      }
      const intl4 = tmp(1128).intl;
      stringResult2 = intl4.string(_modDef3056.F0fkrh);
      const tmp65 = closure_6(tmp64, obj13);
      cResult[7] = tmp65;
      tmp61 = tmp65;
    } else {
      tmp61 = cResult[7];
    }
    if (cResult[8] === tmp4.globalHeading) {
      if (cResult[9] === tmp55) {
        let tmp66;
        if (cResult[10] === tmp61) {
          tmp66 = cResult[11];
        }
        const _Symbol5 = Symbol;
        class B {
          constructor(arg0, arg1) {
            let guild;
            let numMessagesSent;
            let numVoiceMinutes;
            ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
            let tmp = 0 === arg1;
            const obj = { guild, rank: arg1 + 1, iconStyle: tmp ? globalGuildIcon.topGuildIcon : globalGuildIcon.guildIcon, children: tmp };
            const tmp3 = closure_9;
            if (tmp) {
              const tmp7 = CheckpointGuildStatsDefault;
              if (numMessagesSent == null) {
                numMessagesSent = 0;
              }
              const obj2 = { numMessagesSent, numVoiceMinutes };
              if (numVoiceMinutes == null) {
                numVoiceMinutes = 0;
              }
              tmp = tmp2(tmp7, obj2);
            }
            return metroRequire(tmp3, obj, guild.id);
          }
        }
        if (cResult[13] === tmp4.header) {
          let tmp72;
          if (cResult[14] === tmp66) {
            tmp72 = cResult[15];
          }
          if (cResult[16] === globalGuilds) {
            let tmp76;
            if (cResult[17] === tmp4.globalGuildIcon) {
              tmp76 = cResult[18];
            }
            if (cResult[19] === tmp4.globalGuilds) {
              let tmp78;
              if (cResult[20] === tmp76) {
                tmp78 = cResult[21];
              }
              if (cResult[22] === tmp54) {
                if (cResult[23] === tmp72) {
                  let tmp81;
                  if (cResult[24] === tmp78) {
                    tmp81 = cResult[25];
                  }
                  return tmp81;
                }
              }
              class B {
                constructor(arg0, arg1) {
                  let guild;
                  let numMessagesSent;
                  let numVoiceMinutes;
                  ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
                  let tmp = 0 === arg1;
                  const obj = { guild, rank: arg1 + 1, iconStyle: tmp ? globalGuildIcon.topGuildIcon : globalGuildIcon.guildIcon, children: tmp };
                  const tmp3 = closure_9;
                  if (tmp) {
                    const tmp7 = CheckpointGuildStatsDefault;
                    if (numMessagesSent == null) {
                      numMessagesSent = 0;
                    }
                    const obj2 = { numMessagesSent, numVoiceMinutes };
                    if (numVoiceMinutes == null) {
                      numVoiceMinutes = 0;
                    }
                    tmp = tmp2(tmp7, obj2);
                  }
                  return metroRequire(tmp3, obj, guild.id);
                }
              }
              const obj14 = { children: closure_7(View, obj15) };
              obj15 = { style: tmp54, children: items5 };
              items5 = [tmp72, tmp78];
              const tmp83 = CheckpointScreenDefault;
              const tmp86 = closure_6(tmp83, obj14);
              cResult[22] = tmp54;
              cResult[23] = tmp72;
              cResult[24] = tmp78;
              cResult[25] = tmp86;
              tmp81 = tmp86;
            }
            class B {
              constructor(arg0, arg1) {
                let guild;
                let numMessagesSent;
                let numVoiceMinutes;
                ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
                let tmp = 0 === arg1;
                const obj = { guild, rank: arg1 + 1, iconStyle: tmp ? globalGuildIcon.topGuildIcon : globalGuildIcon.guildIcon, children: tmp };
                const tmp3 = closure_9;
                if (tmp) {
                  const tmp7 = CheckpointGuildStatsDefault;
                  if (numMessagesSent == null) {
                    numMessagesSent = 0;
                  }
                  const obj2 = { numMessagesSent, numVoiceMinutes };
                  if (numVoiceMinutes == null) {
                    numVoiceMinutes = 0;
                  }
                  tmp = tmp2(tmp7, obj2);
                }
                return metroRequire(tmp3, obj, guild.id);
              }
            }
            const obj16 = { style: tmp4.globalGuilds, children: tmp76 };
            const tmp80 = closure_6(View, obj16);
            cResult[19] = tmp4.globalGuilds;
            cResult[20] = tmp76;
            cResult[21] = tmp80;
            tmp78 = tmp80;
          }
          class B {
            constructor(arg0, arg1) {
              let guild;
              let numMessagesSent;
              let numVoiceMinutes;
              ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
              let tmp = 0 === arg1;
              const obj = { guild, rank: arg1 + 1, iconStyle: tmp ? globalGuildIcon.topGuildIcon : globalGuildIcon.guildIcon, children: tmp };
              const tmp3 = closure_9;
              if (tmp) {
                const tmp7 = CheckpointGuildStatsDefault;
                if (numMessagesSent == null) {
                  numMessagesSent = 0;
                }
                const obj2 = { numMessagesSent, numVoiceMinutes };
                if (numVoiceMinutes == null) {
                  numVoiceMinutes = 0;
                }
                tmp = tmp2(tmp7, obj2);
              }
              return metroRequire(tmp3, obj, guild.id);
            }
          }
          cResult[16] = globalGuilds;
          cResult[17] = tmp4.globalGuildIcon;
          cResult[18] = undefined;
          tmp76 = tmp77;
        }
        const obj17 = { style: tmp4.header, children: items6 };
        items6 = [tmp66, tmp71];
        const tmp75 = closure_7(View, obj17);
        cResult[13] = tmp4.header;
        cResult[14] = tmp66;
        cResult[15] = tmp75;
        tmp72 = tmp75;
      }
    }
    const obj18 = { style: tmp4.globalHeading, children: items7 };
    items7 = [tmp55, tmp61];
    const tmp69 = closure_7(View, obj18);
    cResult[8] = tmp4.globalHeading;
    cResult[9] = tmp55;
    cResult[10] = tmp61;
    cResult[11] = tmp69;
    tmp66 = tmp69;
  }
  const items8 = [, ];
  ({ container: arr6[0], globalContainer: arr6[1] } = tmp4);
  cResult[2] = tmp4.container;
  cResult[3] = tmp4.globalContainer;
  cResult[4] = items8;
  tmp54 = items8;
}) : (function CheckpointServersStatsScreen() {
  let globalGuildIcon;
  let globalGuilds;
  let guilds;
  let intl2;
  let intl5;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let mapped;
  let obj3;
  let stringResult;
  let stringResult1;
  let stringResult2;
  let tmp = closure_8();
  _require = tmp;
  let tmp2 = _require;
  let tmp3 = dependencyMap;
  let obj = require("get initialized");
  const items = [CheckpointStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let guildsByMembers;
    stats = stats.stats;
    let tmp2;
    const tmp = stats;
    if (stats != null) {
      const guilds = stats.guilds;
      if (guilds != null) {
        tmp2 = guilds.guilds;
      }
    }
    const globalStats = tmp.globalStats;
    const obj = { guilds: tmp2, globalGuilds: guildsByMembers };
    guildsByMembers = undefined;
    if (globalStats != null) {
      const guilds2 = globalStats.guilds;
      if (guilds2 != null) {
        guildsByMembers = guilds2.guildsByMembers;
      }
    }
    return obj;
  });
  ({ guilds, globalGuilds } = stateFromStoresObject);
  if (null != guilds) {
    let tmp5Result;
    if (0 !== guilds.length) {
      let obj2 = { children: closure_7(View, obj3) };
      const obj6 = { style: tmp.title, children: items1 };
      items1 = [, ];
      obj3 = { style: tmp.container, children: items4 };
      const obj4 = { style: tmp.header, children: items3 };
      const obj5 = { style: tmp.heading, children: items2 };
      const obj7 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
      const tmp16 = CheckpointScreenDefault;
      items1[0] = closure_6(tmp2(9678).ServerIcon, obj7);
      const obj8 = { variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
      const tmp20 = CheckpointTextDefault;
      const intl3 = tmp2(1128).intl;
      stringResult = intl3.string(_modDef3088.Mb5E6r);
      items1[1] = closure_6(tmp20, obj8);
      items2 = [closure_7(View, obj6), ];
      const obj9 = { children: stringResult1.toLocaleUpperCase() };
      const tmp21 = CheckpointDisplayTextDefault;
      const intl4 = tmp2(1128).intl;
      stringResult1 = intl4.string(_modDef3056.F0fkrh);
      items2[1] = closure_6(tmp21, obj9);
      items3 = [closure_7(View, obj5), ];
      const obj10 = { variant: "heading-lg/medium", children: intl5.string(_modDef3088.IN1DaS) };
      const tmp22 = CheckpointTextDefault;
      intl5 = tmp2(1128).intl;
      items3[1] = closure_6(tmp22, obj10);
      items4 = [closure_7(View, obj4), ];
      const obj11 = {
        style: tmp.guilds,
        children: guilds.map((item, index) => {
              let guild;
              let numMessagesSent;
              let numVoiceMinutes;
              ({ guild, numMessagesSent, numVoiceMinutes } = item);
              let tmp = 0 === index;
              const obj = { guild, rank: index + 1, iconStyle: tmp ? globalGuildIcon.topGuildIcon : globalGuildIcon.guildIcon, children: tmp };
              const tmp3 = closure_9;
              if (tmp) {
                const tmp7 = CheckpointGuildStatsDefault;
                if (numMessagesSent == null) {
                  numMessagesSent = 0;
                }
                const obj2 = { numMessagesSent, numVoiceMinutes };
                if (numVoiceMinutes == null) {
                  numVoiceMinutes = 0;
                }
                tmp = tmp2(tmp7, obj2);
              }
              return metroRequire(tmp3, obj, guild.id);
            })
      };
      items4[1] = closure_6(View, obj11);
      tmp5Result = closure_6(tmp16, obj2);
    }
    return tmp5Result;
  }
  const obj12 = { style: items5, children: items8 };
  items5 = [, ];
  ({ container: arr2[0], globalContainer: arr2[1] } = tmp);
  const obj13 = { style: tmp.header, children: items7 };
  const obj14 = { style: tmp.globalHeading, children: items6 };
  let tmp7 = closure_7;
  const tmp6 = CheckpointScreenDefault;
  const obj15 = { animatedUri: _modDef13015, staticUri: _modDef13016, style: tmp.globe };
  const tmp9 = CheckpointApngPlayerDefault;
  items6 = [closure_6(tmp9, obj15), ];
  const obj16 = { children: stringResult2.toLocaleUpperCase() };
  const tmp10 = CheckpointDisplayTextDefault;
  const intl = tmp2(1128).intl;
  stringResult2 = intl.string(_modDef3056.F0fkrh);
  items6[1] = closure_6(tmp10, obj16);
  items7 = [closure_7(View, obj14), ];
  const obj17 = { variant: "heading-lg/medium", children: intl2.string(_modDef3088.bhnqop) };
  const tmp11 = CheckpointTextDefault;
  intl2 = tmp2(1128).intl;
  items7[1] = closure_6(tmp11, obj17);
  items8 = [closure_7(View, obj13), ];
  const obj18 = { style: tmp.globalGuilds, children: mapped };
  mapped = undefined;
  if (globalGuilds != null) {
    mapped = globalGuilds.map((guild, index) => {
      const obj = { guild, rank: index + 1, iconStyle: globalGuildIcon.globalGuildIcon };
      return metroRequire(closure_9, obj, guild.id);
    });
  }
  const obj19 = { children: tmp7(View, obj12) };
  items8[1] = closure_6(View, obj18);
  tmp5Result = tmp5(tmp6, obj19);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildCard(arg0) {
  let children;
  let guild;
  let iconStyle;
  let items;
  let items1;
  let items2;
  let rank;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(23);
  ({ guild, rank, iconStyle, children } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] !== rank) {
    const obj2 = { rank, chamferCorner: "bottom-right" };
    const tmp8 = metroRequire(CheckpointRankTagDefault, obj2);
    cResult[0] = rank;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.guildRankRow) {
    let tmp9;
    if (cResult[3] === tmp5) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === guild.name) {
      let tmp11;
      if (cResult[6] === tmp4.guildName) {
        tmp11 = cResult[7];
      }
      if (cResult[8] === children) {
        if (cResult[9] === tmp4.guildDetails) {
          let tmp14;
          if (cResult[10] === tmp11) {
            tmp14 = cResult[11];
          }
          if (cResult[12] === tmp4.guildContent) {
            if (cResult[13] === tmp9) {
              let tmp18;
              if (cResult[14] === tmp14) {
                tmp18 = cResult[15];
              }
              if (cResult[16] === guild) {
                let tmp22;
                if (cResult[17] === iconStyle) {
                  tmp22 = cResult[18];
                }
                if (cResult[19] === tmp4.guildCard) {
                  if (cResult[20] === tmp18) {
                    let tmp27;
                    if (cResult[21] === tmp22) {
                      tmp27 = cResult[22];
                    }
                    return tmp27;
                  }
                }
                const obj3 = { style: tmp4.guildCard, children: items };
                items = [tmp18, tmp22];
                const tmp30 = metroImportDefault(View, obj3);
                cResult[19] = tmp4.guildCard;
                cResult[20] = tmp18;
                cResult[21] = tmp22;
                cResult[22] = tmp30;
                tmp27 = tmp30;
              }
              const obj4 = { guild, size: GuildIcon.GuildIconSizes.XXLARGE, style: iconStyle };
              const tmp25 = GuildIconDefault;
              const tmp26 = metroRequire(tmp25, obj4);
              cResult[16] = guild;
              cResult[17] = iconStyle;
              cResult[18] = tmp26;
              tmp22 = tmp26;
            }
          }
          const obj5 = { style: tmp4.guildContent, children: items1 };
          items1 = [tmp9, tmp14];
          const tmp21 = metroImportDefault(View, obj5);
          cResult[12] = tmp4.guildContent;
          cResult[13] = tmp9;
          cResult[14] = tmp14;
          cResult[15] = tmp21;
          tmp18 = tmp21;
        }
      }
      const obj6 = { style: tmp4.guildDetails, children: items2 };
      items2 = [tmp11, children];
      const tmp17 = metroImportDefault(View, obj6);
      cResult[8] = children;
      cResult[9] = tmp4.guildDetails;
      cResult[10] = tmp11;
      cResult[11] = tmp17;
      tmp14 = tmp17;
    }
    const obj7 = { variant: "heading-lg/medium", style: tmp4.guildName, lineClamp: 1, ellipsizeMode: "tail", children: guild.name };
    const tmp13 = metroRequire(Text_Text.Text, obj7);
    cResult[5] = guild.name;
    cResult[6] = tmp4.guildName;
    cResult[7] = tmp13;
    tmp11 = tmp13;
  }
  const obj8 = { style: tmp4.guildRankRow, children: tmp5 };
  const tmp10 = metroRequire(View, obj8);
  cResult[2] = tmp4.guildRankRow;
  cResult[3] = tmp5;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : (function GuildCard(guild) {
  let children;
  let iconStyle;
  let items;
  let items1;
  let items2;
  let rank;
  guild = guild.guild;
  ({ rank, iconStyle, children } = guild);
  const tmp = closure_8();
  const obj2 = { style: tmp.guildContent, children: items };
  items = [, ];
  const obj = { style: tmp.guildCard, children: items2 };
  const obj3 = { style: tmp.guildRankRow, children: metroRequire(CheckpointRankTagDefault, { rank, chamferCorner: "bottom-right" }) };
  items[0] = metroRequire(View, obj3);
  const obj4 = { style: tmp.guildDetails, children: items1 };
  items1 = [, ];
  const obj5 = { variant: "heading-lg/medium", style: tmp.guildName, lineClamp: 1, ellipsizeMode: "tail", children: guild.name };
  items1[0] = metroRequire(Text_Text.Text, obj5);
  items1[1] = children;
  items[1] = metroImportDefault(View, obj4);
  items2 = [metroImportDefault(View, obj2), ];
  const obj6 = { guild, size: GuildIcon.GuildIconSizes.XXLARGE, style: iconStyle };
  const tmp2 = GuildIconDefault;
  items2[1] = metroRequire(tmp2, obj6);
  return metroImportDefault(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointServersStatsScreen.tsx");

export default tmp6;
