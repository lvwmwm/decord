// Module ID: 7801
// Function ID: 62278
// Name: getInitialStringSelectOptions
// Dependencies: [7795, 1881, 2]
// Exports: getInitialStringSelectOptions

// Module 7801 (getInitialStringSelectOptions)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/interaction_components/StringSelectActionComponentUtils.tsx");

export const getInitialStringSelectOptions = function getInitialStringSelectOptions(selectionActionComponent, containerId) {
  interactionComponentState = interactionComponentState.getInteractionComponentState(containerId, selectionActionComponent.id);
  let type;
  if (null != interactionComponentState) {
    type = interactionComponentState.type;
  }
  if (type === require(1881) /* PermissionOverwriteType */.ComponentType.STRING_SELECT) {
    let mapped = interactionComponentState.values;
  } else {
    const options = selectionActionComponent.options;
    const found = options.filter((arg0) => arg0.default);
    mapped = found.map((value) => value.value);
  }
  return mapped;
};
