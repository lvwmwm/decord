// Module ID: 12276
// Function ID: 12277
// Name: launchConjureSharedProject
// Dependencies: [10688, 2]
// Exports: default

// Module 12276 (launchConjureSharedProject)
import openFrameDefault from "openFrame" /* 10688 */;
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
