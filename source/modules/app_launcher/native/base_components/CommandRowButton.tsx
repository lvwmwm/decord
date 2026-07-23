// Module ID: 11224
// Function ID: 87380
// Name: CommandRowIcon
// Dependencies: [5, 57, 31, 33, 11152, 7919, 11225, 6755, 5171, 4543, 1212, 4076, 2]
// Exports: default

// Module 11224 (CommandRowIcon)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/app_launcher/native/base_components/CommandRowButton.tsx");

export default function CommandRowIcon(command) {
  command = command.command;
  const beforeExecuteCommand = command.beforeExecuteCommand;
  const onExecuteCommand = command.onExecuteCommand;
  const tryExecuteCommand = command.tryExecuteCommand;
  const sectionName = command.sectionName;
  let closure_5;
  let commandContext;
  let callback;
  let options = command.options;
  if (null == options) {
    options = [];
  }
  const tmp2 = tryExecuteCommand(sectionName.useState(false), 2);
  closure_5 = tmp2[1];
  const useCommandContext = command(beforeExecuteCommand[4]).useCommandContext;
  commandContext = useCommandContext(command.context);
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [onExecuteCommand, command, commandContext, beforeExecuteCommand, sectionName];
  callback = sectionName.useCallback(onExecuteCommand(useCommandContext), items);
  const items1 = [tryExecuteCommand, callback];
  if (tmp) {
    let tmp7Result = tmp7(tmp8(tmp9[8]).TableRowArrow, {});
  } else {
    let obj = { size: "sm", text: null, onPress: null, icon: null, iconPosition: "end", grow: false, variant: "tertiary" };
    const intl = tmp8(tmp9[10]).intl;
    obj.text = intl.string(tmp8(tmp9[10]).t.TXNS7S);
    obj.onPress = tmp6;
    obj = { size: "sm" };
    obj.icon = tmp7(tmp8(tmp9[11]).SendMessageIcon, obj);
    obj.disabled = tmp2[0];
    tmp7Result = tmp7(tmp8(tmp9[9]).Button, obj);
  }
  return tmp7Result;
};
