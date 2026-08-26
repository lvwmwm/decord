// Module ID: 16655
// Function ID: 16656
// Name: getMessage
// Dependencies: [16656, 2, 16699]

// Module 16655 (getMessage)
import set from "set" /* 2 */;
import getMessages from "getMessages" /* 16656 */;
import format from "format" /* 16699 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/i18n/index.tsx");

export default getMessages.I18N;
export const getMessage = format.getMessage;
export const setUpdateRules = format.setUpdateRules;
export const FormattedMessage = format.FormattedMessage;
export const I18N = getMessages.I18N;
export const getSystemLocale = getMessages.getSystemLocale;
