// Module ID: 15046
// Function ID: 114656
// Name: useShouldShowGuildThemeMemberCoachmark
// Dependencies: [4019, 11541, 4061, 4060, 15047, 4038, 2]
// Exports: default

// Module 15046 (useShouldShowGuildThemeMemberCoachmark)
import { GUILD_THEME_POWERUP_BOOST_PRICE as closure_3 } from "BoostedGuildTiers";

const result = require("items").fileFinishedImporting("modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx");

export default function useShouldShowGuildThemeMemberCoachmark(guildId) {
  const tmp = importDefault(11541)(guildId);
  let serverThemeEnabled = require(4061) /* items */.useServerThemeEnabled(guildId, "useShouldShowGuildThemeMemberCoachmark");
  const obj = require(4061) /* items */;
  const serverThemeUserEnabled = require(4060) /* apexExperiment */.useServerThemeUserEnabled("useShouldShowGuildThemeMemberCoachmark");
  const obj2 = require(4060) /* apexExperiment */;
  const tmp4 = importDefault(15047)(guildId);
  let tmp7 = !importDefault(4038)(guildId).isLoading;
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
