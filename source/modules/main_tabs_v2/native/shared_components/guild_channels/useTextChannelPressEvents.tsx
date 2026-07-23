// Module ID: 15671
// Function ID: 120842
// Name: useTextChannelPressEvents
// Dependencies: [31, 1348, 4140, 4138, 10340, 14967, 9099, 2]
// Exports: useTextChannelPressEvents

// Module 15671 (useTextChannelPressEvents)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let result = require("module_4140").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/useTextChannelPressEvents.tsx");

export const useTextChannelPressEvents = function useTextChannelPressEvents(channel, flag2) {
  let closure_0 = channel;
  let closure_1 = flag2;
  const items = [, , ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  items[2] = flag2;
  const items1 = [channel];
  return {
    onPress: React.useCallback(() => {
      let obj = callback(outer1_2[2]);
      obj.preload(channel.guild_id, channel.id);
      obj = { navigationReplace: callback };
      channel(outer1_2[3]).transitionToChannel(channel.id, obj);
    }, items),
    onLongPress: React.useCallback(() => {
      channel = outer1_4.getChannel(channel.parent_id);
      if (null != channel) {
        if (channel.isForumLikeChannel()) {
          if (channel.isForumPost()) {
            callback(outer1_2[4])(channel, channel);
          }
        }
      }
      if (channel.isThread()) {
        callback(outer1_2[5])(channel.id);
      } else {
        const result = channel(outer1_2[6]).openChannelLongPressActionSheet(channel.id);
        const obj2 = channel(outer1_2[6]);
      }
    }, items1),
    unstable_pressDelay: 32
  };
};
