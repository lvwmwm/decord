// Module ID: 8625
// Function ID: 68346
// Name: GameProfileRankPill
// Dependencies: []
// Exports: default

// Module 8625 (GameProfileRankPill)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: {} };
obj = { flexDirection: "row", backgroundColor: importDefault(dependencyMap[4]).colors.WHITE, borderRadius: importDefault(dependencyMap[4]).radii.round, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_8, alignItems: "center", gap: importDefault(dependencyMap[4]).space.PX_4 };
const merged = Object.assign(importDefault(dependencyMap[4]).shadows.SHADOW_LOW);
obj.gameRankPill = obj;
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/game_profile/native/components/GameProfileRankPill.tsx");

export default function GameProfileRankPill(arg0) {
  let compact;
  let rank;
  ({ rank, compact } = arg0);
  if (compact === undefined) {
    compact = false;
  }
  const tmp = callback2();
  let obj = { style: tmp.container };
  obj = { style: tmp.gameRankPill };
  obj = { size: "xxs", color: importDefault(dependencyMap[4]).colors.BLACK };
  const items = [callback(arg1(dependencyMap[5]).TrophyIcon, obj), ];
  const obj1 = { cachedAt: -8364227942806830000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, edpbxy: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011321089135097987 };
  const intl = arg1(dependencyMap[7]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = arg1(dependencyMap[7]).t;
  if (compact) {
    const obj2 = { rank };
    let str = formatToPlainString(t.UA6RoE, obj2);
  } else {
    const obj3 = { rank };
    str = formatToPlainString(t.ehZXlZ, obj3);
  }
  obj1.children = str.toUpperCase();
  items[1] = callback(arg1(dependencyMap[6]).Text, obj1);
  obj.children = items;
  obj.children = closure_5(View, obj);
  return callback(View, obj);
};
