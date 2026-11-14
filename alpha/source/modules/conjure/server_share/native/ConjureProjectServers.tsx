// Module ID: 13205
// Function ID: 13206
// Name: ConjureProjectServers
// Dependencies: [19, 7017, 21, 13206, 7746, 1113, 4131, 7443, 5936, 13207, 2]
// Exports: default

// Module 13205 (ConjureProjectServers)
import Fragment from "Fragment" /* 21 */;
import _modDef4131 from "module_4131" /* 4131 */;
import openConjureRemoveAppAlertDefault from "openConjureRemoveAppAlert" /* 13207 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conjure/server_share/native/ConjureProjectServers.tsx");

export default function ConjureProjectServers(projectId) {
  projectId = projectId.projectId;
  const tmp = projectId;
  const tmp2 = dependencyMap;
  let obj = projectId(13206);
  const conjureProjectServers = obj.useConjureProjectServers(projectId);
  let tmp3 = null;
  if (0 !== conjureProjectServers.length) {
    const TableRowGroup = tmp(7746).TableRowGroup;
    let intl = tmp(1113).intl;
    let intl2 = tmp(1113).intl;
    tmp3 = <TableRowGroup title={intl.string(_modDef4131.yAZWTm)} description={intl2.string(_modDef4131.HlSg2P)} hasIcons={false}>{conjureProjectServers.map((item) => {
      let guildId;
      let guildName;
      let intl2;
      let intl3;
      let isTestServer;
      let obj3;
      let removeTarget;
      ({ guildName, removeTarget } = item);
      ({ guildId, isTestServer } = item);
      let stringResult;
      const TableRow = projectId(dependencyMap[7]).TableRow;
      if (isTestServer) {
        const intl = tmp2(tmp3[5]).intl;
        stringResult = intl.string(require("module_4131").QyYJ4O);
      }
      let tmpResult;
      if (null != removeTarget) {
        const obj2 = {
          variant: "secondary",
          size: "sm",
          text: intl2.string(_modDef4131.BGF8VT),
          accessibilityLabel: intl3.formatToPlainString(_modDef4131["3gKG2j"], obj3),
          onPress() {
              const project = ConjureProjectStore.getProject(projectId);
              if (null != project) {
                const obj = { project, target: removeTarget, action: "remove" };
                openConjureRemoveAppAlertDefault(obj);
              }
            }
        };
        const Button = tmp2(tmp3[8]).Button;
        intl2 = tmp2(tmp3[5]).intl;
        intl3 = tmp2(tmp3[5]).intl;
        obj3 = { server: guildName };
        tmpResult = tmp(Button, obj2);
      }
      return <TableRow key={guildId} label={guildName} subLabel={stringResult} trailing={tmpResult} />;
    })}</TableRowGroup>;
  }
  return tmp3;
};
