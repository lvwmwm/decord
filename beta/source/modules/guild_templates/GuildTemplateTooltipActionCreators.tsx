// Module ID: 6741
// Function ID: 6742
// Name: GuildTemplateTooltipActionCreators
// Dependencies: [5, 4469, 1074, 6742, 573, 2]

// Module 6741 (GuildTemplateTooltipActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import size from "module_2" /* 2 */;

let c1;

const Permissions = Constants.Permissions;
let obj = {
  checkGuildTemplateDirty(guildId) {
    return (async (arg0, value) => {
      if (guildId === 2) {
        guildId = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          guildId = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              guildId = 3;
              throw value;
            } else if (arg0 === 2) {
              guildId = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const obj5 = { guildId };
              const tmp12 = guildId;
              if (PermissionStore.canWithPartialContext(constants.MANAGE_GUILD, obj5)) {
                const obj2 = guildId(c1[3]);
                c1 = 1;
                guildId = 1;
                const obj6 = { value: obj2.loadTemplatesForGuild(tmp12), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            guildId = 3;
            throw value;
          } else if (arg0 === 2) {
            guildId = 3;
            const obj = { value, done: true };
            return obj;
          }
          guildId = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp6) {
          guildId = 3;
          throw tmp6;
        }
      }
    })();
  },
  hideGuildTemplateDirtyTooltip(guildId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE", guildId };
    obj.dispatch(obj2);
  },
  hideGuildTemplatePromotionTooltip() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE" });
  }
};
const result = size.fileFinishedImporting("modules/guild_templates/GuildTemplateTooltipActionCreators.tsx");

export default obj;
