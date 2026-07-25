// Module ID: 9446
// Function ID: 73747
// Name: handleAcceptEventInstantInvite
// Dependencies: [5751, 9290, 5968, 6636, 8167, 2]
// Exports: default

// Module 9446 (handleAcceptEventInstantInvite)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let result = require("isGroupDMInvite").fileFinishedImporting("modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx");

export default function handleAcceptEventInstantInvite(code) {
  let obj = guildScheduledEvent(9290);
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
          importDefault(6636).acceptInvite(obj);
          const obj3 = importDefault(6636);
        }
      }
    }
    obj2 = guildScheduledEvent(5968);
  }
};
