// Module ID: 11881
// Function ID: 11882
// Dependencies: [8617, 5260, 11882, 2007, 11877, 2]

// Module 11881
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";

let c3;
let c4;
({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = require("CreateGuildModal").fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = importDefault(5260);
    obj = { onSuccess };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(11882, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    importDefault(5260).popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    importDefault(5260).popWithKey(closure_4);
    const obj = importDefault(5260);
    require(11877) /* _startContactSyncForDiscoverability */.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    let obj = importDefault(5260);
    obj = { channel };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(11882, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = importDefault(5260);
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(11882, dependencyMap.paths), obj, closure_4);
  }
};
