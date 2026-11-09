// Module ID: 10248
// Function ID: 10249
// Name: handleAcceptEventInstantInvite
// Dependencies: [6910, 7955, 9025, 9064, 10249, 2]
// Exports: default

// Module 10248 (handleAcceptEventInstantInvite)
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 9025 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6910 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx");

export default function handleAcceptEventInstantInvite(code) {
  function callback() {
    const obj = code(dependencyMap[3]);
    const result = obj.transitionToEventDetailsFromInvite(guildScheduledEvent);
  }
  let obj = code(7955);
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
        const tmpResult = tmp(10249);
        if (!tmpResult.handleNSFWGuildInvite(code, obj2)) {
          const obj3 = { inviteKey: code, context: { location: "Guild Scheduled Event Invite Button Embed" }, callback };
          const obj4 = guildScheduledEvent(9025);
          obj4.acceptInvite(obj3);
        }
      }
    }
  }
};
