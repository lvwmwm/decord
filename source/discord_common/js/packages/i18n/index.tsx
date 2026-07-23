// Module ID: 15905
// Function ID: 122945
// Name: getMessage
// Dependencies: [15906, 2, 15948]

// Module 15905 (getMessage)
const result = require("setUpdateRules").fileFinishedImporting("../discord_common/js/packages/i18n/index.tsx");

export { I18N as default } from "_callSuper";
export const getMessage = require("setUpdateRules").getMessage;
export const setUpdateRules = require("setUpdateRules").setUpdateRules;
export const FormattedMessage = require("setUpdateRules").FormattedMessage;
export const I18N = require("_callSuper").I18N;
export const getSystemLocale = require("_callSuper").getSystemLocale;
