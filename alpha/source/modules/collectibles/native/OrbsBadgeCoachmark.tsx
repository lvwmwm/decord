// Module ID: 11411
// Function ID: 11412
// Name: OrbsBadgeCoachmark
// Dependencies: [19, 17, 21, 5009, 5712, 11412, 1114, 5194, 9933, 2]
// Exports: default, useOrbsBadgeCoachmark

// Module 11411 (OrbsBadgeCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1114 */;
import FastImageDefault from "FastImage" /* 5712 */;
import useCoachmark from "useCoachmark" /* 9933 */;
import _modDef11412 from "module_11412" /* 11412 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

function OrbsBadgeCoachmarkImg() {
  const tmp = closure_6();
  const obj3 = { uri: _modDef11412 };
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
