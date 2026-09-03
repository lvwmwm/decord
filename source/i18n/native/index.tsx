// Module ID: 17063
// Function ID: 17064
// Dependencies: [17064, 17112, 2]

// Module 17063
import set from "set" /* 2 */;
import getMessage from "getMessage" /* 17064 */;
import I18nLinkDefault from "I18nLink" /* 17112 */;

getMessage.setUpdateRules(I18nLinkDefault);
const result = set.fileFinishedImporting("i18n/native/index.tsx");
