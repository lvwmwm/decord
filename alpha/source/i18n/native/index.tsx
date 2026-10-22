// Module ID: 18603
// Function ID: 18604
// Dependencies: [1905, 18604, 2]

// Module 18603
import I18N from "I18N" /* 1905 */;
import updateRulesDefault from "updateRules" /* 18604 */;
import size from "module_2" /* 2 */;

const updateRules = I18N.setUpdateRules(updateRulesDefault);
const result = size.fileFinishedImporting("i18n/native/index.tsx");
