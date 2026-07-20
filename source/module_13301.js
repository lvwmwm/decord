// Module ID: 13301
// Function ID: 101083
// Dependencies: []

// Module 13301
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default {
  [require(dependencyMap[0]).RPCCommands.GET_PLATFORM_BEHAVIORS]: {
    handler() {
      return { iosKeyboardResizesView: true };
    }
  }
};
