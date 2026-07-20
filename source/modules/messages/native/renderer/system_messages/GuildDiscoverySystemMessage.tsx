// Module ID: 7684
// Function ID: 61333
// Name: createGuildDiscoveryDisqualifiedSystemMessage
// Dependencies: []
// Exports: createGuildDiscoveryDisqualifiedSystemMessage, createGuildDiscoveryGracePeriodFinalWarningSystemMessage, createGuildDiscoveryGracePeriodInitialWarningSystemMessage, createGuildDiscoveryRequalifiedSystemMessage

// Module 7684 (createGuildDiscoveryDisqualifiedSystemMessage)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildDiscoverySystemMessage.tsx");

export const createGuildDiscoveryDisqualifiedSystemMessage = function createGuildDiscoveryDisqualifiedSystemMessage(message) {
  const obj = {};
  const intl = require(dependencyMap[0]).intl;
  obj.content = intl.string(require(dependencyMap[0]).t.NxS3hY);
  const merged = Object.assign(importDefault(dependencyMap[1])(message));
  return obj;
};
export const createGuildDiscoveryRequalifiedSystemMessage = function createGuildDiscoveryRequalifiedSystemMessage(message) {
  const obj = {};
  const intl = require(dependencyMap[0]).intl;
  obj.content = intl.string(require(dependencyMap[0]).t.tu6tOR);
  const merged = Object.assign(importDefault(dependencyMap[1])(message));
  return obj;
};
export const createGuildDiscoveryGracePeriodInitialWarningSystemMessage = function createGuildDiscoveryGracePeriodInitialWarningSystemMessage(message) {
  const obj = {};
  const intl = require(dependencyMap[0]).intl;
  obj.content = intl.string(require(dependencyMap[0]).t.BoiiWz);
  const merged = Object.assign(importDefault(dependencyMap[1])(message));
  return obj;
};
export const createGuildDiscoveryGracePeriodFinalWarningSystemMessage = function createGuildDiscoveryGracePeriodFinalWarningSystemMessage(message) {
  const obj = {};
  const intl = require(dependencyMap[0]).intl;
  obj.content = intl.string(require(dependencyMap[0]).t.ED4mGc);
  const merged = Object.assign(importDefault(dependencyMap[1])(message));
  return obj;
};
