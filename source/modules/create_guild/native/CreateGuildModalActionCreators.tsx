// Module ID: 11734
// Function ID: 91117
// Dependencies: [9155, 4338, 11735, 1935, 11730, 2]

// Module 11734
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";

let closure_3;
let closure_4;
({ CreateGuildModalStates: closure_3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: closure_4 } = NUXGuildTemplatesAnalytics);
const result = require("getScreens").fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = importDefault(4338);
    obj = { onSuccess };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(11735, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    importDefault(4338).popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    importDefault(4338).popWithKey(closure_4);
    const obj = importDefault(4338);
    require(11730) /* _startContactSyncForDiscoverability */.nextOnboardingStep({});
  },
  openGuildInviteScreen(stateFromStores1) {
    let obj = importDefault(4338);
    obj = { channel: stateFromStores1 };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(11735, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = importDefault(4338);
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(11735, dependencyMap.paths), obj, closure_4);
  }
};
