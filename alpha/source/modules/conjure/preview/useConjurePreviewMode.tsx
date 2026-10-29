// Module ID: 11847
// Function ID: 11848
// Name: useConjurePreviewMode
// Dependencies: [32, 19, 502, 6834, 558, 576, 504, 11848, 11850, 11852, 6868, 11489, 10841, 10840, 10879, 5664, 2]
// Exports: resolvePreviewAppChannel

// Module 11847 (useConjurePreviewMode)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5664 */;
import FramesConstants from "FramesConstants" /* 6834 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10840 */;
import conjurePreviewFrameSurfaces from "conjurePreviewFrameSurfaces" /* 10841 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore_mod from "AuthenticationStore" /* 502 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let appChannel, frameSurface;

let AuthenticationStore = AuthenticationStore_mod;
const isLaunched = FramesConstants.isLaunched;
let closure_7 = [];
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePreviewMode(applicationId) {
  let data2;
  let declaredActivity;
  let first1;
  let first2;
  let initialSelection;
  let installScope;
  let isLoading;
  let mainCardOnly;
  let mode;
  let obj5;
  let onSelectionChange;
  let ownerAuthorizationRevoked;
  let previewAppChannels;
  let previewApplicationId;
  let previewSupportedSurfaces;
  let ref;
  let supportsOverlay;
  let tmp25;
  let tmp42;
  let tmp43;
  const tmp = applicationId;
  let obj = applicationId(mode[5]);
  const cResult = obj.c(33);
  applicationId = applicationId.applicationId;
  ({ previewApplicationId, declaredActivity, previewSupportedSurfaces, mainCardOnly, supportsOverlay, previewAppChannels, initialSelection, onSelectionChange } = applicationId);
  let tmp4 = undefined !== mainCardOnly;
  ({ installScope, ownerAuthorizationRevoked } = applicationId);
  if (tmp4) {
    tmp4 = mainCardOnly;
  }
  let tmp5 = undefined !== supportsOverlay && supportsOverlay;
  if (undefined === previewAppChannels) {
    previewAppChannels = closure_7;
  }
  mode = undefined;
  const useState = first2.useState;
  if (initialSelection != null) {
    mode = initialSelection.mode;
  }
  if (mode == null) {
    mode = null;
  }
  let tmp7 = first1;
  let tmp8 = first1(useState(mode), 2);
  mode = tmp8[0];
  let tmp10 = tmp8[1];
  frameSurface = undefined;
  const useState2 = obj2.useState;
  if (initialSelection != null) {
    frameSurface = initialSelection.frameSurface;
  }
  if (frameSurface == null) {
    frameSurface = null;
  }
  const tmp7Result = tmp7(useState2(frameSurface), 2);
  first1 = tmp7Result[0];
  let tmp14 = tmp7Result[1];
  appChannel = undefined;
  const useState3 = obj2.useState;
  if (initialSelection != null) {
    appChannel = initialSelection.appChannel;
  }
  if (appChannel == null) {
    appChannel = null;
  }
  const tmp7Result3 = tmp7(useState3(appChannel), 2);
  first2 = tmp7Result3[0];
  let tmp18 = tmp7Result3[1];
  const tmp7Result4 = tmp7(first2.useState(applicationId), 2);
  const first3 = tmp7Result4[0];
  if (first3 !== applicationId) {
    tmp7Result4[1](applicationId);
    if (null != first3) {
      tmp10(null);
      tmp14(null);
      tmp18(null);
    }
  }
  AuthenticationStore = obj2.useRef(onSelectionChange);
  if (cResult[0] !== onSelectionChange) {
    const fn = function q() {
      ref.current = onSelectionChange;
    };
    cResult[0] = onSelectionChange;
    cResult[1] = fn;
    tmp25 = fn;
  } else {
    tmp25 = cResult[1];
  }
  const layoutEffect = obj2.useLayoutEffect(tmp25);
  if (cResult[2] === mode) {
    if (cResult[3] === first2) {
      let tmp27;
      let tmp28;
      let tmp33;
      let tmp32;
      let tmp60;
      let previewFrameSurface;
      if (cResult[4] === first1) {
        tmp27 = cResult[5];
        tmp28 = cResult[6];
      }
      const effect = obj2.useEffect(tmp27, tmp28);
      let tmp30 = null;
      if (null != previewApplicationId) {
        tmp30 = null;
        if (previewApplicationId === applicationId) {
          tmp30 = previewApplicationId;
        }
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        class V {
          constructor() {
            return ref.getId();
          }
        }
        cResult[7] = items;
        cResult[8] = V;
        tmp33 = V;
        tmp32 = items;
      } else {
        tmp32 = cResult[7];
        tmp33 = cResult[8];
      }
      const tmpResult = tmp(mode[6]);
      const stateFromStores = tmpResult.useStateFromStores(tmp32, tmp33);
      const tmp37 = onSelectionChange(mode[7]);
      const applicationWidgetConfig = tmp37(stateFromStores, tmp30).applicationWidgetConfig;
      let surfaces;
      if (applicationWidgetConfig != null) {
        surfaces = applicationWidgetConfig.surfaces;
      }
      let tmp41;
      const profileSurfaceAvailability = tmp(tmp2[8]).profileSurfaceAvailability;
      tmp(mode[8]);
      if (surfaces != null) {
        tmp41 = surfaces[tmp(undefined, tmp2[9]).ApplicationWidgetConfigSurface.WIDGET_TOP];
      }
      let obj3 = { widgetTop: null != tmp41, widgetBottom: null != tmp42, miniProfile: null != tmp43 };
      tmp42 = undefined;
      if (surfaces != null) {
        tmp42 = surfaces[tmp(undefined, tmp2[9]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
      }
      tmp43 = undefined;
      if (surfaces != null) {
        tmp43 = surfaces[tmp(undefined, tmp2[9]).ApplicationWidgetConfigSurface.MINI_PROFILE];
      }
      const result = profileSurfaceAvailability(obj3);
      const tmp45 = null != tmp30 && (tmp4 ? result.hasMainCard : result.hasAny);
      const useApplication = tmp(tmp2[10]).useApplication;
      tmp(mode[10]);
      const data = useApplication(previewApplicationId).data;
      let tmp48 = null != previewApplicationId;
      if (tmp48) {
        let id;
        if (data != null) {
          const bot = data.bot;
          if (bot != null) {
            id = bot.id;
          }
        }
        tmp48 = null != id;
      }
      const useApplication2 = tmp(tmp2[10]).useApplication;
      tmp(mode[10]);
      const application2 = useApplication2(applicationId);
      ({ data: data2, isLoading } = application2);
      if (!declaredActivity) {
        const tmpResult12 = tmp(mode[11]);
        declaredActivity = tmpResult12.canLaunchContextlessFrame(data2);
      }
      const obj4 = { legacy: obj5, widgetResolvable: null != tmp30, botDmResolvable: tmp48 };
      obj5 = { hasFrame: declaredActivity, hasProfileWidget: tmp45, hasBotDm: tmp48 };
      const tmpResult13 = tmp(mode[8]);
      const result1 = tmpResult13.previewCapabilitiesFromSurfaces(previewSupportedSurfaces, obj4);
      const tmpResult14 = tmp(mode[8]);
      class J {
        constructor() {
          const current = ref.current;
          if (current != null) {
            const obj = { mode, frameSurface: first1, appChannel: first2 };
            current(obj);
          }
        }
      }
      tmp56[0] = installScope;
      const previewModeAvailability = tmpResult14.previewModeAvailability;
      const merged = Object.assign(result1);
      tmp56.hasOverlay = tmp5;
      tmp56.ownerAuthorizationRevoked = ownerAuthorizationRevoked;
      const result2 = previewModeAvailability(tmp56);
      if (cResult[9] !== previewSupportedSurfaces) {
        const tmpResult15 = tmp(mode[12]);
        const result3 = tmpResult15.previewFrameSurfaceOptions(previewSupportedSurfaces);
        class V {
          constructor() {
            return ref.getId();
          }
        }
        cResult[10] = result3;
        tmp60 = result3;
      } else {
        tmp60 = cResult[10];
      }
      if (cResult[11] === tmp60) {
        if (cResult[12] === previewAppChannels) {
          if (cResult[13] === first2) {
            let tmp63;
            if (cResult[14] === first1) {
              previewFrameSurface = cResult[15];
              tmp63 = cResult[16];
            }
            closure_7 = tmp63;
            if (cResult[17] !== tmp63) {
              let tmp68;
              if (null != tmp63) {
                tmp68 = { customId: tmp63 };
                const obj6 = { customId: tmp63 };
              }
              class V {
                constructor() {
                  return ref.getId();
                }
              }
              cResult[18] = tmp68;
            }
            class V {
              constructor() {
                return ref.getId();
              }
            }
            function he() {
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
                    tmp13 = tmp14 !== closure_7;
                  }
                  if (tmp13) {
                    let tmp5Result = tmp5(10879);
                    let leaveFrameResult = tmp5Result.leaveFrame(tmp3.id);
                  }
                  continue;
                }
              }
            }
            const items1 = [applicationId, tmp62, tmp63];
            cResult[19] = tmp63;
            cResult[20] = applicationId;
            cResult[21] = tmp62;
            cResult[22] = he;
            cResult[23] = items1;
          }
        }
      }
      const tmpResult16 = tmp(mode[12]);
      previewFrameSurface = tmpResult16.resolvePreviewFrameSurface(first1, tmp60);
      let tmp65 = null;
      if (previewFrameSurface === tmp(mode[15]).EmbeddedSurfaceType.APP_CHANNEL) {
        tmp65 = null;
        if (previewAppChannels.length >= 2) {
          let first4;
          if (null == first2) {
            first4 = previewAppChannels[0];
          } else {
            first4 = first2;
          }
          tmp65 = first4;
        }
      }
      cResult[11] = tmp60;
      cResult[12] = previewAppChannels;
      cResult[13] = first2;
      cResult[14] = first1;
      cResult[15] = previewFrameSurface;
      cResult[16] = tmp65;
      tmp63 = tmp65;
    }
  }
  class J {
    constructor() {
      const current = ref.current;
      if (current != null) {
        const obj = { mode, frameSurface: first1, appChannel: first2 };
        current(obj);
      }
    }
  }
  const items2 = [mode, first1, first2];
  cResult[2] = mode;
  cResult[3] = first2;
  cResult[4] = first1;
  cResult[5] = J;
  cResult[6] = items2;
  tmp28 = items2;
  tmp27 = J;
}) : (function useConjurePreviewMode(applicationId) {
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
  frameSurface = undefined;
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
  appChannel = undefined;
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
  const obj2 = applicationId(onSelectionChange[6]);
  const stateFromStores = obj2.useStateFromStores(items1, () => first2.getId());
  const tmp26 = previewSupportedSurfaces(onSelectionChange[7]);
  const applicationWidgetConfig = tmp26(stateFromStores, tmp22).applicationWidgetConfig;
  let surfaces;
  if (applicationWidgetConfig != null) {
    surfaces = applicationWidgetConfig.surfaces;
  }
  let tmp30;
  const profileSurfaceAvailability = tmp23(onSelectionChange[8]).profileSurfaceAvailability;
  applicationId(onSelectionChange[8]);
  if (surfaces != null) {
    tmp30 = surfaces[tmp23(undefined, tmp24[9]).ApplicationWidgetConfigSurface.WIDGET_TOP];
  }
  let obj3 = { widgetTop: null != tmp30, widgetBottom: null != tmp31, miniProfile: null != tmp32 };
  tmp31 = undefined;
  if (surfaces != null) {
    tmp31 = surfaces[tmp23(undefined, tmp24[9]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  }
  tmp32 = undefined;
  if (surfaces != null) {
    tmp32 = surfaces[tmp23(undefined, tmp24[9]).ApplicationWidgetConfigSurface.MINI_PROFILE];
  }
  const result = profileSurfaceAvailability(obj3);
  const tmp34 = null != tmp22 && (flag ? result.hasMainCard : result.hasAny);
  const useApplication = tmp23(onSelectionChange[10]).useApplication;
  applicationId(onSelectionChange[10]);
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
  const useApplication2 = tmp23(onSelectionChange[10]).useApplication;
  applicationId(onSelectionChange[10]);
  const application2 = useApplication2(applicationId);
  ({ data: data2, isLoading } = application2);
  if (!declaredActivity) {
    const tmp23Result10 = applicationId(onSelectionChange[11]);
    declaredActivity = tmp23Result10.canLaunchContextlessFrame(data2);
  }
  const obj4 = { legacy: { hasFrame: declaredActivity, hasProfileWidget: tmp34, hasBotDm: tmp37 }, widgetResolvable: null != tmp22, botDmResolvable: tmp37 };
  const tmp23Result11 = applicationId(onSelectionChange[8]);
  const result1 = tmp23Result11.previewCapabilitiesFromSurfaces(previewSupportedSurfaces, obj4);
  const obj5 = { installScope, hasOverlay: flag2, ownerAuthorizationRevoked };
  const previewModeAvailability = tmp23(onSelectionChange[8]).previewModeAvailability;
  applicationId(onSelectionChange[8]);
  const merged = Object.assign(result1);
  const result2 = previewModeAvailability(obj5);
  const items2 = [previewSupportedSurfaces];
  const memo = obj.useMemo(() => {
    const obj = conjurePreviewFrameSurfaces;
    return obj.previewFrameSurfaceOptions(previewSupportedSurfaces);
  }, items2);
  const tmp23Result13 = applicationId(onSelectionChange[12]);
  previewFrameSurface = tmp23Result13.resolvePreviewFrameSurface(first1, memo);
  let tmp49 = null;
  if (previewFrameSurface === applicationId(onSelectionChange[15]).EmbeddedSurfaceType.APP_CHANNEL) {
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
          let tmp5Result = tmp5(10879);
          let leaveFrameResult = tmp5Result.leaveFrame(tmp3.id);
        }
        continue;
      }
    }
  }, items4);
  const obj6 = { availability: result2, isResolving: null != applicationId && isLoading && null == data2, activeMode: previewMode, setMode: tmp5, frameSurface: previewFrameSurface, frameSurfaceOptions: memo, setFrameSurface: tmp9, appChannel: tmp49, setAppChannel: tmp13, frameLaunchParams: memo1, widgetApplicationId: tmp22 };
  previewMode = null;
  if (!(null != applicationId && isLoading && null == data2)) {
    const tmp23Result14 = applicationId(onSelectionChange[8]);
    previewMode = tmp23Result14.resolvePreviewMode(mode, result2);
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
