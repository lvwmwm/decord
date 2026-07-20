// Module ID: 9379
// Function ID: 73123
// Name: _updateEmoji
// Dependencies: []
// Exports: deleteEmoji, favoriteEmoji, fetchEmoji, setDiversityColor, unfavoriteEmoji, updateEmoji, uploadEmoji

// Module 9379 (_updateEmoji)
function _updateEmoji() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _updateEmoji = obj;
  return obj(...arguments);
}
function dedupeFavoriteEmojis(arr) {
  if (obj.totalUnavailableGuilds > 0) {
    return arr;
  } else if (connected.isConnected()) {
    const mapped = arr.map((emojiName) => {
      let customEmojiById = customEmojiById.getCustomEmojiById(emojiName);
      if (null == customEmojiById) {
        customEmojiById = callback(closure_2[14]).getByName(emojiName);
        const obj = callback(closure_2[14]);
      }
      return customEmojiById;
    });
    const found = mapped.filter(arg1(dependencyMap[15]).isNotNullish);
    const obj = importDefault(dependencyMap[16])(found);
    const items = [];
    HermesBuiltin.arraySpread(obj.keys(), 0);
    return items;
  } else {
    return arr;
  }
}
function getFavoriteEmojiNameOrId(id) {
  let tmp = null;
  if (null != id) {
    let name = id.id;
    if (null == name) {
      name = undefined;
      const result = importDefault(dependencyMap[14]).convertSurrogateToBase(id.surrogates);
      if (null != result) {
        name = result.name;
      }
      const obj = importDefault(dependencyMap[14]);
    }
    if (null == name) {
      name = id.name;
    }
    tmp = name;
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const Endpoints = arg1(dependencyMap[4]).Endpoints;
({ MAX_FAVORITES: closure_8, UserSettingsDelay: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("actions/EmojiActionCreators.tsx");

export const setDiversityColor = function setDiversityColor(arg0) {
  const arg1 = arg0;
  const PreloadedUserSettingsActionCreators = arg1(dependencyMap[6]).PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("textAndImages", (diversitySurrogate) => {
    const StringValue = diversitySurrogate(closure_2[7]).StringValue;
    diversitySurrogate.diversitySurrogate = StringValue.create();
    diversitySurrogate.diversitySurrogate.value = diversitySurrogate;
  }, constants.FREQUENT_USER_ACTION);
};
export const fetchEmoji = function fetchEmoji(guildId) {
  const arg1 = guildId;
  let obj = importDefault(dependencyMap[8]);
  obj = { type: "EMOJI_FETCH", guildId };
  obj.dispatch(obj);
  const HTTP = arg1(dependencyMap[9]).HTTP;
  obj = { CONVERSATIONS: null, replace: null, push: null, url: Endpoints.GUILD_EMOJIS(guildId) };
  const value = HTTP.get(obj);
  value.then((body) => {
    let obj = callback(closure_2[8]);
    obj = { type: "EMOJI_FETCH_SUCCESS", guildId: body, emojis: body.body };
    return obj.dispatch(obj);
  }, () => {
    let obj = callback(closure_2[8]);
    obj = { type: "EMOJI_FETCH_FAILURE", guildId: arg0 };
    return obj.dispatch(obj);
  });
};
export const uploadEmoji = function uploadEmoji(guildId) {
  let image;
  let name;
  let originalMd5;
  let roles;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const analyticsLocation = guildId.analyticsLocation;
  ({ image, name, roles, originalMd5 } = guildId);
  let obj = importDefault(dependencyMap[8]);
  obj.dispatch({ type: "EMOJI_UPLOAD_START", guildId });
  const HTTP = arg1(dependencyMap[9]).HTTP;
  obj = { url: Endpoints.GUILD_EMOJIS(guildId), body: { image, name, roles }, headers: importDefault(dependencyMap[10]).buildHeadersForMd5(originalMd5) };
  obj = {};
  let page;
  if (null != analyticsLocation) {
    page = analyticsLocation.page;
  }
  obj.client_event_source = page;
  obj.context = obj;
  obj.oldFormErrors = true;
  const obj3 = importDefault(dependencyMap[10]);
  obj.rejectWithError = arg1(dependencyMap[9]).rejectWithMigratedError();
  const obj5 = arg1(dependencyMap[9]);
  return HTTP.post(obj).then((body) => {
    let obj = callback(closure_2[8]);
    obj = { type: "EMOJI_UPLOAD_STOP", guildId };
    obj.dispatch(obj);
    return body.body;
  }, (arg0) => {
    let obj = callback(closure_2[8]);
    obj = { type: "EMOJI_UPLOAD_STOP", guildId };
    obj.dispatch(obj);
    return Promise.reject(arg0);
  });
};
export const deleteEmoji = function deleteEmoji(closure_1, id) {
  let obj = importDefault(dependencyMap[8]);
  obj = { type: "EMOJI_DELETE", guildId: closure_1, emojiId: id };
  obj.dispatch(obj);
  const HTTP = id(dependencyMap[9]).HTTP;
  obj = { url: Endpoints.GUILD_EMOJI(closure_1, id) };
  let tmp2;
  if (null != arg2) {
    const obj1 = { replaced_by: arg2 };
    tmp2 = obj1;
  }
  obj.body = tmp2;
  obj.oldFormErrors = true;
  obj.rejectWithError = id(dependencyMap[9]).rejectWithMigratedError();
  const obj5 = id(dependencyMap[9]);
  return HTTP.del(obj).then(() => {
    const AccessibilityAnnouncer = callback(closure_2[11]).AccessibilityAnnouncer;
    const intl = callback(closure_2[12]).intl;
    AccessibilityAnnouncer.announce(intl.string(callback(closure_2[12]).t.L3UUha));
  });
};
export const updateEmoji = function updateEmoji(arg0) {
  return _updateEmoji(...arguments);
};
export const favoriteEmoji = function favoriteEmoji(customEmojiFromJoinedGuild) {
  const tmp = getFavoriteEmojiNameOrId(customEmojiFromJoinedGuild);
  const arg1 = tmp;
  if (null != tmp) {
    const FrecencyUserSettingsActionCreators = arg1(dependencyMap[6]).FrecencyUserSettingsActionCreators;
    FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", (emojis) => {
      emojis.emojis = callback2(emojis.emojis);
      let obj = callback(closure_2[17]);
      if (obj.size(emojis.emojis) >= closure_8) {
        obj = {};
        const intl = tmp(closure_2[12]).intl;
        obj.title = intl.string(tmp(closure_2[12]).t.+XYXtZ);
        const intl2 = tmp(closure_2[12]).intl;
        obj = { count: closure_8 };
        obj.body = intl2.formatToPlainString(tmp(closure_2[12]).t.JaIyFi, obj);
        callback(closure_2[18]).show(obj);
        let flag = false;
        const obj2 = callback(closure_2[18]);
      } else {
        emojis = emojis.emojis;
        flag = !emojis.includes(tmp);
        if (flag) {
          emojis = emojis.emojis;
          emojis.push(tmp);
        }
      }
      return flag;
    }, constants.INFREQUENT_USER_ACTION);
  }
};
export const unfavoriteEmoji = function unfavoriteEmoji(customEmojiFromJoinedGuild) {
  const tmp = getFavoriteEmojiNameOrId(customEmojiFromJoinedGuild);
  const arg1 = tmp;
  if (null != tmp) {
    const FrecencyUserSettingsActionCreators = arg1(dependencyMap[6]).FrecencyUserSettingsActionCreators;
    FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", (emojis) => {
      emojis.emojis = callback(emojis.emojis);
      emojis = emojis.emojis;
      if (emojis.includes(tmp)) {
        emojis = emojis.emojis;
        emojis.emojis = emojis.filter((arg0) => closure_0 !== arg0);
      } else {
        return false;
      }
    }, constants.INFREQUENT_USER_ACTION);
  }
};
