// Module ID: 8356
// Function ID: 66024
// Name: isPlayedGameEntry
// Dependencies: [7901, 8357, 2]
// Exports: isConsoleEntry, isLaunchedActivityEntry, isListeningLikeEntry, isRecentActivityEntry

// Module 8356 (isPlayedGameEntry)
function isPlayedGameEntry(content_type) {
  content_type = undefined;
  if (null != content_type) {
    content_type = content_type.content_type;
  }
  return content_type === require(7901) /* ContentInventoryEntryType */.ContentInventoryEntryType.PLAYED_GAME;
}
function isTopGameEntry(content_type) {
  content_type = undefined;
  if (null != content_type) {
    content_type = content_type.content_type;
  }
  return content_type === require(7901) /* ContentInventoryEntryType */.ContentInventoryEntryType.TOP_GAME;
}
function isGamingLikeEntry(content) {
  let tmp = isPlayedGameEntry(content);
  if (!tmp) {
    tmp = isTopGameEntry(content);
  }
  return tmp;
}
function isApplicationEntry(closure_0) {
  let extra;
  if (null != closure_0) {
    extra = closure_0.extra;
  }
  let tmp2 = null != extra;
  if (tmp2) {
    let extra1;
    if (null != closure_0) {
      extra1 = closure_0.extra;
    }
    tmp2 = "application_id" in extra1;
  }
  return tmp2;
}
function isListenedSessionEntry(closure_0) {
  let content_type;
  if (null != closure_0) {
    content_type = closure_0.content_type;
  }
  return content_type === require(7901) /* ContentInventoryEntryType */.ContentInventoryEntryType.LISTENED_SESSION;
}
function isTopArtistEntry(entry) {
  let content_type;
  if (null != entry) {
    content_type = entry.content_type;
  }
  return content_type === require(7901) /* ContentInventoryEntryType */.ContentInventoryEntryType.TOP_ARTIST;
}
function isWatchedMediaEntry(entry) {
  let content_type;
  if (null != entry) {
    content_type = entry.content_type;
  }
  return content_type === require(7901) /* ContentInventoryEntryType */.ContentInventoryEntryType.WATCHED_MEDIA;
}
function isXboxEntry(extra) {
  const tmp = isGamingLikeEntry(extra);
  let tmp2 = tmp;
  if (tmp) {
    tmp2 = extra.extra.platform === require(8357) /* PlatformType */.PlatformType.XBOX;
  }
  return tmp2;
}
function isPlaystationEntry(extra) {
  const tmp = isGamingLikeEntry(extra);
  let tmp2 = tmp;
  if (tmp) {
    tmp2 = extra.extra.platform === require(8357) /* PlatformType */.PlatformType.PLAYSTATION;
  }
  return tmp2;
}
const result = require("set").fileFinishedImporting("modules/content_inventory/ContentInventoryTypes.tsx");

export { isPlayedGameEntry };
export { isTopGameEntry };
export { isGamingLikeEntry };
export { isApplicationEntry };
export { isListenedSessionEntry };
export { isTopArtistEntry };
export const isListeningLikeEntry = function isListeningLikeEntry(closure_0) {
  let tmp = isListenedSessionEntry(closure_0);
  if (!tmp) {
    tmp = isTopArtistEntry(closure_0);
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
  return content_type === require(7901) /* ContentInventoryEntryType */.ContentInventoryEntryType.LAUNCHED_ACTIVITY;
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
