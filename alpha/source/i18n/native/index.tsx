// Module ID: 18401
// Function ID: 18402
// Dependencies: [1905, 18402, 2]

// Module 18401
import I18N from "I18N" /* 1905 */;
import updateRulesDefault from "updateRules" /* 18402 */;
import size from "module_2" /* 2 */;

const updateRules = I18N.setUpdateRules(updateRulesDefault);
const result = size.fileFinishedImporting("i18n/native/index.tsx");
