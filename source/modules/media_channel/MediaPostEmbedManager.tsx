// Module ID: 16371
// Function ID: 126344
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16371 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function resolveMediaPostEmbeds(embeds) {
  const arg1 = embeds;
  embeds = embeds.embeds;
  let found;
  if (null != embeds) {
    found = embeds.filter((type) => type.type === type(closure_2[10]).MessageEmbedTypes.POST_PREVIEW);
  }
  let tmp2 = null != found;
  if (tmp2) {
    tmp2 = 0 !== found.length;
  }
  if (tmp2) {
    const item = found.forEach((url) => {
      if (null != url.url) {
        const mediaPostEmbedChannelPath = url(closure_2[11]).getMediaPostEmbedChannelPath(url.url);
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
              if (embedFetchState.getEmbedFetchState(mediaPostEmbedChannelPath.threadId) === constants.NOT_FETCHED) {
                if (!set.has(mediaPostEmbedChannelPath.threadId)) {
                  set.add(mediaPostEmbedChannelPath.threadId);
                  let guildId;
                  const id = id.getId();
                  if (null != mediaPostEmbedChannelPath) {
                    guildId = mediaPostEmbedChannelPath.guildId;
                  }
                  const isMemberResult = member.isMember(guildId, id);
                  const isChannelGatedResult = channelGated.isChannelGated(mediaPostEmbedChannelPath.guildId, mediaPostEmbedChannelPath.channelId);
                  const flags = url.flags;
                  let num2 = 0;
                  if (null != flags) {
                    num2 = flags;
                  }
                  let tmp17 = isMemberResult;
                  const obj = url(closure_2[12]);
                  if (isMemberResult) {
                    tmp17 = false === isChannelGatedResult;
                  }
                  if (!tmp17) {
                    tmp17 = !isMemberResult && hasFlagResult;
                    const tmp18 = !isMemberResult && hasFlagResult;
                  }
                  if (!tmp17) {
                    const mediaPostEmbed = url(closure_2[13]).fetchMediaPostEmbed(mediaPostEmbedChannelPath.threadId);
                    const obj2 = url(closure_2[13]);
                  }
                  const hasFlagResult = url(closure_2[12]).hasFlag(num2, constants2.IS_CROSSPOST);
                }
              }
            }
          }
        }
        const obj3 = url(closure_2[11]);
      }
    });
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const FetchState = arg1(dependencyMap[8]).FetchState;
const MessageFlags = arg1(dependencyMap[9]).MessageFlags;
const set = new Set();
let tmp3 = (arg0) => {
  class MediaPostEmbedManager {
    constructor() {
      self = this;
      tmp = closure_3(this, MediaPostEmbedManager);
      obj = closure_6(MediaPostEmbedManager);
      tmp2 = closure_5;
      if (closure_15()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, [], closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = { LOAD_THREADS_SUCCESS: tmp2Result.handleLoadThreadsSuccess, LOAD_ARCHIVED_THREADS_SUCCESS: tmp2Result.handleLoadThreadsSuccess, LOAD_FORUM_POSTS: tmp2Result.handleLoadForumPosts };
      obj = {
        onBeforeBatch() {
              return closure_14.clear();
            }
      };
      tmp7 = closure_1(closure_2[14])(tmp2Result, closure_16, obj);
      return tmp2Result;
    }
  }
  const arg1 = MediaPostEmbedManager;
  callback2(MediaPostEmbedManager, arg0);
  let obj = {
    key: "handleLoadThreadsSuccess",
    value(firstMessages) {
      firstMessages = firstMessages.firstMessages;
      if (null == firstMessages) {
        return false;
      } else {
        closure_14.clear();
        if (null != firstMessages) {
          const item = firstMessages.forEach((arg0) => {
            callback(arg0);
          });
        }
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "handleLoadForumPosts",
    value(threads) {
      closure_14.clear();
      const values = Object.values(threads.threads);
      const mapped = values.map((first_message) => {
        first_message = first_message.first_message;
        if (null != first_message) {
          callback(first_message);
        }
        return null != first_message;
      });
    }
  };
  items[1] = obj;
  return callback(MediaPostEmbedManager, items);
}(importDefault(dependencyMap[15]));
tmp3 = new tmp3();
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/media_channel/MediaPostEmbedManager.tsx");

export default tmp3;
