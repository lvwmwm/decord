// Module ID: 9577
// Function ID: 9578
// Name: handleAcceptEventInstantInvite
// Dependencies: [6059, 7417, 8472, 8510, 9098, 2]
// Exports: default

// Module 9577 (handleAcceptEventInstantInvite)
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8472 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6059 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx");

export default function handleAcceptEventInstantInvite(code) {
  function callback() {
    const obj = code(dependencyMap[3]);
    const result = obj.transitionToEventDetailsFromInvite(guildScheduledEvent);
  }
  let obj = code(7417);
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
        const tmpResult = tmp(9098);
        if (!tmpResult.handleNSFWGuildInvite(code, obj2)) {
          const obj3 = { inviteKey: code, context: { location: "Guild Scheduled Event Invite Button Embed" }, callback };
          const obj4 = guildScheduledEvent(8472);
          obj4.acceptInvite(obj3);
        }
      }
    }
  }
};
