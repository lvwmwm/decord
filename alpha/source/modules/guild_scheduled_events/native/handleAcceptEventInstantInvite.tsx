// Module ID: 11866
// Function ID: 11867
// Name: handleAcceptEventInstantInvite
// Dependencies: [7768, 10552, 7977, 8649, 9783, 2]
// Exports: default

// Module 11866 (handleAcceptEventInstantInvite)
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8649 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9783 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7768 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx");

export default function handleAcceptEventInstantInvite(code) {
  if (!obj.handleNSFWGuildInvite(code)) {
    if (tmpResult.isGuildScheduledEventInviteEmbed(code)) {
      if (null != code.code) {
        const guild_scheduled_event = code.guild_scheduled_event;
        let id;
        if (guild_scheduled_event != null) {
          id = guild_scheduled_event.id;
        }
        const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(id);
        if (null != guildScheduledEvent) {
          const obj2 = {
            inviteKey: code.code,
            context: { location: "Guild Scheduled Event Invite Button Embed" },
            callback() {
                      const result = GuildScheduledEventModalActionCreators.transitionToEventDetailsFromInvite(guildScheduledEvent);
                    }
          };
          InstantInviteActionCreatorsDefault.acceptInvite(obj2);
        }
      }
    }
    tmpResult = guildScheduledEvent(7977);
  }
};
