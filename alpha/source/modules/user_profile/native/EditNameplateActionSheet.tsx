// Module ID: 16166
// Function ID: 16167
// Name: EditNameplateActionSheet
// Dependencies: [32, 19, 17, 7700, 1990, 4916, 1084, 21, 5004, 587, 558, 576, 8696, 7289, 7314, 1264, 8690, 8697, 7284, 1125, 8698, 5301, 10525, 504, 16167, 14752, 8692, 16168, 14758, 14759, 8699, 9441, 5294, 11213, 2]

// Module 16166 (EditNameplateActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import NameplateRecord from "NameplateRecord" /* 1990 */;
import LinearGradientDefault from "LinearGradient" /* 5294 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8690 */;
import useShopProductItems from "useShopProductItems" /* 8697 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 8699 */;
import NameplateDummyUserPreview from "NameplateDummyUserPreview" /* 9441 */;
import NameplatePreview from "NameplatePreview" /* 11213 */;
import EditNameplateSection from "EditNameplateSection" /* 16168 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7700 */;
import GuildMemberStore from "GuildMemberStore" /* 4916 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require;

let c10;
let closure_12;
let size;
let unpackModuleId;
const View = react_native.View;
const isNameplateRecord = NameplateRecord.isNameplateRecord;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let obj = { container: { flex: 1 }, nameplatePreviewContainer: { width: "80%", alignSelf: "center", justifyContent: "center", alignItems: "center" }, nameplateGradientContainer: { width: "100%" }, nameplatePreviewGradient: size };
size = { position: "absolute", width: "100%", height: "100%", color: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditNameplateActionSheet(arg0) {
  let currentNameplate;
  let first;
  let first1;
  let guildId;
  let intl;
  let items;
  let tmp7;
  let user;
  const tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(25);
  ({ user, currentNameplate, guildId } = arg0);
  const tmp4 = closure_13();
  let obj2 = guildId(8696);
  const bottomSheetRef = obj2.useBottomSheetRef().bottomSheetRef;
  [first, tmp7] = react.useState(undefined);
  let tmp8 = currentNameplate;
  if (undefined !== first) {
    tmp8 = first;
  }
  const tmp10 = first(7289);
  const analyticsLocations = tmp10(first(7314).EDIT_NAMEPLATE_SHEET).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const obj = first(dependencyMap[15]);
      const obj2 = { type: first(dependencyMap[14]).EDIT_NAMEPLATE_SHEET, is_fullscreen: true };
      obj.track(constants.OPEN_POPOUT, obj2);
    };
    cResult[0] = fn;
    first1 = fn;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] === guildId) {
    let tmp12;
    let tmp13;
    if (cResult[2] === first) {
      tmp12 = cResult[3];
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { title: intl.string(tmp(1125).t.BwdeM1) };
      const BottomSheetTitleHeader = tmp(7284).BottomSheetTitleHeader;
      intl = tmp(1125).intl;
      const tmp15 = closure_10(BottomSheetTitleHeader, obj3);
      cResult[4] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[4];
    }
    if (cResult[5] === guildId) {
      if (cResult[6] === tmp8) {
        let tmp16;
        if (cResult[7] === user) {
          tmp16 = cResult[8];
        }
        if (cResult[9] === tmp4.container) {
          let tmp20;
          if (cResult[10] === tmp16) {
            tmp20 = cResult[11];
          }
          let skuId;
          if (currentNameplate != null) {
            skuId = currentNameplate.skuId;
          }
          let skuId1;
          if (tmp8 != null) {
            skuId1 = tmp8.skuId;
          }
          if (cResult[12] === analyticsLocations) {
            if (cResult[13] === tmp12) {
              if (cResult[14] === skuId) {
                if (cResult[15] === skuId1) {
                  let tmp27;
                  if (cResult[16] === user) {
                    tmp27 = cResult[17];
                  }
                  if (cResult[18] === bottomSheetRef) {
                    if (cResult[19] === tmp20) {
                      let tmp31;
                      if (cResult[20] === tmp27) {
                        tmp31 = cResult[21];
                      }
                      if (cResult[22] === analyticsLocations) {
                        let tmp34;
                        if (cResult[23] === tmp31) {
                          tmp34 = cResult[24];
                        }
                        return tmp34;
                      }
                      const obj4 = { value: analyticsLocations, children: tmp31 };
                      const tmp36 = closure_10(tmp(7289).AnalyticsLocationProvider, obj4);
                      cResult[22] = analyticsLocations;
                      cResult[23] = tmp31;
                      cResult[24] = tmp36;
                      tmp34 = tmp36;
                    }
                  }
                  const obj5 = { scrollable: true, ref: bottomSheetRef, onExpand: first1, startExpanded: true, header: tmp13, children: items };
                  items = [tmp20, tmp27];
                  const tmp33 = closure_11(tmp(5301).BottomSheet, obj5);
                  cResult[18] = bottomSheetRef;
                  cResult[19] = tmp20;
                  cResult[20] = tmp27;
                  cResult[21] = tmp33;
                  tmp31 = tmp33;
                }
              }
            }
          }
          const obj6 = { user, currentSkuId: skuId, selectedSkuId: skuId1, onApply: tmp12, analyticsLocations, analyticsSource: first(7314).EDIT_NAMEPLATE_SHEET };
          const tmp9Result = first(8698);
          const tmp30 = closure_10(tmp9Result, obj6);
          cResult[12] = analyticsLocations;
          cResult[13] = tmp12;
          cResult[14] = skuId;
          cResult[15] = skuId1;
          cResult[16] = user;
          cResult[17] = tmp30;
          tmp27 = tmp30;
        }
        const obj7 = { style: tmp4.container, children: tmp16 };
        const tmp23 = closure_10(View, obj7);
        cResult[9] = tmp4.container;
        cResult[10] = tmp16;
        cResult[11] = tmp23;
        tmp20 = tmp23;
      }
    }
    const obj8 = { user, selectedNameplate: tmp8, setSelectedNameplate: tmp7, guildId };
    const tmp19 = closure_10(closure_14, obj8);
    cResult[5] = guildId;
    cResult[6] = tmp8;
    cResult[7] = user;
    cResult[8] = tmp19;
    tmp16 = tmp19;
  }
  class G {
    constructor(arg0) {
      let purchasedItem;
      const obj = { guildId, nameplate: purchasedItem };
      const setPendingChanges = UserProfileSettingsActionCreators.setPendingChanges;
      UserProfileSettingsActionCreators;
      const obj2 = useShopProductItems;
      purchasedItem = obj2.getPurchasedItem(arg0, "firstNameplate");
      if (purchasedItem == null) {
        purchasedItem = first;
      }
      if (purchasedItem == null) {
        purchasedItem = null;
      }
      setPendingChanges(obj);
    }
  }
  cResult[1] = guildId;
  cResult[2] = first;
  cResult[3] = G;
  tmp12 = G;
}) : (function EditNameplateActionSheet(arg0) {
  let BottomSheetTitleHeader;
  let currentNameplate;
  let first;
  let guildId;
  let intl;
  let items1;
  let obj4;
  let obj5;
  let skuId;
  let skuId1;
  let tmp13;
  let tmp6;
  let tmp8;
  let user;
  ({ user, currentNameplate, guildId } = arg0);
  first = undefined;
  const tmp = closure_13();
  let obj = guildId(8696);
  let obj2 = react;
  const bottomSheetRef = obj.useBottomSheetRef().bottomSheetRef;
  [first, tmp6] = react.useState(undefined);
  let tmp7 = currentNameplate;
  if (undefined !== first) {
    tmp7 = first;
  }
  const tmp9 = first(7289);
  const analyticsLocations = tmp9(first(7314).EDIT_NAMEPLATE_SHEET).analyticsLocations;
  const items = [first, guildId];
  const callback = obj2.useCallback(() => {
    const obj = first(dependencyMap[15]);
    const obj2 = { type: first(dependencyMap[14]).EDIT_NAMEPLATE_SHEET, is_fullscreen: true };
    obj.track(constants.OPEN_POPOUT, obj2);
  }, []);
  const callback1 = obj2.useCallback((arg0) => {
    let purchasedItem;
    const obj = { guildId, nameplate: purchasedItem };
    const setPendingChanges = UserProfileSettingsActionCreators.setPendingChanges;
    UserProfileSettingsActionCreators;
    const obj2 = useShopProductItems;
    purchasedItem = obj2.getPurchasedItem(arg0, "firstNameplate");
    if (purchasedItem == null) {
      purchasedItem = first;
    }
    if (purchasedItem == null) {
      purchasedItem = null;
    }
    setPendingChanges(obj);
  }, items);
  const obj3 = { value: analyticsLocations, children: tmp13(BottomSheet, obj4) };
  const AnalyticsLocationProvider = tmp2(7289).AnalyticsLocationProvider;
  obj4 = { scrollable: true, ref: bottomSheetRef, onExpand: callback, startExpanded: true, header: closure_10(BottomSheetTitleHeader, obj5), children: items1 };
  BottomSheet = tmp2(5301).BottomSheet;
  obj5 = { title: intl.string(guildId(1125).t.BwdeM1) };
  BottomSheetTitleHeader = tmp2(7284).BottomSheetTitleHeader;
  intl = tmp2(1125).intl;
  items1 = [, ];
  const obj6 = { style: tmp.container, children: closure_10(closure_14, { user, selectedNameplate: tmp7, setSelectedNameplate: tmp6, guildId }) };
  items1[0] = closure_10(View, obj6);
  const obj7 = { user, currentSkuId: skuId, selectedSkuId: skuId1, onApply: callback1, analyticsLocations, analyticsSource: tmp8(7314).EDIT_NAMEPLATE_SHEET };
  skuId = undefined;
  tmp13 = closure_11;
  const tmp14 = first(8698);
  tmp8 = first;
  if (currentNameplate != null) {
    skuId = currentNameplate.skuId;
  }
  skuId1 = undefined;
  if (tmp7 != null) {
    skuId1 = tmp7.skuId;
  }
  items1[1] = closure_10(tmp14, obj7);
  return closure_10(AnalyticsLocationProvider, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditNameplateInner(user) {
  let guildId;
  let isFetching;
  let items2;
  let items3;
  let selectedNameplate;
  let setSelectedNameplate;
  let tmp12;
  let tmp5;
  let tmp6;
  const tmp = user;
  let obj = user(guildId[11]);
  const cResult = obj.c(35);
  user = user.user;
  ({ selectedNameplate, setSelectedNameplate } = user);
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
  const tmp10 = setSelectedNameplate(guildId[24])();
  const tmpResult4 = tmp(guildId[25]);
  const shouldPinCollectiblesEditPreview = tmpResult4.useShouldPinCollectiblesEditPreview();
  const tmp9 = setSelectedNameplate;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildMemberStore];
    cResult[2] = items1;
    tmp12 = items1;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] === guildId) {
    let tmp14;
    if (cResult[4] === user) {
      tmp14 = cResult[5];
    }
    const tmpResult5 = tmp(guildId[23]);
    const stateFromStores1 = tmpResult5.useStateFromStores(tmp12, tmp14);
    let nameplate;
    if (user != null) {
      const collectibles = user.collectibles;
      if (collectibles != null) {
        nameplate = collectibles.nameplate;
      }
    }
    let nameplate1;
    if (stateFromStores1 != null) {
      const collectibles2 = stateFromStores1.collectibles;
      if (collectibles2 != null) {
        nameplate1 = collectibles2.nameplate;
      }
    }
    if (cResult[6] === guildId) {
      if (cResult[7] === selectedNameplate) {
        if (cResult[8] === nameplate) {
          if (cResult[11] === guildId) {
            let tmp21;
            if (cResult[12] === setSelectedNameplate) {
              tmp21 = cResult[13];
            }
            class A {
              constructor(arg0) {
                let items;
                let selectedSkuId;
                ({ items, size, selectedSkuId } = arg0);
                const obj = { items, size, selectedSkuId, setSelectedNameplate, guildId };
                return authStore(EditNameplateSection.EditNameplateRow, obj);
              }
            }
            if (cResult[14] === guildId) {
              if (cResult[15] === undefined) {
                let tmp23;
                let tmp29;
                let tmp28;
                if (cResult[16] === user) {
                  tmp23 = cResult[17];
                }
                class A {
                  constructor(arg0) {
                    let items;
                    let selectedSkuId;
                    ({ items, size, selectedSkuId } = arg0);
                    const obj = { items, size, selectedSkuId, setSelectedNameplate, guildId };
                    return authStore(EditNameplateSection.EditNameplateRow, obj);
                  }
                }
                const _Symbol = Symbol;
                if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                  const string = tmp(tmp2[19]).intl.string;
                  class A {
                    constructor(arg0) {
                      let items;
                      let selectedSkuId;
                      ({ items, size, selectedSkuId } = arg0);
                      const obj = { items, size, selectedSkuId, setSelectedNameplate, guildId };
                      return authStore(EditNameplateSection.EditNameplateRow, obj);
                    }
                  }
                  const intl = tmp(tmp2[19]).intl;
                  const stringResult = intl.string(tmp(guildId[19]).t.a6SrkR);
                  cResult[18] = tmp30;
                  cResult[19] = stringResult;
                  tmp29 = stringResult;
                  tmp28 = tmp30;
                } else {
                  tmp28 = cResult[18];
                  tmp29 = cResult[19];
                }
                if (cResult[20] === undefined) {
                  let tmp32;
                  if (cResult[21] === user) {
                    tmp32 = cResult[22];
                  }
                  if (cResult[23] === tmp23) {
                    let tmp35;
                    if (cResult[24] === tmp32) {
                      tmp35 = cResult[25];
                    }
                    class A {
                      constructor(arg0) {
                        let items;
                        let selectedSkuId;
                        ({ items, size, selectedSkuId } = arg0);
                        const obj = { items, size, selectedSkuId, setSelectedNameplate, guildId };
                        return authStore(EditNameplateSection.EditNameplateRow, obj);
                      }
                    }
                    let skuId;
                    if (selectedNameplate != null) {
                      skuId = selectedNameplate.skuId;
                    }
                    let tmp40 = null;
                    if (!shouldPinCollectiblesEditPreview) {
                      tmp40 = tmp35;
                    }
                    if (cResult[26] === stateFromStores) {
                      if (cResult[27] === tmp21) {
                        if (cResult[28] === tmp10) {
                          if (cResult[29] === skuId) {
                            let tmp41;
                            if (cResult[30] === tmp40) {
                              tmp41 = cResult[31];
                            }
                            if (cResult[32] === null) {
                              let tmp44;
                              if (cResult[33] === tmp41) {
                                tmp44 = cResult[34];
                              }
                              return tmp44;
                            }
                            class A {
                              constructor(arg0) {
                                let items;
                                let selectedSkuId;
                                ({ items, size, selectedSkuId } = arg0);
                                const obj = { items, size, selectedSkuId, setSelectedNameplate, guildId };
                                return authStore(EditNameplateSection.EditNameplateRow, obj);
                              }
                            }
                            const obj3 = { children: items2 };
                            items2 = [null, tmp41];
                            const tmp46 = closure_11(closure_12, obj3);
                            cResult[32] = null;
                            cResult[33] = tmp41;
                            cResult[34] = tmp46;
                            tmp44 = tmp46;
                          }
                        }
                      }
                    }
                    const obj4 = { sections: tmp10, selectedSkuId: skuId, renderRow: tmp21, isFetching: stateFromStores, ListHeaderComponent: tmp40 };
                    const tmp43 = closure_10(tmp(guildId[29]).EditCollectiblesPickerList, obj4);
                    cResult[26] = stateFromStores;
                    cResult[27] = tmp21;
                    cResult[28] = tmp10;
                    cResult[29] = skuId;
                    cResult[30] = tmp40;
                    cResult[31] = tmp43;
                    tmp41 = tmp43;
                  }
                  class A {
                    constructor(arg0) {
                      let items;
                      let selectedSkuId;
                      ({ items, size, selectedSkuId } = arg0);
                      const obj = { items, size, selectedSkuId, setSelectedNameplate, guildId };
                      return authStore(EditNameplateSection.EditNameplateRow, obj);
                    }
                  }
                  const obj5 = { children: items3 };
                  items3 = [tmp23, tmp32];
                  const tmp37 = closure_11(closure_12, obj5);
                  cResult[23] = tmp23;
                  cResult[24] = tmp32;
                  cResult[25] = tmp37;
                  tmp35 = tmp37;
                }
                const obj6 = { user, previewSkuId: undefined, nitroJoinCTA: tmp28, nitroUpgradeCTA: tmp29 };
                const tmp34 = closure_10(tmp9(guildId[28]), obj6);
                cResult[20] = undefined;
                cResult[21] = user;
                cResult[22] = tmp34;
                tmp32 = tmp34;
              }
            }
            const obj7 = { previewSkuId: undefined, user, guildId };
            const tmp26 = closure_10(closure_15, obj7);
            cResult[14] = guildId;
            cResult[15] = undefined;
            cResult[16] = user;
            cResult[17] = tmp26;
            tmp23 = tmp26;
          }
          class A {
            constructor(arg0) {
              let items;
              let selectedSkuId;
              ({ items, size, selectedSkuId } = arg0);
              const obj = { items, size, selectedSkuId, setSelectedNameplate, guildId };
              return authStore(EditNameplateSection.EditNameplateRow, obj);
            }
          }
          cResult[11] = guildId;
          cResult[12] = setSelectedNameplate;
          cResult[13] = A;
          tmp21 = A;
        }
      }
    }
    const obj8 = { pendingValue: selectedNameplate, userValue: nameplate, guildValue: nameplate1, guildId };
    const tmpResult6 = tmp(guildId[26]);
    const profilePreviewValue = tmpResult6.getProfilePreviewValue(obj8);
    cResult[6] = guildId;
    cResult[7] = selectedNameplate;
    cResult[8] = nameplate;
    cResult[9] = nameplate1;
    cResult[10] = profilePreviewValue;
  }
  class E {
    constructor() {
      let member = null;
      if (null != guildId) {
        member = GuildMemberStore.getMember(tmp, user.id);
      }
      return member;
    }
  }
  cResult[3] = guildId;
  cResult[4] = user;
  cResult[5] = E;
  tmp14 = E;
}) : (function EditNameplateInner(user) {
  let intl;
  let intl2;
  let isFetching;
  let nameplate;
  let nameplate1;
  let selectedNameplate;
  let setSelectedNameplate;
  let skuId1;
  let skuId2;
  let tmp24;
  user = user.user;
  ({ selectedNameplate, setSelectedNameplate } = user);
  const guildId = user.guildId;
  const tmp = user;
  let obj = user(guildId[22]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  const items = [CollectiblesPurchaseStore];
  const obj2 = user(guildId[23]);
  const stateFromStores = obj2.useStateFromStores(items, () => isFetching.isFetching);
  const tmp6 = setSelectedNameplate(guildId[24])();
  const obj3 = user(guildId[25]);
  const shouldPinCollectiblesEditPreview = obj3.useShouldPinCollectiblesEditPreview();
  const items1 = [GuildMemberStore];
  const obj4 = user(guildId[23]);
  const stateFromStores1 = obj4.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  });
  const obj5 = { pendingValue: selectedNameplate, userValue: nameplate, guildValue: nameplate1, guildId };
  nameplate = undefined;
  const getProfilePreviewValue = user(guildId[26]).getProfilePreviewValue;
  user(guildId[26]);
  const tmp5 = setSelectedNameplate;
  if (user != null) {
    const collectibles = user.collectibles;
    if (collectibles != null) {
      nameplate = collectibles.nameplate;
    }
  }
  nameplate1 = undefined;
  if (stateFromStores1 != null) {
    const collectibles2 = stateFromStores1.collectibles;
    if (collectibles2 != null) {
      nameplate1 = collectibles2.nameplate;
    }
  }
  const profilePreviewValue = getProfilePreviewValue(obj5);
  const items2 = [setSelectedNameplate, guildId];
  let skuId;
  const callback = react.useCallback((arg0) => {
    let items;
    let selectedSkuId;
    ({ items, size, selectedSkuId } = arg0);
    const obj = { items, size, selectedSkuId, setSelectedNameplate, guildId };
    return authStore(EditNameplateSection.EditNameplateRow, obj);
  }, items2);
  const tmp17 = closure_15;
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_10(tmp17, { previewSkuId: skuId, user, guildId }), ];
  const obj6 = { user, previewSkuId: skuId1, nitroJoinCTA: intl.string(tmp(guildId[19]).t["V+IE93"]), nitroUpgradeCTA: intl2.string(tmp(guildId[19]).t.a6SrkR) };
  skuId1 = undefined;
  const tmp5Result = tmp5(guildId[28]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  const obj7 = { children: items3 };
  intl = tmp(tmp2[19]).intl;
  intl2 = tmp(tmp2[19]).intl;
  items3[1] = closure_10(tmp5Result, obj6);
  const tmp14Result = closure_11(closure_12, obj7);
  let tmp22 = null;
  if (shouldPinCollectiblesEditPreview) {
    tmp22 = tmp14Result;
  }
  const items4 = [tmp22, ];
  const obj8 = { sections: tmp6, selectedSkuId: skuId2, renderRow: callback, isFetching: stateFromStores, ListHeaderComponent: tmp24 };
  skuId2 = undefined;
  const EditCollectiblesPickerList = tmp(tmp2[29]).EditCollectiblesPickerList;
  if (selectedNameplate != null) {
    skuId2 = selectedNameplate.skuId;
  }
  tmp24 = null;
  if (!shouldPinCollectiblesEditPreview) {
    tmp24 = tmp14Result;
  }
  const obj9 = { children: items4 };
  items4[1] = closure_10(EditCollectiblesPickerList, obj8);
  return closure_11(closure_12, obj9);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function NameplateActionSheetPreview(previewSkuId) {
  let guildId;
  let items;
  let items1;
  let items3;
  let product;
  let purchase;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp17;
  let tmp18;
  let user;
  const obj = react2;
  const cResult = obj.c(38);
  ({ user, guildId } = previewSkuId);
  previewSkuId = previewSkuId.previewSkuId;
  const tmp4 = closure_13();
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
  let tmp9 = null;
  if (isNameplateRecord(first)) {
    tmp9 = first;
  }
  if (cResult[0] !== tmp9) {
    let formatToPlainStringResult;
    if (null != tmp9) {
      const intl2 = tmp(1125).intl;
      const obj2 = { a11y_text: tmp9.label };
      formatToPlainStringResult = intl2.formatToPlainString(tmp(1125).t.YJig7C, obj2);
    } else {
      const intl = tmp(1125).intl;
      formatToPlainStringResult = intl.string(tmp(1125).t.aqlsGS);
    }
    cResult[0] = tmp9;
    cResult[1] = formatToPlainStringResult;
    tmp10 = formatToPlainStringResult;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp15 = authStore(NameplateDummyUserPreview.NameplateDummyUserPreview, { width: 100 });
    const tmp16 = authStore(NameplateDummyUserPreview.NameplateDummyUserPreview, { width: 140 });
    cResult[2] = tmp15;
    cResult[3] = tmp16;
    tmp13 = tmp16;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const point = { x: 0, y: 0.1 };
    const point1 = { x: 0, y: 0.8 };
    cResult[4] = point;
    cResult[5] = point1;
    tmp18 = point1;
    tmp17 = point;
  } else {
    tmp17 = cResult[4];
    tmp18 = cResult[5];
  }
  const combined = "" + tmp4.nameplatePreviewGradient.color + "00";
  if (cResult[6] === tmp4.nameplatePreviewGradient.color) {
    let tmp20;
    if (cResult[7] === combined) {
      tmp20 = cResult[8];
    }
    if (cResult[9] === tmp4.nameplatePreviewGradient) {
      let tmp21;
      if (cResult[10] === tmp20) {
        tmp21 = cResult[11];
      }
      if (cResult[12] === tmp4.nameplateGradientContainer) {
        let tmp24;
        if (cResult[13] === tmp21) {
          tmp24 = cResult[14];
        }
        if (cResult[15] === guildId) {
          if (cResult[16] === tmp9) {
            let tmp28;
            let tmp32;
            let tmp31;
            let tmp37;
            let tmp36;
            if (cResult[17] === user) {
              tmp28 = cResult[18];
            }
            const _Symbol = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp34 = authStore(NameplateDummyUserPreview.NameplateDummyUserPreview, { width: 140 });
              const tmp35 = authStore(NameplateDummyUserPreview.NameplateDummyUserPreview, { width: 100 });
              cResult[19] = tmp34;
              cResult[20] = tmp35;
              tmp32 = tmp35;
              tmp31 = tmp34;
            } else {
              tmp31 = cResult[19];
              tmp32 = cResult[20];
            }
            const _Symbol2 = Symbol;
            if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
              const point2 = { x: 0, y: 0.2 };
              const point3 = { x: 0, y: 0.9 };
              cResult[21] = point2;
              cResult[22] = point3;
              tmp37 = point3;
              tmp36 = point2;
            } else {
              tmp36 = cResult[21];
              tmp37 = cResult[22];
            }
            const _HermesInternal = HermesInternal;
            const combined1 = "" + tmp4.nameplatePreviewGradient.color + "00";
            if (cResult[23] === tmp4.nameplatePreviewGradient.color) {
              let tmp39;
              if (cResult[24] === combined1) {
                tmp39 = cResult[25];
              }
              if (cResult[26] === tmp4.nameplatePreviewGradient) {
                let tmp40;
                if (cResult[27] === tmp39) {
                  tmp40 = cResult[28];
                }
                if (cResult[29] === tmp4.nameplateGradientContainer) {
                  let tmp43;
                  if (cResult[30] === tmp40) {
                    tmp43 = cResult[31];
                  }
                  if (cResult[32] === tmp4.nameplatePreviewContainer) {
                    if (cResult[33] === tmp24) {
                      if (cResult[34] === tmp28) {
                        if (cResult[35] === tmp43) {
                          let tmp47;
                          if (cResult[36] === tmp10) {
                            tmp47 = cResult[37];
                          }
                          return tmp47;
                        }
                      }
                    }
                  }
                  const obj3 = { style: tmp4.nameplatePreviewContainer, accessibilityLabel: tmp10, accessibilityRole: "image", accessible: true, children: items };
                  items = [tmp24, tmp28, tmp43];
                  const tmp50 = unpackModuleId(View, obj3);
                  cResult[32] = tmp4.nameplatePreviewContainer;
                  cResult[33] = tmp24;
                  cResult[34] = tmp28;
                  cResult[35] = tmp43;
                  cResult[36] = tmp10;
                  cResult[37] = tmp50;
                  tmp47 = tmp50;
                }
                const obj4 = { style: tmp4.nameplateGradientContainer, children: items1 };
                items1 = [tmp31, tmp32, tmp40];
                const tmp46 = unpackModuleId(View, obj4);
                cResult[29] = tmp4.nameplateGradientContainer;
                cResult[30] = tmp40;
                cResult[31] = tmp46;
                tmp43 = tmp46;
              }
              const obj5 = { style: tmp4.nameplatePreviewGradient, start: tmp36, end: tmp37, colors: tmp39 };
              const tmp42 = authStore(LinearGradientDefault, obj5);
              cResult[26] = tmp4.nameplatePreviewGradient;
              cResult[27] = tmp39;
              cResult[28] = tmp42;
              tmp40 = tmp42;
            }
            const items2 = [combined1, tmp4.nameplatePreviewGradient.color];
            cResult[23] = tmp4.nameplatePreviewGradient.color;
            cResult[24] = combined1;
            cResult[25] = items2;
            tmp39 = items2;
          }
        }
        const obj6 = { nameplate: tmp9, user, guildId, animate: true, "aria-hidden": true };
        const tmp30 = authStore(NameplatePreview.NameplatePreview, obj6);
        cResult[15] = guildId;
        cResult[16] = tmp9;
        cResult[17] = user;
        cResult[18] = tmp30;
        tmp28 = tmp30;
      }
      const obj7 = { style: tmp4.nameplateGradientContainer, children: items3 };
      items3 = [tmp12, tmp13, tmp21];
      const tmp27 = unpackModuleId(View, obj7);
      cResult[12] = tmp4.nameplateGradientContainer;
      cResult[13] = tmp21;
      cResult[14] = tmp27;
      tmp24 = tmp27;
    }
    const obj8 = { style: tmp4.nameplatePreviewGradient, start: tmp17, end: tmp18, colors: tmp20 };
    const tmp23 = authStore(LinearGradientDefault, obj8);
    cResult[9] = tmp4.nameplatePreviewGradient;
    cResult[10] = tmp20;
    cResult[11] = tmp23;
    tmp21 = tmp23;
  }
  const items4 = [tmp4.nameplatePreviewGradient.color, combined];
  cResult[6] = tmp4.nameplatePreviewGradient.color;
  cResult[7] = combined;
  cResult[8] = items4;
  tmp20 = items4;
}) : (function NameplateActionSheetPreview(arg0) {
  let _undefined;
  let formatToPlainStringResult;
  let guildId;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let previewSkuId;
  let tmp10;
  let user;
  let purchase;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = closure_13();
  let tmp3 = dependencyMap;
  const tmp4 = purchase(8699)(previewSkuId);
  const product = tmp4.product;
  _require = product;
  purchase = tmp4.purchase;
  const items = [purchase, product];
  const memo = react.useMemo(() => {
    let first;
    if (_undefined != null) {
      first = _undefined.items[0];
    }
    if (first == null) {
      let first1;
      if (purchase != null) {
        first1 = purchase.items[0];
      }
      first = first1;
    }
    let tmp3 = null;
    if (isNameplateRecord(first)) {
      tmp3 = first;
    }
    return tmp3;
  }, items);
  const obj = { style: tmp.nameplatePreviewContainer, accessibilityLabel: formatToPlainStringResult, accessibilityRole: "image", accessible: true, children: items3 };
  if (null != memo) {
    const intl2 = require("intl").intl;
    const obj2 = { a11y_text: memo.label };
    formatToPlainStringResult = intl2.formatToPlainString(require("intl").t.YJig7C, obj2);
    tmp10 = _require;
  } else {
    const intl = require("intl").intl;
    formatToPlainStringResult = intl.string(require("intl").t.aqlsGS);
    tmp10 = _require;
  }
  const obj3 = { style: tmp.nameplateGradientContainer, children: items1 };
  items1 = [closure_10(tmp10(9441).NameplateDummyUserPreview, { width: 100 }), closure_10(tmp10(9441).NameplateDummyUserPreview, { width: 140 }), ];
  const obj4 = { style: tmp.nameplatePreviewGradient, start: { x: 0, y: 0.1 }, end: { x: 0, y: 0.8 }, colors: items2 };
  items2 = [tmp.nameplatePreviewGradient.color, ];
  const tmp2Result = purchase(5294);
  items2[1] = "" + tmp.nameplatePreviewGradient.color + "00";
  items1[2] = closure_10(tmp2Result, obj4);
  items3 = [closure_11(View, obj3), closure_10(tmp10(11213).NameplatePreview, { nameplate: memo, user, guildId, animate: true, "aria-hidden": true }), ];
  const obj5 = { style: tmp.nameplateGradientContainer, children: items4 };
  items4 = [closure_10(tmp10(9441).NameplateDummyUserPreview, { width: 140 }), closure_10(tmp10(9441).NameplateDummyUserPreview, { width: 100 }), ];
  const obj6 = { style: tmp.nameplatePreviewGradient, start: { x: 0, y: 0.2 }, end: { x: 0, y: 0.9 }, colors: items5 };
  items5 = [, ];
  const tmp2Result2 = purchase(5294);
  items5[0] = "" + tmp.nameplatePreviewGradient.color + "00";
  items5[1] = tmp.nameplatePreviewGradient.color;
  items4[2] = closure_10(tmp2Result2, obj6);
  items3[2] = closure_11(View, obj5);
  return closure_11(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/EditNameplateActionSheet.tsx");

export default tmp3;
