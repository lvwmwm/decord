// Module ID: 16484
// Function ID: 128422
// Name: _getTemplates
// Dependencies: [5, 653, 686, 507, 2]
// Exports: getTemplates, stashTemplateChannels

// Module 16484 (_getTemplates)
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
function _getTemplates() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("dispatcher").fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplateActionCreators.tsx");

export const stashTemplateChannels = function stashTemplateChannels(selectedTemplate, guildId) {
  let obj = importDefault(686);
  obj = { type: "GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS", selectedTemplate, guildId };
  obj.dispatch(obj);
};
export const getTemplates = function getTemplates(guildId) {
  return _getTemplates(...arguments);
};
