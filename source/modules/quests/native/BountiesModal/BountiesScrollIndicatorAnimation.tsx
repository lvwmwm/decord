// Module ID: 13822
// Function ID: 104538
// Name: BountiesScrollIndicatorAnimation
// Dependencies: []
// Exports: default

// Module 13822 (BountiesScrollIndicatorAnimation)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = arg1(dependencyMap[4]).createStyles(() => ({ container: {} }));
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollIndicatorAnimation.tsx");

export default function BountiesScrollIndicatorAnimation(startAnimation) {
  let tmp4;
  let tmp5;
  const visible = startAnimation.visible;
  let obj = arg1(dependencyMap[5]);
  const token = obj.useToken(importDefault(dependencyMap[6]).colors.TEXT_DEFAULT);
  const tmp = callback2();
  [tmp4, tmp5] = callback(React.useState(0), 2);
  const tmp6 = callback(React.useState(visible), 2);
  if (visible !== tmp6[0]) {
    tmp6[1](visible);
    if (visible) {
      tmp5((arg0) => arg0 + 1);
    }
  }
  obj = { style: tmp.container, children: jsx(arg1(dependencyMap[7]).BountiesScrollIndicatorRive, { dataBinding: obj }, tmp4) };
  obj = { color: token, startAnimation: !startAnimation.isFadingInContent };
  return <View {...obj} />;
};
