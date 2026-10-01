// Module ID: 11709
// Function ID: 11710
// Name: ImageInputActionSheet
// Dependencies: [19, 17, 7248, 21, 4836, 576, 11708, 4701, 4800, 6618, 4832, 1177, 6620, 1115, 11710, 2]
// Exports: default

// Module 11709 (ImageInputActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import PollsConstants from "PollsConstants" /* 7248 */;
import EditPollCreationImageAltTextModalActionCreators from "EditPollCreationImageAltTextModalActionCreators" /* 11710 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
let closure_5 = PollsConstants.POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { emojiContainer: { flexDirection: "row", alignItems: "center", marginHorizontal: 24 }, emojiIcon: obj2 };
obj2 = { marginRight: 12, borderRadius: nativeDefault.radii.sm };
let closure_8 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/polls/native/ImageInputActionSheet.tsx");

export default function ImageInputAnswerActionSheet(channelId) {
  let answer;
  let index;
  let intl2;
  let intl3;
  let items;
  let onSave;
  let stringResult;
  channelId = channelId.channelId;
  ({ index: importDefault, answer } = channelId);
  ({ onSaveAltText: react, onRemoveAnswerImage: View, openExpressionPicker: closure_5 } = channelId);
  let closure_6;
  const tmp = closure_8();
  const tmp3 = require("useRenderPollAnswerImage")(channelId, answer.localCreationAnswerId, answer.image, 40, 40);
  const upload = tmp3.upload;
  let tmp4 = null != upload;
  const renderImage = tmp3.renderImage;
  if (!tmp4) {
    const image = answer.image;
    let emoji1;
    if (image != null) {
      emoji1 = image.emoji;
    }
    tmp4 = null != emoji1;
  }
  closure_6 = react.useCallback(() => {
    const obj = channelId(answer[7]);
    obj.dismissKeyboard();
    const obj2 = require("ActionSheetActionCreators");
    obj2.hideActionSheet(closure_5);
  }, []);
  let tmp6Result = tmp4;
  const ActionSheet = channelId(tmp2[9]).ActionSheet;
  if (tmp4) {
    let obj = { style: tmp.emojiContainer, children: items };
    let obj2 = { style: tmp.emojiIcon, children: renderImage };
    items = [closure_6(View, obj2), ];
    const image2 = answer.image;
    let name;
    const Text = tmp7(tmp2[10]).Text;
    const tmp10 = closure_6;
    const tmp9 = View;
    if (image2 != null) {
      const emoji = image2.emoji;
      if (emoji != null) {
        name = emoji.name;
      }
    }
    const _HermesInternal = HermesInternal;
    const obj3 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: ":" + name + ":" };
    items[1] = tmp10(Text, obj3);
    tmp6Result = tmp6(tmp9, obj);
  }
  const items1 = [tmp6Result, closure_6(channelId(tmp2[11]).Spacer, { size: 21 }), ];
  const Group = tmp7(tmp2[12]).ActionSheetRow.Group;
  const ActionSheetRow = tmp7(tmp2[12]).ActionSheetRow;
  const intl = tmp7(tmp2[13]).intl;
  const string = intl.string;
  const t = tmp7(tmp2[13]).t;
  if (tmp4) {
    stringResult = string(t.CZeRhU);
  } else {
    stringResult = string(t.dzcU1Q);
  }
  const items2 = [, , ];
  const obj4 = {
    label: stringResult,
    onPress() {
      closure_6();
      closure_5();
    }
  };
  items2[0] = closure_6(ActionSheetRow, obj4);
  let tmp13Result = null;
  if (null != upload) {
    const obj5 = {
      label: intl2.string(channelId(answer[13]).t.w7x2t4),
      onPress() {
          closure_6();
          const obj = EditPollCreationImageAltTextModalActionCreators;
          const obj2 = { channelId, answer, index: importDefault, onSave: react, imageSize: 40 };
          const result = obj.openEditPollCreationImageAltTextModal(obj2);
        }
    };
    const ActionSheetRow2 = tmp7(tmp2[12]).ActionSheetRow;
    intl2 = tmp7(tmp2[13]).intl;
    tmp13Result = tmp13(ActionSheetRow2, obj5);
  }
  items2[1] = tmp13Result;
  let tmp13Result2 = null;
  if (tmp4) {
    const obj6 = {
      label: intl3.string(channelId(answer[13]).t.IhMxgu),
      onPress() {
          View(importDefault);
          closure_6();
        }
    };
    const ActionSheetRow3 = tmp7(tmp2[12]).ActionSheetRow;
    intl3 = tmp7(tmp2[13]).intl;
    tmp13Result2 = tmp13(ActionSheetRow3, obj6);
  }
  const obj7 = { startExpanded: true, children: items1 };
  items2[2] = tmp13Result2;
  items1[2] = closure_7(Group, { hasIcons: false, children: items2 });
  return closure_7(ActionSheet, obj7);
};
