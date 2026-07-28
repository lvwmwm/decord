// Module ID: 9304
// Function ID: 72725
// Name: PremiumFeaturesWumpus
// Dependencies: [31, 1852, 33, 4165, 6540, 6226, 9305, 9306, 9307, 9308, 6228, 5119, 2]
// Exports: default

// Module 9304 (PremiumFeaturesWumpus)
import result from "result";
import { PremiumTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = jsxProd);
let items = [{ scaleX: -1 }];
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ clouds: { position: "absolute", top: 0, right: 0 }, wumpus: { position: "absolute", top: 22, right: 22, height: 90 }, wumpusLeft: { transform: items } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesWumpus.tsx");

export default function PremiumFeaturesWumpus(premiumType) {
  let cloudsImageSource;
  let wumpusImageSource;
  premiumType = premiumType.premiumType;
  const tmp = callback2();
  const tmp2 = premiumType(6540)();
  const dependencyMap = tmp2;
  const items = [premiumType, tmp2];
  const memo = React.useMemo(() => {
    if (premiumType === outer1_3.TIER_0) {
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
  const items1 = [callback(premiumType(5119), obj), ];
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
  items1[1] = callback(premiumType(5119), obj);
  obj.children = items1;
  return closure_6(closure_5, obj);
};
