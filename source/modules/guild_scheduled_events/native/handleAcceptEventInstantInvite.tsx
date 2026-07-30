// Module ID: 9506
// Function ID: 9507
// Name: handleAcceptEventInstantInvite
// Dependencies: [5779, 9354, 6018, 6690, 8226, 2]
// Exports: default

// Module 9506 (handleAcceptEventInstantInvite)
import scheduledEventSort from "scheduledEventSort";

const require = arg1;
let result = require("InviteTypes").fileFinishedImporting("modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx");

export default function handleAcceptEventInstantInvite(code) {
  let obj = guildScheduledEvent(9354);
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
          importDefault(6690).acceptInvite(obj);
          const obj3 = importDefault(6690);
        }
      }
    }
    tmpResult = guildScheduledEvent(6018);
  }
};
