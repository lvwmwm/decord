// Module ID: 11477
// Function ID: 11478
// Name: UserProfileAboutMeCardCommand
// Dependencies: [19, 1074, 21, 4756, 576, 4752, 4622, 11478, 1241, 4936, 4723, 11483, 7763, 7765, 2]

// Module 11477 (UserProfileAboutMeCardCommand)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4936 */;
import MarkupReactCommandRule from "MarkupReactCommandRule" /* 11478 */;
import navigateToLastChannelDefault from "navigateToLastChannel" /* 11483 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxs = fn(21).jsxs;
const createStyles = fn(4756);
let obj = { commandClickable: { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, marginEnd: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_12 } };
let closure_5 = createStyles.createStyles(obj);
let obj3 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, marginEnd: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_12 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAboutMeCardCommand.tsx");

export default noop.memo(function UserProfileAboutMeCardCommand(channel) {
  ({ application: require, command } = channel);
  channel = channel.channel;
  let obj = {
    variant: "text-md/bold",
    onPress() {
      const bestActiveInput = require("ChatInputUtils").getBestActiveInput();
      let obj = require("ChatInputUtils");
      let obj2 = { channelId: channel.id, currentText: null, commandId: null, commandName: null, onOpenCustomKeyboard: null, onSetCommand: null };
      let str;
      if (bestActiveInput != null) {
        str = bestActiveInput.getText();
      }
      if (str == null) {
        str = "";
      }
      obj2.currentText = str;
      ({ id: obj4.commandId, displayName: obj4.commandName } = command);
      obj2.onOpenCustomKeyboard = function onOpenCustomKeyboard(arg0) {
        let openCustomKeyboardResult;
        if (bestActiveInput != null) {
          openCustomKeyboardResult = bestActiveInput.openCustomKeyboard(arg0);
        }
        return openCustomKeyboardResult;
      };
      obj2.onSetCommand = function onSetCommand() {
        let id;
        if (closure_2_0 != null) {
          id = tmp3.id;
        }
        const obj = AnalyticsUtilsDefault;
        const obj2 = { application_id: id, command_id: command.id, guild_id: channel.getGuildId() };
        const tmp5 = command;
        const tmp6 = channel;
        const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
        obj.track(AnalyticEvents.POPULAR_APPLICATION_COMMAND_CLICKED, obj2);
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
        navigateToLastChannelDefault();
        if (bestActiveInput != null) {
          obj5.openSystemKeyboard();
        }
        if (bestActiveInput != null) {
          const applicationCommandManager = obj5.getApplicationCommandManager();
          if (applicationCommandManager != null) {
            const obj4 = { channelId: tmp6.id, command: tmp5, section: null, location: null };
            let applicationCommandSection = null;
            if (null != tmp3) {
              applicationCommandSection = tmp7(7763).getApplicationCommandSection(tmp3);
              const tmp7Result = tmp7(7763);
            }
            obj4.section = applicationCommandSection;
            obj4.location = tmp7(7765).ApplicationCommandTriggerLocations.POPULAR_COMMANDS;
            applicationCommandManager.setCommand(obj4);
          }
        }
      };
      const result = require("MarkupReactCommandRule").handleTapCommandMention(obj2);
    },
    onLongPress() {
      return MarkupReactCommandRule.handleLongPressCommandMention(command.displayName, command.id);
    },
    style: closure_5().commandClickable,
    children: null
  };
  const items = ["/", command.displayName];
  obj.children = items;
  return jsxs(require("Text/Text").Text, {
    variant: "text-md/bold",
    onPress() {
      const bestActiveInput = require("ChatInputUtils").getBestActiveInput();
      let obj = require("ChatInputUtils");
      let obj2 = { channelId: channel.id, currentText: null, commandId: null, commandName: null, onOpenCustomKeyboard: null, onSetCommand: null };
      let str;
      if (bestActiveInput != null) {
        str = bestActiveInput.getText();
      }
      if (str == null) {
        str = "";
      }
      obj2.currentText = str;
      ({ id: obj4.commandId, displayName: obj4.commandName } = command);
      obj2.onOpenCustomKeyboard = function onOpenCustomKeyboard(arg0) {
        let openCustomKeyboardResult;
        if (bestActiveInput != null) {
          openCustomKeyboardResult = bestActiveInput.openCustomKeyboard(arg0);
        }
        return openCustomKeyboardResult;
      };
      obj2.onSetCommand = function onSetCommand() {
        let id;
        if (closure_2_0 != null) {
          id = tmp3.id;
        }
        const obj = AnalyticsUtilsDefault;
        const obj2 = { application_id: id, command_id: command.id, guild_id: channel.getGuildId() };
        const tmp5 = command;
        const tmp6 = channel;
        const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
        obj.track(AnalyticEvents.POPULAR_APPLICATION_COMMAND_CLICKED, obj2);
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
        navigateToLastChannelDefault();
        if (bestActiveInput != null) {
          obj5.openSystemKeyboard();
        }
        if (bestActiveInput != null) {
          const applicationCommandManager = obj5.getApplicationCommandManager();
          if (applicationCommandManager != null) {
            const obj4 = { channelId: tmp6.id, command: tmp5, section: null, location: null };
            let applicationCommandSection = null;
            if (null != tmp3) {
              applicationCommandSection = tmp7(7763).getApplicationCommandSection(tmp3);
              const tmp7Result = tmp7(7763);
            }
            obj4.section = applicationCommandSection;
            obj4.location = tmp7(7765).ApplicationCommandTriggerLocations.POPULAR_COMMANDS;
            applicationCommandManager.setCommand(obj4);
          }
        }
      };
      const result = require("MarkupReactCommandRule").handleTapCommandMention(obj2);
    },
    onLongPress() {
      return MarkupReactCommandRule.handleLongPressCommandMention(command.displayName, command.id);
    },
    style: closure_5().commandClickable,
    children: null
  });
});
