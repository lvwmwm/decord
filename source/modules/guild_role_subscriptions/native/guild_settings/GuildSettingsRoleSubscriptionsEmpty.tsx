// Module ID: 16756
// Function ID: 16757
// Name: GuildSettingsRoleSubscriptionsEmptyContent
// Dependencies: [19, 1891, 676, 4329, 21, 1480, 16757, 16758, 16759, 589, 2]
// Exports: default

// Module 16756 (GuildSettingsRoleSubscriptionsEmptyContent)
import "noop";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import ME from "ME";
import { ApplicationTypes } from "ApplicationTypes";
import { jsx } from "jsxProd";

let c4;
let c5;
const require = arg1;
function GuildSettingsRoleSubscriptionsEmptyContent(guild) {
  guild = guild.guild;
  let obj = require(1480) /* useNavigation */;
  const str = obj.useNavigation();
  if (tmp3.loading) {
    let tmp7 = jsx(tmp2(16758), {});
  } else {
    const features = guild.features;
    if (!features.has(constants.CREATOR_MONETIZABLE)) {
      const features2 = guild.features;
      if (!features2.has(tmp5.CREATOR_MONETIZABLE_PROVISIONAL)) {
        obj = { guild: null };
        obj[0] = guild;
        tmp7 = jsx(tmp2(16759), { guild: null });
      }
    }
    if (null == tmp4) {
      const replaced = str.replace(constants2.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION);
      tmp7 = null;
    } else {
      const replaced1 = str.replace(constants2.ROLE_SUBSCRIPTIONS_TIERS);
      tmp7 = null;
    }
    tmp5 = constants;
  }
  return tmp7;
}
({ GuildFeatures: c4, GuildSettingsSections: c5 } = ME);
const result = require("ME").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEmpty.tsx");

export default function GuildSettingsRoleSubscriptionsEmpty(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(589);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getGuild(guildId));
  if (null == stateFromStores) {
    let tmp5 = jsx(importDefault(16758), {});
  } else {
    obj = { guild: null };
    obj[0] = stateFromStores;
    tmp5 = <GuildSettingsRoleSubscriptionsEmptyContent guild={null} />;
  }
  return tmp5;
};
