// Module ID: 11918
// Function ID: 92256
// Dependencies: [31, 653, 33, 4130, 689, 4126, 3989, 10908, 675, 4324, 4098, 10913, 6753, 6755, 2]

// Module 11918
import { AnalyticEvents } from "ME";
import { jsxs } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let obj = {};
obj = { color: require("_createForOfIteratorHelperLoose").colors.MENTION_FOREGROUND, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MENTION_BACKGROUND, marginEnd: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.commandClickable = obj;
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function UserProfileAboutMeCardCommand(channel) {
  let command;
  let require;
  ({ application: require, command } = channel);
  channel = channel.channel;
  const tmp = callback();
  const items = ["/", command.displayName];
  return jsxs(require(channel[5]).Text, {
    variant: "text-md/bold",
    onPress() {
      let obj = outer1_0(channel[6]);
      const bestActiveInput = obj.getBestActiveInput();
      obj = { channelId: channel.id };
      let text;
      if (null != bestActiveInput) {
        text = bestActiveInput.getText();
      }
      let str = "";
      if (null != text) {
        str = text;
      }
      obj.currentText = str;
      ({ id: obj4.commandId, displayName: obj4.commandName } = command);
      obj.onOpenCustomKeyboard = function onOpenCustomKeyboard(arg0) {
        let openCustomKeyboardResult;
        if (null != bestActiveInput) {
          openCustomKeyboardResult = bestActiveInput.openCustomKeyboard(arg0);
        }
        return openCustomKeyboardResult;
      };
      obj.onSetCommand = function onSetCommand() {
        let obj = command(channel[8]);
        obj = {};
        let id;
        if (null != bestActiveInput) {
          id = bestActiveInput.id;
        }
        obj.application_id = id;
        obj.command_id = outer1_1.id;
        obj.guild_id = outer1_2.getGuildId();
        const merged = Object.assign(outer2_0(channel[9]).collectChannelAnalyticsMetadata(outer1_2));
        obj.track(outer2_3.POPULAR_APPLICATION_COMMAND_CLICKED, obj);
        const obj3 = outer2_0(channel[9]);
        command(channel[10]).hideActionSheet();
        command(channel[11])();
        if (null != bestActiveInput) {
          bestActiveInput.openSystemKeyboard();
        }
        let tmp9 = null == bestActiveInput;
        if (!tmp9) {
          const applicationCommandManager = bestActiveInput.getApplicationCommandManager();
          tmp9 = null == applicationCommandManager;
          const obj5 = applicationCommandManager;
        }
        if (!tmp9) {
          obj = { channelId: outer1_2.id, command: outer1_1 };
          let applicationCommandSection = null;
          if (null != bestActiveInput) {
            applicationCommandSection = outer2_0(channel[12]).getApplicationCommandSection(bestActiveInput);
            const obj7 = outer2_0(channel[12]);
          }
          obj.section = applicationCommandSection;
          obj.location = outer2_0(channel[13]).ApplicationCommandTriggerLocations.POPULAR_COMMANDS;
          obj5.setCommand(obj);
        }
      };
      const result = outer1_0(channel[7]).handleTapCommandMention(obj);
    },
    onLongPress() {
      return outer1_0(channel[7]).handleLongPressCommandMention(command.displayName, command.id);
    },
    style: callback().commandClickable,
    children: items
  });
});
let result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileAboutMeCardCommand.tsx");

export default memoResult;
