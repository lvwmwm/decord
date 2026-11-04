// Module ID: 16458
// Function ID: 16459
// Name: OrbsArcadeRewardRing
// Dependencies: [19, 17, 21, 5084, 7994, 558, 576, 2]

// Module 16458 (OrbsArcadeRewardRing)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 5084 */;
import inlineStyles from "inlineStyles" /* 7994 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;

const StyleSheet = react_native.StyleSheet;
let jsx = Fragment.jsx;
let closure_4 = ReanimatedRexport.createAnimatedComponent(inlineStyles.Path);
const __initData = { code: "function OrbsArcadeRewardRingTsx1(){const{arcLength,progress}=this.__closure;return{strokeDashoffset:arcLength*(1-progress.get()),strokeOpacity:progress.get()>0?1:0};}" };
const __initData2 = { code: "function OrbsArcadeRewardRingTsx2(){const{arcLength,progress}=this.__closure;return{strokeDashoffset:arcLength*(1-progress.get()),strokeOpacity:progress.get()>0?1:0};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function RingArc(arg0) {
  let arcLength;
  let color;
  let d;
  let progress;
  let strokeWidth;
  let obj = react2;
  const cResult = obj.c(6);
  ({ d, color, progress } = arg0);
  ({ strokeWidth, arcLength } = arg0);
  const fn = function c() {
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
  const obj2 = ReanimatedRexport2;
  const animatedProps = obj2.useAnimatedProps(fn);
  if (cResult[0] === animatedProps) {
    if (cResult[1] === arcLength) {
      if (cResult[2] === color) {
        if (cResult[3] === d) {
          let tmp3;
          if (cResult[4] === strokeWidth) {
            tmp3 = cResult[5];
          }
          return tmp3;
        }
      }
    }
  }
  const tmp4 = <closure_4 d={d} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeDasharray={arcLength} animatedProps={animatedProps} />;
  cResult[0] = animatedProps;
  cResult[1] = arcLength;
  cResult[2] = color;
  cResult[3] = d;
  cResult[4] = strokeWidth;
  cResult[5] = tmp4;
  tmp3 = tmp4;
}) : (function RingArc(progress) {
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
  fn.__workletHash = 10186079557143;
  fn.__initData = __initData2;
  return <closure_4 d={d} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeDasharray={arcLength} animatedProps={obj.useAnimatedProps(fn)} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeRewardRing(color) {
  let rewardSize;
  let strokeWidth;
  let tmp = strokeWidth;
  let tmp2 = color;
  let obj = strokeWidth(color[6]);
  const cResult = obj.c(10);
  ({ rewardSize, strokeWidth } = color);
  color = color.color;
  const progress = color.progress;
  const diff = rewardSize / 2 - strokeWidth / 2;
  jsx = diff;
  const result = diff * Math.PI;
  const result1 = rewardSize / 2;
  if (cResult[0] === result) {
    if (cResult[1] === result1) {
      if (cResult[2] === color) {
        if (cResult[3] === progress) {
          if (cResult[4] === diff) {
            let tmp7;
            if (cResult[5] === strokeWidth) {
              tmp7 = cResult[6];
            }
            if (cResult[7] === rewardSize) {
              let tmp9;
              if (cResult[8] === tmp7) {
                tmp9 = cResult[9];
              }
              return tmp9;
            }
            const tmp12 = jsx(tmp(tmp2[4]).Svg, { width: rewardSize, height: rewardSize, style: progress.absoluteFill, children: tmp7 });
            let num = 7;
            cResult[7] = rewardSize;
            cResult[8] = tmp7;
            cResult[9] = tmp12;
            tmp9 = tmp12;
          }
        }
      }
    }
  }
  const items = [true, false];
  const mapped = items.map((item) => {
    let num = 0;
    const tmp = jsx;
    const tmp2 = closure_7;
    if (item) {
      num = 1;
    }
    let str = "right";
    const obj = { d: "M " + result1 + " " + result1 + jsx + " A " + jsx + " " + jsx + " 0 0 " + num + " " + result1 + " " + result1 - jsx, color, progress, strokeWidth, arcLength: result };
    if (item) {
      str = "left";
    }
    return tmp(tmp2, obj, str);
  });
  cResult[0] = result;
  cResult[1] = result1;
  cResult[2] = color;
  cResult[3] = progress;
  cResult[4] = diff;
  cResult[5] = strokeWidth;
  cResult[6] = mapped;
  tmp7 = mapped;
}) : (function OrbsArcadeRewardRing(rewardSize) {
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
    const tmp2 = closure_7;
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
});
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardRing.tsx");

export default tmp3;
