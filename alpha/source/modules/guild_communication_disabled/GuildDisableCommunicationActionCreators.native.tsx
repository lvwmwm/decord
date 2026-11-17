// Module ID: 13006
// Function ID: 13007
// Name: GuildDisableCommunicationActionCreators
// Dependencies: [19, 1388, 21, 6833, 13007, 2121, 6267, 13010, 2]
// Exports: openDisableCommunication, openEnableCommunication

// Module 13006 (GuildDisableCommunicationActionCreators)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6267 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
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
    obj.pushLazy(asyncRequire(13007, dependencyMap.paths), obj2);
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
      const promise = asyncRequire(13010, dependencyMap.paths);
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
