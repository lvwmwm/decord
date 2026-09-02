// Module ID: 7926
// Function ID: 7927
// Name: createGuildDiscoveryDisqualifiedSystemMessage
// Dependencies: [1233, 7882, 2]
// Exports: createGuildDiscoveryDisqualifiedSystemMessage, createGuildDiscoveryGracePeriodFinalWarningSystemMessage, createGuildDiscoveryGracePeriodInitialWarningSystemMessage, createGuildDiscoveryRequalifiedSystemMessage

// Module 7926 (createGuildDiscoveryDisqualifiedSystemMessage)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import createCommonMessageDefault from "createCommonMessage" /* 7882 */;

const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildDiscoverySystemMessage.tsx");

export const createGuildDiscoveryDisqualifiedSystemMessage = function createGuildDiscoveryDisqualifiedSystemMessage(message) {
  const obj = { content: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.NxS3hY);
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj;
};
export const createGuildDiscoveryRequalifiedSystemMessage = function createGuildDiscoveryRequalifiedSystemMessage(message) {
  const obj = { content: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.tu6tOR);
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj;
};
export const createGuildDiscoveryGracePeriodInitialWarningSystemMessage = function createGuildDiscoveryGracePeriodInitialWarningSystemMessage(message) {
  const obj = { content: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.BoiiWz);
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj;
};
export const createGuildDiscoveryGracePeriodFinalWarningSystemMessage = function createGuildDiscoveryGracePeriodFinalWarningSystemMessage(message) {
  const obj = { content: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.ED4mGc);
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj;
};
