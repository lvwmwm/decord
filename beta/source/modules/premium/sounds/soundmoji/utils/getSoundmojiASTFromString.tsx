// Module ID: 6222
// Function ID: 6223
// Name: getSoundmojiASTFromString
// Dependencies: [6223, 6226, 1072, 13691, 7628, 15998, 15999, 1411, 2]
// Exports: default, getSoundmojiFromMessage

// Module 6222 (getSoundmojiASTFromString)
import Constants from "Constants" /* 1072 */;
import AvatarUtils from "AvatarUtils" /* 1411 */;
import isSoundValidDefault from "isSoundValid" /* 7628 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 13691 */;
import getSoundStringDefault from "getSoundString" /* 15999 */;
import SoundboardStore from "SoundboardStore" /* 6223 */;
import MessageStore from "MessageStore" /* 6226 */;
import size from "module_2" /* 2 */;

const MessageStates = Constants.MessageStates;
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/utils/getSoundmojiASTFromString.tsx");

export default function getSoundmojiASTFromString(soundId, guildId) {
  let channelId;
  let emojiId;
  let emojiName;
  let emojiURL;
  let messageId;
  let soundboardSounds;
  ({ channelId, messageId, soundboardSounds } = guildId);
  guildId = guildId.guildId;
  let tmp5;
  const obj = SoundmojiRenderingExperiment;
  if (obj.getSoundmojiRenderingExperiment({ location: "getSoundmojiASTFromString" })) {
    const soundById = SoundboardStore.getSoundById(tmp2);
    const tmp9 = isSoundValidDefault(soundById, guildId, channelId);
    const tmp8 = importDefault;
    if (null != messageId) {
      if (null != channelId) {
        const tmp16 = tmp8(15998)(channelId, messageId, soundId[2], soundboardSounds);
        tmp5 = tmp16;
        if (tmp9) {
          tmp5 = tmp16;
          if (null == tmp16) {
            const message = MessageStore.getMessage(channelId, messageId);
            let state;
            if (message != null) {
              state = message.state;
            }
            tmp5 = tmp16;
            if (state !== MessageStates.SENT) {
              tmp5 = soundById;
            }
          }
        }
      }
    }
    if (tmp9) {
      let tmp11;
      if (null != soundById) {
        tmp11 = soundById;
      }
      tmp5 = tmp11;
    }
  }
  if (null == tmp5) {
    const obj3 = { type: "text", content: getSoundStringDefault(soundId[1], soundId[2]) };
    return obj3;
  } else {
    let name;
    if (tmp5 != null) {
      name = tmp5.name;
    }
    if (name == null) {
      name = tmp2;
    }
    const obj4 = { type: "soundboard", soundId: soundId[2], guildId: soundId[1], messageId: null, channelId: null, content: name, emojiId, emojiName, emojiSrc: emojiURL };
    ({ messageId: obj2.messageId, channelId: obj2.channelId } = guildId);
    emojiId = undefined;
    if (tmp5 != null) {
      emojiId = tmp5.emojiId;
    }
    emojiName = undefined;
    if (tmp5 != null) {
      emojiName = tmp5.emojiName;
    }
    let emojiId1;
    if (tmp5 != null) {
      emojiId1 = tmp5.emojiId;
    }
    emojiURL = undefined;
    if (null != emojiId1) {
      let emojiId2;
      const getEmojiURL = tmp3(1411).getEmojiURL;
      AvatarUtils;
      if (tmp5 != null) {
        emojiId2 = tmp5.emojiId;
      }
      const obj7 = { id: emojiId2, animated: false, size: 16 };
      emojiURL = getEmojiURL(obj7);
    }
    return obj4;
  }
};
export const soundmojiRawFormatRegex = /^<sound:(\d+):(\d+)>/;
export function getSoundmojiFromMessage(guildId, channelId, messageId, soundId, arg4) {
  const obj = SoundmojiRenderingExperiment;
  if (obj.getSoundmojiRenderingExperiment({ location: "getSoundmojiASTFromString" })) {
    const soundById = SoundboardStore.getSoundById(soundId);
    const tmp9 = isSoundValidDefault(soundById, guildId, channelId);
    const tmp8 = importDefault;
    if (null != messageId) {
      if (null != channelId) {
        const tmp16 = tmp8(15998)(channelId, messageId, soundId, arg4);
        if (tmp9) {
          if (null == tmp16) {
            const message = MessageStore.getMessage(channelId, messageId);
            let state;
            if (message != null) {
              state = message.state;
            }
            if (state !== MessageStates.SENT) {
              return soundById;
            }
          }
        }
        return tmp16;
      }
    }
    if (tmp9) {
      let tmp11;
      if (null != soundById) {
        tmp11 = soundById;
      }
      return tmp11;
    }
  }
}
