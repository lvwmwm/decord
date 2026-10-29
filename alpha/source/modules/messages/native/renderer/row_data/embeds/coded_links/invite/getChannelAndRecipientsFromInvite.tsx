// Module ID: 10071
// Function ID: 10072
// Name: getChannelAndRecipientsFromInvite
// Dependencies: [4861, 2]
// Exports: default

// Module 10071 (getChannelAndRecipientsFromInvite)
import ChannelRecord from "ChannelRecord" /* 4861 */;
import size from "module_2" /* 2 */;

let closure_0 = ChannelRecord.createChannelRecordFromInvite;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/getChannelAndRecipientsFromInvite.tsx");

export default function getChannelAndRecipientsFromInvite(channel) {
  let tmp;
  if (null != channel.channel) {
    let substr;
    if (null != channel.channel.recipients) {
      const recipients = channel.channel.recipients;
      substr = recipients.slice();
    }
    const obj = { recipients_: substr, channel: tmp };
    tmp = null;
    if (null != channel.channel) {
      const obj2 = { recipients: substr };
      const merged = Object.assign(channel.channel);
      tmp = closure_0(obj2);
    }
    return obj;
  }
  substr = [];
};
