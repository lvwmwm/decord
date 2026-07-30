// Module ID: 11795
// Function ID: 11796
// Dependencies: [9219, 4395, 11796, 1959, 11791, 2]

// Module 11795
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";

let c3;
let c4;
({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = require("CreateGuildModal").fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = importDefault(4395);
    obj = { onSuccess };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(11796, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    importDefault(4395).popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    importDefault(4395).popWithKey(closure_4);
    const obj = importDefault(4395);
    require(11791) /* _startContactSyncForDiscoverability */.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    let obj = importDefault(4395);
    obj = { channel };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(11796, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = importDefault(4395);
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(11796, dependencyMap.paths), obj, closure_4);
  }
};
