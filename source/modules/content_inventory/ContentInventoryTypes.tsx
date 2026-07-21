// Module ID: 8305
// Function ID: 65747
// Name: isPlayedGameEntry
// Dependencies: [5, 653, 507]
// Exports: isConsoleEntry, isLaunchedActivityEntry, isListeningLikeEntry, isRecentActivityEntry

// Module 8305 (isPlayedGameEntry)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function isPlayedGameEntry(content_type) {
  content_type = undefined;
  if (null != content_type) {
    content_type = content_type.content_type;
  }
  return content_type === require(dependencyMap[0]).ContentInventoryEntryType.PLAYED_GAME;
}
function isTopGameEntry(content_type) {
  content_type = undefined;
  if (null != content_type) {
    content_type = content_type.content_type;
  }
  return content_type === require(dependencyMap[0]).ContentInventoryEntryType.TOP_GAME;
}
function isGamingLikeEntry(content) {
  let tmp = isPlayedGameEntry(content);
  if (!tmp) {
    tmp = isTopGameEntry(content);
  }
  return tmp;
}
function isApplicationEntry(extra) {
  extra = undefined;
  if (null != extra) {
    extra = extra.extra;
  }
  let tmp2 = null != extra;
  if (tmp2) {
    let extra1;
    if (null != extra) {
      extra1 = extra.extra;
    }
    tmp2 = "application_id" in extra1;
  }
  return tmp2;
}
function isListenedSessionEntry(entry) {
  let content_type;
  if (null != entry) {
    content_type = entry.content_type;
  }
  return content_type === require(dependencyMap[0]).ContentInventoryEntryType.LISTENED_SESSION;
}
function isTopArtistEntry(entry) {
  let content_type;
  if (null != entry) {
    content_type = entry.content_type;
  }
  return content_type === require(dependencyMap[0]).ContentInventoryEntryType.TOP_ARTIST;
}
function isWatchedMediaEntry(entry) {
  let content_type;
  if (null != entry) {
    content_type = entry.content_type;
  }
  return content_type === require(dependencyMap[0]).ContentInventoryEntryType.WATCHED_MEDIA;
}
function isXboxEntry(extra) {
  const tmp = isGamingLikeEntry(extra);
  let tmp2 = tmp;
  if (tmp) {
    tmp2 = extra.extra.platform === require(dependencyMap[1]).PlatformType.XBOX;
  }
  return tmp2;
}
function isPlaystationEntry(extra) {
  const tmp = isGamingLikeEntry(extra);
  let tmp2 = tmp;
  if (tmp) {
    tmp2 = extra.extra.platform === require(dependencyMap[1]).PlatformType.PLAYSTATION;
  }
  return tmp2;
}
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/content_inventory/ContentInventoryTypes.tsx");

export { isPlayedGameEntry };
export { isTopGameEntry };
export { isGamingLikeEntry };
export { isApplicationEntry };
export { isListenedSessionEntry };
export { isTopArtistEntry };
export const isListeningLikeEntry = function isListeningLikeEntry(entry) {
  let tmp = isListenedSessionEntry(entry);
  if (!tmp) {
    tmp = isTopArtistEntry(entry);
  }
  return tmp;
};
export { isWatchedMediaEntry };
export { isXboxEntry };
export { isPlaystationEntry };
export const isConsoleEntry = function isConsoleEntry(extra) {
  let tmp = isXboxEntry(extra);
  if (!tmp) {
    tmp = isPlaystationEntry(extra);
  }
  return tmp;
};
export const isLaunchedActivityEntry = function isLaunchedActivityEntry(content_type) {
  content_type = undefined;
  if (null != content_type) {
    content_type = content_type.content_type;
  }
  return content_type === require(dependencyMap[0]).ContentInventoryEntryType.LAUNCHED_ACTIVITY;
};
export const isRecentActivityEntry = function isRecentActivityEntry(content) {
  let tmp = isGamingLikeEntry(content);
  if (!tmp) {
    tmp = isListenedSessionEntry(content);
  }
  if (!tmp) {
    tmp = isWatchedMediaEntry(content);
  }
  if (!tmp) {
    tmp = isApplicationEntry(content);
  }
  return tmp;
};
