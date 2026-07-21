// Module ID: 9899
// Function ID: 76589
// Name: FailedGroupDMRow
// Dependencies: []
// Exports: default

// Module 9899 (FailedGroupDMRow)
function FailedGroupDMRow(channel) {
  channel = channel.channel;
  const tmp = callback3();
  let obj = { style: tmp.row };
  obj = {};
  const tmp2 = importDefault(dependencyMap[11])(channel);
  obj.size = arg1(dependencyMap[13]).AvatarSizes.REFRESH_MEDIUM_32;
  obj.channel = channel;
  const items = [callback(importDefault(dependencyMap[12]), obj), ];
  obj = { style: tmp.label, children: tmp2 };
  items[1] = callback(arg1(dependencyMap[14]).Text, obj);
  obj.children = items;
  return callback2(View, obj);
}
function FailedUserRow(user) {
  user = user.user;
  const arg1 = user;
  const tmp = callback3();
  let obj = arg1(dependencyMap[15]);
  const items = [closure_7];
  let stateFromStores = obj.useStateFromStores(items, () => nickname.getNickname(user.id));
  let obj1 = arg1(dependencyMap[15]);
  const items1 = [closure_6];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ isMobileOnline: closure_6.isMobileOnline(user.id), status: closure_6.getStatus(user.id), isVROnline: closure_6.isVROnline(user.id) }));
  const status = stateFromStoresObject.status;
  let tmp7Result = null;
  if (null != user) {
    obj = { style: tmp.row };
    obj = { user, guildId: undefined };
    let tmp13 = null;
    if (StatusTypes.OFFLINE !== status) {
      tmp13 = status;
    }
    obj.status = tmp13;
    obj.isMobileOnline = tmp4;
    obj.isVROnline = tmp5;
    obj.size = arg1(dependencyMap[13]).AvatarSizes.XSMALL;
    obj.avatarDecoration = user.avatarDecoration;
    obj.autoStatusCutout = true;
    const items2 = [closure_10(arg1(dependencyMap[13]).Avatar, obj), ];
    obj1 = { style: tmp.label };
    if (null == stateFromStores) {
      stateFromStores = importDefault(dependencyMap[16]).getName(user);
      const obj6 = importDefault(dependencyMap[16]);
    }
    obj1.children = stateFromStores;
    items2[1] = closure_10(arg1(dependencyMap[14]).Text, obj1);
    obj.children = items2;
    tmp7Result = closure_11(View, obj);
    const tmp16 = closure_10;
    const tmp7 = closure_11;
    const tmp8 = View;
    const tmp9 = closure_10;
  }
  return tmp7Result;
}
function FailedChannelRow(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const tmp = callback3();
  let obj = arg1(dependencyMap[15]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    return guild.getGuild(guild_id);
  });
  obj = { style: tmp.row };
  obj = { aria-label: "", guild: stateFromStores, channel, size: arg1(dependencyMap[17]).GuildIconWithChannelTypeSizes.SMALL_32 };
  const items1 = [callback(arg1(dependencyMap[17]).GuildIconWithChannelType, obj), ];
  const tmp3 = importDefault(dependencyMap[11])(channel);
  items1[1] = callback(arg1(dependencyMap[14]).Text, { style: tmp.label, children: importDefault(dependencyMap[11])(channel) });
  obj.children = items1;
  return callback2(View, obj);
}
function FailedDestinationRow(destination) {
  let channel;
  let user;
  const arg1 = destination.destination;
  let obj = arg1(dependencyMap[15]);
  const items = [closure_4, closure_8];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {};
    let channel = null;
    if ("channel" === destination.type) {
      channel = channel.getChannel(destination.id);
    }
    obj.channel = channel;
    let user = null;
    if ("user" === destination.type) {
      user = user.getUser(destination.id);
    }
    obj.user = user;
    return obj;
  });
  ({ channel, user } = stateFromStoresObject);
  if (null != channel) {
    if (channel.isGroupDM()) {
      obj = { channel };
      let tmp2 = callback(FailedGroupDMRow, obj);
    }
    return tmp2;
  }
  if (null != user) {
    obj = { user };
    tmp2 = callback(FailedUserRow, obj);
  } else {
    tmp2 = null;
    if (null != channel) {
      const obj1 = { channel };
      tmp2 = callback(FailedChannelRow, obj1);
    }
  }
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
const StatusTypes = arg1(dependencyMap[7]).StatusTypes;
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = {};
obj = { borderWidth: 1, borderColor: importDefault(dependencyMap[10]).colors.BORDER_STRONG, borderRadius: importDefault(dependencyMap[10]).radii.lg, paddingVertical: importDefault(dependencyMap[10]).space.PX_8 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[8]);
obj.row = { gap: importDefault(dependencyMap[10]).space.PX_12, marginHorizontal: importDefault(dependencyMap[10]).space.PX_16 };
obj.label = { flexShrink: 1 };
let closure_13 = obj.createStyles(obj);
const obj1 = { gap: importDefault(dependencyMap[10]).space.PX_12, marginHorizontal: importDefault(dependencyMap[10]).space.PX_16 };
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/share/native/DestinationFailedAlertModal.tsx");

export default function DestinationFailedAlertModal(arg0) {
  let content;
  let failedDestinations;
  let onRetry;
  let title;
  ({ failedDestinations, onRetry } = arg0);
  ({ title, content } = arg0);
  let obj = { title, content };
  obj = { style: callback3().container, children: failedDestinations.map((destination) => callback(closure_17, { destination }, arg1)) };
  obj.extraContent = callback(View, obj);
  obj = {};
  if (null != onRetry) {
    const obj1 = {};
    const obj2 = { variant: "primary", onPress: onRetry };
    const intl2 = arg1(dependencyMap[20]).intl;
    obj2.text = intl2.string(arg1(dependencyMap[20]).t.5911Lb);
    const items = [callback(arg1(dependencyMap[18]).AlertActionButton, obj2, "confirm"), ];
    const obj3 = { variant: "secondary" };
    const intl3 = arg1(dependencyMap[20]).intl;
    obj3.text = intl3.string(arg1(dependencyMap[20]).t.WAI6xu);
    items[1] = callback(arg1(dependencyMap[18]).AlertActionButton, obj3, "cancel");
    obj1.children = items;
    let tmp7 = callback2(closure_12, obj1);
  } else {
    const obj4 = { variant: "primary" };
    const intl = arg1(dependencyMap[20]).intl;
    obj4.text = intl.string(arg1(dependencyMap[20]).t.BddRzS);
    tmp7 = callback(arg1(dependencyMap[18]).AlertActionButton, obj4, "confirm");
  }
  obj.children = tmp7;
  obj.actions = callback(arg1(dependencyMap[19]).AlertActions, obj);
  return callback(arg1(dependencyMap[18]).AlertModal, obj);
};
