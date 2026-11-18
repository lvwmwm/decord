// Module ID: 11567
// Function ID: 11568
// Name: useVerifyMentionResults
// Dependencies: [19, 11568, 2]
// Exports: default

// Module 11567 (useVerifyMentionResults)
import useGuildMemberVerificationDefault from "useGuildMemberVerification" /* 11568 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_member/useVerifyMentionResults.tsx");

export default function useVerifyMentionResults(arg0, arg1) {
  let closure_0 = arg1;
  const tmp = useGuildMemberVerificationDefault(arg0);
  let closure_1 = tmp;
  const items = [arg1, tmp];
  const effect = react.useEffect(() => {
    if (null == closure_0) {
      closure_1.cancel();
    } else {
      closure_1(tmp);
    }
  }, items);
};
