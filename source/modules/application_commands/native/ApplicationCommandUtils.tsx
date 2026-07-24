// Module ID: 11366
// Function ID: 88418
// Name: getApplicationCommandsIconSource
// Dependencies: [4468, 4467, 4566, 1392, 11367, 11368, 6755, 1831, 9684, 8025, 2]
// Exports: getApplicationCommandsIconSource, openCommandAttachmentPreview

// Module 11366 (getApplicationCommandsIconSource)
import { DraftType } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { BuiltInSectionId } from "TRUE_OPTION_NAME";

let result = require("TRUE_OPTION_NAME").fileFinishedImporting("modules/application_commands/native/ApplicationCommandUtils.tsx");

export const getApplicationCommandsIconSource = function getApplicationCommandsIconSource(section, stateFromStores) {
  let application;
  if (null == section) {
    return null;
  } else {
    const id = section.id;
    if (BuiltInSectionId.BUILT_IN === id) {
      return importDefault(1392).makeSource(importDefault(11367));
    } else if (BuiltInSectionId.FRECENCY === id) {
      return importDefault(1392).makeSource(importDefault(11368));
    } else {
      if (section.type === require(6755) /* ApplicationCommandSectionType */.ApplicationCommandSectionType.APPLICATION) {
        let obj = importDefault(1392);
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
        applicationIconSource = importDefault(1831);
      }
      return applicationIconSource;
    }
  }
};
export const openCommandAttachmentPreview = function openCommandAttachmentPreview(applicationCommandManager, channelId, name, fn) {
  let closure_0 = applicationCommandManager;
  const importDefault = channelId;
  const dependencyMap = name;
  upload = upload.getUpload(channelId, name, upload.SlashCommand);
  if (null != upload) {
    let obj = {
      channelId,
      disableSpoiler: true,
      onClose: fn,
      onRemove() {
          let obj = channelId(name[9]);
          obj.remove(channelId, upload.id, upload.SlashCommand);
          let found;
          if (null != applicationCommandManager) {
            const activeCommand = applicationCommandManager.props.activeCommand;
            if (null != activeCommand) {
              const options = activeCommand.options;
              if (null != options) {
                found = options.find((name) => name.name === outer1_2);
              }
            }
          }
          if (null != found) {
            if (null != applicationCommandManager) {
              obj = { displayText: "" };
              const result = applicationCommandManager.insertOrJumpCommandOption(found, undefined, false, obj);
            }
          }
        },
      upload
    };
    importDefault(9684)(obj);
  }
};
