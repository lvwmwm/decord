// Module ID: 7840
// Function ID: 7841
// Name: EditAvatarDecorationActionSheet
// Dependencies: [32, 19, 17, 7081, 7071, 2112, 1085, 21, 4896, 587, 558, 576, 7841, 7851, 7852, 6664, 6688, 1252, 7853, 1126, 4892, 7854, 6652, 4595, 10478, 504, 13022, 7848, 13027, 13032, 13033, 7855, 7940, 1188, 13034, 2]

// Module 7840 (EditAvatarDecorationActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import AvatarDecorationRecord from "AvatarDecorationRecord" /* 7071 */;
import useShopProductItems from "useShopProductItems" /* 7853 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 7855 */;
import HeaderAvatarDefault from "HeaderAvatar" /* 7940 */;
import EditAvatarDecorationSection from "EditAvatarDecorationSection" /* 13027 */;
import AvatarGridDefault from "AvatarGrid" /* 13034 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7081 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require, previewSkuId;

let c10;
let closure_12;
let obj2;
let obj3;
let unpackModuleId;
const View = react_native.View;
const isAvatarDecorationRecord = AvatarDecorationRecord.isAvatarDecorationRecord;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, bounceOffset: { position: "absolute", top: -250, height: 250, right: 0, left: 0 }, title: obj3, avatarDisplayContainer: { flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", paddingVertical: 16 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let analyticsLocations;
  let currentAvatarDecoration;
  let guildId;
  let isTryItOut;
  let items1;
  let items2;
  let obj5;
  let pendingAvatar;
  let selectedAvatarDecoration;
  let setPendingAvatarDecoration;
  let tmp14;
  let user;
  let tmp = setPendingAvatarDecoration;
  let obj = setPendingAvatarDecoration(576);
  const cResult = obj.c(43);
  ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === guildId) {
      let tmp5;
      if (cResult[2] === isTryItOut) {
        tmp5 = cResult[3];
      }
      ({ pendingAvatar, setPendingAvatarDecoration } = selectedAvatarDecoration(7841)(tmp5));
      selectedAvatarDecoration(7841)(tmp5);
      if (cResult[4] === pendingAvatar) {
        let tmp8;
        let tmp15;
        let tmp19;
        if (cResult[5] === user.id) {
          tmp8 = cResult[6];
        }
        [selectedAvatarDecoration, tmp14] = react.useState(currentAvatarDecoration);
        const tmpResult = tmp(7852);
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
        const tmp6Result = selectedAvatarDecoration(6664);
        const analyticsLocations2 = tmp6Result(tmp15, tmp6(6688).EDIT_AVATAR_DECORATION_SHEET).analyticsLocations;
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function w() {
            const obj = first(dependencyMap[17]);
            const obj2 = { type: first(dependencyMap[16]).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true };
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
          let tmp25;
          let tmp27;
          if (cResult[11] === setPendingAvatarDecoration) {
            tmp20 = cResult[12];
          }
          const container = tmp4.container;
          if (cResult[13] !== tmp4.bounceOffset) {
            let obj2 = { style: tmp4.bounceOffset };
            const tmp24 = closure_10(View, obj2);
            cResult[13] = tmp4.bounceOffset;
            cResult[14] = tmp24;
            tmp21 = tmp24;
          } else {
            tmp21 = cResult[14];
          }
          const _Symbol2 = Symbol;
          const title = tmp4.title;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t.HykynS);
            cResult[15] = stringResult;
            tmp25 = stringResult;
          } else {
            tmp25 = cResult[15];
          }
          if (cResult[16] !== tmp4.title) {
            const obj3 = { variant: "redesign/heading-18/bold", style: title, accessibilityRole: "header", children: tmp25 };
            const tmp29 = closure_10(tmp(4892).Text, obj3);
            cResult[16] = tmp4.title;
            cResult[17] = tmp29;
            tmp27 = tmp29;
          } else {
            tmp27 = cResult[17];
          }
          if (cResult[18] === guildId) {
            if (cResult[19] === isTryItOut) {
              if (cResult[20] === tmp8) {
                if (cResult[21] === selectedAvatarDecoration) {
                  let tmp30;
                  if (cResult[22] === user) {
                    tmp30 = cResult[23];
                  }
                  if (cResult[24] === tmp4.container) {
                    if (cResult[25] === tmp27) {
                      if (cResult[26] === tmp30) {
                        let tmp34;
                        if (cResult[27] === tmp21) {
                          tmp34 = cResult[28];
                        }
                        let skuId;
                        if (currentAvatarDecoration != null) {
                          skuId = currentAvatarDecoration.skuId;
                        }
                        let skuId1;
                        if (selectedAvatarDecoration != null) {
                          skuId1 = selectedAvatarDecoration.skuId;
                        }
                        if (cResult[29] === analyticsLocations2) {
                          if (cResult[30] === isTryItOut) {
                            if (cResult[31] === tmp20) {
                              if (cResult[32] === skuId) {
                                if (cResult[33] === skuId1) {
                                  let tmp41;
                                  if (cResult[34] === user) {
                                    tmp41 = cResult[35];
                                  }
                                  if (cResult[36] === bottomSheetRef) {
                                    if (cResult[37] === tmp34) {
                                      if (cResult[40] === analyticsLocations2) {
                                        let tmp48;
                                        if (cResult[41] === tmp45) {
                                          tmp48 = cResult[42];
                                        }
                                        return tmp48;
                                      }
                                      const obj4 = { children: closure_10(tmp(6664).AnalyticsLocationProvider, obj5) };
                                      const ThemeContextProvider = tmp(4595).ThemeContextProvider;
                                      obj5 = { value: analyticsLocations2, children: tmp45 };
                                      const tmp50 = closure_10(ThemeContextProvider, obj4);
                                      cResult[40] = analyticsLocations2;
                                      cResult[41] = tmp45;
                                      cResult[42] = tmp50;
                                      tmp48 = tmp50;
                                    }
                                  }
                                  const obj6 = { scrollable: true, ref: bottomSheetRef, onExpand: tmp19, startExpanded: true, children: items1 };
                                  items1 = [tmp34, tmp41];
                                  cResult[36] = bottomSheetRef;
                                  cResult[37] = tmp34;
                                  cResult[38] = tmp41;
                                  cResult[39] = closure_11(tmp(6652).BottomSheet, obj6);
                                  closure_11(tmp(6652).BottomSheet, obj6);
                                  class N {
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
                                }
                              }
                            }
                          }
                        }
                        const obj7 = { user, currentSkuId: skuId, selectedSkuId: skuId1, isTryItOut, onApply: tmp20, analyticsLocations: analyticsLocations2, analyticsSource: selectedAvatarDecoration(6688).EDIT_AVATAR_DECORATION_SHEET };
                        const tmp6Result2 = selectedAvatarDecoration(7854);
                        const tmp44 = closure_10(tmp6Result2, obj7);
                        class N {
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
                        cResult[30] = isTryItOut;
                        cResult[31] = tmp20;
                        cResult[32] = skuId;
                        cResult[33] = skuId1;
                        cResult[34] = user;
                        cResult[35] = tmp44;
                        tmp41 = tmp44;
                      }
                    }
                  }
                  const obj8 = { style: container, children: items2 };
                  items2 = [tmp21, tmp27, tmp30];
                  const tmp37 = closure_11(View, obj8);
                  cResult[24] = tmp4.container;
                  cResult[25] = tmp27;
                  cResult[26] = tmp30;
                  class N {
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
                  cResult[28] = tmp37;
                  tmp34 = tmp37;
                }
              }
            }
          }
          const obj9 = { user, guildId, pendingAvatarSrc: tmp8, selectedAvatarDecoration, setSelectedAvatarDecoration: tmp14, isTryItOut };
          const tmp33 = closure_10(closure_14, obj9);
          class N {
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
          cResult[18] = guildId;
          cResult[19] = isTryItOut;
          cResult[20] = tmp8;
          cResult[21] = selectedAvatarDecoration;
          cResult[22] = user;
          cResult[23] = tmp33;
          tmp30 = tmp33;
        }
        class N {
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
        cResult[12] = N;
        tmp20 = N;
      }
      const obj10 = { userId: user.id, image: pendingAvatar };
      const tmpResult2 = tmp(7851);
      const pendingAvatarSrc = tmpResult2.getPendingAvatarSrc(obj10);
      cResult[4] = pendingAvatar;
      cResult[5] = user.id;
      cResult[6] = pendingAvatarSrc;
      tmp8 = pendingAvatarSrc;
    }
  }
  const obj11 = { analyticsLocations, isTryItOut, guildId };
  cResult[0] = analyticsLocations;
  cResult[1] = guildId;
  cResult[2] = isTryItOut;
  cResult[3] = obj11;
  tmp5 = obj11;
}) : ((arg0) => {
  let analyticsLocations;
  let currentAvatarDecoration;
  let guildId;
  let intl;
  let isTryItOut;
  let items1;
  let items2;
  let obj6;
  let selectedAvatarDecoration;
  let skuId;
  let skuId1;
  let tmp14;
  let tmp9;
  let user;
  ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
  selectedAvatarDecoration = undefined;
  let tmp = closure_13();
  const tmp4 = selectedAvatarDecoration(7841)({ analyticsLocations, isTryItOut, guildId });
  const setPendingAvatarDecoration = tmp4.setPendingAvatarDecoration;
  const pendingAvatar = tmp4.pendingAvatar;
  let obj = setPendingAvatarDecoration(7851);
  let obj2 = { userId: user.id, image: pendingAvatar };
  const pendingAvatarSrc = obj.getPendingAvatarSrc(obj2);
  [selectedAvatarDecoration, tmp9] = react.useState(currentAvatarDecoration);
  const obj4 = setPendingAvatarDecoration(7852);
  const bottomSheetRef = obj4.useBottomSheetRef().bottomSheetRef;
  const tmp10 = selectedAvatarDecoration(6664);
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  const analyticsLocations2 = tmp10(analyticsLocations, tmp2(6688).EDIT_AVATAR_DECORATION_SHEET).analyticsLocations;
  const items = [selectedAvatarDecoration, setPendingAvatarDecoration];
  const callback = obj3.useCallback(() => {
    const obj = first(dependencyMap[17]);
    const obj2 = { type: first(dependencyMap[16]).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true };
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
  const ThemeContextProvider = tmp5(4595).ThemeContextProvider;
  const obj5 = { value: analyticsLocations2, children: tmp14(BottomSheet, obj6) };
  const AnalyticsLocationProvider = tmp5(6664).AnalyticsLocationProvider;
  obj6 = { scrollable: true, ref: bottomSheetRef, onExpand: callback, startExpanded: true, children: items2 };
  const obj7 = { style: tmp.container, children: items1 };
  const obj8 = { style: tmp.bounceOffset };
  BottomSheet = tmp5(6652).BottomSheet;
  items1 = [closure_10(View, obj8), , ];
  const obj9 = { variant: "redesign/heading-18/bold", style: tmp.title, accessibilityRole: "header", children: intl.string(setPendingAvatarDecoration(1126).t.HykynS) };
  const Text = tmp5(4892).Text;
  intl = tmp5(1126).intl;
  items1[1] = closure_10(Text, obj9);
  items1[2] = closure_10(closure_14, { user, guildId, pendingAvatarSrc, selectedAvatarDecoration, setSelectedAvatarDecoration: tmp9, isTryItOut });
  items2 = [closure_11(View, obj7), ];
  const obj10 = { user, currentSkuId: skuId, selectedSkuId: skuId1, isTryItOut, onApply: callback1, analyticsLocations: analyticsLocations2, analyticsSource: selectedAvatarDecoration(6688).EDIT_AVATAR_DECORATION_SHEET };
  skuId = undefined;
  tmp14 = closure_11;
  const tmp2Result = selectedAvatarDecoration(7854);
  if (currentAvatarDecoration != null) {
    skuId = currentAvatarDecoration.skuId;
  }
  skuId1 = undefined;
  if (selectedAvatarDecoration != null) {
    skuId1 = selectedAvatarDecoration.skuId;
  }
  const obj11 = { children: closure_10(AnalyticsLocationProvider, obj5) };
  items2[1] = closure_10(tmp2Result, obj10);
  return closure_10(ThemeContextProvider, obj11);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let isFetching;
  let items2;
  let pendingAvatarSrc;
  let selectedAvatarDecoration;
  let setSelectedAvatarDecoration;
  let tmp12;
  let tmp6;
  let tmp7;
  let user;
  const tmp = user;
  let obj = user(guildId[11]);
  const cResult = obj.c(34);
  ({ pendingAvatarSrc, user } = guildId);
  ({ selectedAvatarDecoration, setSelectedAvatarDecoration } = guildId);
  guildId = guildId.guildId;
  const isTryItOut = tmp4;
  const tmpResult = tmp(guildId[24]);
  const getOrFetchCollectiblesCategoriesAndPurchases = tmpResult.useGetOrFetchCollectiblesCategoriesAndPurchases();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesPurchaseStore];
    const fn = function s() {
      return isFetching.isFetching;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult4 = tmp(guildId[25]);
  const stateFromStores = tmpResult4.useStateFromStores(tmp6, tmp7);
  const tmp11 = setSelectedAvatarDecoration(guildId[26])();
  const tmp10 = setSelectedAvatarDecoration;
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
    const tmpResult5 = tmp(guildId[25]);
    const stateFromStores1 = tmpResult5.useStateFromStores(tmp12, tmp14);
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
              let tmp21;
              if (cResult[13] === setSelectedAvatarDecoration) {
                tmp21 = cResult[14];
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
                    let tmp23;
                    let tmp29;
                    let tmp28;
                    if (cResult[18] === user) {
                      tmp23 = cResult[19];
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
                      cResult[20] = tmp30;
                      cResult[21] = stringResult;
                      tmp29 = stringResult;
                      tmp28 = tmp30;
                    } else {
                      tmp28 = cResult[20];
                      tmp29 = cResult[21];
                    }
                    if (cResult[22] === undefined) {
                      let tmp32;
                      if (cResult[23] === user) {
                        tmp32 = cResult[24];
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
                      if (cResult[25] === stateFromStores) {
                        if (cResult[26] === tmp21) {
                          if (cResult[27] === tmp11) {
                            let tmp36;
                            if (cResult[28] === undefined) {
                              tmp36 = cResult[29];
                            }
                            if (cResult[30] === tmp23) {
                              if (cResult[31] === tmp32) {
                                let tmp39;
                                if (cResult[32] === tmp36) {
                                  tmp39 = cResult[33];
                                }
                                return tmp39;
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
                            const obj2 = { children: items2 };
                            items2 = [tmp23, tmp32, tmp36];
                            const tmp41 = closure_11(closure_12, obj2);
                            cResult[30] = tmp23;
                            cResult[31] = tmp32;
                            cResult[32] = tmp36;
                            cResult[33] = tmp41;
                            tmp39 = tmp41;
                          }
                        }
                      }
                      const obj3 = { sections: tmp11, selectedSkuId: undefined, renderRow: tmp21, isFetching: stateFromStores };
                      const tmp38 = closure_10(tmp(guildId[30]).EditCollectiblesPickerList, obj3);
                      cResult[25] = stateFromStores;
                      cResult[26] = tmp21;
                      cResult[27] = tmp11;
                      cResult[28] = undefined;
                      cResult[29] = tmp38;
                      tmp36 = tmp38;
                    }
                    const obj4 = { user, previewSkuId: undefined, nitroJoinCTA: tmp28, nitroUpgradeCTA: tmp29 };
                    const tmp34 = closure_10(tmp10(guildId[29]), obj4);
                    cResult[22] = undefined;
                    cResult[23] = user;
                    cResult[24] = tmp34;
                    tmp32 = tmp34;
                  }
                }
              }
              const obj5 = { previewSkuId: undefined, user, guildId, pendingAvatarSrc };
              const tmp26 = closure_10(closure_15, obj5);
              cResult[15] = guildId;
              cResult[16] = pendingAvatarSrc;
              cResult[17] = undefined;
              cResult[18] = user;
              cResult[19] = tmp26;
              tmp23 = tmp26;
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
          tmp21 = V;
        }
      }
    }
    const obj6 = { pendingValue: selectedAvatarDecoration, userValue: avatarDecoration, guildValue: avatarDecoration1, guildId };
    const tmpResult6 = tmp(guildId[27]);
    const profilePreviewValue = tmpResult6.getProfilePreviewValue(obj6);
    cResult[6] = guildId;
    cResult[7] = selectedAvatarDecoration;
    cResult[8] = avatarDecoration;
    cResult[9] = avatarDecoration1;
    cResult[10] = profilePreviewValue;
  }
  const fn2 = function _() {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  };
  cResult[3] = guildId;
  cResult[4] = user;
  cResult[5] = fn2;
  tmp14 = fn2;
}) : ((user) => {
  let avatarDecoration;
  let avatarDecoration1;
  let intl;
  let intl2;
  let isFetching;
  let selectedAvatarDecoration;
  let setSelectedAvatarDecoration;
  let skuId1;
  let skuId2;
  user = user.user;
  ({ selectedAvatarDecoration, setSelectedAvatarDecoration } = user);
  const guildId = user.guildId;
  let flag = user.isTryItOut;
  const pendingAvatarSrc = user.pendingAvatarSrc;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = user;
  let obj = user(guildId[24]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  const items = [CollectiblesPurchaseStore];
  const obj2 = user(guildId[25]);
  const stateFromStores = obj2.useStateFromStores(items, () => isFetching.isFetching);
  const items1 = [GuildMemberStore];
  const tmp6 = setSelectedAvatarDecoration(guildId[26])();
  const obj3 = user(guildId[25]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  });
  const obj4 = { pendingValue: selectedAvatarDecoration, userValue: avatarDecoration, guildValue: avatarDecoration1, guildId };
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
  const profilePreviewValue = getProfilePreviewValue(obj4);
  const items2 = [setSelectedAvatarDecoration, guildId, flag];
  let skuId;
  const callback = react.useCallback((arg0) => {
    let items;
    let selectedSkuId;
    ({ items, size, selectedSkuId } = arg0);
    const obj = { items, size, selectedSkuId, setSelectedAvatarDecoration, guildId, isTryItOut: flag };
    return authStore(EditAvatarDecorationSection.EditAvatarDecorationRow, obj);
  }, items2);
  const tmp13 = closure_11;
  const tmp14 = closure_12;
  const tmp16 = closure_15;
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_10(tmp16, { previewSkuId: skuId, user, guildId, pendingAvatarSrc }), , ];
  const obj5 = { user, previewSkuId: skuId1, nitroJoinCTA: intl.string(tmp(guildId[19]).t.FyBDiY), nitroUpgradeCTA: intl2.string(tmp(guildId[19]).t.e1UiOa) };
  skuId1 = undefined;
  const tmp5Result = tmp5(guildId[29]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  intl = tmp(tmp2[19]).intl;
  intl2 = tmp(tmp2[19]).intl;
  items3[1] = closure_10(tmp5Result, obj5);
  const obj6 = { sections: tmp6, selectedSkuId: skuId2, renderRow: callback, isFetching: stateFromStores };
  skuId2 = undefined;
  const EditCollectiblesPickerList = tmp(tmp2[30]).EditCollectiblesPickerList;
  if (selectedAvatarDecoration != null) {
    skuId2 = selectedAvatarDecoration.skuId;
  }
  const obj7 = { children: items3 };
  items3[2] = closure_10(EditCollectiblesPickerList, obj6);
  return tmp13(tmp14, obj7);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((previewSkuId) => {
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
      const intl2 = tmp(1126).intl;
      const obj2 = { a11y_text: tmp9.label };
      formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t.Do2lxE, obj2);
    } else {
      const intl = tmp(1126).intl;
      formatToPlainStringResult = intl.string(tmp(1126).t["7hRBmC"]);
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
}) : ((previewSkuId) => {
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
  const tmp4 = purchase(7855)(previewSkuId);
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
  const obj3 = { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo, size: tmp10(1188).AvatarSizes.EDIT_AVATAR_DECORATION };
  const tmp2Result = purchase(7940);
  items1 = [closure_10(tmp2Result, obj3), closure_10(purchase(13034), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo })];
  return tmp6(tmp7, obj);
});
const result = size.fileFinishedImporting("modules/user_profile/native/EditAvatarDecorationActionSheet.tsx");

export default tmp4;
