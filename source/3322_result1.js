// Module ID: 3322
// Function ID: 26139
// Name: result1
// Dependencies: [1927]

// Module 3322 (result1)
import buildFormatLongFn from "buildFormatLongFn";

if (!buildFormatLongFn) {
  let obj = { default: buildFormatLongFn };
} else {
  obj = buildFormatLongFn;
}
obj = {};
obj.date = obj.default({ formats: { full: "y\uB144 M\uC6D4 d\uC77C EEEE", long: "y\uB144 M\uC6D4 d\uC77C", medium: "y.MM.dd", short: "y.MM.dd" }, defaultWidth: "full" });
obj.time = obj.default({ formats: { full: "a H\uC2DC mm\uBD84 ss\uCD08 zzzz", long: "a H:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" });

export default obj;
export default exports.default;
