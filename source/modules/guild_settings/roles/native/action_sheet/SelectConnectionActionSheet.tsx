// Module ID: 16333
// Function ID: 127496
// Name: IdentityApplicationRow
// Dependencies: [57, 31, 27, 33, 9984, 5165, 1273, 4066, 5186, 1212, 6735, 1392, 3976, 4098, 8360, 5500, 8760, 5189, 5121, 5503, 2]
// Exports: default

// Module 16333 (IdentityApplicationRow)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_6;
let closure_7;
const require = arg1;
function IdentityApplicationRow(arg0) {
  let applicationId;
  let onPress;
  ({ applicationId, onPress } = arg0);
  let obj = require(9984) /* useRequestApplication */;
  const getOrFetchApplicationBatched = obj.useGetOrFetchApplicationBatched(applicationId);
  if (null == getOrFetchApplicationBatched) {
    return null;
  } else {
    const bot = getOrFetchApplicationBatched.bot;
    obj = {};
    let tmp5 = null;
    if (null != bot) {
      obj = { user: bot, size: require(1273) /* Button */.AvatarSizes.XSMALL, guildId: undefined };
      tmp5 = callback2(require(1273) /* Button */.Avatar, obj);
    }
    obj.icon = tmp5;
    obj.label = getOrFetchApplicationBatched.name;
    let description;
    if ("" !== getOrFetchApplicationBatched.description) {
      description = getOrFetchApplicationBatched.description;
    }
    obj.subLabel = description;
    obj.onPress = onPress;
    return callback2(require(5165) /* TableRowInner */.TableRow, obj);
  }
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx");

export default function SelectConnectionActionSheet(arg0) {
  let _slicedToArray;
  let dependencyMap;
  let gameApplicationIds;
  let importDefault;
  let integrations;
  let onCompleteIdentityApplication;
  let require;
  ({ addConnection: require, excludedConnections: importDefault, excludedApplications: dependencyMap, integrations, onCompleteApplication: _slicedToArray, gameApplicationIds, onCompleteIdentityApplication } = arg0);
  let closure_5 = importDefault(4066)();
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.Sm0YG7);
  let tmp2 = callback(onCompleteIdentityApplication.useState(0), 2);
  const first = tmp2[0];
  let found;
  if (null != integrations) {
    found = integrations.filter((application) => {
      application = application.application;
      let prop;
      if (null != application) {
        prop = application.roleConnectionsVerificationUrl;
      }
      let tmp2 = null != prop;
      if (tmp2) {
        const application2 = application.application;
        let id;
        if (null != application2) {
          id = application2.id;
        }
        tmp2 = !set2.has(id);
      }
      return tmp2;
    });
  }
  let obj1 = require(6735) /* usePlatformAllowed */;
  const platforms = obj1.usePlatforms();
  const found1 = platforms.filter((type) => !set.has(type.type));
  let mapped1;
  const mapped = found1.map((icon) => {
    let closure_0 = icon;
    let obj = outer1_0(outer1_2[11]);
    icon = icon.icon;
    const source = obj.makeSource(outer1_0(outer1_2[12]).isThemeDark(closure_5) ? icon.darkPNG : icon.lightPNG);
    obj = {
      icon: outer1_6(outer1_0(outer1_2[6]).Icon, { source, disableColor: true }),
      label: icon.name,
      onPress() {
        icon(icon.type);
        outer2_1(outer2_2[13]).hideActionSheet();
      }
    };
    return outer1_6(outer1_0(outer1_2[5]).TableRow, obj, "row-" + icon.type);
  });
  if (null != found) {
    mapped1 = found.map((application) => {
      application = application.application;
      let tmp = null;
      if (null != application) {
        let obj = {};
        obj = { user: application.bot, size: outer1_0(outer1_2[6]).AvatarSizes.XSMALL, guildId: undefined };
        obj.icon = outer1_6(outer1_0(outer1_2[6]).Avatar, obj);
        obj.label = application.name;
        let description;
        if ("" !== application.description) {
          description = application.description;
        }
        obj.subLabel = description;
        obj.onPress = function onPress() {
          outer1_3(application.id);
          outer2_1(outer2_2[13]).hideActionSheet();
        };
        const _HermesInternal = HermesInternal;
        tmp = outer1_6(outer1_0(outer1_2[5]).TableRow, obj, "row-" + application.id);
        const tmp2 = outer1_6;
      }
      return tmp;
    });
  }
  if (null == gameApplicationIds) {
    gameApplicationIds = [];
  }
  const found2 = gameApplicationIds.filter((arg0) => !set2.has(arg0));
  if (null != onCompleteIdentityApplication) {
    let mapped2 = found2.map((applicationId) => {
      let closure_0 = applicationId;
      return outer1_6(outer1_8, {
        applicationId,
        onPress() {
          outer1_4(closure_0);
          outer2_1(outer2_2[13]).hideActionSheet();
        }
      }, "row-identity-" + applicationId);
    });
  } else {
    mapped2 = [];
  }
  let length;
  if (null != mapped1) {
    length = mapped1.length;
  }
  let num = 0;
  if (null != length) {
    num = length;
  }
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const items = [intl2.string(require(1212) /* getSystemLocale */.t["3fe7U5"])];
  if (num > 0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    items.push(intl3.string(require(1212) /* getSystemLocale */.t.PHjkRE));
  }
  if (mapped2.length > 0) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    items.push(intl4.string(require(1212) /* getSystemLocale */.t.y3ZnnU));
  }
  let obj2 = require(8360) /* useSegmentedControlState */;
  obj = { pageWidth: 0, defaultIndex: first, onSetActiveIndex: tmp2[1], items: items.map((id) => ({ id, label: id, page: null })) };
  const segmentedControlState = obj2.useSegmentedControlState(obj);
  if (1 === first) {
    if (tmp8) {
      mapped2 = mapped1;
    }
    let tmp17 = mapped2;
  } else {
    tmp17 = mapped;
    if (2 === first) {
      tmp17 = mapped2;
    }
  }
  obj = { scrollable: true, header: null, startExpanded: true };
  obj.header = callback2(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  if (num > 0) {
    obj1 = {};
    obj2 = { state: segmentedControlState };
    obj1.children = callback2(require(8760) /* SegmentedControl */.SegmentedControl, obj2);
    let tmp19 = callback2(closure_5, obj1);
  } else {
    tmp19 = null;
  }
  const items1 = [tmp19, ];
  const obj3 = {};
  const obj4 = { bottom: true };
  const obj5 = { hasIcons: true, children: tmp17 };
  obj4.children = callback2(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj5);
  obj3.children = callback2(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj4);
  items1[1] = callback2(require(5189) /* BottomSheetModal */.BottomSheetScrollView, obj3);
  obj.children = items1;
  return closure_7(require(5500) /* ActionSheet */.ActionSheet, obj);
};
