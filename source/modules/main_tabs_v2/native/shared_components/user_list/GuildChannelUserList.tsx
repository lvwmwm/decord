// Module ID: 10894
// Function ID: 84721
// Dependencies: [57, 31, 27, 5658, 1348, 1917, 1838, 1906, 1849, 653, 33, 7093, 5047, 572, 5688, 5462, 566, 8871, 3763, 10895, 8457, 4319, 3969, 1212, 8537, 689, 5772, 8864, 2]

// Module 10894
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "Placeholder";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_7;
let closure_8;
const require = arg1;
({ EVERYONE_CHANNEL_ID: closure_7, MemberListRowTypes: closure_8 } = _isNativeReflectConstruct);
({ RelationshipTypes: closure_15, StatusTypes: closure_16 } = ME);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = jsxProd);
let closure_20 = [];
const memoResult = importAllResult.memo(function GuildChannelUserList(searchable) {
  let canShowDisplayNameStylesFont;
  let disableBottomSafeZone;
  let disableStickySections;
  let disableThemedGradient;
  let headerShown;
  let inActionSheet;
  let insetEnd;
  let listActionHeight;
  let listActionRenderer;
  let listStyleOverride;
  let onChangeText;
  let searchBarEmptyState;
  let searchBarRef;
  let searchableEmptyState;
  let flag = searchable.searchable;
  if (flag === undefined) {
    flag = false;
  }
  let channelId = searchable.channelId;
  let guildId = searchable.guildId;
  const roleId = searchable.roleId;
  ({ headerShown, searchableEmptyState } = searchable);
  if (headerShown === undefined) {
    headerShown = true;
  }
  const onUserPress = searchable.onUserPress;
  const onUserLongPress = searchable.onUserLongPress;
  let flag2 = searchable.opensUserProfileOnUserPress;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const isNameplatedList = searchable.isNameplatedList;
  ({ canShowDisplayNameStylesFont, disableStickySections, inActionSheet, disableThemedGradient, listStyleOverride, disableBottomSafeZone, insetEnd } = searchable);
  if (canShowDisplayNameStylesFont === undefined) {
    canShowDisplayNameStylesFont = false;
  }
  let analyticsLocations;
  let hasQuery;
  let queryResults;
  let groups;
  let rows;
  let stateFromStores;
  let stateFromStores1;
  let memo;
  let ref1;
  let ref2;
  let c18;
  let stateFromStoresArray;
  let c20;
  let memo1;
  analyticsLocations = guildId(onUserPress[15])().analyticsLocations;
  let ref = flag2.useRef(null);
  let obj = { guildId, listRef: ref, searchable: flag, searchableEmptyState };
  let tmp2 = (function useSearchableConfig(guildId) {
    guildId = guildId.guildId;
    const listRef = guildId.listRef;
    const searchable = guildId.searchable;
    const searchableEmptyState = guildId.searchableEmptyState;
    const ref = flag2.useRef(null);
    const tmp2 = onUserLongPress(flag2.useState(""), 2);
    const str = tmp2[0];
    let closure_6 = tmp2[1];
    const tmp3 = onUserLongPress(flag2.useState(c20), 2);
    const first = tmp3[0];
    let closure_8 = tmp3[1];
    const first1 = onUserLongPress(flag2.useState(() => {
      let tmp = guildId(onUserPress[11]);
      const items = [channelId(onUserPress[11]).AutocompleterResultTypes.USER];
      obj = { userFilters: obj };
      obj = { guild: guildId, strict: true };
      tmp = new tmp((arg0, str) => {
        if ("" === str.trim()) {
          outer1_8(c20);
        } else {
          outer1_8(arg0);
        }
      }, items, undefined, obj);
      return tmp;
    }), 1)[0];
    let items = [searchable, first1];
    const effect = flag2.useEffect(() => {
      if (searchable) {
        const searchContext = first1.createSearchContext();
      } else {
        callback("");
        first1.clean();
        const current = ref.current;
        if (null != current) {
          current.setText("");
        }
      }
    }, items);
    const tmp7 = "" !== str.trim();
    const tmp8 = onUserLongPress(flag2.useState(searchable), 2);
    const first2 = tmp8[0];
    let _createForOfIteratorHelperLoose = tmp8[1];
    const items1 = [first, tmp7];
    const effect1 = flag2.useEffect(() => {
      if (first.length <= 0) {
        if (closure_10) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            outer1_12(false);
          }, 300);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
      callback2(true);
    }, items1);
    const items2 = [listRef, str];
    const layoutEffect = flag2.useLayoutEffect(() => {
      const current = listRef.current;
      if (null != current) {
        current.scrollToTop(false);
      }
    }, items2);
    const items3 = [first1, guildId];
    const items4 = [searchable, searchableEmptyState, first2, str];
    const callback = flag2.useCallback((str) => {
      first1.search(str);
      callback(str);
      if ("" !== str.trim()) {
        const members = guildId(onUserPress[12]).requestMembers(guildId, str);
        const obj = guildId(onUserPress[12]);
      }
    }, items3);
    return {
      hasQuery: tmp7,
      queryResults: first,
      onChangeText: callback,
      searchBarRef: ref,
      searchBarEmptyState: flag2.useMemo(() => {
        let tmp = null;
        if (searchable) {
          tmp = null;
          if (!first2) {
            let tmp4;
            if (null != searchableEmptyState) {
              tmp4 = searchableEmptyState(str);
            }
            tmp = tmp4;
          }
        }
        return tmp;
      }, items4)
    };
  })(obj);
  hasQuery = tmp2.hasQuery;
  queryResults = tmp2.queryResults;
  ({ onChangeText, searchBarRef, searchBarEmptyState } = tmp2);
  let obj1 = channelId(onUserPress[16]);
  let items = [hasQuery];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => {
    let tmp3 = null;
    if (channelId !== canShowDisplayNameStylesFont) {
      tmp3 = channelId;
    }
    return hasQuery.getProps(guildId, tmp3);
  });
  groups = stateFromStoresObject.groups;
  rows = stateFromStoresObject.rows;
  let obj2 = channelId(onUserPress[16]);
  let items1 = [queryResults];
  stateFromStores = obj2.useStateFromStores(items1, () => {
    if (channelId !== canShowDisplayNameStylesFont) {
      return queryResults.getChannel(channelId);
    }
  });
  let obj3 = channelId(onUserPress[16]);
  let items2 = [stateFromStores];
  stateFromStores1 = obj3.useStateFromStores(items2, () => stateFromStores.getChannelId());
  let items3 = [guildId];
  memo = flag2.useMemo(() => {
    const guild = rows.getGuild(guildId);
    let guildVisualOwnerId;
    if (null != guild) {
      guildVisualOwnerId = roleId(onUserPress[18]).getGuildVisualOwnerId(guild);
      const obj = roleId(onUserPress[18]);
    }
    return guildVisualOwnerId;
  }, items3);
  ref1 = flag2.useRef(0);
  ref2 = flag2.useRef(0);
  const tmp10 = (function useThrottledUpdateSubscription(guildId) {
    guildId = guildId.guildId;
    const channelId = guildId.channelId;
    const hasQuery = guildId.hasQuery;
    const listRef = guildId.listRef;
    const scrollOffsetRef = guildId.scrollOffsetRef;
    const heightRef = guildId.heightRef;
    const scaledRowHeight = guildId.scaledRowHeight;
    const items = [channelId, guildId, hasQuery, scaledRowHeight, heightRef, listRef, scrollOffsetRef];
    return flag2.useMemo(() => guildId(onUserPress[13])(() => {
      let tmp = null == outer1_3.current || outer1_2;
      if (!tmp) {
        let tmp4 = outer1_1 !== canShowDisplayNameStylesFont;
        if (tmp4) {
          tmp4 = null == queryResults.getChannel(outer1_1);
        }
        tmp = tmp4;
      }
      if (!tmp) {
        let obj = channelId(onUserPress[14]);
        obj = { guildId: outer1_0, channelId: outer1_1, y: outer1_4.current, height: outer1_5.current, rowHeight: outer1_6 };
        const result = obj.subscribeChannelDimensions(obj);
      }
    }, 50), items);
  })({ guildId, channelId, hasQuery, listRef: ref, scrollOffsetRef: ref2, heightRef: ref1, scaledRowHeight: guildId(onUserPress[17])() });
  c18 = tmp10;
  let items4 = [tmp10];
  const items5 = [tmp10];
  let callback = flag2.useCallback((nativeEvent) => {
    ref1.current = nativeEvent.nativeEvent.layout.height;
    _undefined();
  }, items4);
  const callback1 = flag2.useCallback((nativeEvent) => {
    ref2.current = nativeEvent.nativeEvent.contentOffset.y;
    _undefined();
  }, items5);
  obj = { channel: stateFromStores };
  let tmp14 = hasQuery;
  let tmp6 = guildId(onUserPress[17])();
  if (!hasQuery) {
    tmp14 = !headerShown;
  }
  obj.disable = tmp14;
  const tmp13 = guildId(onUserPress[19]);
  const items6 = [stateFromStores, tmp10];
  ({ listActionRenderer, listActionHeight } = guildId(onUserPress[19])(obj));
  let effect = flag2.useEffect(() => {
    if (null != stateFromStores) {
      _undefined();
    }
  }, items6);
  let obj5 = channelId(onUserPress[16]);
  const items7 = [groups, stateFromStores1];
  stateFromStoresArray = obj5.useStateFromStoresArray(items7, () => {
    if (null != roleId) {
      if (!obj2.isEveryoneRoleId(guildId, roleId)) {
        let tmp3 = null;
        if (channelId !== canShowDisplayNameStylesFont) {
          tmp3 = channelId;
        }
        channelId = tmp3;
        const members = groups.getMembers(guildId);
        const found = members.filter((roles) => {
          roles = roles.roles;
          let hasItem = roles.includes(outer1_2);
          if (hasItem) {
            hasItem = null != stateFromStores1.getUser(roles.userId);
          }
          return hasItem;
        });
        return found.sort((userId, userId2) => {
          const user = stateFromStores1.getUser(userId.userId);
          const user1 = stateFromStores1.getUser(userId2.userId);
          let nickname = guildId(onUserPress[21]).getNickname(outer1_1, closure_0, user);
          if (null == nickname) {
            nickname = guildId(onUserPress[22]).getGlobalName(user);
            const obj2 = guildId(onUserPress[22]);
          }
          const obj = guildId(onUserPress[21]);
          let nickname1 = guildId(onUserPress[21]).getNickname(outer1_1, closure_0, user1);
          if (null == nickname1) {
            nickname1 = guildId(onUserPress[22]).getGlobalName(user1);
            const obj4 = guildId(onUserPress[22]);
          }
          let str = "";
          let str2 = "";
          if (null != nickname) {
            str2 = nickname;
          }
          if (null != nickname1) {
            str = nickname1;
          }
          return str2.localeCompare(str);
        });
      }
      obj2 = channelId(onUserPress[20]);
    }
    return [];
  });
  let tmp17 = null != roleId;
  if (tmp17) {
    tmp17 = !channelId(onUserPress[20]).isEveryoneRoleId(guildId, roleId);
    const obj7 = channelId(onUserPress[20]);
  }
  c20 = tmp17;
  const items8 = [guildId, roleId, tmp17, hasQuery, queryResults];
  memo1 = flag2.useMemo(() => {
    if (c20) {
      if (hasQuery) {
        let found = queryResults.filter((record) => {
          const member = groups.getMember(outer1_1, record.record.id);
          let found;
          if (null != member) {
            const roles = member.roles;
            if (null != roles) {
              found = roles.find((arg0) => arg0 === outer2_2);
            }
          }
          return null != found;
        });
      }
      return found;
    }
    found = queryResults;
  }, items8);
  const items9 = [groups, memo1, tmp17];
  const items10 = [tmp17, stateFromStoresArray, memo1, hasQuery, guildId, rows, groups, memo, onUserPress, flag2, channelId, stateFromStores1, onUserLongPress, analyticsLocations, isNameplatedList, canShowDisplayNameStylesFont];
  const callback2 = flag2.useCallback((arg0) => {
    let count;
    let title;
    if (memo1.length > 0) {
      let obj = { type: "section" };
      obj = {};
      const intl = channelId(onUserPress[23]).intl;
      obj.title = intl.string(channelId(onUserPress[23]).t["zkoeq/"]);
      obj.props = obj;
      return obj;
    } else if (!c20) {
      ({ title, count } = groups[arg0]);
      if (null != title) {
        if (0 !== count) {
          if (tmp3 === ref1.UNKNOWN) {
            const obj1 = { type: "placeholder" };
            obj = obj1;
          } else {
            obj = { type: "section" };
            const obj2 = {};
            const _HermesInternal = HermesInternal;
            obj2.title = "" + title + " \u2014 " + count;
            obj.props = obj2;
          }
          return obj;
        }
      }
    }
  }, items9);
  obj = {};
  let tmp24 = null;
  const callback3 = flag2.useCallback((arg0, guildId) => {
    let comparator;
    let guildMember;
    let closure_0 = arg0;
    let closure_1 = guildId;
    function getIndex(arg0) {
      if (!outer1_20) {
        if (!outer1_9) {
          let num = 0;
          let num2 = 0;
          let num3 = 0;
          if (0 < closure_0) {
            do {
              let tmp3 = outer1_11;
              num2 = num2 + outer1_11[num3].count;
              num3 = num3 + 1;
              let tmp4 = closure_0;
              num = num2;
            } while (num3 < closure_0);
          }
          return num + closure_1;
        }
      }
      return closure_1;
    }
    if (c20) {
      if (!hasQuery) {
        if (guildId < stateFromStoresArray.length) {
          let user = stateFromStores1.getUser(tmp5.userId);
          if (null != user) {
            let obj = { user, guildMember: tmp5, end: guildId === stateFromStoresArray.length - 1 };
            let tmp3 = obj;
          }
        }
      }
      if (null != tmp3) {
        user = tmp3.user;
        const memberListMember = tmp3.memberListMember;
        ({ guildMember, comparator } = tmp3);
        obj = { type: "user" };
        obj = { type: memo.NONE, user };
        let nick;
        if (null != memberListMember) {
          nick = memberListMember.nick;
        }
        if (null == nick) {
          if (null != comparator) {
            nick = comparator;
          }
          let nick1;
          if (null != guildMember) {
            nick1 = guildMember.nick;
          }
          comparator = nick1;
        }
        obj.nickname = nick;
        let colorString;
        if (null != memberListMember) {
          colorString = memberListMember.colorString;
        }
        if (null == colorString) {
          let colorString1;
          if (null != guildMember) {
            colorString1 = guildMember.colorString;
          }
          colorString = colorString1;
        }
        obj.usernameColor = colorString;
        let colorStrings;
        if (null != memberListMember) {
          colorStrings = memberListMember.colorStrings;
        }
        if (null == colorStrings) {
          let colorStrings1;
          if (null != guildMember) {
            colorStrings1 = guildMember.colorStrings;
          }
          colorStrings = colorStrings1;
        }
        obj.roleColors = colorStrings;
        obj.isNameplatedRow = isNameplatedList;
        let premiumSince;
        if (null != memberListMember) {
          premiumSince = memberListMember.premiumSince;
        }
        if (null == premiumSince) {
          let premiumSince1;
          if (null != guildMember) {
            premiumSince1 = guildMember.premiumSince;
          }
          premiumSince = premiumSince1;
        }
        let tmp36;
        if (null != premiumSince) {
          tmp36 = premiumSince;
        }
        obj.premiumSince = tmp36;
        if (null != memberListMember) {
          let isOwner = memberListMember.isOwner;
        } else {
          isOwner = memo === user.id;
        }
        obj.isOwner = isOwner;
        obj.guildId = closure_1;
        obj.canShowDisplayNameStylesFont = canShowDisplayNameStylesFont;
        obj.onPress = function onPress(user) {
          if (null != memberListMember) {
            let obj = { user, index: getIndex() };
            memberListMember(obj);
          }
          if (outer1_5) {
            obj = { userId: user.id, channelId: closure_0 !== canShowDisplayNameStylesFont ? closure_0 : outer1_14 };
            let colorRoleId;
            if (null != memberListMember) {
              colorRoleId = memberListMember.colorRoleId;
            }
            obj.roleId = colorRoleId;
            obj.sourceAnalyticsLocations = outer1_8;
            guildId(onUserPress[24])(obj);
            const tmp6 = guildId(onUserPress[24]);
          }
        };
        obj.onLongPress = (() => null != getIndex ? (() => getIndex({ user: outer1_2, index: outer1_4() })) : undefined)();
        obj.start = tmp23;
        obj.end = tmp3.end;
        obj.props = obj;
        return obj;
      } else {
        const obj1 = { type: "placeholder" };
        const obj2 = { start: tmp23, end: guildId === groups[arg0].count - 1 };
        obj1.props = obj2;
        return obj1;
      }
    }
    if (hasQuery) {
      let tmp16;
      const diff = memo1.length - 1;
      if (guildId < memo1.length) {
        tmp16 = memo1[guildId];
      }
      if (null != tmp16) {
        const record = tmp16.record;
        const member = groups.getMember(closure_1, record.id);
        if (null != member) {
          const obj3 = { user: record, guildMember: member };
          comparator = undefined;
          if (!c20) {
            comparator = tmp16.comparator;
          }
          obj3.comparator = comparator;
          obj3.end = guildId === diff;
          tmp3 = obj3;
        }
      }
    } else {
      const tmp12 = rows[groups[arg0].index + 1 + guildId];
      if (null != tmp12) {
        if (tmp12.type === analyticsLocations.MEMBER) {
          const obj4 = { user: tmp12.user, memberListMember: tmp12, end: guildId === groups[arg0].count - 1 };
          tmp3 = obj4;
        }
      }
    }
  }, items10);
  if (flag) {
    obj1 = {};
    obj2 = {};
    obj3 = { marginHorizontal: guildId(onUserPress[25]).space.PX_16 };
    obj2.style = obj3;
    let obj4 = { size: "md", onChange: onChangeText, ref: searchBarRef };
    obj2.children = ref2(channelId(onUserPress[26]).SearchField, obj4);
    const items11 = [ref2(isNameplatedList, obj2), searchBarEmptyState];
    obj1.children = items11;
    tmp24 = stateFromStoresArray(c18, obj1);
  }
  const items12 = [tmp24, ];
  obj5 = { ref };
  if (tmp17) {
    if (!hasQuery) {
      const items13 = [stateFromStoresArray.length];
      obj5.sections = items13;
      obj5.getItemProps = callback3;
      obj5.getSectionProps = callback2;
      obj5.renderListHeader = listActionRenderer;
      obj5.listHeaderSize = listActionHeight;
      obj5.onLayout = callback;
      obj5.onScroll = callback1;
      obj5.disableStickySections = disableStickySections;
      obj5.inActionSheet = inActionSheet;
      obj5.disableThemedGradient = disableThemedGradient;
      obj5.listStyleOverride = listStyleOverride;
      obj5.disableBottomSafeZone = disableBottomSafeZone;
      obj5.insetEnd = insetEnd;
      let str2 = "guild-channel-user-list";
      if (hasQuery) {
        str2 = "guild-channel-user-list-search-results";
      }
      items12[1] = ref2(tmp33, obj5, str2);
      obj.children = items12;
      return stateFromStoresArray(c18, obj);
    }
  }
  if (hasQuery) {
    memo1 = [];
    memo1[0] = memo1.length;
    let mapped = memo1;
  } else {
    groups = stateFromStoresObject.groups;
    mapped = groups.map((count) => count.count);
  }
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/GuildChannelUserList.tsx");

export default memoResult;
