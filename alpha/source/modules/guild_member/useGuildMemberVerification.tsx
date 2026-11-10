// Module ID: 10645
// Function ID: 10646
// Name: useGuildMemberVerification
// Dependencies: [19, 12, 10646, 2]
// Exports: default

// Module 10645 (useGuildMemberVerification)
import _mod12 from "module_12" /* 12 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_member/useGuildMemberVerification.tsx");

export default function useGuildMemberVerification(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  const memo = react.useMemo(() => {
    let c1 = null;
    let obj = _mod12;
    let closure_2 = obj.debounce((arg0) => {
      let tmp2 = null != closure_0;
      const tmp = closure_0;
      if (tmp2) {
        tmp2 = arg0.length > 0;
      }
      if (tmp2) {
        const obj = closure_2_0(memo[2]);
        obj.verifyGuildMembers(tmp, arg0);
      }
    }, 500);
    function verifier(join) {
      const joined = join.join(",");
      if (joined !== c1) {
        c1 = joined;
        closure_2(join);
      }
    }
    verifier.cancel = () => {
      c1 = null;
      closure_2.cancel();
    };
    return verifier;
  }, items);
  const items1 = [memo];
  const effect = react.useEffect(() => () => memo.cancel(), items1);
  return memo;
};
