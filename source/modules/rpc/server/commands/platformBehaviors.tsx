// Module ID: 13308
// Function ID: 101106
// Dependencies: []

// Module 13308
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default {
  [require(dependencyMap[0]).RPCCommands.GET_PLATFORM_BEHAVIORS]: {
    handler() {
      return { iosKeyboardResizesView: true };
    }
  }
};
