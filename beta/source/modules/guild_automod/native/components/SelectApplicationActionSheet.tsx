// Module ID: 17969
// Function ID: 17970
// Name: SelectApplicationActionSheet
// Dependencies: [19, 21, 4758, 580, 558, 568, 1119, 4725, 7396, 5900, 5802, 1401, 7449, 5901, 2]

// Module 17969 (SelectApplicationActionSheet)
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1401 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import FastImageDefault from "FastImage" /* 5802 */;
import TableRadioRow from "TableRadioRow" /* 5900 */;
import TableRadioGroup from "TableRadioGroup" /* 5901 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7396 */;
import ActionSheet from "ActionSheet" /* 7449 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj2 = { icon: null };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.md };
obj2.icon = size;
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/SelectApplicationActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = onSelectApplication(568).c(13);
  ({ applications, selectedApplicationId, onSelectApplication } = arg0);
  const tmp4 = closure_4();
  importDefault = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t.FKSiso);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== onSelectApplication) {
    class S {
      constructor(arg0) {
        obj = closure_1(closure_2[7]);
        hideActionSheetResult = obj.hideActionSheet();
        tmp2 = onSelectApplication(arg0);
        return;
      }
    }
    cResult[1] = onSelectApplication;
    cResult[2] = S;
  } else {
    class S {
      constructor(arg0) {
        obj = closure_1(closure_2[7]);
        hideActionSheetResult = obj.hideActionSheet();
        tmp2 = onSelectApplication(arg0);
        return;
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(arg0) {
        obj = closure_1(closure_2[7]);
        hideActionSheetResult = obj.hideActionSheet();
        tmp2 = onSelectApplication(arg0);
        return;
      }
    }
    let obj2 = { title: first };
    const tmp9 = jsx(tmp(7396).BottomSheetTitleHeader, { title: first });
    cResult[3] = tmp9;
  } else {
    class S {
      constructor(arg0) {
        obj = closure_1(closure_2[7]);
        hideActionSheetResult = obj.hideActionSheet();
        tmp2 = onSelectApplication(arg0);
        return;
      }
    }
  }
  if (selectedApplicationId == null) {
    class S {
      constructor(arg0) {
        obj = closure_1(closure_2[7]);
        hideActionSheetResult = obj.hideActionSheet();
        tmp2 = onSelectApplication(arg0);
        return;
      }
    }
  }
  if (cResult[4] === applications) {
    class S {
      constructor(arg0) {
        obj = closure_1(closure_2[7]);
        hideActionSheetResult = obj.hideActionSheet();
        tmp2 = onSelectApplication(arg0);
        return;
      }
    }
  }
  if (cResult[7] !== tmp4) {
    class S {
      constructor(arg0) {
        obj = closure_1(closure_2[7]);
        hideActionSheetResult = obj.hideActionSheet();
        tmp2 = onSelectApplication(arg0);
        return;
      }
    }
    cResult[7] = tmp4;
    cResult[8] = tmp11;
    const tmp10 = tmp11;
  } else {
    class S {
      constructor(arg0) {
        obj = closure_1(closure_2[7]);
        hideActionSheetResult = obj.hideActionSheet();
        tmp2 = onSelectApplication(arg0);
        return;
      }
    }
  }
  const mapped = applications.map(tmp10);
  cResult[4] = applications;
  cResult[5] = tmp4;
  cResult[6] = mapped;
}) : ((arg0) => {
  ({ applications, selectedApplicationId, onSelectApplication: require } = arg0);
  const icon = closure_4();
  const intl = util.intl;
  const stringResult = intl.string(util.t.FKSiso);
  let obj = { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult }), children: null };
  let obj2 = {
    hasIcons: true,
    accessibilityLabel: stringResult,
    defaultValue: selectedApplicationId,
    onChange(arg0) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      require(arg0);
    },
    children: applications.map((id) => {
      const obj = { value: id.id, label: id.name, icon: null };
      const obj2 = { source: null, style: null };
      const obj4 = {};
      const merged = Object.assign(id);
      obj4.size = 32;
      obj2.source = AvatarUtilsDefault.getApplicationIconSource(obj4);
      obj2.style = icon.icon;
      obj.icon = <tmp source={null} style={null} />;
      return jsx(TableRadioRow.TableRadioRow, { value: id.id, label: id.name, icon: null }, id.id);
    })
  };
  obj.children = jsx(TableRadioGroup.TableRadioGroup, {
    hasIcons: true,
    accessibilityLabel: stringResult,
    defaultValue: selectedApplicationId,
    onChange(arg0) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      require(arg0);
    },
    children: applications.map((id) => {
      const obj = { value: id.id, label: id.name, icon: null };
      const obj2 = { source: null, style: null };
      const obj4 = {};
      const merged = Object.assign(id);
      obj4.size = 32;
      obj2.source = AvatarUtilsDefault.getApplicationIconSource(obj4);
      obj2.style = icon.icon;
      obj.icon = <tmp source={null} style={null} />;
      return jsx(TableRadioRow.TableRadioRow, { value: id.id, label: id.name, icon: null }, id.id);
    })
  });
  return jsx(ActionSheet.ActionSheet, { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult }), children: null });
});
