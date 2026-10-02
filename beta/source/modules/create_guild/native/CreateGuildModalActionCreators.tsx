// Module ID: 12098
// Function ID: 12099
// Name: CreateGuildModalActionCreators
// Dependencies: [6396, 5040, 12099, 1987, 12094, 2]

// Module 12098 (CreateGuildModalActionCreators)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import NUFActionCreators from "NUFActionCreators" /* 12094 */;
import CreateGuildConstants from "CreateGuildConstants" /* 6396 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: closure_4 } = CreateGuildConstants);
let obj = {
  openCreateGuildModal(onSuccess) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { onSuccess };
    obj.pushLazy(asyncRequire(12099, dependencyMap.paths), obj2, React3);
  },
  closeCreateGuildModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(React3);
  },
  closeCreateGuildOnboardingModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(React3);
    const obj2 = NUFActionCreators;
    obj2.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { channel };
    obj.pushLazy(asyncRequire(12099, dependencyMap.paths), obj2, React3);
  },
  openGuildJoinServerScreen() {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(asyncRequire(12099, dependencyMap.paths), obj2, React3);
  }
};
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default obj;
