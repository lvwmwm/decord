// Module ID: 11158
// Function ID: 11159
// Name: usePollMessageContextItemTypes
// Dependencies: [502, 504, 2]
// Exports: default

// Module 11158 (usePollMessageContextItemTypes)
import get_initialized from "get initialized" /* 504 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const PollMessageContextItemTypes = { END_EARLY: 0, [0]: "END_EARLY" };
let closure_4 = [];
const result = size.fileFinishedImporting("modules/polls/chat/usePollMessageContextItemTypes.tsx");

export default function usePollMessageContextItemTypes(poll) {
  let id;
  const obj = get_initialized;
  const items = [AuthenticationStore];
  poll = poll.poll;
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  if (poll.isPoll()) {
    if (null != poll) {
      const expiry = poll.expiry;
      const _Date = Date;
      const items1 = [];
      const tmp5 = !expiry.isSameOrBefore(Date.now()) && poll.author.id === stateFromStores;
      if (tmp5) {
        items1.push(obj.END_EARLY);
      }
      return items1;
    }
  }
  return closure_4;
};
export { PollMessageContextItemTypes };
