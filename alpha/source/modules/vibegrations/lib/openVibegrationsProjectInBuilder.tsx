// Module ID: 12307
// Function ID: 12308
// Name: openVibegrationsProjectInBuilder
// Dependencies: [12308, 5554, 12309, 2]
// Exports: default

// Module 12307 (openVibegrationsProjectInBuilder)
import VibegrationsActivity from "VibegrationsActivity" /* 12308 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/lib/openVibegrationsProjectInBuilder.tsx");

export default function openVibegrationsProjectInBuilder(id) {
  let result = VibegrationsActivity.vibegrationsProjectGuildId(id);
  if (result == null) {
    result = tmp(5554).resolveVibegrationsWorkspaceGuildId("openVibegrationsProjectInBuilder");
    const tmpResult = tmp(5554);
  }
  let flag = null != result;
  if (flag) {
    const result1 = tmp(12309).openVibegrationsProject(result, id.id);
    flag = true;
    const tmpResult2 = tmp(12309);
  }
  return flag;
};
