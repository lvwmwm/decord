// Module ID: 12123
// Function ID: 12124
// Dependencies: [8552, 4549, 12124, 2007, 12119, 2]

// Module 12123
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";

let c3;
let c4;
({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = require("CreateGuildModal").fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = importDefault(4549);
    obj = { onSuccess };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(12124, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    importDefault(4549).popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    importDefault(4549).popWithKey(closure_4);
    const obj = importDefault(4549);
    require(12119) /* _startContactSyncForDiscoverability */.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    let obj = importDefault(4549);
    obj = { channel };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(12124, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = importDefault(4549);
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(12124, dependencyMap.paths), obj, closure_4);
  }
};
