// Module ID: 12170
// Function ID: 95252
// Name: InstantInviteQRCodeActionSheet
// Dependencies: [31, 27, 1838, 1849, 653, 33, 4130, 689, 5515, 566, 1212, 686, 3830, 5500, 5186, 12171, 4126, 2]
// Exports: default

// Module 12170 (InstantInviteQRCodeActionSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import closure_5 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ InstantInviteSources: closure_7, RelationshipTypes: closure_8 } = ME);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_12, display: "flex", alignItems: "center", justifyContent: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.iconContainer = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center" };
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_4, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg + require("_createForOfIteratorHelperLoose").space.PX_4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.icon = obj1;
_createForOfIteratorHelperLoose.code = { alignSelf: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/instant_invite/native/components/InstantInviteQRCodeActionSheet.tsx");

export default function InstantInviteQRCodeActionSheet(location) {
  const tmp = _createForOfIteratorHelperLoose();
  if (location.location === constants.ADD_FRIENDS_MODAL) {
    let intl2 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.VUNqoc);
  } else {
    let intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t.DqE26p);
  }
  const tmp7 = (function useDescription(channel) {
    channel = channel.channel;
    let obj = outer1_0(outer1_2[9]);
    const items = [outer1_6];
    const stateFromStores = obj.useStateFromStores(items, () => outer2_6.getCurrentUser());
    if (null != channel) {
      const guild = outer1_5.getGuild(channel.guild_id);
      if (null != guild) {
        obj = {};
        const intl3 = outer1_0(outer1_2[10]).intl;
        obj = { name: guild.name };
        obj.visible = intl3.format(outer1_0(outer1_2[10]).t.VK3zyF, obj);
        const intl4 = outer1_0(outer1_2[10]).intl;
        const obj1 = { name: guild.name };
        obj.plainText = intl4.formatToPlainString(outer1_0(outer1_2[10]).t.VK3zyF, obj1);
        return obj;
      }
    }
    let tmp4 = null;
    if (channel.location === outer1_7.ADD_FRIENDS_MODAL) {
      tmp4 = null;
      if (null != stateFromStores) {
        const obj2 = {};
        const intl = outer1_0(outer1_2[10]).intl;
        const obj3 = { name: stateFromStores.username };
        obj2.visible = intl.format(outer1_0(outer1_2[10]).t.zDGAfl, obj3);
        const intl2 = outer1_0(outer1_2[10]).intl;
        const obj4 = { name: stateFromStores.username };
        obj2.plainText = intl2.formatToPlainString(outer1_0(outer1_2[10]).t.zDGAfl, obj4);
        tmp4 = obj2;
      }
    }
    return tmp4;
  })(location);
  let channel = location.channel;
  let tmp8 = null;
  if (null != channel) {
    tmp8 = null;
    if (null != store.getGuild(channel.guild_id)) {
      let obj = { guild: store.getGuild(channel.guild_id), size: require(5515) /* makeSizeStyle */.GuildIconSizes.LARGE };
      tmp8 = callback(importDefault(5515), obj);
      const tmp13 = importDefault(5515);
    }
  }
  (function useOnFriendAdded(presentFriendRequestAcceptedToast) {
    let closure_0 = presentFriendRequestAcceptedToast;
    const items = [presentFriendRequestAcceptedToast];
    const effect = outer1_3.useEffect(() => {
      function handleRelationshipAdd(relationship) {
        relationship = relationship.relationship;
        if (relationship.type === outer3_8.FRIEND) {
          handleRelationshipAdd(relationship.user);
        }
      }
      const subscription = outer2_1(outer2_2[11]).subscribe("RELATIONSHIP_ADD", handleRelationshipAdd);
      return () => {
        outer3_1(outer3_2[11]).unsubscribe("RELATIONSHIP_ADD", handleRelationshipAdd);
      };
    }, items);
  })(require(3830) /* presentAddedFriendToast */.presentFriendRequestAcceptedToast);
  obj = {};
  obj = { title: stringResult };
  obj.header = callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  let obj1 = { style: tmp.container };
  let obj2 = {};
  let obj3 = { text: location.link, size: 240, style: tmp.code };
  let plainText;
  if (null != tmp7) {
    plainText = tmp7.plainText;
  }
  obj3.accessibilityLabel = plainText;
  let items = [callback(importDefault(12171), obj3), ];
  let tmp22 = null != tmp8;
  if (tmp22) {
    let obj4 = { style: tmp.iconContainer };
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
    tmp25 = callback(require(4126) /* Text */.Text, obj6);
  }
  items1[1] = tmp25;
  obj1.children = items1;
  obj.children = closure_10(View, obj1);
  return callback(require(5500) /* ActionSheet */.ActionSheet, obj);
};
