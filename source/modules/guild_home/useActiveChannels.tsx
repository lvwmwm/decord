// Module ID: 14802
// Function ID: 111574
// Name: getActiveTextChannels
// Dependencies: []
// Exports: getActiveTextChannels

// Module 14802 (getActiveTextChannels)
const isTextChannel = require(dependencyMap[0]).isTextChannel;
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const Permissions = require(dependencyMap[5]).Permissions;
const ChannelFlags = require(dependencyMap[6]).ChannelFlags;
const _module = require(dependencyMap[8]);
const result = _module.fileFinishedImporting("modules/guild_home/useActiveChannels.tsx");

export const getActiveTextChannels = function getActiveTextChannels(arg0, items5) {
  let obj;
  let obj2;
  let tmp = items5;
  if (items5 === undefined) {
    let items = [closure_3, closure_4, closure_6, closure_5];
    tmp = items;
  }
  [, , obj, obj2] = tmp;
  let mutedChannels;
  const activeChannelIds = obj.getActiveChannelIds(arg0);
  if (null != activeChannelIds) {
    const _Array = Array;
    items = Array.from(activeChannelIds);
  } else {
    items = [];
  }
  mutedChannels = obj2.getMutedChannels(arg0);
  const mapped = items.map((channelId) => store.getChannel(channelId));
  const found = mapped.filter(require(dependencyMap[7]).isNotNullish);
  return found.filter((hasFlag) => {
    if (null != hasFlag) {
      if (hasFlag.hasFlag(constants2.ACTIVE_CHANNELS_REMOVED)) {
        return false;
      }
    }
    if (set(hasFlag.type)) {
      if (set.has(hasFlag.id)) {
        return false;
      } else {
        if (null != hasFlag.parent_id) {
          if (set.has(hasFlag.parent_id)) {
            return false;
          }
        }
        if (closure_1.can(constants.VIEW_CHANNEL, hasFlag)) {
          const channel = store.getChannel(hasFlag.parent_id);
          let tmp7 = !hasFlag.isThread() || null == channel || null == channel;
          if (!tmp7) {
            tmp7 = !channel.hasFlag(constants2.ACTIVE_CHANNELS_REMOVED);
          }
          return tmp7;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  });
};
