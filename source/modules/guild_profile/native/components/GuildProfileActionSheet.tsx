// Module ID: 8570
// Function ID: 68093
// Name: GuildProfileActionSheet
// Dependencies: []
// Exports: default

// Module 8570 (GuildProfileActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ActivityIndicator: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const GuildProfileFetchStatus = arg1(dependencyMap[4]).GuildProfileFetchStatus;
const INVALID_ACCESS_ERROR_CODE = arg1(dependencyMap[5]).INVALID_ACCESS_ERROR_CODE;
const VerticalGradient = arg1(dependencyMap[6]).VerticalGradient;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { loadingContainer: { paddingTop: 40 }, footerContainer: { MKTG_HYPESQUAD_FORM_SUBMITTED: true, marginInlineEnd: true } };
obj = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj.scrollView = obj;
let closure_14 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/guild_profile/native/components/GuildProfileActionSheet.tsx");

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
  const arg1 = guildId;
  ({ context, inviteKey } = guildId);
  const tmp = callback2();
  let obj = arg1(dependencyMap[12]);
  guildProfile = obj.useGuildProfile(guildId);
  ({ guildProfile, fetchGuildProfile } = guildProfile);
  const importDefault = fetchGuildProfile;
  const fetchStatus = guildProfile.fetchStatus;
  let obj1 = arg1(dependencyMap[13]);
  const items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => errorCode.getErrorCode(guildId));
  let obj2 = arg1(dependencyMap[14]);
  const token = obj2.useToken(importDefault(dependencyMap[9]).colors.INTERACTIVE_TEXT_HOVER, importDefault(dependencyMap[11])());
  let obj3 = arg1(dependencyMap[15]);
  bottomSheetRef = obj3.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  const tmp2 = importDefault(dependencyMap[11])();
  const analyticsLocations = importDefault(dependencyMap[16])(importDefault(dependencyMap[17]).GUILD_PROFILE).analyticsLocations;
  const dependencyMap = analyticsLocations;
  let obj4 = arg1(dependencyMap[14]);
  const token1 = obj4.useToken(importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW);
  let closure_3 = token1;
  let obj5 = arg1(dependencyMap[13]);
  const items1 = [closure_7];
  const items2 = [guildId];
  const stateFromStores1 = obj5.useStateFromStores(items1, () => {
    let isLurkingResult = null != guildId;
    if (isLurkingResult) {
      isLurkingResult = lurking.isLurking(guildId);
    }
    return isLurkingResult;
  }, items2);
  let obj6 = arg1(dependencyMap[18]);
  let enabled = stateFromStores1;
  if (stateFromStores1) {
    enabled = obj6.useMobileLurkerServerPreview("GuildProfileActionSheet").enabled;
  }
  obj = { enabled, isContentReady: null != guildProfile, bottomSheetRef };
  const tmp7 = importDefault(dependencyMap[16]);
  const items3 = [guildId, analyticsLocations];
  ({ startHeight, handleContentLayout, handleFooterLayout } = function useFitSheetToContent(enabled) {
    enabled = enabled.enabled;
    const guildId = enabled;
    const isContentReady = enabled.isContentReady;
    const fetchGuildProfile = isContentReady;
    const bottomSheetRef = enabled.bottomSheetRef;
    const analyticsLocations = bottomSheetRef;
    const height = fetchGuildProfile(analyticsLocations[10])().height;
    const token1 = height;
    const tmp = token1(first.useState(null), 2);
    const first = tmp[0];
    let closure_5 = tmp[1];
    const tmp3 = token1(first.useState(null), 2);
    const first1 = tmp3[0];
    let closure_7 = tmp3[1];
    let closure_8 = first.useRef(false);
    const items = [enabled, first, first1, height];
    const items1 = [enabled, isContentReady];
    const startHeight = first.useMemo(() => {
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
    const handleContentLayout = first.useCallback((nativeEvent) => {
      let tmp = enabled;
      if (enabled) {
        tmp = isContentReady;
      }
      if (tmp) {
        callback(nativeEvent.nativeEvent.layout.height);
      }
    }, items1);
    const items3 = [enabled, first, first1, bottomSheetRef];
    const handleFooterLayout = first.useCallback((nativeEvent) => {
      if (enabled) {
        callback2(nativeEvent.nativeEvent.layout.height);
      }
    }, items2);
    const effect = first.useEffect(() => {
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
            const current = ref.current;
            if (null != current) {
              current.snapToIndex(0);
            }
          });
        }
      }
    }, items3);
    return { startHeight, handleContentLayout, handleFooterLayout };
  }(obj));
  const effect = React.useEffect(() => {
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
          let tmp20 = callback(importDefault(dependencyMap[20]), {});
          obj = { size: "lg" };
          const intl2 = arg1(dependencyMap[22]).intl;
          obj.text = intl2.string(arg1(dependencyMap[22]).t.cpT0Cq);
          obj.onPress = bottomSheetClose;
          let tmp19 = callback(arg1(dependencyMap[21]).Button, obj);
        }
      }
      if (null == guildProfile) {
        obj1 = { onRetry: callback };
        tmp20 = callback(importDefault(dependencyMap[23]), obj1);
        obj2 = { size: "lg" };
        const intl = arg1(dependencyMap[22]).intl;
        obj2.text = intl.string(arg1(dependencyMap[22]).t.cpT0Cq);
        obj2.onPress = bottomSheetClose;
        tmp19 = callback(arg1(dependencyMap[21]).Button, obj2);
      } else {
        obj3 = { guildProfile, isLurkerServerPreview: enabled };
        obj4 = { profile: guildProfile, context, inviteKey, isLurkerServerPreview: enabled };
        tmp19 = callback(importDefault(dependencyMap[25]), obj4);
        tmp20 = callback(importDefault(dependencyMap[24]), obj3);
        const tmp18 = callback(importDefault(dependencyMap[24]), obj3);
      }
    }
    const items6 = [token1];
    const memo = React.useMemo(() => {
      const obj = fetchGuildProfile(analyticsLocations[26])(token1);
      const items = [fetchGuildProfile(analyticsLocations[26])(token1).alpha(0).hex(), token1];
      return items;
    }, items6);
    obj5 = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, ref: bottomSheetRef, startHeight };
    obj6 = { start: VerticalGradient.START, end: {}, style: tmp.footerContainer, colors: memo };
    let tmp38;
    if (enabled) {
      tmp38 = handleFooterLayout;
    }
    obj6.onLayout = tmp38;
    obj6.children = tmp19;
    obj5.footer = callback(importDefault(dependencyMap[28]), obj6);
    const obj7 = { style: tmp.scrollView };
    let tmp42 = tmp20;
    if (enabled) {
      const obj8 = { onLayout: handleContentLayout, children: tmp20 };
      tmp42 = callback(closure_5, obj8);
    }
    obj7.children = tmp42;
    const items7 = [callback(arg1(dependencyMap[29]).BottomSheetScrollView, obj7), ];
    const obj9 = { variant: "floating" };
    const obj10 = { backgroundColor: token };
    obj9.tabStyle = obj10;
    obj9.onPress = bottomSheetClose;
    items7[1] = callback(arg1(dependencyMap[30]).ActionSheetHeaderBar, obj9);
    obj5.children = items7;
    return closure_13(arg1(dependencyMap[27]).BottomSheet, obj5);
  }
  const tmp10 = function useFitSheetToContent(enabled) {
    enabled = enabled.enabled;
    const guildId = enabled;
    const isContentReady = enabled.isContentReady;
    const fetchGuildProfile = isContentReady;
    const bottomSheetRef = enabled.bottomSheetRef;
    const analyticsLocations = bottomSheetRef;
    const height = fetchGuildProfile(analyticsLocations[10])().height;
    const token1 = height;
    const tmp = token1(first.useState(null), 2);
    const first = tmp[0];
    let closure_5 = tmp[1];
    const tmp3 = token1(first.useState(null), 2);
    const first1 = tmp3[0];
    let closure_7 = tmp3[1];
    let closure_8 = first.useRef(false);
    const items = [enabled, first, first1, height];
    const items1 = [enabled, isContentReady];
    const startHeight = first.useMemo(() => {
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
    const handleContentLayout = first.useCallback((nativeEvent) => {
      let tmp = enabled;
      if (enabled) {
        tmp = isContentReady;
      }
      if (tmp) {
        callback(nativeEvent.nativeEvent.layout.height);
      }
    }, items1);
    const items3 = [enabled, first, first1, bottomSheetRef];
    const handleFooterLayout = first.useCallback((nativeEvent) => {
      if (enabled) {
        callback2(nativeEvent.nativeEvent.layout.height);
      }
    }, items2);
    const effect = first.useEffect(() => {
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
            const current = ref.current;
            if (null != current) {
              current.snapToIndex(0);
            }
          });
        }
      }
    }, items3);
    return { startHeight, handleContentLayout, handleFooterLayout };
  }(obj);
  tmp20 = callback(closure_5, { style: tmp.loadingContainer, children: callback(closure_6, { font: 397, dx: 97 }) });
  tmp19 = null;
};
