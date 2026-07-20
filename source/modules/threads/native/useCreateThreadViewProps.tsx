// Module ID: 10381
// Function ID: 80057
// Name: useCreateThreadViewProps
// Dependencies: []
// Exports: default

// Module 10381 (useCreateThreadViewProps)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/threads/native/useCreateThreadViewProps.tsx");

export default function useCreateThreadViewProps(arg0) {
  const tmp = importDefault(dependencyMap[1])(arg0);
  const arg1 = tmp;
  let obj = arg1(dependencyMap[2]);
  const items = [closure_3];
  const items1 = [tmp];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let parentChannelId;
    if (null != channel) {
      parentChannelId = tmp.parentChannelId;
    }
    return channel.getChannel(parentChannelId);
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
