// Module ID: 4582
// Function ID: 4583
// Name: buildFormatLongFn
// Dependencies: [2191]

// Module 4582 (buildFormatLongFn)
import buildFormatLongFn from "buildFormatLongFn" /* 2191 */;

let obj;
if (!buildFormatLongFn) {
  obj = { default: buildFormatLongFn };
  const obj2 = { default: buildFormatLongFn };
} else {
  obj = buildFormatLongFn;
}
({ date: obj.default({ formats: { full: "y. MMMM d., EEEE", long: "y. MMMM d.", medium: "y. MMM d.", short: "y. MM. dd." }, defaultWidth: "full" }), time: obj.default({ formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) });

export default { date: obj.default({ formats: { full: "y. MMMM d., EEEE", long: "y. MMMM d.", medium: "y. MMM d.", short: "y. MM. dd." }, defaultWidth: "full" }), time: obj.default({ formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };
