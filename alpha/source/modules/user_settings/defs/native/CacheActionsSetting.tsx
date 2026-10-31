// Module ID: 17553
// Function ID: 17554
// Name: CacheActionsSetting
// Dependencies: [5, 32, 19, 6568, 21, 5258, 5712, 5735, 1113, 504, 4839, 17554, 7366, 7321, 7060, 6975, 12559, 17558, 17555, 11062, 6953, 17559, 5742, 11539, 2]

// Module 17553 (CacheActionsSetting)
import react from "react" /* 19 */;
import get_initialized from "get initialized" /* 504 */;
import UserSettings from "UserSettings" /* 4839 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5735 */;
import BrowserManager from "BrowserManager" /* 5742 */;
import CacheActionsDiskUsageSection from "CacheActionsDiskUsageSection" /* 17554 */;
import DiskUsageManagerDefault from "DiskUsageManager" /* 17555 */;
import CacheActionCreators from "CacheActionCreators" /* 17558 */;
import FileWarningIcon from "FileWarningIcon" /* 17559 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6568 */;
import Fragment from "Fragment" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import size from "module_2" /* 2 */;

let c1, c2;

let metroImportAll;
let metroImportDefault;
let tmp;
let tmp10;
const intl6 = tmp(1113);
const ActivityIndicator_ActivityIndicator = tmp(6953);
const TableRow4 = tmp(6975);
const TableRowGroup2 = tmp(7060);
const BottomSheetTitleHeader2 = tmp(7321);
const ActionSheet2 = tmp(7366);
const FileIcon = tmp(11062);
const FileUpIcon = tmp(12559);
const CacheActionsDiskUsageSectionDefault = tmp10(17554);
function handleCacheActionPress(text) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { text, icon: CircleInformationIcon.CircleInformationIcon };
  obj.open(text, obj2);
  const obj3 = ActionSheetActionCreatorsDefault;
  obj3.hideActionSheet(CacheActionsActionSheet_str);
}
function CacheActionsActionSheet() {
  let BottomSheetTitleHeader;
  let diskUsageState;
  let intl;
  let intl2;
  let intl3;
  let intl5;
  let isCalculating;
  let items1;
  let obj3;
  let obj6;
  let string;
  let t;
  let tmp8Result;
  const tmp = require;
  let obj = CacheActionsDiskUsageSection;
  const diskUsageMeasurement = obj.useDiskUsageMeasurement();
  ({ diskUsageState, isCalculating } = diskUsageMeasurement);
  const handleCalculateSize = diskUsageMeasurement.handleCalculateSize;
  const tmp4 = _slicedToArray(useState(false), 2);
  let first = isCalculating;
  const tmp5 = tmp4[1];
  if (!isCalculating) {
    first = tmp4[0];
  }
  let obj2 = { header: metroImportDefault(BottomSheetTitleHeader, obj3), dismissAccessibilityLabel: intl2.string(intl6.t.AVZpFH), children: items1 };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj3 = { title: intl.string(intl6.t.ZVZVwR) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl6.intl;
  intl2 = intl6.intl;
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  let obj4 = {
    icon: metroImportDefault(FileUpIcon.FileUpIcon, {}),
    label: intl3.string(intl6.t["/GUaXh"]),
    disabled: first,
    onPress: _asyncToGenerator(async (arg0, value) => {
      let obj2;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              let closure_0 = tmp;
              c1 = 1;
              c2 = 1;
              const obj5 = { value: obj2.writeCaches(), done: false };
              obj2 = CacheActionCreators;
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp14) {
          c2 = 3;
          throw tmp14;
        }
      }
    })
  };
  const TableRow = TableRow4.TableRow;
  intl3 = intl6.intl;
  const items = [metroImportDefault(TableRow, obj4), , ];
  let tmp8Result3 = null != DiskUsageManagerDefault.calculateSize;
  const tmp9 = _asyncToGenerator;
  if (tmp8Result3) {
    let obj5 = { icon: tmp8(FileIcon.FileIcon, {}), label: string(isCalculating ? t.Ynmbie : t.iAFGRu), trailing: tmp8Result, disabled: first, accessibilityState: obj6, onPress: handleCalculateSize };
    const TableRow2 = TableRow4.TableRow;
    const intl4 = intl6.intl;
    string = intl4.string;
    t = intl6.t;
    tmp8Result = null;
    if (isCalculating) {
      tmp8Result = tmp8(ActivityIndicator_ActivityIndicator.ActivityIndicator, { size: "small", accessible: false });
    }
    obj6 = { busy: isCalculating, disabled: first };
    tmp8Result3 = tmp8(TableRow2, obj5);
  }
  let obj7 = { hasIcons: true, children: items };
  items[1] = tmp8Result3;
  const obj8 = {
    variant: "danger",
    icon: metroImportDefault(FileWarningIcon.FileWarningIcon, { color: "text-feedback-critical" }),
    label: intl5.string(intl6.t.tgwiMO),
    disabled: first,
    onPress: tmp9(function*(arg0, value) {
      let obj4;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj5 = { value, done: true };
          return obj5;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              let closure_0 = tmp;
              const obj2 = DiskUsageManagerDefault;
              obj2.clearCaches();
              const obj3 = CacheActionCreators;
              obj3.clearCaches();
              c1 = 1;
              c2 = 1;
              const obj7 = { value: obj4.browserManagerClearWebsiteData(), done: false };
              obj4 = BrowserManager;
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp20) {
          c2 = 3;
          throw tmp20;
        }
      }
    })
  };
  const TableRow3 = TableRow4.TableRow;
  intl5 = intl6.intl;
  items[2] = metroImportDefault(TableRow3, obj8);
  items1 = [tmp7(TableRowGroup, obj7), ];
  let tmp8Result4 = null != diskUsageState;
  if (tmp8Result4) {
    const obj9 = { state: diskUsageState, onDiagnosticsBusyChange: tmp5 };
    tmp8Result4 = tmp8(CacheActionsDiskUsageSectionDefault, obj9);
  }
  items1[1] = tmp8Result4;
  return metroImportAll(ActionSheet, obj2);
}
const useState = react.useState;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const CacheActionsActionSheet_str = "CacheActionsActionSheet";
let obj = {
  useTitle: function useCacheActionsTitle() {
    const intl = intl6.intl;
    return intl.string(intl6.t.ZVZVwR);
  },
  parent: null,
  IconComponent: FileWarningIcon.FileWarningIcon,
  onPress: function handleCacheActionsPress() {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { default: CacheActionsActionSheet };
    obj.openLazy(Promise.resolve(obj2), CacheActionsActionSheet_str);
  },
  usePredicate: function useCacheActionsPredicate() {
    let connected;
    const items = [GatewayConnectionStore];
    const obj = get_initialized;
    const stateFromStores = obj.useStateFromStores(items, () => connected.isConnected());
    const DeveloperMode = UserSettings.DeveloperMode;
    const tmp2 = DeveloperMode.useSetting() && stateFromStores;
    return tmp2;
  },
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CacheActionsSetting.tsx");

export default pressable;
