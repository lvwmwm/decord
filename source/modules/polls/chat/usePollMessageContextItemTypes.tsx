// Module ID: 9538
// Function ID: 74282
// Name: usePollMessageContextItemTypes
// Dependencies: [1194, 566, 2]
// Exports: default

// Module 9538 (usePollMessageContextItemTypes)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let obj = { END_EARLY: 0, [0]: "END_EARLY" };
let closure_4 = [];
const result = require("set").fileFinishedImporting("modules/polls/chat/usePollMessageContextItemTypes.tsx");

export default function usePollMessageContextItemTypes(poll) {
  const obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  poll = poll.poll;
  const stateFromStores = obj.useStateFromStores(items, () => outer1_2.getId());
  if (poll.isPoll()) {
    if (null != poll) {
      const items1 = [];
      const expiry = poll.expiry;
      const _Date = Date;
      if (tmp4) {
        items1.push(obj.END_EARLY);
      }
      return items1;
    }
  }
  return closure_4;
};
export const PollMessageContextItemTypes = obj;
