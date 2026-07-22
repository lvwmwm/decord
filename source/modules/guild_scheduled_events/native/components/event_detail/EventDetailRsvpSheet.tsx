// Module ID: 12091
// Function ID: 93250
// Name: EmptyDisplay
// Dependencies: []

// Module 12091 (EmptyDisplay)
function EmptyDisplay(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  let obj = {};
  const items = [callback3().emptyDisplayContainer, style];
  obj.style = items;
  obj = { icon: importDefault(dependencyMap[10]) };
  const items1 = [callback(importDefault(dependencyMap[9]), obj), children];
  obj.children = items1;
  return callback2(View, obj);
}
function FetchErrorDisplay(style) {
  let obj = { style: style.style };
  obj = { "Null": false, "Null": 0, alignItems: 4, style: callback3().emptyDisplayTitle };
  const intl = arg1(dependencyMap[12]).intl;
  obj.children = intl.string(arg1(dependencyMap[12]).t.obChXk);
  obj.children = callback(arg1(dependencyMap[11]).Text, obj);
  return callback(EmptyDisplay, obj);
}
function NoUsersDisplay(style) {
  let obj = { style: style.style };
  obj = { "Null": false, "Null": 0, alignItems: 4, style: callback3().emptyDisplayTitle };
  const intl = arg1(dependencyMap[12]).intl;
  obj.children = intl.string(arg1(dependencyMap[12]).t.hW0mBR);
  obj.children = callback(arg1(dependencyMap[11]).Text, obj);
  return callback(EmptyDisplay, obj);
}
function RemainingUsersRow(remainingUsersGroup) {
  const tmp = callback3();
  let obj = { DEPRECATED_style: tmp.userListRow };
  obj = { style: tmp.remainingUsersIconContainer };
  obj = { source: importDefault(dependencyMap[10]), style: tmp.remainingUsersIcon };
  obj.children = callback(importDefault(dependencyMap[14]), obj);
  obj.leading = callback(View, obj);
  const intl = arg1(dependencyMap[12]).intl;
  obj.label = intl.formatToPlainString(arg1(dependencyMap[12]).t.BdQTfR, { userRemainCount: remainingUsersGroup.remainingUsersGroup.count });
  return callback(arg1(dependencyMap[13]).FormRow, obj, "userRemaining");
}
function keyExtractor(count) {
  if (obj.isRemainingUsersGroup(count)) {
    const _HermesInternal = HermesInternal;
    let user_id = "RemainingUsersGroup-" + count.count;
  } else {
    user_id = count.user_id;
  }
  return user_id;
}
class EventDetailRsvpSheet {
  constructor(arg0) {
    ({ userListItems, guildId } = global);
    arg1 = guildId;
    ({ contentHeight: closure_1, safeBottomPadding } = global);
    class StaticMessageContainer {
      constructor(arg0) {
        tmp = closure_9();
        obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false };
        items = [, ];
        items[0] = tmp.staticMessageContentContainer;
        obj = { minHeight: contentHeight };
        items[1] = obj;
        obj.children = closure_7(closure_4, { style: items, children: global.children });
        return closure_7(guildId(closure_2[22]).BottomSheetScrollView, obj);
      }
    }
    ({ loading, error } = global);
    tmp = closure_9();
    items = [];
    items[0] = guildId;
    callback = closure_3.useCallback((item) => {
      item = item.item;
      let obj = guildId(closure_2[21]);
      if (obj.isRemainingUsersGroup(item)) {
        obj = { remainingUsersGroup: item };
        let tmpResult = tmp(closure_14, obj);
      } else {
        obj = { eventUser: item, guildId };
        tmpResult = tmp(closure_10, obj);
      }
      return tmpResult;
    }, items);
    if (loading) {
      num = 0;
      if (0 === userListItems.length) {
        tmp12 = jsx;
        obj = {};
        tmp13 = arg1;
        tmp14 = dependencyMap;
        num4 = 23;
        obj1 = {};
        class StaticMessageContainer {
          constructor(arg0) {
            tmp = closure_9();
            obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false };
            items = [, ];
            items[0] = tmp.staticMessageContentContainer;
            obj = { minHeight: contentHeight };
            items[1] = obj;
            obj.children = closure_7(closure_4, { style: items, children: global.children });
            return closure_7(guildId(closure_2[22]).BottomSheetScrollView, obj);
          }
        }
        tmp15[0] = tmp.staticMessageContent;
        tmp15[1] = { paddingBottom: safeBottomPadding };
        obj1.style = tmp15;
        obj.children = jsx(arg1(dependencyMap[23]).ActivityIndicator, obj1);
        tmp7 = jsx(StaticMessageContainer, obj);
      }
      return tmp7;
    }
    if (null != error) {
      tmp10 = jsx;
      obj2 = {};
      tmp11 = FetchErrorDisplay;
      obj3 = {};
      items1 = [, ];
      items1[0] = tmp.staticMessageContent;
      class StaticMessageContainer {
        constructor(arg0) {
          tmp = closure_9();
          obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false };
          items = [, ];
          items[0] = tmp.staticMessageContentContainer;
          obj = { minHeight: contentHeight };
          items[1] = obj;
          obj.children = closure_7(closure_4, { style: items, children: global.children });
          return closure_7(guildId(closure_2[22]).BottomSheetScrollView, obj);
        }
      }
      obj3.style = items1;
      obj2.children = jsx(FetchErrorDisplay, obj3);
      tmp7 = jsx(StaticMessageContainer, obj2);
    } else {
      num5 = 0;
      if (0 === userListItems.length) {
        tmp8 = jsx;
        obj4 = {};
        tmp9 = NoUsersDisplay;
        obj5 = {};
        items2 = [, ];
        items2[0] = tmp.staticMessageContent;
        class StaticMessageContainer {
          constructor(arg0) {
            tmp = closure_9();
            obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false };
            items = [, ];
            items[0] = tmp.staticMessageContentContainer;
            obj = { minHeight: contentHeight };
            items[1] = obj;
            obj.children = closure_7(closure_4, { style: items, children: global.children });
            return closure_7(guildId(closure_2[22]).BottomSheetScrollView, obj);
          }
        }
        obj5.style = items2;
        obj4.children = jsx(NoUsersDisplay, obj5);
        tmp7 = jsx(StaticMessageContainer, obj4);
      } else {
        tmp3 = jsx;
        tmp4 = arg1;
        tmp5 = dependencyMap;
        num2 = 22;
        obj = {};
        items3 = [, ];
        class StaticMessageContainer {
          constructor(arg0) {
            tmp = closure_9();
            obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false };
            items = [, ];
            items[0] = tmp.staticMessageContentContainer;
            obj = { minHeight: contentHeight };
            items[1] = obj;
            obj.children = closure_7(closure_4, { style: items, children: global.children });
            return closure_7(guildId(closure_2[22]).BottomSheetScrollView, obj);
          }
        }
        obj6 = {};
        obj6.paddingBottom = safeBottomPadding;
        items3[1] = obj6;
        obj.contentContainerStyle = items3;
        obj.data = userListItems;
        obj.renderItem = callback;
        num3 = 13;
        obj.ItemSeparatorComponent = arg1(dependencyMap[13]).FormDivider;
        tmp6 = keyExtractor;
        obj.keyExtractor = keyExtractor;
        tmp7 = jsx(arg1(dependencyMap[22]).BottomSheetFlatList, obj);
      }
    }
    return;
  }
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const Fonts = arg1(dependencyMap[4]).Fonts;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[5]));
let obj1 = arg1(dependencyMap[6]);
let obj = { staticMessageContentContainer: { backgroundColor: "vertical", paddingVertical: false }, userList: { paddingTop: 16 }, userListRow: { paddingVertical: 8 } };
obj = { color: importDefault(dependencyMap[7]).colors.TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 16 };
obj.userName = obj;
obj.emptyDisplayContainer = { -54378: null, 0: null, 0: null };
obj.staticMessageContent = { height: "100%" };
obj1 = { paddingTop: 24 };
const tmp2 = arg1(dependencyMap[5]);
const merged = Object.assign(importDefault(dependencyMap[8])(Fonts.DISPLAY_EXTRABOLD, importDefault(dependencyMap[7]).colors.MOBILE_TEXT_HEADING_PRIMARY, 20, { marginBottom: 8 }));
obj1["textAlign"] = "center";
obj.emptyDisplayTitle = obj1;
const obj3 = { "Null": "never", "Null": true, -28220831: "compatibility", tintColor: importDefault(dependencyMap[7]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.remainingUsersIcon = obj3;
const importDefaultResult = importDefault(dependencyMap[8]);
const obj2 = { marginBottom: 8 };
obj.remainingUsersIconContainer = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWEST };
let closure_9 = obj1.createStyles(obj);
const memoResult = importAllResult.memo((eventUser) => {
  let isMobileOnline;
  let isVROnline;
  let status;
  eventUser = eventUser.eventUser;
  const arg1 = eventUser;
  const tmp = callback3();
  const importDefault = importDefault(dependencyMap[15])().analyticsLocations;
  let obj = arg1(dependencyMap[16]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => user.getUser(eventUser.user_id));
  let obj1 = arg1(dependencyMap[16]);
  const items1 = [closure_5];
  const items2 = [eventUser.user_id];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ isMobileOnline: closure_5.isMobileOnline(eventUser.user_id), isVROnline: closure_5.isVROnline(eventUser.user_id), status: closure_5.getStatus(eventUser.user_id) }), items2);
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  obj = { DEPRECATED_style: tmp.userListRow };
  let tmp5 = null;
  if (null != stateFromStores) {
    obj = { user: stateFromStores, guildId: eventUser.guildId, isMobileOnline, isVROnline, status, size: arg1(dependencyMap[17]).AvatarSizes.REFRESH_MEDIUM_32, autoStatusCutout: true };
    tmp5 = callback(arg1(dependencyMap[17]).Avatar, obj);
  }
  obj.leading = tmp5;
  obj1 = { user: stateFromStores };
  const member = eventUser.member;
  let nick;
  if (null != member) {
    nick = member.nick;
  }
  if (null == nick) {
    nick = importDefault(dependencyMap[19]).getName(eventUser.user);
    const obj6 = importDefault(dependencyMap[19]);
  }
  obj1.nick = nick;
  ({ userName: obj5.usernameStyle, userName: obj5.nicknameStyle } = tmp);
  obj.label = callback(importDefault(dependencyMap[18]), obj1);
  obj.onPress = function onPress() {
    analyticsLocations(closure_2[20])({ userId: eventUser.user_id, sourceAnalyticsLocations: analyticsLocations });
  };
  return callback(arg1(dependencyMap[13]).FormRow, obj, eventUser.user_id);
});
EventDetailRsvpSheet.displayName = "EventDetailRsvpSheet";
const obj4 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWEST };
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/guild_scheduled_events/native/components/event_detail/EventDetailRsvpSheet.tsx");

export default EventDetailRsvpSheet;
export const UserRow = memoResult;
