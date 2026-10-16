// Module ID: 18012
// Function ID: 18013
// Dependencies: [1903, 18013, 2]

// Module 18012
import I18N from "I18N" /* 1903 */;
import updateRulesDefault from "updateRules" /* 18013 */;
import size from "module_2" /* 2 */;

const updateRules = I18N.setUpdateRules(updateRulesDefault);
const result = size.fileFinishedImporting("i18n/native/index.tsx");
