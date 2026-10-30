// Module ID: 12779
// Function ID: 12780
// Name: ConjureMentionSuggestions
// Dependencies: [19, 21, 5009, 575, 7054, 1114, 3865, 6969, 1188, 5063, 12454, 2]
// Exports: default

// Module 12779 (ConjureMentionSuggestions)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import TableRowGroup3 from "TableRowGroup" /* 7054 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMentionSuggestions.tsx");

export default function ConjureMentionSuggestions(arg0) {
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
        title: intl.string(_modDef3865.Vb3sUg),
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
              obj2 = { user: user.user, size: require("native").AvatarSizes.XSMALL, guildId: "r" };
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
        title: intl2.string(_modDef3865.zA5KLM),
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
};
