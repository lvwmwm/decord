// Module ID: 9482
// Function ID: 73910
// Name: handleAcceptEventInstantInvite
// Dependencies: []
// Exports: default

// Module 9482 (handleAcceptEventInstantInvite)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx");

export default function handleAcceptEventInstantInvite(code) {
  let obj = arg1(dependencyMap[1]);
  if (!obj.handleNSFWGuildInvite(code)) {
    if (obj2.isGuildScheduledEventInviteEmbed(code)) {
      if (null != code.code) {
        const guild_scheduled_event = code.guild_scheduled_event;
        let id;
        if (null != guild_scheduled_event) {
          id = guild_scheduled_event.id;
        }
        const guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(id);
        const arg1 = guildScheduledEvent;
        if (null != guildScheduledEvent) {
          obj = { inviteKey: code.code };
          obj = { location: "Guild Scheduled Event Invite Button Embed" };
          obj.context = obj;
          obj.callback = function callback() {
            const result = guildScheduledEvent(closure_2[4]).transitionToEventDetailsFromInvite(guildScheduledEvent);
          };
          importDefault(dependencyMap[3]).acceptInvite(obj);
          const obj3 = importDefault(dependencyMap[3]);
        }
      }
    }
    const obj2 = arg1(dependencyMap[2]);
  }
};
