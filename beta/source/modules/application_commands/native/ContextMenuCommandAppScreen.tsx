// Module ID: 16693
// Function ID: 16694
// Name: ContextMenuCommandAppScreen
// Dependencies: [19, 21, 4836, 576, 6402, 6470, 16692, 6476, 2]
// Exports: default

// Module 16693 (ContextMenuCommandAppScreen)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
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
