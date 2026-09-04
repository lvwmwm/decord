// Module ID: 17149
// Function ID: 17150
// Dependencies: [17150, 17198, 2]

// Module 17149
import set from "set" /* 2 */;
import getMessage from "getMessage" /* 17150 */;
import I18nLinkDefault from "I18nLink" /* 17198 */;

getMessage.setUpdateRules(I18nLinkDefault);
const result = set.fileFinishedImporting("i18n/native/index.tsx");
