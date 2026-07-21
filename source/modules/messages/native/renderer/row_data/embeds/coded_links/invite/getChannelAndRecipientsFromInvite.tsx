// Module ID: 9472
// Function ID: 73792
// Name: getChannelAndRecipientsFromInvite
// Dependencies: []
// Exports: default

// Module 9472 (getChannelAndRecipientsFromInvite)
let closure_0 = require(dependencyMap[0]).createChannelRecordFromInvite;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/getChannelAndRecipientsFromInvite.tsx");

export default function getChannelAndRecipientsFromInvite(channel) {
  if (null != channel.channel) {
    if (null != channel.channel.recipients) {
      const recipients = channel.channel.recipients;
      let substr = recipients.slice();
    }
    let obj = { recipients_: substr };
    let tmp = null;
    if (null != channel.channel) {
      obj = {};
      const merged = Object.assign(channel.channel);
      obj["recipients"] = substr;
      tmp = callback(obj);
    }
    obj.channel = tmp;
    return obj;
  }
  substr = [];
};
