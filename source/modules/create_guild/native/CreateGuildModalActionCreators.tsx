// Module ID: 12144
// Function ID: 12145
// Dependencies: [8578, 4572, 12145, 2007, 12140, 2]

// Module 12144
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";

let c3;
let c4;
({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = require("CreateGuildModal").fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = importDefault(4572);
    obj = { onSuccess };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(12145, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    importDefault(4572).popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    importDefault(4572).popWithKey(closure_4);
    const obj = importDefault(4572);
    require(12140) /* _startContactSyncForDiscoverability */.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    let obj = importDefault(4572);
    obj = { channel };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(12145, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = importDefault(4572);
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(12145, dependencyMap.paths), obj, closure_4);
  }
};
