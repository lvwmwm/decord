// Module ID: 11448
// Function ID: 11449
// Name: GuildDisableCommunicationActionCreators
// Dependencies: [19, 1389, 21, 5940, 11449, 1999, 5298, 11452, 2]
// Exports: openDisableCommunication, openEnableCommunication

// Module 11448 (GuildDisableCommunicationActionCreators)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5298 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1389 */;
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
    obj.pushLazy(asyncRequire(11449, dependencyMap.paths), obj2);
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
      const promise = asyncRequire(11452, dependencyMap.paths);
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
