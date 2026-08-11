// Module ID: 13035
// Function ID: 13036
// Name: parseParticipant
// Dependencies: [13036, 1236, 3015, 2]
// Exports: getHavenSoundControlName, parseRoom

// Module 13035 (parseParticipant)
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
  if (require(13036) /* HavenGenres */.HavenSoundKeys.RADIO === arg0) {
    const intl3 = tmp(1236).intl;
    return intl3.string(importDefault(3015).AjiGKB);
  } else if (tmp(13036).HavenSoundKeys.ENVIRONMENT === arg0) {
    const intl2 = tmp(1236).intl;
    return intl2.string(importDefault(3015).YEYIbI);
  } else if (tmp(13036).HavenSoundKeys.CAMPFIRE === arg0) {
    const intl = tmp(1236).intl;
    return intl.string(importDefault(3015)["Vk9+Ez"]);
  } else {
    return "";
  }
};
