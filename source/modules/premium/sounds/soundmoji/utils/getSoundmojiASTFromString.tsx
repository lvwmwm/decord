// Module ID: 4577
// Function ID: 40123
// Name: getSoundmojiFromMessage
// Dependencies: [4578, 4349, 653, 4582, 4583, 4584, 4586, 1392, 2]
// Exports: default

// Module 4577 (getSoundmojiFromMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { MessageStates } from "ME";

const require = arg1;
function getSoundmojiFromMessage(guildId, channelId, messageId, soundId, soundboardSounds) {
  if (obj.getSoundmojiRenderingExperiment({ location: "getSoundmojiASTFromString" })) {
    soundById = soundById.getSoundById(soundId);
    const tmp6 = importDefault(4583)(soundById, guildId, channelId);
    if (null != messageId) {
      if (null != channelId) {
        const tmp15 = importDefault(4584)(channelId, messageId, soundId, soundboardSounds);
        if (tmp6) {
          if (null == tmp15) {
            message = message.getMessage(channelId, messageId);
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
const result = require("ME").fileFinishedImporting("modules/premium/sounds/soundmoji/utils/getSoundmojiASTFromString.tsx");

export default function getSoundmojiASTFromString(soundId, guildId) {
  const tmp3 = getSoundmojiFromMessage(guildId.guildId, guildId.channelId, guildId.messageId, soundId[2], guildId.soundboardSounds);
  if (null == tmp3) {
    let obj = { type: "text", content: importDefault(4586)(tmp, tmp2) };
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
      obj = { id: null, animated: false, size: 16 };
      let emojiId2;
      if (null != tmp3) {
        emojiId2 = tmp3.emojiId;
      }
      obj.id = emojiId2;
      emojiURL = require(1392) /* getAvatarURL */.getEmojiURL(obj);
      const obj2 = require(1392) /* getAvatarURL */;
    }
    obj.emojiSrc = emojiURL;
    return obj;
  }
};
export const soundmojiRawFormatRegex = /^<sound:(\d+):(\d+)>/;
export { getSoundmojiFromMessage };
