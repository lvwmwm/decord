// Module ID: 11243
// Function ID: 11244
// Name: guild/GuildUtils
// Dependencies: [6854, 6859, 2]
// Exports: handleJoinGuild

// Module 11243 (guild/GuildUtils)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6854 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/guild/GuildUtils.tsx");

export function handleJoinGuild(guildId) {
  _require = guildId;
  if (null != guildId) {
    let obj = GuildActionCreatorsDefault;
    const joinGuildResult = obj.joinGuild(guildId);
    const nextPromise = joinGuildResult.then(() => {
      const obj = GuildActionCreatorsDefault;
      const result = obj.transitionToGuildSync(guildId);
    });
    nextPromise.catch(require("JoinGuildRefusedError").ignoreJoinGuildRefused);
  }
}
