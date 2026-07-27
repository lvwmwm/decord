// Module ID: 3318
// Function ID: 26114
// Name: result1
// Dependencies: [1927]

// Module 3318 (result1)
import buildFormatLongFn from "buildFormatLongFn";

if (!buildFormatLongFn) {
  let obj = { default: buildFormatLongFn };
} else {
  obj = buildFormatLongFn;
}
obj = {};
obj.date = obj.default({ formats: { full: "EEEE, d 'de' MMMM 'de' y", long: "d 'de' MMMM 'de' y", medium: "d MMM y", short: "dd/MM/yyyy" }, defaultWidth: "full" });
obj.time = obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { full: "{{date}} '\u00E0s' {{time}}", long: "{{date}} '\u00E0s' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" });

export default obj;
export default exports.default;
