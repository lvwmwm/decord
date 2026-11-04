// Module ID: 9929
// Function ID: 9930
// Name: PremiumFeaturesWumpus
// Dependencies: [19, 1385, 21, 5014, 7112, 9930, 9931, 9932, 9933, 9934, 9935, 5717, 2]
// Exports: default

// Module 9929 (PremiumFeaturesWumpus)
import PremiumConstants from "PremiumConstants" /* 1385 */;
import AssetRegistryDefault from "AssetRegistry" /* 9930 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9935 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let items;
let metroRequire;
let obj2;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { clouds: { position: "absolute", top: 0, right: 0 }, wumpus: { position: "absolute", top: 22, right: 22, height: 90 }, wumpusLeft: obj2 };
obj2 = { transform: items };
items = [{ scaleX: -1 }];
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesWumpus.tsx");

export default function PremiumFeaturesWumpus(premiumType) {
  let closure_1;
  let cloudsImageSource;
  let wumpusImageSource;
  premiumType = premiumType.premiumType;
  const tmp = closure_7();
  const tmp2 = premiumType(7112)();
  dependencyMap = tmp2;
  const items = [premiumType, tmp2];
  const memo = react.useMemo(() => {
    let obj;
    let tmpResult;
    if (premiumType === PremiumTypes.TIER_0) {
      obj = { wumpusImageSource: AssetRegistryDefault, cloudsImageSource: importDefault(closure_1 ? 9931 : 9932) };
      const obj2 = { wumpusImageSource: AssetRegistryDefault, cloudsImageSource: importDefault(closure_1 ? 9931 : 9932) };
    } else {
      let tmp4;
      if (closure_1) {
        tmp4 = 9933;
      } else {
        tmp4 = 9934;
      }
      obj = { wumpusImageSource: AssetRegistryDefault2, cloudsImageSource: tmpResult };
      tmpResult = importDefault(tmp4);
    }
    return obj;
  }, items);
  ({ wumpusImageSource, cloudsImageSource } = memo);
  let tmp4 = closure_6;
  let obj = { style: tmp.clouds, resizeMode: "contain", source: cloudsImageSource };
  const items1 = [closure_4(premiumType(5717), obj), ];
  const items2 = [tmp.wumpus, ];
  let wumpusLeft = premiumType === PremiumTypes.TIER_0;
  const tmp7 = premiumType(5717);
  const tmp5 = closure_5;
  const tmp6 = closure_4;
  if (wumpusLeft) {
    wumpusLeft = tmp.wumpusLeft;
  }
  let obj2 = { children: items1 };
  items2[1] = wumpusLeft;
  items1[1] = tmp6(tmp7, { style: items2, resizeMode: "contain", source: wumpusImageSource });
  return tmp4(tmp5, obj2);
};
