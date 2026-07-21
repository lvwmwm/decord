// Module ID: 3266
// Function ID: 25965
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3266 (formatDistance)
let closure_0 = { 1825112068: "r", 828899332: "isArray", 1826357252: "tag", 1827405828: "padding" };
let closure_1 = {};
let closure_2 = { xseconds: { "Null": null, "Null": null, "Null": null }, halfaminute: { "Null": "Array", "Null": "isArray", "Null": "surrogates" }, xminutes: { "Null": -0.00000000000000000000000000000000000000000000000000002088748164693829, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002255156497620204, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000072667494506026425 }, xhours: { "Null": "circa un anno", "Null": "circa {{count}} anni", "Null": "un anno" }, xdays: {}, xweeks: {}, xmonths: { "Null": "Array", "Null": "isIndexing", "Null": "Array" }, xyears: { "Null": true, "Null": true, "Null": true } };

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
