// Module ID: 12580
// Function ID: 12581
// Name: UserProfileActivityCardBadges
// Dependencies: [19, 17, 1086, 21, 12581, 558, 576, 2]

// Module 12580 (UserProfileActivityCardBadges)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1086 */;
import UserProfileActivityBadges from "UserProfileActivityBadges" /* 12581 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function getActivityBadges(activity) {
  let items3;
  if (activity.type === ActivityTypes.PLAYING) {
    const items = [UserProfileActivityBadges.PartyBadge, UserProfileActivityBadges.TimestampBadge];
    items3 = items;
  } else if (activity.type === ActivityTypes.LISTENING) {
    const items1 = [UserProfileActivityBadges.TimestampBadge];
    items3 = items1;
  } else if (activity.type === ActivityTypes.WATCHING) {
    const items2 = [UserProfileActivityBadges.TimestampBadge, UserProfileActivityBadges.EpisodeBadge];
    items3 = items2;
  } else {
    items3 = [];
  }
  return items3;
}
const View = react_native.View;
const ActivityTypes = Constants.ActivityTypes;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((activity) => {
  const obj = activity(576);
  const cResult = obj.c(12);
  activity = activity.activity;
  const style = activity.style;
  if (cResult[0] === activity) {
    let tmp2;
    let tmp3;
    let tmp4;
    let tmp5;
    if (cResult[1] === style) {
      tmp2 = cResult[2];
      tmp3 = cResult[3];
      tmp4 = cResult[4];
      tmp5 = cResult[5];
    }
    const _Symbol = Symbol;
    if (tmp5 === Symbol.for("react.early_return_sentinel")) {
      if (cResult[8] === tmp2) {
        if (cResult[9] === tmp3) {
          let tmp14;
          if (cResult[10] === tmp4) {
            tmp14 = cResult[11];
          }
          tmp5 = tmp14;
        }
      }
      const tmp16 = <tmp2 style={tmp3}>{tmp4}</tmp2>;
      cResult[8] = tmp2;
      cResult[9] = tmp3;
      cResult[10] = tmp4;
      cResult[11] = tmp16;
      tmp14 = tmp16;
    }
    return tmp5;
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  const arr = getActivityBadges(activity);
  let tmp7 = null;
  let mapped;
  let tmp9;
  let tmp10;
  if (0 !== arr.length) {
    let tmp12;
    const tmp11 = View;
    if (cResult[6] !== activity) {
      class B {
        constructor(arg0, arg1) {
          obj = { activity };
          return jsx(activity, obj, arg1);
        }
      }
      cResult[6] = activity;
      cResult[7] = B;
      tmp12 = B;
    } else {
      class B {
        constructor(arg0, arg1) {
          obj = { activity };
          return jsx(activity, obj, arg1);
        }
      }
    }
    mapped = arr.map(tmp12);
    tmp7 = forResult;
    tmp9 = style;
    tmp10 = tmp11;
  }
  cResult[0] = activity;
  cResult[1] = style;
  cResult[2] = tmp10;
  cResult[3] = tmp9;
  cResult[4] = mapped;
  cResult[5] = tmp7;
  tmp5 = tmp7;
  tmp4 = mapped;
  tmp3 = tmp9;
  tmp2 = tmp10;
}) : ((activity) => {
  activity = activity.activity;
  const style = activity.style;
  const arr = getActivityBadges(activity);
  let tmp = null;
  if (0 !== arr.length) {
    tmp = <View style={style}>{arr.map((item, index) => jsx(item, { activity }, index))}</View>;
  }
  return tmp;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityCardBadges.tsx");

export default tmp3;
