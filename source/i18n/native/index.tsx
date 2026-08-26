// Module ID: 16654
// Function ID: 16655
// Dependencies: [16655, 16703, 2]

// Module 16654
import set from "set" /* 2 */;
import getMessage from "getMessage" /* 16655 */;
import I18nLinkDefault from "I18nLink" /* 16703 */;

getMessage.setUpdateRules(I18nLinkDefault);
const result = set.fileFinishedImporting("i18n/native/index.tsx");
