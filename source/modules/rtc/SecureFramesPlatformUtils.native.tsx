// Module ID: 8893
// Function ID: 70194
// Dependencies: []

// Module 8893
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY: closure_5, SECURE_FRAMES_STREAM_VERIFICATION_BOTTOM_SHEET_KEY: closure_6, SECURE_FRAMES_USER_VERIFICATION_MODAL_KEY: closure_7 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ ME: closure_8, Routes: closure_9 } = arg1(dependencyMap[3]));
const obj = {
  openSecureFramesStreamVerification(stateFromStores4, channelId) {
    let obj = importDefault(dependencyMap[7]);
    obj = { streamKey: stateFromStores4, channelId };
    obj.openLazy(channelId(dependencyMap[6])(dependencyMap[8], dependencyMap.paths), closure_6, obj);
  },
  openSecureFramesUserVerificationModal(id, id2, arg2) {
    if (arg2()) {
      let obj = importDefault(dependencyMap[4]);
      obj = { userId: id, channelId: id2 };
      obj.pushLazy(id2(dependencyMap[6])(dependencyMap[5], dependencyMap.paths), obj, closure_7);
    }
  },
  openSecureFramesUpdateConfirmation(result) {
    let subtitle;
    let title;
    let confirmText = result.confirmText;
    ({ title, subtitle } = result);
    if (confirmText === undefined) {
      const intl = arg1(dependencyMap[9]).intl;
      confirmText = intl.string(arg1(dependencyMap[9]).t.cY+Oob);
    }
    const arg1 = result.onConfirm;
    let obj = importDefault(dependencyMap[10]);
    obj = { title, body: subtitle, confirmText };
    const intl2 = arg1(dependencyMap[9]).intl;
    obj.cancelText = intl2.string(arg1(dependencyMap[9]).t.ETE/oC);
    obj.confirmColor = arg1(dependencyMap[11]).ButtonColors.RED;
    obj.confirm(obj).then((arg0) => {
      if (arg0) {
        onConfirm();
      }
    });
  },
  handleSecureFramesUserVerificationLink(arg0) {
    let fingerprint;
    let userId;
    ({ userId, fingerprint } = arg0);
    const channelId = channelId.getChannelId();
    const channel = channel.getChannel(channelId);
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    if (null == guildId) {
      guildId = closure_8;
    }
    if (null != channelId) {
      if (null != channel) {
        importDefault(dependencyMap[12])(closure_9.CHANNEL(guildId, channelId));
        const tmp6 = importDefault(dependencyMap[12]);
        let obj = { userId, channelId, guildId, fingerprint };
        importDefault(dependencyMap[7]).openLazy(arg1(dependencyMap[6])(dependencyMap[13], dependencyMap.paths), closure_5, obj);
        const obj4 = importDefault(dependencyMap[7]);
      }
    }
    obj = {};
    const intl = arg1(dependencyMap[9]).intl;
    obj.title = intl.string(arg1(dependencyMap[9]).t.5ICxE6);
    const intl2 = arg1(dependencyMap[9]).intl;
    obj.body = intl2.string(arg1(dependencyMap[9]).t.v1eXp/);
    importDefault(dependencyMap[10]).show(obj);
  }
};
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/rtc/SecureFramesPlatformUtils.native.tsx");

export default obj;
