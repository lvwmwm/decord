// Module ID: 11917
// Function ID: 92251
// Name: useBotProfileCommands
// Dependencies: [31, 8233, 1881, 2]
// Exports: default

// Module 11917 (useBotProfileCommands)
import result from "result";

const require = arg1;
const result = require("PermissionOverwriteType").fileFinishedImporting("modules/user_profile/useBotProfileCommands.tsx");

export default function useBotProfileCommands(channel) {
  let obj = importAll(8233);
  const accessibleCommandsForApplication = obj.useAccessibleCommandsForApplication(channel, arg1, arg2);
  const commands = accessibleCommandsForApplication.commands;
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
                let tmp = type === commands(outer3_2[2]).ApplicationCommandOptionType.SUB_COMMAND;
                if (!tmp) {
                  tmp = type === commands(outer3_2[2]).ApplicationCommandOptionType.SUB_COMMAND_GROUP;
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
  items = [commands];
  return obj;
};
