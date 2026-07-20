// Module ID: 11135
// Function ID: 86614
// Name: getCommandContext
// Dependencies: []
// Exports: useCommandContext

// Module 11135 (getCommandContext)
function getCommandContext(type) {
  if ("contextless" === type.type) {
    let obj = { channel: undefined, guild: undefined };
  } else {
    obj = { channel: type.channel, guild: guild.getGuild(type.channel.guild_id) };
  }
  return obj;
}
let closure_0 = importAll(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/app_launcher/hooks/useCommandContext.tsx");

export { getCommandContext };
export const useCommandContext = function useCommandContext(context) {
  const React = context;
  const items = [context];
  return React.useMemo(() => callback(arg0), items);
};
