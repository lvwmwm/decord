// Module ID: 11670
// Function ID: 90598
// Name: MutualFriendRow
// Dependencies: [57, 31, 27, 4217, 8308, 33, 4130, 689, 9126, 566, 5165, 1273, 4319, 9102, 5513, 4126, 11663, 8404, 11671, 11672, 11664, 11665, 11666, 1212, 11676, 8797, 2]
// Exports: default

// Module 11670 (MutualFriendRow)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserProfileSections } from "USER_PROFILE_TOOLTIP_DELAY";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
function MutualFriendRow(mutualFriend) {
  let end;
  let isMobileOnline;
  let isVROnline;
  let onPress;
  let start;
  let status;
  const user = mutualFriend.mutualFriend.user;
  const guildId = mutualFriend.guildId;
  ({ onPress, start, end } = mutualFriend);
  let obj = user(9126);
  const avatarDecoration = obj.useAvatarDecoration(user);
  let obj1 = user(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ status: outer1_7.getStatus(user.id), isMobileOnline: outer1_7.isMobileOnline(user.id), isVROnline: outer1_7.isVROnline(user.id) }));
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  obj = { onPress };
  obj = { user, size: user(1273).AvatarSizes.REFRESH_MEDIUM_32, avatarDecoration, status, guildId, isMobileOnline, isVROnline, autoStatusCutout: true };
  obj.icon = callback2(user(1273).Avatar, obj);
  const tmp = _createForOfIteratorHelperLoose();
  obj.label = importDefault(4319).getName(guildId, undefined, user);
  obj1 = { userId: user.id, guildId, textStyle: tmp.activityStatusText };
  obj.subLabel = callback2(importDefault(9102), obj1);
  obj.start = start;
  obj.end = end;
  return callback2(user(5165).TableRow, obj, user.id);
}
class MutualGuildRow {
  constructor(arg0) {
    ({ guild, nick } = global.mutualGuild);
    user = global.user;
    ({ onPress, start, end } = global);
    tmp = c11();
    hasAvatarForGuildResult = user.hasAvatarForGuild(guild.id);
    tmp3 = jsx;
    obj = { onPress };
    obj = { guild };
    tmp4 = require("makeSizeStyle");
    obj.size = require("makeSizeStyle").GuildIconSizes.SMALL_32;
    obj.icon = jsx(tmp4, obj);
    obj.label = guild.name;
    obj1 = { style: tmp.mutualGuildSubLabel };
    tmp7 = hasAvatarForGuildResult;
    tmp5 = jsxs;
    tmp6 = View;
    if (hasAvatarForGuildResult) {
      tmp8 = jsx;
      tmp9 = closure_0;
      tmp10 = closure_2;
      num = 11;
      obj2 = {};
      obj2.size = require("Button").AvatarSizes.SIZE_16;
      obj2.user = user;
      obj2.guildId = guild.id;
      tmp7 = jsx(require("Button").Avatar, obj2);
    }
    items = [, , ];
    items[0] = tmp7;
    tmp11 = null != nick;
    if (tmp11) {
      tmp12 = jsx;
      tmp13 = closure_0;
      tmp14 = closure_2;
      num2 = 15;
      obj3 = { variant: "text-xs/medium", color: "text-subtle" };
      obj3.children = nick;
      tmp11 = jsx(require("Text").Text, obj3);
    }
    items[1] = tmp11;
    tmp15 = null == nick && hasAvatarForGuildResult;
    if (tmp15) {
      tmp16 = jsx;
      tmp17 = closure_0;
      tmp18 = closure_2;
      num3 = 15;
      obj4 = { variant: "text-xs/medium", color: "text-subtle" };
      obj4.children = user.username;
      tmp15 = jsx(require("Text").Text, obj4);
    }
    items[2] = tmp15;
    obj1.children = items;
    obj.subLabel = tmp5(tmp6, obj1);
    obj.start = start;
    obj.end = end;
    return tmp3(require("TableRowInner").TableRow, obj, guild.id);
  }
}
({ View: closure_5, ActivityIndicator: closure_6 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, gap: 20, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.loadingState = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "center" };
_createForOfIteratorHelperLoose.emptyState = { alignItems: "center" };
let obj1 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "center" };
_createForOfIteratorHelperLoose.activityStatusText = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
let obj3 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.mutualGuildSubLabel = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileMutualsActionSheet.tsx");

