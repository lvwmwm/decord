// Module ID: 10976
// Function ID: 10977
// Name: GatedContent
// Dependencies: [19, 21, 5090, 587, 558, 576, 5915, 5375, 5086, 5373, 5963, 2]

// Module 10976 (GatedContent)
import nativeDefault from "native" /* 587 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 5915 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { container: obj2, title: { textAlign: "center" }, description: { textAlign: "center" }, buttonGroup: { width: "100%", maxWidth: 400 } };
obj2 = { flex: 1, padding: 20, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, textAlign: "center" };
let closure_5 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GatedContent(onDisagree) {
  let agreement;
  let agreementButtonVariant;
  let description;
  let disagreement;
  let disagreementButtonVariant;
  let items;
  let items2;
  let onAgree;
  let subtitle;
  let title;
  let obj = onAgree(onDisagree[5]);
  const cResult = obj.c(45);
  ({ title, subtitle, description, agreement, agreementButtonVariant, disagreement, disagreementButtonVariant, onAgree } = onDisagree);
  onDisagree = onDisagree.onDisagree;
  const modalType = onDisagree.modalType;
  const channelId = onDisagree.channelId;
  const guildId = onDisagree.guildId;
  let str = "primary";
  if (undefined !== agreementButtonVariant) {
    str = agreementButtonVariant;
  }
  let str2 = "secondary";
  if (undefined !== disagreementButtonVariant) {
    str2 = disagreementButtonVariant;
  }
  const tmp4 = closure_5();
  if (cResult[0] === channelId) {
    if (cResult[1] === guildId) {
      let tmp5;
      let tmp6;
      if (cResult[2] === modalType) {
        tmp5 = cResult[3];
        tmp6 = cResult[4];
      }
      const effect = modalType.useEffect(tmp5, tmp6);
      if (cResult[5] === channelId) {
        if (cResult[6] === guildId) {
          if (cResult[7] === modalType) {
            let tmp9;
            if (cResult[8] === onDisagree) {
              tmp9 = cResult[9];
            }
            if (cResult[10] === channelId) {
              if (cResult[11] === guildId) {
                if (cResult[12] === modalType) {
                  let tmp10;
                  if (cResult[13] === onAgree) {
                    tmp10 = cResult[14];
                  }
                  if (cResult[15] === agreement) {
                    if (cResult[16] === str) {
                      if (cResult[17] === tmp10) {
                        let tmp11;
                        if (cResult[18] === onAgree) {
                          tmp11 = cResult[19];
                        }
                        if (cResult[20] === disagreement) {
                          if (cResult[21] === str2) {
                            let tmp15;
                            if (cResult[22] === tmp9) {
                              tmp15 = cResult[23];
                            }
                            if (cResult[24] === tmp4.title) {
                              let tmp19;
                              if (cResult[25] === title) {
                                tmp19 = cResult[26];
                              }
                              if (cResult[27] === description) {
                                let tmp22;
                                if (cResult[28] === tmp4.description) {
                                  tmp22 = cResult[29];
                                }
                                if (cResult[30] === subtitle) {
                                  if (cResult[31] === tmp22) {
                                    let tmp25;
                                    let tmp29;
                                    if (cResult[32] === tmp19) {
                                      tmp25 = cResult[33];
                                    }
                                    if (cResult[34] === tmp11) {
                                      if (cResult[35] === tmp15) {
                                        let tmp28;
                                        if (cResult[36] === ("primary" === str2 && "primary" !== str)) {
                                          tmp28 = cResult[37];
                                        }
                                        if (cResult[38] === tmp4.buttonGroup) {
                                          let tmp30;
                                          if (cResult[39] === tmp28) {
                                            tmp30 = cResult[40];
                                          }
                                          if (cResult[41] === tmp4.container) {
                                            if (cResult[42] === tmp25) {
                                              let tmp33;
                                              if (cResult[43] === tmp30) {
                                                tmp33 = cResult[44];
                                              }
                                              return tmp33;
                                            }
                                          }
                                          const obj2 = { spacing: 16, style: tmp4.container, children: items };
                                          items = [tmp25, tmp30];
                                          const tmp35 = guildId(onAgree(onDisagree[9]).Stack, obj2);
                                          cResult[41] = tmp4.container;
                                          cResult[42] = tmp25;
                                          cResult[43] = tmp30;
                                          cResult[44] = tmp35;
                                          tmp33 = tmp35;
                                        }
                                        const obj3 = { style: tmp4.buttonGroup, children: tmp28 };
                                        const tmp32 = channelId(onAgree(onDisagree[10]).ButtonGroup, obj3);
                                        cResult[38] = tmp4.buttonGroup;
                                        cResult[39] = tmp28;
                                        cResult[40] = tmp32;
                                        tmp30 = tmp32;
                                      }
                                    }
                                    const items1 = [, ];
                                    if ("primary" === str2 && "primary" !== str) {
                                      items1[0] = tmp15;
                                      items1[1] = tmp11;
                                      tmp29 = items1;
                                    } else {
                                      items1[0] = tmp11;
                                      items1[1] = tmp15;
                                      tmp29 = items1;
                                    }
                                    cResult[34] = tmp11;
                                    cResult[35] = tmp15;
                                    cResult[36] = "primary" === str2 && "primary" !== str;
                                    cResult[37] = tmp29;
                                    tmp28 = tmp29;
                                  }
                                }
                                const obj4 = { align: "center", children: items2 };
                                items2 = [tmp19, subtitle, tmp22];
                                const tmp27 = guildId(onAgree(onDisagree[9]).Stack, obj4);
                                cResult[30] = subtitle;
                                cResult[31] = tmp22;
                                cResult[32] = tmp19;
                                cResult[33] = tmp27;
                                tmp25 = tmp27;
                              }
                              const obj5 = { color: "text-muted", variant: "text-md/medium", style: tmp4.description, maxFontSizeMultiplier: 2, children: description };
                              const tmp24 = channelId(onAgree(onDisagree[8]).Text, obj5);
                              cResult[27] = description;
                              cResult[28] = tmp4.description;
                              cResult[29] = tmp24;
                              tmp22 = tmp24;
                            }
                            const obj6 = { variant: "heading-xxl/bold", maxFontSizeMultiplier: 2, style: tmp4.title, children: title };
                            const tmp21 = channelId(onAgree(onDisagree[8]).Heading, obj6);
                            cResult[24] = tmp4.title;
                            cResult[25] = title;
                            cResult[26] = tmp21;
                            tmp19 = tmp21;
                          }
                        }
                        const obj7 = { variant: str2, text: disagreement, onPress: tmp9 };
                        const tmp17 = channelId(onAgree(onDisagree[7]).Button, obj7, "disagree");
                        cResult[20] = disagreement;
                        cResult[21] = str2;
                        cResult[22] = tmp9;
                        cResult[23] = tmp17;
                        tmp15 = tmp17;
                      }
                    }
                  }
                  let tmp13 = null;
                  if (null != agreement) {
                    tmp13 = null;
                    if (null != onAgree) {
                      const obj8 = { variant: str, onPress: tmp10, text: agreement };
                      tmp13 = channelId(tmp(tmp2[7]).Button, obj8, "agree");
                    }
                  }
                  cResult[15] = agreement;
                  cResult[16] = str;
                  cResult[17] = tmp10;
                  cResult[18] = onAgree;
                  cResult[19] = tmp13;
                  tmp11 = tmp13;
                }
              }
            }
            const fn3 = function w() {
              const obj = AgeVerificationAnalyticsUtils;
              const result = obj.trackNsfwSpaceWarningModalClicked(AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
              if (onAgree != null) {
                onAgree();
              }
            };
            cResult[10] = channelId;
            cResult[11] = guildId;
            cResult[12] = modalType;
            cResult[13] = onAgree;
            cResult[14] = fn3;
            tmp10 = fn3;
          }
        }
      }
      const fn2 = function p() {
        const obj = AgeVerificationAnalyticsUtils;
        const result = obj.trackNsfwSpaceWarningModalClicked(AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalCta.NSFW_CHANNEL_DISAGREE_CTA, modalType, channelId, guildId);
        if (onDisagree != null) {
          onDisagree();
        }
      };
      cResult[5] = channelId;
      cResult[6] = guildId;
      cResult[7] = modalType;
      cResult[8] = onDisagree;
      cResult[9] = fn2;
      tmp9 = fn2;
    }
  }
  const fn = function s() {
    const obj = AgeVerificationAnalyticsUtils;
    const result = obj.trackNsfwSpaceWarningModalViewed(modalType, channelId, guildId);
  };
  const items3 = [modalType, channelId, guildId];
  cResult[0] = channelId;
  cResult[1] = guildId;
  cResult[2] = modalType;
  cResult[3] = fn;
  cResult[4] = items3;
  tmp6 = items3;
  tmp5 = fn;
}) : (function GatedContent(onAgree) {
  let agreement;
  let agreementButtonVariant;
  let description;
  let disagreement;
  let disagreementButtonVariant;
  let items3;
  let subtitle;
  let title;
  ({ agreement, agreementButtonVariant } = onAgree);
  ({ title, subtitle, description } = onAgree);
  if (agreementButtonVariant === undefined) {
    agreementButtonVariant = "primary";
  }
  ({ disagreementButtonVariant, disagreement } = onAgree);
  if (disagreementButtonVariant === undefined) {
    disagreementButtonVariant = "secondary";
  }
  onAgree = onAgree.onAgree;
  const onDisagree = onAgree.onDisagree;
  const modalType = onAgree.modalType;
  const channelId = onAgree.channelId;
  const guildId = onAgree.guildId;
  const tmp = closure_5();
  const items = [modalType, channelId, guildId];
  const effect = modalType.useEffect(() => {
    const obj = AgeVerificationAnalyticsUtils;
    const result = obj.trackNsfwSpaceWarningModalViewed(modalType, channelId, guildId);
  }, items);
  const items1 = [onDisagree, modalType, channelId, guildId];
  const items2 = [onAgree, modalType, channelId, guildId];
  const callback = modalType.useCallback(() => {
    const obj = AgeVerificationAnalyticsUtils;
    const result = obj.trackNsfwSpaceWarningModalClicked(AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalCta.NSFW_CHANNEL_DISAGREE_CTA, modalType, channelId, guildId);
    if (onDisagree != null) {
      onDisagree();
    }
  }, items1);
  let tmp5 = null;
  if (null != agreement) {
    tmp5 = null;
    if (null != onAgree) {
      let obj = { variant: agreementButtonVariant, onPress: tmp4, text: agreement };
      tmp5 = channelId(onAgree(onDisagree[7]).Button, obj, "agree");
    }
  }
  const tmp10 = channelId(onAgree(onDisagree[7]).Button, { variant: disagreementButtonVariant, text: disagreement, onPress: callback }, "disagree");
  const obj2 = { spacing: 16, style: tmp.container, children: null };
  const Stack = onAgree(onDisagree[9]).Stack;
  const obj3 = { align: "center", children: items3 };
  const Stack2 = onAgree(onDisagree[9]).Stack;
  items3 = [, , ];
  const obj4 = { variant: "heading-xxl/bold", maxFontSizeMultiplier: 2, style: tmp.title, children: title };
  items3[0] = channelId(onAgree(onDisagree[8]).Heading, obj4);
  items3[1] = subtitle;
  const obj5 = { color: "text-muted", variant: "text-md/medium", style: tmp.description, maxFontSizeMultiplier: 2, children: description };
  items3[2] = channelId(onAgree(onDisagree[8]).Text, obj5);
  const items4 = [guildId(Stack2, obj3), ];
  const obj6 = { style: tmp.buttonGroup, children: null };
  const tmp11 = guildId;
  const tmp9 = channelId;
  if ("primary" === disagreementButtonVariant) {
    let items6;
    if ("primary" !== agreementButtonVariant) {
      const items5 = [tmp10, tmp5];
      items6 = items5;
    }
    obj6.children = items6;
    items4[1] = tmp9(tmp12, obj6);
    obj2.children = items4;
    return tmp11(Stack, obj2);
  }
  items6 = [tmp5, tmp10];
});
let result = size.fileFinishedImporting("components_native/warnings/GatedContent.tsx");

export default tmp3;
