// Module ID: 11213
// Function ID: 87305
// Name: CommandRowIcon
// Dependencies: []
// Exports: default

// Module 11213 (CommandRowIcon)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importAll(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/app_launcher/native/base_components/CommandRowButton.tsx");

export default function CommandRowIcon(command) {
  command = command.command;
  const arg1 = command;
  const beforeExecuteCommand = command.beforeExecuteCommand;
  const dependencyMap = beforeExecuteCommand;
  const onExecuteCommand = command.onExecuteCommand;
  let callback = onExecuteCommand;
  const tryExecuteCommand = command.tryExecuteCommand;
  const callback2 = tryExecuteCommand;
  const sectionName = command.sectionName;
  const React = sectionName;
  let closure_5;
  let commandContext;
  callback = undefined;
  let options = command.options;
  if (null == options) {
    options = [];
  }
  const tmp2 = callback2(React.useState(false), 2);
  closure_5 = tmp2[1];
  const useCommandContext = arg1(dependencyMap[4]).useCommandContext;
  commandContext = useCommandContext(command.context);
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [onExecuteCommand, command, commandContext, beforeExecuteCommand, sectionName];
  callback = React.useCallback(callback(useCommandContext), items);
  const items1 = [tryExecuteCommand, callback];
  if (tmp) {
    let tmp7Result = tmp7(tmp8(tmp9[8]).TableRowArrow, {});
  } else {
    let obj = {};
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
