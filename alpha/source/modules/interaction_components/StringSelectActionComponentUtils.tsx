// Module ID: 7771
// Function ID: 7772
// Name: StringSelectActionComponentUtils
// Dependencies: [7765, 1979, 2]
// Exports: getInitialStringSelectOptions

// Module 7771 (StringSelectActionComponentUtils)
import Server from "Server" /* 1979 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 7765 */;

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
