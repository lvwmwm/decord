// Module ID: 11947
// Function ID: 11948
// Dependencies: [8290, 4460, 11948, 1959, 11943, 2]

// Module 11947
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";

let c3;
let c4;
({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = require("CreateGuildModal").fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = importDefault(4460);
    obj = { onSuccess };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(11948, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    importDefault(4460).popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    importDefault(4460).popWithKey(closure_4);
    const obj = importDefault(4460);
    require(11943) /* _startContactSyncForDiscoverability */.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    let obj = importDefault(4460);
    obj = { channel };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(11948, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = importDefault(4460);
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(11948, dependencyMap.paths), obj, closure_4);
  }
};
