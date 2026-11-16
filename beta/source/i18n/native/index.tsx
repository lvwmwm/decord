// Module ID: 20135
// Function ID: 20136
// Dependencies: [2029, 20136, 2]

// Module 20135
import I18N from "I18N" /* 2029 */;
import updateRulesDefault from "updateRules" /* 20136 */;
import size from "module_2" /* 2 */;

const updateRules = I18N.setUpdateRules(updateRulesDefault);
const result = size.fileFinishedImporting("i18n/native/index.tsx");
