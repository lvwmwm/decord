// Module ID: 9525
// Function ID: 74201
// Name: usePollMessageContextItemTypes
// Dependencies: []
// Exports: default

// Module 9525 (usePollMessageContextItemTypes)
let closure_2 = importDefault(dependencyMap[0]);
const obj = { END_EARLY: 0, [0]: "END_EARLY" };
let closure_4 = [];
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/polls/chat/usePollMessageContextItemTypes.tsx");

export default function usePollMessageContextItemTypes(poll) {
  const obj = arg1(dependencyMap[1]);
  const items = [closure_2];
  poll = poll.poll;
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
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
