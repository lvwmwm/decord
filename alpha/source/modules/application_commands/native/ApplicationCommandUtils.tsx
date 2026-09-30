// Module ID: 11916
// Function ID: 11917
// Name: application_commands/ApplicationCommandUtils
// Dependencies: [5396, 5395, 5501, 1397, 11917, 11918, 7139, 1969, 10297, 8807, 2]
// Exports: getApplicationCommandsIconSource, openCommandAttachmentPreview

// Module 11916 (application_commands/ApplicationCommandUtils)
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import _modDef1969 from "module_1969" /* 1969 */;
import DraftStore from "DraftStore" /* 5396 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5501 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7139 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 8807 */;
import showUploadPreviewActionSheetDefault from "showUploadPreviewActionSheet" /* 10297 */;
import _modDef11917 from "module_11917" /* 11917 */;
import _modDef11918 from "module_11918" /* 11918 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5395 */;
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
      return AvatarUtilsDefault.makeSource(_modDef11917);
    } else if (tmp10.FRECENCY === id) {
      return AvatarUtilsDefault.makeSource(_modDef11918);
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
        applicationIconSource = _modDef1969;
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
