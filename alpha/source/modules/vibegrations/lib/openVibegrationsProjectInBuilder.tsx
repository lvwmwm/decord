// Module ID: 12264
// Function ID: 12265
// Name: openVibegrationsProjectInBuilder
// Dependencies: [12265, 6746, 12266, 2]
// Exports: default

// Module 12264 (openVibegrationsProjectInBuilder)
import VibegrationsUtils from "VibegrationsUtils" /* 6746 */;
import VibegrationsActivity from "VibegrationsActivity" /* 12265 */;
import openVibegrationsProject from "openVibegrationsProject" /* 12266 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/lib/openVibegrationsProjectInBuilder.tsx");

export default function openVibegrationsProjectInBuilder(id) {
  const obj = VibegrationsActivity;
  let result = obj.vibegrationsProjectGuildId(id);
  if (result == null) {
    const tmpResult = VibegrationsUtils;
    result = tmpResult.resolveVibegrationsWorkspaceGuildId("openVibegrationsProjectInBuilder");
  }
  let flag = null != result;
  if (flag) {
    const tmpResult2 = openVibegrationsProject;
    const result1 = tmpResult2.openVibegrationsProject(result, id.id);
    flag = true;
  }
  return flag;
};
