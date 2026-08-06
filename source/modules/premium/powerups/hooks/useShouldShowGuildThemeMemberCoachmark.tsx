// Module ID: 15182
// Function ID: 15183
// Name: useShouldShowGuildThemeMemberCoachmark
// Dependencies: [4173, 11792, 4215, 4214, 15183, 4192, 2]
// Exports: default

// Module 15182 (useShouldShowGuildThemeMemberCoachmark)
import { GUILD_THEME_POWERUP_BOOST_PRICE as closure_3 } from "BoostedGuildTiers";

const result = require("experiment").fileFinishedImporting("modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx");

export default function useShouldShowGuildThemeMemberCoachmark(guildId) {
  const tmp = importDefault(11792)(guildId);
  let serverThemeEnabled = require(4215) /* experiment */.useServerThemeEnabled(guildId, "useShouldShowGuildThemeMemberCoachmark");
  const obj = require(4215) /* experiment */;
  const serverThemeUserEnabled = require(4214) /* apexExperiment */.useServerThemeUserEnabled("useShouldShowGuildThemeMemberCoachmark");
  const obj2 = require(4214) /* apexExperiment */;
  const tmp4 = importDefault(15183)(guildId);
  const isLoading = importDefault(4192)(guildId).isLoading;
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
