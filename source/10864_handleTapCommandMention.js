// Module ID: 10864
// Function ID: 84514
// Name: handleTapCommandMention
// Dependencies: []
// Exports: default

// Module 10864 (handleTapCommandMention)
function handleTapCommandMention(channelId) {
  let appLauncherNavigator;
  let commandId;
  let commandName;
  let onSetCommand;
  ({ appLauncherNavigator, onSetCommand } = channelId);
  const arg1 = onSetCommand;
  ({ onOpenCustomKeyboard: closure_1, commandId, commandName } = channelId);
  let dependencyMap;
  const channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    if (null != channel.guild_id) {
      let sum1 = commandId;
      if (commandName.includes(" ")) {
        const sum = commandId + SUB_COMMAND_KEY_SEPARATOR;
        const parts = commandName.split(" ");
        const substr = parts.slice(1);
        sum1 = sum + substr.join(SUB_COMMAND_KEY_SEPARATOR);
      }
      dependencyMap = sum1;
      if (null != appLauncherNavigator) {
        if (null != channel) {
          let obj = { name: constants.COMMAND_VIEW };
          obj = { analyticsLocation: arg1(dependencyMap[6]).ApplicationCommandTriggerLocations.MENTION };
          let obj1 = { commandId: sum1 };
          obj.preSelectedCommand = obj1;
          const obj2 = { type: "channel", channel };
          obj.context = obj2;
          obj.params = obj;
          appLauncherNavigator.navigate(obj);
        }
      }
      obj1 = arg1(dependencyMap[7]);
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
      let obj3 = importDefault(dependencyMap[8]);
      obj3.hideActionSheet();
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        let obj = { type: onSetCommand(sum1[9]).KeyboardTypes.APP_LAUNCHER };
        obj = { initialRouteName: constants.COMMAND_VIEW, analyticsLocation: onSetCommand(sum1[6]).ApplicationCommandTriggerLocations.MENTION, preSelectedCommand: obj };
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
    const intl = arg1(dependencyMap[11]).intl;
    obj3.title = intl.string(arg1(dependencyMap[11]).t.pe26Cj);
    const intl2 = arg1(dependencyMap[11]).intl;
    obj3.confirmText = intl2.string(arg1(dependencyMap[11]).t.VkKicb);
    obj3.onConfirm = function onConfirm() {
      return onSetCommand();
    };
    const intl3 = arg1(dependencyMap[11]).intl;
    obj3.cancelText = intl3.string(arg1(dependencyMap[11]).t.ETE/oC);
    obj3.confirmColor = arg1(dependencyMap[12]).ButtonColors.BRAND;
    const intl4 = arg1(dependencyMap[11]).intl;
    obj3.body = intl4.string(arg1(dependencyMap[11]).t.+awCIy);
    importDefault(dependencyMap[10]).show(obj3);
    const obj9 = importDefault(dependencyMap[10]);
  }
}
function handleLongPressCommandMention(commandName, commandId) {
  commandId = commandName;
  const importDefault = commandId;
  let obj = {};
  const intl = commandId(dependencyMap[11]).intl;
  obj.label = intl.string(commandId(dependencyMap[11]).t.42H+Nb);
  obj.IconComponent = commandId(dependencyMap[13]).SlashBoxIcon;
  obj.onPress = function onPress() {
    arg0(closure_2[14]).presentCommandCopied();
    const obj = arg0(closure_2[14]);
    arg0(closure_2[15]).copy("" + closure_8 + arg0);
  };
  const items = [obj];
  const DeveloperMode = commandId(dependencyMap[16]).DeveloperMode;
  if (DeveloperMode.getSetting()) {
    obj = {};
    const intl2 = commandId(dependencyMap[11]).intl;
    obj.label = intl2.string(commandId(dependencyMap[11]).t.oJ1Muw);
    obj.IconComponent = commandId(dependencyMap[17]).IdIcon;
    obj.onPress = function onPress() {
      arg0(closure_2[14]).presentIdCopied();
      const obj = arg0(closure_2[14]);
      arg0(closure_2[15]).copy(arg1);
    };
    items.push(obj);
  }
  obj = { "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017561265313071064, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007667343967426429, "Null": 65820313824839320000000000000000000000000000000000000000000000000, options: items };
  const result = commandId(dependencyMap[18]).showSimpleActionSheet(obj);
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ AppLauncherRouteName: closure_5, useAppLauncherNavigation: closure_6 } = arg1(dependencyMap[2]));
const SUB_COMMAND_KEY_SEPARATOR = arg1(dependencyMap[3]).SUB_COMMAND_KEY_SEPARATOR;
const COMMAND_SENTINEL = arg1(dependencyMap[4]).COMMAND_SENTINEL;
const jsxs = arg1(dependencyMap[5]).jsxs;
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/markup/native/MarkupReactCommandRule.tsx");

export default function MarkupReactCommandRule(node) {
  let output;
  let state;
  let style;
  node = node.node;
  const arg1 = node;
  ({ output, state, style } = node);
  let closure_1 = null != React.useContext(arg1(closure_2[19]).AppLauncherContext);
  closure_2 = callback();
  const obj = {
    style,
    variant: "text-md/bold",
    onPress() {
      let obj = node(closure_2[21]);
      const bestActiveInput = obj.getBestActiveInput();
      const node = bestActiveInput;
      obj = {};
      let tmp2;
      if (closure_1) {
        tmp2 = closure_2;
      }
      obj.appLauncherNavigator = tmp2;
      ({ channelId: obj3.channelId, commandId: obj3.commandId, commandName: obj3.commandName } = node);
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
        callback(closure_2[22])();
        callback(closure_2[8]).hideActionSheet();
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
          obj2.setPartialCommand(commandId, commandName, bestActiveInput(closure_2[6]).ApplicationCommandTriggerLocations.MENTION);
        }
      };
      closure_10(obj);
    },
    onLongPress() {
      callback(node.commandName, node.commandId);
    }
  };
  const items = [, arg1(closure_2[23]).smartOutput(node, output, state)];
  obj.children = items;
  return jsxs(arg1(closure_2[20]).Text, obj);
};
export { handleTapCommandMention };
export { handleLongPressCommandMention };
