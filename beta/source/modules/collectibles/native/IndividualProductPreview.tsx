// Module ID: 13447
// Function ID: 13448
// Name: IndividualProductPreview
// Dependencies: [19, 17, 1080, 21, 4758, 580, 558, 568, 5198, 8452, 11389, 11473, 13448, 13449, 1977, 1081, 13450, 13453, 2]

// Module 13447 (IndividualProductPreview)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1977 */;
import LinearGradientDefault from "LinearGradient" /* 5198 */;
import useCurrentUser from "useCurrentUser" /* 8452 */;
import ProfileEffectUserPreviewDefault from "ProfileEffectUserPreview" /* 11389 */;
import ProfileFrameUserPreviewDefault from "ProfileFrameUserPreview" /* 11473 */;
import AvatarDecorationProductPreviewDefault from "AvatarDecorationProductPreview" /* 13448 */;
import NameplateProductPreviewDefault from "NameplateProductPreview" /* 13449 */;
import noop from "module_19" /* 19 */;

const FractionalPremiumSKUs = FractionalNitroPreview(1081);
const FractionalNitroPreview2 = FractionalNitroPreview(13450);
const OrbBadgePreview = FractionalNitroPreview(13453);
require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const CollectiblesShopConstants = fn(1080);
({ EXTERNAL_PRODUCT_SKU_IDS: hasOwnProperty, ShopCtaEnum: metroRequire } = CollectiblesShopConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { collectiblePreview: { marginTop: nativeDefault.space.PX_12, position: "relative", height: 280 }, profilePreviewContainer: { position: "relative", flex: 1, alignItems: "center", overflow: "hidden" }, profilePreview: { width: "66%" }, profilePreviewGradient: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.bottom = -1;
obj4.pointerEvents = "none";
obj4.color = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
obj2.profilePreviewGradient = obj4;
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((handlePreviewPress) => {
  const cResult = handlePreviewPress(568).c(19);
  handlePreviewPress = handlePreviewPress.handlePreviewPress;
  const onTrackPress = handlePreviewPress.onTrackPress;
  const children = handlePreviewPress.children;
  const tmp3 = closure_9();
  if (cResult[0] === handlePreviewPress) {
    if (cResult[1] === onTrackPress) {
      let tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const point = { x: 0, y: 0.6 };
      const point1 = { x: 0, y: 1 };
      cResult[3] = point;
      cResult[4] = point1;
      let tmp7 = point1;
      let tmp6 = point;
    } else {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + tmp3.profilePreviewGradient.color + "00";
    if (cResult[5] === tmp3.profilePreviewGradient.color) {
      if (cResult[6] === combined) {
        let tmp9 = cResult[7];
      }
      if (cResult[8] === tmp3.profilePreviewGradient) {
        if (cResult[9] === tmp9) {
          let tmp10 = cResult[10];
        }
        if (cResult[11] === children) {
          if (cResult[12] === tmp3.profilePreviewContainer) {
            if (cResult[13] === tmp10) {
              let tmp14 = cResult[14];
            }
            if (cResult[15] === tmp3.collectiblePreview) {
              if (cResult[16] === tmp4) {
                if (cResult[17] === tmp14) {
                  let tmp18 = cResult[18];
                }
                return tmp18;
              }
            }
            const obj2 = { onPress: tmp4, style: tmp3.collectiblePreview, children: tmp14 };
            const tmp21 = closure_7(closure_3, obj2);
            cResult[15] = tmp3.collectiblePreview;
            cResult[16] = tmp4;
            cResult[17] = tmp14;
            cResult[18] = tmp21;
            tmp18 = tmp21;
          }
        }
        const obj3 = { style: tmp3.profilePreviewContainer, children: null };
        const items = [children, tmp10];
        obj3.children = items;
        const tmp17 = closure_8(closure_4, obj3);
        cResult[11] = children;
        cResult[12] = tmp3.profilePreviewContainer;
        cResult[13] = tmp10;
        cResult[14] = tmp17;
        tmp14 = tmp17;
      }
      const obj4 = { style: tmp3.profilePreviewGradient, start: tmp6, end: tmp7, colors: tmp9 };
      const tmp13 = closure_7(onTrackPress(5198), obj4);
      cResult[8] = tmp3.profilePreviewGradient;
      cResult[9] = tmp9;
      cResult[10] = tmp13;
      tmp10 = tmp13;
    }
    const items1 = [combined, tmp3.profilePreviewGradient.color];
    cResult[5] = tmp3.profilePreviewGradient.color;
    cResult[6] = combined;
    cResult[7] = items1;
    tmp9 = items1;
  }
  const fn = function s() {
    if (onTrackPress != null) {
      tmp(constants2.FULL_PROFILE_PREVIEW);
    }
    if (handlePreviewPress != null) {
      tmp4();
    }
  };
  cResult[0] = handlePreviewPress;
  cResult[1] = onTrackPress;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((children) => {
  ({ handlePreviewPress: require, onTrackPress: importDefault } = children);
  const tmp = closure_9();
  const obj = {
    onPress() {
      if (importDefault != null) {
        tmp(constants2.FULL_PROFILE_PREVIEW);
      }
      if (require != null) {
        tmp4();
      }
    },
    style: tmp.collectiblePreview,
    children: null
  };
  const obj2 = { style: tmp.profilePreviewContainer, children: null };
  const items = [children.children, ];
  const obj3 = { style: tmp.profilePreviewGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: null };
  const items1 = ["" + tmp.profilePreviewGradient.color + "00", tmp.profilePreviewGradient.color];
  obj3.colors = items1;
  items[1] = closure_7(LinearGradientDefault, obj3);
  obj2.children = items;
  obj.children = closure_8(closure_4, obj2);
  return closure_7(closure_3, obj);
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  ({ profileEffect, width, handlePreviewPress, onTrackPress } = arg0);
  const tmp3 = closure_9();
  const currentUser = useCurrentUser.useCurrentUser();
  if (cResult[0] === profileEffect) {
    if (cResult[1] === tmp3.profilePreview) {
      if (cResult[2] === currentUser) {
        if (cResult[3] === width) {
          let tmp5 = cResult[4];
        }
        if (cResult[5] === handlePreviewPress) {
          if (cResult[6] === onTrackPress) {
            if (cResult[7] === tmp5) {
              let tmp7 = cResult[8];
            }
            return tmp7;
          }
        }
        const obj3 = { handlePreviewPress, onTrackPress, children: tmp5 };
        const tmp10 = React5(closure_10, obj3);
        cResult[5] = handlePreviewPress;
        cResult[6] = onTrackPress;
        cResult[7] = tmp5;
        cResult[8] = tmp10;
        tmp7 = tmp10;
      }
    }
  }
  const tmp6 = React5(ProfileEffectUserPreviewDefault, { user: currentUser, profileEffect, maxWidth: width, style: tmp3.profilePreview });
  cResult[0] = profileEffect;
  cResult[1] = tmp3.profilePreview;
  cResult[2] = currentUser;
  cResult[3] = width;
  cResult[4] = tmp6;
  tmp5 = tmp6;
}) : ((arg0) => {
  ({ profileEffect, width, handlePreviewPress, onTrackPress } = arg0);
  const tmp = closure_9();
  const obj2 = { handlePreviewPress, onTrackPress, children: null };
  const currentUser = useCurrentUser.useCurrentUser();
  obj2.children = React5(ProfileEffectUserPreviewDefault, { user: currentUser, profileEffect, maxWidth: width, style: tmp.profilePreview });
  return React5(closure_10, obj2);
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  ({ profileFrame, width, handlePreviewPress, onTrackPress } = arg0);
  const tmp3 = closure_9();
  const currentUser = useCurrentUser.useCurrentUser();
  if (cResult[0] === profileFrame) {
    if (cResult[1] === tmp3.profilePreview) {
      if (cResult[2] === currentUser) {
        if (cResult[3] === width) {
          let tmp5 = cResult[4];
        }
        if (cResult[5] === handlePreviewPress) {
          if (cResult[6] === onTrackPress) {
            if (cResult[7] === tmp5) {
              let tmp7 = cResult[8];
            }
            return tmp7;
          }
        }
        const obj3 = { handlePreviewPress, onTrackPress, children: tmp5 };
        const tmp10 = React5(closure_10, obj3);
        cResult[5] = handlePreviewPress;
        cResult[6] = onTrackPress;
        cResult[7] = tmp5;
        cResult[8] = tmp10;
        tmp7 = tmp10;
      }
    }
  }
  const tmp6 = React5(ProfileFrameUserPreviewDefault, { profileFrame, user: currentUser, maxWidth: width, style: tmp3.profilePreview });
  cResult[0] = profileFrame;
  cResult[1] = tmp3.profilePreview;
  cResult[2] = currentUser;
  cResult[3] = width;
  cResult[4] = tmp6;
  tmp5 = tmp6;
}) : ((arg0) => {
  ({ profileFrame, width, handlePreviewPress, onTrackPress } = arg0);
  const tmp = closure_9();
  const obj2 = { handlePreviewPress, onTrackPress, children: null };
  const currentUser = useCurrentUser.useCurrentUser();
  obj2.children = React5(ProfileFrameUserPreviewDefault, { profileFrame, user: currentUser, maxWidth: width, style: tmp.profilePreview });
  return React5(closure_10, obj2);
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((onTrackPress) => {
  const cResult = handlePreviewPress(568).c(9);
  ({ product, handlePreviewPress } = onTrackPress);
  onTrackPress = onTrackPress.onTrackPress;
  const tmp3 = closure_9();
  if (cResult[0] === handlePreviewPress) {
    if (cResult[1] === onTrackPress) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] !== product) {
      const obj2 = { product };
      const tmp8 = closure_7(onTrackPress(13448), obj2);
      cResult[3] = product;
      cResult[4] = tmp8;
      let tmp5 = tmp8;
    } else {
      tmp5 = cResult[4];
    }
    if (cResult[5] === tmp3.collectiblePreview) {
      if (cResult[6] === tmp4) {
        if (cResult[7] === tmp5) {
          let tmp9 = cResult[8];
        }
        return tmp9;
      }
    }
    const obj3 = { onPress: tmp4, style: tmp3.collectiblePreview, children: tmp5 };
    const tmp12 = closure_7(closure_3, obj3);
    cResult[5] = tmp3.collectiblePreview;
    cResult[6] = tmp4;
    cResult[7] = tmp5;
    cResult[8] = tmp12;
    tmp9 = tmp12;
  }
  const fn = function s() {
    if (onTrackPress != null) {
      tmp(constants2.FULL_PROFILE_PREVIEW);
    }
    if (handlePreviewPress != null) {
      tmp4();
    }
  };
  cResult[0] = handlePreviewPress;
  cResult[1] = onTrackPress;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((product) => {
  ({ handlePreviewPress: require, onTrackPress: importDefault } = product);
  return closure_7(closure_3, {
    onPress() {
      if (importDefault != null) {
        tmp(constants2.FULL_PROFILE_PREVIEW);
      }
      if (require != null) {
        tmp4();
      }
    },
    style: closure_9().collectiblePreview,
    children: closure_7(AvatarDecorationProductPreviewDefault, { product: product.product })
  });
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((product) => {
  const cResult = c.c(5);
  product = product.product;
  const tmp3 = closure_9();
  if (cResult[0] !== product) {
    const obj2 = { product };
    const tmp7 = React5(NameplateProductPreviewDefault, obj2);
    cResult[0] = product;
    cResult[1] = tmp7;
    let tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp3.collectiblePreview) {
    if (cResult[3] === tmp4) {
      let tmp8 = cResult[4];
    }
    return tmp8;
  }
  const tmp9 = React5(React4, { style: tmp3.collectiblePreview, children: tmp4 });
  cResult[2] = tmp3.collectiblePreview;
  cResult[3] = tmp4;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((product) => React5(React4, { style: closure_9().collectiblePreview, children: React5(NameplateProductPreviewDefault, { product: product.product }) }));
ReactCompilerGating = fn(558);
let obj3 = { marginTop: nativeDefault.space.PX_12, position: "relative", height: 280 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/IndividualProductPreview.tsx");

export const IndividualProductPreview = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let FractionalNitroPreview = require;
  let tmp = dependencyMap;
  const cResult = c.c(18);
  ({ product, width, handlePreviewPress, onTrackPress } = arg0);
  const type = product.type;
  if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
    if (cResult[0] !== product) {
      const obj2 = { product };
      const tmp32 = React5(closure_14, obj2);
      cResult[0] = product;
      cResult[1] = tmp32;
      let tmp29 = tmp32;
    } else {
      tmp29 = cResult[1];
    }
    return tmp29;
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
    const first = product.items[0];
    if (cResult[2] === handlePreviewPress) {
      if (cResult[3] === onTrackPress) {
        if (cResult[4] === first) {
          if (cResult[5] === width) {
            let tmp25 = cResult[6];
          }
          return tmp25;
        }
      }
    }
    const obj3 = { profileEffect: first, width, handlePreviewPress, onTrackPress };
    const tmp28 = React5(closure_11, obj3);
    cResult[2] = handlePreviewPress;
    cResult[3] = onTrackPress;
    cResult[4] = first;
    cResult[5] = width;
    cResult[6] = tmp28;
    tmp25 = tmp28;
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
    const first1 = product.items[0];
    if (cResult[7] === handlePreviewPress) {
      if (cResult[8] === onTrackPress) {
        if (cResult[9] === first1) {
          if (cResult[10] === width) {
            let tmp20 = cResult[11];
          }
          return tmp20;
        }
      }
    }
    const obj4 = { profileFrame: first1, width, handlePreviewPress, onTrackPress };
    const tmp23 = React5(closure_12, obj4);
    cResult[7] = handlePreviewPress;
    cResult[8] = onTrackPress;
    cResult[9] = first1;
    cResult[10] = width;
    cResult[11] = tmp23;
    tmp20 = tmp23;
  } else if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    if (cResult[12] === handlePreviewPress) {
      if (cResult[13] === onTrackPress) {
        if (cResult[14] === product) {
          let tmp15 = cResult[15];
        }
        return tmp15;
      }
    }
    const obj5 = { product, handlePreviewPress, onTrackPress };
    const tmp18 = React5(closure_13, obj5);
    cResult[12] = handlePreviewPress;
    cResult[13] = onTrackPress;
    cResult[14] = product;
    cResult[15] = tmp18;
    tmp15 = tmp18;
  } else if (CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU === type) {
    const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      const _Symbol2 = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        FractionalNitroPreview = FractionalNitroPreview2.FractionalNitroPreview;
        tmp = React5(FractionalNitroPreview, {});
        cResult[16] = tmp;
      }
    } else if (product.skuId !== constants.ORB_PROFILE_BADGE) {
      return null;
    } else {
      const _Symbol = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp9 = React5(OrbBadgePreview.OrbBadgePreview, {});
        cResult[17] = tmp9;
      }
    }
  } else {
    return null;
  }
}) : ((arg0) => {
  ({ product, width, handlePreviewPress, onTrackPress } = arg0);
  const type = product.type;
  if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
    const obj2 = { product };
    return React5(closure_14, obj2);
  } else if (tmp(1977).CollectiblesItemType.PROFILE_EFFECT === type) {
    const obj3 = { profileEffect: product.items[0], width, handlePreviewPress, onTrackPress };
    return React5(closure_11, obj3);
  } else if (tmp(1977).CollectiblesItemType.PROFILE_FRAME === type) {
    const obj4 = { profileFrame: product.items[0], width, handlePreviewPress, onTrackPress };
    return React5(closure_12, obj4);
  } else if (tmp(1977).CollectiblesItemType.AVATAR_DECORATION === type) {
    const obj = { product, handlePreviewPress, onTrackPress };
    return React5(closure_13, obj);
  } else if (tmp(1977).CollectiblesItemType.EXTERNAL_SKU === type) {
    const ALL = tmp(1081).FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      let tmp5 = React5(tmp(13450).FractionalNitroPreview, {});
    } else {
      tmp5 = null;
      if (product.skuId === constants.ORB_PROFILE_BADGE) {
        tmp5 = React5(tmp(13453).OrbBadgePreview, {});
      }
    }
    return tmp5;
  } else {
    return null;
  }
});
