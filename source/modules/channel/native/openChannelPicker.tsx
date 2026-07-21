// Module ID: 10363
// Function ID: 79958
// Name: openChannelPicker
// Dependencies: []
// Exports: default

// Module 10363 (openChannelPicker)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/channel/native/openChannelPicker.tsx");

export default function openChannelPicker(onClose) {
  let channelType;
  let filterFn;
  let guildId;
  let selectedChannel;
  ({ guildId, filterFn } = onClose);
  ({ selectedChannel, channelType } = onClose);
  if (filterFn === undefined) {
    filterFn = function h() {
      return true;
    };
  }
  let obj = {};
  Object.setPrototypeOf(null);
  const merged = Object.assign(onClose, obj);
  const guild = guild.getGuild(guildId);
  let items = channels.getChannels(guildId)[channelType];
  if (null == items) {
    items = [];
  }
  obj = {};
  obj = {};
  const obj2 = importDefault(dependencyMap[2]);
  const intl = arg1(dependencyMap[5]).intl;
  obj.title = intl.string(arg1(dependencyMap[5]).t.r2ptsz);
  obj.onClose = onClose.onClose;
  obj.header = obj;
  obj.guild = guild;
  const found = items.filter(filterFn);
  obj.channels = found.map((channel) => channel.channel);
  obj.selectedChannel = selectedChannel;
  const merged1 = Object.assign(merged);
  obj2.openLazy(arg1(dependencyMap[4])(dependencyMap[3], dependencyMap.paths), "ChannelPicker", obj);
};
