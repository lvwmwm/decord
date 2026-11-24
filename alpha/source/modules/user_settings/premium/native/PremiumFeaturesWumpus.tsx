// Module ID: 9571
// Function ID: 9572
// Name: PremiumFeaturesWumpus
// Dependencies: [19, 1388, 21, 4917, 7183, 9006, 9572, 9573, 9574, 9575, 9008, 5604, 2]
// Exports: default

// Module 9571 (PremiumFeaturesWumpus)
import PremiumConstants from "PremiumConstants" /* 1388 */;
import AssetRegistryDefault from "AssetRegistry" /* 9006 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9008 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4917 */;
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
  const tmp2 = premiumType(7183)();
  dependencyMap = tmp2;
  const items = [premiumType, tmp2];
  const memo = react.useMemo(() => {
    let obj;
    let tmpResult;
    if (premiumType === PremiumTypes.TIER_0) {
      obj = { wumpusImageSource: AssetRegistryDefault, cloudsImageSource: importDefault(closure_1 ? 9572 : 9573) };
      const obj2 = { wumpusImageSource: AssetRegistryDefault, cloudsImageSource: importDefault(closure_1 ? 9572 : 9573) };
    } else {
      let tmp4;
      if (closure_1) {
        tmp4 = 9574;
      } else {
        tmp4 = 9575;
      }
      obj = { wumpusImageSource: AssetRegistryDefault2, cloudsImageSource: tmpResult };
      tmpResult = importDefault(tmp4);
    }
    return obj;
  }, items);
  ({ wumpusImageSource, cloudsImageSource } = memo);
  let tmp4 = closure_6;
  let obj = { style: tmp.clouds, resizeMode: "contain", source: cloudsImageSource };
  const items1 = [closure_4(premiumType(5604), obj), ];
  const items2 = [tmp.wumpus, ];
  let wumpusLeft = premiumType === PremiumTypes.TIER_0;
  const tmp7 = premiumType(5604);
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
