// Module ID: 15243
// Function ID: 115996
// Name: _maybeFetchGuildDiscoveryCategories
// Dependencies: [5, 1921, 15244, 653, 507, 686, 2]
// Exports: addGuildCategory, deleteGuildCategory, fetchMetadataForGuild, fetchSlugForGuild, maybeFetchGuildDiscoveryCategories, saveGuildMetadata, updateGuildDiscoveryMetadataAbout, updateGuildDiscoveryMetadataIsPublished, updateGuildDiscoveryMetadataReasonsToJoin, updateGuildDiscoveryMetadataSocialLinks, updateGuildEmojiDiscoverabilityEnabled, updateGuildKeywords, updateGuildPrimaryCategory

// Module 15243 (_maybeFetchGuildDiscoveryCategories)
import dispatcher from "dispatcher";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const require = arg1;
function _maybeFetchGuildDiscoveryCategories() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchMetadataForGuild() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchSlugForGuild() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _saveGuildMetadata() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/global_discovery_servers/GuildDiscoveryCategoryActionCreators.tsx");

export const maybeFetchGuildDiscoveryCategories = function maybeFetchGuildDiscoveryCategories() {
  return _maybeFetchGuildDiscoveryCategories(...arguments);
};
export const fetchMetadataForGuild = function fetchMetadataForGuild() {
  return _fetchMetadataForGuild(...arguments);
};
export const fetchSlugForGuild = function fetchSlugForGuild() {
  return _fetchSlugForGuild(...arguments);
};
export const updateGuildPrimaryCategory = function updateGuildPrimaryCategory(guildId, primaryCategoryId) {
  let obj = importDefault(686);
  obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, primaryCategoryId };
  obj.dispatch(obj);
};
export const updateGuildKeywords = function updateGuildKeywords(guildId, keywords) {
  let obj = importDefault(686);
  obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, keywords };
  obj.dispatch(obj);
};
export const updateGuildEmojiDiscoverabilityEnabled = function updateGuildEmojiDiscoverabilityEnabled(guildId, emojiDiscoverabilityEnabled) {
  let obj = importDefault(686);
  obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, emojiDiscoverabilityEnabled };
  obj.dispatch(obj);
};
export const updateGuildDiscoveryMetadataIsPublished = function updateGuildDiscoveryMetadataIsPublished(guildId, isPublished) {
  let obj = importDefault(686);
  obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, isPublished };
  obj.dispatch(obj);
};
export const updateGuildDiscoveryMetadataAbout = function updateGuildDiscoveryMetadataAbout(guildId, about) {
  let obj = importDefault(686);
  obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, about };
  obj.dispatch(obj);
};
export const updateGuildDiscoveryMetadataReasonsToJoin = function updateGuildDiscoveryMetadataReasonsToJoin(guildId, reasonsToJoin) {
  let obj = importDefault(686);
  obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, reasonsToJoin };
  obj.dispatch(obj);
};
export const updateGuildDiscoveryMetadataSocialLinks = function updateGuildDiscoveryMetadataSocialLinks(guildId, socialLinks) {
  let obj = importDefault(686);
  obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, socialLinks };
  obj.dispatch(obj);
};
export const saveGuildMetadata = function saveGuildMetadata() {
  return _saveGuildMetadata(...arguments);
};
export const addGuildCategory = function addGuildCategory(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const HTTP = _require(507).HTTP;
  let obj = { url: Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(arg0, arg1), oldFormErrors: true, rejectWithError: _require(507).rejectWithMigratedError() };
  const obj2 = _require(507);
  const putResult = HTTP.put(obj);
  HTTP.put(obj).then(() => {
    let obj = callback(outer1_2[5]);
    obj = { type: "GUILD_DISCOVERY_CATEGORY_ADD", guildId: closure_0, categoryId: callback };
    obj.dispatch(obj);
  }).catch((body) => {
    let obj = callback(outer1_2[5]);
    obj = { type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId: closure_0, errors: body.body };
    obj.dispatch(obj);
  });
};
export const deleteGuildCategory = function deleteGuildCategory(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const HTTP = _require(507).HTTP;
  let obj = { url: Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(arg0, arg1), oldFormErrors: true, rejectWithError: _require(507).rejectWithMigratedError() };
  const obj2 = _require(507);
  const delResult = HTTP.del(obj);
  HTTP.del(obj).then(() => {
    let obj = callback(outer1_2[5]);
    obj = { type: "GUILD_DISCOVERY_CATEGORY_DELETE", guildId: closure_0, categoryId: callback };
    obj.dispatch(obj);
  }).catch((body) => {
    let obj = callback(outer1_2[5]);
    obj = { type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId: closure_0, errors: body.body };
    obj.dispatch(obj);
  });
};
