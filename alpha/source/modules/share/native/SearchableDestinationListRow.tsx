// Module ID: 17719
// Function ID: 17720
// Name: SearchableDestinationListRow
// Dependencies: [19, 21, 10063, 10061, 9661, 8361, 13840, 13842, 1254, 2]
// Exports: default

// Module 17719 (SearchableDestinationListRow)
import Fragment from "Fragment" /* 21 */;
import GlobalUtils from "GlobalUtils" /* 1254 */;
import UserSearchUtils from "UserSearchUtils" /* 8361 */;
import formatResults from "formatResults" /* 10061 */;
import _mod10063 from "module_10063" /* 10063 */;
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
  if (type === _mod10063.AutocompleterResultTypes.HEADER) {
    return null;
  } else {
    let fn;
    if (null != onPressDestination) {
      fn = () => {
        const obj = formatResults;
        return onPressDestination(obj.getDestinationIdFromResult(require));
      };
    }
    if (_mod10063.AutocompleterResultTypes.USER === type) {
      onPressDestination(9661);
      const merged1 = Object.assign(merged);
      const tmp2Result = UserSearchUtils;
      return <tmp18 user={record} type={tmp2Result.getRelationshipType(record.id)} onPress={fn} />;
    } else if (_mod10063.AutocompleterResultTypes.GROUP_DM === type) {
      onPressDestination(13840);
      const merged2 = Object.assign(merged);
      return <tmp12 channel={record} onPress={fn} />;
    } else {
      if (_mod10063.AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (_mod10063.AutocompleterResultTypes.VOICE_CHANNEL !== type) {
          const tmp2Result2 = GlobalUtils;
          return tmp2Result2.assertNever(type);
        }
      }
      onPressDestination(13842);
      const merged3 = Object.assign(merged);
      return <tmp6 channel={record} onPress={fn} />;
    }
  }
};
