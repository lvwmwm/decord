// Module ID: 11726
// Function ID: 91055
// Dependencies: []

// Module 11726
const _module = require(dependencyMap[0]);
({ CreateGuildModalStates: closure_3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: closure_4 } = _module);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = importDefault(dependencyMap[1]);
    obj = { onSuccess };
    obj.pushLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    importDefault(dependencyMap[1]).popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    importDefault(dependencyMap[1]).popWithKey(closure_4);
    const obj = importDefault(dependencyMap[1]);
    require(dependencyMap[4]).nextOnboardingStep({});
  },
  openGuildInviteScreen(stateFromStores1) {
    let obj = importDefault(dependencyMap[1]);
    obj = { channel: stateFromStores1 };
    obj.pushLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = importDefault(dependencyMap[1]);
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), obj, closure_4);
  }
};
