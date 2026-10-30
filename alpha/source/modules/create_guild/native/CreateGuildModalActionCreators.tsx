// Module ID: 14227
// Function ID: 14228
// Name: CreateGuildModalActionCreators
// Dependencies: [7141, 6738, 14228, 1995, 14223, 2]

// Module 14227 (CreateGuildModalActionCreators)
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import NUFActionCreators from "NUFActionCreators" /* 14223 */;
import CreateGuildConstants from "CreateGuildConstants" /* 7141 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: closure_4 } = CreateGuildConstants);
let obj = {
  openCreateGuildModal(onSuccess) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { onSuccess };
    obj.pushLazy(asyncRequire(14228, dependencyMap.paths), obj2, React3);
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
    obj.pushLazy(asyncRequire(14228, dependencyMap.paths), obj2, React3);
  },
  openGuildJoinServerScreen() {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(asyncRequire(14228, dependencyMap.paths), obj2, React3);
  }
};
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default obj;
