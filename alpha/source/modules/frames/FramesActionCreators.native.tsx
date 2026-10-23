// Module ID: 10765
// Function ID: 10766
// Name: FramesActionCreators
// Dependencies: [5, 5628, 10766, 10767, 5624, 2]

// Module 10765 (FramesActionCreators)
import launchFrameAll from "launchFrame" /* 10767 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import VoiceStateStore from "VoiceStateStore" /* 5628 */;
import size from "module_2" /* 2 */;

let c2;

let obj = function _launchFrameOnNative() {
  obj = _asyncToGenerator(async (arg0) => {
    const surface = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let currentClientInVoiceChannel;
      let obj3;
      function closeVoicePanel() {
        if (currentClientInVoiceChannel.isCurrentClientInVoiceChannel()) {
          closure_1_1(closure_1_3[2])();
        }
      }
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              c2 = 0;
              value = undefined;
              c3 = 1;
              c4 = 1;
              const obj5 = { value: obj3.launchFrame(surface), done: false };
              obj3 = launchFrameAll;
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            if (surface.surface.type !== closure_130_0(closure_130_3[4]).EmbeddedSurfaceType.VOICE_CHANNEL) {
              closeVoicePanel();
            }
            c4 = 3;
            return { value, done: true };
          }
        } catch (tmp16) {
          c4 = 3;
          throw tmp16;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = {
  launchFrame: function launchFrameOnNative() {
    return obj(...arguments);
  }
};
const launchFrame = Object.assign(launchFrameAll);
const result = size.fileFinishedImporting("modules/frames/FramesActionCreators.native.tsx");

export default obj;
