// Module ID: 16537
// Function ID: 16538
// Dependencies: [16538, 16586, 2]

// Module 16537
import set from "set" /* 2 */;
import getMessage from "getMessage" /* 16538 */;
import I18nLinkDefault from "I18nLink" /* 16586 */;

getMessage.setUpdateRules(I18nLinkDefault);
const result = set.fileFinishedImporting("i18n/native/index.tsx");
