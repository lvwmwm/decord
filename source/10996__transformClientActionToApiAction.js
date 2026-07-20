// Module ID: 10996
// Function ID: 85554
// Name: _transformClientActionToApiAction
// Dependencies: []
// Exports: clearMentionRaidDetected, createAutomodRule, deleteAutomodRule, executeAlertAction, fetchAutomodRules, removeMentionRaidRestrictionWithFeedback, updateAutomodRule, validateAutomodRule

// Module 10996 (_transformClientActionToApiAction)
function _transformClientActionToApiAction(type) {
  const obj = { type: type.type, metadata: arg1(dependencyMap[4])._transformMetadataToSnakeCase(type.metadata) };
  return obj;
}
function _transformClientRuleToApiRule(id) {
  let obj = arg1(dependencyMap[4]);
  const result = obj._transformMetadataToSnakeCase(id.triggerMetadata);
  if (null != result) {
    delete r3.keywordLists;
  }
  obj = { id: id.id, name: id.name, guild_id: id.guildId, event_type: id.eventType, trigger_type: id.triggerType, trigger_metadata: result };
  const actions = id.actions;
  const found = actions.filter(arg1(dependencyMap[5]).isNotNullish);
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
  const obj = { type: type.type, metadata: arg1(dependencyMap[4])._transformMetadataToCamelCase(type.metadata) };
  return obj;
}
function _transformApiRuletoClientRule(id) {
  const obj = {};
  id = id.id;
  if (null == id) {
    const _Date = Date;
    id = importDefault(dependencyMap[6]).fromTimestamp(Date.now());
    const obj2 = importDefault(dependencyMap[6]);
  }
  obj.id = id;
  ({ name: obj.name, guild_id: obj.guildId, event_type: obj.eventType, trigger_type: obj.triggerType } = id);
  obj.triggerMetadata = arg1(dependencyMap[4])._transformMetadataToCamelCase(id.trigger_metadata);
  const actions = id.actions;
  const found = actions.filter(arg1(dependencyMap[5]).isNotNullish);
  obj.actions = found.map(_transformApiActionToClientAction);
  ({ enabled: obj.enabled, creator_id: obj.creatorId, position: obj.position } = id);
  let exempt_channels = id.exempt_channels;
  if (null == exempt_channels) {
    exempt_channels = [];
  }
  const obj3 = arg1(dependencyMap[4]);
  obj.exemptChannels = new Set(exempt_channels);
  let exempt_roles = id.exempt_roles;
  if (null == exempt_roles) {
    exempt_roles = [];
  }
  const set = new Set(exempt_channels);
  obj.exemptRoles = new Set(exempt_roles);
  if (null != obj.triggerMetadata) {
    const triggerMetadata = obj.triggerMetadata;
    delete r1.keywordLists;
  }
  return obj;
}
function _validateAutomodRule() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _validateAutomodRule = obj;
  return obj(...arguments);
}
function _createAutomodRule() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _createAutomodRule = obj;
  return obj(...arguments);
}
function _updateAutomodRule() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _updateAutomodRule = obj;
  return obj(...arguments);
}
function _deleteAutomodRule() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _deleteAutomodRule = obj;
  return obj(...arguments);
}
function _fetchAutomodRules() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchAutomodRules = obj;
  return obj(...arguments);
}
function _executeAlertAction() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _executeAlertAction = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ AnalyticEvents: closure_6, Endpoints: closure_7, Permissions: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_automod/GuildAutomodActionCreators.tsx");

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
  const arg1 = guildId;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const guild = guild.getGuild(guildId);
  let canResult = null != guild;
  if (canResult) {
    canResult = closure_5.can(constants.MANAGE_GUILD, guild);
  }
  if (canResult) {
    const result = arg1(dependencyMap[8]).openConfirmRemoveMentionRaid(() => {
      let obj = arg0(arg2[9]);
      obj = { feedback_type: arg0(arg2[10]).Feedback.MENTION_RAID_REMOVE_RESTRICTION, decision_id: arg1 };
      obj.trackWithMetadata(constants.GUILD_AUTOMOD_FEEDBACK, obj);
      const HTTP = arg0(arg2[7]).HTTP;
      obj = { url: closure_7.GUILD_AUTOMOD_CLEAR_MENTION_RAID(arg0), rejectWithError: true };
      HTTP.post(obj);
      arg2();
    });
    const obj = arg1(dependencyMap[8]);
  }
};
export const clearMentionRaidDetected = function clearMentionRaidDetected(guildId) {
  let obj = importDefault(dependencyMap[11]);
  obj = { type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS", guildId };
  obj.dispatch(obj);
};
