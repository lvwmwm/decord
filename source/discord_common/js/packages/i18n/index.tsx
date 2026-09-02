// Module ID: 17044
// Function ID: 17045
// Name: getMessage
// Dependencies: [17045, 2, 17088]

// Module 17044 (getMessage)
import set from "set" /* 2 */;
import getMessages from "getMessages" /* 17045 */;
import format from "format" /* 17088 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/i18n/index.tsx");

export default getMessages.I18N;
export const getMessage = format.getMessage;
export const setUpdateRules = format.setUpdateRules;
export const FormattedMessage = format.FormattedMessage;
export const I18N = getMessages.I18N;
export const getSystemLocale = getMessages.getSystemLocale;
