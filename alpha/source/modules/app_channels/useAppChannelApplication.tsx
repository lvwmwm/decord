// Module ID: 7487
// Function ID: 7488
// Name: useAppChannelApplication
// Dependencies: [1072, 6939, 2]
// Exports: useAppChannelApplication

// Module 7487 (useAppChannelApplication)
import Constants from "Constants" /* 1072 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6939 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelApplication.tsx");

export function useAppChannelApplication(stateFromStores) {
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  let application_id;
  if (type === ChannelTypes.GUILD_APP) {
    application_id = stateFromStores.application_id;
  }
  const obj = ApplicationActionCreators;
  return obj.useApplication(application_id).data;
}
