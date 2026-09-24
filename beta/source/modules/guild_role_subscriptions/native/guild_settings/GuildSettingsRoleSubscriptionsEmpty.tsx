// Module ID: 18151
// Function ID: 18152
// Name: GuildSettingsRoleSubscriptionsEmpty
// Dependencies: [19, 2067, 1078, 1353, 21, 558, 568, 1488, 18152, 18153, 18154, 504, 2]

// Module 18151 (GuildSettingsRoleSubscriptionsEmpty)
import c from "c" /* 568 */;
import useNavigation from "useNavigation" /* 1488 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;

const PlaceholderDefault = tmp3(18153);
const GuildSettingsRoleSubscriptionWelcomeViewDefault = tmp3(18154);
require = fn;
const Constants = fn(1078);
({ GuildFeatures: closure_4, GuildSettingsSections: hasOwnProperty } = Constants);
const ApplicationTypes = fn(1353).ApplicationTypes;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let tmp = dependencyMap;
  const cResult = c.c(3);
  guild = guild.guild;
  const str = useNavigation.useNavigation();
  if (tmp4.loading) {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      tmp = <tmp3 />;
      cResult[0] = tmp;
      let first = tmp;
    } else {
      first = cResult[0];
    }
  } else {
    const features = guild.features;
    if (!features.has(constants.CREATOR_MONETIZABLE)) {
      const features2 = guild.features;
      if (!features2.has(tmp6.CREATOR_MONETIZABLE_PROVISIONAL)) {
        if (cResult[1] !== guild) {
          const obj3 = { guild };
          const tmp9 = jsx(GuildSettingsRoleSubscriptionWelcomeViewDefault, { guild });
          cResult[1] = guild;
          cResult[2] = tmp9;
          let tmp7 = tmp9;
        } else {
          tmp7 = cResult[2];
        }
      }
      return tmp7;
    }
    if (null == tmp5) {
      const replaced = str.replace(constants2.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION);
      tmp7 = null;
    } else {
      const replaced1 = str.replace(constants2.ROLE_SUBSCRIPTIONS_TIERS);
      tmp7 = null;
    }
    tmp6 = constants;
  }
}) : ((guild) => {
  guild = guild.guild;
  const str = useNavigation.useNavigation();
  if (tmp3.loading) {
    let tmp7 = jsx(tmp2(18153), {});
  } else {
    const features = guild.features;
    if (!features.has(constants.CREATOR_MONETIZABLE)) {
      const features2 = guild.features;
      if (!features2.has(tmp5.CREATOR_MONETIZABLE_PROVISIONAL)) {
        const obj2 = { guild };
        tmp7 = jsx(tmp2(18154), { guild });
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
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEmpty.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let tmp2 = dependencyMap;
  const cResult = guildId(568).c(6);
  guildId = guildId.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function n() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = guildId(568);
  const stateFromStores = guildId(504).useStateFromStores(first, tmp6);
  if (null == stateFromStores) {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      tmp2 = jsx(PlaceholderDefault, {});
      cResult[3] = tmp2;
    }
  } else {
    if (cResult[4] !== stateFromStores) {
      const obj2 = { guild: stateFromStores };
      const tmp11 = <closure_8 guild={stateFromStores} />;
      cResult[4] = stateFromStores;
      cResult[5] = tmp11;
      let tmp8 = tmp11;
    } else {
      tmp8 = cResult[5];
    }
    return tmp8;
  }
}) : ((guildId) => {
  guildId = guildId.guildId;
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  if (null == stateFromStores) {
    let tmp5 = jsx(PlaceholderDefault, {});
  } else {
    const obj2 = { guild: stateFromStores };
    tmp5 = <closure_8 guild={stateFromStores} />;
  }
  return tmp5;
});
