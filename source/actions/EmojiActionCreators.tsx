// Module ID: 9427
// Function ID: 73411
// Name: _updateEmoji
// Dependencies: [5, 4991, 4808, 4469, 653, 662, 1331, 1313, 686, 507, 7941, 3976, 1212, 4030, 3771, 1327, 4998, 22, 4470, 2]
// Exports: deleteEmoji, favoriteEmoji, fetchEmoji, setDiversityColor, unfavoriteEmoji, updateEmoji, uploadEmoji

// Module 9427 (_updateEmoji)
import closure_3 from "MAX_FAVORITES";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { Endpoints } from "ME";
import MAX_FAVORITES from "MAX_FAVORITES";

let closure_8;
let closure_9;
let require = arg1;
function _updateEmoji() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function dedupeFavoriteEmojis(arr) {
  if (obj.totalUnavailableGuilds > 0) {
    return arr;
  } else if (connected.isConnected()) {
    const mapped = arr.map((emojiName) => {
      let customEmojiById = outer1_4.getCustomEmojiById(emojiName);
      if (null == customEmojiById) {
        customEmojiById = outer1_1(outer1_2[14]).getByName(emojiName);
        const obj = outer1_1(outer1_2[14]);
      }
      return customEmojiById;
    });
    const found = mapped.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
    obj = importDefault(4998)(found);
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
      const result = importDefault(3771).convertSurrogateToBase(id.surrogates);
      if (null != result) {
        name = result.name;
      }
      const obj = importDefault(3771);
    }
    if (null == name) {
      name = id.name;
    }
    tmp = name;
  }
  return tmp;
}
({ MAX_FAVORITES: closure_8, UserSettingsDelay: closure_9 } = MAX_FAVORITES);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/EmojiActionCreators.tsx");

export const setDiversityColor = function setDiversityColor(arg0) {
  const _require = arg0;
  const PreloadedUserSettingsActionCreators = _require(1331).PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("textAndImages", (diversitySurrogate) => {
    const StringValue = callback(outer1_2[7]).StringValue;
    diversitySurrogate.diversitySurrogate = StringValue.create();
    diversitySurrogate.diversitySurrogate.value = callback;
  }, constants.FREQUENT_USER_ACTION);
};
export const fetchEmoji = function fetchEmoji(guildId) {
  const _require = guildId;
  let obj = importDefault(686);
  obj = { type: "EMOJI_FETCH", guildId };
  obj.dispatch(obj);
  const HTTP = _require(507).HTTP;
  obj = { url: Endpoints.GUILD_EMOJIS(guildId), oldFormErrors: true, rejectWithError: true };
  const value = HTTP.get(obj);
  value.then((body) => {
    let obj = outer1_1(outer1_2[8]);
    obj = { type: "EMOJI_FETCH_SUCCESS", guildId: closure_0, emojis: body.body };
    return obj.dispatch(obj);
  }, () => {
    let obj = outer1_1(outer1_2[8]);
    obj = { type: "EMOJI_FETCH_FAILURE", guildId: closure_0 };
    return obj.dispatch(obj);
  });
};
export const uploadEmoji = function uploadEmoji(guildId) {
  let image;
  let name;
  let originalMd5;
  let roles;
  guildId = guildId.guildId;
  const analyticsLocation = guildId.analyticsLocation;
  ({ image, name, roles, originalMd5 } = guildId);
  let obj = importDefault(686);
  obj.dispatch({ type: "EMOJI_UPLOAD_START", guildId });
  const HTTP = guildId(507).HTTP;
  obj = { url: Endpoints.GUILD_EMOJIS(guildId), body: { image, name, roles }, headers: importDefault(7941).buildHeadersForMd5(originalMd5) };
  obj = {};
  let page;
  if (null != analyticsLocation) {
    page = analyticsLocation.page;
  }
  obj.client_event_source = page;
  obj.context = obj;
  obj.oldFormErrors = true;
  const obj3 = importDefault(7941);
  obj.rejectWithError = guildId(507).rejectWithMigratedError();
  const obj5 = guildId(507);
  return HTTP.post(obj).then((body) => {
    let obj = outer1_1(outer1_2[8]);
    obj = { type: "EMOJI_UPLOAD_STOP", guildId };
    obj.dispatch(obj);
    return body.body;
  }, (arg0) => {
    let obj = outer1_1(outer1_2[8]);
    obj = { type: "EMOJI_UPLOAD_STOP", guildId };
    obj.dispatch(obj);
    return Promise.reject(arg0);
  });
};
export const deleteEmoji = function deleteEmoji(closure_1, id) {
  let obj = importDefault(686);
  obj = { type: "EMOJI_DELETE", guildId: closure_1, emojiId: id };
  obj.dispatch(obj);
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: Endpoints.GUILD_EMOJI(closure_1, id) };
  let tmp2;
  if (null != arg2) {
    const obj1 = { replaced_by: arg2 };
    tmp2 = obj1;
  }
  obj.body = tmp2;
  obj.oldFormErrors = true;
  obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
  const obj5 = require(507) /* _isNativeReflectConstruct */;
  return HTTP.del(obj).then(() => {
    const AccessibilityAnnouncer = outer1_0(outer1_2[11]).AccessibilityAnnouncer;
    const intl = outer1_0(outer1_2[12]).intl;
    AccessibilityAnnouncer.announce(intl.string(outer1_0(outer1_2[12]).t.L3UUha));
  });
};
export const updateEmoji = function updateEmoji(arg0) {
  return _updateEmoji(...arguments);
};
export const favoriteEmoji = function favoriteEmoji(customEmojiFromJoinedGuild) {
  const tmp = getFavoriteEmojiNameOrId(customEmojiFromJoinedGuild);
  const require = tmp;
  if (null != tmp) {
    const FrecencyUserSettingsActionCreators = require(1331) /* _createForOfIteratorHelperLoose */.FrecencyUserSettingsActionCreators;
    FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", (emojis) => {
      emojis.emojis = outer1_11(emojis.emojis);
      let obj = outer1_1(outer1_2[17]);
      if (obj.size(emojis.emojis) >= outer1_8) {
        obj = {};
        const intl = tmp(outer1_2[12]).intl;
        obj.title = intl.string(tmp(outer1_2[12]).t["+XYXtZ"]);
        const intl2 = tmp(outer1_2[12]).intl;
        obj = { count: outer1_8 };
        obj.body = intl2.formatToPlainString(tmp(outer1_2[12]).t.JaIyFi, obj);
        outer1_1(outer1_2[18]).show(obj);
        let flag = false;
        const obj2 = outer1_1(outer1_2[18]);
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
  const require = tmp;
  if (null != tmp) {
    const FrecencyUserSettingsActionCreators = require(1331) /* _createForOfIteratorHelperLoose */.FrecencyUserSettingsActionCreators;
    FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", (emojis) => {
      emojis.emojis = outer1_11(emojis.emojis);
      emojis = emojis.emojis;
      if (emojis.includes(closure_0)) {
        emojis = emojis.emojis;
        emojis.emojis = emojis.filter((arg0) => outer1_0 !== arg0);
      } else {
        return false;
      }
    }, constants.INFREQUENT_USER_ACTION);
  }
};
