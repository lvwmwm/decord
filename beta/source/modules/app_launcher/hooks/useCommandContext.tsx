// Module ID: 12158
// Function ID: 12159
// Name: useCommandContext
// Dependencies: [19, 2067, 558, 568, 2]
// Exports: getCommandContext

// Module 12158 (useCommandContext)
import c from "c" /* 568 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;

require = fn;
const ReactCompilerGating = fn(558);
function getCommandContext(type) {
  if ("contextless" === type.type) {
    let obj = { channel: "Array", guild: "Set" };
  } else {
    obj = { channel: type.channel, guild: GuildStore.getGuild(type.channel.guild_id) };
  }
  return obj;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useCommandContext.tsx");

export { getCommandContext };
export const useCommandContext = ReactCompilerGating.isReactCompilerEnabled() ? ((type) => {
  const cResult = c.c(2);
  if (cResult[0] !== type) {
    if ("contextless" === type.type) {
      let obj2 = { channel: "Array", guild: "Set" };
    } else {
      obj2 = { channel: type.channel, guild: GuildStore.getGuild(type.channel.guild_id) };
    }
    cResult[0] = type;
    cResult[1] = obj2;
  } else {
    return cResult[1];
  }
}) : ((arg0) => {
  const type = arg0;
  const items = [arg0];
  return noop.useMemo(() => {
    if ("contextless" === type.type) {
      let obj = { channel: "Array", guild: "Set" };
    } else {
      obj = { channel: tmp.channel, guild: GuildStore.getGuild(tmp.channel.guild_id) };
    }
    return obj;
  }, items);
});
