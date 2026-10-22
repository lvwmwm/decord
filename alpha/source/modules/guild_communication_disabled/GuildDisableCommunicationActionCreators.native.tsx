// Module ID: 12725
// Function ID: 12726
// Name: GuildDisableCommunicationActionCreators
// Dependencies: [19, 1392, 21, 6657, 12726, 2002, 5895, 12729, 2]
// Exports: openDisableCommunication, openEnableCommunication

// Module 12725 (GuildDisableCommunicationActionCreators)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5895 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1392 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_communication_disabled/GuildDisableCommunicationActionCreators.native.tsx");

export const openDisableCommunication = function openDisableCommunication(userId) {
  let cancelButtonCallback;
  let guildId;
  ({ guildId, cancelButtonCallback } = userId);
  const user = UserStore.getUser(userId.userId);
  if (null != user) {
    const obj2 = { guildId, user, cancelButtonCallback };
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(12726, dependencyMap.paths), obj2);
  }
};
export const openEnableCommunication = function openEnableCommunication(arg0) {
  ({ guildId: require, userId: importDefault, cancelButtonCallback: dependencyMap } = arg0);
  const obj = actions_AlertActionCreatorsDefault;
  const obj2 = {
    importer() {
      let guildId;
      let onCancel;
      let userId;
      const promise = asyncRequire(12729, dependencyMap.paths);
      return promise.then((result) => {
        let closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return <closure_0 guildId={guildId} userId={userId} onCancel={onCancel} />;
        };
      });
    },
    isDismissable: false
  };
  obj.openLazy(obj2);
};
