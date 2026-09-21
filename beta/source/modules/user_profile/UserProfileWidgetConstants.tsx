// Module ID: 7867
// Function ID: 7868
// Name: UserProfileWidgetConstants
// Dependencies: [4985, 7863, 1119, 2]

// Module 7867 (UserProfileWidgetConstants)
import util from "util" /* 1119 */;
import ApplicationStore from "ApplicationStore" /* 4985 */;

require = fn;
const items = [fn(7863).WidgetType.PERSONAL, fn(7863).WidgetType.CLIPS_GALLERY, fn(7863).WidgetType.APPLICATION, fn(7863).WidgetType.FAVORITE_GAMES, fn(7863).WidgetType.PLAYED_GAMES, fn(7863).WidgetType.CURRENT_GAMES, fn(7863).WidgetType.WANT_TO_PLAY_GAMES];
const items1 = [fn(7863).WidgetType.FAVORITE_GAMES];
const items2 = [fn(7863).WidgetType.CURRENT_GAMES, fn(7863).WidgetType.FAVORITE_GAMES, fn(7863).WidgetType.CLIPS_GALLERY];
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/UserProfileWidgetConstants.tsx");

export const WIDGET_SORT_ORDER = items;
export const WIDGET_TITLES_BY_TYPE = {
  [fn(7863).WidgetType.FAVORITE_GAMES]: () => {
    const intl = util.intl;
    return intl.string(util.t.Rpf6Ak);
  },
  [fn(7863).WidgetType.CURRENT_GAMES]: () => {
    const intl = util.intl;
    return intl.string(util.t.zs6NsE);
  },
  [fn(7863).WidgetType.WANT_TO_PLAY_GAMES]: () => {
    const intl = util.intl;
    return intl.string(util.t.I509Dl);
  },
  [fn(7863).WidgetType.PLAYED_GAMES]: () => {
    const intl = util.intl;
    return intl.string(util.t.QTq6Pf);
  },
  [fn(7863).WidgetType.APPLICATION]: (applicationId) => {
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
  [fn(7863).WidgetType.PERSONAL]: () => {
    const intl = util.intl;
    return intl.string(util.t.AVkYMx);
  },
  [fn(7863).WidgetType.CLIPS_GALLERY]: () => {
    const intl = util.intl;
    return intl.string(util.t.zY8Ghg);
  }
};
export const WIDGETS_SUPPORTING_COMMENT = items1;
export const WIDGETS_SUPPORTING_TAGS = items2;
