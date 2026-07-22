// Module ID: 11878
// Function ID: 91960
// Name: useBotProfileCommands
// Dependencies: [1194, 4213, 653, 566]
// Exports: default

// Module 11878 (useBotProfileCommands)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import initialize from "initialize";

const result = initialize.fileFinishedImporting("modules/user_profile/useBotProfileCommands.tsx");

export default function useBotProfileCommands(channel) {
  let obj = importAll(dependencyMap[1]);
  const accessibleCommandsForApplication = obj.useAccessibleCommandsForApplication(channel, arg1, arg2);
  const commands = accessibleCommandsForApplication.commands;
  const arg1 = commands;
  obj = {
    application: accessibleCommandsForApplication.application,
    commands: React.useMemo(() => {
      let found;
      if (null != commands) {
        found = commands.filter((nsfw) => {
          let tmp = true !== nsfw.nsfw;
          if (tmp) {
            const options = nsfw.options;
            let found;
            if (null != options) {
              found = options.find((type) => {
                type = type.type;
                let tmp = type === callback(closure_2[2]).ApplicationCommandOptionType.SUB_COMMAND;
                if (!tmp) {
                  tmp = type === callback(closure_2[2]).ApplicationCommandOptionType.SUB_COMMAND_GROUP;
                }
                return tmp;
              });
            }
            tmp = null == found;
          }
          return tmp;
        });
      }
      return found;
    }, items)
  };
  const items = [commands];
  return obj;
};
