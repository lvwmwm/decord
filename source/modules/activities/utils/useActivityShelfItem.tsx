// Module ID: 11166
// Function ID: 86833
// Name: getStaffReleasePhase
// Dependencies: []
// Exports: default

// Module 11166 (getStaffReleasePhase)
function getStaffReleasePhase(application, activity) {
  if (!obj.hasApplicationFlag(application, ApplicationFlags.EMBEDDED_RELEASED)) {
    const obj2 = activity(dependencyMap[10]);
  }
  const obj = activity(dependencyMap[10]);
  const obj3 = activity(dependencyMap[5]);
  let replaced;
  if (STAFF_RELEASE_PHASES.includes(activity.client_platform_config[importDefault(dependencyMap[4])(undefined, obj3.getOS(obj3))].release_phase)) {
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
  let arg1;
  const START = obj.START;
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const tmp2 = importDefault(dependencyMap[11])();
  const obj = { fetchesApplication };
  const tmp3 = importDefault(dependencyMap[12])(obj);
  const getOrFetchApplication = arg1(dependencyMap[13]).useGetOrFetchApplication(applicationId.applicationId, fetchesApplication);
  arg1 = getOrFetchApplication;
  importDefault(dependencyMap[8])(channel);
  if (null == getOrFetchApplication) {
    return START;
  } else {
    const getEmbeddedActivityLocationChannelId = arg1(dependencyMap[14]).getEmbeddedActivityLocationChannelId;
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
    const tmp9 = arg1(dependencyMap[14]);
  }
}
function useOnActivityItemSelected(arg0) {
  let application;
  let context;
  let fetchesApplication;
  ({ application, botUserIdForAppDM: closure_0, context } = arg0);
  const importDefault = context;
  ({ locationObject: closure_2, embeddedActivitiesManager: closure_3, onActivityItemSelectedProp: closure_4, launchingComponentId: closure_5, commandOrigin: closure_6, sectionName: closure_7, source: closure_8, fetchesApplication } = arg0);
  if (fetchesApplication === undefined) {
    fetchesApplication = true;
  }
  ({ customId: closure_9, referrerId: closure_10, onConfirmActivityLaunchChecksAlertOpen: closure_11 } = arg0);
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
  const obj = { context, applicationId: str, fetchesApplication };
  const tmp2 = useActivityAction(obj);
  analyticsLocations = importDefault(dependencyMap[15])().analyticsLocations;
  closure_14 = importDefault(dependencyMap[11])();
  closure_15 = arg1(dependencyMap[16]).canLaunchFrame(application);
  if (null == application) {
    return () => {
      if (null != launchingActivity) {
        const obj = { applicationId: "" };
        launchingActivity(obj);
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
      return obj.LEAVE === tmp2 ? () => {
        if (!launchingActivity.isLaunchingActivity()) {
          if (null != _location) {
            let obj = { location: _location.location, applicationId: str };
            closure_3.leaveActivity(obj);
          }
          if (null != launchingActivity) {
            obj = { applicationId: str };
            launchingActivity(obj);
          }
        }
      } : undefined;
    }
  }
  const obj2 = arg1(dependencyMap[16]);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const STAFF_RELEASE_PHASES = arg1(dependencyMap[2]).STAFF_RELEASE_PHASES;
const ApplicationFlags = arg1(dependencyMap[3]).ApplicationFlags;
const obj = { START: 0, [0]: "START", JOIN: 1, [1]: "JOIN", LEAVE: 2, [2]: "LEAVE" };
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/activities/utils/useActivityShelfItem.tsx");

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
    assetNames = ["RollOutRight"];
  }
  let num = backgroundResolution.backgroundResolution;
  if (num === undefined) {
    num = 250;
  }
  let arg1;
  const application = activityItem.application;
  arg1 = application;
  const activity = activityItem.activity;
  ({ launchingComponentId, commandOrigin, source } = backgroundResolution);
  let obj = arg1(dependencyMap[5]);
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
  const tmp = importDefault(dependencyMap[4]);
  if (null != activity.activity_preview_video_asset_id) {
    tmp6 = importDefault(dependencyMap[7])(application.id, activity.activity_preview_video_asset_id);
  }
  let channel;
  const tmp5 = importDefault(dependencyMap[6])(obj);
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const tmp9 = importDefault(dependencyMap[8]);
  obj = { context, applicationId: application.id };
  const found = importDefault(dependencyMap[8])(channel).find((embeddedActivity) => application.id === embeddedActivity.embeddedActivity.applicationId);
  const obj1 = { application: activityItem.application, context, locationObject, embeddedActivitiesManager, onActivityItemSelectedProp: onActivityItemSelected, launchingComponentId, commandOrigin, source };
  const tmp9Result = importDefault(dependencyMap[8])(channel);
  const tmp12 = useActivityAction(obj);
  const obj2 = { imageBackground: tmp5, videoUrl: tmp6, joinableEmbeddedApp: found, activityAction: tmp12, onActivityItemSelected: useOnActivityItemSelected(obj1) };
  const tmp13 = useOnActivityItemSelected(obj1);
  if (tmp4) {
    let NONE = tmp2.label_type;
  } else {
    NONE = arg1(dependencyMap[9]).EmbeddedActivityLabelTypes.NONE;
  }
  obj2.labelType = NONE;
  obj2.staffReleasePhase = getStaffReleasePhase(application, activityItem.activity);
  return obj2;
};
export const ActivityAction = obj;
export { getStaffReleasePhase };
export { useActivityAction };
export { useOnActivityItemSelected };
