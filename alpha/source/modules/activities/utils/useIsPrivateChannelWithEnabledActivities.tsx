// Module ID: 11683
// Function ID: 11684
// Name: useIsPrivateChannelWithEnabledActivities
// Dependencies: [4858, 563, 2]
// Exports: default, isPrivateChannelWithEnabledActivities

// Module 11683 (useIsPrivateChannelWithEnabledActivities)
import ChannelStore from "ChannelStore" /* 4858 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/activities/utils/useIsPrivateChannelWithEnabledActivities.tsx");

export default function useIsPrivateChannelWithEnabledActivities(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ChannelStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(closure_0));
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.isPrivate();
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export function isPrivateChannelWithEnabledActivities(arg0) {
  if (null == arg0) {
    return false;
  } else {
    const channel = ChannelStore.getChannel(arg0);
    let flag;
    if (channel != null) {
      flag = channel.isPrivate();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
}
