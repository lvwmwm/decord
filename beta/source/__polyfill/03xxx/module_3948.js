// Module ID: 3948
// Function ID: 3949
// Dependencies: [3883]
// Exports: default

// Module 3948
import module_3883_mod from "module_3883" /* 3883 */;

let module_3883 = module_3883_mod;
if (!module_3883) {
  const obj = { default: module_3883 };
  let tmp3 = obj;
} else {
  tmp3 = module_3883;
}
module_3883 = tmp3;
const dependencyMap = ["domenica", "luned\u00EC", "marted\u00EC", "mercoled\u00EC", "gioved\u00EC", "venerd\u00EC", "sabato"];
let closure_2 = {
  lastWeek(getUTCDay, arg1, arg2) {
    const uTCDay = getUTCDay.getUTCDay();
    if (module_3883.default(getUTCDay, arg1, arg2)) {
      let str = `${"'" + closure_1[tmp]} alle' p`;
    } else {
      str = "'domenica scorsa alle' p";
      if (0 !== uTCDay) {
        str = `${"'" + closure_1[tmp]} scorso alle' p`;
      }
    }
    return str;
  },
  yesterday: "'ieri alle' p",
  today: "'oggi alle' p",
  tomorrow: "'domani alle' p",
  nextWeek(getUTCDay, arg1, arg2) {
    const uTCDay = getUTCDay.getUTCDay();
    if (module_3883.default(getUTCDay, arg1, arg2)) {
      let str = `${"'" + closure_1[tmp]} alle' p`;
    } else {
      str = "'domenica prossima alle' p";
      if (0 !== uTCDay) {
        str = `${"'" + closure_1[tmp]} prossimo alle' p`;
      }
    }
    return str;
  },
  other: "P"
};

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if (typeof closure_2[arg0] === "function") {
    tmpResult = tmp(arg1, arg2, arg3);
  }
  return tmpResult;
};
export default exports.default;
