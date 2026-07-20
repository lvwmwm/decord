// Module ID: 6850
// Function ID: 54207
// Name: items
// Dependencies: []

// Module 6850 (items)
let closure_2 = importDefault(dependencyMap[0]);
const items = [arg1(dependencyMap[1]).WidgetType.PERSONAL, arg1(dependencyMap[1]).WidgetType.APPLICATION, arg1(dependencyMap[1]).WidgetType.FAVORITE_GAMES, arg1(dependencyMap[1]).WidgetType.PLAYED_GAMES, arg1(dependencyMap[1]).WidgetType.CURRENT_GAMES, arg1(dependencyMap[1]).WidgetType.WANT_TO_PLAY_GAMES];
const items1 = [arg1(dependencyMap[1]).WidgetType.FAVORITE_GAMES];
const items2 = [arg1(dependencyMap[1]).WidgetType.CURRENT_GAMES, arg1(dependencyMap[1]).WidgetType.FAVORITE_GAMES];
const obj = {
  [arg1(dependencyMap[1]).WidgetType.FAVORITE_GAMES]: () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.sUQar8);
  },
  [arg1(dependencyMap[1]).WidgetType.CURRENT_GAMES]: () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.SqNnus);
  },
  [arg1(dependencyMap[1]).WidgetType.WANT_TO_PLAY_GAMES]: () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.bWSQwW);
  },
  [arg1(dependencyMap[1]).WidgetType.PLAYED_GAMES]: () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.scOKET);
  },
  [arg1(dependencyMap[1]).WidgetType.APPLICATION]: (applicationId) => {
    const application = application.getApplication(applicationId.applicationId);
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
  [arg1(dependencyMap[1]).WidgetType.PERSONAL]: () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.AVkYMx);
  }
};
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/user_profile/UserProfileWidgetConstants.tsx");

export const WIDGET_SORT_ORDER = items;
export const WIDGET_TITLES_BY_TYPE = obj;
export const WIDGETS_SUPPORTING_COMMENT = items1;
export const WIDGETS_SUPPORTING_TAGS = items2;
