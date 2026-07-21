// Module ID: 13737
// Function ID: 103885
// Name: AddApplicationIdentityTableRow
// Dependencies: []
// Exports: default

// Module 13737 (AddApplicationIdentityTableRow)
function AddApplicationIdentityTableRow(application) {
  let end;
  let start;
  application = application.application;
  ({ start, end } = application);
  const tmp = importDefault(dependencyMap[18])(application);
  const require = tmp.startAuthorization;
  const importDefault = importDefault(dependencyMap[19])(importDefault(dependencyMap[20]).ACTION_SHEET).analyticsLocations;
  const tmp2 = importDefault(dependencyMap[19]);
  let obj = require(dependencyMap[4]);
  const iconSource = application.getIconSource(obj.getIconSize(require(dependencyMap[4]).IconSizes.LARGE));
  obj = {
    start,
    end,
    label: application.name,
    onPress() {
      let obj = analyticsLocations(closure_2[14]);
      obj.hideActionSheet();
      obj = { analyticsLocations };
      startAuthorization(obj);
    }
  };
  let tmp6 = null;
  if (null != iconSource) {
    obj = { source: iconSource, style: tmp3.icon, disableColor: true };
    tmp6 = callback3(require(dependencyMap[4]).Icon, obj);
  }
  obj.icon = tmp6;
  obj.trailing = callback3(require(dependencyMap[13]).TableRow.Arrow, {});
  obj.disabled = !tmp.canStartAuthorization;
  return callback3(require(dependencyMap[13]).TableRow, obj, application.id);
}
const AnalyticsLocations = require(dependencyMap[0]).AnalyticsLocations;
let closure_4 = require(dependencyMap[1]).getMigratedApplicationIdentityConnectionsScreenApplications;
const _module = require(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = _module);
const _module1 = require(dependencyMap[3]);
let obj = { list: { paddingHorizontal: 16 } };
obj = {};
const _module2 = require(dependencyMap[4]);
obj.borderRadius = _module2.getIconSize(require(dependencyMap[4]).Icon.Sizes.LARGE);
obj.icon = obj;
let closure_7 = _module1.createStyles(obj);
const _module3 = require(dependencyMap[21]);
const result = _module3.fileFinishedImporting("modules/user_settings/connections/native/AddConnectionActionSheet.tsx");

export default function AddConnectionActionSheet() {
  const callback = importDefault(dependencyMap[5])();
  let obj = callback(dependencyMap[7]);
  const platforms = obj.usePlatforms();
  const found = platforms.filter((migrationData) => {
    let tmp = null == migrationData.migrationData;
    if (!tmp) {
      migrationData = migrationData.migrationData;
      tmp = !migrationData.getMigrationExperimentEnabled("AddConnectionActionSheet");
    }
    return tmp;
  });
  const importDefault = found;
  const tmp = callback5();
  const tmp2 = importDefault(dependencyMap[8]);
  const found1 = importDefault(dependencyMap[8])(callback2("AddConnectionActionSheet")).filter((arg0) => null != arg0);
  const dependencyMap = found1;
  obj = { 1891290120: null, -475247768: null };
  obj = {};
  const intl = callback(dependencyMap[11]).intl;
  obj.title = intl.string(callback(dependencyMap[11]).t.Zhcj9X);
  obj.header = callback3(callback(dependencyMap[10]).BottomSheetTitleHeader, obj);
  const obj1 = { style: tmp.list, contentContainerStyle: { paddingBottom: importDefault(dependencyMap[6])().bottom } };
  const items = [
    found1.map((application) => {
      const obj = { application, start: 0 === arg1 };
      let tmp3 = arg1 === found1.length - 1;
      if (tmp3) {
        tmp3 = 0 === found.length;
      }
      obj.end = tmp3;
      return closure_5(closure_8, obj, application.id);
    }),
    found.map((type) => {
      type = type.type;
      const callback = type;
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
        let obj = callback(closure_2[14]);
        obj.hideActionSheet();
        obj = { platformType: type, location: constants.USER_SETTINGS };
        callback(closure_2[15])(obj);
      };
      obj = {};
      const obj3 = callback(found1[16]);
      const tmp = callback2;
      const tmp4 = callback2;
      obj.source = obj3.makeSource(callback(found1[17]).isThemeDark(callback) ? icon.darkPNG : icon.lightPNG);
      obj.disableColor = true;
      obj.icon = tmp4(callback(found1[4]).Icon, obj);
      obj.trailing = callback2(callback(found1[13]).TableRow.Arrow, {});
      return tmp(callback(found1[13]).TableRow, obj, type);
    })
  ];
  obj1.children = items;
  obj.children = callback4(callback(dependencyMap[12]).BottomSheetScrollView, obj1);
  return callback3(callback(dependencyMap[9]).BottomSheet, obj);
};
