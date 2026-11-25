// Module ID: 12373
// Function ID: 12374
// Name: GuildDisableCommunicationActionCreators
// Dependencies: [19, 1386, 21, 6429, 12374, 2119, 5861, 12377, 2]
// Exports: openDisableCommunication, openEnableCommunication

// Module 12373 (GuildDisableCommunicationActionCreators)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5861 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1386 */;
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
    obj.pushLazy(asyncRequire(12374, dependencyMap.paths), obj2);
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
      const promise = asyncRequire(12377, dependencyMap.paths);
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
