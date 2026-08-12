// Module ID: 15355
// Function ID: 15356
// Name: useShouldShowGuildThemeMemberCoachmark
// Dependencies: [4232, 11934, 4274, 4273, 15356, 4251, 2]
// Exports: default

// Module 15355 (useShouldShowGuildThemeMemberCoachmark)
import { GUILD_THEME_POWERUP_BOOST_PRICE as closure_3 } from "BoostedGuildTiers";

const result = require("experiment").fileFinishedImporting("modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx");

export default function useShouldShowGuildThemeMemberCoachmark(guildId) {
  const tmp = importDefault(11934)(guildId);
  let serverThemeEnabled = require(4274) /* experiment */.useServerThemeEnabled(guildId, "useShouldShowGuildThemeMemberCoachmark");
  const obj = require(4274) /* experiment */;
  const serverThemeUserEnabled = require(4273) /* apexExperiment */.useServerThemeUserEnabled("useShouldShowGuildThemeMemberCoachmark");
  const obj2 = require(4273) /* apexExperiment */;
  const tmp4 = importDefault(15356)(guildId);
  const isLoading = importDefault(4251)(guildId).isLoading;
  let tmp7 = !isLoading;
  if (!isLoading) {
    if (serverThemeEnabled) {
      serverThemeEnabled = serverThemeUserEnabled;
    }
    if (serverThemeEnabled) {
      serverThemeEnabled = tmp6 < closure_3;
    }
    if (serverThemeEnabled) {
      serverThemeEnabled = !tmp4;
    }
    if (serverThemeEnabled) {
      serverThemeEnabled = false === tmp;
    }
    tmp7 = serverThemeEnabled;
  }
  return tmp7;
};
