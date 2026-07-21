// Module ID: 14083
// Function ID: 106897
// Name: useLatestChannelMessage
// Dependencies: []
// Exports: default

// Module 14083 (useLatestChannelMessage)
let closure_3 = importDefault(dependencyMap[0]);
const useEffect = arg1(dependencyMap[1]).useEffect;
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/message_previews/useLatestChannelMessage.tsx");

export default function useLatestChannelMessage(arg0) {
  let id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const arg1 = flag;
  let closure_1;
  let dependencyMap;
  let callback;
  ({ guild_id: closure_1, id } = arg0);
  dependencyMap = id;
  const items = [closure_5];
  const tmp = callback(arg1(dependencyMap[3]).useStateFromStoresArray(items, () => {
    if (flag) {
      const items = [true, true];
      let items1 = items;
    } else {
      items1 = [closure_5.message(closure_1, id), closure_5.isLatest(closure_1, id)];
    }
    return items1;
  }), 2);
  callback = tmp2;
  const items1 = [id, tmp[1]];
  useEffect(() => {
    if (!tmp) {
      _undefined(id[4]).addWant(id);
      const obj = _undefined(id[4]);
      const tmp2 = _undefined;
    }
  }, items1);
  return tmp[0];
};
