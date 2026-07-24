// Module ID: 15036
// Function ID: 114529
// Name: useShouldShowGuildThemeMemberCoachmark
// Dependencies: [4018, 11575, 4060, 4059, 15037, 4037, 2]
// Exports: default

// Module 15036 (useShouldShowGuildThemeMemberCoachmark)
import { GUILD_THEME_POWERUP_BOOST_PRICE as closure_3 } from "BoostedGuildTiers";

const result = require("items").fileFinishedImporting("modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx");

export default function useShouldShowGuildThemeMemberCoachmark(guildId) {
  const tmp = importDefault(11575)(guildId);
  let serverThemeEnabled = require(4060) /* items */.useServerThemeEnabled(guildId, "useShouldShowGuildThemeMemberCoachmark");
  const obj = require(4060) /* items */;
  const serverThemeUserEnabled = require(4059) /* apexExperiment */.useServerThemeUserEnabled("useShouldShowGuildThemeMemberCoachmark");
  const obj2 = require(4059) /* apexExperiment */;
  const tmp4 = importDefault(15037)(guildId);
  let tmp7 = !importDefault(4037)(guildId).isLoading;
  if (tmp7) {
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
