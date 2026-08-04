// Module ID: 16168
// Function ID: 16169
// Name: getMessage
// Dependencies: [16169, 2, 16212]

// Module 16168 (getMessage)
const result = require("format").fileFinishedImporting("../discord_common/js/packages/i18n/index.tsx");

export { I18N as default } from "getMessages";
export const getMessage = require("format").getMessage;
export const setUpdateRules = require("format").setUpdateRules;
export const FormattedMessage = require("format").FormattedMessage;
export const I18N = require("getMessages").I18N;
export const getSystemLocale = require("getMessages").getSystemLocale;
