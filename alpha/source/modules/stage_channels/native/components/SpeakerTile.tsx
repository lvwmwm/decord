// Module ID: 11677
// Function ID: 11678
// Name: SpeakerTile
// Dependencies: [19, 17, 6770, 5630, 21, 4969, 587, 4966, 11678, 558, 576, 1499, 8689, 504, 7876, 11679, 6906, 1128, 8737, 1202, 11681, 11683, 7060, 5232, 2]
// Exports: getSizeStyle, getTileWidthStyle

// Module 11677 (SpeakerTile)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import CallConstants from "CallConstants" /* 5630 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7876 */;
import StageTileTypes from "StageTileTypes" /* 11678 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6770 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ColorUtils_mod from "ColorUtils" /* 4966 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let ColorUtils;
let metroImportAll;
let metroImportDefault;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
const View = react_native.View;
const ParticipantTypes = CallConstants.ParticipantTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { FULL: 212, [212]: "FULL", HALF: 112, [112]: "HALF", THIRD: 112, [112]: "THIRD" };
const result = obj.FULL * 1.7777777777777777;
let c9 = result;
const result1 = obj.HALF * 1.7777777777777777;
let createStyles = createStyles_mod;
let obj2 = { container: { marginHorizontal: 4, marginVertical: 4, alignItems: "center", flex: 1 }, full: { height: obj.FULL }, half: { height: obj.HALF }, third: { height: obj.THIRD }, avatarContainer: obj3, imageBackground: { flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch" }, nameplateContainer: obj4, nameplateText: obj5, restricted: size, blocked: obj6 };
obj3 = { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj4 = { position: "absolute", flexDirection: "row", alignItems: "center", justifyContent: "center", bottom: 4, marginHorizontal: 4, paddingVertical: 4, paddingHorizontal: 8, backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.3), borderRadius: 6 };
ColorUtils = ColorUtils_mod;
obj5 = { color: nativeDefault.colors.WHITE };
size = { borderRadius: nativeDefault.radii.sm, width: 16, height: 16, justifyContent: "center", alignItems: "center", marginEnd: 4 };
obj6 = { backgroundColor: nativeDefault.colors.WHITE };
const styles = createStyles(obj2);
const memo = react.memo;
function getSizeStyle(size, speakerTileStyles) {
  if (StageTileTypes.StageTileSize.FULL === size) {
    return speakerTileStyles.full;
  } else if (StageTileTypes.StageTileSize.HALF === size) {
    return speakerTileStyles.half;
  } else {
    return speakerTileStyles.third;
  }
}
function getTileWidthStyle(arg0, arg1, arg2) {
  let obj;
  const StageTileSize = StageTileTypes.StageTileSize;
  const tmp = arg2;
  if (tmp) {
    obj = { maxWidth: arg0 === StageTileSize.FULL ? c9 : result1 };
    const obj2 = { maxWidth: arg0 === StageTileSize.FULL ? c9 : result1 };
  } else if (arg0 === StageTileSize.THIRD) {
    obj = { maxWidth: (arg1 - 36) / 3 };
    const obj3 = { maxWidth: (arg1 - 36) / 3 };
  } else {
    obj = { flex: 1 };
  }
  return obj;
}
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SpeakerTile(channel) {
  let blocked;
  let first;
  let ignored;
  let items1;
  let items2;
  let items4;
  let items5;
  let user;
  let obj = channel(user[10]);
  const cResult = obj.c(66);
  channel = channel.channel;
  const participant = channel.participant;
  size = channel.size;
  const tmp4 = styles();
  const width = participant(user[11])().width;
  let obj2 = channel(user[12]);
  const isScreenLandscape = obj2.useIsScreenLandscape();
  user = participant.user;
  ({ blocked, ignored } = participant);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.id) {
    let tmp9;
    let tmp10;
    if (cResult[2] === participant.id) {
      tmp9 = cResult[3];
      tmp10 = cResult[4];
    }
    const tmpResult = channel(user[13]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp9, tmp10);
    if (cResult[5] === channel.id) {
      let tmp12;
      if (cResult[6] === user.id) {
        tmp12 = cResult[7];
      }
      if (null != stateFromStores) {
        if (stateFromStores.type === ParticipantTypes.USER) {
          if (cResult[8] === channel) {
            let tmp15;
            let tmp16;
            let tmp17;
            let full;
            if (cResult[9] === stateFromStores) {
              tmp15 = cResult[10];
              tmp16 = cResult[11];
              tmp17 = cResult[12];
            }
            if (cResult[13] === size) {
              let tmp21;
              let obj15;
              if (cResult[14] === tmp4) {
                tmp21 = cResult[15];
              }
              if (cResult[16] === isScreenLandscape) {
                if (cResult[17] === size) {
                  let tmp22;
                  if (cResult[18] === width) {
                    tmp22 = cResult[19];
                  }
                  if (cResult[20] === tmp4.container) {
                    if (cResult[21] === tmp21) {
                      let tmp23;
                      let items7;
                      if (cResult[22] === tmp22) {
                        tmp23 = cResult[23];
                      }
                      if (cResult[24] === size) {
                        let tmp25;
                        if (cResult[25] === tmp4) {
                          tmp25 = cResult[26];
                        }
                        if (cResult[27] === channel.guild_id) {
                          let tmp26;
                          let tmp28;
                          if (cResult[28] === user) {
                            tmp26 = cResult[29];
                          }
                          if (cResult[30] !== (blocked || ignored)) {
                            const tmp29 = (blocked || ignored) && { opacity: 0.5 };
                            cResult[30] = blocked || ignored;
                            cResult[31] = tmp29;
                            tmp28 = tmp29;
                          } else {
                            tmp28 = cResult[31];
                          }
                          if (cResult[32] === stateFromStores.speaking) {
                            if (cResult[33] === tmp25) {
                              if (cResult[34] === tmp26) {
                                let tmp30;
                                if (cResult[35] === tmp28) {
                                  tmp30 = cResult[36];
                                }
                                if (cResult[37] === channel.id) {
                                  let tmp34;
                                  let tmp35;
                                  if (cResult[38] === user.id) {
                                    tmp34 = cResult[39];
                                    tmp35 = cResult[40];
                                  }
                                  if (cResult[41] === tmp4.avatarContainer) {
                                    if (cResult[42] === tmp30) {
                                      if (cResult[43] === tmp34) {
                                        let tmp39;
                                        if (cResult[44] === tmp35) {
                                          tmp39 = cResult[45];
                                        }
                                        if (cResult[46] === blocked) {
                                          if (cResult[47] === ignored) {
                                            if (cResult[48] === (blocked || ignored)) {
                                              if (cResult[49] === tmp4.blocked) {
                                                let tmp43;
                                                if (cResult[50] === tmp4.restricted) {
                                                  tmp43 = cResult[51];
                                                }
                                                if (cResult[52] === tmp16) {
                                                  let tmp52;
                                                  if (cResult[53] === tmp4.nameplateText) {
                                                    tmp52 = cResult[54];
                                                  }
                                                  if (cResult[55] === tmp4.nameplateContainer) {
                                                    if (cResult[56] === tmp43) {
                                                      let tmp55;
                                                      if (cResult[57] === tmp52) {
                                                        tmp55 = cResult[58];
                                                      }
                                                      if (cResult[59] === tmp15) {
                                                        if (cResult[60] === tmp12) {
                                                          if (cResult[61] === tmp39) {
                                                            if (cResult[62] === tmp55) {
                                                              if (cResult[63] === tmp17) {
                                                                let tmp59;
                                                                if (cResult[64] === tmp23) {
                                                                  tmp59 = cResult[65];
                                                                }
                                                                return tmp59;
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                      const obj3 = { accessibilityLabel: tmp17, accessibilityRole: "button", style: tmp23, onPress: tmp12, children: items1 };
                                                      items1 = [tmp39, tmp55];
                                                      const tmp61 = closure_8(tmp15, obj3);
                                                      cResult[59] = tmp15;
                                                      cResult[60] = tmp12;
                                                      cResult[61] = tmp39;
                                                      cResult[62] = tmp55;
                                                      cResult[63] = tmp17;
                                                      cResult[64] = tmp23;
                                                      cResult[65] = tmp61;
                                                      tmp59 = tmp61;
                                                    }
                                                  }
                                                  const obj4 = { style: tmp4.nameplateContainer, children: items2 };
                                                  items2 = [tmp43, tmp52];
                                                  const tmp58 = closure_8(View, obj4);
                                                  cResult[55] = tmp4.nameplateContainer;
                                                  cResult[56] = tmp43;
                                                  cResult[57] = tmp52;
                                                  cResult[58] = tmp58;
                                                  tmp55 = tmp58;
                                                }
                                                const obj5 = { lineClamp: 1, style: tmp4.nameplateText, variant: "text-sm/medium", color: "text-overlay-light", children: tmp16 };
                                                const tmp54 = closure_7(channel(user[23]).Text, obj5);
                                                cResult[52] = tmp16;
                                                cResult[53] = tmp4.nameplateText;
                                                cResult[54] = tmp54;
                                                tmp52 = tmp54;
                                              }
                                            }
                                          }
                                        }
                                        let tmp45Result = tmp14;
                                        if (tmp45Result) {
                                          const items3 = [tmp4.restricted, ];
                                          let blocked1 = null;
                                          const tmp45 = closure_8;
                                          const tmp46 = View;
                                          if (blocked) {
                                            blocked1 = tmp4.blocked;
                                          }
                                          const obj6 = { style: items3, children: items4 };
                                          items3[1] = blocked1;
                                          let tmp48 = blocked;
                                          if (tmp48) {
                                            const obj7 = { source: participant(user[21]), size: channel(user[19]).Icon.Sizes.EXTRA_SMALL, color: participant(user[6]).unsafe_rawColors.RED_400 };
                                            const Icon = tmp(tmp2[19]).Icon;
                                            tmp48 = closure_7(Icon, obj7);
                                          }
                                          items4 = [tmp48, ];
                                          let tmp50 = ignored;
                                          if (tmp50) {
                                            const obj8 = { source: participant(user[22]), size: channel(user[19]).Icon.Sizes.EXTRA_SMALL };
                                            const Icon2 = tmp(tmp2[19]).Icon;
                                            tmp50 = closure_7(Icon2, obj8);
                                          }
                                          items4[1] = tmp50;
                                          tmp45Result = tmp45(tmp46, obj6);
                                        }
                                        cResult[46] = blocked;
                                        cResult[47] = ignored;
                                        cResult[48] = blocked || ignored;
                                        cResult[49] = tmp4.blocked;
                                        cResult[50] = tmp4.restricted;
                                        cResult[51] = tmp45Result;
                                        tmp43 = tmp45Result;
                                      }
                                    }
                                  }
                                  const obj9 = { style: tmp24, children: items5 };
                                  items5 = [tmp30, tmp34, tmp35];
                                  const tmp42 = closure_8(View, obj9);
                                  cResult[41] = tmp4.avatarContainer;
                                  cResult[42] = tmp30;
                                  cResult[43] = tmp34;
                                  cResult[44] = tmp35;
                                  cResult[45] = tmp42;
                                  tmp39 = tmp42;
                                }
                                const obj10 = { userId: user.id, channelId: channel.id };
                                const tmp37 = closure_7(channel(user[20]).VoiceStatus, obj10);
                                const obj11 = { userId: user.id, channelId: channel.id };
                                const tmp38 = closure_7(channel(user[20]).ModeratorStatus, obj11);
                                cResult[37] = channel.id;
                                cResult[38] = user.id;
                                cResult[39] = tmp37;
                                cResult[40] = tmp38;
                                tmp35 = tmp38;
                                tmp34 = tmp37;
                              }
                            }
                          }
                          const obj12 = { style: tmp25, url: tmp26, speaking: stateFromStores.speaking, animate: true, size: channel(user[19]).AvatarSizes.XLARGE, isStageCall: true, avatarStyle: tmp28 };
                          const tmp5Result = participant(user[18]);
                          const tmp33 = closure_7(tmp5Result, obj12);
                          cResult[32] = stateFromStores.speaking;
                          cResult[33] = tmp25;
                          cResult[34] = tmp26;
                          cResult[35] = tmp28;
                          cResult[36] = tmp33;
                          tmp30 = tmp33;
                        }
                        const avatarURL = user.getAvatarURL(channel.guild_id, 64);
                        cResult[27] = channel.guild_id;
                        cResult[28] = user;
                        cResult[29] = avatarURL;
                        tmp26 = avatarURL;
                      }
                      if (size === channel(user[8]).StageTileSize.THIRD) {
                        const items6 = [tmp4.imageBackground, { paddingBottom: 12 }];
                        items7 = items6;
                      } else {
                        items7 = [tmp4.imageBackground];
                      }
                      cResult[24] = size;
                      cResult[25] = tmp4;
                      cResult[26] = items7;
                      tmp25 = items7;
                    }
                  }
                  const items8 = [tmp20, tmp21, tmp22];
                  cResult[20] = tmp4.container;
                  cResult[21] = tmp21;
                  cResult[22] = tmp22;
                  cResult[23] = items8;
                  tmp23 = items8;
                }
              }
              const StageTileSize = tmp(tmp2[8]).StageTileSize;
              if (isScreenLandscape) {
                obj15 = { maxWidth: size === StageTileSize.FULL ? closure_9 : result1 };
                const obj13 = { maxWidth: size === StageTileSize.FULL ? closure_9 : result1 };
              } else if (size === StageTileSize.THIRD) {
                obj15 = { maxWidth: (width - 36) / 3 };
                const obj14 = { maxWidth: (width - 36) / 3 };
              } else {
                obj15 = { flex: 1 };
              }
              cResult[16] = isScreenLandscape;
              cResult[17] = size;
              cResult[18] = width;
              cResult[19] = obj15;
              tmp22 = obj15;
            }
            if (channel(user[8]).StageTileSize.FULL === size) {
              full = tmp4.full;
            } else {
              full = tmp(tmp2[8]).StageTileSize.HALF === size ? tmp4.half : tmp4.third;
            }
            cResult[13] = size;
            cResult[14] = tmp4;
            cResult[15] = full;
            tmp21 = full;
          }
          const tmp18 = participant(user[15])(channel, stateFromStores);
          const PressableOpacity = tmp(tmp2[16]).PressableOpacity;
          const intl = tmp(tmp2[17]).intl;
          const obj16 = { name: tmp18 };
          const formatToPlainStringResult = intl.formatToPlainString(channel(user[17]).t.ODlyvk, obj16);
          cResult[8] = channel;
          cResult[9] = stateFromStores;
          cResult[10] = PressableOpacity;
          cResult[11] = tmp18;
          cResult[12] = formatToPlainStringResult;
          tmp17 = formatToPlainStringResult;
          tmp16 = tmp18;
          tmp15 = PressableOpacity;
        }
      }
      return null;
    }
    const fn = function z() {
      const obj = StageChannelModalActionCreators;
      const obj2 = { userId: user.id, channelId: channel.id };
      obj.showUserProfile(obj2);
    };
    cResult[5] = channel.id;
    cResult[6] = user.id;
    cResult[7] = fn;
    tmp12 = fn;
  }
  class S {
    constructor() {
      return ChannelRTCStore.getParticipant(channel.id, participant.id);
    }
  }
  const items9 = [channel.id, participant.id];
  cResult[1] = channel.id;
  cResult[2] = participant.id;
  cResult[3] = S;
  cResult[4] = items9;
  tmp10 = items9;
  tmp9 = S;
}) : (function SpeakerTile(channel) {
  let blocked;
  let ignored;
  let intl;
  let items10;
  let items3;
  let items6;
  let items7;
  let items9;
  let obj4;
  channel = channel.channel;
  const participant = channel.participant;
  size = channel.size;
  let user;
  const tmp = styles();
  const width = participant(user[11])().width;
  let obj = channel(user[12]);
  user = participant.user;
  ({ blocked, ignored } = participant);
  const isScreenLandscape = obj.useIsScreenLandscape();
  let obj2 = channel(user[13]);
  const items = [ChannelRTCStore];
  const items1 = [channel.id, participant.id];
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelRTCStore.getParticipant(channel.id, participant.id), items1);
  const items2 = [channel.id, user.id];
  if (null != stateFromStores) {
    if (stateFromStores.type === ParticipantTypes.USER) {
      let full;
      let obj7;
      let items5;
      let tmp10Result = blocked || ignored;
      const tmp9 = participant(user[15])(channel, stateFromStores);
      const obj3 = { accessibilityLabel: intl.formatToPlainString(channel(user[17]).t.ODlyvk, obj4), accessibilityRole: "button", style: items3, onPress: tmp7, children: items7 };
      const PressableOpacity = tmp4(tmp3[16]).PressableOpacity;
      intl = tmp4(tmp3[17]).intl;
      items3 = [tmp.container, , ];
      obj4 = { name: tmp9 };
      if (channel(user[8]).StageTileSize.FULL === size) {
        full = tmp.full;
      } else {
        full = tmp4(tmp3[8]).StageTileSize.HALF === size ? tmp.half : tmp.third;
      }
      items3[1] = full;
      const StageTileSize = tmp4(tmp3[8]).StageTileSize;
      if (isScreenLandscape) {
        obj7 = { maxWidth: size === StageTileSize.FULL ? closure_9 : result1 };
        const obj5 = { maxWidth: size === StageTileSize.FULL ? closure_9 : result1 };
      } else if (size === StageTileSize.THIRD) {
        obj7 = { maxWidth: (width - 36) / 3 };
        const obj6 = { maxWidth: (width - 36) / 3 };
      } else {
        obj7 = { flex: 1 };
      }
      items3[2] = obj7;
      const obj8 = { style: tmp.avatarContainer, children: items6 };
      const tmp2Result = participant(user[18]);
      if (size === channel(user[8]).StageTileSize.THIRD) {
        const items4 = [tmp.imageBackground, { paddingBottom: 12 }];
        items5 = items4;
      } else {
        items5 = [tmp.imageBackground];
      }
      const obj9 = { style: items5, url: user.getAvatarURL(channel.guild_id, 64), speaking: stateFromStores.speaking, animate: true, size: channel(user[19]).AvatarSizes.XLARGE, isStageCall: true, avatarStyle: tmp10Result && { opacity: 0.5 } };
      items6 = [closure_7(tmp2Result, obj9), , ];
      const obj10 = { userId: user.id, channelId: channel.id };
      items6[1] = closure_7(channel(user[20]).VoiceStatus, obj10);
      const obj11 = { userId: user.id, channelId: channel.id };
      items6[2] = closure_7(channel(user[20]).ModeratorStatus, obj11);
      items7 = [closure_8(View, obj8), ];
      const obj12 = { style: tmp.nameplateContainer, children: items10 };
      if (tmp10Result) {
        const items8 = [tmp.restricted, ];
        let blocked1 = null;
        if (blocked) {
          blocked1 = tmp.blocked;
        }
        const obj13 = { style: items8, children: items9 };
        items8[1] = blocked1;
        if (blocked) {
          const obj14 = { source: participant(user[21]), size: channel(user[19]).Icon.Sizes.EXTRA_SMALL, color: participant(user[6]).unsafe_rawColors.RED_400 };
          const Icon = tmp4(tmp3[19]).Icon;
          blocked = tmp12(Icon, obj14);
        }
        items9 = [blocked, ];
        if (ignored) {
          const obj15 = { source: participant(user[22]), size: channel(user[19]).Icon.Sizes.EXTRA_SMALL };
          const Icon2 = tmp4(tmp3[19]).Icon;
          ignored = tmp12(Icon2, obj15);
        }
        items9[1] = ignored;
        tmp10Result = tmp10(tmp11, obj13);
      }
      items10 = [tmp10Result, ];
      const obj16 = { lineClamp: 1, style: tmp.nameplateText, variant: "text-sm/medium", color: "text-overlay-light", children: tmp9 };
      items10[1] = closure_7(channel(user[23]).Text, obj16);
      items7[1] = closure_8(View, obj12);
      return closure_8(PressableOpacity, obj3);
    }
  }
  return null;
}));
size = size_mod;
const result2 = size.fileFinishedImporting("modules/stage_channels/native/components/SpeakerTile.tsx");

export default memoResult;
export const SPEAKER_TILE_HEIGHTS = obj;
export const LANDSCAPE_MAX_TILE_WIDTH_FULL = result;
export const LANDSCAPE_MAX_TILE_WIDTH = result1;
export const useSpeakerTileStyles = styles;
export { getSizeStyle };
export { getTileWidthStyle };
