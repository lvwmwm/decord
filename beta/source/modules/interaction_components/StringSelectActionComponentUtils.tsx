// Module ID: 7576
// Function ID: 7577
// Name: StringSelectActionComponentUtils
// Dependencies: [7570, 1979, 2]
// Exports: getInitialStringSelectOptions

// Module 7576 (StringSelectActionComponentUtils)
import Server from "Server" /* 1979 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 7570 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/StringSelectActionComponentUtils.tsx");

export const getInitialStringSelectOptions = function getInitialStringSelectOptions(selectionActionComponent, containerId) {
  const interactionComponentState = LocalInteractionComponentStateStore.getInteractionComponentState(containerId, selectionActionComponent.id);
  let type;
  if (interactionComponentState != null) {
    type = interactionComponentState.type;
  }
  if (type === Server.ComponentType.STRING_SELECT) {
    let mapped = interactionComponentState.values;
  } else {
    const options = selectionActionComponent.options;
    const found = options.filter((item) => item.default);
    mapped = found.map((value) => value.value);
  }
  return mapped;
};
