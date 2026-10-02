// Module ID: 7042
// Function ID: 7043
// Name: WidgetUtils
// Dependencies: [32, 1378, 7039, 7043, 7044, 2048, 7045, 5423, 1127, 7041, 7040, 4656, 2035, 7046, 7047, 7048, 7050, 6728, 5425, 2]
// Exports: addPendingGameToWidget, addUploadingClipToClipsGalleryWidget, addWidgetToPending, areWidgetGamesEqual, commitUploadedClipInClipsGalleryWidget, getGameWidgetSubtitle, getRandomElement, getRandomElements, getSavedWidgets, getWidgetTitle, hasUploadingClipInClipsGalleryWidget, isGameAllowedInGameWidgets, isGameLimitReached, removeClipFromClipsGalleryWidget, removePendingGameFromWidget, removeTagFromClip, removeTagFromGame, removeWidgetFromPending, reorderClipsInClipsGalleryWidget, reorderGamesInWidget, reorderWidgets, updateClipTagsInClipsGalleryWidget, updateClipTitleInClipsGalleryWidget, updatePendingGameComment, updatePendingGameTags, updatePersonalWidget, updateUnsavedClipThumbnailInClipsGalleryWidget, widgetMaxGames, widgetSupportsComment, widgetSupportsTags

// Module 7042 (WidgetUtils)
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4656 */;
import GameWidgetLimits from "GameWidgetLimits" /* 5423 */;
import utils from "utils" /* 5425 */;
import WidgetType from "WidgetType" /* 7040 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7041 */;
import shared_ClipsConstants from "shared/ClipsConstants" /* 7045 */;
import WidgetActionCreatorsDefault from "WidgetActionCreators" /* 7046 */;
import UserProfilePersonalWidget from "UserProfilePersonalWidget" /* 7048 */;
import WidgetGameTag from "WidgetGameTag" /* 7050 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserStore from "UserStore" /* 1378 */;
import UserProfileStore from "UserProfileStore" /* 7039 */;
import WidgetStore from "WidgetStore" /* 7043 */;
import UserProfileWidgetConstants from "UserProfileWidgetConstants" /* 7044 */;
import size from "module_2" /* 2 */;

let uniqueKey;

