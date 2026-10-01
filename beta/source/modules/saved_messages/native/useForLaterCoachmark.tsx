// Module ID: 16039
// Function ID: 16040
// Name: useForLaterCoachmark
// Dependencies: [32, 19, 17, 2042, 21, 2029, 4836, 12870, 7275, 6806, 1115, 10589, 2]
// Exports: default

// Module 16039 (useForLaterCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import AssetRegistryDefault from "AssetRegistry" /* 12870 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

function CoachmarkImg() {
  const tmp = closure_9();
  return <Image source={AssetRegistryDefault} style={tmp.imageContainer} />;
}
const Image = react_native.Image;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_8 = dismissible_content.DismissibleContent.FOR_LATER_NOTIFICATIONS_COACHMARK;
let closure_9 = createStyles.createStyles({ imageContainer: { width: 100, height: 80 } });
const result = size.fileFinishedImporting("modules/saved_messages/native/useForLaterCoachmark.tsx");

export default function useForLaterCoachmark(targetRef) {
  let first;
  let items1;
  let obj = first(7275);
  if (obj.useIsForLaterExperimentOn("forLaterCoachmark")) {
    const items = [closure_8];
    items1 = items;
  } else {
    items1 = [];
  }
  const tmpResult = first(6806);
  const tmp4 = _slicedToArray(tmpResult.useSelectedDismissibleContent(items1, undefined, true), 2);
  first = tmp4[0];
  let closure_1 = tmp6;
  const items2 = [tmp4[1], first];
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    const obj = {
      title: intl.string(intl3.t.qPbFK2),
      description: intl2.string(intl3.t.URrJq1),
      position: "bottom",
      visible: first === closure_8,
      onDismiss() {
        closure_1_1(constants.USER_DISMISS);
      },
      renderImgComponent() {
        return closure_1_7(closure_1_10, {});
      }
    };
    intl = intl3.intl;
    intl2 = intl3.intl;
    return obj;
  }, items2);
  const tmpResult2 = first(10589);
  const coachmark = tmpResult2.useCoachmark(targetRef, memo);
  return tmp4[1];
};
