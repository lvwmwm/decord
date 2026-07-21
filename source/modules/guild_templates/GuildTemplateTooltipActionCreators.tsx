// Module ID: 5713
// Function ID: 49101
// Dependencies: []

// Module 5713
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const Permissions = arg1(dependencyMap[2]).Permissions;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_templates/GuildTemplateTooltipActionCreators.tsx");

export default {
  checkGuildTemplateDirty(guildId) {
    const importDefault = guildId;
    return callback(async () => {
      if (closure_3.canWithPartialContext(constants.MANAGE_GUILD, obj)) {
        yield callback(closure_1[3]).loadTemplatesForGuild(closure_0);
        const obj2 = callback(closure_1[3]);
      }
    })();
  },
  hideGuildTemplateDirtyTooltip(guildId) {
    let obj = importDefault(dependencyMap[4]);
    obj = { type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE", guildId };
    obj.dispatch(obj);
  },
  hideGuildTemplatePromotionTooltip() {
    importDefault(dependencyMap[4]).dispatch({ type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE" });
  }
};
