// Module ID: 13891
// Function ID: 13892
// Name: GiftBadgePostPurchase
// Dependencies: [19, 17, 8681, 13892, 4820, 21, 4971, 587, 558, 576, 1633, 6672, 5151, 12881, 1128, 2632, 5244, 13893, 5234, 10502, 5212, 5213, 10505, 13894, 5001, 4807, 8673, 504, 2]

// Module 13891 (GiftBadgePostPurchase)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import _modDef2632 from "module_2632" /* 2632 */;
import dismissible_content from "dismissible_content" /* 4807 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4820 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5001 */;
import HapticUtils from "HapticUtils" /* 5212 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5213 */;
import Text_Text from "Text/Text" /* 5234 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import BadgeId from "BadgeId" /* 8673 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10502 */;
import GiftingBadgeLevelUpProgressDefault from "GiftingBadgeLevelUpProgress" /* 13894 */;
import react from "react" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8681 */;
import GiftingBadgeConstants from "GiftingBadgeConstants" /* 13892 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let badgeById;

let c10;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp4;
let unpackModuleId;
const GiftingBadgeProgressDefault = tmp4(13893);
const View = react_native.View;
({ getRemainingGiftsToNextTier: metroRequire, getTierForProgress: metroImportDefault, getNextTierForProgress: metroImportAll } = GiftingBadgeConstants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles((arg0) => {
  const obj = { screenContainer: { flex: 1 }, content: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 }, progressWrapper: { padding: nativeDefault.space.PX_16, width: "100%", marginBottom: nativeDefault.space.PX_24 }, messageSection: { gap: nativeDefault.space.PX_12, alignItems: "center", width: "100%", paddingHorizontal: nativeDefault.space.PX_16 }, centerText: { textAlign: "center" }, levelUpIconWrapper: { paddingVertical: 26, paddingHorizontal: 74, marginBottom: nativeDefault.space.PX_48 }, levelUpBody: { gap: nativeDefault.space.PX_12, alignItems: "center", width: "100%" }, levelUpProgress: { maxWidth: 260 }, footer: { width: "100%", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 } };
  ({ flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 });
  ({ padding: nativeDefault.space.PX_16, width: "100%", marginBottom: nativeDefault.space.PX_24 });
  ({ gap: nativeDefault.space.PX_12, alignItems: "center", width: "100%", paddingHorizontal: nativeDefault.space.PX_16 });
  ({ paddingVertical: 26, paddingHorizontal: 74, marginBottom: nativeDefault.space.PX_48 });
  ({ gap: nativeDefault.space.PX_12, alignItems: "center", width: "100%" });
  ({ width: "100%", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function PostPurchaseFooter(onSendGift) {
  let intl2;
  let items;
  let tmp14;
  let tmp16;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let obj = onSendGift(576);
  const cResult = obj.c(11);
  onSendGift = onSendGift.onSendGift;
  const tmp5 = closure_12(useSafeAreaInsetsDefault().bottom);
  if (cResult[0] !== onSendGift) {
    const fn = function o() {
      const arr = ModalActionCreatorsDefault;
      arr.pop();
      onSendGift();
    };
    cResult[0] = onSendGift;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
        const obj = onSendGift(dependencyMap[12]);
        const rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.navigate("you");
        }
      }
    }
    cResult[2] = T;
    tmp7 = T;
  } else {
    class T {
      constructor() {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
        const obj = onSendGift(dependencyMap[12]);
        const rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.navigate("you");
        }
      }
    }
  }
  const footer = tmp5.footer;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
        const obj = onSendGift(dependencyMap[12]);
        const rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.navigate("you");
        }
      }
    }
    const obj2 = { size: "sm", color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
    const GiftIcon = tmp(12881).GiftIcon;
    const tmp10 = closure_10(GiftIcon, obj2);
    const intl = tmp(1128).intl;
    const stringResult = intl.string(_modDef2632.g86YiI);
    cResult[3] = tmp10;
    cResult[4] = stringResult;
    tmp9 = stringResult;
    tmp8 = tmp10;
  } else {
    class T {
      constructor() {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
        const obj = onSendGift(dependencyMap[12]);
        const rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.navigate("you");
        }
      }
    }
    tmp9 = cResult[4];
  }
  if (cResult[5] !== tmp6) {
    class T {
      constructor() {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
        const obj = onSendGift(dependencyMap[12]);
        const rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.navigate("you");
        }
      }
    }
    const obj3 = { grow: true, variant: "primary", icon: tmp8, text: tmp9, onPress: tmp6 };
    cResult[5] = tmp6;
    cResult[6] = closure_10(onSendGift(5244).Button, obj3);
    const tmp13 = closure_10(onSendGift(5244).Button, obj3);
  } else {
    class T {
      constructor() {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
        const obj = onSendGift(dependencyMap[12]);
        const rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.navigate("you");
        }
      }
    }
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
        const obj = onSendGift(dependencyMap[12]);
        const rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.navigate("you");
        }
      }
    }
    const obj4 = { grow: true, variant: "secondary", text: intl2.string(_modDef2632["sa/cfM"]), onPress: tmp7 };
    const Button = tmp(5244).Button;
    intl2 = tmp(1128).intl;
    const tmp15 = closure_10(Button, obj4);
    cResult[7] = tmp15;
    tmp14 = tmp15;
  } else {
    class T {
      constructor() {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
        const obj = onSendGift(dependencyMap[12]);
        const rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.navigate("you");
        }
      }
    }
  }
  if (cResult[8] === tmp5.footer) {
    class T {
      constructor() {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
        const obj = onSendGift(dependencyMap[12]);
        const rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.navigate("you");
        }
      }
    }
    return tmp16;
  }
  const obj5 = { style: footer, children: items };
  items = [tmp12, tmp14];
  tmp16 = closure_11(View, obj5);
  cResult[8] = tmp5.footer;
  cResult[9] = tmp12;
  cResult[10] = tmp16;
}) : (function PostPurchaseFooter(onSendGift) {
  let GiftIcon;
  let intl;
  let intl2;
  let items1;
  let obj3;
  onSendGift = onSendGift.onSendGift;
  const items = [onSendGift];
  const tmp = closure_12(useSafeAreaInsetsDefault().bottom);
  const callback = react.useCallback(() => {
    const arr = ModalActionCreatorsDefault;
    arr.pop();
    onSendGift();
  }, items);
  let obj = { style: tmp.footer, children: items1 };
  const callback1 = react.useCallback(() => {
    const arr = ModalActionCreatorsDefault;
    arr.pop();
    const obj = onSendGift(dependencyMap[12]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("you");
    }
  }, []);
  const obj2 = { grow: true, variant: "primary", icon: closure_10(GiftIcon, obj3), text: intl.string(_modDef2632.g86YiI), onPress: callback };
  const Button = onSendGift(5244).Button;
  obj3 = { size: "sm", color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
  GiftIcon = onSendGift(12881).GiftIcon;
  intl = onSendGift(1128).intl;
  items1 = [closure_10(Button, obj2), ];
  const obj4 = { grow: true, variant: "secondary", text: intl2.string(_modDef2632["sa/cfM"]), onPress: callback1 };
  const Button2 = onSendGift(5244).Button;
  intl2 = onSendGift(1128).intl;
  items1[1] = closure_10(Button2, obj4);
  return closure_11(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function InProgressScreen(arg0) {
  let currentTier;
  let description;
  let items;
  let items1;
  let items2;
  let nextTier;
  let onSendGift;
  let progress;
  let progressBarTitle;
  let title;
  const obj = react2;
  const cResult = obj.c(28);
  ({ progress, title, progressBarTitle, description, currentTier, nextTier, onSendGift } = arg0);
  const tmp5 = closure_12(useSafeAreaInsetsDefault().bottom);
  if (cResult[0] === currentTier) {
    if (cResult[1] === nextTier) {
      if (cResult[2] === progress) {
        let tmp6;
        if (cResult[3] === progressBarTitle) {
          tmp6 = cResult[4];
        }
        if (cResult[5] === tmp5.progressWrapper) {
          let tmp8;
          if (cResult[6] === tmp6) {
            tmp8 = cResult[7];
          }
          if (cResult[8] === tmp5.centerText) {
            let tmp12;
            if (cResult[9] === title) {
              tmp12 = cResult[10];
            }
            if (cResult[11] === description) {
              let tmp15;
              if (cResult[12] === tmp5.centerText) {
                tmp15 = cResult[13];
              }
              if (cResult[14] === tmp5.messageSection) {
                if (cResult[15] === tmp12) {
                  let tmp18;
                  if (cResult[16] === tmp15) {
                    tmp18 = cResult[17];
                  }
                  if (cResult[18] === tmp5.content) {
                    if (cResult[19] === tmp8) {
                      let tmp22;
                      let tmp26;
                      if (cResult[20] === tmp18) {
                        tmp22 = cResult[21];
                      }
                      if (cResult[22] !== onSendGift) {
                        const obj2 = { onSendGift };
                        const tmp29 = authStore(closure_13, obj2);
                        cResult[22] = onSendGift;
                        cResult[23] = tmp29;
                        tmp26 = tmp29;
                      } else {
                        tmp26 = cResult[23];
                      }
                      if (cResult[24] === tmp5.screenContainer) {
                        if (cResult[25] === tmp22) {
                          let tmp30;
                          if (cResult[26] === tmp26) {
                            tmp30 = cResult[27];
                          }
                          return tmp30;
                        }
                      }
                      const obj3 = { style: tmp5.screenContainer, children: items };
                      items = [tmp22, tmp26];
                      const tmp33 = unpackModuleId(View, obj3);
                      cResult[24] = tmp5.screenContainer;
                      cResult[25] = tmp22;
                      cResult[26] = tmp26;
                      cResult[27] = tmp33;
                      tmp30 = tmp33;
                    }
                  }
                  const obj4 = { style: tmp5.content, children: items1 };
                  items1 = [tmp8, tmp18];
                  const tmp25 = unpackModuleId(View, obj4);
                  cResult[18] = tmp5.content;
                  cResult[19] = tmp8;
                  cResult[20] = tmp18;
                  cResult[21] = tmp25;
                  tmp22 = tmp25;
                }
              }
              const obj5 = { style: tmp5.messageSection, children: items2 };
              items2 = [tmp12, tmp15];
              const tmp21 = unpackModuleId(View, obj5);
              cResult[14] = tmp5.messageSection;
              cResult[15] = tmp12;
              cResult[16] = tmp15;
              cResult[17] = tmp21;
              tmp18 = tmp21;
            }
            const obj6 = { variant: "text-md/medium", color: "text-subtle", style: tmp5.centerText, children: description };
            const tmp17 = authStore(Text_Text.Text, obj6);
            cResult[11] = description;
            cResult[12] = tmp5.centerText;
            cResult[13] = tmp17;
            tmp15 = tmp17;
          }
          const obj7 = { variant: "heading-xxl/bold", style: tmp5.centerText, children: title };
          const tmp14 = authStore(Text_Text.Text, obj7);
          cResult[8] = tmp5.centerText;
          cResult[9] = title;
          cResult[10] = tmp14;
          tmp12 = tmp14;
        }
        const obj8 = { style: tmp5.progressWrapper, children: tmp6 };
        const tmp11 = authStore(View, obj8);
        cResult[5] = tmp5.progressWrapper;
        cResult[6] = tmp6;
        cResult[7] = tmp11;
        tmp8 = tmp11;
      }
    }
  }
  const tmp7 = authStore(GiftingBadgeProgressDefault, { progress, currentTier, nextTier, iconSize: 48, title: progressBarTitle });
  cResult[0] = currentTier;
  cResult[1] = nextTier;
  cResult[2] = progress;
  cResult[3] = progressBarTitle;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : (function InProgressScreen(arg0) {
  let currentTier;
  let description;
  let items;
  let items1;
  let items2;
  let nextTier;
  let onSendGift;
  let progress;
  let progressBarTitle;
  let title;
  ({ progress, title, progressBarTitle, description, currentTier, nextTier, onSendGift } = arg0);
  const tmp = closure_12(useSafeAreaInsetsDefault().bottom);
  const obj2 = { style: tmp.content, children: items };
  items = [, ];
  const obj = { style: tmp.screenContainer, children: items2 };
  const obj3 = { style: tmp.progressWrapper, children: authStore(GiftingBadgeProgressDefault, { progress, currentTier, nextTier, iconSize: 48, title: progressBarTitle }) };
  items[0] = authStore(View, obj3);
  const obj4 = { style: tmp.messageSection, children: items1 };
  items1 = [, ];
  const obj5 = { variant: "heading-xxl/bold", style: tmp.centerText, children: title };
  items1[0] = authStore(Text_Text.Text, obj5);
  const obj6 = { variant: "text-md/medium", color: "text-subtle", style: tmp.centerText, children: description };
  items1[1] = authStore(Text_Text.Text, obj6);
  items[1] = unpackModuleId(View, obj4);
  items2 = [unpackModuleId(View, obj2), authStore(closure_13, { onSendGift })];
  return unpackModuleId(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function LevelUpScreen(arg0) {
  let centerText;
  let content;
  let currentTier;
  let format2;
  let giftsToNextTier;
  let items1;
  let items2;
  let items3;
  let items4;
  let messageSection;
  let newTier;
  let nextTier;
  let obj10;
  let onSendGift;
  let screenContainer;
  let simulatedProgress;
  let str2;
  let tmp12;
  let tmp6;
  let tmp8;
  let tmp9;
  let v6QVlxw;
  let obj = react2;
  const cResult = obj.c(42);
  ({ simulatedProgress, currentTier, newTier, nextTier, giftsToNextTier, onSendGift } = arg0);
  const tmp5 = closure_12(useSafeAreaInsetsDefault().bottom);
  if (cResult[0] !== newTier) {
    const tmpResult = GiftingBadgesUtils;
    const giftingBadgeTierIconUrl = tmpResult.getGiftingBadgeTierIconUrl(newTier);
    cResult[0] = newTier;
    cResult[1] = giftingBadgeTierIconUrl;
    tmp6 = giftingBadgeTierIconUrl;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function b() {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_HEAVY);
    };
    const items = [];
    cResult[2] = fn;
    cResult[3] = items;
    tmp9 = items;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const effect = react.useEffect(tmp8, tmp9);
  ({ screenContainer, content } = tmp5);
  if (cResult[4] !== tmp6) {
    let tmp13 = null != tmp6;
    if (tmp13) {
      const obj2 = { icon: tmp6, size: 140 };
      tmp13 = authStore(tmp4(10505), obj2);
    }
    cResult[4] = tmp6;
    cResult[5] = tmp13;
    tmp12 = tmp13;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === tmp5.levelUpIconWrapper) {
    let tmp15;
    if (cResult[7] === tmp12) {
      tmp15 = cResult[8];
    }
    if (cResult[9] === currentTier) {
      if (cResult[10] === newTier) {
        if (cResult[11] === simulatedProgress) {
          let tmp18;
          let tmp21;
          if (cResult[12] === tmp5.levelUpProgress) {
            tmp18 = cResult[13];
          }
          ({ messageSection, centerText } = tmp5);
          if (cResult[14] !== newTier.name) {
            const intl = tmp(1128).intl;
            const format = intl.format;
            let str = newTier.name;
            const k8MmO8 = tmp4(2632).k8MmO8;
            if (str == null) {
              str = "";
            }
            const obj3 = { tierName: str };
            const formatResult = format(k8MmO8, obj3);
            cResult[14] = newTier.name;
            cResult[15] = formatResult;
            tmp21 = formatResult;
          } else {
            tmp21 = cResult[15];
          }
          if (cResult[16] === tmp5.centerText) {
            let tmp23;
            if (cResult[17] === tmp21) {
              tmp23 = cResult[18];
            }
            if (cResult[19] === giftsToNextTier) {
              if (cResult[20] === nextTier) {
                if (cResult[21] === (null != nextTier && null != giftsToNextTier && giftsToNextTier > 0)) {
                  let tmp26;
                  if (cResult[22] === tmp5.centerText) {
                    tmp26 = cResult[23];
                  }
                  if (cResult[24] === tmp5.messageSection) {
                    if (cResult[25] === tmp23) {
                      let tmp30;
                      if (cResult[26] === tmp26) {
                        tmp30 = cResult[27];
                      }
                      if (cResult[28] === tmp5.levelUpBody) {
                        if (cResult[29] === tmp30) {
                          let tmp34;
                          if (cResult[30] === tmp18) {
                            tmp34 = cResult[31];
                          }
                          if (cResult[32] === tmp5.content) {
                            if (cResult[33] === tmp34) {
                              let tmp38;
                              let tmp42;
                              if (cResult[34] === tmp15) {
                                tmp38 = cResult[35];
                              }
                              if (cResult[36] !== onSendGift) {
                                const obj4 = { onSendGift };
                                const tmp45 = authStore(closure_13, obj4);
                                cResult[36] = onSendGift;
                                cResult[37] = tmp45;
                                tmp42 = tmp45;
                              } else {
                                tmp42 = cResult[37];
                              }
                              if (cResult[38] === tmp5.screenContainer) {
                                if (cResult[39] === tmp38) {
                                  let tmp46;
                                  if (cResult[40] === tmp42) {
                                    tmp46 = cResult[41];
                                  }
                                  return tmp46;
                                }
                              }
                              const obj5 = { style: screenContainer, children: items1 };
                              items1 = [tmp38, tmp42];
                              const tmp49 = unpackModuleId(View, obj5);
                              cResult[38] = tmp5.screenContainer;
                              cResult[39] = tmp38;
                              cResult[40] = tmp42;
                              cResult[41] = tmp49;
                              tmp46 = tmp49;
                            }
                          }
                          const obj6 = { style: content, children: items2 };
                          items2 = [tmp15, tmp34];
                          const tmp41 = unpackModuleId(View, obj6);
                          cResult[32] = tmp5.content;
                          cResult[33] = tmp34;
                          cResult[34] = tmp15;
                          cResult[35] = tmp41;
                          tmp38 = tmp41;
                        }
                      }
                      const obj7 = { style: tmp17, children: items3 };
                      items3 = [tmp18, tmp30];
                      const tmp37 = unpackModuleId(View, obj7);
                      cResult[28] = tmp5.levelUpBody;
                      cResult[29] = tmp30;
                      cResult[30] = tmp18;
                      cResult[31] = tmp37;
                      tmp34 = tmp37;
                    }
                  }
                  const obj8 = { style: messageSection, children: items4 };
                  items4 = [tmp23, tmp26];
                  const tmp33 = unpackModuleId(View, obj8);
                  cResult[24] = tmp5.messageSection;
                  cResult[25] = tmp23;
                  cResult[26] = tmp26;
                  cResult[27] = tmp33;
                  tmp30 = tmp33;
                }
              }
            }
            let tmp28Result = tmp11;
            if (tmp28Result) {
              const obj9 = { variant: "text-md/normal", color: "text-subtle", style: tmp5.centerText, children: format2(v6QVlxw, obj10) };
              const Text = tmp(5234).Text;
              const intl2 = tmp(1128).intl;
              format2 = intl2.format;
              obj10 = { count: giftsToNextTier, nextTierName: str2 };
              str2 = nextTier.name;
              v6QVlxw = tmp4(2632)["6QVlxw"];
              const tmp28 = authStore;
              if (str2 == null) {
                str2 = "";
              }
              tmp28Result = tmp28(Text, obj9);
            }
            cResult[19] = giftsToNextTier;
            cResult[20] = nextTier;
            cResult[21] = null != nextTier && null != giftsToNextTier && giftsToNextTier > 0;
            cResult[22] = tmp5.centerText;
            cResult[23] = tmp28Result;
            tmp26 = tmp28Result;
          }
          const obj11 = { variant: "heading-xxl/bold", style: centerText, children: tmp21 };
          const tmp25 = authStore(Text_Text.Text, obj11);
          cResult[16] = tmp5.centerText;
          cResult[17] = tmp21;
          cResult[18] = tmp25;
          tmp23 = tmp25;
        }
      }
    }
    const obj12 = { progress: simulatedProgress, currentTier, newTier, style: tmp5.levelUpProgress };
    const tmp20 = authStore(GiftingBadgeLevelUpProgressDefault, obj12);
    cResult[9] = currentTier;
    cResult[10] = newTier;
    cResult[11] = simulatedProgress;
    cResult[12] = tmp5.levelUpProgress;
    cResult[13] = tmp20;
    tmp18 = tmp20;
  }
  const obj13 = { style: tmp5.levelUpIconWrapper, children: tmp12 };
  const tmp16 = authStore(View, obj13);
  cResult[6] = tmp5.levelUpIconWrapper;
  cResult[7] = tmp12;
  cResult[8] = tmp16;
  tmp15 = tmp16;
}) : (function LevelUpScreen(arg0) {
  let currentTier;
  let format;
  let format2;
  let giftsToNextTier;
  let items;
  let items1;
  let items2;
  let items3;
  let k8MmO8;
  let newTier;
  let nextTier;
  let obj11;
  let onSendGift;
  let simulatedProgress;
  let str;
  let str2;
  let tmp9Result;
  let v6QVlxw;
  ({ newTier, nextTier, giftsToNextTier } = arg0);
  ({ simulatedProgress, currentTier, onSendGift } = arg0);
  const tmp3 = closure_12(useSafeAreaInsetsDefault().bottom);
  let obj = GiftingBadgesUtils;
  const giftingBadgeTierIconUrl = obj.getGiftingBadgeTierIconUrl(newTier);
  const effect = react.useEffect(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_HEAVY);
  }, []);
  const obj4 = { style: tmp3.levelUpIconWrapper, children: tmp9Result };
  tmp9Result = null != giftingBadgeTierIconUrl;
  const obj2 = { style: tmp3.screenContainer, children: items3 };
  const obj3 = { style: tmp3.content, children: items };
  if (tmp9Result) {
    const obj5 = { icon: giftingBadgeTierIconUrl, size: 140 };
    tmp9Result = tmp9(tmp(10505), obj5);
  }
  items = [authStore(View, obj4), ];
  const obj6 = { style: tmp3.levelUpBody, children: items1 };
  items1 = [, ];
  const obj7 = { progress: simulatedProgress, currentTier, newTier, style: tmp3.levelUpProgress };
  items1[0] = authStore(GiftingBadgeLevelUpProgressDefault, obj7);
  const obj8 = { style: tmp3.messageSection, children: items2 };
  const obj9 = { variant: "heading-xxl/bold", style: tmp3.centerText, children: format(k8MmO8, { tierName: str }) };
  const Text = tmp4(5234).Text;
  const intl = tmp4(1128).intl;
  format = intl.format;
  str = newTier.name;
  k8MmO8 = tmp(2632).k8MmO8;
  if (str == null) {
    str = "";
  }
  items2 = [authStore(Text, obj9), ];
  let tmp9Result2 = null != nextTier && null != giftsToNextTier && giftsToNextTier > 0;
  if (tmp9Result2) {
    const obj10 = { variant: "text-md/normal", color: "text-subtle", style: tmp3.centerText, children: format2(v6QVlxw, obj11) };
    const Text2 = tmp4(5234).Text;
    const intl2 = tmp4(1128).intl;
    format2 = intl2.format;
    obj11 = { count: giftsToNextTier, nextTierName: str2 };
    str2 = nextTier.name;
    v6QVlxw = tmp(2632)["6QVlxw"];
    if (str2 == null) {
      str2 = "";
    }
    tmp9Result2 = tmp9(Text2, obj10);
  }
  items2[1] = tmp9Result2;
  items1[1] = unpackModuleId(View, obj8);
  items[1] = unpackModuleId(View, obj6);
  items3 = [unpackModuleId(View, obj3), authStore(closure_13, { onSendGift })];
  return unpackModuleId(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftBadgePostPurchase(arg0) {
  let currentProgress;
  let onSendGift;
  let tmp37;
  let tmp38;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(34);
  ({ currentProgress, onSendGift } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const obj = DismissibleContentUnsafeUtils;
      const obj2 = { dismissAction: constants.INDIRECT_ACTION };
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.NEW_GIFTING_BADGES_COACHMARK, obj2);
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = react.useEffect(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [BadgeDirectoryStore];
    const fn2 = function v() {
      badgeById = badgeById.getBadgeById(BadgeId.BadgeId.GIFTING);
      let tiers;
      if (badgeById != null) {
        tiers = badgeById.tiers;
      }
      return tiers;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp8 = fn2;
    tmp7 = items1;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp18;
    let tmp17;
    let tmp16;
    let tmp15;
    let tmp11;
    let tmp14;
    let tmp13;
    let tmp12;
    if (cResult[4] === currentProgress) {
      if (cResult[5] === onSendGift) {
        if (cResult[6] === stateFromStores) {
          tmp11 = cResult[7];
          tmp12 = cResult[8];
          tmp13 = cResult[9];
          tmp14 = cResult[10];
          tmp15 = cResult[11];
          tmp16 = cResult[12];
          tmp17 = cResult[13];
          tmp18 = cResult[14];
        }
        const _Symbol4 = Symbol;
        if (tmp18 !== Symbol.for("react.early_return_sentinel")) {
          return tmp18;
        } else {
          if (cResult[25] === tmp11) {
            if (cResult[26] === onSendGift) {
              if (cResult[27] === tmp13) {
                if (cResult[28] === tmp12) {
                  if (cResult[29] === tmp15) {
                    if (cResult[30] === tmp16) {
                      if (cResult[31] === tmp17) {
                        let tmp55;
                        if (cResult[32] === tmp14) {
                          tmp55 = cResult[33];
                        }
                        return tmp55;
                      }
                    }
                  }
                }
              }
            }
          }
          let obj2 = { title: tmp15, description: tmp16, progressBarTitle: tmp17, progress: tmp13, currentTier: tmp14, nextTier: tmp12, onSendGift };
          const tmp57 = authStore(tmp11, obj2);
          cResult[25] = tmp11;
          cResult[26] = onSendGift;
          cResult[27] = tmp13;
          cResult[28] = tmp12;
          cResult[29] = tmp15;
          cResult[30] = tmp16;
          cResult[31] = tmp17;
          cResult[32] = tmp14;
          cResult[33] = tmp57;
          tmp55 = tmp57;
        }
      }
    }
    const _Symbol = Symbol;
    const forResult = Symbol.for("react.early_return_sentinel");
    const tmp21 = metroImportDefault(stateFromStores, currentProgress);
    const sum = currentProgress + 1;
    const tmp20 = metroImportDefault;
    if (cResult[15] === sum) {
      let tmp23;
      let key;
      let key2;
      if (cResult[16] === stateFromStores) {
        tmp23 = cResult[17];
      }
      if (tmp23 != null) {
        key = tmp23.key;
      }
      if (tmp21 != null) {
        key2 = tmp21.key;
      }
      const tmp26 = metroImportAll(stateFromStores, sum);
      if (cResult[18] === sum) {
        let tmp27;
        let tmp35Result;
        if (cResult[19] === stateFromStores) {
          tmp27 = cResult[20];
        }
        if (key !== key2) {
          if (null != tmp23) {
            const obj3 = { simulatedProgress: sum, currentTier: tmp21, newTier: tmp23, nextTier: tmp26, giftsToNextTier: tmp27, onSendGift };
            tmp35Result = authStore(closure_15, obj3);
          }
          cResult[4] = currentProgress;
          cResult[5] = onSendGift;
          cResult[6] = stateFromStores;
          cResult[7] = tmp43;
          cResult[8] = tmp26;
          cResult[9] = sum;
          cResult[10] = tmp23;
          cResult[11] = tmp42;
          cResult[12] = tmp41;
          cResult[13] = tmp40;
          cResult[14] = tmp35Result;
          tmp18 = tmp35Result;
          tmp17 = tmp40;
          tmp16 = tmp41;
          tmp15 = tmp42;
          tmp11 = tmp43;
          tmp14 = tmp23;
          tmp13 = sum;
          tmp12 = tmp26;
        }
        if (1 !== tmp27) {
          const _Symbol3 = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1128).intl;
            const stringResult = intl3.string(_modDef2632["/rBQud"]);
            const intl4 = tmp(1128).intl;
            const stringResult1 = intl4.string(_modDef2632.DDQMlx);
            cResult[23] = stringResult;
            cResult[24] = stringResult1;
          }
          let name;
          if (tmp21 != null) {
            name = tmp21.name;
          }
          if (null != name) {
            const intl5 = tmp(1128).intl;
            const formatToPlainString = intl5.formatToPlainString;
            let name1;
            const bwyQt8 = _modDef2632.bwyQt8;
            if (tmp21 != null) {
              name1 = tmp21.name;
            }
            const obj4 = { tierName: name1 };
            formatToPlainString(bwyQt8, obj4);
          }
          tmp35Result = forResult;
        } else {
          let tmp32;
          let tmp31;
          const intl6 = tmp(1128).intl;
          const formatToPlainString2 = intl6.formatToPlainString;
          let str2;
          const KjdBPz = _modDef2632.KjdBPz;
          if (tmp26 != null) {
            str2 = tmp26.name;
          }
          if (str2 == null) {
            str2 = "";
          }
          const _Symbol2 = Symbol;
          const obj5 = { nextTier: str2 };
          const formatToPlainString2Result = formatToPlainString2(KjdBPz, obj5);
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1128).intl;
            const stringResult2 = intl.string(_modDef2632.oqDrEM);
            const intl2 = tmp(1128).intl;
            const stringResult3 = intl2.string(_modDef2632["Ka5s+Q"]);
            cResult[21] = stringResult2;
            cResult[22] = stringResult3;
            tmp32 = stringResult3;
            tmp31 = stringResult2;
          } else {
            tmp31 = cResult[21];
            tmp32 = cResult[22];
          }
          const obj6 = { title: formatToPlainString2Result, description: tmp31, progressBarTitle: tmp32, progress: sum, currentTier: tmp37, nextTier: tmp38, onSendGift };
          tmp35Result = authStore(closure_14, obj6);
          tmp37 = tmp23;
          tmp38 = tmp26;
        }
      }
      const tmp29 = metroRequire(stateFromStores, sum);
      cResult[18] = sum;
      cResult[19] = stateFromStores;
      cResult[20] = tmp29;
      tmp27 = tmp29;
    }
    const tmp20Result = tmp20(stateFromStores, sum);
    cResult[15] = sum;
    cResult[16] = stateFromStores;
    cResult[17] = tmp20Result;
    tmp23 = tmp20Result;
  }
}) : (function GiftBadgePostPurchase(arg0) {
  let currentProgress;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let obj4;
  let onSendGift;
  let str;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp19;
  ({ currentProgress, onSendGift } = arg0);
  const effect = react.useEffect(() => {
    const obj = DismissibleContentUnsafeUtils;
    const obj2 = { dismissAction: constants.INDIRECT_ACTION };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.NEW_GIFTING_BADGES_COACHMARK, obj2);
  }, []);
  let obj = get_initialized;
  const items = [BadgeDirectoryStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    badgeById = badgeById.getBadgeById(BadgeId.BadgeId.GIFTING);
    let tiers;
    if (badgeById != null) {
      tiers = badgeById.tiers;
    }
    return tiers;
  });
  if (null == stateFromStores) {
    return null;
  } else {
    let obj5;
    const tmp24 = metroImportDefault(stateFromStores, currentProgress);
    const sum = currentProgress + 1;
    const tmp26 = metroImportDefault(stateFromStores, sum);
    let key;
    if (tmp26 != null) {
      key = tmp26.key;
    }
    let key1;
    if (tmp24 != null) {
      key1 = tmp24.key;
    }
    const tmp8 = metroImportAll(stateFromStores, sum);
    const tmp10 = metroRequire(stateFromStores, sum);
    if (key !== key1) {
      let tmp11Result;
      if (null != tmp26) {
        let obj2 = { simulatedProgress: sum, currentTier: tmp24, newTier: tmp26, nextTier: tmp8, giftsToNextTier: tmp10, onSendGift };
        tmp11Result = authStore(closure_15, obj2);
      }
      return tmp11Result;
    }
    const tmp11 = authStore;
    const tmp12 = closure_14;
    if (1 === tmp10) {
      const intl2 = tmp2(1128).intl;
      const formatToPlainString2 = intl2.formatToPlainString;
      let str2;
      const KjdBPz = _modDef2632.KjdBPz;
      if (tmp8 != null) {
        str2 = tmp8.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      const obj3 = { title: formatToPlainString2(KjdBPz, obj4), description: intl3.string(_modDef2632.oqDrEM), progressBarTitle: intl4.string(_modDef2632["Ka5s+Q"]), progress: sum, currentTier: tmp18, nextTier: tmp19, onSendGift };
      obj4 = { nextTier: str2 };
      intl3 = tmp2(1128).intl;
      intl4 = tmp2(1128).intl;
      obj5 = obj3;
      tmp18 = tmp26;
      tmp19 = tmp8;
    } else {
      obj5 = { title: intl5.string(_modDef2632["/rBQud"]), description: intl6.string(_modDef2632.DDQMlx), progressBarTitle: str, progress: sum, currentTier: tmp15, nextTier: tmp16, onSendGift };
      intl5 = tmp2(1128).intl;
      intl6 = tmp2(1128).intl;
      let name;
      const tmp27 = importDefault;
      if (tmp24 != null) {
        name = tmp24.name;
      }
      str = "";
      if (null != name) {
        const intl = tmp2(1128).intl;
        const formatToPlainString = intl.formatToPlainString;
        let name1;
        const bwyQt8 = tmp27(2632).bwyQt8;
        if (tmp24 != null) {
          name1 = tmp24.name;
        }
        const obj6 = { tierName: name1 };
        str = formatToPlainString(bwyQt8, obj6);
      }
      tmp15 = tmp26;
      tmp16 = tmp8;
    }
    tmp11Result = tmp11(tmp12, obj5);
  }
});
let result = size.fileFinishedImporting("modules/premium/native/gifting/GiftBadgePostPurchase.tsx");

export default tmp4;
