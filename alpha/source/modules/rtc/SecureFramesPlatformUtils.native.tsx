// Module ID: 9059
// Function ID: 9060
// Name: SecureFramesPlatformUtils
// Dependencies: [2068, 5172, 9056, 1087, 6153, 9060, 2002, 5118, 9070, 1128, 5363, 1202, 7172, 9073, 2]

// Module 9059 (SecureFramesPlatformUtils)
import intl3 from "intl" /* 1128 */;
import native from "native" /* 1202 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5363 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6153 */;
import safeTransitionToDefault from "safeTransitionTo" /* 7172 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5172 */;
import SecureFramesConstants from "SecureFramesConstants" /* 9056 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY: hasOwnProperty, SECURE_FRAMES_STREAM_VERIFICATION_BOTTOM_SHEET_KEY: metroRequire, SECURE_FRAMES_USER_VERIFICATION_MODAL_KEY: metroImportDefault } = SecureFramesConstants);
({ ME: metroImportAll, Routes: c9 } = Constants);
let obj = {
  openSecureFramesStreamVerification(streamKey, channelId) {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { streamKey, channelId };
    obj.openLazy(asyncRequire(9070, dependencyMap.paths), metroRequire, obj2);
  },
  openSecureFramesUserVerificationModal(id, id2, fn) {
    if (fn()) {
      const obj2 = { userId: id, channelId: id2 };
      const obj = ModalActionCreatorsDefault;
      obj.pushLazy(asyncRequire(9060, dependencyMap.paths), obj2, metroImportDefault);
    }
  },
  openSecureFramesUpdateConfirmation(confirmText) {
    let intl2;
    let subtitle;
    let title;
    confirmText = confirmText.confirmText;
    ({ title, subtitle } = confirmText);
    if (confirmText === undefined) {
      let tmp = require;
      const intl = intl3.intl;
      confirmText = intl.string(intl3.t["cY+Oob"]);
    }
    const onConfirm = confirmText.onConfirm;
    const tmp3 = actions_AlertActionCreatorsDefault;
    const _confirm = tmp3.confirm;
    const obj = { title, body: subtitle, confirmText, cancelText: intl2.string(intl3.t["ETE/oC"]), confirmColor: native.ButtonColors.RED };
    intl2 = intl3.intl;
    const _confirmResult = _confirm(obj);
    _confirmResult.then((result) => {
      const tmp = result;
      if (tmp) {
        onConfirm();
      }
    });
  },
  handleSecureFramesUserVerificationLink(arg0) {
    let fingerprint;
    let intl;
    let intl2;
    let userId;
    ({ userId, fingerprint } = arg0);
    const channelId = RTCConnectionStore.getChannelId();
    const channel = ChannelStore.getChannel(channelId);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    if (guildId == null) {
      guildId = metroImportAll;
    }
    if (null != channelId) {
      if (null != channel) {
        const tmp7 = safeTransitionToDefault;
        tmp7(React4.CHANNEL(guildId, channelId));
        const obj = { userId, channelId, guildId, fingerprint };
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.openLazy(asyncRequire(9073, dependencyMap.paths), hasOwnProperty, obj);
      }
    }
    const obj2 = { title: intl.string(intl3.t["5ICxE6"]), body: intl2.string(intl3.t["v1eXp/"]) };
    const show = actions_AlertActionCreatorsDefault.show;
    actions_AlertActionCreatorsDefault;
    intl = intl3.intl;
    intl2 = intl3.intl;
    show(obj2);
  }
};
const result = size.fileFinishedImporting("modules/rtc/SecureFramesPlatformUtils.native.tsx");

export default obj;
