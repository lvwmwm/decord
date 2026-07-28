// Module ID: 12794
// Function ID: 99522
// Name: parseParticipant
// Dependencies: [12795, 1212, 2911, 2]
// Exports: getHavenSoundControlName, parseRoom

// Module 12794 (parseParticipant)
function parseParticipant(userId) {
  return { userId: userId.user_id, position: userId.position, avatar: userId.avatar };
}
function parseSeat(id) {
  return { id: id.id, claimedBy: id.claimed_by };
}
const result = require("messagesProxy").fileFinishedImporting("modules/haven/HavenUtils.tsx");

export { parseParticipant };
export { parseSeat };
export const parseRoom = function parseRoom(roomId) {
  const participants = roomId.participants;
  const seats = roomId.seats;
  return { roomId: roomId.room_id, participants: participants.map(parseParticipant), seats: seats.map(parseSeat) };
};
export const getHavenSoundControlName = function getHavenSoundControlName(arg0) {
  if (require(12795) /* HavenGenres */.HavenSoundKeys.RADIO === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(importDefault(2911).AjiGKB);
  } else if (require(12795) /* HavenGenres */.HavenSoundKeys.ENVIRONMENT === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(importDefault(2911).YEYIbI);
  } else if (require(12795) /* HavenGenres */.HavenSoundKeys.CAMPFIRE === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2911)["Vk9+Ez"]);
  } else {
    return "";
  }
};