export default function UserProfileMutualsActionSheet(user) {
  let _slicedToArray;
  let dependencyMap;
  let importDefault;
  let mutualFriends;
  let mutualGuilds;
  user = user.user;
  ({ guildId: importDefault, onPressMutualFriend: dependencyMap, onPressMutualGuild: _slicedToArray } = user);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState(0), 2);
  React = tmp2[1];
  ({ mutualFriends, mutualGuilds } = importDefault(11663)(user));
  let obj = user(8404);
  obj = { pageWidth: tmp2[0] };
  let num = 0;
  if (user.section === UserProfileSections.MUTUAL_GUILDS) {
    num = 1;
  }
  obj.defaultIndex = num;
  obj = { id: "mutual-friends" };
  let length;
  const tmp3 = importDefault(11663)(user);
  if (null != mutualFriends) {
    length = mutualFriends.length;
  }
  obj.label = importDefault(11671)(length);
  if (null == mutualFriends) {
    const obj1 = { style: tmp.loadingState, children: callback2(closure_6, {}) };
    let tmp9 = callback2(closure_5, obj1);
  } else if (0 === mutualFriends.length) {
    const obj2 = { style: tmp.emptyState, children: callback2(user(11672).NoMutualFriends, {}) };
    tmp9 = callback2(closure_5, obj2);
  } else {
    const obj3 = {
      data: mutualFriends,
      keyExtractor(user) {
          return user.user.id;
        },
      renderItem(item) {
          item = item.item;
          return outer1_9(outer1_12, {
            mutualFriend: item,
            guildId: closure_1,
            onPress() {
              return outer1_2(item.user.id);
            },
            start: item.start,
            end: item.end
          });
        }
    };
    tmp9 = callback2(user(11664).UserProfileStackedActionSheetList, obj3);
  }
  obj.page = tmp9;
  const items = [obj, ];
  const obj4 = { id: "mutual-guilds" };
  let length1;
  const tmp4 = importDefault(11671);
  if (null != mutualGuilds) {
    length1 = mutualGuilds.length;
  }
  obj4.label = importDefault(11665)(length1);
  if (null == mutualGuilds) {
    const obj5 = { style: tmp.loadingState, children: callback2(closure_6, {}) };
    let tmp24 = callback2(closure_5, obj5);
  } else if (0 === mutualGuilds.length) {
    const obj6 = { style: tmp.emptyState, children: callback2(user(11666).NoMutualServers, {}) };
    tmp24 = callback2(closure_5, obj6);
  } else {
    const obj7 = {
      data: mutualGuilds,
      keyExtractor(guild) {
          return guild.guild.id;
        },
      renderItem(item) {
          item = item.item;
          return outer1_9(outer1_13, {
            user: item,
            mutualGuild: item,
            onPress() {
              return outer1_3(item.guild.id);
            },
            start: item.start,
            end: item.end
          });
        }
    };
    tmp24 = callback2(user(11664).UserProfileStackedActionSheetList, obj7);
  }
  obj4.page = tmp24;
  items[1] = obj4;
  obj.items = items;
  const segmentedControlState = obj.useSegmentedControlState(obj);
  callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj8 = { scrollable: true };
  const tmp19 = importDefault(11665);
  const intl = user(1212).intl;
  obj8.title = intl.string(user(1212).t["l2/aLi"]);
  const obj9 = { style: tmp.container, onLayout: callback };
  const tmp36 = importDefault(11664);
  const items1 = [callback2(closure_5, { children: callback2(user(11676).Tabs, { state: segmentedControlState }) }), callback2(user(8797).SegmentedControlPages, { state: segmentedControlState })];
  obj9.children = items1;
  obj8.children = callback3(closure_5, obj9);
  return callback2(tmp36, obj8);
};
export { MutualGuildRow };
