// Module ID: 12404
// Function ID: 12405
// Name: onTapCheckpointCard
// Dependencies: [5, 4766, 6643, 12405, 12412, 2]
// Exports: onTapCheckpointCard

// Module 12404 (onTapCheckpointCard)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 4766 */;
import size from "module_2" /* 2 */;

let obj = function _onTapCheckpointCard() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_1;
    let closure_2;
    const channel_id = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let obj3;
      if (1 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          return { value, done: true };
        } else {
          const obj8 = closure_130_0(closure_130_1[2]);
          if (obj8.getIsCheckpointEnabled("onTapCheckpointCard")) {
            const obj2 = closure_130_0(closure_130_1[3]);
            const result = obj2.trackCheckpoint2026CardClicked(c1, closure_130_3.getChannel(channel_id.channel_id));
            c3 = 2;
            c4 = 1;
            const obj7 = { value: obj3.openCheckpoint("message_component"), done: false };
            obj3 = closure_130_0(closure_130_1[4]);
            return obj7;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        return { value, done: true };
      }
      await "HermesInternal";
      ({ message: c0, authorId: c1 } = closure_0);
      return "Path";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
let result = size.fileFinishedImporting("modules/checkpoint/onTapCheckpointCard.tsx");

export function onTapCheckpointCard() {
  return obj(...arguments);
}
