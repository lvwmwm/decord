// Module ID: 10289
// Function ID: 10290
// Name: ApplicationInteractionInfoUtils
// Dependencies: [6228, 2116, 2]
// Exports: canViewInteractionInfo, isPrimaryEntryPointCommandMessage

// Module 10289 (ApplicationInteractionInfoUtils)
import InteractionTypes from "InteractionTypes" /* 6228 */;
import size from "module_2" /* 2 */;

let tmp2;
const Server = tmp2(2116);
const result = size.fileFinishedImporting("modules/applications/ApplicationInteractionInfoUtils.tsx");

export function canViewInteractionInfo(message) {
  return null != message.interactionMetadata;
}
export function isPrimaryEntryPointCommandMessage(message) {
  const interactionMetadata = message.interactionMetadata;
  let type;
  if (interactionMetadata != null) {
    type = interactionMetadata.type;
  }
  let tmp4 = type === InteractionTypes.InteractionTypes.APPLICATION_COMMAND;
  if (tmp4) {
    const interactionMetadata2 = message.interactionMetadata;
    let command_type;
    if (interactionMetadata2 != null) {
      command_type = interactionMetadata2.command_type;
    }
    tmp4 = command_type === Server.ApplicationCommandType.PRIMARY_ENTRY_POINT;
  }
  return tmp4;
}
