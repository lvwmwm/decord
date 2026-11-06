// Module ID: 12669
// Function ID: 12670
// Name: useFilterAndSortToOnlyFrecentCommands
// Dependencies: [19, 9870, 12625, 9875, 2]
// Exports: default

// Module 12669 (useFilterAndSortToOnlyFrecentCommands)
import react from "react" /* 19 */;
import ApplicationCommandFrecencyStore from "ApplicationCommandFrecencyStore" /* 9870 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useFilterAndSortToOnlyFrecentCommands.tsx");

export default function useFilterAndSortToOnlyFrecentCommands(commands) {
  commands = commands.commands;
  let length = commands.limit;
  const context = commands.context;
  if (length === undefined) {
    length = commands.length;
  }
  const obj = commands(length[2]);
  const commandContext = obj.useCommandContext(context);
  const obj2 = commands(length[3]);
  const topCommands = obj2.useTopCommands(commandContext);
  const items = [commands];
  const memo = commandContext.useMemo(() => commands.reduce((acc, id) => {
    acc[id.id] = id;
    return acc;
  }, {}), items);
  const items1 = [topCommands, memo, commandContext, length];
  return commandContext.useMemo(() => {
    const mapped = topCommands.map((item) => memo[item]);
    const found = mapped.filter((item) => null != item);
    const sorted = found.sort((arg0, arg1) => {
      const scoreWithoutLoadingLatest = topCommands.getScoreWithoutLoadingLatest(commandContext, arg0);
      return topCommands.getScoreWithoutLoadingLatest(commandContext, arg1) - scoreWithoutLoadingLatest;
    });
    return sorted.slice(0, length);
  }, items1);
};