let c9;
let metroImportAll;
let metroImportDefault;
let tmp;
const UserProfileClipsGalleryWidgetTypes = tmp(7047);
const f93384 = (item) => item instanceof UserProfileClipsGalleryWidgetTypes.ClipsGalleryWidget;
function findGameWidget(widgetType) {
  let widgets;
  let closure_0 = widgetType;
  const obj = WidgetStore;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    widgets = pendingWidgets;
  } else {
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  const found = widgets.filter(UserProfileGameWidgetTypes.isGameWidget);
  let found1 = found.find((type) => type.type === closure_0);
  if (found1 == null) {
    found1 = null;
  }
  return found1;
}
function replaceWidgetInList(clipsGalleryWidget) {
  let widgets;
  let closure_0 = clipsGalleryWidget;
  const obj = WidgetStore;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    widgets = pendingWidgets;
  } else {
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  const findIndexResult = widgets.findIndex((getUniqueKey) => {
    uniqueKey = getUniqueKey.getUniqueKey();
    return uniqueKey === uniqueKey.getUniqueKey();
  });
  if (-1 === findIndexResult) {
    const items = [clipsGalleryWidget];
    HermesBuiltin.arraySpread(items, widgets, 1);
    return items;
  } else {
    const items1 = [];
    HermesBuiltin.arraySpread(items1, widgets, 0);
    items1[findIndexResult] = clipsGalleryWidget;
    return items1;
  }
}
({ WIDGET_TITLES_BY_TYPE: metroImportDefault, WIDGETS_SUPPORTING_COMMENT: metroImportAll, WIDGETS_SUPPORTING_TAGS: c9 } = UserProfileWidgetConstants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let closure_11 = shared_ClipsConstants.USER_WIDGET_CLIPS_GALLERY_MAX_LENGTH;
let result = size.fileFinishedImporting("modules/user_profile/WidgetUtils.tsx");

export const getWidgetTitle = function getWidgetTitle(widget) {
  return metroImportDefault[widget.type](widget);
};
export const getGameWidgetSubtitle = function getGameWidgetSubtitle(games, showEditingControls) {
  if (showEditingControls.showEditingControls) {
    if (games.games.length > 0) {
      let stringResult;
      if (1 === GameWidgetLimits.GAME_WIDGET_LIMITS_BY_TYPE[games.type]) {
        const intl2 = tmp(1127).intl;
        stringResult = intl2.string(tmp(1127).t.wiXdEa);
      } else {
        const intl = tmp(1127).intl;
        const format = intl.format;
        const obj = { numGames: GameWidgetLimits.GAME_WIDGET_LIMITS_BY_TYPE[games.type] };
        const prop = tmp(1127).t["zR1+0/"];
        stringResult = format(prop, obj);
      }
      return stringResult;
    }
  }
};
export const widgetSupportsComment = function widgetSupportsComment(arg0) {
  return metroImportAll.includes(arg0);
};
export const widgetSupportsTags = function widgetSupportsTags(arg0) {
  return React4.includes(arg0);
};
export const widgetMaxGames = function widgetMaxGames(arg0) {
  let num = 0;
  if (arg0 in GameWidgetLimits.GAME_WIDGET_LIMITS_BY_TYPE) {
    num = GameWidgetLimits.GAME_WIDGET_LIMITS_BY_TYPE[arg0];
  }
  return num;
};
export const getRandomElement = function getRandomElement(arg0) {
  return arg0[Math.floor(Math, Math.random(Math) * arg0.length)];
};
export const getRandomElements = function getRandomElements(arg0, arg1) {
  const items = [...arg0];
  const sorted = items.sort(() => 0.5 - Math.random());
  return sorted.slice(0, arg1);
};
export const getSavedWidgets = function getSavedWidgets() {
  const currentUser = UserStore.getCurrentUser();
  let userProfile = null;
  if (null != currentUser) {
    userProfile = UserProfileStore.getUserProfile(currentUser.id);
  }
  let widgets;
  if (userProfile != null) {
    widgets = userProfile.widgets;
  }
  if (widgets == null) {
    widgets = [];
  }
  return widgets;
};
export { replaceWidgetInList };
export const addWidgetToPending = function addWidgetToPending(type) {
  let widgets;
  let closure_0 = type;
  const obj = WidgetStore;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    widgets = pendingWidgets;
  } else {
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  if (null == widgets.find((getUniqueKey) => {
    uniqueKey = getUniqueKey.getUniqueKey();
    return uniqueKey === uniqueKey.getUniqueKey();
  })) {
    if (type.type === WidgetType.WidgetType.PERSONAL) {
      const obj2 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
      const tmp15Result = DismissibleContentUnsafeUtils;
      const result = tmp15Result.UNSAFE_markDismissibleContentAsDismissed(tmp15(2035).DismissibleContent.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, obj2);
      const obj3 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
      const tmp15Result2 = DismissibleContentUnsafeUtils;
      const result1 = tmp15Result2.UNSAFE_markDismissibleContentAsDismissed(tmp15(2035).DismissibleContent.USER_PROFILE_PERSONAL_WIDGET_NEW_BADGE, obj3);
    }
    const items = [type];
    const setPendingWidgets = WidgetActionCreatorsDefault.setPendingWidgets;
    WidgetActionCreatorsDefault;
    HermesBuiltin.arraySpread(items, tmp8, 1);
    setPendingWidgets(items);
  }
};
export const removeWidgetFromPending = function removeWidgetFromPending(arg0) {
  let widgets;
  let closure_0 = arg0;
  const obj = WidgetStore;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    widgets = pendingWidgets;
  } else {
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  const found = widgets.filter((getUniqueKey) => {
    uniqueKey = getUniqueKey.getUniqueKey();
    return uniqueKey !== uniqueKey.getUniqueKey();
  });
  const obj2 = WidgetActionCreatorsDefault;
  obj2.setPendingWidgets(found);
};
export const addUploadingClipToClipsGalleryWidget = function addUploadingClipToClipsGalleryWidget(arg0) {
  let items;
  let widgets;
  let closure_0 = arg0;
  const obj = WidgetStore;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    widgets = pendingWidgets;
  } else {
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  let found = widgets.find(f93384);
  if (found == null) {
    found = null;
  }
  let clips;
  if (found != null) {
    clips = found.clips;
  }
  if (clips == null) {
    clips = [];
  }
  if (clips.length >= closure_11) {
    return false;
  } else if (clips.some((status) => "uploading" === status.status && status.localClipId === localClipId.localClipId)) {
    return false;
  } else {
    let id;
    const ClipsGalleryWidget = UserProfileClipsGalleryWidgetTypes.ClipsGalleryWidget;
    if (found != null) {
      id = found.id;
    }
    const obj2 = { id, clips: items };
    items = [];
    items[HermesBuiltin.arraySpread(items, clips, 0)] = arg0;
    const self = this;
    const self2 = this;
    const clipsGalleryWidget = new ClipsGalleryWidget(obj2);
    const obj3 = WidgetActionCreatorsDefault;
    obj3.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
    return true;
  }
};
export const hasUploadingClipInClipsGalleryWidget = function hasUploadingClipInClipsGalleryWidget(arg0) {
  let widgets;
  let closure_0 = arg0;
  const obj = WidgetStore;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    widgets = pendingWidgets;
  } else {
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  let found = widgets.find(f93384);
  if (found == null) {
    found = null;
  }
  let flag;
  if (found != null) {
    const clips = found.clips;
    flag = clips.some((id) => id.id === closure_0 && "uploading" === id.status);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const updateUnsavedClipThumbnailInClipsGalleryWidget = function updateUnsavedClipThumbnailInClipsGalleryWidget(arg0, arg1) {
  let clips;
  let widgets;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = WidgetStore;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    widgets = pendingWidgets;
  } else {
    let tmp = UserStore;
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  let found = widgets.find(f93384);
  if (found == null) {
    found = null;
  }
  let found1;
  if (found != null) {
    const clips1 = found.clips;
    found1 = clips1.find((id) => id.id === closure_0);
  }
  if (null != found) {
    if (null != found1) {
      if ("saved" !== found1.status) {
        const obj4 = {
          id: null,
          clips: clips.map((item) => {
                  let tmp = item;
                  if (item === found1) {
                    const obj = { thumbnail };
                    const merged = Object.assign(tmp2);
                    tmp = obj;
                  }
                  return tmp;
                })
        };
        ({ id: obj2.id, clips } = found);
        const ClipsGalleryWidget = UserProfileClipsGalleryWidgetTypes.ClipsGalleryWidget;
        const self = this;
        const self2 = this;
        const clipsGalleryWidget = new ClipsGalleryWidget(obj4);
        const obj3 = WidgetActionCreatorsDefault;
        obj3.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
      }
    }
  }
};
export const commitUploadedClipInClipsGalleryWidget = function commitUploadedClipInClipsGalleryWidget(arg0, arg1) {
  let clips;
  let widgets;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = WidgetStore;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    widgets = pendingWidgets;
  } else {
    let tmp = UserStore;
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  let found = widgets.find(f93384);
  if (found == null) {
    found = null;
  }
  let found1;
  if (found != null) {
    const clips1 = found.clips;
    found1 = clips1.find((id) => id.id === closure_0);
  }
  if (null != found) {
    let status;
    if (found1 != null) {
      status = found1.status;
    }
    if ("uploading" === status) {
      const obj4 = {
        id: null,
        clips: clips.map((item) => {
              let tmp = item;
              if (item === found1) {
                const obj = { status: "pending", uploadFilename };
                const merged = Object.assign(tmp2);
                tmp = obj;
              }
              return tmp;
            })
      };
      ({ id: obj2.id, clips } = found);
      const ClipsGalleryWidget = UserProfileClipsGalleryWidgetTypes.ClipsGalleryWidget;
      const self = this;
      const self2 = this;
      const clipsGalleryWidget = new ClipsGalleryWidget(obj4);
      const obj3 = WidgetActionCreatorsDefault;
      obj3.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
      return true;
    }
  }
  return false;
};
export const updateClipTitleInClipsGalleryWidget = function updateClipTitleInClipsGalleryWidget(arg0, str) {
  let clips;
  let widgets;
  let closure_0 = arg0;
  let obj = WidgetStore;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    widgets = pendingWidgets;
  } else {
    let tmp = UserStore;
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      let tmp5 = UserProfileStore;
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  let found = widgets.find(f93384);
  if (found == null) {
    found = null;
  }
  if (null != found) {
    let closure_1 = str.trim();
    const obj4 = {
      id: null,
      clips: clips.map((id) => {
          let tmp5;
          let tmp = id;
          if (id.id === closure_0) {
            const obj = { title: tmp5 };
            const merged = Object.assign(id);
            tmp5 = undefined;
            if ("" !== closure_1) {
              tmp5 = closure_1;
            }
            tmp = obj;
          }
          return tmp;
        })
    };
    ({ id: obj2.id, clips } = found);
    const ClipsGalleryWidget = UserProfileClipsGalleryWidgetTypes.ClipsGalleryWidget;
    const self = this;
    const self2 = this;
    const clipsGalleryWidget = new ClipsGalleryWidget(obj4);
    const obj3 = WidgetActionCreatorsDefault;
    obj3.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
  }
};
export const reorderClipsInClipsGalleryWidget = function reorderClipsInClipsGalleryWidget(arg0, arg1) {
  let widgets;
  const obj = WidgetStore;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    widgets = pendingWidgets;
  } else {
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  let found = widgets.find(f93384);
  if (found == null) {
    found = null;
  }
  if (null != found) {
    if (arg0 !== arg1) {
      const items = [];
      HermesBuiltin.arraySpread(items, found.clips, 0);
      if (arg0 >= 0) {
        if (arg0 < items.length) {
          if (arg1 >= 0) {
            if (arg1 < items.length) {
              items.splice(arg1, 0, _slicedToArray(items.splice(arg0, 1), 1)[0]);
              const self = this;
              const self2 = this;
              const obj2 = { id: found.id, clips: items };
              const clipsGalleryWidget = new UserProfileClipsGalleryWidgetTypes.ClipsGalleryWidget(obj2);
              const obj3 = WidgetActionCreatorsDefault;
              obj3.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
            }
          }
        }
      }
    }
  }
};
export const updateClipTagsInClipsGalleryWidget = function updateClipTagsInClipsGalleryWidget(arg0, arg1) {
  let clips;
  let closure_0 = arg0;
  let closure_1 = arg1;
  if (arg1.length <= GameWidgetLimits.USER_WIDGET_GAME_TAGS_MAX_LENGTH) {
    let widgets;
    const obj3 = WidgetStore;
    if (WidgetStore.hasPendingChanges()) {
      let pendingWidgets = obj3.getPendingWidgets();
      if (pendingWidgets == null) {
        pendingWidgets = [];
      }
      widgets = pendingWidgets;
    } else {
      const currentUser = UserStore.getCurrentUser();
      let userProfile = null;
      if (null != currentUser) {
        userProfile = UserProfileStore.getUserProfile(currentUser.id);
      }
      widgets = undefined;
      if (userProfile != null) {
        widgets = userProfile.widgets;
      }
      if (widgets == null) {
        widgets = [];
      }
    }
    let found = widgets.find(f93384);
    if (found == null) {
      found = null;
    }
    if (null != found) {
      const obj = {
        id: null,
        clips: clips.map((id) => {
              let tmp5;
              let tmp = id;
              if (id.id === closure_0) {
                const obj = { tags: tmp5 };
                const merged = Object.assign(id);
                tmp5 = undefined;
                if (found2.length > 0) {
                  tmp5 = found2;
                }
                tmp = obj;
              }
              return tmp;
            })
      };
      ({ id: obj.id, clips } = found);
      const ClipsGalleryWidget = UserProfileClipsGalleryWidgetTypes.ClipsGalleryWidget;
      const self = this;
      const self2 = this;
      const clipsGalleryWidget = new ClipsGalleryWidget(obj);
      const obj2 = WidgetActionCreatorsDefault;
      obj2.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
    }
  }
};
export const removeTagFromClip = function removeTagFromClip(arg0, arg1) {
  let clips;
  let widgets;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = WidgetStore;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    widgets = pendingWidgets;
  } else {
    let tmp = UserStore;
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      let tmp5 = UserProfileStore;
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  let found = widgets.find(f93384);
  if (found == null) {
    found = null;
  }
  if (null != found) {
    const clips1 = found.clips;
    const found1 = clips1.find((id) => id.id === closure_0);
    let tags;
    if (found1 != null) {
      tags = found1.tags;
    }
    let tmp9 = null != tags;
    if (tmp9) {
      tmp9 = 0 !== found1.tags.length;
    }
    if (tmp9) {
      const tags1 = found1.tags;
      const found2 = tags1.filter((item) => item !== closure_1);
      closure_0 = arg0;
      const tmp10 = require;
      if (found2.length <= GameWidgetLimits.USER_WIDGET_GAME_TAGS_MAX_LENGTH) {
        let widgets1;
        if (obj.hasPendingChanges()) {
          let pendingWidgets1 = obj.getPendingWidgets();
          if (pendingWidgets1 == null) {
            pendingWidgets1 = [];
          }
          widgets1 = pendingWidgets1;
        } else {
          const currentUser1 = UserStore.getCurrentUser();
          let userProfile1 = null;
          if (null != currentUser1) {
            userProfile1 = UserProfileStore.getUserProfile(currentUser1.id);
          }
          widgets1 = undefined;
          if (userProfile1 != null) {
            widgets1 = userProfile1.widgets;
          }
          if (widgets1 == null) {
            widgets1 = [];
          }
        }
        let found3 = widgets1.find(f93384);
        if (found3 == null) {
          found3 = null;
        }
        if (null != found3) {
          const obj4 = {
            id: null,
            clips: clips.map((id) => {
                      let tmp5;
                      let tmp = id;
                      if (id.id === closure_0) {
                        const obj = { tags: tmp5 };
                        const merged = Object.assign(id);
                        tmp5 = undefined;
                        if (found2.length > 0) {
                          tmp5 = found2;
                        }
                        tmp = obj;
                      }
                      return tmp;
                    })
          };
          ({ id: obj2.id, clips } = found3);
          const ClipsGalleryWidget = tmp10(7047).ClipsGalleryWidget;
          const self = this;
          const self2 = this;
          const clipsGalleryWidget = new ClipsGalleryWidget(obj4);
          const obj3 = WidgetActionCreatorsDefault;
          obj3.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
        }
      }
    }
  }
};
export const removeClipFromClipsGalleryWidget = function removeClipFromClipsGalleryWidget(arg0) {
  let clips;
  let widgets;
  let closure_0 = arg0;
  const obj = WidgetStore;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    widgets = pendingWidgets;
  } else {
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  let found = widgets.find(f93384);
  if (found == null) {
    found = null;
  }
  if (null != found) {
    const clips2 = found.clips;
    if (clips2.some((id) => id.id === closure_0)) {
      const obj4 = { id: null, clips: clips.filter((id) => id.id !== closure_0) };
      ({ id: obj2.id, clips } = found);
      const ClipsGalleryWidget = UserProfileClipsGalleryWidgetTypes.ClipsGalleryWidget;
      const self = this;
      const self2 = this;
      const clipsGalleryWidget = new ClipsGalleryWidget(obj4);
      const obj3 = WidgetActionCreatorsDefault;
      obj3.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
    }
  }
};
export const updatePersonalWidget = function updatePersonalWidget(fn) {
  let widgets;
  const obj = WidgetStore;
  const tmp = replaceWidgetInList;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    widgets = pendingWidgets;
  } else {
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  let found = widgets.find((item) => item instanceof UserProfilePersonalWidget.UserProfilePersonalWidget);
  if (found == null) {
    found = null;
  }
  if (found == null) {
    const obj2 = UserProfilePersonalWidget;
    found = obj2.createDefaultPersonalWidget();
  }
  const tmpResult = tmp(fn(found));
  const obj3 = WidgetActionCreatorsDefault;
  obj3.setPendingWidgets(tmpResult);
};
export const updatePendingGameTags = function updatePendingGameTags(widgetType, arg1, tags) {
  let closure_0 = arg1;
  if (tags.length <= Object.values(WidgetGameTag.WidgetGameTag).length) {
    const tmp5 = findGameWidget(widgetType);
    if (null != tmp5) {
      const games = tmp5.games;
      const found = games.find((gameId) => gameId.gameId === closure_0);
      if (null != found) {
        const merged = Object.assign(found);
        const games1 = tmp5.games;
        const mapped = games1.map((gameId) => {
          let tmp = gameId;
          if (gameId.gameId === closure_0) {
            tmp = obj;
          }
          return tmp;
        });
        const obj2 = { games: mapped };
        const BaseGameWidget = UserProfileGameWidgetTypes.BaseGameWidget;
        const merged1 = Object.assign(tmp5);
        const self = this;
        const self2 = this;
        const baseGameWidget = new BaseGameWidget(obj2);
        const tmp19 = replaceWidgetInList(baseGameWidget);
        const obj3 = WidgetActionCreatorsDefault;
        obj3.setPendingWidgets(tmp19);
      }
    }
  }
};
export const removeTagFromGame = function removeTagFromGame(widgetType, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  let tmp = findGameWidget;
  const tmp2 = findGameWidget(widgetType);
  if (null != tmp2) {
    const games = tmp2.games;
    const found = games.find((gameId) => gameId.gameId === closure_0);
    if (null != found) {
      if (null != found.tags) {
        if (0 !== found.tags.length) {
          const tags = found.tags;
          let found1 = tags.filter((item) => item !== closure_1);
          const type = tmp2.type;
          if (found1.length <= 0) {
            found1 = [];
          }
          closure_0 = arg1;
          const _Object = Object;
          const tmp4 = require;
          if (found1.length <= Object.values(WidgetGameTag.WidgetGameTag).length) {
            const tmpResult = tmp(type);
            if (null != tmpResult) {
              const games1 = tmpResult.games;
              const found2 = games1.find((gameId) => gameId.gameId === closure_0);
              if (null != found2) {
                const obj = { tags: found1 };
                const merged = Object.assign(found2);
                const games2 = tmpResult.games;
                const mapped = games2.map((gameId) => {
                  let tmp = gameId;
                  if (gameId.gameId === closure_0) {
                    tmp = obj;
                  }
                  return tmp;
                });
                const obj2 = { games: mapped };
                const BaseGameWidget = tmp4(7041).BaseGameWidget;
                const merged1 = Object.assign(tmpResult);
                const self = this;
                const self2 = this;
                const baseGameWidget = new BaseGameWidget(obj2);
                const tmp20 = replaceWidgetInList(baseGameWidget);
                const obj3 = WidgetActionCreatorsDefault;
                obj3.setPendingWidgets(tmp20);
              }
            }
          }
        }
      }
    }
  }
};
export const updatePendingGameComment = function updatePendingGameComment(widgetType, arg1, comment) {
  let closure_0 = arg1;
  let tmp = findGameWidget(widgetType);
  if (null != tmp) {
    const games = tmp.games;
    const found = games.find((gameId) => gameId.gameId === closure_0);
    if (null != found) {
      if (comment !== found.comment) {
        const obj = { comment };
        const merged = Object.assign(found);
        const games1 = tmp.games;
        const mapped = games1.map((gameId) => {
          let tmp = gameId;
          if (gameId.gameId === closure_0) {
            tmp = obj;
          }
          return tmp;
        });
        const obj2 = { games: mapped };
        const BaseGameWidget = UserProfileGameWidgetTypes.BaseGameWidget;
        const merged1 = Object.assign(tmp);
        const self = this;
        const self2 = this;
        const baseGameWidget = new BaseGameWidget(obj2);
        const tmp17 = replaceWidgetInList(baseGameWidget);
        const obj3 = WidgetActionCreatorsDefault;
        obj3.setPendingWidgets(tmp17);
      }
    }
  }
};
export const addPendingGameToWidget = function addPendingGameToWidget(ignoreMaxGames) {
  let game;
  let items1;
  let widgetType;
  ({ widgetType, game } = ignoreMaxGames);
  let flag = ignoreMaxGames.ignoreMaxGames;
  if (flag === undefined) {
    flag = false;
  }
  const tmp2 = findGameWidget(widgetType);
  if (widgetType in GameWidgetLimits.GAME_WIDGET_LIMITS_BY_TYPE) {
    tmp3(5423).GAME_WIDGET_LIMITS_BY_TYPE[widgetType];
  }
  if (null != tmp2) {
    const games = tmp2.games;
    let num2;
    if (games != null) {
      num2 = games.length;
    }
    if (num2 == null) {
      num2 = 0;
    }
    let games1 = tmp2.games;
    if (games1 == null) {
      games1 = [];
    }
  }
  const obj = { gameId: game.gameId, comment: game.comment, tags: game.tags };
  if (null != tmp2) {
    const items = [obj];
    let games2 = tmp2.games;
    if (games2 == null) {
      games2 = [];
    }
    HermesBuiltin.arraySpread(items, games2, 1);
    items1 = items;
  } else {
    items1 = [obj];
  }
  let tmp9 = tmp2;
  const BaseGameWidget = tmp3(7041).BaseGameWidget;
  const tmp8 = replaceWidgetInList;
  if (tmp2 == null) {
    tmp9 = { type: widgetType };
    const obj2 = { type: widgetType };
  }
  const obj3 = { games: items1 };
  const merged = Object.assign(tmp9);
  const baseGameWidget = new BaseGameWidget(obj3);
  const tmp8Result = tmp8(baseGameWidget);
  const obj4 = WidgetActionCreatorsDefault;
  obj4.setPendingWidgets(tmp8Result);
  const useGame = tmp3(6728).useGame;
  const items2 = [game.gameId];
  const many = useGame.fetchMany(items2);
};
export const reorderWidgets = function reorderWidgets(arg0, arg1) {
  if (arg0 !== arg1) {
    let widgets;
    const obj2 = WidgetStore;
    if (WidgetStore.hasPendingChanges()) {
      let pendingWidgets = obj2.getPendingWidgets();
      if (pendingWidgets == null) {
        pendingWidgets = [];
      }
      widgets = pendingWidgets;
    } else {
      const currentUser = UserStore.getCurrentUser();
      let userProfile = null;
      if (null != currentUser) {
        userProfile = UserProfileStore.getUserProfile(currentUser.id);
      }
      widgets = undefined;
      if (userProfile != null) {
        widgets = userProfile.widgets;
      }
      if (widgets == null) {
        widgets = [];
      }
    }
    if (arg0 >= 0) {
      if (arg0 < widgets.length) {
        if (arg1 >= 0) {
          if (arg1 < widgets.length) {
            const items = [];
            HermesBuiltin.arraySpread(items, widgets, 0);
            items.splice(arg1, 0, _slicedToArray(items.splice(arg0, 1), 1)[0]);
            const obj = WidgetActionCreatorsDefault;
            obj.setPendingWidgets(items);
          }
        }
      }
    }
  }
};
export const reorderGamesInWidget = function reorderGamesInWidget(widgetType, arg1, arg2) {
  const tmp2 = findGameWidget(widgetType);
  if (null != tmp2) {
    if (null != tmp2.games) {
      if (arg1 !== arg2) {
        const items = [];
        HermesBuiltin.arraySpread(items, tmp2.games, 0);
        if (arg1 >= 0) {
          if (arg1 < items.length) {
            if (arg2 >= 0) {
              if (arg2 < items.length) {
                items.splice(arg2, 0, _slicedToArray(items.splice(arg1, 1), 1)[0]);
                const obj = { games: items };
                const BaseGameWidget = UserProfileGameWidgetTypes.BaseGameWidget;
                const merged = Object.assign(tmp2);
                const self = this;
                const self2 = this;
                const baseGameWidget = new BaseGameWidget(obj);
                const tmp18 = replaceWidgetInList(baseGameWidget);
                const obj2 = WidgetActionCreatorsDefault;
                obj2.setPendingWidgets(tmp18);
              }
            }
          }
        }
      }
    }
  }
};
export const removePendingGameFromWidget = function removePendingGameFromWidget(widgetType, arg1) {
  let closure_0 = arg1;
  const tmp = findGameWidget(widgetType);
  if (null != tmp) {
    const arr = null != tmp.games ? tmp.games : [];
    const found = arr.filter((gameId) => gameId.gameId !== closure_0);
    const obj = { games: found };
    const BaseGameWidget = UserProfileGameWidgetTypes.BaseGameWidget;
    const merged = Object.assign(tmp);
    const self = this;
    const self2 = this;
    const baseGameWidget = new BaseGameWidget(obj);
    const tmp12 = replaceWidgetInList(baseGameWidget);
    const obj2 = WidgetActionCreatorsDefault;
    obj2.setPendingWidgets(tmp12);
  }
};
export const isGameLimitReached = function isGameLimitReached(type) {
  type = type.type;
  let num = 0;
  if (type in GameWidgetLimits.GAME_WIDGET_LIMITS_BY_TYPE) {
    num = GameWidgetLimits.GAME_WIDGET_LIMITS_BY_TYPE[type];
  }
  return type.games.length >= num;
};
export const areWidgetGamesEqual = function areWidgetGamesEqual(games, games2, type) {
  let closure_1 = type;
  const tmp = games.length === games2.length && games.every((gameId, index) => {
    let c0;
    let flag = false;
    if (gameId.gameId === games2[index].gameId) {
      if (!metroImportAll.includes(type)) {
        flag = true;
        if (React4.includes(type)) {
          const tags = gameId.tags;
          let tmp10 = null;
          if (null != tags) {
            tmp10 = null;
            if ("" !== tags) {
              const _Array3 = Array;
              if (!Array.isArray(tags)) {
                tmp10 = tags;
              } else {
                tmp10 = null;
              }
            }
          }
          const tags1 = tmp.tags;
          let tmp12 = null;
          if (null != tags1) {
            tmp12 = null;
            if ("" !== tags1) {
              const _Array4 = Array;
              if (!Array.isArray(tags1)) {
                tmp12 = tags1;
              } else {
                tmp12 = null;
              }
            }
          }
          c0 = tmp12;
          flag = false;
          if (null === tmp10 === null === tmp12) {
            flag = true;
            if (null !== tmp10) {
              flag = true;
              if (null !== tmp12) {
                flag = false;
                if (tmp10.length === tmp12.length) {
                  flag = true;
                  if (!tmp10.every((item, index) => item === _null[index])) {
                    flag = false;
                  }
                }
              }
            }
          }
        }
      } else {
        const comment = gameId.comment;
        if (null != comment) {
          if ("" !== comment) {
            const _Array = Array;
          }
        }
        const comment1 = tmp.comment;
        if (null != comment1) {
          if ("" !== comment1) {
            const _Array2 = Array;
          }
        }
        flag = false;
      }
    }
    return flag;
  });
  return tmp;
};
export const isGameAllowedInGameWidgets = function isGameAllowedInGameWidgets(contentClassification) {
  const obj = utils;
  const result = obj.isAgeRestrictedContentClassification(contentClassification.contentClassification);
  let tmp4 = !result;
  if (tmp4) {
    const GAME_WIDGET_BANNED_APPLICATION_IDS = GameWidgetLimits.GAME_WIDGET_BANNED_APPLICATION_IDS;
    tmp4 = !GAME_WIDGET_BANNED_APPLICATION_IDS.has(contentClassification.id);
  }
  return tmp4;
};
