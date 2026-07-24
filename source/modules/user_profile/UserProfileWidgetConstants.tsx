// Module ID: 6861
// Function ID: 54316
// Name: items
// Dependencies: [4167, 6856, 1212, 2]

// Module 6861 (items)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const items = [require("WidgetType").WidgetType.PERSONAL, require("WidgetType").WidgetType.APPLICATION, require("WidgetType").WidgetType.FAVORITE_GAMES, require("WidgetType").WidgetType.PLAYED_GAMES, require("WidgetType").WidgetType.CURRENT_GAMES, require("WidgetType").WidgetType.WANT_TO_PLAY_GAMES];
const items1 = [require("WidgetType").WidgetType.FAVORITE_GAMES];
const items2 = [require("WidgetType").WidgetType.CURRENT_GAMES, require("WidgetType").WidgetType.FAVORITE_GAMES];
const obj = {
  [arg1(6856).WidgetType.FAVORITE_GAMES]: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.sUQar8);
  },
  [arg1(6856).WidgetType.CURRENT_GAMES]: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.SqNnus);
  },
  [arg1(6856).WidgetType.WANT_TO_PLAY_GAMES]: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.bWSQwW);
  },
  [arg1(6856).WidgetType.PLAYED_GAMES]: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.scOKET);
  },
  [arg1(6856).WidgetType.APPLICATION]: (applicationId) => {
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
  [arg1(6856).WidgetType.PERSONAL]: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.AVkYMx);
  }
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_profile/UserProfileWidgetConstants.tsx");

export const WIDGET_SORT_ORDER = items;
export const WIDGET_TITLES_BY_TYPE = obj;
export const WIDGETS_SUPPORTING_COMMENT = items1;
export const WIDGETS_SUPPORTING_TAGS = items2;
