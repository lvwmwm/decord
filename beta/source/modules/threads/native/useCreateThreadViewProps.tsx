// Module ID: 11782
// Function ID: 11783
// Name: useCreateThreadViewProps
// Dependencies: [4762, 11250, 563, 2]
// Exports: default

// Module 11782 (useCreateThreadViewProps)
import useGetThreadDraftSettingsDefault from "useGetThreadDraftSettings" /* 11250 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, parentChannelId;

const result = size.fileFinishedImporting("modules/threads/native/useCreateThreadViewProps.tsx");

export default function useCreateThreadViewProps(arg0) {
  const tmp = useGetThreadDraftSettingsDefault(arg0);
  _require = tmp;
  const items = [ChannelStore];
  const items1 = [tmp];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => {
    parentChannelId = undefined;
    const getChannel = ChannelStore.getChannel;
    if (parentChannelId != null) {
      parentChannelId = parentChannelId.parentChannelId;
    }
    return getChannel(parentChannelId);
  }, items1);
  let tmp3 = null;
  if (null != tmp) {
    tmp3 = null;
    if (null != stateFromStores) {
      tmp3 = { threadSettingsDraft: tmp, parentChannel: stateFromStores };
      const obj2 = { threadSettingsDraft: tmp, parentChannel: stateFromStores };
    }
  }
  return tmp3;
};
