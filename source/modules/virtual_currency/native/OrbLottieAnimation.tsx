// Module ID: 9789
// Function ID: 76086
// Name: OrbLottieAnimation
// Dependencies: [31, 33, 4066, 3976, 9790, 9793, 2]

// Module 9789 (OrbLottieAnimation)
import closure_2 from "result";
import result from "result";
import { jsx } from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ useRef: closure_3, useEffect: closure_4 } = result);
const forwardRefResult = result.forwardRef((animationType) => {
  animationType = animationType.animationType;
  let obj = animationType(4066);
  const theme = obj.useTheme();
  const obj2 = animationType(3976);
  const tmp3 = callback(null);
  const dependencyMap = tmp3;
  const items = [animationType];
  callback2(() => {
    if (null !== animationType) {
      const current = tmp3.current;
      if (null != current) {
        current.play();
      }
    }
  }, items);
  const imperativeHandle = React.useImperativeHandle(arg1, () => ({
    play() {
      const current = outer1_1.current;
      let playResult;
      if (null != current) {
        playResult = current.play();
      }
      return playResult;
    }
  }));
  if (isThemeLightResult) {
    let SpendEarnOrbsLottie = tmp6(9790).SpendEarnOrbsLightThemeLottie;
  } else {
    SpendEarnOrbsLottie = tmp6(9793).SpendEarnOrbsLottie;
  }
  obj = { ref: tmp3, size: "custom", width: 60, height: 60, opacity: 0.8, animation: null, useLottieDefaultColors: true };
  let str = "spend";
  if (null != animationType) {
    str = animationType;
  }
  obj.animation = str;
  return <SpendEarnOrbsLottie ref={tmp3} size="custom" width={60} height={60} opacity={0.8} animation={null} useLottieDefaultColors />;
});
forwardRefResult.displayName = "OrbsLottieAnimation";
result = require("useTheme").fileFinishedImporting("modules/virtual_currency/native/OrbLottieAnimation.tsx");

export default forwardRefResult;
export const OrbLottieAnimation = forwardRefResult;
