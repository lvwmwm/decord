// Module ID: 3266
// Function ID: 25970
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3266 (formatDistance)
let closure_0 = {};
let closure_1 = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null };
let closure_2 = { xseconds: { hasDiversity: null, PLATFORM_GITHUB: null, qwJHjo: null }, halfaminute: {}, xminutes: {}, xhours: { hasDiversity: "<string:1393623041>", PLATFORM_GITHUB: "<string:3896639490>", qwJHjo: "<string:301990219>" }, xdays: { hasDiversity: "r", PLATFORM_GITHUB: "label_type", qwJHjo: "lo" }, xweeks: { hasDiversity: "r", PLATFORM_GITHUB: "isArray", qwJHjo: "Icon" }, xmonths: { hasDiversity: null, PLATFORM_GITHUB: null, qwJHjo: null }, xyears: { hasDiversity: "una settimana", PLATFORM_GITHUB: "{{count}} settimane", qwJHjo: "circa un mese" } };

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
