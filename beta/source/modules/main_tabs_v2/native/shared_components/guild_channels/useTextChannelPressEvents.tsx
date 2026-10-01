// Module ID: 16814
// Function ID: 16815
// Name: useTextChannelPressEvents
// Dependencies: [19, 2045, 4849, 4847, 9681, 15746, 10374, 2]
// Exports: useTextChannelPressEvents

// Module 16814 (useTextChannelPressEvents)
import transitionToChannel from "transitionToChannel" /* 4847 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4849 */;
import showLongPressForumPostActionSheetDefault from "showLongPressForumPostActionSheet" /* 9681 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10374 */;
import showThreadLongPressActionSheetDefault from "showThreadLongPressActionSheet" /* 15746 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/useTextChannelPressEvents.tsx");

export const useTextChannelPressEvents = function useTextChannelPressEvents(channel, flag2) {
  let items;
  let items1;
  const navigationReplace = flag2;
  let obj = {
    onPress: react.useCallback(() => {
      const obj = ChannelActionCreatorsDefault;
      obj.preload(channel.guild_id, channel.id);
      const obj2 = transitionToChannel;
      const obj3 = { navigationReplace };
      obj2.transitionToChannel(channel.id, obj3);
    }, items),
    onLongPress: react.useCallback(() => {
      channel = ChannelStore.getChannel(channel.parent_id);
      if (null != channel) {
        if (channel.isForumLikeChannel()) {
          if (channel.isForumPost()) {
            showLongPressForumPostActionSheetDefault(channel, channel);
          }
        }
      }
      if (channel.isThread()) {
        showThreadLongPressActionSheetDefault(channel.id);
      } else {
        const obj3 = openChannelLongPressActionSheet;
        const result = obj3.openChannelLongPressActionSheet(obj.id);
      }
    }, items1),
    unstable_pressDelay: 32
  };
  items = [, , ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  items[2] = flag2;
  items1 = [channel];
  return obj;
};
