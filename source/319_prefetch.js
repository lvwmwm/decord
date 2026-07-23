// Module ID: 319
// Function ID: 4864
// Name: prefetch
// Dependencies: [29, 5, 31, 33, 320, 322, 90, 147, 323, 324, 327, 328, 253]

// Module 319 (prefetch)
import _objectWithoutProperties from "_objectWithoutProperties";
import getImageSourcesFromImageProps from "getImageSourcesFromImageProps";
import "result";
import { jsx } from "jsxProd";
import set from "set";

const require = arg1;
function prefetch(arg0, arg1) {
  let closure_7 = tmp + 1;
  if (arg1) {
    arg1(tmp);
  }
  return importDefault(320).prefetchImage(arg0, +closure_7);
}
async function _queryCache(arg0, arg1) {
  if (obj) {
    return obj.resume();
  } else {
    return outer2_1(outer2_2[4]).queryCache(arg0);
  }
}
let closure_3 = ["ref"];
let c7 = 1;
class BaseImage {
  constructor(arg0) {
    size = _objectWithoutProperties(global, _queryCache);
    obj = require("getImageSourcesFromImageProps");
    size2 = obj.getImageSourcesFromImageProps(size);
    if (!size2) {
      obj = {};
      obj.uri = undefined;
      obj.width = undefined;
      obj.height = undefined;
      size2 = obj;
    }
    tmp = require("getSourceCodeScriptURL")(size.defaultSource);
    tmp2 = require("getSourceCodeScriptURL")(size.loadingIndicatorSource);
    if (null != size.children) {
      tmp32 = globalThis;
      _Error2 = Error;
      prototype2 = Error.prototype;
      tmp33 = new.target;
      str5 = "The <Image> component cannot contain children. If you want to render content on top of the image, consider using the <ImageBackground> component or absolute positioning.";
      tmp34 = new.target;
      error = new Error("The <Image> component cannot contain children. If you want to render content on top of the image, consider using the <ImageBackground> component or absolute positioning.");
      tmp36 = error;
      throw error;
    } else {
      if (null != size.defaultSource) {
        if (null != size.loadingIndicatorSource) {
          tmp27 = globalThis;
          _Error = Error;
          prototype = Error.prototype;
          tmp28 = new.target;
          str4 = "The <Image> component cannot have defaultSource and loadingIndicatorSource at the same time. Please use either defaultSource or loadingIndicatorSource.";
          tmp29 = new.target;
          error1 = new Error("The <Image> component cannot have defaultSource and loadingIndicatorSource at the same time. Please use either defaultSource or loadingIndicatorSource.");
          tmp31 = error1;
          throw error1;
        }
      }
      tmp3 = globalThis;
      _Array = Array;
      if (Array.isArray(size2)) {
        tmp6 = c8;
        items = [, ];
        items[0] = c8.base;
        items[1] = size.style;
        items1 = items;
        items2 = size2;
      } else {
        str = "";
        if ("" === size2.uri) {
          _console = console;
          str2 = "source.uri should not be an empty string";
          warnResult = console.warn("source.uri should not be an empty string");
        }
        obj1 = {};
        width = size2.width;
        if (null == width) {
          width = size.width;
        }
        obj1.width = width;
        height = size2.height;
        if (null == height) {
          height = size.height;
        }
        obj1.height = height;
        items1 = [, , ];
        items1[0] = obj1;
        tmp5 = c8;
        items1[1] = c8.base;
        items1[2] = size.style;
        items2 = [];
        items2[0] = size2;
      }
      onLoad = size.onLoadStart;
      obj2 = {};
      obj2.style = items1;
      ({ onLoadEnd, onError } = size);
      if (!onLoad) {
        onLoad = size.onLoad;
      }
      if (!onLoad) {
        onLoad = onLoadEnd;
      }
      if (!onLoad) {
        onLoad = onError;
      }
      obj2.shouldNotifyLoadEvents = onLoad;
      obj2.src = items2;
      obj2.source = items2;
      headers = undefined;
      if (null != size2) {
        num = 0;
        first = size2[0];
        if (null != first) {
          headers = first.headers;
        }
      }
      if (!headers) {
        headers1 = undefined;
        if (null != size2) {
          headers1 = size2.headers;
        }
        headers = headers1;
      }
      obj2.headers = headers;
      if (!tmp) {
        tmp = null;
      }
      obj2.defaultSource = tmp;
      if (!tmp2) {
        tmp2 = null;
      }
      obj2.loadingIndicatorSrc = tmp2;
      alt = size["aria-label"];
      if (null == alt) {
        alt = size.accessibilityLabel;
      }
      if (null == alt) {
        alt = size.alt;
      }
      obj2.accessibilityLabel = alt;
      prop = undefined;
      if (null != size) {
        prop = size["aria-labelledby"];
      }
      if (null == prop) {
        prop1 = undefined;
        if (null != size) {
          prop1 = size.accessibilityLabelledBy;
        }
        prop = prop1;
      }
      obj2.accessibilityLabelledBy = prop;
      obj2.accessible = undefined !== size.alt || size.accessible;
      obj3 = {};
      aria_busy = size["aria-busy"];
      if (null == aria_busy) {
        accessibilityState = size.accessibilityState;
        busy = undefined;
        if (null != accessibilityState) {
          busy = accessibilityState.busy;
        }
        aria_busy = busy;
      }
      obj3.busy = aria_busy;
      aria_checked = size["aria-checked"];
      if (null == aria_checked) {
        accessibilityState2 = size.accessibilityState;
        checked = undefined;
        if (null != accessibilityState2) {
          checked = accessibilityState2.checked;
        }
        aria_checked = checked;
      }
      obj3.checked = aria_checked;
      aria_disabled = size["aria-disabled"];
      if (null == aria_disabled) {
        accessibilityState3 = size.accessibilityState;
        disabled = undefined;
        if (null != accessibilityState3) {
          disabled = accessibilityState3.disabled;
        }
        aria_disabled = disabled;
      }
      obj3.disabled = aria_disabled;
      aria_expanded = size["aria-expanded"];
      if (null == aria_expanded) {
        accessibilityState4 = size.accessibilityState;
        expanded = undefined;
        if (null != accessibilityState4) {
          expanded = accessibilityState4.expanded;
        }
        aria_expanded = expanded;
      }
      obj3.expanded = aria_expanded;
      aria_selected = size["aria-selected"];
      if (null == aria_selected) {
        accessibilityState5 = size.accessibilityState;
        selected = undefined;
        if (null != accessibilityState5) {
          selected = accessibilityState5.selected;
        }
        aria_selected = selected;
      }
      obj3.selected = aria_selected;
      obj2.accessibilityState = obj3;
      accessible = Object.assign({}, size, obj2);
      tmp17 = cover;
      tmp18 = c2;
      num2 = 7;
      tmp19 = require("flattenStyle")(items1);
      tmp20 = accessible;
      num3 = 8;
      obj6 = require("convertObjectFitToResizeMode");
      objectFit = undefined;
      if (null != tmp19) {
        objectFit = tmp19.objectFit;
      }
      str3 = obj6.convertObjectFitToResizeMode(objectFit) || size.resizeMode;
      if (!str3) {
        resizeMode = undefined;
        if (null != tmp19) {
          resizeMode = tmp19.resizeMode;
        }
        str3 = resizeMode;
      }
      if (!str3) {
        str3 = "cover";
      }
      cover = str3;
      tmp23 = accessible;
      tmp24 = c2;
      num4 = 9;
      obj7 = require("set");
      c2 = obj7.useWrapRefWithImageAttachedCallbacks(global.ref);
      tmp25 = jsx;
      tmp26 = cover;
      num5 = 10;
      obj4 = {};
      obj4.children = function children(internal_analyticTag) {
        if (null !== internal_analyticTag) {
          const _Object = Object;
          let obj = { internal_analyticTag };
          let merged = Object.assign({}, closure_0, obj);
        } else {
          merged = closure_0;
        }
        obj = { resizeMode: str3, ref: table };
        return outer1_6(str3(table[11]), Object.assign({}, merged, obj));
      };
      return jsx(require("result").Consumer, obj4);
    }
  }
}
set = set.unstable_getImageComponentDecorator();
let resultResult = BaseImage;
if (null != set) {
  resultResult = set(BaseImage);
}
resultResult.displayName = "Image";
resultResult.getSize = function getSize(arg0, arg1, arg2) {
  let fn = arg2;
  let closure_0 = arg0;
  const importDefault = arg1;
  const size = importDefault(320).getSize(arg0);
  if ("function" !== typeof arg1) {
    return size;
  } else {
    if (!fn) {
      fn = () => {
        console.warn(`Failed to get size for image: ${closure_0}`);
      };
    }
    size.then((width) => callback(width.width, width.height)).catch(fn);
  }
  const obj = importDefault(320);
};
resultResult.getSizeWithHeaders = function getSizeWithHeaders(arg0, arg1) {
  let fn = arg3;
  let closure_0 = arg0;
  const importDefault = arg2;
  const sizeWithHeaders = importDefault(320).getSizeWithHeaders(arg0, arg1);
  if ("function" !== typeof arg2) {
    return sizeWithHeaders;
  } else {
    if (!fn) {
      fn = () => {
        console.warn(`Failed to get size for image: ${closure_0}`);
      };
    }
    sizeWithHeaders.then((width) => callback(width.width, width.height)).catch(fn);
  }
  const obj = importDefault(320);
};
resultResult.prefetch = prefetch;
resultResult.prefetchWithMetadata = function prefetchWithMetadata(arg0, arg1, arg2, arg3) {
  return prefetch(arg0, arg3);
};
resultResult.abortPrefetch = function abortPrefetch(_requestId) {
  importDefault(320).abortRequest(_requestId);
};
resultResult.queryCache = function queryCache(arg0) {
  return _queryCache(...arguments);
};
resultResult.resolveAssetSource = require("getSourceCodeScriptURL");
let closure_8 = require("setStyleAttributePreprocessor").create({ base: { overflow: "hidden" } });

export default resultResult;
