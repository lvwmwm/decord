// Module ID: 12735
// Function ID: 12736
// Name: ViewStep
// Dependencies: [19, 12734, 21, 4972, 558, 576, 1502, 12736, 12737, 7901, 7902, 5978, 587, 12738, 5235, 1125, 2403, 8560, 12739, 5245, 2]

// Module 12735 (ViewStep)
import nativeDefault from "native" /* 587 */;
import _modDef2403 from "module_2403" /* 2403 */;
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 12734 */;
import useResolvedGameOrganizationInviteDefault from "useResolvedGameOrganizationInvite" /* 12736 */;
import getGameOrganizationDisplayNounDefault from "getGameOrganizationDisplayNoun" /* 12737 */;
import GameOrganizationIconDefault from "GameOrganizationIcon" /* 12738 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, navigation;

let closure_4;
let hasOwnProperty;
let closure_3 = GameOrganizationJoinModalConstants.GameOrganizationJoinScenes;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ text: { textAlign: "center" }, inlineStack: { width: "auto" } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ViewStep(code) {
  let application;
  let displayNoun;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let maxMembers;
  let memberCount;
  let obj14;
  let obj6;
  let organization;
  const obj = navigation(576);
  const cResult = obj.c(60);
  code = code.code;
  const tmp4 = closure_6();
  const obj2 = navigation(1502);
  navigation = obj2.useNavigation();
  const tmp7 = useResolvedGameOrganizationInviteDefault(code);
  if (null == tmp7) {
    return null;
  } else {
    let tmp20;
    ({ displayNoun, organization, application } = tmp7);
    ({ memberCount, maxMembers } = organization);
    if (cResult[0] === displayNoun) {
      if (cResult[1] === organization.iconUrl) {
        if (cResult[2] === organization.name) {
          let tmp9;
          let tmp10;
          let tmp11;
          let tmp12;
          let tmp13;
          let str;
          let tmp14;
          let tmp15;
          let tmp16;
          let str2;
          let tmp17;
          let tmp18;
          if (cResult[3] === tmp4.text) {
            tmp9 = cResult[4];
            tmp10 = cResult[5];
            tmp11 = cResult[6];
            tmp12 = cResult[7];
            tmp13 = cResult[8];
            str = cResult[9];
            tmp14 = cResult[10];
            tmp15 = cResult[11];
            tmp16 = cResult[12];
            str2 = cResult[13];
            tmp17 = cResult[14];
            tmp18 = cResult[15];
          }
          if (cResult[18] === tmp9) {
            if (cResult[19] === str) {
              if (cResult[20] === tmp14) {
                let tmp24;
                if (cResult[21] === tmp15) {
                  tmp24 = cResult[22];
                }
                if (cResult[23] === tmp10) {
                  if (cResult[24] === tmp16) {
                    if (cResult[25] === str2) {
                      if (cResult[26] === tmp17) {
                        let tmp27;
                        let tmp30;
                        let tmp34;
                        if (cResult[27] === tmp24) {
                          tmp27 = cResult[28];
                        }
                        if (cResult[29] !== application.iconUrl) {
                          const obj3 = { iconUrl: application.iconUrl, size: 16, borderRadius: nativeDefault.radii.xs };
                          const tmp6Result = GameOrganizationIconDefault;
                          const tmp33 = closure_4(tmp6Result, obj3);
                          cResult[29] = application.iconUrl;
                          cResult[30] = tmp33;
                          tmp30 = tmp33;
                        } else {
                          tmp30 = cResult[30];
                        }
                        if (cResult[31] !== application.name) {
                          const obj4 = { variant: "heading-md/medium", children: application.name };
                          const tmp36 = closure_4(navigation(5235).Text, obj4);
                          cResult[31] = application.name;
                          cResult[32] = tmp36;
                          tmp34 = tmp36;
                        } else {
                          tmp34 = cResult[32];
                        }
                        if (cResult[33] === tmp4.inlineStack) {
                          if (cResult[34] === tmp30) {
                            let tmp37;
                            if (cResult[35] === tmp34) {
                              tmp37 = cResult[36];
                            }
                            if (cResult[37] === maxMembers) {
                              if (cResult[38] === memberCount) {
                                if (cResult[39] === (null != memberCount && null != maxMembers)) {
                                  let tmp40;
                                  if (cResult[40] === tmp4.inlineStack) {
                                    tmp40 = cResult[41];
                                  }
                                  if (cResult[42] === tmp37) {
                                    let tmp44;
                                    if (cResult[43] === tmp40) {
                                      tmp44 = cResult[44];
                                    }
                                    if (cResult[45] === tmp11) {
                                      if (cResult[46] === tmp44) {
                                        if (cResult[47] === tmp18) {
                                          let tmp47;
                                          if (cResult[48] === tmp27) {
                                            tmp47 = cResult[49];
                                          }
                                          if (cResult[50] === tmp12) {
                                            let tmp50;
                                            let tmp54;
                                            let tmp56;
                                            if (cResult[51] === tmp47) {
                                              tmp50 = cResult[52];
                                            }
                                            const _Symbol = Symbol;
                                            if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
                                              const intl3 = tmp(1125).intl;
                                              const stringResult = intl3.string(navigation(1125).t["3PatSz"]);
                                              cResult[53] = stringResult;
                                              tmp54 = stringResult;
                                            } else {
                                              tmp54 = cResult[53];
                                            }
                                            if (cResult[54] !== navigation) {
                                              const obj5 = { children: closure_4(navigation(5245).Button, obj6) };
                                              const ModalFooter = tmp(12739).ModalFooter;
                                              obj6 = {
                                                text: tmp54,
                                                size: "lg",
                                                onPress() {
                                                                                              return navigation.navigate(constants.ACCEPT);
                                                                                            }
                                              };
                                              const tmp58 = closure_4(ModalFooter, obj5);
                                              cResult[54] = navigation;
                                              cResult[55] = tmp58;
                                              tmp56 = tmp58;
                                            } else {
                                              tmp56 = cResult[55];
                                            }
                                            if (cResult[56] === tmp13) {
                                              if (cResult[57] === tmp50) {
                                                let tmp59;
                                                if (cResult[58] === tmp56) {
                                                  tmp59 = cResult[59];
                                                }
                                                return tmp59;
                                              }
                                            }
                                            const obj7 = { children: items };
                                            items = [tmp50, tmp56];
                                            const tmp61 = closure_5(tmp13, obj7);
                                            cResult[56] = tmp13;
                                            cResult[57] = tmp50;
                                            cResult[58] = tmp56;
                                            cResult[59] = tmp61;
                                            tmp59 = tmp61;
                                          }
                                          const obj8 = { children: tmp47 };
                                          const tmp52 = closure_4(tmp12, obj8);
                                          cResult[50] = tmp12;
                                          cResult[51] = tmp47;
                                          cResult[52] = tmp52;
                                          tmp50 = tmp52;
                                        }
                                      }
                                    }
                                    const obj9 = { spacing: tmp18, children: items1 };
                                    items1 = [tmp27, tmp44];
                                    const tmp49 = closure_5(tmp11, obj9);
                                    cResult[45] = tmp11;
                                    cResult[46] = tmp44;
                                    cResult[47] = tmp18;
                                    cResult[48] = tmp27;
                                    cResult[49] = tmp49;
                                    tmp47 = tmp49;
                                  }
                                  const obj10 = { direction: "horizontal", align: "center", justify: "center", spacing: nativeDefault.space.PX_16, children: items2 };
                                  const Stack5 = tmp(5978).Stack;
                                  items2 = [tmp37, tmp40];
                                  const tmp46 = closure_5(Stack5, obj10);
                                  cResult[42] = tmp37;
                                  cResult[43] = tmp40;
                                  cResult[44] = tmp46;
                                  tmp44 = tmp46;
                                }
                              }
                            }
                            let tmp41 = tmp8;
                            if (tmp41) {
                              const obj11 = { spacing: nativeDefault.space.PX_4, direction: "horizontal", align: "center", style: tmp4.inlineStack, children: items3 };
                              const Stack4 = tmp(5978).Stack;
                              const obj12 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
                              const GroupIcon = tmp(8560).GroupIcon;
                              items3 = [closure_4(GroupIcon, obj12), ];
                              const obj13 = { variant: "heading-md/medium", children: intl2.formatToPlainString(_modDef2403.VuENGl, obj14) };
                              const Text2 = tmp(5235).Text;
                              intl2 = tmp(1125).intl;
                              obj14 = { count: memberCount, max: maxMembers };
                              items3[1] = closure_4(Text2, obj13);
                              tmp41 = closure_5(Stack4, obj11);
                            }
                            cResult[37] = maxMembers;
                            cResult[38] = memberCount;
                            cResult[39] = null != memberCount && null != maxMembers;
                            cResult[40] = tmp4.inlineStack;
                            cResult[41] = tmp41;
                            tmp40 = tmp41;
                          }
                        }
                        const obj15 = { spacing: nativeDefault.space.PX_4, direction: "horizontal", align: "center", style: tmp4.inlineStack, children: items4 };
                        const Stack3 = tmp(5978).Stack;
                        items4 = [tmp30, tmp34];
                        const tmp39 = closure_5(Stack3, obj15);
                        cResult[33] = tmp4.inlineStack;
                        cResult[34] = tmp30;
                        cResult[35] = tmp34;
                        cResult[36] = tmp39;
                        tmp37 = tmp39;
                      }
                    }
                  }
                }
                const obj16 = { spacing: tmp16, align: str2, children: items5 };
                items5 = [tmp17, tmp24];
                const tmp29 = closure_5(tmp10, obj16);
                cResult[23] = tmp10;
                cResult[24] = tmp16;
                cResult[25] = str2;
                cResult[26] = tmp17;
                cResult[27] = tmp24;
                cResult[28] = tmp29;
                tmp27 = tmp29;
              }
            }
          }
          const obj17 = { variant: str, style: tmp14, children: tmp15 };
          const tmp26 = closure_4(tmp9, obj17);
          cResult[18] = tmp9;
          cResult[19] = str;
          cResult[20] = tmp14;
          cResult[21] = tmp15;
          cResult[22] = tmp26;
          tmp24 = tmp26;
        }
      }
    }
    const obj18 = { displayNoun, lowercase: true };
    const tmp19 = getGameOrganizationDisplayNounDefault(obj18);
    const ModalScreen = tmp(7901).ModalScreen;
    const ModalContent = tmp(7902).ModalContent;
    const Stack = tmp(5978).Stack;
    const PX_24 = tmp6(587).space.PX_24;
    const Stack2 = tmp(5978).Stack;
    const PX_16 = tmp6(587).space.PX_16;
    if (cResult[16] !== organization.iconUrl) {
      const obj19 = { iconUrl: organization.iconUrl, size: 64 };
      const tmp22 = closure_4(GameOrganizationIconDefault, obj19);
      cResult[16] = organization.iconUrl;
      cResult[17] = tmp22;
      tmp20 = tmp22;
    } else {
      tmp20 = cResult[17];
    }
    const Text = tmp(5235).Text;
    const text = tmp4.text;
    const intl = tmp(1125).intl;
    const obj20 = { noun: tmp19, orgName: organization.name };
    const formatToPlainStringResult = intl.formatToPlainString(_modDef2403.gptW7Y, obj20);
    cResult[0] = displayNoun;
    cResult[1] = organization.iconUrl;
    cResult[2] = organization.name;
    cResult[3] = tmp4.text;
    cResult[4] = Text;
    cResult[5] = Stack2;
    cResult[6] = Stack;
    cResult[7] = ModalContent;
    cResult[8] = ModalScreen;
    cResult[9] = "heading-xl/semibold";
    cResult[10] = text;
    cResult[11] = formatToPlainStringResult;
    cResult[12] = PX_16;
    cResult[13] = "center";
    cResult[14] = tmp20;
    cResult[15] = PX_24;
    tmp17 = tmp20;
    tmp18 = PX_24;
    str2 = "center";
    tmp16 = PX_16;
    tmp15 = formatToPlainStringResult;
    tmp14 = text;
    str = "heading-xl/semibold";
    tmp13 = ModalScreen;
    tmp12 = ModalContent;
    tmp11 = Stack;
    tmp10 = Stack2;
    tmp9 = Text;
  }
}) : (function ViewStep(code) {
  let Button;
  let application;
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
  let obj15;
  let obj19;
  let obj7;
  let organization;
  _require = undefined;
  code = code.code;
  const tmp = closure_6();
  const obj = require("useNavigation");
  _require = obj.useNavigation();
  const tmp5 = useResolvedGameOrganizationInviteDefault(code);
  if (null == tmp5) {
    return null;
  } else {
    ({ organization, application } = tmp5);
    ({ memberCount, maxMembers } = organization);
    const obj2 = { displayNoun: tmp5.displayNoun, lowercase: true };
    const tmp7 = getGameOrganizationDisplayNounDefault(obj2);
    const ModalScreen = tmp2(7901).ModalScreen;
    const ModalContent = tmp2(7902).ModalContent;
    const obj3 = { spacing: nativeDefault.space.PX_24, children: items1 };
    const Stack2 = tmp2(5978).Stack;
    const obj4 = { spacing: nativeDefault.space.PX_16, align: "center", children: items };
    const Stack3 = tmp2(5978).Stack;
    const obj5 = { iconUrl: organization.iconUrl, size: 64 };
    items = [closure_4(GameOrganizationIconDefault, obj5), ];
    const obj6 = { variant: "heading-xl/semibold", style: tmp.text, children: intl3.formatToPlainString(_modDef2403.gptW7Y, obj7) };
    const Text2 = tmp2(5235).Text;
    intl3 = tmp2(1125).intl;
    obj7 = { noun: tmp7, orgName: organization.name };
    items[1] = closure_4(Text2, obj6);
    items1 = [closure_5(Stack3, obj4), ];
    const obj8 = { direction: "horizontal", align: "center", justify: "center", spacing: nativeDefault.space.PX_16, children: items3 };
    const Stack4 = tmp2(5978).Stack;
    const obj9 = { spacing: nativeDefault.space.PX_4, direction: "horizontal", align: "center", style: tmp.inlineStack, children: items2 };
    const Stack5 = tmp2(5978).Stack;
    const obj10 = { iconUrl: application.iconUrl, size: 16, borderRadius: nativeDefault.radii.xs };
    const tmp4Result = GameOrganizationIconDefault;
    items2 = [closure_4(tmp4Result, obj10), ];
    const obj11 = { variant: "heading-md/medium", children: application.name };
    items2[1] = closure_4(require("Text/Text").Text, obj11);
    items3 = [closure_5(Stack5, obj9), ];
    let tmp8Result = null != memberCount && null != maxMembers;
    if (tmp8Result) {
      const obj12 = { spacing: nativeDefault.space.PX_4, direction: "horizontal", align: "center", style: tmp.inlineStack, children: items4 };
      const Stack = tmp2(5978).Stack;
      const obj13 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
      const GroupIcon = tmp2(8560).GroupIcon;
      items4 = [closure_4(GroupIcon, obj13), ];
      const obj14 = { variant: "heading-md/medium", children: intl.formatToPlainString(_modDef2403.VuENGl, obj15) };
      const Text = tmp2(5235).Text;
      intl = tmp2(1125).intl;
      obj15 = { count: memberCount, max: maxMembers };
      items4[1] = closure_4(Text, obj14);
      tmp8Result = tmp8(Stack, obj12);
    }
    const obj16 = { children: items5 };
    items3[1] = tmp8Result;
    const obj17 = { children: closure_5(Stack2, obj3) };
    items1[1] = closure_5(Stack4, obj8);
    items5 = [closure_4(ModalContent, obj17), ];
    const obj18 = { children: closure_4(Button, obj19) };
    const ModalFooter = tmp2(12739).ModalFooter;
    obj19 = {
      text: intl2.string(require("intl").t["3PatSz"]),
      size: "lg",
      onPress() {
          return navigation.navigate(constants.ACCEPT);
        }
    };
    Button = tmp2(5245).Button;
    intl2 = tmp2(1125).intl;
    items5[1] = closure_4(ModalFooter, obj18);
    return closure_5(ModalScreen, obj16);
  }
});
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/ViewStep.tsx");

export const ViewStep = tmp4;
