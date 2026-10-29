// Module ID: 13001
// Function ID: 13002
// Name: ViewStep
// Dependencies: [32, 19, 11122, 13000, 21, 5005, 558, 576, 1503, 13002, 12997, 13003, 7958, 7959, 6015, 587, 13004, 5271, 1125, 2404, 8619, 13005, 13007, 5281, 2]

// Module 13001 (ViewStep)
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11122 */;
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 13000 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, navigation;

let metroImportAll;
let metroImportDefault;
let _slicedToArray = _slicedToArray_mod;
const constants = GameOrganizationInviteConstants.GameOrganizationCharacterMode;
let closure_6 = GameOrganizationJoinModalConstants.GameOrganizationJoinScenes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ text: { textAlign: "center" }, inlineStack: { width: "auto" } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ViewStep(code) {
  let application;
  let closure_1;
  let closure_3;
  let data;
  let displayNoun;
  let error;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let maxMembers;
  let memberCount;
  let obj16;
  let obj7;
  let organization;
  let selectedCharacterId;
  let tmp2 = selectedCharacterId;
  let obj = navigation(selectedCharacterId[7]);
  const cResult = obj.c(82);
  code = code.code;
  const tmp4 = closure_9();
  const obj2 = navigation(selectedCharacterId[8]);
  navigation = obj2.useNavigation();
  const tmp7 = require("useResolvedGameOrganizationInvite")(code);
  let characterMode;
  if (tmp7 != null) {
    characterMode = tmp7.characterMode;
  }
  importDefault = tmp9;
  let tmp11 = null;
  const useGameOrganizationCharacterEligibilityFetch = tmp(tmp2[10]).useGameOrganizationCharacterEligibilityFetch;
  navigation(tmp2[10]);
  if (characterMode === constants.MULTI) {
    tmp11 = code;
  }
  const gameOrganizationCharacterEligibilityFetch = useGameOrganizationCharacterEligibilityFetch(tmp11);
  ({ data, error } = gameOrganizationCharacterEligibilityFetch);
  selectedCharacterId = _slicedToArray(react.useState(null), 2)[0];
  _slicedToArray(react.useState(null), 2);
  if (cResult[0] === data) {
    let tmp16;
    if (cResult[1] === selectedCharacterId) {
      tmp16 = cResult[2];
    }
    _slicedToArray = tmp16;
    if (null == tmp7) {
      return null;
    } else {
      let tmp33;
      ({ displayNoun, organization, application } = tmp7);
      ({ memberCount, maxMembers } = organization);
      if (cResult[3] === displayNoun) {
        if (cResult[4] === organization.iconUrl) {
          if (cResult[5] === organization.name) {
            let tmp19;
            let tmp20;
            let tmp21;
            let tmp22;
            let tmp23;
            let tmp24;
            let tmp25;
            let str;
            let tmp26;
            let tmp27;
            let tmp28;
            let str2;
            let tmp29;
            let tmp30;
            let tmp31;
            if (cResult[6] === tmp4.text) {
              tmp19 = cResult[7];
              tmp20 = cResult[8];
              tmp21 = cResult[9];
              tmp22 = cResult[10];
              tmp23 = cResult[11];
              tmp24 = cResult[12];
              tmp25 = cResult[13];
              str = cResult[14];
              tmp26 = cResult[15];
              tmp27 = cResult[16];
              tmp28 = cResult[17];
              str2 = cResult[18];
              tmp29 = cResult[19];
              tmp30 = cResult[20];
              tmp31 = cResult[21];
            }
            if (cResult[24] === tmp19) {
              if (cResult[25] === str) {
                if (cResult[26] === tmp26) {
                  let tmp37;
                  if (cResult[27] === tmp27) {
                    tmp37 = cResult[28];
                  }
                  if (cResult[29] === tmp20) {
                    if (cResult[30] === tmp37) {
                      if (cResult[31] === tmp28) {
                        if (cResult[32] === str2) {
                          let tmp40;
                          let tmp43;
                          let tmp47;
                          if (cResult[33] === tmp29) {
                            tmp40 = cResult[34];
                          }
                          if (cResult[35] !== application.iconUrl) {
                            const obj3 = { iconUrl: application.iconUrl, size: 16, borderRadius: require("native").radii.xs };
                            const tmp6Result = require("GameOrganizationIcon");
                            const tmp46 = closure_7(tmp6Result, obj3);
                            cResult[35] = application.iconUrl;
                            cResult[36] = tmp46;
                            tmp43 = tmp46;
                          } else {
                            tmp43 = cResult[36];
                          }
                          if (cResult[37] !== application.name) {
                            const obj4 = { variant: "heading-md/medium", children: application.name };
                            const tmp49 = closure_7(navigation(tmp2[17]).Text, obj4);
                            cResult[37] = application.name;
                            cResult[38] = tmp49;
                            tmp47 = tmp49;
                          } else {
                            tmp47 = cResult[38];
                          }
                          if (cResult[39] === tmp4.inlineStack) {
                            if (cResult[40] === tmp43) {
                              let tmp50;
                              if (cResult[41] === tmp47) {
                                tmp50 = cResult[42];
                              }
                              if (cResult[43] === maxMembers) {
                                if (cResult[44] === memberCount) {
                                  if (cResult[45] === (null != memberCount && null != maxMembers)) {
                                    let tmp53;
                                    if (cResult[46] === tmp4.inlineStack) {
                                      tmp53 = cResult[47];
                                    }
                                    if (cResult[48] === tmp50) {
                                      let tmp57;
                                      if (cResult[49] === tmp53) {
                                        tmp57 = cResult[50];
                                      }
                                      if (cResult[51] === tmp21) {
                                        if (cResult[52] === tmp40) {
                                          if (cResult[53] === tmp57) {
                                            let tmp60;
                                            if (cResult[54] === tmp30) {
                                              tmp60 = cResult[55];
                                            }
                                            if (cResult[56] === data) {
                                              if (cResult[57] === error) {
                                                if (cResult[58] === characterMode === constants.MULTI) {
                                                  if (cResult[59] === tmp25) {
                                                    let tmp63;
                                                    if (cResult[60] === selectedCharacterId) {
                                                      tmp63 = cResult[61];
                                                    }
                                                    if (cResult[62] === tmp22) {
                                                      if (cResult[63] === tmp60) {
                                                        if (cResult[64] === tmp63) {
                                                          let tmp66;
                                                          if (cResult[65] === tmp31) {
                                                            tmp66 = cResult[66];
                                                          }
                                                          if (cResult[67] === tmp23) {
                                                            let tmp69;
                                                            let tmp73;
                                                            if (cResult[68] === tmp66) {
                                                              tmp69 = cResult[69];
                                                            }
                                                            const _Symbol = Symbol;
                                                            if (cResult[70] === Symbol.for("react.memo_cache_sentinel")) {
                                                              const intl3 = tmp(tmp2[18]).intl;
                                                              const stringResult = intl3.string(navigation(tmp2[18]).t["3PatSz"]);
                                                              cResult[70] = stringResult;
                                                              tmp73 = stringResult;
                                                            } else {
                                                              tmp73 = cResult[70];
                                                            }
                                                            if (cResult[71] === characterMode === constants.MULTI) {
                                                              if (cResult[72] === navigation) {
                                                                let tmp76;
                                                                if (cResult[73] === tmp16) {
                                                                  tmp76 = cResult[74];
                                                                }
                                                                if (cResult[75] === (characterMode === constants.MULTI && null == tmp16)) {
                                                                  let tmp77;
                                                                  if (cResult[76] === tmp76) {
                                                                    tmp77 = cResult[77];
                                                                  }
                                                                  if (cResult[78] === tmp24) {
                                                                    if (cResult[79] === tmp69) {
                                                                      let tmp80;
                                                                      if (cResult[80] === tmp77) {
                                                                        tmp80 = cResult[81];
                                                                      }
                                                                      return tmp80;
                                                                    }
                                                                  }
                                                                  const obj5 = { children: items };
                                                                  items = [tmp69, tmp77];
                                                                  const tmp82 = closure_8(tmp24, obj5);
                                                                  cResult[78] = tmp24;
                                                                  cResult[79] = tmp69;
                                                                  cResult[80] = tmp77;
                                                                  cResult[81] = tmp82;
                                                                  tmp80 = tmp82;
                                                                }
                                                                const obj6 = { children: closure_7(navigation(tmp2[23]).Button, obj7) };
                                                                const ModalFooter = tmp(tmp2[22]).ModalFooter;
                                                                obj7 = { text: tmp73, size: "lg", disabled: characterMode === constants.MULTI && null == tmp16, onPress: tmp76 };
                                                                const tmp79 = closure_7(ModalFooter, obj6);
                                                                cResult[75] = characterMode === constants.MULTI && null == tmp16;
                                                                cResult[76] = tmp76;
                                                                cResult[77] = tmp79;
                                                                tmp77 = tmp79;
                                                              }
                                                            }
                                                            function se() {
                                                              let tmp2;
                                                              const navigate = navigation.navigate;
                                                              const ACCEPT = constants.ACCEPT;
                                                              if (closure_1) {
                                                                if (null != closure_3) {
                                                                  tmp2 = { character: tmp3 };
                                                                  const obj = { character: tmp3 };
                                                                }
                                                              }
                                                              return navigate(ACCEPT, tmp2);
                                                            }
                                                            cResult[71] = characterMode === constants.MULTI;
                                                            cResult[72] = navigation;
                                                            cResult[73] = tmp16;
                                                            cResult[74] = se;
                                                            tmp76 = se;
                                                          }
                                                          const obj8 = { children: tmp66 };
                                                          const tmp71 = closure_7(tmp23, obj8);
                                                          cResult[67] = tmp23;
                                                          cResult[68] = tmp66;
                                                          cResult[69] = tmp71;
                                                          tmp69 = tmp71;
                                                        }
                                                      }
                                                    }
                                                    const obj9 = { spacing: tmp31, children: items1 };
                                                    items1 = [tmp60, tmp63];
                                                    const tmp68 = closure_8(tmp22, obj9);
                                                    cResult[62] = tmp22;
                                                    cResult[63] = tmp60;
                                                    cResult[64] = tmp63;
                                                    cResult[65] = tmp31;
                                                    cResult[66] = tmp68;
                                                    tmp66 = tmp68;
                                                  }
                                                }
                                              }
                                            }
                                            let tmp64 = tmp9;
                                            if (tmp64) {
                                              const obj10 = { characters: data, hasError: null != error, selectedCharacterId, onSelect: tmp15, noun: tmp25 };
                                              tmp64 = closure_7(tmp6(tmp2[21]), obj10);
                                            }
                                            cResult[56] = data;
                                            cResult[57] = error;
                                            cResult[58] = characterMode === constants.MULTI;
                                            cResult[59] = tmp25;
                                            cResult[60] = selectedCharacterId;
                                            cResult[61] = tmp64;
                                            tmp63 = tmp64;
                                          }
                                        }
                                      }
                                      const obj11 = { spacing: tmp30, children: items2 };
                                      items2 = [tmp40, tmp57];
                                      const tmp62 = closure_8(tmp21, obj11);
                                      cResult[51] = tmp21;
                                      cResult[52] = tmp40;
                                      cResult[53] = tmp57;
                                      cResult[54] = tmp30;
                                      cResult[55] = tmp62;
                                      tmp60 = tmp62;
                                    }
                                    const obj12 = { direction: "horizontal", align: "center", justify: "center", spacing: require("native").space.PX_16, children: items3 };
                                    const Stack6 = tmp(tmp2[14]).Stack;
                                    items3 = [tmp50, tmp53];
                                    const tmp59 = closure_8(Stack6, obj12);
                                    cResult[48] = tmp50;
                                    cResult[49] = tmp53;
                                    cResult[50] = tmp59;
                                    tmp57 = tmp59;
                                  }
                                }
                              }
                              let tmp54 = tmp18;
                              if (tmp54) {
                                const obj13 = { spacing: require("native").space.PX_4, direction: "horizontal", align: "center", style: tmp4.inlineStack, children: items4 };
                                const Stack5 = tmp(tmp2[14]).Stack;
                                const obj14 = { size: "xs", color: require("native").colors.ICON_MUTED };
                                const GroupIcon = tmp(tmp2[20]).GroupIcon;
                                items4 = [closure_7(GroupIcon, obj14), ];
                                const obj15 = { variant: "heading-md/medium", children: intl2.formatToPlainString(require("module_2404").VuENGl, obj16) };
                                const Text2 = tmp(tmp2[17]).Text;
                                intl2 = tmp(tmp2[18]).intl;
                                obj16 = { count: memberCount, max: maxMembers };
                                items4[1] = closure_7(Text2, obj15);
                                tmp54 = closure_8(Stack5, obj13);
                              }
                              cResult[43] = maxMembers;
                              cResult[44] = memberCount;
                              cResult[45] = null != memberCount && null != maxMembers;
                              cResult[46] = tmp4.inlineStack;
                              cResult[47] = tmp54;
                              tmp53 = tmp54;
                            }
                          }
                          const obj17 = { spacing: require("native").space.PX_4, direction: "horizontal", align: "center", style: tmp4.inlineStack, children: items5 };
                          const Stack4 = tmp(tmp2[14]).Stack;
                          items5 = [tmp43, tmp47];
                          const tmp52 = closure_8(Stack4, obj17);
                          cResult[39] = tmp4.inlineStack;
                          cResult[40] = tmp43;
                          cResult[41] = tmp47;
                          cResult[42] = tmp52;
                          tmp50 = tmp52;
                        }
                      }
                    }
                  }
                  const obj18 = { spacing: tmp28, align: str2, children: items6 };
                  items6 = [tmp29, tmp37];
                  const tmp42 = closure_8(tmp20, obj18);
                  cResult[29] = tmp20;
                  cResult[30] = tmp37;
                  cResult[31] = tmp28;
                  cResult[32] = str2;
                  cResult[33] = tmp29;
                  cResult[34] = tmp42;
                  tmp40 = tmp42;
                }
              }
            }
            const obj19 = { variant: str, style: tmp26, children: tmp27 };
            const tmp39 = closure_7(tmp19, obj19);
            cResult[24] = tmp19;
            cResult[25] = str;
            cResult[26] = tmp26;
            cResult[27] = tmp27;
            cResult[28] = tmp39;
            tmp37 = tmp39;
          }
        }
      }
      const obj20 = { displayNoun, lowercase: true };
      const tmp32 = require("getGameOrganizationDisplayNoun")(obj20);
      const ModalScreen = tmp(tmp2[12]).ModalScreen;
      const ModalContent = tmp(tmp2[13]).ModalContent;
      const Stack = tmp(tmp2[14]).Stack;
      const PX_48 = tmp6(tmp2[15]).space.PX_48;
      const Stack2 = tmp(tmp2[14]).Stack;
      const PX_24 = tmp6(tmp2[15]).space.PX_24;
      const Stack3 = tmp(tmp2[14]).Stack;
      const PX_16 = tmp6(tmp2[15]).space.PX_16;
      if (cResult[22] !== organization.iconUrl) {
        const obj21 = { iconUrl: organization.iconUrl, size: 64 };
        const tmp35 = closure_7(require("GameOrganizationIcon"), obj21);
        cResult[22] = organization.iconUrl;
        cResult[23] = tmp35;
        tmp33 = tmp35;
      } else {
        tmp33 = cResult[23];
      }
      const Text = tmp(tmp2[17]).Text;
      const text = tmp4.text;
      const intl = tmp(tmp2[18]).intl;
      const obj22 = { noun: tmp32, orgName: organization.name };
      const formatToPlainStringResult = intl.formatToPlainString(require("module_2404").gptW7Y, obj22);
      cResult[3] = displayNoun;
      cResult[4] = organization.iconUrl;
      cResult[5] = organization.name;
      cResult[6] = tmp4.text;
      cResult[7] = Text;
      cResult[8] = Stack3;
      cResult[9] = Stack2;
      cResult[10] = Stack;
      cResult[11] = ModalContent;
      cResult[12] = ModalScreen;
      cResult[13] = tmp32;
      cResult[14] = "heading-xl/semibold";
      cResult[15] = text;
      cResult[16] = formatToPlainStringResult;
      cResult[17] = PX_16;
      cResult[18] = "center";
      cResult[19] = tmp33;
      cResult[20] = PX_24;
      cResult[21] = PX_48;
      tmp29 = tmp33;
      tmp31 = PX_48;
      tmp30 = PX_24;
      str2 = "center";
      tmp28 = PX_16;
      tmp27 = formatToPlainStringResult;
      tmp26 = text;
      str = "heading-xl/semibold";
      tmp25 = tmp32;
      tmp24 = ModalScreen;
      tmp23 = ModalContent;
      tmp22 = Stack;
      tmp21 = Stack2;
      tmp20 = Stack3;
      tmp19 = Text;
    }
  }
  let found;
  if (data != null) {
    found = data.find((id) => id.id === first);
  }
  cResult[0] = data;
  cResult[1] = selectedCharacterId;
  cResult[2] = found;
  tmp16 = found;
}) : (function ViewStep(code) {
  let application;
  let closure_1;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let maxMembers;
  let memberCount;
  let obj16;
  let obj8;
  let organization;
  code = code.code;
  _require = undefined;
  importDefault = undefined;
  let selectedCharacterId;
  let found;
  const tmp = closure_9();
  let tmp2 = _require;
  const tmp3 = selectedCharacterId;
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  const tmp5 = require("useResolvedGameOrganizationInvite")(code);
  let characterMode;
  if (tmp5 != null) {
    characterMode = tmp5.characterMode;
  }
  let tmp7 = characterMode === constants.MULTI;
  importDefault = tmp7;
  let tmp9 = null;
  const useGameOrganizationCharacterEligibilityFetch = tmp2(tmp3[10]).useGameOrganizationCharacterEligibilityFetch;
  tmp2(tmp3[10]);
  if (tmp7) {
    tmp9 = code;
  }
  const gameOrganizationCharacterEligibilityFetch = useGameOrganizationCharacterEligibilityFetch(tmp9);
  const data = gameOrganizationCharacterEligibilityFetch.data;
  const error = gameOrganizationCharacterEligibilityFetch.error;
  const tmp11 = found(react.useState(null), 2);
  selectedCharacterId = tmp11[0];
  found = undefined;
  const tmp13 = tmp11[1];
  if (data != null) {
    found = data.find((id) => id.id === first);
  }
  if (null == tmp5) {
    return null;
  } else {
    ({ organization, application } = tmp5);
    ({ memberCount, maxMembers } = organization);
    const obj2 = { displayNoun: tmp5.displayNoun, lowercase: true };
    const tmp17 = require("getGameOrganizationDisplayNoun")(obj2);
    const ModalScreen = tmp2(tmp3[12]).ModalScreen;
    const ModalContent = tmp2(tmp3[13]).ModalContent;
    const obj3 = { spacing: require("native").space.PX_48, children: items5 };
    const Stack2 = tmp2(tmp3[14]).Stack;
    const obj4 = { spacing: require("native").space.PX_24, children: items1 };
    const Stack3 = tmp2(tmp3[14]).Stack;
    const obj5 = { spacing: require("native").space.PX_16, align: "center", children: items };
    const Stack4 = tmp2(tmp3[14]).Stack;
    const obj6 = { iconUrl: organization.iconUrl, size: 64 };
    items = [closure_7(tmp4(tmp3[16]), obj6), ];
    const obj7 = { variant: "heading-xl/semibold", style: tmp.text, children: intl3.formatToPlainString(require("module_2404").gptW7Y, obj8) };
    const Text2 = tmp2(tmp3[17]).Text;
    intl3 = tmp2(tmp3[18]).intl;
    obj8 = { noun: tmp17, orgName: organization.name };
    items[1] = closure_7(Text2, obj7);
    items1 = [closure_8(Stack4, obj5), ];
    const obj9 = { direction: "horizontal", align: "center", justify: "center", spacing: require("native").space.PX_16, children: items3 };
    const Stack5 = tmp2(tmp3[14]).Stack;
    const obj10 = { spacing: require("native").space.PX_4, direction: "horizontal", align: "center", style: tmp.inlineStack, children: items2 };
    const Stack6 = tmp2(tmp3[14]).Stack;
    const obj11 = { iconUrl: application.iconUrl, size: 16, borderRadius: require("native").radii.xs };
    const tmp4Result = require("GameOrganizationIcon");
    items2 = [closure_7(tmp4Result, obj11), ];
    const obj12 = { variant: "heading-md/medium", children: application.name };
    items2[1] = closure_7(tmp2(tmp3[17]).Text, obj12);
    items3 = [closure_8(Stack6, obj10), ];
    let tmp18Result = null != memberCount && null != maxMembers;
    if (tmp18Result) {
      const obj13 = { spacing: require("native").space.PX_4, direction: "horizontal", align: "center", style: tmp.inlineStack, children: items4 };
      const Stack = tmp2(tmp3[14]).Stack;
      const obj14 = { size: "xs", color: require("native").colors.ICON_MUTED };
      const GroupIcon = tmp2(tmp3[20]).GroupIcon;
      items4 = [closure_7(GroupIcon, obj14), ];
      const obj15 = { variant: "heading-md/medium", children: intl.formatToPlainString(require("module_2404").VuENGl, obj16) };
      const Text = tmp2(tmp3[17]).Text;
      intl = tmp2(tmp3[18]).intl;
      obj16 = { count: memberCount, max: maxMembers };
      items4[1] = closure_7(Text, obj15);
      tmp18Result = tmp18(Stack, obj13);
    }
    items3[1] = tmp18Result;
    items1[1] = closure_8(Stack5, obj9);
    items5 = [closure_8(Stack3, obj4), ];
    let tmp19Result = tmp7;
    if (tmp19Result) {
      const obj17 = { characters: data, hasError: null != error, selectedCharacterId, onSelect: tmp13, noun: tmp17 };
      tmp19Result = tmp19(tmp4(tmp3[21]), obj17);
    }
    items5[1] = tmp19Result;
    const obj18 = { children: closure_8(Stack2, obj3) };
    const items6 = [closure_7(ModalContent, obj18), ];
    const ModalFooter = tmp2(tmp3[22]).ModalFooter;
    const obj19 = {
      text: intl2.string(tmp2(tmp3[18]).t["3PatSz"]),
      size: "lg",
      disabled: tmp7,
      onPress() {
          let tmp2;
          const navigate = navigation.navigate;
          const ACCEPT = constants.ACCEPT;
          if (closure_1) {
            if (null != found) {
              tmp2 = { character: tmp3 };
              const obj = { character: tmp3 };
            }
          }
          return navigate(ACCEPT, tmp2);
        }
    };
    const Button = tmp2(tmp3[23]).Button;
    intl2 = tmp2(tmp3[18]).intl;
    if (tmp7) {
      tmp7 = null == found;
    }
    const obj20 = { children: items6 };
    const obj21 = { children: closure_7(Button, obj19) };
    items6[1] = closure_7(ModalFooter, obj21);
    return closure_8(ModalScreen, obj20);
  }
});
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/ViewStep.tsx");

export const ViewStep = tmp3;
