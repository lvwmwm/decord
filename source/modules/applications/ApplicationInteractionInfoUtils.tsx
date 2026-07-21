// Module ID: 7910
// Function ID: 62917
// Name: canViewInteractionInfo
// Dependencies: []
// Exports: canViewInteractionInfo, isPrimaryEntryPointCommandMessage

// Module 7910 (canViewInteractionInfo)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/applications/ApplicationInteractionInfoUtils.tsx");

export const canViewInteractionInfo = function canViewInteractionInfo(message) {
  return null != message.interactionMetadata;
};
export const isPrimaryEntryPointCommandMessage = function isPrimaryEntryPointCommandMessage(message) {
  const interactionMetadata = message.interactionMetadata;
  let type;
  if (null != interactionMetadata) {
    type = interactionMetadata.type;
  }
  let tmp2 = type === require(dependencyMap[0]).InteractionTypes.APPLICATION_COMMAND;
  if (tmp2) {
    const interactionMetadata2 = message.interactionMetadata;
    let command_type;
    if (null != interactionMetadata2) {
      command_type = interactionMetadata2.command_type;
    }
    tmp2 = command_type === require(dependencyMap[0]).ApplicationCommandType.PRIMARY_ENTRY_POINT;
  }
  return tmp2;
};
