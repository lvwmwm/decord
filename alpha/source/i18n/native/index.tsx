// Module ID: 19002
// Function ID: 19003
// Dependencies: [1902, 19003, 2]

// Module 19002
import I18N from "I18N" /* 1902 */;
import updateRulesDefault from "updateRules" /* 19003 */;
import size from "module_2" /* 2 */;

const updateRules = I18N.setUpdateRules(updateRulesDefault);
const result = size.fileFinishedImporting("i18n/native/index.tsx");
