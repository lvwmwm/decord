// Module ID: 8121
// Function ID: 64319
// Name: PremiumFeaturesWumpus
// Dependencies: []
// Exports: default

// Module 8121 (PremiumFeaturesWumpus)
let closure_2 = importAll(dependencyMap[0]);
const PremiumTypes = arg1(dependencyMap[1]).PremiumTypes;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const items = [{ scaleX: -1 }];
let closure_7 = arg1(dependencyMap[3]).createStyles({ clouds: { onLongPressAvatar: true, onTapUsername: true, onLongPressUsername: true }, wumpus: {}, wumpusLeft: { transform: items } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesWumpus.tsx");

export default function PremiumFeaturesWumpus(premiumType) {
  let cloudsImageSource;
  let wumpusImageSource;
  premiumType = premiumType.premiumType;
  const importDefault = premiumType;
  const tmp = callback2();
  const tmp2 = importDefault(dependencyMap[4])();
  const dependencyMap = tmp2;
  const items = [premiumType, tmp2];
  const memo = React.useMemo(() => {
    if (premiumType === TIER_0.TIER_0) {
      let obj = { wumpusImageSource: premiumType(tmp2[5]) };
      if (tmp2) {
        let tmp12 = tmp11[6];
      } else {
        tmp12 = tmp11[7];
      }
      obj.cloudsImageSource = premiumType(tmp12);
      const tmp8 = premiumType;
    } else {
      if (tmp2) {
        let tmp4 = tmp3[8];
      } else {
        tmp4 = tmp3[9];
      }
      obj = { wumpusImageSource: premiumType(tmp2[10]), cloudsImageSource: premiumType(tmp4) };
      return obj;
    }
  }, items);
  let obj = {};
  ({ wumpusImageSource, cloudsImageSource } = memo);
  obj = { style: tmp.clouds, resizeMode: "contain", source: cloudsImageSource };
  const items1 = [callback(importDefault(dependencyMap[11]), obj), ];
  obj = {};
  const items2 = [tmp.wumpus, , ];
  let wumpusLeft = premiumType === PremiumTypes.TIER_0;
  if (wumpusLeft) {
    wumpusLeft = tmp.wumpusLeft;
  }
  items2[1] = wumpusLeft;
  items2[2] = premiumType.style;
  obj.style = items2;
  obj.resizeMode = "contain";
  obj.source = wumpusImageSource;
  items1[1] = callback(importDefault(dependencyMap[11]), obj);
  obj.children = items1;
  return closure_6(closure_5, obj);
};
