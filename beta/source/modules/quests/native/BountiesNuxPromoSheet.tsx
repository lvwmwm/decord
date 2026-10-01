// Module ID: 14598
// Function ID: 14599
// Name: BountiesNuxPromoSheet
// Dependencies: [19, 17, 21, 4836, 576, 4800, 14597, 9691, 1115, 14599, 5281, 2]
// Exports: default

// Module 14598 (BountiesNuxPromoSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import PromoSheet2 from "PromoSheet" /* 9691 */;
import openBountiesNuxPromoSheet from "openBountiesNuxPromoSheet" /* 14597 */;
import BountiesPosterSpotIllustration from "BountiesPosterSpotIllustration" /* 14599 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
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
