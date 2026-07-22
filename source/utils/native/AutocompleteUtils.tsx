// Module ID: 5041
// Function ID: 43577
// Dependencies: []

// Module 5041
require(dependencyMap[0]).AutoCompleteResultTypes;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("utils/native/AutocompleteUtils.tsx");

export default {
  MENTION_EVERYONE() {
    const obj = { type: AutoCompleteResultTypes.GLOBAL };
    const intl = require(dependencyMap[1]).intl;
    obj.description = intl.string(require(dependencyMap[1]).t.5atMLZ);
    return obj;
  },
  MENTION_HERE() {
    const obj = { type: AutoCompleteResultTypes.GLOBAL };
    const intl = require(dependencyMap[1]).intl;
    obj.description = intl.string(require(dependencyMap[1]).t.iX9SFD);
    return obj;
  },
  LAUNCHABLE_APPLICATIONS() {
    return [];
  }
};
