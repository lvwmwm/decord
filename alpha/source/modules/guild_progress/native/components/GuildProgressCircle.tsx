// Module ID: 14115
// Function ID: 14116
// Name: GuildProgressCircle
// Dependencies: [19, 17, 21, 5009, 575, 12535, 13997, 2]
// Exports: default

// Module 14115 (GuildProgressCircle)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ProgressCircleDefault from "ProgressCircle" /* 12535 */;
import GuildProgressUtils from "GuildProgressUtils" /* 13997 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { wrapper: { position: "relative" }, circle: { position: "absolute" }, progressCircle: obj2 };
obj2 = { color: nativeDefault.colors.BACKGROUND_BRAND };
let closure_6 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_progress/native/components/GuildProgressCircle.tsx");

export default function GuildProgressCircle(size) {
  let items;
  let items1;
  let items2;
  let items3;
  let percent;
  let style;
  let num = size.size;
  ({ percent, style } = size);
  if (num === undefined) {
    num = 32;
  }
  const tmp = closure_6();
  size = { width: num, height: num, borderRadius: num / 2 };
  const obj = { style: items, children: items2 };
  items = [tmp.wrapper, style, size];
  const obj2 = { style: items1, size: num, strokeWidth: 4, percent: 100, color: GuildProgressUtils.PROGRESS_BACKGROUND_COLOR };
  items1 = [tmp.circle, size];
  const tmp2 = ProgressCircleDefault;
  items2 = [React3(tmp2, obj2), ];
  const obj3 = { style: items3, size: num, strokeWidth: 4, color: tmp.progressCircle.color, percent };
  items3 = [tmp.circle, size];
  items2[1] = React3(ProgressCircleDefault, obj3);
  return hasOwnProperty(View, obj);
};
