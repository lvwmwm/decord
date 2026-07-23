// Module ID: 11012
// Function ID: 85649
// Name: _transformClientActionToApiAction
// Dependencies: [5, 1838, 3758, 653, 11013, 1327, 21, 507, 11006, 4324, 6750, 686, 2]
// Exports: clearMentionRaidDetected, createAutomodRule, deleteAutomodRule, executeAlertAction, fetchAutomodRules, removeMentionRaidRestrictionWithFeedback, updateAutomodRule, validateAutomodRule

// Module 11012 (_transformClientActionToApiAction)
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function _transformClientActionToApiAction(type) {
  const obj = { type: type.type, metadata: require(11013) /* _transformMetadataToCamelCase */._transformMetadataToSnakeCase(type.metadata) };
  return obj;
}
function _transformClientRuleToApiRule(id) {
  let obj = require(11013) /* _transformMetadataToCamelCase */;
  const result = obj._transformMetadataToSnakeCase(id.triggerMetadata);
  if (null != result) {
    delete tmp.keywordLists;
  }
  obj = { id: id.id, name: id.name, guild_id: id.guildId, event_type: id.eventType, trigger_type: id.triggerType, trigger_metadata: result };
  const actions = id.actions;
  const found = actions.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
  obj.actions = found.map(_transformClientActionToApiAction);
  ({ enabled: obj2.enabled, creatorId: obj2.creator_id, position: obj2.position } = id);
  let exemptChannels = id.exemptChannels;
  if (null == exemptChannels) {
    exemptChannels = [];
  }
  obj.exempt_channels = Array.from(exemptChannels);
  let exemptRoles = id.exemptRoles;
  if (null == exemptRoles) {
    exemptRoles = [];
  }
  obj.exempt_roles = Array.from(exemptRoles);
  return obj;
}
function _transformApiActionToClientAction(type) {
  const obj = { type: type.type, metadata: require(11013) /* _transformMetadataToCamelCase */._transformMetadataToCamelCase(type.metadata) };
  return obj;
}
function _transformApiRuletoClientRule(id) {
  const obj = {};
  id = id.id;
  if (null == id) {
    const _Date = Date;
    id = importDefault(21).fromTimestamp(Date.now());
    const obj2 = importDefault(21);
  }
  obj.id = id;
  ({ name: obj.name, guild_id: obj.guildId, event_type: obj.eventType, trigger_type: obj.triggerType } = id);
  obj.triggerMetadata = require(11013) /* _transformMetadataToCamelCase */._transformMetadataToCamelCase(id.trigger_metadata);
  const actions = id.actions;
  const found = actions.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
  obj.actions = found.map(_transformApiActionToClientAction);
  ({ enabled: obj.enabled, creator_id: obj.creatorId, position: obj.position } = id);
  let exempt_channels = id.exempt_channels;
  if (null == exempt_channels) {
    exempt_channels = [];
  }
  const obj3 = require(11013) /* _transformMetadataToCamelCase */;
  obj.exemptChannels = new Set(exempt_channels);
  let exempt_roles = id.exempt_roles;
  if (null == exempt_roles) {
    exempt_roles = [];
  }
  const set = new Set(exempt_channels);
  obj.exemptRoles = new Set(exempt_roles);
  if (null != obj.triggerMetadata) {
    const triggerMetadata = obj.triggerMetadata;
    delete tmp.keywordLists;
  }
  return obj;
}
function _validateAutomodRule() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _createAutomodRule() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _updateAutomodRule() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _deleteAutomodRule() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchAutomodRules() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _executeAlertAction() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ AnalyticEvents: closure_6, Endpoints: closure_7, Permissions: closure_8 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_automod/GuildAutomodActionCreators.tsx");

export const validateAutomodRule = function validateAutomodRule() {
  return _validateAutomodRule(...arguments);
};
export const createAutomodRule = function createAutomodRule() {
  return _createAutomodRule(...arguments);
};
export const updateAutomodRule = function updateAutomodRule() {
  return _updateAutomodRule(...arguments);
};
export const deleteAutomodRule = function deleteAutomodRule() {
  return _deleteAutomodRule(...arguments);
};
export const fetchAutomodRules = function fetchAutomodRules(arg0) {
  return _fetchAutomodRules(...arguments);
};
export const executeAlertAction = function executeAlertAction(messageId, channel, SUBMIT_FEEDBACK) {
  return _executeAlertAction(...arguments);
};
export const removeMentionRaidRestrictionWithFeedback = function removeMentionRaidRestrictionWithFeedback(guildId) {
  const _require = guildId;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  guild = guild.getGuild(guildId);
  let canResult = null != guild;
  if (canResult) {
    canResult = _isNativeReflectConstruct.can(constants.MANAGE_GUILD, guild);
  }
  if (canResult) {
    const result = _require(11006).openConfirmRemoveMentionRaid(() => {
      let obj = guildId(4324);
      obj = { feedback_type: guildId(6750).Feedback.MENTION_RAID_REMOVE_RESTRICTION, decision_id: closure_1 };
      obj.trackWithMetadata(outer1_6.GUILD_AUTOMOD_FEEDBACK, obj);
      const HTTP = guildId(507).HTTP;
      obj = { url: outer1_7.GUILD_AUTOMOD_CLEAR_MENTION_RAID(guildId), rejectWithError: true };
      HTTP.post(obj);
      dependencyMap();
    });
    let obj = _require(11006);
  }
};
export const clearMentionRaidDetected = function clearMentionRaidDetected(guildId) {
  let obj = importDefault(686);
  obj = { type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS", guildId };
  obj.dispatch(obj);
};
