// Module ID: 12840
// Function ID: 12841
// Name: playFrameFromEmbed
// Dependencies: [5, 11237, 11011, 2]
// Exports: default

// Module 12840 (playFrameFromEmbed)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _playFrameFromEmbed() {
  obj = _asyncToGenerator(async (arg0) => {
    let analyticsContext;
    let closure_2;
    const user = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let first;
      let obj5;
      let tmp18;
      if (1 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          return { value, done: true };
        } else if (null != user.conjureProjectId) {
          const obj2 = closure_130_0(closure_130_2[1]);
          if (obj2.shouldOpenAppChannel(user.id)) {
            c3 = 2;
            c4 = 1;
            const obj7 = { value: obj5.fetchApplicationChannels(user.id), done: false };
            obj5 = closure_130_0(closure_130_2[2]);
            return obj7;
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
      const obj8 = { applicationId: user.id, channel: tmp18, analyticsContext };
      tmp18 = null;
      const tmp15 = closure_130_1(closure_130_2[1]);
      if (null != first) {
        tmp18 = { guildId: first.guild_id, channelId: first.channel_id };
      }
      tmp15(obj8);
      await "IconComponent";
      ({ application: c0, analyticsContext: c1 } = closure_0);
      return "test";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/frames/playFrameFromEmbed.tsx");

export default function playFrameFromEmbed() {
  return obj(...arguments);
};
