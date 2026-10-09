// Module ID: 15154
// Function ID: 15155
// Name: AddConnectionActionSheet
// Dependencies: [1085, 2026, 21, 5091, 1200, 558, 576, 4992, 1631, 7218, 6854, 6836, 6835, 1126, 6305, 6186, 5055, 9177, 1415, 4930, 6851, 6848, 6872, 2]

// Module 15154 (AddConnectionActionSheet)
import Constants from "Constants" /* 1085 */;
import AvatarUtils from "AvatarUtils" /* 1415 */;
import UserApplicationIdentityConstants from "UserApplicationIdentityConstants" /* 2026 */;
import shared from "shared" /* 4930 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import TableRow2 from "TableRow" /* 6186 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import native_mod from "native" /* 1200 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require, type;

let hasOwnProperty;
let metroRequire;
let native;
let obj2;
const AnalyticsLocations = Constants.AnalyticsLocations;
let closure_4 = UserApplicationIdentityConstants.getMigratedApplicationIdentityConnectionsScreenApplications;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: { paddingHorizontal: 16 }, icon: obj2 };
obj2 = { borderRadius: native.getIconSize(native.Icon.Sizes.LARGE) };
createStyles = createStyles.createStyles;
native = native_mod;
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function AddConnectionActionSheet() {
  let closure_0;
  let first;
  let found;
  let found1;
  let intl;
  let items;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp7;
  let tmp = _require;
  let tmp2 = found1;
  let obj = require("react");
  const cResult = obj.c(16);
  let tmp4 = closure_7();
  _require = found(found1[7])();
  const bottom = found(found1[8])().bottom;
  const tmp5 = found;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(migrationData) {
      let tmp = null == migrationData.migrationData;
      if (!tmp) {
        migrationData = migrationData.migrationData;
        tmp = !migrationData.getMigrationExperimentEnabled("AddConnectionActionSheet");
      }
      return tmp;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(tmp2[9]);
  const platforms = tmpResult.usePlatforms();
  found = platforms.filter(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = closure_4("AddConnectionActionSheet");
    cResult[1] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function b(arg0) {
      return null != arg0;
    };
    cResult[2] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[2];
  }
  const arr3 = tmp5(tmp2[10])(tmp7);
  found1 = arr3.filter(tmp10);
  BottomSheet = tmp(tmp2[11]).BottomSheet;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { title: intl.string(tmp(tmp2[13]).t.Zhcj9X) };
    const BottomSheetTitleHeader = tmp(tmp2[12]).BottomSheetTitleHeader;
    intl = tmp(tmp2[13]).intl;
    const tmp13 = closure_5(BottomSheetTitleHeader, obj2);
    cResult[3] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[3];
  }
  const BottomSheetScrollView = tmp(tmp2[14]).BottomSheetScrollView;
  const list = tmp4.list;
  if (cResult[4] !== bottom) {
    const obj3 = { paddingBottom: bottom };
    cResult[4] = bottom;
    cResult[5] = obj3;
    tmp14 = obj3;
  } else {
    tmp14 = cResult[5];
  }
  const mapped = found1.map((application, index) => {
    let tmp3;
    const obj = { application, start: 0 === index, end: tmp3 };
    tmp3 = index === found1.length - 1;
    const tmp = hasOwnProperty;
    const tmp2 = closure_8;
    if (tmp3) {
      tmp3 = 0 === found.length;
    }
    return tmp(tmp2, obj, application.id);
  });
  const mapped1 = found.map((type, index) => {
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
        const obj = found(found1[16]);
        obj.hideActionSheet();
        const obj2 = { platformType: type, location: constants.USER_SETTINGS };
        found(found1[17])(obj2);
      },
      icon: hasOwnProperty(Icon, obj2),
      trailing: hasOwnProperty(tmp2(6186).TableRow.Arrow, {})
    };
    Icon = tmp2(1200).Icon;
    const makeSource = tmp2(1415).makeSource;
    AvatarUtils;
    const tmp2Result2 = shared;
    obj2 = { source: makeSource(tmp2Result2.isThemeDark(closure_0) ? icon.darkPNG : icon.lightPNG), disableColor: true };
    return hasOwnProperty(TableRow, obj, type);
  });
  if (cResult[6] === BottomSheetScrollView) {
    if (cResult[7] === tmp4.list) {
      if (cResult[8] === mapped1) {
        if (cResult[9] === tmp14) {
          let tmp17;
          if (cResult[10] === mapped) {
            tmp17 = cResult[11];
          }
          if (cResult[12] === BottomSheet) {
            if (cResult[13] === tmp17) {
              let tmp19;
              if (cResult[14] === tmp11) {
                tmp19 = cResult[15];
              }
              return tmp19;
            }
          }
          const obj4 = { scrollable: true, startExpanded: true, header: tmp11, children: tmp17 };
          const tmp21 = closure_5(BottomSheet, obj4);
          cResult[12] = BottomSheet;
          cResult[13] = tmp17;
          cResult[14] = tmp11;
          cResult[15] = tmp21;
          tmp19 = tmp21;
        }
      }
    }
  }
  const obj5 = { style: list, contentContainerStyle: tmp14, children: items };
  items = [mapped, mapped1];
  const tmp18 = closure_6(BottomSheetScrollView, obj5);
  cResult[6] = BottomSheetScrollView;
  cResult[7] = tmp4.list;
  cResult[8] = mapped1;
  cResult[9] = tmp14;
  cResult[10] = mapped;
  cResult[11] = tmp18;
  tmp17 = tmp18;
}) : (function AddConnectionActionSheet() {
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
  _require = found(found1[7])();
  const bottom = found(found1[8])().bottom;
  let obj = require("ConnectionsHooks");
  const platforms = obj.usePlatforms();
  found = platforms.filter((migrationData) => {
    let tmp = null == migrationData.migrationData;
    if (!tmp) {
      migrationData = migrationData.migrationData;
      tmp = !migrationData.getMigrationExperimentEnabled("AddConnectionActionSheet");
    }
    return tmp;
  });
  let tmp2 = found(found1[10]);
  const tmp2Result = tmp2(closure_4("AddConnectionActionSheet"));
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
      const tmp2 = closure_8;
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
          const obj = found(found1[16]);
          obj.hideActionSheet();
          const obj2 = { platformType: type, location: constants.USER_SETTINGS };
          found(found1[17])(obj2);
        },
        icon: hasOwnProperty(Icon, obj2),
        trailing: hasOwnProperty(tmp2(6186).TableRow.Arrow, {})
      };
      Icon = tmp2(1200).Icon;
      const makeSource = tmp2(1415).makeSource;
      AvatarUtils;
      const tmp2Result2 = shared;
      obj2 = { source: makeSource(tmp2Result2.isThemeDark(closure_0) ? icon.darkPNG : icon.lightPNG), disableColor: true };
      return hasOwnProperty(TableRow, obj, type);
    })
  ];
  return closure_5(BottomSheet, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function AddApplicationIdentityTableRow(arg0) {
  let analyticsLocations;
  let application;
  let end;
  let start;
  let startAuthorization;
  let tmp7;
  let obj = startAuthorization(576);
  const cResult = obj.c(17);
  ({ application, start, end } = arg0);
  const tmp4 = analyticsLocations(6851)(application);
  startAuthorization = tmp4.startAuthorization;
  const canStartAuthorization = tmp4.canStartAuthorization;
  const tmp5 = analyticsLocations(6848);
  analyticsLocations = tmp5(analyticsLocations(6872).ACTION_SHEET).analyticsLocations;
  const tmp6 = closure_7();
  if (cResult[0] !== application) {
    const getIconSource = application.getIconSource;
    const tmpResult = startAuthorization(1200);
    const iconSource = getIconSource(tmpResult.getIconSize(tmp(1200).IconSizes.LARGE));
    cResult[0] = application;
    cResult[1] = iconSource;
    tmp7 = iconSource;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === analyticsLocations) {
    let tmp9;
    if (cResult[3] === startAuthorization) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp7) {
      let tmp10;
      let tmp14;
      if (cResult[6] === tmp6) {
        tmp10 = cResult[7];
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp16 = closure_5(startAuthorization(6186).TableRow.Arrow, {});
        cResult[8] = tmp16;
        tmp14 = tmp16;
      } else {
        tmp14 = cResult[8];
      }
      if (cResult[9] === application.id) {
        if (cResult[10] === application.name) {
          if (cResult[11] === end) {
            if (cResult[12] === start) {
              if (cResult[13] === tmp9) {
                if (cResult[14] === tmp10) {
                  let tmp18;
                  if (cResult[15] === !canStartAuthorization) {
                    tmp18 = cResult[16];
                  }
                  return tmp18;
                }
              }
            }
          }
        }
      }
      let obj2 = { start, end, label: application.name, onPress: tmp9, icon: tmp10, trailing: tmp14, disabled: !canStartAuthorization };
      const tmp20 = closure_5(startAuthorization(6186).TableRow, obj2, application.id);
      cResult[9] = application.id;
      cResult[10] = application.name;
      cResult[11] = end;
      cResult[12] = start;
      cResult[13] = tmp9;
      cResult[14] = tmp10;
      cResult[15] = !canStartAuthorization;
      cResult[16] = tmp20;
      tmp18 = tmp20;
    }
    let tmp11 = null;
    if (null != tmp7) {
      const obj3 = { source: tmp7, style: tmp6.icon, disableColor: true };
      tmp11 = closure_5(tmp(1200).Icon, obj3);
    }
    cResult[5] = tmp7;
    cResult[6] = tmp6;
    cResult[7] = tmp11;
    tmp10 = tmp11;
  }
  const fn = function y() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = { analyticsLocations };
    startAuthorization(obj2);
  };
  cResult[2] = analyticsLocations;
  cResult[3] = startAuthorization;
  cResult[4] = fn;
  tmp9 = fn;
}) : (function AddApplicationIdentityTableRow(application) {
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
  ({ startAuthorization: c0, canStartAuthorization } = analyticsLocations(6851)(application));
  const tmp2 = analyticsLocations(6851)(application);
  const tmp3 = analyticsLocations(6848);
  analyticsLocations = tmp3(analyticsLocations(6872).ACTION_SHEET).analyticsLocations;
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
    tmp7Result = tmp7(tmp5(1200).Icon, obj3);
  }
  return closure_5(TableRow, obj2, application.id);
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/AddConnectionActionSheet.tsx");

export default tmp4;
