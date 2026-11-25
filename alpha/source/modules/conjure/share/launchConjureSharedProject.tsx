// Module ID: 12322
// Function ID: 12323
// Name: launchConjureSharedProject
// Dependencies: [10061, 2]
// Exports: default

// Module 12322 (launchConjureSharedProject)
import openFrameDefault from "openFrame" /* 10061 */;
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
