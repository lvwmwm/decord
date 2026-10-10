// Module ID: 16527
// Function ID: 16528
// Name: ThreadChannel
// Dependencies: [19, 17, 4752, 2065, 4750, 6035, 2116, 1390, 5113, 5116, 11758, 1085, 5967, 1125, 21, 5092, 587, 558, 576, 7576, 5386, 504, 11990, 5103, 10454, 16528, 8650, 16530, 1200, 16532, 16541, 5414, 16542, 2]

// Module 16527 (ThreadChannel)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ThreadConstants from "ThreadConstants" /* 1125 */;
import transitionToChannel from "transitionToChannel" /* 5103 */;
import ReadStateConstants from "ReadStateConstants" /* 5967 */;
import inlineStylesDefault from "inlineStyles" /* 7576 */;
import showLongPressForumPostActionSheetDefault from "showLongPressForumPostActionSheet" /* 10454 */;
import showThreadLongPressActionSheetDefault from "showThreadLongPressActionSheet" /* 16528 */;
import react_mod from "react" /* 19 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4752 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import ReadStateStore from "ReadStateStore" /* 6035 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import UserStore from "UserStore" /* 1390 */;
import VoiceStateStore from "VoiceStateStore" /* 5113 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5116 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11758 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let CHANNEL_MARGIN_VERTICAL;
let closure_17;
let closure_18;
let closure_19;
let map1;
let obj2;
let obj3;
let size;
let tmp;
const inlineStyles = tmp(7576);
let react = react_mod;
const View = react_native.View;
({ getScaledChannelRowHeight: map1, CHANNEL_MARGIN_VERTICAL } = RedesignChannelListConstants);
const Permissions = Constants.Permissions;
const UnreadSetting = ReadStateConstants.UnreadSetting;
let closure_16 = ThreadConstants.OpenThreadAnalyticsLocations;
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, threadRow: { flex: 0, flexDirection: "row", alignSelf: "stretch" }, unreadContainer: { width: 8, alignItems: "flex-start", justifyContent: "flex-start" }, spineSpacer: { width: 28 }, unreadIcon: size, threadLineSegment: obj3 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginStart: 2, marginEnd: 8, borderRadius: nativeDefault.radii.md, flex: 1 };
createStyles = createStyles.createStyles;
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, marginLeft: -4, marginTop: 12 };
obj3 = { backgroundColor: nativeDefault.colors.SPINE_DEFAULT, width: 2, position: "absolute", left: 23 };
let closure_20 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SpineCurveSvg(color) {
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(7);
  color = color.color;
  const sum = map1(color.fontScale) / 2 - 16 + 2;
  if (cResult[0] !== sum) {
    const rect = { position: "absolute", left: 23, top: sum };
    cResult[0] = sum;
    cResult[1] = rect;
    tmp5 = rect;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== color) {
    const obj2 = { fill: color, d: "M11 16C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H8C2.47715 14 2 8.52285 2 3V0H0V3H0.00542736C0 9.5 1.49449 16 8 16H11Z" };
    const tmp8 = closure_17(inlineStyles.Path, obj2);
    cResult[2] = color;
    cResult[3] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === tmp5) {
    let tmp9;
    if (cResult[5] === tmp6) {
      tmp9 = cResult[6];
    }
    return tmp9;
  }
  const tmp10 = closure_17(inlineStylesDefault, { width: 12, height: 16, style: tmp5, children: tmp6 });
  cResult[4] = tmp5;
  cResult[5] = tmp6;
  cResult[6] = tmp10;
  tmp9 = tmp10;
}) : (function SpineCurveSvg(arg0) {
  let color;
  let fontScale;
  let rect;
  ({ color, fontScale } = arg0);
  size = { width: 12, height: 16, style: rect, children: closure_17(inlineStyles.Path, { fill: color, d: "M11 16C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H8C2.47715 14 2 8.52285 2 3V0H0V3H0.00542736C0 9.5 1.49449 16 8 16H11Z" }) };
  rect = { position: "absolute", left: 23, top: map1(fontScale) / 2 - 16 + 2 };
  const tmp = inlineStylesDefault;
  return closure_17(tmp, size);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function ThreadChannel(channel) {
  let first;
  let hasVideo;
  let isLocked;
  let isMentionLowImportance;
  let items1;
  let items2;
  let items3;
  let items4;
  let mentionCount;
  let muted;
  let obj8;
  let obj9;
  let ownerId;
  let parentChannel;
  let selected;
  let threadCount;
  let threadId;
  let threadIndex;
  let tmpResult4;
  let unread;
  let voiceStates;
  const tmp = channel;
  let obj = channel(ownerId[18]);
  const cResult = obj.c(76);
  channel = channel.channel;
  ({ selected, threadIndex } = channel);
  ({ threadId, threadCount } = channel);
  const tmp4 = closure_20();
  const id = channel.id;
  ownerId = undefined;
  if (channel != null) {
    ownerId = channel.ownerId;
  }
  let parent_id;
  if (channel != null) {
    parent_id = channel.parent_id;
  }
  const tmpResult = tmp(ownerId[20]);
  const fontScale = tmpResult.useFontScale();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, parentChannel, UserStore, SortedVoiceStateStore, VoiceStateStore, ReadStateStore, SelectedChannelStore, PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel) {
    if (cResult[2] === id) {
      if (cResult[3] === ownerId) {
        let tmp17;
        if (cResult[4] === parent_id) {
          tmp17 = cResult[5];
        }
        const tmpResult3 = tmp(ownerId[21]);
        const stateFromStoresObject = tmpResult3.useStateFromStoresObject(first, tmp17);
        const user = stateFromStoresObject.user;
        parentChannel = stateFromStoresObject.parentChannel;
        ({ voiceStates, hasVideo, isLocked, muted, unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
        let num4 = 0;
        const selectedVoiceChannelId = stateFromStoresObject.selectedVoiceChannelId;
        const diff = threadCount - 1;
        if (0 === threadIndex) {
          num4 = 2;
        }
        let str = "100%";
        if (threadIndex === diff) {
          const _Math = Math;
          const _Math2 = Math;
          str = Math.ceil(Math.max(8, 1.2 * fontScale * 8));
        }
        let num7 = 0;
        if (0 === threadIndex) {
          num7 = id(tmp2[16]).radii.round;
        }
        let num8 = 0;
        if (0 === threadIndex) {
          num8 = id(tmp2[16]).radii.round;
        }
        let num9 = 0;
        if (threadIndex === diff) {
          num9 = id(tmp2[16]).radii.round;
        }
        let num10 = 0;
        if (threadIndex === diff) {
          num10 = id(tmp2[16]).radii.round;
        }
        if (cResult[6] === num4) {
          if (cResult[7] === str) {
            if (cResult[8] === num7) {
              if (cResult[9] === num8) {
                if (cResult[10] === num9) {
                  let tmp26;
                  if (cResult[11] === num10) {
                    tmp26 = cResult[12];
                  }
                  if (cResult[13] === tmp4.threadLineSegment) {
                    let tmp27;
                    if (cResult[14] === tmp26) {
                      tmp27 = cResult[15];
                    }
                    let num21 = 0;
                    if (null != voiceStates) {
                      num21 = voiceStates.length;
                    }
                    if (cResult[16] === channel) {
                      if (cResult[17] === hasVideo) {
                        if (cResult[18] === isLocked) {
                          let tmp31;
                          let tmp34;
                          if (cResult[19] === selected) {
                            tmp31 = cResult[20];
                          }
                          const tmp33 = id(ownerId[22])(tmp31);
                          if (cResult[21] !== channel) {
                            function ce() {
                              const obj = transitionToChannel;
                              const obj2 = { source: constants.CHANNEL_LIST };
                              obj.transitionToThread(channel, obj2);
                            }
                            cResult[21] = channel;
                            cResult[22] = ce;
                            tmp34 = ce;
                          } else {
                            tmp34 = cResult[22];
                          }
                          if (cResult[23] === channel) {
                            if (cResult[24] === parentChannel) {
                              let tmp35;
                              if (cResult[25] === user) {
                                tmp35 = cResult[26];
                              }
                              if (cResult[27] === fontScale) {
                                let tmp36;
                                if (cResult[28] === tmp4.threadLineSegment.backgroundColor) {
                                  tmp36 = cResult[29];
                                }
                                if (cResult[30] === tmp4.unreadIcon) {
                                  let tmp41;
                                  if (cResult[31] === unread) {
                                    tmp41 = cResult[32];
                                  }
                                  if (cResult[33] === tmp4.unreadContainer) {
                                    let tmp45;
                                    let tmp49;
                                    if (cResult[34] === tmp41) {
                                      tmp45 = cResult[35];
                                    }
                                    if (cResult[36] !== tmp4.spineSpacer) {
                                      let obj2 = { style: tmp4.spineSpacer };
                                      const tmp52 = closure_17(user, obj2);
                                      cResult[36] = tmp4.spineSpacer;
                                      cResult[37] = tmp52;
                                      tmp49 = tmp52;
                                    } else {
                                      tmp49 = cResult[37];
                                    }
                                    if (cResult[38] === channel) {
                                      if (cResult[39] === mentionCount) {
                                        let tmp54;
                                        let tmp56;
                                        let tmp59;
                                        if (cResult[40] === unread) {
                                          tmp54 = cResult[41];
                                        }
                                        if (cResult[42] !== selected) {
                                          const obj3 = { selected };
                                          cResult[42] = selected;
                                          cResult[43] = obj3;
                                          tmp56 = obj3;
                                        } else {
                                          tmp56 = cResult[43];
                                        }
                                        if (cResult[44] === channel) {
                                          if (cResult[45] === num21) {
                                            if (cResult[46] === hasVideo) {
                                              if (cResult[47] === isMentionLowImportance) {
                                                if (cResult[48] === mentionCount) {
                                                  let tmp57;
                                                  if (cResult[49] === tmp33) {
                                                    tmp57 = cResult[50];
                                                  }
                                                  if (cResult[51] === channel) {
                                                    if (cResult[52] === selectedVoiceChannelId === threadId) {
                                                      let tmp63;
                                                      if (cResult[53] === voiceStates) {
                                                        tmp63 = cResult[54];
                                                      }
                                                      if (cResult[55] === channel) {
                                                        if (cResult[56] === tmp35) {
                                                          if (cResult[57] === tmp34) {
                                                            if (cResult[58] === selected) {
                                                              if (cResult[59] === muted) {
                                                                if (cResult[60] === tmp4.container) {
                                                                  if (cResult[61] === tmp54) {
                                                                    if (cResult[62] === tmp56) {
                                                                      if (cResult[63] === tmp57) {
                                                                        if (cResult[64] === tmp63) {
                                                                          let tmp69;
                                                                          if (cResult[65] === unread) {
                                                                            tmp69 = cResult[66];
                                                                          }
                                                                          if (cResult[67] === tmp4.threadRow) {
                                                                            if (cResult[68] === tmp45) {
                                                                              if (cResult[69] === tmp49) {
                                                                                let tmp73;
                                                                                if (cResult[70] === tmp69) {
                                                                                  tmp73 = cResult[71];
                                                                                }
                                                                                if (cResult[72] === tmp27) {
                                                                                  if (cResult[73] === tmp36) {
                                                                                    let tmp77;
                                                                                    if (cResult[74] === tmp73) {
                                                                                      tmp77 = cResult[75];
                                                                                    }
                                                                                    return tmp77;
                                                                                  }
                                                                                }
                                                                                const obj4 = { children: items1 };
                                                                                items1 = [tmp27, tmp36, tmp73];
                                                                                const tmp80 = closure_18(closure_19, obj4);
                                                                                cResult[72] = tmp27;
                                                                                cResult[73] = tmp36;
                                                                                cResult[74] = tmp73;
                                                                                cResult[75] = tmp80;
                                                                                tmp77 = tmp80;
                                                                              }
                                                                            }
                                                                          }
                                                                          const obj5 = { style: tmp40, children: items2 };
                                                                          items2 = [tmp45, tmp49, tmp69];
                                                                          const tmp76 = closure_18(user, obj5);
                                                                          cResult[67] = tmp4.threadRow;
                                                                          cResult[68] = tmp45;
                                                                          cResult[69] = tmp49;
                                                                          cResult[70] = tmp69;
                                                                          cResult[71] = tmp76;
                                                                          tmp73 = tmp76;
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
                                                      const obj6 = { onPress: tmp34, onLongPress: tmp35, style: tmp53, accessible: true, accessibilityRole: "button", accessibilityLabel: tmp54, accessibilityState: tmp56, channel, selected, muted, unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, hideIcon: true, channelInfo: tmp57, children: tmp63 };
                                                      const tmp72 = closure_17(id(ownerId[32]), obj6);
                                                      cResult[55] = channel;
                                                      cResult[56] = tmp35;
                                                      cResult[57] = tmp34;
                                                      cResult[58] = selected;
                                                      cResult[59] = muted;
                                                      cResult[60] = tmp4.container;
                                                      cResult[61] = tmp54;
                                                      cResult[62] = tmp56;
                                                      cResult[63] = tmp57;
                                                      cResult[64] = tmp63;
                                                      cResult[65] = unread;
                                                      cResult[66] = tmp72;
                                                      tmp69 = tmp72;
                                                    }
                                                  }
                                                  let tmp64 = null;
                                                  if (0 !== voiceStates.length) {
                                                    if (selectedVoiceChannelId !== threadId) {
                                                      let tmp67;
                                                      if (1 !== voiceStates.length) {
                                                        const obj7 = { users: tmpResult4.computeSummarizedVoiceUsers(obj8), max: 8, guildId: channel.guild_id, renderIcon: false, noPadding: true };
                                                        obj8 = { channels: items3, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: obj9 };
                                                        items3 = [channel];
                                                        obj9 = {};
                                                        obj9[channel.id] = voiceStates;
                                                        const tmp32Result = id(ownerId[30]);
                                                        tmpResult4 = tmp(ownerId[31]);
                                                        tmp67 = closure_17(tmp32Result, obj7);
                                                      }
                                                      tmp64 = tmp67;
                                                    }
                                                    const obj10 = { channel, collapsed: false, voiceStates };
                                                    tmp67 = closure_17(tmp32(tmp2[29]), obj10);
                                                  }
                                                  cResult[51] = channel;
                                                  cResult[52] = selectedVoiceChannelId === threadId;
                                                  cResult[53] = voiceStates;
                                                  cResult[54] = tmp64;
                                                  tmp63 = tmp64;
                                                }
                                              }
                                            }
                                          }
                                        }
                                        if (0 === mentionCount) {
                                          let tmp60 = null;
                                          if (tmp33) {
                                            const obj11 = { userCount: num21, video: hasVideo, channel };
                                            tmp60 = closure_17(tmp(tmp2[27]).ConnectedUserLimit, obj11);
                                          }
                                          tmp59 = tmp60;
                                        } else {
                                          const obj12 = { value: mentionCount, isMentionLowImportance };
                                          tmp59 = closure_17(tmp(tmp2[28]).Badge, obj12);
                                        }
                                        cResult[44] = channel;
                                        cResult[45] = num21;
                                        cResult[46] = hasVideo;
                                        cResult[47] = isMentionLowImportance;
                                        cResult[48] = mentionCount;
                                        cResult[49] = tmp33;
                                        cResult[50] = tmp59;
                                        tmp57 = tmp59;
                                      }
                                    }
                                    const obj13 = { channel, unread, mentionCount };
                                    const tmp55 = id(ownerId[26])(obj13);
                                    cResult[38] = channel;
                                    cResult[39] = mentionCount;
                                    cResult[40] = unread;
                                    cResult[41] = tmp55;
                                    tmp54 = tmp55;
                                  }
                                  const obj14 = { style: tmp4.unreadContainer, children: tmp41 };
                                  const tmp48 = closure_17(user, obj14);
                                  cResult[33] = tmp4.unreadContainer;
                                  cResult[34] = tmp41;
                                  cResult[35] = tmp48;
                                  tmp45 = tmp48;
                                }
                                let tmp42 = unread;
                                if (tmp42) {
                                  const obj15 = { style: tmp4.unreadIcon };
                                  tmp42 = closure_17(user, obj15);
                                }
                                cResult[30] = tmp4.unreadIcon;
                                cResult[31] = unread;
                                cResult[32] = tmp42;
                                tmp41 = tmp42;
                              }
                              const obj16 = { color: tmp4.threadLineSegment.backgroundColor, fontScale };
                              const tmp39 = closure_17(closure_21, obj16);
                              cResult[27] = fontScale;
                              cResult[28] = tmp4.threadLineSegment.backgroundColor;
                              cResult[29] = tmp39;
                              tmp36 = tmp39;
                            }
                          }
                          function he() {
                            if (channel.isForumPost()) {
                              if (null != user) {
                                if (null != parentChannel) {
                                  if (parentChannel.isForumLikeChannel()) {
                                    showLongPressForumPostActionSheetDefault(channel, parentChannel);
                                  }
                                }
                              }
                            }
                            showThreadLongPressActionSheetDefault(channel.id);
                          }
                          cResult[23] = channel;
                          cResult[24] = parentChannel;
                          cResult[25] = user;
                          cResult[26] = he;
                          tmp35 = he;
                        }
                      }
                    }
                    const obj17 = { channel, locked: isLocked, video: hasVideo, selected };
                    cResult[16] = channel;
                    cResult[17] = hasVideo;
                    cResult[18] = isLocked;
                    cResult[19] = selected;
                    cResult[20] = obj17;
                    tmp31 = obj17;
                  }
                  const obj18 = { style: items4 };
                  items4 = [tmp4.threadLineSegment, tmp26];
                  const tmp30 = closure_17(user, obj18);
                  cResult[13] = tmp4.threadLineSegment;
                  cResult[14] = tmp26;
                  cResult[15] = tmp30;
                  tmp27 = tmp30;
                }
              }
            }
          }
        }
        const obj19 = { top: num4, height: str, borderTopRightRadius: num7, borderTopLeftRadius: num8, borderBottomRightRadius: num9, borderBottomLeftRadius: num10 };
        cResult[6] = num4;
        cResult[7] = str;
        cResult[8] = num7;
        cResult[9] = num8;
        cResult[10] = num9;
        cResult[11] = num10;
        cResult[12] = obj19;
        tmp26 = obj19;
      }
    }
  }
  const fn = function p() {
    let hasUnreadResult;
    const isMutedResult = JoinedThreadsStore.isMuted(id);
    const obj = { user: UserStore.getUser(ownerId), parentChannel: ChannelStore.getChannel(parent_id), voiceStates: SortedVoiceStateStore.getVoiceStatesForChannel(channel), hasVideo: VoiceStateStore.hasVideo(channel.id), isLocked: !PermissionStore.can(Permissions.CONNECT, channel), muted: isMutedResult, unread: hasUnreadResult, mentionCount: ReadStateStore.getMentionCount(id), isMentionLowImportance: ReadStateStore.getIsMentionLowImportance(id), selectedVoiceChannelId: SelectedChannelStore.getVoiceChannelId() };
    hasUnreadResult = !isMutedResult && ReadStateStore.hasUnread(tmp);
    return obj;
  };
  cResult[1] = channel;
  cResult[2] = id;
  cResult[3] = ownerId;
  cResult[4] = parent_id;
  cResult[5] = fn;
  tmp17 = fn;
}) : (function ThreadChannel(channel) {
  let hasVideo;
  let isLocked;
  let isMentionLowImportance;
  let items5;
  let items6;
  let mentionCount;
  let muted;
  let obj13;
  let obj14;
  let selected;
  let selectedVoiceChannelId;
  let threadIndex;
  let threadLineSegment;
  let tmp15Result;
  let tmp15Result5;
  let tmp21;
  let tmp4Result;
  let unread;
  let voiceStates;
  channel = channel.channel;
  ({ selected, threadIndex } = channel);
  const threadCount = channel.threadCount;
  let parent_id;
  let fontScale;
  let user;
  let parentChannel;
  const threadId = channel.threadId;
  const tmp = closure_20();
  react = tmp;
  const id = channel.id;
  let ownerId;
  if (channel != null) {
    ownerId = channel.ownerId;
  }
  parent_id = undefined;
  if (channel != null) {
    parent_id = channel.parent_id;
  }
  let tmp4 = channel;
  let tmp5 = threadCount;
  let obj = channel(threadCount[20]);
  fontScale = obj.useFontScale();
  let obj2 = channel(threadCount[21]);
  const items = [parent_id, ownerId, UserStore, SortedVoiceStateStore, VoiceStateStore, user, parentChannel, fontScale];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let hasUnreadResult;
    const isMutedResult = JoinedThreadsStore.isMuted(id);
    const obj = { user: UserStore.getUser(ownerId), parentChannel: ChannelStore.getChannel(parent_id), voiceStates: SortedVoiceStateStore.getVoiceStatesForChannel(channel), hasVideo: VoiceStateStore.hasVideo(channel.id), isLocked: !PermissionStore.can(Permissions.CONNECT, channel), muted: isMutedResult, unread: hasUnreadResult, mentionCount: ReadStateStore.getMentionCount(id), isMentionLowImportance: ReadStateStore.getIsMentionLowImportance(id), selectedVoiceChannelId: SelectedChannelStore.getVoiceChannelId() };
    hasUnreadResult = !isMutedResult && ReadStateStore.hasUnread(tmp);
    return obj;
  });
  user = stateFromStoresObject.user;
  parentChannel = stateFromStoresObject.parentChannel;
  ({ voiceStates, hasVideo, unread, mentionCount } = stateFromStoresObject);
  const items1 = [threadIndex, threadCount, fontScale, tmp.threadLineSegment];
  ({ isLocked, muted, isMentionLowImportance, selectedVoiceChannelId } = stateFromStoresObject);
  let num = 0;
  const memo = react.useMemo(() => {
    let num4;
    let num5;
    let num6;
    let num7;
    let str;
    const style = [threadLineSegment.threadLineSegment, ];
    let num = 0;
    const diff = threadCount - 1;
    const tmp4 = closure_17;
    const tmp5 = View;
    if (0 === threadIndex) {
      num = 2;
    }
    const obj = { top: num, height: str, borderTopRightRadius: num4, borderTopLeftRadius: num5, borderBottomRightRadius: num6, borderBottomLeftRadius: num7 };
    str = "100%";
    if (threadIndex === diff) {
      const _Math = Math;
      const _Math2 = Math;
      str = Math.ceil(Math.max(8, 1.2 * fontScale * 8));
    }
    num4 = 0;
    if (0 === threadIndex) {
      num4 = nativeDefault.radii.round;
    }
    num5 = 0;
    if (0 === threadIndex) {
      num5 = nativeDefault.radii.round;
    }
    num6 = 0;
    if (threadIndex === diff) {
      num6 = nativeDefault.radii.round;
    }
    num7 = 0;
    if (threadIndex === diff) {
      num7 = nativeDefault.radii.round;
    }
    style[1] = obj;
    return tmp4(tmp5, { style });
  }, items1);
  if (null != voiceStates) {
    num = voiceStates.length;
  }
  const items2 = [channel];
  const items3 = [channel, user, parentChannel];
  const tmp10 = threadIndex(tmp5[22])({ channel, locked: isLocked, video: hasVideo, selected });
  const callback = obj3.useCallback(() => {
    const obj = transitionToChannel;
    const obj2 = { source: constants.CHANNEL_LIST };
    obj.transitionToThread(channel, obj2);
  }, items2);
  const items4 = [memo, , ];
  const obj4 = { color: tmp.threadLineSegment.backgroundColor, fontScale };
  const callback1 = obj3.useCallback(() => {
    if (channel.isForumPost()) {
      if (null != user) {
        if (null != parentChannel) {
          if (parentChannel.isForumLikeChannel()) {
            showLongPressForumPostActionSheetDefault(channel, parentChannel);
          }
        }
      }
    }
    showThreadLongPressActionSheetDefault(channel.id);
  }, items3);
  items4[1] = closure_17(closure_21, obj4);
  const obj6 = { style: tmp.unreadContainer, children: tmp15Result };
  tmp15Result = unread;
  const obj5 = { style: tmp.threadRow, children: items5 };
  const tmp14 = closure_19;
  if (tmp15Result) {
    const obj7 = { style: tmp.unreadIcon };
    tmp15Result = tmp15(tmp16, obj7);
  }
  items5 = [tmp15(tmp16, obj6), , ];
  const obj8 = { style: tmp.spineSpacer };
  items5[1] = closure_17(id, obj8);
  const obj9 = { onPress: callback, onLongPress: callback1, style: tmp.container, accessible: true, accessibilityRole: "button", accessibilityLabel: threadIndex(tmp5[26])({ channel, unread, mentionCount }), accessibilityState: { selected }, channel, selected, muted, unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, hideIcon: true, channelInfo: tmp15Result5, children: tmp21 };
  const tmp9Result = threadIndex(tmp5[32]);
  if (0 === mentionCount) {
    let tmp15Result4 = null;
    if (tmp10) {
      const obj10 = { userCount: num, video: hasVideo, channel };
      tmp15Result4 = tmp15(tmp4(tmp5[27]).ConnectedUserLimit, obj10);
    }
    tmp15Result5 = tmp15Result4;
  } else {
    const obj11 = { value: mentionCount, isMentionLowImportance };
    tmp15Result5 = tmp15(tmp4(tmp5[28]).Badge, obj11);
  }
  tmp21 = null;
  if (0 !== voiceStates.length) {
    if (selectedVoiceChannelId !== threadId) {
      let tmp15Result6;
      if (1 !== voiceStates.length) {
        const obj12 = { users: tmp4Result.computeSummarizedVoiceUsers(obj13), max: 8, guildId: channel.guild_id, renderIcon: false, noPadding: true };
        obj13 = { channels: items6, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: obj14 };
        items6 = [channel];
        obj14 = {};
        obj14[channel.id] = voiceStates;
        const tmp9Result2 = threadIndex(tmp5[30]);
        tmp4Result = tmp4(tmp5[31]);
        tmp15Result6 = tmp15(tmp9Result2, obj12);
      }
      tmp21 = tmp15Result6;
    }
    const obj15 = { channel, collapsed: false, voiceStates };
    tmp15Result6 = tmp15(tmp9(tmp5[29]), obj15);
  }
  const obj16 = { children: items4 };
  items5[2] = closure_17(tmp9Result, obj9);
  items4[2] = closure_18(id, obj5);
  return closure_18(tmp14, obj16);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedThreadChannel(threadId) {
  let first;
  let selected;
  let threadCount;
  let threadIndex;
  let tmp6;
  const obj = threadId(576);
  const cResult = obj.c(9);
  const tmp = threadId;
  threadId = threadId.threadId;
  ({ threadIndex, threadCount, selected } = threadId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== threadId) {
    const fn = function o() {
      return ChannelStore.getChannel(threadId);
    };
    cResult[1] = threadId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let tmp8 = null;
  if (null != stateFromStores) {
    if (cResult[3] === stateFromStores) {
      if (cResult[4] === selected) {
        if (cResult[5] === threadCount) {
          if (cResult[6] === threadId) {
            let tmp9;
            if (cResult[7] === threadIndex) {
              tmp9 = cResult[8];
            }
            tmp8 = tmp9;
          }
        }
      }
    }
    const obj2 = { channel: stateFromStores, threadId, threadIndex, threadCount, selected };
    const tmp12 = closure_17(closure_22, obj2);
    cResult[3] = stateFromStores;
    cResult[4] = selected;
    cResult[5] = threadCount;
    cResult[6] = threadId;
    cResult[7] = threadIndex;
    cResult[8] = tmp12;
    tmp9 = tmp12;
  }
  return tmp8;
}) : (function ConnectedThreadChannel(threadId) {
  let selected;
  let threadCount;
  let threadIndex;
  threadId = threadId.threadId;
  ({ threadIndex, threadCount, selected } = threadId);
  const items = [ChannelStore];
  const obj = threadId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(threadId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores, threadId, threadIndex, threadCount, selected };
    tmp2 = closure_17(closure_22, obj2);
  }
  return tmp2;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/ThreadChannel.tsx");

export default tmp6;
