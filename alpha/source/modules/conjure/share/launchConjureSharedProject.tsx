// Module ID: 12941
// Function ID: 12942
// Name: launchConjureSharedProject
// Dependencies: [11366, 2]
// Exports: default

// Module 12941 (launchConjureSharedProject)
import openFrameDefault from "openFrame" /* 11366 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/launchConjureSharedProject.tsx");

export default function launchConjureSharedProject(arg0) {
  let applicationId;
  let channelId;
  let guildId;
  ({ applicationId, guildId, channelId } = arg0);
  const obj = { applicationId, channel: null, launch: { entry: "share", sourceChannelId: channelId, sourceGuildId: guildId }, showErrorModal: false };
  return openFrameDefault(obj).launched;
};
