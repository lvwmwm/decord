// Module ID: 18449
// Function ID: 18450
// Name: useConjurePreviewMode
// Dependencies: [32, 19, 502, 6937, 504, 18450, 11457, 14650, 6971, 10085, 7678, 7677, 7691, 5687, 2]
// Exports: resolvePreviewAppChannel, useConjurePreviewMode

// Module 18449 (useConjurePreviewMode)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5687 */;
import FramesConstants from "FramesConstants" /* 6937 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 7677 */;
import conjurePreviewFrameSurfaces from "conjurePreviewFrameSurfaces" /* 7678 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
let closure_7 = [];
let closure_8 = [];
let items = [EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL];
let result = size.fileFinishedImporting("modules/conjure/preview/useConjurePreviewMode.tsx");

export function useConjurePreviewMode(applicationId) {
  let data2;
  let declaredActivity;
  let initialSelection;
  let installScope;
  let isLoading;
  let onSelectionChange;
  let ownerAuthorizationRevoked;
  let previewApplicationId;
  let previewMode;
  let previewSupportedSurfaces;
  let ref;
  let tmp36;
  let tmp37;
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
    previewAppChannels = ref;
  }
  let previewViews = applicationId.previewViews;
  if (previewViews === undefined) {
    previewViews = closure_8;
  }
  ({ initialSelection, onSelectionChange } = applicationId);
  let first1;
  let first2;
  let first3;
  ref = undefined;
  closure_8 = undefined;
  let previewFrameSurface;
  let id1;
  let obj = first1;
  let mode;
  const useState = first1.useState;
  if (initialSelection != null) {
    mode = initialSelection.mode;
  }
  if (mode == null) {
    mode = null;
  }
  let tmp2 = mode;
  let tmp3 = mode(useState(mode), 2);
  mode = tmp3[0];
  let tmp5 = tmp3[1];
  let frameSurface;
  const useState2 = obj.useState;
  if (initialSelection != null) {
    frameSurface = initialSelection.frameSurface;
  }
  if (frameSurface == null) {
    frameSurface = null;
  }
  const tmp2Result = tmp2(useState2(frameSurface), 2);
  first1 = tmp2Result[0];
  let tmp9 = tmp2Result[1];
  let appChannel;
  const useState3 = obj.useState;
  if (initialSelection != null) {
    appChannel = initialSelection.appChannel;
  }
  if (appChannel == null) {
    appChannel = null;
  }
  const tmp2Result4 = tmp2(useState3(appChannel), 2);
  first2 = tmp2Result4[0];
  let tmp13 = tmp2Result4[1];
  let view;
  const useState4 = obj.useState;
  if (initialSelection != null) {
    view = initialSelection.view;
  }
  if (view == null) {
    view = null;
  }
  const tmp2Result5 = tmp2(useState4(view), 2);
  first3 = tmp2Result5[0];
  let tmp17 = tmp2Result5[1];
  const tmp2Result6 = tmp2(obj.useState(applicationId), 2);
  const first4 = tmp2Result6[0];
  if (first4 !== applicationId) {
    tmp2Result6[1](applicationId);
    if (null != first4) {
      let tmp5Result = tmp5(null);
      tmp9(null);
      tmp13(null);
      tmp17(null);
    }
  }
  ref = obj.useRef(onSelectionChange);
  const layoutEffect = obj.useLayoutEffect(() => {
    ref.current = onSelectionChange;
  });
  items = [mode, first1, first2, first3];
  const effect = obj.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      const obj = { mode, frameSurface: first1, appChannel: first2, view: first3 };
      current(obj);
    }
  }, items);
  let tmp27 = null;
  if (null != previewApplicationId) {
    tmp27 = null;
    if (previewApplicationId === applicationId) {
      tmp27 = previewApplicationId;
    }
  }
  const items1 = [first2];
  const obj2 = applicationId(onSelectionChange[4]);
  const stateFromStores = obj2.useStateFromStores(items1, () => first2.getId());
  const tmp31 = previewSupportedSurfaces(onSelectionChange[5]);
  const applicationWidgetConfig = tmp31(stateFromStores, tmp27).applicationWidgetConfig;
  let surfaces;
  if (applicationWidgetConfig != null) {
    surfaces = applicationWidgetConfig.surfaces;
  }
  let tmp35;
  const profileSurfaceAvailability = applicationId(onSelectionChange[6]).profileSurfaceAvailability;
  applicationId(onSelectionChange[6]);
  if (surfaces != null) {
    tmp35 = surfaces[tmp28(undefined, tmp29[7]).ApplicationWidgetConfigSurface.WIDGET_TOP];
  }
  let obj3 = { widgetTop: null != tmp35, widgetBottom: null != tmp36, miniProfile: null != tmp37 };
  tmp36 = undefined;
  if (surfaces != null) {
    tmp36 = surfaces[tmp28(undefined, tmp29[7]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  }
  tmp37 = undefined;
  if (surfaces != null) {
    tmp37 = surfaces[tmp28(undefined, tmp29[7]).ApplicationWidgetConfigSurface.MINI_PROFILE];
  }
  let result = profileSurfaceAvailability(obj3);
  const tmp39 = null != tmp27 && (flag ? result.hasMainCard : result.hasAny);
  const useApplication = applicationId(onSelectionChange[8]).useApplication;
  applicationId(onSelectionChange[8]);
  const data = useApplication(previewApplicationId).data;
  let tmp42 = null != previewApplicationId;
  if (tmp42) {
    let id;
    if (data != null) {
      const bot = data.bot;
      if (bot != null) {
        id = bot.id;
      }
    }
    tmp42 = null != id;
  }
  const useApplication2 = applicationId(onSelectionChange[8]).useApplication;
  applicationId(onSelectionChange[8]);
  const application2 = useApplication2(applicationId);
  ({ data: data2, isLoading } = application2);
  if (!declaredActivity) {
    const tmp28Result10 = applicationId(onSelectionChange[9]);
    declaredActivity = tmp28Result10.canLaunchContextlessFrame(data2);
  }
  const obj4 = { legacy: { hasFrame: declaredActivity, hasProfileWidget: tmp39, hasBotDm: tmp42 }, widgetResolvable: null != tmp27, botDmResolvable: tmp42 };
  const tmp28Result11 = applicationId(onSelectionChange[6]);
  const result1 = tmp28Result11.previewCapabilitiesFromSurfaces(previewSupportedSurfaces, obj4);
  const obj5 = { installScope, hasOverlay: flag2, ownerAuthorizationRevoked };
  const previewModeAvailability = applicationId(onSelectionChange[6]).previewModeAvailability;
  applicationId(onSelectionChange[6]);
  const merged = Object.assign(result1);
  const result2 = previewModeAvailability(obj5);
  closure_8 = tmp52;
  const items2 = [previewViews.length > 0, previewSupportedSurfaces];
  const memo = obj.useMemo(() => {
    let result;
    const tmp = closure_8;
    if (tmp) {
      result = items;
    } else {
      const obj = conjurePreviewFrameSurfaces;
      result = obj.previewFrameSurfaceOptions(previewSupportedSurfaces);
    }
    return result;
  }, items2);
  const tmp28Result13 = applicationId(onSelectionChange[10]);
  previewFrameSurface = tmp28Result13.resolvePreviewFrameSurface(first1, memo);
  let tmp55 = null;
  if (previewViews.length > 0) {
    let found = previewViews.find((id) => id.id === first3);
    if (found == null) {
      found = previewViews[0];
    }
    tmp55 = found;
  }
  let tmp57 = null;
  if (previewViews.length <= 0) {
    let tmp58 = null;
    if (previewFrameSurface === applicationId(onSelectionChange[13]).EmbeddedSurfaceType.APP_CHANNEL) {
      tmp58 = null;
      if (previewAppChannels.length >= 2) {
        if (null == first2) {
          first2 = previewAppChannels[0];
        }
        tmp58 = first2;
      }
    }
    tmp57 = tmp58;
  }
  id1 = undefined;
  if (tmp55 != null) {
    id1 = tmp55.id;
  }
  if (id1 == null) {
    id1 = tmp57;
  }
  const items3 = [id1];
  const items4 = [applicationId, previewFrameSurface, id1];
  const memo1 = obj.useMemo(() => {
    let tmp2;
    if (null != id1) {
      tmp2 = { customId: tmp };
      const obj = { customId: tmp };
    }
    return tmp2;
  }, items3);
  const effect1 = obj.useEffect(() => {
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
          tmp13 = tmp14 !== id1;
        }
        if (tmp13) {
          let tmp5Result = tmp5(7691);
          let leaveFrameResult = tmp5Result.leaveFrame(tmp3.id);
        }
        continue;
      }
    }
  }, items4);
  const obj6 = { availability: result2, isResolving: null != applicationId && isLoading && null == data2, activeMode: previewMode, setMode: tmp5, frameSurface: previewFrameSurface, frameSurfaceOptions: memo, setFrameSurface: tmp9, appChannel: tmp57, setAppChannel: tmp13, view: tmp55, setView: tmp17, frameLaunchParams: memo1, widgetApplicationId: tmp27 };
  previewMode = null;
  if (!(null != applicationId && isLoading && null == data2)) {
    const tmp28Result14 = applicationId(onSelectionChange[6]);
    previewMode = tmp28Result14.resolvePreviewMode(mode, result2);
  }
  return obj6;
}
export function resolvePreviewAppChannel(arg0, arg1, arr) {
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
