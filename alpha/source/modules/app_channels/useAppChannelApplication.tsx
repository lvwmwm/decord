// Module ID: 7603
// Function ID: 7604
// Name: useAppChannelApplication
// Dependencies: [1071, 6971, 2]
// Exports: useAppChannelApplication

// Module 7603 (useAppChannelApplication)
import Constants from "Constants" /* 1071 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6971 */;
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
