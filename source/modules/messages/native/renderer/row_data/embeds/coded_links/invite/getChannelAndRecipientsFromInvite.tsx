// Module ID: 9480
// Function ID: 73857
// Name: getChannelAndRecipientsFromInvite
// Dependencies: [1352, 2]
// Exports: default

// Module 9480 (getChannelAndRecipientsFromInvite)
import { createChannelRecordFromInvite as closure_0 } from "_callSuper";

const result = require("set").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/getChannelAndRecipientsFromInvite.tsx");

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
