// Module ID: 6469
// Function ID: 6470
// Name: CountryCallingCodeSelect
// Dependencies: [32, 19, 17, 5051, 21, 4836, 576, 6363, 5052, 6470, 5829, 5917, 4832, 6471, 6474, 6475, 1115, 6476, 2]
// Exports: default

// Module 6469 (CountryCallingCodeSelect)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import CountryCodeUtils from "CountryCodeUtils" /* 5051 */;
import fuzzysearchDefault from "fuzzysearch" /* 5829 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let alpha2;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const getI18NCountryName = CountryCodeUtils.getI18NCountryName;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  let space;
  let space2;
  const obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: arg0 ? space.PX_24 : space.PX_12, paddingTop: nativeDefault.space.PX_16, paddingBottom: arg0 ? space2.PX_24 : space2.PX_16, flex: 1 };
  space = nativeDefault.space;
  space2 = tmp(576).space;
  const obj2 = { container: obj, searchFieldContainer: { paddingBottom: nativeDefault.space.PX_16 } };
  ({ paddingBottom: nativeDefault.space.PX_16 });
  return obj2;
});
const result = size.fileFinishedImporting("modules/phone/native/CountryCallingCodeSelect.tsx");

export default function CountryCallingCodeSelect(onCountrySelected) {
  let intl;
  onCountrySelected = onCountrySelected.onCountrySelected;
  const onClose = onCountrySelected.onClose;
  let first;
  let memo;
  let rows;
  const tmp = onClose;
  let tmp3 = closure_9(onClose(first[7])());
  const tmp4 = memo(rows.useState(""), 2);
  first = tmp4[0];
  let tmp6 = tmp4[1];
  memo = rows.useMemo(() => {
    let obj = onClose(first[8]);
    return obj.flatMap((alpha2, index) => {
      let closure_129_1;
      let phoneCountryCodes;
      alpha2 = alpha2.alpha2;
      ({ phoneCountryCodes, name: closure_129_1 } = alpha2);
      let closure_2 = index;
      let closure_3 = closure_1_6(alpha2);
      return phoneCountryCodes.map((code) => {
        const obj = { translatedName, key: "" + closure_2 + "-" + code, country: obj2 };
        return obj;
      });
    });
  }, []);
  let items = [memo, first];
  let tmp8 = onClose(first[9])();
  const memo1 = rows.useMemo(() => {
    let items1;
    const items = [];
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let str = first;
      let startsWithResult = 0 === first.length;
      if (!startsWithResult) {
        let str2 = tmp3.country.code;
        let replaced = str2.replace(/\+|\s/g, "");
        startsWithResult = replaced.startsWith(str.replace(/\+|\s/g, ""));
      }
      if (!startsWithResult) {
        let tmp8 = fuzzysearchDefault;
        let str3 = tmp3.country.name;
        let formatted = str.toLowerCase();
        startsWithResult = tmp8(formatted, str3.toLowerCase());
      }
      if (!startsWithResult) {
        let tmp13 = fuzzysearchDefault;
        let str4 = tmp3.translatedName;
        let formatted1 = str.toLowerCase();
        startsWithResult = tmp13(formatted1, str4.toLowerCase());
      }
      if (startsWithResult) {
        let arr = items.push(tmp3);
      }
      continue;
    }
    const obj = { rows: items, sections: items1 };
    items1 = [items.length];
    return obj;
  }, items);
  rows = memo1.rows;
  let items1 = [onClose, onCountrySelected, rows];
  const sections = memo1.sections;
  let obj = { style: tmp3.container, children: null };
  let tmp13 = closure_7;
  let obj2 = { style: tmp3.searchFieldContainer, children: closure_7(onCountrySelected(first[13]).SearchField, { size: "md", onChange: tmp6 }) };
  const callback = rows.useCallback((arg0, arg1) => {
    let obj2;
    const country = tmp.country;
    const obj = {
      start: 0 === arg1,
      end: arg1 === rows.length - 1,
      label: rows[arg1].translatedName,
      trailing: closure_1_7(onCountrySelected(first[12]).Text, obj2),
      onPress() {
        onCountrySelected(country);
        if (onClose != null) {
          onClose();
        }
      }
    };
    const TableRow = onCountrySelected(first[11]).TableRow;
    obj2 = { variant: "text-md/semibold", children: country.code };
    return closure_1_7(TableRow, obj);
  }, items1);
  let tmp11 = closure_8;
  let tmp12 = View;
  const items2 = [closure_7(View, obj2), ];
  if ("" !== first) {
    let tmp13Result;
    if (0 === rows.length) {
      const obj3 = { source: tmp(first[15]), text: intl.string(onCountrySelected(first[16]).t.wEHnxW) };
      const tmpResult = tmp(first[14]);
      intl = tmp14(tmp2[16]).intl;
      tmp13Result = tmp13(tmpResult, obj3);
    }
    items2[1] = tmp13Result;
    obj.children = items2;
    return tmp11(tmp12, obj);
  }
  tmp13Result = tmp13(tmp(tmp2[17]), { sections, renderItem: callback, itemSize: tmp8, estimatedListSize: "windowSize", keyboardShouldPersistTaps: "always" });
};
