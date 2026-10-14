// Module ID: 18048
// Function ID: 18049
// Dependencies: [1903, 18049, 2]

// Module 18048
import I18N from "I18N" /* 1903 */;
import updateRulesDefault from "updateRules" /* 18049 */;
import size from "module_2" /* 2 */;

const updateRules = I18N.setUpdateRules(updateRulesDefault);
const result = size.fileFinishedImporting("i18n/native/index.tsx");
