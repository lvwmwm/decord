// Module ID: 5884
// Function ID: 51721
// Name: items
// Dependencies: [4202, 5879, 1212, 2]

// Module 5884 (items)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const items = [require("WidgetType").WidgetType.PERSONAL, require("WidgetType").WidgetType.CLIPS_GALLERY, require("WidgetType").WidgetType.APPLICATION, require("WidgetType").WidgetType.FAVORITE_GAMES, require("WidgetType").WidgetType.PLAYED_GAMES, require("WidgetType").WidgetType.CURRENT_GAMES, require("WidgetType").WidgetType.WANT_TO_PLAY_GAMES];
const items1 = [require("WidgetType").WidgetType.FAVORITE_GAMES];
const items2 = [require("WidgetType").WidgetType.CURRENT_GAMES, require("WidgetType").WidgetType.FAVORITE_GAMES, require("WidgetType").WidgetType.CLIPS_GALLERY];
const obj = {
  [arg1(5879).WidgetType.FAVORITE_GAMES]: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.sUQar8);
  },
  [arg1(5879).WidgetType.CURRENT_GAMES]: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.SqNnus);
  },
  [arg1(5879).WidgetType.WANT_TO_PLAY_GAMES]: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.bWSQwW);
  },
  [arg1(5879).WidgetType.PLAYED_GAMES]: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.scOKET);
  },
  [arg1(5879).WidgetType.APPLICATION]: (applicationId) => {
    application = application.getApplication(applicationId.applicationId);
    let name;
    if (null != application) {
      name = application.name;
    }
    let str = "";
    if (null != name) {
      str = name;
    }
    return str;
  },
  [arg1(5879).WidgetType.PERSONAL]: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.AVkYMx);
  },
  [arg1(5879).WidgetType.CLIPS_GALLERY]: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.zY8Ghg);
  }
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_profile/UserProfileWidgetConstants.tsx");

export const WIDGET_SORT_ORDER = items;
export const WIDGET_TITLES_BY_TYPE = obj;
export const WIDGETS_SUPPORTING_COMMENT = items1;
export const WIDGETS_SUPPORTING_TAGS = items2;
