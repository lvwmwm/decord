// Module ID: 15063
// Function ID: 113404
// Name: _maybeFetchGuildDiscoveryCategories
// Dependencies: []
// Exports: addGuildCategory, deleteGuildCategory, fetchMetadataForGuild, fetchSlugForGuild, maybeFetchGuildDiscoveryCategories, saveGuildMetadata, updateGuildDiscoveryMetadataAbout, updateGuildDiscoveryMetadataIsPublished, updateGuildDiscoveryMetadataReasonsToJoin, updateGuildDiscoveryMetadataSocialLinks, updateGuildEmojiDiscoverabilityEnabled, updateGuildKeywords, updateGuildPrimaryCategory

// Module 15063 (_maybeFetchGuildDiscoveryCategories)
function _maybeFetchGuildDiscoveryCategories() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _maybeFetchGuildDiscoveryCategories = obj;
  return obj(...arguments);
}
function _fetchMetadataForGuild() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchMetadataForGuild = obj;
  return obj(...arguments);
}
function _fetchSlugForGuild() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchSlugForGuild = obj;
  return obj(...arguments);
}
function _saveGuildMetadata() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _saveGuildMetadata = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const Endpoints = arg1(dependencyMap[3]).Endpoints;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/global_discovery_servers/GuildDiscoveryCategoryActionCreators.tsx");

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
  let obj = importDefault(dependencyMap[5]);
  obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, primaryCategoryId };
  obj.dispatch(obj);
};
export const updateGuildKeywords = function updateGuildKeywords(guildId, keywords) {
  let obj = importDefault(dependencyMap[5]);
  obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, keywords };
  obj.dispatch(obj);
};
export const updateGuildEmojiDiscoverabilityEnabled = function updateGuildEmojiDiscoverabilityEnabled(guildId, emojiDiscoverabilityEnabled) {
  let obj = importDefault(dependencyMap[5]);
  obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, emojiDiscoverabilityEnabled };
  obj.dispatch(obj);
};
export const updateGuildDiscoveryMetadataIsPublished = function updateGuildDiscoveryMetadataIsPublished(guildId, isPublished) {
  let obj = importDefault(dependencyMap[5]);
  obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, isPublished };
  obj.dispatch(obj);
};
export const updateGuildDiscoveryMetadataAbout = function updateGuildDiscoveryMetadataAbout(guildId, about) {
  let obj = importDefault(dependencyMap[5]);
  obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, about };
  obj.dispatch(obj);
};
export const updateGuildDiscoveryMetadataReasonsToJoin = function updateGuildDiscoveryMetadataReasonsToJoin(guildId, reasonsToJoin) {
  let obj = importDefault(dependencyMap[5]);
  obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, reasonsToJoin };
  obj.dispatch(obj);
};
export const updateGuildDiscoveryMetadataSocialLinks = function updateGuildDiscoveryMetadataSocialLinks(guildId, socialLinks) {
  let obj = importDefault(dependencyMap[5]);
  obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, socialLinks };
  obj.dispatch(obj);
};
export const saveGuildMetadata = function saveGuildMetadata() {
  return _saveGuildMetadata(...arguments);
};
export const addGuildCategory = function addGuildCategory(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const HTTP = arg1(dependencyMap[4]).HTTP;
  const obj = { url: Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(arg0, arg1), oldFormErrors: true, rejectWithError: arg1(dependencyMap[4]).rejectWithMigratedError() };
  const obj2 = arg1(dependencyMap[4]);
  const putResult = HTTP.put(obj);
  HTTP.put(obj).then(() => {
    let obj = arg1(closure_2[5]);
    obj = { type: "GUILD_DISCOVERY_CATEGORY_ADD", guildId: arg0, categoryId: arg1 };
    obj.dispatch(obj);
  }).catch((body) => {
    let obj = arg1(closure_2[5]);
    obj = { type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId: body, errors: body.body };
    obj.dispatch(obj);
  });
};
export const deleteGuildCategory = function deleteGuildCategory(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const HTTP = arg1(dependencyMap[4]).HTTP;
  const obj = { url: Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(arg0, arg1), oldFormErrors: true, rejectWithError: arg1(dependencyMap[4]).rejectWithMigratedError() };
  const obj2 = arg1(dependencyMap[4]);
  const delResult = HTTP.del(obj);
  HTTP.del(obj).then(() => {
    let obj = arg1(closure_2[5]);
    obj = { type: "GUILD_DISCOVERY_CATEGORY_DELETE", guildId: arg0, categoryId: arg1 };
    obj.dispatch(obj);
  }).catch((body) => {
    let obj = arg1(closure_2[5]);
    obj = { type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId: body, errors: body.body };
    obj.dispatch(obj);
  });
};
