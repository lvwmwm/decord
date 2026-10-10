// Module ID: 16822
// Function ID: 16823
// Name: YouBarUser
// Dependencies: [19, 17, 1390, 15350, 21, 5092, 587, 558, 576, 504, 4850, 5378, 4962, 16823, 16824, 16825, 2]

// Module 16822 (YouBarUser)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import spring from "spring" /* 5378 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import YouBarConstants from "YouBarConstants" /* 15350 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
let View = react_native.View;
({ YOU_BAR_SPRING_CONFIG: metroRequire, YOU_BAR_LARGE_AVATAR_NAME_MARGIN: metroImportDefault, YOU_BAR_SMALL_AVATAR_NAME_MARGIN: metroImportAll } = YouBarConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { youButton: obj2, userText: { flexDirection: "column", justifyContent: "center", height: "100%", gap: 1 }, placeholder: size };
obj2 = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS };
createStyles = createStyles.createStyles;
size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.round, height: 16, width: 80 };
let closure_11 = createStyles(obj);
const __initData = { code: "function YouBarUserTsx1(){const{nameMargin}=this.__closure;return{marginLeft:nameMargin.get()};}" };
const __initData2 = { code: "function YouBarUserTsx2(){const{nameMargin}=this.__closure;return{marginLeft:nameMargin.get()};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function YouBarUser(arg0) {
  let closure_0;
  let currentUser;
  let isQuestRendered;
  let items1;
  let items3;
  let onAvatarPress;
  let tmp5;
  let tmp6;
  let obj = require("react");
  const cResult = obj.c(38);
  ({ isQuestRendered, onAvatarPress } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function x() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  _require = tmp9;
  const tmpResult3 = require("ReanimatedRexport");
  const sharedValue = tmpResult3.useSharedValue(isQuestRendered ? closure_8 : closure_7);
  if (cResult[2] === !isQuestRendered) {
    let tmp11;
    let tmp12;
    let tmp35;
    let tmp38;
    let tmp31;
    if (cResult[3] === sharedValue) {
      tmp11 = cResult[4];
      tmp12 = cResult[5];
    }
    const effect = react.useEffect(tmp11, tmp12);
    const fn2 = function w() {
      const obj = { marginLeft: sharedValue.get() };
      return obj;
    };
    const obj2 = { nameMargin: sharedValue };
    fn2.__closure = obj2;
    fn2.__workletHash = 12063452832866;
    fn2.__initData = __initData;
    const tmpResult4 = require("ReanimatedRexport");
    const animatedStyle = tmpResult4.useAnimatedStyle(fn2);
    const obj6 = sharedValue(4962);
    const name = obj6.useName(stateFromStores);
    if (null != stateFromStores) {
      if (null != name) {
        if (cResult[21] === !isQuestRendered) {
          let tmp20;
          let tmp23;
          if (cResult[22] === onAvatarPress) {
            tmp20 = cResult[23];
          }
          const _Symbol = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { flexShrink: 1 };
            cResult[24] = obj3;
            tmp23 = obj3;
          } else {
            tmp23 = cResult[24];
          }
          if (cResult[25] === animatedStyle) {
            let tmp24;
            if (cResult[26] === tmp4.userText) {
              tmp24 = cResult[27];
            }
            if (cResult[28] === stateFromStores.id) {
              let tmp25;
              if (cResult[29] === name) {
                tmp25 = cResult[30];
              }
              if (cResult[31] === tmp24) {
                let tmp28;
                if (cResult[32] === tmp25) {
                  tmp28 = cResult[33];
                }
                if (cResult[34] === tmp4.youButton) {
                  if (cResult[35] === tmp20) {
                    if (cResult[36] === tmp28) {
                      tmp31 = cResult[37];
                    }
                  }
                }
                const obj4 = { style: tmp4.youButton, children: items1 };
                items1 = [tmp20, tmp28];
                const tmp34 = closure_10(View, obj4);
                cResult[34] = tmp4.youButton;
                cResult[35] = tmp20;
                cResult[36] = tmp28;
                cResult[37] = tmp34;
                tmp31 = tmp34;
              }
              const obj5 = { style: tmp24, children: tmp25 };
              const tmp30 = closure_9(sharedValue(4850).View, obj5);
              cResult[31] = tmp24;
              cResult[32] = tmp25;
              cResult[33] = tmp30;
              tmp28 = tmp30;
            }
            const obj7 = { userId: stateFromStores.id, username: name };
            const tmp27 = closure_9(sharedValue(16825), obj7);
            cResult[28] = stateFromStores.id;
            cResult[29] = name;
            cResult[30] = tmp27;
            tmp25 = tmp27;
          }
          const items2 = [tmp4.userText, animatedStyle, tmp23];
          cResult[25] = animatedStyle;
          cResult[26] = tmp4.userText;
          cResult[27] = items2;
          tmp24 = items2;
        }
        const obj8 = { isLargeAvatar: !isQuestRendered, onPress: onAvatarPress };
        const tmp22 = closure_9(sharedValue(16824), obj8);
        cResult[21] = !isQuestRendered;
        cResult[22] = onAvatarPress;
        cResult[23] = tmp22;
        tmp20 = tmp22;
      }
      return tmp31;
    }
    if (cResult[6] !== !isQuestRendered) {
      const obj9 = { isLarge: !isQuestRendered };
      const tmp37 = closure_9(sharedValue(16823), obj9);
      cResult[6] = !isQuestRendered;
      cResult[7] = tmp37;
      tmp35 = tmp37;
    } else {
      tmp35 = cResult[7];
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const obj10 = { flexShrink: 1 };
      cResult[8] = obj10;
      tmp38 = obj10;
    } else {
      tmp38 = cResult[8];
    }
    if (cResult[9] === animatedStyle) {
      let tmp39;
      let tmp40;
      if (cResult[10] === tmp4.userText) {
        tmp39 = cResult[11];
      }
      if (cResult[12] !== tmp4.placeholder) {
        const obj11 = { style: tmp4.placeholder };
        const tmp43 = closure_9(View, obj11);
        cResult[12] = tmp4.placeholder;
        cResult[13] = tmp43;
        tmp40 = tmp43;
      } else {
        tmp40 = cResult[13];
      }
      if (cResult[14] === tmp39) {
        let tmp44;
        if (cResult[15] === tmp40) {
          tmp44 = cResult[16];
        }
        if (cResult[17] === tmp4.youButton) {
          if (cResult[18] === tmp35) {
            let tmp47;
            if (cResult[19] === tmp44) {
              tmp47 = cResult[20];
            }
            tmp31 = tmp47;
          }
        }
        const obj12 = { style: tmp4.youButton, children: items3 };
        items3 = [tmp35, tmp44];
        const tmp50 = closure_10(View, obj12);
        cResult[17] = tmp4.youButton;
        cResult[18] = tmp35;
        cResult[19] = tmp44;
        cResult[20] = tmp50;
        tmp47 = tmp50;
      }
      const obj13 = { style: tmp39, children: tmp40 };
      const tmp46 = closure_9(sharedValue(4850).View, obj13);
      cResult[14] = tmp39;
      cResult[15] = tmp40;
      cResult[16] = tmp46;
      tmp44 = tmp46;
    }
    const items4 = [, , ];
    class T {
      constructor() {
        set = sharedValue.set;
        const obj = spring;
        const result = set(obj.withSpring(closure_0 ? metroImportDefault : metroImportAll, metroRequire));
      }
    }
    items4[1] = animatedStyle;
    items4[2] = tmp38;
    cResult[9] = animatedStyle;
    cResult[10] = tmp4.userText;
    cResult[11] = items4;
    tmp39 = items4;
  }
  class T {
    constructor() {
      set = sharedValue.set;
      const obj = spring;
      const result = set(obj.withSpring(closure_0 ? metroImportDefault : metroImportAll, metroRequire));
    }
  }
  const items5 = [!isQuestRendered, sharedValue];
  cResult[2] = !isQuestRendered;
  cResult[3] = sharedValue;
  cResult[4] = T;
  cResult[5] = items5;
  tmp12 = items5;
  tmp11 = T;
}) : (function YouBarUser(isQuestRendered) {
  let closure_0;
  let currentUser;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj10;
  let obj7;
  isQuestRendered = isQuestRendered.isQuestRendered;
  _require = undefined;
  const onAvatarPress = isQuestRendered.onAvatarPress;
  const tmp = closure_11();
  let obj = require("get initialized");
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp2 = _require;
  _require = tmp5;
  const obj2 = require("ReanimatedRexport");
  const sharedValue = obj2.useSharedValue(isQuestRendered ? closure_8 : closure_7);
  const items1 = [!isQuestRendered, sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const obj = spring;
    const result = set(obj.withSpring(closure_0 ? metroImportDefault : metroImportAll, metroRequire));
  }, items1);
  const tmp2Result = tmp2(4850);
  class M {
    constructor() {
      const obj = { marginLeft: sharedValue.get() };
      return obj;
    }
  }
  M.__closure = { nameMargin: sharedValue };
  M.__workletHash = 5882881762081;
  M.__initData = __initData2;
  const animatedStyle = tmp2Result.useAnimatedStyle(M);
  const obj4 = sharedValue(4962);
  const name = obj4.useName(stateFromStores);
  if (null != stateFromStores) {
    let obj3;
    if (null != name) {
      obj3 = { style: tmp.youButton, children: items2 };
      const obj5 = { isLargeAvatar: !isQuestRendered, onPress: onAvatarPress };
      items2 = [closure_9(sharedValue(16824), obj5), ];
      const obj6 = { style: items3, children: closure_9(sharedValue(16825), obj7) };
      items3 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
      const View2 = tmp9(4850).View;
      obj7 = { userId: stateFromStores.id, username: name };
      items2[1] = closure_9(View2, obj6);
    }
    return tmp11(View, obj3);
  }
  const obj8 = { style: tmp.youButton, children: items4 };
  items4 = [closure_9(sharedValue(16823), { isLarge: !isQuestRendered }), ];
  const obj9 = { style: items5, children: closure_9(View, obj10) };
  items5 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
  obj10 = { style: tmp.placeholder };
  View = tmp9(4850).View;
  items4[1] = closure_9(View, obj9);
  obj3 = obj8;
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarUser.tsx");

export default memoResult;
