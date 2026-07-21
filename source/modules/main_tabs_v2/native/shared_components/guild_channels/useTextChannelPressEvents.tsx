// Module ID: 15546
// Function ID: 118626
// Name: useTextChannelPressEvents
// Dependencies: []
// Exports: useTextChannelPressEvents

// Module 15546 (useTextChannelPressEvents)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/useTextChannelPressEvents.tsx");

export const useTextChannelPressEvents = function useTextChannelPressEvents(channel, flag2) {
  flag2 = channel;
  const importDefault = flag2;
  const items = [, , ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  items[2] = flag2;
  const items1 = [channel];
  return {
    onPress: React.useCallback((self) => {
      let obj = arg1(closure_2[2]);
      obj.preload(self.guild_id, self.id);
      obj = { navigationReplace: arg1 };
      self(closure_2[3]).transitionToChannel(self.id, obj);
    }, items),
    onLongPress: React.useCallback((self) => {
      const channel = channel.getChannel(self.parent_id);
      if (null != channel) {
        if (channel.isForumLikeChannel()) {
          if (self.isForumPost()) {
            arg1(closure_2[4])(self, channel);
          }
        }
      }
      if (self.isThread()) {
        arg1(closure_2[5])(self.id);
      } else {
        const result = self(closure_2[6]).openChannelLongPressActionSheet(self.id);
        const obj2 = self(closure_2[6]);
      }
    }, items1),
    unstable_pressDelay: 32
  };
};
