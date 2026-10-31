// Module ID: 11447
// Function ID: 11448
// Name: OrbsBadgeCoachmark
// Dependencies: [19, 17, 21, 5014, 5717, 11448, 1113, 5199, 9954, 2]
// Exports: default, useOrbsBadgeCoachmark

// Module 11447 (OrbsBadgeCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import FastImageDefault from "FastImage" /* 5717 */;
import useCoachmark from "useCoachmark" /* 9954 */;
import _modDef11448 from "module_11448" /* 11448 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

function OrbsBadgeCoachmarkImg() {
  const tmp = closure_6();
  const obj3 = { uri: _modDef11448 };
  FastImageDefault;
  return <View style={tmp.coachmarkImageContainer}>{null}</View>;
}
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" }, coachmarkImage: { width: 80, height: 80 }, coachmarkDescription: { marginBottom: -10 } });
const result = size.fileFinishedImporting("modules/collectibles/native/OrbsBadgeCoachmark.tsx");

export default function OrbsBadgeCoachmark(badgeRef) {
  badgeRef = badgeRef.badgeRef;
  const merged = Object.assign(badgeRef, Object.assign({ badgeRef: 0 }));
  const obj = useCoachmark;
  const coachmark = obj.useCoachmark(badgeRef, merged);
  return null;
};
export function useOrbsBadgeCoachmark(disabled) {
  disabled = disabled.disabled;
  const tmp = closure_6();
  const coachmarkDescription = tmp;
  const items = [disabled, tmp.coachmarkDescription];
  let tmp3 = null;
  if (!disabled) {
    let obj = { props: tmp2 };
    tmp3 = obj;
  }
  return tmp3;
}
