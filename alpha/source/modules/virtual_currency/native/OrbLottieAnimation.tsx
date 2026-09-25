// Module ID: 10545
// Function ID: 10546
// Name: OrbLottieAnimation
// Dependencies: [19, 21, 4763, 4682, 10546, 10548, 2]

// Module 10545 (OrbLottieAnimation)
import shared from "shared" /* 4682 */;
import useTheme from "useTheme" /* 4763 */;
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
    let SpendEarnOrbsLottie = tmp(10546).SpendEarnOrbsLightThemeLottie;
  } else {
    SpendEarnOrbsLottie = tmp(10548).SpendEarnOrbsLottie;
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
