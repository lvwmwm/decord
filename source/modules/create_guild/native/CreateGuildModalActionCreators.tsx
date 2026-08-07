// Module ID: 11996
// Function ID: 11997
// Dependencies: [8447, 4507, 11997, 1988, 11992, 2]

// Module 11996
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";

let c3;
let c4;
({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = require("CreateGuildModal").fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = importDefault(4507);
    obj = { onSuccess };
    obj.pushLazy(require(1988) /* asyncRequireImpl */(11997, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    importDefault(4507).popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    importDefault(4507).popWithKey(closure_4);
    const obj = importDefault(4507);
    require(11992) /* _startContactSyncForDiscoverability */.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    let obj = importDefault(4507);
    obj = { channel };
    obj.pushLazy(require(1988) /* asyncRequireImpl */(11997, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = importDefault(4507);
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(require(1988) /* asyncRequireImpl */(11997, dependencyMap.paths), obj, closure_4);
  }
};
