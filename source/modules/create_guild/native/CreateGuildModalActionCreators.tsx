// Module ID: 12640
// Function ID: 12641
// Dependencies: [6920, 4731, 12641, 2008, 12636, 2]

// Module 12640
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;
import _startContactSyncForDiscoverability from "_startContactSyncForDiscoverability" /* 12636 */;
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics" /* 6920 */;

({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = set.fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = _modDef4731;
    obj = { onSuccess };
    obj.pushLazy(asyncRequireImpl(12641, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    _modDef4731.popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    _modDef4731.popWithKey(closure_4);
    const obj = _modDef4731;
    _startContactSyncForDiscoverability.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    let obj = _modDef4731;
    obj = { channel };
    obj.pushLazy(asyncRequireImpl(12641, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = _modDef4731;
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(asyncRequireImpl(12641, dependencyMap.paths), obj, closure_4);
  }
};
