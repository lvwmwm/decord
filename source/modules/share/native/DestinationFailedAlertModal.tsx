// Module ID: 9939
// Function ID: 76837
// Name: FailedGroupDMRow
// Dependencies: [31, 27, 1348, 1838, 4217, 3767, 1849, 482, 33, 4130, 689, 4320, 9134, 1273, 4126, 566, 3969, 9940, 4475, 4475, 1212, 2]
// Exports: default

// Module 9939 (FailedGroupDMRow)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { StatusTypes } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
const require = arg1;
function FailedGroupDMRow(channel) {
  channel = channel.channel;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.row };
  obj = {};
  const tmp2 = importDefault(4320)(channel);
  obj.size = require(1273) /* Button */.AvatarSizes.REFRESH_MEDIUM_32;
  obj.channel = channel;
  const items = [callback(importDefault(9134), obj), ];
  obj = { style: tmp.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: tmp2 };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(View, obj);
}
function FailedUserRow(user) {
  user = user.user;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = user(566);
  const items = [closure_7];
  let stateFromStores = obj.useStateFromStores(items, () => outer1_7.getNickname(user.id));
  let obj1 = user(566);
  const items1 = [closure_6];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ isMobileOnline: outer1_6.isMobileOnline(user.id), status: outer1_6.getStatus(user.id), isVROnline: outer1_6.isVROnline(user.id) }));
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
    obj.size = user(1273).AvatarSizes.XSMALL;
    obj.avatarDecoration = user.avatarDecoration;
    obj.autoStatusCutout = true;
    const items2 = [closure_10(user(1273).Avatar, obj), ];
    obj1 = { style: tmp.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail" };
    if (null == stateFromStores) {
      stateFromStores = importDefault(3969).getName(user);
      const obj6 = importDefault(3969);
    }
    obj1.children = stateFromStores;
    items2[1] = closure_10(user(4126).Text, obj1);
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
  const tmp = _createForOfIteratorHelperLoose();
  let obj = channel(566);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    return outer1_5.getGuild(guild_id);
  });
  obj = { style: tmp.row };
  obj = { "aria-label": "", guild: stateFromStores, channel, size: channel(9940).GuildIconWithChannelTypeSizes.SMALL_32 };
  const items1 = [callback(channel(9940).GuildIconWithChannelType, obj), ];
  const obj1 = { style: tmp.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: importDefault(4320)(channel) };
  items1[1] = callback(channel(4126).Text, obj1);
  obj.children = items1;
  return callback2(View, obj);
}
function FailedDestinationRow(destination) {
  let channel;
  let user;
  destination = destination.destination;
  let obj = destination(566);
  const items = [_isNativeReflectConstruct, closure_8];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {};
    let channel = null;
    if ("channel" === destination.type) {
      channel = outer1_4.getChannel(destination.id);
    }
    obj.channel = channel;
    let user = null;
    if ("user" === destination.type) {
      user = outer1_8.getUser(destination.id);
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
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { display: "flex", flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_12, height: 40, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.row = obj1;
_createForOfIteratorHelperLoose.label = { flexShrink: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/share/native/DestinationFailedAlertModal.tsx");

export default function DestinationFailedAlertModal(arg0) {
  let content;
  let failedDestinations;
  let onRetry;
  let title;
  ({ failedDestinations, onRetry } = arg0);
  ({ title, content } = arg0);
  let obj = { title, content };
  obj = { style: _createForOfIteratorHelperLoose().container, children: failedDestinations.map((destination) => outer1_10(outer1_17, { destination }, arg1)) };
  obj.extraContent = callback(View, obj);
  obj = {};
  if (null != onRetry) {
    const obj1 = {};
    const obj2 = { variant: "primary", onPress: onRetry };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj2.text = intl2.string(require(1212) /* getSystemLocale */.t["5911Lb"]);
    const items = [callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj2, "confirm"), ];
    const obj3 = { variant: "secondary" };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj3.text = intl3.string(require(1212) /* getSystemLocale */.t.WAI6xu);
    items[1] = callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj3, "cancel");
    obj1.children = items;
    let tmp7 = callback2(closure_12, obj1);
  } else {
    const obj4 = { variant: "primary" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj4.text = intl.string(require(1212) /* getSystemLocale */.t.BddRzS);
    tmp7 = callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj4, "confirm");
  }
  obj.children = tmp7;
  obj.actions = callback(require(4475) /* getAlertModalItemKey */.AlertActions, obj);
  return callback(require(4475) /* getAlertModalItemKey */.AlertModal, obj);
};
