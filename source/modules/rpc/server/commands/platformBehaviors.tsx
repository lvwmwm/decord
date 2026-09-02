// Module ID: 14383
// Function ID: 14384
// Name: sum
// Dependencies: [502, 2]

// Module 14383 (sum)
import set from "set" /* 2 */;
import sum from "sum" /* 502 */;

const result = set.fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default {
  [sum.RPCCommands.GET_PLATFORM_BEHAVIORS]: {
    handler() {
      return { iosKeyboardResizesView: true };
    }
  }
};
