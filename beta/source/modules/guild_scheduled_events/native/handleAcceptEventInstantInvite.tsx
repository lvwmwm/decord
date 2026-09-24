// Module ID: 11773
// Function ID: 11774
// Name: handleAcceptEventInstantInvite
// Dependencies: [7805, 8014, 8686, 9792, 10037, 2]
// Exports: default

// Module 11773 (handleAcceptEventInstantInvite)
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8686 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7805 */;

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
          guildScheduledEvent(8686).acceptInvite(obj3);
          const obj4 = guildScheduledEvent(8686);
        }
        tmpResult = code(10037);
      }
    }
  }
};
