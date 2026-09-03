// Module ID: 9204
// Function ID: 9205
// Name: handleJoinGuild
// Dependencies: [5466, 2]
// Exports: handleJoinGuild

// Module 9204 (handleJoinGuild)
import set from "set" /* 2 */;
import showTooManyUserGuildsAlertDefault from "showTooManyUserGuildsAlert" /* 5466 */;

let result = set.fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(closure_0) {
  importDefault = closure_0;
  if (null != closure_0) {
    const obj = showTooManyUserGuildsAlertDefault;
    showTooManyUserGuildsAlertDefault.joinGuild(closure_0).then(() => {
      const result = callback(closure_1_1[0]).transitionToGuildSync(callback);
    });
    const joinGuildResult = showTooManyUserGuildsAlertDefault.joinGuild(closure_0);
  }
};
