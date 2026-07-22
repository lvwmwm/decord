// Module ID: 9923
// Function ID: 76758
// Name: HeaderIcon
// Dependencies: []
// Exports: ForLaterCardHeader

// Module 9923 (HeaderIcon)
function HeaderIcon(channel) {
  channel = channel.channel;
  const require = channel;
  let obj = require(dependencyMap[6]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(channel.guild_id));
  if (null != stateFromStores) {
    obj = { guild: stateFromStores, size: require(dependencyMap[7]).GuildIconSizes.XSMALL };
    let tmp8 = callback(importDefault(dependencyMap[7]), obj);
    const tmp17 = importDefault(dependencyMap[7]);
  } else {
    if (null != channel) {
      if (channel.isGroupDM()) {
        obj = { channel, size: require(dependencyMap[9]).AvatarSizes.XSMALL };
        tmp8 = callback(importDefault(dependencyMap[8]), obj);
        const tmp12 = importDefault(dependencyMap[8]);
      }
    }
    const obj1 = { style: tmp.dmIcon };
    const obj2 = { size: "xxs" };
    obj1.children = callback(require(dependencyMap[10]).ChatIcon, obj2);
    tmp8 = callback(View, obj1);
  }
  return tmp8;
}
function ChannelName(channel) {
  channel = channel.channel;
  const require = channel;
  const tmp = callback2();
  let obj = require(dependencyMap[6]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(channel.guild_id));
  const tmp3 = importDefault(dependencyMap[11])(channel, false);
  let obj1 = require(dependencyMap[12]);
  const channelIconComponentWithGuild = obj1.getChannelIconComponentWithGuild(channel, stateFromStores);
  let isPrivateResult = channel.isPrivate();
  if (!isPrivateResult) {
    isPrivateResult = null == channelIconComponentWithGuild;
  }
  let formatToPlainStringResult = tmp3;
  if (channel.isDM()) {
    const intl = require(dependencyMap[13]).intl;
    obj = { username: tmp3 };
    formatToPlainStringResult = intl.formatToPlainString(require(dependencyMap[13]).t.smD7XV, obj);
  }
  obj = { style: tmp.channelNameContainer };
  let tmp12 = null;
  if (!isPrivateResult) {
    obj1 = { style: tmp.channelTypeIcon, size: "xxs" };
    tmp12 = callback(channelIconComponentWithGuild, obj1);
  }
  const items1 = [tmp12, ];
  const obj2 = { <string:2846932934>: true, <string:1289959171>: true, <string:1640337854>: true, <string:2933637077>: true, style: tmp.channelName, children: formatToPlainStringResult };
  items1[1] = callback(require(dependencyMap[14]).Text, obj2);
  obj.children = items1;
  return closure_6(View, obj);
}
const View = require(dependencyMap[0]).View;
let closure_4 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = _module);
const _module1 = require(dependencyMap[3]);
let obj = { cardHeader: {} };
obj = { padding: 6, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.dmIcon = obj;
obj.channelNameContainer = {};
obj.channelName = { flexShrink: 1 };
obj.channelTypeIcon = { marginRight: 4 };
obj.actionsContainer = {};
let closure_7 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[15]);
const result = _module2.fileFinishedImporting("modules/saved_messages/native/ForLaterCardHeader.tsx");

export const ForLaterCardHeader = function ForLaterCardHeader(channel) {
  channel = channel.channel;
  const tmp = callback2();
  let obj = { style: tmp.cardHeader };
  const items = [callback(HeaderIcon, { channel }), , , ];
  let tmp4 = null;
  if (!channel.isPrivate()) {
    obj = { size: "xxs" };
    tmp4 = callback(require(dependencyMap[5]).ChevronSmallRightIcon, obj);
  }
  items[1] = tmp4;
  items[2] = callback(ChannelName, { channel });
  obj = { style: tmp.actionsContainer, children: channel.actions };
  items[3] = callback(View, obj);
  obj.children = items;
  return closure_6(View, obj);
};
