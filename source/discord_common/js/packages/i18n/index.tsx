// Module ID: 16300
// Function ID: 16301
// Name: getMessage
// Dependencies: [16301, 2, 16344]

// Module 16300 (getMessage)
const result = require("format").fileFinishedImporting("../discord_common/js/packages/i18n/index.tsx");

export { I18N as default } from "getMessages";
export const getMessage = require("format").getMessage;
export const setUpdateRules = require("format").setUpdateRules;
export const FormattedMessage = require("format").FormattedMessage;
export const I18N = require("getMessages").I18N;
export const getSystemLocale = require("getMessages").getSystemLocale;
