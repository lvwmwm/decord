// Module ID: 16543
// Function ID: 128884
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1908, 1194, 1917, 10470, 653, 670, 4315, 1360, 11047, 16151, 5078, 2]

// Module 16543 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import AutomaticLifecycleManager from "AutomaticLifecycleManager";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";
import { MessageFlags } from "ME";
import tmp3 from "AutomaticLifecycleManager";
import set from "_possibleConstructorReturn";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function resolveMediaPostEmbeds(embeds) {
  let closure_0 = embeds;
  embeds = embeds.embeds;
  let found;
  if (null != embeds) {
    found = embeds.filter((type) => type.type === embeds(outer1_2[10]).MessageEmbedTypes.POST_PREVIEW);
  }
  let tmp2 = null != found;
  if (tmp2) {
    tmp2 = 0 !== found.length;
  }
  if (tmp2) {
    const item = found.forEach((url) => {
      if (null != url.url) {
        const mediaPostEmbedChannelPath = embeds(outer1_2[11]).getMediaPostEmbedChannelPath(url.url);
        if (null != mediaPostEmbedChannelPath) {
          let threadId;
          if (null != mediaPostEmbedChannelPath) {
            threadId = mediaPostEmbedChannelPath.threadId;
          }
          if (null != threadId) {
            let channelId;
            if (null != mediaPostEmbedChannelPath) {
              channelId = mediaPostEmbedChannelPath.channelId;
            }
            if (null != channelId) {
              if (outer1_11.getEmbedFetchState(mediaPostEmbedChannelPath.threadId) === outer1_12.NOT_FETCHED) {
                if (!outer1_14.has(mediaPostEmbedChannelPath.threadId)) {
                  outer1_14.add(mediaPostEmbedChannelPath.threadId);
                  let guildId;
                  const id = outer1_9.getId();
                  if (null != mediaPostEmbedChannelPath) {
                    guildId = mediaPostEmbedChannelPath.guildId;
                  }
                  const isMemberResult = outer1_10.isMember(guildId, id);
                  const isChannelGatedResult = outer1_8.isChannelGated(mediaPostEmbedChannelPath.guildId, mediaPostEmbedChannelPath.channelId);
                  const flags = embeds.flags;
                  let num2 = 0;
                  if (null != flags) {
                    num2 = flags;
                  }
                  let tmp17 = isMemberResult;
                  const obj = embeds(outer1_2[12]);
                  if (isMemberResult) {
                    tmp17 = false === isChannelGatedResult;
                  }
                  if (!tmp17) {
                    tmp17 = !isMemberResult && hasFlagResult;
                    const tmp18 = !isMemberResult && hasFlagResult;
                  }
                  if (!tmp17) {
                    const mediaPostEmbed = embeds(outer1_2[13]).fetchMediaPostEmbed(mediaPostEmbedChannelPath.threadId);
                    const obj2 = embeds(outer1_2[13]);
                  }
                  hasFlagResult = embeds(outer1_2[12]).hasFlag(num2, outer1_13.IS_CROSSPOST);
                }
              }
            }
          }
        }
        const obj3 = embeds(outer1_2[11]);
      }
    });
  }
}
let set = new Set();
tmp3 = new tmp3();
let result = set.fileFinishedImporting("modules/media_channel/MediaPostEmbedManager.tsx");

export default tmp3;
