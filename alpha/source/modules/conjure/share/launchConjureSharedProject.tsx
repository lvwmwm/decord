// Module ID: 12154
// Function ID: 12155
// Name: launchConjureSharedProject
// Dependencies: [10568, 2]
// Exports: default

// Module 12154 (launchConjureSharedProject)
import openFrameDefault from "openFrame" /* 10568 */;
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
