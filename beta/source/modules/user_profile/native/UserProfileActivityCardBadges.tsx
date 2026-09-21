// Module ID: 13300
// Function ID: 13301
// Name: UserProfileActivityCardBadges
// Dependencies: [19, 17, 1078, 21, 13301, 558, 568, 2]

// Module 13300 (UserProfileActivityCardBadges)
import UserProfileActivityBadges from "UserProfileActivityBadges" /* 13301 */;
import noop from "module_19" /* 19 */;

require = fn;
function getActivityBadges(activity) {
  if (activity.type === ActivityTypes.PLAYING) {
    const items = [UserProfileActivityBadges.PartyBadge, UserProfileActivityBadges.TimestampBadge];
    let items3 = items;
  } else if (activity.type === tmp.LISTENING) {
    const items1 = [UserProfileActivityBadges.TimestampBadge];
    items3 = items1;
  } else if (activity.type === tmp.WATCHING) {
    const items2 = [UserProfileActivityBadges.TimestampBadge, UserProfileActivityBadges.EpisodeBadge];
    items3 = items2;
  } else {
    items3 = [];
  }
  return items3;
}
const View = fn(17).View;
const ActivityTypes = fn(1078).ActivityTypes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityCardBadges.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((activity) => {
  const cResult = activity(568).c(12);
  activity = activity.activity;
  const style = activity.style;
  if (cResult[0] === activity) {
    if (cResult[1] === style) {
      let tmp5 = cResult[5];
    }
    const _Symbol = Symbol;
    if (tmp5 !== Symbol.for("react.early_return_sentinel")) {
      return tmp5;
    } else {
      if (cResult[8] === tmp2) {
        if (cResult[9] === tmp3) {
        }
      }
      const obj2 = { style: tmp3, children: tmp4 };
      const tmp16 = <tmp2 style={tmp3}>{tmp4}</tmp2>;
      cResult[8] = tmp2;
      cResult[9] = tmp3;
      cResult[10] = tmp4;
      cResult[11] = tmp16;
    }
  }
  const obj = activity(568);
  const arr = getActivityBadges(activity);
  if (0 === arr.length) {
    cResult[0] = activity;
    cResult[1] = style;
    cResult[2] = undefined;
    cResult[3] = undefined;
    cResult[4] = undefined;
    cResult[5] = null;
    tmp5 = null;
  } else {
    if (cResult[6] !== activity) {
      class B {
        constructor(arg0, arg1) {
          obj = { activity };
          return jsx(activity, obj, arg1);
        }
      }
      cResult[6] = activity;
      cResult[7] = B;
      const tmp8 = B;
    } else {
      class B {
        constructor(arg0, arg1) {
          obj = { activity };
          return jsx(activity, obj, arg1);
        }
      }
    }
    const mapped = arr.map(tmp8);
  }
}) : ((activity) => {
  activity = activity.activity;
  const arr = getActivityBadges(activity);
  let tmp = null;
  if (0 !== arr.length) {
    const obj = { style: activity.style, children: arr.map((item, index) => jsx(item, { activity }, index)) };
    tmp = <View style={arg0.style}>{arr.map((item, index) => jsx(item, { activity }, index))}</View>;
  }
  return tmp;
});
