// Module ID: 15415
// Function ID: 15416
// Name: SearchableDestinationListRow
// Dependencies: [19, 21, 7375, 7373, 9690, 7190, 9722, 9725, 1370, 2]
// Exports: default

// Module 15415 (SearchableDestinationListRow)
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
  if (type === require(7375) /* sortByMatchScore */.AutocompleterResultTypes.HEADER) {
    return null;
  } else {
    if (null != onPressDestination) {
      const fn = () => onPressDestination(result(outer1_2[3]).getDestinationIdFromResult(closure_0));
    }
    if (tmp2(7375).AutocompleterResultTypes.USER === type) {
      let obj = {};
      const merged1 = Object.assign(merged);
      obj.user = record;
      let tmp2Result = tmp2(7190);
      obj.type = tmp2Result.getRelationshipType(record.id);
      obj.onPress = fn;
      return jsx(onPressDestination(9690), {});
    } else if (tmp2(7375).AutocompleterResultTypes.GROUP_DM === type) {
      obj = {};
      const merged2 = Object.assign(merged);
      obj.channel = record;
      obj.onPress = fn;
      return jsx(onPressDestination(9722), {});
    } else {
      if (tmp2(7375).AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (tmp2(7375).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
          tmp2Result = tmp2(1370);
          return tmp2Result.assertNever(type);
        }
      }
      const obj1 = {};
      const merged3 = Object.assign(merged);
      obj1.channel = record;
      obj1.onPress = fn;
      return jsx(onPressDestination(9725), {});
    }
  }
};
