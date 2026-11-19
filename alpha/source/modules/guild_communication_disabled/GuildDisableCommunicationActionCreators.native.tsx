// Module ID: 12276
// Function ID: 12277
// Name: GuildDisableCommunicationActionCreators
// Dependencies: [19, 1388, 21, 6308, 12277, 2121, 5740, 12280, 2]
// Exports: openDisableCommunication, openEnableCommunication

// Module 12276 (GuildDisableCommunicationActionCreators)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5740 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1388 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_communication_disabled/GuildDisableCommunicationActionCreators.native.tsx");

export function openDisableCommunication(userId) {
  let cancelButtonCallback;
  let guildId;
  ({ guildId, cancelButtonCallback } = userId);
  const user = UserStore.getUser(userId.userId);
  if (null != user) {
    const obj2 = { guildId, user, cancelButtonCallback };
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(12277, dependencyMap.paths), obj2);
  }
}
export function openEnableCommunication(arg0) {
  ({ guildId: require, userId: importDefault, cancelButtonCallback: dependencyMap } = arg0);
  const obj = actions_AlertActionCreatorsDefault;
  const obj2 = {
    importer() {
      let guildId;
      let onCancel;
      let userId;
      const promise = asyncRequire(12280, dependencyMap.paths);
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
}
