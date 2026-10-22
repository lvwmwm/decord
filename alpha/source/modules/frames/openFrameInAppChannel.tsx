// Module ID: 11352
// Function ID: 11353
// Name: openFrameInAppChannel
// Dependencies: [5, 11353, 10697, 2]
// Exports: default

// Module 11352 (openFrameInAppChannel)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _openFrameInAppChannel() {
  obj = _asyncToGenerator(async (applicationId) => {
    let analyticsContext;
    let closure_2;
    let c3 = 0;
    let c4 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let first;
      let obj4;
      let tmp13;
      if (1 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          return { value, done: true };
        } else {
          const obj9 = closure_130_0(closure_130_2[1]);
          if (obj9.shouldOpenAppChannel(applicationId)) {
            c3 = 2;
            c4 = 1;
            const obj6 = { value: obj4.fetchApplicationChannels(applicationId), done: false };
            obj4 = closure_130_0(closure_130_2[2]);
            return obj6;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        return { value, done: true };
      } else {
        first = value[0];
      }
      const obj7 = { applicationId, channel: tmp13, analyticsContext };
      tmp13 = null;
      const tmp10 = closure_130_1(closure_130_2[1]);
      if (null != first) {
        tmp13 = { guildId: first.guild_id, channelId: first.channel_id };
      }
      tmp10(obj7);
      await "IconComponent";
      ({ applicationId: c0, analyticsContext: c1 } = closure_0);
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
