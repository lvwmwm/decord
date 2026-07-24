// Module ID: 14257
// Function ID: 109448
// Name: useLatestChannelMessage
// Dependencies: [57, 31, 12692, 566, 14258, 2]
// Exports: default

// Module 14257 (useLatestChannelMessage)
import _slicedToArray from "_slicedToArray";
import { useEffect } from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/message_previews/useLatestChannelMessage.tsx");

export default function useLatestChannelMessage(arg0) {
  let c1;
  let id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  c1 = undefined;
  id = undefined;
  let callback;
  ({ guild_id: c1, id } = arg0);
  let items = [_createForOfIteratorHelperLoose];
  const tmp = callback(flag(id[3]).useStateFromStoresArray(items, () => {
    if (flag) {
      const items = [null, true];
      let items1 = items;
    } else {
      items1 = [outer1_5.message(c1, id), outer1_5.isLatest(c1, id)];
    }
    return items1;
  }), 2);
  callback = tmp2;
  let items1 = [id, tmp[1]];
  useEffect(() => {
    if (!tmp) {
      _undefined(id[4]).addWant(id);
      const obj = _undefined(id[4]);
    }
  }, items1);
  return tmp[0];
};
