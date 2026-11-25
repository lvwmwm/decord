// Module ID: 12101
// Function ID: 12102
// Name: handleAcceptEventInstantInvite
// Dependencies: [5744, 5743, 7785, 8431, 12102, 2]
// Exports: default

// Module 12101 (handleAcceptEventInstantInvite)
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 7785 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 5744 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx");

export default function handleAcceptEventInstantInvite(code) {
  function callback() {
    const obj = code(dependencyMap[3]);
    const result = obj.transitionToEventDetailsFromInvite(guildScheduledEvent);
  }
  let obj = code(5743);
  const tmp = code;
  if (obj.isGuildScheduledEventInviteEmbed(code)) {
    code = code.code;
    if (null != code) {
      const guild_scheduled_event = code.guild_scheduled_event;
      let id;
      const getGuildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent;
      if (guild_scheduled_event != null) {
        id = guild_scheduled_event.id;
      }
      const guildScheduledEvent = getGuildScheduledEvent(id);
      if (null != guildScheduledEvent) {
        function acceptInvite() {
          let obj = InstantInviteActionCreatorsDefault;
          const obj2 = { inviteKey: code, context: { location: "Guild Scheduled Event Invite Button Embed" }, callback };
          return obj.acceptInvite(obj2);
        }
        let obj2 = { onConfirm: acceptInvite };
        const tmpResult = tmp(12102);
        if (!tmpResult.handleNSFWGuildInvite(code, obj2)) {
          const obj3 = { inviteKey: code, context: { location: "Guild Scheduled Event Invite Button Embed" }, callback };
          const obj4 = guildScheduledEvent(7785);
          obj4.acceptInvite(obj3);
        }
      }
    }
  }
};
