// Module ID: 4493
// Function ID: 39651
// Name: ScreenStackHeaderSubview
// Dependencies: [29, 65, 31, 27, 33, 4494, 4490, 4495, 4496, 4491, 4497]
// Exports: ScreenStackHeaderBackButtonImage, ScreenStackHeaderCenterView, ScreenStackHeaderLeftView, ScreenStackHeaderRightView, ScreenStackHeaderSearchBarView

// Module 4493 (ScreenStackHeaderSubview)
import _objectWithoutProperties from "_objectWithoutProperties";
import _toConsumableArray from "_toConsumableArray";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let StyleSheet;
let closure_8;
let require = arg1;
let closure_3 = ["style"];
let closure_4 = ["style"];
let closure_5 = ["style"];
({ Image: closure_8, Platform, StyleSheet } = get_ActivityIndicator);
const forwardRefResult = require("result").forwardRef((disableLeftInsetApplication, ref) => {
  let consumeBottomInset;
  let consumeLeftInset;
  let consumeRightInset;
  let headerLeftBarButtonItems;
  let headerRightBarButtonItems;
  let obj = require(4494) /* context */;
  disableLeftInsetApplication = disableLeftInsetApplication.disableLeftInsetApplication;
  let tmp = null != disableLeftInsetApplication;
  if (tmp) {
    tmp = disableLeftInsetApplication;
  }
  const disableRightInsetApplication = disableLeftInsetApplication.disableRightInsetApplication;
  const disableBottomInsetApplication = disableLeftInsetApplication.disableBottomInsetApplication;
  const edgeInsetApplication = obj.useEdgeInsetApplication(tmp, null != disableRightInsetApplication && disableRightInsetApplication, null != disableBottomInsetApplication && disableBottomInsetApplication);
  ({ headerLeftBarButtonItems, headerRightBarButtonItems } = disableLeftInsetApplication);
  let result;
  ({ consumeLeftInset, consumeRightInset, consumeBottomInset } = edgeInsetApplication);
  if (headerLeftBarButtonItems) {
    if (require(4490) /* isSearchBarAvailableForCurrentPlatform */.isHeaderBarButtonsAvailableForCurrentPlatform) {
      result = require(4495) /* prepareMenu */.prepareHeaderBarButtonItems(headerLeftBarButtonItems, "left");
      const obj2 = require(4495) /* prepareMenu */;
    }
  }
  require = result;
  let result1;
  if (headerRightBarButtonItems) {
    if (require(4490) /* isSearchBarAvailableForCurrentPlatform */.isHeaderBarButtonsAvailableForCurrentPlatform) {
      result1 = require(4495) /* prepareMenu */.prepareHeaderBarButtonItems(headerRightBarButtonItems, "right");
      const obj3 = require(4495) /* prepareMenu */;
    }
  }
  let isHeaderBarButtonsAvailableForCurrentPlatform = require(4490) /* isSearchBarAvailableForCurrentPlatform */.isHeaderBarButtonsAvailableForCurrentPlatform;
  if (isHeaderBarButtonsAvailableForCurrentPlatform) {
    let length;
    if (null != result) {
      length = result.length;
    }
    if (!length) {
      let length1;
      if (null != result1) {
        length1 = result1.length;
      }
      length = length1;
    }
    isHeaderBarButtonsAvailableForCurrentPlatform = length;
  }
  let fn;
  if (isHeaderBarButtonsAvailableForCurrentPlatform) {
    fn = (arg0) => {
      let closure_0 = arg0;
      const items = [];
      const combined = items.concat(outer1_7(null != closure_0 ? closure_0 : []), outer1_7(null != result1 ? result1 : []));
      const found = combined.find((buttonId) => {
        let tmp = buttonId;
        if (buttonId) {
          tmp = "buttonId" in buttonId;
        }
        if (tmp) {
          tmp = buttonId.buttonId === nativeEvent.nativeEvent.buttonId;
        }
        return tmp;
      });
      let onPress = found;
      if (found) {
        onPress = "button" === found.type;
      }
      if (onPress) {
        onPress = found.onPress;
      }
      if (onPress) {
        found.onPress();
      }
    };
  }
  let fn2;
  if (isHeaderBarButtonsAvailableForCurrentPlatform) {
    fn2 = (arg0) => {
      function findInMenu(arg0, arg1) {
        const iter = arg0.items[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          if ("items" in nextResult) {
            let tmp7 = findInMenu;
            let tmp8 = nextResult;
            let tmp9 = arg1;
            let tmp10 = findInMenu(tmp2, arg1);
            let tmp11 = tmp10;
            if (tmp10) {
              iter.return();
              return tmp10;
            }
          } else {
            let tmp3 = nextResult;
            if ("menuId" in tmp2) {
              let tmp4 = nextResult;
              let tmp5 = arg1;
              if (tmp2.menuId === arg1) {
                let tmp6 = nextResult;
                iter.return();
                return tmp2;
              }
            }
          }
          continue;
        }
      }
      const items = [];
      let concat = items.concat;
      let str = outer1_7(null != findInMenu ? findInMenu : []);
      const combined = concat(str, outer1_7(null != result1 ? result1 : []));
      concat = combined;
      combined[Symbol.iterator]();
      str = "menu";
    };
  }
  obj = { userInterfaceStyle: disableLeftInsetApplication.experimental_userInterfaceStyle, consumeLeftInset, consumeRightInset, consumeBottomInset, headerLeftBarButtonItems: result, headerRightBarButtonItems: result1, onPressHeaderBarButtonItem: fn, onPressHeaderBarButtonMenuItem: fn2, ref, style: closure_10.headerConfig, pointerEvents: "box-none", synchronousShadowStateUpdatesEnabled: result1(4491).experiment.synchronousHeaderConfigUpdatesEnabled };
  return jsx(result1(4496), Object.assign({}, disableLeftInsetApplication, obj));
});
forwardRefResult.displayName = "ScreenStackHeaderConfig";
let obj = { position: "absolute", width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: undefined };
const styles = StyleSheet.create({ headerSubview: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, headerSubviewCenter: { flexDirection: "row", alignItems: "center", justifyContent: "center", flexShrink: 1 }, headerConfig: obj });

