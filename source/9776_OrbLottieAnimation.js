// Module ID: 9776
// Function ID: 76005
// Name: OrbLottieAnimation
// Dependencies: [270270464, 297205760, 270401536, 31260672, 131072, 527958016, 452984832]

// Module 9776 (OrbLottieAnimation)
let closure_2 = importAll(dependencyMap[0]);
const obj = arg1(dependencyMap[0]);
({ useRef: closure_3, useEffect: closure_4 } = obj);
const jsx = arg1(dependencyMap[1]).jsx;
const forwardRefResult = obj.forwardRef((animationType) => {
  animationType = animationType.animationType;
  const arg1 = animationType;
  let obj = arg1(dependencyMap[2]);
  const theme = obj.useTheme();
  const obj2 = arg1(dependencyMap[3]);
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
      const current = ref.current;
      let playResult;
      if (null != current) {
        playResult = current.play();
      }
      return playResult;
    }
  }));
  if (isThemeLightResult) {
    let SpendEarnOrbsLottie = tmp6(tmp7[4]).SpendEarnOrbsLightThemeLottie;
  } else {
    SpendEarnOrbsLottie = tmp6(tmp7[5]).SpendEarnOrbsLottie;
  }
  obj = { ref: tmp3 };
  let str = "spend";
  if (null != animationType) {
    str = animationType;
  }
  obj.animation = str;
  return <SpendEarnOrbsLottie {...obj} />;
});
forwardRefResult.displayName = "OrbsLottieAnimation";
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/virtual_currency/native/OrbLottieAnimation.tsx");

export default forwardRefResult;
export const OrbLottieAnimation = forwardRefResult;
