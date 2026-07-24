// Module ID: 8606
// Function ID: 68276
// Name: OrbsBadgeCoachmarkImg
// Dependencies: [31, 27, 33, 4130, 8607, 1212, 3982, 8608, 2]
// Exports: default, useOrbsBadgeCoachmark

// Module 8606 (OrbsBadgeCoachmarkImg)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function OrbsBadgeCoachmarkImg() {
  const tmp = callback();
  let obj = { style: tmp.coachmarkImageContainer };
  obj = {};
  obj = { uri: importDefault(8607) };
  obj.source = obj;
  obj.style = tmp.coachmarkImage;
  obj.children = <closure_5 uri={importDefault(8607)} />;
  return <closure_4 uri={importDefault(8607)} />;
}
({ View: closure_4, Image: closure_5 } = get_ActivityIndicator);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" }, coachmarkImage: { width: 80, height: 80 }, coachmarkDescription: { marginBottom: -10 } });
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/OrbsBadgeCoachmark.tsx");

export default function OrbsBadgeCoachmark(badgeRef) {
  let obj = Object.create(null);
  obj.badgeRef = 0;
  const merged = Object.assign(badgeRef, obj);
  obj = require(8608) /* useCoachmark */;
  const coachmark = obj.useCoachmark(badgeRef.badgeRef, merged);
  return null;
};
export const useOrbsBadgeCoachmark = function useOrbsBadgeCoachmark(disabled) {
  disabled = disabled.disabled;
  const tmp = callback();
  const importDefault = tmp;
  const items = [disabled, tmp.coachmarkDescription];
  let tmp3 = null;
  if (!disabled) {
    let obj = { props: tmp2 };
    tmp3 = obj;
  }
  return tmp3;
};
