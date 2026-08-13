// Module ID: 16384
// Function ID: 16385
// Name: getMessage
// Dependencies: [16385, 2, 16428]

// Module 16384 (getMessage)
const result = require("format").fileFinishedImporting("../discord_common/js/packages/i18n/index.tsx");

export { I18N as default } from "getMessages";
export const getMessage = require("format").getMessage;
export const setUpdateRules = require("format").setUpdateRules;
export const FormattedMessage = require("format").FormattedMessage;
export const I18N = require("getMessages").I18N;
export const getSystemLocale = require("getMessages").getSystemLocale;
