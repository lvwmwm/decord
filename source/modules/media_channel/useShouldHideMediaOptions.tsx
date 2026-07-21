// Module ID: 9529
// Function ID: 74225
// Name: useShouldHideMediaOptions
// Dependencies: []
// Exports: default

// Module 9529 (useShouldHideMediaOptions)
let closure_2 = importDefault(dependencyMap[0]);
const ChannelFlags = arg1(dependencyMap[1]).ChannelFlags;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/media_channel/useShouldHideMediaOptions.tsx");

export default function useShouldHideMediaOptions(arg0) {
  const arg1 = arg0;
  let hasFlagResult;
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const channel = store.getChannel(arg0);
    let parent_id;
    if (null != channel) {
      parent_id = channel.parent_id;
    }
    let channel1 = null;
    if (null != parent_id) {
      channel1 = null;
      if (channel.isForumPost()) {
        let parent_id1;
        if (null != channel) {
          parent_id1 = channel.parent_id;
        }
        channel1 = store.getChannel(parent_id1);
      }
    }
    return channel1;
  });
  if (null != stateFromStores) {
    hasFlagResult = stateFromStores.hasFlag(ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS);
  }
  return true === hasFlagResult;
};
