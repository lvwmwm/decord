// Module ID: 17051
// Function ID: 17052
// Name: VibegrationsSubagentMark
// Dependencies: [32, 6738, 580, 6446, 6274, 6088, 6098, 6100, 6090, 6198, 6752, 6062, 6072, 17052, 2]
// Exports: familiarMark, subagentIllocons

// Module 17051 (VibegrationsSubagentMark)
import nativeDefault from "native" /* 580 */;
import VibegrationsSubagentMarks from "VibegrationsSubagentMarks" /* 17052 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function mark(key) {
  obj = { key };
  const merged = Object.assign(obj[key]);
  obj.name = VibegrationsSubagentMarks.subagentMarkName(key);
  return obj;
}
let obj = { snail: { Illocon: fn(6738).SnailIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_YELLOW_40 }, goat: null, frog: null, bunny: null, cat: null, caterpillar: null, butterfly: null, dog: null, spider: null, bee: null, bot: null };
let obj2 = { Illocon: fn(6738).SnailIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_YELLOW_40 };
obj.goat = { Illocon: fn(6446).GoatIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_ORANGE_40 };
const obj3 = { Illocon: fn(6446).GoatIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_ORANGE_40 };
obj.frog = { Illocon: fn(6274).FrogIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_GREEN_40 };
const obj4 = { Illocon: fn(6274).FrogIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_GREEN_40 };
obj.bunny = { Illocon: fn(6088).BunnyIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PINK_40 };
const obj5 = { Illocon: fn(6088).BunnyIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PINK_40 };
obj.cat = { Illocon: fn(6098).CatIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PINK_40 };
const obj6 = { Illocon: fn(6098).CatIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PINK_40 };
obj.caterpillar = { Illocon: fn(6100).CaterpillarIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_GREEN_40 };
const obj7 = { Illocon: fn(6100).CaterpillarIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_GREEN_40 };
obj.butterfly = { Illocon: fn(6090).ButterflyIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PURPLE_40 };
const obj8 = { Illocon: fn(6090).ButterflyIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PURPLE_40 };
obj.dog = { Illocon: fn(6198).DogIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_YELLOW_40 };
const obj9 = { Illocon: fn(6198).DogIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_YELLOW_40 };
obj.spider = { Illocon: fn(6752).SpiderIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_ORANGE_40 };
const obj10 = { Illocon: fn(6752).SpiderIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_ORANGE_40 };
obj.bee = { Illocon: fn(6062).BeeIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_YELLOW_40 };
const obj11 = { Illocon: fn(6062).BeeIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_YELLOW_40 };
obj.bot = { Illocon: fn(6072).BotIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PURPLE_40 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSubagentMark.tsx");

export const familiarMark = function familiarMark(helperMark) {
  obj = VibegrationsSubagentMarks;
  let tmp3;
  if (obj.isVibegrationsSubagentMarkKey(helperMark)) {
    const obj2 = { key: helperMark };
    const merged = Object.assign(obj[helperMark]);
    obj2.name = VibegrationsSubagentMarks.subagentMarkName(helperMark);
    tmp3 = obj2;
    const tmpResult = VibegrationsSubagentMarks;
  }
  return tmp3;
};
export const subagentIllocons = function subagentIllocons(arr) {
  const map = new Map();
  const result = VibegrationsSubagentMarks.assignSubagentMarkKeys(arr);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let result1 = map.set(tmp5[0], mark(tmp5[1]));
    continue;
  }
  return map;
};
