// Module ID: 7280
// Function ID: 7281
// Name: SearchBar
// Dependencies: [19, 21, 7155, 1112, 7281, 2]
// Exports: SearchBar

// Module 7280 (SearchBar)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import TextField2 from "TextField" /* 7155 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 7281 */;
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
