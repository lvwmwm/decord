// Module ID: 11587
// Function ID: 11588
// Name: CommandRowButton
// Dependencies: [5, 32, 19, 21, 11510, 8590, 11475, 6943, 5924, 5281, 1115, 4777, 2]
// Exports: default, useCommandRowSend

// Module 11587 (CommandRowButton)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c4, closure_2;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/CommandRowButton.tsx");

export default function CommandRowIcon(hasOptions) {
  let intl;
  let tmp3Result;
  if (hasOptions.hasOptions) {
    tmp3Result = tmp3(tmp4(5924).TableRowArrow, {});
  } else {
    const obj = { size: "sm", text: intl.string(intl2.t.TXNS7S), onPress: tmp2, icon: null, iconPosition: "end", grow: false, variant: "tertiary", disabled: tmp };
    const Button = tmp4(5281).Button;
    intl = tmp4(1115).intl;
    tmp3Result = tmp3(Button, obj);
  }
  return tmp3Result;
};
export const useCommandRowSend = function useCommandRowSend(command) {
  let items1;
  command = command.command;
  let beforeExecuteCommand = command.beforeExecuteCommand;
  const onExecuteCommand = command.onExecuteCommand;
  const tryExecuteCommand = command.tryExecuteCommand;
  const sectionName = command.sectionName;
  let closure_5;
  let commandContext;
  let callback;
  let options = command.options;
  const context = command.context;
  if (options == null) {
    options = [];
  }
  const tmp = options.length > 0;
  const tmp2 = tryExecuteCommand(sectionName.useState(false), 2);
  closure_5 = tmp2[1];
  const first = tmp2[0];
  let obj = command(beforeExecuteCommand[4]);
  commandContext = obj.useCommandContext(context);
  const items = [onExecuteCommand, command, commandContext, beforeExecuteCommand, sectionName];
  callback = sectionName.useCallback(onExecuteCommand(function*(arg0, value) {
    let c1;
    let closure_0;
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
        if (0 === beforeExecuteCommand) {
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
            const obj5 = { command, optionValues: obj3.parseOptionValuesForSend(commandContext.channel, command, {}), context: commandContext, sectionName, commandOrigin: tmp(beforeExecuteCommand[7]).CommandOrigin.APP_LAUNCHER_APPLICATION_VIEW };
            const executeAppLauncherCommand = tmp(beforeExecuteCommand[5]).executeAppLauncherCommand;
            const tmp21 = tmp(beforeExecuteCommand[5]);
            obj3 = tmp(beforeExecuteCommand[6]);
            beforeExecuteCommand = 2;
            c4 = 1;
            const obj6 = { value: executeAppLauncherCommand(obj5), done: false };
            return obj6;
          }
        } else if (1 === tmp4) {
          c3 = 0;
          closure_128_5(false);
          throw closure_2;
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
        closure_2 = tmp25;
        if (0 === c3) {
          c4 = 3;
          throw tmp25;
        } else {
          beforeExecuteCommand = 1;
        }
      }
    }
  }), items);
  let obj2 = {
    hasOptions: tmp,
    sending: first,
    onPressSend: sectionName.useCallback(() => {
      if (null != tryExecuteCommand) {
        tmp(callback);
      } else {
        callback();
      }
    }, items1)
  };
  items1 = [tryExecuteCommand, callback];
  return obj2;
};
