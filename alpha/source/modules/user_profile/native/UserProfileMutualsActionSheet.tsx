// Module ID: 12306
// Function ID: 12307
// Name: UserProfileMutualsActionSheet
// Dependencies: [32, 19, 17, 5107, 8291, 21, 5091, 587, 558, 576, 6060, 504, 1200, 5406, 10205, 6186, 6165, 5087, 12301, 12307, 10495, 12302, 12311, 12312, 8513, 1126, 12313, 10566, 2]

// Module 12306 (UserProfileMutualsActionSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5406 */;
import GuildIcon from "GuildIcon" /* 6165 */;
import TableRow2 from "TableRow" /* 6186 */;
import Constants from "Constants" /* 8291 */;
import ActivityStatusDefault from "ActivityStatus" /* 10205 */;
import UserProfileStackedActionSheet from "UserProfileStackedActionSheet" /* 10495 */;
import useUserProfileMutualsDefault from "useUserProfileMutuals" /* 12301 */;
import NoMutualServers from "NoMutualServers" /* 12302 */;
import NoMutualFriends from "NoMutualFriends" /* 12307 */;
import getMutualFriendsLabelDefault from "getMutualFriendsLabel" /* 12311 */;
import getMutualGuildsLabelDefault from "getMutualGuildsLabel" /* 12312 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PresenceStore from "PresenceStore" /* 5107 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
const UserProfileStackedActionSheetDefault = UserProfileStackedActionSheet;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let react = react_mod;
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = react_native);
const UserProfileSections = Constants.UserProfileSections;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, loadingState: obj3, emptyState: { alignItems: "center" }, activityStatusText: obj4, mutualGuildSubLabel: obj5 };
obj2 = { flex: 1, gap: 20, paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_8, alignItems: "center" };
obj4 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function MutualFriendRow(mutualFriend) {
  let end;
  let first;
  let guildId;
  let isMobileOnline;
  let isVROnline;
  let onPress;
  let start;
  let status;
  let tmp8;
  let user;
  let obj = user(576);
  const cResult = obj.c(25);
  ({ guildId, onPress, start, end } = mutualFriend);
  user = mutualFriend.mutualFriend.user;
  const tmp4 = closure_11();
  const obj2 = user(6060);
  const avatarDecoration = obj2.useAvatarDecoration(user);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PresenceStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function n() {
      const obj = { status: PresenceStore.getStatus(user.id), isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
      return obj;
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = user(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp8);
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  if (cResult[3] === avatarDecoration) {
    if (cResult[4] === guildId) {
      if (cResult[5] === isMobileOnline) {
        if (cResult[6] === isVROnline) {
          if (cResult[7] === status) {
            let tmp11;
            if (cResult[8] === user) {
              tmp11 = cResult[9];
            }
            if (cResult[10] === guildId) {
              let tmp13;
              if (cResult[11] === user) {
                tmp13 = cResult[12];
              }
              if (cResult[13] === guildId) {
                if (cResult[14] === tmp4.activityStatusText) {
                  let tmp16;
                  if (cResult[15] === user.id) {
                    tmp16 = cResult[16];
                  }
                  if (cResult[17] === end) {
                    if (cResult[18] === onPress) {
                      if (cResult[19] === start) {
                        if (cResult[20] === tmp11) {
                          if (cResult[21] === tmp13) {
                            if (cResult[22] === tmp16) {
                              let tmp20;
                              if (cResult[23] === user.id) {
                                tmp20 = cResult[24];
                              }
                              return tmp20;
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj3 = { onPress, icon: tmp11, label: tmp13, subLabel: tmp16, start, end };
                  const tmp22 = closure_9(user(6186).TableRow, obj3, tmp10);
                  cResult[17] = end;
                  cResult[18] = onPress;
                  cResult[19] = start;
                  cResult[20] = tmp11;
                  cResult[21] = tmp13;
                  cResult[22] = tmp16;
                  cResult[23] = user.id;
                  cResult[24] = tmp22;
                  tmp20 = tmp22;
                }
              }
              const obj4 = { userId: user.id, guildId, textStyle: tmp4.activityStatusText };
              const tmp19 = closure_9(ActivityStatusDefault, obj4);
              cResult[13] = guildId;
              cResult[14] = tmp4.activityStatusText;
              cResult[15] = user.id;
              cResult[16] = tmp19;
              tmp16 = tmp19;
            }
            const obj5 = NicknameUtilsDefault;
            const name = obj5.getName(guildId, undefined, user);
            cResult[10] = guildId;
            cResult[11] = user;
            cResult[12] = name;
            tmp13 = name;
          }
        }
      }
    }
  }
  const obj6 = { user, size: user(1200).AvatarSizes.REFRESH_MEDIUM_32, avatarDecoration, status, guildId, isMobileOnline, isVROnline, autoStatusCutout: true };
  const Avatar = tmp(1200).Avatar;
  const tmp12 = closure_9(Avatar, obj6);
  cResult[3] = avatarDecoration;
  cResult[4] = guildId;
  cResult[5] = isMobileOnline;
  cResult[6] = isVROnline;
  cResult[7] = status;
  cResult[8] = user;
  cResult[9] = tmp12;
  tmp11 = tmp12;
}) : (function MutualFriendRow(mutualFriend) {
  let Avatar;
  let end;
  let isMobileOnline;
  let isVROnline;
  let obj4;
  let obj5;
  let obj6;
  let onPress;
  let start;
  let status;
  const user = mutualFriend.mutualFriend.user;
  const guildId = mutualFriend.guildId;
  ({ onPress, start, end } = mutualFriend);
  const tmp = closure_11();
  let obj = user(6060);
  const avatarDecoration = obj.useAvatarDecoration(user);
  const items = [PresenceStore];
  const obj2 = user(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { status: PresenceStore.getStatus(user.id), isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
    return obj;
  });
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  const obj3 = { onPress, icon: closure_9(Avatar, obj4), label: obj5.getName(guildId, undefined, user), subLabel: closure_9(ActivityStatusDefault, obj6), start, end };
  const TableRow = user(6186).TableRow;
  obj4 = { user, size: user(1200).AvatarSizes.REFRESH_MEDIUM_32, avatarDecoration, status, guildId, isMobileOnline, isVROnline, autoStatusCutout: true };
  Avatar = user(1200).Avatar;
  obj5 = NicknameUtilsDefault;
  obj6 = { userId: user.id, guildId, textStyle: tmp.activityStatusText };
  return closure_9(TableRow, obj3, user.id);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function MutualGuildRow(arg0) {
  let end;
  let guild;
  let items;
  let mutualGuild;
  let nick;
  let onPress;
  let start;
  let user;
  const obj = react2;
  const cResult = obj.c(28);
  ({ mutualGuild, user, onPress, start, end } = arg0);
  ({ guild, nick } = mutualGuild);
  const tmp4 = closure_11();
  if (cResult[0] === guild.id) {
    let tmp5;
    let tmp7;
    if (cResult[1] === user) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== guild) {
      const obj2 = { guild, size: GuildIcon.GuildIconSizes.SMALL_32 };
      const tmp10 = GuildIconDefault;
      const tmp11 = React4(tmp10, obj2);
      cResult[3] = guild;
      cResult[4] = tmp11;
      tmp7 = tmp11;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === guild.id) {
      if (cResult[6] === tmp5) {
        let tmp12;
        let tmp15;
        if (cResult[7] === user) {
          tmp12 = cResult[8];
        }
        if (cResult[9] !== nick) {
          let tmp17 = null != nick;
          if (tmp17) {
            const obj3 = { variant: "text-xs/medium", color: "text-subtle", children: nick };
            tmp17 = React4(tmp(5087).Text, obj3);
          }
          cResult[9] = nick;
          cResult[10] = tmp17;
          tmp15 = tmp17;
        } else {
          tmp15 = cResult[10];
        }
        if (cResult[11] === tmp5) {
          if (cResult[12] === nick) {
            let tmp19;
            if (cResult[13] === user.username) {
              tmp19 = cResult[14];
            }
            if (cResult[15] === tmp4.mutualGuildSubLabel) {
              if (cResult[16] === tmp12) {
                if (cResult[17] === tmp15) {
                  let tmp23;
                  if (cResult[18] === tmp19) {
                    tmp23 = cResult[19];
                  }
                  if (cResult[20] === end) {
                    if (cResult[21] === guild.id) {
                      if (cResult[22] === guild.name) {
                        if (cResult[23] === onPress) {
                          if (cResult[24] === start) {
                            if (cResult[25] === tmp7) {
                              let tmp27;
                              if (cResult[26] === tmp23) {
                                tmp27 = cResult[27];
                              }
                              return tmp27;
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj4 = { onPress, icon: tmp7, label: guild.name, subLabel: tmp23, start, end };
                  const tmp29 = React4(TableRow2.TableRow, obj4, guild.id);
                  cResult[20] = end;
                  cResult[21] = guild.id;
                  cResult[22] = guild.name;
                  cResult[23] = onPress;
                  cResult[24] = start;
                  cResult[25] = tmp7;
                  cResult[26] = tmp23;
                  cResult[27] = tmp29;
                  tmp27 = tmp29;
                }
              }
            }
            const obj5 = { style: tmp4.mutualGuildSubLabel, children: items };
            items = [tmp12, tmp15, tmp19];
            const tmp26 = authStore(hasOwnProperty, obj5);
            cResult[15] = tmp4.mutualGuildSubLabel;
            cResult[16] = tmp12;
            cResult[17] = tmp15;
            cResult[18] = tmp19;
            cResult[19] = tmp26;
            tmp23 = tmp26;
          }
        }
        let tmp21 = null == nick && tmp5;
        if (tmp21) {
          const obj6 = { variant: "text-xs/medium", color: "text-subtle", children: user.username };
          tmp21 = React4(tmp(5087).Text, obj6);
        }
        cResult[11] = tmp5;
        cResult[12] = nick;
        cResult[13] = user.username;
        cResult[14] = tmp21;
        tmp19 = tmp21;
      }
    }
    let tmp13 = tmp5;
    if (tmp13) {
      const obj7 = { size: native.AvatarSizes.SIZE_16, user, guildId: guild.id };
      const Avatar = tmp(1200).Avatar;
      tmp13 = React4(Avatar, obj7);
    }
    cResult[5] = guild.id;
    cResult[6] = tmp5;
    cResult[7] = user;
    cResult[8] = tmp13;
    tmp12 = tmp13;
  }
  const hasAvatarForGuildResult = user.hasAvatarForGuild(guild.id);
  cResult[0] = guild.id;
  cResult[1] = user;
  cResult[2] = hasAvatarForGuildResult;
  tmp5 = hasAvatarForGuildResult;
}) : (function MutualGuildRow(mutualGuild) {
  let end;
  let guild;
  let items;
  let nick;
  let obj2;
  let obj3;
  let onPress;
  let start;
  let tmp6;
  let tmp7;
  let tmp8;
  ({ guild, nick } = mutualGuild.mutualGuild);
  const user = mutualGuild.user;
  ({ onPress, start, end } = mutualGuild);
  const tmp = closure_11();
  const hasAvatarForGuildResult = user.hasAvatarForGuild(guild.id);
  const obj = { onPress, icon: React4(tmp6, obj2), label: guild.name, subLabel: tmp7(tmp8, obj3), start, end };
  const TableRow = TableRow2.TableRow;
  obj2 = { guild, size: GuildIcon.GuildIconSizes.SMALL_32 };
  let tmp3Result = hasAvatarForGuildResult;
  obj3 = { style: tmp.mutualGuildSubLabel, children: items };
  tmp6 = GuildIconDefault;
  tmp7 = authStore;
  tmp8 = hasOwnProperty;
  if (hasAvatarForGuildResult) {
    const obj4 = { size: native.AvatarSizes.SIZE_16, user, guildId: guild.id };
    const Avatar = tmp4(1200).Avatar;
    tmp3Result = tmp3(Avatar, obj4);
  }
  items = [tmp3Result, , ];
  let tmp3Result3 = null != nick;
  if (tmp3Result3) {
    const obj5 = { variant: "text-xs/medium", color: "text-subtle", children: nick };
    tmp3Result3 = tmp3(tmp4(5087).Text, obj5);
  }
  items[1] = tmp3Result3;
  let tmp3Result4 = null == nick && hasAvatarForGuildResult;
  if (tmp3Result4) {
    const obj6 = { variant: "text-xs/medium", color: "text-subtle", children: user.username };
    tmp3Result4 = tmp3(tmp4(5087).Text, obj6);
  }
  items[2] = tmp3Result4;
  return React4(TableRow, obj, guild.id);
});
let closure_13 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileMutualsActionSheet(user) {
  let closure_4;
  let closure_5;
  let items;
  let obj3;
  let obj7;
  let onPressMutualFriend;
  let tmp6;
  let obj = user(onPressMutualFriend[9]);
  const cResult = obj.c(42);
  user = user.user;
  const guildId = user.guildId;
  onPressMutualFriend = user.onPressMutualFriend;
  const onPressMutualGuild = user.onPressMutualGuild;
  const section = user.section;
  let tmp4 = closure_11();
  react = tmp4;
  [tmp6, closure_5] = onPressMutualGuild(react.useState(0), 2);
  const tmp5 = onPressMutualGuild(react.useState(0), 2);
  const tmp8 = guildId(onPressMutualFriend[18])(user);
  const mutualFriends = tmp8.mutualFriends;
  const mutualGuilds = tmp8.mutualGuilds;
  if (cResult[0] === guildId) {
    if (cResult[1] === mutualFriends) {
      if (cResult[2] === onPressMutualFriend) {
        if (cResult[3] === tmp4.emptyState) {
          let tmp9;
          if (cResult[4] === tmp4.loadingState) {
            tmp9 = cResult[5];
          }
          if (cResult[6] === mutualGuilds) {
            if (cResult[7] === onPressMutualGuild) {
              if (cResult[8] === tmp4.emptyState) {
                if (cResult[9] === tmp4.loadingState) {
                  let tmp10;
                  let tmp14;
                  let tmp16;
                  if (cResult[10] === user) {
                    tmp10 = cResult[11];
                  }
                  let num7 = 0;
                  if (section === UserProfileSections.MUTUAL_GUILDS) {
                    num7 = 1;
                  }
                  let length;
                  if (mutualFriends != null) {
                    length = mutualFriends.length;
                  }
                  if (cResult[12] !== length) {
                    const tmp15 = guildId(onPressMutualFriend[22])(length);
                    cResult[12] = length;
                    cResult[13] = tmp15;
                    tmp14 = tmp15;
                  } else {
                    tmp14 = cResult[13];
                  }
                  if (cResult[14] !== tmp9) {
                    const tmp9Result = tmp9();
                    cResult[14] = tmp9;
                    cResult[15] = tmp9Result;
                    tmp16 = tmp9Result;
                  } else {
                    tmp16 = cResult[15];
                  }
                  if (cResult[16] === tmp14) {
                    let tmp18;
                    let tmp20;
                    let tmp22;
                    if (cResult[17] === tmp16) {
                      tmp18 = cResult[18];
                    }
                    let length1;
                    if (mutualGuilds != null) {
                      length1 = mutualGuilds.length;
                    }
                    if (cResult[19] !== length1) {
                      const tmp21 = guildId(onPressMutualFriend[23])(length1);
                      cResult[19] = length1;
                      cResult[20] = tmp21;
                      tmp20 = tmp21;
                    } else {
                      tmp20 = cResult[20];
                    }
                    if (cResult[21] !== tmp10) {
                      const tmp10Result = tmp10();
                      cResult[21] = tmp10;
                      cResult[22] = tmp10Result;
                      tmp22 = tmp10Result;
                    } else {
                      tmp22 = cResult[22];
                    }
                    if (cResult[23] === tmp22) {
                      let tmp24;
                      if (cResult[24] === tmp20) {
                        tmp24 = cResult[25];
                      }
                      if (cResult[26] === tmp24) {
                        let tmp25;
                        if (cResult[27] === tmp18) {
                          tmp25 = cResult[28];
                        }
                        if (cResult[29] === tmp6) {
                          if (cResult[30] === tmp25) {
                            let tmp26;
                            let tmp29;
                            let tmp30;
                            let tmp33;
                            if (cResult[31] === num7) {
                              tmp26 = cResult[32];
                            }
                            const tmpResult = user(onPressMutualFriend[24]);
                            const segmentedControlState = tmpResult.useSegmentedControlState(tmp26);
                            const _Symbol = Symbol;
                            if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                              class B {
                                constructor(nativeEvent) {
                                  closure_5(nativeEvent.nativeEvent.layout.width);
                                }
                              }
                              cResult[33] = B;
                              tmp29 = B;
                            } else {
                              class B {
                                constructor(nativeEvent) {
                                  closure_5(nativeEvent.nativeEvent.layout.width);
                                }
                              }
                            }
                            const _Symbol2 = Symbol;
                            if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                              class B {
                                constructor(nativeEvent) {
                                  closure_5(nativeEvent.nativeEvent.layout.width);
                                }
                              }
                              const stringResult = obj6.string(user(onPressMutualFriend[25]).t["l2/aLi"]);
                              cResult[34] = stringResult;
                              tmp30 = stringResult;
                            } else {
                              class B {
                                constructor(nativeEvent) {
                                  closure_5(nativeEvent.nativeEvent.layout.width);
                                }
                              }
                            }
                            if (cResult[35] !== segmentedControlState) {
                              class B {
                                constructor(nativeEvent) {
                                  closure_5(nativeEvent.nativeEvent.layout.width);
                                }
                              }
                              let obj2 = { children: closure_9(tmp(tmp2[26]).Tabs, obj3) };
                              obj3 = { state: segmentedControlState };
                              const obj4 = { state: segmentedControlState };
                              const tmp35 = closure_9(closure_5, obj2);
                              const tmp36 = closure_9(user(onPressMutualFriend[27]).SegmentedControlPages, obj4);
                              cResult[35] = segmentedControlState;
                              cResult[36] = tmp35;
                              cResult[37] = tmp36;
                              tmp33 = tmp36;
                            } else {
                              class B {
                                constructor(nativeEvent) {
                                  closure_5(nativeEvent.nativeEvent.layout.width);
                                }
                              }
                              tmp33 = cResult[37];
                            }
                            if (cResult[38] === tmp4.container) {
                              class B {
                                constructor(nativeEvent) {
                                  closure_5(nativeEvent.nativeEvent.layout.width);
                                }
                              }
                            }
                            const obj5 = { scrollable: true, title: tmp30, children: closure_10(closure_5, obj7) };
                            obj7 = { style: tmp4.container, onLayout: tmp29, children: items };
                            items = [tmp32, tmp33];
                            const tmp7Result = guildId(onPressMutualFriend[20]);
                            cResult[38] = tmp4.container;
                            cResult[39] = tmp32;
                            cResult[40] = tmp33;
                            cResult[41] = closure_9(tmp7Result, obj5);
                            const tmp42 = closure_9(tmp7Result, obj5);
                          }
                        }
                        const obj8 = { pageWidth: tmp6, defaultIndex: num7, items: tmp25 };
                        cResult[29] = tmp6;
                        cResult[30] = tmp25;
                        cResult[31] = num7;
                        cResult[32] = obj8;
                        tmp26 = obj8;
                      }
                      const items1 = [tmp18, tmp24];
                      cResult[26] = tmp24;
                      cResult[27] = tmp18;
                      cResult[28] = items1;
                      tmp25 = items1;
                    }
                    const obj9 = { id: "mutual-guilds", label: tmp20, page: tmp22 };
                    cResult[23] = tmp22;
                    cResult[24] = tmp20;
                    cResult[25] = obj9;
                    tmp24 = obj9;
                  }
                  const obj10 = { id: "mutual-friends", label: tmp14, page: tmp16 };
                  cResult[16] = tmp14;
                  cResult[17] = tmp16;
                  cResult[18] = obj10;
                  tmp18 = obj10;
                }
              }
            }
          }
          function renderMutualGuilds() {
            let tmp4;
            if (null == mutualGuilds) {
              const obj2 = { style: closure_4.loadingState, children: React4(metroRequire, {}) };
              tmp4 = React4(hasOwnProperty, obj2);
            } else if (0 === mutualGuilds.length) {
              const obj3 = { style: closure_4.emptyState, children: React4(NoMutualServers.NoMutualServers, {}) };
              tmp4 = React4(hasOwnProperty, obj3);
            } else {
              let obj = {
                data: mutualGuilds,
                keyExtractor(guild) {
                    return guild.guild.id;
                  },
                renderItem(start) {
                    const item = start.item;
                    const obj = {
                      user: item,
                      mutualGuild: item,
                      onPress() {
                        return onPressMutualGuild(item.guild.id);
                      },
                      start: start.start,
                      end: start.end
                    };
                    return closure_1_9(closure_1_13, obj);
                  }
              };
              tmp4 = React4(UserProfileStackedActionSheet.UserProfileStackedActionSheetList, obj);
            }
            return tmp4;
          }
          cResult[6] = mutualGuilds;
          cResult[7] = onPressMutualGuild;
          cResult[8] = tmp4.emptyState;
          cResult[9] = tmp4.loadingState;
          cResult[10] = user;
          cResult[11] = renderMutualGuilds;
          tmp10 = renderMutualGuilds;
        }
      }
    }
  }
  function renderMutualFriends() {
    let tmp4;
    if (null == mutualFriends) {
      const obj2 = { style: closure_4.loadingState, children: React4(metroRequire, {}) };
      tmp4 = React4(hasOwnProperty, obj2);
    } else if (0 === mutualFriends.length) {
      const obj3 = { style: closure_4.emptyState, children: React4(NoMutualFriends.NoMutualFriends, {}) };
      tmp4 = React4(hasOwnProperty, obj3);
    } else {
      let obj = {
        data: mutualFriends,
        keyExtractor(user) {
            return user.user.id;
          },
        renderItem(start) {
            const item = start.item;
            const obj = {
              mutualFriend: item,
              guildId,
              onPress() {
                return onPressMutualFriend(item.user.id);
              },
              start: start.start,
              end: start.end
            };
            return closure_1_9(closure_1_12, obj);
          }
      };
      tmp4 = React4(UserProfileStackedActionSheet.UserProfileStackedActionSheetList, obj);
    }
    return tmp4;
  }
  cResult[0] = guildId;
  cResult[1] = mutualFriends;
  cResult[2] = onPressMutualFriend;
  cResult[3] = tmp4.emptyState;
  cResult[4] = tmp4.loadingState;
  cResult[5] = renderMutualFriends;
  tmp9 = renderMutualFriends;
}) : (function UserProfileMutualsActionSheet(user) {
  let closure_4;
  let first;
  let guildId;
  let intl;
  let items;
  let items1;
  let mutualFriends;
  let mutualGuilds;
  let num;
  let obj12;
  let tmp11;
  let tmp11Result;
  let tmp12;
  user = user.user;
  ({ guildId: importDefault, onPressMutualFriend: dependencyMap, onPressMutualGuild: _slicedToArray } = user);
  react = undefined;
  const section = user.section;
  const tmp = closure_11();
  let obj = react;
  [first, react] = react.useState(0);
  ({ mutualFriends, mutualGuilds } = useUserProfileMutualsDefault(user));
  useUserProfileMutualsDefault(user);
  const obj2 = { pageWidth: first, defaultIndex: num, items };
  num = 0;
  const useSegmentedControlState = user(8513).useSegmentedControlState;
  user(8513);
  if (section === UserProfileSections.MUTUAL_GUILDS) {
    num = 1;
  }
  let length;
  const tmp4Result = getMutualFriendsLabelDefault;
  if (mutualFriends != null) {
    length = mutualFriends.length;
  }
  const obj3 = { id: "mutual-friends", label: tmp4Result(length), page: tmp12 };
  if (null == mutualFriends) {
    const obj4 = { style: tmp.loadingState, children: closure_9(closure_6, {}) };
    tmp12 = closure_9(closure_5, obj4);
    tmp11 = closure_9;
  } else if (0 === mutualFriends.length) {
    const obj5 = { style: tmp.emptyState, children: closure_9(user(12307).NoMutualFriends, {}) };
    tmp12 = closure_9(closure_5, obj5);
    tmp11 = closure_9;
  } else {
    tmp11 = closure_9;
    const obj6 = {
      data: mutualFriends,
      keyExtractor(user) {
          return user.user.id;
        },
      renderItem(start) {
          const item = start.item;
          const obj = {
            mutualFriend: item,
            guildId,
            onPress() {
              return dependencyMap(item.user.id);
            },
            start: start.start,
            end: start.end
          };
          return closure_1_9(closure_1_12, obj);
        }
    };
    tmp12 = closure_9(tmp7(10495).UserProfileStackedActionSheetList, obj6);
  }
  items = [obj3, ];
  let length1;
  const tmp4Result3 = getMutualGuildsLabelDefault;
  if (mutualGuilds != null) {
    length1 = mutualGuilds.length;
  }
  const obj7 = { id: "mutual-guilds", label: tmp4Result3(length1), page: tmp11Result };
  if (null == mutualGuilds) {
    const obj8 = { style: tmp.loadingState, children: tmp11(closure_6, {}) };
    tmp11Result = tmp11(closure_5, obj8);
  } else if (0 === mutualGuilds.length) {
    const obj9 = { style: tmp.emptyState, children: tmp11(user(12302).NoMutualServers, {}) };
    tmp11Result = tmp11(closure_5, obj9);
  } else {
    const obj10 = {
      data: mutualGuilds,
      keyExtractor(guild) {
          return guild.guild.id;
        },
      renderItem(start) {
          const item = start.item;
          const obj = {
            user: item,
            mutualGuild: item,
            onPress() {
              return _slicedToArray(item.guild.id);
            },
            start: start.start,
            end: start.end
          };
          return closure_1_9(closure_1_13, obj);
        }
    };
    tmp11Result = tmp11(tmp7(10495).UserProfileStackedActionSheetList, obj10);
  }
  items[1] = obj7;
  const segmentedControlState = useSegmentedControlState(obj2);
  const callback = obj.useCallback((nativeEvent) => {
    closure_4(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj11 = { scrollable: true, title: intl.string(user(1126).t["l2/aLi"]), children: closure_10(closure_5, obj12) };
  const tmp4Result4 = UserProfileStackedActionSheetDefault;
  intl = tmp7(1126).intl;
  obj12 = { style: tmp.container, onLayout: callback, children: items1 };
  items1 = [, ];
  const obj13 = { children: tmp11(user(12313).Tabs, { state: segmentedControlState }) };
  items1[0] = tmp11(closure_5, obj13);
  items1[1] = tmp11(user(10566).SegmentedControlPages, { state: segmentedControlState });
  return tmp11(tmp4Result4, obj11);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualsActionSheet.tsx");

export default tmp6;
export const MutualGuildRow = tmp5;
