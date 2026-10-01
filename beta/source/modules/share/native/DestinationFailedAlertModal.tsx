// Module ID: 11203
// Function ID: 11204
// Name: DestinationFailedAlertModal
// Dependencies: [19, 17, 2045, 2067, 4876, 4479, 1372, 1085, 21, 4836, 576, 4989, 10371, 1177, 4832, 504, 4678, 10465, 5209, 5209, 1115, 2]
// Exports: default

// Module 11203 (DestinationFailedAlertModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import Text_Text from "Text/Text" /* 4832 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import AlertModal2 from "AlertModal" /* 5209 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10371 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let closure_12;
let obj2;
let obj3;
let unpackModuleId;
function FailedGroupDMRow(channel) {
  let items;
  channel = channel.channel;
  const tmp = closure_13();
  const obj = { style: tmp.row, children: items };
  const obj2 = { size: native.AvatarSizes.REFRESH_MEDIUM_32, channel };
  const tmp2 = useChannelNameDefault(channel);
  const tmp3 = GroupDMAvatarDefault;
  items = [authStore(tmp3, obj2), ];
  const obj3 = { style: tmp.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: tmp2 };
  items[1] = authStore(Text_Text.Text, obj3);
  return unpackModuleId(View, obj);
}
function FailedUserRow(user) {
  let items2;
  let tmp13;
  user = user.user;
  const tmp = closure_13();
  let obj = user(504);
  const items = [RelationshipStore];
  let stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.getNickname(user.id));
  const items1 = [PresenceStore];
  const obj2 = user(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { isMobileOnline: PresenceStore.isMobileOnline(user.id), status: PresenceStore.getStatus(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
    return obj;
  });
  const status = stateFromStoresObject.status;
  let tmp9Result = null;
  if (null != user) {
    const obj3 = { style: tmp.row, children: items2 };
    const obj4 = { user, guildId: "Boolean", status: tmp13, isMobileOnline: tmp6, isVROnline: tmp7, size: user(1177).AvatarSizes.XSMALL, avatarDecoration: user.avatarDecoration, autoStatusCutout: true };
    tmp13 = null;
    const Avatar = tmp2(1177).Avatar;
    const tmp10 = View;
    const tmp9 = closure_11;
    if (StatusTypes.OFFLINE !== status) {
      tmp13 = status;
    }
    items2 = [closure_10(Avatar, obj4), ];
    const obj5 = { style: tmp.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: stateFromStores };
    const Text = tmp2(4832).Text;
    if (stateFromStores == null) {
      const obj6 = UserUtilsDefault;
      stateFromStores = obj6.getName(user);
    }
    items2[1] = closure_10(Text, obj5);
    tmp9Result = tmp9(tmp10, obj3);
  }
  return tmp9Result;
}
function FailedChannelRow(channel) {
  let items1;
  channel = channel.channel;
  const tmp = closure_13();
  const items = [GuildStore];
  const obj = channel(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return getGuild(guild_id);
  });
  const obj2 = { style: tmp.row, children: items1 };
  const obj3 = { "aria-label": "", guild: stateFromStores, channel, size: channel(10465).GuildIconWithChannelTypeSizes.SMALL_32 };
  const tmp3 = useChannelNameDefault(channel);
  const GuildIconWithChannelType = channel(10465).GuildIconWithChannelType;
  items1 = [closure_10(GuildIconWithChannelType, obj3), ];
  const obj4 = { style: tmp.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: tmp3 };
  items1[1] = closure_10(channel(4832).Text, obj4);
  return closure_11(View, obj2);
}
function FailedDestinationRow(destination) {
  let channel;
  let tmp3;
  let user;
  destination = destination.destination;
  let obj = destination(504);
  const items = [ChannelStore, UserStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let user;
    let channel = null;
    if ("channel" === destination.type) {
      channel = ChannelStore.getChannel(tmp.id);
    }
    const obj = { channel, user };
    user = null;
    if ("user" === destination.type) {
      user = UserStore.getUser(tmp.id);
    }
    return obj;
  });
  ({ channel, user } = stateFromStoresObject);
  let isGroupDMResult;
  if (channel != null) {
    isGroupDMResult = channel.isGroupDM();
  }
  if (isGroupDMResult) {
    const obj2 = { channel };
    tmp3 = closure_10(FailedGroupDMRow, obj2);
  } else if (null != user) {
    const obj3 = { user };
    tmp3 = closure_10(FailedUserRow, obj3);
  } else {
    tmp3 = null;
    if (null != channel) {
      const obj4 = { channel };
      tmp3 = closure_10(FailedChannelRow, obj4);
    }
  }
  return tmp3;
}
const View = react_native.View;
const StatusTypes = Constants.StatusTypes;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, row: obj3, label: { flexShrink: 1 } };
obj2 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG, borderRadius: nativeDefault.radii.lg, paddingVertical: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, height: 40, marginHorizontal: nativeDefault.space.PX_16 };
let closure_13 = createStyles(obj);
const result = size.fileFinishedImporting("modules/share/native/DestinationFailedAlertModal.tsx");

export default function DestinationFailedAlertModal(arg0) {
  let AlertActions;
  let content;
  let failedDestinations;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj2;
  let onRetry;
  let title;
  let tmp2Result;
  ({ failedDestinations, onRetry } = arg0);
  ({ title, content } = arg0);
  let obj = { title, content, extraContent: authStore(View, obj2), actions: authStore(AlertActions, { children: tmp2Result }) };
  obj2 = {
    style: closure_13().container,
    children: failedDestinations.map((destination, index) => {
      const obj = { destination };
      return closure_1_10(FailedDestinationRow, obj, index);
    })
  };
  const AlertModal = AlertModal2.AlertModal;
  AlertActions = AlertModal2.AlertActions;
  if (null != onRetry) {
    const obj3 = { children: items };
    const obj4 = { variant: "primary", onPress: onRetry, text: intl2.string(intl4.t["5911Lb"]) };
    const AlertActionButton2 = tmp3(5209).AlertActionButton;
    intl2 = tmp3(1115).intl;
    items = [authStore(AlertActionButton2, obj4, "confirm"), ];
    const obj5 = { variant: "secondary", text: intl3.string(intl4.t.WAI6xu) };
    const AlertActionButton3 = tmp3(5209).AlertActionButton;
    intl3 = tmp3(1115).intl;
    items[1] = authStore(AlertActionButton3, obj5, "cancel");
    tmp2Result = unpackModuleId(closure_12, obj3);
  } else {
    const obj6 = { variant: "primary", text: intl.string(intl4.t.BddRzS) };
    const AlertActionButton = tmp3(5209).AlertActionButton;
    intl = tmp3(1115).intl;
    tmp2Result = tmp2(AlertActionButton, obj6, "confirm");
  }
  return authStore(AlertModal, obj);
};
