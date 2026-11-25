// Module ID: 12349
// Function ID: 12350
// Name: StringSelectActionComponentUtils
// Dependencies: [11904, 2117, 2]
// Exports: getInitialStringSelectOptions

// Module 12349 (StringSelectActionComponentUtils)
import Server from "Server" /* 2117 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 11904 */;
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
