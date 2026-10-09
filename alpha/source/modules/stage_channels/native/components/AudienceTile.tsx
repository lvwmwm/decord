// Module ID: 11143
// Function ID: 11144
// Name: AudienceTile
// Dependencies: [19, 17, 2124, 21, 5091, 587, 558, 576, 5413, 1200, 10975, 1497, 504, 5957, 7492, 5406, 6333, 1126, 11123, 4930, 5026, 2]
// Exports: getTileWidthStyle

// Module 11143 (AudienceTile)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 5413 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7492 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let size;
let tmp;
const native = tmp(1200);
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { touchableContainer: { overflow: "visible" }, container: { alignItems: "center" }, avatarContainer: { position: "relative", padding: 8, paddingTop: 0, paddingBottom: 4 }, raisedHandContainer: size, activeBackground: obj2, raisedHand: { height: 13, width: 13, alignItems: "center", justifyContent: "center", resizeMode: "contain" }, nameplateContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, usernameText: obj3, faded: { opacity: 0.5 } };
size = { position: "absolute", top: -8, right: 0, height: 24, width: 24, alignItems: "center", justifyContent: "center", borderRadius: 12, borderWidth: 2, borderColor: nativeDefault.unsafe_rawColors.PRIMARY_800, backgroundColor: nativeDefault.colors.WHITE };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj3 = { fontSize: 14, color: nativeDefault.colors.WHITE };
const styles = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function RaisedHandIcon(rtsState) {
  let PRIMARY_800;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(9);
  rtsState = rtsState.rtsState;
  const tmp4 = styles();
  let activeBackground = rtsState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (activeBackground) {
    PRIMARY_800 = unsafe_rawColors.WHITE;
    tmp6 = tmp5;
  } else {
    PRIMARY_800 = unsafe_rawColors.PRIMARY_800;
    tmp6 = tmp5;
  }
  if (activeBackground) {
    activeBackground = tmp4.activeBackground;
  }
  if (cResult[0] === tmp4.raisedHandContainer) {
    let tmp7;
    if (cResult[1] === activeBackground) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === PRIMARY_800) {
      let tmp8;
      if (cResult[4] === tmp4.raisedHand) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp7) {
        let tmp11;
        if (cResult[7] === tmp8) {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
      const obj2 = { style: tmp7, children: tmp8 };
      const tmp14 = hasOwnProperty(View, obj2);
      cResult[6] = tmp7;
      cResult[7] = tmp8;
      cResult[8] = tmp14;
      tmp11 = tmp14;
    }
    const obj3 = { style: tmp4.raisedHand, source: tmp6(10975), color: PRIMARY_800 };
    const Icon = native.Icon;
    const tmp10 = hasOwnProperty(Icon, obj3);
    cResult[3] = PRIMARY_800;
    cResult[4] = tmp4.raisedHand;
    cResult[5] = tmp10;
    tmp8 = tmp10;
  }
  const items = [tmp4.raisedHandContainer, activeBackground];
  cResult[0] = tmp4.raisedHandContainer;
  cResult[1] = activeBackground;
  cResult[2] = items;
  tmp7 = items;
}) : (function RaisedHandIcon(rtsState) {
  let Icon;
  let PRIMARY_800;
  let obj2;
  let tmp5;
  rtsState = rtsState.rtsState;
  const tmp = styles();
  let activeBackground = rtsState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (activeBackground) {
    PRIMARY_800 = unsafe_rawColors.WHITE;
    tmp5 = tmp4;
  } else {
    PRIMARY_800 = unsafe_rawColors.PRIMARY_800;
    tmp5 = tmp4;
  }
  const items = [tmp.raisedHandContainer, ];
  const tmp7 = View;
  if (activeBackground) {
    activeBackground = tmp.activeBackground;
  }
  items[1] = activeBackground;
  const obj = { style: items, children: hasOwnProperty(Icon, obj2) };
  obj2 = { style: tmp.raisedHand, source: tmp5(10975), color: PRIMARY_800 };
  Icon = native.Icon;
  return hasOwnProperty(tmp7, obj);
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
function getTileWidthStyle(arg0) {
  return (arg0 - 46) / 4;
}
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function AudienceTile(channel) {
  let blocked;
  let closure_2;
  let ignored;
  let items1;
  let items2;
  let items4;
  let participant;
  let rtsState;
  let theme;
  let tmp7;
  let tmp9;
  const tmp = channel;
  let tmp2 = dependencyMap;
  let obj = channel(576);
  const cResult = obj.c(70);
  channel = channel.channel;
  ({ participant, theme } = channel);
  const user = participant.user;
  ({ rtsState, blocked, ignored } = participant);
  const tmp4 = styles();
  const diff = user(1497)().width - 46;
  if (cResult[0] !== channel) {
    const guildId = channel.getGuildId();
    cResult[0] = channel;
    cResult[1] = guildId;
    tmp7 = guildId;
  } else {
    tmp7 = cResult[1];
  }
  dependencyMap = tmp7;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[2] = items;
    tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === tmp7) {
    let tmp11;
    let tmp12;
    let tmp14;
    if (cResult[4] === user.id) {
      tmp11 = cResult[5];
      tmp12 = cResult[6];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp11, tmp12);
    if (cResult[7] !== rtsState) {
      const tmpResult3 = tmp(5957);
      const result = tmpResult3.isRequestedToSpeakAll(rtsState);
      cResult[7] = rtsState;
      cResult[8] = result;
      tmp14 = result;
    } else {
      tmp14 = cResult[8];
    }
    if (cResult[9] === channel.id) {
      let tmp16;
      if (cResult[10] === user.id) {
        tmp16 = cResult[11];
      }
      if (cResult[12] === blocked) {
        if (cResult[13] === channel.id) {
          if (cResult[14] === tmp7) {
            if (cResult[15] === ignored) {
              let tmp17;
              let tmp19;
              let tmp20;
              let tmp25;
              if (cResult[16] === user) {
                tmp17 = cResult[17];
                tmp19 = cResult[19];
                tmp20 = cResult[20];
              }
              const result1 = diff / 4;
              if (cResult[21] !== result1) {
                let obj2 = { width: result1 };
                cResult[21] = result1;
                cResult[22] = obj2;
                tmp25 = obj2;
              } else {
                tmp25 = cResult[22];
              }
              if (cResult[23] === tmp4.container) {
                if (cResult[24] === tmp4.touchableContainer) {
                  let tmp26;
                  if (cResult[25] === tmp25) {
                    tmp26 = cResult[26];
                  }
                  if (cResult[27] === tmp7) {
                    if (cResult[28] === (tmp18 && tmp4.faded)) {
                      let tmp30;
                      if (cResult[29] === user) {
                        tmp30 = cResult[30];
                      }
                      if (cResult[31] === rtsState) {
                        let tmp33;
                        if (cResult[32] === tmp14) {
                          tmp33 = cResult[33];
                        }
                        if (cResult[34] === tmp4.avatarContainer) {
                          if (cResult[35] === tmp30) {
                            let tmp37;
                            let tmp41;
                            let tmp44;
                            if (cResult[36] === tmp33) {
                              tmp37 = cResult[37];
                            }
                            if (cResult[38] !== blocked) {
                              const tmp42 = blocked && closure_5(tmp(11123).BlockedStatus, {});
                              cResult[38] = blocked;
                              cResult[39] = tmp42;
                              tmp41 = tmp42;
                            } else {
                              tmp41 = cResult[39];
                            }
                            if (cResult[40] !== ignored) {
                              const tmp45 = ignored && closure_5(tmp(11123).IgnoredStatus, {});
                              cResult[40] = ignored;
                              cResult[41] = tmp45;
                              tmp44 = tmp45;
                            } else {
                              tmp44 = cResult[41];
                            }
                            if (cResult[42] === stateFromStores) {
                              if (cResult[43] === tmp18) {
                                let tmp47;
                                let tmp49;
                                if (cResult[44] === result1) {
                                  tmp47 = cResult[45];
                                }
                                if (cResult[46] !== theme) {
                                  let tmp50 = null != theme;
                                  if (tmp50) {
                                    const tmpResult4 = tmp(4930);
                                    const isThemeDarkResult = tmpResult4.isThemeDark(theme);
                                    const unsafe_rawColors = tmp5(587).unsafe_rawColors;
                                    tmp50 = { color: isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860 };
                                    const obj3 = { color: isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860 };
                                  }
                                  cResult[46] = theme;
                                  cResult[47] = tmp50;
                                  tmp49 = tmp50;
                                } else {
                                  tmp49 = cResult[47];
                                }
                                if (cResult[48] === tmp4.usernameText) {
                                  if (cResult[49] === tmp47) {
                                    let tmp52;
                                    if (cResult[50] === tmp49) {
                                      tmp52 = cResult[51];
                                    }
                                    if (cResult[52] === tmp19) {
                                      let tmp53;
                                      let tmp56;
                                      if (cResult[53] === tmp52) {
                                        tmp53 = cResult[54];
                                      }
                                      if (cResult[55] !== stateFromStores) {
                                        let tmp57 = stateFromStores;
                                        if (tmp57) {
                                          const obj4 = { source: user(5026), size: tmp(1200).Icon.Sizes.SMALL, color: user(587).unsafe_rawColors.GUILD_BOOSTING_PINK };
                                          const Icon = tmp(1200).Icon;
                                          tmp57 = closure_5(Icon, obj4);
                                        }
                                        cResult[55] = stateFromStores;
                                        cResult[56] = tmp57;
                                        tmp56 = tmp57;
                                      } else {
                                        tmp56 = cResult[56];
                                      }
                                      if (cResult[57] === tmp4.nameplateContainer) {
                                        if (cResult[58] === tmp41) {
                                          if (cResult[59] === tmp44) {
                                            if (cResult[60] === tmp53) {
                                              let tmp59;
                                              if (cResult[61] === tmp56) {
                                                tmp59 = cResult[62];
                                              }
                                              if (cResult[63] === tmp17) {
                                                if (cResult[64] === tmp16) {
                                                  if (cResult[65] === tmp26) {
                                                    if (cResult[66] === tmp37) {
                                                      if (cResult[67] === tmp59) {
                                                        let tmp63;
                                                        if (cResult[68] === tmp20) {
                                                          tmp63 = cResult[69];
                                                        }
                                                        return tmp63;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              const obj5 = { accessibilityLabel: tmp20, style: tmp26, accessibilityRole: "button", onPress: tmp16, children: items1 };
                                              items1 = [tmp37, tmp59];
                                              const tmp65 = closure_6(tmp17, obj5);
                                              cResult[63] = tmp17;
                                              cResult[64] = tmp16;
                                              cResult[65] = tmp26;
                                              cResult[66] = tmp37;
                                              cResult[67] = tmp59;
                                              cResult[68] = tmp20;
                                              cResult[69] = tmp65;
                                              tmp63 = tmp65;
                                            }
                                          }
                                        }
                                      }
                                      const obj6 = { style: tmp4.nameplateContainer, children: items2 };
                                      items2 = [tmp41, tmp44, tmp53, tmp56];
                                      const tmp62 = closure_6(View, obj6);
                                      cResult[57] = tmp4.nameplateContainer;
                                      cResult[58] = tmp41;
                                      cResult[59] = tmp44;
                                      cResult[60] = tmp53;
                                      cResult[61] = tmp56;
                                      cResult[62] = tmp62;
                                      tmp59 = tmp62;
                                    }
                                    const obj7 = { style: tmp52, numberOfLines: 1, children: tmp19 };
                                    const tmp55 = closure_5(tmp(1200).LegacyText, obj7);
                                    cResult[52] = tmp19;
                                    cResult[53] = tmp52;
                                    cResult[54] = tmp55;
                                    tmp53 = tmp55;
                                  }
                                }
                                const items3 = [tmp4.usernameText, tmp47, tmp49];
                                cResult[48] = tmp4.usernameText;
                                cResult[49] = tmp47;
                                cResult[50] = tmp49;
                                cResult[51] = items3;
                                tmp52 = items3;
                              }
                            }
                            let tmp48 = stateFromStores || tmp18;
                            if (tmp48) {
                              let num41 = 1;
                              if (stateFromStores) {
                                num41 = 1;
                                if (tmp18) {
                                  num41 = 2;
                                }
                              }
                              tmp48 = { maxWidth: result1 - 18 * num41 };
                              const obj8 = { maxWidth: result1 - 18 * num41 };
                            }
                            cResult[42] = stateFromStores;
                            cResult[43] = tmp18;
                            cResult[44] = result1;
                            cResult[45] = tmp48;
                            tmp47 = tmp48;
                          }
                        }
                        const obj9 = { style: tmp4.avatarContainer, children: items4 };
                        items4 = [tmp30, tmp33];
                        const tmp40 = closure_6(View, obj9);
                        cResult[34] = tmp4.avatarContainer;
                        cResult[35] = tmp30;
                        cResult[36] = tmp33;
                        cResult[37] = tmp40;
                        tmp37 = tmp40;
                      }
                      let tmp34 = tmp14;
                      if (tmp34) {
                        const obj10 = { rtsState };
                        tmp34 = closure_5(closure_8, obj10);
                      }
                      cResult[31] = rtsState;
                      cResult[32] = tmp14;
                      cResult[33] = tmp34;
                      tmp33 = tmp34;
                    }
                  }
                  const obj11 = { user, guildId: tmp7, size: tmp(1200).AvatarSizes.LARGE, style: tmp18 && tmp4.faded };
                  const CutoutableAvatarImage = tmp(1200).CutoutableAvatarImage;
                  const tmp32 = closure_5(CutoutableAvatarImage, obj11);
                  cResult[27] = tmp7;
                  cResult[28] = tmp18 && tmp4.faded;
                  cResult[29] = user;
                  cResult[30] = tmp32;
                  tmp30 = tmp32;
                }
              }
              const items5 = [, , ];
              ({ touchableContainer: arr3[0], container: arr3[1] } = tmp4);
              items5[2] = tmp25;
              cResult[23] = tmp4.container;
              cResult[24] = tmp4.touchableContainer;
              cResult[25] = tmp25;
              cResult[26] = items5;
              tmp26 = items5;
            }
          }
        }
      }
      const tmp5Result = user(5406);
      const name = tmp5Result.getName(tmp7, channel.id, user);
      const tmp22 = blocked || ignored;
      const LegacyPressable = tmp(6333).LegacyPressable;
      const intl = tmp(1126).intl;
      const obj12 = { name };
      const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.QLMGhv, obj12);
      cResult[12] = blocked;
      cResult[13] = channel.id;
      cResult[14] = tmp7;
      cResult[15] = ignored;
      cResult[16] = user;
      cResult[17] = LegacyPressable;
      cResult[18] = tmp22;
      cResult[19] = name;
      cResult[20] = formatToPlainStringResult;
      class R {
        constructor() {
          let tmp2 = null != closure_2;
          const _Boolean = Boolean;
          if (tmp2) {
            const member = GuildMemberStore.getMember(tmp, user.id);
            let premiumSince;
            if (member != null) {
              premiumSince = member.premiumSince;
            }
            tmp2 = null != premiumSince;
          }
          return _Boolean(tmp2);
        }
      }
      tmp20 = formatToPlainStringResult;
      tmp19 = name;
      tmp17 = LegacyPressable;
    }
    function handlePress() {
      const obj = StageChannelModalActionCreators;
      const obj2 = { userId: user.id, channelId: channel.id };
      obj.showUserProfile(obj2);
    }
    cResult[9] = channel.id;
    cResult[10] = user.id;
    cResult[11] = handlePress;
    tmp16 = handlePress;
  }
  class R {
    constructor() {
      let tmp2 = null != closure_2;
      const _Boolean = Boolean;
      if (tmp2) {
        const member = GuildMemberStore.getMember(tmp, user.id);
        let premiumSince;
        if (member != null) {
          premiumSince = member.premiumSince;
        }
        tmp2 = null != premiumSince;
      }
      return _Boolean(tmp2);
    }
  }
  const items6 = [tmp7, user.id];
  cResult[3] = tmp7;
  cResult[4] = user.id;
  cResult[5] = R;
  cResult[6] = items6;
  tmp12 = items6;
  tmp11 = R;
}) : (function AudienceTile(channel) {
  let blocked;
  let ignored;
  let intl;
  let items2;
  let items3;
  let items4;
  let items5;
  let rtsState;
  channel = channel.channel;
  const participant = channel.participant;
  const user = participant.user;
  ({ rtsState, blocked, ignored } = participant);
  const theme = channel.theme;
  let guildId;
  const tmp = styles();
  let tmp2 = user;
  const diff = user(guildId[11])().width - 46;
  guildId = channel.getGuildId();
  let obj = channel(guildId[12]);
  const items = [GuildMemberStore];
  const items1 = [guildId, user.id];
  let stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != guildId;
    const _Boolean = Boolean;
    if (tmp2) {
      const member = GuildMemberStore.getMember(tmp, user.id);
      let premiumSince;
      if (member != null) {
        premiumSince = member.premiumSince;
      }
      tmp2 = null != premiumSince;
    }
    return _Boolean(tmp2);
  }, items1);
  let obj2 = channel(guildId[13]);
  let result = obj2.isRequestedToSpeakAll(rtsState);
  const obj3 = user(guildId[15]);
  const name = obj3.getName(guildId, channel.id, user);
  const result1 = diff / 4;
  const obj4 = {
    accessibilityLabel: intl.formatToPlainString(channel(guildId[17]).t.QLMGhv, { name }),
    style: items2,
    accessibilityRole: "button",
    onPress: function handlePress() {
      const obj = StageChannelModalActionCreators;
      const obj2 = { userId: user.id, channelId: channel.id };
      obj.showUserProfile(obj2);
    },
    children: items4
  };
  const LegacyPressable = tmp6(tmp3[16]).LegacyPressable;
  intl = tmp6(tmp3[17]).intl;
  items2 = [, , ];
  ({ touchableContainer: arr3[0], container: arr3[1] } = tmp);
  items2[2] = { width: result1 };
  const obj5 = { style: tmp.avatarContainer, children: items3 };
  const obj6 = { user, guildId, size: channel(guildId[9]).AvatarSizes.LARGE, style: (blocked || ignored) && tmp.faded };
  const CutoutableAvatarImage = tmp6(tmp3[9]).CutoutableAvatarImage;
  items3 = [closure_5(CutoutableAvatarImage, obj6), ];
  if (result) {
    const obj7 = { rtsState };
    result = tmp14(closure_8, obj7);
  }
  items3[1] = result;
  items4 = [closure_6(View, obj5), ];
  const obj8 = { style: tmp.nameplateContainer, children: items5 };
  if (blocked) {
    blocked = tmp14(tmp6(tmp3[18]).BlockedStatus, {});
  }
  items5 = [blocked, , , ];
  if (ignored) {
    ignored = tmp14(tmp6(tmp3[18]).IgnoredStatus, {});
  }
  items5[1] = ignored;
  const items6 = [tmp.usernameText, , ];
  let tmp16 = stateFromStores;
  const LegacyText = tmp6(tmp3[9]).LegacyText;
  if (!stateFromStores) {
    tmp16 = tmp10;
  }
  if (tmp16) {
    let num2 = 1;
    if (stateFromStores) {
      num2 = 1;
      if (blocked || ignored) {
        num2 = 2;
      }
    }
    tmp16 = { maxWidth: result1 - 18 * num2 };
    const obj9 = { maxWidth: result1 - 18 * num2 };
  }
  items6[1] = tmp16;
  let tmp17 = null != theme;
  if (tmp17) {
    const tmp6Result = channel(guildId[19]);
    const isThemeDarkResult = tmp6Result.isThemeDark(theme);
    const unsafe_rawColors = tmp2(tmp3[5]).unsafe_rawColors;
    tmp17 = { color: isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860 };
    const obj10 = { color: isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860 };
  }
  items6[2] = tmp17;
  items5[2] = closure_5(LegacyText, { style: items6, numberOfLines: 1, children: name });
  if (stateFromStores) {
    const obj11 = { source: tmp2(guildId[20]), size: channel(guildId[9]).Icon.Sizes.SMALL, color: tmp2(guildId[5]).unsafe_rawColors.GUILD_BOOSTING_PINK };
    const Icon = tmp6(tmp3[9]).Icon;
    stateFromStores = tmp14(Icon, obj11);
  }
  items5[3] = stateFromStores;
  items4[1] = closure_6(View, obj8);
  return closure_6(LegacyPressable, obj4);
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/stage_channels/native/components/AudienceTile.tsx");

export default memoResult;
export const useAudienceTileStyles = styles;
export { getTileWidthStyle };
