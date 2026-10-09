// Module ID: 8443
// Function ID: 8444
// Name: ContentInventoryTypes
// Dependencies: [8251, 8444, 2]
// Exports: isApplicationEntry, isConsoleEntry, isGamingLikeEntry, isLaunchedActivityEntry, isListenedSessionEntry, isListeningLikeEntry, isPlayedGameEntry, isPlaystationEntry, isRecentActivityEntry, isTopArtistEntry, isTopGameEntry, isWatchedMediaEntry, isXboxEntry

// Module 8443 (ContentInventoryTypes)
import ContentInventoryEntryType from "ContentInventoryEntryType" /* 8251 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryTypes.tsx");

export const isPlayedGameEntry = function isPlayedGameEntry(content_type) {
  content_type = undefined;
  if (content_type != null) {
    content_type = content_type.content_type;
  }
  return content_type === ContentInventoryEntryType.ContentInventoryEntryType.PLAYED_GAME;
};
export const isTopGameEntry = function isTopGameEntry(entry) {
  let content_type;
  if (entry != null) {
    content_type = entry.content_type;
  }
  return content_type === ContentInventoryEntryType.ContentInventoryEntryType.TOP_GAME;
};
export const isGamingLikeEntry = function isGamingLikeEntry(entry) {
  let content_type;
  if (entry != null) {
    content_type = entry.content_type;
  }
  let tmp4 = content_type === ContentInventoryEntryType.ContentInventoryEntryType.PLAYED_GAME;
  if (!tmp4) {
    let content_type1;
    if (entry != null) {
      content_type1 = entry.content_type;
    }
    tmp4 = content_type1 === ContentInventoryEntryType.ContentInventoryEntryType.TOP_GAME;
  }
  return tmp4;
};
export const isApplicationEntry = function isApplicationEntry(extra) {
  extra = undefined;
  if (extra != null) {
    extra = extra.extra;
  }
  let tmp2 = null != extra;
  if (tmp2) {
    let extra1;
    if (extra != null) {
      extra1 = extra.extra;
    }
    tmp2 = "application_id" in extra1;
  }
  return tmp2;
};
export const isListenedSessionEntry = function isListenedSessionEntry(content_type) {
  content_type = undefined;
  if (content_type != null) {
    content_type = content_type.content_type;
  }
  return content_type === ContentInventoryEntryType.ContentInventoryEntryType.LISTENED_SESSION;
};
export const isTopArtistEntry = function isTopArtistEntry(content_type) {
  content_type = undefined;
  if (content_type != null) {
    content_type = content_type.content_type;
  }
  return content_type === ContentInventoryEntryType.ContentInventoryEntryType.TOP_ARTIST;
};
export const isListeningLikeEntry = function isListeningLikeEntry(content_type) {
  content_type = undefined;
  if (content_type != null) {
    content_type = content_type.content_type;
  }
  let tmp4 = content_type === ContentInventoryEntryType.ContentInventoryEntryType.LISTENED_SESSION;
  if (!tmp4) {
    let content_type1;
    if (content_type != null) {
      content_type1 = content_type.content_type;
    }
    tmp4 = content_type1 === ContentInventoryEntryType.ContentInventoryEntryType.TOP_ARTIST;
  }
  return tmp4;
};
export const isWatchedMediaEntry = function isWatchedMediaEntry(entry) {
  let content_type;
  if (entry != null) {
    content_type = entry.content_type;
  }
  return content_type === ContentInventoryEntryType.ContentInventoryEntryType.WATCHED_MEDIA;
};
export const isXboxEntry = function isXboxEntry(content_type) {
  content_type = undefined;
  if (content_type != null) {
    content_type = content_type.content_type;
  }
  let tmp4 = content_type === ContentInventoryEntryType.ContentInventoryEntryType.PLAYED_GAME;
  if (!tmp4) {
    let content_type1;
    if (content_type != null) {
      content_type1 = content_type.content_type;
    }
    tmp4 = content_type1 === tmp2(8251).ContentInventoryEntryType.TOP_GAME;
  }
  const tmp6 = tmp4 && content_type.extra.platform === tmp2(8444).PlatformType.XBOX;
  return tmp6;
};
export const isPlaystationEntry = function isPlaystationEntry(content_type) {
  content_type = undefined;
  if (content_type != null) {
    content_type = content_type.content_type;
  }
  let tmp4 = content_type === ContentInventoryEntryType.ContentInventoryEntryType.PLAYED_GAME;
  if (!tmp4) {
    let content_type1;
    if (content_type != null) {
      content_type1 = content_type.content_type;
    }
    tmp4 = content_type1 === tmp2(8251).ContentInventoryEntryType.TOP_GAME;
  }
  const tmp6 = tmp4 && content_type.extra.platform === tmp2(8444).PlatformType.PLAYSTATION;
  return tmp6;
};
export const isConsoleEntry = function isConsoleEntry(content_type) {
  content_type = undefined;
  if (content_type != null) {
    content_type = content_type.content_type;
  }
  let tmp4 = content_type === ContentInventoryEntryType.ContentInventoryEntryType.PLAYED_GAME;
  if (!tmp4) {
    let content_type1;
    if (content_type != null) {
      content_type1 = content_type.content_type;
    }
    tmp4 = content_type1 === tmp2(8251).ContentInventoryEntryType.TOP_GAME;
  }
  let tmp6 = tmp4 && content_type.extra.platform === tmp2(8444).PlatformType.XBOX;
  if (!tmp6) {
    let content_type2;
    if (content_type != null) {
      content_type2 = content_type.content_type;
    }
    let tmp8 = content_type2 === tmp2(8251).ContentInventoryEntryType.PLAYED_GAME;
    if (!tmp8) {
      let content_type3;
      if (content_type != null) {
        content_type3 = content_type.content_type;
      }
      tmp8 = content_type3 === tmp2(8251).ContentInventoryEntryType.TOP_GAME;
    }
    tmp6 = tmp8 && content_type.extra.platform === tmp2(8444).PlatformType.PLAYSTATION;
    const tmp10 = tmp8 && content_type.extra.platform === tmp2(8444).PlatformType.PLAYSTATION;
  }
  return tmp6;
};
export const isLaunchedActivityEntry = function isLaunchedActivityEntry(content_type) {
  content_type = undefined;
  if (content_type != null) {
    content_type = content_type.content_type;
  }
  return content_type === ContentInventoryEntryType.ContentInventoryEntryType.LAUNCHED_ACTIVITY;
};
export const isRecentActivityEntry = function isRecentActivityEntry(content_type) {
  content_type = undefined;
  if (content_type != null) {
    content_type = content_type.content_type;
  }
  let tmp4 = content_type === ContentInventoryEntryType.ContentInventoryEntryType.PLAYED_GAME;
  if (!tmp4) {
    let content_type1;
    if (content_type != null) {
      content_type1 = content_type.content_type;
    }
    tmp4 = content_type1 === tmp2(8251).ContentInventoryEntryType.TOP_GAME;
  }
  if (!tmp4) {
    let content_type2;
    if (content_type != null) {
      content_type2 = content_type.content_type;
    }
    tmp4 = content_type2 === tmp2(8251).ContentInventoryEntryType.LISTENED_SESSION;
  }
  if (!tmp4) {
    let content_type3;
    if (content_type != null) {
      content_type3 = content_type.content_type;
    }
    tmp4 = content_type3 === tmp2(8251).ContentInventoryEntryType.WATCHED_MEDIA;
  }
  if (!tmp4) {
    let extra;
    if (content_type != null) {
      extra = content_type.extra;
    }
    let tmp9 = null != extra;
    if (tmp9) {
      let extra1;
      if (content_type != null) {
        extra1 = content_type.extra;
      }
      tmp9 = "application_id" in extra1;
    }
    tmp4 = tmp9;
  }
  return tmp4;
};
