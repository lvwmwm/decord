// Module ID: 10856
// Function ID: 84470
// Dependencies: []

// Module 10856
let closure_4 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ EVERYONE_CHANNEL_ID: closure_7, MemberListRowTypes: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = importDefault(dependencyMap[3]);
let closure_10 = importDefault(dependencyMap[4]);
let closure_11 = importDefault(dependencyMap[5]);
let closure_12 = importDefault(dependencyMap[6]);
let closure_13 = importDefault(dependencyMap[7]);
let closure_14 = importDefault(dependencyMap[8]);
const tmp2 = arg1(dependencyMap[3]);
({ RelationshipTypes: closure_15, StatusTypes: closure_16 } = arg1(dependencyMap[9]));
const tmp3 = arg1(dependencyMap[9]);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = arg1(dependencyMap[10]));
let closure_20 = [];
const tmp4 = arg1(dependencyMap[10]);
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
  const channelId = searchable.channelId;
  const arg1 = channelId;
  const guildId = searchable.guildId;
  const importDefault = guildId;
  const roleId = searchable.roleId;
  const importAll = roleId;
  ({ headerShown, searchableEmptyState } = searchable);
  if (headerShown === undefined) {
    headerShown = true;
  }
  const onUserPress = searchable.onUserPress;
  const dependencyMap = onUserPress;
  const onUserLongPress = searchable.onUserLongPress;
  let closure_4 = onUserLongPress;
  let flag2 = searchable.opensUserProfileOnUserPress;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const isNameplatedList = searchable.isNameplatedList;
  const View = isNameplatedList;
  ({ canShowDisplayNameStylesFont, disableStickySections, inActionSheet, disableThemedGradient, listStyleOverride, disableBottomSafeZone, insetEnd } = searchable);
  if (canShowDisplayNameStylesFont === undefined) {
    canShowDisplayNameStylesFont = false;
  }
  let analyticsLocations;
  let closure_9;
  let closure_10;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_14;
  let memo;
  let ref1;
  let ref2;
  let tmp10;
  let stateFromStoresArray;
  let closure_20;
  let memo1;
  analyticsLocations = importDefault(dependencyMap[15])().analyticsLocations;
  const ref = flag2.useRef(null);
  let obj = { guildId, listRef: ref, searchable: flag, searchableEmptyState };
  const tmp2 = function useSearchableConfig(guildId) {
    guildId = guildId.guildId;
    const channelId = guildId;
    const listRef = guildId.listRef;
    guildId = listRef;
    const searchable = guildId.searchable;
    const roleId = searchable;
    const searchableEmptyState = guildId.searchableEmptyState;
    const onUserPress = searchableEmptyState;
    const ref = flag2.useRef(null);
    const onUserLongPress = ref;
    const tmp2 = onUserLongPress(flag2.useState(""), 2);
    let closure_6 = tmp2[1];
    const tmp3 = onUserLongPress(tmp2[0].useState(tmp17), 2);
    const first = tmp3[0];
    const canShowDisplayNameStylesFont = first;
    let closure_8 = tmp3[1];
    const first1 = onUserLongPress(flag2.useState(() => {
      let tmp = listRef(searchableEmptyState[11]);
      const items = [guildId(searchableEmptyState[11]).AutocompleterResultTypes.USER];
      let obj = { userFilters: obj };
      obj = { guild: guildId, strict: true };
      tmp = new tmp((arg0, str) => {
        if ("" === str.trim()) {
          callback(closure_20);
        } else {
          callback(arg0);
        }
      }, items, undefined, obj);
      return tmp;
    }), 1)[0];
    const hasQuery = first1;
    const items = [searchable, first1];
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
    const tmp7 = "" !== tmp2[0].trim();
    const tmp8 = onUserLongPress(tmp2[0].useState(searchable), 2);
    const first2 = tmp8[0];
    const groups = first2;
    let closure_12 = tmp8[1];
    const items1 = [first, tmp7];
    const effect1 = flag2.useEffect(() => {
      if (first.length <= 0) {
        if (tmp7) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            callback(false);
          }, 300);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
      callback2(true);
    }, items1);
    const items2 = [listRef, tmp2[0]];
    const layoutEffect = flag2.useLayoutEffect(() => {
      const current = listRef.current;
      if (null != current) {
        current.scrollToTop(false);
      }
    }, items2);
    const items3 = [first1, guildId];
    const items4 = [searchable, searchableEmptyState, first2, tmp2[0]];
    const callback = flag2.useCallback((str) => {
      first1.search(str);
      callback(str);
      if ("" !== str.trim()) {
        const members = listRef(searchableEmptyState[12]).requestMembers(guildId, str);
        const obj = listRef(searchableEmptyState[12]);
      }
    }, items3);
    return {
      hasQuery: tmp7,
      queryResults: first,
      onChangeText: callback,
      searchBarRef: ref,
      searchBarEmptyState: tmp2[0].useMemo(() => {
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
  }(obj);
  const hasQuery = tmp2.hasQuery;
  closure_9 = hasQuery;
  closure_10 = queryResults;
  ({ onChangeText, searchBarRef, searchBarEmptyState } = tmp2);
  let obj1 = arg1(dependencyMap[16]);
  const items = [closure_9];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => {
    let tmp3 = null;
    if (channelId !== canShowDisplayNameStylesFont) {
      tmp3 = channelId;
    }
    return hasQuery.getProps(guildId, tmp3);
  });
  let groups = stateFromStoresObject.groups;
  closure_11 = groups;
  const rows = stateFromStoresObject.rows;
  closure_12 = rows;
  let obj2 = arg1(dependencyMap[16]);
  const items1 = [closure_10];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    if (channelId !== canShowDisplayNameStylesFont) {
      return queryResults.getChannel(channelId);
    }
  });
  closure_13 = stateFromStores;
  let obj3 = arg1(dependencyMap[16]);
  const items2 = [closure_13];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => stateFromStores.getChannelId());
  closure_14 = stateFromStores1;
  const items3 = [guildId];
  memo = importAllResult.useMemo(() => {
    const guild = rows.getGuild(guildId);
    let guildVisualOwnerId;
    if (null != guild) {
      guildVisualOwnerId = roleId(onUserPress[18]).getGuildVisualOwnerId(guild);
      const obj = roleId(onUserPress[18]);
    }
    return guildVisualOwnerId;
  }, items3);
  ref1 = importAllResult.useRef(0);
  ref2 = importAllResult.useRef(0);
  tmp10 = function useThrottledUpdateSubscription(guildId) {
    guildId = guildId.guildId;
    let channelId = guildId;
    channelId = guildId.channelId;
    guildId = channelId;
    const hasQuery = guildId.hasQuery;
    const roleId = hasQuery;
    const listRef = guildId.listRef;
    const onUserPress = listRef;
    const scrollOffsetRef = guildId.scrollOffsetRef;
    const onUserLongPress = scrollOffsetRef;
    const heightRef = guildId.heightRef;
    const scaledRowHeight = guildId.scaledRowHeight;
    const isNameplatedList = scaledRowHeight;
    const items = [channelId, guildId, hasQuery, scaledRowHeight, heightRef, listRef, scrollOffsetRef];
    return heightRef.useMemo(() => channelId(listRef[13])(() => {
      let tmp = null == ref.current || closure_2;
      if (!tmp) {
        let tmp4 = closure_1 !== closure_7;
        if (tmp4) {
          tmp4 = null == channel.getChannel(closure_1);
        }
        tmp = tmp4;
      }
      if (!tmp) {
        let obj = callback(ref[14]);
        obj = { guildId: callback, channelId: closure_1, y: ref2.current, height: ref3.current, rowHeight: closure_6 };
        const result = obj.subscribeChannelDimensions(obj);
      }
    }, 50), items);
  }({ guildId, channelId, hasQuery, listRef: ref, scrollOffsetRef: ref2, heightRef: ref1, scaledRowHeight: importDefault(dependencyMap[17])() });
  const items4 = [tmp10];
  const items5 = [tmp10];
  const callback = importAllResult.useCallback((nativeEvent) => {
    ref1.current = nativeEvent.nativeEvent.layout.height;
    tmp10();
  }, items4);
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    ref2.current = nativeEvent.nativeEvent.contentOffset.y;
    tmp10();
  }, items5);
  obj = { channel: stateFromStores };
  let tmp14 = hasQuery;
  const tmp6 = importDefault(dependencyMap[17])();
  if (!hasQuery) {
    tmp14 = !headerShown;
  }
  obj.disable = tmp14;
  const tmp13 = importDefault(dependencyMap[19]);
  const items6 = [stateFromStores, tmp10];
  ({ listActionRenderer, listActionHeight } = importDefault(dependencyMap[19])(obj));
  const effect = importAllResult.useEffect(() => {
    if (null != stateFromStores) {
      tmp10();
    }
  }, items6);
  let obj5 = arg1(dependencyMap[16]);
  const items7 = [closure_11, closure_14];
  stateFromStoresArray = obj5.useStateFromStoresArray(items7, () => {
    if (null != roleId) {
      if (!obj2.isEveryoneRoleId(guildId, roleId)) {
        let tmp3 = null;
        if (channelId !== canShowDisplayNameStylesFont) {
          tmp3 = channelId;
        }
        const channelId = tmp3;
        const members = groups.getMembers(guildId);
        const found = members.filter((roles) => {
          roles = roles.roles;
          let hasItem = roles.includes(closure_2);
          if (hasItem) {
            hasItem = null != authStore.getUser(roles.userId);
          }
          return hasItem;
        });
        return found.sort((userId, userId2) => {
          const user = authStore.getUser(userId.userId);
          const user1 = authStore.getUser(userId2.userId);
          let nickname = callback(closure_3[21]).getNickname(callback, tmp3, user);
          if (null == nickname) {
            nickname = callback(closure_3[22]).getGlobalName(user);
            const obj2 = callback(closure_3[22]);
          }
          const obj = callback(closure_3[21]);
          let nickname1 = callback(closure_3[21]).getNickname(callback, tmp3, user1);
          if (null == nickname1) {
            nickname1 = callback(closure_3[22]).getGlobalName(user1);
            const obj4 = callback(closure_3[22]);
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
      const obj2 = channelId(onUserPress[20]);
    }
    return [];
  });
  let tmp17 = null != roleId;
  if (tmp17) {
    tmp17 = !arg1(dependencyMap[20]).isEveryoneRoleId(guildId, roleId);
    const obj7 = arg1(dependencyMap[20]);
  }
  closure_20 = tmp17;
  const items8 = [guildId, roleId, tmp17, hasQuery, tmp2.queryResults];
  memo1 = importAllResult.useMemo(() => {
    if (tmp17) {
      if (hasQuery) {
        let found = queryResults.filter((record) => {
          const member = member.getMember(closure_1, record.record.id);
          let found;
          if (null != member) {
            const roles = member.roles;
            if (null != roles) {
              found = roles.find((arg0) => arg0 === closure_2);
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
  const callback2 = importAllResult.useCallback((arg0) => {
    let count;
    let title;
    if (memo1.length > 0) {
      let obj = { type: "section" };
      obj = {};
      const intl = channelId(onUserPress[23]).intl;
      obj.title = intl.string(channelId(onUserPress[23]).t.zkoeq/);
      obj.props = obj;
      return obj;
    } else if (!tmp17) {
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
  const callback3 = importAllResult.useCallback((arg0, guildId) => {
    let comparator;
    let guildMember;
    const channelId = arg0;
    function getIndex(arg0) {
      if (!closure_20) {
        if (!closure_9) {
          let num = 0;
          let num2 = 0;
          let num3 = 0;
          if (0 < arg0) {
            do {
              let tmp3 = closure_11;
              num2 = num2 + closure_11[num3].count;
              num3 = num3 + 1;
              let tmp4 = closure_0;
              num = num2;
            } while (num3 < closure_0);
          }
          return num + arg1;
        }
      }
      return arg1;
    }
    if (tmp17) {
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
        const roleId = user;
        const memberListMember = tmp3.memberListMember;
        const onUserPress = memberListMember;
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
        obj.guildId = guildId;
        obj.canShowDisplayNameStylesFont = canShowDisplayNameStylesFont;
        obj.onPress = function onPress(user) {
          if (null != memberListMember) {
            let obj = { user, index: getIndex() };
            memberListMember(obj);
          }
          if (closure_5) {
            obj = { userId: user.id, channelId: user !== closure_7 ? user : closure_14 };
            let colorRoleId;
            if (null != memberListMember) {
              colorRoleId = memberListMember.colorRoleId;
            }
            obj.roleId = colorRoleId;
            obj.sourceAnalyticsLocations = closure_8;
            arg1(memberListMember[24])(obj);
            const tmp6 = arg1(memberListMember[24]);
          }
        };
        obj.onLongPress = () => null != getIndex ? () => callback({ user: closure_2, index: callback() }) : undefined();
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
        const member = groups.getMember(guildId, record.id);
        if (null != member) {
          const obj3 = { user: record, guildMember: member };
          comparator = undefined;
          if (!tmp17) {
            comparator = tmp16.comparator;
          }
          obj3.comparator = comparator;
          obj3.end = guildId === diff;
          tmp3 = obj3;
        }
      }
    } else if (null != rows[closure_11[arg0].index + 1 + guildId]) {
      if (tmp12.type === analyticsLocations.MEMBER) {
        const obj4 = { user: tmp12.user, memberListMember: tmp12, end: guildId === groups[arg0].count - 1 };
        tmp3 = obj4;
      }
    }
  }, items10);
  if (flag) {
    obj1 = {};
    obj2 = {};
    obj3 = { marginHorizontal: importDefault(dependencyMap[25]).space.PX_16 };
    obj2.style = obj3;
    const obj4 = { size: "md", onChange: onChangeText, ref: searchBarRef };
    obj2.children = ref2(arg1(dependencyMap[26]).SearchField, obj4);
    const items11 = [ref2(View, obj2), searchBarEmptyState];
    obj1.children = items11;
    tmp24 = stateFromStoresArray(tmp10, obj1);
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
      return stateFromStoresArray(tmp10, obj);
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
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/GuildChannelUserList.tsx");

export default memoResult;
