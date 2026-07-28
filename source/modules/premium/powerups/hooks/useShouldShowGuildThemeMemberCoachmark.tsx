// Module ID: 15098
// Function ID: 114860
// Name: useShouldShowGuildThemeMemberCoachmark
// Dependencies: [4053, 11581, 4095, 4094, 15099, 4072, 2]
// Exports: default

// Module 15098 (useShouldShowGuildThemeMemberCoachmark)
import { GUILD_THEME_POWERUP_BOOST_PRICE as closure_3 } from "BoostedGuildTiers";

const result = require("items").fileFinishedImporting("modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx");

export default function useShouldShowGuildThemeMemberCoachmark(guildId) {
  const tmp = importDefault(11581)(guildId);
  let serverThemeEnabled = require(4095) /* items */.useServerThemeEnabled(guildId, "useShouldShowGuildThemeMemberCoachmark");
  const obj = require(4095) /* items */;
  const serverThemeUserEnabled = require(4094) /* apexExperiment */.useServerThemeUserEnabled("useShouldShowGuildThemeMemberCoachmark");
  const obj2 = require(4094) /* apexExperiment */;
  const tmp4 = importDefault(15099)(guildId);
  let tmp7 = !importDefault(4072)(guildId).isLoading;
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
