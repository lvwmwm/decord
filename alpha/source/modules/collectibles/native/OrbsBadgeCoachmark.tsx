// Module ID: 15504
// Function ID: 15505
// Name: OrbsBadgeCoachmark
// Dependencies: [19, 17, 21, 5310, 6014, 15505, 1113, 5487, 9579, 2]
// Exports: default, useOrbsBadgeCoachmark

// Module 15504 (OrbsBadgeCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import FastImageDefault from "FastImage" /* 6014 */;
import useCoachmark from "useCoachmark" /* 9579 */;
import _modDef15505 from "module_15505" /* 15505 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5310 */;
import size from "module_2" /* 2 */;

function OrbsBadgeCoachmarkImg() {
  const tmp = closure_6();
  const obj3 = { uri: _modDef15505 };
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
