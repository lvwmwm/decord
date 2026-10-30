// Module ID: 12207
// Function ID: 12208
// Name: useActivityShelfItem
// Dependencies: [5, 4857, 2019, 1072, 5677, 1376, 11803, 12208, 12209, 1993, 6877, 11751, 11750, 7324, 4930, 7320, 11656, 11659, 10907, 2]
// Exports: default, getStaffReleasePhase

// Module 12207 (useActivityShelfItem)
import Constants from "Constants" /* 1072 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import Constants2 from "Constants" /* 2019 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4930 */;
import getPlatformDefault from "getPlatform" /* 5677 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 6877 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7320 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7324 */;
import leaveEmbeddedActivity from "leaveEmbeddedActivity" /* 10907 */;
import useCurrentEmbeddedApplicationDefault from "useCurrentEmbeddedApplication" /* 11750 */;
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity" /* 11751 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 11803 */;
import useEmbeddedAppsForChannelDefault from "useEmbeddedAppsForChannel" /* 12209 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;
import size from "module_2" /* 2 */;

let c2;

const f101216 = (str) => str.toUpperCase();
function useActivityAction(applicationId) {
  let context;
  let fetchesApplication;
  let obj;
  ({ context, fetchesApplication } = applicationId);
  applicationId = applicationId.applicationId;
  if (fetchesApplication === undefined) {
    fetchesApplication = true;
  }
  let getOrFetchApplication;
  const START = obj.START;
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const tmp4 = useCurrentEmbeddedActivityDefault();
  const tmp5 = useCurrentEmbeddedApplicationDefault({ fetchesApplication });
  obj = useGetOrFetchApplications;
  getOrFetchApplication = obj.useGetOrFetchApplication(applicationId, fetchesApplication);
  useEmbeddedAppsForChannelDefault(channel);
  if (null == getOrFetchApplication) {
    return START;
  } else {
    let JOIN;
    const getEmbeddedActivityLocationChannelId = tmp6(4930).getEmbeddedActivityLocationChannelId;
    embeddedActivityLocationUtils;
    if (tmp4 != null) {
      const _location = tmp4.location;
    }
    if (null != channel) {
      if (tmp11 === channel.id) {
        let id;
        if (tmp5 != null) {
          id = tmp5.id;
        }
        if (id === getOrFetchApplication.id) {
          JOIN = tmp.LEAVE;
        }
        return JOIN;
      }
    }
    JOIN = START;
    if (null != tmp9) {
      JOIN = tmp.JOIN;
    }
  }
}
function useOnActivityItemSelected(arg0) {
  let application;
  let commandOrigin;
  let componentId;
  let context;
  let customId;
  let fetchesApplication;
  let obj;
  let onConfirmActivityLaunchChecksAlertOpen;
  let referrerId;
  let sectionName;
  let source;
  ({ application, context } = arg0);
  ({ locationObject: importDefault, onActivityItemSelectedProp: dependencyMap, launchingComponentId: _asyncToGenerator, commandOrigin: EmbeddedActivitiesStore, sectionName: STAFF_RELEASE_PHASES, source: ApplicationFlags, fetchesApplication } = arg0);
  if (fetchesApplication === undefined) {
    fetchesApplication = true;
  }
  ({ customId: obj, referrerId: useActivityAction, onConfirmActivityLaunchChecksAlertOpen: useOnActivityItemSelected } = arg0);
  let analyticsLocations;
  let closure_12;
  let str;
  if (application != null) {
    str = application.id;
  }
  if (str == null) {
    str = "";
  }
  const tmp = useActivityAction({ context, applicationId: str, fetchesApplication });
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  closure_12 = useCurrentEmbeddedActivityDefault();
  if (null == application) {
    return () => {
      if (dependencyMap != null) {
        tmp({ applicationId: "" });
      }
    };
  } else if (obj.START === tmp) {
    const tmp4 = _asyncToGenerator;
    return _asyncToGenerator(async (arg0, value) => {
      let id;
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === locationObject) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_0 = tmp;
              const obj4 = { applicationId: str, channelId: id, locationObject: importDefault, analyticsLocations, componentId: _asyncToGenerator, commandOrigin: EmbeddedActivitiesStore, sectionName: STAFF_RELEASE_PHASES, source: ApplicationFlags, customId, referrerId: useActivityAction, onConfirmActivityLaunchChecksAlertOpen: useOnActivityItemSelected };
              id = null;
              const launch = locationObject(c2[16]).launch;
              const tmp27 = locationObject(c2[16]);
              if ("channel" === context.type) {
                id = context.channel.id;
              }
              locationObject = 1;
              c2 = 1;
              const obj5 = { value: launch(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            if (value) {
              if (closure_128_2 != null) {
                const obj = { applicationId: closure_128_10 };
                tmp6(obj);
              }
            }
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp21) {
          c2 = 3;
          throw tmp21;
        }
      }
    });
  } else if (obj.JOIN === tmp) {
    const tmp3 = _asyncToGenerator;
    return _asyncToGenerator(async (arg0, value) => {
      let id;
      let v2;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === locationObject) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_0 = tmp;
              if (!launchingActivity.isLaunchingActivity()) {
                const obj4 = { applicationId: str, activityChannelId: id, locationObject: importDefault, analyticsLocations, componentId: _asyncToGenerator, sectionName: STAFF_RELEASE_PHASES, source: ApplicationFlags, customId, referrerId: useActivityAction };
                id = undefined;
                const tmp13 = locationObject(c2[17]);
                if ("channel" === context.type) {
                  id = context.channel.id;
                }
                locationObject = 1;
                c2 = 1;
                const obj5 = { value: tmp13(obj4), done: false };
                return obj5;
              }
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else if (value) {
              let tmp6Result;
              if (closure_128_2 != null) {
                const obj7 = { applicationId: closure_128_10 };
                tmp6Result = tmp6(obj7);
              }
              locationObject = 2;
              c2 = 1;
              const obj8 = { value: tmp6Result, done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c2 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp23) {
          c2 = 3;
          throw tmp23;
        }
      }
    });
  } else {
    return obj.LEAVE === tmp ? (() => {
      if (!EmbeddedActivitiesStore.isLaunchingActivity()) {
        if (null != closure_12) {
          const obj2 = { location: tmp.location, applicationId: str };
          const obj = leaveEmbeddedActivity;
          const result = obj.leaveEmbeddedActivity(obj2);
        }
        if (dependencyMap != null) {
          const obj3 = { applicationId: str };
          tmp7(obj3);
        }
      }
    }) : undefined;
  }
}
const STAFF_RELEASE_PHASES = Constants2.STAFF_RELEASE_PHASES;
const ApplicationFlags = Constants.ApplicationFlags;
const ActivityAction = { START: 0, [0]: "START", JOIN: 1, [1]: "JOIN", LEAVE: 2, [2]: "LEAVE" };
let result = size.fileFinishedImporting("modules/activities/utils/useActivityShelfItem.tsx");

