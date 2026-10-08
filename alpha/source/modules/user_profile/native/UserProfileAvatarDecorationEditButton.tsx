// Module ID: 14700
// Function ID: 14701
// Name: UserProfileAvatarDecorationEditButton
// Dependencies: [19, 17, 2124, 6891, 1096, 21, 5090, 587, 558, 576, 504, 8266, 8359, 10482, 8257, 8985, 1200, 13308, 1126, 14689, 2]

// Module 14700 (UserProfileAvatarDecorationEditButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import native from "native" /* 1200 */;
import Constants2 from "Constants" /* 6891 */;
import avatar_decorations_AvatarDecorationUtils from "avatar_decorations/AvatarDecorationUtils" /* 8257 */;
import CutoutableAvatarDecorationDefault from "CutoutableAvatarDecoration" /* 8985 */;
import AssetRegistryDefault from "AssetRegistry" /* 13308 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildMemberStore_mod from "GuildMemberStore" /* 2124 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let size;
let react = react_mod;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
let GuildMemberStore = GuildMemberStore_mod;
const COLLECTIBLES_PREVIEW_SIZE = Constants2.COLLECTIBLES_PREVIEW_SIZE;
const NOOP = Constants.NOOP;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { previewContainer: size, noneIcon: obj2 };
size = { position: "relative", height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj2 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_10 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileAvatarDecorationEditButton(user) {
  let first;
  let isTryItOut;
  let pendingAvatarDecoration;
  let obj = user(isTryItOut[9]);
  const cResult = obj.c(39);
  user = user.user;
  const guildId = user.guildId;
  ({ pendingAvatarDecoration, isTryItOut } = user);
  const tmp4 = closure_10();
  let closure_3 = tmp4;
  let tmp5 = null != guildId;
  let closure_4 = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp7 = GuildMemberStore;
    const items = [GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    if (cResult[2] === tmp5) {
      let tmp8;
      if (cResult[3] === user.id) {
        tmp8 = cResult[4];
      }
      const tmpResult = user(isTryItOut[10]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
      let avatarDecoration = user.avatarDecoration;
      let avatarDecoration1;
      if (stateFromStores != null) {
        avatarDecoration1 = stateFromStores.avatarDecoration;
      }
      if (cResult[5] === guildId) {
        if (cResult[6] === pendingAvatarDecoration) {
          if (cResult[7] === avatarDecoration) {
            let tmp11;
            if (cResult[8] === avatarDecoration1) {
              tmp11 = cResult[9];
            }
            const tmp14 = guildId(tmp2[12])(tmp11);
            avatarDecoration = tmp14;
            let skuId;
            const useFetchCollectiblesProduct = tmp(tmp2[13]).useFetchCollectiblesProduct;
            user(isTryItOut[13]);
            if (tmp14 != null) {
              skuId = tmp14.skuId;
            }
            const fetchCollectiblesProduct = useFetchCollectiblesProduct(skuId);
            const product = fetchCollectiblesProduct.product;
            GuildMemberStore = product;
            if (cResult[10] === guildId) {
              let tmp19;
              if (cResult[11] === user) {
                tmp19 = cResult[12];
              }
              const tmpResult5 = user(isTryItOut[11]);
              let userAvatarDecoration = tmpResult5.useUserAvatarDecoration(tmp19);
              if (undefined !== pendingAvatarDecoration) {
                userAvatarDecoration = pendingAvatarDecoration;
              }
              if (cResult[13] === userAvatarDecoration) {
                if (cResult[14] === guildId) {
                  if (cResult[15] === isTryItOut) {
                    let tmp21;
                    if (cResult[16] === user) {
                      tmp21 = cResult[17];
                    }
                    if (cResult[18] === tmp14) {
                      if (cResult[19] === product) {
                        if (cResult[20] === tmp4.noneIcon) {
                          let tmp22;
                          let formatToPlainStringResult;
                          if (cResult[21] === tmp4.previewContainer) {
                            tmp22 = cResult[22];
                          }
                          if (tmp5) {
                            tmp5 = null == userAvatarDecoration;
                          }
                          if (cResult[23] === tmp5) {
                            let tmp25;
                            let tmp34;
                            let name;
                            const tmp23 = cResult[24];
                            if (product != null) {
                              name = product.name;
                            }
                            if (tmp23 === name) {
                              tmp25 = cResult[25];
                            }
                            if (tmp18) {
                              let tmp37;
                              let tmp36;
                              const _Symbol2 = Symbol;
                              if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                                const intl4 = tmp(tmp2[18]).intl;
                                const stringResult = intl4.string(user(isTryItOut[18]).t["7v0T9P"]);
                                const intl5 = tmp(tmp2[18]).intl;
                                const stringResult1 = intl5.string(user(isTryItOut[18]).t.MKDeyL);
                                class O {
                                  constructor() {
                                    const obj = avatar_decorations_AvatarDecorationUtils;
                                    const obj2 = { user, guildId, currentAvatarDecoration: userAvatarDecoration, isTryItOut };
                                    const result = obj.openAvatarDecorationActionSheet(obj2);
                                  }
                                }
                                cResult[26] = stringResult;
                                cResult[27] = stringResult1;
                                tmp37 = stringResult1;
                                tmp36 = stringResult;
                              } else {
                                tmp36 = cResult[26];
                                tmp37 = cResult[27];
                              }
                              const _Symbol3 = Symbol;
                              if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                                class O {
                                  constructor() {
                                    const obj = avatar_decorations_AvatarDecorationUtils;
                                    const obj2 = { user, guildId, currentAvatarDecoration: userAvatarDecoration, isTryItOut };
                                    const result = obj.openAvatarDecorationActionSheet(obj2);
                                  }
                                }
                                const UserProfileEditFormButton = tmp(tmp2[19]).UserProfileEditFormButton;
                                const tmp43 = <UserProfileEditFormButton label={tmp36} buttonText={tmp37} onPress={NOOP} leading={null} loading disabled hideArrow />;
                                cResult[28] = tmp43;
                              }
                              class O {
                                constructor() {
                                  const obj = avatar_decorations_AvatarDecorationUtils;
                                  const obj2 = { user, guildId, currentAvatarDecoration: userAvatarDecoration, isTryItOut };
                                  const result = obj.openAvatarDecorationActionSheet(obj2);
                                }
                              }
                            } else {
                              let tmp29;
                              let tmp32;
                              const _Symbol = Symbol;
                              if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                                const intl3 = tmp(tmp2[18]).intl;
                                const stringResult2 = intl3.string(user(isTryItOut[18]).t["7v0T9P"]);
                                cResult[29] = stringResult2;
                                tmp29 = stringResult2;
                              } else {
                                tmp29 = cResult[29];
                              }
                              if (cResult[30] !== tmp25) {
                                const obj3 = { text: tmp25 };
                                cResult[30] = tmp25;
                                cResult[31] = obj3;
                                class O {
                                  constructor() {
                                    const obj = avatar_decorations_AvatarDecorationUtils;
                                    const obj2 = { user, guildId, currentAvatarDecoration: userAvatarDecoration, isTryItOut };
                                    const result = obj.openAvatarDecorationActionSheet(obj2);
                                  }
                                }
                              }
                              if (cResult[32] !== tmp22) {
                                const tmp22Result = tmp22();
                                cResult[32] = tmp22;
                                cResult[33] = tmp22Result;
                                tmp32 = tmp22Result;
                              } else {
                                tmp32 = cResult[33];
                              }
                              if (cResult[34] === tmp21) {
                                if (cResult[35] === tmp25) {
                                  if (cResult[36] === tmp31) {
                                    if (cResult[37] === tmp32) {
                                      tmp34 = cResult[38];
                                    }
                                  }
                                }
                              }
                              class O {
                                constructor() {
                                  const obj = avatar_decorations_AvatarDecorationUtils;
                                  const obj2 = { user, guildId, currentAvatarDecoration: userAvatarDecoration, isTryItOut };
                                  const result = obj.openAvatarDecorationActionSheet(obj2);
                                }
                              }
                              const tmp35 = jsx(user(isTryItOut[19]).UserProfileEditFormButton, { label: tmp29, buttonText: tmp25, accessibilityValue: tmp31, onPress: tmp21, leading: tmp32 });
                              cResult[34] = tmp21;
                              cResult[35] = tmp25;
                              cResult[36] = tmp31;
                              cResult[37] = tmp32;
                              cResult[38] = tmp35;
                              tmp34 = tmp35;
                            }
                            return tmp34;
                          }
                          let name1;
                          if (product != null) {
                            name1 = product.name;
                          }
                          if (name1 == null) {
                            const intl = tmp(tmp2[18]).intl;
                            name1 = intl.string(tmp(tmp2[18]).t.PoWNfe);
                          }
                          class O {
                            constructor() {
                              const obj = avatar_decorations_AvatarDecorationUtils;
                              const obj2 = { user, guildId, currentAvatarDecoration: userAvatarDecoration, isTryItOut };
                              const result = obj.openAvatarDecorationActionSheet(obj2);
                            }
                          }
                          if (tmp5) {
                            const intl2 = tmp(tmp2[18]).intl;
                            const obj5 = { label: name1 };
                            formatToPlainStringResult = intl2.formatToPlainString(user(isTryItOut[18]).t.ep5D4i, obj5);
                          }
                          cResult[23] = tmp5;
                          let name2;
                          if (product != null) {
                            name2 = product.name;
                          }
                          cResult[24] = name2;
                          cResult[25] = formatToPlainStringResult;
                          tmp25 = formatToPlainStringResult;
                        }
                      }
                    }
                    function renderPreviewImage() {
                      let tmp7;
                      if (null != GuildMemberStore) {
                        ({ avatarDecoration, size: COLLECTIBLES_PREVIEW_SIZE - 2 * nativeDefault.space.PX_4, animate: false });
                        CutoutableAvatarDecorationDefault;
                        tmp7 = <hasOwnProperty style={closure_3.previewContainer}>{null}</hasOwnProperty>;
                      } else {
                        const Icon = native.Icon;
                        tmp7 = <Icon source={AssetRegistryDefault} style={closure_3.noneIcon} />;
                      }
                      return tmp7;
                    }
                    cResult[18] = tmp14;
                    class O {
                      constructor() {
                        const obj = avatar_decorations_AvatarDecorationUtils;
                        const obj2 = { user, guildId, currentAvatarDecoration: userAvatarDecoration, isTryItOut };
                        const result = obj.openAvatarDecorationActionSheet(obj2);
                      }
                    }
                    cResult[20] = tmp4.noneIcon;
                    cResult[21] = tmp4.previewContainer;
                    cResult[22] = renderPreviewImage;
                    tmp22 = renderPreviewImage;
                  }
                }
              }
              class O {
                constructor() {
                  const obj = avatar_decorations_AvatarDecorationUtils;
                  const obj2 = { user, guildId, currentAvatarDecoration: userAvatarDecoration, isTryItOut };
                  const result = obj.openAvatarDecorationActionSheet(obj2);
                }
              }
              cResult[13] = userAvatarDecoration;
              cResult[14] = guildId;
              cResult[15] = isTryItOut;
              cResult[16] = user;
              cResult[17] = O;
              tmp21 = O;
            }
            const obj6 = { user, guildId };
            cResult[10] = guildId;
            cResult[11] = user;
            cResult[12] = obj6;
            tmp19 = obj6;
          }
        }
      }
      const obj7 = { pendingValue: pendingAvatarDecoration, userValue: avatarDecoration, guildValue: avatarDecoration1, guildId };
      const tmpResult6 = user(isTryItOut[11]);
      const profilePreviewValue = tmpResult6.getProfilePreviewValue(obj7);
      cResult[5] = guildId;
      cResult[6] = pendingAvatarDecoration;
      cResult[7] = avatarDecoration;
      cResult[8] = avatarDecoration1;
      cResult[9] = profilePreviewValue;
      tmp11 = profilePreviewValue;
    }
  }
  class I {
    constructor() {
      let member = null;
      if (closure_4) {
        member = GuildMemberStore.getMember(guildId, user.id);
      }
      return member;
    }
  }
  cResult[1] = guildId;
  cResult[2] = tmp5;
  cResult[3] = user.id;
  cResult[4] = I;
  tmp8 = I;
}) : (function UserProfileAvatarDecorationEditButton(user) {
  let avatarDecoration;
  let closure_3;
  let intl3;
  let intl4;
  let intl5;
  let isFetching;
  let isTryItOut;
  let obj5;
  let obj6;
  let pendingAvatarDecoration;
  let product;
  let tmp18Result;
  user = user.user;
  const guildId = user.guildId;
  ({ pendingAvatarDecoration, isTryItOut } = user);
  let userAvatarDecoration;
  const tmp = closure_10();
  react = tmp2;
  let obj = user(isTryItOut[10]);
  const items = [GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (closure_3) {
      member = GuildMemberStore.getMember(guildId, user.id);
    }
    return member;
  });
  let obj2 = { pendingValue: pendingAvatarDecoration, userValue: user.avatarDecoration, guildValue: avatarDecoration, guildId };
  avatarDecoration = undefined;
  const tmp7 = guildId(isTryItOut[12]);
  const getProfilePreviewValue = user(isTryItOut[11]).getProfilePreviewValue;
  user(isTryItOut[11]);
  if (stateFromStores != null) {
    avatarDecoration = stateFromStores.avatarDecoration;
  }
  const tmp7Result = tmp7(getProfilePreviewValue(obj2));
  let skuId;
  const useFetchCollectiblesProduct = tmp3(tmp4[13]).useFetchCollectiblesProduct;
  user(isTryItOut[13]);
  if (tmp7Result != null) {
    skuId = tmp7Result.skuId;
  }
  const fetchCollectiblesProduct = useFetchCollectiblesProduct(skuId);
  ({ product, isFetching } = fetchCollectiblesProduct);
  const tmp3Result2 = user(isTryItOut[11]);
  userAvatarDecoration = tmp3Result2.useUserAvatarDecoration({ user, guildId });
  if (undefined !== pendingAvatarDecoration) {
    userAvatarDecoration = pendingAvatarDecoration;
  }
  const items1 = [user, guildId, userAvatarDecoration, isTryItOut];
  let name;
  const callback = react.useCallback(() => {
    const obj = avatar_decorations_AvatarDecorationUtils;
    const obj2 = { user, guildId, currentAvatarDecoration: userAvatarDecoration, isTryItOut };
    const result = obj.openAvatarDecorationActionSheet(obj2);
  }, items1);
  if (product != null) {
    name = product.name;
  }
  if (name == null) {
    const intl = tmp3(tmp4[18]).intl;
    name = intl.string(tmp3(tmp4[18]).t.PoWNfe);
  }
  let formatToPlainStringResult = name;
  if (null != guildId) {
    formatToPlainStringResult = name;
    if (null == userAvatarDecoration) {
      const intl2 = tmp3(tmp4[18]).intl;
      const obj3 = { label: name };
      formatToPlainStringResult = intl2.formatToPlainString(tmp3(tmp4[18]).t.ep5D4i, obj3);
    }
  }
  const UserProfileEditFormButton = tmp3(tmp4[19]).UserProfileEditFormButton;
  if (isFetching) {
    const obj4 = { label: intl4.string(user(isTryItOut[18]).t["7v0T9P"]), buttonText: intl5.string(user(isTryItOut[18]).t.MKDeyL), onPress: NOOP, leading: null, loading: true, disabled: true, hideArrow: true };
    intl4 = tmp3(tmp4[18]).intl;
    intl5 = tmp3(tmp4[18]).intl;
    obj5 = obj4;
  } else {
    obj5 = { label: intl3.string(tmp3(tmp4[18]).t["7v0T9P"]), buttonText: formatToPlainStringResult, accessibilityValue: obj6, onPress: callback, leading: tmp18Result };
    intl3 = tmp3(tmp4[18]).intl;
    obj6 = { text: formatToPlainStringResult };
    if (null != product) {
      const obj7 = { style: tmp.previewContainer, children: null };
      ({ avatarDecoration: tmp7Result, size: COLLECTIBLES_PREVIEW_SIZE - 2 * guildId(isTryItOut[7]).space.PX_4, animate: false });
      guildId(isTryItOut[15]);
      tmp18Result = tmp18(closure_5, obj7);
    } else {
      const obj9 = { source: guildId(isTryItOut[17]), style: tmp.noneIcon };
      const Icon = tmp3(tmp4[16]).Icon;
      tmp18Result = tmp18(Icon, obj9);
    }
  }
  return <UserProfileEditFormButton {...obj5} />;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAvatarDecorationEditButton.tsx");

export default tmp4;
