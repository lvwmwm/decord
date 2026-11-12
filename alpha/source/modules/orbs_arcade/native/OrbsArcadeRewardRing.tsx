// Module ID: 17544
// Function ID: 17545
// Name: OrbsArcadeRewardRing
// Dependencies: [19, 17, 21, 1652, 8197, 2]
// Exports: default

// Module 17544 (OrbsArcadeRewardRing)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1652 from "module_1652" /* 1652 */;
import inlineStyles from "inlineStyles" /* 8197 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const module_1652 = _mod1652;

function RingArc(arcLength) {
  let color;
  let d;
  let progress;
  let strokeWidth;
  let tmp;
  let tmp2;
  let tmp3;
  arcLength = arcLength.arcLength;
  ({ d, color, progress, strokeWidth } = arcLength);
  let obj = _mod1652;
  const items = [closure_5, arcLength, progress];
  let c0;
  let c1;
  [tmp, tmp2, tmp3] = items;
  class OrbsArcadeRewardRingTsx1 {
    constructor() {
      obj = { strokeDashoffset: closure_0 * (1 - closure_1.get()), strokeOpacity: null };
      num = 0;
      if (closure_1.get() > 0) {
        num = 1;
      }
      obj.strokeOpacity = num;
      return obj;
    }
  }
  const items1 = [tmp2, tmp3];
  OrbsArcadeRewardRingTsx1.__closure = items1;
  OrbsArcadeRewardRingTsx1.__workletHash = 15686336593485;
  OrbsArcadeRewardRingTsx1.__initData = tmp;
  return <closure_4 d={d} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeDasharray={arcLength} animatedProps={obj.useAnimatedProps(OrbsArcadeRewardRingTsx1)} />;
}
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let closure_4 = module_1652.createAnimatedComponent(inlineStyles.Path);
let closure_5 = { code: "(function OrbsArcadeRewardRingTsx1(){let[arcLength,progress]=this.__closure;return{strokeDashoffset:arcLength*(1-progress.get()),strokeOpacity:progress.get()>0?1:0};})" };
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardRing.tsx");

export default function OrbsArcadeRewardRing(rewardSize) {
  let color;
  let progress;
  rewardSize = rewardSize.rewardSize;
  const strokeWidth = rewardSize.strokeWidth;
  ({ color: StyleSheet, progress: jsx } = rewardSize);
  const diff = rewardSize / 2 - strokeWidth / 2;
  let c4 = diff;
  const arcLength = diff * Math.PI;
  const items = [true, false];
  const Svg = rewardSize(strokeWidth[4]).Svg;
  return <Svg width={rewardSize} height={rewardSize} style={StyleSheet.absoluteFill}>{items.map((item) => {
    const result = rewardSize / 2;
    let num = 0;
    const tmp = jsx;
    const tmp2 = RingArc;
    if (item) {
      num = 1;
    }
    let str = "right";
    const obj = { d: "M " + result + " " + result + c4 + " A " + c4 + " " + c4 + " 0 0 " + num + " " + result + " " + result - c4, color: StyleSheet, progress: jsx, strokeWidth, arcLength };
    if (item) {
      str = "left";
    }
    return tmp(tmp2, obj, str);
  })}</Svg>;
};
