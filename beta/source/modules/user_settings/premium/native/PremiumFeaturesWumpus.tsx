// Module ID: 9530
// Function ID: 9531
// Name: PremiumFeaturesWumpus
// Dependencies: [19, 1374, 21, 4788, 7220, 9531, 9532, 9533, 9534, 9535, 9536, 5836, 2]
// Exports: default

// Module 9530 (PremiumFeaturesWumpus)
import _modDef9531 from "module_9531" /* 9531 */;
import _modDef9536 from "module_9536" /* 9536 */;
import noop from "module_19" /* 19 */;

const PremiumTypes = fn(1374).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4788);
let obj2 = { clouds: { position: "absolute", top: 0, right: 0 }, wumpus: { position: "absolute", top: 22, right: 22, height: 90 }, wumpusLeft: null };
const obj3 = { transform: null };
let items = [{ scaleX: -1 }];
obj3.transform = items;
obj2.wumpusLeft = obj3;
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesWumpus.tsx");

export default function PremiumFeaturesWumpus(premiumType) {
  premiumType = premiumType.premiumType;
  const tmp = closure_7();
  const tmp2 = premiumType(7220)();
  dependencyMap = tmp2;
  const items = [premiumType, tmp2];
  const memo = noop.useMemo(() => {
    if (premiumType === PremiumTypes.TIER_0) {
      const obj2 = { wumpusImageSource: _modDef9531, cloudsImageSource: importDefault(closure_1 ? 9532 : 9533) };
    } else {
      if (closure_1) {
        let tmp4 = 9534;
      } else {
        tmp4 = 9535;
      }
      const obj = { wumpusImageSource: _modDef9536, cloudsImageSource: importDefault(tmp4) };
      return obj;
    }
  }, items);
  ({ wumpusImageSource, cloudsImageSource } = memo);
  const items1 = [closure_4(premiumType(5836), { style: tmp.clouds, resizeMode: "contain", source: cloudsImageSource }), ];
  const items2 = [tmp.wumpus, ];
  let wumpusLeft = premiumType === PremiumTypes.TIER_0;
  if (wumpusLeft) {
    wumpusLeft = tmp.wumpusLeft;
  }
  let obj2 = { children: null };
  items2[1] = wumpusLeft;
  items1[1] = closure_4(premiumType(5836), { style: items2, resizeMode: "contain", source: wumpusImageSource });
  obj2.children = items1;
  return closure_6(closure_5, obj2);
};
