// Module ID: 17077
// Function ID: 17078
// Name: useConjurePreviewMode
// Dependencies: [32, 19, 502, 558, 576, 504, 17078, 17079, 13328, 6852, 10803, 11416, 11415, 10821, 2]

// Module 17077 (useConjurePreviewMode)
import conjurePreviewSurface from "conjurePreviewSurface" /* 11415 */;
import conjurePreviewFrameSurfaces from "conjurePreviewFrameSurfaces" /* 11416 */;
import useUserApplicationWidgetDataDefault from "useUserApplicationWidgetData" /* 17078 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePreviewMode(applicationId) {
  let closure_1;
  let data2;
  let declaredActivity;
  let installScope;
  let isLoading;
  let mainCardOnly;
  let ownerAuthorizationRevoked;
  let previewApplicationId;
  let previewSupportedSurfaces;
  let supportsOverlay;
  let tmp10;
  let tmp16;
  let tmp17;
  let tmp25;
  let tmp26;
  let tmp41;
  let tmp7;
  let tmp9;
  const tmp = applicationId;
  let obj = applicationId(576);
  const cResult = obj.c(18);
  applicationId = applicationId.applicationId;
  ({ previewApplicationId, declaredActivity, previewSupportedSurfaces, mainCardOnly, supportsOverlay } = applicationId);
  let tmp4 = undefined !== mainCardOnly;
  ({ installScope, ownerAuthorizationRevoked } = applicationId);
  if (tmp4) {
    tmp4 = mainCardOnly;
  }
  let tmp5 = undefined !== supportsOverlay && supportsOverlay;
  let tmp6 = _slicedToArray(react.useState(null), 2);
  [r10026, tmp7] = tmp6;
  let tmp8 = _slicedToArray(react.useState(null), 2);
  [tmp9, tmp10] = tmp8;
  let tmp11 = _slicedToArray(react.useState(applicationId), 2);
  const obj2 = react;
  if (tmp11[0] !== applicationId) {
    tmp11[1](applicationId);
    tmp7(null);
    tmp10(null);
  }
  let tmp15 = null;
  if (null != previewApplicationId) {
    tmp15 = null;
    if (previewApplicationId === applicationId) {
      tmp15 = previewApplicationId;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    class B {
      constructor() {
        return closure_1_5.getId();
      }
    }
    cResult[0] = items;
    cResult[1] = B;
    tmp16 = items;
    tmp17 = B;
  } else {
    [tmp16, tmp17] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp16, tmp17);
  const tmp20 = useUserApplicationWidgetDataDefault;
  const applicationWidgetConfig = tmp20(stateFromStores, tmp15).applicationWidgetConfig;
  let surfaces;
  if (applicationWidgetConfig != null) {
    surfaces = applicationWidgetConfig.surfaces;
  }
  let tmp24;
  const profileSurfaceAvailability = tmp(17079).profileSurfaceAvailability;
  tmp(17079);
  if (surfaces != null) {
    tmp24 = surfaces[tmp(undefined, 13328).ApplicationWidgetConfigSurface.WIDGET_TOP];
  }
  let obj3 = { widgetTop: null != tmp24, widgetBottom: null != tmp25, miniProfile: null != tmp26 };
  tmp25 = undefined;
  if (surfaces != null) {
    tmp25 = surfaces[tmp(undefined, 13328).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  }
  tmp26 = undefined;
  if (surfaces != null) {
    tmp26 = surfaces[tmp(undefined, 13328).ApplicationWidgetConfigSurface.MINI_PROFILE];
  }
  const result = profileSurfaceAvailability(obj3);
  const tmp28 = null != tmp15 && (tmp4 ? result.hasMainCard : result.hasAny);
  const useApplication = tmp(6852).useApplication;
  tmp(6852);
  const data = useApplication(previewApplicationId).data;
  let tmp31 = null != previewApplicationId;
  if (tmp31) {
    let id;
    if (data != null) {
      const bot = data.bot;
      if (bot != null) {
        id = bot.id;
      }
    }
    tmp31 = null != id;
  }
  const useApplication2 = tmp(6852).useApplication;
  tmp(6852);
  const application2 = useApplication2(applicationId);
  ({ data: data2, isLoading } = application2);
  if (!declaredActivity) {
    const tmpResult12 = tmp(10803);
    declaredActivity = tmpResult12.canLaunchContextlessFrame(data2);
  }
  const obj4 = { legacy: { hasFrame: declaredActivity, hasProfileWidget: tmp28, hasBotDm: tmp31 }, widgetResolvable: null != tmp15, botDmResolvable: tmp31 };
  const tmpResult13 = tmp(17079);
  const result1 = tmpResult13.previewCapabilitiesFromSurfaces(previewSupportedSurfaces, obj4);
  const obj5 = { installScope, hasOverlay: tmp5, ownerAuthorizationRevoked };
  const previewModeAvailability = tmp(17079).previewModeAvailability;
  tmp(17079);
  const merged = Object.assign(result1);
  const result2 = previewModeAvailability(obj5);
  if (cResult[2] !== previewSupportedSurfaces) {
    const tmpResult15 = tmp(11416);
    const result3 = tmpResult15.previewFrameSurfaceOptions(previewSupportedSurfaces);
    cResult[2] = previewSupportedSurfaces;
    class B {
      constructor() {
        return closure_1_5.getId();
      }
    }
    cResult[3] = result3;
    tmp41 = result3;
  } else {
    tmp41 = cResult[3];
  }
  if (cResult[4] === tmp41) {
    let tmp43;
    if (cResult[5] === tmp9) {
      tmp43 = cResult[6];
    }
    importDefault = tmp43;
    if (cResult[7] === applicationId) {
      let tmp45;
      let tmp46;
      if (cResult[8] === tmp43) {
        tmp45 = cResult[9];
        tmp46 = cResult[10];
      }
      const effect = obj2.useEffect(tmp45, tmp46);
      class B {
        constructor() {
          return closure_1_5.getId();
        }
      }
      if (cResult[11] === result2) {
        if (cResult[12] === tmp43) {
          if (cResult[13] === tmp41) {
            if (cResult[14] === (null != applicationId && isLoading && null == data2)) {
              if (cResult[15] === null) {
                let tmp50;
                if (cResult[16] === tmp15) {
                  tmp50 = cResult[17];
                }
                return tmp50;
              }
            }
          }
        }
      }
      const obj6 = { availability: result2, isResolving: null != applicationId && isLoading && null == data2, activeMode: null, setMode: tmp7, frameSurface: tmp43, frameSurfaceOptions: tmp41, setFrameSurface: tmp10, widgetApplicationId: tmp15 };
      cResult[11] = result2;
      cResult[12] = tmp43;
      cResult[13] = tmp41;
      cResult[14] = null != applicationId && isLoading && null == data2;
      cResult[15] = null;
      cResult[16] = tmp15;
      cResult[17] = obj6;
      tmp50 = obj6;
    }
    class B {
      constructor() {
        return closure_1_5.getId();
      }
    }
    const items1 = [applicationId, tmp43];
    cResult[7] = applicationId;
    cResult[8] = tmp43;
    cResult[9] = tmp47;
    cResult[10] = items1;
    tmp46 = items1;
    tmp45 = tmp47;
  }
  const tmpResult16 = tmp(11416);
  const previewFrameSurface = tmpResult16.resolvePreviewFrameSurface(tmp9, tmp41);
  cResult[4] = tmp41;
  cResult[5] = tmp9;
  cResult[6] = previewFrameSurface;
  tmp43 = previewFrameSurface;
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
  let tmp20;
  let tmp21;
  let tmp3;
  let tmp5;
  let tmp6;
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
  let previewFrameSurface;
  let obj = react;
  const tmp = _slicedToArray(react.useState(null), 2);
  [tmp2, tmp3] = tmp;
  let tmp4 = _slicedToArray(react.useState(null), 2);
  [tmp5, tmp6] = tmp4;
  let tmp7 = _slicedToArray(react.useState(applicationId), 2);
  if (tmp7[0] !== applicationId) {
    let tmp8 = tmp7[1](applicationId);
    tmp3(null);
    tmp6(null);
  }
  let tmp11 = null;
  if (null != previewApplicationId) {
    tmp11 = null;
    if (previewApplicationId === applicationId) {
      tmp11 = previewApplicationId;
    }
  }
  const items = [AuthenticationStore];
  const obj2 = applicationId(previewFrameSurface[5]);
  const stateFromStores = obj2.useStateFromStores(items, () => id.getId());
  const tmp15 = previewSupportedSurfaces(previewFrameSurface[6]);
  const applicationWidgetConfig = tmp15(stateFromStores, tmp11).applicationWidgetConfig;
  let surfaces;
  if (applicationWidgetConfig != null) {
    surfaces = applicationWidgetConfig.surfaces;
  }
  let tmp19;
  const profileSurfaceAvailability = applicationId(tmp13[7]).profileSurfaceAvailability;
  applicationId(previewFrameSurface[7]);
  if (surfaces != null) {
    tmp19 = surfaces[tmp12(undefined, tmp13[8]).ApplicationWidgetConfigSurface.WIDGET_TOP];
  }
  let obj3 = { widgetTop: null != tmp19, widgetBottom: null != tmp20, miniProfile: null != tmp21 };
  tmp20 = undefined;
  if (surfaces != null) {
    tmp20 = surfaces[tmp12(undefined, tmp13[8]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  }
  tmp21 = undefined;
  if (surfaces != null) {
    tmp21 = surfaces[tmp12(undefined, tmp13[8]).ApplicationWidgetConfigSurface.MINI_PROFILE];
  }
  const result = profileSurfaceAvailability(obj3);
  const tmp23 = null != tmp11 && (flag ? result.hasMainCard : result.hasAny);
  const useApplication = applicationId(tmp13[9]).useApplication;
  applicationId(previewFrameSurface[9]);
  const data = useApplication(previewApplicationId).data;
  let tmp26 = null != previewApplicationId;
  if (tmp26) {
    let id;
    if (data != null) {
      const bot = data.bot;
      if (bot != null) {
        id = bot.id;
      }
    }
    tmp26 = null != id;
  }
  const useApplication2 = applicationId(tmp13[9]).useApplication;
  applicationId(previewFrameSurface[9]);
  const application2 = useApplication2(applicationId);
  ({ data: data2, isLoading } = application2);
  if (!declaredActivity) {
    const tmp12Result10 = applicationId(previewFrameSurface[10]);
    declaredActivity = tmp12Result10.canLaunchContextlessFrame(data2);
  }
  const obj4 = { legacy: { hasFrame: declaredActivity, hasProfileWidget: tmp23, hasBotDm: tmp26 }, widgetResolvable: null != tmp11, botDmResolvable: tmp26 };
  const tmp12Result11 = applicationId(previewFrameSurface[7]);
  const result1 = tmp12Result11.previewCapabilitiesFromSurfaces(previewSupportedSurfaces, obj4);
  const obj5 = { installScope, hasOverlay: flag2, ownerAuthorizationRevoked };
  const previewModeAvailability = applicationId(tmp13[7]).previewModeAvailability;
  applicationId(previewFrameSurface[7]);
  const merged = Object.assign(result1);
  const result2 = previewModeAvailability(obj5);
  const items1 = [previewSupportedSurfaces];
  const memo = obj.useMemo(() => {
    const obj = conjurePreviewFrameSurfaces;
    return obj.previewFrameSurfaceOptions(previewSupportedSurfaces);
  }, items1);
  const tmp12Result13 = applicationId(previewFrameSurface[11]);
  previewFrameSurface = tmp12Result13.resolvePreviewFrameSurface(tmp5, memo);
  const items2 = [applicationId, previewFrameSurface];
  const effect = obj.useEffect(() => {
    if (null != applicationId) {
      const obj3 = conjurePreviewSurface;
      const conjureBuilderPreviewFrames = obj3.getConjureBuilderPreviewFrames(tmp);
      for (const item10005 of conjureBuilderPreviewFrames) {
        let tmp3 = item10005;
        let type = item10005.surface.type;
        let tmp5 = require;
        let obj = conjurePreviewFrameSurfaces;
        if (type !== obj.previewFrameLaunchType(previewFrameSurface)) {
          let tmp5Result = tmp5(10821);
          let leaveFrameResult = tmp5Result.leaveFrame(tmp3.id);
        }
        continue;
      }
    }
  }, items2);
  const obj6 = { availability: result2, isResolving: null != applicationId && isLoading && null == data2, activeMode: previewMode, setMode: tmp3, frameSurface: previewFrameSurface, frameSurfaceOptions: memo, setFrameSurface: tmp6, widgetApplicationId: tmp11 };
  previewMode = null;
  if (!(null != applicationId && isLoading && null == data2)) {
    const tmp12Result14 = applicationId(previewFrameSurface[7]);
    previewMode = tmp12Result14.resolvePreviewMode(tmp2, result2);
  }
  return obj6;
});
let result = size.fileFinishedImporting("modules/conjure/preview/useConjurePreviewMode.tsx");

export const useConjurePreviewMode = tmp2;
