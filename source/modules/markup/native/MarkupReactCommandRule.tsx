// Module ID: 10881
// Function ID: 84610
// Name: handleTapCommandMention
// Dependencies: [31, 1348, 1455, 4566, 4567, 33, 6755, 3982, 4098, 1555, 4471, 1212, 1273, 10882, 3830, 5492, 3803, 9646, 5497, 10884, 4126, 3989, 10886, 9969, 2]
// Exports: default

// Module 10881 (handleTapCommandMention)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { SUB_COMMAND_KEY_SEPARATOR } from "TRUE_OPTION_NAME";
import { COMMAND_SENTINEL } from "MENTION_SENTINEL";
import { jsxs } from "jsxProd";

let closure_5;
let closure_6;
const require = arg1;
function handleTapCommandMention(channelId) {
  let appLauncherNavigator;
  let commandId;
  let commandName;
  let importDefault;
  let onSetCommand;
  ({ appLauncherNavigator, onSetCommand } = channelId);
  ({ onOpenCustomKeyboard: importDefault, commandId, commandName } = channelId);
  let sum1;
  channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    if (null != channel.guild_id) {
      sum1 = commandId;
      if (commandName.includes(" ")) {
        const sum = commandId + SUB_COMMAND_KEY_SEPARATOR;
        const parts = commandName.split(" ");
        const substr = parts.slice(1);
        sum1 = sum + substr.join(SUB_COMMAND_KEY_SEPARATOR);
      }
      if (null != appLauncherNavigator) {
        if (null != channel) {
          let obj = { name: constants.COMMAND_VIEW };
          obj = { analyticsLocation: onSetCommand(sum1[6]).ApplicationCommandTriggerLocations.MENTION };
          let obj1 = { commandId: sum1 };
          obj.preSelectedCommand = obj1;
          const obj2 = { type: "channel", channel };
          obj.context = obj2;
          obj.params = obj;
          appLauncherNavigator.navigate(obj);
        }
      }
      obj1 = onSetCommand(sum1[7]);
      const rootNavigationRef = obj1.getRootNavigationRef();
      if (null != rootNavigationRef) {
        const state = rootNavigationRef.getState();
        let length;
        if (null != state) {
          const routes = state.routes;
          if (null != routes) {
            length = routes.length;
          }
        }
        if (length > 1) {
          const state1 = rootNavigationRef.getState();
          let length1;
          if (null != state1) {
            const routes1 = state1.routes;
            if (null != routes1) {
              length1 = routes1.length;
            }
          }
          let num4 = 0;
          if (null != length1) {
            num4 = length1;
          }
          if (num4 > 1) {
            do {
              let goBackResult = rootNavigationRef.goBack();
              num4 = num4 - 1;
            } while (num4 > 1);
          }
        }
      }
      let obj3 = importDefault(sum1[8]);
      obj3.hideActionSheet();
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        let obj = { type: onSetCommand(sum1[9]).KeyboardTypes.APP_LAUNCHER };
        obj = { initialRouteName: outer1_5.COMMAND_VIEW, analyticsLocation: onSetCommand(sum1[6]).ApplicationCommandTriggerLocations.MENTION, preSelectedCommand: obj };
        obj = { commandId: sum1 };
        obj.context = obj;
        return callback(obj);
      }, 0);
    }
  }
  if ("" === channelId.currentText) {
    onSetCommand();
  } else {
    obj3 = {};
    const intl = onSetCommand(sum1[11]).intl;
    obj3.title = intl.string(onSetCommand(sum1[11]).t.pe26Cj);
    const intl2 = onSetCommand(sum1[11]).intl;
    obj3.confirmText = intl2.string(onSetCommand(sum1[11]).t.VkKicb);
    obj3.onConfirm = function onConfirm() {
      return onSetCommand();
    };
    const intl3 = onSetCommand(sum1[11]).intl;
    obj3.cancelText = intl3.string(onSetCommand(sum1[11]).t["ETE/oC"]);
    obj3.confirmColor = onSetCommand(sum1[12]).ButtonColors.BRAND;
    const intl4 = onSetCommand(sum1[11]).intl;
    obj3.body = intl4.string(onSetCommand(sum1[11]).t["+awCIy"]);
    importDefault(sum1[10]).show(obj3);
    const obj9 = importDefault(sum1[10]);
  }
}
function handleLongPressCommandMention(commandName, commandId) {
  const _require = commandName;
  let closure_1 = commandId;
  let obj = {};
  const intl = _require(1212).intl;
  obj.label = intl.string(_require(1212).t["42H+Nb"]);
  obj.IconComponent = _require(10882).SlashBoxIcon;
  obj.onPress = function onPress() {
    commandName(outer1_2[14]).presentCommandCopied();
    const obj = commandName(outer1_2[14]);
    commandName(outer1_2[15]).copy("" + outer1_8 + commandName);
  };
  const items = [obj];
  const DeveloperMode = _require(3803).DeveloperMode;
  if (DeveloperMode.getSetting()) {
    obj = {};
    const intl2 = _require(1212).intl;
    obj.label = intl2.string(_require(1212).t.oJ1Muw);
    obj.IconComponent = _require(9646).IdIcon;
    obj.onPress = function onPress() {
      commandName(outer1_2[14]).presentIdCopied();
      const obj = commandName(outer1_2[14]);
      commandName(outer1_2[15]).copy(closure_1);
    };
    items.push(obj);
  }
  obj = { key: "LongPressCommandMention", options: items, hasIcons: true };
  const result = _require(5497).showSimpleActionSheet(obj);
}
({ AppLauncherRouteName: closure_5, useAppLauncherNavigation: closure_6 } = APP_LAUNCHER_BUILT_IN_SECTION_ICON);
let result = require("APP_LAUNCHER_BUILT_IN_SECTION_ICON").fileFinishedImporting("modules/markup/native/MarkupReactCommandRule.tsx");

