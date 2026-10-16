// Module ID: 12253
// Function ID: 12254
// Name: ConjureMentionSuggestions
// Dependencies: [19, 21, 558, 576, 1128, 3865, 6402, 1202, 5021, 6487, 2]

// Module 12253 (ConjureMentionSuggestions)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1128 */;
import native from "native" /* 1202 */;
import _modDef3865 from "module_3865" /* 3865 */;
import UserUtils from "UserUtils" /* 5021 */;
import TableRow2 from "TableRow" /* 6402 */;
import TableRowGroup2 from "TableRowGroup" /* 6487 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureMentionSuggestions(arg0) {
  let onSelect;
  let users;
  const obj = onSelect(576);
  const cResult = obj.c(8);
  ({ users, onSelect } = arg0);
  if (0 === users.length) {
    return null;
  } else {
    let first;
    let tmp8;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1128).intl;
      const stringResult = intl.string(_modDef3865.Vb3sUg);
      cResult[0] = stringResult;
      first = stringResult;
    } else {
      first = cResult[0];
    }
    if (cResult[1] === onSelect) {
      let tmp7;
      let tmp10;
      if (cResult[2] === users) {
        tmp7 = cResult[3];
      }
      if (cResult[6] !== tmp7) {
        const tmp12 = jsx(onSelect(6487).TableRowGroup, { title: first, hasIcons: true, children: tmp7 });
        cResult[6] = tmp7;
        cResult[7] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[7];
      }
      return tmp10;
    }
    if (cResult[4] !== onSelect) {
      const fn = function l(user) {
        let closure_0 = user;
        const TableRow = onSelect(dependencyMap[6]).TableRow;
        ({ user, size: onSelect(dependencyMap[7]).AvatarSizes.XSMALL, guildId: "r" });
        const Avatar = onSelect(dependencyMap[7]).Avatar;
        const obj3 = onSelect(dependencyMap[8]);
        return <TableRow key={arg0.id} icon={null} label={obj3.getName(arg0)} subLabel={arg0.username} onPress={function onPress() {
          return onSelect(user);
        }} />;
      };
      cResult[4] = onSelect;
      cResult[5] = fn;
      tmp8 = fn;
    } else {
      tmp8 = cResult[5];
    }
    const mapped = users.map(tmp8);
    cResult[1] = onSelect;
    cResult[2] = users;
    cResult[3] = mapped;
    tmp7 = mapped;
  }
}) : (function ConjureMentionSuggestions(arg0) {
  let users;
  ({ users, onSelect: require } = arg0);
  let tmp = null;
  if (0 !== users.length) {
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    const intl = intl2.intl;
    tmp = <TableRowGroup title={intl.string(_modDef3865.Vb3sUg)} hasIcons>{users.map((user) => {
      require = user;
      const TableRow = TableRow2.TableRow;
      ({ user, size: native.AvatarSizes.XSMALL, guildId: "r" });
      const Avatar = native.Avatar;
      const obj3 = UserUtils;
      return <TableRow key={arg0.id} icon={null} label={obj3.getName(arg0)} subLabel={arg0.username} onPress={function onPress() {
        return require(user);
      }} />;
    })}</TableRowGroup>;
  }
  return tmp;
});
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMentionSuggestions.tsx");

export default tmp3;
