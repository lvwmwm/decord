// Module ID: 18207
// Function ID: 18208
// Name: SearchableDestinationListRow
// Dependencies: [19, 21, 9116, 13334, 10718, 7796, 10778, 10781, 1380, 2]
// Exports: default

// Module 18207 (SearchableDestinationListRow)
import Fragment from "Fragment" /* 21 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import UserSearchUtils from "UserSearchUtils" /* 7796 */;
import _mod9116 from "module_9116" /* 9116 */;
import formatResults from "formatResults" /* 13334 */;
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
  if (type === _mod9116.AutocompleterResultTypes.HEADER) {
    return null;
  } else {
    let fn;
    if (null != onPressDestination) {
      fn = () => {
        const obj = formatResults;
        return onPressDestination(obj.getDestinationIdFromResult(require));
      };
    }
    if (_mod9116.AutocompleterResultTypes.USER === type) {
      onPressDestination(10718);
      const merged1 = Object.assign(merged);
      const tmp2Result = UserSearchUtils;
      return <tmp18 user={record} type={tmp2Result.getRelationshipType(record.id)} onPress={fn} />;
    } else if (_mod9116.AutocompleterResultTypes.GROUP_DM === type) {
      onPressDestination(10778);
      const merged2 = Object.assign(merged);
      return <tmp12 channel={record} onPress={fn} />;
    } else {
      if (_mod9116.AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (_mod9116.AutocompleterResultTypes.VOICE_CHANNEL !== type) {
          const tmp2Result2 = GlobalUtils;
          return tmp2Result2.assertNever(type);
        }
      }
      onPressDestination(10781);
      const merged3 = Object.assign(merged);
      return <tmp6 channel={record} onPress={fn} />;
    }
  }
};
