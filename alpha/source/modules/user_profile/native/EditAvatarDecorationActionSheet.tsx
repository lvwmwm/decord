// Module ID: 8647
// Function ID: 8648
// Name: EditAvatarDecorationActionSheet
// Dependencies: [32, 19, 17, 7665, 7655, 4883, 1087, 21, 4971, 558, 576, 8648, 8658, 8659, 7253, 7278, 1267, 8660, 7248, 1128, 8661, 5265, 5037, 10490, 504, 14487, 14492, 8655, 14493, 14498, 14499, 8662, 8747, 1202, 14500, 2]

// Module 8647 (EditAvatarDecorationActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import native from "native" /* 1202 */;
import AvatarDecorationRecord from "AvatarDecorationRecord" /* 7655 */;
import useShopProductItems from "useShopProductItems" /* 8660 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 8662 */;
import HeaderAvatarDefault from "HeaderAvatar" /* 8747 */;
import EditAvatarDecorationSection from "EditAvatarDecorationSection" /* 14493 */;
import AvatarGridDefault from "AvatarGrid" /* 14500 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7665 */;
import GuildMemberStore from "GuildMemberStore" /* 4883 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require;

let c10;
let closure_12;
let unpackModuleId;
const View = react_native.View;
const isAvatarDecorationRecord = AvatarDecorationRecord.isAvatarDecorationRecord;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({ container: { flex: 1 }, avatarDisplayContainer: { flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", paddingVertical: 16 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditAvatarDecorationActionSheet(arg0) {
  let analyticsLocations;
  let currentAvatarDecoration;
  let guildId;
  let intl;
  let isTryItOut;
  let items1;
  let obj4;
  let pendingAvatar;
  let selectedAvatarDecoration;
  let setPendingAvatarDecoration;
  let tmp14;
  let user;
  let tmp = setPendingAvatarDecoration;
  let obj = setPendingAvatarDecoration(576);
  const cResult = obj.c(37);
  ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === guildId) {
      let tmp5;
      if (cResult[2] === isTryItOut) {
        tmp5 = cResult[3];
      }
      ({ pendingAvatar, setPendingAvatarDecoration } = selectedAvatarDecoration(8648)(tmp5));
      selectedAvatarDecoration(8648)(tmp5);
      if (cResult[4] === pendingAvatar) {
        let tmp8;
        let tmp15;
        let tmp19;
        if (cResult[5] === user.id) {
          tmp8 = cResult[6];
        }
        [selectedAvatarDecoration, tmp14] = react.useState(currentAvatarDecoration);
        const tmpResult = tmp(8659);
        const bottomSheetRef = tmpResult.useBottomSheetRef().bottomSheetRef;
        if (cResult[7] !== analyticsLocations) {
          let items = analyticsLocations;
          if (analyticsLocations == null) {
            items = [];
          }
          cResult[7] = analyticsLocations;
          cResult[8] = items;
          tmp15 = items;
        } else {
          tmp15 = cResult[8];
        }
        const tmp6Result = selectedAvatarDecoration(7253);
        const analyticsLocations2 = tmp6Result(tmp15, tmp6(7278).EDIT_AVATAR_DECORATION_SHEET).analyticsLocations;
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function x() {
            const obj = first(dependencyMap[16]);
            const obj2 = { type: first(dependencyMap[15]).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true };
            obj.track(constants.OPEN_POPOUT, obj2);
          };
          cResult[9] = fn;
          tmp19 = fn;
        } else {
          tmp19 = cResult[9];
        }
        if (cResult[10] === selectedAvatarDecoration) {
          let tmp20;
          let tmp21;
          if (cResult[11] === setPendingAvatarDecoration) {
            tmp20 = cResult[12];
          }
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            let obj2 = { title: intl.string(tmp(1128).t.HykynS) };
            const BottomSheetTitleHeader = tmp(7248).BottomSheetTitleHeader;
            intl = tmp(1128).intl;
            const tmp23 = closure_10(BottomSheetTitleHeader, obj2);
            cResult[13] = tmp23;
            tmp21 = tmp23;
          } else {
            tmp21 = cResult[13];
          }
          if (cResult[14] === guildId) {
            if (cResult[15] === isTryItOut) {
              if (cResult[16] === tmp8) {
                if (cResult[17] === selectedAvatarDecoration) {
                  let tmp24;
                  if (cResult[18] === user) {
                    tmp24 = cResult[19];
                  }
                  if (cResult[20] === tmp4.container) {
                    let tmp28;
                    if (cResult[21] === tmp24) {
                      tmp28 = cResult[22];
                    }
                    let skuId;
                    if (currentAvatarDecoration != null) {
                      skuId = currentAvatarDecoration.skuId;
                    }
                    let skuId1;
                    if (selectedAvatarDecoration != null) {
                      skuId1 = selectedAvatarDecoration.skuId;
                    }
                    if (cResult[23] === analyticsLocations2) {
                      if (cResult[24] === isTryItOut) {
                        if (cResult[25] === tmp20) {
                          if (cResult[26] === skuId1) {
                            if (cResult[27] === skuId) {
                              let tmp35;
                              if (cResult[28] === user) {
                                tmp35 = cResult[29];
                              }
                              if (cResult[30] === bottomSheetRef) {
                                if (cResult[31] === tmp35) {
                                  let tmp39;
                                  if (cResult[32] === tmp28) {
                                    tmp39 = cResult[33];
                                  }
                                  if (cResult[34] === analyticsLocations2) {
                                    let tmp42;
                                    if (cResult[35] === tmp39) {
                                      tmp42 = cResult[36];
                                    }
                                    return tmp42;
                                  }
                                  const obj3 = { children: closure_10(tmp(7253).AnalyticsLocationProvider, obj4) };
                                  const ThemeContextProvider = tmp(5037).ThemeContextProvider;
                                  obj4 = { value: analyticsLocations2, children: tmp39 };
                                  const tmp44 = closure_10(ThemeContextProvider, obj3);
                                  cResult[34] = analyticsLocations2;
                                  cResult[35] = tmp39;
                                  cResult[36] = tmp44;
                                  tmp42 = tmp44;
                                }
                              }
                              const obj5 = { scrollable: true, ref: bottomSheetRef, onExpand: tmp19, startExpanded: true, header: tmp21, children: items1 };
                              items1 = [tmp28, tmp35];
                              cResult[30] = bottomSheetRef;
                              cResult[31] = tmp35;
                              cResult[32] = tmp28;
                              const tmp41 = closure_11(tmp(5265).BottomSheet, obj5);
                              class H {
                                constructor(arg0) {
                                  const obj = useShopProductItems;
                                  let purchasedItem = obj.getPurchasedItem(arg0, "firstAvatarDecoration");
                                  const tmp = setPendingAvatarDecoration;
                                  if (purchasedItem == null) {
                                    purchasedItem = first;
                                  }
                                  if (purchasedItem == null) {
                                    purchasedItem = null;
                                  }
                                  tmp(purchasedItem);
                                }
                              }
                              tmp39 = tmp41;
                            }
                          }
                        }
                      }
                    }
                    const obj6 = { user, currentSkuId: skuId, selectedSkuId: skuId1, isTryItOut, onApply: tmp20, analyticsLocations: analyticsLocations2, analyticsSource: selectedAvatarDecoration(7278).EDIT_AVATAR_DECORATION_SHEET };
                    const tmp6Result2 = selectedAvatarDecoration(8661);
                    const tmp38 = closure_10(tmp6Result2, obj6);
                    class H {
                      constructor(arg0) {
                        const obj = useShopProductItems;
                        let purchasedItem = obj.getPurchasedItem(arg0, "firstAvatarDecoration");
                        const tmp = setPendingAvatarDecoration;
                        if (purchasedItem == null) {
                          purchasedItem = first;
                        }
                        if (purchasedItem == null) {
                          purchasedItem = null;
                        }
                        tmp(purchasedItem);
                      }
                    }
                    cResult[24] = isTryItOut;
                    cResult[25] = tmp20;
                    cResult[26] = skuId1;
                    cResult[27] = skuId;
                    cResult[28] = user;
                    cResult[29] = tmp38;
                    tmp35 = tmp38;
                  }
                  const obj7 = { style: tmp4.container, children: tmp24 };
                  const tmp31 = closure_10(View, obj7);
                  cResult[20] = tmp4.container;
                  cResult[21] = tmp24;
                  cResult[22] = tmp31;
                  tmp28 = tmp31;
                }
              }
            }
          }
          const obj8 = { user, guildId, pendingAvatarSrc: tmp8, selectedAvatarDecoration, setSelectedAvatarDecoration: tmp14, isTryItOut };
          const tmp27 = closure_10(closure_14, obj8);
          cResult[14] = guildId;
          cResult[15] = isTryItOut;
          class H {
            constructor(arg0) {
              const obj = useShopProductItems;
              let purchasedItem = obj.getPurchasedItem(arg0, "firstAvatarDecoration");
              const tmp = setPendingAvatarDecoration;
              if (purchasedItem == null) {
                purchasedItem = first;
              }
              if (purchasedItem == null) {
                purchasedItem = null;
              }
              tmp(purchasedItem);
            }
          }
          cResult[16] = tmp8;
          cResult[17] = selectedAvatarDecoration;
          cResult[18] = user;
          cResult[19] = tmp27;
          tmp24 = tmp27;
        }
        class H {
          constructor(arg0) {
            const obj = useShopProductItems;
            let purchasedItem = obj.getPurchasedItem(arg0, "firstAvatarDecoration");
            const tmp = setPendingAvatarDecoration;
            if (purchasedItem == null) {
              purchasedItem = first;
            }
            if (purchasedItem == null) {
              purchasedItem = null;
            }
            tmp(purchasedItem);
          }
        }
        cResult[10] = selectedAvatarDecoration;
        cResult[11] = setPendingAvatarDecoration;
        cResult[12] = H;
        tmp20 = H;
      }
      const obj9 = { userId: user.id, image: pendingAvatar };
      const tmpResult2 = tmp(8658);
      const pendingAvatarSrc = tmpResult2.getPendingAvatarSrc(obj9);
      cResult[4] = pendingAvatar;
      cResult[5] = user.id;
      cResult[6] = pendingAvatarSrc;
      tmp8 = pendingAvatarSrc;
    }
  }
  const obj10 = { analyticsLocations, isTryItOut, guildId };
  cResult[0] = analyticsLocations;
  cResult[1] = guildId;
  cResult[2] = isTryItOut;
  cResult[3] = obj10;
  tmp5 = obj10;
}) : (function EditAvatarDecorationActionSheet(arg0) {
  let BottomSheetTitleHeader;
  let analyticsLocations;
  let currentAvatarDecoration;
  let guildId;
  let intl;
  let isTryItOut;
  let items1;
  let obj6;
  let obj7;
  let selectedAvatarDecoration;
  let skuId;
  let skuId1;
  let tmp14;
  let tmp9;
  let user;
  ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
  selectedAvatarDecoration = undefined;
  let tmp = closure_13();
  const tmp4 = selectedAvatarDecoration(8648)({ analyticsLocations, isTryItOut, guildId });
  const setPendingAvatarDecoration = tmp4.setPendingAvatarDecoration;
  const pendingAvatar = tmp4.pendingAvatar;
  let obj = setPendingAvatarDecoration(8658);
  let obj2 = { userId: user.id, image: pendingAvatar };
  const pendingAvatarSrc = obj.getPendingAvatarSrc(obj2);
  [selectedAvatarDecoration, tmp9] = react.useState(currentAvatarDecoration);
  const obj4 = setPendingAvatarDecoration(8659);
  const bottomSheetRef = obj4.useBottomSheetRef().bottomSheetRef;
  const tmp10 = selectedAvatarDecoration(7253);
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  const analyticsLocations2 = tmp10(analyticsLocations, tmp2(7278).EDIT_AVATAR_DECORATION_SHEET).analyticsLocations;
  const items = [selectedAvatarDecoration, setPendingAvatarDecoration];
  const callback = obj3.useCallback(() => {
    const obj = first(dependencyMap[16]);
    const obj2 = { type: first(dependencyMap[15]).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true };
    obj.track(constants.OPEN_POPOUT, obj2);
  }, []);
  const callback1 = obj3.useCallback((arg0) => {
    const obj = useShopProductItems;
    let purchasedItem = obj.getPurchasedItem(arg0, "firstAvatarDecoration");
    const tmp = setPendingAvatarDecoration;
    if (purchasedItem == null) {
      purchasedItem = first;
    }
    if (purchasedItem == null) {
      purchasedItem = null;
    }
    tmp(purchasedItem);
  }, items);
  const ThemeContextProvider = tmp5(5037).ThemeContextProvider;
  const obj5 = { value: analyticsLocations2, children: tmp14(BottomSheet, obj6) };
  const AnalyticsLocationProvider = tmp5(7253).AnalyticsLocationProvider;
  obj6 = { scrollable: true, ref: bottomSheetRef, onExpand: callback, startExpanded: true, header: closure_10(BottomSheetTitleHeader, obj7), children: items1 };
  BottomSheet = tmp5(5265).BottomSheet;
  obj7 = { title: intl.string(setPendingAvatarDecoration(1128).t.HykynS) };
  BottomSheetTitleHeader = tmp5(7248).BottomSheetTitleHeader;
  intl = tmp5(1128).intl;
  items1 = [, ];
  const obj8 = { style: tmp.container, children: closure_10(closure_14, { user, guildId, pendingAvatarSrc, selectedAvatarDecoration, setSelectedAvatarDecoration: tmp9, isTryItOut }) };
  items1[0] = closure_10(View, obj8);
  const obj9 = { user, currentSkuId: skuId, selectedSkuId: skuId1, isTryItOut, onApply: callback1, analyticsLocations: analyticsLocations2, analyticsSource: selectedAvatarDecoration(7278).EDIT_AVATAR_DECORATION_SHEET };
  skuId = undefined;
  tmp14 = closure_11;
  const tmp2Result = selectedAvatarDecoration(8661);
  if (currentAvatarDecoration != null) {
    skuId = currentAvatarDecoration.skuId;
  }
  skuId1 = undefined;
  if (selectedAvatarDecoration != null) {
    skuId1 = selectedAvatarDecoration.skuId;
  }
  const obj10 = { children: closure_10(AnalyticsLocationProvider, obj5) };
  items1[1] = closure_10(tmp2Result, obj9);
  return closure_10(ThemeContextProvider, obj10);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditAvatarDecorationInner(guildId) {
  let isFetching;
  let items2;
  let items3;
  let pendingAvatarSrc;
  let selectedAvatarDecoration;
  let setSelectedAvatarDecoration;
  let tmp13;
  let tmp6;
  let tmp7;
  let user;
  const tmp = user;
  let obj = user(guildId[10]);
  const cResult = obj.c(37);
  ({ pendingAvatarSrc, user } = guildId);
  ({ selectedAvatarDecoration, setSelectedAvatarDecoration } = guildId);
  guildId = guildId.guildId;
  const isTryItOut = tmp4;
  const tmpResult = tmp(guildId[23]);
  const getOrFetchCollectiblesCategoriesAndPurchases = tmpResult.useGetOrFetchCollectiblesCategoriesAndPurchases();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesPurchaseStore];
    const fn = function o() {
      return isFetching.isFetching;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult5 = tmp(guildId[24]);
  const stateFromStores = tmpResult5.useStateFromStores(tmp6, tmp7);
  const tmp11 = setSelectedAvatarDecoration(guildId[25])();
  const tmpResult6 = tmp(guildId[26]);
  const shouldPinCollectiblesEditPreview = tmpResult6.useShouldPinCollectiblesEditPreview();
  const tmp10 = setSelectedAvatarDecoration;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildMemberStore];
    cResult[2] = items1;
    tmp13 = items1;
  } else {
    tmp13 = cResult[2];
  }
  if (cResult[3] === guildId) {
    let tmp15;
    if (cResult[4] === user) {
      tmp15 = cResult[5];
    }
    const tmpResult7 = tmp(guildId[24]);
    const stateFromStores1 = tmpResult7.useStateFromStores(tmp13, tmp15);
    let avatarDecoration;
    if (user != null) {
      avatarDecoration = user.avatarDecoration;
    }
    let avatarDecoration1;
    if (stateFromStores1 != null) {
      avatarDecoration1 = stateFromStores1.avatarDecoration;
    }
    if (cResult[6] === guildId) {
      if (cResult[7] === selectedAvatarDecoration) {
        if (cResult[8] === avatarDecoration) {
          if (cResult[11] === guildId) {
            if (cResult[12] === (undefined !== isTryItOut && isTryItOut)) {
              let tmp22;
              if (cResult[13] === setSelectedAvatarDecoration) {
                tmp22 = cResult[14];
              }
              class V {
                constructor(arg0) {
                  let items;
                  let selectedSkuId;
                  ({ items, size, selectedSkuId } = arg0);
                  const obj = { items, size, selectedSkuId, setSelectedAvatarDecoration, guildId, isTryItOut };
                  return authStore(EditAvatarDecorationSection.EditAvatarDecorationRow, obj);
                }
              }
              if (cResult[15] === guildId) {
                if (cResult[16] === pendingAvatarSrc) {
                  if (cResult[17] === undefined) {
                    let tmp24;
                    let tmp30;
                    let tmp29;
                    if (cResult[18] === user) {
                      tmp24 = cResult[19];
                    }
                    class V {
                      constructor(arg0) {
                        let items;
                        let selectedSkuId;
                        ({ items, size, selectedSkuId } = arg0);
                        const obj = { items, size, selectedSkuId, setSelectedAvatarDecoration, guildId, isTryItOut };
                        return authStore(EditAvatarDecorationSection.EditAvatarDecorationRow, obj);
                      }
                    }
                    const _Symbol = Symbol;
                    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                      const string = tmp(tmp2[19]).intl.string;
                      class V {
                        constructor(arg0) {
                          let items;
                          let selectedSkuId;
                          ({ items, size, selectedSkuId } = arg0);
                          const obj = { items, size, selectedSkuId, setSelectedAvatarDecoration, guildId, isTryItOut };
                          return authStore(EditAvatarDecorationSection.EditAvatarDecorationRow, obj);
                        }
                      }
                      const intl = tmp(tmp2[19]).intl;
                      const stringResult = intl.string(tmp(guildId[19]).t.e1UiOa);
                      cResult[20] = tmp31;
                      cResult[21] = stringResult;
                      tmp30 = stringResult;
                      tmp29 = tmp31;
                    } else {
                      tmp29 = cResult[20];
                      tmp30 = cResult[21];
                    }
                    if (cResult[22] === undefined) {
                      let tmp33;
                      if (cResult[23] === user) {
                        tmp33 = cResult[24];
                      }
                      if (cResult[25] === tmp24) {
                        let tmp36;
                        if (cResult[26] === tmp33) {
                          tmp36 = cResult[27];
                        }
                        class V {
                          constructor(arg0) {
                            let items;
                            let selectedSkuId;
                            ({ items, size, selectedSkuId } = arg0);
                            const obj = { items, size, selectedSkuId, setSelectedAvatarDecoration, guildId, isTryItOut };
                            return authStore(EditAvatarDecorationSection.EditAvatarDecorationRow, obj);
                          }
                        }
                        let skuId;
                        if (selectedAvatarDecoration != null) {
                          skuId = selectedAvatarDecoration.skuId;
                        }
                        let tmp41 = null;
                        if (!shouldPinCollectiblesEditPreview) {
                          tmp41 = tmp36;
                        }
                        if (cResult[28] === stateFromStores) {
                          if (cResult[29] === tmp22) {
                            if (cResult[30] === tmp11) {
                              if (cResult[31] === skuId) {
                                let tmp42;
                                if (cResult[32] === tmp41) {
                                  tmp42 = cResult[33];
                                }
                                if (cResult[34] === null) {
                                  let tmp45;
                                  if (cResult[35] === tmp42) {
                                    tmp45 = cResult[36];
                                  }
                                  return tmp45;
                                }
                                class V {
                                  constructor(arg0) {
                                    let items;
                                    let selectedSkuId;
                                    ({ items, size, selectedSkuId } = arg0);
                                    const obj = { items, size, selectedSkuId, setSelectedAvatarDecoration, guildId, isTryItOut };
                                    return authStore(EditAvatarDecorationSection.EditAvatarDecorationRow, obj);
                                  }
                                }
                                const obj2 = { children: items2 };
                                items2 = [null, tmp42];
                                const tmp47 = closure_11(closure_12, obj2);
                                cResult[34] = null;
                                cResult[35] = tmp42;
                                cResult[36] = tmp47;
                                tmp45 = tmp47;
                              }
                            }
                          }
                        }
                        const obj3 = { sections: tmp11, selectedSkuId: skuId, renderRow: tmp22, isFetching: stateFromStores, ListHeaderComponent: tmp41 };
                        const tmp44 = closure_10(tmp(guildId[30]).EditCollectiblesPickerList, obj3);
                        cResult[28] = stateFromStores;
                        cResult[29] = tmp22;
                        cResult[30] = tmp11;
                        cResult[31] = skuId;
                        cResult[32] = tmp41;
                        cResult[33] = tmp44;
                        tmp42 = tmp44;
                      }
                      class V {
                        constructor(arg0) {
                          let items;
                          let selectedSkuId;
                          ({ items, size, selectedSkuId } = arg0);
                          const obj = { items, size, selectedSkuId, setSelectedAvatarDecoration, guildId, isTryItOut };
                          return authStore(EditAvatarDecorationSection.EditAvatarDecorationRow, obj);
                        }
                      }
                      const obj4 = { children: items3 };
                      items3 = [tmp24, tmp33];
                      const tmp38 = closure_11(closure_12, obj4);
                      cResult[25] = tmp24;
                      cResult[26] = tmp33;
                      cResult[27] = tmp38;
                      tmp36 = tmp38;
                    }
                    const obj5 = { user, previewSkuId: undefined, nitroJoinCTA: tmp29, nitroUpgradeCTA: tmp30 };
                    const tmp35 = closure_10(tmp10(guildId[29]), obj5);
                    cResult[22] = undefined;
                    cResult[23] = user;
                    cResult[24] = tmp35;
                    tmp33 = tmp35;
                  }
                }
              }
              const obj6 = { previewSkuId: undefined, user, guildId, pendingAvatarSrc };
              const tmp27 = closure_10(closure_15, obj6);
              cResult[15] = guildId;
              cResult[16] = pendingAvatarSrc;
              cResult[17] = undefined;
              cResult[18] = user;
              cResult[19] = tmp27;
              tmp24 = tmp27;
            }
          }
          class V {
            constructor(arg0) {
              let items;
              let selectedSkuId;
              ({ items, size, selectedSkuId } = arg0);
              const obj = { items, size, selectedSkuId, setSelectedAvatarDecoration, guildId, isTryItOut };
              return authStore(EditAvatarDecorationSection.EditAvatarDecorationRow, obj);
            }
          }
          cResult[11] = guildId;
          cResult[12] = undefined !== isTryItOut && isTryItOut;
          cResult[13] = setSelectedAvatarDecoration;
          cResult[14] = V;
          tmp22 = V;
        }
      }
    }
    const obj7 = { pendingValue: selectedAvatarDecoration, userValue: avatarDecoration, guildValue: avatarDecoration1, guildId };
    const tmpResult8 = tmp(guildId[27]);
    const profilePreviewValue = tmpResult8.getProfilePreviewValue(obj7);
    cResult[6] = guildId;
    cResult[7] = selectedAvatarDecoration;
    cResult[8] = avatarDecoration;
    cResult[9] = avatarDecoration1;
    cResult[10] = profilePreviewValue;
  }
  class O {
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
  cResult[5] = O;
  tmp15 = O;
}) : (function EditAvatarDecorationInner(user) {
  let avatarDecoration;
  let avatarDecoration1;
  let intl;
  let intl2;
  let isFetching;
  let selectedAvatarDecoration;
  let setSelectedAvatarDecoration;
  let skuId1;
  let skuId2;
  let tmp24;
  user = user.user;
  ({ selectedAvatarDecoration, setSelectedAvatarDecoration } = user);
  const guildId = user.guildId;
  let flag = user.isTryItOut;
  const pendingAvatarSrc = user.pendingAvatarSrc;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = user;
  let obj = user(guildId[23]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  const items = [CollectiblesPurchaseStore];
  const obj2 = user(guildId[24]);
  const stateFromStores = obj2.useStateFromStores(items, () => isFetching.isFetching);
  const tmp6 = setSelectedAvatarDecoration(guildId[25])();
  const obj3 = user(guildId[26]);
  const shouldPinCollectiblesEditPreview = obj3.useShouldPinCollectiblesEditPreview();
  const items1 = [GuildMemberStore];
  const obj4 = user(guildId[24]);
  const stateFromStores1 = obj4.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  });
  const obj5 = { pendingValue: selectedAvatarDecoration, userValue: avatarDecoration, guildValue: avatarDecoration1, guildId };
  avatarDecoration = undefined;
  const getProfilePreviewValue = user(guildId[27]).getProfilePreviewValue;
  user(guildId[27]);
  const tmp5 = setSelectedAvatarDecoration;
  if (user != null) {
    avatarDecoration = user.avatarDecoration;
  }
  avatarDecoration1 = undefined;
  if (stateFromStores1 != null) {
    avatarDecoration1 = stateFromStores1.avatarDecoration;
  }
  const profilePreviewValue = getProfilePreviewValue(obj5);
  const items2 = [setSelectedAvatarDecoration, guildId, flag];
  let skuId;
  const callback = react.useCallback((arg0) => {
    let items;
    let selectedSkuId;
    ({ items, size, selectedSkuId } = arg0);
    const obj = { items, size, selectedSkuId, setSelectedAvatarDecoration, guildId, isTryItOut: flag };
    return authStore(EditAvatarDecorationSection.EditAvatarDecorationRow, obj);
  }, items2);
  const tmp17 = closure_15;
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_10(tmp17, { previewSkuId: skuId, user, guildId, pendingAvatarSrc }), ];
  const obj6 = { user, previewSkuId: skuId1, nitroJoinCTA: intl.string(tmp(guildId[19]).t.FyBDiY), nitroUpgradeCTA: intl2.string(tmp(guildId[19]).t.e1UiOa) };
  skuId1 = undefined;
  const tmp5Result = tmp5(guildId[29]);
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
  const EditCollectiblesPickerList = tmp(tmp2[30]).EditCollectiblesPickerList;
  if (selectedAvatarDecoration != null) {
    skuId2 = selectedAvatarDecoration.skuId;
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
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function AvatarDecorationSectionPreview(previewSkuId) {
  let guildId;
  let items;
  let pendingAvatarSrc;
  let product;
  let purchase;
  let tmp10;
  let user;
  const obj = react2;
  const cResult = obj.c(13);
  ({ user, guildId, pendingAvatarSrc } = previewSkuId);
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
  if (isAvatarDecorationRecord(first)) {
    tmp9 = first;
  }
  if (cResult[0] !== tmp9) {
    let formatToPlainStringResult;
    if (null != tmp9) {
      const intl2 = tmp(1128).intl;
      const obj2 = { a11y_text: tmp9.label };
      formatToPlainStringResult = intl2.formatToPlainString(tmp(1128).t.Do2lxE, obj2);
    } else {
      const intl = tmp(1128).intl;
      formatToPlainStringResult = intl.string(tmp(1128).t["7hRBmC"]);
    }
    cResult[0] = tmp9;
    cResult[1] = formatToPlainStringResult;
    tmp10 = formatToPlainStringResult;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === guildId) {
    if (cResult[3] === pendingAvatarSrc) {
      if (cResult[4] === tmp9) {
        let tmp12;
        let tmp13;
        if (cResult[5] === user) {
          tmp12 = cResult[6];
          tmp13 = cResult[7];
        }
        if (cResult[8] === tmp4.avatarDisplayContainer) {
          if (cResult[9] === tmp10) {
            if (cResult[10] === tmp12) {
              let tmp17;
              if (cResult[11] === tmp13) {
                tmp17 = cResult[12];
              }
              return tmp17;
            }
          }
        }
        const obj3 = { style: tmp4.avatarDisplayContainer, accessibilityLabel: tmp10, accessibilityRole: "image", accessible: true, children: items };
        items = [tmp12, tmp13];
        const tmp20 = unpackModuleId(View, obj3);
        cResult[8] = tmp4.avatarDisplayContainer;
        cResult[9] = tmp10;
        cResult[10] = tmp12;
        cResult[11] = tmp13;
        cResult[12] = tmp20;
        tmp17 = tmp20;
      }
    }
  }
  const obj4 = { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: tmp9, size: native.AvatarSizes.EDIT_AVATAR_DECORATION };
  const tmp5Result = HeaderAvatarDefault;
  const tmp15 = authStore(tmp5Result, obj4);
  const tmp16 = authStore(AvatarGridDefault, { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: tmp9 });
  cResult[2] = guildId;
  cResult[3] = pendingAvatarSrc;
  cResult[4] = tmp9;
  cResult[5] = user;
  cResult[6] = tmp15;
  cResult[7] = tmp16;
  tmp13 = tmp16;
  tmp12 = tmp15;
}) : (function AvatarDecorationSectionPreview(previewSkuId) {
  let _undefined;
  let formatToPlainStringResult;
  let guildId;
  let items1;
  let pendingAvatarSrc;
  let tmp10;
  let user;
  ({ user, guildId, pendingAvatarSrc } = previewSkuId);
  let purchase;
  previewSkuId = previewSkuId.previewSkuId;
  let tmp3 = dependencyMap;
  const tmp = closure_13();
  const tmp4 = purchase(8662)(previewSkuId);
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
    if (isAvatarDecorationRecord(first)) {
      tmp3 = first;
    }
    return tmp3;
  }, items);
  const obj = { style: tmp.avatarDisplayContainer, accessibilityLabel: formatToPlainStringResult, accessibilityRole: "image", accessible: true, children: items1 };
  const tmp6 = closure_11;
  const tmp7 = View;
  if (null != memo) {
    const intl2 = require("intl").intl;
    const obj2 = { a11y_text: memo.label };
    formatToPlainStringResult = intl2.formatToPlainString(require("intl").t.Do2lxE, obj2);
    tmp10 = _require;
  } else {
    const intl = require("intl").intl;
    formatToPlainStringResult = intl.string(require("intl").t["7hRBmC"]);
    tmp10 = _require;
  }
  const obj3 = { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo, size: tmp10(1202).AvatarSizes.EDIT_AVATAR_DECORATION };
  const tmp2Result = purchase(8747);
  items1 = [closure_10(tmp2Result, obj3), closure_10(purchase(14500), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo })];
  return tmp6(tmp7, obj);
});
const result = size.fileFinishedImporting("modules/user_profile/native/EditAvatarDecorationActionSheet.tsx");

export default tmp3;
