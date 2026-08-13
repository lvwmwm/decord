// Module ID: 12126
// Function ID: 12127
// Dependencies: [8556, 4550, 12127, 2007, 12122, 2]

// Module 12126
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";

let c3;
let c4;
({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = require("CreateGuildModal").fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = importDefault(4550);
    obj = { onSuccess };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(12127, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    importDefault(4550).popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    importDefault(4550).popWithKey(closure_4);
    const obj = importDefault(4550);
    require(12122) /* _startContactSyncForDiscoverability */.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    let obj = importDefault(4550);
    obj = { channel };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(12127, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = importDefault(4550);
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(12127, dependencyMap.paths), obj, closure_4);
  }
};
