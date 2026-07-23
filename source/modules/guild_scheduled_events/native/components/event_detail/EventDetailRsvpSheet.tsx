// Module ID: 12205
// Function ID: 95401
// Name: EmptyDisplay
// Dependencies: [31, 27, 4217, 1849, 482, 33, 4130, 689, 5052, 7491, 12206, 4126, 1212, 7495, 5085, 5464, 566, 1273, 9429, 3969, 8492, 12207, 5189, 5586, 2]

// Module 12205 (EmptyDisplay)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { Fonts } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_7;
let closure_8;
const require = arg1;
function EmptyDisplay(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  let obj = {};
  const items = [callback3().emptyDisplayContainer, style];
  obj.style = items;
  obj = { icon: importDefault(12206) };
  const items1 = [callback(importDefault(7491), obj), children];
  obj.children = items1;
  return callback2(View, obj);
}
function FetchErrorDisplay(style) {
  let obj = { style: style.style };
  obj = { style: callback3().emptyDisplayTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.obChXk);
  obj.children = callback(require(4126) /* Text */.Text, obj);
  return callback(EmptyDisplay, obj);
}
function NoUsersDisplay(style) {
  let obj = { style: style.style };
  obj = { style: callback3().emptyDisplayTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.hW0mBR);
  obj.children = callback(require(4126) /* Text */.Text, obj);
  return callback(EmptyDisplay, obj);
}
function RemainingUsersRow(remainingUsersGroup) {
  const tmp = callback3();
  let obj = { DEPRECATED_style: tmp.userListRow };
  obj = { style: tmp.remainingUsersIconContainer };
  obj = { source: importDefault(12206), style: tmp.remainingUsersIcon };
  obj.children = callback(importDefault(5085), obj);
  obj.leading = callback(View, obj);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.BdQTfR, { userRemainCount: remainingUsersGroup.remainingUsersGroup.count });
  return callback(require(7495) /* Form */.FormRow, obj, "userRemaining");
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
    ({ contentHeight, safeBottomPadding } = global);
    class StaticMessageContainer {
      constructor(arg0) {
        tmp = outer1_9();
        obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false };
        items = [, ];
        items[0] = tmp.staticMessageContentContainer;
        obj = { minHeight: contentHeight };
        items[1] = obj;
        obj.children = outer1_7(outer1_4, { style: items, children: global.children });
        return outer1_7(require("BottomSheetModal").BottomSheetScrollView, obj);
      }
    }
    ({ loading, error } = global);
    tmp = c9();
    items = [];
    items[0] = guildId;
    callback = closure_3.useCallback((item) => {
      item = item.item;
      let obj = guildId(outer1_2[21]);
      if (obj.isRemainingUsersGroup(item)) {
        obj = { remainingUsersGroup: item };
        let tmpResult = tmp(outer1_14, obj);
      } else {
        obj = { eventUser: item, guildId };
        tmpResult = tmp(outer1_10, obj);
      }
      return tmpResult;
    }, items);
    if (loading) {
      num = 0;
      if (0 === userListItems.length) {
        tmp12 = jsx;
        obj = {};
        tmp13 = guildId;
        tmp14 = closure_2;
        num4 = 23;
        obj1 = {};
        class StaticMessageContainer {
          constructor(arg0) {
            tmp = outer1_9();
            obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false };
            items = [, ];
            items[0] = tmp.staticMessageContentContainer;
            obj = { minHeight: contentHeight };
            items[1] = obj;
            obj.children = outer1_7(outer1_4, { style: items, children: global.children });
            return outer1_7(require("BottomSheetModal").BottomSheetScrollView, obj);
          }
        }
        tmp15[0] = tmp.staticMessageContent;
        tmp15[1] = { paddingBottom: safeBottomPadding };
        obj1.style = tmp15;
        obj.children = jsx(require("ActivityIndicator").ActivityIndicator, obj1);
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
          tmp = outer1_9();
          obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false };
          items = [, ];
          items[0] = tmp.staticMessageContentContainer;
          obj = { minHeight: contentHeight };
          items[1] = obj;
          obj.children = outer1_7(outer1_4, { style: items, children: global.children });
          return outer1_7(require("BottomSheetModal").BottomSheetScrollView, obj);
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
            tmp = outer1_9();
            obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false };
            items = [, ];
            items[0] = tmp.staticMessageContentContainer;
            obj = { minHeight: contentHeight };
            items[1] = obj;
            obj.children = outer1_7(outer1_4, { style: items, children: global.children });
            return outer1_7(require("BottomSheetModal").BottomSheetScrollView, obj);
          }
        }
        obj5.style = items2;
        obj4.children = jsx(NoUsersDisplay, obj5);
        tmp7 = jsx(StaticMessageContainer, obj4);
      } else {
        tmp3 = jsx;
        tmp4 = guildId;
        tmp5 = closure_2;
        num2 = 22;
        obj = {};
        items3 = [, ];
        class StaticMessageContainer {
          constructor(arg0) {
            tmp = outer1_9();
            obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false };
            items = [, ];
            items[0] = tmp.staticMessageContentContainer;
            obj = { minHeight: contentHeight };
            items[1] = obj;
            obj.children = outer1_7(outer1_4, { style: items, children: global.children });
            return outer1_7(require("BottomSheetModal").BottomSheetScrollView, obj);
          }
        }
        obj6 = {};
        obj6.paddingBottom = safeBottomPadding;
        items3[1] = obj6;
        obj.contentContainerStyle = items3;
        obj.data = userListItems;
        obj.renderItem = callback;
        num3 = 13;
        obj.ItemSeparatorComponent = require("Form").FormDivider;
        tmp6 = keyExtractor;
        obj.keyExtractor = keyExtractor;
        tmp7 = jsx(require("BottomSheetModal").BottomSheetFlatList, obj);
      }
    }
    return;
  }
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = { staticMessageContentContainer: { flex: 1, padding: 16 }, userList: { paddingTop: 16 }, userListRow: { paddingVertical: 8 } };
obj = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 16 };
obj.userName = obj;
obj.emptyDisplayContainer = { alignItems: "center", justifyContent: "center", minHeight: 200 };
obj.staticMessageContent = { height: "100%" };
_createForOfIteratorHelperLoose = { paddingTop: 24 };
const merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 20, { marginBottom: 8 }));
_createForOfIteratorHelperLoose["textAlign"] = "center";
obj.emptyDisplayTitle = _createForOfIteratorHelperLoose;
let obj3 = { tintColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, height: 18, width: 18 };
obj.remainingUsersIcon = obj3;
let obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: 16, height: 32, width: 32, alignItems: "center", justifyContent: "center" };
obj.remainingUsersIconContainer = obj4;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((eventUser) => {
  let isMobileOnline;
  let isVROnline;
  let status;
  eventUser = eventUser.eventUser;
  const tmp = callback3();
  analyticsLocations = analyticsLocations(5464)().analyticsLocations;
  let obj = eventUser(566);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getUser(eventUser.user_id));
  let obj1 = eventUser(566);
  const items1 = [_isNativeReflectConstruct];
  const items2 = [eventUser.user_id];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ isMobileOnline: outer1_5.isMobileOnline(eventUser.user_id), isVROnline: outer1_5.isVROnline(eventUser.user_id), status: outer1_5.getStatus(eventUser.user_id) }), items2);
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  obj = { DEPRECATED_style: tmp.userListRow };
  let tmp5 = null;
  if (null != stateFromStores) {
    obj = { user: stateFromStores, guildId: eventUser.guildId, isMobileOnline, isVROnline, status, size: eventUser(1273).AvatarSizes.REFRESH_MEDIUM_32, autoStatusCutout: true };
    tmp5 = callback(eventUser(1273).Avatar, obj);
  }
  obj.leading = tmp5;
  obj1 = { user: stateFromStores };
  const member = eventUser.member;
  let nick;
  if (null != member) {
    nick = member.nick;
  }
  if (null == nick) {
    nick = analyticsLocations(3969).getName(eventUser.user);
    const obj6 = analyticsLocations(3969);
  }
  obj1.nick = nick;
  ({ userName: obj5.usernameStyle, userName: obj5.nicknameStyle } = tmp);
  obj.label = callback(analyticsLocations(9429), obj1);
  obj.onPress = function onPress() {
    analyticsLocations(outer1_2[20])({ userId: eventUser.user_id, sourceAnalyticsLocations: analyticsLocations });
  };
  return callback(eventUser(7495).FormRow, obj, eventUser.user_id);
});
EventDetailRsvpSheet.displayName = "EventDetailRsvpSheet";
let obj2 = { marginBottom: 8 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/native/components/event_detail/EventDetailRsvpSheet.tsx");

export default EventDetailRsvpSheet;
export const UserRow = memoResult;
