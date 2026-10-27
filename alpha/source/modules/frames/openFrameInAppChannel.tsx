// Module ID: 11398
// Function ID: 11399
// Name: openFrameInAppChannel
// Dependencies: [5, 11399, 11400, 2]
// Exports: default

// Module 11398 (openFrameInAppChannel)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let channel, launch;

let obj = function _openFrameInAppChannel() {
  obj = _asyncToGenerator(async (applicationId) => {
    let analyticsContext;
    let preferredChannelId;
    let c3 = 0;
    let c4 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let c3;
      let tmp5;
      if (1 === launch) {
        if (arg0 === 1) {
          let c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          return { value, done: true };
        } else {
          tmp5 = null;
          const obj8 = closure_130_0(closure_130_2[1]);
          if (obj8.shouldOpenAppChannel(applicationId)) {
            launch = 2;
            c4 = 1;
            const obj5 = { preferredChannelId };
            const obj6 = { value: closure_130_1(closure_130_2[2])(applicationId, obj5), done: false };
            return obj6;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else {
        tmp5 = value;
        if (arg0 === 2) {
          c4 = 3;
          return { value, done: true };
        }
      }
      channel = tmp5;
      const obj7 = { applicationId, channel, analyticsContext, launch };
      closure_130_1(closure_130_2[1])(obj7);
      await "IconComponent";
      ({ applicationId: c0, channelId: c1, analyticsContext: c2, launch: c3 } = closure_0);
      return "Reflect";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/frames/openFrameInAppChannel.tsx");

export default function openFrameInAppChannel() {
  return obj(...arguments);
};
