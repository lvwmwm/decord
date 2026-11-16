// Module ID: 7315
// Function ID: 7316
// Name: SearchBar
// Dependencies: [19, 21, 7188, 1113, 7316, 2]
// Exports: SearchBar

// Module 7315 (SearchBar)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import TextField2 from "TextField" /* 7188 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 7316 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Search/native/SearchBar.native.tsx");

export function SearchBar(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const TextField = TextField2.TextField;
  const intl = intl2.intl;
  const merged1 = Object.assign(merged);
  return <TextField placeholder={intl.string(intl2.t["5h0QOP"])} returnKeyType="search" ref={ref} autoCorrect={false} autoCapitalize="none" accessibilityRole="search" leadingIcon={MagnifyingGlassIcon.MagnifyingGlassIcon} clearable />;
}
