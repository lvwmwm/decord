// Module ID: 12569
// Function ID: 96722
// Name: NUFChannelsActionSheet
// Dependencies: []
// Exports: default

// Module 12569 (NUFChannelsActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const ContentDismissActionType = arg1(dependencyMap[1]).ContentDismissActionType;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/nuf_channels/native/components/NUFChannelsActionSheet.tsx");

export default function NUFChannelsActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const arg1 = markAsDismissed;
  const items = [markAsDismissed];
  const callback = React.useCallback(() => {
    callback(closure_2[3]).hideActionSheet();
    if (null != markAsDismissed) {
      markAsDismissed(constants.UNKNOWN);
    }
  }, items);
  let obj = {
    onDismiss() {
      let tmp;
      if (null != markAsDismissed) {
        tmp = markAsDismissed(constants.UNKNOWN);
      }
      return tmp;
    },
    startExpanded: true
  };
  obj = { illustration: jsx(importDefault(dependencyMap[6]), {}) };
  const intl = arg1(dependencyMap[7]).intl;
  obj.title = intl.string(arg1(dependencyMap[7]).t.Ay9424);
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.description = intl2.string(arg1(dependencyMap[7]).t.mufH2P);
  const intl3 = arg1(dependencyMap[7]).intl;
  obj.CTALabel = intl3.string(arg1(dependencyMap[7]).t.BddRzS);
  obj.onCTAPress = callback;
  obj.children = jsx(importDefault(dependencyMap[5]), obj);
  return jsx(arg1(dependencyMap[4]).BottomSheet, obj);
};
