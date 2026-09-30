// Module ID: 13996
// Function ID: 13997
// Name: text
// Dependencies: [13997, 14011]

// Module 13996 (text)
import _mod13997 from "module_13997" /* 13997 */;
import _mod14011 from "module_14011" /* 14011 */;


export default (arg0) => {
  const tmp = _mod13997(arg0, "string");
  let text = tmp;
  if (!_mod14011(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
