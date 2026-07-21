// Module ID: 12052
// Function ID: 93075
// Name: InstantInviteQRCodeActionSheet
// Dependencies: []
// Exports: default

// Module 12052 (InstantInviteQRCodeActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ InstantInviteSources: closure_7, RelationshipTypes: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { padding: importDefault(dependencyMap[7]).space.PX_12, gap: importDefault(dependencyMap[7]).space.PX_24 };
obj.container = obj;
obj.iconContainer = { Component: false, style: false, onLoadStart: false, onLoad: false, onError: false, index: false, source: false };
const obj1 = { padding: importDefault(dependencyMap[7]).space.PX_4, borderRadius: importDefault(dependencyMap[7]).radii.lg + importDefault(dependencyMap[7]).space.PX_4, backgroundColor: importDefault(dependencyMap[7]).colors.WHITE };
obj.icon = obj1;
obj.code = { alignSelf: "center" };
let closure_11 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/instant_invite/native/components/InstantInviteQRCodeActionSheet.tsx");

export default function InstantInviteQRCodeActionSheet(location) {
  const tmp = callback2();
  if (location.location === constants.ADD_FRIENDS_MODAL) {
    const intl2 = arg1(dependencyMap[10]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[10]).t.VUNqoc);
  } else {
    const intl = arg1(dependencyMap[10]).intl;
    stringResult = intl.string(arg1(dependencyMap[10]).t.DqE26p);
  }
  const tmp7 = function useDescription(channel) {
    channel = channel.channel;
    let obj = callback(closure_2[9]);
    const items = [closure_6];
    const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    if (null != channel) {
      const guild = guild.getGuild(channel.guild_id);
      if (null != guild) {
        obj = {};
        const intl3 = callback(closure_2[10]).intl;
        obj = { name: guild.name };
        obj.visible = intl3.format(callback(closure_2[10]).t.VK3zyF, obj);
        const intl4 = callback(closure_2[10]).intl;
        const obj1 = { name: guild.name };
        obj.plainText = intl4.formatToPlainString(callback(closure_2[10]).t.VK3zyF, obj1);
        return obj;
      }
    }
    let tmp4 = null;
    if (channel.location === constants.ADD_FRIENDS_MODAL) {
      tmp4 = null;
      if (null != stateFromStores) {
        const obj2 = {};
        const intl = callback(closure_2[10]).intl;
        const obj3 = { name: stateFromStores.username };
        obj2.visible = intl.format(callback(closure_2[10]).t.zDGAfl, obj3);
        const intl2 = callback(closure_2[10]).intl;
        const obj4 = { name: stateFromStores.username };
        obj2.plainText = intl2.formatToPlainString(callback(closure_2[10]).t.zDGAfl, obj4);
        tmp4 = obj2;
      }
    }
    return tmp4;
  }(location);
  const channel = location.channel;
  let tmp8 = null;
  if (null != channel) {
    tmp8 = null;
    if (null != store.getGuild(channel.guild_id)) {
      let obj = { guild: store.getGuild(channel.guild_id), size: arg1(dependencyMap[8]).GuildIconSizes.LARGE };
      tmp8 = callback(importDefault(dependencyMap[8]), obj);
      const tmp13 = importDefault(dependencyMap[8]);
    }
  }
  function useOnFriendAdded(presentFriendRequestAcceptedToast) {
    const items = [presentFriendRequestAcceptedToast];
    const effect = React.useEffect(() => {
      function handleRelationshipAdd(relationship) {
        relationship = relationship.relationship;
        if (relationship.type === constants.FRIEND) {
          handleRelationshipAdd(relationship.user);
        }
      }
      const arg0 = handleRelationshipAdd;
      const subscription = callback(closure_2[11]).subscribe("RELATIONSHIP_ADD", handleRelationshipAdd);
      return () => {
        callback(closure_2[11]).unsubscribe("RELATIONSHIP_ADD", handleRelationshipAdd);
      };
    }, items);
  }(arg1(dependencyMap[12]).presentFriendRequestAcceptedToast);
  obj = {};
  obj = { title: stringResult };
  obj.header = callback(arg1(dependencyMap[14]).BottomSheetTitleHeader, obj);
  const obj1 = { style: tmp.container };
  const obj2 = {};
  const obj3 = { text: location.link, size: 240, style: tmp.code };
  let plainText;
  if (null != tmp7) {
    plainText = tmp7.plainText;
  }
  obj3.accessibilityLabel = plainText;
  const items = [callback(importDefault(dependencyMap[15]), obj3), ];
  let tmp22 = null != tmp8;
  if (tmp22) {
    const obj4 = { style: tmp.iconContainer };
    const obj5 = { style: tmp.icon, children: tmp8 };
    obj4.children = callback(View, obj5);
    tmp22 = callback(View, obj4);
  }
  items[1] = tmp22;
  obj2.children = items;
  const items1 = [closure_10(View, obj2), ];
  let tmp25 = null != tmp7;
  if (tmp25) {
    const obj6 = { variant: "text-md/normal", children: tmp7.visible };
    tmp25 = callback(arg1(dependencyMap[16]).Text, obj6);
  }
  items1[1] = tmp25;
  obj1.children = items1;
  obj.children = closure_10(View, obj1);
  return callback(arg1(dependencyMap[13]).ActionSheet, obj);
};
