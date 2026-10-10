// Module ID: 10627
// Function ID: 10628
// Name: NameplatePreview
// Dependencies: [19, 17, 5081, 2125, 21, 5092, 587, 558, 576, 1990, 6053, 8283, 504, 4962, 5628, 1200, 8373, 9021, 10262, 10263, 5088, 2]

// Module 10627 (NameplatePreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let tmp;
const profile_customization_ProfileCustomizationUtils = tmp(8373);
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  let num2;
  let num = 0;
  if (arg0) {
    num = nativeDefault.radii.sm;
  }
  const obj = { container: { borderRadius: num, padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, nameplate: { borderRadius: num2 }, avatar: { borderRadius: nativeDefault.radii.round, marginRight: nativeDefault.space.PX_8 }, content: { flex: 1, paddingRight: nativeDefault.space.PX_40 } };
  num2 = 0;
  ({ borderRadius: num, padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  if (arg0) {
    num2 = tmp3(587).radii.sm;
  }
  ({ borderRadius: nativeDefault.radii.round, marginRight: nativeDefault.space.PX_8 });
  ({ flex: 1, paddingRight: nativeDefault.space.PX_40 });
  return obj;
});
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function NameplatePreview(arg0) {
  let animate;
  let guildId;
  let hasRoundedCorners;
  let items2;
  let items3;
  let nameplate;
  let nameplateData;
  let pendingAvatarSrc;
  let pendingDisplayNameStyles;
  let pendingGlobalName;
  let tmp4;
  let useReducedMotion;
  let user;
  const tmp = user;
  const obj = user(576);
  const cResult = obj.c(57);
  ({ nameplate, nameplateData, user } = arg0);
  ({ hasRoundedCorners, animate, guildId } = arg0);
  ({ pendingAvatarSrc, pendingDisplayNameStyles, pendingGlobalName, "aria-hidden": tmp4 } = arg0);
  let tmp7 = undefined === hasRoundedCorners;
  const tmp6 = closure_9;
  if (!tmp7) {
    tmp7 = hasRoundedCorners;
  }
  const tmp6Result = tmp6(tmp7);
  if (cResult[0] === nameplate) {
    let tmp9;
    let tmp12;
    let tmp16;
    let tmp15;
    let tmp19;
    if (cResult[1] === nameplateData) {
      tmp9 = cResult[2];
    }
    const tmpResult = tmp(6053);
    const avatarDecoration = tmpResult.useAvatarDecoration(user, guildId);
    if (cResult[3] !== guildId) {
      const obj2 = { guildId };
      cResult[3] = guildId;
      cResult[4] = obj2;
      tmp12 = obj2;
    } else {
      tmp12 = cResult[4];
    }
    const pendingAvatarDecoration = guildId(8283)(tmp12).pendingAvatarDecoration;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [AccessibilityStore];
      const fn = function w() {
        return useReducedMotion.useReducedMotion;
      };
      cResult[5] = items;
      cResult[6] = fn;
      tmp16 = fn;
      tmp15 = items;
    } else {
      tmp15 = cResult[5];
      tmp16 = cResult[6];
    }
    const tmpResult5 = tmp(504);
    const stateFromStores = tmpResult5.useStateFromStores(tmp15, tmp16);
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [GuildMemberStore];
      cResult[7] = items1;
      tmp19 = items1;
    } else {
      tmp19 = cResult[7];
    }
    if (cResult[8] === guildId) {
      let tmp21;
      if (cResult[9] === user) {
        tmp21 = cResult[10];
      }
      const tmpResult6 = tmp(504);
      const stateFromStores1 = tmpResult6.useStateFromStores(tmp19, tmp21);
      const tmp13Result = guildId(4962);
      const name = tmp13Result.useName(user);
      if (pendingGlobalName == null) {
        let tmp25 = name;
        if (null != guildId) {
          let nick;
          if (stateFromStores1 != null) {
            nick = stateFromStores1.nick;
          }
          tmp25 = name;
          if (null != nick) {
            let nick1;
            if (stateFromStores1 != null) {
              nick1 = stateFromStores1.nick;
            }
            tmp25 = nick1;
          }
        }
        pendingGlobalName = tmp25;
      }
      let tmp28 = avatarDecoration;
      if (undefined !== pendingAvatarDecoration) {
        tmp28 = pendingAvatarDecoration;
      }
      if (cResult[11] === guildId) {
        if (cResult[12] === pendingDisplayNameStyles) {
          let tmp29;
          if (cResult[13] === user.id) {
            tmp29 = cResult[14];
          }
          const tmp30 = guildId(5628)(tmp29);
          if (cResult[15] === tmp28) {
            let tmp31;
            let tmp39;
            if (cResult[16] === tmp6Result.avatar) {
              tmp31 = cResult[17];
            }
            if (undefined === pendingAvatarSrc) {
              if (cResult[26] === guildId) {
                if (cResult[27] === tmp31) {
                  if (cResult[28] === !stateFromStores) {
                    let tmp46;
                    if (cResult[29] === user) {
                      tmp46 = cResult[30];
                    }
                    tmp39 = tmp46;
                  }
                }
              }
              const obj3 = { user, guildId, animate: !stateFromStores };
              const Avatar2 = tmp(1200).Avatar;
              const merged = Object.assign(tmp31);
              const tmp51 = closure_7(Avatar2, obj3);
              cResult[26] = guildId;
              cResult[27] = tmp31;
              class E {
                constructor() {
                  let member = null;
                  if (null != guildId) {
                    member = null;
                    if (null != user) {
                      member = GuildMemberStore.getMember(tmp, tmp3.id);
                    }
                  }
                  return member;
                }
              }
              cResult[29] = user;
              cResult[30] = tmp51;
              tmp46 = tmp51;
            } else {
              if (cResult[18] === guildId) {
                if (cResult[19] === pendingAvatarSrc) {
                  if (cResult[20] === stateFromStores) {
                    let tmp32;
                    if (cResult[21] === user) {
                      tmp32 = cResult[22];
                    }
                    if (cResult[23] === tmp31) {
                      if (cResult[24] === tmp32) {
                        tmp39 = cResult[25];
                      }
                    }
                    const obj4 = { source: tmp32 };
                    const Avatar = tmp(1200).Avatar;
                    const merged1 = Object.assign(tmp31);
                    const tmp44 = closure_7(Avatar, obj4);
                    cResult[23] = tmp31;
                    cResult[24] = tmp32;
                    cResult[25] = tmp44;
                    tmp39 = tmp44;
                  }
                }
              }
              const tmpResult7 = tmp(8373);
              const avatarSource = tmpResult7.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores);
              cResult[18] = guildId;
              cResult[19] = pendingAvatarSrc;
              cResult[20] = stateFromStores;
              cResult[21] = user;
              class E {
                constructor() {
                  let member = null;
                  if (null != guildId) {
                    member = null;
                    if (null != user) {
                      member = GuildMemberStore.getMember(tmp, tmp3.id);
                    }
                  }
                  return member;
                }
              }
              tmp32 = avatarSource;
            }
            if (cResult[31] === (undefined !== animate && animate)) {
              if (cResult[32] === tmp9) {
                if (cResult[35] === tmp39) {
                  let tmp55;
                  if (cResult[36] === tmp6Result.avatar) {
                    tmp55 = cResult[37];
                  }
                  if (cResult[38] === tmp30) {
                    if (cResult[39] === guildId) {
                      if (cResult[40] === pendingGlobalName) {
                        if (cResult[41] === pendingDisplayNameStyles) {
                          let tmp59;
                          if (cResult[42] === user.id) {
                            tmp59 = cResult[43];
                          }
                          if (cResult[44] === tmp30) {
                            let tmp63;
                            if (cResult[45] === pendingGlobalName) {
                              tmp63 = cResult[46];
                            }
                            if (cResult[47] === tmp6Result.content) {
                              if (cResult[48] === tmp59) {
                                let tmp66;
                                if (cResult[49] === tmp63) {
                                  tmp66 = cResult[50];
                                }
                                if (cResult[51] === tmp4) {
                                  if (cResult[52] === tmp6Result.container) {
                                    if (cResult[53] === tmp52) {
                                      if (cResult[54] === tmp55) {
                                        let tmp70;
                                        if (cResult[55] === tmp66) {
                                          tmp70 = cResult[56];
                                        }
                                        return tmp70;
                                      }
                                    }
                                  }
                                }
                                const obj5 = { style: tmp6Result.container, "aria-hidden": tmp4, children: items2 };
                                items2 = [tmp52, tmp55, tmp66];
                                const tmp73 = closure_8(View, obj5);
                                cResult[51] = tmp4;
                                cResult[52] = tmp6Result.container;
                                class E {
                                  constructor() {
                                    let member = null;
                                    if (null != guildId) {
                                      member = null;
                                      if (null != user) {
                                        member = GuildMemberStore.getMember(tmp, tmp3.id);
                                      }
                                    }
                                    return member;
                                  }
                                }
                                cResult[53] = tmp52;
                                cResult[54] = tmp55;
                                cResult[55] = tmp66;
                                cResult[56] = tmp73;
                                tmp70 = tmp73;
                              }
                            }
                            const obj6 = { style: tmp6Result.content, children: items3 };
                            items3 = [tmp59, tmp63];
                            const tmp69 = closure_8(View, obj6);
                            cResult[47] = tmp6Result.content;
                            cResult[48] = tmp59;
                            cResult[49] = tmp63;
                            class E {
                              constructor() {
                                let member = null;
                                if (null != guildId) {
                                  member = null;
                                  if (null != user) {
                                    member = GuildMemberStore.getMember(tmp, tmp3.id);
                                  }
                                }
                                return member;
                              }
                            }
                            cResult[50] = tmp69;
                            tmp66 = tmp69;
                          }
                          let tmp64 = null == tmp30;
                          if (tmp64) {
                            const obj7 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: pendingGlobalName };
                            tmp64 = closure_7(tmp(5088).Text, obj7);
                          }
                          cResult[44] = tmp30;
                          cResult[45] = pendingGlobalName;
                          cResult[46] = tmp64;
                          tmp63 = tmp64;
                        }
                      }
                    }
                  }
                  let tmp60 = null != tmp30;
                  if (tmp60) {
                    const obj8 = { userId: user.id, guildId, userName: pendingGlobalName, variant: "text-md/semibold", effectDisplayType: tmp(10263).EffectDisplayType.STATIC, lineClamp: 1, pendingDisplayNameStyles };
                    const tmp13Result2 = guildId(10262);
                    tmp60 = closure_7(tmp13Result2, obj8);
                  }
                  cResult[38] = tmp30;
                  cResult[39] = guildId;
                  cResult[40] = pendingGlobalName;
                  cResult[41] = pendingDisplayNameStyles;
                  cResult[42] = user.id;
                  cResult[43] = tmp60;
                  tmp59 = tmp60;
                }
                const obj9 = { style: tmp6Result.avatar, children: tmp39 };
                const tmp58 = closure_7(View, obj9);
                cResult[35] = tmp39;
                cResult[36] = tmp6Result.avatar;
                cResult[37] = tmp58;
                tmp55 = tmp58;
              }
            }
            const obj10 = { nameplate: tmp9, style: tmp6Result.nameplate, fullOpacity: true, animate: undefined !== animate && animate };
            cResult[31] = undefined !== animate && animate;
            cResult[32] = tmp9;
            cResult[33] = tmp6Result.nameplate;
            cResult[34] = closure_7(guildId(9021), obj10);
            closure_7(guildId(9021), obj10);
            class E {
              constructor() {
                let member = null;
                if (null != guildId) {
                  member = null;
                  if (null != user) {
                    member = GuildMemberStore.getMember(tmp, tmp3.id);
                  }
                }
                return member;
              }
            }
          }
          const obj11 = { style: tmp6Result.avatar, size: tmp(1200).AvatarSizes.NORMAL, avatarDecoration: tmp28, autoStatusCutout: true };
          cResult[15] = tmp28;
          cResult[16] = tmp6Result.avatar;
          cResult[17] = obj11;
          tmp31 = obj11;
        }
      }
      const obj12 = { userId: user.id, guildId, pendingDisplayNameStyles };
      cResult[11] = guildId;
      class E {
        constructor() {
          let member = null;
          if (null != guildId) {
            member = null;
            if (null != user) {
              member = GuildMemberStore.getMember(tmp, tmp3.id);
            }
          }
          return member;
        }
      }
      cResult[13] = user.id;
      cResult[14] = obj12;
      tmp29 = obj12;
    }
    class E {
      constructor() {
        let member = null;
        if (null != guildId) {
          member = null;
          if (null != user) {
            member = GuildMemberStore.getMember(tmp, tmp3.id);
          }
        }
        return member;
      }
    }
    cResult[8] = guildId;
    cResult[9] = user;
    cResult[10] = E;
    tmp21 = E;
  }
  let nameplateData1 = nameplateData;
  if (null != nameplate) {
    const tmpResult8 = tmp(1990);
    nameplateData1 = tmpResult8.getNameplateData(nameplate);
  }
  cResult[0] = nameplate;
  cResult[1] = nameplateData;
  cResult[2] = nameplateData1;
  tmp9 = nameplateData1;
}) : (function NameplatePreview(hasRoundedCorners) {
  let items3;
  let items4;
  let nameplate;
  let nameplateData;
  let pendingDisplayNameStyles;
  let pendingGlobalName;
  let user;
  ({ nameplate, nameplateData, user } = hasRoundedCorners);
  let flag = hasRoundedCorners.hasRoundedCorners;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = hasRoundedCorners.animate;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const guildId = hasRoundedCorners.guildId;
  const pendingAvatarSrc = hasRoundedCorners.pendingAvatarSrc;
  ({ pendingDisplayNameStyles, pendingGlobalName } = hasRoundedCorners);
  let stateFromStores;
  let pendingAvatarDecoration;
  const prop = hasRoundedCorners["aria-hidden"];
  const tmp2 = closure_9(flag);
  react = tmp2;
  if (null != nameplate) {
    let tmp3 = user;
    let obj = user(pendingAvatarSrc[9]);
    nameplateData = obj.getNameplateData(nameplate);
  }
  let obj2 = user(pendingAvatarSrc[10]);
  const avatarDecoration = obj2.useAvatarDecoration(user, guildId);
  pendingAvatarDecoration = guildId(pendingAvatarSrc[11])({ guildId }).pendingAvatarDecoration;
  let obj3 = user(pendingAvatarSrc[12]);
  const items = [pendingAvatarDecoration];
  stateFromStores = obj3.useStateFromStores(items, () => pendingAvatarDecoration.useReducedMotion);
  const items1 = [GuildMemberStore];
  const obj4 = user(pendingAvatarSrc[12]);
  const stateFromStores1 = obj4.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = null;
      if (null != user) {
        member = GuildMemberStore.getMember(tmp, tmp3.id);
      }
    }
    return member;
  });
  const obj5 = guildId(pendingAvatarSrc[13]);
  const name = obj5.useName(user);
  if (pendingGlobalName == null) {
    let tmp12 = name;
    if (null != guildId) {
      let nick;
      if (stateFromStores1 != null) {
        nick = stateFromStores1.nick;
      }
      tmp12 = name;
      if (null != nick) {
        let nick1;
        if (stateFromStores1 != null) {
          nick1 = stateFromStores1.nick;
        }
        tmp12 = nick1;
      }
    }
    pendingGlobalName = tmp12;
  }
  let tmp15 = avatarDecoration;
  if (undefined !== pendingAvatarDecoration) {
    tmp15 = pendingAvatarDecoration;
  }
  pendingAvatarDecoration = tmp15;
  const obj6 = { userId: user.id, guildId, pendingDisplayNameStyles };
  const tmp16 = guildId(pendingAvatarSrc[14])(obj6);
  const items2 = [tmp2.avatar, user, guildId, pendingAvatarSrc, tmp15, stateFromStores];
  const obj7 = { style: tmp2.container, "aria-hidden": prop, children: items3 };
  const memo = react.useMemo(() => {
    let obj3;
    let tmpResult;
    const obj = { style: user.avatar, size: native.AvatarSizes.NORMAL, avatarDecoration: pendingAvatarDecoration, autoStatusCutout: true };
    const Avatar = native.Avatar;
    const tmp3 = metroImportDefault;
    if (undefined !== pendingAvatarSrc) {
      const obj2 = { source: tmpResult.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores) };
      const merged = Object.assign(obj);
      obj3 = obj2;
      tmpResult = profile_customization_ProfileCustomizationUtils;
    } else {
      obj3 = { user, guildId, animate: !stateFromStores };
      const merged1 = Object.assign(obj);
    }
    return tmp3(Avatar, obj3);
  }, items2);
  items3 = [, , ];
  const obj8 = { nameplate: nameplateData, style: tmp2.nameplate, fullOpacity: true, animate: flag2 };
  items3[0] = closure_7(guildId(pendingAvatarSrc[17]), obj8);
  const obj9 = { style: tmp2.avatar, children: memo };
  items3[1] = closure_7(stateFromStores, obj9);
  let tmp20Result = null != tmp16;
  const obj10 = { style: tmp2.content, children: items4 };
  if (tmp20Result) {
    const obj11 = { userId: user.id, guildId, userName: pendingGlobalName, variant: "text-md/semibold", effectDisplayType: user(pendingAvatarSrc[19]).EffectDisplayType.STATIC, lineClamp: 1, pendingDisplayNameStyles };
    const tmp8Result = guildId(pendingAvatarSrc[18]);
    tmp20Result = tmp20(tmp8Result, obj11);
  }
  items4 = [tmp20Result, ];
  let tmp20Result2 = null == tmp16;
  if (tmp20Result2) {
    const obj12 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: pendingGlobalName };
    tmp20Result2 = tmp20(tmp5(tmp6[20]).Text, obj12);
  }
  items4[1] = tmp20Result2;
  items3[2] = closure_8(stateFromStores, obj10);
  return closure_8(stateFromStores, obj7);
});
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplatePreview.tsx");

export const NameplatePreview = tmp3;
