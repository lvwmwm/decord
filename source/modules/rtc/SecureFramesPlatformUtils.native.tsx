// Module ID: 8901
// Function ID: 70248
// Dependencies: [1348, 4202, 8899, 653, 4337, 8902, 1934, 4098, 8912, 1212, 4471, 1273, 5628, 8915, 2]

// Module 8901
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY";
import ME from "ME";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY: closure_5, SECURE_FRAMES_STREAM_VERIFICATION_BOTTOM_SHEET_KEY: closure_6, SECURE_FRAMES_USER_VERIFICATION_MODAL_KEY: closure_7 } = SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY);
({ ME: closure_8, Routes: closure_9 } = ME);
const result = require("SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY").fileFinishedImporting("modules/rtc/SecureFramesPlatformUtils.native.tsx");

export default {
  openSecureFramesStreamVerification(stateFromStores4, channelId) {
    let obj = importDefault(4098);
    obj = { streamKey: stateFromStores4, channelId };
    obj.openLazy(require(1934) /* maybeLoadBundle */(8912, dependencyMap.paths), closure_6, obj);
  },
  openSecureFramesUserVerificationModal(id, id2, arg2) {
    if (arg2()) {
      let obj = importDefault(4337);
      obj = { userId: id, channelId: id2 };
      obj.pushLazy(require(1934) /* maybeLoadBundle */(8902, dependencyMap.paths), obj, closure_7);
    }
  },
  openSecureFramesUpdateConfirmation(result) {
    let subtitle;
    let title;
    let confirmText = result.confirmText;
    ({ title, subtitle } = result);
    if (confirmText === undefined) {
      const intl = onConfirm(1212).intl;
      confirmText = intl.string(onConfirm(1212).t["cY+Oob"]);
    }
    onConfirm = result.onConfirm;
    let obj = importDefault(4471);
    obj = { title, body: subtitle, confirmText };
    const intl2 = onConfirm(1212).intl;
    obj.cancelText = intl2.string(onConfirm(1212).t["ETE/oC"]);
    obj.confirmColor = onConfirm(1273).ButtonColors.RED;
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
    channelId = channelId.getChannelId();
    channel = channel.getChannel(channelId);
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    if (null == guildId) {
      guildId = closure_8;
    }
    if (null != channelId) {
      if (null != channel) {
        importDefault(5628)(closure_9.CHANNEL(guildId, channelId));
        const tmp6 = importDefault(5628);
        let obj = { userId, channelId, guildId, fingerprint };
        importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(8915, dependencyMap.paths), closure_5, obj);
        const obj4 = importDefault(4098);
      }
    }
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t["5ICxE6"]);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.body = intl2.string(require(1212) /* getSystemLocale */.t["v1eXp/"]);
    importDefault(4471).show(obj);
  }
};
