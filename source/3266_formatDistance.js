// Module ID: 3266
// Function ID: 25965
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3266 (formatDistance)
let closure_0 = { "Null": "r", "Null": "isArray", "Null": "nm", "Null": "padding" };
let closure_1 = {};
let closure_2 = { xseconds: { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null }, halfaminute: { "Bool(true)": false, "Bool(true)": false, "Bool(true)": false }, xminutes: { "Bool(true)": null, "Bool(true)": null, "Bool(true)": false }, xhours: { "Bool(true)": "circa un anno", "Bool(true)": "circa {{count}} anni", "Bool(true)": "un anno" }, xdays: {}, xweeks: {}, xmonths: {}, xyears: {} };

export default function formatDistance(str, arg1, addSuffix) {
  const match = str.match(/about|over|almost|lessthan/i);
  if (match) {
    str = str.replace(match[0], "");
  }
  addSuffix = undefined;
  if (null != addSuffix) {
    addSuffix = addSuffix.addSuffix;
  }
  const formatted = str.toLowerCase();
  let num2;
  if (null != addSuffix) {
    num2 = addSuffix.comparison;
  }
  if (!num2) {
    num2 = 0;
  }
  if (true === addSuffix) {
    let tmp5 = closure_2[formatted][num2];
  } else {
    tmp5 = closure_1[formatted];
  }
  let sum = tmp5;
  if ("halfaminute" !== formatted) {
    sum = arg1 + tmp5;
  }
  let text = sum;
  if (match) {
    text = `${closure_0[str3.toLowerCase(str3)]} ${tmp7}`;
  }
  return text;
};
export default exports.default;
