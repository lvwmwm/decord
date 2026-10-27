// Module ID: 17837
// Function ID: 17838
// Name: ConjureYouBarButton
// Dependencies: [19, 6773, 16444, 21, 4971, 587, 10818, 5210, 17838, 2002, 558, 576, 17842, 1506, 10720, 5263, 1128, 3830, 17843, 12252, 17845, 2]

// Module 17837 (ConjureYouBarButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1128 */;
import Link from "Link" /* 1506 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import useMountEffectDefault from "useMountEffect" /* 5263 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10720 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10818 */;
import YouBarConstants from "YouBarConstants" /* 16444 */;
import useConjureTitleBarStatusDefault from "useConjureTitleBarStatus" /* 17842 */;
import YouBarButtonDefault from "YouBarButton" /* 17845 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
function handlePress() {
  const obj = ConjureProjectStore;
  if ("success" === ConjureProjectStore.getOwnedProjectsFetchState()) {
    if (0 === obj.getOwnedProjects().length) {
      openConjureHomeScreenDefault();
    }
  }
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(17838, dependencyMap.paths), "ConjureProjectsSheet");
}
const YOU_BAR_BUTTON_ICON_SIZE = YouBarConstants.YOU_BAR_BUTTON_ICON_SIZE;
const jsx = Fragment.jsx;
let obj = { icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, badge: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureYouBarButton(hasNameplate) {
  let first;
  let ownedProjectsFetchState;
  let str4;
  let tmp11;
  let tmp14;
  let tmp18;
  let tmp24;
  let obj = react2;
  const cResult = obj.c(23);
  hasNameplate = hasNameplate.hasNameplate;
  const tmp4 = closure_6();
  const tmp6 = useConjureTitleBarStatusDefault();
  const status = tmp6.status;
  let kind;
  const hasUnread = tmp6.hasUnread;
  if (status != null) {
    kind = status.kind;
  }
  const tmpResult = Link;
  const isFocused = tmpResult.useIsFocused();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      if ("unattempted" === ownedProjectsFetchState.getOwnedProjectsFetchState()) {
        const obj = ConjureActionCreators;
        obj.listProjects();
      }
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  useMountEffectDefault(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(_modDef3830.uk6jhJ);
    cResult[1] = stringResult;
    tmp11 = stringResult;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] !== ("working" === kind)) {
    let stringResult1 = null;
    if ("working" === kind) {
      const intl2 = tmp(1128).intl;
      stringResult1 = intl2.string(tmp5(3830)["Y8pS+n"]);
    }
    cResult[2] = "working" === kind;
    cResult[3] = stringResult1;
    tmp14 = stringResult1;
  } else {
    tmp14 = cResult[3];
  }
  let kind1;
  const tmp16 = cResult[4];
  if (status != null) {
    kind1 = status.kind;
  }
  if (tmp16 !== kind1) {
    let kind2;
    if (status != null) {
      kind2 = status.kind;
    }
    let stringResult2 = null;
    if ("needs_input" === kind2) {
      const intl3 = tmp(1128).intl;
      stringResult2 = intl3.string(tmp5(3830).hfIuc7);
    }
    let kind3;
    if (status != null) {
      kind3 = status.kind;
    }
    cResult[4] = kind3;
    cResult[5] = stringResult2;
    tmp18 = stringResult2;
  } else {
    tmp18 = cResult[5];
  }
  let kind4;
  const tmp22 = cResult[6];
  if (status != null) {
    kind4 = status.kind;
  }
  if (tmp22 !== kind4) {
    let kind5;
    if (status != null) {
      kind5 = status.kind;
    }
    let stringResult3 = null;
    if ("unread" === kind5) {
      const intl4 = tmp(1128).intl;
      stringResult3 = intl4.string(tmp5(3830)["6XGnHJ"]);
    }
    let kind6;
    if (status != null) {
      kind6 = status.kind;
    }
    cResult[6] = kind6;
    cResult[7] = stringResult3;
    tmp24 = stringResult3;
  } else {
    tmp24 = cResult[7];
  }
  if (cResult[8] === tmp14) {
    if (cResult[9] === tmp18) {
      let obj3;
      let tmp31Result;
      if (cResult[10] === tmp24) {
        obj3 = cResult[11];
      }
      const joined = obj3.join(", ");
      if (cResult[12] === isFocused) {
        if (cResult[13] === hasNameplate) {
          if (cResult[14] === tmp4.icon) {
            let tmp30;
            if (cResult[15] === "working" === kind) {
              tmp30 = cResult[16];
            }
            if (cResult[17] === joined) {
              if (cResult[18] === hasNameplate) {
                if (cResult[19] === tmp4.badge) {
                  if (cResult[20] === tmp30) {
                    let tmp35;
                    if (cResult[21] === ("working" !== kind && hasUnread)) {
                      tmp35 = cResult[22];
                    }
                    return tmp35;
                  }
                }
              }
            }
            const tmp38 = jsx(YouBarButtonDefault, { hasNameplate, icon: tmp30, hasBadge: "working" !== kind && hasUnread, badgeStyle: tmp4.badge, onPress: handlePress, accessibilityLabel: joined });
            cResult[17] = joined;
            cResult[18] = hasNameplate;
            cResult[19] = tmp4.badge;
            cResult[20] = tmp30;
            cResult[21] = "working" !== kind && hasUnread;
            cResult[22] = tmp38;
            tmp35 = tmp38;
          }
        }
      }
      if ("working" === kind) {
        const obj4 = { size: YOU_BAR_BUTTON_ICON_SIZE, paused: !isFocused };
        tmp31Result = tmp31(tmp5(17843), obj4);
      } else {
        const obj5 = { size: "custom", style: tmp4.icon, color: str4 };
        str4 = undefined;
        const MagicWandIcon = tmp(12252).MagicWandIcon;
        if (hasNameplate) {
          str4 = "white";
        }
        tmp31Result = tmp31(MagicWandIcon, obj5);
      }
      cResult[12] = isFocused;
      cResult[13] = hasNameplate;
      cResult[14] = tmp4.icon;
      cResult[15] = "working" === kind;
      cResult[16] = tmp31Result;
      tmp30 = tmp31Result;
    }
  }
  const items = [tmp11, tmp14, tmp18, tmp24];
  const found = items.filter((item) => null != item);
  cResult[8] = tmp14;
  cResult[9] = tmp18;
  cResult[10] = tmp24;
  cResult[11] = found;
  obj3 = found;
}) : (function ConjureYouBarButton(hasNameplate) {
  let ownedProjectsFetchState;
  let str;
  let tmp16Result;
  hasNameplate = hasNameplate.hasNameplate;
  const tmp = closure_6();
  const tmp4 = useConjureTitleBarStatusDefault();
  const status = tmp4.status;
  let kind;
  const hasUnread = tmp4.hasUnread;
  if (status != null) {
    kind = status.kind;
  }
  let obj = Link;
  const isFocused = obj.useIsFocused();
  useMountEffectDefault(() => {
    if ("unattempted" === ownedProjectsFetchState.getOwnedProjectsFetchState()) {
      const obj = ConjureActionCreators;
      obj.listProjects();
    }
  });
  const intl = intl5.intl;
  const items = [intl.string(tmp2(3830).uk6jhJ), , , ];
  let stringResult = null;
  if ("working" === kind) {
    const intl2 = tmp7(1128).intl;
    stringResult = intl2.string(tmp2(3830)["Y8pS+n"]);
  }
  items[1] = stringResult;
  let kind1;
  if (status != null) {
    kind1 = status.kind;
  }
  let stringResult1 = null;
  if ("needs_input" === kind1) {
    const intl3 = tmp7(1128).intl;
    stringResult1 = intl3.string(tmp2(3830).hfIuc7);
  }
  items[2] = stringResult1;
  let kind2;
  if (status != null) {
    kind2 = status.kind;
  }
  let stringResult2 = null;
  if ("unread" === kind2) {
    const intl4 = tmp7(1128).intl;
    stringResult2 = intl4.string(tmp2(3830)["6XGnHJ"]);
  }
  items[3] = stringResult2;
  const found = items.filter((item) => null != item);
  const joined = found.join(", ");
  YouBarButtonDefault;
  if ("working" === kind) {
    const obj3 = { size: YOU_BAR_BUTTON_ICON_SIZE, paused: !isFocused };
    tmp16Result = tmp16(tmp2(17843), obj3);
  } else {
    const obj4 = { size: "custom", style: tmp.icon, color: str };
    str = undefined;
    const MagicWandIcon = tmp7(12252).MagicWandIcon;
    if (hasNameplate) {
      str = "white";
    }
    tmp16Result = tmp16(MagicWandIcon, obj4);
  }
  return <tmp2Result hasNameplate={hasNameplate} icon={tmp16Result} hasBadge={"working" !== kind && hasUnread} badgeStyle={tmp.badge} onPress={handlePress} accessibilityLabel={joined} />;
}));
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouBarButton.tsx");

export default memoResult;
