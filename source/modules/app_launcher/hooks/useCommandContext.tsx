// Module ID: 11182
// Function ID: 86981
// Name: getCommandContext
// Dependencies: [31, 1838, 2]
// Exports: useCommandContext

// Module 11182 (getCommandContext)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

function getCommandContext(type) {
  if ("contextless" === type.type) {
    let obj = { channel: undefined, guild: undefined };
  } else {
    obj = { channel: type.channel, guild: guild.getGuild(type.channel.guild_id) };
  }
  return obj;
}
const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useCommandContext.tsx");

export { getCommandContext };
export const useCommandContext = function useCommandContext(context) {
  const React = context;
  const items = [context];
  return React.useMemo(() => outer1_2(result), items);
};
