// Module ID: 3238
// Function ID: 25905
// Name: result1
// Dependencies: [1927]

// Module 3238 (result1)
import buildFormatLongFn from "buildFormatLongFn";

if (!buildFormatLongFn) {
  let obj = { default: buildFormatLongFn };
} else {
  obj = buildFormatLongFn;
}
obj = {};
obj.date = obj.default({ formats: { full: "EEEE, d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "d/M/yy" }, defaultWidth: "full" });
obj.time = obj.default({ formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { full: "{{date}} - {{time}}", long: "{{date}} - {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" });

export default obj;
export default exports.default;
