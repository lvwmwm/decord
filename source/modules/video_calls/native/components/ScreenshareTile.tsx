// Module ID: 10551
// Function ID: 82447
// Name: ScreenShareTile
// Dependencies: [79429632, 692125696, 579993600, 37093376, 298516480, 282132480, 274595840, 270270464, 297533440, 131072, 527958016, 452984832, 553648128]
// Exports: default

// Module 10551 (ScreenShareTile)
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
const NOOP = arg1(dependencyMap[2]).NOOP;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BLACK };
obj.container = obj;
obj.image = {};
obj.label = {};
obj.liveContainer = {};
let closure_8 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/video_calls/native/components/ScreenshareTile.tsx");

export default function ScreenShareTile(onSingleTap) {
  onSingleTap = onSingleTap.onSingleTap;
  if (onSingleTap === undefined) {
    onSingleTap = NOOP;
  }
  let onDoubleTap = onSingleTap.onDoubleTap;
  if (onDoubleTap === undefined) {
    onDoubleTap = NOOP;
  }
  const tmp = callback3();
  let obj = { onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap };
  obj = { gesture: importDefault(dependencyMap[6])(obj) };
  obj = { style: tmp.container };
  const obj1 = { style: tmp.liveContainer, children: callback(arg1(dependencyMap[8]).LiveTag, {}) };
  const items = [callback(closure_3, obj1), , ];
  const tmp2 = importDefault(dependencyMap[6])(obj);
  items[1] = callback(closure_4, { source: importDefault(dependencyMap[9]), style: tmp.image, resizeMode: "contain" });
  const obj3 = { style: tmp.label };
  const intl = arg1(dependencyMap[11]).intl;
  obj3.children = intl.string(arg1(dependencyMap[11]).t.G84gtR);
  items[2] = callback(arg1(dependencyMap[10]).Text, obj3);
  obj.children = items;
  obj.children = callback2(closure_3, obj);
  return callback(arg1(dependencyMap[7]).GestureDetector, obj);
};
