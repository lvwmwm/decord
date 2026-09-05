// Module ID: 17229
// Function ID: 17230
// Dependencies: [17230, 17278, 2]

// Module 17229
import set from "set" /* 2 */;
import getMessage from "getMessage" /* 17230 */;
import I18nLinkDefault from "I18nLink" /* 17278 */;

getMessage.setUpdateRules(I18nLinkDefault);
const result = set.fileFinishedImporting("i18n/native/index.tsx");
