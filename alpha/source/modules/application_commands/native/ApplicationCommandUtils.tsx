// Module ID: 14000
// Function ID: 14001
// Name: application_commands/ApplicationCommandUtils
// Dependencies: [7800, 8298, 6193, 1411, 14001, 14002, 5837, 2106, 10664, 9884, 2]
// Exports: getApplicationCommandsIconSource, openCommandAttachmentPreview

// Module 14000 (application_commands/ApplicationCommandUtils)
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import AssetRegistryDefault from "AssetRegistry" /* 2106 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5837 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 6193 */;
import DraftStore from "DraftStore" /* 7800 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9884 */;
import showUploadPreviewActionSheetDefault from "showUploadPreviewActionSheet" /* 10664 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14001 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14002 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8298 */;
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
