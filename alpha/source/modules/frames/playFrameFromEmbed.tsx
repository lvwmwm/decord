// Module ID: 12719
// Function ID: 12720
// Name: playFrameFromEmbed
// Dependencies: [5, 10950, 10934, 1087, 10922, 10964, 7261, 1114, 2]
// Exports: default

// Module 12719 (playFrameFromEmbed)
import Constants from "Constants" /* 1087 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import FramesStore from "FramesStore" /* 10950 */;
import FramesConstants from "FramesConstants" /* 10934 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
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
      let frame;
      let obj10;
      let obj7;
      function shouldOpenAppChannel(c0) {
        const tmp = null != c0.conjureProjectId && null == frame.getFrame(closure_1_6(c0.id, closure_1_5));
        return tmp;
      }
      if (1 === tmp4) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          return { value, done: true };
        } else if (shouldOpenAppChannel(user)) {
          c3 = 2;
          c4 = 1;
          const obj8 = { value: obj7.fetchApplicationChannels(user.id), done: false };
          obj7 = closure_130_0(closure_130_2[4]);
          return obj8;
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
      if (null != first) {
        const obj9 = { applicationId: user.id, surface: obj10, analyticsContext, showErrorModal: false };
        obj10 = { type: closure_130_0(closure_130_2[6]).EmbeddedSurfaceType.APP_CHANNEL, channelId: first.channel_id, guildId: first.guild_id };
        const launchFrame = closure_130_1(closure_130_2[5]).launchFrame;
        closure_130_1(closure_130_2[5]);
        const launchFrameResult = launchFrame(obj9);
        launchFrameResult.catch(() => {

        });
        const obj6 = closure_130_0(closure_130_2[7]);
        obj6.transitionTo(closure_130_7.CHANNEL(first.guild_id, first.channel_id));
      } else {
        const obj11 = { applicationId: user.id, surface: closure_130_5, analyticsContext };
        const obj2 = closure_130_1(closure_130_2[5]);
        obj2.launchFrame(obj11);
      }
      await "IconComponent";
      ({ application: c0, analyticsContext: c1 } = closure_0);
      return "test";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
({ MAIN_SURFACE: hasOwnProperty, makeFrameId: metroRequire } = FramesConstants);
const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/frames/playFrameFromEmbed.tsx");

export default function playFrameFromEmbed() {
  return obj(...arguments);
};
