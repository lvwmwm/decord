// Module ID: 11879
// Function ID: 91965
// Dependencies: []

// Module 11879
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
const jsxs = arg1(dependencyMap[2]).jsxs;
const importAllResult = importAll(dependencyMap[0]);
let obj = {};
obj = { color: importDefault(dependencyMap[4]).colors.MENTION_FOREGROUND, backgroundColor: importDefault(dependencyMap[4]).colors.MENTION_BACKGROUND, marginEnd: importDefault(dependencyMap[4]).space.PX_12, marginBottom: importDefault(dependencyMap[4]).space.PX_12 };
obj.commandClickable = obj;
let closure_5 = arg1(dependencyMap[3]).createStyles(obj);
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function UserProfileAboutMeCardCommand(channel) {
  let command;
  ({ application: closure_0, command } = channel);
  const importDefault = command;
  const dependencyMap = channel.channel;
  const tmp = callback();
  const items = [, command.displayName];
  return jsxs(arg1(dependencyMap[5]).Text, {
    variant: "text-md/bold",
    onPress() {
      let obj = bestActiveInput(channel[6]);
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
        let obj = lib(guildId[8]);
        obj = {};
        let id;
        if (null != bestActiveInput) {
          id = bestActiveInput.id;
        }
        obj.application_id = id;
        obj.command_id = lib.id;
        obj.guild_id = guildId.getGuildId();
        const merged = Object.assign(bestActiveInput(guildId[9]).collectChannelAnalyticsMetadata(guildId));
        obj.track(constants.POPULAR_APPLICATION_COMMAND_CLICKED, obj);
        const obj3 = bestActiveInput(guildId[9]);
        lib(guildId[10]).hideActionSheet();
        lib(guildId[11])();
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
          obj = { channelId: guildId.id, command: lib };
          let applicationCommandSection = null;
          if (null != bestActiveInput) {
            applicationCommandSection = bestActiveInput(guildId[12]).getApplicationCommandSection(bestActiveInput);
            const obj7 = bestActiveInput(guildId[12]);
          }
          obj.section = applicationCommandSection;
          obj.location = bestActiveInput(guildId[13]).ApplicationCommandTriggerLocations.POPULAR_COMMANDS;
          obj5.setCommand(obj);
        }
      };
      const result = bestActiveInput(channel[7]).handleTapCommandMention(obj);
    },
    onLongPress() {
      return callback(channel[7]).handleLongPressCommandMention(command.displayName, command.id);
    },
    style: callback().commandClickable,
    children: items
  });
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/user_profile/native/UserProfileAboutMeCardCommand.tsx");

export default memoResult;
