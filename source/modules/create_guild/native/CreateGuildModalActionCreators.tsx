// Module ID: 11764
// Function ID: 91367
// Dependencies: [9263, 4337, 11765, 1934, 11760, 2]

// Module 11764
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";

let closure_3;
let closure_4;
({ CreateGuildModalStates: closure_3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: closure_4 } = NUXGuildTemplatesAnalytics);
const result = require("getScreens").fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = importDefault(4337);
    obj = { onSuccess };
    obj.pushLazy(require(1934) /* maybeLoadBundle */(11765, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    importDefault(4337).popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    importDefault(4337).popWithKey(closure_4);
    const obj = importDefault(4337);
    require(11760) /* _startContactSyncForDiscoverability */.nextOnboardingStep({});
  },
  openGuildInviteScreen(stateFromStores1) {
    let obj = importDefault(4337);
    obj = { channel: stateFromStores1 };
    obj.pushLazy(require(1934) /* maybeLoadBundle */(11765, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = importDefault(4337);
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(require(1934) /* maybeLoadBundle */(11765, dependencyMap.paths), obj, closure_4);
  }
};
