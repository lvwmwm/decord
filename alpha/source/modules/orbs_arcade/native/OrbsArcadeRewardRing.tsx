// Module ID: 16984
// Function ID: 16985
// Name: OrbsArcadeRewardRing
// Dependencies: [19, 17, 21, 5090, 8023, 2]
// Exports: default

// Module 16984 (OrbsArcadeRewardRing)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 5090 */;
import inlineStyles from "inlineStyles" /* 8023 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;

function RingArc(progress) {
  let color;
  let d;
  let strokeWidth;
  progress = progress.progress;
  const arcLength = progress.arcLength;
  ({ d, color, strokeWidth } = progress);
  let obj = ReanimatedRexport2;
  const fn = function u() {
    let num;
    const obj = { strokeDashoffset: arcLength * (1 - progress.get()), strokeOpacity: num };
    num = 0;
    if (progress.get() > 0) {
      num = 1;
    }
    return obj;
  };
  fn.__closure = { arcLength, progress };
  fn.__workletHash = 690721995284;
  fn.__initData = __initData;
  return <closure_4 d={d} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeDasharray={arcLength} animatedProps={obj.useAnimatedProps(fn)} />;
}
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let closure_4 = ReanimatedRexport.createAnimatedComponent(inlineStyles.Path);
const __initData = { code: "function OrbsArcadeRewardRingTsx1(){const{arcLength,progress}=this.__closure;return{strokeDashoffset:arcLength*(1-progress.get()),strokeOpacity:progress.get()>0?1:0};}" };
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
