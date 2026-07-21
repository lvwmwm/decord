// Module ID: 13995
// Function ID: 106441
// Name: result
// Dependencies: []

// Module 13995 (result)
const _module = require(dependencyMap[1]);
const obj = { "Null": "postal-address-region", "Null": "postal-address-locality", "Null": "birthdate-full", "Null": "birthdate-day", "Null": "birthdate-month", "Null": "birthdate-year", "Null": "cc-csc", "Null": "cc-exp", "Null": "cc-exp-month", "Null": "cc-exp-year", "Null": "cc-number", "Null": "postal-address-country", "Null": "password", "Null": "email", "Null": "name-prefix", "Null": "name-suffix", permissions: require(dependencyMap[0]).Permissions.SEND_MESSAGES, colors: {}, colorStrings: { -9223372036854775808: true, 0: true, 0: true }, tags: {}, version: 0 };
const result = _module.constructGuildRoleInPlace(obj);
const _module1 = require(dependencyMap[2]);
const result1 = _module1.fileFinishedImporting("modules/guild_role_subscriptions/edit_state/Contants.tsx");

export const DEFAULT_PREVIEW_ROLE = result;
