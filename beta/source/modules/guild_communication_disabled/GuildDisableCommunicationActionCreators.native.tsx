// Module ID: 11970
// Function ID: 11971
// Name: GuildDisableCommunicationActionCreators
// Dependencies: [19, 1376, 21, 4961, 11971, 1984, 5111, 11974, 2]
// Exports: openDisableCommunication, openEnableCommunication

// Module 11970 (GuildDisableCommunicationActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5111 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_communication_disabled/GuildDisableCommunicationActionCreators.native.tsx");

export const openDisableCommunication = function openDisableCommunication(userId) {
  ({ guildId, cancelButtonCallback } = userId);
  const user = UserStore.getUser(userId.userId);
  if (null != user) {
    const obj2 = { guildId, user, cancelButtonCallback };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11971, dependencyMap.paths), obj2);
  }
};
export const openEnableCommunication = function openEnableCommunication(arg0) {
  ({ guildId: require, userId: importDefault, cancelButtonCallback: dependencyMap } = arg0);
  actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return asyncRequireImpl(11974, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = guildId;
          obj.userId = userId;
          obj.onCancel = onCancel;
          return <closure_0 />;
        };
      });
    },
    isDismissable: false
  });
};
