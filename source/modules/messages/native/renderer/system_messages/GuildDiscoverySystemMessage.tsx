// Module ID: 7784
// Function ID: 61690
// Name: createGuildDiscoveryDisqualifiedSystemMessage
// Dependencies: [1212, 7741, 2]
// Exports: createGuildDiscoveryDisqualifiedSystemMessage, createGuildDiscoveryGracePeriodFinalWarningSystemMessage, createGuildDiscoveryGracePeriodInitialWarningSystemMessage, createGuildDiscoveryRequalifiedSystemMessage

// Module 7784 (createGuildDiscoveryDisqualifiedSystemMessage)
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildDiscoverySystemMessage.tsx");

export const createGuildDiscoveryDisqualifiedSystemMessage = function createGuildDiscoveryDisqualifiedSystemMessage(message) {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.NxS3hY);
  const merged = Object.assign(importDefault(7741)(message));
  return obj;
};
export const createGuildDiscoveryRequalifiedSystemMessage = function createGuildDiscoveryRequalifiedSystemMessage(message) {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.tu6tOR);
  const merged = Object.assign(importDefault(7741)(message));
  return obj;
};
export const createGuildDiscoveryGracePeriodInitialWarningSystemMessage = function createGuildDiscoveryGracePeriodInitialWarningSystemMessage(message) {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.BoiiWz);
  const merged = Object.assign(importDefault(7741)(message));
  return obj;
};
export const createGuildDiscoveryGracePeriodFinalWarningSystemMessage = function createGuildDiscoveryGracePeriodFinalWarningSystemMessage(message) {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.ED4mGc);
  const merged = Object.assign(importDefault(7741)(message));
  return obj;
};
