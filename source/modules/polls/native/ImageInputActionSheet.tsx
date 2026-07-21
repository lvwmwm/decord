// Module ID: 11322
// Function ID: 88088
// Name: ImageInputAnswerActionSheet
// Dependencies: []
// Exports: default

// Module 11322 (ImageInputAnswerActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = arg1(dependencyMap[2]).POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { emojiContainer: { -9223372036854775808: "2bprXx", 9223372036854775807: "isArray", 0: "PurchaseTypeToAnalyticsPaymentType" } };
obj = { marginRight: 12, borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.emojiIcon = obj;
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/polls/native/ImageInputActionSheet.tsx");

export default function ImageInputAnswerActionSheet(channelId) {
  let answer;
  channelId = channelId.channelId;
  const arg1 = channelId;
  ({ index: closure_1, answer } = channelId);
  const dependencyMap = answer;
  ({ onSaveAltText: closure_3, onRemoveAnswerImage: closure_4, openExpressionPicker: closure_5 } = channelId);
  let callback;
  const tmp = callback2();
  const tmp2 = importDefault(dependencyMap[6])(channelId, answer.localCreationAnswerId, answer.image, 40, 40);
  const upload = tmp2.upload;
  let tmp3 = null != upload;
  if (!tmp3) {
    const image = answer.image;
    let emoji;
    if (null != image) {
      emoji = image.emoji;
    }
    tmp3 = null != emoji;
  }
  callback = React.useCallback(() => {
    channelId(answer[7]).dismissKeyboard();
    const obj = channelId(answer[7]);
    callback(answer[8]).hideActionSheet(closure_5);
  }, []);
  let obj = { startExpanded: true };
  let tmp7Result = tmp3;
  if (tmp3) {
    obj = { style: tmp.emojiContainer };
    obj = { style: tmp.emojiIcon, children: tmp2.renderImage };
    const items = [callback(View, obj), ];
    const obj1 = {};
    const image2 = answer.image;
    let name;
    if (null != image2) {
      emoji = image2.emoji;
      if (null != emoji) {
        name = emoji.name;
      }
    }
    const _HermesInternal = HermesInternal;
    obj1.children = ":" + name + ":";
    items[1] = callback(arg1(dependencyMap[10]).Text, obj1);
    obj.children = items;
    tmp7Result = closure_7(View, obj);
    const tmp7 = closure_7;
    const tmp8 = View;
    const tmp9 = callback;
  }
  const items1 = [tmp7Result, callback(arg1(dependencyMap[11]).Spacer, { size: 21 }), ];
  const obj2 = { hasIcons: false };
  const obj3 = {};
  const intl = arg1(dependencyMap[13]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[13]).t;
  if (tmp3) {
    let stringResult = string(t.CZeRhU);
  } else {
    stringResult = string(t.dzcU1Q);
  }
  obj3.label = stringResult;
  obj3.onPress = function onPress() {
    callback4();
    callback3();
  };
  const items2 = [callback(arg1(dependencyMap[12]).ActionSheetRow, obj3), , ];
  let tmp17 = null;
  if (null != upload) {
    const obj4 = {};
    const intl2 = arg1(dependencyMap[13]).intl;
    obj4.label = intl2.string(arg1(dependencyMap[13]).t.w7x2t4);
    obj4.onPress = function onPress() {
      callback4();
      let obj = channelId(answer[14]);
      obj = { channelId, answer, index: closure_1, onSave: closure_3, imageSize: 40 };
      const result = obj.openEditPollCreationImageAltTextModal(obj);
    };
    tmp17 = callback(arg1(dependencyMap[12]).ActionSheetRow, obj4);
  }
  items2[1] = tmp17;
  let tmp21 = null;
  if (tmp3) {
    const obj5 = {};
    const intl3 = arg1(dependencyMap[13]).intl;
    obj5.label = intl3.string(arg1(dependencyMap[13]).t.IhMxgu);
    obj5.onPress = function onPress() {
      callback2(closure_1);
      callback4();
    };
    tmp21 = callback(arg1(dependencyMap[12]).ActionSheetRow, obj5);
  }
  items2[2] = tmp21;
  obj2.children = items2;
  items1[2] = closure_7(arg1(dependencyMap[12]).ActionSheetRow.Group, obj2);
  obj.children = items1;
  return closure_7(arg1(dependencyMap[9]).ActionSheet, obj);
};
