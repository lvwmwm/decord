// Module ID: 11929
// Function ID: 11930
// Name: useActivityShelfItem
// Dependencies: [5, 4823, 2023, 1084, 558, 576, 5634, 1381, 11510, 11930, 11931, 1997, 6813, 11458, 11457, 7259, 4893, 7255, 11364, 11367, 10774, 2]
// Exports: getStaffReleasePhase

// Module 11929 (useActivityShelfItem)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1084 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import Constants2 from "Constants" /* 2023 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4893 */;
import getPlatformDefault from "getPlatform" /* 5634 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 6813 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7255 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7259 */;
import leaveEmbeddedActivity from "leaveEmbeddedActivity" /* 10774 */;
import useCurrentEmbeddedApplicationDefault from "useCurrentEmbeddedApplication" /* 11457 */;
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity" /* 11458 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 11510 */;
import useEmbeddedAppsForChannelDefault from "useEmbeddedAppsForChannel" /* 11931 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4823 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;

const f112656 = (str) => str.toUpperCase();
const STAFF_RELEASE_PHASES = Constants2.STAFF_RELEASE_PHASES;
const ApplicationFlags = Constants.ApplicationFlags;
const ActivityAction = { START: 0, [0]: "START", JOIN: 1, [1]: "JOIN", LEAVE: 2, [2]: "LEAVE" };
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActivityShelfItem(arg0) {
  let activityItem;
  let assetNames;
  let backgroundResolution;
  let commandOrigin;
  let context;
  let launchingComponentId;
  let locationObject;
  let onActivityItemSelected;
  let source;
  let tmp4;
  const obj = react;
  const cResult = obj.c(36);
  ({ activityItem, context, locationObject, onActivityItemSelected, assetNames, backgroundResolution, launchingComponentId, commandOrigin, source } = arg0);
  if (cResult[0] !== assetNames) {
    let items = assetNames;
    if (undefined === assetNames) {
      items = ["embedded_cover"];
    }
    cResult[0] = assetNames;
    cResult[1] = items;
    tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  let num3 = 250;
  if (undefined !== backgroundResolution) {
    num3 = backgroundResolution;
  }
  const application = activityItem.application;
  const activity = activityItem.activity;
  const client_platform_config = activity.client_platform_config;
  const tmp6 = getPlatformDefault;
  const tmpResult = PlatformUtils;
  const tmp7 = client_platform_config[tmp6(undefined, tmpResult.getOS(tmpResult))];
  const timestamp = Date.now();
  let tmp9 = null != tmp7.label_until;
  if (tmp9) {
    const _Date = Date;
    tmp9 = timestamp < Date.parse(tmp7.label_until);
  }
  if (tmp9) {
    tmp9 = null != tmp7.label_from;
  }
  if (tmp9) {
    const _Date2 = Date;
    tmp9 = timestamp > Date.parse(tmp7.label_from);
  }
  if (cResult[2] === application.id) {
    if (cResult[3] === tmp4) {
      let tmp10;
      if (cResult[4] === num3) {
        tmp10 = cResult[5];
      }
      const tmp11 = useEmbeddedActivityBackgroundDefault(tmp10);
      if (cResult[6] === activity.activity_preview_video_asset_id) {
        let tmp12;
        let tmp17;
        if (cResult[7] === application.id) {
          tmp12 = cResult[8];
        }
        let channel;
        const tmp5Result = useEmbeddedAppsForChannelDefault;
        if ("channel" === context.type) {
          channel = context.channel;
        }
        const tmp5ResultResult = tmp5Result(channel);
        if (cResult[9] === application.id) {
          let tmp16;
          if (cResult[10] === tmp5ResultResult) {
            tmp16 = cResult[11];
          }
          if (cResult[14] === application.id) {
            let tmp19;
            if (cResult[15] === context) {
              tmp19 = cResult[16];
            }
            const tmp21 = closure_8(tmp19);
            if (cResult[17] === activityItem.application) {
              if (cResult[18] === commandOrigin) {
                if (cResult[19] === context) {
                  if (cResult[20] === launchingComponentId) {
                    if (cResult[21] === locationObject) {
                      if (cResult[22] === onActivityItemSelected) {
                        let tmp22;
                        if (cResult[23] === source) {
                          tmp22 = cResult[24];
                        }
                        const tmp24 = closure_9(tmp22);
                        if (cResult[25] === activityItem.activity) {
                          let tmp25;
                          let NONE;
                          if (cResult[26] === application) {
                            tmp25 = cResult[27];
                          }
                          if (tmp9) {
                            NONE = tmp7.label_type;
                          } else {
                            NONE = tmp(1997).EmbeddedActivityLabelTypes.NONE;
                          }
                          if (cResult[28] === tmp21) {
                            if (cResult[29] === tmp11) {
                              if (cResult[30] === tmp16) {
                                if (cResult[31] === tmp24) {
                                  if (cResult[32] === tmp25) {
                                    if (cResult[33] === NONE) {
                                      let tmp31;
                                      if (cResult[34] === tmp12) {
                                        tmp31 = cResult[35];
                                      }
                                      return tmp31;
                                    }
                                  }
                                }
                              }
                            }
                          }
                          const obj2 = { imageBackground: tmp11, videoUrl: tmp12, joinableEmbeddedApp: tmp16, activityAction: tmp21, onActivityItemSelected: tmp24, labelType: NONE, staffReleasePhase: tmp25 };
                          cResult[28] = tmp21;
                          cResult[29] = tmp11;
                          cResult[30] = tmp16;
                          cResult[31] = tmp24;
                          cResult[32] = tmp25;
                          cResult[33] = NONE;
                          cResult[34] = tmp12;
                          cResult[35] = obj2;
                          tmp31 = obj2;
                        }
                        const activity2 = activityItem.activity;
                        const tmpResult4 = ApplicationFlagUtils;
                        if (tmpResult4.hasApplicationFlag(application, ApplicationFlags.EMBEDDED_RELEASED)) {
                          const client_platform_config2 = activity2.client_platform_config;
                          const tmp5Result2 = getPlatformDefault;
                          const tmpResult5 = PlatformUtils;
                          const str2 = client_platform_config2[tmp5Result2(undefined, tmpResult5.getOS(tmpResult5))].release_phase;
                          let replaced;
                          if (STAFF_RELEASE_PHASES.includes(str2)) {
                            const str5 = str2.replace("_", " ");
                            replaced = str5.replace(/(^\w|\s\w)/g, f112656);
                          }
                        } else {
                          ApplicationFlagUtils;
                        }
                        cResult[25] = activityItem.activity;
                        cResult[26] = application;
                        cResult[27] = tmp27;
                        tmp25 = tmp27;
                      }
                    }
                  }
                }
              }
            }
            const obj3 = { application: activityItem.application, context, locationObject, onActivityItemSelectedProp: onActivityItemSelected, launchingComponentId, commandOrigin, source };
            cResult[17] = activityItem.application;
            cResult[18] = commandOrigin;
            cResult[19] = context;
            cResult[20] = launchingComponentId;
            cResult[21] = locationObject;
            cResult[22] = onActivityItemSelected;
            cResult[23] = source;
            cResult[24] = obj3;
            tmp22 = obj3;
          }
          const obj4 = { context, applicationId: application.id };
          cResult[14] = application.id;
          cResult[15] = context;
          cResult[16] = obj4;
          tmp19 = obj4;
        }
        if (cResult[12] !== application.id) {
          const fn = function w(embeddedActivity) {
            return application.id === embeddedActivity.embeddedActivity.applicationId;
          };
          cResult[12] = application.id;
          cResult[13] = fn;
          tmp17 = fn;
        } else {
          tmp17 = cResult[13];
        }
        const found = tmp5ResultResult.find(tmp17);
        cResult[9] = application.id;
        cResult[10] = tmp5ResultResult;
        cResult[11] = found;
        tmp16 = found;
      }
      let tmp13 = null;
      if (null != activity.activity_preview_video_asset_id) {
        tmp13 = tmp5(11930)(application.id, activity.activity_preview_video_asset_id);
      }
      cResult[6] = activity.activity_preview_video_asset_id;
      cResult[7] = application.id;
      cResult[8] = tmp13;
      tmp12 = tmp13;
    }
  }
  const obj5 = { applicationId: application.id, size: num3, names: tmp4, format: "webp" };
  cResult[2] = application.id;
  cResult[3] = tmp4;
  cResult[4] = num3;
  cResult[5] = obj5;
  tmp10 = obj5;
}) : (function useActivityShelfItem(backgroundResolution) {
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
    tmp9 = tmp(11930)(application.id, activity.activity_preview_video_asset_id);
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
  const tmp13 = closure_8(obj3);
  const tmp14 = closure_9(obj4);
  const tmp4Result = ApplicationFlagUtils;
  if (tmp4Result.hasApplicationFlag(application, ApplicationFlags.EMBEDDED_RELEASED)) {
    const client_platform_config2 = activity2.client_platform_config;
    const tmpResult2 = getPlatformDefault;
    const tmp4Result3 = PlatformUtils;
    const str = client_platform_config2[tmpResult2(undefined, tmp4Result3.getOS(tmp4Result3))].release_phase;
    let replaced;
    if (STAFF_RELEASE_PHASES.includes(str)) {
      const str4 = str.replace("_", " ");
      replaced = str4.replace(/(^\w|\s\w)/g, f112656);
    }
    tmp16 = replaced;
  } else {
    ApplicationFlagUtils;
  }
  const obj5 = { imageBackground: tmp8, videoUrl: tmp9, joinableEmbeddedApp: found, activityAction: tmp13, onActivityItemSelected: tmp14, labelType: NONE, staffReleasePhase: tmp16 };
  if (tmp7) {
    NONE = tmp5.label_type;
  } else {
    NONE = tmp4(1997).EmbeddedActivityLabelTypes.NONE;
  }
  return obj5;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActivityAction(applicationId) {
  let context;
  let fetchesApplication;
  let tmp9;
  const obj = react;
  const cResult = obj.c(2);
  ({ context, fetchesApplication } = applicationId);
  let tmp4 = undefined === fetchesApplication;
  applicationId = applicationId.applicationId;
  if (!tmp4) {
    tmp4 = fetchesApplication;
  }
  const START = obj.START;
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const tmp8 = useCurrentEmbeddedActivityDefault();
  if (cResult[0] !== tmp4) {
    const obj2 = { fetchesApplication: tmp4 };
    cResult[0] = tmp4;
    cResult[1] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[1];
  }
  const tmp10 = useCurrentEmbeddedApplicationDefault(tmp9);
  const tmpResult = useGetOrFetchApplications;
  const getOrFetchApplication = tmpResult.useGetOrFetchApplication(applicationId, tmp4);
  useEmbeddedAppsForChannelDefault(channel);
  if (null == getOrFetchApplication) {
    return START;
  } else {
    let JOIN;
    const getEmbeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId;
    embeddedActivityLocationUtils;
    if (tmp8 != null) {
      const _location = tmp8.location;
    }
    if (null != channel) {
      if (tmp15 === channel.id) {
        let id;
        if (tmp10 != null) {
          id = tmp10.id;
        }
        if (id === getOrFetchApplication.id) {
          JOIN = tmp5.LEAVE;
        }
        return JOIN;
      }
    }
    JOIN = START;
    if (null != tmp13) {
      JOIN = tmp5.JOIN;
    }
  }
}) : (function useActivityAction(applicationId) {
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
    const getEmbeddedActivityLocationChannelId = tmp6(4893).getEmbeddedActivityLocationChannelId;
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
});
let closure_8 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOnActivityItemSelected(locationObject) {
  let application;
  let context;
  let customId;
  let fetchesApplication;
  let onActivityItemSelectedProp;
  const tmp = onActivityItemSelectedProp;
  let obj = context(onActivityItemSelectedProp[5]);
  const cResult = obj.c(35);
  ({ application, context } = locationObject);
  locationObject = locationObject.locationObject;
  onActivityItemSelectedProp = locationObject.onActivityItemSelectedProp;
  const launchingComponentId = locationObject.launchingComponentId;
  const commandOrigin = locationObject.commandOrigin;
  const sectionName = locationObject.sectionName;
  const source = locationObject.source;
  ({ fetchesApplication, customId } = locationObject);
  const referrerId = locationObject.referrerId;
  const onConfirmActivityLaunchChecksAlertOpen = locationObject.onConfirmActivityLaunchChecksAlertOpen;
  const tmp3 = undefined === fetchesApplication || fetchesApplication;
  let str;
  if (application != null) {
    str = application.id;
  }
  if (str == null) {
    str = "";
  }
  if (cResult[0] === str) {
    if (cResult[1] === context) {
      let tmp4;
      if (cResult[2] === tmp3) {
        tmp4 = cResult[3];
      }
      const tmp6 = referrerId(tmp4);
      const tmp7 = locationObject;
      const analyticsLocations = locationObject(tmp[17])().analyticsLocations;
      let closure_12 = locationObject(tmp[13])();
      const tmp8 = locationObject(tmp[13])();
      if (null == application) {
        let tmp11;
        if (cResult[4] !== onActivityItemSelectedProp) {
          class C {
            constructor() {
              if (onActivityItemSelectedProp != null) {
                tmp({ applicationId: "" });
              }
            }
          }
          cResult[4] = onActivityItemSelectedProp;
          cResult[5] = C;
          tmp11 = C;
        } else {
          class C {
            constructor() {
              if (onActivityItemSelectedProp != null) {
                tmp({ applicationId: "" });
              }
            }
          }
        }
        return tmp11;
      } else {
        class C {
          constructor() {
            if (onActivityItemSelectedProp != null) {
              tmp({ applicationId: "" });
            }
          }
        }
        if (customId.START === tmp6) {
          class C {
            constructor() {
              if (onActivityItemSelectedProp != null) {
                tmp({ applicationId: "" });
              }
            }
          }
          let closure_0 = launchingComponentId(function*(arg0, value) {
            let id;
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
                return { value: "IconComponent", done: null };
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
                    const obj4 = { applicationId, channelId: id, locationObject, analyticsLocations, componentId, commandOrigin, sectionName, source, customId, referrerId, onConfirmActivityLaunchChecksAlertOpen };
                    id = null;
                    const launch = locationObject(onActivityItemSelectedProp[18]).launch;
                    const tmp27 = locationObject(onActivityItemSelectedProp[18]);
                    if ("channel" === tmp.type) {
                      id = tmp.channel.id;
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
                    if (c2 != null) {
                      const obj = { applicationId };
                      tmp6(obj);
                    }
                  }
                  c2 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp21) {
                c2 = 3;
                throw tmp21;
              }
            }
          });
          function _t2() {
            return closure_0(...arguments);
          }
          cResult[6] = analyticsLocations;
          cResult[7] = str;
          cResult[8] = commandOrigin;
          cResult[9] = context.channel;
          cResult[10] = context.type;
          cResult[11] = customId;
          cResult[12] = launchingComponentId;
          cResult[13] = locationObject;
          cResult[14] = onActivityItemSelectedProp;
          cResult[15] = onConfirmActivityLaunchChecksAlertOpen;
          cResult[16] = referrerId;
          cResult[17] = sectionName;
          cResult[18] = source;
          cResult[19] = _t2;
        } else {
          class C {
            constructor() {
              if (onActivityItemSelectedProp != null) {
                tmp({ applicationId: "" });
              }
            }
          }
        }
      }
    }
  }
  let obj2 = { context, applicationId: str, fetchesApplication: tmp3 };
  cResult[0] = str;
  cResult[1] = context;
  cResult[2] = tmp3;
  cResult[3] = obj2;
  tmp4 = obj2;
}) : (function useOnActivityItemSelected(arg0) {
  let application;
  let commandOrigin;
  let componentId;
  let context;
  let customId;
  let fetchesApplication;
  let obj;
  let onConfirmActivityLaunchChecksAlertOpen;
  let sectionName;
  let source;
  ({ application, context } = arg0);
  ({ locationObject: importDefault, onActivityItemSelectedProp: dependencyMap, launchingComponentId: _asyncToGenerator, commandOrigin: EmbeddedActivitiesStore, sectionName: STAFF_RELEASE_PHASES, source: ApplicationFlags, fetchesApplication } = arg0);
  if (fetchesApplication === undefined) {
    fetchesApplication = true;
  }
  ({ customId: obj, referrerId: closure_8, onConfirmActivityLaunchChecksAlertOpen: closure_9 } = arg0);
  let analyticsLocations;
  let closure_12;
  let str;
  if (application != null) {
    str = application.id;
  }
  if (str == null) {
    str = "";
  }
  const tmp = referrerId({ context, applicationId: str, fetchesApplication });
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
          return { value: "IconComponent", done: null };
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
              const obj4 = { applicationId: str, channelId: id, locationObject: importDefault, analyticsLocations, componentId: _asyncToGenerator, commandOrigin: EmbeddedActivitiesStore, sectionName: STAFF_RELEASE_PHASES, source: ApplicationFlags, customId, referrerId, onConfirmActivityLaunchChecksAlertOpen };
              id = null;
              const launch = locationObject(c2[18]).launch;
              const tmp27 = locationObject(c2[18]);
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
            return { value: "IconComponent", done: null };
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
          return { value: "IconComponent", done: null };
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
                const obj4 = { applicationId: str, activityChannelId: id, locationObject: importDefault, analyticsLocations, componentId: _asyncToGenerator, sectionName: STAFF_RELEASE_PHASES, source: ApplicationFlags, customId, referrerId };
                id = undefined;
                const tmp13 = locationObject(c2[19]);
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
          return { value: "IconComponent", done: null };
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
});
let closure_9 = tmp4;
function getStaffReleasePhase(application, client_platform_config) {
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
    replaced = str4.replace(/(^\w|\s\w)/g, f112656);
  }
  return replaced;
}
let result = size.fileFinishedImporting("modules/activities/utils/useActivityShelfItem.tsx");

export default tmp2;
export { ActivityAction };
export { getStaffReleasePhase };
export const useActivityAction = tmp3;
export const useOnActivityItemSelected = tmp4;
