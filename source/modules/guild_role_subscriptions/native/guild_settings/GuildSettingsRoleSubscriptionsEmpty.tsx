// Module ID: 16420
// Function ID: 128082
// Name: GuildSettingsRoleSubscriptionsEmptyContent
// Dependencies: [31, 1838, 653, 4156, 33, 1456, 16421, 16422, 16423, 566, 2]
// Exports: default

// Module 16420 (GuildSettingsRoleSubscriptionsEmptyContent)
import "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ME from "ME";
import { ApplicationTypes } from "ApplicationTypes";
import { jsx } from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
function GuildSettingsRoleSubscriptionsEmptyContent(guild) {
  guild = guild.guild;
  let obj = require(1456) /* useNavigation */;
  const str = obj.useNavigation();
  if (tmp.loading) {
    let tmp8 = jsx(importDefault(16422), {});
  } else {
    const features = guild.features;
    if (!features.has(constants.CREATOR_MONETIZABLE)) {
      const features2 = guild.features;
      if (!features2.has(constants.CREATOR_MONETIZABLE_PROVISIONAL)) {
        obj = { guild };
        tmp8 = jsx(importDefault(16423), { guild });
      }
    }
    if (null == tmp2) {
      const replaced = str.replace(constants2.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION);
      tmp8 = null;
    } else {
      const replaced1 = str.replace(constants2.ROLE_SUBSCRIPTIONS_TIERS);
      tmp8 = null;
    }
  }
  return tmp8;
}
({ GuildFeatures: closure_4, GuildSettingsSections: closure_5 } = ME);
const result = require("ME").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEmpty.tsx");

export default function GuildSettingsRoleSubscriptionsEmpty(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(566);
  const items = [_createForOfIteratorHelperLoose];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getGuild(guildId));
  if (null == stateFromStores) {
    let tmp4 = jsx(importDefault(16422), {});
  } else {
    obj = { guild: stateFromStores };
    tmp4 = <GuildSettingsRoleSubscriptionsEmptyContent guild={stateFromStores} />;
  }
  return tmp4;
};
