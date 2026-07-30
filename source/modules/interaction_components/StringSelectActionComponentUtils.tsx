// Module ID: 7895
// Function ID: 7896
// Name: getInitialStringSelectOptions
// Dependencies: [7889, 1906, 2]
// Exports: getInitialStringSelectOptions

// Module 7895 (getInitialStringSelectOptions)
import getInteractionComponentStates from "getInteractionComponentStates";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/interaction_components/StringSelectActionComponentUtils.tsx");

export const getInitialStringSelectOptions = function getInitialStringSelectOptions(selectionActionComponent, containerId) {
  interactionComponentState = interactionComponentState.getInteractionComponentState(containerId, selectionActionComponent.id);
  let type;
  if (interactionComponentState != null) {
    type = interactionComponentState.type;
  }
  if (type === require(1906) /* PermissionOverwriteType */.ComponentType.STRING_SELECT) {
    let mapped = interactionComponentState.values;
  } else {
    const options = selectionActionComponent.options;
    const found = options.filter((arg0) => arg0.default);
    mapped = found.map((value) => value.value);
  }
  return mapped;
};
