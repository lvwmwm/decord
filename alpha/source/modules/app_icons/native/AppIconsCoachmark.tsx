// Module ID: 17636
// Function ID: 17637
// Name: AppIconsCoachmark
// Dependencies: [19, 17, 1390, 2062, 21, 5092, 587, 558, 576, 504, 4769, 5056, 13724, 6156, 17637, 1200, 9537, 5088, 1126, 5379, 6839, 2]

// Module 17636 (AppIconsCoachmark)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2062 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4769 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import FastImageDefault from "FastImage" /* 6156 */;
import AssetRegistryDefault from "AssetRegistry" /* 9537 */;
import AppIconUtils from "AppIconUtils" /* 13724 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 17637 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, info: { alignItems: "center" }, image: { alignSelf: "center", marginBottom: 20 }, nitroWheel: { marginRight: 8 }, titleContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, subtitle: { marginTop: 8, textAlign: "center" }, footer: obj3 };
obj2 = { padding: nativeDefault.space.PX_16, paddingBottom: 0 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: 20, gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppIconsCoachmarkActionSheet(markAsDismissed) {
  let currentUser;
  let intl;
  let items1;
  let items2;
  let tmp23;
  let tmp5;
  let tmp6;
  let tmp9;
  const tmp2 = dependencyMap;
  let obj = markAsDismissed(576);
  const cResult = obj.c(43);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = markAsDismissed(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== stateFromStores) {
    const obj3 = PremiumUtilsDefault;
    const isPremiumResult = obj3.isPremium(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = isPremiumResult;
    tmp9 = isPremiumResult;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== markAsDismissed) {
    function handleOnTryIt() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      if (markAsDismissed != null) {
        tmp3(ContentDismissActionType.PRIMARY);
      }
      const obj2 = AppIconUtils;
      const result = obj2.navigateToAppIconSettings();
    }
    cResult[4] = markAsDismissed;
    cResult[5] = handleOnTryIt;
  }
  if (cResult[6] !== markAsDismissed) {
    class C {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        if (markAsDismissed != null) {
          tmp2(ContentDismissActionType.DISMISS);
        }
      }
    }
    cResult[6] = markAsDismissed;
    cResult[7] = C;
  } else {
    class C {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        if (markAsDismissed != null) {
          tmp2(ContentDismissActionType.DISMISS);
        }
      }
    }
  }
  if (cResult[8] !== markAsDismissed) {
    class C {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        if (markAsDismissed != null) {
          tmp2(ContentDismissActionType.DISMISS);
        }
      }
    }
    cResult[8] = markAsDismissed;
    cResult[9] = tmp15;
  } else {
    class C {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        if (markAsDismissed != null) {
          tmp2(ContentDismissActionType.DISMISS);
        }
      }
    }
  }
  if (cResult[10] !== tmp4.image) {
    class C {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        if (markAsDismissed != null) {
          tmp2(ContentDismissActionType.DISMISS);
        }
      }
    }
    let obj2 = { source: AssetRegistryDefault2, style: tmp4.image };
    const tmp18 = FastImageDefault;
    cResult[10] = tmp4.image;
    cResult[11] = closure_7(tmp18, obj2);
    const tmp19 = closure_7(tmp18, obj2);
  } else {
    class C {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        if (markAsDismissed != null) {
          tmp2(ContentDismissActionType.DISMISS);
        }
      }
    }
  }
  if (cResult[12] !== tmp4.nitroWheel) {
    class C {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        if (markAsDismissed != null) {
          tmp2(ContentDismissActionType.DISMISS);
        }
      }
    }
    const obj4 = { source: AssetRegistryDefault, size: markAsDismissed(1200).IconSizes.MEDIUM, style: tmp4.nitroWheel, disableColor: true };
    const Icon = tmp(1200).Icon;
    cResult[12] = tmp4.nitroWheel;
    cResult[13] = closure_7(Icon, obj4);
    const tmp22 = closure_7(Icon, obj4);
  } else {
    class C {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        if (markAsDismissed != null) {
          tmp2(ContentDismissActionType.DISMISS);
        }
      }
    }
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        if (markAsDismissed != null) {
          tmp2(ContentDismissActionType.DISMISS);
        }
      }
    }
    const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(markAsDismissed(1126).t.EfA4Cq) };
    const Text = tmp(5088).Text;
    intl = tmp(1126).intl;
    const tmp24 = closure_7(Text, obj5);
    cResult[14] = tmp24;
    tmp23 = tmp24;
  } else {
    class C {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        if (markAsDismissed != null) {
          tmp2(ContentDismissActionType.DISMISS);
        }
      }
    }
  }
  if (cResult[15] === tmp4.titleContainer) {
    class C {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        if (markAsDismissed != null) {
          tmp2(ContentDismissActionType.DISMISS);
        }
      }
    }
    if (cResult[18] !== tmp9) {
      class C {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          if (markAsDismissed != null) {
            tmp2(ContentDismissActionType.DISMISS);
          }
        }
      }
      const string = tmp28.string;
      const t = tmp(1126).t;
      if (tmp9) {
        class C {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            if (markAsDismissed != null) {
              tmp2(ContentDismissActionType.DISMISS);
            }
          }
        }
      } else {
        class C {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            if (markAsDismissed != null) {
              tmp2(ContentDismissActionType.DISMISS);
            }
          }
        }
      }
      cResult[18] = tmp9;
      cResult[19] = tmp29;
    } else {
      class C {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          if (markAsDismissed != null) {
            tmp2(ContentDismissActionType.DISMISS);
          }
        }
      }
    }
    if (cResult[20] === tmp4.subtitle) {
      class C {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          if (markAsDismissed != null) {
            tmp2(ContentDismissActionType.DISMISS);
          }
        }
      }
      if (cResult[23] === tmp4.info) {
        class C {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            if (markAsDismissed != null) {
              tmp2(ContentDismissActionType.DISMISS);
            }
          }
        }
      }
      const obj6 = { style: tmp4.info, children: items1 };
      items1 = [tmp16, tmp25, tmp30];
      cResult[23] = tmp4.info;
      cResult[24] = tmp25;
      cResult[25] = tmp30;
      cResult[26] = tmp16;
      cResult[27] = closure_8(View, obj6);
      const tmp36 = closure_8(View, obj6);
    }
    const obj7 = { variant: "text-md/normal", color: "text-default", style: tmp4.subtitle, children: tmp27 };
    cResult[20] = tmp4.subtitle;
    cResult[21] = tmp27;
    cResult[22] = closure_7(markAsDismissed(5088).Text, obj7);
    const tmp32 = closure_7(markAsDismissed(5088).Text, obj7);
  }
  const obj8 = { style: tmp4.titleContainer, children: items2 };
  items2 = [tmp20, tmp23];
  cResult[15] = tmp4.titleContainer;
  cResult[16] = tmp20;
  cResult[17] = closure_8(View, obj8);
  const tmp26 = closure_8(View, obj8);
}) : (function AppIconsCoachmarkActionSheet(markAsDismissed) {
  let currentUser;
  let intl;
  let intl3;
  let intl4;
  let items2;
  let items3;
  let items4;
  let items5;
  let stringResult;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_9();
  const tmp2 = markAsDismissed;
  const tmp3 = dependencyMap;
  let obj = markAsDismissed(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = PremiumUtilsDefault;
  const items1 = [markAsDismissed];
  const isPremiumResult = obj2.isPremium(stateFromStores);
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (markAsDismissed != null) {
      tmp2(ContentDismissActionType.DISMISS);
    }
  }, items1);
  const obj3 = {
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.DISMISS);
    },
    contentStyles: tmp.container,
    children: items4
  };
  const obj4 = { style: tmp.info, children: items2 };
  BottomSheet = markAsDismissed(6839).BottomSheet;
  const obj5 = { source: AssetRegistryDefault2, style: tmp.image };
  const tmp10 = FastImageDefault;
  items2 = [closure_7(tmp10, obj5), , ];
  const obj6 = { style: tmp.titleContainer, children: items3 };
  const obj7 = { source: AssetRegistryDefault, size: markAsDismissed(1200).IconSizes.MEDIUM, style: tmp.nitroWheel, disableColor: true };
  const Icon = markAsDismissed(1200).Icon;
  items3 = [closure_7(Icon, obj7), ];
  const obj8 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(markAsDismissed(1126).t.EfA4Cq) };
  const Text = markAsDismissed(5088).Text;
  intl = markAsDismissed(1126).intl;
  items3[1] = closure_7(Text, obj8);
  items2[1] = closure_8(View, obj6);
  const obj9 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: stringResult };
  const Text2 = markAsDismissed(5088).Text;
  const intl2 = markAsDismissed(1126).intl;
  const string = intl2.string;
  const t = markAsDismissed(1126).t;
  if (isPremiumResult) {
    stringResult = string(t.IgchKK);
  } else {
    stringResult = string(t.D0XzaS);
  }
  items2[2] = closure_7(Text2, obj9);
  items4 = [closure_8(View, obj4), ];
  const obj10 = { style: tmp.footer, children: items5 };
  const obj11 = {
    text: intl3.string(tmp2(1126).t.Pt547C),
    onPress: function handleOnTryIt() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      if (markAsDismissed != null) {
        tmp3(ContentDismissActionType.PRIMARY);
      }
      const obj2 = AppIconUtils;
      const result = obj2.navigateToAppIconSettings();
    }
  };
  const Button = tmp2(5379).Button;
  intl3 = tmp2(1126).intl;
  items5 = [closure_7(Button, obj11), ];
  const obj12 = { variant: "secondary", text: intl4.string(tmp2(1126).t.iSrIIZ), onPress: callback };
  const Button2 = tmp2(5379).Button;
  intl4 = tmp2(1126).intl;
  items5[1] = closure_7(Button2, obj12);
  items4[1] = closure_8(View, obj10);
  return closure_8(BottomSheet, obj3);
});
let result = size.fileFinishedImporting("modules/app_icons/native/AppIconsCoachmark.tsx");

export default tmp4;
