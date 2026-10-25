// Module ID: 18706
// Function ID: 18707
// Dependencies: [1905, 18707, 2]

// Module 18706
import I18N from "I18N" /* 1905 */;
import updateRulesDefault from "updateRules" /* 18707 */;
import size from "module_2" /* 2 */;

const updateRules = I18N.setUpdateRules(updateRulesDefault);
const result = size.fileFinishedImporting("i18n/native/index.tsx");
