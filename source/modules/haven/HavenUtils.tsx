// Module ID: 12688
// Function ID: 98899
// Name: parseParticipant
// Dependencies: [12689, 1212, 2910, 2]
// Exports: getHavenSoundControlName, parseRoom

// Module 12688 (parseParticipant)
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
  if (require(12689) /* HavenGenres */.HavenSoundKeys.RADIO === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(importDefault(2910).AjiGKB);
  } else if (require(12689) /* HavenGenres */.HavenSoundKeys.ENVIRONMENT === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(importDefault(2910).YEYIbI);
  } else if (require(12689) /* HavenGenres */.HavenSoundKeys.CAMPFIRE === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2910)["Vk9+Ez"]);
  } else {
    return "";
  }
};
