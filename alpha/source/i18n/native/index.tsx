// Module ID: 18701
// Function ID: 18702
// Dependencies: [1905, 18702, 2]

// Module 18701
import I18N from "I18N" /* 1905 */;
import updateRulesDefault from "updateRules" /* 18702 */;
import size from "module_2" /* 2 */;

const updateRules = I18N.setUpdateRules(updateRulesDefault);
const result = size.fileFinishedImporting("i18n/native/index.tsx");
