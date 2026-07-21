// Module ID: 12569
// Function ID: 96715
// Name: parseParticipant
// Dependencies: []
// Exports: getHavenSoundControlName, parseRoom

// Module 12569 (parseParticipant)
function parseParticipant(userId) {
  return { userId: userId.user_id, position: userId.position, avatar: userId.avatar };
}
function parseSeat(id) {
  return { id: id.id, claimedBy: id.claimed_by };
}
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/haven/HavenUtils.tsx");

export { parseParticipant };
export { parseSeat };
export const parseRoom = function parseRoom(roomId) {
  const participants = roomId.participants;
  const seats = roomId.seats;
  return { roomId: roomId.room_id, participants: participants.map(parseParticipant), seats: seats.map(parseSeat) };
};
export const getHavenSoundControlName = function getHavenSoundControlName(arg0) {
  if (require(dependencyMap[0]).HavenSoundKeys.RADIO === arg0) {
    const intl3 = require(dependencyMap[1]).intl;
    return intl3.string(importDefault(dependencyMap[2]).AjiGKB);
  } else if (require(dependencyMap[0]).HavenSoundKeys.ENVIRONMENT === arg0) {
    const intl2 = require(dependencyMap[1]).intl;
    return intl2.string(importDefault(dependencyMap[2]).YEYIbI);
  } else if (require(dependencyMap[0]).HavenSoundKeys.CAMPFIRE === arg0) {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(importDefault(dependencyMap[2]).Vk9+Ez);
  } else {
    return "";
  }
};
