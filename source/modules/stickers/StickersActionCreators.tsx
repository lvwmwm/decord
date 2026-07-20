// Module ID: 9588
// Function ID: 74715
// Name: _fetchStickerPack
// Dependencies: []
// Exports: addStickerPreview, clearStickerPreview, createGuildSticker, deleteGuildSticker, favoriteSticker, fetchGuildStickersWithCreator, fetchSticker, fetchStickerPack, fetchStickerPacks, unfavoriteSticker, updateGuildSticker

// Module 9588 (_fetchStickerPack)
function _fetchStickerPack() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchStickerPack = obj;
  return obj(...arguments);
}
function _fetchStickerPacks() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchStickerPacks = obj;
  return obj(...arguments);
}
function _fetchSticker() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchSticker = obj;
  return obj(...arguments);
}
function _fetchGuildStickersWithCreator() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchGuildStickersWithCreator = obj;
  return obj(...arguments);
}
function _deleteGuildSticker() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _deleteGuildSticker = obj;
  return obj(...arguments);
}
function _createGuildSticker() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _createGuildSticker = obj;
  return obj(...arguments);
}
function _updateGuildSticker() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _updateGuildSticker = obj;
  return obj(...arguments);
}
function cleanFavoriteStickers(arr) {
  let tmp = arr;
  if (obj.totalUnavailableGuilds <= 0) {
    let found = arr;
    if (connected.isConnected()) {
      found = arr.filter((arg0) => null != stickerById.getStickerById(arg0));
    }
    tmp = found;
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const Endpoints = arg1(dependencyMap[6]).Endpoints;
({ MAX_FAVORITES: closure_10, UserSettingsDelay: closure_11 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/stickers/StickersActionCreators.tsx");

export const fetchStickerPack = function fetchStickerPack(847199849233514549, arg1) {
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
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "ADD_STICKER_PREVIEW", channelId, sticker, draftType };
  obj.dispatch(obj);
};
export const clearStickerPreview = function clearStickerPreview(channelId, draftType) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "CLEAR_STICKER_PREVIEW", channelId, draftType };
  obj.dispatch(obj);
};
export const favoriteSticker = function favoriteSticker(arg0) {
  const arg1 = arg0;
  const FrecencyUserSettingsActionCreators = arg1(dependencyMap[13]).FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", (stickerIds) => {
    stickerIds.stickerIds = callback2(stickerIds.stickerIds);
    let obj = callback(closure_2[14]);
    if (obj.size(stickerIds.stickerIds) >= closure_10) {
      obj = {};
      const intl = stickerIds(closure_2[16]).intl;
      obj.title = intl.string(stickerIds(closure_2[16]).t.+XYXtZ);
      const intl2 = stickerIds(closure_2[16]).intl;
      obj = { count: closure_10 };
      obj.body = intl2.formatToPlainString(stickerIds(closure_2[16]).t.JaIyFi, obj);
      callback(closure_2[15]).show(obj);
      let flag = false;
      const obj2 = callback(closure_2[15]);
    } else {
      stickerIds = stickerIds.stickerIds;
      flag = !stickerIds.includes(stickerIds);
      if (flag) {
        stickerIds = stickerIds.stickerIds;
        stickerIds.push(stickerIds);
      }
    }
    return flag;
  }, constants.INFREQUENT_USER_ACTION);
};
export const unfavoriteSticker = function unfavoriteSticker(arg0) {
  const arg1 = arg0;
  const FrecencyUserSettingsActionCreators = arg1(dependencyMap[13]).FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", (stickerIds) => {
    stickerIds = stickerIds.stickerIds;
    stickerIds.stickerIds = stickerIds.filter((arg0) => arg0 !== closure_0);
    stickerIds.stickerIds = callback(stickerIds.stickerIds);
  }, constants.INFREQUENT_USER_ACTION);
};
