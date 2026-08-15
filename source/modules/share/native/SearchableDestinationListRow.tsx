// Module ID: 15465
// Function ID: 15466
// Name: SearchableDestinationListRow
// Dependencies: [19, 21, 7593, 7591, 9645, 5409, 9915, 9918, 1370, 2]
// Exports: default

// Module 15465 (SearchableDestinationListRow)
import "noop";
import { jsx } from "jsxProd";

let require = arg1;
let result = require("sortByMatchScore").fileFinishedImporting("modules/share/native/SearchableDestinationListRow.tsx");

export default function SearchableDestinationListRow(result) {
  let record;
  let type;
  result = result.result;
  const require = result;
  const onPressDestination = result.onPressDestination;
  const merged = Object.assign(result, Object.create(null));
  ({ type, record } = result);
  if (type === require(7593) /* sortByMatchScore */.AutocompleterResultTypes.HEADER) {
    return null;
  } else {
    if (null != onPressDestination) {
      const fn = () => onPressDestination(result(outer1_2[3]).getDestinationIdFromResult(closure_0));
    }
    if (tmp2(7593).AutocompleterResultTypes.USER === type) {
      let obj = {};
      const merged1 = Object.assign(merged);
      obj.user = record;
      let tmp2Result = tmp2(5409);
      obj.type = tmp2Result.getRelationshipType(record.id);
      obj.onPress = fn;
      return jsx(onPressDestination(9645), {});
    } else if (tmp2(7593).AutocompleterResultTypes.GROUP_DM === type) {
      obj = {};
      const merged2 = Object.assign(merged);
      obj.channel = record;
      obj.onPress = fn;
      return jsx(onPressDestination(9915), {});
    } else {
      if (tmp2(7593).AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (tmp2(7593).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
          tmp2Result = tmp2(1370);
          return tmp2Result.assertNever(type);
        }
      }
      const obj1 = {};
      const merged3 = Object.assign(merged);
      obj1.channel = record;
      obj1.onPress = fn;
      return jsx(onPressDestination(9918), {});
    }
  }
};
