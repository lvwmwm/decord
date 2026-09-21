// Module ID: 12815
// Function ID: 12816
// Name: GatedContent
// Dependencies: [19, 21, 4758, 580, 558, 568, 8689, 4754, 5186, 5188, 5652, 2]

// Module 12815 (GatedContent)
import nativeDefault from "native" /* 580 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8689 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { container: { flex: 1, padding: 20, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, textAlign: "center" }, title: { textAlign: "center" }, description: { textAlign: "center" }, buttonGroup: { width: "100%", maxWidth: 400 } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, padding: 20, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, textAlign: "center" };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/warnings/GatedContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onDisagree) => {
  const cResult = onAgree(onDisagree[5]).c(42);
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
      if (cResult[2] === modalType) {
        let tmp5 = cResult[3];
        let tmp6 = cResult[4];
      }
      const effect = modalType.useEffect(tmp5, tmp6);
      if (cResult[5] === channelId) {
        if (cResult[6] === guildId) {
          if (cResult[7] === modalType) {
            if (cResult[8] === onDisagree) {
              let tmp9 = cResult[9];
            }
            if (cResult[10] === channelId) {
              if (cResult[11] === guildId) {
                if (cResult[12] === modalType) {
                  if (cResult[13] === onAgree) {
                    let tmp10 = cResult[14];
                  }
                  if (cResult[15] === tmp4.title) {
                    if (cResult[16] === title) {
                      let tmp11 = cResult[17];
                    }
                    if (cResult[18] === description) {
                      if (cResult[19] === tmp4.description) {
                        let tmp13 = cResult[20];
                      }
                      if (cResult[21] === subtitle) {
                        if (cResult[22] === tmp11) {
                          if (cResult[23] === tmp13) {
                            let tmp15 = cResult[24];
                          }
                          if (cResult[25] === agreement) {
                            if (cResult[26] === str) {
                              if (cResult[27] === tmp10) {
                                if (cResult[28] === onAgree) {
                                  let tmp17 = cResult[29];
                                }
                                if (cResult[30] === disagreement) {
                                  if (cResult[31] === str2) {
                                    if (cResult[32] === tmp9) {
                                      let tmp20 = cResult[33];
                                    }
                                    if (cResult[34] === tmp4.buttonGroup) {
                                      if (cResult[35] === tmp17) {
                                        if (cResult[36] === tmp20) {
                                          let tmp22 = cResult[37];
                                        }
                                        if (cResult[38] === tmp4.container) {
                                          if (cResult[39] === tmp22) {
                                            if (cResult[40] === tmp15) {
                                              let tmp24 = cResult[41];
                                            }
                                            return tmp24;
                                          }
                                        }
                                        class G {
                                          constructor() {
                                            obj = closure_0(closure_1[6]);
                                            result = obj.trackNsfwSpaceWarningModalClicked(closure_0(closure_1[6]).NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
                                            if (onAgree != null) {
                                              tmp2 = onAgree();
                                            }
                                            return;
                                          }
                                        }
                                        const obj2 = { spacing: 16, style: tmp4.container, children: null };
                                        const items = [tmp15, tmp22];
                                        obj2.children = items;
                                        const tmp25 = guildId(tmp(tmp2[8]).Stack, obj2);
                                        cResult[38] = tmp4.container;
                                        cResult[39] = tmp22;
                                        cResult[40] = tmp15;
                                        cResult[41] = tmp25;
                                        tmp24 = tmp25;
                                      }
                                    }
                                    class G {
                                      constructor() {
                                        obj = closure_0(closure_1[6]);
                                        result = obj.trackNsfwSpaceWarningModalClicked(closure_0(closure_1[6]).NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
                                        if (onAgree != null) {
                                          tmp2 = onAgree();
                                        }
                                        return;
                                      }
                                    }
                                    const obj3 = { style: tmp4.buttonGroup, children: null };
                                    const items1 = [tmp17, tmp20];
                                    obj3.children = items1;
                                    const tmp23 = guildId(tmp(tmp2[10]).ButtonGroup, obj3);
                                    cResult[34] = tmp4.buttonGroup;
                                    cResult[35] = tmp17;
                                    cResult[36] = tmp20;
                                    cResult[37] = tmp23;
                                    tmp22 = tmp23;
                                  }
                                }
                                class G {
                                  constructor() {
                                    obj = closure_0(closure_1[6]);
                                    result = obj.trackNsfwSpaceWarningModalClicked(closure_0(closure_1[6]).NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
                                    if (onAgree != null) {
                                      tmp2 = onAgree();
                                    }
                                    return;
                                  }
                                }
                                const obj4 = { variant: str2, text: disagreement, onPress: tmp9 };
                                const tmp21 = channelId(tmp(tmp2[9]).Button, obj4);
                                cResult[30] = disagreement;
                                cResult[31] = str2;
                                cResult[32] = tmp9;
                                cResult[33] = tmp21;
                                tmp20 = tmp21;
                              }
                            }
                          }
                          class G {
                            constructor() {
                              obj = closure_0(closure_1[6]);
                              result = obj.trackNsfwSpaceWarningModalClicked(closure_0(closure_1[6]).NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
                              if (onAgree != null) {
                                tmp2 = onAgree();
                              }
                              return;
                            }
                          }
                          let tmp18 = null != agreement && null != onAgree;
                          if (tmp18) {
                            const obj5 = { variant: null, onPress: null, text: null };
                            class G {
                              constructor() {
                                obj = closure_0(closure_1[6]);
                                result = obj.trackNsfwSpaceWarningModalClicked(closure_0(closure_1[6]).NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
                                if (onAgree != null) {
                                  tmp2 = onAgree();
                                }
                                return;
                              }
                            }
                            obj5.onPress = tmp10;
                            obj5.text = agreement;
                            tmp18 = channelId(tmp(tmp2[9]).Button, obj5);
                          }
                          cResult[25] = agreement;
                          cResult[26] = str;
                          cResult[27] = tmp10;
                          cResult[28] = onAgree;
                          cResult[29] = tmp18;
                          tmp17 = tmp18;
                        }
                      }
                      class G {
                        constructor() {
                          obj = closure_0(closure_1[6]);
                          result = obj.trackNsfwSpaceWarningModalClicked(closure_0(closure_1[6]).NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
                          if (onAgree != null) {
                            tmp2 = onAgree();
                          }
                          return;
                        }
                      }
                      const obj6 = { align: "center", children: null };
                      const items2 = [tmp11, subtitle, tmp13];
                      obj6.children = items2;
                      const tmp16 = guildId(tmp(tmp2[8]).Stack, obj6);
                      cResult[21] = subtitle;
                      cResult[22] = tmp11;
                      cResult[23] = tmp13;
                      cResult[24] = tmp16;
                      tmp15 = tmp16;
                    }
                    class G {
                      constructor() {
                        obj = closure_0(closure_1[6]);
                        result = obj.trackNsfwSpaceWarningModalClicked(closure_0(closure_1[6]).NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
                        if (onAgree != null) {
                          tmp2 = onAgree();
                        }
                        return;
                      }
                    }
                    const obj7 = { color: "text-muted", variant: "text-md/medium", style: tmp4.description, maxFontSizeMultiplier: 2, children: description };
                    const tmp14 = channelId(tmp(tmp2[7]).Text, obj7);
                    cResult[18] = description;
                    cResult[19] = tmp4.description;
                    cResult[20] = tmp14;
                    tmp13 = tmp14;
                  }
                  class G {
                    constructor() {
                      obj = closure_0(closure_1[6]);
                      result = obj.trackNsfwSpaceWarningModalClicked(closure_0(closure_1[6]).NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
                      if (onAgree != null) {
                        tmp2 = onAgree();
                      }
                      return;
                    }
                  }
                  const obj8 = { variant: "heading-xxl/bold", maxFontSizeMultiplier: 2, style: tmp4.title, children: title };
                  const tmp12 = channelId(tmp(tmp2[7]).Text, obj8);
                  cResult[15] = tmp4.title;
                  cResult[16] = title;
                  cResult[17] = tmp12;
                  tmp11 = tmp12;
                }
              }
            }
            class G {
              constructor() {
                obj = closure_0(closure_1[6]);
                result = obj.trackNsfwSpaceWarningModalClicked(closure_0(closure_1[6]).NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
                if (onAgree != null) {
                  tmp2 = onAgree();
                }
                return;
              }
            }
            cResult[10] = channelId;
            cResult[11] = guildId;
            cResult[12] = modalType;
            cResult[13] = onAgree;
            cResult[14] = G;
            tmp10 = G;
          }
        }
      }
      const fn2 = function p() {
        const result = AgeVerificationAnalyticsUtils.trackNsfwSpaceWarningModalClicked(AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalCta.NSFW_CHANNEL_DISAGREE_CTA, modalType, channelId, guildId);
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
    const result = AgeVerificationAnalyticsUtils.trackNsfwSpaceWarningModalViewed(modalType, channelId, guildId);
  };
  const items3 = [modalType, channelId, guildId];
  cResult[0] = channelId;
  cResult[1] = guildId;
  cResult[2] = modalType;
  cResult[3] = fn;
  cResult[4] = items3;
  tmp6 = items3;
  tmp5 = fn;
}) : ((onAgree) => {
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
    const result = AgeVerificationAnalyticsUtils.trackNsfwSpaceWarningModalViewed(modalType, channelId, guildId);
  }, items);
  const items1 = [onDisagree, modalType, channelId, guildId];
  const items2 = [onAgree, modalType, channelId, guildId];
  const callback = modalType.useCallback(() => {
    const result = AgeVerificationAnalyticsUtils.trackNsfwSpaceWarningModalClicked(AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalCta.NSFW_CHANNEL_DISAGREE_CTA, modalType, channelId, guildId);
    if (onDisagree != null) {
      onDisagree();
    }
  }, items1);
  const callback1 = modalType.useCallback(() => {
    const result = AgeVerificationAnalyticsUtils.trackNsfwSpaceWarningModalClicked(AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
    if (onAgree != null) {
      onAgree();
    }
  }, items2);
  const obj = { spacing: 16, style: tmp.container, children: null };
  const obj2 = { align: "center", children: null };
  const items3 = [channelId(onAgree(onDisagree[7]).Text, { variant: "heading-xxl/bold", maxFontSizeMultiplier: 2, style: tmp.title, children: title }), subtitle, channelId(onAgree(onDisagree[7]).Text, { color: "text-muted", variant: "text-md/medium", style: tmp.description, maxFontSizeMultiplier: 2, children: description })];
  obj2.children = items3;
  const items4 = [guildId(onAgree(onDisagree[8]).Stack, obj2), ];
  const obj5 = { style: tmp.buttonGroup, children: null };
  let tmp8Result = null != agreement;
  if (tmp8Result) {
    tmp8Result = null != onAgree;
  }
  if (tmp8Result) {
    const obj6 = { variant: agreementButtonVariant, onPress: callback1, text: agreement };
    tmp8Result = tmp8(tmp6(tmp7[9]).Button, obj6);
  }
  const items5 = [tmp8Result, channelId(onAgree(onDisagree[9]).Button, { variant: disagreementButtonVariant, text: disagreement, onPress: callback })];
  obj5.children = items5;
  items4[1] = guildId(onAgree(onDisagree[10]).ButtonGroup, obj5);
  obj.children = items4;
  return guildId(onAgree(onDisagree[8]).Stack, obj);
});
