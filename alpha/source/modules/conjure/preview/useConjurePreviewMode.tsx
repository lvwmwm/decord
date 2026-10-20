// Module ID: 11724
// Function ID: 11725
// Name: useConjurePreviewMode
// Dependencies: [32, 19, 502, 6724, 558, 576, 504, 11725, 11717, 11729, 6757, 11235, 11020, 11019, 11056, 5587, 2]
// Exports: resolvePreviewAppChannel

// Module 11724 (useConjurePreviewMode)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5587 */;
import FramesConstants from "FramesConstants" /* 6724 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11019 */;
import conjurePreviewFrameSurfaces from "conjurePreviewFrameSurfaces" /* 11020 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const isLaunched = FramesConstants.isLaunched;
let closure_7 = [];
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePreviewMode(applicationId) {
  let closure_2;
  let data2;
  let declaredActivity;
  let installScope;
  let isLoading;
  let mainCardOnly;
  let ownerAuthorizationRevoked;
  let previewAppChannels;
  let previewApplicationId;
  let previewFrameSurface;
  let previewSupportedSurfaces;
  let supportsOverlay;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp20;
  let tmp21;
  let tmp29;
  let tmp30;
  let tmp44;
  let tmp7;
  let tmp9;
  const tmp = applicationId;
  let obj = applicationId(576);
  const cResult = obj.c(26);
  applicationId = applicationId.applicationId;
  ({ previewApplicationId, declaredActivity, previewSupportedSurfaces, mainCardOnly, supportsOverlay, previewAppChannels } = applicationId);
  let tmp4 = undefined !== mainCardOnly;
  ({ installScope, ownerAuthorizationRevoked } = applicationId);
  if (tmp4) {
    tmp4 = mainCardOnly;
  }
  let tmp5 = undefined !== supportsOverlay && supportsOverlay;
  if (undefined === previewAppChannels) {
    previewAppChannels = closure_7;
  }
  let tmp6 = _slicedToArray(react.useState(null), 2);
  [r10027, tmp7] = tmp6;
  let tmp8 = _slicedToArray(react.useState(null), 2);
  [tmp9, tmp10] = tmp8;
  let tmp11 = _slicedToArray(react.useState(null), 2);
  [tmp12, tmp13] = tmp11;
  let tmp14 = _slicedToArray(react.useState(applicationId), 2);
  if (tmp14[0] !== applicationId) {
    let tmp15 = tmp14[1](applicationId);
    tmp7(null);
    tmp10(null);
    tmp13(null);
  }
  let tmp19 = null;
  if (null != previewApplicationId) {
    tmp19 = null;
    if (previewApplicationId === applicationId) {
      tmp19 = previewApplicationId;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    class H {
      constructor() {
        return id.getId();
      }
    }
    cResult[0] = items;
    cResult[1] = H;
    tmp20 = items;
    tmp21 = H;
  } else {
    [tmp20, tmp21] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp20, tmp21);
  const tmp24 = previewFrameSurface(11725);
  const applicationWidgetConfig = tmp24(stateFromStores, tmp19).applicationWidgetConfig;
  let surfaces;
  if (applicationWidgetConfig != null) {
    surfaces = applicationWidgetConfig.surfaces;
  }
  let tmp28;
  const profileSurfaceAvailability = tmp(11717).profileSurfaceAvailability;
  tmp(11717);
  if (surfaces != null) {
    tmp28 = surfaces[tmp(undefined, 11729).ApplicationWidgetConfigSurface.WIDGET_TOP];
  }
  const obj2 = { widgetTop: null != tmp28, widgetBottom: null != tmp29, miniProfile: null != tmp30 };
  tmp29 = undefined;
  if (surfaces != null) {
    tmp29 = surfaces[tmp(undefined, 11729).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  }
  tmp30 = undefined;
  if (surfaces != null) {
    tmp30 = surfaces[tmp(undefined, 11729).ApplicationWidgetConfigSurface.MINI_PROFILE];
  }
  const result = profileSurfaceAvailability(obj2);
  const tmp32 = null != tmp19 && (tmp4 ? result.hasMainCard : result.hasAny);
  const useApplication = tmp(6757).useApplication;
  tmp(6757);
  const data = useApplication(previewApplicationId).data;
  let tmp35 = null != previewApplicationId;
  if (tmp35) {
    let id;
    if (data != null) {
      const bot = data.bot;
      if (bot != null) {
        id = bot.id;
      }
    }
    tmp35 = null != id;
  }
  const useApplication2 = tmp(6757).useApplication;
  tmp(6757);
  const application2 = useApplication2(applicationId);
  ({ data: data2, isLoading } = application2);
  if (!declaredActivity) {
    const tmpResult12 = tmp(11235);
    declaredActivity = tmpResult12.canLaunchContextlessFrame(data2);
  }
  let obj3 = { legacy: { hasFrame: declaredActivity, hasProfileWidget: tmp32, hasBotDm: tmp35 }, widgetResolvable: null != tmp19, botDmResolvable: tmp35 };
  const tmpResult13 = tmp(11717);
  const result1 = tmpResult13.previewCapabilitiesFromSurfaces(previewSupportedSurfaces, obj3);
  const obj4 = { installScope, hasOverlay: tmp5, ownerAuthorizationRevoked };
  const previewModeAvailability = tmp(11717).previewModeAvailability;
  tmp(11717);
  const merged = Object.assign(result1);
  const result2 = previewModeAvailability(obj4);
  if (cResult[2] !== previewSupportedSurfaces) {
    const tmpResult15 = tmp(11020);
    const result3 = tmpResult15.previewFrameSurfaceOptions(previewSupportedSurfaces);
    cResult[2] = previewSupportedSurfaces;
    class H {
      constructor() {
        return id.getId();
      }
    }
    cResult[3] = result3;
    tmp44 = result3;
  } else {
    tmp44 = cResult[3];
  }
  if (cResult[4] === tmp44) {
    if (cResult[5] === previewAppChannels) {
      if (cResult[6] === tmp12) {
        let tmp47;
        if (cResult[7] === tmp9) {
          previewFrameSurface = cResult[8];
          tmp47 = cResult[9];
        }
        dependencyMap = tmp47;
        if (cResult[10] !== tmp47) {
          let tmp52;
          if (null != tmp47) {
            tmp52 = { customId: tmp47 };
            const obj5 = { customId: tmp47 };
          }
          class H {
            constructor() {
              return id.getId();
            }
          }
          cResult[11] = tmp52;
        }
        class H {
          constructor() {
            return id.getId();
          }
        }
        function ce() {
          if (null != applicationId) {
            const obj3 = conjurePreviewSurface;
            const conjureBuilderPreviewFrames = obj3.getConjureBuilderPreviewFrames(tmp);
            for (const item10007 of conjureBuilderPreviewFrames) {
              let customId;
              let tmp3 = item10007;
              let type = item10007.surface.type;
              let tmp5 = require;
              let obj = conjurePreviewFrameSurfaces;
              let tmp9 = type !== obj.previewFrameLaunchType(previewFrameSurface);
              if (isLaunched(item10007)) {
                customId = tmp3.data.launch.customId;
              } else {
                let launch = tmp3.launch;
                if (launch != null) {
                  customId = launch.customId;
                }
              }
              let tmp13 = tmp9;
              if (!tmp13) {
                let tmp14 = customId;
                if (customId == null) {
                  tmp14 = null;
                }
                tmp13 = tmp14 !== closure_2;
              }
              if (tmp13) {
                let tmp5Result = tmp5(11056);
                let leaveFrameResult = tmp5Result.leaveFrame(tmp3.id);
              }
              continue;
            }
          }
        }
        const items1 = [applicationId, tmp46, tmp47];
        cResult[12] = tmp47;
        cResult[13] = applicationId;
        cResult[14] = tmp46;
        cResult[15] = items1;
        cResult[16] = ce;
      }
    }
  }
  const tmpResult16 = tmp(11020);
  previewFrameSurface = tmpResult16.resolvePreviewFrameSurface(tmp9, tmp44);
  let tmp49 = null;
  if (previewFrameSurface === tmp(5587).EmbeddedSurfaceType.APP_CHANNEL) {
    tmp49 = null;
    if (previewAppChannels.length >= 2) {
      let first;
      if (null == tmp12) {
        first = previewAppChannels[0];
      } else {
        first = tmp12;
      }
      tmp49 = first;
    }
  }
  cResult[4] = tmp44;
  cResult[5] = previewAppChannels;
  cResult[6] = tmp12;
  cResult[7] = tmp9;
  cResult[8] = previewFrameSurface;
  cResult[9] = tmp49;
  tmp47 = tmp49;
}) : (function useConjurePreviewMode(applicationId) {
  let data2;
  let declaredActivity;
  let installScope;
  let isLoading;
  let ownerAuthorizationRevoked;
  let previewApplicationId;
  let previewMode;
  let previewSupportedSurfaces;
  let tmp2;
  let tmp24;
  let tmp25;
  let tmp3;
  let tmp5;
  let tmp6;
  let tmp8;
  let tmp9;
  applicationId = applicationId.applicationId;
  ({ previewApplicationId, declaredActivity, previewSupportedSurfaces } = applicationId);
  let flag = applicationId.mainCardOnly;
  ({ installScope, ownerAuthorizationRevoked } = applicationId);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = applicationId.supportsOverlay;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let previewAppChannels = applicationId.previewAppChannels;
  if (previewAppChannels === undefined) {
    previewAppChannels = closure_7;
  }
  let previewFrameSurface;
  let first;
  let obj = react;
  const tmp = first(react.useState(null), 2);
  [tmp2, tmp3] = tmp;
  let tmp4 = first(react.useState(null), 2);
  [tmp5, tmp6] = tmp4;
  let tmp7 = first(react.useState(null), 2);
  [tmp8, tmp9] = tmp7;
  let tmp10 = first(react.useState(applicationId), 2);
  if (tmp10[0] !== applicationId) {
    let tmp11 = tmp10[1](applicationId);
    tmp3(null);
    tmp6(null);
    tmp9(null);
  }
  let tmp15 = null;
  if (null != previewApplicationId) {
    tmp15 = null;
    if (previewApplicationId === applicationId) {
      tmp15 = previewApplicationId;
    }
  }
  let tmp16 = applicationId;
  let tmp17 = previewFrameSurface;
  const items = [AuthenticationStore];
  const obj2 = applicationId(previewFrameSurface[6]);
  const stateFromStores = obj2.useStateFromStores(items, () => id.getId());
  const tmp19 = previewSupportedSurfaces(previewFrameSurface[7]);
  const applicationWidgetConfig = tmp19(stateFromStores, tmp15).applicationWidgetConfig;
  let surfaces;
  if (applicationWidgetConfig != null) {
    surfaces = applicationWidgetConfig.surfaces;
  }
  let tmp23;
  const profileSurfaceAvailability = tmp16(tmp17[8]).profileSurfaceAvailability;
  tmp16(tmp17[8]);
  if (surfaces != null) {
    tmp23 = surfaces[tmp16(undefined, tmp17[9]).ApplicationWidgetConfigSurface.WIDGET_TOP];
  }
  let obj3 = { widgetTop: null != tmp23, widgetBottom: null != tmp24, miniProfile: null != tmp25 };
  tmp24 = undefined;
  if (surfaces != null) {
    tmp24 = surfaces[tmp16(undefined, tmp17[9]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  }
  tmp25 = undefined;
  if (surfaces != null) {
    tmp25 = surfaces[tmp16(undefined, tmp17[9]).ApplicationWidgetConfigSurface.MINI_PROFILE];
  }
  const result = profileSurfaceAvailability(obj3);
  const tmp27 = null != tmp15 && (flag ? result.hasMainCard : result.hasAny);
  const useApplication = tmp16(tmp17[10]).useApplication;
  tmp16(tmp17[10]);
  const data = useApplication(previewApplicationId).data;
  let tmp30 = null != previewApplicationId;
  if (tmp30) {
    let id;
    if (data != null) {
      const bot = data.bot;
      if (bot != null) {
        id = bot.id;
      }
    }
    tmp30 = null != id;
  }
  const useApplication2 = tmp16(tmp17[10]).useApplication;
  tmp16(tmp17[10]);
  const application2 = useApplication2(applicationId);
  ({ data: data2, isLoading } = application2);
  if (!declaredActivity) {
    const tmp16Result10 = tmp16(tmp17[11]);
    declaredActivity = tmp16Result10.canLaunchContextlessFrame(data2);
  }
  const obj4 = { legacy: { hasFrame: declaredActivity, hasProfileWidget: tmp27, hasBotDm: tmp30 }, widgetResolvable: null != tmp15, botDmResolvable: tmp30 };
  const tmp16Result11 = tmp16(tmp17[8]);
  const result1 = tmp16Result11.previewCapabilitiesFromSurfaces(previewSupportedSurfaces, obj4);
  const obj5 = { installScope, hasOverlay: flag2, ownerAuthorizationRevoked };
  const previewModeAvailability = tmp16(tmp17[8]).previewModeAvailability;
  tmp16(tmp17[8]);
  const merged = Object.assign(result1);
  const result2 = previewModeAvailability(obj5);
  const items1 = [previewSupportedSurfaces];
  const memo = obj.useMemo(() => {
    const obj = conjurePreviewFrameSurfaces;
    return obj.previewFrameSurfaceOptions(previewSupportedSurfaces);
  }, items1);
  const tmp16Result13 = tmp16(tmp17[12]);
  previewFrameSurface = tmp16Result13.resolvePreviewFrameSurface(tmp5, memo);
  let tmp42 = null;
  if (previewFrameSurface === tmp16(tmp17[15]).EmbeddedSurfaceType.APP_CHANNEL) {
    tmp42 = null;
    if (previewAppChannels.length >= 2) {
      if (null == first) {
        first = previewAppChannels[0];
      }
      tmp42 = first;
    }
  }
  first = tmp42;
  const items2 = [tmp42];
  const items3 = [applicationId, previewFrameSurface, tmp42];
  const memo1 = obj.useMemo(() => {
    let tmp2;
    if (null != first) {
      tmp2 = { customId: tmp };
      const obj = { customId: tmp };
    }
    return tmp2;
  }, items2);
  const effect = obj.useEffect(() => {
    if (null != applicationId) {
      const obj3 = conjurePreviewSurface;
      const conjureBuilderPreviewFrames = obj3.getConjureBuilderPreviewFrames(tmp);
      for (const item10007 of conjureBuilderPreviewFrames) {
        let customId;
        let tmp3 = item10007;
        let type = item10007.surface.type;
        let tmp5 = require;
        let obj = conjurePreviewFrameSurfaces;
        let tmp9 = type !== obj.previewFrameLaunchType(previewFrameSurface);
        if (isLaunched(item10007)) {
          customId = tmp3.data.launch.customId;
        } else {
          let launch = tmp3.launch;
          if (launch != null) {
            customId = launch.customId;
          }
        }
        let tmp13 = tmp9;
        if (!tmp13) {
          let tmp14 = customId;
          if (customId == null) {
            tmp14 = null;
          }
          tmp13 = tmp14 !== first;
        }
        if (tmp13) {
          let tmp5Result = tmp5(11056);
          let leaveFrameResult = tmp5Result.leaveFrame(tmp3.id);
        }
        continue;
      }
    }
  }, items3);
  const obj6 = { availability: result2, isResolving: null != applicationId && isLoading && null == data2, activeMode: previewMode, setMode: tmp3, frameSurface: previewFrameSurface, frameSurfaceOptions: memo, setFrameSurface: tmp6, appChannel: tmp42, setAppChannel: tmp9, frameLaunchParams: memo1, widgetApplicationId: tmp15 };
  previewMode = null;
  if (!(null != applicationId && isLoading && null == data2)) {
    const tmp16Result14 = tmp16(tmp17[8]);
    previewMode = tmp16Result14.resolvePreviewMode(tmp2, result2);
  }
  return obj6;
});
function resolvePreviewAppChannel(arg0, arg1, arr) {
  let tmp = null;
  if (arg1 === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
    tmp = null;
    if (arr.length >= 2) {
      let first = arg0;
      if (null == arg0) {
        first = arr[0];
      }
      tmp = first;
    }
  }
  return tmp;
}
let result = size.fileFinishedImporting("modules/conjure/preview/useConjurePreviewMode.tsx");

export const useConjurePreviewMode = tmp2;
export { resolvePreviewAppChannel };
