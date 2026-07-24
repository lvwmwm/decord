// Module ID: 5717
// Function ID: 49154
// Dependencies: [5, 3758, 653, 5718, 686, 2]

// Module 5717
import set from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const result = require("ME").fileFinishedImporting("modules/guild_templates/GuildTemplateTooltipActionCreators.tsx");

export default {
  checkGuildTemplateDirty(guildId) {
    let closure_0 = guildId;
    return callback(async () => {
      if (outer2_3.canWithPartialContext(outer2_4.MANAGE_GUILD, obj)) {
        yield callback(outer2_1[3]).loadTemplatesForGuild(outer1_0);
        const obj2 = callback(outer2_1[3]);
      }
    })();
  },
  hideGuildTemplateDirtyTooltip(guildId) {
    let obj = importDefault(686);
    obj = { type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE", guildId };
    obj.dispatch(obj);
  },
  hideGuildTemplatePromotionTooltip() {
    importDefault(686).dispatch({ type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE" });
  }
};
