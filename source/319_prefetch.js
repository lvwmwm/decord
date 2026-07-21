// Module ID: 319
// Function ID: 4864
// Name: prefetch
// Dependencies: []

// Module 319 (prefetch)
function prefetch(arg0, arg1) {
  let closure_7 = tmp + 1;
  if (arg1) {
    arg1(tmp);
  }
  return importDefault(dependencyMap[4]).prefetchImage(arg0, +closure_7);
}
async function _queryCache(arg0, arg1) {
  if (obj) {
    return obj.resume();
  } else {
    return callback(closure_2[4]).queryCache(arg0);
  }
}
let closure_3 = [null];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
importAll(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = 1;
class BaseImage {
  constructor(arg0) {
    size = closure_4(global, _queryCache);
    obj = arg1(closure_2[5]);
    size2 = obj.getImageSourcesFromImageProps(size);
    if (!size2) {
      obj = {};
      obj.uri = undefined;
      obj.width = undefined;
      obj.height = undefined;
      size2 = obj;
    }
    tmp = closure_1(closure_2[6])(size.defaultSource);
    tmp2 = closure_1(closure_2[6])(size.loadingIndicatorSource);
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
        tmp6 = closure_8;
        items = [, ];
        items[0] = closure_8.base;
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
        tmp5 = closure_8;
        items1[1] = closure_8.base;
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
      alt = size.aria-label;
      if (null == alt) {
        alt = size.accessibilityLabel;
      }
      if (null == alt) {
        alt = size.alt;
      }
      obj2.accessibilityLabel = alt;
      prop = undefined;
      if (null != size) {
        prop = size.aria-labelledby;
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
      aria-busy = size.aria-busy;
      if (null == aria_busy) {
        accessibilityState = size.accessibilityState;
        busy = undefined;
        if (null != accessibilityState) {
          busy = accessibilityState.busy;
        }
        aria-busy = busy;
      }
      obj3.busy = aria_busy;
      aria-checked = size.aria-checked;
      if (null == aria_checked) {
        accessibilityState2 = size.accessibilityState;
        checked = undefined;
        if (null != accessibilityState2) {
          checked = accessibilityState2.checked;
        }
        aria-checked = checked;
      }
      obj3.checked = aria_checked;
      aria-disabled = size.aria-disabled;
      if (null == aria_disabled) {
        accessibilityState3 = size.accessibilityState;
        disabled = undefined;
        if (null != accessibilityState3) {
          disabled = accessibilityState3.disabled;
        }
        aria-disabled = disabled;
      }
      obj3.disabled = aria_disabled;
      aria-expanded = size.aria-expanded;
      if (null == aria_expanded) {
        accessibilityState4 = size.accessibilityState;
        expanded = undefined;
        if (null != accessibilityState4) {
          expanded = accessibilityState4.expanded;
        }
        aria-expanded = expanded;
      }
      obj3.expanded = aria_expanded;
      aria-selected = size.aria-selected;
      if (null == aria_selected) {
        accessibilityState5 = size.accessibilityState;
        selected = undefined;
        if (null != accessibilityState5) {
          selected = accessibilityState5.selected;
        }
        aria-selected = selected;
      }
      obj3.selected = aria_selected;
      obj2.accessibilityState = obj3;
      arg1 = Object.assign({}, size, obj2);
      tmp17 = closure_1;
      tmp18 = closure_2;
      num2 = 7;
      tmp19 = closure_1(closure_2[7])(items1);
      tmp20 = arg1;
      num3 = 8;
      obj6 = arg1(closure_2[8]);
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
      closure_1 = str3;
      tmp23 = arg1;
      tmp24 = closure_2;
      num4 = 9;
      obj7 = arg1(closure_2[9]);
      closure_2 = obj7.useWrapRefWithImageAttachedCallbacks(global.ref);
      tmp25 = jsx;
      tmp26 = closure_1;
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
        obj = { resizeMode: str3, ref: closure_2 };
        return callback(str3(closure_2[11]), Object.assign({}, merged, obj));
      };
      return jsx(closure_1(closure_2[10]).Consumer, obj4);
    }
  }
}
const result = arg1(dependencyMap[9]).unstable_getImageComponentDecorator();
let resultResult = BaseImage;
if (null != result) {
  resultResult = result(BaseImage);
}
resultResult.displayName = "Image";
resultResult.getSize = function getSize(arg0, arg1, arg2) {
  let fn = arg2;
  arg1 = arg0;
  const importDefault = arg1;
  const size = importDefault(dependencyMap[4]).getSize(arg0);
  if ("function" !== typeof arg1) {
    return size;
  } else {
    if (!fn) {
      fn = () => {
        console.warn(`Failed to get size for image: ${closure_0}`);
      };
    }
    size.then((width) => arg1(width.width, width.height)).catch(fn);
  }
  const obj = importDefault(dependencyMap[4]);
};
resultResult.getSizeWithHeaders = function getSizeWithHeaders(arg0, arg1) {
  let fn = arg3;
  arg1 = arg0;
  const importDefault = arg2;
  const sizeWithHeaders = importDefault(dependencyMap[4]).getSizeWithHeaders(arg0, arg1);
  if ("function" !== typeof arg2) {
    return sizeWithHeaders;
  } else {
    if (!fn) {
      fn = () => {
        console.warn(`Failed to get size for image: ${closure_0}`);
      };
    }
    sizeWithHeaders.then((width) => arg2(width.width, width.height)).catch(fn);
  }
  const obj = importDefault(dependencyMap[4]);
};
resultResult.prefetch = prefetch;
resultResult.prefetchWithMetadata = function prefetchWithMetadata(arg0, arg1, arg2, arg3) {
  return prefetch(arg0, arg3);
};
resultResult.abortPrefetch = function abortPrefetch(_requestId) {
  importDefault(dependencyMap[4]).abortRequest(_requestId);
};
resultResult.queryCache = function queryCache(arg0) {
  return _queryCache(...arguments);
};
resultResult.resolveAssetSource = importDefault(dependencyMap[6]);
const obj = arg1(dependencyMap[9]);
let closure_8 = importDefault(dependencyMap[12]).create({ base: { overflow: "hidden" } });

export default resultResult;
