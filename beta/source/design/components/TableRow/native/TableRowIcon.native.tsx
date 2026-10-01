// Module ID: 5923
// Function ID: 5924
// Name: TableRowIcon
// Dependencies: [109, 19, 17, 21, 4836, 576, 5283, 2]
// Exports: TableRowIcon

// Module 5923 (TableRowIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Icon from "Icon" /* 5283 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const IconDefault = Icon;

let obj2;
let obj3;
let size;
let closure_3 = ["color"];
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: size, default: obj2, statusOnline: obj3, statusIdle: { color: nativeDefault.colors.TEXT_STATUS_IDLE }, statusDND: { color: nativeDefault.colors.TEXT_STATUS_DND }, statusOffline: { color: nativeDefault.colors.TEXT_STATUS_OFFLINE }, xbox: { backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_XBOX, color: nativeDefault.colors.WHITE }, playstation: { backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION, color: nativeDefault.colors.WHITE }, danger: { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL }, secondary: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, translucent: { color: nativeDefault.colors.WHITE } };
size = { width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, height: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
obj2 = { color: nativeDefault.colors.TABLEROW_ICON_COLOR_DEFAULT };
obj3 = { color: nativeDefault.colors.TEXT_STATUS_ONLINE };
({ color: nativeDefault.colors.TEXT_STATUS_IDLE });
({ color: nativeDefault.colors.TEXT_STATUS_DND });
({ color: nativeDefault.colors.TEXT_STATUS_OFFLINE });
({ backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_XBOX, color: nativeDefault.colors.WHITE });
({ backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION, color: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL });
({ color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
({ color: nativeDefault.colors.WHITE });
let closure_7 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowIcon.native.tsx");

export const TableRowIcon = function TableRowIcon(arg0) {
  let IconComponent;
  let items;
  let source;
  let tmp11Result;
  let translucent;
  let variant;
  ({ source, IconComponent, variant } = arg0);
  if (variant === undefined) {
    variant = "default";
  }
  const tmp = closure_7();
  switch (variant) {
    case "default":
    {
      let REFRESH_SMALL_16;
      let tmp11Result2;
      translucent = tmp.default;
      const color = translucent.color;
      const tmp4 = _objectWithoutProperties(translucent, closure_3);
      if ("default" === variant) {
        REFRESH_SMALL_16 = Icon.IconSizes.MEDIUM;
      } else {
        REFRESH_SMALL_16 = Icon.IconSizes.REFRESH_SMALL_16;
      }
      let str3 = "md";
      if ("default" !== variant) {
        str3 = "md";
        if ("danger" !== variant) {
          str3 = "md";
          if ("secondary" !== variant) {
            str3 = "md";
            if ("translucent" !== variant) {
              str3 = "sm";
            }
          }
        }
      }
      if (null != source) {
        const obj = { style: items, children: tmp11Result };
        items = [tmp.container, tmp4];
        const tmp12 = View;
        if (null != IconComponent) {
          const obj2 = { size: str3, color };
          tmp11Result = tmp11(IconComponent, obj2);
        } else {
          const obj3 = { color, source, size: REFRESH_SMALL_16 };
          tmp11Result = tmp11(IconDefault, obj3);
        }
        tmp11Result2 = tmp11(tmp12, obj);
      } else {
        tmp11Result2 = null;
      }
      return tmp11Result2;
    }
    case "text-status-online":
    {
      translucent = tmp.statusOnline;
      break;
    }
    case "text-status-idle":
    {
      translucent = tmp.statusIdle;
      break;
    }
    case "text-status-dnd":
    {
      translucent = tmp.statusDND;
      break;
    }
    case "text-status-offline":
    {
      translucent = tmp.statusOffline;
      break;
    }
    case "xbox":
    {
      translucent = tmp.xbox;
      break;
    }
    case "playstation":
    {
      translucent = tmp.playstation;
      break;
    }
    case "danger":
    {
      translucent = tmp.danger;
      break;
    }
    case "secondary":
    {
      translucent = tmp.secondary;
      break;
    }
    case "translucent":
    {
      translucent = tmp.translucent;
      break;
    }
  }
};
