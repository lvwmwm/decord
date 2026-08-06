// Module ID: 10995
// Function ID: 10996
// Name: handleAcceptEventInstantInvite
// Dependencies: [6906, 8602, 7116, 7679, 8884, 2]
// Exports: default

// Module 10995 (handleAcceptEventInstantInvite)
import scheduledEventSort from "scheduledEventSort";

const require = arg1;
let result = require("InviteTypes").fileFinishedImporting("modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx");

export default function handleAcceptEventInstantInvite(code) {
  let obj = guildScheduledEvent(8602);
  if (!obj.handleNSFWGuildInvite(code)) {
    if (tmpResult.isGuildScheduledEventInviteEmbed(code)) {
      if (null != code.code) {
        const guild_scheduled_event = code.guild_scheduled_event;
        let id;
        if (guild_scheduled_event != null) {
          id = guild_scheduled_event.id;
        }
        guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(id);
        if (null != guildScheduledEvent) {
          obj = { inviteKey: null, context: null, callback: null };
          obj[0] = code.code;
          obj[1] = { location: "Guild Scheduled Event Invite Button Embed" };
          obj[2] = function callback() {
            const result = guildScheduledEvent(outer1_2[4]).transitionToEventDetailsFromInvite(guildScheduledEvent);
          };
          importDefault(7679).acceptInvite(obj);
          const obj3 = importDefault(7679);
        }
      }
    }
    tmpResult = guildScheduledEvent(7116);
  }
};
