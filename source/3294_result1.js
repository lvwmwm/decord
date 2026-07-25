// Module ID: 3294
// Function ID: 26055
// Name: result1
// Dependencies: [1927]

// Module 3294 (result1)
import buildFormatLongFn from "buildFormatLongFn";

if (!buildFormatLongFn) {
  let obj = { default: buildFormatLongFn };
} else {
  obj = buildFormatLongFn;
}
obj = {};
obj.date = obj.default({ formats: { full: "y 'm'. MMMM d 'd'., EEEE", long: "y 'm'. MMMM d 'd'.", medium: "y-MM-dd", short: "y-MM-dd" }, defaultWidth: "full" });
obj.time = obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" });

export default obj;
export default exports.default;
