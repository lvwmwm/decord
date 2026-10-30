// Module ID: 12256
// Function ID: 12257
// Name: CommandRowButton
// Dependencies: [5, 32, 19, 21, 12257, 9741, 12258, 5678, 6978, 5629, 1114, 5724, 575, 2]
// Exports: default, useCommandRowSend

// Module 12256 (CommandRowButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c1, c4;

let react = react_mod;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/CommandRowButton.tsx");

export default function CommandRowIcon(hasOptions) {
  let intl;
  let tmp3Result;
  if (hasOptions.hasOptions) {
    tmp3Result = tmp3(tmp4(6978).TableRowArrow, {});
  } else {
    const obj = { size: "sm", text: intl.string(intl2.t.TXNS7S), onPress: tmp2, icon: null, iconPosition: "end", grow: false, variant: "tertiary", disabled: tmp };
    const Button = tmp4(5629).Button;
    intl = tmp4(1114).intl;
    ({ size: "sm", color: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT });
    const SendMessageIcon = tmp4(5724).SendMessageIcon;
    tmp3Result = tmp3(Button, obj);
  }
  return tmp3Result;
};
export function useCommandRowSend(command) {
  let closure_5;
  let items1;
  command = command.command;
  const beforeExecuteCommand = command.beforeExecuteCommand;
  let onExecuteCommand = command.onExecuteCommand;
  const tryExecuteCommand = command.tryExecuteCommand;
  const sectionName = command.sectionName;
  react = undefined;
  let commandContext;
  let callback;
  let options = command.options;
  const context = command.context;
  if (options == null) {
    options = [];
  }
  const tmp = options.length > 0;
  const tmp2 = sectionName(react.useState(false), 2);
  react = tmp2[1];
  const first = tmp2[0];
  let obj = command(onExecuteCommand[4]);
  commandContext = obj.useCommandContext(context);
  const items = [onExecuteCommand, command, commandContext, beforeExecuteCommand, sectionName];
  callback = react.useCallback(tryExecuteCommand(function*(arg0, value) {
    let closure_0;
    let closure_2;
    let obj3;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_5(true);
            if (beforeExecuteCommand != null) {
              beforeExecuteCommand();
            }
            c3 = 1;
            const obj5 = { command, optionValues: obj3.parseOptionValuesForSend(commandContext.channel, command, {}), context: commandContext, sectionName, commandOrigin: tmp(onExecuteCommand[7]).CommandOrigin.APP_LAUNCHER_APPLICATION_VIEW };
            const executeAppLauncherCommand = tmp(onExecuteCommand[5]).executeAppLauncherCommand;
            const tmp21 = tmp(onExecuteCommand[5]);
            obj3 = tmp(onExecuteCommand[6]);
            c1 = 2;
            c4 = 1;
            const obj6 = { value: executeAppLauncherCommand(obj5), done: false };
            return obj6;
          }
        } else if (1 === tmp4) {
          c3 = 0;
          closure_128_5(false);
          throw onExecuteCommand;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_5(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          if (closure_128_2 != null) {
            closure_128_2();
          }
          c3 = 0;
          closure_128_5(false);
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp25) {
        onExecuteCommand = tmp25;
        if (0 === c3) {
          c4 = 3;
          throw tmp25;
        } else {
          c1 = 1;
        }
      }
    }
  }), items);
  let obj2 = {
    hasOptions: tmp,
    sending: first,
    onPressSend: react.useCallback(() => {
      if (null != tryExecuteCommand) {
        tmp(callback);
      } else {
        callback();
      }
    }, items1)
  };
  items1 = [tryExecuteCommand, callback];
  return obj2;
}
