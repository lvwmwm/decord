// Module ID: 10983
// Function ID: 10984
// Name: getChannelAndRecipientsFromInvite
// Dependencies: [1395, 2]
// Exports: default

// Module 10983 (getChannelAndRecipientsFromInvite)
import { createChannelRecordFromInvite as closure_0 } from "createChannelRecord";

const result = require("set").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/getChannelAndRecipientsFromInvite.tsx");

export default function getChannelAndRecipientsFromInvite(channel) {
  if (null != channel.channel) {
    if (null != channel.channel.recipients) {
      const recipients = channel.channel.recipients;
      let substr = recipients.slice();
    }
    let obj = { recipients_: null, channel: null };
    obj[0] = substr;
    let tmp = null;
    if (null != channel.channel) {
      obj = {};
      const merged = Object.assign(channel.channel);
      obj.recipients = substr;
      tmp = callback(obj);
    }
    obj[1] = tmp;
    return obj;
  }
  substr = [];
};
