// Module ID: 11063
// Function ID: 86099
// Name: Modal
// Dependencies: []
// Exports: Modal

// Module 11063 (Modal)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = function Modal(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { height: arg1(dependencyMap[4]).NAV_BAR_HEIGHT + importDefault(dependencyMap[2])().top };
  obj["headerStyle"] = obj;
  return jsx(arg1(dependencyMap[3]).Navigator, obj);
};
