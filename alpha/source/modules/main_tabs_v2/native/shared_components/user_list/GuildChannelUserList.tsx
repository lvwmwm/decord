// Module ID: 12436
// Function ID: 12437
// Name: GuildChannelUserList
// Dependencies: [32, 19, 17, 7251, 5092, 5155, 5114, 5146, 1385, 1072, 21, 10180, 504, 11560, 7012, 550, 12437, 7852, 7758, 5180, 12439, 8066, 6288, 5309, 1113, 8410, 575, 7759, 10510, 2]

// Module 12436 (GuildChannelUserList)
import react_native from "react-native" /* 17 */;
import intl2 from "intl" /* 1113 */;
import PermissionUtilsAll from "PermissionUtils" /* 5180 */;
import UserUtilsDefault from "UserUtils" /* 5309 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6288 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8410 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelMemberStore_mod from "ChannelMemberStore" /* 7251 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import GuildMemberStore from "GuildMemberStore" /* 5155 */;
import GuildStore from "GuildStore" /* 5114 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5146 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let metroImportAll;
let metroImportDefault;
const View = react_native.View;
let ChannelMemberStore = ChannelMemberStore_mod;
({ EVERYONE_CHANNEL_ID: metroImportDefault, MemberListRowTypes: metroImportAll } = ChannelMemberStore);
ChannelMemberStore = ChannelMemberStore_mod;
({ RelationshipTypes: closure_15, StatusTypes: closure_16 } = Constants);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = Fragment);
let closure_20 = [];
const memoResult = react.memo(function GuildChannelUserList(searchable) {
  let canShowDisplayNameStylesFont;
  let channelId;
  let disableBottomSafeZone;
  let disableStickySections;
  let disableThemedGradient;
  let inActionSheet;
  let insetEnd;
  let items20;
  let listActionHeight;
  let listActionRenderer;
  let listStyleOverride;
  let mapped;
  let obj10;
  let obj9;
  let searchableEmptyState;
  let tmp33;
  let flag = searchable.searchable;
  if (flag === undefined) {
    flag = false;
  }
  ({ searchableEmptyState, channelId } = searchable);
  let guildId = searchable.guildId;
  const roleId = searchable.roleId;
  let flag2 = searchable.headerShown;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const onUserPress = searchable.onUserPress;
  const onUserLongPress = searchable.onUserLongPress;
  let flag3 = searchable.opensUserProfileOnUserPress;
  if (flag3 === undefined) {
    flag3 = true;
  }
  const isNameplatedList = searchable.isNameplatedList;
  ({ canShowDisplayNameStylesFont, disableStickySections, inActionSheet, disableThemedGradient, listStyleOverride, disableBottomSafeZone, insetEnd } = searchable);
  if (canShowDisplayNameStylesFont === undefined) {
    canShowDisplayNameStylesFont = false;
  }
  let groups;
  let stateFromStoresArray1;
  closure_20 = undefined;
  let memo4;
  let tmp2 = onUserPress;
  let tmp = guildId;
  const analyticsLocations = guildId(onUserPress[17])().analyticsLocations;
  let obj = flag3;
  const ref = flag3.useRef(null);
  const ref1 = flag3.useRef(null);
  let tmp5 = onUserLongPress(flag3.useState(""), 2);
  let str = tmp5[0];
  let tmp6 = onUserLongPress(flag3.useState(closure_20), 2);
  const first = tmp6[0];
  let closure_8 = tmp6[1];
  const first1 = onUserLongPress(flag3.useState(() => {
    let obj2;
    const tmp = guildId(onUserPress[11]);
    const items = [channelId(onUserPress[11]).AutocompleterResultTypes.USER];
    const obj = { userFilters: obj2 };
    obj2 = { guild: guildId, strict: true };
    const tmp2 = new tmp((arg0, str) => {
      if ("" === str.trim()) {
        closure_1_8(closure_2_20);
      } else {
        closure_1_8(arg0);
      }
    }, items, undefined, obj);
    return tmp2;
  }), 1)[0];
  let items = [flag, first1];
  const effect = flag3.useEffect(() => {
    const tmp = flag;
    if (tmp) {
      const searchContext = first1.createSearchContext();
    } else {
      closure_6("");
      first1.clean();
      const current = ref1.current;
      if (current != null) {
        current.setText("");
      }
    }
  }, items);
  let tmp10 = "" !== str.trim();
  let closure_10 = tmp10;
  let tmp11 = channelId;
  let obj2 = channelId(onUserPress[12]);
  const items1 = [groups];
  const items2 = [guildId, first];
  const tmp12 = groups;
  const stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => first.filter((record) => stateFromStoresArray.isMember(guildId, record.record.id)), items2);
  const items3 = [tmp10, stateFromStoresArray];
  const memo = flag3.useMemo(() => {
    let mapped = null;
    if (closure_10) {
      mapped = stateFromStoresArray.map((record) => record.record.id);
    }
    return mapped;
  }, items3);
  let tmp15 = guildId(onUserPress[13])(guildId, memo);
  const tmp16 = onUserLongPress(flag3.useState(flag), 2);
  const first2 = tmp16[0];
  let closure_13 = tmp16[1];
  const items4 = [stateFromStoresArray, tmp10];
  const effect1 = flag3.useEffect(() => {
    let closure_0;
    if (stateFromStoresArray.length <= 0) {
      const tmp = closure_10;
      if (tmp) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          closure_1_13(false);
        }, 300);
        return () => {
          clearTimeout(closure_0);
        };
      }
    }
    closure_13(true);
  }, items4);
  const items5 = [ref, str];
  const layoutEffect = flag3.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToTop(false);
    }
  }, items5);
  const items6 = [first1, guildId];
  const items7 = [flag, searchableEmptyState, first2, str];
  const callback = flag3.useCallback((str) => {
    first1.search(str);
    closure_6(str);
    if ("" !== str.trim()) {
      const obj = guildId(onUserPress[14]);
      const members = obj.requestMembers(guildId, str);
    }
  }, items6);
  let closure_9 = tmp10;
  const memo1 = flag3.useMemo(() => {
    let tmp = null;
    if (flag) {
      tmp = null;
      if (!first2) {
        let tmp3Result;
        if (searchableEmptyState != null) {
          tmp3Result = tmp3(str);
        }
        tmp = tmp3Result;
      }
    }
    return tmp;
  }, items7);
  const obj3 = channelId(onUserPress[12]);
  const items8 = [closure_9];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items8, () => {
    let tmp3 = null;
    const getProps = ChannelMemberStore.getProps;
    const tmp2 = guildId;
    if (channelId !== metroImportDefault) {
      tmp3 = channelId;
    }
    return getProps(tmp2, tmp3);
  });
  groups = stateFromStoresObject.groups;
  const rows = stateFromStoresObject.rows;
  let obj4 = channelId(onUserPress[12]);
  const items9 = [stateFromStoresArray];
  const stateFromStores = obj4.useStateFromStores(items9, () => {
    if (channelId !== metroImportDefault) {
      return ChannelStore.getChannel(tmp);
    }
  });
  let obj5 = channelId(onUserPress[12]);
  const items10 = [stateFromStores];
  const stateFromStores1 = obj5.useStateFromStores(items10, () => stateFromStores.getChannelId());
  const tmp25 = guildId(onUserPress[18])();
  const items11 = [guildId];
  const memo2 = flag3.useMemo(() => {
    const guild = GuildStore.getGuild(guildId);
    let guildVisualOwnerId;
    if (null != guild) {
      const obj = PermissionUtilsAll;
      guildVisualOwnerId = obj.getGuildVisualOwnerId(guild);
    }
    return guildVisualOwnerId;
  }, items11);
  const ref2 = flag3.useRef(0);
  const ref3 = flag3.useRef(0);
  let closure_2 = tmp10;
  let closure_6 = tmp25;
  const items12 = [channelId, guildId, tmp10, tmp25, ref2, ref, ref3];
  const memo3 = flag3.useMemo(() => {
    let rowHeight;
    return guildId(onUserPress[15])(() => {
      let tmp = null == ref.current || closure_1_2;
      if (!tmp) {
        tmp = channelId !== canShowDisplayNameStylesFont && null == channel.getChannel(tmp2);
        const tmp4 = channelId !== canShowDisplayNameStylesFont && null == channel.getChannel(tmp2);
      }
      if (!tmp) {
        const obj2 = { guildId, channelId, y: ref2.current, height: ref3.current, rowHeight };
        const obj = guildId(ref[16]);
        const result = obj.subscribeChannelDimensions(obj2);
      }
    }, 50);
  }, items12);
  const items13 = [memo3];
  const items14 = [memo3];
  const callback1 = flag3.useCallback((nativeEvent) => {
    ref2.current = nativeEvent.nativeEvent.layout.height;
    memo3();
  }, items13);
  const callback2 = flag3.useCallback((nativeEvent) => {
    ref3.current = nativeEvent.nativeEvent.contentOffset.y;
    memo3();
  }, items14);
  const obj6 = { channel: stateFromStores, disable: tmp33 };
  tmp33 = tmp10;
  const tmp32 = guildId(onUserPress[20]);
  if (!tmp10) {
    tmp33 = !flag2;
  }
  const items15 = [stateFromStores, memo3];
  ({ listActionRenderer, listActionHeight } = tmp32(obj6));
  tmp32(obj6);
  const effect2 = obj.useEffect(() => {
    if (null != stateFromStores) {
      memo3();
    }
  }, items15);
  const items16 = [tmp12, stateFromStores1];
  const tmp11Result = tmp11(tmp2[12]);
  stateFromStoresArray1 = tmp11Result.useStateFromStoresArray(items16, () => {
    if (null != roleId) {
      let obj = channelId(onUserPress[21]);
      const tmp4 = guildId;
      if (!obj.isEveryoneRoleId(guildId, tmp)) {
        let tmp5 = canShowDisplayNameStylesFont;
        let tmp6 = null;
        if (closure_0 !== canShowDisplayNameStylesFont) {
          tmp6 = closure_0;
        }
        closure_0 = tmp6;
        const members = groups.getMembers(tmp4);
        const found = members.filter((roles) => {
          roles = roles.roles;
          const hasItem = roles.includes(roleId) && null != stateFromStores1.getUser(roles.userId);
          return hasItem;
        });
        return found.sort((userId, userId2) => {
          const user = UserStore.getUser(userId.userId);
          const user1 = UserStore.getUser(userId2.userId);
          const obj = NicknameUtilsDefault;
          let str = obj.getNickname(guildId, closure_0, user);
          const tmp5 = guildId;
          const tmp6 = closure_0;
          if (str == null) {
            const tmp3Result = UserUtilsDefault;
            str = tmp3Result.getGlobalName(user);
          }
          const tmp3Result3 = NicknameUtilsDefault;
          let str2 = tmp3Result3.getNickname(tmp5, tmp6, user1);
          if (str2 == null) {
            const tmp3Result4 = UserUtilsDefault;
            str2 = tmp3Result4.getGlobalName(user1);
          }
          if (str == null) {
            str = "";
          }
          const localeCompare = str.localeCompare;
          if (str2 == null) {
            str2 = "";
          }
          return localeCompare(str2);
        });
      }
    }
    return [];
  });
  let tmp36 = null != roleId;
  if (tmp36) {
    const tmp11Result2 = tmp11(tmp2[21]);
    tmp36 = !tmp11Result2.isEveryoneRoleId(guildId, roleId);
  }
  closure_20 = tmp36;
  const items17 = [guildId, roleId, tmp36, tmp10, stateFromStoresArray];
  memo4 = obj.useMemo(() => {
    const tmp = closure_20;
    if (tmp) {
      let found;
      const tmp2 = closure_9;
      if (tmp2) {
        found = stateFromStoresArray.filter((record) => {
          const member = groups.getMember(guildId, record.record.id);
          let found;
          if (member != null) {
            const roles = member.roles;
            if (roles != null) {
              found = roles.find((item) => item === closure_1_2);
            }
          }
          return null != found;
        });
      }
      return found;
    }
    found = stateFromStoresArray;
  }, items17);
  const items18 = [groups, memo4, tmp36];
  const items19 = [tmp36, stateFromStoresArray1, memo4, tmp10, guildId, rows, groups, memo2, onUserPress, flag3, channelId, stateFromStores1, onUserLongPress, analyticsLocations, isNameplatedList, canShowDisplayNameStylesFont];
  const callback3 = obj.useCallback((arg0) => {
    let count;
    let intl;
    let obj;
    let obj2;
    let title;
    if (memo4.length > 0) {
      const element = { type: "section", props: obj };
      obj = { title: intl.string(intl2.t["zkoeq/"]) };
      intl = intl2.intl;
      return element;
    } else {
      const tmp9 = closure_20;
      if (!tmp9) {
        ({ title, count } = groups[arg0]);
        if (null != title) {
          if (0 !== count) {
            let element1;
            if (tmp3 === ref2.UNKNOWN) {
              element1 = { type: "placeholder" };
            } else {
              element1 = { type: "section", props: obj2 };
              const _HermesInternal = HermesInternal;
              obj2 = { title: "" + title + " \u2014 " + count };
            }
            return element1;
          }
        }
      }
    }
  }, items18);
  let tmp39Result = null;
  const callback4 = obj.useCallback((arg0, arg1) => {
    let closure_1;
    let colorString;
    let colorStrings;
    let comparator2;
    let end;
    let fn;
    let guildMember;
    let isOwner;
    let nick;
    let premiumSince;
    let tmp10;
    let tmp20;
    let tmp3;
    let closure_0 = arg0;
    guildId = arg1;
    const tmp = closure_20;
    if (tmp) {
      let tmp2 = closure_9;
      if (!tmp2) {
        if (arg1 < stateFromStoresArray1.length) {
          let tmp5 = stateFromStores1;
          const user1 = stateFromStores1.getUser(tmp4.userId);
          if (null != user1) {
            let obj = { user: user1, guildMember: tmp4, end: arg1 === stateFromStoresArray1.length - 1 };
            tmp3 = obj;
          }
        }
      }
      let num4 = 0;
      if (null != tmp3) {
        const user = tmp3.user;
        const memberListMember = tmp3.memberListMember;
        ({ guildMember, comparator: comparator2 } = tmp3);
        let obj2 = {
          type: memo2.NONE,
          user,
          nickname: nick,
          usernameColor: colorString,
          roleColors: colorStrings,
          isNameplatedRow: isNameplatedList,
          premiumSince,
          isOwner,
          guildId,
          canShowDisplayNameStylesFont,
          onPress(user) {
                let colorRoleId;
                if (null != onUserPress) {
                  const obj = { user, index: null };
                  const tmp2 = closure_20;
                  if (!tmp2) {
                    let sum;
                    const tmp3 = closure_9;
                    if (!tmp3) {
                      let num3 = 0;
                      let num4 = 0;
                      let num5 = 0;
                      if (0 < closure_0) {
                        do {
                          num4 = num4 + groups[num3].count;
                          num3 = num3 + 1;
                          num5 = num4;
                        } while (num3 < closure_0);
                      }
                      sum = num5 + closure_1;
                    }
                    obj.index = sum;
                    tmp(obj);
                  }
                  sum = closure_1;
                }
                const tmp10 = flag3;
                if (tmp10) {
                  const obj2 = { userId: user.id, channelId: channelId !== metroImportDefault ? channelId : stateFromStores1, roleId: colorRoleId, sourceAnalyticsLocations: analyticsLocations };
                  colorRoleId = undefined;
                  const tmp13 = showUserProfileActionSheetDefault;
                  if (memberListMember != null) {
                    colorRoleId = memberListMember.colorRoleId;
                  }
                  tmp13(obj2);
                }
              },
          onLongPress: fn,
          start: 0 === arg1,
          end
        };
        nick = undefined;
        end = tmp3.end;
        if (memberListMember != null) {
          nick = memberListMember.nick;
        }
        if (nick == null) {
          if (null != comparator2) {
            nick = comparator2;
          }
          let nick1;
          if (guildMember != null) {
            nick1 = guildMember.nick;
          }
          comparator2 = nick1;
        }
        colorString = undefined;
        if (memberListMember != null) {
          colorString = memberListMember.colorString;
        }
        if (colorString == null) {
          let colorString1;
          if (guildMember != null) {
            colorString1 = guildMember.colorString;
          }
          colorString = colorString1;
        }
        colorStrings = undefined;
        if (memberListMember != null) {
          colorStrings = memberListMember.colorStrings;
        }
        if (colorStrings == null) {
          let colorStrings1;
          if (guildMember != null) {
            colorStrings1 = guildMember.colorStrings;
          }
          colorStrings = colorStrings1;
        }
        premiumSince = undefined;
        if (memberListMember != null) {
          premiumSince = memberListMember.premiumSince;
        }
        if (premiumSince == null) {
          let premiumSince1;
          if (guildMember != null) {
            premiumSince1 = guildMember.premiumSince;
          }
          premiumSince = premiumSince1;
        }
        if (null != memberListMember) {
          isOwner = memberListMember.isOwner;
        } else {
          isOwner = memo2 === user.id;
        }
        fn = undefined;
        if (null != onUserLongPress) {
          fn = () => {
            const obj = { user, index: null };
            const tmp2 = closure_20;
            if (!tmp2) {
              let sum;
              const tmp3 = closure_9;
              if (!tmp3) {
                let num3 = 0;
                let num4 = 0;
                let num5 = 0;
                if (0 < closure_0) {
                  do {
                    num4 = num4 + groups[num3].count;
                    num3 = num3 + 1;
                    num5 = num4;
                  } while (num3 < closure_0);
                }
                sum = num5 + closure_1;
              }
              obj.index = sum;
              return tmp(obj);
            }
            sum = closure_1;
          };
        }
        const element = { type: "user", props: obj2 };
        return element;
      } else {
        const element1 = { type: "placeholder", props: obj3 };
        let num5 = 1;
        return element1;
      }
    }
    const tmp8 = closure_9;
    if (tmp8) {
      let num3 = 1;
      let tmp15;
      const diff = memo4.length - 1;
      if (arg1 < memo4.length) {
        tmp15 = memo4[arg1];
      }
      if (null != tmp15) {
        const record = tmp15.record;
        const comparator = tmp15.comparator;
        const member = groups.getMember(guildId, record.id);
        if (null != member) {
          const obj4 = { user: record, guildMember: member, comparator: tmp20, end: arg1 === diff };
          tmp20 = undefined;
          if (!tmp) {
            tmp20 = comparator;
          }
          tmp3 = obj4;
        }
      }
    } else {
      const tmp11 = rows[groups[arg0].index + 1 + arg1];
      if (null != tmp11) {
        let tmp13 = analyticsLocations;
        if (tmp11.type === analyticsLocations.MEMBER) {
          tmp3 = { user: tmp11.user, memberListMember: tmp11, end: arg1 === tmp10[arg0].count - 1 };
          const obj5 = { user: tmp11.user, memberListMember: tmp11, end: arg1 === tmp10[arg0].count - 1 };
        }
      }
    }
  }, items19);
  if (flag) {
    const obj7 = { children: items20 };
    const obj8 = { style: obj9, children: ref3(tmp11(tmp2[27]).SearchBar, obj10) };
    obj10 = { size: "md", onChange: callback, ref: ref1 };
    obj9 = { marginHorizontal: tmp(tmp2[26]).space.PX_16 };
    items20 = [ref3(isNameplatedList, obj8), memo1];
    tmp39Result = tmp39(tmp40, obj7);
  }
  const items21 = [tmp39Result, ];
  const obj11 = { ref, sections: null, getItemProps: null, getSectionProps: null, renderListHeader: null, listHeaderSize: null, onLayout: null, onScroll: null, disableStickySections: null, inActionSheet: null, disableThemedGradient: null, listStyleOverride: null, disableBottomSafeZone: null, insetEnd: null };
  const tmp44 = ref3;
  if (tmp36) {
    let items22;
    if (!tmp10) {
      items22 = [stateFromStoresArray1.length];
    }
    obj11.sections = items22;
    obj11.getItemProps = callback4;
    obj11.getSectionProps = callback3;
    obj11.renderListHeader = listActionRenderer;
    obj11.listHeaderSize = listActionHeight;
    obj11.onLayout = callback1;
    obj11.onScroll = callback2;
    obj11.disableStickySections = disableStickySections;
    obj11.inActionSheet = inActionSheet;
    obj11.disableThemedGradient = disableThemedGradient;
    obj11.listStyleOverride = listStyleOverride;
    obj11.disableBottomSafeZone = disableBottomSafeZone;
    obj11.insetEnd = insetEnd;
    let str2 = "guild-channel-user-list";
    if (tmp10) {
      str2 = "guild-channel-user-list-search-results";
    }
    const obj12 = { children: items21 };
    items21[1] = tmp44(tmp45, obj11, str2);
    return stateFromStoresArray1(memo3, obj12);
  }
  if (tmp10) {
    const items23 = [memo4.length];
    mapped = items23;
  } else {
    const groups1 = stateFromStoresObject.groups;
    mapped = groups1.map((count) => count.count);
  }
  items22 = mapped;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/GuildChannelUserList.tsx");

export default memoResult;
