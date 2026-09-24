// Module ID: 13485
// Function ID: 13486
// Name: NameplateProductPreview
// Dependencies: [19, 17, 4782, 21, 4790, 580, 558, 568, 8477, 1974, 1119, 4786, 5230, 8484, 8472, 8564, 504, 4635, 5023, 11238, 11239, 1181, 11250, 5854, 2]

// Module 13485 (NameplateProductPreview)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import native from "native" /* 1181 */;
import utils from "utils" /* 1974 */;
import LinearGradientDefault from "LinearGradient" /* 5230 */;
import TableRow from "TableRow" /* 5854 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8472 */;
import useShopProductItems from "useShopProductItems" /* 8477 */;
import useCurrentUser from "useCurrentUser" /* 8484 */;
import useAvatarDecorationIfNotExpiredDefault from "useAvatarDecorationIfNotExpired" /* 8564 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4782 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { container: { position: "relative", flex: 1, justifyContent: "center", overflow: "hidden" }, memberListContainer: { paddingHorizontal: nativeDefault.space.PX_16 }, memberListTitle: null, memberListGradient: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.memberListTitle = { paddingVertical: nativeDefault.space.PX_8 };
const rect = { position: "absolute", right: 0, left: 0, top: 0, bottom: 0, color: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.memberListGradient = rect;
let closure_8 = createStyles.createStyles(obj2);
fn(558);
let obj4 = { paddingVertical: nativeDefault.space.PX_8 };
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(20);
  ({ previewNameplate, previewAvatarDecoration } = arg0);
  const currentUser = useCurrentUser.useCurrentUser();
  let avatarDecoration;
  if (currentUser != null) {
    avatarDecoration = currentUser.avatarDecoration;
  }
  if (cResult[0] === previewAvatarDecoration) {
    if (cResult[1] === avatarDecoration) {
      let tmp6 = cResult[2];
    }
    let tmp8 = importDefault;
    const tmp9 = useAvatarDecorationIfNotExpiredDefault(tmp6);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [AccessibilityStore];
      const fn = function y() {
        return useReducedMotion.useReducedMotion;
      };
      cResult[3] = items;
      cResult[4] = fn;
      let tmp12 = fn;
      let tmp11 = items;
    } else {
      tmp11 = cResult[3];
      tmp12 = cResult[4];
    }
    const stateFromStores = tmp(504).useStateFromStores(tmp11, tmp12);
    if (cResult[5] !== currentUser) {
      const name = tmp8(4635).getName(currentUser);
      cResult[5] = currentUser;
      cResult[6] = name;
      let id = name;
      const tmp8Result = tmp8(4635);
    } else {
      id = cResult[6];
    }
    if (cResult[7] !== currentUser.id) {
      const obj3 = { userId: currentUser.id };
      cResult[7] = currentUser.id;
      cResult[8] = obj3;
      let tmp16 = obj3;
    } else {
      tmp16 = cResult[8];
    }
    if (null == tmp8(5023)(tmp16)) {
      if (cResult[12] === tmp9) {
        if (cResult[13] === tmp22) {
          if (cResult[14] === currentUser) {
            let tmp23 = cResult[15];
          }
          if (cResult[16] === id) {
            if (cResult[17] === previewNameplate) {
              if (cResult[18] === tmp23) {
                let tmp26 = cResult[19];
              }
              return tmp26;
            }
          }
          const obj4 = { nameplate: previewNameplate, icon: tmp23, label: id, isPreviewRow: true };
          const tmp28 = timestampProducer(tmp(11250).UserNameplateRow, obj4);
          cResult[16] = id;
          cResult[17] = previewNameplate;
          cResult[18] = tmp23;
          cResult[19] = tmp28;
          tmp26 = tmp28;
        }
      }
      const obj5 = { user: currentUser, guildId: "a", size: tmp(1181).AvatarSizes.NORMAL, avatarDecoration: tmp9, animate: !stateFromStores, autoStatusCutout: false, "aria-hidden": false };
      const tmp25 = timestampProducer(tmp(1181).Avatar, obj5);
      cResult[12] = tmp9;
      cResult[13] = !stateFromStores;
      cResult[14] = currentUser;
      cResult[15] = tmp25;
      tmp23 = tmp25;
    } else {
      if (cResult[9] === id) {
      }
      tmp8 = tmp8(11238);
      const obj6 = { userId: currentUser.id, userName: id, effectDisplayType: tmp(11239).EffectDisplayType.STATIC, lineClamp: 1, variant: "text-md/semibold" };
      const tmp20 = timestampProducer(tmp8, obj6);
      cResult[9] = id;
      id = currentUser.id;
      cResult[10] = id;
      cResult[11] = tmp20;
    }
    const tmpResult = tmp(504);
  }
  const profilePreviewValue = ProfileCustomizationUtils.getProfilePreviewValue({ pendingValue: previewAvatarDecoration, userValue: avatarDecoration });
  cResult[0] = previewAvatarDecoration;
  cResult[1] = avatarDecoration;
  cResult[2] = profilePreviewValue;
  tmp6 = profilePreviewValue;
}) : ((arg0) => {
  let currentUser;
  importDefault = undefined;
  let stateFromStores;
  ({ previewNameplate, previewAvatarDecoration } = arg0);
  currentUser = currentUser(stateFromStores[13]).useCurrentUser();
  let obj = currentUser(stateFromStores[13]);
  const tmp5 = require("useAvatarDecorationIfNotExpired");
  const obj3 = { pendingValue: previewAvatarDecoration, userValue: null };
  let avatarDecoration;
  if (currentUser != null) {
    avatarDecoration = currentUser.avatarDecoration;
  }
  obj3.userValue = avatarDecoration;
  const tmp5Result = tmp5(currentUser(stateFromStores[14]).getProfilePreviewValue(obj3));
  importDefault = tmp5Result;
  const obj2 = currentUser(stateFromStores[14]);
  const items = [AccessibilityStore];
  stateFromStores = currentUser(stateFromStores[16]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmpResult = currentUser(stateFromStores[16]);
  const name = require("UserUtils").getName(currentUser);
  let label = name;
  if (null != require("useDisplayNameStyles")(obj4)) {
    const obj5 = { userId: currentUser.id, userName: name, effectDisplayType: tmp(tmp2[20]).EffectDisplayType.STATIC, lineClamp: 1, variant: "text-md/semibold" };
    label = closure_6(tmp4(tmp2[19]), obj5);
    const tmp4Result2 = tmp4(tmp2[19]);
  }
  const items1 = [currentUser, tmp5Result, stateFromStores];
  const icon = noop.useMemo(() => {
    const obj = { user: currentUser, guildId: "a", size: native.AvatarSizes.NORMAL, avatarDecoration, animate: !stateFromStores, autoStatusCutout: false, "aria-hidden": false };
    return timestampProducer(native.Avatar, obj);
  }, items1);
  return closure_6(currentUser(stateFromStores[22]).UserNameplateRow, { nameplate, icon, label, isPreviewRow: true });
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  ({ user, start, end } = arg0);
  if (cResult[0] !== user.avatarSrc) {
    const obj2 = { source: null, size: null, "aria-hidden": true };
    const obj3 = { uri: user.avatarSrc };
    obj2.source = obj3;
    obj2.size = tmp(1181).AvatarSizes.NORMAL;
    const tmp8 = timestampProducer(tmp(1181).Avatar, obj2);
    cResult[0] = user.avatarSrc;
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === (undefined !== end && end)) {
    if (cResult[3] === tmp4) {
      if (cResult[4] === tmp6) {
        if (cResult[5] === user.name) {
          let tmp9 = cResult[6];
        }
        return tmp9;
      }
    }
  }
  const tmp10 = timestampProducer(TableRow.TableRow, { icon: tmp6, label: user.name, start: undefined !== start && start, end: undefined !== end && end });
  cResult[2] = undefined !== end && end;
  cResult[3] = undefined !== start && start;
  cResult[4] = tmp6;
  cResult[5] = user.name;
  cResult[6] = tmp10;
  tmp9 = tmp10;
}) : ((end) => {
  ({ user, start } = end);
  if (start === undefined) {
    start = false;
  }
  let flag = end.end;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { icon: timestampProducer(native.Avatar, { source: { uri: user.avatarSrc }, size: native.AvatarSizes.NORMAL, "aria-hidden": true }), label: user.name, start, end: flag };
  return timestampProducer(TableRow.TableRow, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateProductPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((product) => {
  const cResult = c.c(60);
  const tmp4 = closure_8();
  const shopProductItems = useShopProductItems.useShopProductItems(product.product);
  ({ firstNameplate, firstAvatarDecoration } = shopProductItems);
  if (cResult[0] === firstNameplate) {
    if (cResult[1] === tmp4) {
      let tmp6 = cResult[2];
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
      let tmp9 = cResult[5];
      let tmp10 = cResult[6];
      let tmp11 = cResult[7];
      let tmp12 = cResult[8];
    }
    const _Symbol = Symbol;
    if (tmp12 !== Symbol.for("react.early_return_sentinel")) {
      return tmp12;
    } else {
      if (cResult[10] !== tmp8.mallow) {
        const obj3 = { user: tmp8.mallow, end: true };
        const tmp25 = timestampProducer(closure_10, obj3);
        cResult[10] = tmp8.mallow;
        cResult[11] = tmp25;
        let tmp22 = tmp25;
      } else {
        tmp22 = cResult[11];
      }
      const _Symbol2 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1119).intl;
        const stringResult = intl2.string(tmp(1119).t["yzW/fZ"]);
        cResult[12] = stringResult;
        let tmp26 = stringResult;
      } else {
        tmp26 = cResult[12];
      }
      if (cResult[13] !== tmp4.memberListTitle) {
        const obj4 = { maxFontSizeMultiplier: 2, variant: "text-sm/semibold", accessibilityRole: "header", color: "interactive-text-default", style: tmp4.memberListTitle, children: null };
        const items = [tmp26, " \u2014 3"];
        obj4.children = items;
        const tmp30 = React5(tmp(4786).Text, obj4);
        cResult[13] = tmp4.memberListTitle;
        cResult[14] = tmp30;
        let tmp28 = tmp30;
      } else {
        tmp28 = cResult[14];
      }
      if (cResult[15] !== tmp8.phibi) {
        const obj5 = { user: tmp8.phibi, start: true };
        const tmp34 = timestampProducer(closure_10, obj5);
        cResult[15] = tmp8.phibi;
        cResult[16] = tmp34;
        let tmp31 = tmp34;
      } else {
        tmp31 = cResult[16];
      }
      if (cResult[17] === tmp7) {
        if (cResult[18] === firstAvatarDecoration) {
          let tmp35 = cResult[19];
        }
        if (cResult[20] !== tmp8.locke) {
          const obj6 = { user: tmp8.locke, end: true };
          const tmp42 = timestampProducer(closure_10, obj6);
          cResult[20] = tmp8.locke;
          cResult[21] = tmp42;
          let tmp39 = tmp42;
        } else {
          tmp39 = cResult[21];
        }
        const _Symbol3 = Symbol;
        if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1119).intl;
          const stringResult1 = intl3.string(tmp(1119).t["NG43/6"]);
          cResult[22] = stringResult1;
          let tmp43 = stringResult1;
        } else {
          tmp43 = cResult[22];
        }
        if (cResult[23] !== tmp4.memberListTitle) {
          const obj7 = { maxFontSizeMultiplier: 2, variant: "text-sm/semibold", accessibilityRole: "header", color: "interactive-text-default", style: tmp4.memberListTitle, children: null };
          const items1 = [tmp43, " \u2014 12"];
          obj7.children = items1;
          const tmp47 = React5(tmp(4786).Text, obj7);
          cResult[23] = tmp4.memberListTitle;
          cResult[24] = tmp47;
          let tmp45 = tmp47;
        } else {
          tmp45 = cResult[24];
        }
        if (cResult[25] !== tmp8.boom) {
          const obj8 = { user: tmp8.boom, start: true };
          const tmp51 = timestampProducer(closure_10, obj8);
          cResult[25] = tmp8.boom;
          cResult[26] = tmp51;
          let tmp48 = tmp51;
        } else {
          tmp48 = cResult[26];
        }
        if (cResult[27] === tmp4.memberListContainer) {
          if (cResult[28] === tmp31) {
            if (cResult[29] === tmp35) {
              if (cResult[30] === tmp39) {
                if (cResult[31] === tmp45) {
                  if (cResult[32] === tmp48) {
                    if (cResult[33] === tmp22) {
                      if (cResult[34] === tmp28) {
                        let tmp52 = cResult[35];
                      }
                      const _Symbol4 = Symbol;
                      if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                        const point = { x: 0, y: 0 };
                        const point1 = { x: 0, y: 0.4 };
                        cResult[36] = point;
                        cResult[37] = point1;
                        let tmp57 = point1;
                        let tmp56 = point;
                      } else {
                        tmp56 = cResult[36];
                        tmp57 = cResult[37];
                      }
                      const _HermesInternal = HermesInternal;
                      const combined = "" + tmp4.memberListGradient.color + "00";
                      if (cResult[38] === tmp4.memberListGradient.color) {
                        if (cResult[39] === combined) {
                          let tmp59 = cResult[40];
                        }
                        if (cResult[41] === tmp4.memberListGradient) {
                          if (cResult[42] === tmp59) {
                            let tmp60 = cResult[43];
                          }
                          const _Symbol5 = Symbol;
                          if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                            const point2 = { x: 0, y: 0.6 };
                            const point3 = { x: 0, y: 1 };
                            cResult[44] = point2;
                            cResult[45] = point3;
                            let tmp65 = point3;
                            let tmp64 = point2;
                          } else {
                            tmp64 = cResult[44];
                            tmp65 = cResult[45];
                          }
                          const _HermesInternal2 = HermesInternal;
                          const combined1 = "" + tmp4.memberListGradient.color + "00";
                          if (cResult[46] === tmp4.memberListGradient.color) {
                            if (cResult[47] === combined1) {
                              let tmp67 = cResult[48];
                            }
                            if (cResult[49] === tmp4.memberListGradient) {
                              if (cResult[50] === tmp67) {
                                let tmp68 = cResult[51];
                              }
                              if (cResult[52] === tmp6) {
                                if (cResult[53] === tmp9) {
                                  if (cResult[54] === tmp52) {
                                    if (cResult[55] === tmp10) {
                                      if (cResult[56] === tmp60) {
                                        if (cResult[57] === tmp68) {
                                          if (cResult[58] === tmp11) {
                                            let tmp72 = cResult[59];
                                          }
                                          return tmp72;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const obj9 = { style: tmp9, pointerEvents: tmp10, accessibilityLabel: tmp11, accessibilityRole: "image", accessible: true, children: null };
                              const items2 = [tmp52, tmp60, tmp68];
                              obj9.children = items2;
                              const tmp74 = React5(tmp6, obj9);
                              cResult[52] = tmp6;
                              cResult[53] = tmp9;
                              cResult[54] = tmp52;
                              cResult[55] = tmp10;
                              cResult[56] = tmp60;
                              cResult[57] = tmp68;
                              cResult[58] = tmp11;
                              cResult[59] = tmp74;
                              tmp72 = tmp74;
                            }
                            const obj10 = { style: tmp4.memberListGradient, start: tmp64, end: tmp65, colors: tmp67 };
                            const tmp71 = timestampProducer(LinearGradientDefault, obj10);
                            cResult[49] = tmp4.memberListGradient;
                            cResult[50] = tmp67;
                            cResult[51] = tmp71;
                            tmp68 = tmp71;
                          }
                          const items3 = [combined1, tmp4.memberListGradient.color];
                          cResult[46] = tmp4.memberListGradient.color;
                          cResult[47] = combined1;
                          cResult[48] = items3;
                          tmp67 = items3;
                        }
                        const obj11 = { style: tmp4.memberListGradient, start: tmp56, end: tmp57, colors: tmp59 };
                        const tmp63 = timestampProducer(LinearGradientDefault, obj11);
                        cResult[41] = tmp4.memberListGradient;
                        cResult[42] = tmp59;
                        cResult[43] = tmp63;
                        tmp60 = tmp63;
                      }
                      const items4 = [tmp4.memberListGradient.color, combined];
                      cResult[38] = tmp4.memberListGradient.color;
                      cResult[39] = combined;
                      cResult[40] = items4;
                      tmp59 = items4;
                    }
                  }
                }
              }
            }
          }
        }
        const obj12 = { style: tmp4.memberListContainer, children: null };
        const items5 = [tmp22, tmp28, tmp31, tmp35, tmp39, tmp45, tmp48];
        obj12.children = items5;
        const tmp55 = React5(View, obj12);
        cResult[27] = tmp4.memberListContainer;
        cResult[28] = tmp31;
        cResult[29] = tmp35;
        cResult[30] = tmp39;
        cResult[31] = tmp45;
        cResult[32] = tmp48;
        cResult[33] = tmp22;
        cResult[34] = tmp28;
        cResult[35] = tmp55;
        tmp52 = tmp55;
      }
      const obj13 = { previewNameplate: tmp7, previewAvatarDecoration: firstAvatarDecoration };
      const tmp38 = timestampProducer(closure_9, obj13);
      cResult[17] = tmp7;
      cResult[18] = firstAvatarDecoration;
      cResult[19] = tmp38;
      tmp35 = tmp38;
    }
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  const nameplateData = utils.getNameplateData(firstNameplate);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const nameplateSampleUsers = tmp(1974).getNameplateSampleUsers();
    cResult[9] = nameplateSampleUsers;
    let tmp15 = nameplateSampleUsers;
    const tmpResult2 = tmp(1974);
  } else {
    tmp15 = cResult[9];
  }
  let tmp17 = null;
  let formatToPlainStringResult;
  let str;
  let container;
  let tmp20;
  if (null != nameplateData) {
    tmp20 = View;
    container = tmp4.container;
    const intl = tmp(1119).intl;
    const obj14 = { a11y_text: nameplateData.imgAlt };
    formatToPlainStringResult = intl.formatToPlainString(tmp(1119).t.YJig7C, obj14);
    str = "box-none";
    tmp17 = forResult;
  }
  cResult[0] = firstNameplate;
  cResult[1] = tmp4;
  cResult[2] = tmp20;
  cResult[3] = nameplateData;
  cResult[4] = tmp15;
  cResult[5] = container;
  cResult[6] = str;
  cResult[7] = formatToPlainStringResult;
  cResult[8] = tmp17;
  tmp12 = tmp17;
  tmp11 = formatToPlainStringResult;
  tmp10 = str;
  tmp9 = container;
  tmp6 = tmp20;
  tmp8 = tmp15;
  tmp7 = nameplateData;
}) : ((product) => {
  const tmp = closure_8();
  const shopProductItems = useShopProductItems.useShopProductItems(product.product);
  ({ firstNameplate, firstAvatarDecoration } = shopProductItems);
  const nameplateData = utils.getNameplateData(firstNameplate);
  const nameplateSampleUsers = utils.getNameplateSampleUsers();
  let tmp7 = null;
  if (null != nameplateData) {
    const obj4 = { style: tmp.container, pointerEvents: "box-none", accessibilityLabel: null, accessibilityRole: "image", accessible: true, children: null };
    const intl = tmp2(1119).intl;
    const obj5 = { a11y_text: nameplateData.imgAlt };
    obj4.accessibilityLabel = intl.formatToPlainString(tmp2(1119).t.YJig7C, obj5);
    const obj6 = { style: tmp.memberListContainer, children: null };
    const obj7 = { user: nameplateSampleUsers.mallow, end: true };
    const items = [timestampProducer(closure_10, obj7), , , , , , ];
    const obj8 = { maxFontSizeMultiplier: 2, variant: "text-sm/semibold", accessibilityRole: "header", color: "interactive-text-default", style: tmp.memberListTitle, children: null };
    const intl2 = tmp2(1119).intl;
    const items1 = [intl2.string(tmp2(1119).t["yzW/fZ"]), " \u2014 3"];
    obj8.children = items1;
    items[1] = React5(tmp2(4786).Text, obj8);
    const obj9 = { user: nameplateSampleUsers.phibi, start: true };
    items[2] = timestampProducer(closure_10, obj9);
    const obj10 = { previewNameplate: nameplateData, previewAvatarDecoration: firstAvatarDecoration };
    items[3] = timestampProducer(closure_9, obj10);
    const obj11 = { user: nameplateSampleUsers.locke, end: true };
    items[4] = timestampProducer(closure_10, obj11);
    const obj12 = { maxFontSizeMultiplier: 2, variant: "text-sm/semibold", accessibilityRole: "header", color: "interactive-text-default", style: tmp.memberListTitle, children: null };
    const intl3 = tmp2(1119).intl;
    const items2 = [intl3.string(tmp2(1119).t["NG43/6"]), " \u2014 12"];
    obj12.children = items2;
    items[5] = React5(tmp2(4786).Text, obj12);
    const obj13 = { user: nameplateSampleUsers.boom, start: true };
    items[6] = timestampProducer(closure_10, obj13);
    obj6.children = items;
    const items3 = [React5(View, obj6), , ];
    const obj14 = { style: tmp.memberListGradient, start: { x: 0, y: 0 }, end: { x: 0, y: 0.4 }, colors: null };
    const items4 = [tmp.memberListGradient.color, ];
    const _HermesInternal = HermesInternal;
    items4[1] = "" + tmp.memberListGradient.color + "00";
    obj14.colors = items4;
    items3[1] = timestampProducer(LinearGradientDefault, obj14);
    const obj15 = { style: tmp.memberListGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: null };
    const _HermesInternal2 = HermesInternal;
    const items5 = ["" + tmp.memberListGradient.color + "00", tmp.memberListGradient.color];
    obj15.colors = items5;
    items3[2] = timestampProducer(LinearGradientDefault, obj15);
    obj4.children = items3;
    tmp7 = React5(View, obj4);
  }
  return tmp7;
});
