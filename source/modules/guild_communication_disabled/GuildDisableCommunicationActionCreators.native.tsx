// Module ID: 11006
// Function ID: 85432
// Name: openDisableCommunication
// Dependencies: [31, 1850, 33, 4372, 11007, 1935, 4506, 11010, 2]
// Exports: openDisableCommunication, openEnableCommunication

// Module 11006 (openDisableCommunication)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/guild_communication_disabled/GuildDisableCommunicationActionCreators.native.tsx");

export const openDisableCommunication = function openDisableCommunication(userId) {
  let cancelButtonCallback;
  let guildId;
  ({ guildId, cancelButtonCallback } = userId);
  user = user.getUser(userId.userId);
  if (null != user) {
    let obj = importDefault(4372);
    obj = { guildId, user, cancelButtonCallback };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(11007, dependencyMap.paths), obj);
  }
};
export const openEnableCommunication = function openEnableCommunication(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ guildId: require, userId: importDefault, cancelButtonCallback: dependencyMap } = arg0);
  let obj = importDefault(4506);
  obj = {
    importer() {
      return outer1_0(outer1_2[5])(outer1_2[7], outer1_2.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = outer2_0;
          obj["userId"] = outer2_1;
          obj["onCancel"] = outer2_2;
          return outer3_4(closure_0, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};
