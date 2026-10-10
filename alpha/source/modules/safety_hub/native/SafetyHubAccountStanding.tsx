// Module ID: 15000
// Function ID: 15001
// Name: SafetyHubAccountStanding
// Dependencies: [32, 19, 17, 1390, 7536, 7512, 21, 7513, 15001, 5092, 587, 558, 576, 1126, 14993, 6867, 6289, 10910, 6295, 6620, 504, 1415, 9014, 1200, 5088, 2]

// Module 15000 (SafetyHubAccountStanding)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6289 */;
import CircleXIcon from "CircleXIcon" /* 6295 */;
import AssetRegistryDefault from "AssetRegistry" /* 6620 */;
import CircleCheckIcon from "CircleCheckIcon" /* 6867 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7512 */;
import SafetyHubModels from "SafetyHubModels" /* 7513 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10910 */;
import SafetyHubAccountStandingLabels from "SafetyHubAccountStandingLabels" /* 14993 */;
import SafetyHubAccountStandingSubwayMarker from "SafetyHubAccountStandingSubwayMarker" /* 15001 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import SafetyHubStore from "SafetyHubStore" /* 7536 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const SafetyHubAccountStandingSubwayMarkerDefault = SafetyHubAccountStandingSubwayMarker;

let c10;
let c9;
let items;
let items1;
let items2;
let items3;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj16;
let obj17;
let obj18;
let size;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const SafetyHubLinks = SafetyHubConstants.SafetyHubLinks;
({ jsx: c9, jsxs: c10 } = Fragment);
let c11 = 20;
let obj = { [SafetyHubModels.AccountStandingState.ALL_GOOD]: { left: "0%" } };
let obj2 = { left: "25%", transform: items };
let obj3 = { translateX: -0.5 * SafetyHubAccountStandingSubwayMarker.SUBWAY_MARKER_WIDTH };
let LIMITED = SafetyHubModels.AccountStandingState.LIMITED;
items = [obj3];
obj[LIMITED] = obj2;
let obj4 = { left: "50%", transform: items1 };
let obj5 = { translateX: -0.5 * SafetyHubAccountStandingSubwayMarker.SUBWAY_MARKER_WIDTH };
let VERY_LIMITED = SafetyHubModels.AccountStandingState.VERY_LIMITED;
items1 = [obj5];
obj[VERY_LIMITED] = obj4;
let obj6 = { left: "75%", transform: items2 };
let obj7 = { translateX: -0.5 * SafetyHubAccountStandingSubwayMarker.SUBWAY_MARKER_WIDTH };
let AT_RISK = SafetyHubModels.AccountStandingState.AT_RISK;
items2 = [obj7];
obj[AT_RISK] = obj6;
let obj8 = { left: "100%", transform: items3 };
let obj9 = { translateX: -SafetyHubAccountStandingSubwayMarker.SUBWAY_MARKER_WIDTH };
let SUSPENDED = SafetyHubModels.AccountStandingState.SUSPENDED;
items3 = [obj9];
obj[SUSPENDED] = obj8;
let createStyles = createStyles_mod;
let obj10 = { container: obj11, avatarBackground: obj12, good: obj13, limited: obj14, veryLimited: { color: "#FF7A00" }, atRisk: obj15, suspended: obj16, body: { display: "flex", rowGap: 40, width: "100%" }, bodyText: obj17, health: { position: "relative", left: 0, right: 0, marginBottom: 18 }, line: size, subwayMarker: { position: "absolute" }, icon: obj18 };
obj11 = { display: "flex", flexDirection: "column", rowGap: 12, padding: 24, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.md };
createStyles = createStyles.createStyles;
obj12 = { position: "relative", justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.round };
obj13 = { color: nativeDefault.colors.STATUS_POSITIVE };
obj14 = { color: nativeDefault.colors.STATUS_WARNING };
obj15 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
obj16 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
obj17 = { rowGap: nativeDefault.space.PX_8 };
size = { height: 3, width: "100%", position: "absolute", top: 8.5, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj18 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_13 = createStyles(obj10);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function SafetyHubAccountStanding() {
  let body;
  let bodyText;
  let closure_2;
  let closure_3;
  let closure_4;
  let currentUser;
  let description;
  let first;
  let first1;
  let items1;
  let items2;
  let items3;
  let items5;
  let style;
  let title;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp16;
  let tmp18;
  let tmp20;
  let tmp22;
  let tmp24;
  let tmp26;
  let tmp28;
  let tmp = first;
  const tmp2 = dependencyMap;
  obj = first(576);
  const cResult = obj.c(74);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const accountStanding = SafetyHubStore.getAccountStanding();
    cResult[0] = accountStanding;
    first = accountStanding;
  } else {
    first = cResult[0];
  }
  [first1, dependencyMap] = react.useState(0);
  const tmp9 = closure_13();
  _slicedToArray = tmp9;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    let obj3 = { termsOfService: null, communityGuidelines: null };
    ({ TOS_LINK: obj2.termsOfService, COMMUNITY_GUIDELINES: obj2.communityGuidelines } = SafetyHubLinks);
    const formatResult = intl.format(tmp(1126).t.pEdBD4, obj3);
    cResult[1] = formatResult;
    tmp10 = formatResult;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] !== tmp9.good) {
    let obj4 = { title: tmp(1126).t.uaKrRi, description: tmp10, status: tmp(14993).ACCOUNT_STANDING_SHORT_STATUS[tmp(undefined, 7513).AccountStandingState.ALL_GOOD], style: tmp9.good, CustomIcon: tmp(6867).CircleCheckIcon };
    cResult[2] = tmp9.good;
    cResult[3] = obj4;
    tmp13 = obj4;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult = intl2.string(tmp(1126).t["774juc"]);
    cResult[4] = stringResult;
    tmp14 = stringResult;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== tmp9.limited) {
    const obj5 = { title: tmp(1126).t.epkcmS, description: tmp14, status: tmp(14993).ACCOUNT_STANDING_SHORT_STATUS[tmp(undefined, 7513).AccountStandingState.LIMITED], style: tmp9.limited, CustomIcon: tmp(6289).CircleErrorIcon, iconSource: first1(10910) };
    cResult[5] = tmp9.limited;
    cResult[6] = obj5;
    tmp16 = obj5;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult1 = intl3.string(tmp(1126).t["T/Ufh9"]);
    cResult[7] = stringResult1;
    tmp18 = stringResult1;
  } else {
    tmp18 = cResult[7];
  }
  if (cResult[8] !== tmp9.veryLimited) {
    const obj6 = { title: tmp(1126).t.crzE2X, description: tmp18, status: tmp(14993).ACCOUNT_STANDING_SHORT_STATUS[tmp(undefined, 7513).AccountStandingState.VERY_LIMITED], style: tmp9.veryLimited, CustomIcon: tmp(6289).CircleErrorIcon, iconSource: first1(10910) };
    cResult[8] = tmp9.veryLimited;
    cResult[9] = obj6;
    tmp20 = obj6;
  } else {
    tmp20 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = tmp(1126).intl;
    const stringResult2 = intl4.string(tmp(1126).t["hbH+9S"]);
    cResult[10] = stringResult2;
    tmp22 = stringResult2;
  } else {
    tmp22 = cResult[10];
  }
  if (cResult[11] !== tmp9.atRisk) {
    let obj7 = { title: tmp(1126).t.XRNVzO, description: tmp22, status: tmp(14993).ACCOUNT_STANDING_SHORT_STATUS[tmp(undefined, 7513).AccountStandingState.AT_RISK], style: tmp9.atRisk, CustomIcon: tmp(6289).CircleErrorIcon, iconSource: first1(10910) };
    cResult[11] = tmp9.atRisk;
    cResult[12] = obj7;
    tmp24 = obj7;
  } else {
    tmp24 = cResult[12];
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = tmp(1126).intl;
    const stringResult3 = intl5.string(tmp(1126).t["2liUvt"]);
    cResult[13] = stringResult3;
    tmp26 = stringResult3;
  } else {
    tmp26 = cResult[13];
  }
  if (cResult[14] !== tmp9.suspended) {
    const obj8 = { title: tmp(1126).t.MExFkz, description: tmp26, status: tmp(14993).ACCOUNT_STANDING_SHORT_STATUS[tmp(undefined, 7513).AccountStandingState.SUSPENDED], style: tmp9.suspended, CustomIcon: tmp(6295).CircleXIcon, iconSource: first1(6620) };
    cResult[14] = tmp9.suspended;
    cResult[15] = obj8;
    tmp28 = obj8;
  } else {
    tmp28 = cResult[15];
  }
  if (cResult[16] === tmp28) {
    if (cResult[17] === tmp13) {
      if (cResult[18] === tmp16) {
        if (cResult[19] === tmp20) {
          let tmp30;
          let arr;
          if (cResult[20] === tmp24) {
            tmp30 = cResult[21];
          }
          react = tmp30;
          if (cResult[22] !== tmp30) {
            const _Object = Object;
            const entries = Object.entries(tmp30);
            cResult[22] = tmp30;
            cResult[23] = entries;
            arr = entries;
          } else {
            arr = cResult[23];
          }
          if (cResult[24] === tmp30) {
            if (cResult[25] === first1) {
              if (cResult[26] === tmp9.icon) {
                if (cResult[27] === tmp9.subwayMarker) {
                  let tmp32;
                  let tmp35;
                  let tmp34;
                  let tmp38;
                  if (cResult[28] === arr) {
                    tmp32 = cResult[29];
                  }
                  const _Symbol = Symbol;
                  if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                    let items = [UserStore];
                    const fn = function w() {
                      return currentUser.getCurrentUser();
                    };
                    cResult[30] = items;
                    cResult[31] = fn;
                    tmp35 = fn;
                    tmp34 = items;
                  } else {
                    tmp34 = cResult[30];
                    tmp35 = cResult[31];
                  }
                  const tmpResult = tmp(504);
                  const stateFromStores = tmpResult.useStateFromStores(tmp34, tmp35);
                  if (cResult[32] !== stateFromStores) {
                    let userAvatarSource;
                    if (null != stateFromStores) {
                      const obj10 = first1(1415);
                      userAvatarSource = obj10.getUserAvatarSource(stateFromStores);
                    } else {
                      userAvatarSource = first1(9014);
                    }
                    cResult[32] = stateFromStores;
                    cResult[33] = userAvatarSource;
                    tmp38 = userAvatarSource;
                  } else {
                    tmp38 = cResult[33];
                  }
                  ({ title, description, style } = tmp30[first.state]);
                  let str;
                  const container = tmp9.container;
                  if (stateFromStores != null) {
                    str = stateFromStores.username;
                  }
                  if (str == null) {
                    str = "";
                  }
                  if (cResult[34] === tmp38) {
                    let tmp44;
                    if (cResult[35] === str) {
                      tmp44 = cResult[36];
                    }
                    if (cResult[37] === tmp9.avatarBackground) {
                      let tmp47;
                      let tmp51;
                      let tmp53;
                      if (cResult[38] === tmp44) {
                        tmp47 = cResult[39];
                      }
                      const _Symbol2 = Symbol;
                      ({ body, bodyText } = tmp9);
                      if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj9 = { textAlign: "center" };
                        cResult[40] = obj9;
                        tmp51 = obj9;
                      } else {
                        tmp51 = cResult[40];
                      }
                      if (cResult[41] === style) {
                        let tmp52;
                        let tmp55;
                        let tmp58;
                        let tmp59;
                        if (cResult[42] === title) {
                          tmp52 = cResult[43];
                        }
                        if (cResult[46] !== tmp52) {
                          const obj11 = { variant: "heading-lg/medium", color: "text-default", style: tmp51, children: tmp52 };
                          const tmp57 = closure_9(tmp(5088).Text, obj11);
                          cResult[46] = tmp52;
                          cResult[47] = tmp57;
                          tmp55 = tmp57;
                        } else {
                          tmp55 = cResult[47];
                        }
                        const _Symbol3 = Symbol;
                        if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
                          const obj12 = { textAlign: "center" };
                          cResult[48] = obj12;
                          tmp58 = obj12;
                        } else {
                          tmp58 = cResult[48];
                        }
                        if (cResult[49] !== description) {
                          const obj13 = { variant: "text-sm/medium", color: "text-muted", style: tmp58, children: description };
                          const tmp61 = closure_9(tmp(5088).Text, obj13);
                          cResult[49] = description;
                          cResult[50] = tmp61;
                          tmp59 = tmp61;
                        } else {
                          tmp59 = cResult[50];
                        }
                        if (cResult[51] === tmp9.bodyText) {
                          if (cResult[52] === tmp55) {
                            let tmp62;
                            let tmp66;
                            if (cResult[53] === tmp59) {
                              tmp62 = cResult[54];
                            }
                            if (cResult[55] !== first1) {
                              const obj14 = { height: first1 };
                              cResult[55] = first1;
                              cResult[56] = obj14;
                              tmp66 = obj14;
                            } else {
                              tmp66 = cResult[56];
                            }
                            if (cResult[57] === tmp9.health) {
                              let tmp67;
                              let tmp68;
                              if (cResult[58] === tmp66) {
                                tmp67 = cResult[59];
                              }
                              if (cResult[60] !== tmp9.line) {
                                const obj15 = { style: tmp9.line };
                                const tmp71 = closure_9(style, obj15);
                                cResult[60] = tmp9.line;
                                cResult[61] = tmp71;
                                tmp68 = tmp71;
                              } else {
                                tmp68 = cResult[61];
                              }
                              if (cResult[62] === tmp32) {
                                if (cResult[63] === tmp67) {
                                  let tmp72;
                                  if (cResult[64] === tmp68) {
                                    tmp72 = cResult[65];
                                  }
                                  if (cResult[66] === tmp9.body) {
                                    if (cResult[67] === tmp62) {
                                      let tmp76;
                                      if (cResult[68] === tmp72) {
                                        tmp76 = cResult[69];
                                      }
                                      if (cResult[70] === tmp9.container) {
                                        if (cResult[71] === tmp47) {
                                          let tmp80;
                                          if (cResult[72] === tmp76) {
                                            tmp80 = cResult[73];
                                          }
                                          return tmp80;
                                        }
                                      }
                                      const obj16 = { style: container, children: items1 };
                                      items1 = [tmp47, tmp76];
                                      const tmp83 = closure_10(style, obj16);
                                      cResult[70] = tmp9.container;
                                      cResult[71] = tmp47;
                                      cResult[72] = tmp76;
                                      cResult[73] = tmp83;
                                      tmp80 = tmp83;
                                    }
                                  }
                                  const obj17 = { style: body, children: items2 };
                                  items2 = [tmp62, tmp72];
                                  const tmp79 = closure_10(style, obj17);
                                  cResult[66] = tmp9.body;
                                  cResult[67] = tmp62;
                                  cResult[68] = tmp72;
                                  cResult[69] = tmp79;
                                  tmp76 = tmp79;
                                }
                              }
                              const obj18 = { style: tmp67, children: items3 };
                              items3 = [tmp68, tmp32];
                              const tmp75 = closure_10(style, obj18);
                              cResult[62] = tmp32;
                              cResult[63] = tmp67;
                              cResult[64] = tmp68;
                              cResult[65] = tmp75;
                              tmp72 = tmp75;
                            }
                            const items4 = [tmp9.health, tmp66];
                            cResult[57] = tmp9.health;
                            cResult[58] = tmp66;
                            cResult[59] = items4;
                            tmp67 = items4;
                          }
                        }
                        const obj19 = { style: bodyText, children: items5 };
                        items5 = [tmp55, tmp59];
                        const tmp65 = closure_10(style, obj19);
                        cResult[51] = tmp9.bodyText;
                        cResult[52] = tmp55;
                        cResult[53] = tmp59;
                        cResult[54] = tmp65;
                        tmp62 = tmp65;
                      }
                      if (cResult[44] !== style) {
                        function nt(children, arg1) {
                          obj = { style, variant: "heading-lg/bold", children };
                          return React4(Text_Text.Text, obj, arg1);
                        }
                        cResult[44] = style;
                        cResult[45] = nt;
                        tmp53 = nt;
                      } else {
                        tmp53 = cResult[45];
                      }
                      const intl6 = tmp(1126).intl;
                      const obj20 = { hook: tmp53 };
                      const formatResult1 = intl6.format(title, obj20);
                      cResult[41] = style;
                      cResult[42] = title;
                      cResult[43] = formatResult1;
                      tmp52 = formatResult1;
                    }
                    const obj21 = { style: tmp9.avatarBackground, children: tmp44 };
                    const tmp50 = closure_9(style, obj21);
                    cResult[37] = tmp9.avatarBackground;
                    cResult[38] = tmp44;
                    cResult[39] = tmp50;
                    tmp47 = tmp50;
                  }
                  const obj22 = { source: tmp38, size: tmp(1200).AvatarSizes.XXLARGE, "aria-label": str };
                  const Avatar = tmp(1200).Avatar;
                  const tmp46 = closure_9(Avatar, obj22);
                  cResult[34] = tmp38;
                  cResult[35] = str;
                  cResult[36] = tmp46;
                  tmp44 = tmp46;
                }
              }
            }
          }
          const mapped = arr.map((item, index) => {
            let items;
            let length;
            let obj3;
            let obj4;
            let obj7;
            let tmp4;
            const tmp = _slicedToArray(item, 2);
            const parsed = parseInt(tmp[0]);
            obj = { style: items, children: React4(tmp4, obj3, index) };
            items = [closure_3.subwayMarker, obj[parsed]];
            const CustomIcon = tmp2.CustomIcon;
            obj3 = {
              selectedIcon: React4(CustomIcon, obj4),
              style: null,
              status: null,
              isSelected: parsed === first.state,
              index,
              onLayout(nativeEvent) {
                if (nativeEvent.nativeEvent.layout.height > first1) {
                  closure_1_2(nativeEvent.nativeEvent.layout.height);
                }
              },
              size,
              numOptions: length
            };
            obj4 = { style: obj7, color: tmp[1].style.color };
            obj7 = { width: size, height: size };
            length = Object.keys(closure_4).length;
            tmp4 = SafetyHubAccountStandingSubwayMarkerDefault;
            const merged = Object.assign(closure_3.icon);
            ({ style: obj2.style, status: obj2.status } = tmp[1]);
            return React4(View, obj, index);
          });
          cResult[24] = tmp30;
          cResult[25] = first1;
          cResult[26] = tmp9.icon;
          cResult[27] = tmp9.subwayMarker;
          cResult[28] = arr;
          cResult[29] = mapped;
          tmp32 = mapped;
        }
      }
    }
  }
  const obj23 = {};
  obj23[tmp(7513).AccountStandingState.ALL_GOOD] = tmp13;
  obj23[tmp(7513).AccountStandingState.LIMITED] = tmp16;
  obj23[tmp(7513).AccountStandingState.VERY_LIMITED] = tmp20;
  obj23[tmp(7513).AccountStandingState.AT_RISK] = tmp24;
  obj23[tmp(7513).AccountStandingState.SUSPENDED] = tmp28;
  cResult[16] = tmp28;
  cResult[17] = tmp13;
  cResult[18] = tmp16;
  cResult[19] = tmp20;
  cResult[20] = tmp24;
  cResult[21] = obj23;
  tmp30 = obj23;
}) : (function SafetyHubAccountStanding() {
  let Avatar;
  let closure_2;
  let closure_3;
  let currentUser;
  let description;
  let height;
  let intl;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let memo;
  let obj5;
  let obj9;
  let str;
  let title;
  let userAvatarSource;
  const accountStanding = SafetyHubStore.getAccountStanding();
  [height, dependencyMap] = memo.useState(0);
  let tmp4 = closure_13();
  _slicedToArray = tmp4;
  let items = [tmp4];
  memo = memo.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let obj3;
    obj = {};
    const obj2 = { title: intl7.t.uaKrRi, description: intl.format(intl7.t.pEdBD4, obj3), status: SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.ALL_GOOD], style: closure_3.good, CustomIcon: CircleCheckIcon.CircleCheckIcon };
    const ALL_GOOD = SafetyHubModels.AccountStandingState.ALL_GOOD;
    intl = intl7.intl;
    obj3 = { termsOfService: SafetyHubLinks.TOS_LINK, communityGuidelines: SafetyHubLinks.COMMUNITY_GUIDELINES };
    obj[ALL_GOOD] = obj2;
    const obj4 = { title: intl7.t.epkcmS, description: intl2.string(intl7.t["774juc"]), status: SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.LIMITED], style: closure_3.limited, CustomIcon: CircleErrorIcon.CircleErrorIcon, iconSource: AssetRegistryDefault2 };
    const LIMITED = SafetyHubModels.AccountStandingState.LIMITED;
    intl2 = intl7.intl;
    obj[LIMITED] = obj4;
    const obj5 = { title: intl7.t.crzE2X, description: intl3.string(intl7.t["T/Ufh9"]), status: SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.VERY_LIMITED], style: closure_3.veryLimited, CustomIcon: CircleErrorIcon.CircleErrorIcon, iconSource: AssetRegistryDefault2 };
    const VERY_LIMITED = SafetyHubModels.AccountStandingState.VERY_LIMITED;
    intl3 = intl7.intl;
    obj[VERY_LIMITED] = obj5;
    const obj6 = { title: intl7.t.XRNVzO, description: intl4.string(intl7.t["hbH+9S"]), status: SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.AT_RISK], style: closure_3.atRisk, CustomIcon: CircleErrorIcon.CircleErrorIcon, iconSource: AssetRegistryDefault2 };
    const AT_RISK = SafetyHubModels.AccountStandingState.AT_RISK;
    intl4 = intl7.intl;
    obj[AT_RISK] = obj6;
    const obj7 = { title: intl7.t.MExFkz, description: intl5.string(intl7.t["2liUvt"]), status: SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.SUSPENDED], style: closure_3.suspended, CustomIcon: CircleXIcon.CircleXIcon, iconSource: AssetRegistryDefault };
    const SUSPENDED = SafetyHubModels.AccountStandingState.SUSPENDED;
    intl5 = intl7.intl;
    obj[SUSPENDED] = obj7;
    return obj;
  }, items);
  const items1 = [accountStanding, memo, height, tmp4];
  const memo1 = memo.useMemo(() => {
    let state;
    const entries = Object.entries(memo);
    return entries.map((item, index) => {
      let items;
      let length;
      let obj3;
      let obj4;
      let obj7;
      let tmp;
      let tmp2;
      let tmp4;
      [tmp, tmp2] = item;
      const parsed = parseInt(tmp);
      obj = { style: items, children: closure_2_9(tmp4, obj3, index) };
      items = [closure_1_3.subwayMarker, closure_2_12[parsed]];
      const CustomIcon = tmp2.CustomIcon;
      obj3 = {
        selectedIcon: closure_2_9(CustomIcon, obj4),
        style: null,
        status: null,
        isSelected: parsed === state.state,
        index,
        onLayout(nativeEvent) {
          if (nativeEvent.nativeEvent.layout.height > closure_1_1) {
            closure_1_2(nativeEvent.nativeEvent.layout.height);
          }
        },
        size,
        numOptions: length
      };
      obj4 = { style: obj7, color: tmp2.style.color };
      obj7 = { width: size, height: size };
      length = Object.keys(memo).length;
      tmp4 = first(closure_2[8]);
      const merged = Object.assign(closure_1_3.icon);
      ({ style: obj2.style, status: obj2.status } = tmp2);
      return closure_2_9(style, obj, index);
    });
  }, items1);
  obj = accountStanding(504);
  const items2 = [UserStore];
  const stateFromStores = obj.useStateFromStores(items2, () => currentUser.getCurrentUser());
  if (null != stateFromStores) {
    let obj2 = height(1415);
    userAvatarSource = obj2.getUserAvatarSource(stateFromStores);
  } else {
    userAvatarSource = height(9014);
  }
  const style = tmp13.style;
  let obj3 = { style: tmp4.container, children: items3 };
  let obj4 = { style: tmp4.avatarBackground, children: closure_9(Avatar, obj5) };
  ({ title, description } = memo[accountStanding.state]);
  obj5 = { source: userAvatarSource, size: accountStanding(1200).AvatarSizes.XXLARGE, "aria-label": str };
  Avatar = tmp7(1200).Avatar;
  str = undefined;
  if (stateFromStores != null) {
    str = stateFromStores.username;
  }
  if (str == null) {
    str = "";
  }
  items3 = [closure_9(style, obj4), ];
  let obj6 = { style: tmp4.body, children: items5 };
  let obj7 = { style: tmp4.bodyText, children: items4 };
  const obj8 = { variant: "heading-lg/medium", color: "text-default", style: { textAlign: "center" }, children: intl.format(title, obj9) };
  const Text = tmp7(5088).Text;
  intl = tmp7(1126).intl;
  obj9 = {
    hook(children, arg1) {
      obj = { style, variant: "heading-lg/bold", children };
      return React4(Text_Text.Text, obj, arg1);
    }
  };
  items4 = [closure_9(Text, obj8), closure_9(accountStanding(5088).Text, { variant: "text-sm/medium", color: "text-muted", style: { textAlign: "center" }, children: description })];
  items5 = [closure_10(style, obj7), ];
  const obj10 = { style: items6, children: items7 };
  items6 = [tmp4.health, { height }];
  items7 = [, ];
  const obj11 = { style: tmp4.line };
  items7[0] = closure_9(style, obj11);
  items7[1] = memo1;
  items5[1] = closure_10(style, obj10);
  items3[1] = closure_10(style, obj6);
  return closure_10(style, obj3);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubAccountStanding.tsx");

export default tmp4;
