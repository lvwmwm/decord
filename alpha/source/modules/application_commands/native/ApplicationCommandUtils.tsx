// Module ID: 13743
// Function ID: 13744
// Name: application_commands/ApplicationCommandUtils
// Dependencies: [7694, 8200, 6030, 1410, 13744, 13745, 5678, 1983, 10508, 9757, 2]
// Exports: getApplicationCommandsIconSource, openCommandAttachmentPreview

// Module 13743 (application_commands/ApplicationCommandUtils)
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import AssetRegistryDefault from "AssetRegistry" /* 1983 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5678 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 6030 */;
import DraftStore from "DraftStore" /* 7694 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9757 */;
import showUploadPreviewActionSheetDefault from "showUploadPreviewActionSheet" /* 10508 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13744 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13745 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8200 */;
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
