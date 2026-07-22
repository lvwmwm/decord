// Module ID: 11261
// Function ID: 87596
// Name: useFilterAndSortToOnlyFrecentCommands
// Dependencies: []
// Exports: default

// Module 11261 (useFilterAndSortToOnlyFrecentCommands)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/app_launcher/hooks/useFilterAndSortToOnlyFrecentCommands.tsx");

export default function useFilterAndSortToOnlyFrecentCommands(commands) {
  commands = commands.commands;
  const arg1 = commands;
  let length = commands.limit;
  if (length === undefined) {
    length = commands.length;
  }
  const dependencyMap = length;
  let React;
  let closure_3;
  let memo;
  const commandContext = arg1(dependencyMap[2]).useCommandContext(commands.context);
  React = commandContext;
  const obj = arg1(dependencyMap[2]);
  const topCommands = arg1(dependencyMap[3]).useTopCommands(commandContext);
  closure_3 = topCommands;
  const items = [commands];
  memo = React.useMemo(() => commands.reduce((arg0, id) => {
    arg0[id.id] = id;
    return arg0;
  }, {}), items);
  const items1 = [topCommands, memo, commandContext, length];
  return React.useMemo(() => {
    const mapped = topCommands.map((arg0) => closure_4[arg0]);
    const found = mapped.filter((arg0) => null != arg0);
    const sorted = found.sort((arg0, arg1) => {
      const scoreWithoutLoadingLatest = store.getScoreWithoutLoadingLatest(closure_2, arg0);
      return store.getScoreWithoutLoadingLatest(closure_2, arg1) - scoreWithoutLoadingLatest;
    });
    return sorted.slice(0, length);
  }, items1);
};
