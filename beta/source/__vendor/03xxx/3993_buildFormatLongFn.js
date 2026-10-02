// Module ID: 3993
// Function ID: 3994
// Name: buildFormatLongFn
// Dependencies: [2120]

// Module 3993 (buildFormatLongFn)
import buildFormatLongFn from "buildFormatLongFn" /* 2120 */;

let obj;
if (!buildFormatLongFn) {
  obj = { default: buildFormatLongFn };
  const obj2 = { default: buildFormatLongFn };
} else {
  obj = buildFormatLongFn;
}
({ date: obj.default({ formats: { full: "y\u5E74M\u6708d\u65E5EEEE", long: "y\u5E74M\u6708d\u65E5", medium: "y/MM/dd", short: "y/MM/dd" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "H\u6642mm\u5206ss\u79D2 zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) });

export default { date: obj.default({ formats: { full: "y\u5E74M\u6708d\u65E5EEEE", long: "y\u5E74M\u6708d\u65E5", medium: "y/MM/dd", short: "y/MM/dd" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "H\u6642mm\u5206ss\u79D2 zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };
