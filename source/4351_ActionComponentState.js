// Module ID: 4351
// Function ID: 38577
// Name: ActionComponentState
// Dependencies: []
// Exports: asComponentId

// Module 4351 (ActionComponentState)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/interaction_components/InteractionComponentTypes.tsx");

export const ActionComponentState = { NORMAL: 0, [0]: "NORMAL", LOADING: 1, [1]: "LOADING", DISABLED: 2, [2]: "DISABLED" };
export function asComponentId(componentId) {
  return componentId;
}
export const SelectOptionType = { STRING: 1, [1]: "STRING", USER: 2, [2]: "USER", ROLE: 3, [3]: "ROLE", CHANNEL: 4, [4]: "CHANNEL", GUILD: 5, [5]: "GUILD" };
