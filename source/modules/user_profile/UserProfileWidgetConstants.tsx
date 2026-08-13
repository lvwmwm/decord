// Module ID: 7133
// Function ID: 7134
// Name: items
// Dependencies: [4383, 7129, 1236, 2]

// Module 7133 (items)
import addApplication from "addApplication";

const require = arg1;
const items = [require("WidgetType").WidgetType.PERSONAL, require("WidgetType").WidgetType.CLIPS_GALLERY, require("WidgetType").WidgetType.APPLICATION, require("WidgetType").WidgetType.FAVORITE_GAMES, require("WidgetType").WidgetType.PLAYED_GAMES, require("WidgetType").WidgetType.CURRENT_GAMES, require("WidgetType").WidgetType.WANT_TO_PLAY_GAMES];
const items1 = [require("WidgetType").WidgetType.FAVORITE_GAMES];
const items2 = [require("WidgetType").WidgetType.CURRENT_GAMES, require("WidgetType").WidgetType.FAVORITE_GAMES, require("WidgetType").WidgetType.CLIPS_GALLERY];
const obj = {
  [arg1(7129).WidgetType.FAVORITE_GAMES]: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Rpf6Ak);
  },
  [arg1(7129).WidgetType.CURRENT_GAMES]: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.zs6NsE);
  },
  [arg1(7129).WidgetType.WANT_TO_PLAY_GAMES]: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.I509Dl);
  },
  [arg1(7129).WidgetType.PLAYED_GAMES]: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.QTq6Pf);
  },
  [arg1(7129).WidgetType.APPLICATION]: (applicationId) => {
    application = application.getApplication(applicationId.applicationId);
    let str;
    if (application != null) {
      str = application.name;
    }
    if (str == null) {
      str = "";
    }
    return str;
  },
  [arg1(7129).WidgetType.PERSONAL]: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.AVkYMx);
  },
  [arg1(7129).WidgetType.CLIPS_GALLERY]: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.zY8Ghg);
  }
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_profile/UserProfileWidgetConstants.tsx");

export const WIDGET_SORT_ORDER = items;
export const WIDGET_TITLES_BY_TYPE = obj;
export const WIDGETS_SUPPORTING_COMMENT = items1;
export const WIDGETS_SUPPORTING_TAGS = items2;
