// Module ID: 4572
// Function ID: 40084
// Dependencies: []

// Module 4572
let closure_0 = /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/;
let obj = {};
obj = {
  order: importDefault(dependencyMap[0]).defaultRules.url.order - 0.5,
  requiredFirstCharacters: [78862721847422450000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000],
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
