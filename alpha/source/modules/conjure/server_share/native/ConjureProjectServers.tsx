// Module ID: 14441
// Function ID: 14442
// Name: ConjureProjectServers
// Dependencies: [19, 7025, 21, 13025, 7756, 1113, 4133, 7453, 5930, 14442, 2]
// Exports: default

// Module 14441 (ConjureProjectServers)
import Fragment from "Fragment" /* 21 */;
import _modDef4133 from "module_4133" /* 4133 */;
import openConjureRemoveAppAlertDefault from "openConjureRemoveAppAlert" /* 14442 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7025 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conjure/server_share/native/ConjureProjectServers.tsx");

export default function ConjureProjectServers(projectId) {
  projectId = projectId.projectId;
  const tmp = projectId;
  const tmp2 = dependencyMap;
  let obj = projectId(13025);
  const conjureProjectServers = obj.useConjureProjectServers(projectId);
  let tmp3 = null;
  if (0 !== conjureProjectServers.length) {
    const TableRowGroup = tmp(7756).TableRowGroup;
    let intl = tmp(1113).intl;
    let intl2 = tmp(1113).intl;
    tmp3 = <TableRowGroup title={intl.string(_modDef4133.yAZWTm)} description={intl2.string(_modDef4133.HlSg2P)} hasIcons={false}>{conjureProjectServers.map((item) => {
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
        stringResult = intl.string(require("module_4133").QyYJ4O);
      }
      let tmpResult;
      if (null != removeTarget) {
        const obj2 = {
          variant: "secondary",
          size: "sm",
          text: intl2.string(_modDef4133.BGF8VT),
          accessibilityLabel: intl3.formatToPlainString(_modDef4133["3gKG2j"], obj3),
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
