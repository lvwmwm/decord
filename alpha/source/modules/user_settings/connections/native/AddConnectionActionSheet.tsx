// Module ID: 16810
// Function ID: 16811
// Name: AddConnectionActionSheet
// Dependencies: [1072, 2024, 21, 5009, 1188, 5248, 1626, 7675, 7324, 5267, 7315, 1114, 5270, 6969, 5253, 9700, 1410, 5016, 7321, 7320, 7345, 2]
// Exports: default

// Module 16810 (AddConnectionActionSheet)
import Constants from "Constants" /* 1072 */;
import AvatarUtils from "AvatarUtils" /* 1410 */;
import UserApplicationIdentityConstants from "UserApplicationIdentityConstants" /* 2024 */;
import shared from "shared" /* 5016 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import TableRow2 from "TableRow" /* 6969 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import native_mod from "native" /* 1188 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require, type;

let hasOwnProperty;
let metroRequire;
let native;
let obj2;
function AddApplicationIdentityTableRow(application) {
  let _undefined;
  let c0;
  let canStartAuthorization;
  let end;
  let start;
  let tmp7Result;
  application = application.application;
  _require = undefined;
  let analyticsLocations;
  ({ start, end } = application);
  ({ startAuthorization: c0, canStartAuthorization } = analyticsLocations(7321)(application));
  const tmp2 = analyticsLocations(7321)(application);
  const tmp3 = analyticsLocations(7320);
  analyticsLocations = tmp3(analyticsLocations(7345).ACTION_SHEET).analyticsLocations;
  const getIconSource = application.getIconSource;
  const tmp4 = closure_7();
  let obj = require("native");
  const iconSource = getIconSource(obj.getIconSize(require("native").IconSizes.LARGE));
  let obj2 = {
    start,
    end,
    label: application.name,
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = { analyticsLocations };
      _undefined(obj2);
    },
    icon: tmp7Result,
    trailing: closure_5(require("TableRow").TableRow.Arrow, {}),
    disabled: !canStartAuthorization
  };
  tmp7Result = null;
  const TableRow = require("TableRow").TableRow;
  if (null != iconSource) {
    const obj3 = { source: iconSource, style: tmp4.icon, disableColor: true };
    tmp7Result = tmp7(tmp5(1188).Icon, obj3);
  }
  return closure_5(TableRow, obj2, application.id);
}
const AnalyticsLocations = Constants.AnalyticsLocations;
let closure_4 = UserApplicationIdentityConstants.getMigratedApplicationIdentityConnectionsScreenApplications;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: { paddingHorizontal: 16 }, icon: obj2 };
obj2 = { borderRadius: native.getIconSize(native.Icon.Sizes.LARGE) };
createStyles = createStyles.createStyles;
native = native_mod;
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/AddConnectionActionSheet.tsx");

export default function AddConnectionActionSheet() {
  let BottomSheetScrollView;
  let BottomSheetTitleHeader;
  let closure_0;
  let found;
  let found1;
  let intl;
  let items;
  let obj3;
  let obj4;
  let tmp = closure_7();
  _require = found(found1[5])();
  const bottom = found(found1[6])().bottom;
  let obj = require("ConnectionsHooks");
  const platforms = obj.usePlatforms();
  found = platforms.filter((migrationData) => null == migrationData.migrationData);
  let tmp2 = found(found1[8]);
  const tmp2Result = tmp2(closure_4());
  found1 = tmp2Result.filter((item) => null != item);
  let obj2 = { scrollable: true, startExpanded: true, header: closure_5(BottomSheetTitleHeader, obj3), children: closure_6(BottomSheetScrollView, obj4) };
  BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  obj3 = { title: intl.string(require("intl").t.Zhcj9X) };
  BottomSheetTitleHeader = require("BottomSheetTitleHeader").BottomSheetTitleHeader;
  intl = require("intl").intl;
  obj4 = { style: tmp.list, contentContainerStyle: { paddingBottom: bottom }, children: items };
  BottomSheetScrollView = require("BottomSheetModal").BottomSheetScrollView;
  items = [
    found1.map((application, index) => {
      let tmp3;
      const obj = { application, start: 0 === index, end: tmp3 };
      tmp3 = index === found1.length - 1;
      const tmp = hasOwnProperty;
      const tmp2 = AddApplicationIdentityTableRow;
      if (tmp3) {
        tmp3 = 0 === found.length;
      }
      return tmp(tmp2, obj, application.id);
    }),
    found.map((type, index) => {
      let Icon;
      let obj2;
      type = type.type;
      const icon = type.icon;
      const name = type.name;
      let tmp4 = 0 === index;
      const TableRow = TableRow2.TableRow;
      if (tmp4) {
        tmp4 = 0 === found1.length;
      }
      let obj = {
        start: tmp4,
        end: index === found.length - 1,
        label: name,
        onPress() {
          const obj = found(found1[14]);
          obj.hideActionSheet();
          const obj2 = { platformType: type, location: constants.USER_SETTINGS };
          found(found1[15])(obj2);
        },
        icon: hasOwnProperty(Icon, obj2),
        trailing: hasOwnProperty(tmp2(6969).TableRow.Arrow, {})
      };
      Icon = tmp2(1188).Icon;
      const makeSource = tmp2(1410).makeSource;
      AvatarUtils;
      const tmp2Result2 = shared;
      obj2 = { source: makeSource(tmp2Result2.isThemeDark(closure_0) ? icon.darkPNG : icon.lightPNG), disableColor: true };
      return hasOwnProperty(TableRow, obj, type);
    })
  ];
  return closure_5(BottomSheet, obj2);
};
