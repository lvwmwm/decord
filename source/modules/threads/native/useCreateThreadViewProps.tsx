// Module ID: 10398
// Function ID: 80154
// Name: useCreateThreadViewProps
// Dependencies: [1348, 9548, 624, 2]
// Exports: default

// Module 10398 (useCreateThreadViewProps)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let require = arg1;
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/threads/native/useCreateThreadViewProps.tsx");

export default function useCreateThreadViewProps(arg0) {
  const tmp = importDefault(9548)(arg0);
  const require = tmp;
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [_isNativeReflectConstruct];
  const items1 = [tmp];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let parentChannelId;
    if (null != outer1_3) {
      parentChannelId = tmp.parentChannelId;
    }
    return outer1_3.getChannel(parentChannelId);
  }, items1);
  let tmp3 = null;
  if (null != tmp) {
    tmp3 = null;
    if (null != stateFromStores) {
      obj = { threadSettingsDraft: tmp, parentChannel: stateFromStores };
      tmp3 = obj;
    }
  }
  return tmp3;
};
