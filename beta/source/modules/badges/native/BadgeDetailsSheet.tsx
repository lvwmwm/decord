// Module ID: 10652
// Function ID: 10653
// Name: BadgeDetailsSheet
// Dependencies: [19, 17, 4826, 1378, 7641, 1086, 6573, 21, 4837, 588, 558, 576, 4788, 4833, 504, 10653, 10654, 10655, 10648, 10656, 2017, 1382, 10657, 10666, 10729, 4801, 10651, 10644, 6801, 1127, 10730, 10731, 5282, 10732, 1619, 7646, 10649, 6038, 6572, 2]

// Module 10652 (BadgeDetailsSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import CircleInformationIcon2 from "CircleInformationIcon" /* 4788 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import Text_Text from "Text/Text" /* 4833 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6573 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7646 */;
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen" /* 10644 */;
import openBadgeDetailsSheet from "openBadgeDetailsSheet" /* 10651 */;
import trackBadgeDirectoryActionDefault from "trackBadgeDirectoryAction" /* 10729 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4826 */;
import UserStore from "UserStore" /* 1378 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7641 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require, badge, badgeId, children, currentUser, segments, tmp3;

let Platform;
let c10;
let closure_12;
let closure_4;
let items;
let obj10;
let obj11;
let obj12;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let unpackModuleId;
({ Platform, View: closure_4 } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
let closure_9 = ActionSheetConstants.ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
let Fragment = Fragment_mod;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, header: obj3, betaPill: obj4, graphic: obj5, graphicAnimated: obj6, identity: { alignItems: "center" }, centeredText: { textAlign: "center" }, eyebrow: obj7, uppercase: { textTransform: "uppercase" }, accessoryLine: obj8, accessoryDot: size, card: obj9, descriptionGroup: obj10, divider: obj11, notice: obj12, noticeIcon: { marginTop: 2 }, noticeText: { flex: 1 } };
obj2 = { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj4 = { alignSelf: "flex-start", paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj5 = { marginBottom: nativeDefault.space.PX_12 };
obj6 = { transform: items };
items = [{ scale: 1.5 }];
obj7 = { marginBottom: nativeDefault.space.PX_4 };
obj8 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_6 };
size = { width: 3, height: 3, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_SUBTLE };
obj9 = { flexGrow: 1, gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj10 = { gap: nativeDefault.space.PX_4 };
obj11 = { height: 1, marginTop: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj12 = { flexDirection: "row", gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_INFO, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((segments) => {
  let accessoryDot;
  let tmp5;
  let obj = require("react");
  const cResult = obj.c(8);
  segments = segments.segments;
  let tmp2 = closure_13();
  _require = tmp2;
  if (cResult[0] === segments) {
    let tmp4;
    if (cResult[1] === tmp2.accessoryDot) {
      tmp4 = cResult[2];
    }
    if (cResult[5] === tmp2.accessoryLine) {
      let tmp7;
      if (cResult[6] === tmp4) {
        tmp7 = cResult[7];
      }
      return tmp7;
    }
    let obj2 = { style: tmp3, children: tmp4 };
    const tmp10 = closure_10(closure_4, obj2);
    cResult[5] = tmp2.accessoryLine;
    cResult[6] = tmp4;
    cResult[7] = tmp10;
    tmp7 = tmp10;
  }
  if (cResult[3] !== tmp2.accessoryDot) {
    const fn = function l(arg0, arg1) {
      let items;
      let key;
      let node;
      let tmp2 = arg1 > 0;
      ({ key, node } = arg0);
      const Fragment = react.Fragment;
      const tmp = unpackModuleId;
      if (tmp2) {
        const obj = { style: accessoryDot.accessoryDot, "aria-hidden": true };
        tmp2 = authStore(React3, obj);
      }
      const obj2 = { children: items };
      items = [tmp2, node];
      return tmp(Fragment, obj2, key);
    };
    cResult[3] = tmp2.accessoryDot;
    cResult[4] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[4];
  }
  const mapped = segments.map(tmp5);
  cResult[0] = segments;
  cResult[1] = tmp2.accessoryDot;
  cResult[2] = mapped;
  tmp4 = mapped;
}) : ((segments) => {
  segments = segments.segments;
  let tmp = closure_13();
  const accessoryDot = tmp;
  let obj = {
    style: tmp.accessoryLine,
    children: segments.map((item, index) => {
      let items;
      let key;
      let node;
      let tmp2 = index > 0;
      ({ key, node } = item);
      const Fragment = react.Fragment;
      const tmp = unpackModuleId;
      if (tmp2) {
        const obj = { style: accessoryDot.accessoryDot, "aria-hidden": true };
        tmp2 = authStore(React3, obj);
      }
      const obj2 = { children: items };
      items = [tmp2, node];
      return tmp(Fragment, obj2, key);
    })
  };
  return closure_10(closure_4, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let items;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(9);
  children = children.children;
  const tmp4 = closure_13();
  if (cResult[0] !== tmp4.noticeIcon) {
    const obj2 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_INFO, style: tmp4.noticeIcon };
    const CircleInformationIcon = tmp(4788).CircleInformationIcon;
    const tmp8 = authStore(CircleInformationIcon, obj2);
    cResult[0] = tmp4.noticeIcon;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === children) {
    let tmp9;
    if (cResult[3] === tmp4.noticeText) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.notice) {
      if (cResult[6] === tmp5) {
        let tmp11;
        if (cResult[7] === tmp9) {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
    }
    const obj3 = { style: tmp4.notice, children: items };
    items = [tmp5, tmp9];
    const tmp14 = unpackModuleId(React3, obj3);
    cResult[5] = tmp4.notice;
    cResult[6] = tmp5;
    cResult[7] = tmp9;
    cResult[8] = tmp14;
    tmp11 = tmp14;
  }
  const obj4 = { variant: "text-xs/medium", color: "text-default", style: tmp4.noticeText, children };
  const tmp10 = authStore(Text_Text.Text, obj4);
  cResult[2] = children;
  cResult[3] = tmp4.noticeText;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((children) => {
  let items;
  children = children.children;
  const tmp = closure_13();
  const obj = { style: tmp.notice, children: items };
  const obj2 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_INFO, style: tmp.noticeIcon };
  const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
  items = [authStore(CircleInformationIcon, obj2), ];
  const obj3 = { variant: "text-xs/medium", color: "text-default", style: tmp.noticeText, children };
  items[1] = authStore(Text_Text.Text, obj3);
  return unpackModuleId(React3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((badge) => {
  let Text;
  let animatedUrl;
  let displayName;
  let displayedUserId;
  let eyebrow;
  let imageUrl;
  let intl;
  let isNitro;
  let isViewerOwnershipKnown;
  let isViewingOtherUser;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj14;
  let obj25;
  let obj3;
  let obj31;
  let obj6;
  let targetUsername;
  let tmp10;
  let tmp5;
  let tmp6;
  let tmp9;
  let tmpResult23;
  let useReducedMotion;
  let viewerBadge;
  let obj = badge(isViewingOtherUser[11]);
  const cResult = obj.c(72);
  badge = badge.badge;
  ({ viewerBadge, displayedUserId } = badge);
  isViewingOtherUser = badge.isViewingOtherUser;
  ({ targetUsername, isViewerOwnershipKnown } = badge);
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function c() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = badge(isViewingOtherUser[14]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    class O {
      constructor() {
        currentUser = currentUser.getCurrentUser();
        let premiumType;
        if (currentUser != null) {
          premiumType = currentUser.premiumType;
        }
        return premiumType;
      }
    }
    cResult[2] = items1;
    cResult[3] = O;
    tmp10 = O;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult14 = badge(isViewingOtherUser[14]);
  const stateFromStores1 = tmpResult14.useStateFromStores(tmp9, tmp10);
  const tmp14 = displayedUserId(isViewingOtherUser[15])(badge.badge_id);
  if (cResult[4] === badge) {
    if (cResult[5] === isViewingOtherUser) {
      let tmp15;
      if (cResult[6] === viewerBadge) {
        tmp15 = cResult[7];
      }
      const tmp16 = displayedUserId(isViewingOtherUser[16])(tmp15);
      if (cResult[8] === badge) {
        let tmp17;
        let tmp67Result4;
        let tmp20;
        if (cResult[9] === isViewingOtherUser) {
          tmp17 = cResult[10];
        }
        const tmp19 = displayedUserId(isViewingOtherUser[17])(tmp17);
        if (cResult[11] === badge) {
          if (cResult[12] === displayedUserId) {
            if (cResult[13] === stateFromStores) {
              if (cResult[14] === isViewerOwnershipKnown) {
                if (cResult[15] === isViewingOtherUser) {
                  if (cResult[16] === tmp14) {
                    if (cResult[17] === tmp19) {
                      if (cResult[18] === tmp16) {
                        if (cResult[19] === tmp4.betaPill) {
                          if (cResult[20] === tmp4.card) {
                            if (cResult[21] === tmp4.centeredText) {
                              if (cResult[22] === tmp4.descriptionGroup) {
                                if (cResult[23] === tmp4.divider) {
                                  if (cResult[24] === tmp4.eyebrow) {
                                    if (cResult[25] === tmp4.graphic) {
                                      if (cResult[26] === tmp4.graphicAnimated) {
                                        if (cResult[27] === tmp4.header) {
                                          if (cResult[28] === tmp4.identity) {
                                            if (cResult[29] === tmp4.uppercase) {
                                              if (cResult[30] === targetUsername) {
                                                if (cResult[31] === viewerBadge) {
                                                  if (cResult[32] === stateFromStores1) {
                                                    tmp20 = cResult[33];
                                                  }
                                                  return tmp20;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        class O {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let premiumType;
            if (currentUser != null) {
              premiumType = currentUser.premiumType;
            }
            return premiumType;
          }
        }
        const displayTier = obj5.getDisplayTier(badge);
        const tmpResult15 = badge(isViewingOtherUser[19]);
        const badgeArtUrls = tmpResult15.getBadgeArtUrls(badge, displayTier, stateFromStores);
        ({ animatedUrl, imageUrl } = badgeArtUrls);
        let rarity;
        if (displayTier != null) {
          rarity = displayTier.rarity;
        }
        if (rarity == null) {
          rarity = badge.rarity;
        }
        const tmpResult16 = badge(isViewingOtherUser[19]);
        const badgeTitle = tmpResult16.getBadgeTitle(badge, displayTier);
        ({ isNitro, eyebrow, displayName } = badgeTitle);
        if (cResult[34] !== badge) {
          const tmpResult17 = badge(isViewingOtherUser[19]);
          const isLegacyDisplayBadgeResult = tmpResult17.isLegacyDisplayBadge(badge);
          class O {
            constructor() {
              currentUser = currentUser.getCurrentUser();
              let premiumType;
              if (currentUser != null) {
                premiumType = currentUser.premiumType;
              }
              return premiumType;
            }
          }
          cResult[35] = isLegacyDisplayBadgeResult;
          tmp67Result4 = isLegacyDisplayBadgeResult;
        } else {
          tmp67Result4 = cResult[35];
        }
        const tiers = badge.tiers;
        let num10;
        if (tiers != null) {
          num10 = tiers.length;
        }
        if (num10 == null) {
          num10 = 0;
        }
        let tmp63Result10 = num10 > 0;
        let flag;
        if (viewerBadge != null) {
          flag = viewerBadge.owned;
        }
        if (flag == null) {
          flag = false;
        }
        const items2 = [];
        const tmpResult18 = badge(isViewingOtherUser[20]);
        if (!tmpResult18.isNullOrEmpty(badge.info_label)) {
          let tmp29;
          if (cResult[36] !== badge.info_label) {
            let obj2 = { key: "info", node: closure_10(tmp(tmp2[13]).Text, obj3) };
            obj3 = { variant: "text-md/medium", color: "text-subtle", children: null };
            class O {
              constructor() {
                currentUser = currentUser.getCurrentUser();
                let premiumType;
                if (currentUser != null) {
                  premiumType = currentUser.premiumType;
                }
                return premiumType;
              }
            }
            cResult[36] = badge.info_label;
            cResult[37] = obj2;
            tmp29 = obj2;
          } else {
            tmp29 = cResult[37];
          }
          items2.push(tmp29);
        }
        if (cResult[38] === badge) {
          let tmp32;
          let tmp34;
          let obj20;
          if (cResult[39] === tmp14) {
            tmp32 = cResult[40];
          }
          if (cResult[41] !== tmp32) {
            let obj4 = { key: "status", node: closure_10(tmp(tmp2[13]).Text, obj6) };
            obj6 = { variant: "text-md/medium", color: "text-subtle", children: null };
            class O {
              constructor() {
                currentUser = currentUser.getCurrentUser();
                let premiumType;
                if (currentUser != null) {
                  premiumType = currentUser.premiumType;
                }
                return premiumType;
              }
            }
            cResult[41] = tmp32;
            cResult[42] = obj4;
            tmp34 = obj4;
          } else {
            tmp34 = cResult[42];
          }
          items2.push(tmp34);
          class O {
            constructor() {
              currentUser = currentUser.getCurrentUser();
              let premiumType;
              if (currentUser != null) {
                premiumType = currentUser.premiumType;
              }
              return premiumType;
            }
          }
          if (tmp37) {
            const push = items2.push;
            const obj7 = { key: "rarity", node: closure_10(displayedUserId(isViewingOtherUser[22]), tmp39) };
            class O {
              constructor() {
                currentUser = currentUser.getCurrentUser();
                let premiumType;
                if (currentUser != null) {
                  premiumType = currentUser.premiumType;
                }
                return premiumType;
              }
            }
            tmp39[0] = rarity;
            push(obj7);
          }
          const tmpResult19 = badge(isViewingOtherUser[19]);
          let result = tmpResult19.isUpgradeableNitroViewer(badge, stateFromStores1);
          const obj8 = { badge, viewerBadge, isViewerOnUpgradeableNitro: result };
          const tmpResult20 = badge(isViewingOtherUser[19]);
          const badgeDescriptionText = tmpResult20.getBadgeDescriptionText(obj8);
          const tmpResult21 = badge(isViewingOtherUser[20]);
          const isNullOrEmptyResult = tmpResult21.isNullOrEmpty(badgeDescriptionText);
          if (cResult[43] !== badge.badge_id) {
            const tmpResult22 = badge(isViewingOtherUser[23]);
            const badgeDetailsCta = tmpResult22.getBadgeDetailsCta(badge.badge_id);
            class O {
              constructor() {
                currentUser = currentUser.getCurrentUser();
                let premiumType;
                if (currentUser != null) {
                  premiumType = currentUser.premiumType;
                }
                return premiumType;
              }
            }
            cResult[44] = badgeDetailsCta;
            obj20 = badgeDetailsCta;
          } else {
            obj20 = cResult[44];
          }
          if (cResult[45] === badge) {
            if (cResult[46] === obj20) {
              if (cResult[47] === displayedUserId) {
                let tmp46;
                if (cResult[48] === isViewingOtherUser) {
                  tmp46 = cResult[49];
                }
                const _Symbol = Symbol;
                class O {
                  constructor() {
                    currentUser = currentUser.getCurrentUser();
                    let premiumType;
                    if (currentUser != null) {
                      premiumType = currentUser.premiumType;
                    }
                    return premiumType;
                  }
                }
                const _Symbol2 = Symbol;
                if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                  function le() {
                    const obj = displayedUserId(isViewingOtherUser[25]);
                    obj.hideActionSheet(badge(isViewingOtherUser[26]).BADGE_DETAILS_SHEET_KEY);
                    const obj2 = badge(isViewingOtherUser[27]);
                    const result = obj2.closeBadgeDirectoryScreen();
                    const obj3 = badge(isViewingOtherUser[27]);
                    const result1 = obj3.openBadgeDirectoryScreen();
                  }
                  cResult[51] = le;
                  class O {
                    constructor() {
                      currentUser = currentUser.getCurrentUser();
                      let premiumType;
                      if (currentUser != null) {
                        premiumType = currentUser.premiumType;
                      }
                      return premiumType;
                    }
                  }
                }
                if (cResult[52] === badge) {
                  if (cResult[53] === isViewerOwnershipKnown) {
                    if (cResult[54] === isViewingOtherUser) {
                      let tmp52 = badge;
                      if (!isViewingOtherUser) {
                        let tmp53 = viewerBadge;
                        if (viewerBadge == null) {
                          tmp53 = badge;
                        }
                        tmp52 = tmp53;
                      }
                      class O {
                        constructor() {
                          currentUser = currentUser.getCurrentUser();
                          let premiumType;
                          if (currentUser != null) {
                            premiumType = currentUser.premiumType;
                          }
                          return premiumType;
                        }
                      }
                      if (cResult[59] === badge.badge_id) {
                        if (cResult[60] === tmp4.betaPill) {
                          let tmp55;
                          if (cResult[61] === tmp4.uppercase) {
                            tmp55 = cResult[62];
                          }
                          let tmp60Result = null != imageUrl;
                          if (tmp60Result) {
                            const obj9 = { url: imageUrl, height: 120, animated: null, style: items3 };
                            const tmp60 = closure_10;
                            class O {
                              constructor() {
                                currentUser = currentUser.getCurrentUser();
                                let premiumType;
                                if (currentUser != null) {
                                  premiumType = currentUser.premiumType;
                                }
                                return premiumType;
                              }
                            }
                            items3 = [tmp4.graphic, ];
                            let graphicAnimated = null != animatedUrl;
                            const tmp13Result = displayedUserId(isViewingOtherUser[30]);
                            if (graphicAnimated) {
                              graphicAnimated = tmp4.graphicAnimated;
                            }
                            items3[1] = graphicAnimated;
                            tmp60Result = tmp60(tmp13Result, obj9);
                          }
                          class O {
                            constructor() {
                              currentUser = currentUser.getCurrentUser();
                              let premiumType;
                              if (currentUser != null) {
                                premiumType = currentUser.premiumType;
                              }
                              return premiumType;
                            }
                          }
                          let tmp65 = null != eyebrow;
                          const obj10 = { style: tmp4.identity, children: items5 };
                          if (tmp65) {
                            const obj11 = { variant: "text-md/medium", color: "text-subtle", style: items4, children: eyebrow };
                            items4 = [, ];
                            class O {
                              constructor() {
                                currentUser = currentUser.getCurrentUser();
                                let premiumType;
                                if (currentUser != null) {
                                  premiumType = currentUser.premiumType;
                                }
                                return premiumType;
                              }
                            }
                            items4[1] = tmp4.eyebrow;
                            tmp65 = closure_10(tmp(tmp2[13]).Text, obj11);
                          }
                          items5 = [tmp65, , ];
                          let str = "display-sm";
                          const Heading = tmp(tmp2[13]).Heading;
                          if (isNitro) {
                            str = "nitro-sm";
                          }
                          const obj12 = { variant: str, color: "text-strong", style: items6, children: displayName };
                          items6 = [tmp4.centeredText, isNitro && tmp4.uppercase];
                          items5[1] = closure_10(Heading, obj12);
                          items5[2] = tmp62;
                          const tmp63Result = closure_11(closure_4, obj10);
                          if (cResult[65] === tmp4.header) {
                            if (cResult[66] === tmp55) {
                              if (cResult[67] === tmp60Result) {
                                let tmp69;
                                let tmp71;
                                if (cResult[68] === tmp63Result) {
                                  tmp69 = cResult[69];
                                }
                                if (cResult[70] !== tmp19) {
                                  let tmp67Result = tmp19;
                                  if (tmp67Result) {
                                    const obj13 = { children: tmp74(badge(isViewingOtherUser[29]).t.Zh44ni, obj14) };
                                    const intl2 = tmp(tmp2[29]).intl;
                                    class O {
                                      constructor() {
                                        currentUser = currentUser.getCurrentUser();
                                        let premiumType;
                                        if (currentUser != null) {
                                          premiumType = currentUser.premiumType;
                                        }
                                        return premiumType;
                                      }
                                    }
                                    obj14 = { onGoToSettings: tmp48 };
                                    tmp67Result = tmp67(closure_15, obj13);
                                  }
                                  class O {
                                    constructor() {
                                      currentUser = currentUser.getCurrentUser();
                                      let premiumType;
                                      if (currentUser != null) {
                                        premiumType = currentUser.premiumType;
                                      }
                                      return premiumType;
                                    }
                                  }
                                  cResult[71] = tmp67Result;
                                  tmp71 = tmp67Result;
                                } else {
                                  tmp71 = cResult[71];
                                }
                                class O {
                                  constructor() {
                                    currentUser = currentUser.getCurrentUser();
                                    let premiumType;
                                    if (currentUser != null) {
                                      premiumType = currentUser.premiumType;
                                    }
                                    return premiumType;
                                  }
                                }
                                tmp76[0] = tmp69;
                                tmp76[1] = tmp71;
                                if (!tmp16) {
                                  let tmp63Result11;
                                  if (isNullOrEmptyResult) {
                                    tmp63Result11 = tmp54;
                                  }
                                  const obj15 = { children: null };
                                  tmp76[2] = tmp63Result11;
                                  class O {
                                    constructor() {
                                      currentUser = currentUser.getCurrentUser();
                                      let premiumType;
                                      if (currentUser != null) {
                                        premiumType = currentUser.premiumType;
                                      }
                                      return premiumType;
                                    }
                                  }
                                  const tmp63Result7 = closure_11(closure_12, obj15);
                                  cResult[11] = badge;
                                  cResult[12] = displayedUserId;
                                  cResult[13] = stateFromStores;
                                  cResult[14] = isViewerOwnershipKnown;
                                  cResult[15] = isViewingOtherUser;
                                  cResult[16] = tmp14;
                                  cResult[17] = tmp19;
                                  cResult[18] = tmp16;
                                  cResult[19] = tmp4.betaPill;
                                  cResult[20] = tmp4.card;
                                  cResult[21] = tmp4.centeredText;
                                  cResult[22] = tmp4.descriptionGroup;
                                  cResult[23] = tmp4.divider;
                                  cResult[24] = tmp4.eyebrow;
                                  cResult[25] = tmp4.graphic;
                                  cResult[26] = tmp4.graphicAnimated;
                                  cResult[27] = tmp4.header;
                                  cResult[28] = tmp4.identity;
                                  cResult[29] = tmp4.uppercase;
                                  cResult[30] = targetUsername;
                                  cResult[31] = viewerBadge;
                                  cResult[32] = stateFromStores1;
                                  cResult[33] = tmp63Result7;
                                  tmp20 = tmp63Result7;
                                }
                                let tmp63Result8 = tmp16;
                                const obj16 = { style: tmp4.card, children: items8 };
                                if (tmp63Result8) {
                                  const obj17 = { children: items7 };
                                  const obj18 = { badge, viewerBadge: null };
                                  class O {
                                    constructor() {
                                      currentUser = currentUser.getCurrentUser();
                                      let premiumType;
                                      if (currentUser != null) {
                                        premiumType = currentUser.premiumType;
                                      }
                                      return premiumType;
                                    }
                                  }
                                  items7 = [closure_10(displayedUserId(tmp2[31]), obj18), ];
                                  const obj19 = { style: tmp4.divider };
                                  items7[1] = closure_10(closure_4, obj19);
                                  tmp63Result8 = tmp63(tmp75, obj17);
                                }
                                items8 = [tmp63Result8, , , , ];
                                let tmp63Result9 = tmp44;
                                if (!isNullOrEmptyResult) {
                                  const obj21 = { style: tmp4.descriptionGroup, children: tmp81 };
                                  if (tmp67Result4) {
                                    const obj22 = { variant: "text-sm/medium", color: "text-subtle", children: tmp80(badge(isViewingOtherUser[29]).t["/Gmn3f"]) };
                                    const Text2 = tmp(tmp2[13]).Text;
                                    const intl3 = tmp(tmp2[29]).intl;
                                    class O {
                                      constructor() {
                                        currentUser = currentUser.getCurrentUser();
                                        let premiumType;
                                        if (currentUser != null) {
                                          premiumType = currentUser.premiumType;
                                        }
                                        return premiumType;
                                      }
                                    }
                                    tmp67Result4 = tmp67(Text2, obj22);
                                  }
                                  class O {
                                    constructor() {
                                      currentUser = currentUser.getCurrentUser();
                                      let premiumType;
                                      if (currentUser != null) {
                                        premiumType = currentUser.premiumType;
                                      }
                                      return premiumType;
                                    }
                                  }
                                  tmp81[0] = tmp67Result4;
                                  const obj23 = { variant: "text-md/medium", color: "text-default", children: badgeDescriptionText };
                                  tmp81[1] = closure_10(badge(isViewingOtherUser[13]).Text, obj23);
                                  tmp63Result9 = tmp63(tmp64, obj21);
                                }
                                items8[1] = tmp63Result9;
                                let tmp67Result5 = tmp44;
                                if (!isNullOrEmptyResult) {
                                  tmp67Result5 = null != obj20;
                                }
                                if (tmp67Result5) {
                                  tmp67Result5 = isViewerOwnershipKnown;
                                }
                                if (tmp67Result5) {
                                  const obj24 = { variant: tmpResult23.getBadgeCtaVariant(tmp83), size: "md", onPress: tmp46, text: obj20.ctaLabel(obj25) };
                                  const Button = tmp(tmp2[32]).Button;
                                  tmpResult23 = badge(isViewingOtherUser[19]);
                                  class O {
                                    constructor() {
                                      currentUser = currentUser.getCurrentUser();
                                      let premiumType;
                                      if (currentUser != null) {
                                        premiumType = currentUser.premiumType;
                                      }
                                      return premiumType;
                                    }
                                  }
                                  tmp83[0] = isNitro;
                                  tmp83[1] = result;
                                  tmp83[2] = flag;
                                  obj25 = { owned: flag, isViewerOnUpgradeableNitro: result };
                                  tmp67Result5 = tmp67(Button, obj24);
                                }
                                items8[2] = tmp67Result5;
                                if (tmp63Result10) {
                                  let tmp67Result6 = !tmp16 && tmp44;
                                  if (tmp67Result6) {
                                    const obj26 = { style: tmp4.divider };
                                    tmp67Result6 = tmp67(tmp64, obj26);
                                  }
                                  const obj27 = { children: tmp85 };
                                  class O {
                                    constructor() {
                                      currentUser = currentUser.getCurrentUser();
                                      let premiumType;
                                      if (currentUser != null) {
                                        premiumType = currentUser.premiumType;
                                      }
                                      return premiumType;
                                    }
                                  }
                                  tmp85[0] = tmp67Result6;
                                  const obj28 = { badge: tmp52, isViewingOtherUser, targetUsername, isViewerOnUpgradeableNitro: result };
                                  tmp85[1] = closure_10(displayedUserId(isViewingOtherUser[33]), obj28);
                                  tmp63Result10 = tmp63(tmp75, obj27);
                                }
                                items8[3] = tmp63Result10;
                                items8[4] = tmp54;
                                tmp63Result11 = tmp63(tmp64, obj16);
                              }
                            }
                          }
                          const obj29 = { style: tmp4.header, children: items9 };
                          items9 = [tmp55, tmp60Result, tmp63Result];
                          const tmp63Result12 = closure_11(closure_4, obj29);
                          cResult[65] = tmp4.header;
                          cResult[66] = tmp55;
                          cResult[67] = tmp60Result;
                          cResult[68] = tmp63Result;
                          cResult[69] = tmp63Result12;
                          tmp69 = tmp63Result12;
                        }
                      }
                      const tmpResult24 = badge(isViewingOtherUser[18]);
                      let isBetaBadgeIdResult = tmpResult24.isBetaBadgeId(badge.badge_id);
                      if (isBetaBadgeIdResult) {
                        const obj30 = { style: null, children: closure_10(Text, obj31) };
                        class O {
                          constructor() {
                            currentUser = currentUser.getCurrentUser();
                            let premiumType;
                            if (currentUser != null) {
                              premiumType = currentUser.premiumType;
                            }
                            return premiumType;
                          }
                        }
                        obj31 = { variant: "text-xs/bold", color: "text-default", style: tmp4.uppercase, children: intl.string(badge(isViewingOtherUser[29]).t.oW0eUd) };
                        Text = tmp(tmp2[13]).Text;
                        intl = tmp(tmp2[29]).intl;
                        isBetaBadgeIdResult = closure_10(closure_4, obj30);
                      }
                      cResult[59] = badge.badge_id;
                      cResult[60] = tmp4.betaPill;
                      cResult[61] = tmp4.uppercase;
                      cResult[62] = isBetaBadgeIdResult;
                      tmp55 = isBetaBadgeIdResult;
                    }
                  }
                }
                let result1 = isViewerOwnershipKnown;
                if (result1) {
                  const obj32 = { badge, isViewingOtherUser: null, viewerOwnsBadge: flag };
                  const tmpResult25 = badge(isViewingOtherUser[19]);
                  class O {
                    constructor() {
                      currentUser = currentUser.getCurrentUser();
                      let premiumType;
                      if (currentUser != null) {
                        premiumType = currentUser.premiumType;
                      }
                      return premiumType;
                    }
                  }
                  result1 = tmpResult25.shouldShowLegacyUnavailableNotice(obj32);
                }
                cResult[52] = badge;
                cResult[53] = isViewerOwnershipKnown;
                cResult[54] = isViewingOtherUser;
                cResult[55] = flag;
                cResult[56] = result1;
              }
            }
          }
          function ne() {
            const obj = obj20;
            if (null != obj20) {
              const obj2 = { actionName: "primary_badge_action_clicked", badge, displayedUserId, isSociallyNavigated: isViewingOtherUser };
              trackBadgeDirectoryActionDefault(obj2);
              const obj3 = ActionSheetActionCreatorsDefault;
              obj3.hideActionSheet(openBadgeDetailsSheet.BADGE_DETAILS_SHEET_KEY);
              const obj4 = openBadgeDirectoryScreen;
              const result = obj4.closeBadgeDirectoryScreen();
              obj.ctaAction();
            }
          }
          cResult[45] = badge;
          cResult[46] = obj20;
          cResult[47] = displayedUserId;
          cResult[48] = isViewingOtherUser;
          cResult[49] = ne;
          tmp46 = ne;
        }
        const tmpResult26 = badge(isViewingOtherUser[19]);
        const badgeStatusText = tmpResult26.getBadgeStatusText(badge, tmp14);
        cResult[38] = badge;
        cResult[39] = tmp14;
        cResult[40] = badgeStatusText;
        tmp32 = badgeStatusText;
      }
      class O {
        constructor() {
          currentUser = currentUser.getCurrentUser();
          let premiumType;
          if (currentUser != null) {
            premiumType = currentUser.premiumType;
          }
          return premiumType;
        }
      }
      tmp18[0] = badge;
      tmp18[1] = isViewingOtherUser;
      cResult[8] = badge;
      cResult[9] = isViewingOtherUser;
      cResult[10] = tmp18;
      tmp17 = tmp18;
    }
  }
  const obj33 = { badge, viewerBadge, isViewingOtherUser };
  cResult[4] = badge;
  cResult[5] = isViewingOtherUser;
  cResult[6] = viewerBadge;
  cResult[7] = obj33;
  tmp15 = obj33;
}) : ((badge) => {
  let Text;
  let Text2;
  let animatedUrl;
  let displayName;
  let displayedUserId;
  let eyebrow;
  let imageUrl;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isNitro;
  let items10;
  let items11;
  let items12;
  let items13;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj10;
  let obj13;
  let obj16;
  let obj22;
  let obj32;
  let obj33;
  let obj6;
  let obj8;
  let tmp2Result13;
  let tmp2Result20;
  let useReducedMotion;
  let viewerBadge;
  badge = badge.badge;
  ({ viewerBadge, displayedUserId } = badge);
  const isViewingOtherUser = badge.isViewingOtherUser;
  const isViewerOwnershipKnown = badge.isViewerOwnershipKnown;
  let badgeDetailsCta;
  const targetUsername = badge.targetUsername;
  const tmp = closure_13();
  let obj = badge(isViewingOtherUser[14]);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = badge(isViewingOtherUser[14]);
  const items1 = [UserStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return premiumType;
  });
  const tmp7 = displayedUserId(isViewingOtherUser[15])(badge.badge_id);
  const tmp8 = displayedUserId(isViewingOtherUser[16])({ badge, viewerBadge, isViewingOtherUser });
  let tmp18Result9 = displayedUserId(isViewingOtherUser[17])({ badge, isViewingOtherUser });
  let obj3 = badge(isViewingOtherUser[18]);
  const displayTier = obj3.getDisplayTier(badge);
  let obj4 = badge(isViewingOtherUser[19]);
  const badgeArtUrls = obj4.getBadgeArtUrls(badge, displayTier, stateFromStores);
  ({ animatedUrl, imageUrl } = badgeArtUrls);
  let rarity;
  if (displayTier != null) {
    rarity = displayTier.rarity;
  }
  if (rarity == null) {
    rarity = badge.rarity;
  }
  const tmp2Result = badge(isViewingOtherUser[19]);
  const badgeTitle = tmp2Result.getBadgeTitle(badge, displayTier);
  ({ isNitro, eyebrow, displayName } = badgeTitle);
  const tiers = badge.tiers;
  let num;
  const tmp2Result11 = badge(isViewingOtherUser[19]);
  const isLegacyDisplayBadgeResult = tmp2Result11.isLegacyDisplayBadge(badge);
  if (tiers != null) {
    num = tiers.length;
  }
  if (num == null) {
    num = 0;
  }
  let tmp34Result5 = num > 0;
  let flag;
  if (viewerBadge != null) {
    flag = viewerBadge.owned;
  }
  if (flag == null) {
    flag = false;
  }
  const items2 = [];
  const tmp2Result12 = badge(isViewingOtherUser[20]);
  if (!tmp2Result12.isNullOrEmpty(badge.info_label)) {
    const push = items2.push;
    const obj5 = { key: "info", node: closure_10(badge(isViewingOtherUser[13]).Text, obj6) };
    obj6 = { variant: "text-md/medium", color: "text-subtle", children: badge.info_label };
    push(obj5);
  }
  const push2 = items2.push;
  const obj7 = { key: "status", node: closure_10(Text, obj8) };
  obj8 = { variant: "text-md/medium", color: "text-subtle", children: tmp2Result13.getBadgeStatusText(badge, tmp7) };
  Text = tmp2(tmp3[13]).Text;
  tmp2Result13 = badge(isViewingOtherUser[19]);
  push2(obj7);
  const tmp20 = badge.owned && null != rarity && rarity !== badge(isViewingOtherUser[21]).BadgeRarity.COMMON;
  if (tmp20) {
    const push3 = items2.push;
    const obj9 = { key: "rarity", node: closure_10(displayedUserId(isViewingOtherUser[22]), obj10) };
    obj10 = { rarity };
    push3(obj9);
  }
  const tmp2Result14 = badge(isViewingOtherUser[19]);
  let result = tmp2Result14.isUpgradeableNitroViewer(badge, stateFromStores1);
  const tmp2Result15 = badge(isViewingOtherUser[19]);
  const badgeDescriptionText = tmp2Result15.getBadgeDescriptionText({ badge, viewerBadge, isViewerOnUpgradeableNitro: result });
  const tmp2Result16 = badge(isViewingOtherUser[20]);
  const isNullOrEmptyResult = tmp2Result16.isNullOrEmpty(badgeDescriptionText);
  const tmp2Result17 = badge(isViewingOtherUser[23]);
  badgeDetailsCta = tmp2Result17.getBadgeDetailsCta(badge.badge_id);
  const items3 = [badge, badgeDetailsCta, displayedUserId, isViewingOtherUser];
  const callback = badgeDetailsCta.useCallback(() => {
    const obj = badgeDetailsCta;
    if (null != badgeDetailsCta) {
      const obj2 = { actionName: "primary_badge_action_clicked", badge, displayedUserId, isSociallyNavigated: isViewingOtherUser };
      trackBadgeDirectoryActionDefault(obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet(openBadgeDetailsSheet.BADGE_DETAILS_SHEET_KEY);
      const obj4 = openBadgeDirectoryScreen;
      const result = obj4.closeBadgeDirectoryScreen();
      obj.ctaAction();
    }
  }, items3);
  const callback1 = badgeDetailsCta.useCallback(() => {
    const obj = displayedUserId(isViewingOtherUser[25]);
    obj.hideActionSheet(badge(isViewingOtherUser[26]).BADGE_DETAILS_SHEET_KEY);
    const obj2 = badge(isViewingOtherUser[27]);
    const result = obj2.closeBadgeDirectoryScreen();
    const obj3 = badge(isViewingOtherUser[28]);
    const obj4 = { screen: constants.DATA_AND_PRIVACY };
    obj3.openUserSettings(obj4);
  }, []);
  let result1 = isViewerOwnershipKnown;
  const callback2 = badgeDetailsCta.useCallback(() => {
    const obj = displayedUserId(isViewingOtherUser[25]);
    obj.hideActionSheet(badge(isViewingOtherUser[26]).BADGE_DETAILS_SHEET_KEY);
    const obj2 = badge(isViewingOtherUser[27]);
    const result = obj2.closeBadgeDirectoryScreen();
    const obj3 = badge(isViewingOtherUser[27]);
    const result1 = obj3.openBadgeDirectoryScreen();
  }, []);
  if (isViewerOwnershipKnown) {
    const obj11 = { badge, isViewingOtherUser, viewerOwnsBadge: flag };
    const tmp2Result18 = badge(isViewingOtherUser[19]);
    result1 = tmp2Result18.shouldShowLegacyUnavailableNotice(obj11);
  }
  let tmp30 = badge;
  if (!isViewingOtherUser) {
    let tmp31 = viewerBadge;
    if (viewerBadge == null) {
      tmp31 = badge;
    }
    tmp30 = tmp31;
  }
  let tmp18Result = null;
  if (result1) {
    const obj12 = { children: intl.format(badge(isViewingOtherUser[29]).t.vFekBs, obj13) };
    intl = tmp2(tmp3[29]).intl;
    obj13 = { onViewBadges: callback2 };
    tmp18Result = tmp18(closure_15, obj12);
  }
  const obj14 = { style: tmp.header, children: items4 };
  const tmp2Result19 = badge(isViewingOtherUser[18]);
  let isBetaBadgeIdResult = tmp2Result19.isBetaBadgeId(badge.badge_id);
  if (isBetaBadgeIdResult) {
    const obj15 = { style: tmp.betaPill, children: closure_10(Text2, obj16) };
    obj16 = { variant: "text-xs/bold", color: "text-default", style: tmp.uppercase, children: intl2.string(badge(isViewingOtherUser[29]).t.oW0eUd) };
    Text2 = tmp2(tmp3[13]).Text;
    intl2 = tmp2(tmp3[29]).intl;
    isBetaBadgeIdResult = tmp18(tmp36, obj15);
  }
  items4 = [isBetaBadgeIdResult, , ];
  let tmp18Result7 = null != imageUrl;
  if (tmp18Result7) {
    const obj17 = { url: imageUrl, height: 120, animated: null != animatedUrl, style: items5 };
    items5 = [tmp.graphic, ];
    let graphicAnimated = null != animatedUrl;
    const tmp6Result = displayedUserId(isViewingOtherUser[30]);
    if (graphicAnimated) {
      graphicAnimated = tmp.graphicAnimated;
    }
    items5[1] = graphicAnimated;
    tmp18Result7 = tmp18(tmp6Result, obj17);
  }
  items4[1] = tmp18Result7;
  let tmp18Result8 = null != eyebrow;
  const obj18 = { style: tmp.identity, children: items7 };
  if (tmp18Result8) {
    const obj19 = { variant: "text-md/medium", color: "text-subtle", style: items6, children: eyebrow };
    items6 = [, ];
    ({ centeredText: arr8[0], eyebrow: arr8[1] } = tmp);
    tmp18Result8 = tmp18(tmp2(tmp3[13]).Text, obj19);
  }
  items7 = [tmp18Result8, , ];
  let str = "display-sm";
  const Heading = tmp2(tmp3[13]).Heading;
  if (isNitro) {
    str = "nitro-sm";
  }
  const obj20 = { variant: str, color: "text-strong", style: items8, children: displayName };
  items8 = [tmp.centeredText, isNitro && tmp.uppercase];
  items7[1] = closure_10(Heading, obj20);
  items7[2] = closure_10(closure_14, { segments: items2 });
  items4[2] = closure_11(closure_4, obj18);
  const items9 = [closure_11(closure_4, obj14), , ];
  if (tmp18Result9) {
    const obj21 = { children: intl3.format(badge(isViewingOtherUser[29]).t.Zh44ni, obj22) };
    intl3 = tmp2(tmp3[29]).intl;
    obj22 = { onGoToSettings: callback1 };
    tmp18Result9 = tmp18(closure_15, obj21);
  }
  items9[1] = tmp18Result9;
  if (!tmp8) {
    let tmp34Result6;
    if (isNullOrEmptyResult) {
      tmp34Result6 = tmp18Result;
    }
    const obj23 = { children: items9 };
    items9[2] = tmp34Result6;
    return closure_11(closure_12, obj23);
  }
  let tmp34Result = tmp8;
  const obj24 = { style: tmp.card, children: items11 };
  if (tmp34Result) {
    const obj25 = { children: items10 };
    const obj26 = { badge, viewerBadge };
    items10 = [closure_10(tmp6(tmp3[31]), obj26), ];
    const obj27 = { style: tmp.divider };
    items10[1] = closure_10(closure_4, obj27);
    tmp34Result = tmp34(tmp35, obj25);
  }
  items11 = [tmp34Result, , , , ];
  let tmp34Result4 = tmp25;
  if (!isNullOrEmptyResult) {
    let tmp18Result10 = isLegacyDisplayBadgeResult;
    const obj28 = { style: tmp.descriptionGroup, children: items12 };
    if (tmp18Result10) {
      const obj29 = { variant: "text-sm/medium", color: "text-subtle", children: intl4.string(badge(isViewingOtherUser[29]).t["/Gmn3f"]) };
      const Text3 = tmp2(tmp3[13]).Text;
      intl4 = tmp2(tmp3[29]).intl;
      tmp18Result10 = tmp18(Text3, obj29);
    }
    items12 = [tmp18Result10, ];
    const obj30 = { variant: "text-md/medium", color: "text-default", children: badgeDescriptionText };
    items12[1] = closure_10(badge(isViewingOtherUser[13]).Text, obj30);
    tmp34Result4 = tmp34(tmp36, obj28);
  }
  items11[1] = tmp34Result4;
  let tmp18Result11 = tmp25;
  if (!isNullOrEmptyResult) {
    tmp18Result11 = null != badgeDetailsCta;
  }
  if (tmp18Result11) {
    tmp18Result11 = isViewerOwnershipKnown;
  }
  if (tmp18Result11) {
    const obj31 = { variant: tmp2Result20.getBadgeCtaVariant(obj32), size: "md", onPress: callback, text: badgeDetailsCta.ctaLabel(obj33) };
    const Button = tmp2(tmp3[32]).Button;
    obj32 = { isNitro, isViewerOnUpgradeableNitro: result, viewerOwnsBadge: flag };
    obj33 = { owned: flag, isViewerOnUpgradeableNitro: result };
    tmp2Result20 = badge(isViewingOtherUser[19]);
    tmp18Result11 = tmp18(Button, obj31);
  }
  items11[2] = tmp18Result11;
  if (tmp34Result5) {
    let tmp18Result12 = !tmp8 && tmp25;
    if (tmp18Result12) {
      const obj34 = { style: tmp.divider };
      tmp18Result12 = tmp18(tmp36, obj34);
    }
    const obj35 = { children: items13 };
    items13 = [tmp18Result12, ];
    const obj36 = { badge: tmp30, isViewingOtherUser, targetUsername, isViewerOnUpgradeableNitro: result };
    items13[1] = closure_10(displayedUserId(isViewingOtherUser[33]), obj36);
    tmp34Result5 = tmp34(tmp35, obj35);
  }
  items11[3] = tmp34Result5;
  items11[4] = tmp18Result;
  tmp34Result6 = tmp34(tmp36, obj24);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((badgeId) => {
  let isViewingOtherUser;
  let tmp10;
  let tmp6;
  let tmp7;
  let tmp = badgeId;
  const tmp2 = isViewingOtherUser;
  let obj = badgeId(isViewingOtherUser[11]);
  const cResult = obj.c(48);
  badgeId = badgeId.badgeId;
  const displayedUserId = badgeId.displayedUserId;
  isViewingOtherUser = badgeId.isViewingOtherUser;
  closure_13();
  const bound = Math.max(displayedUserId(isViewingOtherUser[34])().bottom, closure_9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    cResult[0] = 4;
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class T {
      constructor() {
        currentUser = closure_1_6.getCurrentUser();
        id = undefined;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return id;
      }
    }
    cResult[1] = items;
    cResult[2] = T;
    tmp7 = T;
    tmp6 = items;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(tmp2[14]);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [BadgeDirectoryStore];
    class T {
      constructor() {
        currentUser = closure_1_6.getCurrentUser();
        id = undefined;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return id;
      }
    }
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === badgeId) {
    let tmp12;
    let tmp13;
    let tmp15;
    if (cResult[5] === displayedUserId) {
      tmp12 = cResult[6];
      tmp13 = cResult[7];
    }
    const tmpResult4 = tmp(tmp2[14]);
    const stateFromStores1 = tmpResult4.useStateFromStores(tmp10, tmp12, tmp13);
    class T {
      constructor() {
        currentUser = closure_1_6.getCurrentUser();
        id = undefined;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return id;
      }
    }
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [BadgeDirectoryStore];
      class T {
        constructor() {
          currentUser = closure_1_6.getCurrentUser();
          id = undefined;
          if (currentUser != null) {
            id = currentUser.id;
          }
          return id;
        }
      }
      cResult[8] = items2;
      tmp15 = items2;
    } else {
      tmp15 = cResult[8];
    }
    if (cResult[9] === badgeId) {
      let tmp17;
      let tmp18;
      let tmp20;
      if (cResult[10] === stateFromStores) {
        tmp17 = cResult[11];
        tmp18 = cResult[12];
      }
      const tmpResult5 = tmp(tmp2[14]);
      const stateFromStores2 = tmpResult5.useStateFromStores(tmp15, tmp18, tmp17);
      class T {
        constructor() {
          currentUser = closure_1_6.getCurrentUser();
          id = undefined;
          if (currentUser != null) {
            id = currentUser.id;
          }
          return id;
        }
      }
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [BadgeDirectoryStore];
        class T {
          constructor() {
            currentUser = closure_1_6.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[13] = items3;
        tmp20 = items3;
      } else {
        tmp20 = cResult[13];
      }
      if (cResult[14] === stateFromStores) {
        let tmp22;
        let tmp23;
        if (cResult[15] === isViewingOtherUser) {
          tmp22 = cResult[16];
          tmp23 = cResult[17];
        }
        const tmpResult6 = tmp(tmp2[14]);
        const stateFromStores3 = tmpResult6.useStateFromStores(tmp20, tmp22, tmp23);
        class T {
          constructor() {
            currentUser = closure_1_6.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        class L {
          constructor() {
            tmp = isViewingOtherUser;
            if (tmp) {
              tmp2 = closure_3;
              tmp3 = null;
              tmp = null != closure_3;
            }
            if (tmp) {
              tmp4 = closure_7;
              tmp5 = closure_3;
              if (!closure_7.hasCatalogFor(closure_3)) {
                tmp6 = closure_0;
                tmp7 = closure_2;
                obj = closure_0(closure_2[35]);
                badgeDirectory = obj.fetchBadgeDirectory(tmp5);
              }
            }
            return;
          }
        }
        const items4 = [stateFromStores, ];
        class P {
          constructor() {
            tmp = !isViewingOtherUser;
            if (isViewingOtherUser) {
              tmp3 = null;
              hasCatalogForResult = null != closure_3;
              if (hasCatalogForResult) {
                tmp5 = closure_7;
                hasCatalogForResult = closure_7.hasCatalogFor(tmp2);
              }
              tmp = hasCatalogForResult;
            }
            return tmp;
          }
        }
        cResult[18] = stateFromStores;
        cResult[19] = isViewingOtherUser;
        cResult[20] = L;
        cResult[21] = items4;
      }
      class P {
        constructor() {
          tmp = !isViewingOtherUser;
          if (isViewingOtherUser) {
            tmp3 = null;
            hasCatalogForResult = null != closure_3;
            if (hasCatalogForResult) {
              tmp5 = closure_7;
              hasCatalogForResult = closure_7.hasCatalogFor(tmp2);
            }
            tmp = hasCatalogForResult;
          }
          return tmp;
        }
      }
      const items5 = [stateFromStores, isViewingOtherUser];
      cResult[14] = stateFromStores;
      cResult[15] = isViewingOtherUser;
      cResult[16] = P;
      cResult[17] = items5;
      tmp23 = items5;
      tmp22 = P;
    }
    class C {
      constructor() {
        badgeById = undefined;
        if (null != closure_3) {
          tmp3 = closure_7;
          tmp4 = badgeId;
          badgeById = closure_7.getBadgeById(badgeId, tmp);
        }
        return badgeById;
      }
    }
    const items6 = [badgeId, stateFromStores];
    cResult[9] = badgeId;
    cResult[10] = stateFromStores;
    cResult[11] = items6;
    cResult[12] = C;
    tmp18 = C;
    tmp17 = items6;
  }
  class E {
    constructor() {
      return closure_7.getBadgeById(badgeId, displayedUserId);
    }
  }
  const items7 = [badgeId, displayedUserId];
  cResult[4] = badgeId;
  cResult[5] = displayedUserId;
  cResult[6] = E;
  cResult[7] = items7;
  tmp13 = items7;
  tmp12 = E;
}) : ((badgeId) => {
  let BottomSheetScrollView;
  let items9;
  let obj8;
  let tmp12Result;
  badgeId = badgeId.badgeId;
  const displayedUserId = badgeId.displayedUserId;
  const isViewingOtherUser = badgeId.isViewingOtherUser;
  const targetUsername = badgeId.targetUsername;
  let tmp = closure_13();
  const tmp2 = isViewingOtherUser;
  const sum = Math.max(displayedUserId(isViewingOtherUser[34])().bottom, closure_9) + 4;
  let obj = badgeId(isViewingOtherUser[14]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items1 = [BadgeDirectoryStore];
  const items2 = [badgeId, displayedUserId];
  const obj2 = badgeId(isViewingOtherUser[14]);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId), items2);
  const items3 = [BadgeDirectoryStore];
  const items4 = [badgeId, stateFromStores];
  const obj3 = badgeId(isViewingOtherUser[14]);
  const stateFromStores2 = obj3.useStateFromStores(items3, () => {
    let badgeById;
    if (null != stateFromStores) {
      badgeById = BadgeDirectoryStore.getBadgeById(badgeId, tmp);
    }
    return badgeById;
  }, items4);
  const items5 = [BadgeDirectoryStore];
  const items6 = [stateFromStores, isViewingOtherUser];
  const items7 = [stateFromStores, isViewingOtherUser];
  const obj4 = badgeId(isViewingOtherUser[14]);
  const stateFromStores3 = obj4.useStateFromStores(items5, () => {
    let tmp = !isViewingOtherUser;
    if (isViewingOtherUser) {
      tmp = null != stateFromStores && BadgeDirectoryStore.hasCatalogFor(tmp2);
      const hasCatalogForResult = null != stateFromStores && BadgeDirectoryStore.hasCatalogFor(tmp2);
    }
    return tmp;
  }, items6);
  const effect = stateFromStores.useEffect(() => {
    const tmp = isViewingOtherUser && null != stateFromStores;
    if (tmp) {
      const tmp5 = stateFromStores;
      if (!BadgeDirectoryStore.hasCatalogFor(stateFromStores)) {
        const obj = BadgeDirectoryActionCreators;
        const badgeDirectory = obj.fetchBadgeDirectory(tmp5);
      }
    }
  }, items7);
  const items8 = [badgeId, displayedUserId, isViewingOtherUser];
  const effect1 = stateFromStores.useEffect(() => {
    const badgeById = BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId);
    const tmp = displayedUserId;
    if (null != badgeById) {
      const obj = { actionName: "badge_detail_viewed", badge: badgeById, displayedUserId: tmp, isSociallyNavigated: isViewingOtherUser };
      trackBadgeDirectoryActionDefault(obj);
    }
  }, items8);
  const obj5 = badgeId(isViewingOtherUser[36]);
  const obj6 = { badgeId, enabled: !isViewingOtherUser };
  const dismissBadgeDirectoryBadgeIndicator = obj5.useDismissBadgeDirectoryBadgeIndicator(obj6);
  let name;
  BottomSheet = badgeId(isViewingOtherUser[38]).BottomSheet;
  const tmp4 = badgeId;
  if (stateFromStores1 != null) {
    name = stateFromStores1.name;
  }
  const obj7 = { startExpanded: true, scrollable: true, dismissAccessibilityLabel: name, children: closure_10(BottomSheetScrollView, obj8) };
  obj8 = { contentContainerStyle: items9, children: tmp12Result };
  items9 = [tmp.content, { paddingBottom: sum }];
  tmp12Result = null != stateFromStores1;
  BottomSheetScrollView = tmp4(tmp2[37]).BottomSheetScrollView;
  if (tmp12Result) {
    const obj9 = { badge: stateFromStores1, viewerBadge: stateFromStores2, displayedUserId, isViewingOtherUser, targetUsername, isViewerOwnershipKnown: stateFromStores3 };
    tmp12Result = tmp12(closure_16, obj9);
  }
  return closure_10(BottomSheet, obj7);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/badges/native/BadgeDetailsSheet.tsx");

export default tmp5;
