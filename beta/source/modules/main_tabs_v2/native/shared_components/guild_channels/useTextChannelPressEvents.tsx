// Module ID: 17688
// Function ID: 17689
// Name: useTextChannelPressEvents
// Dependencies: [19, 2045, 558, 568, 4771, 4769, 10602, 16453, 11219, 2]

// Module 17688 (useTextChannelPressEvents)
import transitionToChannel from "transitionToChannel" /* 4769 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4771 */;
import showLongPressForumPostActionSheetDefault from "showLongPressForumPostActionSheet" /* 10602 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11219 */;
import showThreadLongPressActionSheetDefault from "showThreadLongPressActionSheet" /* 16453 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/useTextChannelPressEvents.tsx");

export const useTextChannelPressEvents = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id, navigationReplace) => {
  _require = guild_id;
  const cResult = require("c").c(9);
  if (cResult[0] === guild_id.guild_id) {
    if (cResult[1] === guild_id.id) {
      if (cResult[2] === navigationReplace) {
        let tmp2 = cResult[3];
      }
      if (cResult[4] !== guild_id) {
        const fn2 = function u() {
          const channel = ChannelStore.getChannel(guild_id.parent_id);
          if (null != channel) {
            if (channel.isForumLikeChannel()) {
              if (obj.isForumPost()) {
                showLongPressForumPostActionSheetDefault(obj, channel);
              }
            }
          }
          if (guild_id.isThread()) {
            showThreadLongPressActionSheetDefault(obj.id);
          } else {
            const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(obj.id);
          }
        };
        cResult[4] = guild_id;
        cResult[5] = fn2;
        let tmp3 = fn2;
      } else {
        tmp3 = cResult[5];
      }
      if (cResult[6] === tmp3) {
        if (cResult[7] === tmp2) {
          let tmp4 = cResult[8];
        }
        return tmp4;
      }
      const obj2 = { onPress: tmp2, onLongPress: tmp3, unstable_pressDelay: 32 };
      cResult[6] = tmp3;
      cResult[7] = tmp2;
      cResult[8] = obj2;
      tmp4 = obj2;
    }
  }
  const fn = function t() {
    ChannelActionCreatorsDefault.preload(guild_id.guild_id, guild_id.id);
    transitionToChannel.transitionToChannel(guild_id.id, { navigationReplace });
  };
  cResult[0] = guild_id.guild_id;
  cResult[1] = guild_id.id;
  cResult[2] = navigationReplace;
  cResult[3] = fn;
  tmp2 = fn;
}) : ((arg0, navigationReplace) => {
  const user = arg0;
  let obj = { onPress: null, onLongPress: null, unstable_pressDelay: 32 };
  const items = [, , ];
  ({ id: arr[0], guild_id: arr[1] } = arg0);
  items[2] = navigationReplace;
  obj.onPress = noop.useCallback(() => {
    ChannelActionCreatorsDefault.preload(user.guild_id, user.id);
    transitionToChannel.transitionToChannel(user.id, { navigationReplace });
  }, items);
  const items1 = [arg0];
  obj.onLongPress = noop.useCallback(() => {
    const channel = ChannelStore.getChannel(user.parent_id);
    if (null != channel) {
      if (channel.isForumLikeChannel()) {
        if (obj.isForumPost()) {
          showLongPressForumPostActionSheetDefault(obj, channel);
        }
      }
    }
    if (user.isThread()) {
      showThreadLongPressActionSheetDefault(obj.id);
    } else {
      const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(obj.id);
    }
  }, items1);
  return obj;
});
