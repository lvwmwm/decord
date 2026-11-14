// Module ID: 18920
// Function ID: 18921
// Name: SearchableDestinationListRow
// Dependencies: [19, 21, 10247, 10245, 10581, 8766, 10890, 10893, 1255, 2]
// Exports: default

// Module 18920 (SearchableDestinationListRow)
import Fragment from "Fragment" /* 21 */;
import GlobalUtils from "GlobalUtils" /* 1255 */;
import UserSearchUtils from "UserSearchUtils" /* 8766 */;
import formatResults from "formatResults" /* 10245 */;
import _mod10247 from "module_10247" /* 10247 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/share/native/SearchableDestinationListRow.tsx");

export default function SearchableDestinationListRow(result) {
  let record;
  let type;
  result = result.result;
  require = result;
  const onPressDestination = result.onPressDestination;
  const merged = Object.assign(result, Object.assign({ result: 0, onPressDestination: 0 }));
  ({ type, record } = result);
  if (type === _mod10247.AutocompleterResultTypes.HEADER) {
    return null;
  } else {
    let fn;
    if (null != onPressDestination) {
      fn = () => {
        const obj = formatResults;
        return onPressDestination(obj.getDestinationIdFromResult(require));
      };
    }
    if (_mod10247.AutocompleterResultTypes.USER === type) {
      onPressDestination(10581);
      const merged1 = Object.assign(merged);
      const tmp2Result = UserSearchUtils;
      return <tmp18 user={record} type={tmp2Result.getRelationshipType(record.id)} onPress={fn} />;
    } else if (_mod10247.AutocompleterResultTypes.GROUP_DM === type) {
      onPressDestination(10890);
      const merged2 = Object.assign(merged);
      return <tmp12 channel={record} onPress={fn} />;
    } else {
      if (_mod10247.AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (_mod10247.AutocompleterResultTypes.VOICE_CHANNEL !== type) {
          const tmp2Result2 = GlobalUtils;
          return tmp2Result2.assertNever(type);
        }
      }
      onPressDestination(10893);
      const merged3 = Object.assign(merged);
      return <tmp6 channel={record} onPress={fn} />;
    }
  }
};
