// Module ID: 18116
// Function ID: 18117
// Name: BlockedUserInGdmActionSheet
// Dependencies: [19, 17, 2064, 1390, 13952, 1085, 21, 5091, 587, 5087, 5406, 1126, 558, 576, 504, 1388, 1200, 11338, 10246, 4993, 5013, 1265, 5055, 18117, 7008, 6892, 6163, 10367, 6269, 6186, 5376, 2]

// Module 18116 (BlockedUserInGdmActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl7 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4993 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5013 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import Text_Text from "Text/Text" /* 5087 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5406 */;
import TableRow2 from "TableRow" /* 6186 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7008 */;
import SharedSpacesWarningActionCreators from "SharedSpacesWarningActionCreators" /* 18117 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import UserStore from "UserStore" /* 1390 */;
import SharedSpaceWarningConstants from "SharedSpaceWarningConstants" /* 13952 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let unpackModuleId;
function getUserCalloutRowText(arg0) {
  let calledOutUserIds;
  let closure_2;
  let formatResult;
  let require;
  let totalUsers;
  let user;
  ({ calledOutUserIds, totalUsers, guildId: require, channelId: importDefault } = arg0);
  const items = [...calledOutUserIds];
  dependencyMap = items.map((item) => user.getUser(item));
  if (totalUsers >= 4) {
    const intl4 = intl7.intl;
    let obj2 = {
      usernameHook1() {
          let obj2;
          const first = closure_2[0];
          const obj = { variant: "text-md/semibold", children: obj2.getName(_require, importDefault, first) };
          const Text = Text_Text.Text;
          obj2 = NicknameUtilsDefault;
          return authStore(Text, obj);
        },
      usernameHook2() {
          let obj2;
          let tmp;
          const obj = { variant: "text-md/semibold", children: obj2.getName(_require, importDefault, tmp) };
          tmp = closure_2[1];
          const Text = Text_Text.Text;
          obj2 = NicknameUtilsDefault;
          return authStore(Text, obj);
        },
      numberOfOtherUsers: totalUsers - calledOutUserIds.length
    };
    formatResult = intl4.format(intl7.t.qfo6KR, obj2);
  } else if (3 === totalUsers) {
    const intl3 = intl7.intl;
    const obj3 = {
      usernameHook1() {
          let obj2;
          const first = closure_2[0];
          const obj = { variant: "text-md/semibold", children: obj2.getName(_require, importDefault, first) };
          const Text = Text_Text.Text;
          obj2 = NicknameUtilsDefault;
          return authStore(Text, obj);
        },
      usernameHook2() {
          let obj2;
          let tmp;
          const obj = { variant: "text-md/semibold", children: obj2.getName(_require, importDefault, tmp) };
          tmp = closure_2[1];
          const Text = Text_Text.Text;
          obj2 = NicknameUtilsDefault;
          return authStore(Text, obj);
        }
    };
    formatResult = intl3.format(intl7.t["67ZE+9"], obj3);
  } else if (2 === totalUsers) {
    const intl2 = intl7.intl;
    const obj4 = {
      usernameHook1() {
          let obj2;
          const first = closure_2[0];
          const obj = { variant: "text-md/semibold", children: obj2.getName(_require, importDefault, first) };
          const Text = Text_Text.Text;
          obj2 = NicknameUtilsDefault;
          return authStore(Text, obj);
        },
      usernameHook2() {
          let obj2;
          let tmp;
          const obj = { variant: "text-md/semibold", children: obj2.getName(_require, importDefault, tmp) };
          tmp = closure_2[1];
          const Text = Text_Text.Text;
          obj2 = NicknameUtilsDefault;
          return authStore(Text, obj);
        }
    };
    formatResult = intl2.format(intl7.t.veV4IN, obj4);
  } else {
    let tmp = require;
    const intl = intl7.intl;
    let obj = {
      usernameHook() {
          let obj2;
          const first = closure_2[0];
          const obj = { variant: "text-md/semibold", children: obj2.getName(_require, importDefault, first) };
          const Text = Text_Text.Text;
          obj2 = NicknameUtilsDefault;
          return authStore(Text, obj);
        }
    };
    formatResult = intl.format(intl7.t["4WHCtq"], obj);
  }
  return formatResult;
}
function getBlockedUserInGDMTableRows(arg0) {
  let blockedUserIds;
  let channelId;
  let guild_id;
  let guild_id1;
  let guild_id2;
  let guild_id3;
  let ignoredUserIds;
  let intl;
  let intl2;
  let obj5;
  let obj8;
  let substr1;
  let tmp16;
  let tmp28;
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  const channel = ChannelStore.getChannel(channelId);
  const obj = { icon: authStore(CircleCheckIcon.CircleCheckIcon, {}), label: intl.string(intl7.t.RIMw54) };
  const tmp4 = ignoredUserIds.length > 0;
  intl = intl7.intl;
  const items = [obj, ];
  const obj2 = { icon: authStore(CircleInformationIcon.CircleInformationIcon, {}), label: intl2.string(intl7.t.bejNWN) };
  intl2 = intl7.intl;
  items[1] = obj2;
  if (blockedUserIds.length > 0) {
    if (tmp4) {
      const items1 = [];
      HermesBuiltin.arraySpread(items1, ignoredUserIds, HermesBuiltin.arraySpread(items1, blockedUserIds, 0));
      const substr = items1.slice(0, 2);
      const obj3 = { userIds: substr, guildId: guild_id };
      guild_id = undefined;
      const unshift2 = items.unshift;
      const tmp25 = closure_15;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      const obj4 = { icon: authStore(tmp25, obj3), label: tmp28(obj5) };
      obj5 = { calledOutUserIds: substr, totalUsers: items1.length, channelId, guildId: guild_id1 };
      guild_id1 = undefined;
      tmp28 = getUserCalloutRowText;
      if (channel != null) {
        guild_id1 = channel.guild_id;
      }
      unshift2(obj4);
    }
    return items;
  }
  const items2 = [];
  if (blockedUserIds.length > 0) {
    HermesBuiltin.arraySpread(items2, blockedUserIds, 0);
    substr1 = items2.slice(0, 2);
  } else {
    HermesBuiltin.arraySpread(items2, ignoredUserIds, 0);
    substr1 = items2.slice(0, 2);
  }
  const obj6 = { userIds: substr1, guildId: guild_id2 };
  guild_id2 = undefined;
  const unshift = items.unshift;
  const tmp13 = blockedUserIds.length > 0 ? blockedUserIds.length : ignoredUserIds.length;
  const tmp14 = closure_15;
  if (channel != null) {
    guild_id2 = channel.guild_id;
  }
  const obj7 = { icon: authStore(tmp14, obj6), label: tmp16(obj8) };
  obj8 = { calledOutUserIds: substr1, totalUsers: tmp13, channelId, guildId: guild_id3 };
  guild_id3 = undefined;
  tmp16 = getUserCalloutRowText;
  if (channel != null) {
    guild_id3 = channel.guild_id;
  }
  unshift(obj7);
}
let react = react_mod;
const View = react_native.View;
({ BlockWarningEngagements: metroImportDefault, GdmWarningMedium: metroImportAll } = SharedSpaceWarningConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerImage: { alignSelf: "center", width: 73, height: 86 }, title: { textAlign: "center", alignSelf: "center" }, description: { textAlign: "center", alignSelf: "center" }, tableGroup: obj3, buttons: { gap: 8 }, icon: { display: "flex", justifyContent: "center", alignItems: "center", minWidth: 32 } };
obj2 = { paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, textAlign: "center" };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_24 };
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserCalloutAvatars(userIds) {
  let first;
  let tmp6;
  let tmp7;
  let tmp8;
  const obj = userIds(576);
  const cResult = obj.c(14);
  userIds = userIds.userIds;
  const guildId = userIds.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userIds) {
    const fn = function l() {
      let user;
      return userIds.map((item) => user.getUser(item));
    };
    const items1 = [userIds];
    cResult[1] = userIds;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = userIds(504);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp6, tmp7);
  if (cResult[4] !== stateFromStoresArray) {
    const found = stateFromStoresArray.filter(tmp(1388).isNotNullish);
    cResult[4] = stateFromStoresArray;
    cResult[5] = found;
    tmp8 = found;
  } else {
    tmp8 = cResult[5];
  }
  if (1 === userIds.length) {
    let tmp13;
    let tmp19;
    if (cResult[6] !== userIds[0]) {
      const user = UserStore.getUser(userIds[0]);
      cResult[6] = userIds[0];
      cResult[7] = user;
      tmp13 = user;
    } else {
      tmp13 = cResult[7];
    }
    if (cResult[8] === guildId) {
      if (cResult[9] === tmp13) {
        let tmp16;
        if (cResult[10] === tmp8) {
          tmp16 = cResult[11];
        }
        return tmp16;
      }
    }
    if (null != tmp13) {
      const obj2 = { user: tmp8[0], guildId, size: userIds(1200).AvatarSizes.REFRESH_MEDIUM_32, "aria-hidden": true };
      const Avatar = tmp(1200).Avatar;
      tmp19 = closure_10(Avatar, obj2);
    } else {
      tmp19 = closure_10(tmp(11338).UserIcon, {});
    }
    cResult[8] = guildId;
    cResult[9] = tmp13;
    cResult[10] = tmp8;
    cResult[11] = tmp19;
    tmp16 = tmp19;
  } else {
    let tmp10;
    if (cResult[12] !== tmp8) {
      const obj3 = { users: tmp8, size: userIds(1200).AvatarSizes.REFRESH_MEDIUM_32 };
      const FacepileGroupDMAvatar = tmp(10246).FacepileGroupDMAvatar;
      const tmp12 = closure_10(FacepileGroupDMAvatar, obj3);
      cResult[12] = tmp8;
      cResult[13] = tmp12;
      tmp10 = tmp12;
    } else {
      tmp10 = cResult[13];
    }
    return tmp10;
  }
}) : (function UserCalloutAvatars(userIds) {
  let tmp5;
  userIds = userIds.userIds;
  const guildId = userIds.guildId;
  const items = [UserStore];
  const items1 = [userIds];
  const obj = userIds(504);
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let user;
    return userIds.map((item) => user.getUser(item));
  }, items1);
  const found = stateFromStoresArray.filter(userIds(1388).isNotNullish);
  const obj2 = UserStore;
  if (1 === userIds.length) {
    let tmp8;
    if (null != obj2.getUser(userIds[0])) {
      const obj3 = { user: found[0], guildId, size: userIds(1200).AvatarSizes.REFRESH_MEDIUM_32, "aria-hidden": true };
      const Avatar = tmp(1200).Avatar;
      tmp8 = closure_10(Avatar, obj3);
    } else {
      tmp8 = closure_10(tmp(11338).UserIcon, {});
    }
    tmp5 = tmp8;
  } else {
    const obj4 = { users: found, size: userIds(1200).AvatarSizes.REFRESH_MEDIUM_32 };
    const FacepileGroupDMAvatar = tmp(10246).FacepileGroupDMAvatar;
    tmp5 = closure_10(FacepileGroupDMAvatar, obj4);
  }
  return tmp5;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function BlockedUserInGDMDescription(arg0) {
  let items;
  let items1;
  let items2;
  let numOfBlockedUsers;
  let numOfIgnoredUsers;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(12);
  ({ numOfBlockedUsers, numOfIgnoredUsers } = arg0);
  if (numOfBlockedUsers > 0) {
    if (numOfIgnoredUsers > 0) {
      let first;
      let tmp28;
      const _Symbol3 = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = tmp(1126).intl;
        const stringResult = intl5.string(intl7.t.xbRNI3);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      const _Symbol4 = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { children: items };
        items = [first, "\n", ];
        const intl6 = tmp(1126).intl;
        items[2] = intl6.string(intl7.t["Bp2/ni"]);
        const tmp31 = authStore2(unpackModuleId, obj2);
        cResult[1] = tmp31;
        tmp28 = tmp31;
      } else {
        tmp28 = cResult[1];
      }
      tmp6 = tmp28;
    }
    return tmp6;
  }
  if (numOfBlockedUsers > 0) {
    let tmp16;
    let tmp19;
    let tmp21;
    if (cResult[2] !== numOfBlockedUsers) {
      const intl3 = tmp(1126).intl;
      const obj3 = { n: numOfBlockedUsers };
      const formatResult = intl3.format(intl7.t.iKtixW, obj3);
      cResult[2] = numOfBlockedUsers;
      cResult[3] = formatResult;
      tmp16 = formatResult;
    } else {
      tmp16 = cResult[3];
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(1126).intl;
      const stringResult1 = intl4.string(intl7.t.SN1hrl);
      cResult[4] = stringResult1;
      tmp19 = stringResult1;
    } else {
      tmp19 = cResult[4];
    }
    if (cResult[5] !== tmp16) {
      const obj4 = { children: items1 };
      items1 = [tmp16, "\n", tmp19];
      const tmp24 = authStore2(unpackModuleId, obj4);
      cResult[5] = tmp16;
      cResult[6] = tmp24;
      tmp21 = tmp24;
    } else {
      tmp21 = cResult[6];
    }
    tmp6 = tmp21;
  } else {
    tmp6 = null;
    if (numOfIgnoredUsers > 0) {
      let tmp7;
      let tmp10;
      let tmp12;
      if (cResult[7] !== numOfIgnoredUsers) {
        const intl = tmp(1126).intl;
        const obj5 = { n: numOfIgnoredUsers };
        const formatResult1 = intl.format(intl7.t["6IRwua"], obj5);
        cResult[7] = numOfIgnoredUsers;
        cResult[8] = formatResult1;
        tmp7 = formatResult1;
      } else {
        tmp7 = cResult[8];
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult2 = intl2.string(intl7.t["6AKLRt"]);
        cResult[9] = stringResult2;
        tmp10 = stringResult2;
      } else {
        tmp10 = cResult[9];
      }
      if (cResult[10] !== tmp7) {
        const obj6 = { children: items2 };
        items2 = [tmp7, "\n", tmp10];
        const tmp15 = authStore2(unpackModuleId, obj6);
        cResult[10] = tmp7;
        cResult[11] = tmp15;
        tmp12 = tmp15;
      } else {
        tmp12 = cResult[11];
      }
      tmp6 = tmp12;
    }
  }
}) : (function BlockedUserInGDMDescription(arg0) {
  let items;
  let items1;
  let items2;
  let numOfBlockedUsers;
  let numOfIgnoredUsers;
  let tmp3;
  ({ numOfBlockedUsers, numOfIgnoredUsers } = arg0);
  if (numOfBlockedUsers > 0) {
    if (numOfIgnoredUsers > 0) {
      const obj2 = { children: items };
      const intl5 = intl7.intl;
      items = [intl5.string(intl7.t.xbRNI3), "\n", ];
      const intl6 = intl7.intl;
      items[2] = intl6.string(intl7.t["Bp2/ni"]);
      tmp3 = authStore2(unpackModuleId, obj2);
    }
    return tmp3;
  }
  if (numOfBlockedUsers > 0) {
    const obj3 = { children: items1 };
    const intl3 = intl7.intl;
    const obj4 = { n: numOfBlockedUsers };
    items1 = [intl3.format(intl7.t.iKtixW, obj4), "\n", ];
    const intl4 = intl7.intl;
    items1[2] = intl4.string(intl7.t.SN1hrl);
    tmp3 = authStore2(unpackModuleId, obj3);
  } else {
    tmp3 = null;
    if (numOfIgnoredUsers > 0) {
      const obj = { children: items2 };
      const intl = intl7.intl;
      const obj5 = { n: numOfIgnoredUsers };
      items2 = [intl.format(intl7.t["6IRwua"], obj5), "\n", ];
      const intl2 = intl7.intl;
      items2[2] = intl2.string(intl7.t["6AKLRt"]);
      tmp3 = authStore2(unpackModuleId, obj);
    }
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function BlockedUserInGdmActionSheet(channelId) {
  let icon;
  let ignoredUserIds;
  let items;
  let items1;
  let items2;
  let obj = channelId(ignoredUserIds[13]);
  const cResult = obj.c(78);
  channelId = channelId.channelId;
  const blockedUserIds = channelId.blockedUserIds;
  ignoredUserIds = channelId.ignoredUserIds;
  const tmp4 = closure_13();
  react = tmp4;
  if (cResult[0] === blockedUserIds) {
    if (cResult[1] === channelId) {
      let tmp5;
      let tmp6;
      if (cResult[2] === ignoredUserIds) {
        tmp5 = cResult[3];
        tmp6 = cResult[4];
      }
      const effect = react.useEffect(tmp5, tmp6);
      if (cResult[5] === blockedUserIds) {
        if (cResult[6] === channelId) {
          let tmp9;
          if (cResult[7] === ignoredUserIds) {
            tmp9 = cResult[8];
          }
          if (cResult[9] === blockedUserIds) {
            if (cResult[10] === channelId) {
              let tmp10;
              let tmp22;
              let tmp28;
              let tmp30;
              let tmp19;
              let tmp18;
              let tmp17;
              let tmp16;
              let flag2;
              let flag;
              let tmp15;
              let tmp14;
              let tmp13;
              let tmp12;
              let tmp11;
              if (cResult[11] === ignoredUserIds) {
                tmp10 = cResult[12];
              }
              if (cResult[13] === blockedUserIds) {
                if (cResult[14] === channelId) {
                  if (cResult[15] === ignoredUserIds) {
                    if (cResult[16] === tmp4.container) {
                      if (cResult[17] === tmp4.description) {
                        if (cResult[18] === tmp4.headerImage) {
                          if (cResult[19] === tmp4.icon) {
                            if (cResult[20] === tmp4.tableGroup) {
                              if (cResult[21] === tmp4.title) {
                                tmp11 = cResult[22];
                                tmp12 = cResult[23];
                                tmp13 = cResult[24];
                                tmp14 = cResult[25];
                                tmp15 = cResult[26];
                                flag = cResult[27];
                                flag2 = cResult[28];
                                tmp16 = cResult[29];
                                tmp17 = cResult[30];
                                tmp18 = cResult[31];
                                tmp19 = cResult[32];
                              }
                              if (cResult[49] === tmp11) {
                                if (cResult[50] === flag2) {
                                  let tmp45;
                                  if (cResult[51] === tmp16) {
                                    tmp45 = cResult[52];
                                  }
                                  if (cResult[53] === tmp12) {
                                    if (cResult[54] === tmp45) {
                                      let tmp48;
                                      let tmp52;
                                      let tmp54;
                                      let tmp57;
                                      let tmp59;
                                      if (cResult[55] === tmp17) {
                                        tmp48 = cResult[56];
                                      }
                                      const _Symbol2 = Symbol;
                                      const buttons = tmp4.buttons;
                                      if (cResult[57] === Symbol.for("react.memo_cache_sentinel")) {
                                        const intl2 = tmp(tmp2[11]).intl;
                                        const stringResult = intl2.string(channelId(ignoredUserIds[11]).t.I4q1kA);
                                        cResult[57] = stringResult;
                                        tmp52 = stringResult;
                                      } else {
                                        tmp52 = cResult[57];
                                      }
                                      if (cResult[58] !== tmp10) {
                                        let obj2 = { size: "lg", onPress: tmp10, text: tmp52 };
                                        const tmp56 = closure_10(channelId(ignoredUserIds[30]).Button, obj2);
                                        cResult[58] = tmp10;
                                        cResult[59] = tmp56;
                                        tmp54 = tmp56;
                                      } else {
                                        tmp54 = cResult[59];
                                      }
                                      const _Symbol3 = Symbol;
                                      if (cResult[60] === Symbol.for("react.memo_cache_sentinel")) {
                                        const intl3 = tmp(tmp2[11]).intl;
                                        const stringResult1 = intl3.string(channelId(ignoredUserIds[11]).t.DRJhmT);
                                        cResult[60] = stringResult1;
                                        tmp57 = stringResult1;
                                      } else {
                                        tmp57 = cResult[60];
                                      }
                                      if (cResult[61] !== tmp9) {
                                        let obj3 = { size: "lg", variant: "secondary", onPress: tmp9, text: tmp57 };
                                        const tmp61 = closure_10(channelId(ignoredUserIds[30]).Button, obj3);
                                        cResult[61] = tmp9;
                                        cResult[62] = tmp61;
                                        tmp59 = tmp61;
                                      } else {
                                        tmp59 = cResult[62];
                                      }
                                      if (cResult[63] === tmp4.buttons) {
                                        if (cResult[64] === tmp54) {
                                          let tmp62;
                                          if (cResult[65] === tmp59) {
                                            tmp62 = cResult[66];
                                          }
                                          if (cResult[67] === tmp13) {
                                            if (cResult[68] === tmp15) {
                                              if (cResult[69] === tmp48) {
                                                if (cResult[70] === tmp62) {
                                                  if (cResult[71] === tmp18) {
                                                    let tmp66;
                                                    if (cResult[72] === tmp19) {
                                                      tmp66 = cResult[73];
                                                    }
                                                    if (cResult[74] === tmp14) {
                                                      if (cResult[75] === flag) {
                                                        let tmp69;
                                                        if (cResult[76] === tmp66) {
                                                          tmp69 = cResult[77];
                                                        }
                                                        return tmp69;
                                                      }
                                                    }
                                                    let obj4 = { startExpanded: flag, children: tmp66 };
                                                    const tmp71 = closure_10(tmp14, obj4);
                                                    cResult[74] = tmp14;
                                                    cResult[75] = flag;
                                                    cResult[76] = tmp66;
                                                    cResult[77] = tmp71;
                                                    tmp69 = tmp71;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          let obj5 = { style: tmp18, children: items };
                                          items = [tmp19, tmp15, tmp48, tmp62];
                                          const tmp68 = closure_12(tmp13, obj5);
                                          cResult[67] = tmp13;
                                          cResult[68] = tmp15;
                                          cResult[69] = tmp48;
                                          cResult[70] = tmp62;
                                          cResult[71] = tmp18;
                                          cResult[72] = tmp19;
                                          cResult[73] = tmp68;
                                          tmp66 = tmp68;
                                        }
                                      }
                                      const obj6 = { style: buttons, children: items1 };
                                      items1 = [tmp54, tmp59];
                                      const tmp65 = closure_12(View, obj6);
                                      cResult[63] = tmp4.buttons;
                                      cResult[64] = tmp54;
                                      cResult[65] = tmp59;
                                      cResult[66] = tmp65;
                                      tmp62 = tmp65;
                                    }
                                  }
                                  const obj7 = { style: tmp17, children: tmp45 };
                                  const tmp50 = closure_10(tmp12, obj7);
                                  cResult[53] = tmp12;
                                  cResult[54] = tmp45;
                                  cResult[55] = tmp17;
                                  cResult[56] = tmp50;
                                  tmp48 = tmp50;
                                }
                              }
                              const obj8 = { hasIcons: flag2, children: tmp16 };
                              const tmp47 = closure_10(tmp11, obj8);
                              cResult[49] = tmp11;
                              cResult[50] = flag2;
                              cResult[51] = tmp16;
                              cResult[52] = tmp47;
                              tmp45 = tmp47;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj9 = { channelId, blockedUserIds, ignoredUserIds };
              const arr4 = getBlockedUserInGDMTableRows(obj9);
              const ActionSheet = tmp(tmp2[25]).ActionSheet;
              const container = tmp4.container;
              if (cResult[33] !== tmp4.headerImage) {
                const obj10 = { source: blockedUserIds(ignoredUserIds[27]), style: tmp4.headerImage };
                const tmp25 = blockedUserIds(ignoredUserIds[26]);
                const tmp26 = closure_10(tmp25, obj10);
                cResult[33] = tmp4.headerImage;
                cResult[34] = tmp26;
                tmp22 = tmp26;
              } else {
                tmp22 = cResult[34];
              }
              const _Symbol = Symbol;
              const title = tmp4.title;
              if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(tmp2[11]).intl;
                const stringResult2 = intl.string(channelId(ignoredUserIds[11]).t["mwJJ+f"]);
                cResult[35] = stringResult2;
                tmp28 = stringResult2;
              } else {
                tmp28 = cResult[35];
              }
              if (cResult[36] !== tmp4.title) {
                const obj11 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: title, children: tmp28 };
                const tmp32 = closure_10(channelId(ignoredUserIds[9]).Text, obj11);
                cResult[36] = tmp4.title;
                cResult[37] = tmp32;
                tmp30 = tmp32;
              } else {
                tmp30 = cResult[37];
              }
              if (cResult[38] === blockedUserIds.length) {
                let tmp33;
                if (cResult[39] === ignoredUserIds.length) {
                  tmp33 = cResult[40];
                }
                if (cResult[41] === tmp4.description) {
                  let tmp37;
                  if (cResult[42] === tmp33) {
                    tmp37 = cResult[43];
                  }
                  if (cResult[44] === tmp30) {
                    let tmp40;
                    let tmp43;
                    if (cResult[45] === tmp37) {
                      tmp40 = cResult[46];
                    }
                    const tableGroup = tmp4.tableGroup;
                    const TableRowGroup = tmp(tmp2[28]).TableRowGroup;
                    if (cResult[47] !== tmp4.icon) {
                      class J {
                        constructor(arg0, arg1) {
                          let label;
                          let obj2;
                          ({ icon, label } = arg0);
                          const obj = { icon: authStore(View, obj2), label };
                          obj2 = { style: icon.icon, children: icon };
                          const TableRow = TableRow2.TableRow;
                          return authStore(TableRow, obj, arg1);
                        }
                      }
                      cResult[47] = tmp4.icon;
                      cResult[48] = J;
                      tmp43 = J;
                    } else {
                      class J {
                        constructor(arg0, arg1) {
                          let label;
                          let obj2;
                          ({ icon, label } = arg0);
                          const obj = { icon: authStore(View, obj2), label };
                          obj2 = { style: icon.icon, children: icon };
                          const TableRow = TableRow2.TableRow;
                          return authStore(TableRow, obj, arg1);
                        }
                      }
                    }
                    const mapped = arr4.map(tmp43);
                    cResult[13] = blockedUserIds;
                    cResult[14] = channelId;
                    cResult[15] = ignoredUserIds;
                    cResult[16] = tmp4.container;
                    cResult[17] = tmp4.description;
                    cResult[18] = tmp4.headerImage;
                    cResult[19] = tmp4.icon;
                    cResult[20] = tmp4.tableGroup;
                    cResult[21] = tmp4.title;
                    cResult[22] = TableRowGroup;
                    cResult[23] = View;
                    cResult[24] = View;
                    cResult[25] = ActionSheet;
                    cResult[26] = tmp40;
                    cResult[27] = true;
                    cResult[28] = true;
                    cResult[29] = mapped;
                    cResult[30] = tableGroup;
                    cResult[31] = container;
                    cResult[32] = tmp22;
                    tmp19 = tmp22;
                    tmp18 = container;
                    tmp17 = tableGroup;
                    tmp16 = mapped;
                    flag2 = true;
                    flag = true;
                    tmp15 = tmp40;
                    tmp14 = ActionSheet;
                    tmp13 = tmp21;
                    tmp12 = tmp21;
                    tmp11 = TableRowGroup;
                  }
                  const obj12 = { children: items2 };
                  items2 = [tmp30, tmp37];
                  const tmp42 = closure_12(View, obj12);
                  cResult[44] = tmp30;
                  cResult[45] = tmp37;
                  cResult[46] = tmp42;
                  tmp40 = tmp42;
                }
                const obj13 = { variant: "text-md/medium", color: "text-default", style: tmp4.description, children: tmp33 };
                const tmp39 = closure_10(channelId(ignoredUserIds[9]).Text, obj13);
                cResult[41] = tmp4.description;
                cResult[42] = tmp33;
                cResult[43] = tmp39;
                tmp37 = tmp39;
              }
              const obj14 = { numOfBlockedUsers: blockedUserIds.length, numOfIgnoredUsers: ignoredUserIds.length };
              const tmp36 = closure_10(closure_16, obj14);
              cResult[38] = blockedUserIds.length;
              cResult[39] = ignoredUserIds.length;
              cResult[40] = tmp36;
              tmp33 = tmp36;
            }
          }
          function handleDismissAndLeave() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            const obj2 = SharedSpacesWarningActionCreators;
            const result = obj2.dismissGdmBlockedUserWarning(channelId);
            const obj3 = ChannelActionCreatorsDefault;
            obj3.closePrivateChannel(channelId, true, true);
            const obj4 = AnalyticsUtilsDefault;
            const obj5 = { action: metroImportDefault.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: metroImportAll.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
            obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
          }
          cResult[9] = blockedUserIds;
          cResult[10] = channelId;
          cResult[11] = ignoredUserIds;
          cResult[12] = handleDismissAndLeave;
          tmp10 = handleDismissAndLeave;
        }
      }
      function handleDismissAndStay() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const obj2 = SharedSpacesWarningActionCreators;
        const result = obj2.dismissGdmBlockedUserWarning(channelId);
        const obj3 = AnalyticsUtilsDefault;
        const obj4 = { action: metroImportDefault.CLICK_TO_STAY, channel_id: channelId, warning_medium: metroImportAll.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
        obj3.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj4);
      }
      cResult[5] = blockedUserIds;
      cResult[6] = channelId;
      cResult[7] = ignoredUserIds;
      cResult[8] = handleDismissAndStay;
      tmp9 = handleDismissAndStay;
    }
  }
  const fn = function s() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { channel_id: channelId, warning_medium: metroImportAll.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
    obj.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_VIEWED, obj2);
  };
  const items3 = [channelId, blockedUserIds, ignoredUserIds];
  cResult[0] = blockedUserIds;
  cResult[1] = channelId;
  cResult[2] = ignoredUserIds;
  cResult[3] = fn;
  cResult[4] = items3;
  tmp6 = items3;
  tmp5 = fn;
}) : (function BlockedUserInGdmActionSheet(channelId) {
  let TableRowGroup;
  let icon;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let items3;
  let obj2;
  let obj7;
  let obj9;
  channelId = channelId.channelId;
  const blockedUserIds = channelId.blockedUserIds;
  const ignoredUserIds = channelId.ignoredUserIds;
  const tmp = closure_13();
  react = tmp;
  const items = [channelId, blockedUserIds, ignoredUserIds];
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { channel_id: channelId, warning_medium: metroImportAll.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
    obj.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_VIEWED, obj2);
  }, items);
  let obj = { startExpanded: true, children: closure_12(View, obj2) };
  obj2 = { style: tmp.container, children: items1 };
  const arr4 = getBlockedUserInGDMTableRows({ channelId, blockedUserIds, ignoredUserIds });
  const ActionSheet = channelId(ignoredUserIds[25]).ActionSheet;
  let obj3 = { source: blockedUserIds(ignoredUserIds[27]), style: tmp.headerImage };
  const tmp3 = blockedUserIds(ignoredUserIds[26]);
  items1 = [closure_10(tmp3, obj3), , , ];
  let obj4 = { children: items2 };
  let obj5 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: intl.string(channelId(ignoredUserIds[11]).t["mwJJ+f"]) };
  const Text = channelId(ignoredUserIds[9]).Text;
  intl = channelId(ignoredUserIds[11]).intl;
  items2 = [closure_10(Text, obj5), ];
  const obj6 = { variant: "text-md/medium", color: "text-default", style: tmp.description, children: closure_10(closure_16, obj7) };
  obj7 = { numOfBlockedUsers: blockedUserIds.length, numOfIgnoredUsers: ignoredUserIds.length };
  const Text2 = channelId(ignoredUserIds[9]).Text;
  items2[1] = closure_10(Text2, obj6);
  items1[1] = closure_12(View, obj4);
  const obj8 = { style: tmp.tableGroup, children: closure_10(TableRowGroup, obj9) };
  obj9 = {
    hasIcons: true,
    children: arr4.map((item, index) => {
      let label;
      let obj2;
      ({ icon, label } = item);
      const obj = { icon: authStore(View, obj2), label };
      obj2 = { style: icon.icon, children: icon };
      const TableRow = TableRow2.TableRow;
      return authStore(TableRow, obj, index);
    })
  };
  TableRowGroup = channelId(ignoredUserIds[28]).TableRowGroup;
  items1[2] = closure_10(View, obj8);
  const obj10 = { style: tmp.buttons, children: items3 };
  const obj11 = {
    size: "lg",
    onPress: function handleDismissAndLeave() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = SharedSpacesWarningActionCreators;
      const result = obj2.dismissGdmBlockedUserWarning(channelId);
      const obj3 = ChannelActionCreatorsDefault;
      obj3.closePrivateChannel(channelId, true, true);
      const obj4 = AnalyticsUtilsDefault;
      const obj5 = { action: metroImportDefault.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: metroImportAll.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
      obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
    },
    text: intl2.string(channelId(ignoredUserIds[11]).t.I4q1kA)
  };
  const Button = channelId(ignoredUserIds[30]).Button;
  intl2 = channelId(ignoredUserIds[11]).intl;
  items3 = [closure_10(Button, obj11), ];
  const obj12 = {
    size: "lg",
    variant: "secondary",
    onPress: function handleDismissAndStay() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = SharedSpacesWarningActionCreators;
      const result = obj2.dismissGdmBlockedUserWarning(channelId);
      const obj3 = AnalyticsUtilsDefault;
      const obj4 = { action: metroImportDefault.CLICK_TO_STAY, channel_id: channelId, warning_medium: metroImportAll.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
      obj3.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj4);
    },
    text: intl3.string(channelId(ignoredUserIds[11]).t.DRJhmT)
  };
  const Button2 = channelId(ignoredUserIds[30]).Button;
  intl3 = channelId(ignoredUserIds[11]).intl;
  items3[1] = closure_10(Button2, obj12);
  items1[3] = closure_12(View, obj10);
  return closure_10(ActionSheet, obj);
});
let result = size.fileFinishedImporting("modules/shared_space_warnings/native/BlockedUserInGdmActionSheet.tsx");

export default tmp5;
export { getUserCalloutRowText };
