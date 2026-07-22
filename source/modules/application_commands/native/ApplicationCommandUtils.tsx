// Module ID: 11327
// Function ID: 88128
// Name: getApplicationCommandsIconSource
// Dependencies: []
// Exports: getApplicationCommandsIconSource, openCommandAttachmentPreview

// Module 11327 (getApplicationCommandsIconSource)
const DraftType = require(dependencyMap[0]).DraftType;
let closure_4 = importDefault(dependencyMap[1]);
const BuiltInSectionId = require(dependencyMap[2]).BuiltInSectionId;
const _module = require(dependencyMap[10]);
const result = _module.fileFinishedImporting("modules/application_commands/native/ApplicationCommandUtils.tsx");

export const getApplicationCommandsIconSource = function getApplicationCommandsIconSource(section, stateFromStores) {
  let application;
  if (null == section) {
    return null;
  } else {
    const id = section.id;
    if (BuiltInSectionId.BUILT_IN === id) {
      return importDefault(dependencyMap[3]).makeSource(importDefault(dependencyMap[4]));
    } else if (BuiltInSectionId.FRECENCY === id) {
      return importDefault(dependencyMap[3]).makeSource(importDefault(dependencyMap[5]));
    } else {
      if (section.type === require(dependencyMap[6]).ApplicationCommandSectionType.APPLICATION) {
        let obj = importDefault(dependencyMap[3]);
        obj = {};
        ({ id: obj2.id, icon: obj2.icon, application } = section);
        let bot;
        if (null != application) {
          bot = application.bot;
        }
        obj.bot = bot;
        obj.botIconFirst = true;
        obj.guildMember = stateFromStores;
        let applicationIconSource = obj.getApplicationIconSource(obj);
      } else {
        applicationIconSource = importDefault(dependencyMap[7]);
      }
      return applicationIconSource;
    }
  }
};
export const openCommandAttachmentPreview = function openCommandAttachmentPreview(applicationCommandManager, channelId, name, fn) {
  const require = applicationCommandManager;
  const importDefault = channelId;
  const dependencyMap = name;
  const upload = upload.getUpload(channelId, name, DraftType.SlashCommand);
  const DraftType = upload;
  if (null != upload) {
    const obj = {
      channelId,
      disableSpoiler: true,
      onClose: fn,
      onRemove(self) {
          let obj = arg1(arg2[9]);
          obj.remove(arg1, upload.id, upload.SlashCommand);
          let found;
          if (null != self) {
            const activeCommand = self.props.activeCommand;
            if (null != activeCommand) {
              const options = activeCommand.options;
              if (null != options) {
                found = options.find((name) => name.name === closure_2);
              }
            }
          }
          if (null != found) {
            if (null != self) {
              obj = { displayText: "" };
              const result = self.insertOrJumpCommandOption(found, undefined, false, obj);
            }
          }
        },
      upload
    };
    importDefault(dependencyMap[8])(obj);
  }
};
