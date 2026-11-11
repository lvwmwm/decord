// Module ID: 14020
// Function ID: 14021
// Name: StringSelectActionComponentUtils
// Dependencies: [12283, 2116, 2]
// Exports: getInitialStringSelectOptions

// Module 14020 (StringSelectActionComponentUtils)
import Server from "Server" /* 2116 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 12283 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/interaction_components/StringSelectActionComponentUtils.tsx");

export function getInitialStringSelectOptions(selectionActionComponent, containerId) {
  let mapped;
  const interactionComponentState = LocalInteractionComponentStateStore.getInteractionComponentState(containerId, selectionActionComponent.id);
  let type;
  if (interactionComponentState != null) {
    type = interactionComponentState.type;
  }
  if (type === Server.ComponentType.STRING_SELECT) {
    mapped = interactionComponentState.values;
  } else {
    const options = selectionActionComponent.options;
    const found = options.filter((item) => item.default);
    mapped = found.map((value) => value.value);
  }
  return mapped;
}
