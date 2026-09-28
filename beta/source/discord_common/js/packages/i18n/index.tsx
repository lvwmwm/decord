// Module ID: 1884
// Function ID: 1885
// Name: i18n
// Dependencies: [1885, 2, 1928]

// Module 1884 (i18n)
import i18n_i18n from "i18n/i18n" /* 1885 */;
import parse from "parse" /* 1928 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/i18n/index.tsx");

export default i18n_i18n.I18N;
export const getMessage = parse.getMessage;
export const setUpdateRules = parse.setUpdateRules;
export const FormattedMessage = parse.FormattedMessage;
export const I18N = i18n_i18n.I18N;
export const getSystemLocale = i18n_i18n.getSystemLocale;
