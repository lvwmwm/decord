// Module ID: 3506
// Function ID: 3507
// Name: buildFormatLongFn
// Dependencies: [1980]

// Module 3506 (buildFormatLongFn)
import buildFormatLongFn from "buildFormatLongFn";

if (!buildFormatLongFn) {
  let obj = { default: null };
  obj[0] = buildFormatLongFn;
} else {
  obj = buildFormatLongFn;
}
obj = { date: obj.default({ formats: { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "y-MM-dd" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "'kl'. HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'kl.' {{time}}", long: "{{date}} 'kl.' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };

export default obj;
export default exports.default;
