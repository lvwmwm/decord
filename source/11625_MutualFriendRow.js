// Module ID: 11625
// Function ID: 90263
// Name: MutualFriendRow
// Dependencies: []
// Exports: default

// Module 11625 (MutualFriendRow)
function MutualFriendRow(mutualFriend) {
  let end;
  let isMobileOnline;
  let isVROnline;
  let onPress;
  let start;
  let status;
  const user = mutualFriend.mutualFriend.user;
  const arg1 = user;
  const guildId = mutualFriend.guildId;
  ({ onPress, start, end } = mutualFriend);
  let obj = arg1(dependencyMap[8]);
  const avatarDecoration = obj.useAvatarDecoration(user);
  let obj1 = arg1(dependencyMap[9]);
  const items = [closure_7];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ status: closure_7.getStatus(user.id), isMobileOnline: closure_7.isMobileOnline(user.id), isVROnline: closure_7.isVROnline(user.id) }));
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  obj = { onPress };
  obj = { user, size: arg1(dependencyMap[11]).AvatarSizes.REFRESH_MEDIUM_32, avatarDecoration, status, guildId, isMobileOnline, isVROnline, autoStatusCutout: true };
  obj.icon = callback2(arg1(dependencyMap[11]).Avatar, obj);
  const tmp = callback4();
  obj.label = importDefault(dependencyMap[12]).getName(guildId, undefined, user);
  obj1 = { userId: user.id, guildId, textStyle: tmp.activityStatusText };
  obj.subLabel = callback2(importDefault(dependencyMap[13]), obj1);
  obj.start = start;
  obj.end = end;
  return callback2(arg1(dependencyMap[10]).TableRow, obj, user.id);
}
class MutualGuildRow {
  constructor(arg0) {
    ({ guild, nick } = global.mutualGuild);
    user = global.user;
    ({ onPress, start, end } = global);
    tmp = closure_11();
    hasAvatarForGuildResult = user.hasAvatarForGuild(guild.id);
    tmp3 = jsx;
    obj = { onPress };
    obj = { guild };
    tmp4 = importDefault(dependencyMap[14]);
    obj.size = arg1(dependencyMap[14]).GuildIconSizes.SMALL_32;
    obj.icon = jsx(tmp4, obj);
    obj.label = guild.name;
    obj1 = { style: tmp.mutualGuildSubLabel };
    tmp7 = hasAvatarForGuildResult;
    tmp5 = jsxs;
    tmp6 = View;
    if (hasAvatarForGuildResult) {
      tmp8 = jsx;
      tmp9 = arg1;
      tmp10 = dependencyMap;
      num = 11;
      obj2 = {};
      obj2.size = arg1(dependencyMap[11]).AvatarSizes.SIZE_16;
      obj2.user = user;
      obj2.guildId = guild.id;
      tmp7 = jsx(arg1(dependencyMap[11]).Avatar, obj2);
    }
    items = [, , ];
    items[0] = tmp7;
    tmp11 = null != nick;
    if (tmp11) {
      tmp12 = jsx;
      tmp13 = arg1;
      tmp14 = dependencyMap;
      num2 = 15;
      obj3 = {};
      obj3.children = nick;
      tmp11 = jsx(arg1(dependencyMap[15]).Text, obj3);
    }
    items[1] = tmp11;
    tmp15 = null == nick && hasAvatarForGuildResult;
    if (tmp15) {
      tmp16 = jsx;
      tmp17 = arg1;
      tmp18 = dependencyMap;
      num3 = 15;
      obj4 = {};
      obj4.children = user.username;
      tmp15 = jsx(arg1(dependencyMap[15]).Text, obj4);
    }
    items[2] = tmp15;
    obj1.children = items;
    obj.subLabel = tmp5(tmp6, obj1);
    obj.start = start;
    obj.end = end;
    return tmp3(arg1(dependencyMap[10]).TableRow, obj, guild.id);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ActivityIndicator: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
const UserProfileSections = arg1(dependencyMap[4]).UserProfileSections;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { paddingTop: importDefault(dependencyMap[7]).space.PX_8 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.loadingState = { paddingTop: importDefault(dependencyMap[7]).space.PX_8, alignItems: "center" };
obj.emptyState = { alignItems: "center" };
const obj1 = { paddingTop: importDefault(dependencyMap[7]).space.PX_8, alignItems: "center" };
obj.activityStatusText = { color: importDefault(dependencyMap[7]).colors.TEXT_SUBTLE };
const obj3 = { -9223372036854775808: true, filter: true, gap: importDefault(dependencyMap[7]).space.PX_4 };
obj.mutualGuildSubLabel = obj3;
let closure_11 = obj.createStyles(obj);
const obj2 = { color: importDefault(dependencyMap[7]).colors.TEXT_SUBTLE };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/user_profile/native/UserProfileMutualsActionSheet.tsx");

export default function UserProfileMutualsActionSheet(user) {
  let mutualFriends;
  let mutualGuilds;
  user = user.user;
  const arg1 = user;
  ({ guildId: closure_1, onPressMutualFriend: closure_2, onPressMutualGuild: closure_3 } = user);
  const tmp = callback4();
  const tmp2 = callback(React.useState(0), 2);
  const React = tmp2[1];
  ({ mutualFriends, mutualGuilds } = importDefault(dependencyMap[16])(user));
  let obj = arg1(dependencyMap[17]);
  obj = { pageWidth: tmp2[0] };
  let num = 0;
  if (user.section === UserProfileSections.MUTUAL_GUILDS) {
    num = 1;
  }
  obj.defaultIndex = num;
  obj = { id: "mutual-friends" };
  let length;
  const tmp3 = importDefault(dependencyMap[16])(user);
  if (null != mutualFriends) {
    length = mutualFriends.length;
  }
  obj.label = importDefault(dependencyMap[18])(length);
  if (null == mutualFriends) {
    const obj1 = { style: tmp.loadingState, children: callback2(closure_6, {}) };
    let tmp9 = callback2(closure_5, obj1);
  } else if (0 === mutualFriends.length) {
    const obj2 = { style: tmp.emptyState, children: callback2(arg1(dependencyMap[19]).NoMutualFriends, {}) };
    tmp9 = callback2(closure_5, obj2);
  } else {
    const obj3 = {
      data: mutualFriends,
      keyExtractor(user) {
          return user.user.id;
        },
      renderItem(item) {
          item = item.item;
          const user = item;
          return callback2(closure_12, {
            mutualFriend: item,
            guildId: closure_1,
            onPress() {
              return callback(item.user.id);
            },
            start: item.start,
            end: item.end
          });
        }
    };
    tmp9 = callback2(arg1(dependencyMap[20]).UserProfileStackedActionSheetList, obj3);
  }
  obj.page = tmp9;
  const items = [obj, ];
  const obj4 = { id: "mutual-guilds" };
  let length1;
  const tmp4 = importDefault(dependencyMap[18]);
  if (null != mutualGuilds) {
    length1 = mutualGuilds.length;
  }
  obj4.label = importDefault(dependencyMap[21])(length1);
  if (null == mutualGuilds) {
    const obj5 = { style: tmp.loadingState, children: callback2(closure_6, {}) };
    let tmp24 = callback2(closure_5, obj5);
  } else if (0 === mutualGuilds.length) {
    const obj6 = { style: tmp.emptyState, children: callback2(arg1(dependencyMap[22]).NoMutualServers, {}) };
    tmp24 = callback2(closure_5, obj6);
  } else {
    const obj7 = {
      data: mutualGuilds,
      keyExtractor(guild) {
          return guild.guild.id;
        },
      renderItem(item) {
          item = item.item;
          const user = item;
          return callback2(closure_13, {
            user,
            mutualGuild: item,
            onPress() {
              return callback(item.guild.id);
            },
            start: item.start,
            end: item.end
          });
        }
    };
    tmp24 = callback2(arg1(dependencyMap[20]).UserProfileStackedActionSheetList, obj7);
  }
  obj4.page = tmp24;
  items[1] = obj4;
  obj.items = items;
  const segmentedControlState = obj.useSegmentedControlState(obj);
  const callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj8 = { scrollable: true };
  const tmp19 = importDefault(dependencyMap[21]);
  const intl = arg1(dependencyMap[23]).intl;
  obj8.title = intl.string(arg1(dependencyMap[23]).t.l2/aLi);
  const obj9 = { style: tmp.container, onLayout: callback };
  const tmp36 = importDefault(dependencyMap[20]);
  const items1 = [callback2(closure_5, { children: callback2(arg1(dependencyMap[24]).Tabs, { state: segmentedControlState }) }), callback2(arg1(dependencyMap[25]).SegmentedControlPages, { state: segmentedControlState })];
  obj9.children = items1;
  obj8.children = callback3(closure_5, obj9);
  return callback2(tmp36, obj8);
};
export { MutualGuildRow };
