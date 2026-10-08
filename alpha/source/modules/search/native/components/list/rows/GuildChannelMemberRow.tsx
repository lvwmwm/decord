// Module ID: 17152
// Function ID: 17153
// Name: GuildChannelMemberRow
// Dependencies: [19, 21, 558, 576, 10213, 2]

// Module 17152 (GuildChannelMemberRow)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import UserRowDefault from "UserRow" /* 10213 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildChannelMemberRow(arg0) {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    UserRowDefault;
    const merged = Object.assign(arg0);
    const tmp10 = <tmp6 />;
    cResult[0] = arg0;
    cResult[1] = tmp10;
    tmp3 = tmp10;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function GuildChannelMemberRow(arg0) {
  UserRowDefault;
  const merged = Object.assign(arg0);
  return <tmp />;
});
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GuildChannelMemberRow.tsx");

export default tmp3;
