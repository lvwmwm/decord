// Module ID: 3266
// Function ID: 25970
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3266 (formatDistance)
let closure_0 = { "Null": "<string:202768385>", "Null": "<string:474087427>", "Null": "%encodeURIComponent%", "Null": "<string:1107296596>" };
let closure_1 = {};
let closure_2 = { xseconds: {}, halfaminute: {}, xminutes: { y: 0.000000000000000000000000000000000000000000000000000000000000000000000020375321734673, showUnderlay: 8592298112.000679, y: 8592298144.000679 }, xhours: {}, xdays: { y: true, showUnderlay: true, y: true }, xweeks: { y: "te", showUnderlay: "EXPRESSION_PICKER_EXPRESSION_FOCUS", y: "activity_score" }, xmonths: { y: "un anno", showUnderlay: "{{count}} anni", y: "pi\u00F9 di un anno" }, xyears: {} };

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
