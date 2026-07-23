// Module ID: 9929
// Function ID: 76795
// Name: HeaderIcon
// Dependencies: [27, 1838, 33, 4130, 689, 5514, 566, 5515, 9096, 1273, 4629, 4320, 4593, 1212, 4126, 2]
// Exports: ForLaterCardHeader

// Module 9929 (HeaderIcon)
import { View } from "get ActivityIndicator";
import closure_4 from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
function HeaderIcon(channel) {
  channel = channel.channel;
  let obj = channel(566);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getGuild(channel.guild_id));
  if (null != stateFromStores) {
    obj = { guild: stateFromStores, size: channel(5515).GuildIconSizes.XSMALL };
    let tmp8 = callback(importDefault(5515), obj);
    const tmp17 = importDefault(5515);
  } else {
    if (null != channel) {
      if (channel.isGroupDM()) {
        obj = { channel, size: channel(1273).AvatarSizes.XSMALL };
        tmp8 = callback(importDefault(9096), obj);
        const tmp12 = importDefault(9096);
      }
    }
    const obj1 = { style: tmp.dmIcon };
    const obj2 = { size: "xxs" };
    obj1.children = callback(channel(4629).ChatIcon, obj2);
    tmp8 = callback(View, obj1);
  }
  return tmp8;
}
function ChannelName(channel) {
  channel = channel.channel;
  const tmp = callback2();
  let obj = channel(566);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getGuild(channel.guild_id));
  const tmp3 = importDefault(4320)(channel, false);
  let obj1 = channel(4593);
  const channelIconComponentWithGuild = obj1.getChannelIconComponentWithGuild(channel, stateFromStores);
  let isPrivateResult = channel.isPrivate();
  if (!isPrivateResult) {
    isPrivateResult = null == channelIconComponentWithGuild;
  }
  let formatToPlainStringResult = tmp3;
  if (channel.isDM()) {
    const intl = channel(1212).intl;
    obj = { username: tmp3 };
    formatToPlainStringResult = intl.formatToPlainString(channel(1212).t.smD7XV, obj);
  }
  obj = { style: tmp.channelNameContainer };
  let tmp12 = null;
  if (!isPrivateResult) {
    obj1 = { style: tmp.channelTypeIcon, size: "xxs" };
    tmp12 = callback(channelIconComponentWithGuild, obj1);
  }
  const items1 = [tmp12, ];
  const obj2 = { style: tmp.channelName, variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: formatToPlainStringResult };
  items1[1] = callback(channel(4126).Text, obj2);
  obj.children = items1;
  return closure_6(View, obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = { cardHeader: { flexDirection: "row", alignItems: "center", gap: 8 } };
obj = { padding: 6, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.dmIcon = obj;
obj.channelNameContainer = { flexDirection: "row", alignItems: "center", flexShrink: 1 };
obj.channelName = { flexShrink: 1 };
obj.channelTypeIcon = { marginRight: 4 };
obj.actionsContainer = { marginVertical: -4, marginLeft: "auto" };
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("jsxProd").fileFinishedImporting("modules/saved_messages/native/ForLaterCardHeader.tsx");

export const ForLaterCardHeader = function ForLaterCardHeader(channel) {
  channel = channel.channel;
  const tmp = callback2();
  let obj = { style: tmp.cardHeader };
  const items = [callback(HeaderIcon, { channel }), , , ];
  let tmp4 = null;
  if (!channel.isPrivate()) {
    obj = { size: "xxs" };
    tmp4 = callback(require(5514) /* ChevronSmallRightIcon */.ChevronSmallRightIcon, obj);
  }
  items[1] = tmp4;
  items[2] = callback(ChannelName, { channel });
  obj = { style: tmp.actionsContainer, children: channel.actions };
  items[3] = callback(View, obj);
  obj.children = items;
  return closure_6(View, obj);
};
