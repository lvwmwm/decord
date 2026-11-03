// Module ID: 18407
// Function ID: 18408
// Name: SearchableDestinationListRow
// Dependencies: [19, 21, 9263, 13520, 10868, 7927, 10928, 10931, 1380, 2]
// Exports: default

// Module 18407 (SearchableDestinationListRow)
import Fragment from "Fragment" /* 21 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import UserSearchUtils from "UserSearchUtils" /* 7927 */;
import _mod9263 from "module_9263" /* 9263 */;
import formatResults from "formatResults" /* 13520 */;
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
  if (type === _mod9263.AutocompleterResultTypes.HEADER) {
    return null;
  } else {
    let fn;
    if (null != onPressDestination) {
      fn = () => {
        const obj = formatResults;
        return onPressDestination(obj.getDestinationIdFromResult(require));
      };
    }
    if (_mod9263.AutocompleterResultTypes.USER === type) {
      onPressDestination(10868);
      const merged1 = Object.assign(merged);
      const tmp2Result = UserSearchUtils;
      return <tmp18 user={record} type={tmp2Result.getRelationshipType(record.id)} onPress={fn} />;
    } else if (_mod9263.AutocompleterResultTypes.GROUP_DM === type) {
      onPressDestination(10928);
      const merged2 = Object.assign(merged);
      return <tmp12 channel={record} onPress={fn} />;
    } else {
      if (_mod9263.AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (_mod9263.AutocompleterResultTypes.VOICE_CHANNEL !== type) {
          const tmp2Result2 = GlobalUtils;
          return tmp2Result2.assertNever(type);
        }
      }
      onPressDestination(10931);
      const merged3 = Object.assign(merged);
      return <tmp6 channel={record} onPress={fn} />;
    }
  }
};
