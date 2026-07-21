// Module ID: 5447
// Function ID: 46562
// Name: RowCheckmark
// Dependencies: []
// Exports: default

// Module 5447 (RowCheckmark)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/void/Form/native/FormCheckmark.tsx");

export default function RowCheckmark(selected) {
  let tmp = null;
  if (selected.selected) {
    const obj = { color: importDefault(dependencyMap[3]).unsafe_rawColors.BRAND_500 };
    tmp = jsx(arg1(dependencyMap[2]).CheckmarkSmallIcon, obj);
  }
  return tmp;
};
