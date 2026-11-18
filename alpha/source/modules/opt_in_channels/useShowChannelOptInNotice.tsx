// Module ID: 11850
// Function ID: 11851
// Name: useShowChannelOptInNotice
// Dependencies: [6460, 1072, 4679, 6571, 504, 6591, 2]
// Exports: default

// Module 11850 (useShowChannelOptInNotice)
import Constants from "Constants" /* 1072 */;
import ChannelConstants from "ChannelConstants" /* 4679 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6460 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const NULL_STRING_GUILD_ID = Constants.NULL_STRING_GUILD_ID;
const ChannelFlags = ChannelConstants.ChannelFlags;
let result = size.fileFinishedImporting("modules/opt_in_channels/useShowChannelOptInNotice.tsx");

export default function useShowChannelOptInNotice(getGuildId) {
  _require = getGuildId;
  const tmp = _require;
  let guildId;
  const useOptInEnabledForGuild = require("isOptInEnabled").useOptInEnabledForGuild;
  const tmp3 = require("isOptInEnabled");
  if (getGuildId != null) {
    guildId = getGuildId.getGuildId();
  }
  let optInEnabledForGuild = useOptInEnabledForGuild(null != guildId ? getGuildId.guild_id : NULL_STRING_GUILD_ID);
  const items = [UserGuildSettingsStore];
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(items, () => {
    const result = null != getGuildId && UserGuildSettingsStore.isChannelRecordOrParentOptedIn(tmp);
    return result;
  });
  let guild_id;
  const useCanSeeOnboardingHome = tmp(6591).useCanSeeOnboardingHome;
  tmp(6591);
  if (getGuildId != null) {
    guild_id = getGuildId.guild_id;
  }
  if (guild_id == null) {
    guild_id = NULL_STRING_GUILD_ID;
  }
  let canSeeOnboardingHome = useCanSeeOnboardingHome(guild_id);
  if (null == getGuildId) {
    return false;
  } else {
    if (canSeeOnboardingHome) {
      canSeeOnboardingHome = getGuildId.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL);
    }
    if (optInEnabledForGuild) {
      optInEnabledForGuild = !canSeeOnboardingHome;
    }
    if (optInEnabledForGuild) {
      optInEnabledForGuild = !stateFromStores;
    }
    if (optInEnabledForGuild) {
      optInEnabledForGuild = !getGuildId.isThread();
    }
    return optInEnabledForGuild;
  }
};
