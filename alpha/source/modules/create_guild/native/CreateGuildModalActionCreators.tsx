// Module ID: 14912
// Function ID: 14913
// Name: CreateGuildModalActionCreators
// Dependencies: [7731, 6785, 14913, 2118, 14908, 2]

// Module 14912 (CreateGuildModalActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import NUFActionCreators from "NUFActionCreators" /* 14908 */;
import CreateGuildConstants from "CreateGuildConstants" /* 7731 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: closure_4 } = CreateGuildConstants);
let obj = {
  openCreateGuildModal(onSuccess) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { onSuccess };
    obj.pushLazy(asyncRequire(14913, dependencyMap.paths), obj2, React3);
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
    obj.pushLazy(asyncRequire(14913, dependencyMap.paths), obj2, React3);
  },
  openGuildJoinServerScreen() {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(asyncRequire(14913, dependencyMap.paths), obj2, React3);
  }
};
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default obj;
