// Module ID: 9213
// Function ID: 72067
// Name: AuthNavbarPlaceholder
// Dependencies: [79429632, 497811456, 131072, 368050176, 5, 57]
// Exports: default

// Module 9213 (AuthNavbarPlaceholder)
import _slicedToArray from "_slicedToArray";

importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[3]).unsafe_rawColors.TRANSPARENT, borderBottomWidth: 0 };
obj.navBar = obj;
let closure_3 = obj.createStyles(obj);
const result = _slicedToArray.fileFinishedImporting("modules/auth/native/components/atoms/AuthNavbarPlaceholder.tsx");

export default function AuthNavbarPlaceholder() {
  const tmp = callback();
  return jsx(arg1(dependencyMap[4]).FauxHeader, { style: callback().navBar, children: null });
};
