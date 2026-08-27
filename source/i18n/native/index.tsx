// Module ID: 16720
// Function ID: 16721
// Dependencies: [16721, 16769, 2]

// Module 16720
import set from "set" /* 2 */;
import getMessage from "getMessage" /* 16721 */;
import I18nLinkDefault from "I18nLink" /* 16769 */;

getMessage.setUpdateRules(I18nLinkDefault);
const result = set.fileFinishedImporting("i18n/native/index.tsx");
