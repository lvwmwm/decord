// Module ID: 4489
// Function ID: 39618
// Name: ScreenStackHeaderSubview
// Dependencies: []
// Exports: ScreenStackHeaderBackButtonImage, ScreenStackHeaderCenterView, ScreenStackHeaderLeftView, ScreenStackHeaderRightView, ScreenStackHeaderSearchBarView

// Module 4489 (ScreenStackHeaderSubview)
let Platform;
let StyleSheet;
let closure_3 = [null];
let closure_4 = [null];
let closure_5 = [null];
let closure_6 = importDefault(dependencyMap[0]);
let closure_7 = importDefault(dependencyMap[1]);
const importDefaultResult = importDefault(dependencyMap[2]);
({ Image: closure_8, Platform, StyleSheet } = arg1(dependencyMap[3]));
const jsx = arg1(dependencyMap[4]).jsx;
const forwardRefResult = importDefaultResult.forwardRef((disableLeftInsetApplication, ref) => {
  let consumeBottomInset;
  let consumeLeftInset;
  let consumeRightInset;
  let headerLeftBarButtonItems;
  let headerRightBarButtonItems;
  let obj = ref(dependencyMap[5]);
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
    if (ref(dependencyMap[6]).isHeaderBarButtonsAvailableForCurrentPlatform) {
      result = ref(dependencyMap[7]).prepareHeaderBarButtonItems(headerLeftBarButtonItems, "left");
      const obj2 = ref(dependencyMap[7]);
    }
  }
  ref = result;
  let result1;
  if (headerRightBarButtonItems) {
    if (ref(dependencyMap[6]).isHeaderBarButtonsAvailableForCurrentPlatform) {
      result1 = ref(dependencyMap[7]).prepareHeaderBarButtonItems(headerRightBarButtonItems, "right");
      const obj3 = ref(dependencyMap[7]);
    }
  }
  const importDefault = result1;
  let isHeaderBarButtonsAvailableForCurrentPlatform = ref(dependencyMap[6]).isHeaderBarButtonsAvailableForCurrentPlatform;
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
      const result = arg0;
      const items = [];
      const combined = items.concat(callback(null != result ? result : []), callback(null != result1 ? result1 : []));
      const found = combined.find((buttonId) => {
        let tmp = buttonId;
        if (buttonId) {
          tmp = "buttonId" in buttonId;
        }
        if (tmp) {
          tmp = buttonId.buttonId === buttonId.nativeEvent.buttonId;
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
          // continue
        }
      }
      const result = findInMenu;
      const items = [];
      let concat = items.concat;
      let str = callback(null != result ? result : []);
      const combined = concat(str, callback(null != result1 ? result1 : []));
      concat = combined;
      combined[Symbol.iterator]();
      str = "menu";
    };
  }
  obj = { userInterfaceStyle: disableLeftInsetApplication.experimental_userInterfaceStyle, consumeLeftInset, consumeRightInset, consumeBottomInset, headerLeftBarButtonItems: result, headerRightBarButtonItems: result1, onPressHeaderBarButtonItem: fn, onPressHeaderBarButtonMenuItem: fn2, ref, style: closure_10.headerConfig, pointerEvents: "box-none", synchronousShadowStateUpdatesEnabled: importDefault(dependencyMap[9]).experiment.synchronousHeaderConfigUpdatesEnabled };
  return jsx(importDefault(dependencyMap[8]), Object.assign({}, disableLeftInsetApplication, obj));
});
forwardRefResult.displayName = "ScreenStackHeaderConfig";
const obj = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, alignItems: undefined };
const styles = StyleSheet.create({ headerSubview: {}, headerSubviewCenter: {}, headerConfig: obj });

export const ScreenStackHeaderSubview = importDefault(dependencyMap[10]);
export const ScreenStackHeaderConfig = forwardRefResult;
export const ScreenStackHeaderBackButtonImage = function ScreenStackHeaderBackButtonImage(arg0) {
  const obj = { type: "back", style: closure_10.headerSubview, synchronousShadowStateUpdatesEnabled: importDefault(dependencyMap[9]).experiment.synchronousHeaderSubviewUpdatesEnabled, children: <closure_8 {...Object.assign({ usePlaceholderAnimatedStyle: "isArray", shareInviteFailed: "isArray" }, arg0)} /> };
  return jsx(importDefault(dependencyMap[10]), obj);
};
export const ScreenStackHeaderRightView = function ScreenStackHeaderRightView(style) {
  const obj = { type: "right" };
  const tmp = callback(style, closure_3);
  obj.synchronousShadowStateUpdatesEnabled = importDefault(dependencyMap[9]).experiment.synchronousHeaderSubviewUpdatesEnabled;
  const items = [closure_10.headerSubview, style.style];
  obj.style = items;
  return jsx(importDefault(dependencyMap[10]), Object.assign({}, tmp, obj));
};
export const ScreenStackHeaderLeftView = function ScreenStackHeaderLeftView(style) {
  const obj = { type: "left" };
  const tmp = callback(style, closure_4);
  obj.synchronousShadowStateUpdatesEnabled = importDefault(dependencyMap[9]).experiment.synchronousHeaderSubviewUpdatesEnabled;
  const items = [closure_10.headerSubview, style.style];
  obj.style = items;
  return jsx(importDefault(dependencyMap[10]), Object.assign({}, tmp, obj));
};
export const ScreenStackHeaderCenterView = function ScreenStackHeaderCenterView(style) {
  const obj = { type: "center" };
  const tmp = callback(style, closure_5);
  obj.synchronousShadowStateUpdatesEnabled = importDefault(dependencyMap[9]).experiment.synchronousHeaderSubviewUpdatesEnabled;
  const items = [closure_10.headerSubviewCenter, style.style];
  obj.style = items;
  return jsx(importDefault(dependencyMap[10]), Object.assign({}, tmp, obj));
};
export const ScreenStackHeaderSearchBarView = function ScreenStackHeaderSearchBarView(arg0) {
  const obj = { type: "searchBar", synchronousShadowStateUpdatesEnabled: importDefault(dependencyMap[9]).experiment.synchronousHeaderSubviewUpdatesEnabled, style: closure_10.headerSubview };
  return jsx(importDefault(dependencyMap[10]), Object.assign({}, arg0, obj));
};
