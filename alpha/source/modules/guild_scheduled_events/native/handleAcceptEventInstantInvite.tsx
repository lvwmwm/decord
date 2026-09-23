// Module ID: 11946
// Function ID: 11947
// Name: handleAcceptEventInstantInvite
// Dependencies: [7854, 8062, 8724, 9862, 10117, 2]
// Exports: default

// Module 11946 (handleAcceptEventInstantInvite)
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8724 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7854 */;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx");

export default function handleAcceptEventInstantInvite(code) {
  if (obj.isGuildScheduledEventInviteEmbed(code)) {
    code = code.code;
    if (null != code) {
      const guild_scheduled_event = code.guild_scheduled_event;
      let id;
      if (guild_scheduled_event != null) {
        id = guild_scheduled_event.id;
      }
      const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(id);
      if (null != guildScheduledEvent) {
        function acceptInvite() {
          return InstantInviteActionCreatorsDefault.acceptInvite({
            inviteKey: code,
            context: { location: "Guild Scheduled Event Invite Button Embed" },
            callback() {
              const result = code(dependencyMap[3]).transitionToEventDetailsFromInvite(guildScheduledEvent);
            }
          });
        }
        const obj2 = { onConfirm: acceptInvite };
        if (!tmpResult.handleNSFWGuildInvite(code, obj2)) {
          const obj3 = {
            inviteKey: code,
            context: { location: "Guild Scheduled Event Invite Button Embed" },
            callback() {
                      const result = code(dependencyMap[3]).transitionToEventDetailsFromInvite(guildScheduledEvent);
                    }
          };
          guildScheduledEvent(8724).acceptInvite(obj3);
          const obj4 = guildScheduledEvent(8724);
        }
        tmpResult = code(10117);
      }
    }
  }
};
