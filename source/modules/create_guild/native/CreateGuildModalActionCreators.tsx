// Module ID: 11774
// Function ID: 91273
// Dependencies: [9199, 4372, 11775, 1935, 11770, 2]

// Module 11774
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";

let closure_3;
let closure_4;
({ CreateGuildModalStates: closure_3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: closure_4 } = NUXGuildTemplatesAnalytics);
const result = require("getScreens").fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = importDefault(4372);
    obj = { onSuccess };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(11775, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    importDefault(4372).popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    importDefault(4372).popWithKey(closure_4);
    const obj = importDefault(4372);
    require(11770) /* _startContactSyncForDiscoverability */.nextOnboardingStep({});
  },
  openGuildInviteScreen(stateFromStores1) {
    let obj = importDefault(4372);
    obj = { channel: stateFromStores1 };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(11775, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = importDefault(4372);
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(11775, dependencyMap.paths), obj, closure_4);
  }
};
