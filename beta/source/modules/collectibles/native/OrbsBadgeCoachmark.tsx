// Module ID: 10649
// Function ID: 10650
// Name: OrbsBadgeCoachmark
// Dependencies: [19, 17, 21, 4836, 10650, 1115, 4693, 10589, 2]
// Exports: default, useOrbsBadgeCoachmark

// Module 10649 (OrbsBadgeCoachmark)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import useCoachmark from "useCoachmark" /* 10589 */;
import _modDef10650 from "module_10650" /* 10650 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
function OrbsBadgeCoachmarkImg() {
  const tmp = closure_7();
  ({ source: { uri: _modDef10650 }, style: tmp.coachmarkImage });
  ({ uri: _modDef10650 });
  return <React3 style={tmp.coachmarkImageContainer}>{null}</React3>;
}
({ View: closure_4, Image: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" }, coachmarkImage: { width: 80, height: 80 }, coachmarkDescription: { marginBottom: -10 } });
const result = size.fileFinishedImporting("modules/collectibles/native/OrbsBadgeCoachmark.tsx");

export default function OrbsBadgeCoachmark(badgeRef) {
  badgeRef = badgeRef.badgeRef;
  const merged = Object.assign(badgeRef, Object.assign({ badgeRef: 0 }));
  const obj = useCoachmark;
  const coachmark = obj.useCoachmark(badgeRef, merged);
  return null;
};
export const useOrbsBadgeCoachmark = function useOrbsBadgeCoachmark(disabled) {
  disabled = disabled.disabled;
  const tmp = closure_7();
  const coachmarkDescription = tmp;
  const items = [disabled, tmp.coachmarkDescription];
  let tmp3 = null;
  if (!disabled) {
    let obj = { props: tmp2 };
    tmp3 = obj;
  }
  return tmp3;
};
