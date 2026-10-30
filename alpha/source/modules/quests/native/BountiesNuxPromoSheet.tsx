// Module ID: 16914
// Function ID: 16915
// Name: BountiesNuxPromoSheet
// Dependencies: [19, 17, 21, 5009, 575, 5253, 16913, 10817, 1114, 16915, 5629, 2]
// Exports: default

// Module 16914 (BountiesNuxPromoSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import PromoSheet2 from "PromoSheet" /* 10817 */;
import openBountiesNuxPromoSheet from "openBountiesNuxPromoSheet" /* 16913 */;
import BountiesPosterSpotIllustration from "BountiesPosterSpotIllustration" /* 16915 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { illustrationContainer: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_12 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/quests/native/BountiesNuxPromoSheet.tsx");

export default function BountiesNuxPromoSheet() {
  let intl3;
  const tmp = closure_6();
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(openBountiesNuxPromoSheet.PROMO_SHEET_KEY);
  }, []);
  const PromoSheet = PromoSheet2.PromoSheet;
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  ({ style: tmp.illustrationContainer, children: jsx(BountiesPosterSpotIllustration.BountiesPosterSpotIllustration, { width: 273, height: 205 }) });
  ({ grow: true, size: "lg", variant: "primary", text: intl3.string(intl4.t.cpT0Cq), onPress: callback });
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  return <PromoSheet gradientColor="purple" title={intl.string(intl4.t.DDpHZG)} description={intl2.string(intl4.t.aC3Dwj)} illustration={null} actions={null} />;
};
