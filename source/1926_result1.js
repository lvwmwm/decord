// Module ID: 1926
// Function ID: 21800
// Name: result1
// Dependencies: [1927]

// Module 1926 (result1)
import buildFormatLongFn from "buildFormatLongFn";

if (!buildFormatLongFn) {
  let obj = { default: buildFormatLongFn };
} else {
  obj = buildFormatLongFn;
}
obj = {};
obj.date = obj.default({ formats: { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" }, defaultWidth: "full" });
obj.time = obj.default({ formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" });

export default obj;
export default exports.default;
