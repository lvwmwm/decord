// Module ID: 7917
// Function ID: 62977
// Name: canViewInteractionInfo
// Dependencies: [1881, 2]
// Exports: canViewInteractionInfo, isPrimaryEntryPointCommandMessage

// Module 7917 (canViewInteractionInfo)
const result = require("set").fileFinishedImporting("modules/applications/ApplicationInteractionInfoUtils.tsx");

export const canViewInteractionInfo = function canViewInteractionInfo(message) {
  return null != message.interactionMetadata;
};
export const isPrimaryEntryPointCommandMessage = function isPrimaryEntryPointCommandMessage(message) {
  const interactionMetadata = message.interactionMetadata;
  let type;
  if (null != interactionMetadata) {
    type = interactionMetadata.type;
  }
  let tmp2 = type === require(1881) /* PermissionOverwriteType */.InteractionTypes.APPLICATION_COMMAND;
  if (tmp2) {
    const interactionMetadata2 = message.interactionMetadata;
    let command_type;
    if (null != interactionMetadata2) {
      command_type = interactionMetadata2.command_type;
    }
    tmp2 = command_type === require(1881) /* PermissionOverwriteType */.ApplicationCommandType.PRIMARY_ENTRY_POINT;
  }
  return tmp2;
};
