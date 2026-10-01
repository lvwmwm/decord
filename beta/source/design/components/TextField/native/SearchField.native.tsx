// Module ID: 6471
// Function ID: 6472
// Name: SearchField
// Dependencies: [19, 21, 6031, 1115, 6472, 2]

// Module 6471 (SearchField)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import TextField2 from "TextField" /* 6031 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 6472 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const TextField = TextField2.TextField;
  const intl = intl2.intl;
  const merged = Object.assign(arg0);
  return <TextField placeholder={intl.string(intl2.t["5h0QOP"])} returnKeyType="search" ref={arg1} autoCorrect={false} autoCapitalize="none" accessibilityRole="search" leadingIcon={MagnifyingGlassIcon.MagnifyingGlassIcon} clearable />;
});
const result = size.fileFinishedImporting("design/components/TextField/native/SearchField.native.tsx");

export const SearchField = forwardRefResult;
