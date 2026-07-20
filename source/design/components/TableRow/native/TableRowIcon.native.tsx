// Module ID: 5431
// Function ID: 46489
// Name: TableRowIcon
// Dependencies: []
// Exports: TableRowIcon

// Module 5431 (TableRowIcon)
let closure_3 = ["fgD"];
let closure_4 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { width: importDefault(dependencyMap[5]).modules.mobile.TABLE_ROW_ICON_SIZE, height: importDefault(dependencyMap[5]).modules.mobile.TABLE_ROW_ICON_SIZE, justifyContent: "center", alignItems: "center", borderRadius: importDefault(dependencyMap[5]).radii.lg };
obj.container = obj;
obj.default = { color: importDefault(dependencyMap[5]).colors.TABLEROW_ICON_COLOR_DEFAULT };
const obj1 = { color: importDefault(dependencyMap[5]).colors.TABLEROW_ICON_COLOR_DEFAULT };
obj.statusOnline = { color: importDefault(dependencyMap[5]).colors.TEXT_STATUS_ONLINE };
const obj2 = { color: importDefault(dependencyMap[5]).colors.TEXT_STATUS_ONLINE };
obj.statusIdle = { color: importDefault(dependencyMap[5]).colors.TEXT_STATUS_IDLE };
const obj3 = { color: importDefault(dependencyMap[5]).colors.TEXT_STATUS_IDLE };
obj.statusDND = { color: importDefault(dependencyMap[5]).colors.TEXT_STATUS_DND };
const obj4 = { color: importDefault(dependencyMap[5]).colors.TEXT_STATUS_DND };
obj.statusOffline = { color: importDefault(dependencyMap[5]).colors.TEXT_STATUS_OFFLINE };
const obj5 = { color: importDefault(dependencyMap[5]).colors.TEXT_STATUS_OFFLINE };
obj.xbox = { backgroundColor: importDefault(dependencyMap[5]).unsafe_rawColors.PLATFORM_XBOX, color: importDefault(dependencyMap[5]).colors.WHITE };
const obj6 = { backgroundColor: importDefault(dependencyMap[5]).unsafe_rawColors.PLATFORM_XBOX, color: importDefault(dependencyMap[5]).colors.WHITE };
obj.playstation = { backgroundColor: importDefault(dependencyMap[5]).unsafe_rawColors.PLATFORM_PLAYSTATION, color: importDefault(dependencyMap[5]).colors.WHITE };
const obj7 = { backgroundColor: importDefault(dependencyMap[5]).unsafe_rawColors.PLATFORM_PLAYSTATION, color: importDefault(dependencyMap[5]).colors.WHITE };
obj.danger = { color: importDefault(dependencyMap[5]).colors.TEXT_FEEDBACK_CRITICAL };
const obj8 = { color: importDefault(dependencyMap[5]).colors.TEXT_FEEDBACK_CRITICAL };
obj.secondary = { color: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT };
const obj9 = { color: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.translucent = { color: importDefault(dependencyMap[5]).colors.WHITE };
let closure_7 = obj.createStyles(obj);
const obj10 = { color: importDefault(dependencyMap[5]).colors.WHITE };
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/TableRow/native/TableRowIcon.native.tsx");

export const TableRowIcon = function TableRowIcon(arg0) {
  let IconComponent;
  let source;
  let variant;
  ({ source, IconComponent, variant } = arg0);
  if (variant === undefined) {
    variant = "default";
  }
  const tmp = callback2();
  if ("default" === variant) {
    let translucent = tmp.default;
  } else if ("text-status-online" === variant) {
    translucent = tmp.statusOnline;
  } else if ("text-status-idle" === variant) {
    translucent = tmp.statusIdle;
  } else if ("text-status-dnd" === variant) {
    translucent = tmp.statusDND;
  } else if ("text-status-offline" === variant) {
    translucent = tmp.statusOffline;
  } else if ("xbox" === variant) {
    translucent = tmp.xbox;
  } else if ("playstation" === variant) {
    translucent = tmp.playstation;
  } else if ("danger" === variant) {
    translucent = tmp.danger;
  } else if ("secondary" === variant) {
    translucent = tmp.secondary;
  } else if ("translucent" === variant) {
    translucent = tmp.translucent;
  }
  const color = translucent.color;
  if ("default" === variant) {
    let REFRESH_SMALL_16 = arg1(dependencyMap[6]).IconSizes.MEDIUM;
  } else {
    REFRESH_SMALL_16 = arg1(dependencyMap[6]).IconSizes.REFRESH_SMALL_16;
  }
  let str8 = "md";
  if ("default" !== variant) {
    str8 = "md";
    if ("danger" !== variant) {
      str8 = "md";
      if ("secondary" !== variant) {
        str8 = "md";
        if ("translucent" !== variant) {
          str8 = "sm";
        }
      }
    }
  }
  if (null == source) {
    if (null == IconComponent) {
      return null;
    }
  }
  let obj = { style: items };
  const items = [tmp.container, callback(translucent, closure_3)];
  if (null != IconComponent) {
    obj = { size: str8, color };
    let tmp13 = <IconComponent {...obj} />;
  } else {
    obj = { color, source, size: REFRESH_SMALL_16 };
    tmp13 = jsx(importDefault(dependencyMap[6]), obj);
  }
  obj.children = tmp13;
  <View {...obj} />;
};
