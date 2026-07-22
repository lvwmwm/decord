// Module ID: 10974
// Function ID: 85445
// Name: openDisableCommunication
// Dependencies: []
// Exports: openDisableCommunication, openEnableCommunication

// Module 10974 (openDisableCommunication)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_communication_disabled/GuildDisableCommunicationActionCreators.native.tsx");

export const openDisableCommunication = function openDisableCommunication(userId) {
  let cancelButtonCallback;
  let guildId;
  ({ guildId, cancelButtonCallback } = userId);
  const user = user.getUser(userId.userId);
  if (null != user) {
    let obj = importDefault(dependencyMap[3]);
    obj = { guildId, user, cancelButtonCallback };
    obj.pushLazy(arg1(dependencyMap[5])(dependencyMap[4], dependencyMap.paths), obj);
  }
};
export const openEnableCommunication = function openEnableCommunication(arg0) {
  ({ guildId: closure_0, userId: closure_1, cancelButtonCallback: closure_2 } = arg0);
  let obj = importDefault(dependencyMap[6]);
  obj = {
    importer() {
      return callback(paths[5])(paths[7], paths.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = closure_0;
          obj["userId"] = closure_1;
          obj["onCancel"] = closure_2;
          return callback(closure_0, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};
