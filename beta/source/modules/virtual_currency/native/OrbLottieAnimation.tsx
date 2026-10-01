// Module ID: 10556
// Function ID: 10557
// Name: OrbLottieAnimation
// Dependencies: [19, 21, 4767, 4685, 10557, 10559, 2]

// Module 10556 (OrbLottieAnimation)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 4685 */;
import useTheme from "useTheme" /* 4767 */;
import "react";
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

let animationType;

let c3;
let closure_4;
let forwardRef;
({ useRef: c3, useEffect: closure_4, forwardRef } = react);
const jsx = Fragment.jsx;
const forwardRefResult = forwardRef((animationType, ref) => {
  let SpendEarnOrbsLottie;
  let str;
  animationType = animationType.animationType;
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
    SpendEarnOrbsLottie = tmp(10557).SpendEarnOrbsLightThemeLottie;
  } else {
    SpendEarnOrbsLottie = tmp(10559).SpendEarnOrbsLottie;
  }
  size = { ref: tmp5, size: "custom", width: 60, height: 60, opacity: 0.8, animation: str, useLottieDefaultColors: true };
  str = "spend";
  const tmp8 = jsx;
  if (null != animationType) {
    str = animationType;
  }
  return tmp8(SpendEarnOrbsLottie, size);
});
forwardRefResult.displayName = "OrbsLottieAnimation";
let size = size_mod;
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbLottieAnimation.tsx");

export default forwardRefResult;
export const OrbLottieAnimation = forwardRefResult;
