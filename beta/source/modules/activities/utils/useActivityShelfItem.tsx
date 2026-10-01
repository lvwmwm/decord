// Module ID: 11539
// Function ID: 11540
// Name: useActivityShelfItem
// Dependencies: [5, 2044, 2005, 1074, 8500, 8713, 1364, 8933, 11540, 11541, 1979, 8321, 8913, 8912, 6589, 4458, 6583, 8783, 8760, 4849, 10741, 8826, 2]
// Exports: default, getStaffReleasePhase

// Module 11539 (useActivityShelfItem)
import Constants from "Constants" /* 1074 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import Constants2 from "Constants" /* 2005 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4458 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 6589 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 8321 */;
import FramesConstants from "FramesConstants" /* 8500 */;
import getPlatformDefault from "getPlatform" /* 8713 */;
import canLaunchFrame from "canLaunchFrame" /* 8783 */;
import useCurrentEmbeddedApplicationDefault from "useCurrentEmbeddedApplication" /* 8912 */;
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity" /* 8913 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 8933 */;
import useEmbeddedAppsForChannelDefault from "useEmbeddedAppsForChannel" /* 11541 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import size from "module_2" /* 2 */;

let c0, c4, c5;

const f93856 = (str) => str.toUpperCase();
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
    const getEmbeddedActivityLocationChannelId = tmp6(4458).getEmbeddedActivityLocationChannelId;
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
  let closure_11;
  let componentId;
  let context;
  let customId;
  let fetchesApplication;
  let obj;
  let referrerId;
  let sectionName;
  let source;
  ({ application, botUserIdForAppDM: require, context } = arg0);
  ({ locationObject: dependencyMap, embeddedActivitiesManager: _asyncToGenerator, onActivityItemSelectedProp: EmbeddedActivitiesStore, launchingComponentId: STAFF_RELEASE_PHASES, commandOrigin: ApplicationFlags, sectionName: MAIN_SURFACE, source: obj, fetchesApplication } = arg0);
  if (fetchesApplication === undefined) {
    fetchesApplication = true;
  }
  ({ customId: useActivityAction, referrerId: useOnActivityItemSelected, onConfirmActivityLaunchChecksAlertOpen: closure_11 } = arg0);
  let analyticsLocations;
  let closure_14;
  let closure_15;
  let str;
  if (application != null) {
    str = application.id;
  }
  if (str == null) {
    str = "";
  }
  let tmp = useActivityAction({ context, applicationId: str, fetchesApplication });
  analyticsLocations = context(6583)().analyticsLocations;
  closure_14 = context(8913)();
  obj = canLaunchFrame;
  closure_15 = obj.canLaunchFrame(application);
  if (null == application) {
    return () => {
      if (EmbeddedActivitiesStore != null) {
        tmp({ applicationId: "" });
      }
    };
  } else {
    const tmp2 = obj;
    if (obj.START === tmp) {
      return _asyncToGenerator(async (arg0, value) => {
        let closure_1;
        let closure_2;
        let id;
        let obj5;
        let tmp;
        if (c5 === 2) {
          c5 = 3;
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
          let c3;
          try {
            let channelId;
            let launchFrame;
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                channelId = undefined;
                const tmp46 = closure_15;
                if (tmp46) {
                  c3 = 1;
                  launchFrame = tmp(locationObject[18]).launchFrame;
                  const obj4 = { applicationId: str, surface, analyticsContext: obj5 };
                  obj5 = { isStart: true, analyticsLocations, source, channelId: id };
                  id = undefined;
                  const tmp33 = tmp(locationObject[18]);
                  if ("channel" === context.type) {
                    id = context.channel.id;
                  }
                  launchFrame = launchFrame(obj4);
                  c4 = 2;
                  c5 = 1;
                  const obj6 = { value: launchFrame, done: false };
                  return obj6;
                } else {
                  let id1;
                  if ("channel" === context.type) {
                    id1 = context.channel.id;
                  }
                  channelId = id1;
                  if (null != require) {
                    c3 = 2;
                    const obj8 = { recipientIds: tmp13, navigateToChannel: true };
                    const obj7 = tmp(locationObject[19]);
                    launchFrame = obj7.openPrivateChannel(obj8);
                    c4 = 5;
                    c5 = 1;
                    const obj9 = { value: launchFrame, done: false };
                    return obj9;
                  }
                }
              }
            } else if (1 === c4) {
              c3 = 0;
              c5 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              if (2 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj10 = { value, done: true };
                  return obj10;
                } else {
                  launchFrame = closure_129_4;
                  if (closure_129_4 != null) {
                    const obj11 = { applicationId: closure_129_12 };
                    launchFrame(obj11);
                  }
                  c3 = 0;
                }
              } else if (3 === c4) {
                c3 = 0;
                c5 = 3;
                return { value: "HermesInternal", done: null };
              } else if (4 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj12 = { value, done: true };
                  return obj12;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                let obj = { value, done: true };
                return obj;
              } else {
                channelId = value;
                c3 = 0;
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
            const obj13 = { targetApplicationId: closure_129_12, locationObject: closure_129_2, channelId, analyticsLocations: closure_129_13, componentId: closure_129_5, commandOrigin: closure_129_6, sectionName: closure_129_7, source: closure_129_8, customId: closure_129_9, referrerId: closure_129_10, onConfirmActivityLaunchChecksAlertOpen: closure_129_11 };
            const promise = tmp(locationObject[20])(obj13);
            launchFrame = promise.then((result) => {
              let tmp = result;
              if (tmp) {
                let tmp2Result;
                if (closure_1_4 != null) {
                  const obj = { applicationId };
                  tmp2Result = tmp2(obj);
                }
                tmp = tmp2Result;
              }
              return tmp;
            });
            c4 = 4;
            c5 = 1;
            const obj14 = { value: launchFrame, done: false };
            return obj14;
          } catch (tmp39) {
            locationObject = tmp39;
            if (0 === c3) {
              c5 = 3;
              throw tmp39;
            } else if (1 === tmp41) {
              c4 = 1;
            } else {
              c4 = 3;
            }
          }
        }
      });
    } else if (tmp2.JOIN === tmp) {
      let tmp3 = _asyncToGenerator;
      return _asyncToGenerator(async (arg0, value) => {
        let id;
        let tmp6Result;
        let v1;
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
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
            c0 = 2;
            if (0 === context) {
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else if (!launchingActivity.isLaunchingActivity()) {
                const obj4 = { applicationId: str, activityChannelId: id, locationObject: dependencyMap, analyticsLocations, componentId: STAFF_RELEASE_PHASES, sectionName: MAIN_SURFACE, source, customId: useActivityAction, referrerId: useOnActivityItemSelected };
                id = undefined;
                const tmp6 = context(locationObject[21]);
                if ("channel" === context.type) {
                  id = context.channel.id;
                }
                context = 1;
                c0 = 1;
                const obj5 = {
                  value: tmp6Result.then((result) => {
                            let tmp = result;
                            if (tmp) {
                              let tmp2Result;
                              if (launchingActivity != null) {
                                const obj = { applicationId };
                                tmp2Result = tmp2(obj);
                              }
                              tmp = tmp2Result;
                            }
                            return tmp;
                          }),
                  done: false
                };
                tmp6Result = tmp6(obj4);
                return obj5;
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              let obj = { value, done: true };
              return obj;
            }
            c0 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp16) {
            c0 = 3;
            throw tmp16;
          }
        }
      });
    } else {
      return tmp2.LEAVE === tmp ? (() => {
        if (!EmbeddedActivitiesStore.isLaunchingActivity()) {
          if (null != closure_14) {
            const obj = { location: tmp.location, applicationId: str };
            _asyncToGenerator.leaveActivity(obj);
          }
          if (EmbeddedActivitiesStore != null) {
            const obj2 = { applicationId: str };
            tmp6(obj2);
          }
        }
      }) : undefined;
    }
  }
}
const STAFF_RELEASE_PHASES = Constants2.STAFF_RELEASE_PHASES;
const ApplicationFlags = Constants.ApplicationFlags;
const MAIN_SURFACE = FramesConstants.MAIN_SURFACE;
const ActivityAction = { START: 0, [0]: "START", JOIN: 1, [1]: "JOIN", LEAVE: 2, [2]: "LEAVE" };
const result = size.fileFinishedImporting("modules/activities/utils/useActivityShelfItem.tsx");

