// Module ID: 3658
// Function ID: 27979
// Name: result1
// Dependencies: [1927]

// Module 3658 (result1)
import buildFormatLongFn from "buildFormatLongFn";

if (!buildFormatLongFn) {
  let obj = { default: buildFormatLongFn };
} else {
  obj = buildFormatLongFn;
}
obj = {};
obj.date = obj.default({ formats: { full: "EEEE, 'ng\u00E0y' d MMMM 'n\u0103m' y", long: "'ng\u00E0y' d MMMM 'n\u0103m' y", medium: "d MMM 'n\u0103m' y", short: "dd/MM/y" }, defaultWidth: "full" });
obj.time = obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" });

export default obj;
export default exports.default;
