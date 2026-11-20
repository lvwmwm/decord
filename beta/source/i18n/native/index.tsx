// Module ID: 20140
// Function ID: 20141
// Dependencies: [2029, 20141, 2]

// Module 20140
import I18N from "I18N" /* 2029 */;
import updateRulesDefault from "updateRules" /* 20141 */;
import size from "module_2" /* 2 */;

const updateRules = I18N.setUpdateRules(updateRulesDefault);
const result = size.fileFinishedImporting("i18n/native/index.tsx");
