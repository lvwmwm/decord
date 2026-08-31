// Module ID: 16534
// Function ID: 16535
// Name: useTextChannelPressEvents
// Dependencies: [19, 1387, 4461, 4459, 10264, 15667, 10613, 2]
// Exports: useTextChannelPressEvents

// Module 16534 (useTextChannelPressEvents)
import closure_3 from "noop" /* 19 */;
import closure_4 from "ensureGuildLoaded" /* 1387 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/useTextChannelPressEvents.tsx");

export const useTextChannelPressEvents = function useTextChannelPressEvents(channel, flag2) {
  closure_0 = channel;
  closure_1 = flag2;
  const items = [, , ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  items[2] = flag2;
  const items1 = [channel];
  return {
    onPress: React.useCallback(() => {
      let obj = callback(closure_1_2[2]);
      obj.preload(channel.guild_id, channel.id);
      obj = { navigationReplace: callback };
      channel(closure_1_2[3]).transitionToChannel(channel.id, obj);
    }, items),
    onLongPress: React.useCallback(() => {
      channel = closure_1_4.getChannel(channel.parent_id);
      if (null != channel) {
        if (channel.isForumLikeChannel()) {
          if (obj.isForumPost()) {
            callback(closure_1_2[4])(obj, channel);
          }
        }
      }
      if (channel.isThread()) {
        callback(closure_1_2[5])(obj.id);
      } else {
        const result = channel(closure_1_2[6]).openChannelLongPressActionSheet(obj.id);
        const obj3 = channel(closure_1_2[6]);
      }
    }, items1),
    unstable_pressDelay: 32
  };
};
