// Module ID: 10545
// Function ID: 10546
// Name: useGiftStyles
// Dependencies: [1386, 2]
// Exports: useGiftStyles

// Module 10545 (useGiftStyles)
import PremiumConstants from "PremiumConstants" /* 1386 */;
import size from "module_2" /* 2 */;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
}
