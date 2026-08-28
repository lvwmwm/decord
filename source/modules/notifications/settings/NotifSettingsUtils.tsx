// Module ID: 13265
// Function ID: 13266
// Name: b64ToDeclarativeSettingsProto
// Dependencies: [1342, 13266, 2]
// Exports: b64ToDeclarativeSettingsProto

// Module 13265 (b64ToDeclarativeSettingsProto)
import set from "set" /* 2 */;
import b64ToProto from "b64ToProto" /* 1342 */;
import create from "create" /* 13266 */;

const result = set.fileFinishedImporting("modules/notifications/settings/NotifSettingsUtils.tsx");

export const b64ToDeclarativeSettingsProto = function b64ToDeclarativeSettingsProto(declarative_settings_proto) {
  return b64ToProto.b64ToProto(create.DeclarativeSettings, declarative_settings_proto);
};
