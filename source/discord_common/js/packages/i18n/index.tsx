// Module ID: 16316
// Function ID: 16317
// Name: getMessage
// Dependencies: [16317, 2, 16360]

// Module 16316 (getMessage)
const result = require("format").fileFinishedImporting("../discord_common/js/packages/i18n/index.tsx");

export { I18N as default } from "getMessages";
export const getMessage = require("format").getMessage;
export const setUpdateRules = require("format").setUpdateRules;
export const FormattedMessage = require("format").FormattedMessage;
export const I18N = require("getMessages").I18N;
export const getSystemLocale = require("getMessages").getSystemLocale;
