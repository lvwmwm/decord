// Module ID: 9525
// Function ID: 74160
// Name: handleAcceptEventInstantInvite
// Dependencies: [6758, 9384, 6977, 7540, 8409, 2]
// Exports: default

// Module 9525 (handleAcceptEventInstantInvite)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let result = require("isGroupDMInvite").fileFinishedImporting("modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx");

export default function handleAcceptEventInstantInvite(code) {
  let obj = guildScheduledEvent(9384);
  if (!obj.handleNSFWGuildInvite(code)) {
    if (obj2.isGuildScheduledEventInviteEmbed(code)) {
      if (null != code.code) {
        const guild_scheduled_event = code.guild_scheduled_event;
        let id;
        if (null != guild_scheduled_event) {
          id = guild_scheduled_event.id;
        }
        guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(id);
        if (null != guildScheduledEvent) {
          obj = { inviteKey: code.code };
          obj = { location: "Guild Scheduled Event Invite Button Embed" };
          obj.context = obj;
          obj.callback = function callback() {
            const result = guildScheduledEvent(outer1_2[4]).transitionToEventDetailsFromInvite(guildScheduledEvent);
          };
          importDefault(7540).acceptInvite(obj);
          const obj3 = importDefault(7540);
        }
      }
    }
    obj2 = guildScheduledEvent(6977);
  }
};
