// Module ID: 18074
// Function ID: 18075
// Name: SelectConnectionActionSheet
// Dependencies: [32, 19, 17, 21, 11814, 5822, 1177, 4690, 7394, 1115, 7745, 1397, 4607, 4723, 9890, 7442, 9891, 6869, 7368, 5904, 2]
// Exports: default

// Module 18074 (SelectConnectionActionSheet)
import util from "util" /* 1115 */;
import useThemeDefault from "useTheme" /* 4690 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import TableRowGroup from "TableRowGroup" /* 5904 */;
import BottomSheetModal from "BottomSheetModal" /* 6869 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7368 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7394 */;
import ActionSheet from "ActionSheet" /* 7442 */;
import ConnectionsHooks from "ConnectionsHooks" /* 7745 */;
import SegmentedControlState from "SegmentedControlState" /* 9890 */;
import useGetOrFetchApplicationBatched from "useGetOrFetchApplicationBatched" /* 11814 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function IdentityApplicationRow(arg0) {
  ({ applicationId, onPress } = arg0);
  const getOrFetchApplicationBatched = useGetOrFetchApplicationBatched.useGetOrFetchApplicationBatched(applicationId);
  if (null == getOrFetchApplicationBatched) {
    return null;
  } else {
    const bot = getOrFetchApplicationBatched.bot;
    let tmp6Result = null;
    if (null != bot) {
      const obj2 = { user: bot, size: tmp(1177).AvatarSizes.XSMALL, guildId: "r" };
      tmp6Result = tmp6(tmp(1177).Avatar, obj2);
    }
    const obj3 = { icon: tmp6Result, label: getOrFetchApplicationBatched.name, subLabel: null, onPress: null };
    let description;
    if ("" !== getOrFetchApplicationBatched.description) {
      description = getOrFetchApplicationBatched.description;
    }
    obj3.subLabel = description;
    obj3.onPress = onPress;
    return timestampProducer(tmp(5822).TableRow, obj3);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx");

export default function SelectConnectionActionSheet(arg0) {
  ({ addConnection: require, excludedConnections: importDefault, excludedApplications: dependencyMap, integrations, onCompleteApplication: _slicedToArray, gameApplicationIds, onCompleteIdentityApplication } = arg0);
  closure_5 = useThemeDefault();
  let obj = { title: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.Sm0YG7);
  const tmp5 = _slicedToArray(onCompleteIdentityApplication.useState(0), 2);
  const first = tmp5[0];
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
        if (application2 != null) {
          id = application2.id;
        }
        tmp2 = !set2.has(id);
      }
      return tmp2;
    });
  }
  const tmp4 = closure_6(BottomSheetTitleHeader.BottomSheetTitleHeader, obj);
  const platforms = ConnectionsHooks.usePlatforms();
  const found1 = platforms.filter((type) => !set.has(type.type));
  let mapped1;
  const mapped = found1.map((icon) => {
    const obj = require("AvatarUtils");
    icon = icon.icon;
    const source = obj.makeSource(require("shared").isThemeDark(closure_5) ? icon.darkPNG : icon.lightPNG);
    const obj2 = require("shared");
    return closure_1_6(require("TableRow").TableRow, {
      icon: closure_1_6(require("native").Icon, { source, disableColor: true }),
      label: icon.name,
      onPress() {
        require(icon.type);
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }
    }, "row-" + icon.type);
  });
  if (found != null) {
    mapped1 = found.map((application) => {
      application = application.application;
      let tmp = null;
      if (null != application) {
        const obj = { icon: null, label: null, subLabel: null, onPress: null };
        const obj2 = { user: application.bot, size: require("native").AvatarSizes.XSMALL, guildId: "r" };
        obj.icon = closure_1_6(require("native").Avatar, obj2);
        obj.label = application.name;
        let description;
        if ("" !== application.description) {
          description = application.description;
        }
        obj.subLabel = description;
        obj.onPress = function onPress() {
          _slicedToArray(application.id);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        };
        const _HermesInternal = HermesInternal;
        tmp = closure_1_6(require("TableRow").TableRow, obj, "row-" + application.id);
      }
      return tmp;
    });
  }
  if (gameApplicationIds == null) {
    gameApplicationIds = [];
  }
  const found2 = gameApplicationIds.filter((item) => !set2.has(item));
  if (null != onCompleteIdentityApplication) {
    let mapped2 = found2.map((applicationId) => {
      closure_0 = applicationId;
      return closure_1_6(IdentityApplicationRow, {
        applicationId,
        onPress() {
          onCompleteIdentityApplication(closure_0);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
      }, "row-identity-" + applicationId);
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
  const intl2 = tmp3(1115).intl;
  const items = [intl2.string(util.t["3fe7U5"])];
  if (num > 0) {
    const intl3 = tmp3(1115).intl;
    items.push(intl3.string(tmp3(1115).t.PHjkRE));
  }
  if (mapped2.length > 0) {
    const intl4 = tmp3(1115).intl;
    items.push(intl4.string(tmp3(1115).t.y3ZnnU));
  }
  const tmp3Result = ConnectionsHooks;
  const tmp3Result2 = SegmentedControlState;
  const segmentedControlState = tmp3Result2.useSegmentedControlState({ pageWidth: 0, defaultIndex: first, onSetActiveIndex: tmp5[1], items: items.map((id) => ({ id, label: id, page: null })) });
  if (1 === first) {
    if (tmp10) {
      mapped2 = mapped1;
    }
    let tmp15 = mapped2;
  } else {
    tmp15 = mapped;
    if (2 === first) {
      tmp15 = mapped2;
    }
  }
  const obj3 = { scrollable: true, header: tmp4, startExpanded: true, children: null };
  if (num > 0) {
    const obj4 = { children: null };
    const obj5 = { state: segmentedControlState };
    obj4.children = tmp2(tmp3(9891).SegmentedControl, obj5);
    let tmp2Result = tmp2(closure_5, obj4);
  } else {
    tmp2Result = null;
  }
  const items1 = [tmp2Result, ];
  const obj6 = { children: null };
  let obj2 = { pageWidth: 0, defaultIndex: first, onSetActiveIndex: tmp5[1], items: items.map((id) => ({ id, label: id, page: null })) };
  const tmp16 = closure_7;
  obj6.children = closure_6(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, children: closure_6(TableRowGroup.TableRowGroup, { hasIcons: true, children: tmp15 }) });
  items1[1] = closure_6(BottomSheetModal.BottomSheetScrollView, obj6);
  obj3.children = items1;
  return tmp16(ActionSheet.ActionSheet, obj3);
};
