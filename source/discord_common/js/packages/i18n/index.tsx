// Module ID: 16570
// Function ID: 16571
// Name: getMessage
// Dependencies: [16571, 2, 16614]

// Module 16570 (getMessage)
import set from "set" /* 2 */;
import getMessages from "getMessages" /* 16571 */;
import format from "format" /* 16614 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/i18n/index.tsx");

export default getMessages.I18N;
export const getMessage = format.getMessage;
export const setUpdateRules = format.setUpdateRules;
export const FormattedMessage = format.FormattedMessage;
export const I18N = getMessages.I18N;
export const getSystemLocale = getMessages.getSystemLocale;
