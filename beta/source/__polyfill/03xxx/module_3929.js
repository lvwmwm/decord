// Module ID: 3929
// Function ID: 3930
// Dependencies: [2118]

// Module 3929
import module_2118 from "module_2118" /* 2118 */;

if (!module_2118) {
  const obj2 = { default: module_2118 };
  let obj = obj2;
} else {
  obj = module_2118;
}

export default { date: obj.default({ formats: { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd/MM/y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} '\u00E0' {{time}}", long: "{{date}} '\u00E0' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;
