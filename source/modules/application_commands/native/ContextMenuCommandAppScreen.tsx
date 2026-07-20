// Module ID: 15419
// Function ID: 117697
// Name: ContextMenuCommandAppScreen
// Dependencies: []
// Exports: default

// Module 15419 (ContextMenuCommandAppScreen)
let closure_2 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { marginHorizontal: importDefault(dependencyMap[3]).space.PX_16 };
obj.list = obj;
let closure_4 = obj.createStyles(obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/application_commands/native/ContextMenuCommandAppScreen.tsx");

export default function ContextMenuCommandAppScreen(route) {
  const params = route.route.params;
  const section = params.section;
  const importDefault = section;
  const commands = params.commands;
  const dependencyMap = commands;
  const onPressCommand = params.onPressCommand;
  const React = onPressCommand;
  const items = [commands.length];
  const items1 = [commands, onPressCommand, section];
  const memo = React.useMemo(() => {
    const items = [commands.length];
    return items;
  }, items);
  const callback = React.useCallback((arg0, arg1) => {
    const section = tmp;
    const diff = commands.length - 1;
    return callback(section(commands[6]), {
      item: commands[arg1],
      onPress() {
        return callback(tmp);
      },
      section,
      start: 0 === arg1,
      end: arg1 === diff
    }, commands[arg1].id);
  }, items1);
  const tmp = importDefault(dependencyMap[5])();
  const tmp4 = callback();
  return jsx(importDefault(dependencyMap[7]), { style: callback().list, sections: memo, estimatedListSize: "windowSize", itemSize: tmp, insetEnd: importDefault(dependencyMap[4])({ includeKeyboardHeight: true }).insets.bottom, renderItem: callback });
};
