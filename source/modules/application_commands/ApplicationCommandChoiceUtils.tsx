// Module ID: 8231
// Function ID: 64877
// Name: findChoiceStringValue
// Dependencies: [7020, 4566, 2]
// Exports: findAutocompleteChoiceNumberValue, findAutocompleteChoiceStringValue, toChoiceBooleanValue

// Module 8231 (findChoiceStringValue)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import TRUE_OPTION_NAME from "TRUE_OPTION_NAME";

let closure_1;
let closure_2;
function findChoiceStringValue(choices, surrogate) {
  let _isNativeReflectConstruct = surrogate;
  let value;
  if (null != choices) {
    const iter = choices.find((displayName) => displayName.displayName === _isNativeReflectConstruct);
    if (null != iter) {
      value = iter.value;
    }
  }
  return "string" === typeof value ? value : undefined;
}
function findChoiceNumberValue(choices, source) {
  let _isNativeReflectConstruct = source;
  let value;
  if (null != choices) {
    const iter = choices.find((displayName) => displayName.displayName === _isNativeReflectConstruct);
    if (null != iter) {
      value = iter.value;
    }
  }
  return "number" === typeof value ? value : undefined;
}
({ FALSE_OPTION_NAME: closure_1, TRUE_OPTION_NAME: closure_2 } = TRUE_OPTION_NAME);
const result = require("set").fileFinishedImporting("modules/application_commands/ApplicationCommandChoiceUtils.tsx");

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
