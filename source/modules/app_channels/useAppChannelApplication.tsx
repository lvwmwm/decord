// Module ID: 11543
// Function ID: 11544
// Name: useAppChannelApplication
// Dependencies: [673, 7103, 2]
// Exports: useAppChannelApplication

// Module 11543 (useAppChannelApplication)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import fetchApplication from "fetchApplication" /* 7103 */;

const ChannelTypes = ME.ChannelTypes;
const result = set.fileFinishedImporting("modules/app_channels/useAppChannelApplication.tsx");

export const useAppChannelApplication = function useAppChannelApplication(stateFromStores) {
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  let application_id;
  if (type === ChannelTypes.GUILD_APP) {
    application_id = stateFromStores.application_id;
  }
  return fetchApplication.useApplication(application_id).data;
};
