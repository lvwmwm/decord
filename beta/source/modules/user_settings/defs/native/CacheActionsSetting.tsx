// Module ID: 15849
// Function ID: 15850
// Name: CacheActionsSetting
// Dependencies: [5, 32, 19, 5526, 21, 4755, 4486, 4742, 1115, 504, 2019, 15850, 7474, 7426, 5936, 5854, 15818, 15853, 15851, 10429, 5826, 15854, 4752, 11754, 2]

// Module 15849 (CacheActionsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2019 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4486 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4742 */;
import BrowserManager from "BrowserManager" /* 4752 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import TableRow from "TableRow" /* 5854 */;
import TableRowGroup from "TableRowGroup" /* 5936 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7426 */;
import ActionSheet from "ActionSheet" /* 7474 */;
import FileUpIcon from "FileUpIcon" /* 15818 */;
import CacheActionsDiskUsageSection from "CacheActionsDiskUsageSection" /* 15850 */;
import DiskUsageManagerDefault from "DiskUsageManager" /* 15851 */;
import CacheActionCreators from "CacheActionCreators" /* 15853 */;
import FileWarningIcon from "FileWarningIcon" /* 15854 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5526 */;

const CacheActionsDiskUsageSectionDefault = CacheActionsDiskUsageSection;

require = fn;
function handleCacheActionPress(key) {
  ToastActionCreatorsDefault.open({
    key,
    icon() {
      return closure_1_7(CircleInformationIcon.CircleInformationIcon, {});
    },
    content: key
  });
  const obj2 = {
    key,
    icon() {
      return closure_1_7(CircleInformationIcon.CircleInformationIcon, {});
    },
    content: key
  };
  ActionSheetActionCreatorsDefault.hideActionSheet(CacheActionsActionSheet);
}
function CacheActionsActionSheet() {
  const diskUsageMeasurement = CacheActionsDiskUsageSection.useDiskUsageMeasurement();
  ({ diskUsageState, isCalculating } = diskUsageMeasurement);
  const tmp4 = _slicedToArray(useState(false), 2);
  let first = isCalculating;
  if (!isCalculating) {
    first = tmp4[0];
  }
  let obj2 = { header: null, dismissAccessibilityLabel: null, children: null };
  let obj3 = { title: null };
  let intl = tmp(1115).intl;
  obj3.title = intl.string(util.t.ZVZVwR);
  obj2.header = React5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj3);
  const intl2 = tmp(1115).intl;
  obj2.dismissAccessibilityLabel = intl2.string(util.t.AVZpFH);
  let obj4 = { icon: React5(FileUpIcon.FileUpIcon, {}), label: null, disabled: null, onPress: null };
  const intl3 = tmp(1115).intl;
  obj4.label = intl3.string(util.t["/GUaXh"]);
  obj4.disabled = first;
  obj4.onPress = asyncGeneratorStep(async (arg0, value) => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = tmp2;
            c1 = 1;
            c2 = 1;
            const obj5 = { value: CacheActionCreators.writeCaches(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          const intl = closure_128_0(closure_128_2[8]).intl;
          closure_128_10(intl.string(closure_128_0(closure_128_2[8]).t.GgUIfl));
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp15) {
        c2 = tmp;
        throw tmp15;
      }
    }
  });
  const items = [React5(TableRow.TableRow, obj4), , ];
  let tmp7Result3 = null != DiskUsageManagerDefault.calculateSize;
  if (tmp7Result3) {
    let obj5 = { icon: tmp7(tmp(10429).FileIcon, {}), label: null, trailing: null, disabled: null, accessibilityState: null, onPress: null };
    const intl4 = tmp(1115).intl;
    const t = tmp(1115).t;
    obj5.label = intl4.string(isCalculating ? t.Ynmbie : t.iAFGRu);
    let tmp7Result = null;
    if (isCalculating) {
      tmp7Result = tmp7(tmp(5826).ActivityIndicator, { size: "small", accessible: false });
    }
    obj5.trailing = tmp7Result;
    obj5.disabled = first;
    let obj6 = { busy: isCalculating, disabled: first };
    obj5.accessibilityState = obj6;
    obj5.onPress = diskUsageMeasurement.handleCalculateSize;
    tmp7Result3 = tmp7(tmp(5854).TableRow, obj5);
  }
  let obj7 = { hasIcons: true, children: null };
  items[1] = tmp7Result3;
  const obj8 = { variant: "danger", icon: React5(FileWarningIcon.FileWarningIcon, { color: "text-feedback-critical" }), label: null, disabled: null, onPress: null };
  const intl5 = tmp(1115).intl;
  obj8.label = intl5.string(util.t.tgwiMO);
  obj8.disabled = first;
  obj8.onPress = asyncGeneratorStep(async (arg0, value) => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj5 = { value, done: true };
        return obj5;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_0 = tmp2;
            DiskUsageManagerDefault.clearCaches();
            CacheActionCreators.clearCaches();
            c1 = 1;
            c2 = 1;
            const obj7 = { value: BrowserManager.browserManagerClearWebsiteData(), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          const intl = closure_128_0(closure_128_2[8]).intl;
          closure_128_10(intl.string(closure_128_0(closure_128_2[8]).t["23xR5w"]));
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp21) {
        c2 = tmp;
        throw tmp21;
      }
    }
  });
  items[2] = React5(TableRow.TableRow, obj8);
  obj7.children = items;
  const items1 = [React6(TableRowGroup.TableRowGroup, obj7), ];
  let tmp7Result4 = null != diskUsageState;
  if (tmp7Result4) {
    const obj9 = { state: diskUsageState, onDiagnosticsBusyChange: tmp4[1] };
    tmp7Result4 = tmp7(CacheActionsDiskUsageSectionDefault, obj9);
  }
  items1[1] = tmp7Result4;
  obj2.children = items1;
  return React6(ActionSheet.ActionSheet, obj2);
}
const useState = fn(19).useState;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
CacheActionsActionSheet = "CacheActionsActionSheet";
const SettingBuilders = fn(11754);
const pressable = SettingBuilders.createPressable({
  useTitle: function useCacheActionsTitle() {
    const intl = util.intl;
    return intl.string(util.t.ZVZVwR);
  },
  parent: null,
  IconComponent: fn(15854).FileWarningIcon,
  onPress: function handleCacheActionsPress() {
    ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: CacheActionsActionSheet }), CacheActionsActionSheet);
  },
  usePredicate: function useCacheActionsPredicate() {
    const items = [GatewayConnectionStore];
    const stateFromStores = initialize.useStateFromStores(items, () => connected.isConnected());
    const DeveloperMode = UserSettings.DeveloperMode;
    return DeveloperMode.useSetting() && stateFromStores;
  },
  withArrow: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CacheActionsSetting.tsx");

export default pressable;
