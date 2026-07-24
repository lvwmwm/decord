// Module ID: 5044
// Function ID: 43599
// Dependencies: [653, 1212, 2]

// Module 5044
require("ME").AutoCompleteResultTypes;
const result = require("set").fileFinishedImporting("utils/native/AutocompleteUtils.tsx");

export default {
  MENTION_EVERYONE() {
    const obj = { type: AutoCompleteResultTypes.GLOBAL, test: "everyone", text: "@everyone" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.description = intl.string(require(1212) /* getSystemLocale */.t["5atMLZ"]);
    return obj;
  },
  MENTION_HERE() {
    const obj = { type: AutoCompleteResultTypes.GLOBAL, test: "here", text: "@here" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.description = intl.string(require(1212) /* getSystemLocale */.t.iX9SFD);
    return obj;
  },
  MENTION_GAME() {
    const obj = { test: "game", text: "@game", inlineAutocompleteType: "gameMentionInput" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.description = intl.string(require(1212) /* getSystemLocale */.t["1kR88y"]);
    return obj;
  },
  LAUNCHABLE_APPLICATIONS() {
    return [];
  }
};
