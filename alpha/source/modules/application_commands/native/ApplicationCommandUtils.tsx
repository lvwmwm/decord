// Module ID: 13001
// Function ID: 13002
// Name: application_commands/ApplicationCommandUtils
// Dependencies: [8196, 8348, 5816, 1414, 13002, 13003, 5444, 2109, 11556, 10391, 2]
// Exports: getApplicationCommandsIconSource, openCommandAttachmentPreview

// Module 13001 (application_commands/ApplicationCommandUtils)
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import AssetRegistryDefault from "AssetRegistry" /* 2109 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5444 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5816 */;
import DraftStore from "DraftStore" /* 8196 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 10391 */;
import showUploadPreviewActionSheetDefault from "showUploadPreviewActionSheet" /* 11556 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13002 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13003 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8348 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

const DraftType = DraftStore.DraftType;
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
let result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandUtils.tsx");

export function getApplicationCommandsIconSource(section, stateFromStores) {
  let application;
  let bot;
  if (null == section) {
    return null;
  } else {
    const id = section.id;
    if (BuiltInSectionId.BUILT_IN === id) {
      const obj3 = AvatarUtilsDefault;
      return obj3.makeSource(AssetRegistryDefault2);
    } else if (tmp11.FRECENCY === id) {
      const obj2 = AvatarUtilsDefault;
      return obj2.makeSource(AssetRegistryDefault3);
    } else {
      let applicationIconSource;
      if (section.type === ApplicationCommandTypes.ApplicationCommandSectionType.APPLICATION) {
        const obj = { id: null, icon: null, bot, botIconFirst: true, guildMember: stateFromStores };
        ({ id: obj.id, icon: obj.icon, application } = section);
        bot = undefined;
        const getApplicationIconSource = AvatarUtilsDefault.getApplicationIconSource;
        AvatarUtilsDefault;
        if (application != null) {
          bot = application.bot;
        }
        applicationIconSource = getApplicationIconSource(obj);
      } else {
        applicationIconSource = AssetRegistryDefault;
      }
      return applicationIconSource;
    }
  }
}
export function openCommandAttachmentPreview(applicationCommandManager, channelId, name, fn) {
  let upload;
  let closure_0 = applicationCommandManager;
  importDefault = channelId;
  dependencyMap = name;
  upload = UploadAttachmentStore.getUpload(channelId, name, upload.SlashCommand);
  if (null != upload) {
    let obj = {
      channelId,
      disableSpoiler: true,
      onClose: fn,
      onRemove() {
          const obj = UploadAttachmentActionCreatorsDefault;
          obj.remove(channelId, upload.id, DraftType.SlashCommand);
          let found;
          if (applicationCommandManager != null) {
            const activeCommand = obj2.props.activeCommand;
            if (activeCommand != null) {
              const options = activeCommand.options;
              if (options != null) {
                found = options.find((name) => name.name === name);
              }
            }
          }
          if (null != found) {
            if (applicationCommandManager != null) {
              const result = obj2.insertOrJumpCommandOption(found, undefined, false, { displayText: "" });
            }
          }
        },
      upload
    };
    showUploadPreviewActionSheetDefault(obj);
  }
}
