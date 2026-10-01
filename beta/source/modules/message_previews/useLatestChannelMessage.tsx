// Module ID: 14865
// Function ID: 14866
// Name: useLatestChannelMessage
// Dependencies: [32, 19, 13262, 504, 14866, 2]
// Exports: default

// Module 14865 (useLatestChannelMessage)
import react from "react" /* 19 */;
import MessagePreviewManagerDefault from "MessagePreviewManager" /* 14866 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import MessagePreviewStore from "message_previews/MessagePreviewStore" /* 13262 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
const useEffect = react.useEffect;
const result = size.fileFinishedImporting("modules/message_previews/useLatestChannelMessage.tsx");

export default function useLatestChannelMessage(arg0) {
  let c1;
  let closure_3;
  let first;
  let id;
  let tmp3;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  c1 = undefined;
  id = undefined;
  ({ guild_id: c1, id } = arg0);
  let obj = flag(id[3]);
  let items = [MessagePreviewStore];
  [first, tmp3] = obj.useStateFromStoresArray(items, () => {
    let items1;
    const tmp = flag;
    if (tmp) {
      const items = [null, true];
      items1 = items;
    } else {
      items1 = [MessagePreviewStore.message(c1, id), MessagePreviewStore.isLatest(c1, id)];
    }
    return items1;
  });
  _slicedToArray = tmp3;
  let items1 = [id, tmp3];
  useEffect(() => {
    let tmp2 = null == id;
    const tmp = id;
    if (!tmp2) {
      tmp2 = closure_3;
    }
    if (!tmp2) {
      const obj = MessagePreviewManagerDefault;
      obj.addWant(tmp);
    }
  }, items1);
  return first;
};
