// Module ID: 12079
// Function ID: 12080
// Name: useConjurePreviewMode
// Dependencies: [32, 19, 502, 6847, 504, 12080, 12082, 12084, 6881, 11726, 10884, 10883, 10927, 5675, 2]
// Exports: resolvePreviewAppChannel, useConjurePreviewMode

// Module 12079 (useConjurePreviewMode)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5675 */;
import FramesConstants from "FramesConstants" /* 6847 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10883 */;
import conjurePreviewFrameSurfaces from "conjurePreviewFrameSurfaces" /* 10884 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
let closure_7 = [];
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
  let previewFrameSurface;
  let previewMode;
  let previewSupportedSurfaces;
  let tmp31;
  let tmp32;
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
    previewAppChannels = previewFrameSurface;
  }
  ({ initialSelection, onSelectionChange } = applicationId);
  let first1;
  let ref;
  previewFrameSurface = undefined;
  let first2;
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
  const tmp2Result3 = tmp2(useState3(appChannel), 2);
  first2 = tmp2Result3[0];
  let tmp13 = tmp2Result3[1];
  const tmp2Result4 = tmp2(obj.useState(applicationId), 2);
  const first3 = tmp2Result4[0];
  if (first3 !== applicationId) {
    let tmp16 = tmp2Result4[1](applicationId);
    if (null != first3) {
      let tmp5Result = tmp5(null);
      tmp9(null);
      tmp13(null);
    }
  }
  ref = obj.useRef(onSelectionChange);
  const layoutEffect = obj.useLayoutEffect(() => {
    ref.current = onSelectionChange;
  });
  const items = [mode, first1, first2];
  const effect = obj.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      const obj = { mode, frameSurface: first1, appChannel: first2 };
      current(obj);
    }
  }, items);
  let tmp22 = null;
  if (null != previewApplicationId) {
    tmp22 = null;
    if (previewApplicationId === applicationId) {
      tmp22 = previewApplicationId;
    }
  }
  const items1 = [first2];
  const obj2 = applicationId(onSelectionChange[4]);
  const stateFromStores = obj2.useStateFromStores(items1, () => first2.getId());
  const tmp26 = previewSupportedSurfaces(onSelectionChange[5]);
  const applicationWidgetConfig = tmp26(stateFromStores, tmp22).applicationWidgetConfig;
  let surfaces;
  if (applicationWidgetConfig != null) {
    surfaces = applicationWidgetConfig.surfaces;
  }
  let tmp30;
  const profileSurfaceAvailability = tmp23(onSelectionChange[6]).profileSurfaceAvailability;
  applicationId(onSelectionChange[6]);
  if (surfaces != null) {
    tmp30 = surfaces[tmp23(undefined, tmp24[7]).ApplicationWidgetConfigSurface.WIDGET_TOP];
  }
  let obj3 = { widgetTop: null != tmp30, widgetBottom: null != tmp31, miniProfile: null != tmp32 };
  tmp31 = undefined;
  if (surfaces != null) {
    tmp31 = surfaces[tmp23(undefined, tmp24[7]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  }
  tmp32 = undefined;
  if (surfaces != null) {
    tmp32 = surfaces[tmp23(undefined, tmp24[7]).ApplicationWidgetConfigSurface.MINI_PROFILE];
  }
  const result = profileSurfaceAvailability(obj3);
  const tmp34 = null != tmp22 && (flag ? result.hasMainCard : result.hasAny);
  const useApplication = tmp23(onSelectionChange[8]).useApplication;
  applicationId(onSelectionChange[8]);
  const data = useApplication(previewApplicationId).data;
  let tmp37 = null != previewApplicationId;
  if (tmp37) {
    let id;
    if (data != null) {
      const bot = data.bot;
      if (bot != null) {
        id = bot.id;
      }
    }
    tmp37 = null != id;
  }
  const useApplication2 = tmp23(onSelectionChange[8]).useApplication;
  applicationId(onSelectionChange[8]);
  const application2 = useApplication2(applicationId);
  ({ data: data2, isLoading } = application2);
  if (!declaredActivity) {
    const tmp23Result10 = applicationId(onSelectionChange[9]);
    declaredActivity = tmp23Result10.canLaunchContextlessFrame(data2);
  }
  const obj4 = { legacy: { hasFrame: declaredActivity, hasProfileWidget: tmp34, hasBotDm: tmp37 }, widgetResolvable: null != tmp22, botDmResolvable: tmp37 };
  const tmp23Result11 = applicationId(onSelectionChange[6]);
  const result1 = tmp23Result11.previewCapabilitiesFromSurfaces(previewSupportedSurfaces, obj4);
  const obj5 = { installScope, hasOverlay: flag2, ownerAuthorizationRevoked };
  const previewModeAvailability = tmp23(onSelectionChange[6]).previewModeAvailability;
  applicationId(onSelectionChange[6]);
  const merged = Object.assign(result1);
  const result2 = previewModeAvailability(obj5);
  const items2 = [previewSupportedSurfaces];
  const memo = obj.useMemo(() => {
    const obj = conjurePreviewFrameSurfaces;
    return obj.previewFrameSurfaceOptions(previewSupportedSurfaces);
  }, items2);
  const tmp23Result13 = applicationId(onSelectionChange[10]);
  previewFrameSurface = tmp23Result13.resolvePreviewFrameSurface(first1, memo);
  let tmp49 = null;
  if (previewFrameSurface === applicationId(onSelectionChange[13]).EmbeddedSurfaceType.APP_CHANNEL) {
    tmp49 = null;
    if (previewAppChannels.length >= 2) {
      if (null == first2) {
        first2 = previewAppChannels[0];
      }
      tmp49 = first2;
    }
  }
  first2 = tmp49;
  const items3 = [tmp49];
  const items4 = [applicationId, previewFrameSurface, tmp49];
  const memo1 = obj.useMemo(() => {
    let tmp2;
    if (null != first2) {
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
          tmp13 = tmp14 !== first2;
        }
        if (tmp13) {
          let tmp5Result = tmp5(10927);
          let leaveFrameResult = tmp5Result.leaveFrame(tmp3.id);
        }
        continue;
      }
    }
  }, items4);
  const obj6 = { availability: result2, isResolving: null != applicationId && isLoading && null == data2, activeMode: previewMode, setMode: tmp5, frameSurface: previewFrameSurface, frameSurfaceOptions: memo, setFrameSurface: tmp9, appChannel: tmp49, setAppChannel: tmp13, frameLaunchParams: memo1, widgetApplicationId: tmp22 };
  previewMode = null;
  if (!(null != applicationId && isLoading && null == data2)) {
    const tmp23Result14 = applicationId(onSelectionChange[6]);
    previewMode = tmp23Result14.resolvePreviewMode(mode, result2);
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
