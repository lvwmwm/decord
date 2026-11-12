// Module ID: 15367
// Function ID: 15368
// Name: useBotProfileCommands
// Dependencies: [19, 11338, 2116, 2]
// Exports: default

// Module 15367 (useBotProfileCommands)
import ApplicationCommandQueryApiAll from "ApplicationCommandQueryApi" /* 11338 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let type;

const result = size.fileFinishedImporting("modules/user_profile/useBotProfileCommands.tsx");

export default function useBotProfileCommands(channel, arg1, arg2) {
  let items;
  const obj = ApplicationCommandQueryApiAll;
  const accessibleCommandsForApplication = obj.useAccessibleCommandsForApplication(channel, arg1, arg2);
  const commands = accessibleCommandsForApplication.commands;
  const obj2 = {
    application: accessibleCommandsForApplication.application,
    commands: react.useMemo(() => {
      let found;
      const arr = commands;
      if (commands != null) {
        found = arr.filter((nsfw) => {
          let tmp = true !== nsfw.nsfw;
          if (tmp) {
            const options = nsfw.options;
            let found;
            if (options != null) {
              found = options.find((type) => {
                type = type.type;
                const tmp3 = type === closure_1_0(closure_1_2[2]).ApplicationCommandOptionType.SUB_COMMAND || type === closure_1_0(closure_1_2[2]).ApplicationCommandOptionType.SUB_COMMAND_GROUP;
                return tmp3;
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
  return obj2;
};
