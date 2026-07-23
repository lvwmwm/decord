// Module ID: 12376
// Function ID: 96193
// Name: ProgressWheel
// Dependencies: [27, 33, 4130, 3834, 689, 12368, 5085, 12377, 8018, 12378, 2]
// Exports: default

// Module 12376 (ProgressWheel)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = 2 * Math.PI * 77;
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ progressCircleContainer: { width: 160, height: 160, alignItems: "center", justifyContent: "center", marginTop: 24 }, progressCircleImage: { position: "absolute", width: 93, height: 93, borderRadius: 46.5 }, glowImage: { position: "absolute", width: 180, height: 180 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/referral_program/native/ProgressWheel.tsx");

export default function ProgressWheel(nReferralsSent) {
  nReferralsSent = nReferralsSent.nReferralsSent;
  const tmp = callback3();
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).colors.BACKGROUND_MOD_STRONG);
  let obj1 = require(3834) /* map */;
  obj = { style: tmp.progressCircleContainer };
  const token1 = obj1.useToken(importDefault(689).colors.BACKGROUND_SURFACE_HIGH);
  let tmp6 = nReferralsSent === require(12368) /* MAX_REFERRALS_SENT */.MAX_REFERRALS_SENT;
  if (tmp6) {
    obj = { source: importDefault(12377), style: tmp.glowImage };
    tmp6 = callback(importDefault(5085), obj);
    const tmp10 = importDefault(5085);
  }
  const items = [tmp6, , ];
  obj1 = { width: 160, height: 160 };
  const obj2 = { cx: 80, cy: 80, r: 77, stroke: token, strokeWidth: 6, fill: token1 };
  const items1 = [callback(require(8018) /* inlineStyles */.Circle, obj2), ];
  const obj3 = { cx: 80, cy: 80, r: 77, stroke: "#53ac66", strokeWidth: 6, fill: "transparent", strokeDasharray: closure_6, strokeDashoffset: closure_6 * (1 - 33.3 * nReferralsSent / 100), strokeLinecap: "round", rotation: -90, origin: "80, 80" };
  items1[1] = callback(require(8018) /* inlineStyles */.Circle, obj3);
  obj1.children = items1;
  items[1] = callback2(importDefault(8018), obj1);
  const obj4 = {};
  const obj5 = {};
  const tmp11 = importDefault(8018);
  const tmp4 = callback2;
  const tmp5 = View;
  obj5.uri = importDefault(12378);
  obj4.source = obj5;
  obj4.style = tmp.progressCircleImage;
  items[2] = callback(importDefault(5085), obj4);
  obj.children = items;
  return tmp4(tmp5, obj);
};
