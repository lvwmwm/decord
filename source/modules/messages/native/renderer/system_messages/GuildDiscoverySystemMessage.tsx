// Module ID: 8117
// Function ID: 8118
// Name: createGuildDiscoveryDisqualifiedSystemMessage
// Dependencies: [1236, 8074, 2]
// Exports: createGuildDiscoveryDisqualifiedSystemMessage, createGuildDiscoveryGracePeriodFinalWarningSystemMessage, createGuildDiscoveryGracePeriodInitialWarningSystemMessage, createGuildDiscoveryRequalifiedSystemMessage

// Module 8117 (createGuildDiscoveryDisqualifiedSystemMessage)
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildDiscoverySystemMessage.tsx");

export const createGuildDiscoveryDisqualifiedSystemMessage = function createGuildDiscoveryDisqualifiedSystemMessage(message) {
  const obj = { content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.NxS3hY);
  const merged = Object.assign(importDefault(8074)(message));
  return obj;
};
export const createGuildDiscoveryRequalifiedSystemMessage = function createGuildDiscoveryRequalifiedSystemMessage(message) {
  const obj = { content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.tu6tOR);
  const merged = Object.assign(importDefault(8074)(message));
  return obj;
};
export const createGuildDiscoveryGracePeriodInitialWarningSystemMessage = function createGuildDiscoveryGracePeriodInitialWarningSystemMessage(message) {
  const obj = { content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.BoiiWz);
  const merged = Object.assign(importDefault(8074)(message));
  return obj;
};
export const createGuildDiscoveryGracePeriodFinalWarningSystemMessage = function createGuildDiscoveryGracePeriodFinalWarningSystemMessage(message) {
  const obj = { content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.ED4mGc);
  const merged = Object.assign(importDefault(8074)(message));
  return obj;
};
