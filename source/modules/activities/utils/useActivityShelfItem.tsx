// Module ID: 11177
// Function ID: 86896
// Name: getStaffReleasePhase
// Dependencies: [5, 1347, 4155, 653, 8183, 477, 10614, 11178, 11179, 1881, 7371, 10599, 10598, 5470, 3748, 5464, 10482, 10483, 4140, 10827, 10522, 2]
// Exports: default

// Module 11177 (getStaffReleasePhase)
import set from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { STAFF_RELEASE_PHASES } from "items3";
import { ApplicationFlags } from "ME";

const require = arg1;
function getStaffReleasePhase(application, activity) {
  if (!obj.hasApplicationFlag(application, ApplicationFlags.EMBEDDED_RELEASED)) {
    const obj2 = require(7371) /* getApplicationFlags */;
  }
  obj = require(7371) /* getApplicationFlags */;
  const obj3 = require(477) /* set */;
  const str = activity.client_platform_config[importDefault(8183)(undefined, obj3.getOS(obj3))].release_phase;
  let replaced;
  if (STAFF_RELEASE_PHASES.includes(str)) {
    replaced = str.replace("_", " ").replace(/(^\w|\s\w)/g, (str) => str.toUpperCase());
    const str4 = str.replace("_", " ");
  }
  return replaced;
}
function useActivityAction(applicationId) {
  let context;
  let fetchesApplication;
  ({ context, fetchesApplication } = applicationId);
  if (fetchesApplication === undefined) {
    fetchesApplication = true;
  }
  let getOrFetchApplication;
  const START = obj.START;
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  let tmp2 = importDefault(10599)();
  obj = { fetchesApplication };
  const tmp3 = importDefault(10598)(obj);
  getOrFetchApplication = getOrFetchApplication(5470).useGetOrFetchApplication(applicationId.applicationId, fetchesApplication);
  importDefault(11179)(channel);
  if (null == getOrFetchApplication) {
    return START;
  } else {
    const getEmbeddedActivityLocationChannelId = getOrFetchApplication(3748).getEmbeddedActivityLocationChannelId;
    if (null != tmp2) {
      const _location = tmp2.location;
    }
    if (null != channel) {
      if (tmp10 === channel.id) {
        let id;
        if (null != tmp3) {
          id = tmp3.id;
        }
        if (id === getOrFetchApplication.id) {
          let JOIN = obj.LEAVE;
        }
        return JOIN;
      }
    }
    JOIN = START;
    if (null != tmp6) {
      JOIN = obj.JOIN;
    }
    const tmp9 = getOrFetchApplication(3748);
  }
}
function useOnActivityItemSelected(arg0) {
  let ApplicationFlags;
  let STAFF_RELEASE_PHASES;
  let application;
  let closure_11;
  let set;
  let _createForOfIteratorHelperLoose;
  let context;
  let dependencyMap;
  let fetchesApplication;
  let getStaffReleasePhase;
  let obj;
  let require;
  let useActivityAction;
  let useOnActivityItemSelected;
  ({ application, botUserIdForAppDM: require, context } = arg0);
  ({ locationObject: dependencyMap, embeddedActivitiesManager: set, onActivityItemSelectedProp: _createForOfIteratorHelperLoose, launchingComponentId: STAFF_RELEASE_PHASES, commandOrigin: ApplicationFlags, sectionName: obj, source: getStaffReleasePhase, fetchesApplication } = arg0);
  if (fetchesApplication === undefined) {
    fetchesApplication = true;
  }
  ({ customId: useActivityAction, referrerId: useOnActivityItemSelected, onConfirmActivityLaunchChecksAlertOpen: closure_11 } = arg0);
  let str;
  let analyticsLocations;
  let closure_14;
  let closure_15;
  let id;
  if (null != application) {
    id = application.id;
  }
  str = "";
  if (null != id) {
    str = id;
  }
  obj = { context, applicationId: str, fetchesApplication };
  const tmp2 = useActivityAction(obj);
  analyticsLocations = context(5464)().analyticsLocations;
  closure_14 = context(10599)();
  closure_15 = require(10482) /* canLaunchFrame */.canLaunchFrame(application);
  if (null == application) {
    return () => {
      if (null != callback) {
        const obj = { applicationId: "" };
        callback(obj);
      }
    };
  } else if (obj.START === tmp2) {
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(id);
  } else {
    const JOIN = obj.JOIN;
    if (JOIN === tmp2) {
      // CreateGeneratorClosureLongIndex (0x67)
      return callback(JOIN);
    } else {
      return obj.LEAVE === tmp2 ? (() => {
        if (!outer1_4.isLaunchingActivity()) {
          if (null != _location) {
            let obj = { location: _location.location, applicationId: str };
            set.leaveActivity(obj);
          }
          if (null != callback) {
            obj = { applicationId: str };
            callback(obj);
          }
        }
      }) : undefined;
    }
  }
  const obj2 = require(10482) /* canLaunchFrame */;
}
let obj = { START: 0, [0]: "START", JOIN: 1, [1]: "JOIN", LEAVE: 2, [2]: "LEAVE" };
const result = require("items3").fileFinishedImporting("modules/activities/utils/useActivityShelfItem.tsx");

