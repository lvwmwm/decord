// Module ID: 18903
// Function ID: 18904
// Name: ContextMenuCommandAppScreen
// Dependencies: [19, 21, 5009, 575, 5602, 7211, 18902, 7217, 2]
// Exports: default

// Module 18903 (ContextMenuCommandAppScreen)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const obj = { list: { marginHorizontal: nativeDefault.space.PX_16 } };
({ marginHorizontal: nativeDefault.space.PX_16 });
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/application_commands/native/ContextMenuCommandAppScreen.tsx");

export default function ContextMenuCommandAppScreen(route) {
  const params = route.route.params;
  let section = params.section;
  const commands = params.commands;
  const onPressCommand = params.onPressCommand;
  const insets = section(commands[4])({ includeKeyboardHeight: true }).insets;
  let items = [commands.length];
  const tmp = section(commands[5])();
  const items1 = [commands, onPressCommand, section];
  const memo = onPressCommand.useMemo(() => {
    const items = [commands.length];
    return items;
  }, items);
  const callback = onPressCommand.useCallback((arg0, arg1) => {
    let closure_0;
    section = tmp;
    const diff = commands.length - 1;
    return jsx(section(commands[6]), {
      item: commands[arg1],
      onPress() {
        return onPressCommand(closure_0);
      },
      section,
      start: 0 === arg1,
      end: arg1 === diff
    }, commands[arg1].id);
  }, items1);
  closure_4();
  return jsx(section(commands[7]), { style: closure_4().list, sections: memo, estimatedListSize: "windowSize", itemSize: tmp, insetEnd: insets.bottom, renderItem: callback });
};
