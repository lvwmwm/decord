// Module ID: 18008
// Function ID: 18009
// Dependencies: [1903, 18009, 2]

// Module 18008
import I18N from "I18N" /* 1903 */;
import updateRulesDefault from "updateRules" /* 18009 */;
import size from "module_2" /* 2 */;

const updateRules = I18N.setUpdateRules(updateRulesDefault);
const result = size.fileFinishedImporting("i18n/native/index.tsx");
