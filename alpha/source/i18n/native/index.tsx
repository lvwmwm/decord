// Module ID: 18330
// Function ID: 18331
// Dependencies: [1905, 18331, 2]

// Module 18330
import I18N from "I18N" /* 1905 */;
import updateRulesDefault from "updateRules" /* 18331 */;
import size from "module_2" /* 2 */;

const updateRules = I18N.setUpdateRules(updateRulesDefault);
const result = size.fileFinishedImporting("i18n/native/index.tsx");
