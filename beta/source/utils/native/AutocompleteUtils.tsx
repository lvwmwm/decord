// Module ID: 5828
// Function ID: 5829
// Name: utils/AutocompleteUtils
// Dependencies: [1074, 1115, 2]

// Module 5828 (utils/AutocompleteUtils)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import size from "module_2" /* 2 */;

const AutoCompleteResultTypes = Constants.AutoCompleteResultTypes;
const items = [["game", "gameMentionInput"], ["time", "timestampMentionInput"]];
const map = new Map(items);
let obj = {
  MENTION_EVERYONE() {
    let intl;
    const obj = { type: AutoCompleteResultTypes.GLOBAL, test: "everyone", text: "@everyone", description: intl.string(intl2.t["5atMLZ"]) };
    intl = intl2.intl;
    return obj;
  },
  MENTION_HERE() {
    let intl;
    const obj = { type: AutoCompleteResultTypes.GLOBAL, test: "here", text: "@here", description: intl.string(intl2.t.iX9SFD) };
    intl = intl2.intl;
    return obj;
  },
  MENTION_GAME() {
    let intl;
    const obj = { test: "game", text: "@game", inlineAutocompleteType: "gameMentionInput", description: intl.string(intl2.t["1kR88y"]) };
    intl = intl2.intl;
    return obj;
  },
  MENTION_TIMESTAMP() {
    let intl;
    const obj = { test: "time", text: "@time", inlineAutocompleteType: "timestampMentionInput", description: intl.string(intl2.t.V6L3TV) };
    intl = intl2.intl;
    return obj;
  },
  LAUNCHABLE_APPLICATIONS() {
    return [];
  },
  findAutoInsertOnSpaceMentionInlineAutocompleteType(trigger) {
    return map.get(trigger.toLowerCase());
  }
};
const result = size.fileFinishedImporting("utils/native/AutocompleteUtils.tsx");

export default obj;
