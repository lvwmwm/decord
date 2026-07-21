// Module ID: 4573
// Function ID: 40079
// Name: getSoundmojiFromMessage
// Dependencies: []
// Exports: default

// Module 4573 (getSoundmojiFromMessage)
function getSoundmojiFromMessage(guildId, channelId, messageId, soundId, soundboardSounds) {
  if (obj.getSoundmojiRenderingExperiment({ location: "getSoundmojiASTFromString" })) {
    const soundById = soundById.getSoundById(soundId);
    const tmp6 = importDefault(dependencyMap[4])(soundById, guildId, channelId);
    if (null != messageId) {
      if (null != channelId) {
        const tmp15 = importDefault(dependencyMap[5])(channelId, messageId, soundId, soundboardSounds);
        if (tmp6) {
          if (null == tmp15) {
            const message = message.getMessage(channelId, messageId);
            let state;
            if (null != message) {
              state = message.state;
            }
            if (state !== MessageStates.SENT) {
              return soundById;
            }
          }
        }
        return tmp15;
      }
    }
    if (tmp6) {
      let tmp8;
      if (null != soundById) {
        tmp8 = soundById;
      }
      return tmp8;
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const MessageStates = arg1(dependencyMap[2]).MessageStates;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/premium/sounds/soundmoji/utils/getSoundmojiASTFromString.tsx");

export default function getSoundmojiASTFromString(soundId, guildId) {
  const tmp3 = getSoundmojiFromMessage(guildId.guildId, guildId.channelId, guildId.messageId, soundId[2], guildId.soundboardSounds);
  if (null == tmp3) {
    let obj = { type: "text", content: importDefault(dependencyMap[6])(tmp, tmp2) };
    return obj;
  } else {
    let name;
    if (null != tmp3) {
      name = tmp3.name;
    }
    let tmp5 = tmp2;
    if (null != name) {
      tmp5 = name;
    }
    obj = { type: "soundboard", soundId: tmp2, guildId: tmp };
    ({ messageId: obj.messageId, channelId: obj.channelId } = guildId);
    obj.content = tmp5;
    let emojiId;
    if (null != tmp3) {
      emojiId = tmp3.emojiId;
    }
    obj.emojiId = emojiId;
    let emojiName;
    if (null != tmp3) {
      emojiName = tmp3.emojiName;
    }
    obj.emojiName = emojiName;
    let emojiId1;
    if (null != tmp3) {
      emojiId1 = tmp3.emojiId;
    }
    let emojiURL;
    if (null != emojiId1) {
      obj = {};
      let emojiId2;
      if (null != tmp3) {
        emojiId2 = tmp3.emojiId;
      }
      obj.id = emojiId2;
      emojiURL = guildId(dependencyMap[7]).getEmojiURL(obj);
      const obj2 = guildId(dependencyMap[7]);
    }
    obj.emojiSrc = emojiURL;
    return obj;
  }
};
export const soundmojiRawFormatRegex = /^<sound:(\d+):(\d+)>/;
export { getSoundmojiFromMessage };
