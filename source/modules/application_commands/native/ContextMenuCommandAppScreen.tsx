// Module ID: 15554
// Function ID: 119977
// Name: ContextMenuCommandAppScreen
// Dependencies: [31, 33, 4130, 689, 5160, 8832, 15553, 9244, 2]
// Exports: default

// Module 15554 (ContextMenuCommandAppScreen)
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.list = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/application_commands/native/ContextMenuCommandAppScreen.tsx");

export default function ContextMenuCommandAppScreen(route) {
  const params = route.route.params;
  let section = params.section;
  const commands = params.commands;
  const onPressCommand = params.onPressCommand;
  let items = [commands.length];
  const items1 = [commands, onPressCommand, section];
  const memo = onPressCommand.useMemo(() => {
    const items = [commands.length];
    return items;
  }, items);
  const callback = onPressCommand.useCallback((arg0, arg1) => {
    const section = tmp;
    const diff = commands.length - 1;
    return outer1_3(section(commands[6]), {
      item: commands[arg1],
      onPress() {
        return outer1_2(closure_0);
      },
      section,
      start: 0 === arg1,
      end: arg1 === diff
    }, commands[arg1].id);
  }, items1);
  const tmp = section(commands[5])();
  const tmp4 = _createForOfIteratorHelperLoose();
  return jsx(section(commands[7]), { style: _createForOfIteratorHelperLoose().list, sections: memo, estimatedListSize: "windowSize", itemSize: tmp, insetEnd: section(commands[4])({ includeKeyboardHeight: true }).insets.bottom, renderItem: callback });
};
