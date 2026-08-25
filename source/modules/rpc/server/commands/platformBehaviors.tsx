// Module ID: 13974
// Function ID: 13975
// Name: sum
// Dependencies: [505, 2]

// Module 13974 (sum)
import set from "set" /* 2 */;
import sum from "sum" /* 505 */;

const result = set.fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default {
  [sum.RPCCommands.GET_PLATFORM_BEHAVIORS]: {
    handler() {
      return { iosKeyboardResizesView: true };
    }
  }
};
