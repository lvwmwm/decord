// Module ID: 12484
// Function ID: 12485
// Name: application_commands/ApplicationCommandUtils
// Dependencies: [5105, 5104, 5210, 1397, 12485, 12486, 7765, 1968, 10893, 9421, 2]
// Exports: getApplicationCommandsIconSource, openCommandAttachmentPreview

// Module 12484 (application_commands/ApplicationCommandUtils)
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import _modDef1968 from "module_1968" /* 1968 */;
import DraftStore from "DraftStore" /* 5105 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5210 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7765 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9421 */;
import showUploadPreviewActionSheetDefault from "showUploadPreviewActionSheet" /* 10893 */;
import _modDef12485 from "module_12485" /* 12485 */;
import _modDef12486 from "module_12486" /* 12486 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5104 */;
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
      return AvatarUtilsDefault.makeSource(_modDef12485);
    } else if (tmp10.FRECENCY === id) {
      return AvatarUtilsDefault.makeSource(_modDef12486);
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
