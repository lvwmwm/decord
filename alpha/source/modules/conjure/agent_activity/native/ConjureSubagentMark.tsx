// Module ID: 12250
// Function ID: 12251
// Name: ConjureSubagentMark
// Dependencies: [32, 12251, 587, 12255, 12259, 12263, 12267, 12271, 12275, 12279, 12283, 12287, 12291, 12295, 2]
// Exports: familiarMark, subagentIllocons

// Module 12250 (ConjureSubagentMark)
import nativeDefault from "native" /* 587 */;
import SnailIllocon from "SnailIllocon" /* 12251 */;
import GoatIllocon from "GoatIllocon" /* 12255 */;
import FrogIllocon from "FrogIllocon" /* 12259 */;
import BunnyIllocon from "BunnyIllocon" /* 12263 */;
import CatIllocon from "CatIllocon" /* 12267 */;
import CaterpillarIllocon from "CaterpillarIllocon" /* 12271 */;
import ButterflyIllocon from "ButterflyIllocon" /* 12275 */;
import DogIllocon from "DogIllocon" /* 12279 */;
import SpiderIllocon from "SpiderIllocon" /* 12283 */;
import BeeIllocon from "BeeIllocon" /* 12287 */;
import BotIllocon from "BotIllocon" /* 12291 */;
import ConjureSubagentMarks from "ConjureSubagentMarks" /* 12295 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let map;

let obj2;
function mark(key) {
  let obj2;
  obj = { key, name: obj2.subagentMarkName(key) };
  const merged = Object.assign(obj[key]);
  obj2 = ConjureSubagentMarks;
  return obj;
}
let obj = { snail: obj2, goat: { Illocon: GoatIllocon.GoatIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_ORANGE_40 }, frog: { Illocon: FrogIllocon.FrogIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_GREEN_40 }, bunny: { Illocon: BunnyIllocon.BunnyIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PINK_40 }, cat: { Illocon: CatIllocon.CatIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PINK_40 }, caterpillar: { Illocon: CaterpillarIllocon.CaterpillarIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_GREEN_40 }, butterfly: { Illocon: ButterflyIllocon.ButterflyIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PURPLE_40 }, dog: { Illocon: DogIllocon.DogIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_YELLOW_40 }, spider: { Illocon: SpiderIllocon.SpiderIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_ORANGE_40 }, bee: { Illocon: BeeIllocon.BeeIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_YELLOW_40 }, bot: { Illocon: BotIllocon.BotIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PURPLE_40 } };
obj2 = { Illocon: SnailIllocon.SnailIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_YELLOW_40 };
({ Illocon: GoatIllocon.GoatIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_ORANGE_40 });
({ Illocon: FrogIllocon.FrogIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_GREEN_40 });
({ Illocon: BunnyIllocon.BunnyIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PINK_40 });
({ Illocon: CatIllocon.CatIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PINK_40 });
({ Illocon: CaterpillarIllocon.CaterpillarIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_GREEN_40 });
({ Illocon: ButterflyIllocon.ButterflyIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PURPLE_40 });
({ Illocon: DogIllocon.DogIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_YELLOW_40 });
({ Illocon: SpiderIllocon.SpiderIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_ORANGE_40 });
({ Illocon: BeeIllocon.BeeIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_YELLOW_40 });
({ Illocon: BotIllocon.BotIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PURPLE_40 });
let result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureSubagentMark.tsx");

export const familiarMark = function familiarMark(helperMark) {
  let tmpResult;
  obj = ConjureSubagentMarks;
  let tmp3;
  if (obj.isConjureSubagentMarkKey(helperMark)) {
    const obj2 = { key: helperMark, name: tmpResult.subagentMarkName(helperMark) };
    const merged = Object.assign(obj[helperMark]);
    tmp3 = obj2;
    tmpResult = ConjureSubagentMarks;
  }
  return tmp3;
};
export const subagentIllocons = function subagentIllocons(arr) {
  map = new Map();
  const obj2 = ConjureSubagentMarks;
  const result = obj2.assignSubagentMarkKeys(arr);
  const tmp2 = result[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let result1 = map.set(tmp5[0], mark(tmp5[1]));
    continue;
  }
  return map;
};
