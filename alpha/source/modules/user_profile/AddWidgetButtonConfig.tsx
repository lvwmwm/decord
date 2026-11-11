// Module ID: 15706
// Function ID: 15707
// Name: AddWidgetButtonConfig
// Dependencies: [2162, 7291, 7289, 15707, 1113, 2]
// Exports: getAddWidgetAriaLabel, getAddWidgetPlaceholder, getAddWidgetTitle

// Module 15706 (AddWidgetButtonConfig)
import intl2 from "intl" /* 1113 */;
import WidgetType from "WidgetType" /* 7289 */;
import UserProfileWidgetConstants from "UserProfileWidgetConstants" /* 7291 */;
import SampleGameWidgetData from "SampleGameWidgetData" /* 15707 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import size from "module_2" /* 2 */;

const WIDGET_TITLES_BY_TYPE = UserProfileWidgetConstants.WIDGET_TITLES_BY_TYPE;
let obj = {
  placeholder() {
    const obj = { variant: "details", applicationId: SampleGameWidgetData.SampleGameIds.LEAGUE_OF_LEGENDS };
    return obj;
  },
  getAriaLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.xJtdIm);
  }
};
const obj2 = {
  placeholder() {
    const obj = { variant: "details", applicationId: SampleGameWidgetData.SampleGameIds.VALORANT };
    return obj;
  },
  getAriaLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.Ae8tRi);
  }
};
const obj3 = {
  placeholder() {
    let items;
    const obj = { variant: "grid", applicationIds: items };
    items = [SampleGameWidgetData.SampleGameIds.PEAK, SampleGameWidgetData.SampleGameIds.BATTLEFIELD_6, SampleGameWidgetData.SampleGameIds.REPO, SampleGameWidgetData.SampleGameIds.BALDURS_GATE_3];
    return obj;
  },
  getAriaLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t["pBR+4j"]);
  }
};
const obj4 = {
  placeholder() {
    let items;
    const obj = { variant: "grid", applicationIds: items };
    items = [SampleGameWidgetData.SampleGameIds.MARVEL_RIVALS, SampleGameWidgetData.SampleGameIds.WORLD_OF_WARCRAFT, SampleGameWidgetData.SampleGameIds.RUST, SampleGameWidgetData.SampleGameIds.SILKSONG];
    return obj;
  },
  getAriaLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.NtoBi1);
  }
};
const obj5 = {
  placeholder(applicationId) {
    return { variant: "application-widget", applicationId: applicationId.applicationId };
  },
  getAriaLabel(applicationId) {
    const intl = intl2.intl;
    const formatToPlainString = intl.formatToPlainString;
    const KfGahB = intl2.t.KfGahB;
    const application = ApplicationStore.getApplication(applicationId.applicationId);
    let applicationName;
    if (application != null) {
      applicationName = application.name;
    }
    if (applicationName == null) {
      applicationName = "";
    }
    return formatToPlainString(KfGahB, { applicationName });
  }
};
const obj6 = {
  placeholder() {
    return { variant: "personal" };
  },
  getAriaLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t["1l30oB"]);
  },
  getTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.f8kllL);
  }
};
const obj7 = {
  placeholder() {
    return { variant: "clips-gallery" };
  },
  getAriaLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t["7AVpta"]);
  }
};
let closure_4 = { [WidgetType.WidgetType.FAVORITE_GAMES]: obj, [WidgetType.WidgetType.CURRENT_GAMES]: obj2, [WidgetType.WidgetType.PLAYED_GAMES]: obj3, [WidgetType.WidgetType.WANT_TO_PLAY_GAMES]: obj4, [WidgetType.WidgetType.APPLICATION]: obj5, [WidgetType.WidgetType.PERSONAL]: obj6, [WidgetType.WidgetType.CLIPS_GALLERY]: obj7 };
const result = size.fileFinishedImporting("modules/user_profile/AddWidgetButtonConfig.tsx");

export function getAddWidgetPlaceholder(widget) {
  const obj = closure_4[widget.type];
  return obj.placeholder(widget);
}
export function getAddWidgetAriaLabel(widget) {
  const obj = closure_4[widget.type];
  return obj.getAriaLabel(widget);
}
export function getAddWidgetTitle(widget) {
  let title;
  const getTitle = closure_4[widget.type].getTitle;
  if (null != getTitle) {
    title = getTitle(widget);
  } else {
    title = WIDGET_TITLES_BY_TYPE[widget.type](widget);
  }
  return title;
}
