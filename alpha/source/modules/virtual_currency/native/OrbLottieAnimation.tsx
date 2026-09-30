// Module ID: 10759
// Function ID: 10760
// Name: OrbLottieAnimation
// Dependencies: [19, 21, 4797, 4715, 10760, 10762, 2]

// Module 10759 (OrbLottieAnimation)
import shared from "shared" /* 4715 */;
import useTheme from "useTheme" /* 4797 */;
import "module_19";

require = fn;
const noop = fn(19);
({ useRef: c3, useEffect: closure_4, forwardRef } = noop);
const jsx = fn(21).jsx;
const forwardRefResult = forwardRef((animationType, ref) => {
  animationType = animationType.animationType;
  const theme = useTheme.useTheme();
  const tmp5 = React3(null);
  const items = [animationType];
  React4(() => {
    if (null !== animationType) {
      const current = ref.current;
      if (current != null) {
        current.play();
      }
    }
  }, items);
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({
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
    let SpendEarnOrbsLottie = tmp(10760).SpendEarnOrbsLightThemeLottie;
  } else {
    SpendEarnOrbsLottie = tmp(10762).SpendEarnOrbsLottie;
  }
  const size = { ref: tmp5, size: "custom", width: 60, height: 60, opacity: 0.8, animation: null, useLottieDefaultColors: true };
  let str = "spend";
  if (null != animationType) {
    str = animationType;
  }
  size.animation = str;
  return <SpendEarnOrbsLottie ref={tmp5} size="custom" width={60} height={60} opacity={0.8} animation={null} useLottieDefaultColors />;
});
forwardRefResult.displayName = "OrbsLottieAnimation";
let size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbLottieAnimation.tsx");

export default forwardRefResult;
export const OrbLottieAnimation = forwardRefResult;
