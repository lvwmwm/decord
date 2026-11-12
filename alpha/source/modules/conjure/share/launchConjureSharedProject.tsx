// Module ID: 13676
// Function ID: 13677
// Name: launchConjureSharedProject
// Dependencies: [12661, 2]
// Exports: default

// Module 13676 (launchConjureSharedProject)
import openFrameDefault from "openFrame" /* 12661 */;
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
