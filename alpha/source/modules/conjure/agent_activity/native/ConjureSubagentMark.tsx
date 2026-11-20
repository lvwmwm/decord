// Module ID: 18377
// Function ID: 18378
// Name: ConjureSubagentMark
// Dependencies: [32, 18378, 575, 18382, 18386, 18390, 18394, 18398, 18402, 18406, 18410, 18414, 18418, 18422, 2]
// Exports: familiarMark, subagentIllocons

// Module 18377 (ConjureSubagentMark)
import nativeDefault from "native" /* 575 */;
import SnailIllocon from "SnailIllocon" /* 18378 */;
import GoatIllocon from "GoatIllocon" /* 18382 */;
import FrogIllocon from "FrogIllocon" /* 18386 */;
import BunnyIllocon from "BunnyIllocon" /* 18390 */;
import CatIllocon from "CatIllocon" /* 18394 */;
import CaterpillarIllocon from "CaterpillarIllocon" /* 18398 */;
import ButterflyIllocon from "ButterflyIllocon" /* 18402 */;
import DogIllocon from "DogIllocon" /* 18406 */;
import SpiderIllocon from "SpiderIllocon" /* 18410 */;
import BeeIllocon from "BeeIllocon" /* 18414 */;
import BotIllocon from "BotIllocon" /* 18418 */;
import ConjureSubagentMarks from "ConjureSubagentMarks" /* 18422 */;
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

export function familiarMark(helperMark) {
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
}
export function subagentIllocons(arr) {
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
}
