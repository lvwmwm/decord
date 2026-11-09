// Module ID: 14740
// Function ID: 14741
// Name: OrbLottieAnimation
// Dependencies: [19, 21, 5369, 5147, 14741, 14743, 2]

// Module 14740 (OrbLottieAnimation)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 5147 */;
import useTheme from "useTheme" /* 5369 */;
import "react";
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
class OrbLottieAnimation {
  constructor(animationType) {
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
      SpendEarnOrbsLottie = tmp(14741).SpendEarnOrbsLightThemeLottie;
    } else {
      SpendEarnOrbsLottie = tmp(14743).SpendEarnOrbsLottie;
    }
    size = { ref: tmp5, size: "custom", width: 60, height: 60, opacity: 0.8, animation: str, useLottieDefaultColors: true };
    str = "spend";
    const tmp8 = jsx;
    if (null != animationType) {
      str = animationType;
    }
    return tmp8(SpendEarnOrbsLottie, size);
  }
}
({ useRef: c3, useEffect: closure_4 } = react);
const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbLottieAnimation.tsx");

export default OrbLottieAnimation;
export { OrbLottieAnimation };
