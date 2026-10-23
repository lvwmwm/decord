// Module ID: 16848
// Function ID: 16849
// Name: AppIconRows
// Dependencies: [32, 13094, 19, 17, 1392, 9864, 21, 4969, 558, 576, 9865, 6985, 1128, 16849, 14739, 504, 1991, 16850, 2]

// Module 16848 (AppIconRows)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import get_initialized from "get initialized" /* 504 */;
import react3 from "react" /* 576 */;
import intl4 from "intl" /* 1128 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1991 */;
import AppIconConstants from "AppIconConstants" /* 9864 */;
import AppIconTypes from "AppIconTypes" /* 9865 */;
import AppIconUtils from "AppIconUtils" /* 14739 */;
import AppIconRowDefault from "AppIconRow" /* 16849 */;
import HexagonCampaignAppIconSectionDefault from "HexagonCampaignAppIconSection" /* 16850 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectDestructuringEmpty from "_objectDestructuringEmpty" /* 13094 */;
import UserStore from "UserStore" /* 1392 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const react = react2;
let dependencyMap;

let c10;
let closure_12;
let unpackModuleId;
const View = react_native.View;
const isHexagonCampaignAppIcon = AppIconConstants.isHexagonCampaignAppIcon;
const createElement = react2.createElement;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({ container: { padding: 16 }, bottomUpsellPadding: { paddingBottom: 56 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function BackwardsCompatibleAppIconRows(arg0) {
  let icons;
  let obj2;
  let onLongPress;
  let showEasterEgg;
  let title;
  let tmp10;
  let tmp = obj2;
  const obj = obj2(576);
  const cResult = obj.c(11);
  _objectDestructuringEmpty(arg0);
  obj2 = assign({}, arg0);
  const tmp6 = closure_13();
  [importDefault, dependencyMap] = onLongPress(react.useState(false), 2);
  ({ icons, title } = obj2);
  onLongPress(react.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    onLongPress = function onLongPress(arg0) {
      let tmp = null;
      if (arg0 === AppIconTypes.FreemiumAppIconIds.DEFAULT) {
        tmp = dependencyMap(true);
      }
      return tmp;
    };
    cResult[0] = onLongPress;
  } else {
    onLongPress = cResult[0];
  }
  const container = tmp6.container;
  const TableRowGroup = tmp(6985).TableRowGroup;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(tmp(1128).t.N4YDao);
    cResult[1] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[1];
  }
  const mapped = icons.map((id) => {
    AppIconRowDefault;
    const merged = Object.assign(obj2);
    return <tmp key={arg0.id} icon={arg0} showEasterEgg={importDefault} onLongPress={onLongPress} />;
  });
  if (cResult[2] === TableRowGroup) {
    if (cResult[3] === tmp10) {
      if (cResult[4] === mapped) {
        let tmp13;
        if (cResult[5] === title) {
          tmp13 = cResult[6];
        }
        if (cResult[7] === View) {
          if (cResult[8] === tmp6.container) {
            let tmp15;
            if (cResult[9] === tmp13) {
              tmp15 = cResult[10];
            }
            return tmp15;
          }
        }
        const obj4 = { style: container, children: tmp13 };
        const tmp17 = closure_10(View, obj4);
        cResult[7] = View;
        cResult[8] = tmp6.container;
        cResult[9] = tmp13;
        cResult[10] = tmp17;
        tmp15 = tmp17;
      }
    }
  }
  const tmp14 = closure_10(TableRowGroup, { title, accessibilityRole: "radiogroup", accessibilityLabel: tmp10, hasIcons: true, children: mapped });
  cResult[2] = TableRowGroup;
  cResult[3] = tmp10;
  cResult[4] = mapped;
  cResult[5] = title;
  cResult[6] = tmp14;
  tmp13 = tmp14;
}) : (function BackwardsCompatibleAppIconRows(arg0) {
  let TableRowGroup;
  let _undefined;
  let c1;
  let c2;
  let intl;
  let obj2;
  let showEasterEgg;
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    let tmp = arg0;
    let merged = Object.assign(arg0, undefined);
    c1 = undefined;
    dependencyMap = undefined;
    function onLongPress(react) {
      let tmp = null;
      if (react === AppIconTypes.FreemiumAppIconIds.DEFAULT) {
        tmp = _undefined(true);
      }
      return tmp;
    }
    const tmp4 = closure_13();
    [c1, c2] = onLongPress(react.useState(false), 2);
    const icons = merged.icons;
    const obj = { style: tmp4.container, children: closure_10(TableRowGroup, obj2) };
    obj2 = {
      title: merged.title,
      accessibilityRole: "radiogroup",
      accessibilityLabel: intl.string(merged(1128).t.N4YDao),
      hasIcons: true,
      children: icons.map((id) => {
          AppIconRowDefault;
          merged = Object.assign(merged);
          return <tmp key={arg0.id} icon={arg0} showEasterEgg={c1} onLongPress={onLongPress} />;
        })
    };
    onLongPress(react.useState(false), 2);
    TableRowGroup = merged(6985).TableRowGroup;
    intl = merged(1128).intl;
    return closure_10(View, obj);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppIconRows(arg0) {
  let arr2;
  let currentAppIcon;
  let currentUser;
  let limitedTimeAppIcons;
  let officialAppIcons;
  let onSelect;
  let pendingAppIconId;
  let tmp6;
  let tmp7;
  let tmp2 = dependencyMap;
  const obj = react3;
  const cResult = obj.c(36);
  ({ onSelect, pendingAppIconId } = arg0);
  closure_13();
  const obj2 = AppIconUtils;
  const appIcons = obj2.useAppIcons();
  ({ officialAppIcons, limitedTimeAppIcons, currentAppIcon } = appIcons);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function o() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] !== stateFromStores) {
    const tmpResult2 = PremiumTypeUtils;
    cResult[2] = stateFromStores;
    cResult[3] = tmpResult2.isPremium(stateFromStores);
    const isPremiumResult = tmpResult2.isPremium(stateFromStores);
  }
  if (cResult[4] !== limitedTimeAppIcons) {
    let tmp13;
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor(id) {
          return isHexagonCampaignAppIcon(id.id);
        }
      }
      cResult[6] = F;
      tmp13 = F;
    } else {
      class F {
        constructor(id) {
          return isHexagonCampaignAppIcon(id.id);
        }
      }
    }
    cResult[4] = limitedTimeAppIcons;
    cResult[5] = limitedTimeAppIcons.some(tmp13);
    const someResult = limitedTimeAppIcons.some(tmp13);
  } else {
    class F {
      constructor(id) {
        return isHexagonCampaignAppIcon(id.id);
      }
    }
  }
  if (cResult[7] !== limitedTimeAppIcons) {
    let tmp15;
    class F {
      constructor(id) {
        return isHexagonCampaignAppIcon(id.id);
      }
    }
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(id) {
          const tmp2 = !isHexagonCampaignAppIcon(id.id) && !id.isHidden;
          return tmp2;
        }
      }
      cResult[9] = C;
      tmp15 = C;
    } else {
      class C {
        constructor(id) {
          const tmp2 = !isHexagonCampaignAppIcon(id.id) && !id.isHidden;
          return tmp2;
        }
      }
    }
    const found = limitedTimeAppIcons.filter(tmp15);
    cResult[7] = limitedTimeAppIcons;
    cResult[8] = found;
    arr2 = found;
  } else {
    class C {
      constructor(id) {
        const tmp2 = !isHexagonCampaignAppIcon(id.id) && !id.isHidden;
        return tmp2;
      }
    }
  }
  const tmp17 = arr2.length > 0;
  if (tmp12) {
    class C {
      constructor(id) {
        const tmp2 = !isHexagonCampaignAppIcon(id.id) && !id.isHidden;
        return tmp2;
      }
    }
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(id) {
          const tmp2 = !isHexagonCampaignAppIcon(id.id) && !id.isHidden;
          return tmp2;
        }
      }
      const stringResult = obj6.string(intl4.t.w9v0yp);
      cResult[10] = stringResult;
    } else {
      class C {
        constructor(id) {
          const tmp2 = !isHexagonCampaignAppIcon(id.id) && !id.isHidden;
          return tmp2;
        }
      }
    }
  } else {
    class C {
      constructor(id) {
        const tmp2 = !isHexagonCampaignAppIcon(id.id) && !id.isHidden;
        return tmp2;
      }
    }
    if (tmp17) {
      class C {
        constructor(id) {
          const tmp2 = !isHexagonCampaignAppIcon(id.id) && !id.isHidden;
          return tmp2;
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor(id) {
            const tmp2 = !isHexagonCampaignAppIcon(id.id) && !id.isHidden;
            return tmp2;
          }
        }
        const stringResult1 = obj5.string(intl4.t.Ipxkog);
        cResult[11] = stringResult1;
      } else {
        class C {
          constructor(id) {
            const tmp2 = !isHexagonCampaignAppIcon(id.id) && !id.isHidden;
            return tmp2;
          }
        }
      }
    }
  }
  if (cResult[12] === currentAppIcon) {
    class C {
      constructor(id) {
        const tmp2 = !isHexagonCampaignAppIcon(id.id) && !id.isHidden;
        return tmp2;
      }
    }
  }
  let tmp23 = null;
  if (tmp12) {
    class C {
      constructor(id) {
        const tmp2 = !isHexagonCampaignAppIcon(id.id) && !id.isHidden;
        return tmp2;
      }
    }
    const obj3 = { currentAppIcon, isPending: pendingAppIconId === AppIconTypes.LimitedTimeAppIconIds.HEXAGON, onSelect };
    const tmp25 = HexagonCampaignAppIconSectionDefault;
    tmp23 = authStore(tmp25, obj3);
  }
  cResult[12] = currentAppIcon;
  cResult[13] = tmp12;
  cResult[14] = onSelect;
  cResult[15] = pendingAppIconId;
  cResult[16] = tmp23;
}) : (function AppIconRows(onSelect) {
  let currentAppIcon;
  let currentUser;
  let intl3;
  let limitedTimeAppIcons;
  let officialAppIcons;
  let stringResult;
  onSelect = onSelect.onSelect;
  const pendingAppIconId = onSelect.pendingAppIconId;
  let tmp2 = require;
  const tmp = closure_13();
  const obj = AppIconUtils;
  const appIcons = obj.useAppIcons();
  ({ limitedTimeAppIcons, currentAppIcon, officialAppIcons } = appIcons);
  const items = [UserStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = PremiumTypeUtils;
  const isPremiumResult = obj3.isPremium(stateFromStores);
  const someResult = limitedTimeAppIcons.some((id) => isHexagonCampaignAppIcon(id.id));
  const found = limitedTimeAppIcons.filter((id) => {
    const tmp2 = !isHexagonCampaignAppIcon(id.id) && !id.isHidden;
    return tmp2;
  });
  if (someResult) {
    const intl2 = intl4.intl;
    stringResult = intl2.string(intl4.t.w9v0yp);
  } else if (found.length > 0) {
    const intl = intl4.intl;
    stringResult = intl.string(intl4.t.Ipxkog);
  }
  let tmp12 = null;
  const tmp10 = authStore2;
  const tmp11 = unpackModuleId;
  if (someResult) {
    const obj4 = { currentAppIcon, isPending: pendingAppIconId === AppIconTypes.LimitedTimeAppIconIds.HEXAGON, onSelect };
    const tmp15 = HexagonCampaignAppIconSectionDefault;
    tmp12 = authStore(tmp15, obj4);
  }
  const items1 = [tmp12, , ];
  let tmp16 = null;
  if (found.length > 0) {
    const obj5 = { hasNitro: isPremiumResult, icons: found, currentAppIcon, title: intl3.string(intl4.t.anqaFd), onSelect };
    intl3 = intl4.intl;
    tmp16 = authStore(closure_14, obj5);
  }
  items1[1] = tmp16;
  let bottomUpsellPadding = !isPremiumResult;
  const tmp20 = View;
  if (!isPremiumResult) {
    bottomUpsellPadding = tmp.bottomUpsellPadding;
  }
  const obj6 = { children: items1 };
  const obj7 = { style: bottomUpsellPadding, children: authStore(closure_14, { hasNitro: isPremiumResult, icons: officialAppIcons, currentAppIcon, title: stringResult, onSelect }) };
  items1[2] = authStore(tmp20, obj7);
  return tmp10(tmp11, obj6);
});
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconRows.tsx");

export default tmp3;
