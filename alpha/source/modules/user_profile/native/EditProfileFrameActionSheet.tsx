// Module ID: 15892
// Function ID: 15893
// Name: EditProfileFrameActionSheet
// Dependencies: [32, 19, 17, 7665, 7657, 1087, 21, 4971, 587, 558, 576, 8675, 8659, 7253, 7278, 1267, 8653, 8660, 7248, 1128, 8661, 5265, 10490, 504, 15893, 14488, 8655, 8676, 15894, 14494, 14495, 8662, 11170, 5258, 2]

// Module 15892 (EditProfileFrameActionSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import LinearGradientDefault from "LinearGradient" /* 5258 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7278 */;
import ProfileFrameRecord from "ProfileFrameRecord" /* 7657 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8653 */;
import useShopProductItems from "useShopProductItems" /* 8660 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 8662 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8676 */;
import ProfileFrameUserPreviewDefault from "ProfileFrameUserPreview" /* 11170 */;
import EditProfileFrameSection from "EditProfileFrameSection" /* 15894 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7665 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, dependencyMap, importDefault, setPendingChangesResult, trackResult;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let obj2;
let unpackModuleId;
({ View: hasOwnProperty, StyleSheet } = react_native);
const isProfileFrameRecord = ProfileFrameRecord.isProfileFrameRecord;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, previewContainer: { overflow: "hidden", height: 300, alignItems: "center" }, previewGradient: obj2 };
obj2 = { bottom: -1, color: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditProfileFrameActionSheet(arg0) {
  let closure_2;
  let currentProfileFrame;
  let guildId;
  let selectedProfileFrame;
  let tmp11;
  let tmp9;
  let user;
  const tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(32);
  ({ user, currentProfileFrame, guildId } = arg0);
  closure_12();
  let str = user.id;
  const tmp6 = selectedProfileFrame(8675);
  if (str == null) {
    str = "";
  }
  const tmp6Result = tmp6(str);
  [selectedProfileFrame, tmp9] = react.useState(currentProfileFrame);
  const tmpResult = tmp(8659);
  const bottomSheetRef = tmpResult.useBottomSheetRef().bottomSheetRef;
  const tmp5Result = selectedProfileFrame(7253);
  const analyticsLocations = tmp5Result(tmp5(7278).EDIT_PROFILE_FRAME_SHEET).analyticsLocations;
  if (cResult[0] !== tmp6Result) {
    let tmp12 = null != tmp6Result;
    if (tmp12) {
      let result;
      if (tmp6Result != null) {
        result = tmp6Result.hasPremiumCustomization();
      }
      tmp12 = result;
    }
    cResult[0] = tmp6Result;
    cResult[1] = tmp12;
    tmp11 = tmp12;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] === guildId) {
    let tmp14;
    if (cResult[3] === tmp11) {
      tmp14 = cResult[4];
    }
    dependencyMap = tmp14;
    if (cResult[5] !== tmp14) {
      class A {
        constructor() {
          tmp = closure_1(closure_2[15]);
          obj = {};
          track = tmp.track;
          OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
          merged = Object.assign(closure_2);
          obj.is_fullscreen = true;
          trackResult = track(OPEN_POPOUT, obj);
          return;
        }
      }
      cResult[5] = tmp14;
      class L {
        constructor(arg0) {
          tmp = closure_0(closure_2[16]);
          obj = { guildId, profileFrame: null };
          setPendingChanges = tmp.setPendingChanges;
          obj2 = closure_0(closure_2[17]);
          purchasedItem = obj2.getPurchasedItem(arg0, "firstProfileFrame");
          if (purchasedItem == null) {
            purchasedItem = closure_1;
          }
          if (purchasedItem == null) {
            purchasedItem = null;
          }
          obj.profileFrame = purchasedItem;
          setPendingChangesResult = setPendingChanges(obj);
          return;
        }
      }
    } else {
      class A {
        constructor() {
          tmp = closure_1(closure_2[15]);
          obj = {};
          track = tmp.track;
          OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
          merged = Object.assign(closure_2);
          obj.is_fullscreen = true;
          trackResult = track(OPEN_POPOUT, obj);
          return;
        }
      }
    }
    if (cResult[7] === guildId) {
      class A {
        constructor() {
          tmp = closure_1(closure_2[15]);
          obj = {};
          track = tmp.track;
          OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
          merged = Object.assign(closure_2);
          obj.is_fullscreen = true;
          trackResult = track(OPEN_POPOUT, obj);
          return;
        }
      }
      const _Symbol = Symbol;
      class L {
        constructor(arg0) {
          tmp = closure_0(closure_2[16]);
          obj = { guildId, profileFrame: null };
          setPendingChanges = tmp.setPendingChanges;
          obj2 = closure_0(closure_2[17]);
          purchasedItem = obj2.getPurchasedItem(arg0, "firstProfileFrame");
          if (purchasedItem == null) {
            purchasedItem = closure_1;
          }
          if (purchasedItem == null) {
            purchasedItem = null;
          }
          obj.profileFrame = purchasedItem;
          setPendingChangesResult = setPendingChanges(obj);
          return;
        }
      }
      if (tmp17 === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            tmp = closure_1(closure_2[15]);
            obj = {};
            track = tmp.track;
            OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
            merged = Object.assign(closure_2);
            obj.is_fullscreen = true;
            trackResult = track(OPEN_POPOUT, obj);
            return;
          }
        }
        let obj2 = { title: tmp20(tmp(1128).t["oTSa/q"]) };
        const BottomSheetTitleHeader = tmp(7248).BottomSheetTitleHeader;
        const intl = tmp(1128).intl;
        class L {
          constructor(arg0) {
            tmp = closure_0(closure_2[16]);
            obj = { guildId, profileFrame: null };
            setPendingChanges = tmp.setPendingChanges;
            obj2 = closure_0(closure_2[17]);
            purchasedItem = obj2.getPurchasedItem(arg0, "firstProfileFrame");
            if (purchasedItem == null) {
              purchasedItem = closure_1;
            }
            if (purchasedItem == null) {
              purchasedItem = null;
            }
            obj.profileFrame = purchasedItem;
            setPendingChangesResult = setPendingChanges(obj);
            return;
          }
        }
        cResult[10] = closure_9(BottomSheetTitleHeader, obj2);
        const tmp21 = closure_9(BottomSheetTitleHeader, obj2);
      } else {
        class A {
          constructor() {
            tmp = closure_1(closure_2[15]);
            obj = {};
            track = tmp.track;
            OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
            merged = Object.assign(closure_2);
            obj.is_fullscreen = true;
            trackResult = track(OPEN_POPOUT, obj);
            return;
          }
        }
      }
      if (cResult[11] === guildId) {
        class A {
          constructor() {
            tmp = closure_1(closure_2[15]);
            obj = {};
            track = tmp.track;
            OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
            merged = Object.assign(closure_2);
            obj.is_fullscreen = true;
            trackResult = track(OPEN_POPOUT, obj);
            return;
          }
        }
      }
      const obj3 = { user, selectedProfileFrame, setSelectedProfileFrame: tmp9, guildId };
      cResult[11] = guildId;
      cResult[12] = selectedProfileFrame;
      cResult[13] = user;
      cResult[14] = closure_9(closure_13, obj3);
      const tmp25 = closure_9(closure_13, obj3);
    }
    class L {
      constructor(arg0) {
        tmp = closure_0(closure_2[16]);
        obj = { guildId, profileFrame: null };
        setPendingChanges = tmp.setPendingChanges;
        obj2 = closure_0(closure_2[17]);
        purchasedItem = obj2.getPurchasedItem(arg0, "firstProfileFrame");
        if (purchasedItem == null) {
          purchasedItem = closure_1;
        }
        if (purchasedItem == null) {
          purchasedItem = null;
        }
        obj.profileFrame = purchasedItem;
        setPendingChangesResult = setPendingChanges(obj);
        return;
      }
    }
    cResult[7] = guildId;
    cResult[8] = selectedProfileFrame;
    cResult[9] = L;
  }
  const obj4 = { type: selectedProfileFrame(7278).EDIT_PROFILE_FRAME_SHEET, guild_id: guildId, profile_has_nitro_customization: tmp11 };
  cResult[2] = guildId;
  cResult[3] = tmp11;
  cResult[4] = obj4;
  tmp14 = obj4;
}) : (function EditProfileFrameActionSheet(arg0) {
  let BottomSheetTitleHeader;
  let closure_1;
  let currentProfileFrame;
  let guildId;
  let intl;
  let items3;
  let obj3;
  let obj4;
  let skuId;
  let skuId1;
  let tmp14;
  let user;
  ({ user, currentProfileFrame, guildId } = arg0);
  importDefault = undefined;
  let selectedProfileFrame;
  let memo;
  let tmp = closure_12();
  let str = user.id;
  const tmp4 = require("useDisplayProfile");
  if (str == null) {
    str = "";
  }
  const tmp4Result = tmp4(str);
  importDefault = tmp4Result;
  const tmp6 = memo(react.useState(currentProfileFrame), 2);
  selectedProfileFrame = tmp6[0];
  const tmp8 = tmp6[1];
  let obj = guildId(tmp3[12]);
  const bottomSheetRef = obj.useBottomSheetRef().bottomSheetRef;
  const tmp2Result = require("useAnalyticsLocations");
  const analyticsLocations = tmp2Result(tmp2(tmp3[14]).EDIT_PROFILE_FRAME_SHEET).analyticsLocations;
  const items = [guildId, tmp4Result];
  memo = react.useMemo(() => {
    let tmp;
    const obj = { type: AnalyticsLocationDefault.EDIT_PROFILE_FRAME_SHEET, guild_id: guildId, profile_has_nitro_customization: tmp };
    tmp = null != closure_1;
    if (tmp) {
      let result;
      if (closure_1 != null) {
        result = obj2.hasPremiumCustomization();
      }
      tmp = result;
    }
    return obj;
  }, items);
  const items1 = [memo];
  const items2 = [selectedProfileFrame, guildId];
  const callback = react.useCallback(() => {
    const obj = { is_fullscreen: true };
    const track = AnalyticsUtilsDefault.track;
    const OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
    AnalyticsUtilsDefault;
    const merged = Object.assign(memo);
    track(OPEN_POPOUT, obj);
  }, items1);
  const callback1 = react.useCallback((arg0) => {
    let purchasedItem;
    const obj = { guildId, profileFrame: purchasedItem };
    const setPendingChanges = UserProfileSettingsActionCreators.setPendingChanges;
    UserProfileSettingsActionCreators;
    const obj2 = useShopProductItems;
    purchasedItem = obj2.getPurchasedItem(arg0, "firstProfileFrame");
    if (purchasedItem == null) {
      purchasedItem = first;
    }
    if (purchasedItem == null) {
      purchasedItem = null;
    }
    setPendingChanges(obj);
  }, items2);
  let obj2 = { value: analyticsLocations, children: tmp14(BottomSheet, obj3) };
  const AnalyticsLocationProvider = guildId(tmp3[13]).AnalyticsLocationProvider;
  obj3 = { scrollable: true, ref: bottomSheetRef, onExpand: callback, startExpanded: true, header: closure_9(BottomSheetTitleHeader, obj4), children: items3 };
  BottomSheet = guildId(tmp3[21]).BottomSheet;
  obj4 = { title: intl.string(guildId(selectedProfileFrame[19]).t["oTSa/q"]) };
  BottomSheetTitleHeader = guildId(tmp3[18]).BottomSheetTitleHeader;
  intl = guildId(tmp3[19]).intl;
  items3 = [, ];
  const obj5 = { style: tmp.container, children: closure_9(closure_13, { user, selectedProfileFrame, setSelectedProfileFrame: tmp8, guildId }) };
  items3[0] = closure_9(closure_5, obj5);
  const obj6 = { user, currentSkuId: skuId, selectedSkuId: skuId1, onApply: callback1, analyticsLocations, analyticsSource: require("AnalyticsLocation").EDIT_PROFILE_FRAME_SHEET };
  skuId = undefined;
  tmp14 = closure_10;
  const tmp2Result2 = require("EditCollectiblesCTAButton");
  if (currentProfileFrame != null) {
    skuId = currentProfileFrame.skuId;
  }
  skuId1 = undefined;
  if (selectedProfileFrame != null) {
    skuId1 = selectedProfileFrame.skuId;
  }
  items3[1] = closure_9(tmp2Result2, obj6);
  return closure_9(AnalyticsLocationProvider, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditProfileFrameInner(user) {
  let guildId;
  let isFetching;
  let selectedProfileFrame;
  let setSelectedProfileFrame;
  let tmp5;
  let tmp6;
  let tmp = user;
  let obj = user(guildId[10]);
  const cResult = obj.c(34);
  user = user.user;
  ({ selectedProfileFrame, setSelectedProfileFrame } = user);
  guildId = user.guildId;
  const obj2 = user(guildId[22]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj2.useGetOrFetchCollectiblesCategoriesAndPurchases();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesPurchaseStore];
    const fn = function n() {
      return isFetching.isFetching;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(guildId[23]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  setSelectedProfileFrame(guildId[24])();
  const tmpResult3 = tmp(guildId[25]);
  const shouldPinCollectiblesEditPreview = tmpResult3.useShouldPinCollectiblesEditPreview();
  const tmp11 = setSelectedProfileFrame(guildId[11])(user.id, guildId);
  let profileFrame;
  if (tmp11 != null) {
    const _userProfile = tmp11._userProfile;
    if (_userProfile != null) {
      profileFrame = _userProfile.profileFrame;
    }
  }
  let profileFrame1;
  if (tmp11 != null) {
    const _guildMemberProfile = tmp11._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileFrame1 = _guildMemberProfile.profileFrame;
    }
  }
  if (cResult[2] === guildId) {
    if (cResult[3] === selectedProfileFrame) {
      if (cResult[4] === profileFrame) {
        let tmp14;
        let tmp17;
        let tmp16;
        if (cResult[5] === profileFrame1) {
          tmp14 = cResult[6];
        }
        if (cResult[7] !== user) {
          class R {
            constructor() {
              const tmp = null == user || user.isNonUserBot();
              if (!tmp) {
                const tmp4 = maybeFetchUserProfileDefault;
                tmp4(user.id, user.getAvatarURL(null, 80), { withMutualGuilds: true });
              }
            }
          }
          const items1 = [user];
          cResult[7] = user;
          class A {
            constructor(arg0) {
              let items;
              let selectedSkuId;
              ({ items, size, selectedSkuId } = arg0);
              const obj = { items, size, selectedSkuId, setSelectedProfileFrame, guildId };
              return React4(EditProfileFrameSection.EditProfileFrameRow, obj);
            }
          }
          cResult[8] = R;
          cResult[9] = items1;
          tmp17 = items1;
          tmp16 = R;
        } else {
          class R {
            constructor() {
              const tmp = null == user || user.isNonUserBot();
              if (!tmp) {
                const tmp4 = maybeFetchUserProfileDefault;
                tmp4(user.id, user.getAvatarURL(null, 80), { withMutualGuilds: true });
              }
            }
          }
          tmp17 = cResult[9];
        }
        const effect = react.useEffect(tmp16, tmp17);
        if (cResult[10] === guildId) {
          class R {
            constructor() {
              const tmp = null == user || user.isNonUserBot();
              if (!tmp) {
                const tmp4 = maybeFetchUserProfileDefault;
                tmp4(user.id, user.getAvatarURL(null, 80), { withMutualGuilds: true });
              }
            }
          }
          if (tmp14 != null) {
            class R {
              constructor() {
                const tmp = null == user || user.isNonUserBot();
                if (!tmp) {
                  const tmp4 = maybeFetchUserProfileDefault;
                  tmp4(user.id, user.getAvatarURL(null, 80), { withMutualGuilds: true });
                }
              }
            }
          }
          if (cResult[13] === guildId) {
            class R {
              constructor() {
                const tmp = null == user || user.isNonUserBot();
                if (!tmp) {
                  const tmp4 = maybeFetchUserProfileDefault;
                  tmp4(user.id, user.getAvatarURL(null, 80), { withMutualGuilds: true });
                }
              }
            }
          }
          class A {
            constructor(arg0) {
              let items;
              let selectedSkuId;
              ({ items, size, selectedSkuId } = arg0);
              const obj = { items, size, selectedSkuId, setSelectedProfileFrame, guildId };
              return React4(EditProfileFrameSection.EditProfileFrameRow, obj);
            }
          }
          const obj3 = { previewSkuId: undefined, user, guildId };
          cResult[13] = guildId;
          cResult[14] = undefined;
          cResult[15] = user;
          cResult[16] = closure_9(closure_14, obj3);
          const tmp24 = closure_9(closure_14, obj3);
        }
        class A {
          constructor(arg0) {
            let items;
            let selectedSkuId;
            ({ items, size, selectedSkuId } = arg0);
            const obj = { items, size, selectedSkuId, setSelectedProfileFrame, guildId };
            return React4(EditProfileFrameSection.EditProfileFrameRow, obj);
          }
        }
        cResult[10] = guildId;
        cResult[11] = setSelectedProfileFrame;
        cResult[12] = A;
      }
    }
  }
  const tmpResult4 = tmp(guildId[26]);
  const profilePreviewValue = tmpResult4.getProfilePreviewValue({ pendingValue: selectedProfileFrame, userValue: profileFrame, guildValue: profileFrame1, guildId });
  cResult[2] = guildId;
  cResult[3] = selectedProfileFrame;
  cResult[4] = profileFrame;
  cResult[5] = profileFrame1;
  cResult[6] = profilePreviewValue;
  tmp14 = profilePreviewValue;
}) : (function EditProfileFrameInner(user) {
  let intl;
  let intl2;
  let isFetching;
  let profileFrame;
  let profileFrame1;
  let selectedProfileFrame;
  let setSelectedProfileFrame;
  let skuId1;
  let skuId2;
  let tmp25;
  user = user.user;
  ({ selectedProfileFrame, setSelectedProfileFrame } = user);
  const guildId = user.guildId;
  let tmp = user;
  let obj = user(guildId[22]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  const items = [CollectiblesPurchaseStore];
  const obj2 = user(guildId[23]);
  const stateFromStores = obj2.useStateFromStores(items, () => isFetching.isFetching);
  const tmp6 = setSelectedProfileFrame(guildId[24])();
  const obj3 = user(guildId[25]);
  const shouldPinCollectiblesEditPreview = obj3.useShouldPinCollectiblesEditPreview();
  const tmp8 = setSelectedProfileFrame(guildId[11])(user.id, guildId);
  const obj4 = { pendingValue: selectedProfileFrame, userValue: profileFrame, guildValue: profileFrame1, guildId };
  profileFrame = undefined;
  const getProfilePreviewValue = user(guildId[26]).getProfilePreviewValue;
  user(guildId[26]);
  const tmp5 = setSelectedProfileFrame;
  if (tmp8 != null) {
    const _userProfile = tmp8._userProfile;
    if (_userProfile != null) {
      profileFrame = _userProfile.profileFrame;
    }
  }
  profileFrame1 = undefined;
  if (tmp8 != null) {
    const _guildMemberProfile = tmp8._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileFrame1 = _guildMemberProfile.profileFrame;
    }
  }
  const profilePreviewValue = getProfilePreviewValue(obj4);
  const items1 = [user];
  const effect = react.useEffect(() => {
    const tmp = null == user || user.isNonUserBot();
    if (!tmp) {
      const tmp4 = maybeFetchUserProfileDefault;
      tmp4(user.id, user.getAvatarURL(null, 80), { withMutualGuilds: true });
    }
  }, items1);
  const items2 = [setSelectedProfileFrame, guildId];
  let skuId;
  const callback = react.useCallback((arg0) => {
    let items;
    let selectedSkuId;
    ({ items, size, selectedSkuId } = arg0);
    const obj = { items, size, selectedSkuId, setSelectedProfileFrame, guildId };
    return React4(EditProfileFrameSection.EditProfileFrameRow, obj);
  }, items2);
  const tmp18 = closure_14;
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_9(tmp18, { previewSkuId: skuId, user, guildId }), ];
  const obj5 = { user, previewSkuId: skuId1, nitroJoinCTA: intl.string(tmp(guildId[19]).t["JvNv+a"]), nitroUpgradeCTA: intl2.string(tmp(guildId[19]).t.hR2psy) };
  skuId1 = undefined;
  const tmp5Result = tmp5(guildId[29]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  const obj6 = { children: items3 };
  intl = tmp(tmp2[19]).intl;
  intl2 = tmp(tmp2[19]).intl;
  items3[1] = closure_9(tmp5Result, obj5);
  const tmp15Result = closure_10(closure_11, obj6);
  let tmp23 = null;
  if (shouldPinCollectiblesEditPreview) {
    tmp23 = tmp15Result;
  }
  const items4 = [tmp23, ];
  const obj7 = { sections: tmp6, selectedSkuId: skuId2, renderRow: callback, isFetching: stateFromStores, ListHeaderComponent: tmp25 };
  skuId2 = undefined;
  const EditCollectiblesPickerList = tmp(tmp2[30]).EditCollectiblesPickerList;
  if (selectedProfileFrame != null) {
    skuId2 = selectedProfileFrame.skuId;
  }
  tmp25 = null;
  if (!shouldPinCollectiblesEditPreview) {
    tmp25 = tmp15Result;
  }
  const obj8 = { children: items4 };
  items4[1] = closure_9(EditCollectiblesPickerList, obj7);
  return closure_10(closure_11, obj8);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileFrameSectionPreview(previewSkuId) {
  let guildId;
  let items;
  let product;
  let purchase;
  let user;
  const obj = react2;
  const cResult = obj.c(16);
  ({ user, guildId } = previewSkuId);
  previewSkuId = previewSkuId.previewSkuId;
  const tmp3 = closure_12();
  ({ product, purchase } = useCollectiblesDataDefault(previewSkuId));
  let first;
  useCollectiblesDataDefault(previewSkuId);
  if (product != null) {
    first = product.items[0];
  }
  if (first == null) {
    let first1;
    if (purchase != null) {
      first1 = purchase.items[0];
    }
    first = first1;
  }
  let tmp8 = null;
  if (isProfileFrameRecord(first)) {
    tmp8 = first;
  }
  if (cResult[0] === guildId) {
    if (cResult[1] === tmp8) {
      let tmp9;
      let tmp13;
      let tmp12;
      if (cResult[2] === user) {
        tmp9 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const point = { x: 0, y: 0.6 };
        const point1 = { x: 0, y: 1 };
        cResult[4] = point;
        cResult[5] = point1;
        tmp13 = point1;
        tmp12 = point;
      } else {
        tmp12 = cResult[4];
        tmp13 = cResult[5];
      }
      const _HermesInternal = HermesInternal;
      const combined = "" + tmp3.previewGradient.color + "00";
      if (cResult[6] === tmp3.previewGradient.color) {
        let tmp15;
        if (cResult[7] === combined) {
          tmp15 = cResult[8];
        }
        if (cResult[9] === tmp3.previewGradient) {
          let tmp16;
          if (cResult[10] === tmp15) {
            tmp16 = cResult[11];
          }
          if (cResult[12] === tmp3.previewContainer) {
            if (cResult[13] === tmp9) {
              let tmp19;
              if (cResult[14] === tmp16) {
                tmp19 = cResult[15];
              }
              return tmp19;
            }
          }
          const obj2 = { style: tmp3.previewContainer, children: items };
          items = [tmp9, tmp16];
          const tmp22 = authStore(hasOwnProperty, obj2);
          cResult[12] = tmp3.previewContainer;
          cResult[13] = tmp9;
          cResult[14] = tmp16;
          cResult[15] = tmp22;
          tmp19 = tmp22;
        }
        const obj3 = { style: tmp3.previewGradient, start: tmp12, end: tmp13, colors: tmp15 };
        const tmp18 = React4(LinearGradientDefault, obj3);
        cResult[9] = tmp3.previewGradient;
        cResult[10] = tmp15;
        cResult[11] = tmp18;
        tmp16 = tmp18;
      }
      const items1 = [combined, tmp3.previewGradient.color];
      cResult[6] = tmp3.previewGradient.color;
      cResult[7] = combined;
      cResult[8] = items1;
      tmp15 = items1;
    }
  }
  const tmp10 = React4(ProfileFrameUserPreviewDefault, { user, guildId, profileFrame: tmp8, maxWidth: 280 });
  cResult[0] = guildId;
  cResult[1] = tmp8;
  cResult[2] = user;
  cResult[3] = tmp10;
  tmp9 = tmp10;
}) : (function ProfileFrameSectionPreview(arg0) {
  let guildId;
  let items1;
  let items2;
  let previewSkuId;
  let user;
  let purchase;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = closure_12();
  const tmp2 = purchase(8662)(previewSkuId);
  const product = tmp2.product;
  let c0 = product;
  purchase = tmp2.purchase;
  const items = [purchase, product];
  const obj = { style: tmp.previewContainer, children: items1 };
  const memo = react.useMemo(() => {
    let first;
    if (items != null) {
      first = items.items[0];
    }
    if (first == null) {
      let first1;
      if (purchase != null) {
        first1 = purchase.items[0];
      }
      first = first1;
    }
    let tmp3 = null;
    if (isProfileFrameRecord(first)) {
      tmp3 = first;
    }
    return tmp3;
  }, items);
  items1 = [closure_9(purchase(11170), { user, guildId, profileFrame: memo, maxWidth: 280 }), ];
  const obj2 = { style: tmp.previewGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: items2 };
  items2 = [, ];
  const tmp4 = purchase(5258);
  items2[0] = "" + tmp.previewGradient.color + "00";
  items2[1] = tmp.previewGradient.color;
  items1[1] = closure_9(tmp4, obj2);
  return closure_10(closure_5, obj);
});
let result = size.fileFinishedImporting("modules/user_profile/native/EditProfileFrameActionSheet.tsx");

export default tmp6;
