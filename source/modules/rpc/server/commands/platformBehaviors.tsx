// Module ID: 13310
// Function ID: 101128
// Dependencies: []

// Module 13310
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default {
  [require(dependencyMap[0]).RPCCommands.GET_PLATFORM_BEHAVIORS]: {
    handler() {
      return { iosKeyboardResizesView: true };
    }
  }
};
