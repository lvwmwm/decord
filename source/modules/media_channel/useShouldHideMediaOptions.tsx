// Module ID: 9537
// Function ID: 74279
// Name: useShouldHideMediaOptions
// Dependencies: [1348, 1355, 624, 2]
// Exports: default

// Module 9537 (useShouldHideMediaOptions)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ChannelFlags } from "set";

const require = arg1;
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/media_channel/useShouldHideMediaOptions.tsx");

export default function useShouldHideMediaOptions(arg0) {
  const _require = arg0;
  let hasFlagResult;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(624).useStateFromStores(items, () => {
    const channel = outer1_2.getChannel(closure_0);
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
        channel1 = outer1_2.getChannel(parent_id1);
      }
    }
    return channel1;
  });
  if (null != stateFromStores) {
    hasFlagResult = stateFromStores.hasFlag(ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS);
  }
  return true === hasFlagResult;
};
