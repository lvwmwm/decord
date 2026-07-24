// Module ID: 15952
// Function ID: 123267
// Name: getMessage
// Dependencies: [15953, 2, 15995]

// Module 15952 (getMessage)
const result = require("setUpdateRules").fileFinishedImporting("../discord_common/js/packages/i18n/index.tsx");

export { I18N as default } from "_callSuper";
export const getMessage = require("setUpdateRules").getMessage;
export const setUpdateRules = require("setUpdateRules").setUpdateRules;
export const FormattedMessage = require("setUpdateRules").FormattedMessage;
export const I18N = require("_callSuper").I18N;
export const getSystemLocale = require("_callSuper").getSystemLocale;
