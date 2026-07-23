// Module ID: 12002
// Function ID: 92720
// Name: decimalToClampedPercentage
// Dependencies: [12003, 12004, 2]
// Exports: resolveProgressPercentage, resolveSingleStringOrSkeleton, resolveStatComponentValues, resolveTextComponentValues

// Module 12002 (decimalToClampedPercentage)
function decimalToClampedPercentage(value) {
  let num = 0;
  if (!isNaN(value)) {
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    num = Math.min(Math.max(Math.round(100 * value), 0), 100);
  }
  return num;
}
const result = require("set").fileFinishedImporting("../discord_common/js/packages/application-widget-renderer/src/resolvedDisplayField.tsx");

export const resolveTextComponentValues = function resolveTextComponentValues(subtitle_1, resolveFieldValue, numberFormat, arg3) {
  let flag = arg3;
  let flag2 = arg4;
  if (arg3 === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (null == subtitle_1) {
    let obj = {};
    if (flag) {
      obj.status = "skeleton";
      let tmp12 = obj;
    } else {
      obj.status = "hidden";
      tmp12 = obj;
    }
    return tmp12;
  } else {
    const items = [require(12003) /* resolveFieldValue */.ResolvedValueType.STRING, require(12003) /* resolveFieldValue */.ResolvedValueType.NUMBER];
    let iter = resolveFieldValue(subtitle_1.fields.text, items);
    let str = null;
    if (!flag2) {
      const items1 = [require(12003) /* resolveFieldValue */.ResolvedValueType.STRING, require(12003) /* resolveFieldValue */.ResolvedValueType.NUMBER];
      str = resolveFieldValue(subtitle_1.fields.label, items1);
    }
    if (null == iter) {
      if (null == str) {
        obj = { status: "skeleton" };
        return obj;
      }
    }
    const items2 = [require(12003) /* resolveFieldValue */.ResolvedValueType.MEDIA];
    const tmp5 = resolveFieldValue(subtitle_1.fields.icon, items2);
    obj = { status: "value" };
    let str4 = "";
    if (null != str) {
      str4 = "";
      if ("" !== str.value) {
        if ("number" === typeof str.value) {
          let formatResult = numberFormat.format(str.value);
        } else {
          formatResult = str.value;
        }
        const _HermesInternal = HermesInternal;
        str = ": ";
        const combined = "" + formatResult + ": ";
      }
    }
    let str7 = "\u2013";
    if (null != iter) {
      str7 = "\u2013";
      if ("" !== iter.value) {
        if ("number" === typeof iter.value) {
          iter = iter.value;
          let formatResult1 = numberFormat.format(iter);
        } else {
          formatResult1 = iter.value;
        }
      }
    }
    const _HermesInternal2 = HermesInternal;
    obj.text = "" + str4 + str7;
    let media;
    if (null != tmp5) {
      media = tmp5.media;
    }
    let tmp11 = null;
    if (null != media) {
      tmp11 = media;
    }
    obj.icon = tmp11;
    return obj;
  }
};
export const resolveStatComponentValues = function resolveStatComponentValues(fields, closure_1, closure_2, formatDurationNarrow, arg4) {
  let flag = arg4;
  if (arg4 === undefined) {
    flag = false;
  }
  if (null == fields) {
    let tmp6 = null;
    if (flag) {
      let obj = {};
      obj = { status: "skeleton" };
      obj.value = obj;
      const obj1 = { status: "skeleton" };
      obj.label = obj1;
      tmp6 = obj;
    }
    return tmp6;
  } else {
    const items = [require(12003) /* resolveFieldValue */.ResolvedValueType.STRING, require(12003) /* resolveFieldValue */.ResolvedValueType.NUMBER];
    const iter = closure_1(fields.fields.value, items);
    const items1 = [require(12003) /* resolveFieldValue */.ResolvedValueType.STRING];
    const iter2 = closure_1(fields.fields.label, items1);
    const items2 = [require(12003) /* resolveFieldValue */.ResolvedValueType.MEDIA];
    const tmp9 = closure_1(fields.fields.icon, items2);
    const obj2 = {};
    if (null == iter) {
      obj = { status: "skeleton" };
      let obj3 = obj;
    } else {
      obj3 = { status: "value" };
      if (iter.type === require(12003) /* resolveFieldValue */.ResolvedValueType.STRING) {
        let formatResult = iter.value;
      } else if (iter.presentationType === require(12004) /* ApplicationWidgetFieldPresentationType */.ApplicationWidgetFieldPresentationType.DURATION) {
        formatResult = formatDurationNarrow(iter.value);
      } else {
        formatResult = closure_2.format(iter.value);
      }
      obj3.text = formatResult;
      let media;
      if (null != tmp9) {
        media = tmp9.media;
      }
      let tmp5 = null;
      if (null != media) {
        tmp5 = media;
      }
      obj3.icon = tmp5;
    }
    obj2.value = obj3;
    if (null == fields.fields.label) {
      const obj4 = { status: "hidden" };
      let obj6 = obj4;
    } else if (null == iter2) {
      const obj5 = { status: "skeleton" };
      obj6 = obj5;
    } else {
      obj6 = { status: "value", text: iter2.value };
    }
    obj2.label = obj6;
    return obj2;
  }
};
export const resolveSingleStringOrSkeleton = function resolveSingleStringOrSkeleton(componentConfig, description, resolveFieldValue) {
  let tmp;
  if (null != componentConfig) {
    tmp = componentConfig.fields[description];
  }
  const items = [require(12003) /* resolveFieldValue */.ResolvedValueType.STRING];
  const iter = resolveFieldValue(tmp, items);
  if (null == iter) {
    let obj = { status: "skeleton" };
  } else {
    obj = { status: "value", text: iter.value };
  }
  return obj;
};
export { decimalToClampedPercentage };
export const resolveProgressPercentage = function resolveProgressPercentage(iter, iter2) {
  if (null == iter) {
    return 0;
  } else if (null == iter2) {
    let num = decimalToClampedPercentage(iter.value);
  } else {
    num = 0;
    if (0 !== iter2.value) {
      num = decimalToClampedPercentage(iter.value / iter2.value);
    }
  }
};
