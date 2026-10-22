// Module ID: 8587
// Function ID: 8588
// Name: StringSelectActionComponentUtils
// Dependencies: [8581, 2000, 2]
// Exports: getInitialStringSelectOptions

// Module 8587 (StringSelectActionComponentUtils)
import Server from "Server" /* 2000 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 8581 */;
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