export const ScreenStackHeaderSubview = require("__INTERNAL_VIEW_CONFIG");
export const ScreenStackHeaderConfig = forwardRefResult;
export const ScreenStackHeaderBackButtonImage = function ScreenStackHeaderBackButtonImage(arg0) {
  const obj = { type: "back", style: closure_10.headerSubview, synchronousShadowStateUpdatesEnabled: importDefault(4491).experiment.synchronousHeaderSubviewUpdatesEnabled, children: <closure_8 {...Object.assign({ resizeMode: "center", fadeDuration: 0 }, arg0)} /> };
  return jsx(importDefault(4497), { type: "back", style: closure_10.headerSubview, synchronousShadowStateUpdatesEnabled: importDefault(4491).experiment.synchronousHeaderSubviewUpdatesEnabled, children: <closure_8 {...Object.assign({ resizeMode: "center", fadeDuration: 0 }, arg0)} /> });
};
export const ScreenStackHeaderRightView = function ScreenStackHeaderRightView(style) {
  const obj = { type: "right" };
  const tmp = callback(style, closure_3);
  obj.synchronousShadowStateUpdatesEnabled = importDefault(4491).experiment.synchronousHeaderSubviewUpdatesEnabled;
  const items = [closure_10.headerSubview, style.style];
  obj.style = items;
  return jsx(importDefault(4497), Object.assign({}, tmp, obj));
};
export const ScreenStackHeaderLeftView = function ScreenStackHeaderLeftView(style) {
  const obj = { type: "left" };
  const tmp = callback(style, closure_4);
  obj.synchronousShadowStateUpdatesEnabled = importDefault(4491).experiment.synchronousHeaderSubviewUpdatesEnabled;
  const items = [closure_10.headerSubview, style.style];
  obj.style = items;
  return jsx(importDefault(4497), Object.assign({}, tmp, obj));
};
export const ScreenStackHeaderCenterView = function ScreenStackHeaderCenterView(style) {
  const obj = { type: "center" };
  const tmp = callback(style, closure_5);
  obj.synchronousShadowStateUpdatesEnabled = importDefault(4491).experiment.synchronousHeaderSubviewUpdatesEnabled;
  const items = [closure_10.headerSubviewCenter, style.style];
  obj.style = items;
  return jsx(importDefault(4497), Object.assign({}, tmp, obj));
};
export const ScreenStackHeaderSearchBarView = function ScreenStackHeaderSearchBarView(arg0) {
  const obj = { type: "searchBar", synchronousShadowStateUpdatesEnabled: importDefault(4491).experiment.synchronousHeaderSubviewUpdatesEnabled, style: closure_10.headerSubview };
  return jsx(importDefault(4497), Object.assign({}, arg0, obj));
};
