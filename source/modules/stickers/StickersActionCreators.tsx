// Module ID: 9637
// Function ID: 75008
// Name: _fetchStickerPack
// Dependencies: [5, 4808, 1921, 4469, 1849, 5035, 653, 662, 4369, 507, 686, 4466, 7941, 1331, 22, 4470, 1212, 2]
// Exports: addStickerPreview, clearStickerPreview, createGuildSticker, deleteGuildSticker, favoriteSticker, fetchGuildStickersWithCreator, fetchSticker, fetchStickerPack, fetchStickerPacks, unfavoriteSticker, updateGuildSticker

// Module 9637 (_fetchStickerPack)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { Endpoints } from "ME";
import MAX_FAVORITES from "MAX_FAVORITES";

let closure_10;
let closure_11;
const require = arg1;
function _fetchStickerPack() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchStickerPacks() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchSticker() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchGuildStickersWithCreator() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _deleteGuildSticker() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _createGuildSticker() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _updateGuildSticker() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function cleanFavoriteStickers(arr) {
  let tmp = arr;
  if (obj.totalUnavailableGuilds <= 0) {
    let found = arr;
    if (connected.isConnected()) {
      found = arr.filter((arg0) => null != outer1_8.getStickerById(arg0));
    }
    tmp = found;
  }
  return tmp;
}
({ MAX_FAVORITES: closure_10, UserSettingsDelay: closure_11 } = MAX_FAVORITES);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stickers/StickersActionCreators.tsx");

export const fetchStickerPack = function fetchStickerPack(_847199849233514549, arg1) {
  return _fetchStickerPack(...arguments);
};
export const fetchStickerPacks = function fetchStickerPacks() {
  return _fetchStickerPacks(...arguments);
};
export const fetchSticker = function fetchSticker(id) {
  return _fetchSticker(...arguments);
};
export const fetchGuildStickersWithCreator = function fetchGuildStickersWithCreator(arg0, arg1) {
  return _fetchGuildStickersWithCreator(...arguments);
};
export const deleteGuildSticker = function deleteGuildSticker(arg0) {
  return _deleteGuildSticker(...arguments);
};
export const createGuildSticker = function createGuildSticker(arg0) {
  return _createGuildSticker(...arguments);
};
export const updateGuildSticker = function updateGuildSticker(arg0, arg1, arg2) {
  return _updateGuildSticker(...arguments);
};
export const addStickerPreview = function addStickerPreview(channelId, sticker, draftType) {
  let obj = importDefault(686);
  obj = { type: "ADD_STICKER_PREVIEW", channelId, sticker, draftType };
  obj.dispatch(obj);
};
export const clearStickerPreview = function clearStickerPreview(channelId, draftType) {
  let obj = importDefault(686);
  obj = { type: "CLEAR_STICKER_PREVIEW", channelId, draftType };
  obj.dispatch(obj);
};
export const favoriteSticker = function favoriteSticker(closure_0) {
  const _require = closure_0;
  const FrecencyUserSettingsActionCreators = _require(1331).FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", (stickerIds) => {
    stickerIds.stickerIds = outer1_19(stickerIds.stickerIds);
    let obj = outer1_1(outer1_2[14]);
    if (obj.size(stickerIds.stickerIds) >= outer1_10) {
      obj = {};
      const intl = callback(outer1_2[16]).intl;
      obj.title = intl.string(callback(outer1_2[16]).t["+XYXtZ"]);
      const intl2 = callback(outer1_2[16]).intl;
      obj = { count: outer1_10 };
      obj.body = intl2.formatToPlainString(callback(outer1_2[16]).t.JaIyFi, obj);
      outer1_1(outer1_2[15]).show(obj);
      let flag = false;
      const obj2 = outer1_1(outer1_2[15]);
    } else {
      stickerIds = stickerIds.stickerIds;
      flag = !stickerIds.includes(callback);
      if (flag) {
        stickerIds = stickerIds.stickerIds;
        stickerIds.push(callback);
      }
    }
    return flag;
  }, constants.INFREQUENT_USER_ACTION);
};
export const unfavoriteSticker = function unfavoriteSticker(closure_0) {
  const _require = closure_0;
  const FrecencyUserSettingsActionCreators = _require(1331).FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", (stickerIds) => {
    stickerIds = stickerIds.stickerIds;
    stickerIds.stickerIds = stickerIds.filter((arg0) => arg0 !== outer1_0);
    stickerIds.stickerIds = outer1_19(stickerIds.stickerIds);
  }, constants.INFREQUENT_USER_ACTION);
};
