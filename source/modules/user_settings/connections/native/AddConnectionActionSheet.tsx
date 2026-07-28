// Module ID: 13967
// Function ID: 106725
// Name: AddApplicationIdentityTableRow
// Dependencies: [653, 4850, 33, 4165, 1273, 4101, 1557, 5741, 5503, 5221, 5220, 1212, 5223, 5198, 4133, 8941, 1392, 4011, 5500, 5497, 5517, 2]
// Exports: default

// Module 13967 (AddApplicationIdentityTableRow)
import { AnalyticsLocations } from "ME";
import { getMigratedApplicationIdentityConnectionsScreenApplications as closure_4 } from "items1";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import Button from "Button";

let closure_5;
let closure_6;
function AddApplicationIdentityTableRow(application) {
  let end;
  let start;
  application = application.application;
  ({ start, end } = application);
  const tmp = analyticsLocations(5500)(application);
  const startAuthorization = tmp.startAuthorization;
  analyticsLocations = analyticsLocations(5497)(analyticsLocations(5517).ACTION_SHEET).analyticsLocations;
  const tmp2 = analyticsLocations(5497);
  let obj = startAuthorization(1273);
  const iconSource = application.getIconSource(obj.getIconSize(startAuthorization(1273).IconSizes.LARGE));
  obj = {
    start,
    end,
    label: application.name,
    onPress() {
      let obj = analyticsLocations(outer1_2[14]);
      obj.hideActionSheet();
      obj = { analyticsLocations };
      startAuthorization(obj);
    }
  };
  let tmp6 = null;
  if (null != iconSource) {
    obj = { source: iconSource, style: tmp3.icon, disableColor: true };
    tmp6 = callback2(startAuthorization(1273).Icon, obj);
  }
  obj.icon = tmp6;
  obj.trailing = callback2(startAuthorization(5198).TableRow.Arrow, {});
  obj.disabled = !tmp.canStartAuthorization;
  return callback2(startAuthorization(5198).TableRow, obj, application.id);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = { list: { paddingHorizontal: 16 } };
obj = {};
obj.borderRadius = Button.getIconSize(require("Button").Icon.Sizes.LARGE);
obj.icon = obj;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/AddConnectionActionSheet.tsx");

export default function AddConnectionActionSheet() {
  const _require = found(found1[5])();
  let obj = _require(found1[7]);
  const platforms = obj.usePlatforms();
  found = platforms.filter((migrationData) => {
    let tmp = null == migrationData.migrationData;
    if (!tmp) {
      migrationData = migrationData.migrationData;
      tmp = !migrationData.getMigrationExperimentEnabled("AddConnectionActionSheet");
    }
    return tmp;
  });
  let tmp = callback4();
  let tmp2 = found(found1[8]);
  found1 = found(found1[8])(callback("AddConnectionActionSheet")).filter((arg0) => null != arg0);
  obj = { scrollable: true, startExpanded: true };
  obj = {};
  const intl = _require(found1[11]).intl;
  obj.title = intl.string(_require(found1[11]).t.Zhcj9X);
  obj.header = callback2(_require(found1[10]).BottomSheetTitleHeader, obj);
  const obj1 = { style: tmp.list, contentContainerStyle: { paddingBottom: found(found1[6])().bottom } };
  const items = [
    found1.map((application) => {
      const obj = { application, start: 0 === arg1 };
      let tmp3 = arg1 === found1.length - 1;
      if (tmp3) {
        tmp3 = 0 === found.length;
      }
      obj.end = tmp3;
      return outer1_5(outer1_8, obj, application.id);
    }),
    found.map((type) => {
      type = type.type;
      const icon = type.icon;
      let obj = {};
      let tmp2 = 0 === arg1;
      if (tmp2) {
        tmp2 = 0 === found1.length;
      }
      obj.start = tmp2;
      obj.end = arg1 === found.length - 1;
      obj.label = type.name;
      obj.onPress = function onPress() {
        let obj = found(found1[14]);
        obj.hideActionSheet();
        obj = { platformType: type, location: outer2_3.USER_SETTINGS };
        found(found1[15])(obj);
      };
      obj = {};
      const obj3 = callback(found1[16]);
      const tmp = outer1_5;
      const tmp4 = outer1_5;
      obj.source = obj3.makeSource(callback(found1[17]).isThemeDark(type) ? icon.darkPNG : icon.lightPNG);
      obj.disableColor = true;
      obj.icon = tmp4(callback(found1[4]).Icon, obj);
      obj.trailing = outer1_5(callback(found1[13]).TableRow.Arrow, {});
      return tmp(callback(found1[13]).TableRow, obj, type);
    })
  ];
  obj1.children = items;
  obj.children = callback3(_require(found1[12]).BottomSheetScrollView, obj1);
  return callback2(_require(found1[9]).BottomSheet, obj);
};