export default function useActivityShelfItem(backgroundResolution) {
  let NONE;
  let activityItem;
  let assetNames;
  let commandOrigin;
  let context;
  let launchingComponentId;
  let locationObject;
  let onActivityItemSelected;
  let source;
  let tmp16;
  ({ activityItem, context, assetNames } = backgroundResolution);
  ({ locationObject, onActivityItemSelected } = backgroundResolution);
  if (assetNames === undefined) {
    assetNames = ["embedded_cover"];
  }
  let num = backgroundResolution.backgroundResolution;
  if (num === undefined) {
    num = 250;
  }
  const application = activityItem.application;
  const activity = activityItem.activity;
  ({ launchingComponentId, commandOrigin, source } = backgroundResolution);
  const client_platform_config = activity.client_platform_config;
  const tmp3 = getPlatformDefault;
  const obj = PlatformUtils;
  const tmp5 = client_platform_config[tmp3(undefined, obj.getOS(obj))];
  const timestamp = Date.now();
  let tmp7 = null != tmp5.label_until;
  if (tmp7) {
    const _Date = Date;
    tmp7 = timestamp < Date.parse(tmp5.label_until);
  }
  if (tmp7) {
    tmp7 = null != tmp5.label_from;
  }
  if (tmp7) {
    const _Date2 = Date;
    tmp7 = timestamp > Date.parse(tmp5.label_from);
  }
  let tmp9 = null;
  const obj2 = { applicationId: application.id, size: num, names: assetNames, format: "webp" };
  const tmp8 = useEmbeddedActivityBackgroundDefault(obj2);
  if (null != activity.activity_preview_video_asset_id) {
    tmp9 = tmp(12208)(application.id, activity.activity_preview_video_asset_id);
  }
  let channel;
  const tmpResult = useEmbeddedAppsForChannelDefault;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const obj3 = { context, applicationId: application.id };
  const tmpResultResult = tmpResult(channel);
  const found = tmpResultResult.find((embeddedActivity) => application.id === embeddedActivity.embeddedActivity.applicationId);
  const obj4 = { application: activityItem.application, context, locationObject, onActivityItemSelectedProp: onActivityItemSelected, launchingComponentId, commandOrigin, source };
  const activity2 = activityItem.activity;
  const tmp13 = useActivityAction(obj3);
  const tmp14 = useOnActivityItemSelected(obj4);
  const tmp4Result = ApplicationFlagUtils;
  if (tmp4Result.hasApplicationFlag(application, ApplicationFlags.EMBEDDED_RELEASED)) {
    const client_platform_config2 = activity2.client_platform_config;
    const tmpResult2 = getPlatformDefault;
    const tmp4Result3 = PlatformUtils;
    const str = client_platform_config2[tmpResult2(undefined, tmp4Result3.getOS(tmp4Result3))].release_phase;
    let replaced;
    if (STAFF_RELEASE_PHASES.includes(str)) {
      const str4 = str.replace("_", " ");
      replaced = str4.replace(/(^\w|\s\w)/g, f101216);
    }
    tmp16 = replaced;
  } else {
    ApplicationFlagUtils;
  }
  const obj5 = { imageBackground: tmp8, videoUrl: tmp9, joinableEmbeddedApp: found, activityAction: tmp13, onActivityItemSelected: tmp14, labelType: NONE, staffReleasePhase: tmp16 };
  if (tmp7) {
    NONE = tmp5.label_type;
  } else {
    NONE = tmp4(1993).EmbeddedActivityLabelTypes.NONE;
  }
  return obj5;
};
export { ActivityAction };
export function getStaffReleasePhase(application, client_platform_config) {
  const obj = ApplicationFlagUtils;
  if (!obj.hasApplicationFlag(application, ApplicationFlags.EMBEDDED_RELEASED)) {
    ApplicationFlagUtils;
  }
  client_platform_config = client_platform_config.client_platform_config;
  const tmp4 = getPlatformDefault;
  const tmpResult2 = PlatformUtils;
  const str = client_platform_config[tmp4(undefined, tmpResult2.getOS(tmpResult2))].release_phase;
  let replaced;
  if (STAFF_RELEASE_PHASES.includes(str)) {
    const str4 = str.replace("_", " ");
    replaced = str4.replace(/(^\w|\s\w)/g, f101216);
  }
  return replaced;
}
export { useActivityAction };
export { useOnActivityItemSelected };