export default function useActivityShelfItem(backgroundResolution) {
  let NONE;
  let activityItem;
  let assetNames;
  let commandOrigin;
  let context;
  let embeddedActivitiesManager;
  let launchingComponentId;
  let locationObject;
  let onActivityItemSelected;
  let source;
  let tmp16;
  ({ activityItem, context, assetNames } = backgroundResolution);
  ({ locationObject, onActivityItemSelected, embeddedActivitiesManager } = backgroundResolution);
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
    tmp9 = tmp(11540)(application.id, activity.activity_preview_video_asset_id);
  }
  let channel;
  const tmpResult = useEmbeddedAppsForChannelDefault;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const obj3 = { context, applicationId: application.id };
  const tmpResultResult = tmpResult(channel);
  const found = tmpResultResult.find((embeddedActivity) => application.id === embeddedActivity.embeddedActivity.applicationId);
  const obj4 = { application: activityItem.application, context, locationObject, embeddedActivitiesManager, onActivityItemSelectedProp: onActivityItemSelected, launchingComponentId, commandOrigin, source };
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
      replaced = str4.replace(/(^\w|\s\w)/g, f93856);
    }
    tmp16 = replaced;
  } else {
    ApplicationFlagUtils;
  }
  const obj5 = { imageBackground: tmp8, videoUrl: tmp9, joinableEmbeddedApp: found, activityAction: tmp13, onActivityItemSelected: tmp14, labelType: NONE, staffReleasePhase: tmp16 };
  if (tmp7) {
    NONE = tmp5.label_type;
  } else {
    NONE = tmp4(1979).EmbeddedActivityLabelTypes.NONE;
  }
  return obj5;
};
export { ActivityAction };
export const getStaffReleasePhase = function getStaffReleasePhase(application, client_platform_config) {
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
    replaced = str4.replace(/(^\w|\s\w)/g, f93856);
  }
  return replaced;
};
export { useActivityAction };
export { useOnActivityItemSelected };
