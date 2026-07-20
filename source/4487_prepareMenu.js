// Module ID: 4487
// Function ID: 39568
// Name: prepareMenu
// Dependencies: []
// Exports: prepareHeaderBarButtonItems

// Module 4487 (prepareMenu)
const _module = require(dependencyMap[0]);
({ Image: closure_0, processColor: closure_1 } = _module);
function prepareMenu(items) {
  items = items.items;
  return Object.assign({}, items, {
    items: items.map((icon) => {
      icon = icon.icon;
      let type;
      if (null != icon) {
        type = icon.type;
      }
      if ("sfSymbol" === type) {
        const icon2 = icon.icon;
        let name;
        if (null != icon2) {
          name = icon2.name;
        }
      }
      if ("xcasset" === type) {
        const icon3 = icon.icon;
        let name1;
        if (null != icon3) {
          name1 = icon3.name;
        }
      }
      const icon4 = icon.icon;
      let type1;
      if (null != icon4) {
        type1 = icon4.type;
      }
      if ("imageSource" === type1) {
        const assetSource = arg1.resolveAssetSource(icon.icon.imageSource);
      } else {
        const icon5 = icon.icon;
        let type2;
        if (null != icon5) {
          type2 = icon5.type;
        }
        if ("templateSource" === type2) {
          const assetSource1 = arg1.resolveAssetSource(icon.icon.templateSource);
        }
      }
      if ("submenu" === icon.type) {
        const _Object2 = Object;
        let obj = { sfSymbolName: tmp2, xcassetName: tmp4, imageSource: assetSource, templateSource: assetSource1 };
        const _Object3 = Object;
        let merged = Object.assign({}, icon, obj, callback(icon, arg1, arg2));
      } else {
        const _Object = Object;
        obj = { sfSymbolName: tmp2, xcassetName: tmp4, imageSource: assetSource, templateSource: assetSource1 };
        const _HermesInternal = HermesInternal;
        obj.menuId = "" + arg1 + "-" + arg1 + "-" + arg2;
        merged = Object.assign({}, icon, obj);
      }
      return merged;
    })
  });
}

export const prepareHeaderBarButtonItems = function prepareHeaderBarButtonItems(headerLeftBarButtonItems, left) {
  let mapped;
  if (null != headerLeftBarButtonItems) {
    mapped = headerLeftBarButtonItems.map((type) => {
      if ("spacing" === type.type) {
        return type;
      } else {
        const icon4 = type.icon;
        type = undefined;
        if (null != icon4) {
          type = icon4.type;
        }
        if ("imageSource" === type) {
          const assetSource = arg1.resolveAssetSource(type.icon.imageSource);
        } else {
          const icon = type.icon;
          let type1;
          if (null != icon) {
            type1 = icon.type;
          }
          if ("templateSource" === type1) {
            const assetSource1 = arg1.resolveAssetSource(type.icon.templateSource);
          }
        }
        let merged;
        if (type.titleStyle) {
          const _Object = Object;
          let obj = { color: callback(type.titleStyle.color) };
          merged = Object.assign({}, type.titleStyle, obj);
        }
        let tmp10;
        if (type.tintColor) {
          tmp10 = callback(type.tintColor);
        }
        let merged1;
        if (type.badge) {
          obj = {};
          obj = {};
          const style = type.badge.style;
          let color;
          if (null != style) {
            color = style.color;
          }
          obj.color = callback(color);
          const style2 = type.badge.style;
          let backgroundColor;
          if (null != style2) {
            backgroundColor = style2.backgroundColor;
          }
          obj.backgroundColor = callback(backgroundColor);
          obj.style = Object.assign({}, type.badge.style, obj);
          merged1 = Object.assign({}, type.badge, obj);
          const tmp14 = callback;
          const tmp16 = callback;
        }
        const obj1 = { imageSource: assetSource, templateSource: assetSource1 };
        const icon2 = type.icon;
        let type2;
        if (null != icon2) {
          type2 = icon2.type;
        }
        let name;
        if ("sfSymbol" === type2) {
          name = type.icon.name;
        }
        obj1.sfSymbolName = name;
        const icon3 = type.icon;
        let type3;
        if (null != icon3) {
          type3 = icon3.type;
        }
        let name1;
        if ("xcasset" === type3) {
          name1 = type.icon.name;
        }
        obj1.xcassetName = name1;
        obj1.titleStyle = merged;
        obj1.tintColor = tmp10;
        obj1.badge = merged1;
        const merged2 = Object.assign({}, type, obj1);
        if ("button" === type.type) {
          const _Object3 = Object;
          const obj2 = {};
          const _HermesInternal = HermesInternal;
          obj2.buttonId = "" + arg1 + "-" + arg1;
          let merged3 = Object.assign({}, merged2, obj2);
        } else {
          merged3 = null;
          if ("menu" === type.type) {
            const _Object2 = Object;
            const obj3 = { menu: callback2(type.menu, arg1, arg1) };
            merged3 = Object.assign({}, merged2, obj3);
          }
        }
        return merged3;
      }
    });
  }
  return mapped;
};
