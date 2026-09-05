// Module ID: 8119
// Function ID: 8120
// Name: getInitialStringSelectOptions
// Dependencies: [8113, 1894, 2]
// Exports: getInitialStringSelectOptions

// Module 8119 (getInitialStringSelectOptions)
import PermissionOverwriteType from "PermissionOverwriteType" /* 1894 */;
import closure_2 from "getInteractionComponentStates" /* 8113 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/interaction_components/StringSelectActionComponentUtils.tsx");

export const getInitialStringSelectOptions = function getInitialStringSelectOptions(selectionActionComponent, containerId) {
  interactionComponentState = interactionComponentState.getInteractionComponentState(containerId, selectionActionComponent.id);
  let type;
  if (interactionComponentState != null) {
    type = interactionComponentState.type;
  }
  if (type === PermissionOverwriteType.ComponentType.STRING_SELECT) {
    let mapped = interactionComponentState.values;
  } else {
    const options = selectionActionComponent.options;
    const found = options.filter((arg0) => arg0.default);
    mapped = found.map((value) => value.value);
  }
  return mapped;
};
