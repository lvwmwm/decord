// Module ID: 12531
// Function ID: 12532
// Name: ConjureMentionSuggestions
// Dependencies: [19, 21, 4971, 587, 558, 576, 6987, 1128, 3830, 6903, 1202, 5025, 11829, 2]

// Module 12531 (ConjureMentionSuggestions)
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import TableRowGroup3 from "TableRowGroup" /* 6987 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c3;
let closure_4;
let hasOwnProperty;
let size;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { fileThumbnail: size };
size = { width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.xs };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureMentionSuggestions(projectId) {
  let fileThumbnail;
  let intl;
  let intl2;
  let items;
  let onSelect;
  let suggestions;
  let tmp10;
  let tmp9;
  let obj = projectId(576);
  const cResult = obj.c(12);
  projectId = projectId.projectId;
  ({ suggestions, onSelect } = projectId);
  const tmp4 = closure_6();
  dependencyMap = tmp4;
  if (cResult[0] === onSelect) {
    if (cResult[1] === projectId) {
      if (cResult[2] === tmp4) {
        let tmp5;
        let tmp6;
        let tmp7;
        if (cResult[3] === suggestions) {
          tmp5 = cResult[4];
          tmp6 = cResult[5];
          tmp7 = cResult[6];
        }
        const _Symbol = Symbol;
        if (tmp7 === Symbol.for("react.early_return_sentinel")) {
          if (cResult[9] === tmp5) {
            let tmp19;
            if (cResult[10] === tmp6) {
              tmp19 = cResult[11];
            }
            tmp7 = tmp19;
          }
          let obj2 = { children: items };
          items = [tmp5, tmp6];
          const tmp22 = closure_5(closure_4, obj2);
          cResult[9] = tmp5;
          cResult[10] = tmp6;
          cResult[11] = tmp22;
          tmp19 = tmp22;
        }
        return tmp7;
      }
    }
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function j(kind) {
      return "user" === kind.kind;
    };
    cResult[7] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[7];
  }
  const found = suggestions.filter(tmp9);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(kind) {
        return "file" === kind.kind;
      }
    }
    cResult[8] = I;
    tmp10 = I;
  } else {
    class I {
      constructor(kind) {
        return "file" === kind.kind;
      }
    }
  }
  const found1 = suggestions.filter(tmp10);
  let tmp11 = null;
  let tmp12;
  let tmp13;
  if (0 !== suggestions.length) {
    let tmp15;
    class I {
      constructor(kind) {
        return "file" === kind.kind;
      }
    }
    if (found.length > 0) {
      class I {
        constructor(kind) {
          return "file" === kind.kind;
        }
      }
      let obj3 = {
        title: intl.string(onSelect(3830).Vb3sUg),
        hasIcons: true,
        children: found.map((user) => {
              let Avatar;
              let obj2;
              let obj3;
              let closure_0 = user;
              const obj = {
                icon: closure_1_3(Avatar, obj2),
                label: obj3.getName(user.user),
                subLabel: user.user.username,
                onPress() {
                  return onSelect(user);
                }
              };
              const TableRow = projectId(fileThumbnail[9]).TableRow;
              obj2 = { user: user.user, size: projectId(fileThumbnail[10]).AvatarSizes.XSMALL, guildId: "Array" };
              Avatar = projectId(fileThumbnail[10]).Avatar;
              obj3 = projectId(fileThumbnail[11]);
              return closure_1_3(TableRow, obj, user.user.id);
            })
      };
      const TableRowGroup = tmp(6987).TableRowGroup;
      intl = tmp(1128).intl;
      tmp15 = closure_3(TableRowGroup, obj3);
    }
    let tmp16 = null;
    if (found1.length > 0) {
      class I {
        constructor(kind) {
          return "file" === kind.kind;
        }
      }
      const obj4 = {
        title: intl2.string(onSelect(3830).zA5KLM),
        hasIcons: true,
        children: found1.map((file) => {
              let obj2;
              projectId = file;
              const obj = {
                icon: closure_1_3(onSelect(fileThumbnail[12]), obj2),
                label: file.file.name,
                onPress() {
                  return onSelect(file);
                }
              };
              const TableRow = projectId(fileThumbnail[9]).TableRow;
              obj2 = { projectId, file: file.file, style: fileThumbnail.fileThumbnail };
              return closure_1_3(TableRow, obj, file.file.id);
            })
      };
      const TableRowGroup2 = tmp(6987).TableRowGroup;
      intl2 = tmp(1128).intl;
      tmp16 = closure_3(TableRowGroup2, obj4);
    }
    tmp12 = tmp16;
    tmp11 = forResult;
    tmp13 = tmp15;
  }
  cResult[0] = onSelect;
  cResult[1] = projectId;
  cResult[2] = tmp4;
  cResult[3] = suggestions;
  cResult[4] = tmp13;
  cResult[5] = tmp12;
  cResult[6] = tmp11;
  tmp7 = tmp11;
  tmp6 = tmp12;
  tmp5 = tmp13;
}) : (function ConjureMentionSuggestions(arg0) {
  let fileThumbnail;
  let intl;
  let intl2;
  let projectId;
  let suggestions;
  ({ projectId: require, suggestions, onSelect: importDefault } = arg0);
  dependencyMap = closure_6();
  const found = suggestions.filter((kind) => "user" === kind.kind);
  const found1 = suggestions.filter((kind) => "file" === kind.kind);
  let tmp = null;
  if (0 !== suggestions.length) {
    let tmp6 = null;
    const tmp12 = closure_5;
    const tmp13 = closure_4;
    if (found.length > 0) {
      let obj = {
        title: intl.string(_modDef3830.Vb3sUg),
        hasIcons: true,
        children: found.map((user) => {
              let Avatar;
              let obj2;
              let obj3;
              let closure_0 = user;
              const obj = {
                icon: closure_1_3(Avatar, obj2),
                label: obj3.getName(user.user),
                subLabel: user.user.username,
                onPress() {
                  return importDefault(user);
                }
              };
              const TableRow = require("TableRow").TableRow;
              obj2 = { user: user.user, size: require("native").AvatarSizes.XSMALL, guildId: "Array" };
              Avatar = require("native").Avatar;
              obj3 = require("UserUtils");
              return closure_1_3(TableRow, obj, user.user.id);
            })
      };
      const TableRowGroup = TableRowGroup3.TableRowGroup;
      intl = intl3.intl;
      tmp6 = closure_3(TableRowGroup, obj);
    }
    const items = [tmp6, ];
    let tmp7 = null;
    if (found1.length > 0) {
      let obj2 = {
        title: intl2.string(_modDef3830.zA5KLM),
        hasIcons: true,
        children: found1.map((file) => {
              let obj2;
              require = file;
              const obj = {
                icon: closure_1_3(require("ConjureFileThumbnail"), obj2),
                label: file.file.name,
                onPress() {
                  return importDefault(file);
                }
              };
              const TableRow = require("TableRow").TableRow;
              obj2 = { projectId: require, file: file.file, style: fileThumbnail.fileThumbnail };
              return closure_1_3(TableRow, obj, file.file.id);
            })
      };
      const TableRowGroup2 = TableRowGroup3.TableRowGroup;
      intl2 = intl3.intl;
      tmp7 = closure_3(TableRowGroup2, obj2);
    }
    let obj3 = { children: items };
    items[1] = tmp7;
    tmp = tmp12(tmp13, obj3);
  }
  return tmp;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMentionSuggestions.tsx");

export default tmp4;
