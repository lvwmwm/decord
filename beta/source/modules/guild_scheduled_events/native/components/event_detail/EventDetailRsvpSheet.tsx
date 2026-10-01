// Module ID: 9092
// Function ID: 9093
// Name: EventDetailRsvpSheet
// Dependencies: [19, 17, 4876, 1372, 1085, 21, 4836, 576, 5836, 7855, 9093, 4832, 1115, 8053, 5899, 6583, 504, 1177, 9094, 4678, 7624, 9095, 6045, 5889, 2]

// Module 9092 (EventDetailRsvpSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import FastImageDefault from "FastImage" /* 5899 */;
import BottomSheetModal from "BottomSheetModal" /* 6045 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import StageSparkleDefault from "StageSparkle" /* 7855 */;
import Form from "Form" /* 8053 */;
import AssetRegistryDefault from "AssetRegistry" /* 9093 */;
import EventDetailTypes from "EventDetailTypes" /* 9095 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles from "TextStyles" /* 5836 */;
import size_mod from "module_2" /* 2 */;

let eventUser, item;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
let size1;
function EmptyDisplay(arg0) {
  let children;
  let items;
  let items1;
  let style;
  ({ children, style } = arg0);
  const obj = { style: items, children: items1 };
  items = [closure_9().emptyDisplayContainer, style];
  const obj2 = { icon: AssetRegistryDefault };
  const tmp = StageSparkleDefault;
  items1 = [metroImportDefault(tmp, obj2), children];
  return metroImportAll(View, obj);
}
function FetchErrorDisplay(style) {
  let Text;
  let intl;
  let obj2;
  const obj = { style: style.style, children: metroImportDefault(Text, obj2) };
  obj2 = { style: closure_9().emptyDisplayTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl2.t.obChXk) };
  Text = Text_Text.Text;
  intl = intl2.intl;
  return metroImportDefault(EmptyDisplay, obj);
}
function NoUsersDisplay(style) {
  let Text;
  let intl;
  let obj2;
  const obj = { style: style.style, children: metroImportDefault(Text, obj2) };
  obj2 = { style: closure_9().emptyDisplayTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl2.t.hW0mBR) };
  Text = Text_Text.Text;
  intl = intl2.intl;
  return metroImportDefault(EmptyDisplay, obj);
}
function RemainingUsersRow(remainingUsersGroup) {
  let intl;
  let obj2;
  let obj3;
  let obj4;
  let tmp2;
  remainingUsersGroup = remainingUsersGroup.remainingUsersGroup;
  const tmp = closure_9();
  const obj = { DEPRECATED_style: tmp.userListRow, leading: metroImportDefault(View, obj2), label: intl.formatToPlainString(intl2.t.BdQTfR, obj4) };
  obj2 = { style: tmp.remainingUsersIconContainer, children: metroImportDefault(tmp2, obj3) };
  const FormRow = Form.FormRow;
  obj3 = { source: AssetRegistryDefault, style: tmp.remainingUsersIcon };
  tmp2 = FastImageDefault;
  intl = intl2.intl;
  obj4 = { userRemainCount: remainingUsersGroup.count };
  return metroImportDefault(FormRow, obj, "userRemaining");
}
function keyExtractor(count) {
  let user_id;
  const obj = EventDetailTypes;
  if (obj.isRemainingUsersGroup(count)) {
    const _HermesInternal = HermesInternal;
    user_id = "RemainingUsersGroup-" + count.count;
  } else {
    user_id = count.user_id;
  }
  return user_id;
}
class EventDetailRsvpSheet {
  constructor(arg0) {
    let error;
    let guildId;
    let items1;
    let items2;
    let items3;
    let items4;
    let loading;
    let minHeight;
    let obj3;
    let obj5;
    let obj7;
    let safeBottomPadding;
    let tmp8;
    let userListItems;
    ({ userListItems, guildId } = arg0);
    ({ contentHeight: importDefault, safeBottomPadding } = arg0);
    class StaticMessageContainer {
      constructor(children) {
        let items;
        let obj2;
        children = children.children;
        const tmp = closure_9();
        const obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: metroImportDefault(View, obj2) };
        obj2 = { style: items, children };
        items = [tmp.staticMessageContentContainer, ];
        const obj3 = { minHeight: importDefault };
        items[1] = obj3;
        const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
        return metroImportDefault(BottomSheetScrollView, obj);
      }
    }
    ({ loading, error } = arg0);
    let tmp = closure_9();
    let items = [guildId];
    const callback = react.useCallback((item) => {
      let tmpResult;
      item = item.item;
      const obj = EventDetailTypes;
      if (obj.isRemainingUsersGroup(item)) {
        const obj2 = { remainingUsersGroup: item };
        tmpResult = tmp(RemainingUsersRow, obj2);
      } else {
        const obj3 = { eventUser: item, guildId };
        tmpResult = tmp(memoResult, obj3);
      }
      return tmpResult;
    }, items);
    if (loading) {
      if (0 === userListItems.length) {
        let obj2 = { children: closure_7(guildId(5889).ActivityIndicator, obj3) };
        obj3 = { style: items1 };
        items1 = [, ];
        class StaticMessageContainer {
          constructor(children) {
            let items;
            let obj2;
            children = children.children;
            const tmp = closure_9();
            const obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: metroImportDefault(View, obj2) };
            obj2 = { style: items, children };
            items = [tmp.staticMessageContentContainer, ];
            const obj3 = { minHeight: importDefault };
            items[1] = obj3;
            const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
            return metroImportDefault(BottomSheetScrollView, obj);
          }
        }
        items1[1] = { paddingBottom: safeBottomPadding };
        tmp8 = closure_7(StaticMessageContainer, obj2);
      }
      return tmp8;
    }
    if (null != error) {
      const obj4 = { children: closure_7(FetchErrorDisplay, obj5) };
      obj5 = { style: items2 };
      items2 = [tmp.staticMessageContent, ];
      class StaticMessageContainer {
        constructor(children) {
          let items;
          let obj2;
          children = children.children;
          const tmp = closure_9();
          const obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: metroImportDefault(View, obj2) };
          obj2 = { style: items, children };
          items = [tmp.staticMessageContentContainer, ];
          const obj3 = { minHeight: importDefault };
          items[1] = obj3;
          const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
          return metroImportDefault(BottomSheetScrollView, obj);
        }
      }
      tmp8 = closure_7(StaticMessageContainer, obj4);
    } else if (0 === userListItems.length) {
      const obj6 = { children: closure_7(NoUsersDisplay, obj7) };
      obj7 = { style: items3 };
      items3 = [tmp.staticMessageContent, ];
      class StaticMessageContainer {
        constructor(children) {
          let items;
          let obj2;
          children = children.children;
          const tmp = closure_9();
          const obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: metroImportDefault(View, obj2) };
          obj2 = { style: items, children };
          items = [tmp.staticMessageContentContainer, ];
          const obj3 = { minHeight: importDefault };
          items[1] = obj3;
          const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
          return metroImportDefault(BottomSheetScrollView, obj);
        }
      }
      tmp8 = closure_7(StaticMessageContainer, obj6);
    } else {
      let obj = { contentContainerStyle: items4, data: userListItems, renderItem: callback, ItemSeparatorComponent: guildId(8053).FormDivider, keyExtractor };
      items4 = [tmp.userList, ];
      class StaticMessageContainer {
        constructor(children) {
          let items;
          let obj2;
          children = children.children;
          const tmp = closure_9();
          const obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: metroImportDefault(View, obj2) };
          obj2 = { style: items, children };
          items = [tmp.staticMessageContentContainer, ];
          const obj3 = { minHeight: importDefault };
          items[1] = obj3;
          const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
          return metroImportDefault(BottomSheetScrollView, obj);
        }
      }
      tmp6[0] = safeBottomPadding;
      items4[1] = tmp6;
      const BottomSheetFlatList = guildId(6045).BottomSheetFlatList;
      tmp8 = closure_7(BottomSheetFlatList, obj);
    }
  }
}
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { staticMessageContentContainer: { flex: 1, padding: 16 }, userList: { paddingTop: 16 }, userListRow: { paddingVertical: 8 }, userName: obj2, emptyDisplayContainer: { alignItems: "center", justifyContent: "center", minHeight: 200 }, staticMessageContent: { height: "100%" }, emptyDisplayTitle: obj3, remainingUsersIcon: size, remainingUsersIconContainer: size1 };
obj2 = { color: nativeDefault.colors.TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 16 };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: 24, textAlign: "center" };
const DISPLAY_EXTRABOLD = Fonts.DISPLAY_EXTRABOLD;
const merged = Object.assign(TextStyles(DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 20, { marginBottom: 8 }));
size = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, height: 18, width: 18 };
size1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 16, height: 32, width: 32, alignItems: "center", justifyContent: "center" };
const React4 = createStyles(obj);
const memoResult = react.memo((eventUser) => {
  let isMobileOnline;
  let isVROnline;
  let nick;
  let obj6;
  let status;
  let tmp2Result;
  let tmp7Result;
  eventUser = eventUser.eventUser;
  let analyticsLocations;
  const guildId = eventUser.guildId;
  const tmp = closure_9();
  analyticsLocations = analyticsLocations(6583)().analyticsLocations;
  let obj = eventUser(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(eventUser.user_id));
  const items1 = [PresenceStore];
  const items2 = [eventUser.user_id];
  const obj2 = eventUser(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { isMobileOnline: PresenceStore.isMobileOnline(eventUser.user_id), isVROnline: PresenceStore.isVROnline(eventUser.user_id), status: PresenceStore.getStatus(eventUser.user_id) };
    return obj;
  }, items2);
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  const obj3 = {
    DEPRECATED_style: tmp.userListRow,
    leading: tmp7Result,
    label: closure_7(tmp2Result, obj6),
    onPress() {
      const obj = { userId: eventUser.user_id, sourceAnalyticsLocations: analyticsLocations };
      showUserProfileActionSheetDefault(obj);
    }
  };
  tmp7Result = null;
  const FormRow = eventUser(8053).FormRow;
  if (null != stateFromStores) {
    const obj4 = { user: stateFromStores, guildId, isMobileOnline, isVROnline, status, size: eventUser(1177).AvatarSizes.REFRESH_MEDIUM_32, autoStatusCutout: true };
    const Avatar = tmp4(1177).Avatar;
    tmp7Result = tmp7(Avatar, obj4);
  }
  const member = eventUser.member;
  obj6 = { user: stateFromStores, nick, usernameStyle: null, nicknameStyle: null };
  nick = undefined;
  tmp2Result = analyticsLocations(9094);
  if (member != null) {
    nick = member.nick;
  }
  if (nick == null) {
    const tmp2Result2 = analyticsLocations(4678);
    nick = tmp2Result2.getName(eventUser.user);
  }
  ({ userName: obj5.usernameStyle, userName: obj5.nicknameStyle } = tmp);
  return closure_7(FormRow, obj3, eventUser.user_id);
});
EventDetailRsvpSheet.displayName = "EventDetailRsvpSheet";
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/event_detail/EventDetailRsvpSheet.tsx");

export default EventDetailRsvpSheet;
export const UserRow = memoResult;
