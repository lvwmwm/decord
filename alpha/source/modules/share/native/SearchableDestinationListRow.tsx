// Module ID: 17932
// Function ID: 17933
// Name: SearchableDestinationListRow
// Dependencies: [19, 21, 8948, 8946, 11357, 8325, 11404, 11406, 1255, 2]
// Exports: default

// Module 17932 (SearchableDestinationListRow)
import Fragment from "Fragment" /* 21 */;
import GlobalUtils from "GlobalUtils" /* 1255 */;
import UserSearchUtils from "UserSearchUtils" /* 8325 */;
import formatResults from "formatResults" /* 8946 */;
import _mod8948 from "module_8948" /* 8948 */;
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
  if (type === _mod8948.AutocompleterResultTypes.HEADER) {
    return null;
  } else {
    let fn;
    if (null != onPressDestination) {
      fn = () => {
        const obj = formatResults;
        return onPressDestination(obj.getDestinationIdFromResult(require));
      };
    }
    if (_mod8948.AutocompleterResultTypes.USER === type) {
      onPressDestination(11357);
      const merged1 = Object.assign(merged);
      const tmp2Result = UserSearchUtils;
      return <tmp18 user={record} type={tmp2Result.getRelationshipType(record.id)} onPress={fn} />;
    } else if (_mod8948.AutocompleterResultTypes.GROUP_DM === type) {
      onPressDestination(11404);
      const merged2 = Object.assign(merged);
      return <tmp12 channel={record} onPress={fn} />;
    } else {
      if (_mod8948.AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (_mod8948.AutocompleterResultTypes.VOICE_CHANNEL !== type) {
          const tmp2Result2 = GlobalUtils;
          return tmp2Result2.assertNever(type);
        }
      }
      onPressDestination(11406);
      const merged3 = Object.assign(merged);
      return <tmp6 channel={record} onPress={fn} />;
    }
  }
};
