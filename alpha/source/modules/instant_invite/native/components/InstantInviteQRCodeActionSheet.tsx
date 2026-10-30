// Module ID: 9149
// Function ID: 9150
// Name: InstantInviteQRCodeActionSheet
// Dependencies: [19, 17, 4880, 1384, 1072, 21, 5009, 575, 6951, 504, 1114, 572, 5706, 7360, 7315, 9150, 5619, 2]
// Exports: default

// Module 9149 (InstantInviteQRCodeActionSheet)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import nativeDefault from "native" /* 575 */;
import GuildIconDefault from "GuildIcon" /* 6951 */;
import components_native_QRCodeDefault from "components_native/QRCode" /* 9150 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4880 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
({ InstantInviteSources: metroImportDefault, RelationshipTypes: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, iconContainer: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center" }, icon: obj3, code: { alignSelf: "center" } };
obj2 = { padding: nativeDefault.space.PX_12, display: "flex", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.lg + nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.WHITE };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteQRCodeActionSheet.tsx");

export default function InstantInviteQRCodeActionSheet(link) {
  let _location;
  let channel;
  let currentUser;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items3;
  let obj11;
  let obj15;
  let obj16;
  let obj2;
  let obj3;
  let obj6;
  let obj7;
  let plainText;
  let presentFriendRequestAcceptedToast;
  let stringResult;
  let tmp12;
  let tmp6;
  link = link.link;
  const tmp = closure_11();
  const tmp2 = constants;
  if (link.location === constants.ADD_FRIENDS_MODAL) {
    const intl2 = presentFriendRequestAcceptedToast(1114).intl;
    stringResult = intl2.string(presentFriendRequestAcceptedToast(1114).t.VUNqoc);
    tmp6 = presentFriendRequestAcceptedToast;
  } else {
    const intl = presentFriendRequestAcceptedToast(1114).intl;
    stringResult = intl.string(presentFriendRequestAcceptedToast(1114).t.DqE26p);
    tmp6 = presentFriendRequestAcceptedToast;
  }
  ({ channel, location: _location } = link);
  const items = [UserStore];
  const tmp6Result = tmp6(504);
  const stateFromStores = tmp6Result.useStateFromStores(items, () => currentUser.getCurrentUser());
  if (null != channel) {
    const guild = GuildStore.getGuild(channel.guild_id);
    if (null != guild) {
      let obj = { visible: intl5.format(tmp6(1114).t.VK3zyF, obj2), plainText: intl6.formatToPlainString(tmp6(1114).t.VK3zyF, obj3) };
      intl5 = tmp6(1114).intl;
      obj2 = { name: guild.name };
      intl6 = tmp6(1114).intl;
      tmp12 = obj;
      obj3 = { name: guild.name };
    }
    const channel2 = link.channel;
    let tmp13 = null;
    if (null != channel2) {
      tmp13 = null;
      const obj8 = GuildStore;
      if (null != GuildStore.getGuild(channel2.guild_id)) {
        const obj4 = { guild: obj8.getGuild(channel2.guild_id), size: tmp6(6951).GuildIconSizes.LARGE };
        const tmp16 = GuildIconDefault;
        tmp13 = closure_9(tmp16, obj4);
      }
    }
    presentFriendRequestAcceptedToast = tmp6(5706).presentFriendRequestAcceptedToast;
    const items1 = [presentFriendRequestAcceptedToast];
    const effect = react.useEffect(() => {
      function handleRelationshipAdd(relationship) {
        relationship = relationship.relationship;
        if (relationship.type === constants.FRIEND) {
          handleRelationshipAdd(relationship.user);
        }
      }
      let obj = DispatcherDefault;
      const subscription = obj.subscribe("RELATIONSHIP_ADD", handleRelationshipAdd);
      return () => {
        const obj = DispatcherDefault;
        obj.unsubscribe("RELATIONSHIP_ADD", handleRelationshipAdd);
      };
    }, items1);
    const obj5 = { header: closure_9(tmp6(7315).BottomSheetTitleHeader, obj6), children: closure_10(View, obj7) };
    const ActionSheet = tmp6(7360).ActionSheet;
    const obj9 = { text: link, size: 240, style: tmp.code, accessibilityLabel: plainText };
    plainText = undefined;
    obj6 = { title: stringResult };
    obj7 = { style: tmp.container, children: items3 };
    const tmp23 = components_native_QRCodeDefault;
    if (tmp12 != null) {
      plainText = tmp12.plainText;
    }
    const items2 = [closure_9(tmp23, obj9), ];
    let tmp19Result = null != tmp13;
    if (tmp19Result) {
      const obj10 = { style: tmp.iconContainer, children: closure_9(View, obj11) };
      obj11 = { style: tmp.icon, children: tmp13 };
      tmp19Result = tmp19(tmp21, obj10);
    }
    const obj12 = { children: items2 };
    items2[1] = tmp19Result;
    items3 = [closure_10(View, obj12), ];
    let tmp19Result2 = null != tmp12;
    if (tmp19Result2) {
      const obj13 = { variant: "text-md/normal", children: tmp12.visible };
      tmp19Result2 = tmp19(tmp6(5619).Text, obj13);
    }
    items3[1] = tmp19Result2;
    return closure_9(ActionSheet, obj5);
  }
  tmp12 = null;
  if (_location === tmp2.ADD_FRIENDS_MODAL) {
    tmp12 = null;
    if (null != stateFromStores) {
      const obj14 = { visible: intl3.format(tmp6(1114).t.zDGAfl, obj15), plainText: intl4.formatToPlainString(tmp6(1114).t.zDGAfl, obj16) };
      intl3 = tmp6(1114).intl;
      obj15 = { name: stateFromStores.username };
      intl4 = tmp6(1114).intl;
      tmp12 = obj14;
      obj16 = { name: stateFromStores.username };
    }
  }
};
