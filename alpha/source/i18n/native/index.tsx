// Module ID: 19235
// Function ID: 19236
// Dependencies: [1903, 19236, 2]

// Module 19235
import I18N from "I18N" /* 1903 */;
import updateRulesDefault from "updateRules" /* 19236 */;
import size from "module_2" /* 2 */;

const updateRules = I18N.setUpdateRules(updateRulesDefault);
const result = size.fileFinishedImporting("i18n/native/index.tsx");
