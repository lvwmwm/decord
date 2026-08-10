// Module ID: 12063
// Function ID: 12064
// Dependencies: [8507, 4509, 12064, 1988, 12059, 2]

// Module 12063
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";

let c3;
let c4;
({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = require("CreateGuildModal").fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = importDefault(4509);
    obj = { onSuccess };
    obj.pushLazy(require(1988) /* asyncRequireImpl */(12064, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    importDefault(4509).popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    importDefault(4509).popWithKey(closure_4);
    const obj = importDefault(4509);
    require(12059) /* _startContactSyncForDiscoverability */.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    let obj = importDefault(4509);
    obj = { channel };
    obj.pushLazy(require(1988) /* asyncRequireImpl */(12064, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = importDefault(4509);
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(require(1988) /* asyncRequireImpl */(12064, dependencyMap.paths), obj, closure_4);
  }
};
