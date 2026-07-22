// Module ID: 5767
// Function ID: 49402
// Name: SearchField
// Dependencies: []

// Module 5767 (SearchField)
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((arg0, ref) => {
  const obj = {};
  const intl = ref(dependencyMap[3]).intl;
  obj.placeholder = intl.string(ref(dependencyMap[3]).t.5h0QOP);
  obj.returnKeyType = "search";
  obj.ref = ref;
  const merged = Object.assign(arg0);
  obj["autoCorrect"] = false;
  obj["autoCapitalize"] = "none";
  obj["accessibilityRole"] = "search";
  obj["leadingIcon"] = ref(dependencyMap[4]).MagnifyingGlassIcon;
  obj["isClearable"] = true;
  return jsx(ref(dependencyMap[2]).TextField, obj);
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/components/TextField/native/SearchField.native.tsx");

export const SearchField = forwardRefResult;
