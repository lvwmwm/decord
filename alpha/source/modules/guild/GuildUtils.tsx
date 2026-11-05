// Module ID: 10252
// Function ID: 10253
// Name: guild/GuildUtils
// Dependencies: [7040, 7044, 2]
// Exports: handleJoinGuild

// Module 10252 (guild/GuildUtils)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 7040 */;
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
