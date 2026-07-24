// Module ID: 14976
// Function ID: 114140
// Name: getActiveTextChannels
// Dependencies: [1352, 1348, 3758, 4325, 12682, 653, 1355, 1327, 2]
// Exports: getActiveTextChannels

// Module 14976 (getActiveTextChannels)
import { isTextChannel } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { Permissions } from "ME";
import { ChannelFlags } from "set";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_home/useActiveChannels.tsx");

export const getActiveTextChannels = function getActiveTextChannels(outer1_1, items5) {
  let obj;
  let obj2;
  let tmp = items5;
  if (items5 === undefined) {
    let items = [_isNativeReflectConstruct, closure_4, closure_6, closure_5];
    tmp = items;
  }
  [, , obj, obj2] = tmp;
  let mutedChannels;
  const activeChannelIds = obj.getActiveChannelIds(outer1_1);
  if (null != activeChannelIds) {
    const _Array = Array;
    items = Array.from(activeChannelIds);
  } else {
    items = [];
  }
  mutedChannels = obj2.getMutedChannels(outer1_1);
  const mapped = items.map((channelId) => store.getChannel(channelId));
  const found = mapped.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
  return found.filter((hasFlag) => {
    if (null != hasFlag) {
      if (hasFlag.hasFlag(outer1_8.ACTIVE_CHANNELS_REMOVED)) {
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
        if (closure_1.can(outer1_7.VIEW_CHANNEL, hasFlag)) {
          const channel = store.getChannel(hasFlag.parent_id);
          let tmp7 = !hasFlag.isThread() || null == channel || null == channel;
          if (!tmp7) {
            tmp7 = !channel.hasFlag(outer1_8.ACTIVE_CHANNELS_REMOVED);
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
