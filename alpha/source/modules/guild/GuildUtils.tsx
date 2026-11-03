// Module ID: 10196
// Function ID: 10197
// Name: guild/GuildUtils
// Dependencies: [7022, 7026, 2]
// Exports: handleJoinGuild

// Module 10196 (guild/GuildUtils)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 7022 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/guild/GuildUtils.tsx");

export function handleJoinGuild(arg0) {
  let closure_0;
  _require = arg0;
  if (null != arg0) {
    let obj = GuildActionCreatorsDefault;
    const joinGuildResult = obj.joinGuild(arg0);
    const nextPromise = joinGuildResult.then(() => {
      const obj = GuildActionCreatorsDefault;
      const result = obj.transitionToGuildSync(closure_0);
    });
    nextPromise.catch(require("JoinGuildRefusedError").ignoreJoinGuildRefused);
  }
}
