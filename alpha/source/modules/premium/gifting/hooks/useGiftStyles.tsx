// Module ID: 11145
// Function ID: 11146
// Name: useGiftStyles
// Dependencies: [1389, 2]
// Exports: useGiftStyles

// Module 11145 (useGiftStyles)
import PremiumConstants from "PremiumConstants" /* 1389 */;
import size from "module_2" /* 2 */;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
}
