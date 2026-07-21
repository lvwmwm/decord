// Module ID: 7794
// Function ID: 62218
// Name: getInitialStringSelectOptions
// Dependencies: []
// Exports: getInitialStringSelectOptions

// Module 7794 (getInitialStringSelectOptions)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/interaction_components/StringSelectActionComponentUtils.tsx");

export const getInitialStringSelectOptions = function getInitialStringSelectOptions(selectionActionComponent, containerId) {
  const interactionComponentState = interactionComponentState.getInteractionComponentState(containerId, selectionActionComponent.id);
  let type;
  if (null != interactionComponentState) {
    type = interactionComponentState.type;
  }
  if (type === containerId(dependencyMap[1]).ComponentType.STRING_SELECT) {
    let mapped = interactionComponentState.values;
  } else {
    const options = selectionActionComponent.options;
    const found = options.filter((arg0) => arg0.default);
    mapped = found.map((value) => value.value);
  }
  return mapped;
};
