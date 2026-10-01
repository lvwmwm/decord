// Module ID: 17440
// Function ID: 17441
// Name: SelectConnectionActionSheet
// Dependencies: [32, 19, 17, 21, 11058, 5917, 1177, 4767, 6570, 1115, 6923, 1397, 4685, 4800, 9083, 6618, 9084, 6045, 6544, 5999, 2]
// Exports: default

// Module 17440 (SelectConnectionActionSheet)
import react_native from "react-native" /* 17 */;
import intl5 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import TableRow2 from "TableRow" /* 5917 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6570 */;
import useGetOrFetchApplicationBatched from "useGetOrFetchApplicationBatched" /* 11058 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let application, icon;

let metroImportDefault;
let metroRequire;
let tmp3;
const TableRowGroup = tmp3(5999);
const BottomSheetModal = tmp3(6045);
const common_SafeAreaView = tmp3(6544);
const ActionSheet2 = tmp3(6618);
const ConnectionsHooks = tmp3(6923);
const SegmentedControlState = tmp3(9083);
const SegmentedControl = tmp3(9084);
function IdentityApplicationRow(arg0) {
  let applicationId;
  let description;
  let onPress;
  ({ applicationId, onPress } = arg0);
  const obj = useGetOrFetchApplicationBatched;
  const getOrFetchApplicationBatched = obj.useGetOrFetchApplicationBatched(applicationId);
  if (null == getOrFetchApplicationBatched) {
    return null;
  } else {
    const bot = getOrFetchApplicationBatched.bot;
    let tmp6Result = null;
    const TableRow = tmp(5917).TableRow;
    if (null != bot) {
      const obj2 = { user: bot, size: native.AvatarSizes.XSMALL, guildId: "Array" };
      const Avatar = tmp(1177).Avatar;
      tmp6Result = tmp6(Avatar, obj2);
    }
    const obj3 = { icon: tmp6Result, label: getOrFetchApplicationBatched.name, subLabel: description, onPress };
    description = undefined;
    if ("" !== getOrFetchApplicationBatched.description) {
      description = getOrFetchApplicationBatched.description;
    }
    return metroRequire(TableRow, obj3);
  }
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx");

export default function SelectConnectionActionSheet(arg0) {
  let SafeAreaPaddingView;
  let first;
  let gameApplicationIds;
  let intl;
  let items1;
  let mapped2;
  let obj5;
  let obj7;
  let onCompleteIdentityApplication;
  let tmp16;
  let tmp2Result;
  let tmp7;
  ({ addConnection: require, excludedConnections: importDefault, excludedApplications: dependencyMap, integrations, onCompleteApplication: _slicedToArray, gameApplicationIds, onCompleteIdentityApplication } = arg0);
  let tmp = dependencyMap;
  let closure_5 = useThemeDefault();
  let tmp2 = closure_6;
  let obj = { title: intl.string(intl5.t.Sm0YG7) };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl5.intl;
  const tmp4 = closure_6(BottomSheetTitleHeader, obj);
  [first, tmp7] = onCompleteIdentityApplication.useState(0);
  let found;
  if (integrations != null) {
    found = integrations.filter((application) => {
      application = application.application;
      let prop;
      if (application != null) {
        prop = application.roleConnectionsVerificationUrl;
      }
      let tmp2 = null != prop;
      if (tmp2) {
        const application2 = application.application;
        let id;
        const has = dependencyMap.has;
        if (application2 != null) {
          id = application2.id;
        }
        tmp2 = !has(id);
      }
      return tmp2;
    });
  }
  const tmp3Result = ConnectionsHooks;
  const platforms = tmp3Result.usePlatforms();
  const found1 = platforms.filter((type) => !importDefault.has(type.type));
  let mapped1;
  const mapped = found1.map((icon) => {
    const makeSource = AvatarUtils.makeSource;
    AvatarUtils;
    let obj = shared;
    icon = icon.icon;
    const source = makeSource(obj.isThemeDark(closure_5) ? icon.darkPNG : icon.lightPNG);
    const obj2 = {
      icon: closure_1_6(native.Icon, { source, disableColor: true }),
      label: icon.name,
      onPress() {
        require(icon.type);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      }
    };
    const TableRow = tmp(tmp2[5]).TableRow;
    return closure_1_6(TableRow, obj2, "row-" + icon.type);
  });
  if (found != null) {
    mapped1 = found.map((application) => {
      let Avatar;
      let description;
      let obj2;
      application = application.application;
      let tmp = null;
      if (null != application) {
        let obj = {
          icon: closure_1_6(Avatar, obj2),
          label: application.name,
          subLabel: description,
          onPress() {
              _slicedToArray(application.id);
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
            }
        };
        const TableRow = TableRow2.TableRow;
        obj2 = { user: application.bot, size: native.AvatarSizes.XSMALL, guildId: "Array" };
        Avatar = native.Avatar;
        description = undefined;
        const tmp2 = closure_1_6;
        if ("" !== application.description) {
          description = application.description;
        }
        const _HermesInternal = HermesInternal;
        tmp = tmp2(TableRow, obj, "row-" + application.id);
      }
      return tmp;
    });
  }
  if (gameApplicationIds == null) {
    gameApplicationIds = [];
  }
  const found2 = gameApplicationIds.filter((item) => !dependencyMap.has(item));
  if (null != onCompleteIdentityApplication) {
    mapped2 = found2.map((applicationId) => {
      let closure_0 = applicationId;
      let obj = {
        applicationId,
        onPress() {
          onCompleteIdentityApplication(applicationId);
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        }
      };
      return closure_1_6(IdentityApplicationRow, obj, "row-identity-" + applicationId);
    });
  } else {
    mapped2 = [];
  }
  let num;
  if (mapped1 != null) {
    num = mapped1.length;
  }
  if (num == null) {
    num = 0;
  }
  const intl2 = intl5.intl;
  const items = [intl2.string(intl5.t["3fe7U5"])];
  if (num > 0) {
    const push = items.push;
    const intl3 = intl5.intl;
    push(intl3.string(intl5.t.PHjkRE));
  }
  if (mapped2.length > 0) {
    const push2 = items.push;
    const intl4 = intl5.intl;
    push2(intl4.string(intl5.t.y3ZnnU));
  }
  const tmp3Result2 = SegmentedControlState;
  let obj2 = { pageWidth: 0, defaultIndex: first, onSetActiveIndex: tmp7, items: items.map((id) => ({ id, label: id, page: null })) };
  const segmentedControlState = tmp3Result2.useSegmentedControlState(obj2);
  if (1 === first) {
    if (num > 0) {
      mapped2 = mapped1;
    }
    tmp16 = mapped2;
  } else {
    tmp16 = mapped;
    if (2 === first) {
      tmp16 = mapped2;
    }
  }
  const obj3 = { scrollable: true, header: tmp4, startExpanded: true, children: items1 };
  const ActionSheet = ActionSheet2.ActionSheet;
  const tmp17 = closure_7;
  if (num > 0) {
    const obj4 = { children: tmp2(SegmentedControl.SegmentedControl, obj5) };
    obj5 = { state: segmentedControlState };
    tmp2Result = tmp2(closure_5, obj4);
  } else {
    tmp2Result = null;
  }
  items1 = [tmp2Result, ];
  const obj6 = { children: tmp2(SafeAreaPaddingView, obj7) };
  const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  obj7 = { bottom: true, children: tmp2(TableRowGroup.TableRowGroup, { hasIcons: true, children: tmp16 }) };
  SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  items1[1] = tmp2(BottomSheetScrollView, obj6);
  return tmp17(ActionSheet, obj3);
};
