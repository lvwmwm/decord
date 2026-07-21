// Module ID: 14862
// Function ID: 111963
// Name: useShouldShowGuildThemeMemberCoachmark
// Dependencies: [0, 0]
// Exports: default

// Module 14862 (useShouldShowGuildThemeMemberCoachmark)
import { GUILD_THEME_POWERUP_BOOST_PRICE as closure_3 } from "__exportStarResult1";

const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx");

export default function useShouldShowGuildThemeMemberCoachmark(guildId) {
  const tmp = importDefault(dependencyMap[1])(guildId);
  let serverThemeEnabled = require(dependencyMap[2]).useServerThemeEnabled(guildId, "useShouldShowGuildThemeMemberCoachmark");
  const obj = require(dependencyMap[2]);
  const serverThemeUserEnabled = require(dependencyMap[3]).useServerThemeUserEnabled("useShouldShowGuildThemeMemberCoachmark");
  const obj2 = require(dependencyMap[3]);
  const tmp4 = importDefault(dependencyMap[4])(guildId);
  let tmp7 = !importDefault(dependencyMap[5])(guildId).isLoading;
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
