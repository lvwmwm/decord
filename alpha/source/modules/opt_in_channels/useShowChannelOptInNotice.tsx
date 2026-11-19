// Module ID: 11828
// Function ID: 11829
// Name: useShowChannelOptInNotice
// Dependencies: [6431, 1072, 4648, 6542, 504, 6562, 2]
// Exports: default

// Module 11828 (useShowChannelOptInNotice)
import Constants from "Constants" /* 1072 */;
import ChannelConstants from "ChannelConstants" /* 4648 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6431 */;
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
  const useCanSeeOnboardingHome = tmp(6562).useCanSeeOnboardingHome;
  tmp(6562);
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
