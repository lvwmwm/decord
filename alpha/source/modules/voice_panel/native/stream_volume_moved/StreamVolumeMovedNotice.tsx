// Module ID: 19540
// Function ID: 19541
// Name: StreamVolumeMovedNotice
// Dependencies: [32, 19, 6782, 502, 14897, 11732, 4858, 21, 11733, 504, 9519, 4845, 6785, 6109, 1112, 6113, 2]
// Exports: default

// Module 19540 (StreamVolumeMovedNotice)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import intl4 from "intl" /* 1112 */;
import dismissible_content from "dismissible_content" /* 4845 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4858 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6785 */;
import useSelectedDismissibleContent2 from "useSelectedDismissibleContent" /* 9519 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11732 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11733 */;
import StreamVolumeMovedStore from "StreamVolumeMovedStore" /* 14897 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6782 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, lastActiveStream;

let _slicedToArray = _slicedToArray_mod;
const showStreamVolumeMovedHint = StreamVolumeMovedStore.showStreamVolumeMovedHint;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/voice_panel/native/stream_volume_moved/StreamVolumeMovedNotice.tsx");

export default function StreamVolumeMovedNotice() {
  let closure_2;
  let closure_3;
  let id;
  let intl2;
  let intl3;
  let items2;
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ setControlsMode: require, setFocused: importDefault } = context);
  let obj = get_initialized;
  const items = [ApplicationStreamingStore, AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    lastActiveStream = lastActiveStream.getLastActiveStream();
    let tmp2 = null;
    if (null != lastActiveStream) {
      tmp2 = null;
      if (lastActiveStream.ownerId !== id.getId()) {
        tmp2 = lastActiveStream;
      }
    }
    return tmp2;
  });
  const useSelectedDismissibleContent = useSelectedDismissibleContent2.useSelectedDismissibleContent;
  useSelectedDismissibleContent2;
  if (null != stateFromStores) {
    const items1 = [tmp3(4845).DismissibleContent.VOICE_PANEL_STREAM_VOLUME_MOVED_NOTICE];
    items2 = items1;
  } else {
    items2 = [];
  }
  dependencyMap = _slicedToArray(useSelectedDismissibleContent(items2, { bypassAutoDismiss: true }), 2)[1];
  _slicedToArray(useSelectedDismissibleContent(items2, { bypassAutoDismiss: true }), 2);
  if (null != stateFromStores) {
    if (tmp7 === dismissible_content.DismissibleContent.VOICE_PANEL_STREAM_VOLUME_MOVED_NOTICE) {
      const tmp3Result = StreamKeyUtils;
      _slicedToArray = tmp3Result.encodeStreamKey(stateFromStores);
      const TableRowGroup = tmp3(6109).TableRowGroup;
      const intl = tmp3(1112).intl;
      ({
        label: intl2.string(intl4.t["49qRvZ"]),
        trailing: null,
        arrow: true,
        onPress: function handlePress() {
              closure_2(ContentDismissActionType.TAKE_ACTION);
              showStreamVolumeMovedHint(closure_3);
              importDefault(closure_3);
              const obj = { mode: VoicePanelControlsModes.FLOATING_DEFAULT };
              require(obj);
            }
      });
      const TableRow = tmp3(6113).TableRow;
      intl2 = tmp3(1112).intl;
      ({ text: intl3.string(intl4.t.YuNoIm) });
      const TrailingText = tmp3(6113).TableRow.TrailingText;
      intl3 = tmp3(1112).intl;
      return <TableRowGroup title={intl.string(intl4.t.pEAl4b)} hasIcons={false}>{null}</TableRowGroup>;
    }
  }
  return null;
};
