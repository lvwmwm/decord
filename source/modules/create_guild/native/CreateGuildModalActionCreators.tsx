// Module ID: 11735
// Function ID: 91122
// Dependencies: [9155, 4338, 11736, 1935, 11731, 2]

// Module 11735
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";

let closure_3;
let closure_4;
({ CreateGuildModalStates: closure_3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: closure_4 } = NUXGuildTemplatesAnalytics);
const result = require("getScreens").fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = importDefault(4338);
    obj = { onSuccess };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(11736, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    importDefault(4338).popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    importDefault(4338).popWithKey(closure_4);
    const obj = importDefault(4338);
    require(11731) /* _startContactSyncForDiscoverability */.nextOnboardingStep({});
  },
  openGuildInviteScreen(stateFromStores1) {
    let obj = importDefault(4338);
    obj = { channel: stateFromStores1 };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(11736, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = importDefault(4338);
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(11736, dependencyMap.paths), obj, closure_4);
  }
};
