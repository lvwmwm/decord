// Module ID: 8545
// Function ID: 8546
// Name: StringSelectActionComponentUtils
// Dependencies: [8539, 2000, 2]
// Exports: getInitialStringSelectOptions

// Module 8545 (StringSelectActionComponentUtils)
import Server from "Server" /* 2000 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 8539 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/interaction_components/StringSelectActionComponentUtils.tsx");

export const getInitialStringSelectOptions = function getInitialStringSelectOptions(selectionActionComponent, containerId) {
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
};
