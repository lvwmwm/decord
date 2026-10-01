// Module ID: 11157
// Function ID: 11158
// Name: useShouldHideMediaOptions
// Dependencies: [2045, 2052, 563, 2]
// Exports: default

// Module 11157 (useShouldHideMediaOptions)
import ChannelConstants from "ChannelConstants" /* 2052 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ChannelFlags = ChannelConstants.ChannelFlags;
const result = size.fileFinishedImporting("modules/media_channel/useShouldHideMediaOptions.tsx");

export default function useShouldHideMediaOptions(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ChannelStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    let parent_id;
    const tmp = ChannelStore;
    if (channel != null) {
      parent_id = channel.parent_id;
    }
    let channel1 = null;
    if (null != parent_id) {
      channel1 = null;
      if (channel.isForumPost()) {
        let parent_id1;
        const getChannel = tmp.getChannel;
        if (channel != null) {
          parent_id1 = channel.parent_id;
        }
        channel1 = getChannel(parent_id1);
      }
    }
    return channel1;
  });
  let hasFlagResult;
  if (stateFromStores != null) {
    hasFlagResult = stateFromStores.hasFlag(ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS);
  }
  return true === hasFlagResult;
};
