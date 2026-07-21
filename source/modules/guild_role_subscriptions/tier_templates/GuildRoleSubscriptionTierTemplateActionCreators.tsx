// Module ID: 16359
// Function ID: 126206
// Name: _getTemplates
// Dependencies: []
// Exports: getTemplates, stashTemplateChannels

// Module 16359 (_getTemplates)
function _getTemplates() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getTemplates = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplateActionCreators.tsx");

export const stashTemplateChannels = function stashTemplateChannels(selectedTemplate, guildId) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS", selectedTemplate, guildId };
  obj.dispatch(obj);
};
export const getTemplates = function getTemplates(guildId) {
  return _getTemplates(...arguments);
};
