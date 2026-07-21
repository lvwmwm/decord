// Module ID: 4573
// Function ID: 40069
// Dependencies: []

// Module 4573
let closure_0 = /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/;
let obj = {};
obj = {
  order: importDefault(dependencyMap[0]).defaultRules.url.order - 0.5,
  requiredFirstCharacters: [],
  match(arg0) {
    return regex.exec(arg0);
  },
  parse(attachmentUrl) {
    const items = [{ type: "text", content: attachmentUrl[1] }];
    return { type: "attachmentLink", content: items, attachmentUrl: attachmentUrl[0], attachmentName: attachmentUrl[1] };
  }
};
obj.attachmentLink = obj;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/markup/MarkupAttachmentLinkRule.tsx");

export default obj;
