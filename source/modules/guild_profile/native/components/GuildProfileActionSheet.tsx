// Module ID: 8578
// Function ID: 68145
// Name: GuildProfileActionSheet
// Dependencies: [57, 31, 27, 3759, 8417, 8579, 653, 33, 4130, 689, 1450, 4066, 8418, 566, 3834, 7186, 5464, 5484, 5698, 8419, 8580, 4543, 1212, 11884, 8581, 11885, 666, 5187, 4554, 5189, 5446, 2]
// Exports: default

// Module 8578 (GuildProfileActionSheet)
import _slicedToArray from "_slicedToArray";
import set from "set";
import get_ActivityIndicator from "Background";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { GuildProfileFetchStatus } from "_isNativeReflectConstruct";
import { INVALID_ACCESS_ERROR_CODE } from "BannerPalettePresets";
import { VerticalGradient } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_5;
let closure_6;
const require = arg1;
({ View: closure_5, ActivityIndicator: closure_6 } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = { loadingContainer: { paddingTop: 40 }, footerContainer: { paddingHorizontal: 16, paddingVertical: 40 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.scrollView = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileActionSheet.tsx");

export default function GuildProfileActionSheet(guildId) {
  let bottomSheetClose;
  let bottomSheetRef;
  let context;
  let fetchGuildProfile;
  let guildProfile;
  let handleContentLayout;
  let handleFooterLayout;
  let inviteKey;
  let startHeight;
  guildId = guildId.guildId;
  ({ context, inviteKey } = guildId);
  let tmp = _createForOfIteratorHelperLoose();
  let obj = guildId(analyticsLocations[12]);
  guildProfile = obj.useGuildProfile(guildId);
  ({ guildProfile, fetchGuildProfile } = guildProfile);
  const fetchStatus = guildProfile.fetchStatus;
  let obj1 = guildId(analyticsLocations[13]);
  let items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_8.getErrorCode(guildId));
  let obj2 = guildId(analyticsLocations[14]);
  const token = obj2.useToken(fetchGuildProfile(analyticsLocations[9]).colors.INTERACTIVE_TEXT_HOVER, fetchGuildProfile(analyticsLocations[11])());
  let obj3 = guildId(analyticsLocations[15]);
  bottomSheetRef = obj3.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  const tmp2 = fetchGuildProfile(analyticsLocations[11])();
  analyticsLocations = fetchGuildProfile(analyticsLocations[16])(fetchGuildProfile(analyticsLocations[17]).GUILD_PROFILE).analyticsLocations;
  let obj4 = guildId(analyticsLocations[14]);
  const token1 = obj4.useToken(fetchGuildProfile(analyticsLocations[9]).colors.BACKGROUND_BASE_LOW);
  let obj5 = guildId(analyticsLocations[13]);
  let items1 = [_isNativeReflectConstruct];
  let items2 = [guildId];
  const stateFromStores1 = obj5.useStateFromStores(items1, () => {
    let isLurkingResult = null != guildId;
    if (isLurkingResult) {
      isLurkingResult = outer1_7.isLurking(guildId);
    }
    return isLurkingResult;
  }, items2);
  let obj6 = guildId(analyticsLocations[18]);
  let enabled = stateFromStores1;
  if (stateFromStores1) {
    enabled = obj6.useMobileLurkerServerPreview("GuildProfileActionSheet").enabled;
  }
  obj = { enabled, isContentReady: null != guildProfile, bottomSheetRef };
  const tmp7 = fetchGuildProfile(analyticsLocations[16]);
  let items3 = [guildId, analyticsLocations];
  ({ startHeight, handleContentLayout, handleFooterLayout } = (function useFitSheetToContent(enabled) {
    enabled = enabled.enabled;
    const isContentReady = enabled.isContentReady;
    const bottomSheetRef = enabled.bottomSheetRef;
    const height = fetchGuildProfile(analyticsLocations[10])().height;
    let tmp = token1(outer1_4.useState(null), 2);
    const first = tmp[0];
    let closure_5 = tmp[1];
    const tmp3 = token1(outer1_4.useState(null), 2);
    const first1 = tmp3[0];
    let _isNativeReflectConstruct = tmp3[1];
    let closure_8 = outer1_4.useRef(false);
    const items = [enabled, first, first1, height];
    const items1 = [enabled, isContentReady];
    const startHeight = outer1_4.useMemo(() => {
      if (enabled) {
        if (null != first) {
          if (null != first1) {
            const _Math = Math;
            const _Math2 = Math;
            const _Math3 = Math;
            const result = 0.95 * height;
            let rounded = Math.round(Math.min(result, Math.max(0.65 * height, first + first1)));
          }
          return rounded;
        }
        const _Math4 = Math;
        rounded = Math.round(0.65 * height);
      }
    }, items);
    const items2 = [enabled];
    const handleContentLayout = outer1_4.useCallback((nativeEvent) => {
      let tmp = enabled;
      if (enabled) {
        tmp = isContentReady;
      }
      if (tmp) {
        callback(nativeEvent.nativeEvent.layout.height);
      }
    }, items1);
    const items3 = [enabled, first, first1, bottomSheetRef];
    const handleFooterLayout = outer1_4.useCallback((nativeEvent) => {
      if (enabled) {
        callback2(nativeEvent.nativeEvent.layout.height);
      }
    }, items2);
    const effect = outer1_4.useEffect(() => {
      let tmp = enabled;
      if (enabled) {
        tmp = null != first;
      }
      if (tmp) {
        tmp = null != first1;
      }
      if (tmp) {
        if (!ref.current) {
          ref.current = true;
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame = requestAnimationFrame(() => {
            const current = outer1_2.current;
            if (null != current) {
              current.snapToIndex(0);
            }
          });
        }
      }
    }, items3);
    return { startHeight, handleContentLayout, handleFooterLayout };
  })(obj));
  let effect = React.useEffect(() => {
    const result = guildId(analyticsLocations[19]).trackGuildProfileViewed(guildId, analyticsLocations);
  }, items3);
  const items4 = [fetchGuildProfile];
  const items5 = [fetchGuildProfile];
  const callback = React.useCallback(() => {
    fetchGuildProfile(true);
  }, items4);
  const effect1 = React.useEffect(() => {
    fetchGuildProfile();
  }, items5);
  if (fetchStatus !== GuildProfileFetchStatus.NOT_FETCHED) {
    if (fetchStatus !== GuildProfileFetchStatus.FETCHING) {
      if (null == guildProfile) {
        if (stateFromStores === INVALID_ACCESS_ERROR_CODE) {
          let tmp20 = callback(fetchGuildProfile(analyticsLocations[20]), {});
          obj = { size: "lg" };
          const intl2 = guildId(analyticsLocations[22]).intl;
          obj.text = intl2.string(guildId(analyticsLocations[22]).t.cpT0Cq);
          obj.onPress = bottomSheetClose;
          let tmp19 = callback(guildId(analyticsLocations[21]).Button, obj);
        }
      }
      if (null == guildProfile) {
        obj1 = { onRetry: callback };
        tmp20 = callback(fetchGuildProfile(analyticsLocations[23]), obj1);
        obj2 = { size: "lg" };
        const intl = guildId(analyticsLocations[22]).intl;
        obj2.text = intl.string(guildId(analyticsLocations[22]).t.cpT0Cq);
        obj2.onPress = bottomSheetClose;
        tmp19 = callback(guildId(analyticsLocations[21]).Button, obj2);
      } else {
        obj3 = { guildProfile, isLurkerServerPreview: enabled };
        obj4 = { profile: guildProfile, context, inviteKey, isLurkerServerPreview: enabled };
        tmp19 = callback(fetchGuildProfile(analyticsLocations[25]), obj4);
        tmp20 = callback(fetchGuildProfile(analyticsLocations[24]), obj3);
        const tmp18 = callback(fetchGuildProfile(analyticsLocations[24]), obj3);
      }
    }
    const items6 = [token1];
    const memo = React.useMemo(() => {
      const obj = fetchGuildProfile(analyticsLocations[26])(token1);
      const items = [fetchGuildProfile(analyticsLocations[26])(token1).alpha(0).hex(), token1];
      return items;
    }, items6);
    obj5 = { ref: bottomSheetRef, scrollable: true, handleDisabled: true, startHeight };
    obj6 = { start: VerticalGradient.START, end: { x: 0, y: 0.5 }, style: tmp.footerContainer, colors: memo };
    let tmp38;
    if (enabled) {
      tmp38 = handleFooterLayout;
    }
    obj6.onLayout = tmp38;
    obj6.children = tmp19;
    obj5.footer = callback(fetchGuildProfile(analyticsLocations[28]), obj6);
    const obj7 = { style: tmp.scrollView };
    let tmp42 = tmp20;
    if (enabled) {
      const obj8 = { onLayout: handleContentLayout, children: tmp20 };
      tmp42 = callback(closure_5, obj8);
    }
    obj7.children = tmp42;
    const items7 = [callback(guildId(analyticsLocations[29]).BottomSheetScrollView, obj7), ];
    const obj9 = { variant: "floating" };
    const obj10 = { backgroundColor: token };
    obj9.tabStyle = obj10;
    obj9.onPress = bottomSheetClose;
    items7[1] = callback(guildId(analyticsLocations[30]).ActionSheetHeaderBar, obj9);
    obj5.children = items7;
    return closure_13(guildId(analyticsLocations[27]).BottomSheet, obj5);
  }
  const tmp10 = (function useFitSheetToContent(enabled) {
    enabled = enabled.enabled;
    const isContentReady = enabled.isContentReady;
    const bottomSheetRef = enabled.bottomSheetRef;
    const height = fetchGuildProfile(analyticsLocations[10])().height;
    let tmp = token1(outer1_4.useState(null), 2);
    const first = tmp[0];
    let closure_5 = tmp[1];
    const tmp3 = token1(outer1_4.useState(null), 2);
    const first1 = tmp3[0];
    let _isNativeReflectConstruct = tmp3[1];
    let closure_8 = outer1_4.useRef(false);
    const items = [enabled, first, first1, height];
    const items1 = [enabled, isContentReady];
    const startHeight = outer1_4.useMemo(() => {
      if (enabled) {
        if (null != first) {
          if (null != first1) {
            const _Math = Math;
            const _Math2 = Math;
            const _Math3 = Math;
            const result = 0.95 * height;
            let rounded = Math.round(Math.min(result, Math.max(0.65 * height, first + first1)));
          }
          return rounded;
        }
        const _Math4 = Math;
        rounded = Math.round(0.65 * height);
      }
    }, items);
    const items2 = [enabled];
    const handleContentLayout = outer1_4.useCallback((nativeEvent) => {
      let tmp = enabled;
      if (enabled) {
        tmp = isContentReady;
      }
      if (tmp) {
        callback(nativeEvent.nativeEvent.layout.height);
      }
    }, items1);
    const items3 = [enabled, first, first1, bottomSheetRef];
    const handleFooterLayout = outer1_4.useCallback((nativeEvent) => {
      if (enabled) {
        callback2(nativeEvent.nativeEvent.layout.height);
      }
    }, items2);
    const effect = outer1_4.useEffect(() => {
      let tmp = enabled;
      if (enabled) {
        tmp = null != first;
      }
      if (tmp) {
        tmp = null != first1;
      }
      if (tmp) {
        if (!ref.current) {
          ref.current = true;
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame = requestAnimationFrame(() => {
            const current = outer1_2.current;
            if (null != current) {
              current.snapToIndex(0);
            }
          });
        }
      }
    }, items3);
    return { startHeight, handleContentLayout, handleFooterLayout };
  })(obj);
  tmp20 = callback(closure_5, { style: tmp.loadingContainer, children: callback(closure_6, { animating: true, size: "large" }) });
  tmp19 = null;
};
