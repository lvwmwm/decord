// Module ID: 18705
// Function ID: 18706
// Dependencies: [1905, 18706, 2]

// Module 18705
import I18N from "I18N" /* 1905 */;
import updateRulesDefault from "updateRules" /* 18706 */;
import size from "module_2" /* 2 */;

const updateRules = I18N.setUpdateRules(updateRulesDefault);
const result = size.fileFinishedImporting("i18n/native/index.tsx");
