// Module ID: 7899
// Function ID: 7900
// Name: UserProfileWidgetConstants
// Dependencies: [5017, 7895, 1119, 2]

// Module 7899 (UserProfileWidgetConstants)
import util from "util" /* 1119 */;
import ApplicationStore from "ApplicationStore" /* 5017 */;

require = fn;
const items = [fn(7895).WidgetType.PERSONAL, fn(7895).WidgetType.CLIPS_GALLERY, fn(7895).WidgetType.APPLICATION, fn(7895).WidgetType.FAVORITE_GAMES, fn(7895).WidgetType.PLAYED_GAMES, fn(7895).WidgetType.CURRENT_GAMES, fn(7895).WidgetType.WANT_TO_PLAY_GAMES];
const items1 = [fn(7895).WidgetType.FAVORITE_GAMES];
const items2 = [fn(7895).WidgetType.CURRENT_GAMES, fn(7895).WidgetType.FAVORITE_GAMES, fn(7895).WidgetType.CLIPS_GALLERY];
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/UserProfileWidgetConstants.tsx");

export const WIDGET_SORT_ORDER = items;
export const WIDGET_TITLES_BY_TYPE = {
  [fn(7895).WidgetType.FAVORITE_GAMES]: () => {
    const intl = util.intl;
    return intl.string(util.t.Rpf6Ak);
  },
  [fn(7895).WidgetType.CURRENT_GAMES]: () => {
    const intl = util.intl;
    return intl.string(util.t.zs6NsE);
  },
  [fn(7895).WidgetType.WANT_TO_PLAY_GAMES]: () => {
    const intl = util.intl;
    return intl.string(util.t.I509Dl);
  },
  [fn(7895).WidgetType.PLAYED_GAMES]: () => {
    const intl = util.intl;
    return intl.string(util.t.QTq6Pf);
  },
  [fn(7895).WidgetType.APPLICATION]: (applicationId) => {
    const application = ApplicationStore.getApplication(applicationId.applicationId);
    let str;
    if (application != null) {
      str = application.name;
    }
    if (str == null) {
      str = "";
    }
    return str;
  },
  [fn(7895).WidgetType.PERSONAL]: () => {
    const intl = util.intl;
    return intl.string(util.t.AVkYMx);
  },
  [fn(7895).WidgetType.CLIPS_GALLERY]: () => {
    const intl = util.intl;
    return intl.string(util.t.zY8Ghg);
  }
};
export const WIDGETS_SUPPORTING_COMMENT = items1;
export const WIDGETS_SUPPORTING_TAGS = items2;