export default function MarkupReactCommandRule(node) {
  let output;
  let state;
  let style;
  node = node.node;
  ({ output, state, style } = node);
  let closure_1 = null != React.useContext(node(10884).AppLauncherContext);
  const dependencyMap = callback();
  let obj = {
    style,
    variant: "text-md/bold",
    onPress() {
      let obj = node(table[21]);
      const bestActiveInput = obj.getBestActiveInput();
      obj = {};
      let tmp2;
      if (closure_1) {
        tmp2 = table;
      }
      obj.appLauncherNavigator = tmp2;
      ({ channelId: obj3.channelId, commandId: obj3.commandId, commandName: obj3.commandName } = bestActiveInput);
      let text;
      if (null != bestActiveInput) {
        text = bestActiveInput.getText();
      }
      let str = "";
      if (null != text) {
        str = text;
      }
      obj.currentText = str;
      obj.onOpenCustomKeyboard = function onOpenCustomKeyboard(arg0) {
        let openCustomKeyboardResult;
        if (null != bestActiveInput) {
          openCustomKeyboardResult = bestActiveInput.openCustomKeyboard(arg0);
        }
        return openCustomKeyboardResult;
      };
      obj.onSetCommand = function onSetCommand() {
        let commandId;
        let commandName;
        callback(10886)();
        callback(4098).hideActionSheet();
        if (null != bestActiveInput) {
          bestActiveInput.openSystemKeyboard();
        }
        let tmp5 = null == bestActiveInput;
        if (!tmp5) {
          const applicationCommandManager = bestActiveInput.getApplicationCommandManager();
          tmp5 = null == applicationCommandManager;
          const obj2 = applicationCommandManager;
        }
        if (!tmp5) {
          ({ commandId, commandName } = bestActiveInput);
          obj2.setPartialCommand(commandId, commandName, node(6755).ApplicationCommandTriggerLocations.MENTION);
        }
      };
      outer1_10(obj);
    },
    onLongPress() {
      outer1_11(node.commandName, node.commandId);
    }
  };
  const items = ["/", node(9969).smartOutput(node, output, state)];
  obj.children = items;
  return jsxs(node(4126).Text, {
    style,
    variant: "text-md/bold",
    onPress() {
      let obj = node(table[21]);
      const bestActiveInput = obj.getBestActiveInput();
      obj = {};
      let tmp2;
      if (closure_1) {
        tmp2 = table;
      }
      obj.appLauncherNavigator = tmp2;
      ({ channelId: obj3.channelId, commandId: obj3.commandId, commandName: obj3.commandName } = bestActiveInput);
      let text;
      if (null != bestActiveInput) {
        text = bestActiveInput.getText();
      }
      let str = "";
      if (null != text) {
        str = text;
      }
      obj.currentText = str;
      obj.onOpenCustomKeyboard = function onOpenCustomKeyboard(arg0) {
        let openCustomKeyboardResult;
        if (null != bestActiveInput) {
          openCustomKeyboardResult = bestActiveInput.openCustomKeyboard(arg0);
        }
        return openCustomKeyboardResult;
      };
      obj.onSetCommand = function onSetCommand() {
        let commandId;
        let commandName;
        callback(10886)();
        callback(4098).hideActionSheet();
        if (null != bestActiveInput) {
          bestActiveInput.openSystemKeyboard();
        }
        let tmp5 = null == bestActiveInput;
        if (!tmp5) {
          const applicationCommandManager = bestActiveInput.getApplicationCommandManager();
          tmp5 = null == applicationCommandManager;
          const obj2 = applicationCommandManager;
        }
        if (!tmp5) {
          ({ commandId, commandName } = bestActiveInput);
          obj2.setPartialCommand(commandId, commandName, node(6755).ApplicationCommandTriggerLocations.MENTION);
        }
      };
      outer1_10(obj);
    },
    onLongPress() {
      outer1_11(node.commandName, node.commandId);
    }
  });
};
export { handleTapCommandMention };
export { handleLongPressCommandMention };
