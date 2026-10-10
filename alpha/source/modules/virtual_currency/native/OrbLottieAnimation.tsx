// Module ID: 12779
// Function ID: 12780
// Name: OrbLottieAnimation
// Dependencies: [19, 21, 558, 576, 5031, 4969, 12780, 12782, 2]

// Module 12779 (OrbLottieAnimation)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import shared from "shared" /* 4969 */;
import useTheme from "useTheme" /* 5031 */;
import "react";
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
({ useRef: c3, useEffect: closure_4 } = react);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbLottieAnimation(animationType) {
  let SpendEarnOrbsLottie;
  let tmp10;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(7);
  animationType = animationType.animationType;
  const ref = animationType.ref;
  const obj2 = useTheme;
  const theme = obj2.useTheme();
  const obj3 = shared;
  const isThemeLightResult = obj3.isThemeLight(theme);
  const tmp6 = _false(null);
  let closure_1 = tmp6;
  if (cResult[0] !== animationType) {
    const fn = function s() {
      if (null !== animationType) {
        const current = ref.current;
        if (current != null) {
          current.play();
        }
      }
    };
    const items = [animationType];
    cResult[0] = animationType;
    cResult[1] = fn;
    cResult[2] = items;
    tmp8 = items;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  React3(tmp7, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function p() {
      return {
        play() {
          const current = ref.current;
          let playResult;
          if (current != null) {
            playResult = current.play();
          }
          return playResult;
        }
      };
    };
    cResult[3] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[3];
  }
  const imperativeHandle = react.useImperativeHandle(ref, tmp10);
  if (isThemeLightResult) {
    SpendEarnOrbsLottie = tmp(12780).SpendEarnOrbsLightThemeLottie;
  } else {
    SpendEarnOrbsLottie = tmp(12782).SpendEarnOrbsLottie;
  }
  let str = "spend";
  if (null != animationType) {
    str = animationType;
  }
  if (cResult[4] === SpendEarnOrbsLottie) {
    let tmp12;
    if (cResult[5] === str) {
      tmp12 = cResult[6];
    }
    return tmp12;
  }
  const tmp13 = <SpendEarnOrbsLottie ref={tmp6} size="custom" width={60} height={60} opacity={0.8} animation={str} useLottieDefaultColors />;
  cResult[4] = SpendEarnOrbsLottie;
  cResult[5] = str;
  cResult[6] = tmp13;
  tmp12 = tmp13;
}) : (function OrbLottieAnimation(animationType) {
  let SpendEarnOrbsLottie;
  let str;
  animationType = animationType.animationType;
  const ref = animationType.ref;
  const obj = useTheme;
  const theme = obj.useTheme();
  const obj2 = shared;
  const isThemeLightResult = obj2.isThemeLight(theme);
  const tmp5 = _false(null);
  let closure_1 = tmp5;
  const items = [animationType];
  React3(() => {
    if (null !== animationType) {
      const current = ref.current;
      if (current != null) {
        current.play();
      }
    }
  }, items);
  const imperativeHandle = react.useImperativeHandle(ref, () => ({
    play() {
      const current = ref.current;
      let playResult;
      if (current != null) {
        playResult = current.play();
      }
      return playResult;
    }
  }));
  if (isThemeLightResult) {
    SpendEarnOrbsLottie = tmp(12780).SpendEarnOrbsLightThemeLottie;
  } else {
    SpendEarnOrbsLottie = tmp(12782).SpendEarnOrbsLottie;
  }
  size = { ref: tmp5, size: "custom", width: 60, height: 60, opacity: 0.8, animation: str, useLottieDefaultColors: true };
  str = "spend";
  const tmp8 = jsx;
  if (null != animationType) {
    str = animationType;
  }
  return tmp8(SpendEarnOrbsLottie, size);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbLottieAnimation.tsx");

export default tmp3;
export const OrbLottieAnimation = tmp3;
