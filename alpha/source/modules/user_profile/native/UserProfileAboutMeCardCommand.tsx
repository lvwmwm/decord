// Module ID: 11462
// Function ID: 11463
// Name: UserProfileAboutMeCardCommand
// Dependencies: [19, 1072, 21, 5009, 575, 5619, 5202, 11463, 1253, 5755, 5253, 11469, 7693, 5678, 2]

// Module 11462 (UserProfileAboutMeCardCommand)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5678 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5755 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7693 */;
import MarkupReactCommandRule from "MarkupReactCommandRule" /* 11463 */;
import navigateToLastChannelDefault from "navigateToLastChannel" /* 11469 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let obj2;
const AnalyticEvents = Constants.AnalyticEvents;
const jsxs = Fragment.jsxs;
let obj = { commandClickable: obj2 };
obj2 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, marginEnd: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_12 };
let closure_5 = createStyles.createStyles(obj);
const memoResult = react.memo(function UserProfileAboutMeCardCommand(channel) {
  let command;
  ({ application: require, command } = channel);
  channel = channel.channel;
  let tmp = closure_5();
  const items = ["/", command.displayName];
  return jsxs(require("Text/Text").Text, {
    variant: "text-md/bold",
    onPress() {
      let str;
      let obj = require("ChatInputUtils");
      const bestActiveInput = obj.getBestActiveInput();
      let obj2 = {
        channelId: channel.id,
        currentText: str,
        commandId: null,
        commandName: null,
        onOpenCustomKeyboard(arg0) {
          let openCustomKeyboardResult;
          const obj = bestActiveInput;
          if (bestActiveInput != null) {
            openCustomKeyboardResult = obj.openCustomKeyboard(arg0);
          }
          return openCustomKeyboardResult;
        },
        onSetCommand() {
          let applicationCommandSection;
          let id;
          const track = AnalyticsUtilsDefault.track;
          const POPULAR_APPLICATION_COMMAND_CLICKED = AnalyticEvents.POPULAR_APPLICATION_COMMAND_CLICKED;
          AnalyticsUtilsDefault;
          if (require != null) {
            id = tmp4.id;
          }
          const obj = { application_id: id, command_id: command.id, guild_id: channel.getGuildId() };
          const obj2 = AppAnalyticsUtils;
          const merged = Object.assign(obj2.collectChannelAnalyticsMetadata(channel));
          track(POPULAR_APPLICATION_COMMAND_CLICKED, obj);
          const tmpResult = ActionSheetActionCreatorsDefault;
          tmpResult.hideAllActionSheets();
          navigateToLastChannelDefault();
          const tmp6 = command;
          const tmp7 = channel;
          if (bestActiveInput != null) {
            bestActiveInput.openSystemKeyboard();
          }
          if (bestActiveInput != null) {
            const applicationCommandManager = obj4.getApplicationCommandManager();
            if (applicationCommandManager != null) {
              const obj3 = { channelId: tmp7.id, command: tmp6, section: applicationCommandSection, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.POPULAR_COMMANDS };
              applicationCommandSection = null;
              const setCommand = applicationCommandManager.setCommand;
              if (null != require) {
                const tmp8Result = ApplicationCommandUtils;
                applicationCommandSection = tmp8Result.getApplicationCommandSection(tmp4);
              }
              setCommand(obj3);
            }
          }
        }
      };
      str = undefined;
      const handleTapCommandMention = require("MarkupReactCommandRule").handleTapCommandMention;
      const tmp = require("MarkupReactCommandRule");
      if (bestActiveInput != null) {
        str = bestActiveInput.getText();
      }
      if (str == null) {
        str = "";
      }
      ({ id: obj3.commandId, displayName: obj3.commandName } = command);
      const result = handleTapCommandMention(obj2);
    },
    onLongPress() {
      const obj = MarkupReactCommandRule;
      return obj.handleLongPressCommandMention(command.displayName, command.id);
    },
    style: tmp.commandClickable,
    children: items
  });
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAboutMeCardCommand.tsx");

export default memoResult;
