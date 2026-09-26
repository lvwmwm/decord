// Module ID: 12513
// Function ID: 12514
// Name: application_commands/ApplicationCommandUtils
// Dependencies: [5137, 5136, 5242, 1397, 12514, 12515, 7797, 1968, 10929, 9453, 2]
// Exports: getApplicationCommandsIconSource, openCommandAttachmentPreview

// Module 12513 (application_commands/ApplicationCommandUtils)
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import _modDef1968 from "module_1968" /* 1968 */;
import DraftStore from "DraftStore" /* 5137 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5242 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7797 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9453 */;
import showUploadPreviewActionSheetDefault from "showUploadPreviewActionSheet" /* 10929 */;
import _modDef12514 from "module_12514" /* 12514 */;
import _modDef12515 from "module_12515" /* 12515 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5136 */;
import size from "module_2" /* 2 */;

const DraftType = DraftStore.DraftType;
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
let result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandUtils.tsx");

export const getApplicationCommandsIconSource = function getApplicationCommandsIconSource(section, stateFromStores) {
  if (null == section) {
    return null;
  } else {
    const id = section.id;
    if (BuiltInSectionId.BUILT_IN === id) {
      return AvatarUtilsDefault.makeSource(_modDef12514);
    } else if (tmp10.FRECENCY === id) {
      return AvatarUtilsDefault.makeSource(_modDef12515);
    } else {
      if (section.type === ApplicationCommandTypes.ApplicationCommandSectionType.APPLICATION) {
        const obj5 = { id: null, icon: null, bot: null, botIconFirst: true, guildMember: null };
        ({ id: obj2.id, icon: obj2.icon, application } = section);
        let bot;
        if (application != null) {
          bot = application.bot;
        }
        obj5.bot = bot;
        obj5.guildMember = stateFromStores;
        let applicationIconSource = AvatarUtilsDefault.getApplicationIconSource(obj5);
      } else {
        applicationIconSource = _modDef1968;
      }
      return applicationIconSource;
    }
  }
};
export const openCommandAttachmentPreview = function openCommandAttachmentPreview(applicationCommandManager, channelId, name, fn) {
  closure_0 = applicationCommandManager;
  importDefault = channelId;
  dependencyMap = name;
  upload = UploadAttachmentStore.getUpload(channelId, name, upload.SlashCommand);
  if (null != upload) {
    const obj = {
      channelId,
      disableSpoiler: true,
      onClose: fn,
      onRemove() {
          UploadAttachmentActionCreatorsDefault.remove(closure_1, upload.id, DraftType.SlashCommand);
          let found;
          if (closure_0 != null) {
            const activeCommand = obj2.props.activeCommand;
            if (activeCommand != null) {
              const options = activeCommand.options;
              if (options != null) {
                found = options.find((name) => name.name === name);
              }
            }
          }
          if (null != found) {
            if (obj2 != null) {
              const result = obj2.insertOrJumpCommandOption(found, undefined, false, { displayText: "" });
            }
          }
        },
      upload
    };
    showUploadPreviewActionSheetDefault(obj);
  }
};
