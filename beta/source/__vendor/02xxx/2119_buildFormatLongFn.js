// Module ID: 2119
// Function ID: 2120
// Name: buildFormatLongFn
// Dependencies: [2120]

// Module 2119 (buildFormatLongFn)
import buildFormatLongFn from "buildFormatLongFn" /* 2120 */;

let obj;
if (!buildFormatLongFn) {
  obj = { default: buildFormatLongFn };
  const obj2 = { default: buildFormatLongFn };
} else {
  obj = buildFormatLongFn;
}
({ date: obj.default({ formats: { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) });

export default { date: obj.default({ formats: { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
