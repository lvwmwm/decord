// Module ID: 18333
// Function ID: 18334
// Name: ConjureProjectServer
// Dependencies: [19, 4663, 6500, 21, 504, 6719, 18334, 1113, 4089, 7229, 6926, 18337, 18339, 2]
// Exports: default

// Module 18333 (ConjureProjectServer)
import ConjureProjectStore2 from "ConjureProjectStore" /* 6500 */;
import showConjureProjectServerSheetDefault from "showConjureProjectServerSheet" /* 18337 */;
import openConjureMakePersonalAlertDefault from "openConjureMakePersonalAlert" /* 18339 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4663 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const ConjureProjectStore = ConjureProjectStore2;
let dependencyMap;

let metroImportDefault;
let metroRequire;
const isProjectOwner = ConjureProjectStore2.isProjectOwner;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let result = size.fileFinishedImporting("modules/conjure/server_share/native/ConjureProjectServer.tsx");

export default function ConjureProjectServer(projectId) {
  let c2;
  let formatToPlainStringResult;
  let intl2;
  let intl6;
  let items4;
  projectId = projectId.projectId;
  let obj = projectId(504);
  const items = [ConjureProjectStore];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
  const obj2 = projectId(6719);
  const result = obj2.conjureServerProjectGuildId(stateFromStores);
  dependencyMap = result;
  const items2 = [GuildStore];
  const items3 = [result];
  const obj3 = projectId(504);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => {
    const guild = GuildStore.getGuild(c2);
    let name;
    if (guild != null) {
      name = guild.name;
    }
    return name;
  }, items3);
  const obj4 = projectId(18334);
  const tmp6 = obj4.useConjureProjectServerCandidates(projectId).length > 0;
  if (null != stateFromStores) {
    if (isProjectOwner(stateFromStores)) {
      let stringResult;
      const install_scope = stateFromStores.install_scope;
      if (!tmp6) {
        const intl = tmp(1113).intl;
        stringResult = intl.string(stateFromStores(4089).NXvmoQ);
      }
      const obj5 = { title: intl2.string(stateFromStores(4089).n431L5), description: formatToPlainStringResult, hasIcons: false, children: items4 };
      const TableRowGroup = tmp(7229).TableRowGroup;
      intl2 = tmp(1113).intl;
      const intl3 = tmp(1113).intl;
      const tmp10 = closure_7;
      if ("guild" === install_scope) {
        const formatToPlainString = intl3.formatToPlainString;
        let stringResult1 = stateFromStores1;
        const prop = tmp11(4089)["KWBh/Q"];
        if (stateFromStores1 == null) {
          const intl4 = tmp(1113).intl;
          stringResult1 = intl4.string(tmp11(4089)["6bhivN"]);
        }
        const obj6 = { server: stringResult1 };
        formatToPlainStringResult = formatToPlainString(prop, obj6);
      } else {
        formatToPlainStringResult = intl3.string(tmp11(4089)["JQ/7HT"]);
      }
      const TableRow = tmp(6926).TableRow;
      const intl5 = tmp(1113).intl;
      const string = intl5.string;
      const tmp11Result = stateFromStores(4089);
      const obj7 = {
        label: string("guild" === install_scope ? tmp11Result["1E5/ay"] : tmp11Result["7SD3ul"]),
        subLabel: stringResult,
        arrow: true,
        disabled: !tmp6,
        onPress() {
              const obj = { projectId };
              return showConjureProjectServerSheetDefault(obj);
            }
      };
      items4 = [closure_6(TableRow, obj7), ];
      let tmp15Result = null;
      if ("guild" === install_scope) {
        const obj8 = {
          label: intl6.string(stateFromStores(4089).j1NMdG),
          variant: "danger",
          onPress() {
                  const obj = { project: stateFromStores };
                  return openConjureMakePersonalAlertDefault(obj);
                }
        };
        const TableRow2 = tmp(6926).TableRow;
        intl6 = tmp(1113).intl;
        tmp15Result = tmp15(TableRow2, obj8);
      }
      items4[1] = tmp15Result;
      return tmp10(TableRowGroup, obj5);
    }
  }
  return null;
};
