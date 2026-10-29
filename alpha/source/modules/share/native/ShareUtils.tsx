// Module ID: 15645
// Function ID: 15646
// Name: ShareUtils
// Dependencies: [5, 7689, 5010, 5701, 5724, 9731, 8358, 8200, 8198, 7812, 9719, 7624, 2]
// Exports: sendShareMessage, showInformationToast

// Module 15645 (ShareUtils)
import MessageConstants from "MessageConstants" /* 5010 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5701 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5724 */;
import DraftStore from "DraftStore" /* 7689 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size_mod from "module_2" /* 2 */;

let obj = function _sendShareMessage() {
  obj = _asyncToGenerator(async function(arg0) {
    let c0;
    let c1;
    let c2;
    let c5;
    let closure_3;
    let user;
    let closure_0 = arg0;
    c2 = 0;
    ({ attachments: c0, channel: c1, comment: c2 } = closure_0);
    await "Reflect";
    const id = user.id;
    const attachmentsToUpload = c0.map((uri) => {
      size = { uri: uri.uri, originalUri: uri.uri, mimeType: uri.mimeType, filename: uri.name, platform: closure_0(c2[7]).UploadPlatform.REACT_NATIVE, width: uri.width, height: uri.height, preTranscodeSourceSize: uri.originalSize };
      const cloudUpload = new closure_0(c2[8]).CloudUpload(size, guildId.id);
      return cloudUpload;
    });
    user = c2;
    const parse = closure_131_1(closure_131_2[9]).parse;
    const tmp43 = closure_131_1(closure_131_2[9]);
    const tmp44 = user;
    if (c2 == null) {
      user = "";
    }
    let closure_5 = parse(tmp44, user);
    if (attachmentsToUpload.length > 0) {
      let obj3 = closure_131_1(closure_131_2[5]);
      obj3.clearAll(id, closure_131_4.ChannelMessage);
    }
    const self = this;
    const self2 = this;
    const future = new closure_131_0(closure_131_2[10]).Future();
    let obj4 = closure_131_1(closure_131_2[11]);
    const obj7 = {
      location: closure_131_5.SHARE_MODAL,
      doNotNotifyOnError: true,
      attachmentsToUpload,
      onAttachmentUploadError(file, code, reason) {
        obj = { uploadError: { file, guildId: guildId.getGuildId(), code, reason } };
        ({ file, guildId: guildId.getGuildId(), code, reason });
        closure_1_6.reject(obj);
        const obj3 = guildId(c2[5]);
        const obj4 = { channelId, uploads, draftType: uploads.ChannelMessage, resetState: true };
        obj3.setUploads(obj4);
        const obj5 = guildId(c2[6]);
        obj5.saveDraft(channelId, closure_1_2, uploads.ChannelMessage);
      }
    };
    await obj4.sendMessage(user.id, closure_5, false, obj7);
    future.resolve(undefined);
    return future.promise;
  });
  return obj(...arguments);
};
const DraftType = DraftStore.DraftType;
const MessageSendLocation = MessageConstants.MessageSendLocation;
let size = size_mod;
const result = size.fileFinishedImporting("modules/share/native/ShareUtils.tsx");

export function showInformationToast(intl3) {
  const open = ToastActionCreatorsDefault.open;
  obj = { text: intl3, icon: CircleInformationIcon.CircleInformationIcon };
  ToastActionCreatorsDefault;
  const combined = "INFORMATION_TOAST-" + intl3;
  open(combined, obj);
}
export function sendShareMessage() {
  return obj(...arguments);
}
