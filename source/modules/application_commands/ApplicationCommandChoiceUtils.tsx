// Module ID: 8180
// Function ID: 64600
// Name: findChoiceStringValue
// Dependencies: []
// Exports: findAutocompleteChoiceNumberValue, findAutocompleteChoiceStringValue, toChoiceBooleanValue

// Module 8180 (findChoiceStringValue)
function findChoiceStringValue(choices, surrogate) {
  let closure_0 = surrogate;
  let value;
  if (null != choices) {
    const iter = choices.find((displayName) => displayName.displayName === arg1);
    if (null != iter) {
      value = iter.value;
    }
  }
  return "string" === typeof value ? value : undefined;
}
function findChoiceNumberValue(choices, source) {
  let closure_0 = source;
  let value;
  if (null != choices) {
    const iter = choices.find((displayName) => displayName.displayName === arg1);
    if (null != iter) {
      value = iter.value;
    }
  }
  return "number" === typeof value ? value : undefined;
}
let closure_0 = importDefault(dependencyMap[0]);
({ FALSE_OPTION_NAME: closure_1, TRUE_OPTION_NAME: closure_2 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/application_commands/ApplicationCommandChoiceUtils.tsx");

export const toChoiceBooleanValue = function toChoiceBooleanValue(trimmed) {
  const formatted = trimmed.toLowerCase();
  const tmp2 = formatted === closure_2.toLowerCase();
  const formatted1 = trimmed.toLowerCase();
  return tmp2;
};
export { findChoiceStringValue };
export { findChoiceNumberValue };
export const findAutocompleteChoiceStringValue = function findAutocompleteChoiceStringValue(id, name, surrogate) {
  return findChoiceStringValue(store.getAutocompleteLastChoices(id, name), surrogate);
};
export const findAutocompleteChoiceNumberValue = function findAutocompleteChoiceNumberValue(id, name, source) {
  return findChoiceNumberValue(store.getAutocompleteLastChoices(id, name), source);
};
