// Module ID: 10483
// Function ID: 10484
// Name: ApplicationInteractionInfoUtils
// Dependencies: [5852, 2119, 2]
// Exports: canViewInteractionInfo, isPrimaryEntryPointCommandMessage

// Module 10483 (ApplicationInteractionInfoUtils)
import InteractionTypes from "InteractionTypes" /* 5852 */;
import size from "module_2" /* 2 */;

let tmp2;
const Server = tmp2(2119);
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
