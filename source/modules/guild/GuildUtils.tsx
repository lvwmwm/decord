// Module ID: 9454
// Function ID: 9455
// Name: handleJoinGuild
// Dependencies: [6815, 2]
// Exports: handleJoinGuild

// Module 9454 (handleJoinGuild)
import set from "set" /* 2 */;
import showTooManyUserGuildsAlertDefault from "showTooManyUserGuildsAlert" /* 6815 */;

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