export default function useActivityShelfItem(backgroundResolution) {
  let activityItem;
  let assetNames;
  let commandOrigin;
  let context;
  let embeddedActivitiesManager;
  let launchingComponentId;
  let locationObject;
  let onActivityItemSelected;
  let source;
  ({ activityItem, context, assetNames } = backgroundResolution);
  ({ locationObject, onActivityItemSelected, embeddedActivitiesManager } = backgroundResolution);
  if (assetNames === undefined) {
    assetNames = ["embedded_cover"];
  }
  let num = backgroundResolution.backgroundResolution;
  if (num === undefined) {
    num = 250;
  }
  let application;
  application = activityItem.application;
  const activity = activityItem.activity;
  ({ launchingComponentId, commandOrigin, source } = backgroundResolution);
  let obj = application(477);
  const tmp2 = activity.client_platform_config[importDefault(8183)(undefined, obj.getOS(obj))];
  const timestamp = Date.now();
  let tmp4 = null != tmp2.label_until;
  if (tmp4) {
    const _Date = Date;
    tmp4 = timestamp < Date.parse(tmp2.label_until);
  }
  if (tmp4) {
    tmp4 = null != tmp2.label_from;
  }
  if (tmp4) {
    const _Date2 = Date;
    tmp4 = timestamp > Date.parse(tmp2.label_from);
  }
  obj = { applicationId: application.id, size: num, names: assetNames, format: "webp" };
  let tmp6 = null;
  const tmp = importDefault(8183);
  if (null != activity.activity_preview_video_asset_id) {
    tmp6 = importDefault(11178)(application.id, activity.activity_preview_video_asset_id);
  }
  let channel;
  const tmp5 = importDefault(10614)(obj);
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const tmp9 = importDefault(11179);
  obj = { context, applicationId: application.id };
  const found = importDefault(11179)(channel).find((embeddedActivity) => application.id === embeddedActivity.embeddedActivity.applicationId);
  const obj1 = { application: activityItem.application, context, locationObject, embeddedActivitiesManager, onActivityItemSelectedProp: onActivityItemSelected, launchingComponentId, commandOrigin, source };
  const tmp9Result = importDefault(11179)(channel);
  const tmp12 = useActivityAction(obj);
  const obj2 = { imageBackground: tmp5, videoUrl: tmp6, joinableEmbeddedApp: found, activityAction: tmp12, onActivityItemSelected: useOnActivityItemSelected(obj1) };
  const tmp13 = useOnActivityItemSelected(obj1);
  if (tmp4) {
    let NONE = tmp2.label_type;
  } else {
    NONE = application(1881).EmbeddedActivityLabelTypes.NONE;
  }
  obj2.labelType = NONE;
  obj2.staffReleasePhase = getStaffReleasePhase(application, activityItem.activity);
  return obj2;
};
export const ActivityAction = obj;
export { getStaffReleasePhase };
export { useActivityAction };
export { useOnActivityItemSelected };
