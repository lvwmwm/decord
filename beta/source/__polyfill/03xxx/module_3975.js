// Module ID: 3975
// Function ID: 3976
// Dependencies: [2118]

// Module 3975
import module_2118 from "module_2118" /* 2118 */;

if (!module_2118) {
  const obj2 = { default: module_2118 };
  let obj = obj2;
} else {
  obj = module_2118;
}

export default { date: obj.default({ formats: { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "y-MM-dd" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "'kl'. HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'kl.' {{time}}", long: "{{date}} 'kl.' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };
export default exports.default;
